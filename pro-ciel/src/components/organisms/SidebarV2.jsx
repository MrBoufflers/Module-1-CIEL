import { NavLink, Link, useLocation } from 'react-router-dom';
import { IconX } from '@tabler/icons-react';
import { getSequencesByNiveau } from '../../data/sequences/index';
import legacyModules from '../../data/legacyModules';

const sidebarSections = [
  { key: 'premiere', label: 'Première' },
  { key: 'terminale', label: 'Terminale' },
];

export default function SidebarV2({ isOpen, onClose }) {
  const location = useLocation();
  const resourceSeqs = getSequencesByNiveau('ressources');

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
          fixed top-0 left-0 z-40 h-full
          flex flex-col transition-transform duration-300
          lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ width: 'var(--sidebar-w)' }}
      >
        <nav className="sidebar" style={{ position: 'fixed', top: 'var(--header-h)', height: 'calc(100vh - var(--header-h))' }}>
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <span className="brand" style={{ fontSize: 16 }}>Navigation</span>
            <button onClick={onClose} className="icon-btn" style={{ width: 32, height: 32 }}>
              <IconX size={16} stroke={1.5} />
            </button>
          </div>

          {sidebarSections.map((section) => {
            const seqs = getSequencesByNiveau(section.key);
            return (
              <div key={section.key} className="side-group">
                <div className="side-label">
                  <span>{section.label}</span>
                  {seqs.length > 0 && <span className="count">{seqs.length}</span>}
                </div>
                <div className="side-links">
                  {seqs.length > 0 ? seqs.map((seq) => {
                    const isActive = location.pathname.includes(`/${section.key}/${seq.meta.id}`);
                    return (
                      <NavLink
                        key={seq.meta.id}
                        to={`/${section.key}/${seq.meta.id}/cours`}
                        onClick={onClose}
                        className={`side-link${isActive ? ' active' : ''}`}
                      >
                        <span className="seq-badge">{seq.meta.sequence}</span>
                        <span className="seq-meta-side">
                          <span className="t">{seq.meta.title}</span>
                          <span className="s">{seq.meta.sequence} · {seq.meta.theme}</span>
                        </span>
                      </NavLink>
                    );
                  }) : (
                    <Link
                      to={`/${section.key}`}
                      onClick={onClose}
                      className="side-link"
                    >
                      <span className="seq-meta-side">
                        <span className="t">Voir les séquences</span>
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}

          <div className="side-group">
            <div className="side-label">
              <span>Ressources</span>
              {(resourceSeqs.length + legacyModules.length) > 0 && (
                <span className="count">{resourceSeqs.length + legacyModules.length}</span>
              )}
            </div>
            <div className="side-links">
              {resourceSeqs.map((seq) => {
                const isActive = location.pathname.includes(`/ressources/${seq.meta.id}`);
                return (
                  <NavLink
                    key={seq.meta.id}
                    to={`/ressources/${seq.meta.id}/cours`}
                    onClick={onClose}
                    className={`side-link${isActive ? ' active' : ''}`}
                  >
                    <span className="seq-badge" style={{ fontSize: 11 }}>R</span>
                    <span className="seq-meta-side">
                      <span className="t">{seq.meta.title}</span>
                      <span className="s">{seq.meta.theme}</span>
                    </span>
                  </NavLink>
                );
              })}
              {legacyModules.map(mod => (
                <NavLink
                  key={mod.id}
                  to={`/ressources/${mod.id}`}
                  onClick={onClose}
                  className={({ isActive }) => `side-link${isActive ? ' active' : ''}`}
                >
                  <span className="seq-badge" style={{ fontSize: 11 }}>{mod.title[0]}</span>
                  <span className="seq-meta-side">
                    <span className="t">{mod.title}</span>
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
