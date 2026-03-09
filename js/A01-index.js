// 第一階段icon動畫(111.07.30以前)
// var tl = gsap.timeline();
//sequenced one-after-the-other
gsap.fromTo('#index-1', { duration: 0, scale: 0, rotation: -720 }, { duration: 3, scale: 1, rotation: 0, })
gsap.fromTo('#index-2', { duration: 0, scale: 0.5, rotation: 720 }, { duration: 3, scale: 1, rotation: 0 })
gsap.fromTo('#index-3', { duration: 0, scale: 1, rotation: -720 }, { duration: 3, scale: 1, rotation: 0 })
gsap.fromTo('#index-3A', { duration: 0, scale: 1, rotation: -720 }, { duration: 3, scale: 1, rotation: 0 })
gsap.fromTo('#index-4', { duration: 0, scale: 0, rotation: -720 }, { duration: 3, scale: 1, rotation: 0 })
// gsap.fromTo('#index-5', { duration: 0, scale: 0.5, rotation: 720 }, { duration: 3, scale: 1, rotation: 0 })
gsap.to('#index-5', { duration: 1, x: 100 })
gsap.to('#index-5', { duration: 1, x: -100, delay: 1 })
gsap.to('#index-5', { duration: 1, x: 0, delay: 2 })
gsap.fromTo('#index-6', { duration: 0, scale: 1, rotation: -720 }, { duration: 3, scale: 1, rotation: 0 })
gsap.fromTo('#index-6A', { duration: 0, scale: 1, rotation: -720 }, { duration: 3, scale: 1, rotation: 0 })
gsap.fromTo('#index-7', { duration: 0, scale: 0, rotation: -720 }, { duration: 3, scale: 1, rotation: 0 })
gsap.fromTo('#index-8', { duration: 0, scale: 0.5, rotation: 720 }, { duration: 3, scale: 1, rotation: 0 })
gsap.fromTo('#index-9', { duration: 0, scale: 1, rotation: -720 }, { duration: 3, scale: 1, rotation: 0 })
gsap.fromTo('#index-A', { duration: 0, scale: 0, rotation: -720 }, { duration: 3, scale: 1, rotation: 0, })
gsap.fromTo('#index-17', { duration: 0, scale: 0, rotation: -720 }, { duration: 3, scale: 1, rotation: 0, })


// 這個變數是處理音樂控制的全域變數!重要
var globalAudio = null;



// js 撥放音樂事件，滑鼠移入，滑鼠移入撥放，並且循環撥放，有用到全域變數
function indexMouseenter(par1, par2, flag) {
  gsap.fromTo(par1, { duration: 0, scale: 0, rotation: -720 }, { duration: 3, scale: 1, rotation: 0 })
  globalAudio = document.createElement("audio");
  globalAudio.src = par2;
  globalAudio.loop = true;  // loop 為重複撥放
  globalAudio.play();

  // 變數 flag 沒用到

}

// js 停止撥放音樂事件，滑鼠移出，有用到全域變數
function indexMouseout(par1) {
  gsap.fromTo(par1, { duration: 0, scale: 0, rotation: -720 }, { duration: 3, scale: 1, rotation: 0 })
  // 停止播放
  globalAudio.pause();
  globalAudio.load();
}




 // ***************************************************************
  // 第二階段icon動畫(111.08.02，改跑馬燈動畫)
  // gsap.registerPlugin(SplitText);
