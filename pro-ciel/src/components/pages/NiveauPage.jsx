import { useParams, Link } from 'react-router-dom';

const levelLabels = {
  premiere: 'Première',
  terminale: 'Terminale',
  ressources: 'Ressources',
};

export default function NiveauPage() {
  const { niveau } = useParams();
  const label = levelLabels[niveau] || niveau;

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text)' }}>{label}</h1>
      <p style={{ color: 'var(--text-muted)' }} className="mb-8">
        Les séquences seront affichées ici.
      </p>
      <div className="glass rounded-2xl p-8 text-center" style={{ color: 'var(--text-muted)' }}>
        Aucune séquence enregistrée pour le moment.
      </div>
      <Link to="/" className="inline-block mt-6 text-sm" style={{ color: 'var(--accent)' }}>
        ← Retour à l'accueil
      </Link>
    </div>
  );
}
