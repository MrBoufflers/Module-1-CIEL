import NavLink from '../molecules/NavLink';
import Heading from '../atoms/Heading';
import CielLogo from '../../assets/images/ciel-logo.png'
import { useState } from 'react';

export default function Sidebar({ data, activeModuleId, onModuleChange }) {
  // Par défaut, la première section avec des modules est ouverte
  const firstLevelWithModules = Object.keys(data).find(level => data[level] && data[level].length > 0) || null;
  const [openLevel, setOpenLevel] = useState(firstLevelWithModules);

  const levelOrder = ['troncCommun', 'premiere', 'terminale'];
  const levelInfo = {
    troncCommun: { name: 'Tronc Commun', style: 'bg-gray-100 text-gray-800 hover:bg-gray-200' },
    premiere: { name: 'Première', style: 'bg-blue-100 text-blue-800 hover:bg-blue-200' },
    terminale: { name: 'Terminale', style: 'bg-green-100 text-green-800 hover:bg-green-200' },
  };

  const handleToggle = (levelKey) => {
    // Si on clique sur la section déjà ouverte, on la ferme. Sinon, on ouvre la nouvelle.
    setOpenLevel(openLevel === levelKey ? null : levelKey);
  };

  return (
    <aside className="w-full lg:w-64 bg-white lg:border-r border-gray-200 p-4 lg:p-6 lg:fixed lg:h-full">
      <img src={CielLogo} alt="Logo" className='h-25 m-auto' />
      <Heading level={1} className="text-blue-600 mb-6">Bac Pro CIEL</Heading>
      <nav className="space-y-2">
         <NavLink
        key="home"
        icon="🏠"
        text="Accueil"
        isActive={activeModuleId === 'home'}
        onClick={(e) => {
          e.preventDefault();
          onModuleChange('home');
        }}
    />
        {levelOrder.map(levelKey => {
          const modules = data[levelKey];
          if (!modules || modules.length === 0) return null;
          const isOpen = openLevel === levelKey;

          return (
            <div key={levelKey}>
              <button
                onClick={() => handleToggle(levelKey)}
                className={`w-full flex items-center justify-between p-3 rounded-lg text-left font-bold transition-colors ${levelInfo[levelKey].style}`}
              >
                <span>{levelInfo[levelKey].name}</span>
                <svg className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
              
              {isOpen && (
                <div className="mt-1 space-y-1 pl-4 py-2 border-l-2 border-gray-200">
                  {modules.map((module) => (
                    <NavLink
                      key={module.id}
                      icon={module.icon}
                      text={module.title}
                      isActive={activeModuleId === module.id}
                      onClick={(e) => {
                        e.preventDefault();
                        onModuleChange(module.id);
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}