import { useState } from 'react';
import { highlight } from '../utils/highlight';

export function CodeBlock({ code, lang = 'js', file }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (e) {
      /* ignore */
    }
  };

  const html = highlight(code, lang);

  return (
    <div className="codeblock">
      <div className="codeblock-head">
        <span className="codeblock-dots">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span className="codeblock-file">{file || lang}</span>
        <button
          className={'codeblock-copy' + (copied ? ' copied' : '')}
          onClick={onCopy}
        >
          {copied ? '✓ 已複製' : '複製'}
        </button>
      </div>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}

export function Tabs({ tabs, initial = 0 }) {
  const [idx, setIdx] = useState(initial);
  return (
    <div className="tabs">
      <div className="tabs-bar">
        {tabs.map((t, i) => (
          <button
            key={i}
            className={'tab' + (i === idx ? ' active' : '')}
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

export function Collapse({ title, meta, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={'collapse' + (open ? ' open' : '')}>
      <div className="collapse-head" onClick={() => setOpen(!open)}>
        <span className="collapse-caret">▶</span>
        <span className="collapse-title">{title}</span>
        {meta && <span className="collapse-meta">{meta}</span>}
      </div>
      <div className="collapse-body">{children}</div>
    </div>
  );
}

export function SectionTitle({ hash, children }) {
  return (
    <h2 className="section-title">
      <span className="hash">#</span>
      <span>{children}</span>
    </h2>
  );
}

export function Callout({ children }) {
  return <div className="callout">{children}</div>;
}
