/* global React, ReactDOM, HomePage, PlanningPage, ObsidianPage, VsCodePage, NodejsPage,
   HtmlPage, CssPage, JsPage, ReactPage, PythonPage, DeployPage */
const { useEffect } = React;

const PRINT_PAGES = [
  { id: "home",     title: "首頁",        group: "INDEX",        Comp: () => <HomePage go={() => {}} /> },
  { id: "obsidian", title: "Obsidian",   group: "環境安裝與設定", Comp: ObsidianPage },
  { id: "vscode",   title: "VS Code",    group: "環境安裝與設定", Comp: VsCodePage },
  { id: "nodejs",   title: "Node.js",    group: "環境安裝與設定", Comp: NodejsPage },
  { id: "planning", title: "前端網頁規劃", group: "規劃",          Comp: PlanningPage },
  { id: "html",     title: "HTML",       group: "前端網頁程式",   Comp: HtmlPage },
  { id: "css",      title: "CSS",        group: "前端網頁程式",   Comp: CssPage },
  { id: "js",       title: "JavaScript", group: "前端網頁程式",   Comp: JsPage },
  { id: "react",    title: "React",      group: "前端網頁程式",   Comp: ReactPage },
  { id: "python",   title: "Python",     group: "後端網頁程式",   Comp: PythonPage },
  { id: "deploy",   title: "部署網站教學", group: "部署發佈",      Comp: DeployPage },
];

function PrintApp() {
  // Lock theme to paper (the print-friendly look) and force expand all collapsibles.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "paper");
    document.documentElement.style.setProperty("--accent", "#b8794a");
    // Force-open every <Collapse>
    const openAll = () => {
      document.querySelectorAll(".collapse").forEach(el => el.classList.add("open"));
    };
    openAll();
    // re-open after a tick in case React re-renders
    const t = setTimeout(openAll, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="print-doc">
      {/* Cover */}
      <section className="print-cover">
        <div className="cover-eyebrow">// 程式網頁架構 · web.architecture</div>
        <h1 className="cover-title">程式網頁架構</h1>
        <div className="cover-sub">從環境設定到前後端與部署的完整指南</div>
        <div className="cover-toc">
          <div className="cover-toc-title">目錄 · Table of Contents</div>
          <ol>
            {PRINT_PAGES.map((p, i) => (
              <li key={p.id}>
                <span className="toc-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="toc-title">{p.title}</span>
                <span className="toc-group">{p.group}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="cover-foot">v1.0 · 列印版</div>
      </section>

      {PRINT_PAGES.map((p, i) => {
        const Comp = p.Comp;
        return (
          <section className="print-page" key={p.id} data-screen-label={String(i + 1).padStart(2, "0") + " " + p.title}>
            <div className="print-page-header">
              <span className="ph-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="ph-group">{p.group}</span>
              <span className="ph-sep">/</span>
              <span className="ph-title">{p.title}</span>
            </div>
            <div className="content">
              <Comp />
            </div>
          </section>
        );
      })}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PrintApp />);

// Auto-print: wait for fonts, layout, and a small settle delay before opening print dialog.
(async () => {
  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  } catch (e) { /* ignore */ }
  // Wait one more frame to let React commit + collapsibles open
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  setTimeout(() => { window.print(); }, 800);
})();
