import { useParams, NavLink, Navigate, Outlet } from 'react-router-dom';

export default function SequencePage() {
  const { niveau, seqId, tab } = useParams();

  if (!tab) {
    return <Navigate to={`/${niveau}/${seqId}/cours`} replace />;
  }

  const tabs = [
    { key: 'cours', label: 'Cours' },
    { key: 'tp', label: 'TP' },
    { key: 'eval', label: 'Éval' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="mb-2">
        <span className="badge">
          {niveau} · {seqId}
        </span>
      </div>
      <h1 className="text-2xl font-semibold mb-1" style={{ color: 'var(--text)' }}>
        Séquence : {seqId}
      </h1>
      <p className="italic text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
        Contenu à venir (étape 4).
      </p>

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

      <div className="glass rounded-2xl p-8" style={{ color: 'var(--text-muted)' }}>
        Contenu de l'onglet « {tab} » — sera implémenté aux étapes suivantes.
      </div>
    </div>
  );
}
