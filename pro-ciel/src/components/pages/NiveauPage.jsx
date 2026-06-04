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
    <div className="seq-wrap">
      <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 10 }}>
        {label}
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 40, fontSize: 16 }}>{desc}</p>

      {seqs.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {seqs.map((seq) => (
            <Link
              key={seq.meta.id}
              to={`/${niveau}/${seq.meta.id}/cours`}
              className="side-link active"
              style={{ padding: '16px 20px', borderRadius: 'var(--radius)', textDecoration: 'none' }}
            >
              <span className="seq-badge">{seq.meta.sequence}</span>
              <span className="seq-meta-side" style={{ flex: 1 }}>
                <span className="t" style={{ fontSize: 15 }}>{seq.meta.title}</span>
                <span className="s">{seq.meta.theme} · {seq.meta.duree}</span>
              </span>
              <span className="arrow-r" style={{ color: 'var(--text-muted)' }} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="info-box definition" style={{ textAlign: 'center' }}>
          <div className="info-content">Aucune séquence enregistrée pour le moment.</div>
        </div>
      )}

      <Link to="/" style={{ display: 'inline-block', marginTop: 32, fontSize: 14, color: 'var(--accent)', textDecoration: 'none' }}>
        ← Retour à l'accueil
      </Link>
    </div>
  );
}
