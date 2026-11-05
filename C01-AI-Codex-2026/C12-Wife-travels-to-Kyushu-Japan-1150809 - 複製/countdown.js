const departureDate = new Date(2026, 10, 14, 0, 0, 0);

function getCalendarCountdown(now, target) {
  if (now >= target) return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
  let months = (target.getFullYear() - now.getFullYear()) * 12 + target.getMonth() - now.getMonth();
  let anchor = new Date(now);
  anchor.setMonth(anchor.getMonth() + months);
  if (anchor > target) {
    months -= 1;
    anchor = new Date(now);
    anchor.setMonth(anchor.getMonth() + months);
  }
  let remaining = target - anchor;
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;
  const days = Math.floor(remaining / day);
  remaining -= days * day;
  const hours = Math.floor(remaining / hour);
  remaining -= hours * hour;
  const minutes = Math.floor(remaining / minute);
  remaining -= minutes * minute;
  return { months, days, hours, minutes, seconds: Math.floor(remaining / 1000), ended: false };
}

function renderCountdown(countdown) {
  const values = countdown.ended ? { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 } : countdown;
  ['months', 'days', 'hours', 'minutes', 'seconds'].forEach((name) => {
    const value = document.querySelector(`[data-countdown="${name}"]`);
    if (value) value.textContent = String(values[name]).padStart(2, '0');
  });
  const timer = document.querySelector('.trip-countdown');
  if (timer) {
    timer.setAttribute('aria-label', countdown.ended ? '旅程已開始' : `距離 2026 年 11 月 14 日出發還有 ${values.months} 個月 ${values.days} 天 ${values.hours} 小時 ${values.minutes} 分 ${values.seconds} 秒`);
    timer.classList.toggle('is-ended', countdown.ended);
  }
}

function mountCountdown() {
  const topbar = document.querySelector('.topbar');
  if (!topbar || topbar.querySelector('.trip-countdown')) return;
  const timer = document.createElement('div');
  timer.className = 'trip-countdown';
  timer.setAttribute('role', 'timer');
  timer.setAttribute('aria-live', 'polite');
  timer.innerHTML = `<span class="countdown-label">距離出發</span><span class="countdown-units" aria-hidden="true"><span class="countdown-unit"><strong data-countdown="months">00</strong><small>月</small></span><span class="countdown-unit"><strong data-countdown="days">00</strong><small>日</small></span><span class="countdown-unit"><strong data-countdown="hours">00</strong><small>時</small></span><span class="countdown-unit"><strong data-countdown="minutes">00</strong><small>分</small></span><span class="countdown-unit"><strong data-countdown="seconds">00</strong><small>秒</small></span></span>`;
  topbar.querySelector('nav')?.before(timer);
  const update = () => renderCountdown(getCalendarCountdown(new Date(), departureDate));
  update();
  window.setInterval(update, 1000);
}

mountCountdown();
