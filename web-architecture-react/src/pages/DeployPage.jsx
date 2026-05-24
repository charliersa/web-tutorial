import { useState, useEffect } from 'react';
import { CodeBlock, Tabs, Collapse, SectionTitle, Callout } from '../components/CodeBlock';

export function DeployChIndex({ chapters }) {
  return (
    <div className="ch-index">
      {chapters.map((c) => (
        <a key={c.id} href={`#${c.id}`} className="ch-chip"
           onClick={(e) => {
             e.preventDefault();
             const el = document.getElementById(c.id);
             if (el) {
               const top = el.getBoundingClientRect().top + window.scrollY - 120;
               window.scrollTo({ top, behavior: "smooth" });
             }
           }}>
          <span className="ch-num">{c.num}</span>
          <span>{c.title}</span>
        </a>
      ))}
    </div>
  );
}

export function DeployChapter({ id, num, title, children }) {
  return (
    <section id={id} className="ch-section">
      <div className="ch-head">
        <span className="ch-tag">{num}</span>
        <h2 className="ch-title">{title}</h2>
      </div>
      <div className="ch-body">{children}</div>
    </section>
  );
}

// =============== 部屬網站教學（手動部屬） ===============
export function DeployPage() {
  const CHAPTERS = [
    { id: "dp-1", num: "1-1", title: "上傳代碼至 GitHub" },
    { id: "dp-2", num: "1-2", title: "開啟 GitHub Pages" },
    { id: "dp-3", num: "1-3", title: "React / Vue 框架" },
    { id: "dp-4", num: "1-4", title: "HTML 完整流程" },
    { id: "dp-5", num: "1-5", title: "VS Code 連結部屬" },
    { id: "dp-6", num: "1-6", title: "參考影片" },
  ];

  return (
    <>
      <div className="page-eyebrow">部署發佈</div>
      <h1 className="page-title">手動部屬網站</h1>
      <p className="page-subtitle">
        將你寫好的網頁手動部屬到 GitHub Pages，讓作品從「本機檔案」變成「全世界都看得到的網站」。本章涵蓋從 Git 初始化、GitHub Pages 設定到 VS Code 自動化部屬的完整流程。
      </p>

      <DeployChIndex chapters={CHAPTERS} />

      <Tabs tabs={[
        { label: "章節說明", badge: "6", content: (
          <>
            {/* ───────────── 1-1 ───────────── */}
            <DeployChapter id="dp-1" num="1-1" title="第一階段：將代碼上傳至 GitHub 倉庫">
              <p>如果你還沒有將專案上傳到 GitHub，請按照以下三個步驟操作：</p>

              <h3 className="sub">1. 在 GitHub 建立新倉庫</h3>
              <ol>
                <li>登入 <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>，點擊右上角 <code>+</code>，選擇 <strong style={{color:"var(--text-0)"}}>New repository</strong></li>
                <li>輸入倉庫名稱，點擊 <strong style={{color:"var(--text-0)"}}>Create repository</strong></li>
                <li><strong style={{color:"var(--accent-3,#ffa657)"}}>複製</strong>該倉庫的網址（例如：<code>https://github.com/你的帳號/你的專案名.git</code>）</li>
              </ol>

              <h3 className="sub">2. 在 VS Code 初始化 Git</h3>
              <p>打開終端機（快捷鍵 <code>Ctrl + `</code>），輸入以下指令進行初始化：</p>
              <CodeBlock lang="bash" file="terminal" code={`git init
git add .
git commit -m "Initial commit"`} />

              <h3 className="sub">3. 連接並推送</h3>
              <p>將你的本地資料夾與遠端 GitHub 倉庫連結：</p>
              <CodeBlock lang="bash" file="terminal" code={`git remote add origin [你剛剛複製的網址].git
git branch -M main
git push -u origin main`} />
            </DeployChapter>

            {/* ───────────── 1-2 ───────────── */}
            <DeployChapter id="dp-2" num="1-2" title="第二階段：開啟 GitHub Pages 進行網頁部署">
              <p>當你的代碼已經在 GitHub 上後，如果你的專案是<strong style={{color:"var(--text-0)"}}>靜態網頁（HTML / CSS / JS）</strong>，可以手動開啟部署：</p>

              <ol>
                <li>
                  <strong style={{color:"var(--text-0)"}}>進入 GitHub 倉庫頁面</strong><br/>
                  點選上方的 <strong>Settings</strong>（設定）標籤
                </li>
                <li style={{marginTop:8}}>
                  <strong style={{color:"var(--text-0)"}}>尋找 Pages 選項</strong><br/>
                  在左側選單找到 <strong>Code and automation</strong> 區塊，點擊 <strong>Pages</strong>
                </li>
                <li style={{marginTop:8}}>
                  <strong style={{color:"var(--text-0)"}}>設定部署來源</strong>
                  <ul style={{marginTop:4}}>
                    <li>在 <strong>Build and deployment</strong> 下方的 Branch 部分</li>
                    <li>將 <code>None</code> 改選為 <code>main</code>（或你的主分支）</li>
                    <li>資料夾選擇 <code>/ (root)</code></li>
                    <li>點擊 <strong>Save</strong></li>
                  </ul>
                </li>
                <li style={{marginTop:8}}>
                  <strong style={{color:"var(--text-0)"}}>獲取網址</strong><br/>
                  稍等約 1~3 分鐘，頁面頂端會出現「<strong style={{color:"var(--accent-3,#ffa657)"}}>Your site is live at...</strong>」及一個網址，點開即可看到你的網頁 🎉
                </li>
              </ol>
            </DeployChapter>

            {/* ───────────── 1-3 ───────────── */}
            <DeployChapter id="dp-3" num="1-3" title="第三階段：React / Vue 等框架（進階手動）">
              <p>如果你使用的是 <strong style={{color:"var(--text-0)"}}>React</strong> 或 <strong style={{color:"var(--text-0)"}}>Vue</strong>，直接上傳原始碼是無法顯示網頁的，需要先<strong style={{color:"var(--accent-3,#ffa657)"}}>打成生產包</strong>：</p>

              <h3 className="sub">1. 安裝 gh-pages 工具</h3>
              <CodeBlock lang="bash" file="terminal" code={`npm install gh-pages --save-dev`} />

              <h3 className="sub">2. 修改 package.json</h3>
              <p>新增 <code>homepage</code> 欄位指向你的 Pages 網址，並在 <code>scripts</code> 加入 deploy 指令：</p>
              <CodeBlock lang="js" file="package.json" code={`{
  "name": "my-react-app",
  "version": "0.1.0",

  "homepage": "https://你的帳號.github.io/你的專案名",

  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}`} />
              <Callout>
                <strong>注意：</strong>不同框架的輸出資料夾不同 ——
                <ul style={{margin:"6px 0 0", paddingLeft:18}}>
                  <li><strong>Vite（React / Vue）</strong>：輸出在 <code>dist/</code>，用 <code>gh-pages -d dist</code></li>
                  <li><strong>Create React App</strong>：輸出在 <code>build/</code>，用 <code>gh-pages -d build</code></li>
                </ul>
              </Callout>

              <h3 className="sub">3. 執行部署指令</h3>
              <CodeBlock lang="bash" file="terminal" code={`npm run deploy`} />
              <p>這會自動幫你<strong style={{color:"var(--text-0)"}}>打包並推送到 GitHub 的一個隱藏分支</strong> <code>gh-pages</code>，並自動完成部署。</p>
            </DeployChapter>

            {/* ───────────── 1-4 ───────────── */}
            <DeployChapter id="dp-4" num="1-4" title="HTML 手動部屬 GitHub Pages 完整流程">
              <p>將 HTML 網頁手動部署到 GitHub Pages 是一個非常實用的技能，能讓作品從「本機檔案」變成「全世界都看得到的網站」。</p>

              <h3 className="sub">🚀 第一階段：準備工作</h3>
              <ol>
                <li><strong style={{color:"var(--text-0)"}}>檔案命名：</strong>確保你的網頁主程式檔名為 <code>index.html</code>（這是 GitHub Pages 預設的入口）</li>
                <li><strong style={{color:"var(--text-0)"}}>檔案整理：</strong>所有檔案放在同一個資料夾內</li>
              </ol>
              <CodeBlock lang="bash" file="folder structure" code={`my-website/
├── index.html      ← 必須叫這個名字
├── style.css
└── images/         ← 圖片放這裡
    └── logo.png`} />

              <h3 className="sub">📁 第二階段：建立 GitHub 儲存庫</h3>
              <ol>
                <li>登入 <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
                <li>點擊右上角 <strong>+</strong>，選擇 <strong>New repository</strong></li>
                <li><strong>Repository name：</strong>輸入專案名稱（例如 <code>my-business-card</code>）</li>
                <li><strong style={{color:"var(--accent-4,#ff7b72)"}}>Public/Private：務必選 Public</strong>（公開）—— 免費版 GitHub Pages 無法部屬私人倉庫</li>
                <li>勾選 <strong>Add a README file</strong></li>
                <li>點擊底部的 <strong>Create repository</strong></li>
              </ol>

              <h3 className="sub">⬆️ 第三階段：手動上傳檔案</h3>
              <ol>
                <li>進入剛建立好的儲存庫頁面</li>
                <li>點擊 <strong>Add file</strong>，選擇 <strong>Upload files</strong></li>
                <li>將你電腦資料夾中的所有檔案（HTML、CSS、圖片）<strong style={{color:"var(--text-0)"}}>拖曳</strong>到網頁中</li>
                <li>在 <strong>Commit changes</strong> 框框中輸入「Initial upload」</li>
                <li>點擊 <strong>Commit changes</strong></li>
              </ol>

              <h3 className="sub">⚙️ 第四階段：開啟 GitHub Pages 功能</h3>
              <ol>
                <li>點擊儲存庫上方的 <strong>Settings</strong>（設定）</li>
                <li>左側選單找到 <strong>Pages</strong> 項目</li>
                <li>
                  <strong>Build and deployment</strong> 區塊下：
                  <ul style={{marginTop:4}}>
                    <li><strong>Source</strong> 選擇 <code>Deploy from a branch</code></li>
                    <li><strong>Branch</strong> 選擇 <code>main</code>（或 <code>master</code>），資料夾選 <code>/(root)</code></li>
                  </ul>
                </li>
                <li>點擊 <strong>Save</strong></li>
              </ol>

              <h3 className="sub">🎉 第五階段：查看成果</h3>
              <ol>
                <li>稍等約 1~2 分鐘</li>
                <li>重新整理 Pages 頁面，上方會出現一行字：<strong style={{color:"var(--accent-3,#ffa657)"}}>「Your site is live at...」</strong>，後方跟著一個網址</li>
                <li>點擊網址，就可以看到你的作品在線上了！</li>
              </ol>

              <SectionTitle hash="tips-1-4">💡 重要提醒</SectionTitle>
              <Callout>
                <strong style={{color:"var(--accent-4,#ff7b72)"}}>路徑問題（最常出錯的地方）：</strong><br/>
                在 GitHub 上，檔案<strong>大小寫是敏感的</strong>。如果你在電腦上的圖片叫 <code>IMG.jpg</code> 但程式碼寫 <code>img.jpg</code>，上傳後會<strong>看不到圖片</strong>。
              </Callout>

              <ul>
                <li><strong style={{color:"var(--text-0)"}}>網址格式：</strong>通常網址會是 <code>https://[你的帳號].github.io/[儲存庫名稱]/</code></li>
                <li><strong style={{color:"var(--text-0)"}}>更新網頁：</strong>修改程式碼後重複「上傳檔案」的動作，GitHub 就會自動更新</li>
                <li><strong style={{color:"var(--text-0)"}}>README.md：</strong>用來介紹這個專案是什麼、用了哪些技術，可用 Markdown 語法簡單撰寫</li>
              </ul>

              <SectionTitle hash="bonus">🎓 教學加分項目</SectionTitle>
              <ol>
                <li><strong style={{color:"var(--text-0)"}}>Vercel 部署：</strong>比起 GitHub，Vercel 只要連結 GitHub 帳號，每次上傳程式碼都會「自動」更新網站，非常快速</li>
                <li><strong style={{color:"var(--text-0)"}}>自定義域名：</strong>如果有自己的網址，也可以在 GitHub Pages 中設定</li>
              </ol>
            </DeployChapter>

            {/* ───────────── 1-5 ───────────── */}
            <DeployChapter id="dp-5" num="1-5" title="與 VS Code 連結部屬（自動化工作流）">
              <p>將 VS Code 與 GitHub 連結並實作「<strong style={{color:"var(--text-0)"}}>自動化部屬</strong>」是前端開發的標準工作流。這樣做的好處是：你只要在 VS Code 按下「<strong style={{color:"var(--accent-3,#ffa657)"}}>儲存與推送</strong>」，網頁就會自動更新，不需要每次手動拖拽檔案。</p>

              <h3 className="sub">🛠️ 第一階段：環境準備</h3>
              <ol>
                <li><strong style={{color:"var(--text-0)"}}>安裝 Git：</strong>電腦必須安裝 <a href="https://git-scm.com" target="_blank" rel="noreferrer">Git 主程式</a></li>
                <li><strong style={{color:"var(--text-0)"}}>登入帳號：</strong>在 VS Code 左下角點擊「人頭圖示」，登入你的 GitHub 帳號</li>
                <li><strong style={{color:"var(--text-0)"}}>安裝擴充套件（選配）：</strong>建議安裝 <strong>GitHub Pull Requests and Issues</strong>，可以更方便地在 VS Code 管理倉庫</li>
              </ol>

              <h3 className="sub">🚀 第二階段：將本地專案上傳至 GitHub</h3>
              <ol>
                <li><strong style={{color:"var(--text-0)"}}>開啟資料夾：</strong>用 VS Code 開啟你的網頁專案資料夾</li>
                <li>
                  <strong style={{color:"var(--text-0)"}}>初始化 Git：</strong>
                  <ul style={{marginTop:4}}>
                    <li>點擊左側 <strong>原始碼控制（Source Control）</strong>圖示（像三叉路口）</li>
                    <li>點擊 <strong>Publish to GitHub</strong> 按鈕</li>
                  </ul>
                </li>
                <li><strong style={{color:"var(--text-0)"}}>選擇模式：</strong>選 <strong>Publish to GitHub public repository</strong>（公開儲存庫）</li>
                <li><strong style={{color:"var(--text-0)"}}>上傳檔案：</strong>勾選想上傳的檔案（通常是全部），點擊確定。完成後你的程式碼就同步到 GitHub 雲端了</li>
              </ol>

              <h3 className="sub">🔗 第三階段：設定 GitHub Pages 自動部屬</h3>
              <ol>
                <li>回到瀏覽器，進入你的 GitHub 儲存庫頁面</li>
                <li>點擊 <strong>Settings → Pages</strong></li>
                <li>在 <strong>Branch</strong> 下方選擇 <code>main</code>，點擊 <strong>Save</strong></li>
                <li><strong style={{color:"var(--accent-3,#ffa657)"}}>大功告成！</strong>現在只要你在 VS Code 修改程式碼並「推送」，網頁就會自動更新</li>
              </ol>

              <h3 className="sub">🔄 第四階段：後續如何更新網頁？</h3>
              <p>這是以後最常用的動作，只需<strong style={{color:"var(--text-0)"}}>三步驟</strong>：</p>
              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>步驟</th><th>操作</th></tr></thead>
                  <tbody>
                    <tr><td>① <strong style={{color:"var(--text-0)"}}>存檔</strong></td><td>在 VS Code 修改完代碼後存檔</td></tr>
                    <tr><td>② <strong style={{color:"var(--text-0)"}}>提交（Commit）</strong></td><td>在原始碼控制面板的輸入框寫下改了什麼（例如 <code>fix: 修改背景顏色</code>），點擊 <strong>Commit</strong></td></tr>
                    <tr><td>③ <strong style={{color:"var(--text-0)"}}>同步（Sync/Push）</strong></td><td>點擊 <strong>Sync Changes（同步變更）</strong>。1 分鐘後重新整理你的 GitHub Pages 網址，就會看到更新後的成果！</td></tr>
                  </tbody>
                </table>
              </div>

              <SectionTitle hash="check">💡 如何檢查有沒有成功？</SectionTitle>
              <ul>
                <li><strong style={{color:"var(--text-0)"}}>小綠點：</strong>看 GitHub 儲存庫名稱旁邊有沒有一個「<strong style={{color:"var(--accent-3,#ffa657)"}}>小黃點</strong>」在轉？轉完變成「<strong style={{color:"var(--accent-2,#7ee787)"}}>小綠勾</strong>」代表部屬成功</li>
                <li>
                  <strong style={{color:"var(--text-0)"}}>終端機指令（進階）：</strong>如果介面按鈕失效，可以用這三行萬用指令：
                </li>
              </ul>
              <CodeBlock lang="bash" file="terminal (universal)" code={`git add .
git commit -m "更新內容"
git push`} />

              <SectionTitle hash="vercel">🌟 更有層次的選擇：Vercel 部屬（推薦）</SectionTitle>
              <p>如果覺得 GitHub Pages 部署太慢（有時要等 2 分鐘），可以改用 <strong style={{color:"var(--text-0)"}}>Vercel</strong>：</p>
              <ol>
                <li>用 GitHub 帳號登入 <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a></li>
                <li>點擊 <strong>Add New Project</strong>，選擇剛才上傳的 GitHub 倉庫</li>
                <li><strong style={{color:"var(--text-0)"}}>優點：</strong>每次在 VS Code 按下 Push，Vercel 幾乎在 <strong style={{color:"var(--accent-3,#ffa657)"}}>5 秒內</strong>就會更新網頁，且網址更漂亮</li>
              </ol>
            </DeployChapter>

            {/* ───────────── 1-6 ───────────── */}
            <DeployChapter id="dp-6" num="1-6" title="參考影片">
              <p>實際操作影片教學：</p>
              <div className="video-wrap">
                <iframe
                  src="https://www.youtube.com/embed/zMsxracdhko"
                  title="GitHub Pages 手動部屬教學影片"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <Callout>
                <strong>提示：</strong>建議搭配前面 1-1 ~ 1-5 章節一起看，邊看影片邊跟著做，效果最好。
              </Callout>
            </DeployChapter>
          </>
        )},

        { label: "其他平台", badge: 3, content: (
          <>
            <p>除了 GitHub Pages 之外，這些平台也都可以免費部屬靜態網站：</p>
            <div className="card-grid">
              <div className="card">
                <div className="card-icon">▲</div>
                <div className="card-title">Vercel</div>
                <p className="card-desc">React / Next.js 首選。連動 GitHub 自動部署，速度極快（5 秒內更新）。</p>
                <div className="card-foot"><span className="tag react">推薦</span></div>
              </div>
              <div className="card">
                <div className="card-title">Netlify</div>
                <p className="card-desc">靜態網站老牌平台，介面友善，支援表單與 Serverless 函式。</p>
                <div className="card-foot"><span className="tag">靜態</span></div>
              </div>
              <div className="card">
                <div className="card-title">Cloudflare Pages</div>
                <p className="card-desc">全球 CDN 加速，每月 500 次免費部署，速度極快。</p>
                <div className="card-foot"><span className="tag">CDN</span></div>
              </div>
            </div>
          </>
        )},

        { label: "重點清單", badge: 6, content: (
          <>
            <Collapse title="01 ─ 部署前的準備清單" meta="checklist" defaultOpen>
              <ul>
                <li>✓ 主程式檔名必須是 <code>index.html</code></li>
                <li>✓ 所有檔案放在同一個資料夾</li>
                <li>✓ GitHub 帳號已註冊</li>
                <li>✓ Git 已安裝（命令列輸入 <code>git --version</code> 確認）</li>
                <li>✓ 圖片、CSS 路徑大小寫一致</li>
              </ul>
            </Collapse>

            <Collapse title="02 ─ Git 萬用三指令" meta="3 行">
              <CodeBlock lang="bash" file="terminal" code={`git add .
git commit -m "更新內容"
git push`} />
              <p>不論是 HTML、React、Vue，每次更新都用這三行。</p>
            </Collapse>

            <Collapse title="03 ─ GitHub Pages 設定關鍵點" meta="4 步驟">
              <ol>
                <li>倉庫設為 <strong>Public</strong>（免費版必須）</li>
                <li>Settings → Pages → Source 選 <strong>Deploy from a branch</strong></li>
                <li>Branch 選 <code>main</code>，資料夾選 <code>/(root)</code></li>
                <li>等 1-3 分鐘看到「Your site is live at...」</li>
              </ol>
            </Collapse>

            <Collapse title="04 ─ React / Vue 框架部屬" meta="3 步驟">
              <ol>
                <li><code>npm install gh-pages --save-dev</code></li>
                <li>在 <code>package.json</code> 加入 <code>homepage</code> 與 <code>predeploy/deploy</code> scripts</li>
                <li><code>npm run deploy</code></li>
              </ol>
            </Collapse>

            <Collapse title="05 ─ VS Code 自動化工作流" meta="4 階段">
              <ol>
                <li>環境準備（裝 Git、登入 GitHub）</li>
                <li>Publish to GitHub</li>
                <li>Settings → Pages → 選 main 分支</li>
                <li>後續：存檔 → Commit → Sync Changes</li>
              </ol>
            </Collapse>

            <Collapse title="06 ─ 常見錯誤排解" meta="FAQ">
              <ul>
                <li><strong style={{color:"var(--accent-4,#ff7b72)"}}>圖片不顯示</strong>：檢查檔名<strong>大小寫</strong>，GitHub 區分大小寫</li>
                <li><strong style={{color:"var(--accent-4,#ff7b72)"}}>網頁空白</strong>：確認主程式叫 <code>index.html</code></li>
                <li><strong style={{color:"var(--accent-4,#ff7b72)"}}>404 找不到</strong>：等 2-3 分鐘讓 GitHub 部屬完成；或檢查 Pages 設定是否成功</li>
                <li><strong style={{color:"var(--accent-4,#ff7b72)"}}>React 部屬後白屏</strong>：忘記設 <code>homepage</code> 或 <code>vite.config.js</code> 的 <code>base</code></li>
                <li><strong style={{color:"var(--accent-4,#ff7b72)"}}>git push 卡住</strong>：可能是未登入或網路問題，重新登入 GitHub 帳號</li>
              </ul>
            </Collapse>
          </>
        )},
      ]} />
    </>
  );
}
