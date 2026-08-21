# S00 輸入與輸出契約

## 建議輸入

```text
project-input/
├─ A01-完整內容大綱.docx
├─ A02-完整動態劇本.docx
├─ A03-完整旁白稿.docx
├─ A04-完整分鏡卡.docx
└─ character-reference.png
```

檔名可以不同，但需要在盤點報告中明確標註每份文件的角色。若有 `audio/`，旁白檔名應能依段落排序，例如 `narration-01.mp3` 至 `narration-11.mp3`。

## 成果結構

```text
project/
├─ originals/                         # 使用者原始檔；只讀保留
├─ analysis/                          # 分析、圖片提示詞、網頁規格
├─ V2-.../                            # 完整離線動態閱讀網站與影片
│  ├─ index.html
│  ├─ assets/images/*.webp
│  ├─ audio/*.mp3
│  └─ video-export/*.mp4
├─ V3-.../
├─ V4-.../
├─ 三版本統整入口/
│  ├─ index.html
│  ├─ assets/cover-4x3.png
│  └─ web-upload-package/
└─ 三版本動態閱讀整合上傳包.zip
```

## 不可變條件

- 四份 Word 的內容不增、不減、不改寫。
- 三個版本共享文字、旁白、字幕與時間軸，只變更視覺素材與畫風。
- 所有網站路徑使用相對路徑；上傳包入口固定指向 `versions/`。
- 每個版本的影片和網站必須使用同一版圖片與音訊；不要混入其他專案檔案。
