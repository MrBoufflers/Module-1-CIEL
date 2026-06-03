import { useParams, Link } from 'react-router-dom';
import { getSequencesByNiveau } from '../../data/sequences/index';

const levelLabels = {
  premiere: 'Première',
  terminale: 'Terminale',
  ressources: 'Ressources',
};

const levelDescs = {
  premiere: 'Séquences du programme de Première CIEL.',
  terminale: 'Séquences du programme de Terminale CIEL.',
  ressources: 'Cours bonus et ressources complémentaires.',
};

export default function NiveauPage() {
  const { niveau } = useParams();
  const label = levelLabels[niveau] || niveau;
  const desc = levelDescs[niveau] || '';
  const seqs = getSequencesByNiveau(niveau);

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text)' }}>{label}</h1>
      <p style={{ color: 'var(--text-muted)' }} className="mb-8">{desc}</p>

      {seqs.length > 0 ? (
        <div className="space-y-3">
          {seqs.map((seq) => (
            <Link
              key={seq.meta.id}
              to={`/${niveau}/${seq.meta.id}/cours`}
              className="glass rounded-xl p-5 flex items-center gap-4 no-underline transition-all hover:scale-[1.01]"
              style={{ textDecoration: 'none' }}
            >
              <div
                className="flex items-center justify-center rounded-lg font-bold text-sm"
                style={{
                  width: 42, height: 42,
                  background: 'color-mix(in srgb, var(--accent) 15%, transparent)',
                  color: 'var(--accent)',
                  flexShrink: 0,
                }}
              >
                {seq.meta.sequence}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate" style={{ color: 'var(--text)' }}>
                  {seq.meta.title}
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {seq.meta.theme} · {seq.meta.duree}
                </div>
              </div>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>→</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="glass rounded-2xl p-8 text-center" style={{ color: 'var(--text-muted)' }}>
          Aucune séquence enregistrée pour le moment.
        </div>
      )}

      <Link to="/" className="inline-block mt-6 text-sm no-underline" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
        ← Retour à l'accueil
      </Link>
    </div>
  );
}
