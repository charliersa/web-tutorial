/* global React, CodeBlock, Tabs, Collapse, SectionTitle, Callout */

function ObsidianChIndex({ chapters }) {
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

function ObsidianChapter({ id, num, title, children }) {
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

// =============== Obsidian (full rewrite) ===============
function ObsidianPage() {
  const CHAPTERS = [
    { id: "ob-0", num: "0-0", title: "安裝流程" },
    { id: "ob-1", num: "0-1", title: "必裝外掛" },
    { id: "ob-2", num: "0-2", title: "快捷鍵設定" },
    { id: "ob-3", num: "0-3", title: "Markdown 基本語法" },
    { id: "ob-4", num: "0-4", title: "Markdown 轉 PDF" },
    { id: "ob-5", num: "0-5", title: "Claude Code 插件" },
    { id: "ob-6", num: "0-6", title: "工具關係圖" },
  ];

  return (
    <>
      <div className="page-eyebrow">環境安裝與設定 / 01</div>
      <h1 className="page-title">Obsidian 文件筆記教學</h1>
      <p className="page-subtitle">
        Obsidian 是一個本機優先的 Markdown 知識庫，搭配 Claude Code 插件可以變成 AI 輔助的筆記工作站。本章節從安裝、外掛、Markdown 語法到 AI 整合一次說完。
      </p>

      <ObsidianChIndex chapters={CHAPTERS} />

      <Tabs tabs={[
        { label: "章節說明", badge: "7", content: (
          <>
            <ObsidianChapter id="ob-0" num="0-0" title="安裝流程">
              <ol>
                <li>前往官方網站下載：<a href="https://obsidian.md" target="_blank" rel="noreferrer">obsidian.md</a></li>
                <li><strong style={{color:"var(--text-0)"}}>選擇版本：</strong>根據你的作業系統（Windows / macOS / Linux）下載安裝檔</li>
                <li><strong style={{color:"var(--text-0)"}}>建立儲存庫（Vault）</strong>→ 就是<strong style={{color:"var(--accent-3,#ffa657)"}}>筆記資料夾</strong></li>
              </ol>

              <Callout>
                <strong>什麼是 Vault？</strong>
                Vault（儲存庫）是 Obsidian 的核心概念，就是一個放筆記的「資料夾」。所有 <code>.md</code> 檔案與設定都在這個資料夾裡，可以同步、備份、移動。
              </Callout>

              <h3 className="sub">建議資料夾結構</h3>
              <CodeBlock lang="bash" file="vault structure" code={`web-notes/
├── 00-index.md              # 索引頁
├── 01-frontend-planning/    # 前端規劃筆記
├── 02-frontend/
│   ├── html.md
│   ├── css.md
│   └── javascript.md
├── 03-backend/
│   └── python.md
├── 04-deploy/
│   └── github-pages.md
└── assets/
    └── images/              # 圖片附件`} />

              <h3 className="sub">安裝示意圖</h3>
              <div className="img-wrap">
                <img src={(typeof window !== "undefined" && window.__resources && window.__resources.obsidianInstall) || "assets/obsidian-install-guide.png"} alt="Obsidian 安裝指南" />
                <div className="img-caption">Obsidian 官網下載頁面與安裝流程示意</div>
              </div>
            </ObsidianChapter>

            <ObsidianChapter id="ob-1" num="0-1" title="必裝工具型外掛（社群外掛程式）">
              <p>第一次使用社群外掛前，必須先到 <strong style={{color:"var(--text-0)"}}>設定 → 社群外掛程式</strong>，<strong style={{color:"var(--accent-4,#ff7b72)"}}>關閉「安全模式」</strong>才能安裝外部外掛。</p>

              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>外掛名稱</th><th>功能說明</th></tr></thead>
                  <tbody>
                    <tr>
                      <td><strong style={{color:"var(--text-0)"}}>Editing Toolbar</strong></td>
                      <td><strong style={{color:"var(--accent-4,#ff7b72)"}}>強烈推薦。</strong>在上方加入工具列，讓你用按鈕改顏色、字體大小、高亮。</td>
                    </tr>
                    <tr>
                      <td><strong style={{color:"var(--text-0)"}}>Style Settings</strong></td>
                      <td>配合主題，用拉桿式介面調整全域顏色、字體、間距。</td>
                    </tr>
                    <tr>
                      <td><strong style={{color:"var(--text-0)"}}>Recent Files</strong></td>
                      <td>在側邊欄顯示最近開啟的文件，切換筆記極快。</td>
                    </tr>
                    <tr>
                      <td><strong style={{color:"var(--text-0)"}}>Admonition</strong></td>
                      <td>製作像「警告」、「提示」那樣漂亮的區塊（Callouts）。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ObsidianChapter>

            <ObsidianChapter id="ob-2" num="0-2" title="快捷鍵設定">
              <p>學會快捷鍵後，整個筆記操作會快上 3 倍：</p>
              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>快捷鍵</th><th>功能</th></tr></thead>
                  <tbody>
                    <tr><td><code>Ctrl + E</code></td><td>切換編輯／閱讀模式</td></tr>
                    <tr><td><code>Ctrl + O</code></td><td>快速搜尋並開啟檔案</td></tr>
                    <tr><td><code>Ctrl + N</code></td><td>新增筆記</td></tr>
                    <tr><td><code>Ctrl + P</code></td><td>命令面板（找任何功能用這個）</td></tr>
                    <tr><td><code>Alt + D</code><span style={{color:"var(--text-3)",marginLeft:6}}>(需自訂)</span></td><td>建議將「刪除目前檔案」設為這組快捷鍵</td></tr>
                    <tr><td><code>[[</code></td><td>建立雙向連結（內部筆記連結）</td></tr>
                  </tbody>
                </table>
              </div>
              <Callout>
                <strong>自訂快捷鍵：</strong>進入「設定 → 快速鍵」，搜尋功能名稱即可指派。
              </Callout>
            </ObsidianChapter>

            <ObsidianChapter id="ob-3" num="0-3" title="Markdown 基本語法">
              <p>Markdown 是一種輕量級的<strong style={{color:"var(--text-0)"}}>標記語言</strong>，設計初衷是讓文件「可讀性」極高，即使沒經過排版也像一般純文字。現在不論是 GitHub、Notion、Discord 還是技術文件，幾乎都以 Markdown 為主流。</p>

              <h3 className="sub">1. 標題（Headings）</h3>
              <p>使用 <code>#</code> 號表示，<code>#</code> 的數量代表標題的層級。<strong style={{color:"var(--accent-4,#ff7b72)"}}>注意：<code>#</code> 與文字之間必須有一個空格。</strong></p>
              <CodeBlock lang="bash" file="headings.md" code={`# 第一級標題
## 第二級標題
### 第三級標題
#### 第四級標題
##### 第五級標題
###### 第六級標題`} />

              <h3 className="sub">2. 強調文字（Emphasis）</h3>
              <ul>
                <li><strong style={{color:"var(--text-0)"}}>粗體</strong>：使用兩個 <code>*</code> 或 <code>_</code> 包圍，例如 <code>**粗體**</code></li>
                <li><em>斜體</em>：使用一個 <code>*</code> 或 <code>_</code> 包圍，例如 <code>*斜體*</code></li>
                <li><span style={{textDecoration:"line-through"}}>刪除線</span>：使用兩個 <code>~</code> 包圍，例如 <code>~~刪除線~~</code></li>
              </ul>

              <h3 className="sub">3. 列表（Lists）</h3>
              <CodeBlock lang="bash" file="lists.md" code={`# 無序列表（用 * + 或 - 開頭）
* 項目一
* 項目二
  * 子項目（縮排即可）

# 有序列表（數字加一個點）
1. 第一步驟
2. 第二步驟`} />

              <h3 className="sub">4. 連結與圖片</h3>
              <CodeBlock lang="bash" file="links.md" code={`# 連結
[顯示名稱](網址)
[點我前往 Google](https://www.google.com)

# 圖片
![替代文字](圖片網址)
![Markdown Logo](https://markdown-here.com/img/icon256.png)`} />

              <h3 className="sub">5. 程式碼（Code）</h3>
              <p><strong>行內程式碼：</strong>使用一個反引號 <code>`</code> 包圍。<br/>
              <strong>程式碼區塊：</strong>使用三個反引號 ``` 包圍，可指定語言達到語法高亮。</p>
              <CodeBlock lang="bash" file="code.md" code={`# 行內：這段文字中有個 \`code\` 語法

# 區塊：
\`\`\`python
def hello():
    print("Hello Markdown!")
\`\`\``} />

              <h3 className="sub">6. 引用與分隔線</h3>
              <CodeBlock lang="bash" file="quote.md" code={`# 引用：在開頭加上 >
> 這是一段引用文字，通常用來補充說明或摘錄。

# 分隔線：三個以上 --- 或 *** 或 ___
---`} />

              <h3 className="sub">7. 表格（Tables）</h3>
              <CodeBlock lang="bash" file="table.md" code={`| 項目 | 價格 | 備註     |
| ---- | ---- | -------- |
| 蘋果 | 30   | 左對齊   |
| 香蕉 | 20   | 居中對齊 |
| 西瓜 | 100  | 右對齊   |`} />

              <Callout>
                <strong>💡 寫作小撇步</strong>
                <ol style={{margin:"8px 0 0",paddingLeft:18}}>
                  <li><strong>空格很重要</strong>：標題符號 <code>#</code> 或列表符號 <code>*</code> 後面一定要加空格</li>
                  <li><strong>換行</strong>：單純按一次 Enter 有時不會換行，行末輸入<strong>兩個空格</strong>可強制換行</li>
                  <li><strong>預覽</strong>：建議使用 <strong>VS Code</strong>、<strong>Typora</strong> 或 <strong>Obsidian</strong> 等支援即時預覽的編輯器</li>
                </ol>
              </Callout>
            </ObsidianChapter>

            <ObsidianChapter id="ob-4" num="0-4" title="Markdown 轉 PDF">
              <p>從終端機（Terminal）轉檔通常是處理自動化或批次轉換最有效率的方式。以下是三種主流工具：</p>

              <h3 className="sub">1. Pandoc — 最強大（文件轉換的瑞士刀）🛠️</h3>
              <p>Pandoc 可以將 Markdown 轉成 PDF，但它需要一個「引擎」處理排版（通常是 LaTeX）。</p>
              <CodeBlock lang="bash" file="install (macOS)" code={`# macOS（使用 Homebrew）
brew install pandoc basictex`} />
              <CodeBlock lang="bash" file="install (Windows)" code={`# Windows（使用 Winget）
winget install pandoc

# Windows 使用者建議另外安裝：
# - MiKTeX：https://miktex.org/download
# - 或 TinyTeX：https://yihui.org/tinytex/`} />
              <CodeBlock lang="bash" file="convert" code={`# 轉換指令
pandoc input.md -o output.pdf`} />

              <h3 className="sub">2. Mermaid CLI — 如果有圖表 📊</h3>
              <p>如果 Markdown 裡有很多 Mermaid 圖表（流程圖、甘特圖），建議使用 <code>mmdc</code>：</p>
              <CodeBlock lang="bash" file="terminal" code={`# 安裝
npm install -g @mermaid-js/mermaid-cli

# 轉換
mmdc -i input.md -o output.pdf`} />

              <h3 className="sub">3. md-to-pdf — 輕量、快速 ⚡</h3>
              <p>不想安裝龐大的 LaTeX 引擎時，這個工具基於 Chrome（Puppeteer）渲染，速度非常快。</p>
              <CodeBlock lang="bash" file="terminal" code={`# 安裝
npm install -g md-to-pdf

# 轉換
md-to-pdf manual.md`} />

              <Callout>
                <strong style={{color:"var(--accent-4,#ff7b72)"}}>⚠️ 中文字體問題</strong><br/>
                使用終端機轉 PDF 最常遇到的問題是<strong>中文字體顯示不出來</strong>。預設的 LaTeX 引擎不認識中文字體，要加參數指定：
              </Callout>
              <CodeBlock lang="bash" file="terminal (macOS)" code={`# 使用 XeLaTeX 引擎並指定中文字體
pandoc input.md -o output.pdf \\
  --pdf-engine=xelatex \\
  -V mainfont="Heiti TC"`} />
            </ObsidianChapter>

            <ObsidianChapter id="ob-5" num="0-5" title="Claude Code 插件（Obsidian + AI）">
              <p>這款插件讓 Claude AI 可以直接讀寫整個 Vault，是把 Obsidian 變成 AI 工作站的關鍵。安裝分為三個階段：</p>

              <h3 className="sub">階段一：系統環境準備</h3>
              <p>這款插件只是個「橋樑」，你的電腦必須先裝好 Anthropic 官方的 Claude Code 程式：</p>
              <ol>
                <li><strong style={{color:"var(--text-0)"}}>安裝 Node.js</strong>：到 <a href="https://nodejs.org" target="_blank" rel="noreferrer">官網</a>下載並安裝 LTS 版</li>
                <li><strong style={{color:"var(--text-0)"}}>安裝 Claude CLI</strong>：</li>
              </ol>
              <CodeBlock lang="bash" file="terminal" code={`npm install -g @anthropic-ai/claude-code`} />
              <p style={{marginTop:8}}>3. <strong style={{color:"var(--text-0)"}}>登入授權</strong>：在終端機輸入 <code>claude</code>，依照畫面提示完成瀏覽器登入（需有 Anthropic 帳號且有 API 額度）</p>

              <h3 className="sub">階段二：透過 BRAT 安裝 Obsidian 插件</h3>
              <p>因為此插件尚未上架官方商店，需使用 BRAT（Beta Reviewer's Auto-update Tool）：</p>
              <ol>
                <li>在 <strong style={{color:"var(--text-0)"}}>Settings → Community plugins</strong> 搜尋並安裝 <strong style={{color:"var(--text-0)"}}>BRAT</strong></li>
                <li>打開 BRAT，點選 <strong style={{color:"var(--text-0)"}}>Add Beta plugin</strong></li>
                <li>Repository 網址填入：</li>
              </ol>
              <CodeBlock lang="bash" file="repository url" code={`https://github.com/deivid11/obsidian-claude-code-plugin`} />
              <ol start="4">
                <li><strong style={{color:"var(--text-0)"}}>Version（版本）</strong>：下拉選最新版本（通常數字最大），若沒東西直接點 Add plugin</li>
                <li>安裝完成後，<strong>務必</strong>在插件列表將 <strong style={{color:"var(--text-0)"}}>Claude Code Integration</strong> 切換為 <strong style={{color:"var(--text-0)"}}>Enable</strong></li>
              </ol>

              <h3 className="sub">階段三：插件內部的關鍵設定</h3>
              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>設定</th><th>說明</th></tr></thead>
                  <tbody>
                    <tr>
                      <td><strong style={{color:"var(--text-0)"}}>Claude Executable Path</strong></td>
                      <td>插件會自動尋找 <code>claude</code> 的位置。報錯找不到路徑時，手動指定：<br/>
                      <strong>Mac/Linux</strong>：<code>/usr/local/bin/claude</code><br/>
                      <strong>Windows</strong>：<code>{`C:\\Users\\你的名稱\\AppData\\Roaming\\npm\\claude.cmd`}</code></td>
                    </tr>
                    <tr>
                      <td><strong style={{color:"var(--text-0)"}}>Permission Mode</strong></td>
                      <td><strong>Interactive（互動模式）</strong>：Claude 修改你的筆記前會先問你（建議初學者選這個）<br/>
                      <strong>Permissionless（無須授權）</strong>：AI 可自動批次修改文件</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="sub">主要功能與優點</h3>
              <ul>
                <li><strong style={{color:"var(--text-0)"}}>直接讀寫整個 Vault</strong>：不只能看當前筆記，還能根據整個筆記庫（Memory）來回答問題</li>
                <li><strong style={{color:"var(--text-0)"}}>側邊欄操作</strong>：不需要在 Obsidian 和終端機視窗切換，直接在右側邊欄對話</li>
                <li><strong style={{color:"var(--text-0)"}}>支援指令運作</strong>：可在對話框下達 <code>/search</code> 或 <code>/compact</code> 等 Claude Code 原生指令</li>
              </ul>

              <h3 className="sub">常見問題排除</h3>
              <Collapse title="點擊 Add Plugin 出現紅色驚嘆號？" meta="error">
                <p>請檢查網址是否正確，且確認電腦能連上 GitHub。</p>
              </Collapse>
              <Collapse title="側邊欄沒出現圖示？" meta="ui">
                <p>重啟 Obsidian，或在 Command Palette（<code>Ctrl/Cmd + P</code>）搜尋 <code>Claude: Open Sidebar</code>。</p>
              </Collapse>
            </ObsidianChapter>

            <ObsidianChapter id="ob-6" num="0-6" title="工具關係圖">
              <p>三張圖快速理解 Obsidian 如何與 AI 工具、VS Code、Claude Code 串接：</p>

              <h3 className="sub">圖一：Obsidian × AI 工具</h3>
              <div className="img-wrap">
                <img src={(typeof window !== "undefined" && window.__resources && window.__resources.obsidianAiTools) || "assets/obsidian-ai-tools.png"} alt="Obsidian 與 AI 工具關係圖" />
                <div className="img-caption">Obsidian 作為知識中樞，串接各種 AI 工具</div>
              </div>

              <h3 className="sub">圖二：Obsidian × Claude Code 代理</h3>
              <div className="img-wrap">
                <img src={(typeof window !== "undefined" && window.__resources && window.__resources.obsidianClaudeCode) || "assets/obsidian-claude-code.png"} alt="Obsidian 與 Claude Code 代理關係圖" />
                <div className="img-caption">Claude Code 插件作為代理，直接讀寫 Vault 的整個筆記庫</div>
              </div>

              <h3 className="sub">圖三：Obsidian × VS Code</h3>
              <div className="img-wrap">
                <img src={(typeof window !== "undefined" && window.__resources && window.__resources.obsidianVscode) || "assets/obsidian-vscode.png"} alt="Obsidian 與 VS Code 關係圖" />
                <div className="img-caption">VS Code 與 Obsidian 互補：一個寫程式、一個整理知識</div>
              </div>
            </ObsidianChapter>
          </>
        )},

        { label: "重點清單", badge: 7, content: (
          <>
            <Collapse title="01 ─ 安裝完成檢查" meta="checklist" defaultOpen>
              <ul>
                <li>✓ Obsidian 已安裝並能正常開啟</li>
                <li>✓ 已建立一個 Vault（筆記資料夾）</li>
                <li>✓ 可以順利建立 / 編輯 Markdown 檔案</li>
                <li>✓ 已關閉社群外掛的「安全模式」</li>
              </ul>
            </Collapse>
            <Collapse title="02 ─ 推薦必裝外掛" meta="4 個">
              <ul>
                <li><strong style={{color:"var(--text-0)"}}>Editing Toolbar</strong> — 工具列（強烈推薦）</li>
                <li><strong style={{color:"var(--text-0)"}}>Style Settings</strong> — 主題拉桿設定</li>
                <li><strong style={{color:"var(--text-0)"}}>Recent Files</strong> — 最近開啟檔案</li>
                <li><strong style={{color:"var(--text-0)"}}>Admonition</strong> — 漂亮的 Callout 區塊</li>
                <li><strong style={{color:"var(--text-0)"}}>BRAT</strong> — 安裝第三方 / Beta 插件</li>
                <li><strong style={{color:"var(--text-0)"}}>Claude Code Integration</strong> — AI 整合</li>
              </ul>
            </Collapse>
            <Collapse title="03 ─ 基本快捷鍵" meta="6 組">
              <ul>
                <li><code>Ctrl + E</code> — 編輯／閱讀模式切換</li>
                <li><code>Ctrl + O</code> — 快速開啟檔案</li>
                <li><code>Ctrl + N</code> — 新增筆記</li>
                <li><code>Ctrl + P</code> — 命令面板</li>
                <li><code>Alt + D</code> — 刪除檔案（需自訂）</li>
                <li><code>[[</code> — 建立雙向連結</li>
              </ul>
            </Collapse>
            <Collapse title="04 ─ Markdown 七大語法" meta="syntax">
              <ul>
                <li><code>#</code> 標題（1-6 級）</li>
                <li><code>**粗體**</code>、<code>*斜體*</code>、<code>~~刪除線~~</code></li>
                <li><code>* / - / +</code> 無序列表、<code>1.</code> 有序列表</li>
                <li><code>[文字](網址)</code>、<code>![alt](圖片)</code></li>
                <li>``` 程式碼區塊（可指定語言）</li>
                <li><code>{`>`}</code> 引用、<code>---</code> 分隔線</li>
                <li><code>| 表 | 格 |</code> 表格</li>
              </ul>
            </Collapse>
            <Collapse title="05 ─ Markdown 轉 PDF 工具" meta="3 個">
              <ul>
                <li><strong style={{color:"var(--text-0)"}}>Pandoc</strong> — 最強大，需 LaTeX 引擎</li>
                <li><strong style={{color:"var(--text-0)"}}>Mermaid CLI</strong> — 含流程圖時用</li>
                <li><strong style={{color:"var(--text-0)"}}>md-to-pdf</strong> — 輕量快速（基於 Chrome）</li>
              </ul>
            </Collapse>
            <Collapse title="06 ─ Claude Code 插件三階段" meta="install">
              <ul>
                <li><strong style={{color:"var(--text-0)"}}>階段一：</strong>安裝 Node.js + Claude CLI + 登入</li>
                <li><strong style={{color:"var(--text-0)"}}>階段二：</strong>透過 BRAT 安裝 Obsidian 插件</li>
                <li><strong style={{color:"var(--text-0)"}}>階段三：</strong>設定 Executable Path 與 Permission Mode</li>
              </ul>
            </Collapse>
            <Collapse title="07 ─ 同步與備份" meta="sync">
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

Object.assign(window, { ObsidianPage });

