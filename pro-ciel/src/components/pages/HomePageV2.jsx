import { Link } from 'react-router-dom';
import { IconSchool, IconCode, IconDeviceDesktop } from '@tabler/icons-react';

export default function HomePageV2() {
  const levels = [
    { path: '/premiere', label: 'Première', icon: IconSchool, desc: 'Séquences de Première CIEL' },
    { path: '/terminale', label: 'Terminale', icon: IconCode, desc: 'Séquences de Terminale CIEL' },
    { path: '/ressources', label: 'Ressources', icon: IconDeviceDesktop, desc: 'Cours bonus et ressources' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
          style={{ background: 'var(--grad-brand)', boxShadow: '0 4px 24px rgba(106,108,255,.45)' }}>
          <span className="text-white text-2xl font-bold">PC</span>
        </div>
        <h1 className="text-4xl font-bold mb-3">
          <span className="text-gradient">Pro CIEL</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>
          Bac Pro Cybersécurité, Informatique, Électronique — partie informatique
        </p>
      </div>

      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {levels.map((level) => (
          <Link key={level.path} to={level.path}
            className="glass rounded-2xl p-6 no-underline transition-all hover:scale-[1.02]"
            style={{ textDecoration: 'none' }}>
            <level.icon size={32} style={{ color: 'var(--accent)' }} stroke={1.5} />
            <h2 className="text-lg font-semibold mt-3" style={{ color: 'var(--text)' }}>{level.label}</h2>
            <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{level.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
