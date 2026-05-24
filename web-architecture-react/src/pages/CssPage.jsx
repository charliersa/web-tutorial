import { useState, useEffect } from 'react';
import { CodeBlock, Tabs, Collapse, SectionTitle, Callout } from '../components/CodeBlock';

export function CssChIndex({ chapters }) {
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

export function CssChapter({ id, num, title, children }) {
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

// =============== CSS (full rewrite) ===============
export function CssPage() {
  const CHAPTERS = [
    { id: "css-0", num: "2-4-0", title: "基本語法與選擇器" },
    { id: "css-1", num: "2-4-1", title: "Flex 語法" },
    { id: "css-2", num: "2-4-2", title: "Padding 語法" },
    { id: "css-3", num: "2-4-3", title: "Font 語法" },
    { id: "css-4", num: "2-4-4", title: "Display 顯示模式" },
    { id: "css-5", num: "2-4-5", title: "Position 定位" },
  ];

  return (
    <>
      <div className="page-eyebrow">前端網頁程式 / 02</div>
      <h1 className="page-title">CSS</h1>
      <p className="page-subtitle">
        CSS（Cascading Style Sheets）負責網頁的外觀與排版。本章節依照 2-4-0 ~ 2-4-5 共 6 個小節，從基本語法、選擇器到 Flex、Display、Position 排版三大支柱。
      </p>

      <CssChIndex chapters={CHAPTERS} />

      <Tabs tabs={[
        { label: "章節說明", badge: "6", content: (
          <>
            {/* ───────────── 2-4-0 ───────────── */}
            <CssChapter id="css-0" num="2-4-0" title="基本語法與選擇器">
              <h3 className="sub">基本語法結構</h3>
              <CodeBlock lang="css" file="syntax" code={`selector {
    property: value;
}

/* 範例 */
h1 {
    color: red;
    font-size: 30px;
}`} />
              <ul>
                <li><code>h1</code> — 選擇器（Selector）</li>
                <li><code>color</code> — 屬性（Property）</li>
                <li><code>red</code> — 值（Value）</li>
              </ul>

              <h3 className="sub">常用選擇器</h3>
              <CodeBlock lang="css" file="selectors.css" code={`/* 元素選擇器 */
p   {}
div {}
h1  {}

/* class 類別 */
.box {}

/* id 選擇器 */
#header {}

/* 群組選擇器 */
h1, h2, p {}

/* 後代選擇器 */
nav a {}

/* 子元素選擇器 */
div > p {}

/* 偽類 Pseudo-class */
a:hover {}
input:focus {}
li:first-child {}

/* 偽元素 Pseudo-element */
p::before {}
p::after {}`} />

              <h3 className="sub">CSS 三種引入方式</h3>
              <CodeBlock lang="html" file="three ways" code={`<!-- 1. 行內樣式 -->
<div style="color:red;"></div>

<!-- 2. 內部樣式 -->
<style>
    h1 { color: red; }
</style>

<!-- 3. 外部樣式（推薦） -->
<link rel="stylesheet" href="style.css">`} />
            </CssChapter>

            {/* ───────────── 2-4-1 ───────────── */}
            <CssChapter id="css-1" num="2-4-1" title="Flex 語法">
              <p><strong style={{color:"var(--text-0)"}}>flex</strong> 是 <strong style={{color:"var(--text-0)"}}>Flexbox（彈性佈局）</strong>的簡寫。可以輕鬆解決傳統排版中很難處理的「<strong>垂直居中</strong>」或「<strong>等比例分配空間</strong>」等問題。</p>

              <Callout>
                Flexbox 的屬性分為兩個部分：
                <ol style={{margin:"6px 0 0", paddingLeft:18}}>
                  <li><strong>容器（Container）屬性</strong> — 設定在外層</li>
                  <li><strong>項目（Items）屬性</strong> — 設定在內層元件</li>
                </ol>
              </Callout>

              <h3 className="sub">1. 容器屬性（Container） 📦</h3>
              <p>設定在父層 <code>div</code> 上的屬性，決定裡面的小孩要怎麼排隊：</p>
              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>屬性</th><th>用途</th></tr></thead>
                  <tbody>
                    <tr><td><code>display: flex</code></td><td>啟動彈性盒子的開關</td></tr>
                    <tr><td><code>flex-direction</code></td><td>排隊方向（橫 <code>row</code> / 直 <code>column</code>）</td></tr>
                    <tr><td><code>flex-wrap</code></td><td>空間不夠時是否換行（<code>nowrap</code> / <code>wrap</code>）</td></tr>
                    <tr><td><code>justify-content</code></td><td>主軸對齊方式（左、置中、分散）</td></tr>
                    <tr><td><code>align-items</code></td><td>交錯軸（通常垂直）對齊方式</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="sub">2. 項目屬性（Items）</h3>
              <p>設定在內層元件（小孩）上的屬性，決定每個人要佔多少空間：</p>
              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>屬性</th><th>用途</th></tr></thead>
                  <tbody>
                    <tr><td><code>flex-grow</code></td><td>有剩餘空間時要「長大」多少比例</td></tr>
                    <tr><td><code>flex-shrink</code></td><td>空間不足時要「壓縮」多少比例</td></tr>
                    <tr><td><code>flex-basis</code></td><td>還沒分配剩餘空間前的基本寬度</td></tr>
                    <tr><td><code>align-self</code></td><td>允許個別元件覆蓋 <code>align-items</code> 設定</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="sub">範例：水平 + 垂直置中</h3>
              <CodeBlock lang="css" file="flex.css" code={`.container {
    display: flex;
    justify-content: center;   /* 水平置中 */
    align-items: center;       /* 垂直置中 */
    flex-wrap: wrap;           /* 空間不足換行 */
    gap: 16px;
    height: 300px;
}`} />
            </CssChapter>

            {/* ───────────── 2-4-2 ───────────── */}
            <CssChapter id="css-2" num="2-4-2" title="Padding 語法">
              <p><code>padding</code> 的屬性值可以使用像素（<code>px</code>）、百分比（<code>%</code>）或 <code>em</code> 等單位。根據你提供的<strong style={{color:"var(--text-0)"}}>數值數量</strong>，設定的方向順序會有所不同：</p>

              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>寫法</th><th>對應方向</th></tr></thead>
                  <tbody>
                    <tr><td><code>padding: 20px;</code></td><td>全部（上下左右）都是 20px</td></tr>
                    <tr><td><code>padding: 10px 20px;</code></td><td>上下 10px，左右 20px</td></tr>
                    <tr><td><code>padding: 10px 20px 30px;</code></td><td>上 10px，左右 20px，下 30px</td></tr>
                    <tr><td><code>padding: 5px 10px 15px 20px;</code></td><td>上、右、下、左（順時針方向）</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="sub">單獨設定某一方向</h3>
              <CodeBlock lang="css" file="padding-side.css" code={`.box {
    padding-top:    10px;   /* 上 */
    padding-right:  20px;   /* 右 */
    padding-bottom: 10px;   /* 下 */
    padding-left:   20px;   /* 左 */
}`} />

              <Callout>
                <strong>口訣：</strong>4 個值就是「<strong style={{color:"var(--accent-3,#ffa657)"}}>上 → 右 → 下 → 左</strong>」順時針方向。記不住的話，記得從「12 點鐘方向」開始順時針轉。
              </Callout>
            </CssChapter>

            {/* ───────────── 2-4-3 ───────────── */}
            <CssChapter id="css-3" num="2-4-3" title="Font 語法">
              <p>用來調整網頁文字外觀的核心工具。可以拆解成幾個獨立的屬性，或使用一個縮寫（Shorthand）屬性一次設定。</p>

              <h3 className="sub">1. 常用的獨立屬性 🖋️</h3>
              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>屬性</th><th>說明</th></tr></thead>
                  <tbody>
                    <tr><td><code>font-family</code></td><td>字體名稱（例如 <code>Arial</code>、<code>"Microsoft JhengHei"</code>）。建議最後加上一個通用字體類別（如 <code>sans-serif</code>）做備案</td></tr>
                    <tr><td><code>font-size</code></td><td>文字大小（如 <code>16px</code>、<code>1.2rem</code>、<code>120%</code>）</td></tr>
                    <tr><td><code>font-weight</code></td><td>文字粗細（<code>bold</code> 或數字 <code>400</code>、<code>700</code>）</td></tr>
                    <tr><td><code>font-style</code></td><td>文字樣式（<code>italic</code> 斜體）</td></tr>
                  </tbody>
                </table>
              </div>

              <CodeBlock lang="css" file="font-properties.css" code={`.title {
    font-family: "Microsoft JhengHei", Arial, sans-serif;
    font-size: 24px;
    font-weight: bold;
    font-style: italic;
}`} />

              <h3 className="sub">2. 縮寫語法（Shorthand）📦</h3>
              <p>順序：<strong>style → weight → size/line-height → family</strong></p>
              <CodeBlock lang="css" file="font-shorthand.css" code={`/* 一行寫完所有設定 */
.text {
    font: italic bold 18px/1.5 Arial, sans-serif;
}

/* 拆開來等同於： */
.text {
    font-style: italic;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.5;
    font-family: Arial, sans-serif;
}`} />
            </CssChapter>

            {/* ───────────── 2-4-4 ───────────── */}
            <CssChapter id="css-4" num="2-4-4" title="Display 顯示模式">
              <p><code>display</code> 屬性決定了 HTML 元素在網頁上如何「<strong style={{color:"var(--text-0)"}}>佔位</strong>」以及如何與鄰居「<strong style={{color:"var(--text-0)"}}>相處</strong>」。這是 CSS 排版中最基礎也最重要的觀念。</p>

              <CodeBlock lang="css" file="display modes" code={`display: block;
display: inline;
display: inline-block;
display: flex;
display: grid;
display: none;`} />

              <h3 className="sub">1. display: block（塊級元素）</h3>
              <p>是許多 HTML 標籤（如 <code>{`<div>`}</code>、<code>{`<h1>`}</code>、<code>{`<p>`}</code>）的預設值。</p>
              <ul>
                <li>會<strong style={{color:"var(--text-0)"}}>獨佔一行</strong>，後面元素會被擠到下一行</li>
                <li>寬度預設填滿父容器（100%）</li>
                <li>可自由設定 <code>width</code>、<code>height</code>、<code>padding</code>、<code>margin</code></li>
              </ul>

              <h3 className="sub">2. display: inline（行內元素）</h3>
              <p>是 <code>{`<p>`}</code> 內文字、<code>{`<span>`}</code>、<code>{`<a>`}</code> 的預設值。</p>
              <ul>
                <li>不會換行，與其他文字或行內元素排在同一行</li>
                <li><strong style={{color:"var(--accent-4,#ff7b72)"}}>無法</strong>設定 <code>width</code> / <code>height</code>，大小由內容決定</li>
                <li>垂直方向的 <code>margin</code> 無效，<code>padding</code> 有視覺效果但不會推開鄰居</li>
              </ul>

              <h3 className="sub">3. display: inline-block（行內塊級元素）</h3>
              <p>結合上述兩者的優點：</p>
              <ul>
                <li>像 <code>inline</code> 一樣可以並排在一起</li>
                <li>像 <code>block</code> 一樣可以設定 <code>width</code>、<code>height</code>、<code>margin</code>、<code>padding</code></li>
                <li><strong>常見用途：</strong>製作橫向導覽列的按鈕</li>
              </ul>

              <h3 className="sub">4. display: flex（彈性排版）</h3>
              <p>現代排版的主流。將父容器變成「彈性容器」，能輕鬆控制子元素的對齊與分配空間。</p>
              <ul>
                <li>子元素（Flex Items）預設橫向並排</li>
                <li>可輕鬆實現垂直居中、平均分配剩餘空間</li>
                <li><strong>適合：</strong>單一維度（一行或一列）的版面配置</li>
              </ul>

              <h3 className="sub">5. display: grid（網格排版）</h3>
              <p>最強大的佈局工具，適合複雜的整頁設計。</p>
              <ul>
                <li>將容器劃分為行（Row）與列（Column）</li>
                <li>可精確定位子元素在第幾列、第幾行，甚至跨行跨列</li>
                <li><strong>適合：</strong>二維度（棋盤式、不規則格子）的複雜配置</li>
              </ul>

              <h3 className="sub">6. display: none（隱藏元素）</h3>
              <p>不只是看不到，而是「<strong style={{color:"var(--accent-4,#ff7b72)"}}>完全消失</strong>」。</p>
              <ul>
                <li>元素會從頁面結構中移除，不佔據任何空間</li>
                <li>常用於選單的展開/收合，或在手機版隱藏某些區塊</li>
              </ul>
              <Callout>
                <strong>注意：</strong>與 <code>visibility: hidden</code> 不同 —— 後者雖然看不到，但<strong>會留下一塊空白</strong>位置。
              </Callout>

              <h3 className="sub">三大排版模式比較</h3>
              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>模式</th><th>最強用途</th><th>現代推薦度</th></tr></thead>
                  <tbody>
                    <tr><td><strong style={{color:"var(--text-0)"}}>Flex</strong></td><td>一維排版（單行或單列），適合導覽列、對齊按鈕</td><td>⭐⭐⭐⭐⭐ 最常用</td></tr>
                    <tr><td><strong style={{color:"var(--text-0)"}}>Grid</strong></td><td>二維排版（棋盤格、複雜佈局），適合整頁框架</td><td>⭐⭐⭐⭐⭐ 最強大</td></tr>
                    <tr><td><strong style={{color:"var(--text-0)"}}>Table</strong></td><td>模擬表格數據，或需要極古老瀏覽器兼容</td><td>⭐⭐ 較少用於排版</td></tr>
                  </tbody>
                </table>
              </div>
            </CssChapter>

            {/* ───────────── 2-4-5 ───────────── */}
            <CssChapter id="css-5" num="2-4-5" title="Position 定位">
              <p>在 CSS 中，<code>position</code> 屬性決定了元素在頁面上的<strong style={{color:"var(--text-0)"}}>定位基準點</strong>。理解這個屬性的關鍵在於搞清楚：<strong style={{color:"var(--accent-3,#ffa657)"}}>「它是相對於誰來定位的？」</strong></p>

              <h3 className="sub">1. static（靜態定位）</h3>
              <p>所有元素的<strong>預設值</strong>。</p>
              <ul>
                <li><strong>行為：</strong>元素按照正常的 HTML 文檔流（由上而下、由左而右）排列</li>
                <li><strong>特性：</strong>設定 <code>top</code>、<code>bottom</code>、<code>left</code>、<code>right</code> 或 <code>z-index</code> 均<strong style={{color:"var(--accent-4,#ff7b72)"}}>無效</strong></li>
                <li><strong>白話文：</strong>就是老老實實待在它該在的地方</li>
              </ul>

              <h3 className="sub">2. relative（相對定位）</h3>
              <p>相對於「<strong style={{color:"var(--text-0)"}}>元素原本的位置</strong>」進行偏移。</p>
              <ul>
                <li><strong>行為：</strong>雖然位移了，但<strong>原本佔據的空間仍會保留</strong>（不會被遞補）</li>
                <li><strong>核心用途 1：</strong>微調元素位置</li>
                <li><strong>核心用途 2（最重要）：</strong>作為子元素 <code>absolute</code> 的<strong>參考基準點</strong></li>
              </ul>

              <h3 className="sub">3. absolute（絕對定位）</h3>
              <p>相對於「<strong style={{color:"var(--text-0)"}}>最近的非 static 祖先元素</strong>」進行定位。</p>
              <ul>
                <li><strong>行為：</strong>元素會「飄起來」，<strong style={{color:"var(--accent-4,#ff7b72)"}}>不再佔據原本的空間</strong>，後面元素會遞補上來</li>
                <li><strong>定位邏輯：</strong>一直往外層找，直到找到 <code>position</code> 不是 <code>static</code> 的父層（通常給父層設 <code>relative</code>）。都沒找到就會以瀏覽器視窗為基準</li>
                <li><strong>範例：</strong>圖片上的文字標籤、關閉按鈕 ×</li>
              </ul>

              <h3 className="sub">4. fixed（固定定位）</h3>
              <p>相對於「<strong style={{color:"var(--text-0)"}}>瀏覽器視窗（Viewport）</strong>」進行定位。</p>
              <ul>
                <li><strong>行為：</strong>無論頁面如何捲動，元素都會固定在螢幕的特定位置</li>
                <li><strong>特性：</strong>同樣不佔據原本的空間（脫離文檔流）</li>
                <li><strong>範例：</strong>「回到頂部」按鈕、「固定在最上方的導覽列」</li>
              </ul>

              <h3 className="sub">5. sticky（黏性定位）</h3>
              <p>是 <code>relative</code> 與 <code>fixed</code> 的<strong style={{color:"var(--text-0)"}}>混合體</strong>。</p>
              <ul>
                <li><strong>行為：</strong>在捲動到特定位置前像 <code>relative</code>；超過閾值（如 <code>top: 0</code>）時，會像 <code>fixed</code> 一樣「黏」在螢幕上</li>
                <li><strong>限制：</strong>活動範圍僅限於<strong>父容器</strong>內。父容器捲出螢幕，它也會跟著消失</li>
                <li><strong>範例：</strong>表格的標題列、文章側邊欄</li>
              </ul>

              <h3 className="sub">💡 重點總結對照表</h3>
              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>定位類型</th><th>參考基準點</th><th>佔據原本空間？</th><th>常用情境</th></tr></thead>
                  <tbody>
                    <tr><td><strong style={{color:"var(--text-0)"}}>static</strong></td><td>無（正常流）</td><td>是</td><td>一般排版</td></tr>
                    <tr><td><strong style={{color:"var(--text-0)"}}>relative</strong></td><td>自己原本的位置</td><td><strong>是</strong></td><td>微調、當作父層基準</td></tr>
                    <tr><td><strong style={{color:"var(--text-0)"}}>absolute</strong></td><td>最近的非 static 父層</td><td>否</td><td>疊加元件、彈出視窗</td></tr>
                    <tr><td><strong style={{color:"var(--text-0)"}}>fixed</strong></td><td>瀏覽器視窗</td><td>否</td><td>導覽列、廣告、置頂鈕</td></tr>
                    <tr><td><strong style={{color:"var(--text-0)"}}>sticky</strong></td><td>滾動區域 + 父容器</td><td>是</td><td>捲動時固定標題</td></tr>
                  </tbody>
                </table>
              </div>

              <Callout>
                <strong>小技巧：</strong>當你發現 <code>absolute</code> 元素亂跑時，記得檢查它的父元素有沒有加上 <code>position: relative</code>！
              </Callout>
            </CssChapter>
          </>
        )},

        { label: "完整範例", badge: 2, content: (
          <>
            <h3 className="sub">範例 1 — Display 顯示模式完整示範</h3>
            <p>同時展示 <code>block</code>、<code>inline</code>、<code>inline-block</code>、<code>flex</code>、<code>grid</code>、<code>table</code> 六種模式：</p>
            <CodeBlock lang="html" file="display-demo.html" code={`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <title>Display Demo</title>
    <style>
        h1 { display: none; }
        .one   { display: block;  background: red;    padding: 10px; }
        .two   { display: inline; background: blue;   padding: 20px; }
        .three { display: inline-block; background: green; padding: 10px; }
        .four {
            display: flex;
            background: orange;
            padding: 10px;
            height: 150px;
            justify-content: space-around;  /* 均分剩餘空間 */
            align-items: center;            /* 垂直置中 */
        }
        .item { background: white; padding: 20px; border: 1px solid #333; }
        .five {
            display: grid;
            grid-template-columns: 100px 100px 100px 100px;
            gap: 50px;
            padding: 20px;
            background: purple;
            border: 5px solid #0fdd4d;
        }
        .six {
            display: table;
            width: 100%;
            background: brown;
            border-spacing: 10px;
        }
        .cell {
            display: table-cell;
            background: #fff;
            padding: 10px;
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <h1>Hello, World!</h1>
    <div class="one">One (block)</div>
    <div class="two">Two (inline)</div>
    <div class="three">Three (inline-block)</div>

    <div class="four">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>

    <div class="five">
        <span>Five</span><span>Five</span>
        <span>Five</span><span>Five</span>
    </div>

    <div class="six">
        <div class="cell">內容 A</div>
        <div class="cell">內容 B（文字較多時，隔壁會跟著變高）</div>
    </div>
</body>
</html>`} />

            <h3 className="sub">範例 2 — Position 定位實戰：商品卡片 + 導覽列</h3>
            <p>同時展示 <code>fixed</code>（導覽列）、<code>relative</code>（卡片父層）、<code>absolute</code>（SALE 標籤）的搭配：</p>
            <CodeBlock lang="html" file="position-demo.html" code={`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <title>Position Demo</title>
    <style>
        /* --- 1. Fixed 定位 --- */
        .navbar {
            position: fixed;        /* 相對於瀏覽器視窗 */
            top: 0;
            left: 0;
            width: 100%;
            height: 60px;
            background: #333;
            color: white;
            text-align: center;
            line-height: 60px;
            z-index: 1000;          /* 確保在最上層 */
        }

        .container {
            margin-top: 100px;      /* 留空間給固定導覽列 */
            display: flex;
            justify-content: center;
        }

        /* --- 2. Relative 定位 --- */
        .card {
            position: relative;     /* 核心：作為子元素 absolute 的基準點 */
            width: 300px;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        /* --- 3. Absolute 定位 --- */
        .badge {
            position: absolute;     /* 相對於最近的非 static 父層 (.card) */
            top: 10px;              /* 距離 .card 頂部 10px */
            right: 10px;
            background: #ff4757;
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
        }

        .content { padding: 15px; }
    </style>
</head>
<body>
    <nav class="navbar">固定導覽列 (Fixed)</nav>

    <div class="container">
        <div class="card">
            <span class="badge">SALE</span>
            <img src="https://via.placeholder.com/300x150" alt="產品圖">
            <div class="content">
                <h3>經典款運動鞋</h3>
                <p>這是一雙兼具舒適與風格的鞋子。</p>
            </div>
        </div>
    </div>
</body>
</html>`} />
          </>
        )},

        { label: "程式清單", badge: 15, content: (
          <>
            <p>CSS 完整語法分類總整理（適合學習網頁設計、前端開發與 UI 排版時使用）：</p>

            <Collapse title="01 ─ 選擇器（Selectors）" meta="7 種" defaultOpen>
              <ul>
                <li>元素選擇器：<code>{`p {} div {} h1 {}`}</code></li>
                <li>class 類別：<code>{`.box {}`}</code></li>
                <li>id 選擇器：<code>{`#header {}`}</code></li>
                <li>群組選擇器：<code>{`h1, h2, p {}`}</code></li>
                <li>後代選擇器：<code>{`nav a {}`}</code></li>
                <li>子元素選擇器：<code>{`div > p {}`}</code></li>
                <li>偽類：<code>{`a:hover {}`}</code>、<code>{`input:focus {}`}</code>、<code>{`li:first-child {}`}</code></li>
                <li>偽元素：<code>{`p::before {}`}</code>、<code>{`p::after {}`}</code></li>
              </ul>
            </Collapse>

            <Collapse title="02 ─ 文字與字體" meta="7 屬性">
              <ul>
                <li><code>color: blue;</code></li>
                <li><code>font-size: 20px;</code></li>
                <li><code>font-family: Arial;</code></li>
                <li><code>font-weight: bold;</code></li>
                <li><code>line-height: 1.5;</code></li>
                <li><code>text-align: center;</code></li>
                <li><code>text-shadow: 2px 2px 5px black;</code></li>
              </ul>
            </Collapse>

            <Collapse title="03 ─ 盒模型（Box Model）" meta="5 屬性">
              <ul>
                <li><code>width: 300px;</code> / <code>height: 200px;</code></li>
                <li><code>padding: 20px;</code></li>
                <li><code>margin: 20px;</code></li>
                <li><code>border: 1px solid black;</code></li>
                <li><code>border-radius: 10px;</code></li>
              </ul>
            </Collapse>

            <Collapse title="04 ─ 背景" meta="4 屬性">
              <ul>
                <li><code>background-color: red;</code></li>
                <li><code>background-image: url(bg.jpg);</code></li>
                <li><code>background-size: cover;</code></li>
                <li><code>background-repeat: no-repeat;</code></li>
              </ul>
            </Collapse>

            <Collapse title="05 ─ 定位（Position）" meta="5 種">
              <ul>
                <li><code>position: static;</code> — 預設</li>
                <li><code>position: relative;</code> — 相對自己原本位置</li>
                <li><code>position: absolute;</code> — 相對最近非 static 父層</li>
                <li><code>position: fixed;</code> — 相對瀏覽器視窗</li>
                <li><code>position: sticky;</code> — 黏性（混合體）</li>
                <li>搭配 <code>top / left / right / bottom</code> 偏移</li>
              </ul>
            </Collapse>

            <Collapse title="06 ─ Flex 排版" meta="4 屬性">
              <ul>
                <li><code>display: flex;</code></li>
                <li><code>justify-content: center;</code> — 水平排列</li>
                <li><code>align-items: center;</code> — 垂直排列</li>
                <li><code>flex-wrap: wrap;</code> — 換行</li>
              </ul>
            </Collapse>

            <Collapse title="07 ─ Grid 網格排版" meta="3 屬性">
              <ul>
                <li><code>display: grid;</code></li>
                <li><code>grid-template-columns: 1fr 1fr 1fr;</code> — 欄位數</li>
                <li><code>gap: 20px;</code> — 間距</li>
              </ul>
            </Collapse>

            <Collapse title="08 ─ 動畫與轉場" meta="4 屬性">
              <ul>
                <li><code>transition: 0.3s;</code> — 轉場動畫</li>
                <li><code>transform: rotate(45deg);</code> — 旋轉</li>
                <li><code>transform: scale(1.2);</code> — 縮放</li>
                <li><code>transform: translateX(50px);</code> — 位移</li>
              </ul>
            </Collapse>

            <Collapse title="09 ─ Keyframes 動畫" meta="2 步驟">
              <CodeBlock lang="css" file="keyframes" code={`@keyframes move {
    from { left: 0; }
    to   { left: 100px; }
}

.box {
    animation: move 2s infinite;
}`} />
            </Collapse>

            <Collapse title="10 ─ 響應式設計（RWD）" meta="@media">
              <CodeBlock lang="css" file="rwd" code={`@media (max-width: 768px) {
    body {
        background: red;
    }
}`} />
            </Collapse>

            <Collapse title="11 ─ 常用單位" meta="6 種">
              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>單位</th><th>說明</th></tr></thead>
                  <tbody>
                    <tr><td><code>px</code></td><td>像素</td></tr>
                    <tr><td><code>%</code></td><td>百分比</td></tr>
                    <tr><td><code>em</code></td><td>相對字體</td></tr>
                    <tr><td><code>rem</code></td><td>根字體</td></tr>
                    <tr><td><code>vw</code></td><td>視窗寬度</td></tr>
                    <tr><td><code>vh</code></td><td>視窗高度</td></tr>
                  </tbody>
                </table>
              </div>
            </Collapse>

            <Collapse title="12 ─ 常用 display 類型" meta="6 種">
              <CodeBlock lang="css" file="display" code={`display: block;
display: inline;
display: inline-block;
display: flex;
display: grid;
display: none;`} />
            </Collapse>

            <Collapse title="13 ─ Hover 效果" meta="互動">
              <CodeBlock lang="css" file="hover" code={`button:hover {
    background: blue;
}`} />
            </Collapse>

            <Collapse title="14 ─ CSS 引入方式" meta="3 種">
              <ul>
                <li><strong style={{color:"var(--text-0)"}}>行內樣式：</strong><code>{`<div style="color:red;"></div>`}</code></li>
                <li><strong style={{color:"var(--text-0)"}}>內部樣式：</strong><code>{`<style>h1 { color: red; }</style>`}</code></li>
                <li><strong style={{color:"var(--text-0)"}}>外部樣式：</strong><code>{`<link rel="stylesheet" href="style.css">`}</code>（推薦）</li>
              </ul>
            </Collapse>

            <Collapse title="15 ─ 常見進階語法" meta="3 個">
              <h3 className="sub" style={{marginTop:0}}>CSS 變數</h3>
              <CodeBlock lang="css" file="var.css" code={`:root {
    --main-color: blue;
}

h1 {
    color: var(--main-color);
}`} />
              <h3 className="sub">濾鏡（Filter）</h3>
              <CodeBlock lang="css" file="filter.css" code={`img.blurry {
    filter: blur(5px);
}`} />
              <h3 className="sub">漸層（Gradient）</h3>
              <CodeBlock lang="css" file="gradient.css" code={`.banner {
    background: linear-gradient(red, blue);
}`} />
            </Collapse>

            <Callout>
              <strong>🎓 初學者推薦學習順序：</strong>
              <ol style={{margin:"6px 0 0",paddingLeft:18}}>
                <li>基本選擇器</li>
                <li>字體與顏色</li>
                <li>Box Model</li>
                <li>Flex</li>
                <li>Position</li>
                <li>Grid</li>
                <li>Animation</li>
                <li>RWD 響應式</li>
              </ol>
            </Callout>
          </>
        )},
      ]} />
    </>
  );
}
