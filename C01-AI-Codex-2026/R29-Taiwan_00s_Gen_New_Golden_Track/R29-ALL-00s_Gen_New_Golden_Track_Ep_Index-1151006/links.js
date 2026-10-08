/* 後續只要在這份設定填入網址；留空時按鈕會提示「網址待補」。 */
window.SERIES_LINKS = {
  ep00: {
    web: "/C01-AI-Codex-2026/R29-Taiwan_00s_Gen_New_Golden_Track/R29-00-00s_Gen_New_Golden_Track_10_Eps_Summary-1151006/index.html",
    ytCaption: "https://youtu.be/GcqUmaf3ERE",
    ytClean: "https://youtu.be/ZBN2MJVd0_4",
  },
  ep01: {
    web: "/C01-AI-Codex-2026/R29-Taiwan_00s_Gen_New_Golden_Track/R29-01-Taiwan_10_00s_Gen_2030_AI_Work_Norms-1151005/index.html",
    ytCaption: "https://youtu.be/yyvFhMmIHLQ",
    ytClean: "https://youtu.be/XOSHlXa_GjU",
  },
  ep02: {
    web: "/C01-AI-Codex-2026/R29-Taiwan_00s_Gen_New_Golden_Track/R29-02-Taiwan_10_00s_Gen_Self-Learning_Portals-1151005/index.html",
    ytCaption: "https://youtu.be/u8KnV0NH1f4",
    ytClean: "https://youtu.be/Wxbi9WljPW0",
  },
  ep03: {
    web: "/C01-AI-Codex-2026/R29-Taiwan_00s_Gen_New_Golden_Track/R29-03-Taiwan_10_New_Youth_Jobs_2030-1151005/index.html",
    ytCaption: "https://youtu.be/opGONhFaqrg",
    ytClean: "https://youtu.be/4Vqn8Gprjn0",
  },
  ep04: {
    web: "/C01-AI-Codex-2026/R29-Taiwan_00s_Gen_New_Golden_Track/R29-04-Taiwan_10_00s_Gen_Career_Rules_End-1151005/index.html",
    ytCaption: "https://youtu.be/l1s_z_9mDpE",
    ytClean: "https://youtu.be/dMMM-U-7hsY",
  },
  ep05: {
    web: "/C01-AI-Codex-2026/R29-Taiwan_00s_Gen_New_Golden_Track/R29-05-Taiwan_10_00s_Gen_Low-Barrier_Startup-1151005/index.html",
    ytCaption: "https://youtu.be/tz03Cy_DD0I",
    ytClean: "https://youtu.be/tz03Cy_DD0I",
  },
  ep06: {
    web: "/C01-AI-Codex-2026/R29-Taiwan_00s_Gen_New_Golden_Track/R29-06-Taiwan_10_00s_Gen_Global_Life_Options-1151006/index.html",
    ytCaption: "https://youtu.be/6Zq8-RRGvjI",
    ytClean: "https://youtu.be/5xUk7uBKDx8",
  },
  ep07: {
    web: "/C01-AI-Codex-2026/R29-Taiwan_00s_Gen_New_Golden_Track/R29-07-Taiwan_10_00s_Gen_30_Demographic_Dividend-1151006/index.html",
    ytCaption: "https://youtu.be/dxPt-EdSm4k",
    ytClean: "https://youtu.be/5ZXaFrcwH7w",
  },
  ep08: {
    web: "/C01-AI-Codex-2026/R29-Taiwan_00s_Gen_New_Golden_Track/R29-08-Taiwan_10_00s_Gen_Youth_Longevity_Pioneers-1151006/index.html",
    ytCaption: "https://youtu.be/18TQesGq94c",
    ytClean: "https://youtu.be/Ry3PO2zK-1c",
  },
  ep09: {
    web: "/C01-AI-Codex-2026/R29-Taiwan_00s_Gen_New_Golden_Track/R29-09-Taiwan_10_00s_Gen_2040_Green_Industry-1151006/index.html",
    ytCaption: "https://youtu.be/gTSb_SVtqkc",
    ytClean: "https://youtu.be/A6FcD5aWg1o",
  },
  ep10: {
    web: "/C01-AI-Codex-2026/R29-Taiwan_00s_Gen_New_Golden_Track/R29-10-Taiwan_10_00s_Gen_Best_Era_Opportunities-1151006/index.html",
    ytCaption: "https://youtu.be/3dif7G-xRXk",
    ytClean: "https://youtu.be/glxgOzrPXO4",
  },
};
(function(){
  function init(){
    document.querySelectorAll('[data-link-key]').forEach(function(a){
      var parts=a.dataset.linkKey.split('-');
      var ep=parts[0], kind=parts.slice(1).join('-');
      var key=kind==='web'?'web':(kind==='yt-caption'?'ytCaption':'ytClean');
      var url=(window.SERIES_LINKS[ep]&&window.SERIES_LINKS[ep][key]||'').trim();
      if(url){a.href=url;a.removeAttribute('data-url-placeholder');a.removeAttribute('aria-disabled');a.target='_blank';a.rel='noopener noreferrer';}
      else {a.href='#';a.dataset.urlPlaceholder='true';a.setAttribute('aria-disabled','true');}
    });
    document.addEventListener('click',function(e){
      var a=e.target.closest('[data-link-key]'); if(!a)return;
      if(a.dataset.urlPlaceholder==='true'){e.preventDefault();var t=document.getElementById('toast');if(t){t.textContent='連結網址將於後續補上';t.classList.add('show');setTimeout(function(){t.classList.remove('show')},1800);}}
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
