import { useParams, Link } from 'react-router-dom';
import { getLegacyModule } from '../../data/legacyModules';
import LegacyModuleView from '../organisms/LegacyModuleView';

export default function LegacyModulePage() {
  const { id } = useParams();
  const module = getLegacyModule(id);

  if (!module) {
    return (
      <div className="seq-wrap">
        <div className="info-box definition" style={{ textAlign: 'center' }}>
          <div className="info-content">
            <p style={{ fontSize: 18, marginBottom: 8 }}>Module introuvable</p>
            <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>Le module « {id} » n'existe pas dans les ressources.</p>
          </div>
        </div>
        <Link to="/ressources" style={{ display: 'inline-block', marginTop: 24, fontSize: 14, color: 'var(--accent)', textDecoration: 'none' }}>
          ← Retour aux ressources
        </Link>
      </div>
    );
  }

  return (
    <div className="seq-wrap">
      <Link to="/ressources" style={{ display: 'inline-block', marginBottom: 20, fontSize: 14, color: 'var(--accent)', textDecoration: 'none' }}>
        ← Ressources
      </Link>
      <LegacyModuleView module={module} />
    </div>
  );
}
