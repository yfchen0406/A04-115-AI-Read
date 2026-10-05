/* 後續只要在這份設定填入網址；留空時按鈕會提示「網址待補」。 */
window.SERIES_LINKS = {
  ep00: {
    web: "",
    ytCaption: "",
    ytClean: "",
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
    ytCaption: "",
    ytClean: "",
  },
  ep05: { web: "", ytCaption: "", ytClean: "" },
  ep06: { web: "", ytCaption: "", ytClean: "" },
  ep07: { web: "", ytCaption: "", ytClean: "" },
  ep08: { web: "", ytCaption: "", ytClean: "" },
  ep09: { web: "", ytCaption: "", ytClean: "" },
  ep10: { web: "", ytCaption: "", ytClean: "" },
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
