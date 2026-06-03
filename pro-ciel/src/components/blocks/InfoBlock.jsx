import { renderInline } from '../../lib/inlineMarkdown';

const variantLabels = {
  analogie: 'Analogie',
  astuce: 'Astuce',
  attention: 'Attention',
  definition: 'Définition',
};

export default function InfoBlock({ variant = 'definition', title, content }) {
  const label = title || variantLabels[variant] || variant;
  return (
    <div className={`info-box ${variant} mb-4`}>
      <div className="info-title">{label}</div>
      <div style={{ fontSize: 14, color: 'var(--text)' }}>
        {renderInline(content)}
      </div>
    </div>
  );
}
