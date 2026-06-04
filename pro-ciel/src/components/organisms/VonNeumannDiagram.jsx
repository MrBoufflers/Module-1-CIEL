import { useState } from 'react';

export const VonNeumannDiagramComponent = () => {
  const [info, setInfo] = useState('Survolez un composant pour voir sa description.');
  const descriptions = {
    cpu: "<strong>CPU (Processeur) :</strong> Le cerveau de l'ordinateur.",
    ram: "<strong>RAM (Mémoire Vive) :</strong> La mémoire à court terme.",
    io: "<strong>Périphériques E/S :</strong> Permettent de communiquer avec l'extérieur.",
  };

  const boxStyle = (color) => ({
    padding: '16px',
    borderRadius: 'var(--radius)',
    border: `1.5px dashed color-mix(in srgb, ${color} 50%, transparent)`,
    background: `color-mix(in srgb, ${color} 12%, transparent)`,
    cursor: 'pointer',
    transition: 'transform 0.15s',
    color: 'var(--text)',
    fontWeight: 600,
  });

  return (
    <div
      style={{
        padding: 20,
        borderRadius: 'var(--radius)',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
      }}
      onMouseLeave={() => setInfo('Survolez un composant...')}
    >
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 16, alignItems: 'center' }}>
          <div
            onMouseEnter={() => setInfo(descriptions.io)}
            style={boxStyle('var(--status-done)')}
          >
            Périphériques E/S
          </div>
          <div style={{ fontSize: 24, color: 'var(--text-muted)', fontWeight: 300 }}>&lt;=&gt;</div>
          <div style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: 10,
            background: 'var(--surface-2)',
          }}>
            <div
              onMouseEnter={() => setInfo(descriptions.cpu)}
              style={boxStyle('var(--accent-course)')}
            >
              CPU
            </div>
            <div style={{ fontSize: 24, color: 'var(--text-muted)', fontWeight: 300, margin: '8px 0' }}>↕</div>
            <div
              onMouseEnter={() => setInfo(descriptions.ram)}
              style={boxStyle('var(--status-current)')}
            >
              Mémoire Vive (RAM)
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 16,
            padding: 16,
            background: 'var(--surface-2)',
            borderRadius: 'var(--radius)',
            fontSize: 14,
            color: 'var(--text-muted)',
            minHeight: 60,
            border: '1px solid var(--border)',
            textAlign: 'left',
          }}
          dangerouslySetInnerHTML={{ __html: info }}
        />
      </div>
    </div>
  );
};
