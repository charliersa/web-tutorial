// -------- Small syntax highlighter (regex-based, light coverage) --------
export function highlight(code, lang) {
  // Escape HTML
  let s = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  if (lang === 'html') {
    s = s
      .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="tok-com">$1</span>')
      .replace(/(&lt;\/?)([a-zA-Z][\w-]*)/g, '$1<span class="tok-tag">$2</span>')
      .replace(/([a-zA-Z-]+)=(&quot;[^&]*?&quot;)/g, '<span class="tok-attr">$1</span>=<span class="tok-str">$2</span>');
  } else if (lang === 'css') {
    s = s
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-com">$1</span>')
      .replace(/([.#][\w-]+|:[\w-]+|@[\w-]+)/g, '<span class="tok-fn">$1</span>')
      .replace(/([\w-]+)(\s*:)/g, '<span class="tok-attr">$1</span>$2')
      .replace(/(#[0-9a-fA-F]{3,8}|\b\d+(?:\.\d+)?(?:px|em|rem|%|vh|vw|s|ms)?\b)/g, '<span class="tok-num">$1</span>');
  } else if (lang === 'js' || lang === 'jsx') {
    s = s
      .replace(/(\/\/[^\n]*)/g, '<span class="tok-com">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-com">$1</span>')
      .replace(/(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;|`[^`]*?`)/g, '<span class="tok-str">$1</span>')
      .replace(/\b(const|let|var|function|return|if|else|for|while|class|new|import|export|from|default|async|await|of|in|true|false|null|undefined|this)\b/g, '<span class="tok-key">$1</span>')
      .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-num">$1</span>')
      .replace(/\b([A-Z][a-zA-Z0-9]*)\b/g, '<span class="tok-fn">$1</span>');
  } else if (lang === 'python' || lang === 'py') {
    s = s
      .replace(/(#[^\n]*)/g, '<span class="tok-com">$1</span>')
      .replace(/(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;)/g, '<span class="tok-str">$1</span>')
      .replace(/\b(def|class|return|if|elif|else|for|while|import|from|as|with|try|except|finally|raise|lambda|yield|pass|break|continue|in|not|and|or|True|False|None|self)\b/g, '<span class="tok-key">$1</span>')
      .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-num">$1</span>');
  } else if (lang === 'bash' || lang === 'shell') {
    s = s
      .replace(/(#[^\n]*)/g, '<span class="tok-com">$1</span>')
      .replace(/^(\$|&gt;)\s/gm, '<span class="tok-fn">$&</span>');
  }
  return s;
}
