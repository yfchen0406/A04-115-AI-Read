(()=>{
  const $=id=>document.getElementById(id);
  const audio=$('narration'), image=$('scene-image'), stage=$('stage'), caption=$('caption'), poem=$('poem-overlay');
  const timeLabel=(s)=>{s=Math.max(0,s);return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(Math.floor(s%60)).padStart(2,'0')}`};
  const poemLines={
    S023:['重重疊疊上瑤臺，','幾度呼童掃不開。'],S024:['剛被太陽收拾去，','卻教明月送將來。'],
    S026:['重重疊疊上瑤臺，'],S027:['重重疊疊上瑤臺，'],S028:['重重疊疊上瑤臺，'],
    S030:['幾度呼童掃不開。'],S031:['幾度呼童掃不開。'],S034:['剛被太陽收拾去，'],S036:['剛被太陽收拾去，'],
    S037:['卻教明月送將來。'],S038:['卻教明月送將來。'],S067:['剛被太陽收拾去，'],S068:['卻教明月送將來。']
  };
  const originalEnd={startMs:373184,endMs:379900,text:'當影子掃不開，先抬頭看看光從哪裡來。'};
  const effectNames=['掃帚近推','影紋斜移','掃影反向側移','夕照漸暗','月色升亮','翻頁微移','版本分光','書籤枝影輕擺','指尖聚焦','合卷轉向','長廊緩揭','花枝輕搖','掃動橫移','夕陽沉降','月色浮升','花影爬階','拾級仰推','反覆掃動','影子細節推近','落日遠引','月光平移','庭院微環視','影紋漫行','水光明暗','墨色柔化','枝葉落影','紙面回拉','視線微漂','窗框揭景','粉筆光感','紙頁緩移','資料夾聚焦','線索牽引','雙方視線漂移','門框推進','兩路回望','安靜收束','晨昏換光','回到花影','夕光退場','月影再現','結尾光暈','定格呼吸'];
  let timeline,cues,currentScene=-1,lastCue='';
  const sceneAt=ms=>{let lo=0,hi=timeline.scenes.length-1;while(lo<=hi){const mid=(lo+hi)>>1,s=timeline.scenes[mid];if(ms<s.startMs)hi=mid-1;else if(ms>=s.endMs)lo=mid+1;else return mid}return Math.max(0,Math.min(timeline.scenes.length-1,lo))};
  const cueAt=ms=>cues.find(c=>ms>=c.startMs&&ms<c.endMs);
  const render=()=>{
    if(!timeline)return;
    const ms=Math.min(timeline.durationMs,Math.round((audio.currentTime||0)*1000)),idx=sceneAt(ms),scene=timeline.scenes[idx],cue=cueAt(ms);
    if(idx!==currentScene){currentScene=idx;stage.dataset.effect=scene.id.slice(-2);image.src=`./assets/images/IMG${scene.id}.webp`;image.alt=`IMG${scene.id}｜${effectNames[idx]}｜${scene.chapter}`;$('chapter-label').textContent=scene.chapterTitle||scene.chapter||'';}
    const sceneDuration=Math.max(.01,(scene.endMs-scene.startMs)/1000),sceneProgress=Math.max(0,Math.min(1,(ms-scene.startMs)/(scene.endMs-scene.startMs)));
    image.style.animationDuration=`${sceneDuration}s`;image.style.animationDelay=`-${(sceneDuration*sceneProgress).toFixed(3)}s`;image.style.animationPlayState=audio.paused?'paused':'running';
    if(cue?.id!==lastCue){lastCue=cue?.id||'';caption.textContent=cue?.text||'';}
    caption.hidden=!$('captions-toggle').checked;
    let lines=cue&&poemLines[cue.id];
    if(ms>=originalEnd.startMs&&ms<originalEnd.endMs)lines=[originalEnd.text];
    poem.innerHTML=lines?lines.map(line=>`<span>${line}</span>`).join(''):'';
    $('current-time').textContent=timeLabel(ms/1000);$('seek').value=String(ms/1000);
    const playLabel=$('play').querySelector('.play-label');
    const ended=ms>=timeline.durationMs;
    playLabel.textContent=audio.paused?(ended?'重新播放':'播放'):'暫停';
    $('play').setAttribute('aria-label',playLabel.textContent);
    $('play').classList.toggle('is-playing',!audio.paused);
    const chapterIndex=Math.min(timeline.chapters.length-1,Math.max(0,timeline.chapters.findIndex(ch=>ms>=ch.startMs&&ms<ch.endMs)));
    $('previous-scene').disabled=idx===0;
    $('next-scene').disabled=idx>=timeline.scenes.length-1;
    $('previous-chapter').disabled=chapterIndex===0;
    $('next-chapter').disabled=chapterIndex>=timeline.chapters.length-1;
    $('mute').textContent=audio.muted?'取消靜音':'靜音';
    $('volume').value=String(audio.volume);
  };
  const seekTo=seconds=>{audio.currentTime=Math.max(0,Math.min(timeline.durationSeconds,seconds));render()};
  const boot=async()=>{
    try{
      const embedded=window.MOTION_DATA;
      if(!embedded?.timeline||!embedded?.captions)throw Error('Embedded motion data is unavailable');
      timeline=embedded.timeline;cues=embedded.captions.cues||embedded.captions;audio.volume=.85;$('duration').textContent=timeLabel(timeline.durationSeconds);$('seek').max=String(timeline.durationSeconds);
      $('chapters').innerHTML=timeline.chapters.map(ch=>`<button type="button" data-time="${ch.startMs/1000}">${ch.displayTitle||ch.title}</button>`).join('');
      $('chapters').addEventListener('click',e=>{const b=e.target.closest('button[data-time]');if(b)seekTo(Number(b.dataset.time))});
      $('play').addEventListener('click',()=>{
        if(audio.paused){if(audio.currentTime>=timeline.durationSeconds)audio.currentTime=0;audio.play().catch(()=>{$('status').textContent='瀏覽器封鎖了本機音訊；請改以本機 HTTP 方式開啟此網站。'});}
        else audio.pause();
      });
      $('restart').addEventListener('click',()=>{seekTo(0);audio.play().catch(()=>{$('status').textContent='瀏覽器封鎖了本機音訊；請改以本機 HTTP 方式開啟此網站。'});});
      $('previous-scene').addEventListener('click',()=>{const i=sceneAt(Math.round(audio.currentTime*1000));if(i>0)seekTo(timeline.scenes[i-1].startMs/1000)});
      $('next-scene').addEventListener('click',()=>{const i=sceneAt(Math.round(audio.currentTime*1000));if(i<timeline.scenes.length-1)seekTo(timeline.scenes[i+1].startMs/1000)});
      $('previous-chapter').addEventListener('click',()=>{const i=timeline.chapters.findIndex(ch=>audio.currentTime*1000>=ch.startMs&&audio.currentTime*1000<ch.endMs);if(i>0)seekTo(timeline.chapters[i-1].startMs/1000)});
      $('next-chapter').addEventListener('click',()=>{const i=timeline.chapters.findIndex(ch=>audio.currentTime*1000>=ch.startMs&&audio.currentTime*1000<ch.endMs);if(i>=0&&i<timeline.chapters.length-1)seekTo(timeline.chapters[i+1].startMs/1000)});
      $('mute').addEventListener('click',()=>{audio.muted=!audio.muted;render()});
      $('seek').addEventListener('input',e=>seekTo(Number(e.target.value)));
      $('volume').addEventListener('input',e=>{audio.volume=Number(e.target.value);if(audio.volume>0)audio.muted=false;render()});
      $('captions-toggle').addEventListener('change',render);
      audio.addEventListener('timeupdate',render);audio.addEventListener('seeked',render);audio.addEventListener('play',render);audio.addEventListener('pause',render);audio.addEventListener('ended',render);
      audio.addEventListener('error',()=>{$('status').textContent='旁白音檔載入失敗，請確認 assets/audio/narration.mp3 存在。'});
      $('loading').hidden=true;render();
    }catch(err){$('loading').textContent='時間軸或字幕資料載入失敗，請確認網站資料夾完整。';$('status').textContent='無法載入同步資料。';}
  };
  boot();
})();
