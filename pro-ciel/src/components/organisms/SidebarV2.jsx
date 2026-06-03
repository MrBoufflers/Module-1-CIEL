import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  IconHome,
  IconSchool,
  IconCode,
  IconArchive,
  IconChevronRight,
  IconX,
} from '@tabler/icons-react';
import { getSequencesByNiveau } from '../../data/sequences/index';
import legacyModules from '../../data/legacyModules';

const sections = [
  { key: 'premiere', label: 'Première', icon: IconSchool, path: '/premiere' },
  { key: 'terminale', label: 'Terminale', icon: IconCode, path: '/terminale' },
  { key: 'ressources', label: 'Ressources', icon: IconArchive, path: '/ressources' },
];

export default function SidebarV2({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState('premiere');
  const location = useLocation();

  const toggleSection = (key) => {
    setOpenSection(openSection === key ? null : key);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-72
          glass flex flex-col
          transition-transform duration-300
          lg:sticky lg:top-[57px] lg:h-[calc(100vh-57px)] lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ borderRight: '1px solid var(--border)' }}
      >
        <div className="flex items-center justify-between p-4 lg:hidden">
          <span className="text-gradient font-semibold" style={{ fontSize: 17 }}>Navigation</span>
          <button onClick={onClose} style={{ color: 'var(--text-muted)', cursor: 'pointer', background: 'none', border: 'none' }}>
            <IconX size={20} stroke={1.5} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-6 pt-2 lg:pt-4">
          <NavLink
            to="/"
            end
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm font-medium transition-colors no-underline ${isActive ? 'sidebar-link-active' : 'sidebar-link'}`
            }
            style={{ textDecoration: 'none' }}
          >
            <IconHome size={18} stroke={1.5} />
            Accueil
          </NavLink>

          {sections.map((section) => {
            const isRessources = section.key === 'ressources';
            const seqs = isRessources ? [] : getSequencesByNiveau(section.key);
            const isSectionActive = location.pathname.startsWith(section.path);

            return (
              <div key={section.key} className="mt-2">
                <button
                  onClick={() => toggleSection(section.key)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                  style={{
                    background: isSectionActive ? 'color-mix(in srgb, var(--accent) 12%, transparent)' : 'transparent',
                    color: isSectionActive ? 'var(--accent)' : 'var(--text)',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <section.icon size={18} stroke={1.5} />
                  <span className="flex-1">{section.label}</span>
                  <IconChevronRight
                    size={14}
                    stroke={2}
                    style={{
                      color: 'var(--text-muted)',
                      transform: openSection === section.key ? 'rotate(90deg)' : 'none',
                      transition: 'transform 0.2s',
                    }}
                  />
                </button>

                {openSection === section.key && (
                  <div className="ml-4 mt-1 pl-3" style={{ borderLeft: '2px solid var(--border)' }}>
                    {isRessources ? (
                      <>
                        <NavLink
                          to="/ressources"
                          end
                          onClick={onClose}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors no-underline ${isActive ? 'sidebar-link-active' : 'sidebar-link'}`
                          }
                          style={{ textDecoration: 'none' }}
                        >
                          Tous les modules
                        </NavLink>
                        {legacyModules.slice(0, 8).map(mod => (
                          <NavLink
                            key={mod.id}
                            to={`/ressources/${mod.id}`}
                            onClick={onClose}
                            className={({ isActive }) =>
                              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors no-underline ${isActive ? 'sidebar-link-active' : 'sidebar-link'}`
                            }
                            style={{ textDecoration: 'none' }}
                          >
                            <span className="flex-shrink-0">{mod.icon}</span>
                            <span className="truncate">{mod.title}</span>
                          </NavLink>
                        ))}
                        {legacyModules.length > 8 && (
                          <Link
                            to="/ressources"
                            onClick={onClose}
                            className="block px-3 py-2 text-xs no-underline"
                            style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                          >
                            + {legacyModules.length - 8} autres…
                          </Link>
                        )}
                      </>
                    ) : seqs.length > 0 ? (
                      seqs.map((seq) => (
                        <NavLink
                          key={seq.meta.id}
                          to={`/${section.key}/${seq.meta.id}/cours`}
                          onClick={onClose}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors no-underline ${isActive ? 'sidebar-link-active' : 'sidebar-link'}`
                          }
                          style={{ textDecoration: 'none' }}
                        >
                          <span style={{ color: 'var(--text-muted)', fontSize: 12, fontWeight: 600, minWidth: 24 }}>
                            {seq.meta.sequence}
                          </span>
                          <span className="truncate">{seq.meta.title}</span>
                        </NavLink>
                      ))
                    ) : (
                      <Link
                        to={section.path}
                        onClick={onClose}
                        className="block px-3 py-2 text-sm no-underline"
                        style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                      >
                        Voir les séquences →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
