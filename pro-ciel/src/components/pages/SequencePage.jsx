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
    setMode(tab === 'tp' ? 'tp' : 'course');
    return () => setMode('course');
  }, [tab, setMode]);

  if (!tab) {
    return <Navigate to={`/${niveau}/${seqId}/cours`} replace />;
  }

  if (!seq) {
    return (
      <div className="max-w-4xl mx-auto py-10 px-6">
        <div className="glass rounded-2xl p-8 text-center" style={{ color: 'var(--text-muted)' }}>
          <p className="text-lg mb-2">Séquence introuvable</p>
          <p className="text-sm">La séquence « {seqId} » n'existe pas dans le niveau « {niveau} ».</p>
        </div>
        <Link to={`/${niveau}`} className="inline-block mt-6 text-sm no-underline" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
          ← Retour à la liste
        </Link>
      </div>
    );
  }

  const { meta } = seq;
  const hasEval = !!meta.evalInfo;

  const tabs = [
    { key: 'cours', label: 'Cours' },
    { key: 'tp', label: 'TP' },
    ...(hasEval ? [{ key: 'eval', label: 'Éval' }] : []),
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <div className="mb-2">
        <span className="badge">{meta.sequence} · {meta.theme}</span>
      </div>
      <h1 className="text-2xl font-semibold mb-1" style={{ color: 'var(--text)' }}>
        {meta.title}
      </h1>
      {meta.filRouge && (
        <p className="italic text-sm mb-1" style={{ color: 'var(--text-muted)' }}>
          {meta.filRouge}
        </p>
      )}
      <div className="flex flex-wrap gap-3 mt-2 mb-6 text-xs" style={{ color: 'var(--text-muted)' }}>
        {meta.duree && <span>Durée : {meta.duree}</span>}
        {meta.ref?.competences && <span>Compétences : {meta.ref.competences.join(', ')}</span>}
        {meta.ref?.savoirs && <span>Savoirs : {meta.ref.savoirs.join(', ')}</span>}
      </div>

      <div className="tabs-segmented mb-8">
        {tabs.map(({ key, label }) => (
          <NavLink
            key={key}
            to={`/${niveau}/${seqId}/${key}`}
            className={({ isActive }) => `tab-item ${isActive ? 'active' : ''}`}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <div>
        {tab === 'cours' && seq.course && (
          <BlockRenderer blocks={seq.course} />
        )}
        {tab === 'tp' && seq.tp && (
          <TpStepper tp={seq.tp} />
        )}
        {tab === 'eval' && hasEval && (
          <EvalInfo evalInfo={meta.evalInfo} />
        )}
      </div>
    </div>
  );
}
