import { Link } from 'react-router-dom';
import legacyModules from '../../data/legacyModules';

const levelOrder = ['troncCommun', 'premiere', 'terminale'];

export default function RessourcesPage() {
  const grouped = {};
  for (const mod of legacyModules) {
    if (!grouped[mod.level]) grouped[mod.level] = [];
    grouped[mod.level].push(mod);
  }

  return (
    <div className="seq-wrap">
      <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 10 }}>
        Ressources
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 40, fontSize: 16 }}>
        Cours, TP et exercices des modules précédents (format V1).
      </p>

      {levelOrder.map(levelKey => {
        const mods = grouped[levelKey];
        if (!mods || mods.length === 0) return null;

        return (
          <div key={levelKey} style={{ marginBottom: 32 }}>
            <div className="side-label" style={{ paddingLeft: 0, marginBottom: 14, fontSize: 12 }}>
              <span>{mods[0].levelLabel}</span>
              <span className="count">{mods.length}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {mods.map(mod => (
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
                  <span className="arrow-r" style={{ color: 'var(--text-muted)' }} />
                </Link>
              ))}
            </div>
          </div>
        );
      })}

      <Link to="/" style={{ display: 'inline-block', marginTop: 16, fontSize: 14, color: 'var(--accent)', textDecoration: 'none' }}>
        ← Retour à l'accueil
      </Link>
    </div>
  );
}
