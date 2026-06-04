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
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800, marginBottom: 12, color: 'var(--text)' }}>
          {module.icon} {module.title}
        </h1>
        <div className="info-box definition" style={{ fontSize: 14 }}>
          <div className="info-content">
            <p><strong>Compétence :</strong> {module.ref.competence}</p>
            <p><strong>Savoirs :</strong> {module.ref.savoirs}</p>
          </div>
        </div>
      </div>

      <div className="tabs" style={{ marginBottom: 28 }}>
        {tabsConfig.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.92)', color: '#1a1c2e',
        borderRadius: 'var(--radius-lg)', padding: '24px 28px',
        border: '1px solid var(--border)', overflowX: 'auto',
      }}>
        <div className="prose max-w-none">
          {activeContent}
        </div>
      </div>
    </div>
  );
}
