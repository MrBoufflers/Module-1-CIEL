import { Link } from 'react-router-dom';

export default function FooterV2() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', marginTop: 'auto', padding: '32px clamp(1.5rem, 4vw, 3rem)' }}>
      <div style={{ maxWidth: 1024, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>
          <span className="text-gradient" style={{ fontWeight: 700 }}>Pro CIEL</span>
          {' '}— La plateforme d'apprentissage numérique
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 12 }}>
          <Link to="/premiere" style={{ color: 'var(--text-faint)', textDecoration: 'none' }}>Première</Link>
          <Link to="/terminale" style={{ color: 'var(--text-faint)', textDecoration: 'none' }}>Terminale</Link>
          <Link to="/ressources" style={{ color: 'var(--text-faint)', textDecoration: 'none' }}>Ressources</Link>
        </div>
      </div>
      <div style={{ maxWidth: 1024, margin: '18px auto 0', textAlign: 'center', color: 'var(--text-faint)', fontSize: 12 }}>
        Made with <span aria-label="amour" role="img">❤️</span> by Alix Boufflers
      </div>
    </footer>
  );
}
