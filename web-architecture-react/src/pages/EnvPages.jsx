import { CodeBlock, Tabs, Collapse, SectionTitle, Callout } from '../components/CodeBlock';

// =============== 環境安裝 - Obsidian ===============
export function ObsidianPage() {
  return (
    <>
      <div className="page-eyebrow">環境安裝與設定 / 01</div>
      <h1 className="page-title">Obsidian</h1>
      <p className="page-subtitle">
        Obsidian 是一個本機優先的 Markdown 知識庫，用來建立「程式學習筆記資料庫」非常合適。雙向連結 + 標籤讓筆記之間可以互相串連。
      </p>

      <Tabs tabs={[
        { label: "安裝步驟", badge: "Setup", content: (
          <>
            <SectionTitle hash="download">下載與安裝</SectionTitle>
            <ol>
              <li>前往官網 <a href="https://obsidian.md" target="_blank" rel="noreferrer">obsidian.md</a> 下載對應作業系統的安裝檔</li>
              <li>安裝完成後開啟 Obsidian，選擇「建立新的儲存庫（Vault）」</li>
              <li>挑一個你習慣的資料夾位置，例如 <code>~/Documents/web-notes</code></li>
              <li>建議勾選「在這個位置建立 .obsidian 設定資料夾」</li>
            </ol>

            <SectionTitle hash="folders">建議資料夾結構</SectionTitle>
            <CodeBlock lang="bash" file="vault structure" code={`web-notes/
├── 00-index.md              # 索引頁
├── 01-frontend-planning/    # 前端規劃筆記
│   ├── sitemap.md
│   └── wireframes.md
├── 02-frontend/
│   ├── html.md
│   ├── css.md
│   ├── javascript.md
│   └── react.md
├── 03-backend/
│   └── python.md
├── 04-deploy/
│   └── github-pages.md
└── assets/                  # 圖片、附件
    └── images/`} />

            <SectionTitle hash="plugins">推薦外掛</SectionTitle>
            <ul>
              <li><strong style={{color:"var(--text-0)"}}>Templater</strong> — 建立筆記模板，新增筆記時自動填入</li>
              <li><strong style={{color:"var(--text-0)"}}>Dataview</strong> — 用 SQL 風格的語法查詢筆記</li>
              <li><strong style={{color:"var(--text-0)"}}>Excalidraw</strong> — 內建手繪風白板，畫線框稿</li>
              <li><strong style={{color:"var(--text-0)"}}>Git</strong> — 自動把筆記同步到 GitHub 私人倉庫</li>
            </ul>
          </>
        )},
        { label: "筆記範例", badge: "Demo", content: (
          <>
            <p>每篇技術筆記建議用以下模板：</p>
            <CodeBlock lang="bash" file="template.md" code={`---
title: HTML 語意化標籤
tags: [html, semantic, frontend]
created: 2026-03-12
related: [[css.md]], [[accessibility.md]]
---

# HTML 語意化標籤

## 為什麼需要？
- SEO 友善
- 螢幕閱讀器可正確朗讀
- 結構清晰，未來維護容易

## 常用標籤
| 標籤 | 用途 |
| ---- | ---- |
| header | 頁首 |
| nav | 導覽 |
| main | 主要內容 |
| section | 區塊 |
| article | 文章 |

## 程式範例
\`\`\`html
<main>
  <article>
    <h1>標題</h1>
    <p>內容...</p>
  </article>
</main>
\`\`\`

## 延伸閱讀
- [[wai-aria.md]]
- [MDN: HTML elements](https://developer.mozilla.org/...)`} />

            <Callout>
              <strong>YAML Front Matter：</strong>頭尾的 <code>---</code> 區塊是筆記的「中繼資料」，Dataview 與 Templater 都會讀取，方便後續查詢與分類。
            </Callout>
          </>
        )},
        { label: "重點清單", badge: 5, content: (
          <>
            <Collapse title="01 ─ 安裝完成檢查" meta="checklist" defaultOpen>
              <ul>
                <li>✓ Obsidian 已安裝並能正常開啟</li>
                <li>✓ 已建立一個 Vault</li>
                <li>✓ 可以順利建立 / 編輯 Markdown 檔案</li>
              </ul>
            </Collapse>
            <Collapse title="02 ─ 基本快捷鍵" meta="hotkeys">
              <ul>
                <li><code>Ctrl/Cmd + N</code> — 新增筆記</li>
                <li><code>Ctrl/Cmd + O</code> — 快速開啟筆記</li>
                <li><code>Ctrl/Cmd + P</code> — 命令面板</li>
                <li><code>Ctrl/Cmd + E</code> — 切換編輯／預覽</li>
                <li><code>[[</code> — 建立雙向連結</li>
              </ul>
            </Collapse>
            <Collapse title="03 ─ Markdown 基本語法" meta="syntax">
              <ul>
                <li><code># 標題</code>、<code>## 副標</code></li>
                <li><code>**粗體**</code>、<code>*斜體*</code></li>
                <li><code>[文字](網址)</code> — 一般連結</li>
                <li><code>[[筆記名]]</code> — Obsidian 內部連結</li>
                <li><code>```html</code> — 程式碼區塊</li>
              </ul>
            </Collapse>
            <Collapse title="04 ─ 建議外掛" meta="plugins">
              <ul>
                <li>Templater / Dataview / Excalidraw / Git / Tag Wrangler</li>
              </ul>
            </Collapse>
            <Collapse title="05 ─ 同步與備份" meta="sync">
              <ul>
                <li>免費方案：Git 外掛 + GitHub 私人倉庫</li>
                <li>付費方案：Obsidian Sync（官方端對端加密）</li>
                <li>替代方案：iCloud / OneDrive / Dropbox 資料夾</li>
              </ul>
            </Collapse>
          </>
        )},
      ]} />
    </>
  );
}

// =============== 環境安裝 - VS Code ===============
export function VsCodePage() {
  return (
    <>
      <div className="page-eyebrow">環境安裝與設定 / 02</div>
      <h1 className="page-title">Visual Studio Code</h1>
      <p className="page-subtitle">
        VS Code 是目前最主流的程式碼編輯器，免費、跨平台、外掛生態系完整。我們會用它從 HTML 原型一路寫到 React 架構。
      </p>

      <Tabs tabs={[
        { label: "安裝步驟", badge: "Setup", content: (
          <>
            <SectionTitle hash="install">1 ─ 下載與安裝</SectionTitle>
            <ol>
              <li>前往官網：<a href="https://code.visualstudio.com" target="_blank" rel="noreferrer">code.visualstudio.com</a></li>
              <li>選擇版本：點擊對應作業系統的下載按鈕（<strong style={{color:"var(--text-0)"}}>Windows / macOS / Linux</strong>）</li>
              <li>執行安裝程式：</li>
            </ol>

            <Callout>
              <strong style={{color:"var(--accent-4, #ff7b72)"}}>Windows 用戶特別注意：</strong>
              安裝過程中請<strong>務必勾選</strong>「加入到 PATH」以及「將『以 Code 開啟』動作新增至 Windows 檔案總管內容功能表」。這能讓你以後在資料夾按右鍵就能直接進入開發環境。
            </Callout>

            <Callout>
              <strong>macOS 用戶：</strong>下載後將解壓縮的 <code>Visual Studio Code.app</code> 拖移至「應用程式」資料夾即可。
            </Callout>

            <SectionTitle hash="zh-tw">2 ─ 核心環境配置（中文化介面）</SectionTitle>
            <p>開啟 VS Code 後，建議先進行以下基本設定，把介面切成中文：</p>
            <div className="tbl-wrap">
              <table className="ref-table">
                <thead><tr><th>步驟</th><th>操作</th></tr></thead>
                <tbody>
                  <tr><td>① </td><td>點擊左側工具列最下方的「<strong style={{color:"var(--text-0)"}}>Extensions（擴充功能）</strong>」圖示（方塊形狀）</td></tr>
                  <tr><td>② </td><td>在搜尋框輸入 <code>Chinese</code></td></tr>
                  <tr><td>③ </td><td>找到 <strong style={{color:"var(--text-0)"}}>Chinese (Traditional) Language Pack for Visual Studio Code</strong> 並安裝</td></tr>
                  <tr><td>④ </td><td>安裝後<strong style={{color:"var(--text-0)"}}>右下角</strong>會跳出提示，點擊「<strong style={{color:"var(--text-0)"}}>Restart（重啟）</strong>」即可切換為中文</td></tr>
                </tbody>
              </table>
            </div>

            <SectionTitle hash="extensions">3 ─ 必裝外掛</SectionTitle>
            <Collapse title="前端開發核心" meta="5 個" defaultOpen>
              <ul>
                <li><strong style={{color:"var(--text-0)"}}>Prettier</strong> — 程式碼自動排版</li>
                <li><strong style={{color:"var(--text-0)"}}>ESLint</strong> — JS 語法檢查</li>
                <li><strong style={{color:"var(--text-0)"}}>ES7+ React/Redux/React-Native snippets</strong> — React 程式碼片段</li>
                <li><strong style={{color:"var(--text-0)"}}>Auto Rename Tag</strong> — HTML 標籤同步改名</li>
                <li><strong style={{color:"var(--text-0)"}}>Live Server</strong> — 一鍵啟動本機開發伺服器</li>
              </ul>
            </Collapse>
            <Collapse title="Python 後端">
              <ul>
                <li>Python（Microsoft 官方）</li>
                <li>Pylance — 型別檢查 + 自動完成</li>
                <li>Black Formatter — 程式碼排版</li>
              </ul>
            </Collapse>
            <Collapse title="體驗加分">
              <ul>
                <li>GitLens — 顯示每行程式碼是誰寫的</li>
                <li>Material Icon Theme — 漂亮的檔案圖示</li>
                <li>Path Intellisense — 路徑自動補完</li>
              </ul>
            </Collapse>

            <Callout>
              <strong>下一步：</strong>VS Code 裝好後，請接著看「<strong style={{color:"var(--text-0)"}}>Node.js 安裝</strong>」章節，把 JavaScript 執行環境準備好。
            </Callout>
          </>
        )},
        { label: "設定範例", badge: "Demo", content: (
          <>
            <p>建議的 <code>settings.json</code>（按 <code>Ctrl+Shift+P</code> 輸入「open user settings json」）：</p>
            <CodeBlock lang="js" file="settings.json" code={`{
  // 字型
  "editor.fontFamily": "JetBrains Mono, Menlo, monospace",
  "editor.fontSize": 14,
  "editor.fontLigatures": true,

  // 自動排版
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // 縮排
  "editor.tabSize": 2,
  "editor.insertSpaces": true,

  // 自動儲存
  "files.autoSave": "onFocusChange",

  // 顯示空白字元
  "editor.renderWhitespace": "boundary",

  // 終端機
  "terminal.integrated.fontSize": 13
}`} />

            <p>建立一個 HTML 專案的指令：</p>
            <CodeBlock lang="bash" file="terminal" code={`# 建立資料夾
mkdir my-website && cd my-website

# 用 VS Code 開啟這個資料夾
code .

# 建立第一個檔案
touch index.html`} />

            <p>建立一個 React 專案（使用 Vite）：</p>
            <CodeBlock lang="bash" file="terminal" code={`# 建立 React + Vite 專案
npm create vite@latest my-react-app -- --template react

# 進入專案
cd my-react-app

# 安裝套件
npm install

# 啟動開發伺服器
npm run dev`} />
          </>
        )},
        { label: "重點清單", badge: 6, content: (
          <>
            <Collapse title="01 ─ 安裝完成檢查" meta="checklist" defaultOpen>
              <ul>
                <li>✓ VS Code 已安裝</li>
                <li>✓ Node.js 18+ 已安裝（<code>node --version</code> 確認）</li>
                <li>✓ 至少安裝 Prettier + Live Server 兩個外掛</li>
              </ul>
            </Collapse>
            <Collapse title="02 ─ 常用快捷鍵" meta="hotkeys">
              <ul>
                <li><code>Ctrl/Cmd + P</code> — 快速開啟檔案</li>
                <li><code>Ctrl/Cmd + Shift + P</code> — 命令面板</li>
                <li><code>Ctrl/Cmd + B</code> — 切換側邊欄</li>
                <li><code>Ctrl/Cmd + `</code> — 開啟終端機</li>
                <li><code>Alt + ↑ / ↓</code> — 整行上下移動</li>
                <li><code>Ctrl/Cmd + D</code> — 選取下一個相同字串（多游標）</li>
              </ul>
            </Collapse>
            <Collapse title="03 ─ Emmet 縮寫" meta="HTML 加速">
              <ul>
                <li><code>!</code> + Tab — 產生完整 HTML 骨架</li>
                <li><code>div.card</code> + Tab → <code>{`<div class="card"></div>`}</code></li>
                <li><code>{`ul>li*3`}</code> + Tab → 3 個 li 的 ul</li>
                <li><code>{`p{Hello}`}</code> + Tab → <code>{`<p>Hello</p>`}</code></li>
              </ul>
            </Collapse>
            <Collapse title="04 ─ 整合終端機" meta="terminal">
              <ul>
                <li>使用內建終端機執行 <code>npm</code>、<code>git</code> 指令</li>
                <li>可同時開多個分頁（編譯器、Server、Git）</li>
              </ul>
            </Collapse>
            <Collapse title="05 ─ Git 整合" meta="version control">
              <ul>
                <li>左側 Source Control 面板可直接 commit / push</li>
                <li>搭配 GitLens 外掛可看每行變更歷史</li>
              </ul>
            </Collapse>
            <Collapse title="06 ─ 除錯（Debug）" meta="debugging">
              <ul>
                <li>F5 啟動除錯</li>
                <li>可設定中斷點、檢視變數、單步執行</li>
                <li>支援 Node.js、Chrome、Python 等多種環境</li>
              </ul>
            </Collapse>
          </>
        )},
      ]} />
    </>
  );
}

// =============== 部署網站教學 ===============
export function DeployPage() {
  return (
    <>
      <div className="page-eyebrow">部署發佈</div>
      <h1 className="page-title">部署網站教學</h1>
      <p className="page-subtitle">
        把你寫好的網站推上 GitHub，再透過 GitHub Pages 免費發佈。整個流程從零開始大約 15 分鐘。
      </p>

      <Tabs tabs={[
        { label: "操作流程", badge: "Steps", content: (
          <>
            <SectionTitle hash="overview">部署流程總覽</SectionTitle>
            <div className="arch" style={{padding:"24px"}}>
              <div className="arch-row">
                <div><div className="arch-label">Step 1</div><div className="arch-label-sub">本機建立</div></div>
                <div className="arch-items">
                  <span className="arch-pill">寫好網站</span>
                  <span className="arch-pill">git init</span>
                </div>
              </div>
              <div className="arch-row">
                <div><div className="arch-label">Step 2</div><div className="arch-label-sub">推上 GitHub</div></div>
                <div className="arch-items">
                  <span className="arch-pill">建立 repo</span>
                  <span className="arch-pill">git push</span>
                </div>
              </div>
              <div className="arch-row">
                <div><div className="arch-label">Step 3</div><div className="arch-label-sub">啟用 Pages</div></div>
                <div className="arch-items">
                  <span className="arch-pill">Settings → Pages</span>
                  <span className="arch-pill">選擇 branch</span>
                </div>
              </div>
              <div className="arch-row">
                <div><div className="arch-label">Step 4</div><div className="arch-label-sub">取得網址</div></div>
                <div className="arch-items">
                  <span className="arch-pill">username.github.io/repo</span>
                </div>
              </div>
            </div>

            <SectionTitle hash="install-git">安裝 Git</SectionTitle>
            <CodeBlock lang="bash" file="terminal" code={`# macOS
brew install git

# Windows
# 前往 https://git-scm.com 下載安裝檔

# 確認安裝
git --version

# 第一次使用要設定使用者
git config --global user.name "你的名字"
git config --global user.email "your@email.com"`} />
          </>
        )},
        { label: "完整範例", badge: "Demo", content: (
          <>
            <SectionTitle hash="step1">Step 1 ─ 初始化 Git 倉庫</SectionTitle>
            <CodeBlock lang="bash" file="terminal" code={`# 進入你的網站資料夾
cd my-website

# 初始化 git
git init

# 加入所有檔案
git add .

# 第一次 commit
git commit -m "Initial commit"`} />

            <SectionTitle hash="step2">Step 2 ─ 建立 GitHub Repo</SectionTitle>
            <ol>
              <li>登入 <a href="https://github.com" target="_blank" rel="noreferrer">github.com</a>，右上角 + → New repository</li>
              <li>Repository name 填 <code>my-website</code></li>
              <li>選擇 Public（GitHub Pages 免費版需要公開）</li>
              <li>不要勾「Add a README」（你本機已經有檔案了）</li>
              <li>點 Create repository</li>
            </ol>

            <SectionTitle hash="step3">Step 3 ─ 推上去</SectionTitle>
            <CodeBlock lang="bash" file="terminal" code={`# 連接遠端 repo（網址在剛建立的 GitHub 頁面）
git remote add origin https://github.com/你的帳號/my-website.git

# 設定分支名稱
git branch -M main

# 推送
git push -u origin main`} />

            <SectionTitle hash="step4">Step 4 ─ 啟用 GitHub Pages</SectionTitle>
            <ol>
              <li>回到 GitHub repo 頁面，點上方 <strong style={{color:"var(--text-0)"}}>Settings</strong></li>
              <li>左側選單找到 <strong style={{color:"var(--text-0)"}}>Pages</strong></li>
              <li>Source 選 <code>Deploy from a branch</code></li>
              <li>Branch 選 <code>main</code> + <code>/ (root)</code> → Save</li>
              <li>等 1-2 分鐘，頁面上方會顯示網址：<br/><code>https://你的帳號.github.io/my-website/</code></li>
            </ol>

            <Callout>
              <strong>React 專案要注意：</strong>需要先 <code>npm run build</code> 把專案打包成靜態檔，再推 <code>dist/</code> 資料夾。建議搭配 GitHub Actions 自動化部署。
            </Callout>
          </>
        )},
        { label: "更新與維護", badge: "Tips", content: (
          <>
            <SectionTitle hash="update">更新網站內容</SectionTitle>
            <p>每次改完程式碼，重複下面三步就會自動部署：</p>
            <CodeBlock lang="bash" file="terminal" code={`git add .
git commit -m "更新首頁文案"
git push`} />

            <SectionTitle hash="domain">使用自訂網域（選用）</SectionTitle>
            <ol>
              <li>在你的網域註冊商設定 DNS（CNAME 指向 <code>username.github.io</code>）</li>
              <li>repo 根目錄新增 <code>CNAME</code> 檔案，內容是你的網域</li>
              <li>GitHub Pages 設定頁填入自訂網域並啟用 HTTPS</li>
            </ol>

            <SectionTitle hash="alt">其他免費部署平台</SectionTitle>
            <div className="card-grid">
              <div className="card">
                <div className="card-title">Vercel</div>
                <p className="card-desc">React / Next.js 首選。連動 GitHub 自動部署，速度極快。</p>
                <div className="card-foot"><span className="tag react">推薦</span></div>
              </div>
              <div className="card">
                <div className="card-title">Netlify</div>
                <p className="card-desc">靜態網站老牌平台，介面友善，支援表單與函式。</p>
                <div className="card-foot"><span className="tag">靜態</span></div>
              </div>
              <div className="card">
                <div className="card-title">Cloudflare Pages</div>
                <p className="card-desc">全球 CDN 加速，每月 500 次免費部署。</p>
                <div className="card-foot"><span className="tag">CDN</span></div>
              </div>
            </div>
          </>
        )},
      ]} />
    </>
  );
}

// =============== 環境安裝 - Node.js ===============
export function NodejsPage() {
  return (
    <>
      <div className="page-eyebrow">環境安裝與設定 / 03</div>
      <h1 className="page-title">Node.js 安裝</h1>
      <p className="page-subtitle">
        Node.js 不僅是一個 JavaScript 執行環境，它還附帶了 npm（Node Package Manager），這是目前全球最大的開源庫生態系統。
      </p>

      <Tabs tabs={[
        { label: "安裝步驟", badge: "Setup", content: (
          <>
            <SectionTitle hash="why">1 ─ 為什麼需要 Node.js？</SectionTitle>
            <ul>
              <li>讓 JavaScript 可以在<strong style={{color:"var(--text-0)"}}>瀏覽器之外</strong>執行（伺服器、命令列）</li>
              <li>附帶 <code>npm</code> 套件管理工具，可一鍵安裝 React、Vite 等套件</li>
              <li>建立 React / Vue / Next.js 等現代前端專案的<strong style={{color:"var(--text-0)"}}>必要前置條件</strong></li>
            </ul>

            <SectionTitle hash="download">2 ─ 官方標準安裝</SectionTitle>
            <ol>
              <li>前往 <a href="https://nodejs.org" target="_blank" rel="noreferrer">nodejs.org</a></li>
              <li>選擇 <strong style={{color:"var(--text-0)"}}>LTS（Long Term Support）</strong>長期支援版 —— 這是最穩定的版本，適合生產環境與教學</li>
              <li>下載並運行：<code>.msi</code>（Windows）/ <code>.pkg</code>（macOS）</li>
            </ol>

            <SectionTitle hash="install">3 ─ 安裝設定</SectionTitle>
            <p>安裝精靈中一路點擊「Next（下一步）」即可。</p>
            <Callout>
              <strong style={{color:"var(--accent-4, #ff7b72)"}}>注意：</strong>
              當出現「<strong>Tools for Native Modules</strong>」視窗詢問是否自動安裝必要工具（如 Python 和 Visual Studio Build Tools）時，建議<strong>勾選</strong>。雖然會多花一些時間，但能避免後續安裝原生套件時出錯。
            </Callout>

            <SectionTitle hash="verify">4 ─ 驗證安裝是否成功</SectionTitle>
            <ol>
              <li>開啟<strong style={{color:"var(--text-0)"}}>終端機</strong>（Windows 的 PowerShell 或 VS Code 內建的終端機）</li>
              <li>輸入指令 <code>node -v</code> 檢查 Node 版本</li>
              <li>輸入指令 <code>npm -v</code> 檢查 npm 版本</li>
              <li>如果畫面出現如 <strong style={{color:"var(--text-0)"}}>v20.x.x</strong> 或 <strong style={{color:"var(--text-0)"}}>v22.x.x</strong> 的數字，代表你已經安裝成功了！🎉</li>
            </ol>

            <CodeBlock lang="bash" file="terminal" code={`# 檢查 Node 版本
node -v
# v20.11.0    ← 出現版本號就代表安裝成功

# 檢查 npm 版本
npm -v
# 10.2.4`} />
          </>
        )},
        { label: "常用指令", badge: "Demo", content: (
          <>
            <SectionTitle hash="npm">npm 基本指令</SectionTitle>
            <CodeBlock lang="bash" file="terminal" code={`# 初始化新專案（產生 package.json）
npm init -y

# 安裝套件
npm install react react-dom

# 安裝開發用套件（不包含在最終專案內）
npm install --save-dev vite

# 移除套件
npm uninstall lodash

# 安裝專案的所有依賴（從 package.json 讀取）
npm install

# 執行 package.json 裡的 scripts
npm run dev
npm run build`} />

            <SectionTitle hash="create">用 npm 建立第一個 React 專案</SectionTitle>
            <CodeBlock lang="bash" file="terminal" code={`# 1. 用 Vite 建立 React 專案
npm create vite@latest my-react-app -- --template react

# 2. 進入專案資料夾
cd my-react-app

# 3. 安裝所有套件
npm install

# 4. 啟動開發伺服器
npm run dev

# → 終端機會顯示 http://localhost:5173
# → 在瀏覽器打開就能看到第一個 React 網頁！`} />

            <SectionTitle hash="nvm">進階：管理多個 Node 版本</SectionTitle>
            <p>不同專案有時需要不同版本的 Node.js。推薦使用 <code>nvm</code> 或 <code>fnm</code> 來切換：</p>
            <CodeBlock lang="bash" file="terminal" code={`# macOS / Linux 用戶安裝 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 安裝指定版本
nvm install 20
nvm install 22

# 切換版本
nvm use 20
node -v   # v20.x.x`} />
          </>
        )},
        { label: "重點清單", badge: 5, content: (
          <>
            <Collapse title="01 ─ 安裝前檢查" meta="checklist" defaultOpen>
              <ul>
                <li>✓ 已安裝 VS Code</li>
                <li>✓ 確認自己的作業系統（Windows / macOS / Linux）</li>
                <li>✓ 從官方 <a href="https://nodejs.org" target="_blank" rel="noreferrer">nodejs.org</a> 下載，<strong>避免使用第三方來源</strong></li>
              </ul>
            </Collapse>
            <Collapse title="02 ─ LTS vs Current 怎麼選？" meta="version">
              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>版本</th><th>說明</th><th>適用對象</th></tr></thead>
                  <tbody>
                    <tr><td><strong style={{color:"var(--text-0)"}}>LTS</strong></td><td>長期支援版，穩定優先</td><td>生產環境、學習、團隊專案</td></tr>
                    <tr><td>Current</td><td>最新功能版，可能含實驗性 API</td><td>嘗鮮、單純研究新功能</td></tr>
                  </tbody>
                </table>
              </div>
            </Collapse>
            <Collapse title="03 ─ 安裝過程關鍵勾選" meta="windows">
              <ul>
                <li>勾選「<strong style={{color:"var(--text-0)"}}>Add to PATH</strong>」（預設已勾，請保持）</li>
                <li>遇到「<strong style={{color:"var(--text-0)"}}>Tools for Native Modules</strong>」時建議勾選</li>
              </ul>
            </Collapse>
            <Collapse title="04 ─ 安裝後驗證指令" meta="terminal">
              <ul>
                <li><code>node -v</code> — 檢查 Node 版本</li>
                <li><code>npm -v</code> — 檢查 npm 版本</li>
                <li><code>npx -v</code> — 檢查 npx 版本（執行套件用）</li>
              </ul>
            </Collapse>
            <Collapse title="05 ─ 常見問題排解" meta="FAQ">
              <ul>
                <li>「<code>node 不是內部或外部命令</code>」→ 沒勾「Add to PATH」，重新安裝</li>
                <li>「<code>npm ERR! permission denied</code>」→ macOS 用 <code>sudo</code> 或改用 nvm 安裝</li>
                <li>「<code>npm install</code> 很慢」→ 換 npm 鏡像源或使用 <code>pnpm</code>、<code>yarn</code></li>
              </ul>
            </Collapse>
          </>
        )},
      ]} />
    </>
  );
}
