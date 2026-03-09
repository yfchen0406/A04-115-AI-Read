
function updateCounter() {
  // ***********  來訪人數計數-開始 **************************
  var link = "https://api.countapi.xyz/update/jovial-pike-898228.netlify.app/0406?amount=1"
  fetch(link)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById('visits').innerHTML = data.value;
    })
  // ***********  來訪人數計數-結束 **************************

  // ###########  標籤倒數計時-開始 - 可以用每一個地方  #############################
  function show_date_time(idData, countdownData) {
    var timer = null;
    var show = document.getElementById(idData);
    var target = new Date(countdownData);
    console.log(target);
    var today = new Date();
    var timeold = (target.getTime() - today.getTime());
    var sectimeold = timeold / 1000
    var secondsold = Math.floor(sectimeold);
    var msPerDay = 24 * 60 * 60 * 1000
    var e_daysold = timeold / msPerDay
    var daysold = Math.floor(e_daysold);
    var e_hrsold = (e_daysold - daysold) * 24;
    var hrsold = Math.floor(e_hrsold);
    var e_minsold = (e_hrsold - hrsold) * 60;
    var minsold = Math.floor((e_hrsold - hrsold) * 60);
    var seconds = Math.floor((e_minsold - minsold) * 60);
    if (daysold < 0) {
      document.getElementById(idData).innerHTML = "倒數結束!";
      clearInterval(timer);
    }
    else {
      if (daysold < 10) { daysold = "0" + daysold }
      if (hrsold < 10) { hrsold = "0" + hrsold }
      if (minsold < 10) { minsold = "0" + minsold }
      if (seconds < 10) { seconds = "0" + seconds }
      show.innerHTML = "" + daysold + "：" + hrsold + "：" + minsold + "：" + seconds;
    }
  }

  // *******************************************************************************************
  // 這邊函數呼叫的寫法在setInterval內要下列方式，函數運算式，這種方法比較不習慣
  //  呼叫網頁按鈕id  乙級
  // var timer = null;
  // var show1 = document.getElementById("countdown-1");
  timer = setInterval(function () { show_date_time("countdown-1", "2022/11/15"); }, 1000);
  //  呼叫網頁按鈕id  畢業
  // timer = null;
  // var show2 = document.getElementById("countdown-2");
  timer = setInterval(function () { show_date_time("countdown-2", "2023/06/01"); }, 1000);
  //  呼叫網頁按鈕id  離開光啟
  // timer = null;
  // var show3 = document.getElementById("countdown-3");
  timer = setInterval(function () { show_date_time("countdown-3", "2023/07/31"); }, 1000);
  // ###########  標籤倒數計時-結束  #############################
}    
