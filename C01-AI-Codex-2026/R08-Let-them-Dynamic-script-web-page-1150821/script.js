const versions = [
  { number:"01", title:"V2｜原始架構版", folder:"隨他們去-男聲動態閱讀-v2架構版", packageFolder:"v2", description:"以 Q 版人物為主角，完整呈現 V2 動態閱讀舞台與原始版本視覺。", meta:"126 張 WebP｜11 段旁白", youtubeUrl:"https://youtu.be/FjqkpmYmmWI" },
  { number:"02", title:"V3｜多啦A夢版", folder:"隨他們去-V3多啦A夢-v2架構版", packageFolder:"v3-doraemon", description:"以明亮 3D 多啦A夢插畫搭配同一份劇本、字幕與 YunJhe 男聲旁白。", meta:"126 張 WebP｜11 段旁白", youtubeUrl:"https://youtu.be/ntTH60jQyuI" },
  { number:"03", title:"V4｜Totoro 版", folder:"隨他們去-V4Totoro-v2架構版", packageFolder:"v4-totoro", description:"以溫暖明亮的 Totoro 閱讀場景，保留相同的動態閱讀與旁白體驗。", meta:"126 張 WebP｜11 段旁白", youtubeUrl:"https://youtu.be/tACGAF1ylEE" }
];

// 上傳包的 index.html 位於 ZIP 根目錄，部署後固定使用 ZIP 內的 versions/ 路徑。
const isPackage = true;
const grid = document.querySelector("#versionGrid");
const rootPath = isPackage ? "versions/" : "../";

grid.innerHTML = versions.map(version => {
  const image = isPackage ? `${rootPath}${version.packageFolder}/assets/images/timeline-001.webp` : `${rootPath}${version.folder}/assets/images/timeline-001.webp`;
  const link = isPackage ? `${rootPath}${version.packageFolder}/index.html` : `${rootPath}${version.folder}/index.html`;
  const youtubeLabel = version.title.split("｜")[0];
  const youtubeLink = version.youtubeUrl ? `<a class="version-youtube-link" href="${version.youtubeUrl}" target="_blank" rel="noopener noreferrer">觀看 ${youtubeLabel} YouTube 影片 ↗</a>` : "";
  return `<article class="version-card"><img class="version-image" src="${image}" alt="${version.title}代表圖片" loading="lazy"><div class="version-body"><span class="version-number">VERSION ${version.number}</span><h3 class="version-title">${version.title}</h3><p class="version-description">${version.description}</p><p class="version-meta">${version.meta}</p><a class="version-link" href="${link}">進入此版本閱讀 →</a>${youtubeLink}</div></article>`;
}).join("");
