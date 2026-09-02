import { Link, useLocation } from 'react-router-dom';
import { IconSun, IconMoon, IconMenu2 } from '@tabler/icons-react';
import { useTheme } from '../../lib/useTheme';
import logoProCiel from '../../assets/images/PRO-CIEL-LOGO-V2.png';

export default function HeaderV2({ onMenuToggle }) {
  const { theme, dys, setTheme, toggleDys } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="header">
      <button
        onClick={onMenuToggle}
        className="icon-btn burger-btn"
        aria-label="Ouvrir ou fermer le menu"
        style={{ width: 40, height: 40, borderRadius: 11, flexShrink: 0 }}
      >
        <IconMenu2 size={18} stroke={1.5} />
      </button>

      <Link to="/" className="logo-link" style={{ textDecoration: 'none', cursor: 'pointer', flexShrink: 0 }}>
        <img src={logoProCiel} alt="Pro CIEL" style={{ height: 44, width: 'auto', display: 'block' }} />
      </Link>
      <div className="brand-wrap">
        <span className="brand">Pro CIEL</span>
        <span className="brand-sub">{"La plateforme d'apprentissage numérique"}</span>
      </div>

      <div className="spacer" />

      <div className="h-actions">
        <div className="seg" role="group" aria-label="Theme">
          <button className={theme === 'light' ? 'active' : ''} onClick={() => setTheme('light')} aria-label="Thème clair" title="Thème clair">
            <IconSun size={14} stroke={1.5} /><span className="seg-label">Clair</span>
          </button>
          <button className={theme === 'dark' ? 'active' : ''} onClick={() => setTheme('dark')} aria-label="Thème sombre" title="Thème sombre">
            <IconMoon size={14} stroke={1.5} /><span className="seg-label">Sombre</span>
          </button>
        </div>
        <button
          className={`icon-btn${dys ? ' on' : ''}`}
          title="Police adaptée dyslexie"
          onClick={toggleDys}
          style={{ fontWeight: 800, fontSize: 15, fontFamily: 'Georgia, serif' }}
        >
          Aa
        </button>
      </div>
    </header>
  );
}
