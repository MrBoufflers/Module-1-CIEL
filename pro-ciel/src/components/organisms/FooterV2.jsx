import { Link } from 'react-router-dom';

export default function FooterV2() {
  return (
    <footer className="mt-auto py-8 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>
          <span className="text-gradient font-semibold">Pro CIEL</span>
          {' '}— Bac Pro Cybersécurité, Informatique, Électronique
        </div>
        <div className="flex gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
          <Link to="/premiere" className="no-underline hover:underline" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Première</Link>
          <Link to="/terminale" className="no-underline hover:underline" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terminale</Link>
          <Link to="/ressources" className="no-underline hover:underline" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Ressources</Link>
        </div>
      </div>
    </footer>
  );
}
