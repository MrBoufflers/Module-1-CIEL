import { useState } from 'react';

export default function LegacyModuleView({ module }) {
  const [activeTab, setActiveTab] = useState('cours');

  if (!module) return null;

  const tabsConfig = [
    { id: 'cours', label: 'Cours', content: module.content.course },
    { id: 'tp', label: 'Travaux Pratiques', content: module.content.tp },
  ];
  if (module.content.quiz) {
    tabsConfig.push({ id: 'quiz', label: 'Quiz', content: module.content.quiz });
  }
  if (module.content.tp2) {
    tabsConfig.push({ id: 'tp2', label: 'TP 2', content: module.content.tp2 });
  }

  const activeContent = tabsConfig.find(t => t.id === activeTab)?.content;

  return (
    <div className="v1-compat">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--text)' }}>
          {module.icon} {module.title}
        </h1>
        <div className="glass rounded-xl p-4 text-sm mb-4">
          <p style={{ color: 'var(--text)' }}>
            <strong>Compétence :</strong> {module.ref.competence}
          </p>
          <p style={{ color: 'var(--text)' }}>
            <strong>Savoirs :</strong> {module.ref.savoirs}
          </p>
        </div>
      </div>

      <div className="tabs-segmented mb-6">
        {tabsConfig.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="glass rounded-2xl p-6 overflow-x-auto"
        style={{ background: 'rgba(255,255,255,0.92)', color: '#1a1c2e' }}>
        <div className="prose max-w-none">
          {activeContent}
        </div>
      </div>
    </div>
  );
}
