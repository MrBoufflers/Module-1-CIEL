import { Link } from 'react-router-dom';
import { getSequencesByNiveau } from '../../data/sequences/index';
import legacyModules from '../../data/legacyModules';

export default function RessourcesPage() {
  const resourceSeqs = getSequencesByNiveau('ressources');

  return (
    <div className="seq-wrap">
      <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 10 }}>
        Ressources
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 40, fontSize: 16 }}>
        Tutoriels, guides et modules complémentaires.
      </p>

      {resourceSeqs.length > 0 && (
        <div style={{ marginBottom: 32 }}>
          <div className="side-label" style={{ paddingLeft: 0, marginBottom: 14, fontSize: 12 }}>
            <span>Bureautique</span>
            <span className="count">{resourceSeqs.length}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {resourceSeqs.map(seq => (
              <Link
                key={seq.meta.id}
                to={`/ressources/${seq.meta.id}/cours`}
                className="side-link"
                style={{ padding: '14px 16px', borderRadius: 'var(--radius)', textDecoration: 'none', border: '1px solid var(--border)' }}
              >
                <span className="seq-badge" style={{ fontSize: 11, flexShrink: 0 }}>R</span>
                <span className="seq-meta-side" style={{ flex: 1 }}>
                  <span className="t" style={{ fontSize: 14 }}>{seq.meta.title}</span>
                  <span className="s">{seq.meta.theme} · {seq.meta.duree}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {legacyModules.length > 0 && (
        <div style={{ marginBottom: 32 }}>
          <div className="side-label" style={{ paddingLeft: 0, marginBottom: 14, fontSize: 12 }}>
            <span>Guides</span>
            <span className="count">{legacyModules.length}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {legacyModules.map(mod => (
              <Link
                key={mod.id}
                to={`/ressources/${mod.id}`}
                className="side-link"
                style={{ padding: '14px 16px', borderRadius: 'var(--radius)', textDecoration: 'none', border: '1px solid var(--border)' }}
              >
                <span style={{ fontSize: 18, flexShrink: 0 }}>{mod.icon}</span>
                <span className="seq-meta-side" style={{ flex: 1 }}>
                  <span className="t" style={{ fontSize: 14 }}>{mod.title}</span>
                  <span className="s">{mod.ref.competence}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Link to="/" style={{ display: 'inline-block', marginTop: 16, fontSize: 14, color: 'var(--accent)', textDecoration: 'none' }}>
        ← Retour à l'accueil
      </Link>
    </div>
  );
}
