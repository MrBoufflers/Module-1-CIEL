// Pro CIEL V2 — Pages
const { useState: useStateP } = React;

// ---- Accueil ----
function HomePage({ onOpenLevel }) {
  return (
    <div className="home reveal">
      <div className="home-logo">PC</div>
      <h1>Apprendre le numérique,<br /><span className="grad">étape par étape.</span></h1>
      <p className="sub">Le parcours CIEL en fil rouge : du matériel au déploiement web, une séquence à la fois.</p>
      <div className="levels">
        {window.NIVEAUX.map((n) => (
          <div key={n.id} className={"level-card" + (n.soon ? ' soon' : ' active')}
            onClick={() => !n.soon && onOpenLevel(n.id)}>
            <div className="lc-num">{n.num}</div>
            <div className="lc-title">{n.title}</div>
            <div className="lc-desc">{n.desc}</div>
            <div className="lc-foot">
              <span className="lc-count">{n.soon ? 'Bientôt disponible' : n.count}</span>
              {!n.soon && <span className="lc-arrow"><span className="arrow-r"></span></span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- TP Stepper ----
function TpStepper({ tp }) {
  const firstCurrent = 1; // étape 0 validée, étape 1 en cours
  const [openStep, setOpenStep] = useStateP(firstCurrent);
  const [validated, setValidated] = useStateP([0]); // index validés
  const total = tp.steps.length;
  const progress = Math.round((validated.length / total) * 100);

  const stateOf = (i) => {
    if (validated.includes(i)) return 'done';
    if (i === validated.length) return 'current';
    return 'locked';
  };

  const validate = (i) => {
    setValidated(v => v.includes(i) ? v : [...v, i].sort((a, b) => a - b));
    setOpenStep(i + 1 < total ? i + 1 : i);
  };

  return (
    <div className="reveal">
      <div className="tp-mission">
        <div className="m-label">Mission</div>
        <div className="m-title">{tp.title}</div>
        <div className="m-text">{fmt(tp.mission)}</div>
      </div>

      <div className="tp-meta">
        <div className="tp-card">
          <div className="tc-label">Prérequis</div>
          <ul>{tp.prerequis.map((p, i) => <li key={i}>{fmt(p)}</li>)}</ul>
        </div>
        <div className="tp-card">
          <div className="tc-label">Matériel</div>
          <ul>{tp.materiel.map((p, i) => <li key={i}>{fmt(p)}</li>)}</ul>
        </div>
        <div className="tp-card">
          <div className="tc-label">Critères de réussite</div>
          <ul>{tp.criteres.map((p, i) => <li key={i}>{fmt(p)}</li>)}</ul>
        </div>
      </div>

      <div className="progress-rail">
        <span className="lbl">{validated.length} / {total} étapes</span>
        <div className="bar"><span style={{ width: progress + '%' }}></span></div>
        <span className="lbl">{progress}%</span>
      </div>

      <div className="steps">
        {tp.steps.map((s, i) => {
          const st = stateOf(i);
          const isOpen = openStep === i && st !== 'locked';
          return (
            <div key={i} className={"step-v2 " + (isOpen && st === 'current' ? 'current ' : '') + st}>
              <div className="step-head" onClick={() => st !== 'locked' && setOpenStep(isOpen ? -1 : i)}>
                <span className="step-num">{st === 'done' ? '✓' : i + 1}</span>
                <span className="step-title">{s.title}</span>
                <span className={"status " + st}>
                  <span className="sd"></span>
                  {st === 'done' ? 'validé' : st === 'current' ? 'en cours' : 'verrouillé'}
                </span>
              </div>
              {isOpen && (
                <div className="step-body">
                  <BlockRenderer blocks={s.body} />
                  <div className="validate-box">
                    <div className="v-title"><span className="sd" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--status-done)', display: 'inline-block' }}></span>Pour valider cette étape</div>
                    <div className="v-text">{fmt(s.done)}</div>
                    {st !== 'done' && (
                      <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
                        <button className="btn-primary" onClick={() => validate(i)}>Marquer comme fait</button>
                        <button className="btn-ghost">Prévenir le professeur</button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="info-box definition" style={{ marginTop: 24 }}>
        <div className="info-title"><span className="mark"></span>Note</div>
        <div className="info-content">{fmt(tp.note)}</div>
      </div>
    </div>
  );
}

// ---- Éval ----
function EvalInfo({ meta }) {
  const e = meta.evalInfo;
  return (
    <div className="eval-wrap reveal">
      <div className="eval-card">
        <h2>Évaluation — {meta.sequence}</h2>
        <p className="prose" style={{ marginTop: 0 }}>{fmt(e.format)}</p>
        <div className="eval-grid">
          <div className="eval-item"><div className="ei-k">Durée</div><div className="ei-v">{e.duree}</div></div>
          <div className="eval-item"><div className="ei-k">Compétences</div><div className="ei-v">{e.competence}</div></div>
          <div className="eval-item"><div className="ei-k">Ressources autorisées</div><div className="ei-v">{e.ressourcesAutorisees.join(' · ')}</div></div>
        </div>
        <div className="eval-note">
          <div className="info-title"><span className="mark" style={{ background: 'var(--warn)' }}></span>À savoir</div>
          <div className="info-content">{fmt(e.note)}</div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomePage, TpStepper, EvalInfo });
