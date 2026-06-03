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
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text)' }}>Ressources</h1>
      <p style={{ color: 'var(--text-muted)' }} className="mb-8">
        Cours, TP et exercices des modules précédents (format V1).
      </p>

      {levelOrder.map(levelKey => {
        const mods = grouped[levelKey];
        if (!mods || mods.length === 0) return null;

        return (
          <div key={levelKey} className="mb-8">
            <h2 className="text-lg font-semibold mb-3" style={{ color: 'var(--text)' }}>
              {mods[0].levelLabel}
            </h2>
            <div className="space-y-2">
              {mods.map(mod => (
                <Link
                  key={mod.id}
                  to={`/ressources/${mod.id}`}
                  className="glass rounded-xl p-4 flex items-center gap-3 no-underline transition-all hover:scale-[1.01]"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="text-xl flex-shrink-0">{mod.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate" style={{ color: 'var(--text)' }}>
                      {mod.title}
                    </div>
                    <div className="text-xs mt-0.5 truncate" style={{ color: 'var(--text-muted)' }}>
                      {mod.ref.competence}
                    </div>
                  </div>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        );
      })}

      <Link to="/" className="inline-block mt-4 text-sm no-underline" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
        ← Retour à l'accueil
      </Link>
    </div>
  );
}
