import { Link, useLocation } from 'react-router-dom';
import { IconSun, IconMoon, IconMenu2 } from '@tabler/icons-react';
import { useTheme } from '../../lib/useTheme';

export default function HeaderV2({ onMenuToggle }) {
  const { theme, dys, setTheme, toggleDys } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="header">
      <button
        onClick={onMenuToggle}
        className="icon-btn lg:hidden"
        style={{ width: 36, height: 36, borderRadius: 10 }}
      >
        <IconMenu2 size={18} stroke={1.5} />
      </button>

      <Link to="/" className="logo" style={{ textDecoration: 'none', cursor: 'pointer' }}>PC</Link>
      <div className="brand-wrap">
        <span className="brand">Pro CIEL</span>
        <span className="brand-sub">{isHome ? 'Parcours numérique' : 'Bac Pro CIEL'}</span>
      </div>

      <div className="spacer" />

      <div className="h-actions">
        <div className="seg" role="group" aria-label="Theme">
          <button className={theme === 'light' ? 'active' : ''} onClick={() => setTheme('light')}>
            <IconSun size={14} stroke={1.5} />Clair
          </button>
          <button className={theme === 'dark' ? 'active' : ''} onClick={() => setTheme('dark')}>
            <IconMoon size={14} stroke={1.5} />Sombre
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
