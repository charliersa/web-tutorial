import { useEffect, useState, useCallback } from 'react';
import { useHashRoute } from './hooks/useHashRoute';
import { useTweaks } from './hooks/useTweaks';
import { TweaksPanel, TweakSection, TweakRadio, TweakColor } from './components/TweaksPanel';
import { HomePage, PlanningPage } from './pages/HomePage';
import { ObsidianPage } from './pages/ObsidianPage';
import { VsCodePage, NodejsPage } from './pages/EnvPages';
import { HtmlPage } from './pages/HtmlPage';
import { CssPage } from './pages/CssPage';
import { JsPage, ReactPage, PythonPage } from './pages/JsPage';
import { DeployPage } from './pages/DeployPage';

export const PAGES = [
  { id: 'home',     title: '首頁',        icon: '~',   group: 'INDEX' },
  { id: 'obsidian', title: 'Obsidian',   icon: '📓',  group: '環境安裝與設定' },
  { id: 'vscode',   title: 'VS Code',    icon: 'VS',  group: '環境安裝與設定' },
  { id: 'nodejs',   title: 'Node.js',    icon: '⬢',  group: '環境安裝與設定' },
  { id: 'planning', title: '前端網頁規劃', icon: '★',  group: '規劃' },
  { id: 'html',     title: 'HTML',        icon: '</>',  group: '前端網頁程式' },
  { id: 'css',      title: 'CSS',         icon: '{}',   group: '前端網頁程式' },
  { id: 'js',       title: 'JavaScript',  icon: 'JS',   group: '前端網頁程式' },
  { id: 'react',    title: 'React',       icon: '⚛',  group: '前端網頁程式' },
  { id: 'python',   title: 'Python',      icon: 'Py',  group: '後端網頁程式' },
  { id: 'deploy',   title: '部署網站教學', icon: '↗',  group: '部署發佈' },
];

// ── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar({ route, go, open, onClose }) {
  const groups = {};
  PAGES.forEach((p) => {
    (groups[p.group] = groups[p.group] || []).push(p);
  });

  const handleNav = (id) => {
    go(id);
    onClose(); // 手機版點選後收起選單
  };

  return (
    <>
      {/* 手機版遮罩 */}
      {open && <div className="sidebar-overlay" onClick={onClose} />}

      <aside className={`sidebar${open ? ' sidebar--open' : ''}`}>
        {/* 手機版關閉按鈕 */}
        <button className="sidebar-close" onClick={onClose} aria-label="關閉選單">✕</button>

        <div className="sidebar-brand">
          <div className="brand-logo">
            <span className="brand-dot"></span>
            <span>web.architecture</span>
          </div>
          <div className="brand-tag">// 程式網頁架構 v1.0</div>
        </div>

        {Object.entries(groups).map(([gname, items]) => (
          <div className="nav-section" key={gname}>
            <div className="nav-section-title">{gname}</div>
            {items.map((p) => (
              <div
                key={p.id}
                className={'nav-item' + (route === p.id ? ' active' : '')}
                onClick={() => handleNav(p.id)}
              >
                <span className="nav-icon">{p.icon}</span>
                <span>{p.title}</span>
              </div>
            ))}
          </div>
        ))}
      </aside>
    </>
  );
}

// ── Topbar ────────────────────────────────────────────────────────────────────
function Topbar({ route, go, onMenuOpen }) {
  const page = PAGES.find((p) => p.id === route) || PAGES[0];
  const onHome = route === 'home';
  return (
    <div className="topbar">
      <div className="topbar-left">
        {/* 漢堡選單按鈕（手機版顯示） */}
        <button className="menu-btn" onClick={onMenuOpen} aria-label="開啟選單">
          <span /><span /><span />
        </button>

        <div className="breadcrumb">
          <span onClick={() => go('home')} style={{ cursor: 'pointer' }}>
            web.architecture
          </span>
          {!onHome && (
            <>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">{page.title}</span>
            </>
          )}
        </div>
      </div>

      <div className="topbar-actions">
        <button
          className="btn btn-mdn"
          onClick={() => window.open('https://developer.mozilla.org', '_blank')}
        >
          📖 <span className="btn-label">MDN</span>
        </button>
        <button
          className="btn btn-primary"
          onClick={() => go(onHome ? 'html' : 'home')}
        >
          {onHome ? '開始閱讀' : '← 回首頁'}
        </button>
      </div>
    </div>
  );
}

// ── Theme config ──────────────────────────────────────────────────────────────
const TWEAK_DEFAULTS = { theme: 'paper', accent: '#b8794a' };
const ACCENTS_EDITOR = ['#58a6ff', '#7ee787', '#ffa657', '#d2a8ff'];
const ACCENTS_SYNTH  = ['#ff5ec4', '#5eead4', '#ffcf5e', '#a78bfa'];
const ACCENTS_PAPER  = ['#b8794a', '#6b8a5a', '#5a7a8a', '#a85c4a'];

function accentsFor(theme) {
  if (theme === 'synth') return ACCENTS_SYNTH;
  if (theme === 'paper') return ACCENTS_PAPER;
  return ACCENTS_EDITOR;
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [route, go] = useHashRoute();
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 切換頁面時自動收起側邊欄（手機版）
  const goAndClose = useCallback((id) => {
    go(id);
    setSidebarOpen(false);
  }, [go]);

  // 套用主題
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.theme);
  }, [t.theme]);

  // 套用主色 CSS 變數
  useEffect(() => {
    if (t.accent) document.documentElement.style.setProperty('--accent', t.accent);
  }, [t.accent]);

  // 主題改變時重設主色
  useEffect(() => {
    const current = accentsFor(t.theme);
    if (!current.includes(t.accent)) setTweak('accent', current[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t.theme]);

  // 桌機寬度時自動關閉遮罩
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const handler = (e) => { if (e.matches) setSidebarOpen(false); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  let page;
  switch (route) {
    case 'obsidian': page = <ObsidianPage />;      break;
    case 'vscode':   page = <VsCodePage />;         break;
    case 'nodejs':   page = <NodejsPage />;         break;
    case 'planning': page = <PlanningPage />;       break;
    case 'html':     page = <HtmlPage />;           break;
    case 'css':      page = <CssPage />;            break;
    case 'js':       page = <JsPage />;             break;
    case 'react':    page = <ReactPage />;          break;
    case 'python':   page = <PythonPage />;         break;
    case 'deploy':   page = <DeployPage />;         break;
    default:         page = <HomePage go={goAndClose} />;
  }

  return (
    <div className={`app${sidebarOpen ? ' sidebar-is-open' : ''}`}>
      <Sidebar
        route={route}
        go={goAndClose}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="main">
        <Topbar
          route={route}
          go={goAndClose}
          onMenuOpen={() => setSidebarOpen(true)}
        />
        <div className="content">{page}</div>
      </main>

      <TweaksPanel title="視覺設定">
        <TweakSection label="視覺風格" />
        <TweakRadio
          label="主題"
          value={t.theme}
          options={[
            { value: 'editor', label: 'Editor' },
            { value: 'synth',  label: 'Synth' },
            { value: 'paper',  label: 'Paper' },
          ]}
          onChange={(v) => setTweak('theme', v)}
        />
        <TweakColor
          label="主色"
          value={t.accent}
          options={accentsFor(t.theme)}
          onChange={(v) => setTweak('accent', v)}
        />
      </TweaksPanel>
    </div>
  );
}
