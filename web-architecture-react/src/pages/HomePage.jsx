import { SectionTitle, Callout, CodeBlock, Tabs, Collapse } from '../components/CodeBlock';

export function HomePage({ go }) {
  return (
    <>
      <div className="hero">
        <div className="hero-grid">
          <div>
            <div className="page-eyebrow">README.md</div>
            <h1 className="page-title">程式網頁架構<br />從筆記到上線</h1>
            <p className="page-subtitle">
              一份完整的網頁開發學習文件，涵蓋環境安裝、前端規劃、前後端程式與部署發佈。每個項目皆包含程式語法、程式範例與程式清單。
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-primary" onClick={() => go('obsidian')}>從零開始 →</button>
              <button className="btn" onClick={() => go('planning')}>檢視流程</button>
            </div>
          </div>
          <div className="hero-terminal">
            <div className="codeblock-head">
              <span className="codeblock-dots"><span></span><span></span><span></span></span>
              <span className="codeblock-file">~/web-stack</span>
            </div>
            <div className="term-body">
              <span className="term-line"><span className="term-prompt">$</span><span className="term-cmd">tree ./web-architecture</span></span>
              <span className="term-line term-out">.</span>
              <span className="term-line term-out">├── 環境安裝與設定/</span>
              <span className="term-line term-out">│   ├── Obsidian</span>
              <span className="term-line term-out">│   ├── Visual Studio Code</span>
              <span className="term-line term-out">│   └── Node.js</span>
              <span className="term-line term-out">├── 前端網頁規劃/</span>
              <span className="term-line term-out">├── 前端網頁程式/</span>
              <span className="term-line term-out">│   ├── HTML</span>
              <span className="term-line term-out">│   ├── CSS</span>
              <span className="term-line term-out">│   ├── JavaScript</span>
              <span className="term-line term-out">│   └── React</span>
              <span className="term-line term-out">├── 後端網頁程式/</span>
              <span className="term-line term-out">│   └── Python</span>
              <span className="term-line term-out">└── 部署網站教學/</span>
              <span className="term-line term-out">    └── GitHub Pages</span>
              <span className="term-line"><span className="term-prompt">$</span><span className="term-cursor"></span></span>
            </div>
          </div>
        </div>

        <div className="stats">
          <div className="stat"><div className="stat-num">5</div><div className="stat-label">學習階段</div></div>
          <div className="stat"><div className="stat-num">9</div><div className="stat-label">技術主題</div></div>
          <div className="stat"><div className="stat-num">∞</div><div className="stat-label">程式範例</div></div>
        </div>
      </div>

      <SectionTitle hash="architecture">整體架構</SectionTitle>
      <p>從筆記到上線，完整流程分為五大階段：</p>

      <div className="arch">
        <div className="arch-row">
          <div>
            <div className="arch-label">環境安裝與設定</div>
            <div className="arch-label-sub">Setup</div>
          </div>
          <div className="arch-items">
            <span className="arch-pill" onClick={() => go('obsidian')}><span className="num">01</span>Obsidian</span>
            <span className="arch-pill" onClick={() => go('vscode')}><span className="num">02</span>Visual Studio Code</span>
            <span className="arch-pill" onClick={() => go('nodejs')}><span className="num">03</span>Node.js</span>
          </div>
        </div>
        <div className="arch-row">
          <div>
            <div className="arch-label">前端網頁規劃</div>
            <div className="arch-label-sub">Planning</div>
          </div>
          <div className="arch-items">
            <span className="arch-pill" onClick={() => go('planning')}><span className="num">①</span>Obsidian 文件</span>
            <span className="arch-pill" onClick={() => go('planning')}><span className="num">②</span>Claude 設計</span>
            <span className="arch-pill" onClick={() => go('planning')}><span className="num">③</span>VS Code 實作</span>
            <span className="arch-pill" onClick={() => go('planning')}><span className="num">④</span>GitHub 部署</span>
          </div>
        </div>
        <div className="arch-row">
          <div>
            <div className="arch-label">前端網頁程式</div>
            <div className="arch-label-sub">Client Side</div>
          </div>
          <div className="arch-items">
            <span className="arch-pill" onClick={() => go('html')}><span className="num">01</span>HTML</span>
            <span className="arch-pill" onClick={() => go('css')}><span className="num">02</span>CSS</span>
            <span className="arch-pill" onClick={() => go('js')}><span className="num">03</span>JavaScript</span>
            <span className="arch-pill" onClick={() => go('react')}><span className="num">04</span>React</span>
          </div>
        </div>
        <div className="arch-row">
          <div>
            <div className="arch-label">後端網頁程式</div>
            <div className="arch-label-sub">Server Side</div>
          </div>
          <div className="arch-items">
            <span className="arch-pill" onClick={() => go('python')}><span className="num">01</span>Python</span>
          </div>
        </div>
        <div className="arch-row">
          <div>
            <div className="arch-label">部署網站教學</div>
            <div className="arch-label-sub">Deploy</div>
          </div>
          <div className="arch-items">
            <span className="arch-pill" onClick={() => go('deploy')}><span className="num">01</span>GitHub Pages</span>
            <span className="arch-pill" onClick={() => go('deploy')}><span className="num">02</span>Vercel / Netlify</span>
          </div>
        </div>
      </div>

      <SectionTitle hash="quick-start">快速導覽</SectionTitle>
      <div className="card-grid">
        <div className="card" onClick={() => go('obsidian')}>
          <div className="card-icon">📓</div>
          <div className="card-title">Obsidian</div>
          <p className="card-desc">建立程式學習筆記資料庫。雙向連結 + Markdown。</p>
          <div className="card-foot"><span className="tag">Setup</span><span>5 章節</span></div>
        </div>
        <div className="card" onClick={() => go('vscode')}>
          <div className="card-icon">VS</div>
          <div className="card-title">Visual Studio Code</div>
          <p className="card-desc">最主流的程式碼編輯器，含中文化、必裝外掛設定。</p>
          <div className="card-foot"><span className="tag">Setup</span><span>3 章節</span></div>
        </div>
        <div className="card" onClick={() => go('nodejs')}>
          <div className="card-icon">⬢</div>
          <div className="card-title">Node.js</div>
          <p className="card-desc">JavaScript 執行環境 + npm 套件管理。LTS 安裝與驗證。</p>
          <div className="card-foot"><span className="tag">Setup</span><span>4 步驟</span></div>
        </div>
        <div className="card" onClick={() => go('planning')}>
          <div className="card-icon">★</div>
          <div className="card-title">前端網頁規劃</div>
          <p className="card-desc">從筆記到部署的四階段工作流程。</p>
          <div className="card-foot"><span className="tag">Workflow</span><span>4 步驟</span></div>
        </div>
        <div className="card" onClick={() => go('html')}>
          <div className="card-icon">&lt;/&gt;</div>
          <div className="card-title">HTML</div>
          <p className="card-desc">網頁的骨架。學會語意化標籤、表單與多媒體元素。</p>
          <div className="card-foot"><span className="tag html">HTML5</span><span>4 章節</span></div>
        </div>
        <div className="card" onClick={() => go('css')}>
          <div className="card-icon">{'{ }'}</div>
          <div className="card-title">CSS</div>
          <p className="card-desc">外觀與排版。掌握 Flex、Grid 與動畫的基本功。</p>
          <div className="card-foot"><span className="tag css">CSS3</span><span>5 章節</span></div>
        </div>
        <div className="card" onClick={() => go('js')}>
          <div className="card-icon">JS</div>
          <div className="card-title">JavaScript</div>
          <p className="card-desc">頁面的靈魂。從變數、函式到 DOM 與非同步請求。</p>
          <div className="card-foot"><span className="tag js">ES2024</span><span>6 章節</span></div>
        </div>
        <div className="card" onClick={() => go('react')}>
          <div className="card-icon">⚛</div>
          <div className="card-title">React</div>
          <p className="card-desc">元件化開發。useState、useEffect 與單頁應用基礎。</p>
          <div className="card-foot"><span className="tag react">v18</span><span>5 章節</span></div>
        </div>
        <div className="card" onClick={() => go('python')}>
          <div className="card-icon">Py</div>
          <div className="card-title">Python</div>
          <p className="card-desc">後端入門。Flask / FastAPI 與資料庫連線範例。</p>
          <div className="card-foot"><span className="tag py">3.12</span><span>4 章節</span></div>
        </div>
        <div className="card" onClick={() => go('deploy')}>
          <div className="card-icon">↗</div>
          <div className="card-title">部署網站教學</div>
          <p className="card-desc">GitHub Pages 從零到上線。也介紹 Vercel、Netlify。</p>
          <div className="card-foot"><span className="tag">Deploy</span><span>4 步驟</span></div>
        </div>
      </div>
    </>
  );
}

export function PlanningPage() {
  return (
    <>
      <div className="page-eyebrow">前端網頁規劃</div>
      <h1 className="page-title">規劃 / Planning</h1>
      <p className="page-subtitle">
        從筆記到部署，完整的網頁開發工作流程。每個階段都有對應的工具與產出，把整個流程走過一次，再回頭精修細節。
      </p>

      <SectionTitle hash="workflow">完整工作流程</SectionTitle>
      <div className="arch" style={{ padding: '24px' }}>
        <div className="arch-row">
          <div><div className="arch-label">Step 1</div><div className="arch-label-sub">知識整理</div></div>
          <div className="arch-items">
            <span className="arch-pill"><span className="num">①</span>Obsidian 文件規劃</span>
            <span className="arch-pill">資訊架構</span>
            <span className="arch-pill">內容草稿</span>
          </div>
        </div>
        <div className="arch-row">
          <div><div className="arch-label">Step 2</div><div className="arch-label-sub">畫面設計</div></div>
          <div className="arch-items">
            <span className="arch-pill"><span className="num">②</span>Claude Design 網頁畫面</span>
            <span className="arch-pill">線框稿</span>
            <span className="arch-pill">視覺風格</span>
          </div>
        </div>
        <div className="arch-row">
          <div><div className="arch-label">Step 3</div><div className="arch-label-sub">程式實作</div></div>
          <div className="arch-items">
            <span className="arch-pill"><span className="num">③</span>VS Code 統整程式</span>
            <span className="arch-pill">HTML 原型</span>
            <span className="arch-pill">轉 React 架構</span>
          </div>
        </div>
        <div className="arch-row">
          <div><div className="arch-label">Step 4</div><div className="arch-label-sub">發佈上線</div></div>
          <div className="arch-items">
            <span className="arch-pill"><span className="num">④</span>GitHub 部署網站</span>
            <span className="arch-pill">git push</span>
            <span className="arch-pill">Pages 設定</span>
          </div>
        </div>
      </div>

      <Tabs tabs={[
        {
          label: '程式語法', badge: 'Spec', content: (
            <>
              <SectionTitle hash="step1">① Obsidian 文件規劃</SectionTitle>
              <p>把要做的網站「先寫成筆記」，包含：</p>
              <ul>
                <li><strong style={{ color: 'var(--text-0)' }}>Sitemap</strong> — 樹狀架構圖，描述頁面之間的關係</li>
                <li><strong style={{ color: 'var(--text-0)' }}>Wireframe</strong> — 線框稿描述，定義內容區塊與優先順序</li>
                <li><strong style={{ color: 'var(--text-0)' }}>User Flow</strong> — 使用者流程圖，串聯多個畫面</li>
                <li><strong style={{ color: 'var(--text-0)' }}>Design Tokens</strong> — 顏色、字級、間距的共通變數</li>
              </ul>
              <SectionTitle hash="step2">② Claude Design 視覺設計</SectionTitle>
              <p>使用 Claude（或任何 AI 設計工具）把線框稿變成完整的網頁畫面：</p>
              <ul>
                <li>把 Obsidian 規劃文件貼給 Claude</li>
                <li>指定視覺風格（深色 / 文青 / 現代 / 復古...）</li>
                <li>請 AI 產出多個變體，互相比較</li>
                <li>確定主色、字型、版面後進入實作階段</li>
              </ul>
              <SectionTitle hash="step3">③ VS Code 程式整合</SectionTitle>
              <p>把 AI 設計出的 HTML 原型整理成可維護的 React 架構：</p>
              <ul>
                <li>建立專案目錄（Vite + React）</li>
                <li>把 HTML 拆解成獨立元件</li>
                <li>把樣式抽到共用的 CSS 變數</li>
                <li>加入互動行為（useState / useEffect）</li>
              </ul>
              <SectionTitle hash="step4">④ GitHub 部署</SectionTitle>
              <p>把專案推上 GitHub，啟用 Pages 自動發佈：</p>
              <ul>
                <li><code>git init</code> → <code>git push</code></li>
                <li>Settings → Pages → 選擇分支</li>
                <li>網址：<code>username.github.io/repo-name</code></li>
              </ul>
              <Callout>
                <strong>提示：</strong>完整的部署步驟可參考左側選單的「部署網站教學」。
              </Callout>
            </>
          )
        },
        {
          label: '程式範例', badge: 'Demo', content: (
            <>
              <p>① 用 YAML 描述網站架構（在 Obsidian 中撰寫）：</p>
              <CodeBlock lang="bash" file="sitemap.yml" code={`# 網站架構描述檔
site:
  name: 程式學習網
  pages:
    - id: home
      path: /
      sections: [hero, features, footer]
    - id: docs
      path: /docs
      children:
        - { id: html, path: /docs/html }
        - { id: css,  path: /docs/css }
        - { id: js,   path: /docs/js }`} />
              <p>② 對應的線框稿描述（純文字）：</p>
              <CodeBlock lang="bash" file="wireframe.txt" code={`┌─────────────────────────────┐
│  Logo        Nav      CTA   │  ← Header (64px)
├─────────────────────────────┤
│                             │
│      Hero Title (h1)        │
│      Subtitle               │
│      [ Primary ] [Outline]  │
│                             │
├─────────────────────────────┤
│  ▢▢▢  ▢▢▢  ▢▢▢              │  ← Feature grid
└─────────────────────────────┘`} />
              <p>③ Claude 給你 HTML 原型 → 拆成 React 元件：</p>
              <CodeBlock lang="jsx" file="Hero.jsx" code={`export function Hero({ title, subtitle, ctaLabel, onCta }) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <button onClick={onCta}>{ctaLabel}</button>
    </section>
  );
}`} />
              <p>④ 推上 GitHub：</p>
              <CodeBlock lang="bash" file="terminal" code={`git add .
git commit -m "Initial site structure"
git push origin main
# → GitHub Pages 自動部署`} />
            </>
          )
        },
        {
          label: '程式清單', badge: 4, content: (
            <>
              <p>四個階段的關鍵產出清單：</p>
              <Collapse title="① Obsidian 文件規劃" meta="planning" defaultOpen>
                <ul>
                  <li><strong style={{ color: 'var(--text-0)' }}>00-index.md</strong> — 專案總覽 / 索引</li>
                  <li><strong style={{ color: 'var(--text-0)' }}>sitemap.yml</strong> — 網站架構</li>
                  <li><strong style={{ color: 'var(--text-0)' }}>user-research.md</strong> — 目標族群與使用情境</li>
                  <li><strong style={{ color: 'var(--text-0)' }}>tokens.json</strong> — 設計 Token</li>
                </ul>
              </Collapse>
              <Collapse title="② Claude Design 畫面設計" meta="design">
                <ul>
                  <li>給 Claude 的 prompt：「請依據附件文件做高擬真設計」</li>
                  <li>產出 1-3 個視覺風格變體</li>
                  <li>選定後請 AI 輸出完整 HTML + CSS</li>
                  <li>確認 RWD 在手機 / 平板 / 桌機都正常</li>
                </ul>
              </Collapse>
              <Collapse title="③ VS Code 程式整合" meta="implement">
                <ul>
                  <li>建立 Vite + React 專案：<code>npm create vite@latest</code></li>
                  <li>拆解 HTML 為元件：<code>Header.jsx</code>、<code>Hero.jsx</code>、<code>Footer.jsx</code></li>
                  <li>抽出共用樣式：<code>tokens.css</code></li>
                  <li>加入路由：<code>react-router-dom</code></li>
                </ul>
              </Collapse>
              <Collapse title="④ GitHub 部署發佈" meta="deploy">
                <ul>
                  <li>本機 <code>git init</code> + <code>git remote add</code></li>
                  <li>GitHub 建立 Public Repository</li>
                  <li><code>git push</code> 推上雲端</li>
                  <li>Settings → Pages → 啟用</li>
                  <li>取得網址：<code>https://username.github.io/repo</code></li>
                </ul>
              </Collapse>
            </>
          )
        },
      ]} />
    </>
  );
}
