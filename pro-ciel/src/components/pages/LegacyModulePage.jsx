import { useParams, Link } from 'react-router-dom';
import { getLegacyModule } from '../../data/legacyModules';
import LegacyModuleView from '../organisms/LegacyModuleView';

export default function LegacyModulePage() {
  const { id } = useParams();
  const module = getLegacyModule(id);

  if (!module) {
    return (
      <div className="max-w-4xl mx-auto py-10 px-6">
        <div className="glass rounded-2xl p-8 text-center" style={{ color: 'var(--text-muted)' }}>
          <p className="text-lg mb-2">Module introuvable</p>
          <p className="text-sm">Le module « {id} » n'existe pas dans les ressources.</p>
        </div>
        <Link to="/ressources" className="inline-block mt-6 text-sm no-underline" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
          ← Retour aux ressources
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <Link to="/ressources" className="inline-block mb-4 text-sm no-underline" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
        ← Ressources
      </Link>
      <LegacyModuleView module={module} />
    </div>
  );
}
