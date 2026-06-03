import { Link } from 'react-router-dom';
import { IconSun, IconMoon, IconTypography } from '@tabler/icons-react';
import { useTheme } from '../../lib/useTheme';

export default function HeaderV2() {
  const { theme, dys, mode, toggleTheme, toggleDys } = useTheme();

  return (
    <header className="glass sticky top-0 z-50" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3 no-underline" style={{ textDecoration: 'none' }}>
          <div className="flex items-center justify-center rounded-xl text-white font-bold"
            style={{
              width: 40, height: 40,
              background: 'var(--grad-brand)',
              boxShadow: '0 4px 18px rgba(106,108,255,.45)',
            }}>
            PC
          </div>
          <div>
            <div className="text-gradient font-semibold" style={{ fontSize: 17 }}>Pro CIEL</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Bac Pro CIEL</div>
          </div>
        </Link>

        <span className="chip ml-auto">
          {mode === 'course' ? 'Cours' : 'TP'}
        </span>

        <div className="flex items-center gap-2 ml-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              cursor: 'pointer',
            }}
            title={theme === 'dark' ? 'Passer en clair' : 'Passer en sombre'}
          >
            {theme === 'dark' ? <IconSun size={18} stroke={1.5} /> : <IconMoon size={18} stroke={1.5} />}
          </button>
          <button
            onClick={toggleDys}
            className="p-2 rounded-lg transition-colors"
            style={{
              background: dys ? 'var(--grad-brand)' : 'var(--surface)',
              border: dys ? '1px solid transparent' : '1px solid var(--border)',
              color: dys ? '#fff' : 'var(--text)',
              cursor: 'pointer',
            }}
            title="Police dyslexie"
          >
            <IconTypography size={18} stroke={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
