/* global React */
const { useState, useEffect, useRef } = React;

// -------- Small syntax highlighter (regex-based, light coverage) --------
function highlight(code, lang) {
  // Escape HTML
  let s = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  if (lang === "html") {
    s = s
      .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="tok-com">$1</span>')
      .replace(/(&lt;\/?)([a-zA-Z][\w-]*)/g, '$1<span class="tok-tag">$2</span>')
      .replace(/([a-zA-Z-]+)=(&quot;[^&]*?&quot;)/g, '<span class="tok-attr">$1</span>=<span class="tok-str">$2</span>');
  } else if (lang === "css") {
    s = s
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-com">$1</span>')
      .replace(/([.#][\w-]+|:[\w-]+|@[\w-]+)/g, '<span class="tok-fn">$1</span>')
      .replace(/([\w-]+)(\s*:)/g, '<span class="tok-attr">$1</span>$2')
      .replace(/(#[0-9a-fA-F]{3,8}|\b\d+(?:\.\d+)?(?:px|em|rem|%|vh|vw|s|ms)?\b)/g, '<span class="tok-num">$1</span>');
  } else if (lang === "js" || lang === "jsx") {
    s = s
      .replace(/(\/\/[^\n]*)/g, '<span class="tok-com">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-com">$1</span>')
      .replace(/(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;|`[^`]*?`)/g, '<span class="tok-str">$1</span>')
      .replace(/\b(const|let|var|function|return|if|else|for|while|class|new|import|export|from|default|async|await|of|in|true|false|null|undefined|this)\b/g, '<span class="tok-key">$1</span>')
      .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-num">$1</span>')
      .replace(/\b([A-Z][a-zA-Z0-9]*)\b/g, '<span class="tok-fn">$1</span>');
  } else if (lang === "python" || lang === "py") {
    s = s
      .replace(/(#[^\n]*)/g, '<span class="tok-com">$1</span>')
      .replace(/(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;)/g, '<span class="tok-str">$1</span>')
      .replace(/\b(def|class|return|if|elif|else|for|while|import|from|as|with|try|except|finally|raise|lambda|yield|pass|break|continue|in|not|and|or|True|False|None|self)\b/g, '<span class="tok-key">$1</span>')
      .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-num">$1</span>');
  } else if (lang === "bash" || lang === "shell") {
    s = s
      .replace(/(#[^\n]*)/g, '<span class="tok-com">$1</span>')
      .replace(/^(\$|&gt;)\s/gm, '<span class="tok-fn">$&</span>');
  }
  return s;
}

// -------- Components --------
function CodeBlock({ code, lang = "js", file }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (e) { /* ignore */ }
  };
  const html = highlight(code, lang);
  return (
    <div className="codeblock">
      <div className="codeblock-head">
        <span className="codeblock-dots"><span></span><span></span><span></span></span>
        <span className="codeblock-file">{file || lang}</span>
        <button className={"codeblock-copy" + (copied ? " copied" : "")} onClick={onCopy}>
          {copied ? "✓ 已複製" : "複製"}
        </button>
      </div>
      <pre><code dangerouslySetInnerHTML={{ __html: html }} /></pre>
    </div>
  );
}

function Tabs({ tabs, initial = 0 }) {
  const [idx, setIdx] = useState(initial);
  return (
    <div className="tabs">
      <div className="tabs-bar">
        {tabs.map((t, i) => (
          <button
            key={i}
            className={"tab" + (i === idx ? " active" : "")}
            onClick={() => setIdx(i)}
          >
            <span>{t.label}</span>
            {t.badge != null && <span className="tab-badge">{t.badge}</span>}
          </button>
        ))}
      </div>
      <div className="tab-panel">{tabs[idx].content}</div>
    </div>
  );
}

function Collapse({ title, meta, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={"collapse" + (open ? " open" : "")}>
      <div className="collapse-head" onClick={() => setOpen(!open)}>
        <span className="collapse-caret">▶</span>
        <span className="collapse-title">{title}</span>
        {meta && <span className="collapse-meta">{meta}</span>}
      </div>
      <div className="collapse-body">{children}</div>
    </div>
  );
}

function SectionTitle({ hash, children }) {
  return (
    <h2 className="section-title">
      <span className="hash">#</span>
      <span>{children}</span>
    </h2>
  );
}

function Callout({ children }) {
  return <div className="callout">{children}</div>;
}

// Expose globally
Object.assign(window, { CodeBlock, Tabs, Collapse, SectionTitle, Callout, highlight });

