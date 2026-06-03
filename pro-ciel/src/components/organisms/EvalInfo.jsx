import { IconClipboardCheck } from '@tabler/icons-react';

export default function EvalInfo({ evalInfo }) {
  if (!evalInfo) return null;

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <IconClipboardCheck size={24} style={{ color: 'var(--accent)' }} stroke={1.5} />
        <h2 className="text-xl font-semibold" style={{ color: 'var(--text)' }}>Évaluation</h2>
      </div>

      <div className="glass rounded-2xl p-6 space-y-4">
        <Row label="Format" value={evalInfo.format} />
        <Row label="Durée" value={evalInfo.duree} />
        <Row label="Compétence" value={evalInfo.competence} />

        {evalInfo.ressourcesAutorisees && evalInfo.ressourcesAutorisees.length > 0 && (
          <div>
            <div className="text-xs font-semibold uppercase mb-2" style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
              Ressources autorisées
            </div>
            <ul className="pl-5 space-y-1" style={{ listStyleType: 'disc' }}>
              {evalInfo.ressourcesAutorisees.map((r, i) => (
                <li key={i} className="text-sm" style={{ color: 'var(--text)' }}>{r}</li>
              ))}
            </ul>
          </div>
        )}

        {evalInfo.note && (
          <div className="info-box attention mt-4">
            <div className="info-title">Information</div>
            <div style={{ fontSize: 14, color: 'var(--text)' }}>{evalInfo.note}</div>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div>
      <div className="text-xs font-semibold uppercase mb-1" style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
        {label}
      </div>
      <div className="text-sm" style={{ color: 'var(--text)' }}>{value}</div>
    </div>
  );
}
