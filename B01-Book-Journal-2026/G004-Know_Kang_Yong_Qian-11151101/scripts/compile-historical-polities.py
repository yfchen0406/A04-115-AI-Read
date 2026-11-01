#!/usr/bin/env python3
"""Compile the curated, dated Cliopatria rows used by the historical map.

Download the pinned CC BY 4.0 source archive to
data/source-cache/cliopatria-v0.2.1.geojson.zip before running this script.
The large source GeoJSON is streamed; only the project's curated rows are kept
in memory and written to data/maps/historical-polities.geojson.
"""

from __future__ import annotations

import hashlib
import io
import json
import zipfile
from pathlib import Path
from typing import Iterator


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data/source-cache/cliopatria-v0.2.1.geojson.zip"
OUTPUT = ROOT / "data/maps/historical-polities.geojson"
EXPECTED_SHA256 = "e10a4e429fca708788ff9e7572a95fce801fae55852d217cffabc1c59cd4eed4"
SOURCE_URL = "https://github.com/Seshat-Global-History-Databank/cliopatria"
SOURCE_VERSION = "v0.2.1; commit 5f433377139a6eeaeacbdc894b70f8805b72c8b5"

QING = {"Qing Dynasty"}
AMERICAS = {
    "British Colonial Empire",
    "British Empire",
    "English Colonial Empire",
    "New France",
    "New Netherland",
    "Spanish Empire",
    "Portuguese Empire",
    "Haudenosaunee",
    "United States of America",
    "Vermont Republic",
}
EUROPE = {
    "Kingdom of England",
    "Kingdom of Great Britain",
    "Kingdom of France",
    "French First Republic",
    "French Directory",
    "Dutch Republic",
    "Batavian Republic",
    "Kingdom of Spain",
    "Brandenburg-Prussia",
    "Kingdom of Prussia",
    "Habsburg Monarchy",
    "Holy Roman Empire",
    "Holy Roman Empire Minor States",
    "Tsardom of Russia",
    "Russian Empire",
    "Denmark-Norway",
    "Swedish Empire",
    "Polish-Lithuanian Commonwealth",
    "Ottoman Empire",
    "Kingdom of Portugal",
    "Papal States",
    "Duchy of Bavaria",
    "Electorate of Saxony",
    "Electorate of Hanover",
    "Kingdom of Sardinia",
    "Republic of Venice",
    "Swiss Confederation",
}
SELECTED = QING | AMERICAS | EUROPE

CHINESE_NAMES = {
    "Qing Dynasty": "清朝",
    "British Colonial Empire": "英國殖民帝國（來源政體範圍）",
    "British Empire": "大英帝國",
    "English Colonial Empire": "英格蘭殖民帝國",
    "New France": "新法蘭西",
    "New Netherland": "新尼德蘭",
    "Dutch Republic": "荷蘭共和國",
    "Spanish Empire": "西班牙帝國",
    "Portuguese Empire": "葡萄牙帝國",
    "Haudenosaunee": "豪德諾索尼聯盟（易洛魁聯盟）",
    "United States of America": "美利堅合眾國",
    "Vermont Republic": "佛蒙特共和國",
    "Kingdom of England": "英格蘭王國",
    "Kingdom of Great Britain": "大不列顛王國",
    "Kingdom of France": "法蘭西王國",
    "French First Republic": "法蘭西第一共和國",
    "French Directory": "法蘭西督政府",
    "Batavian Republic": "巴達維亞共和國",
    "Kingdom of Spain": "西班牙王國",
    "Brandenburg-Prussia": "勃蘭登堡－普魯士",
    "Kingdom of Prussia": "普魯士王國",
    "Habsburg Monarchy": "哈布斯堡君主國",
    "Holy Roman Empire": "神聖羅馬帝國",
    "Holy Roman Empire Minor States": "神聖羅馬帝國諸邦（來源分類）",
    "Tsardom of Russia": "俄羅斯沙皇國",
    "Russian Empire": "俄羅斯帝國",
    "Denmark-Norway": "丹麥－挪威聯合王國",
    "Swedish Empire": "瑞典帝國",
    "Polish-Lithuanian Commonwealth": "波蘭立陶宛聯邦",
    "Ottoman Empire": "鄂圖曼帝國",
    "Kingdom of Portugal": "葡萄牙王國",
    "Papal States": "教皇國",
    "Duchy of Bavaria": "巴伐利亞公國",
    "Electorate of Saxony": "薩克森選侯國",
    "Electorate of Hanover": "漢諾威選侯國",
    "Kingdom of Sardinia": "薩丁尼亞王國",
    "Republic of Venice": "威尼斯共和國",
    "Swiss Confederation": "瑞士邦聯",
}

ROLE_LABELS = {
    "Qing Dynasty": ("清代政體範圍（來源所繪）", "清朝", "approximate polity extent"),
    "Haudenosaunee": ("來源所繪政體範圍（非完整原住民族領域圖）", "美洲原住民族政體", "polity extent; not a complete Indigenous-territory layer"),
    "United States of America": ("來源所繪政體範圍（非十三殖民地行政界線）", "獨立後政體", "approximate polity extent"),
    "Vermont Republic": ("來源所繪政體範圍", "美洲政體", "approximate polity extent"),
}


def iter_geojson_features(stream: io.TextIOBase) -> Iterator[dict]:
    """Yield one Feature at a time from a large FeatureCollection JSON file."""
    decoder = json.JSONDecoder()
    buffer = ""
    position = 0
    started = False

    while not started:
        chunk = stream.read(1024 * 1024)
        if not chunk:
            raise ValueError("The source does not contain a GeoJSON features array.")
        buffer += chunk
        marker = buffer.find('"features"')
        array_start = buffer.find("[", marker) if marker >= 0 else -1
        if array_start >= 0:
            position = array_start + 1
            started = True
        elif len(buffer) > 4 * 1024 * 1024:
            buffer = buffer[-1024:]

    while True:
        while position < len(buffer) and (buffer[position].isspace() or buffer[position] == ","):
            position += 1
        if position < len(buffer) and buffer[position] == "]":
            return
        try:
            feature, end = decoder.raw_decode(buffer, position)
        except json.JSONDecodeError:
            chunk = stream.read(1024 * 1024)
            if not chunk:
                raise ValueError("The source GeoJSON ended before its features array closed.")
            buffer = buffer[position:] + chunk
            position = 0
            continue
        position = end
        yield feature
        if position > 1024 * 1024:
            buffer = buffer[position:]
            position = 0


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def compile_features() -> list[dict]:
    if not SOURCE.exists():
        raise FileNotFoundError(f"Download the pinned source archive first: {SOURCE}")
    actual_hash = sha256(SOURCE)
    if actual_hash != EXPECTED_SHA256:
        raise ValueError(f"Unexpected source archive SHA-256: {actual_hash}")

    features: list[dict] = []
    with zipfile.ZipFile(SOURCE) as archive:
        members = [name for name in archive.namelist() if name.endswith(".geojson")]
        if len(members) != 1:
            raise ValueError(f"Expected one GeoJSON in source archive; found {members}")
        with archive.open(members[0]) as source_stream:
            reader = io.TextIOWrapper(source_stream, encoding="utf-8")
            for source_feature in iter_geojson_features(reader):
                properties = source_feature.get("properties") or {}
                source_name = properties.get("Name")
                if source_name not in SELECTED or properties.get("Type") != "POLITY":
                    continue
                source_start = int(properties["FromYear"])
                source_end = int(properties["ToYear"])
                if source_start > 1799 or source_end < 1661:
                    continue

                modes = []
                if source_name in EUROPE:
                    modes.append("europe")
                if source_name in AMERICAS:
                    modes.append("americas")
                if source_name in QING:
                    modes.append("qing")
                start_year = max(1661, source_start)
                end_year = min(1799, source_end)
                note, category, control_type = ROLE_LABELS.get(
                    source_name,
                    (
                        "依 Cliopatria 對該政體所繪的領有範圍；資料集不區分事實控制與法律主權，邊界及年份均有不確定性。",
                        "歷史政體（來源分類）",
                        "source-described polity extent",
                    ),
                )
                identifier = f"cliopatria-{source_name.lower().replace(' ', '-').replace(',', '')}-{source_start}-{source_end}"
                features.append(
                    {
                        "type": "Feature",
                        "id": identifier,
                        "properties": {
                            "id": identifier,
                            "name": CHINESE_NAMES.get(source_name, source_name),
                            "polity": source_name,
                            "source_name": source_name,
                            "region": "清朝" if source_name in QING else "歐洲" if source_name in EUROPE else "美洲",
                            "display_modes": modes,
                            "start_year": start_year,
                            "end_year": end_year,
                            "source_start_year": source_start,
                            "source_end_year": source_end,
                            "date_precision": "year",
                            "control_type": control_type,
                            "confidence": "low",
                            "source_id": "cliopatria-polities",
                            "source_title": "Cliopatria, Seshat Global History Databank",
                            "source_url": SOURCE_URL,
                            "source_license": "CC BY 4.0",
                            "source_version": SOURCE_VERSION,
                            "source_area_km2": properties.get("Area"),
                            "source_wikidata": properties.get("Wikidata"),
                            "category": category,
                            "notes": note,
                            "modification_note": "僅選取原資料中目標年代的政體要素，將年份裁切至 1661–1799，並增加中文顯示名稱、地圖模式、來源與限制欄位；原始幾何未移動或重畫。",
                        },
                        "geometry": source_feature.get("geometry"),
                    }
                )
    return features


def main() -> None:
    features = compile_features()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    collection = {"type": "FeatureCollection", "features": features}
    OUTPUT.write_text(json.dumps(collection, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"Compiled {len(features)} dated polity features into {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
