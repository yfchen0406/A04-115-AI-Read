# A&P Dynamic Story Website

Open index.html to view the episode cover, then select 「進入動態敘事」. The player and all assets use relative paths and work offline.

## YouTube links

In the root index.html, replace the two href values containing REPLACE_WITH_VIDEO_ID_1 and REPLACE_WITH_VIDEO_ID_2 with the complete YouTube URLs. Each button opens its link in a new tab.

## Package contents

- cover.webp: episode cover shown before entering the player.
- website/index.html: dynamic narration player based on the final A03 Nokia website structure.
- website/images/IMG001.webp through IMG078.webp: generated A&P scene illustrations.
- website/audio/narration.mp3 and website/subtitles/narration.srt: narration and subtitles.
- English folder and asset names throughout; no server or package installation is required.


## 動態特效

逐鏡光影與重點引文均由播放器時間同步。要關閉這一批新增特效，將 js/shot-effects.js 的 SHOT_EFFECTS_CONFIG.enabled 設為 false；此開關同時停用光影與引文疊字。原圖、旁白、字幕與時間軸資料未變更。
