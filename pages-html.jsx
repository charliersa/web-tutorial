/* global React, CodeBlock, Tabs, Collapse, SectionTitle, Callout */
const { useState: _useStateHtml, useEffect: _useEffectHtml } = React;

// In-page chapter scroller — sticky chip nav
function ChapterIndex({ chapters }) {
  return (
    <div className="ch-index">
      {chapters.map((c, i) => (
        <a key={c.id} href={`#${c.id}`} className="ch-chip"
           onClick={(e) => {
             e.preventDefault();
             const el = document.getElementById(c.id);
             if (el) {
               const top = el.getBoundingClientRect().top + window.scrollY - 120;
               window.scrollTo({ top, behavior: "smooth" });
             }
           }}>
          <span className="ch-num">2-2-{i}</span>
          <span>{c.title}</span>
        </a>
      ))}
    </div>
  );
}

function Chapter({ id, num, title, children }) {
  return (
    <section id={id} className="ch-section">
      <div className="ch-head">
        <span className="ch-tag">2-2-{num}</span>
        <h2 className="ch-title">{title}</h2>
      </div>
      <div className="ch-body">{children}</div>
    </section>
  );
}

// =============== HTML ===============
function HtmlPage() {
  const CHAPTERS = [
    { id: "ch-0", title: "基本語法結構" },
    { id: "ch-1", title: "文字標題與段落" },
    { id: "ch-2", title: "span 語法" },
    { id: "ch-3", title: "列表用法" },
    { id: "ch-4", title: "超連結與圖片" },
    { id: "ch-5", title: "div 用法" },
    { id: "ch-6", title: "表格用法" },
    { id: "ch-7", title: "class 用法" },
    { id: "ch-8", title: "button 用法" },
    { id: "ch-9", title: "label 用法" },
    { id: "ch-10", title: "@media 響應式" },
    { id: "ch-11", title: "獨立連結 CSS" },
    { id: "ch-12", title: "section 語法" },
  ];

  return (
    <>
      <div className="page-eyebrow">前端網頁程式 / 01</div>
      <h1 className="page-title">HTML</h1>
      <p className="page-subtitle">
        HTML（HyperText Markup Language）是網頁的骨架。本章節依照 2-2-0 ~ 2-2-12 共 13 個小節，循序漸進介紹 HTML 的基本語法、語意化標籤、表單與排版容器。
      </p>

      <ChapterIndex chapters={CHAPTERS} />

      <Tabs tabs={[
        { label: "章節說明", badge: "13", content: (
          <>
            <Chapter id="ch-0" num="0" title="基本語法結構">
              <p>HTML 標籤通常是<strong style={{color:"var(--text-0)"}}>成對出現</strong>的，包含<strong style={{color:"var(--text-0)"}}>起始標籤</strong>與<strong style={{color:"var(--text-0)"}}>結束標籤</strong>（多一個 <code>/</code>）。少數標籤沒有結束標籤，稱為<strong style={{color:"var(--text-0)"}}>空標籤</strong>，例如 <code>{`<br>`}</code>（換行）或 <code>{`<img>`}</code>（圖片）。</p>
              <CodeBlock lang="html" file="basic syntax" code={`<標籤名稱 屬性="值">內容</標籤名稱>

<!-- 起始標籤：<p> -->
<!-- 內容：這是一個段落 -->
<!-- 結束標籤：</p> -->
<p>這是一個段落。</p>

<!-- 空標籤（不需結束標籤）-->
<br>
<img src="logo.jpg" alt="logo">`} />

              <h3 className="sub">標準文件結構</h3>
              <p>每一份 HTML 檔案都應該包含以下基本結構：</p>
              <CodeBlock lang="html" file="index.html" code={`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我就是標題</title>
</head>
<body>

    <!-- 網頁的主要內容（使用者會看到的部分）-->

</body>
</html>`} />

              <h3 className="sub">標籤說明</h3>
              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>標籤</th><th>用途</th></tr></thead>
                  <tbody>
                    <tr><td><code>{`<!DOCTYPE html>`}</code></td><td>告訴瀏覽器這是 HTML5 文件</td></tr>
                    <tr><td><code>{`<html>`}</code></td><td>整個網頁的開始與結束</td></tr>
                    <tr><td><code>{`<head>`}</code></td><td>放網站資訊（標題、編碼、CSS 連結）</td></tr>
                    <tr><td><code>{`<body>`}</code></td><td>使用者會看到的部分</td></tr>
                    <tr><td><code>{`<meta charset="UTF-8">`}</code></td><td>文字編碼方式</td></tr>
                    <tr><td><code>{`<meta name="viewport">`}</code></td><td>讓網頁支援手機與平板（響應式）</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="sub">語言屬性</h3>
              <ul>
                <li><code>zh-Hant</code> — 繁體中文</li>
                <li><code>zh-Hans</code> — 簡體中文</li>
                <li><code>en</code> — 英文（English）</li>
                <li><code>UTF-8</code> — 正確顯示多國語言的編碼</li>
              </ul>
            </Chapter>

            <Chapter id="ch-1" num="1" title="文字標題與段落">
              <p>HTML 提供六個層級的標題標籤：<code>{`<h1>`}</code> 最大且最重要，<code>{`<h6>`}</code> 最小。段落使用 <code>{`<p>`}</code>（Paragraph）。</p>
              <CodeBlock lang="html" file="headings.html" code={`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <title>我的第一個網頁</title>
</head>
<body>

    <h1>這是一個特別的例子。</h1>
    <h2>這是一個特別的例子。</h2>
    <h3>這是一個特別的例子。</h3>
    <h4>這是一個特別的例子。</h4>
    <h5>這是一個特別的例子。</h5>
    <h6>這是一個特別的例子。</h6>
    <p>這是一個特別的例子。</p>

</body>
</html>`} />
              <Callout><strong>SEO 提醒：</strong>每一頁建議只用<strong>一個</strong> <code>{`<h1>`}</code>，並用來表示頁面的主要主題。</Callout>
            </Chapter>

            <Chapter id="ch-2" num="2" title="span 語法">
              <p><code>{`<span>`}</code> 用於行內文字的選取，通常是為了套用特定 CSS 樣式。它<strong style={{color:"var(--text-0)"}}>不會換行</strong>，跟 <code>{`<div>`}</code> 的差別就在這裡。</p>
              <CodeBlock lang="html" file="span.html" code={`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <title>我的第一個網頁</title>
    <style>
        span {
            color: red;
        }
    </style>
</head>
<body>

    <p>這是一個<span>特別</span>的例子。</p>

</body>
</html>`} />
              <Callout><strong>口訣：</strong><code>{`<div>`}</code> 會換行（區塊元素），<code>{`<span>`}</code> 不換行（行內元素）。</Callout>
            </Chapter>

            <Chapter id="ch-3" num="3" title="列表用法">
              <p>HTML 有兩種列表：</p>
              <ul>
                <li><code>{`<ul>`}</code> — 無序列表（Unordered List），前方顯示圓點 •</li>
                <li><code>{`<ol>`}</code> — 有序列表（Ordered List），前方顯示數字 1, 2, 3...</li>
                <li><code>{`<li>`}</code> — 列表項目（List Item），必須放在 <code>{`<ul>`}</code> 或 <code>{`<ol>`}</code> 內</li>
              </ul>

              <h3 className="sub">無序列表</h3>
              <CodeBlock lang="html" file="ul.html" code={`<ul>
    <li>撰寫程式碼 (Coding)</li>
    <li>攝影</li>
    <li>在 GitHub 上探索開源專案</li>
</ul>`} />

              <h3 className="sub">有序列表</h3>
              <CodeBlock lang="html" file="ol.html" code={`<ol>
    <li>撰寫程式碼 (Coding)</li>
    <li>攝影</li>
    <li>在 GitHub 上探索開源專案</li>
</ol>`} />
            </Chapter>

            <Chapter id="ch-4" num="4" title="超連結與圖片">
              <p><code>{`<a>`}</code> 是超連結，必備屬性 <code>href</code>（目標網址）。<code>{`<img>`}</code> 是圖片，必備屬性 <code>src</code>（圖片路徑）與 <code>alt</code>（替代文字）。</p>
              <CodeBlock lang="html" file="link.html" code={`<a href="https://google.com">前往 Google</a>
<img src="logo.jpg" alt="公司標誌">

<p>歡迎造訪我的
  <a href="https://github.com" target="_blank">GitHub 頁面</a>
  了解更多作品。
</p>`} />

              <h3 className="sub">target 屬性</h3>
              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>target 值</th><th>負責任務</th></tr></thead>
                  <tbody>
                    <tr><td><code>_blank</code></td><td>開啟新分頁，原頁面保留（最常用於外部連結）</td></tr>
                    <tr><td><code>_self</code></td><td>覆蓋原頁面（預設值，內部跳轉常用）</td></tr>
                    <tr><td><code>_parent</code></td><td>在「上一層」視窗中開啟（用於 iframe 嵌套）</td></tr>
                    <tr><td><code>_top</code></td><td>強制在最外層、整個瀏覽器視窗開啟</td></tr>
                  </tbody>
                </table>
              </div>
            </Chapter>

            <Chapter id="ch-5" num="5" title="div 用法">
              <p><code>{`<div>`}</code> 是區塊容器（Division），最常用的排版標籤，<strong style={{color:"var(--text-0)"}}>會獨佔一行</strong>。</p>
              <CodeBlock lang="html" file="div.html" code={`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .header {
            background-color: lightblue;
            padding: 20px;
            text-align: center;
        }
        .content {
            background-color: lightgray;
            padding: 20px;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>我的網站標題</h1>
        <p>這是一個導覽區塊。</p>
    </div>

    <div class="content">
        <p>這是主要內容區塊，它會接在標題區塊的下方。</p>
    </div>

</body>
</html>`} />

              <h3 className="sub">補充標籤</h3>
              <ul>
                <li><code>{`<br>`}</code> — 強制換行</li>
                <li><code>{`<hr>`}</code> — 水平分隔線</li>
              </ul>
            </Chapter>

            <Chapter id="ch-6" num="6" title="表格用法">
              <p>HTML 表格是由一層層的容器組成的，就像是「箱子裡裝箱子」：</p>
              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>標籤</th><th>用途</th></tr></thead>
                  <tbody>
                    <tr><td><code>{`<table>`}</code></td><td>最外層的容器，告訴瀏覽器「這裡是表格」</td></tr>
                    <tr><td><code>{`<thead>`}</code></td><td>表格頁首（Table Head），語意化標籤</td></tr>
                    <tr><td><code>{`<tr>`}</code></td><td>Table Row — 一列（橫向一排）</td></tr>
                    <tr><td><code>{`<th>`}</code></td><td>Table Header — 標題格，自動加粗居中</td></tr>
                    <tr><td><code>{`<td>`}</code></td><td>Table Data — 一般資料格</td></tr>
                  </tbody>
                </table>
              </div>

              <CodeBlock lang="html" file="table.html" code={`<style>
    .chat {
        border: 1px solid black;
        border-collapse: collapse;  /* 合併邊框 */
    }
</style>

<table class="chat">
    <!-- 第一列：標題 -->
    <tr>
        <th>姓名</th>
        <th>職業</th>
    </tr>
    <!-- 第二列：內容 -->
    <tr>
        <td>小明</td>
        <td>前端工程師</td>
    </tr>
</table>`} />
            </Chapter>

            <Chapter id="ch-7" num="7" title="class 用法">
              <p>在網頁設計中，<code>class</code> 就像是給 HTML 元素穿上「制服」。當多個元素穿上同一款制服時，我們就能透過 CSS 一次性地調整它們的外觀。</p>

              <h3 className="sub">① 在 HTML 中「穿上制服」 👕</h3>
              <p>在 HTML 標籤的開始處加入 <code>class="類別名稱"</code>：</p>
              <CodeBlock lang="html" file="html" code={`<p class="highlight">這是第一個重點。</p>
<p class="highlight">這是第二個重點。</p>
<div class="card shadow-effect">同時套用兩個 class</div>`} />

              <h3 className="sub">② 在 CSS 中「定義樣式」 🎨</h3>
              <p>在 CSS 中使用<strong style={{color:"var(--text-0)"}}>小數點 <code>.</code></strong> 開頭來選取這個 class：</p>
              <CodeBlock lang="css" file="style.css" code={`.highlight {
    color: blue;        /* 文字變藍色 */
    font-weight: bold;  /* 文字加粗 */
}`} />
              <Callout>一個元素可以同時擁有多個 class，用<strong>空格</strong>分隔即可：<code>class="card shadow-effect"</code>。</Callout>
            </Chapter>

            <Chapter id="ch-8" num="8" title="button 用法">
              <p><code>{`<button>`}</code> 是最核心的互動元素之一。它在 HTML 中提供結構，在 CSS 中進行美化，並透過 JavaScript 觸發行為（HTML + CSS + JS「鐵三角」）。</p>

              <h3 className="sub">① 基礎類型屬性（type）⚙️</h3>
              <ul>
                <li><code>type="button"</code> — 最通用的按鈕，預設無動作，需配合 JavaScript</li>
                <li><code>type="submit"</code> — 提交按鈕，點擊後送出表單給伺服器</li>
                <li><code>type="reset"</code> — 重設按鈕，恢復表單預設值</li>
              </ul>

              <h3 className="sub">② 狀態管理與辨識 🏷️</h3>
              <ul>
                <li><code>class</code> — 幫按鈕分類，例如 <code>.btn-primary</code>、<code>.btn-danger</code></li>
                <li><code>disabled</code> — 加上後按鈕會變灰且無法點擊</li>
              </ul>

              <h3 className="sub">③ 進階互動美化 🎨</h3>
              <ul>
                <li><code>:hover</code> — 滑鼠移上去時改變樣式</li>
                <li><code>:active</code> — 被按下的那一刻產生視覺回饋</li>
              </ul>

              <CodeBlock lang="html" file="buttons.html" code={`<!-- 1. 主要動作：結帳 (Primary) -->
<button type="submit" class="btn btn-primary">立即結帳</button>

<!-- 2. 次要動作：繼續購物 (Secondary) -->
<button type="button" class="btn btn-secondary">繼續購物</button>

<!-- 3. 危險動作：清空購物車 (Danger) -->
<button type="button" class="btn btn-danger">清空購物車</button>

<!-- 4. 狀態控制：已售完 (Disabled) -->
<button type="button" class="btn btn-primary" disabled>商品已售完</button>`} />
            </Chapter>

            <Chapter id="ch-9" num="9" title="label 用法">
              <p><code>{`<label>`}</code> 的主要用途是為表單元素（例如 <code>{`<input>`}</code>）提供文字說明，並有兩個重要功能：</p>

              <h3 className="sub">① 增加點擊範圍</h3>
              <p>當你點擊 <code>{`<label>`}</code> 裡的文字時，瀏覽器會自動把游標聚焦到對應的 <code>{`<input>`}</code> 框裡。對手機使用者或勾選很小的 Checkbox 非常有幫助。</p>

              <h3 className="sub">② 無障礙輔助（Accessibility）</h3>
              <p>對使用螢幕閱讀器的視障人士，當他們移動到輸入框時，閱讀器會讀出 <code>{`<label>`}</code> 的內容，讓他們知道這裡該填什麼。</p>

              <h3 className="sub">如何將 Label 與 Input 連動？🏗️</h3>
              <ul>
                <li><code>for</code> — 放在 <code>{`<label>`}</code> 上</li>
                <li><code>id</code> — 放在 <code>{`<input>`}</code> 上</li>
              </ul>
              <Callout><strong>關鍵：</strong>這兩個屬性的值必須<strong>一模一樣</strong>，才會連動！</Callout>

              <CodeBlock lang="html" file="label.html" code={`<!-- 只有 id 與 for 相同，點擊文字時輸入框才會被選中 -->
<label for="user_email">電子信箱：</label>
<input type="email" id="user_email" name="email">

<!-- 配合按鈕讀取 input 內容 -->
<label for="nameInput">你的姓名：</label>
<input type="text" id="nameInput">
<button id="checkBtn">顯示結果</button>

<script>
    const myBtn = document.getElementById("checkBtn");
    const myInput = document.getElementById("nameInput");

    myBtn.onclick = function() {
        let result = myInput.value;
        alert("哈囉！" + result);
    };
</script>`} />
            </Chapter>

            <Chapter id="ch-10" num="10" title="@media 響應式語法">
              <p>你可以把 <code>@media</code> 想像成一個「<strong style={{color:"var(--text-0)"}}>條件判斷開關</strong>」。它告訴瀏覽器：「當螢幕符合某些條件時（例如寬度小於 600px），請套用這組特殊的 CSS 樣式。」</p>

              <CodeBlock lang="css" file="basic syntax" code={`@media 媒體類型 and (檢測條件) {
    /* 當條件成立時，要執行的 CSS 樣式 */
    .example {
        color: red;
    }
}

/* 實例：螢幕小於 600px 時 */
@media (max-width: 600px) {
    .example {
        font-size: 14px;
    }
}`} />

              <h3 className="sub">兩種設計思維</h3>
              <ol>
                <li>
                  <strong style={{color:"var(--text-0)"}}>桌面優先（Desktop First）</strong><br/>
                  先寫大螢幕的樣式，再用 <code>max-width</code> 規定在小螢幕時要如何「縮小或簡化」。
                  <br/>例如 <code>@media (max-width: 768px)</code> = 螢幕小於等於 768px 時觸發。
                </li>
                <li style={{marginTop:8}}>
                  <strong style={{color:"var(--text-0)"}}>行動優先（Mobile First）</strong><br/>
                  先寫手機版的樣式（最簡結構），再用 <code>min-width</code> 規定在大螢幕時要如何「擴展或橫排」。
                  <br/>例如 <code>@media (min-width: 1024px)</code> = 螢幕大於等於 1024px 時觸發。
                </li>
              </ol>

              <h3 className="sub">啟用響應式</h3>
              <p>除了 CSS 之外，HTML 的 <code>{`<head>`}</code> 必須加入這行，響應式才會真的生效：</p>
              <CodeBlock lang="html" file="viewport" code={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`} />
            </Chapter>

            <Chapter id="ch-11" num="11" title="獨立連結 CSS">
              <p>當 CSS 越寫越多，把它從 HTML 抽出來放到獨立的 <code>.css</code> 檔案，會讓專案更好維護。</p>

              <h3 className="sub">連結 CSS 的三部曲 🛠️</h3>
              <ol>
                <li><strong style={{color:"var(--text-0)"}}>建立新檔案：</strong>在 VS Code 中新增 <code>style.css</code></li>
                <li><strong style={{color:"var(--text-0)"}}>搬家樣式：</strong>把原本 <code>{`<style>`}</code> 標籤裡的內容剪下貼到新檔（不需搬 <code>{`<style>`}</code> 標籤本身）</li>
                <li><strong style={{color:"var(--text-0)"}}>建立連結：</strong>在 <code>{`<head>`}</code> 中使用 <code>{`<link>`}</code> 標籤</li>
              </ol>

              <CodeBlock lang="html" file="index.html" code={`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>搜尋引擎</title>

    <!-- 連結外部 CSS -->
    <link rel="stylesheet" href="index.css">
</head>
<body>

</body>
</html>`} />

              <h3 className="sub">屬性說明</h3>
              <ul>
                <li><code>rel="stylesheet"</code> — 告訴瀏覽器：「我要連結的是一個樣式表（CSS）」</li>
                <li><code>href</code> — 最重要的部分，代表 CSS <strong>檔案的路徑</strong></li>
              </ul>
            </Chapter>

            <Chapter id="ch-12" num="12" title="section 語法">
              <p><code>{`<section>`}</code> 是一個非常重要的<strong style={{color:"var(--text-0)"}}>語義化標籤</strong>（Semantic Tag）。它的主要作用是將網頁內容劃分為不同的「章節」或「區段」，讓瀏覽器和搜尋引擎更容易理解網頁的結構。</p>

              <CodeBlock lang="html" file="section.html" code={`<section>
    <h2>關於我們</h2>
    <p>我們是一家專注於網頁設計的公司...</p>
</section>

<section>
    <h2>最新消息</h2>
    <ul>
        <li>2024 網頁設計趨勢發表</li>
        <li>新版官網正式上線</li>
    </ul>
</section>`} />

              <h3 className="sub">section / article / div 怎麼選？</h3>
              <div className="tbl-wrap">
                <table className="ref-table">
                  <thead><tr><th>標籤</th><th>用途</th><th>類比</th></tr></thead>
                  <tbody>
                    <tr><td><code>{`<section>`}</code></td><td>具有邏輯相關性的內容區段，通常有標題</td><td>📖 書的章節</td></tr>
                    <tr><td><code>{`<article>`}</code></td><td>獨立完整的內容，可單獨拿出來閱讀</td><td>📰 報紙的一則新聞</td></tr>
                    <tr><td><code>{`<div>`}</code></td><td>純粹為了排版或美化的容器，沒有語義</td><td>📦 一個空盒子</td></tr>
                  </tbody>
                </table>
              </div>
            </Chapter>
          </>
        )},

        { label: "完整範例", badge: 4, content: (
          <>
            <p>以下是把多個概念組合起來的完整 HTML 檔案範例：</p>

            <h3 className="sub">範例 1 — table.html（兩種表格樣式對比）</h3>
            <CodeBlock lang="html" file="table.html" code={`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .chat {
            border: 1px solid black;
            border-collapse: collapse;
        }
    </style>
</head>
<body>
    <h4>語法結構：<標籤名稱 class="類別名稱"> 內容 </標籤名稱></h4>

    <!-- 沒有 class，使用瀏覽器預設樣式 -->
    <table>
        <tr><th>姓名</th><th>職業</th></tr>
        <tr><td>小明</td><td>前端工程師</td></tr>
    </table>

    <br><br>

    <!-- 套用 class="chat"，邊框合併 -->
    <table class="chat">
        <tr><th>姓名</th><th>職業</th></tr>
        <tr><td>小明</td><td>前端工程師</td></tr>
    </table>
</body>
</html>`} />

            <h3 className="sub">範例 2 — div.html（按鈕卡片組合）</h3>
            <CodeBlock lang="html" file="div.html" code={`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .head {
            background-color: lightblue;
            padding: 20px;
            text-align: center;
        }
        .card {
            border: 2px solid black;
            padding: 20px;
        }
        .shadow-effect {
            /* 水平偏移、垂直偏移、模糊半徑、顏色 */
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
        }
    </style>
</head>
<body>
    <div class="head">
        <button>
            <div class="card shadow-effect">儲存</div>
        </button>
        <button>
            <div class="card shadow-effect">取消</div>
        </button>
        <button>
            <div class="card shadow-effect">刪除</div>
        </button>
    </div>
</body>
</html>`} />

            <h3 className="sub">範例 3 — button.html（購物清單表格）</h3>
            <CodeBlock lang="html" file="button.html" code={`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <title>購物清單</title>
    <style>
        .name { color: rgb(71, 19, 71); text-align: center; }
        .head { background-color: lightblue; padding: 30px; text-align: center; }
        .product-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            color: rgb(71, 19, 71);
            border: 3px solid #ccc;
        }
        .product-table th,
        .product-table td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="name">
        <h1>購物清單</h1>
    </div>

    <table class="product-table">
        <thead>
            <tr>
                <th>商品名稱</th><th>價格</th><th>數量</th><th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>商品A</td><td>$10</td><td>2</td>
                <td><button type="button" class="btn btn-danger">刪除</button></td>
            </tr>
            <tr>
                <td>商品B</td><td>$20</td><td>1</td>
                <td><button type="button" class="btn btn-danger">刪除</button></td>
            </tr>
        </tbody>
    </table>

    <div class="head">
        <button type="submit" class="btn btn-primary">立即結帳</button>
    </div>
</body>
</html>`} />

            <h3 className="sub">範例 4 — label.html（input + button + JS）</h3>
            <CodeBlock lang="html" file="label.html" code={`<!DOCTYPE html>
<html lang="zh-Hant">
<body>

    <!-- 點擊 "你的姓名" 文字也會觸發輸入框 -->
    <label for="nameInput">你的姓名：</label>
    <input type="text" id="nameInput">

    <button id="checkBtn">顯示結果</button>

    <script>
        const myBtn = document.getElementById("checkBtn");
        const myInput = document.getElementById("nameInput");

        myBtn.onclick = function() {
            // .value 用來讀取使用者目前在框框裡寫了什麼
            let result = myInput.value;
            alert("哈囉！" + result);
        };
    </script>

</body>
</html>`} />
          </>
        )},

        { label: "程式清單", badge: 9, content: (
          <>
            <p>HTML 全部標籤一覽（依用途分組）：</p>

            <Collapse title="0. HTML 基本結構" meta="6 標籤" defaultOpen>
              <ul>
                <li><code>{`<!DOCTYPE html>`}</code> — 告訴瀏覽器這是 HTML5 文件</li>
                <li><code>{`<html>...</html>`}</code> — 整個網頁的開始與結束</li>
                <li><code>{`<head>...</head>`}</code> — 放網站資訊（標題、編碼、CSS 連結）</li>
                <li><code>{`<body>...</body>`}</code> — 網頁的主要內容</li>
                <li><code>{`<meta charset="UTF-8">`}</code> — 網頁的文字編碼方式</li>
                <li><code>{`<meta name="viewport">`}</code> — 顯示螢幕範圍，支援手機與平板</li>
              </ul>
            </Collapse>

            <Collapse title="1. 語言設定" meta="4 屬性">
              <ul>
                <li><code>zh-Hant</code> — 繁體中文</li>
                <li><code>zh-Hans</code> — 簡體中文</li>
                <li><code>en</code> — 英文（English）</li>
                <li><code>UTF-8</code> — 正確顯示多國語言</li>
              </ul>
            </Collapse>

            <Collapse title="2. 文字標題與段落" meta="7 標籤">
              <ul>
                <li><code>{`<h1>`}</code> — 最大且最重要的標題</li>
                <li><code>{`<h2>`}</code> — 第二層標題</li>
                <li><code>{`<h3>`}</code> — 第三層標題</li>
                <li><code>{`<h4>`}</code> ~ <code>{`<h6>`}</code> — 較小的標題</li>
                <li><code>{`<p>`}</code> — 段落（Paragraph）</li>
              </ul>
            </Collapse>

            <Collapse title="3. 行內與列表" meta="4 標籤">
              <ul>
                <li><code>{`<span>`}</code> — 行內文字選取（套用 CSS 樣式）</li>
                <li><code>{`<ul>`}</code> — 無序列表（前方圓點）</li>
                <li><code>{`<ol>`}</code> — 有序列表（前方數字）</li>
                <li><code>{`<li>`}</code> — 列表項目（必須放在 ul 或 ol 內）</li>
              </ul>
            </Collapse>

            <Collapse title="4. 連結與圖片" meta="2 標籤">
              <ul>
                <li><code>{`<a href="...">`}</code> — 超連結（必備 href）</li>
                <li><code>{`<img src="..." alt="...">`}</code> — 圖片（必備 src 與 alt）</li>
              </ul>
            </Collapse>

            <Collapse title="5. 表格" meta="5 標籤">
              <ul>
                <li><code>{`<table>`}</code> — 表格的最外層容器</li>
                <li><code>{`<thead>`}</code> — 表格頁首（語義化）</li>
                <li><code>{`<tr>`}</code> — Table Row，表格的一列</li>
                <li><code>{`<th>`}</code> — Table Header，標題格（自動加粗居中）</li>
                <li><code>{`<td>`}</code> — Table Data，一般資料格</li>
              </ul>
            </Collapse>

            <Collapse title="6. 排版容器" meta="3 標籤">
              <ul>
                <li><code>{`<div class="...">`}</code> — 區塊容器，會獨佔一行</li>
                <li><code>{`<br>`}</code> — 強制換行</li>
                <li><code>{`<hr>`}</code> — 水平分隔線</li>
              </ul>
            </Collapse>

            <Collapse title="7. 表單元素" meta="3 標籤">
              <ul>
                <li><code>{`<button type="...">`}</code> — 按鈕（button / submit / reset）</li>
                <li><code>{`<label for="...">`}</code> — 表單標籤（for 對應 input id）</li>
                <li><code>{`<input type="..." id="...">`}</code> — 輸入欄位</li>
              </ul>
            </Collapse>

            <Collapse title="8. 語義化區塊" meta="3 標籤">
              <ul>
                <li><code>{`<section>`}</code> — 邏輯相關的內容區段（書的章節 📖）</li>
                <li><code>{`<article>`}</code> — 獨立完整的內容（報紙新聞 📰）</li>
                <li><code>{`<div>`}</code> — 純粹排版用容器（空盒子 📦）</li>
              </ul>
            </Collapse>
          </>
        )},
      ]} />
    </>
  );
}

Object.assign(window, { HtmlPage });
