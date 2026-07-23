import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const root = process.cwd();
const outputDirectory = join(root, 'data');
const outputFile = join(outputDirectory, 'site-search-index.json');
const ignoredDirectories = new Set(['.git', '.vscode', '.agents', 'node_modules', 'data', 'tools']);

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        files.push(...await findHtmlFiles(fullPath));
      }
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html') && entry.name !== 'search.html') {
      files.push(fullPath);
    }
  }
  return files;
}

function decodeHtml(text) {
  return text
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)));
}

function textFromHtml(html) {
  return decodeHtml(
    html
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
  ).replace(/\s+/g, ' ').trim();
}

function titleFromHtml(html, fallback) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? textFromHtml(match[1]) : fallback.replace(/\.html$/i, '');
}

const htmlFiles = await findHtmlFiles(root);
const pages = [];

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const path = relative(root, file).split(sep).join('/');
  pages.push({
    title: titleFromHtml(html, path.split('/').at(-1)),
    path,
    content: textFromHtml(html)
  });
}

pages.sort((a, b) => a.path.localeCompare(b.path, 'zh-Hant'));
await mkdir(outputDirectory, { recursive: true });
await writeFile(outputFile, JSON.stringify({ generatedAt: new Date().toISOString(), pages }));
console.log(`已建立搜尋索引：${pages.length} 個網頁 → ${relative(root, outputFile)}`);
