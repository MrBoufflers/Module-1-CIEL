import { useParams, NavLink, Navigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getSequence } from '../../data/sequences/index';
import { useTheme } from '../../lib/useTheme';
import BlockRenderer from '../blocks/BlockRenderer';
import TpStepper from '../organisms/TpStepper';
import EvalInfo from '../organisms/EvalInfo';

export default function SequencePage() {
  const { niveau, seqId, tab } = useParams();
  const { setMode } = useTheme();
  const seq = getSequence(niveau, seqId);

  useEffect(() => {
    if (tab === 'tp') setMode('tp');
    else if (tab === 'eval') setMode('eval');
    else setMode('course');
    return () => setMode('course');
  }, [tab, setMode]);

  if (!tab) {
    return <Navigate to={`/${niveau}/${seqId}/cours`} replace />;
  }

  if (!seq) {
    return (
      <div className="seq-wrap">
        <div className="info-box definition" style={{ textAlign: 'center' }}>
          <div className="info-content">
            <p style={{ fontSize: 18, marginBottom: 8 }}>Séquence introuvable</p>
            <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>La séquence « {seqId} » n'existe pas dans le niveau « {niveau} ».</p>
          </div>
        </div>
        <Link to={`/${niveau}`} style={{ display: 'inline-block', marginTop: 24, fontSize: 14, color: 'var(--accent)', textDecoration: 'none' }}>
          ← Retour à la liste
        </Link>
      </div>
    );
  }

  const { meta } = seq;
  const hasEval = !!meta.evalInfo;
  const hasTp = !!seq.tp;

  const tabs = [
    { key: 'cours', label: 'Cours' },
    ...(hasTp ? [{ key: 'tp', label: 'TP' }] : []),
    ...(hasEval ? [{ key: 'eval', label: 'Évaluation' }] : []),
  ];

  return (
    <div className="seq-wrap">
      <header className="seq-header reveal">
        <span className="badge"><span className="dot" />{meta.sequence ? `${meta.sequence} · ` : ''}{meta.theme}</span>
        <h1 className="seq-title">{meta.title}</h1>
        {meta.filRouge && <p className="seq-filrouge">{meta.filRouge}</p>}
        <div className="seq-meta-row">
          {meta.duree && (
            <span className="meta-pill"><span className="k">Durée</span><b>{meta.duree}</b></span>
          )}
          {meta.niveau && (
            <span className="meta-pill"><span className="k">Niveau</span><b>{{ premiere: 'Première', terminale: 'Terminale', ressources: 'Ressources' }[meta.niveau] || meta.niveau}</b></span>
          )}
          {meta.ref?.competences && (
            <span className="meta-pill"><span className="k">Compétences</span><b>{meta.ref.competences.join(', ')}</b></span>
          )}
          {meta.ref?.savoirs && (
            <span className="meta-pill"><span className="k">Savoirs</span><b>{meta.ref.savoirs.join(', ')}</b></span>
          )}
        </div>
      </header>

      <div className="tabs" role="tablist">
        {tabs.map(({ key, label }) => (
          <NavLink
            key={key}
            to={`/${niveau}/${seqId}/${key}`}
            className={({ isActive }) => `tab${isActive ? ' active' : ''}`}
            role="tab"
          >
            {label}
          </NavLink>
        ))}
      </div>

      <div key={tab}>
        {tab === 'cours' && seq.course && (
          <BlockRenderer blocks={seq.course} />
        )}
        {tab === 'tp' && seq.tp && (
          <TpStepper tp={seq.tp} />
        )}
        {tab === 'eval' && hasEval && (
          <EvalInfo evalInfo={meta.evalInfo} meta={meta} />
        )}
      </div>
    </div>
  );
}
