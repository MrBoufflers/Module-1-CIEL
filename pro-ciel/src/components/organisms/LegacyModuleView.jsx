import { useState, useEffect } from 'react';
import { useTheme } from '../../lib/useTheme';

export default function LegacyModuleView({ module }) {
  const [activeTab, setActiveTab] = useState('cours');
  const { setMode } = useTheme();

  useEffect(() => {
    setMode('course');
    return () => setMode('course');
  }, [setMode]);

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
    <div className="seq-wrap reveal">
      <header className="seq-header">
        <span className="badge"><span className="dot" />Ressource</span>
        <h1 className="seq-title">{module.title}</h1>
      </header>

      <div className="tabs" role="tablist">
        {tabsConfig.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div key={activeTab}>
        {activeContent}
      </div>
    </div>
  );
}
