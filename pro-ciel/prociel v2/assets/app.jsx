// Pro CIEL V2 — App shell (header, sidebar, routing, thèmes)
const { useState: useS, useEffect } = React;

// Icônes simples (formes géométriques only)
function IconSun() { return <span style={{ width: 16, height: 16, borderRadius: '50%', background: 'currentColor', boxShadow: '0 0 0 2px transparent', display: 'inline-block' }}></span>; }
function IconMoon() { return <span style={{ width: 15, height: 15, borderRadius: '50%', boxShadow: 'inset -5px -2px 0 0 currentColor', display: 'inline-block' }}></span>; }

// ---- Header ----
function Header({ theme, setTheme, dys, setDys, mode, route, onHome }) {
  return (
    <header className="header">
      <div className="logo" onClick={onHome} style={{ cursor: 'pointer' }}>PC</div>
      <div className="brand-wrap">
        <span className="brand">Pro CIEL</span>
        <span className="brand-sub">{route === 'home' ? 'Parcours numérique' : 'Première · Séquence 2'}</span>
      </div>
      <div className="spacer"></div>
      <div className="h-actions">
        <div className="seg" role="group" aria-label="Thème">
          <button className={theme === 'light' ? 'active' : ''} onClick={() => setTheme('light')}><IconSun />Clair</button>
          <button className={theme === 'dark' ? 'active' : ''} onClick={() => setTheme('dark')}><IconMoon />Sombre</button>
        </div>
        <button className={"icon-btn" + (dys ? ' on' : '')} title="Police adaptée dyslexie" onClick={() => setDys(d => !d)}
          style={{ fontWeight: 800, fontSize: 15, fontFamily: 'Georgia, serif' }}>Aa</button>
      </div>
    </header>
  );
}

// ---- Sidebar ----
function Sidebar({ active, onSelect }) {
  const p = window.PROGRAMME;
  const labelOf = { done: 'done', active: 'active', todo: '', locked: 'locked' };
  return (
    <nav className="sidebar">
      <div className="side-group">
        <div className="side-label"><span>{p.niveau}</span><span className="count">{p.sequences.length}</span></div>
        <div className="side-links">
          {p.sequences.map((s) => {
            const cls = labelOf[s.state] || '';
            const clickable = s.state === 'active' || s.state === 'done' || s.state === 'todo';
            return (
              <button key={s.id} className={"side-link " + cls + (active === s.id ? ' active' : '')}
                disabled={s.state === 'locked'}
                onClick={() => clickable && onSelect(s.id)}>
                <span className="seq-badge">{s.state === 'done' ? '✓' : s.seq}</span>
                <span className="seq-meta">
                  <span className="t">{s.title}</span>
                  <span className="s">{s.seq} · {s.sub}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="side-group">
        <div className="side-label"><span>Ressources</span></div>
        <div className="side-links">
          {p.ressources.map((r) => (
            <button key={r.id} className="side-link">
              <span className="seq-badge" style={{ fontSize: 11 }}>{r.title[0]}</span>
              <span className="seq-meta"><span className="t">{r.title}</span><span className="s">{r.sub}</span></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ---- Page de séquence ----
function SequencePage({ data, mode, setMode }) {
  const m = data.meta;
  const tabs = [
    { id: 'course', label: 'Cours' },
    { id: 'tp', label: 'TP' },
    { id: 'eval', label: 'Évaluation' },
  ];
  return (
    <div className="seq-wrap">
      <header className="seq-header reveal">
        <span className="badge"><span className="dot"></span>{m.sequence} · {m.theme}</span>
        <h1 className="seq-title">{m.title}</h1>
        <p className="seq-filrouge">{m.filRouge}</p>
        <div className="seq-meta">
          <span className="meta-pill"><span className="k">Durée</span><b>{m.duree}</b></span>
          <span className="meta-pill"><span className="k">Niveau</span><b>Première</b></span>
          <span className="meta-pill"><span className="k">Compétences</span><b>{m.ref.competences.join(', ')}</b></span>
          <span className="meta-pill"><span className="k">Savoirs</span><b>{m.ref.savoirs.join(', ')}</b></span>
        </div>
      </header>

      <div className="tabs" role="tablist">
        {tabs.map(t => (
          <button key={t.id} className={"tab" + (mode === t.id ? ' active' : '')} onClick={() => setMode(t.id)} role="tab">
            {t.label}
          </button>
        ))}
      </div>

      <div key={mode}>
        {mode === 'course' && <BlockRenderer blocks={data.course} />}
        {mode === 'tp' && <TpStepper tp={data.tp} />}
        {mode === 'eval' && <EvalInfo meta={m} />}
      </div>
    </div>
  );
}

// ---- App ----
function App() {
  const [theme, setTheme] = useS(() => localStorage.getItem('pc-theme') || 'dark');
  const [dys, setDys] = useS(() => localStorage.getItem('pc-dys') === '1');
  const [route, setRoute] = useS(() => localStorage.getItem('pc-route') || 'sequence');
  const [mode, setMode] = useS('course'); // course | tp | eval

  useEffect(() => {
    document.body.dataset.theme = theme;
    document.body.dataset.dys = dys ? 'on' : 'off';
    document.body.dataset.mode = (route === 'sequence') ? mode : 'course';
    localStorage.setItem('pc-theme', theme);
    localStorage.setItem('pc-dys', dys ? '1' : '0');
    localStorage.setItem('pc-route', route);
  }, [theme, dys, mode, route]);

  return (
    <div className="app">
      <Header theme={theme} setTheme={setTheme} dys={dys} setDys={setDys} mode={mode}
        route={route} onHome={() => setRoute('home')} />
      <div className="shell">
        {route === 'sequence' && <Sidebar active={window.S2.meta.id} onSelect={() => setRoute('sequence')} />}
        <main className="main">
          <div className="halo one"></div>
          <div className="halo two"></div>
          <div className="page">
            {route === 'home'
              ? <HomePage onOpenLevel={() => { setRoute('sequence'); setMode('course'); }} />
              : <SequencePage data={window.S2} mode={mode} setMode={setMode} />}
          </div>
        </main>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
