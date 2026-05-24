import { useEffect } from 'react';
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
  { id: 'home',     title: '首頁',         icon: '~',   group: 'INDEX' },
  { id: 'obsidian', title: 'Obsidian',    icon: '📓',  group: '環境安裝與設定' },
  { id: 'vscode',   title: 'VS Code',     icon: 'VS',  group: '環境安裝與設定' },
  { id: 'nodejs',   title: 'Node.js',     icon: '⬢',  group: '環境安裝與設定' },
  { id: 'planning', title: '前端網頁規劃',  icon: '★',  group: '規劃' },
  { id: 'html',     title: 'HTML',         icon: '</>',  group: '前端網頁程式' },
  { id: 'css',      title: 'CSS',          icon: '{}',   group: '前端網頁程式' },
  { id: 'js',       title: 'JavaScript',   icon: 'JS',   group: '前端網頁程式' },
  { id: 'react',    title: 'React',        icon: '⚛',  group: '前端網頁程式' },
  { id: 'python',   title: 'Python',       icon: 'Py',  group: '後端網頁程式' },
  { id: 'deploy',   title: '部署網站教學',  icon: '↗',  group: '部署發佈' },
];

function Sidebar({ route, go }) {
  const groups = {};
  PAGES.forEach((p) => {
    (groups[p.group] = groups[p.group] || []).push(p);
  });
  return (
    <aside className="sidebar">
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
              onClick={() => go(p.id)}
            >
              <span className="nav-icon">{p.icon}</span>
              <span>{p.title}</span>
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
}

function Topbar({ route, go }) {
  const page = PAGES.find((p) => p.id === route) || PAGES[0];
  const onHome = route === 'home';
  return (
    <div className="topbar">
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
      <div className="topbar-actions">
        <button
          className="btn"
          onClick={() => window.open('https://developer.mozilla.org', '_blank')}
        >
          📖 MDN
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

const TWEAK_DEFAULTS = {
  theme: 'paper',
  accent: '#b8794a',
};

const ACCENTS_EDITOR = ['#58a6ff', '#7ee787', '#ffa657', '#d2a8ff'];
const ACCENTS_SYNTH  = ['#ff5ec4', '#5eead4', '#ffcf5e', '#a78bfa'];
const ACCENTS_PAPER  = ['#b8794a', '#6b8a5a', '#5a7a8a', '#a85c4a'];

function accentsFor(theme) {
  if (theme === 'synth') return ACCENTS_SYNTH;
  if (theme === 'paper') return ACCENTS_PAPER;
  return ACCENTS_EDITOR;
}

export default function App() {
  const [route, go] = useHashRoute();
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply theme on root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.theme);
  }, [t.theme]);

  // Apply accent CSS variable
  useEffect(() => {
    if (t.accent) {
      document.documentElement.style.setProperty('--accent', t.accent);
    }
  }, [t.accent]);

  // When theme changes, snap accent to first option of new theme
  useEffect(() => {
    const current = accentsFor(t.theme);
    if (!current.includes(t.accent)) {
      setTweak('accent', current[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t.theme]);

  let page;
  switch (route) {
    case 'obsidian': page = <ObsidianPage />; break;
    case 'vscode':   page = <VsCodePage />;   break;
    case 'nodejs':   page = <NodejsPage />;   break;
    case 'planning': page = <PlanningPage />; break;
    case 'html':     page = <HtmlPage />;     break;
    case 'css':      page = <CssPage />;      break;
    case 'js':       page = <JsPage />;       break;
    case 'react':    page = <ReactPage />;    break;
    case 'python':   page = <PythonPage />;   break;
    case 'deploy':   page = <DeployPage />;   break;
    default:         page = <HomePage go={go} />;
  }

  const accentOptions = accentsFor(t.theme);

  return (
    <div className="app">
      <Sidebar route={route} go={go} />
      <main className="main">
        <Topbar route={route} go={go} />
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
          options={accentOptions}
          onChange={(v) => setTweak('accent', v)}
        />
      </TweaksPanel>
    </div>
  );
}
