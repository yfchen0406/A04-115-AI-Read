function getTimeInZone(timeZone, now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);

  return Object.fromEntries(
    parts
      .filter(({ type }) => ["hour", "minute", "second"].includes(type))
      .map(({ type, value }) => [type, value]),
  );
}

async function updateExchangeRate(display, frequency) {
  const sources = [
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/twd.min.json",
    "https://latest.currency-api.pages.dev/v1/currencies/twd.min.json",
  ];

  for (const source of sources) {
    try {
      const response = await fetch(source, { cache: "no-store" });
      if (!response.ok) continue;
      const data = await response.json();
      const rate = Number(data.twd?.jpy);
      if (!Number.isFinite(rate)) continue;

      display.textContent = `NT$1 ≈ ¥${rate.toFixed(2)}`;
      display.title = `資料日期：${data.date || "最新資料"}；每日更新的參考匯率，實際兌換金額依銀行或兌換處牌告為準。`;
      frequency.textContent = "日更";
      return;
    } catch {
      // Continue with the fallback data mirror.
    }
  }

  display.textContent = "暫無資料";
  display.title = "目前無法連線取得匯率，請稍後重新整理。";
  frequency.textContent = "";
}

function mountTravelTime() {
  const topbar = document.querySelector(".topbar");
  if (!topbar || topbar.querySelector(".travel-status")) return;

  const status = document.createElement("div");
  status.className = "travel-status";
  const timer = document.createElement("div");
  timer.className = "trip-countdown";
  timer.setAttribute("role", "group");
  timer.setAttribute("aria-label", "台灣與日本目前時間");
  timer.innerHTML = `<span class="clock-zone"><small class="clock-zone-label">台灣時間：</small><time data-clock="taiwan">00:00:00</time></span><span class="clock-divider" aria-hidden="true"></span><span class="clock-zone"><small class="clock-zone-label">日本時間：</small><time data-clock="japan">00:00:00</time></span>`;

  const exchange = document.createElement("span");
  exchange.className = "exchange-rate";
  exchange.setAttribute("aria-label", "新台幣兌日圓參考匯率");
  exchange.innerHTML = `<small class="exchange-rate-label">匯率</small><strong data-exchange-rate>載入中</strong><small class="exchange-rate-frequency" data-exchange-frequency></small>`;
  status.append(timer, exchange);
  topbar.querySelector("nav")?.before(status);

  const update = () => {
    const now = new Date();
    const taiwan = getTimeInZone("Asia/Taipei", now);
    const japan = getTimeInZone("Asia/Tokyo", now);
    timer.querySelector('[data-clock="taiwan"]').textContent = `${taiwan.hour}:${taiwan.minute}:${taiwan.second}`;
    timer.querySelector('[data-clock="japan"]').textContent = `${japan.hour}:${japan.minute}:${japan.second}`;
  };
  update();
  window.setInterval(update, 1000);
  const rateDisplay = exchange.querySelector("[data-exchange-rate]");
  const frequency = exchange.querySelector("[data-exchange-frequency]");
  updateExchangeRate(rateDisplay, frequency);
  window.setInterval(() => updateExchangeRate(rateDisplay, frequency), 24 * 60 * 60 * 1000);
}

mountTravelTime();
