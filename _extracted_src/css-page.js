/* global React, CodeBlock, Tabs, Collapse, SectionTitle, Callout */

// =============== CSS ===============
function CssPage() {
  return (
    <>
      <div className="page-eyebrow">前端網頁程式 / 02</div>
      <h1 className="page-title">CSS</h1>
      <p className="page-subtitle">
        CSS（Cascading Style Sheets）負責網頁的外觀與排版。透過選擇器套用樣式，並用 Flexbox / Grid 進行版面配置。
      </p>

      <Tabs tabs={[
        { label: "程式語法", badge: "Syntax", content: (
          <>
            <SectionTitle hash="basic">選擇器語法</SectionTitle>
            <CodeBlock lang="css" file="syntax.css" code={`/* 元素選擇器 */
h1 { color: #58a6ff; }

/* class 選擇器 */
.button { padding: 8px 16px; }

/* id 選擇器 */
#main { max-width: 1200px; }

/* 偽類 */
a:hover { text-decoration: underline; }

/* 後代選擇器 */
.card .title { font-size: 18px; }`} />

            <SectionTitle hash="layout">Flex 與 Grid</SectionTitle>
            <CodeBlock lang="css" file="layout.css" code={`/* Flexbox：一維排列 */
.row {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
}

/* Grid：二維排列 */
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`} />
          </>
        )},
        { label: "程式範例", badge: "Demo", content: (
          <>
            <p>常見卡片元件樣式：</p>
            <CodeBlock lang="css" file="card.css" code={`.card {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 20px;
  transition: border-color 0.15s, transform 0.15s;
}

.card:hover {
  border-color: #58a6ff;
  transform: translateY(-2px);
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
}`} />

            <p>使用 CSS 變數建立主題：</p>
            <CodeBlock lang="css" file="theme.css" code={`:root {
  --bg: #0d1117;
  --fg: #e6edf3;
  --accent: #58a6ff;
  --radius: 8px;
}

body {
  background: var(--bg);
  color: var(--fg);
}

.btn {
  background: var(--accent);
  border-radius: var(--radius);
}`} />
          </>
        )},
        { label: "程式清單", badge: 5, content: (
          <>
            <Collapse title="盒模型（Box Model）" meta="4 屬性" defaultOpen>
              <ul>
                <li><code>width</code> / <code>height</code> — 內容寬高</li>
                <li><code>padding</code> — 內距</li>
                <li><code>border</code> — 邊框</li>
                <li><code>margin</code> — 外距</li>
              </ul>
            </Collapse>
            <Collapse title="排版（Layout）" meta="3 模式">
              <ul>
                <li><code>display: flex</code> — 一維排列</li>
                <li><code>display: grid</code> — 二維排列</li>
                <li><code>position: absolute / fixed / sticky</code> — 定位</li>
              </ul>
            </Collapse>
            <Collapse title="文字（Typography）" meta="5 屬性">
              <ul>
                <li><code>font-family</code></li>
                <li><code>font-size</code></li>
                <li><code>font-weight</code></li>
                <li><code>line-height</code></li>
                <li><code>letter-spacing</code></li>
              </ul>
            </Collapse>
            <Collapse title="色彩與背景" meta="4 屬性">
              <ul>
                <li><code>color</code></li>
                <li><code>background</code></li>
                <li><code>opacity</code></li>
                <li><code>box-shadow</code></li>
              </ul>
            </Collapse>
            <Collapse title="動畫與過渡" meta="2 屬性">
              <ul>
                <li><code>transition</code> — 屬性變化過渡</li>
                <li><code>animation</code> + <code>@keyframes</code> — 關鍵影格動畫</li>
              </ul>
            </Collapse>
          </>
        )},
      ]} />
    </>
  );
}

Object.assign(window, { CssPage });

