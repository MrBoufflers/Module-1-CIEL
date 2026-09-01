import { renderInline } from '../../lib/inlineMarkdown';

const INFO_LABEL = {
  astuce: 'Astuce',
  analogie: 'Analogie',
  attention: 'Attention',
  definition: 'Définition',
};

export default function InfoBlock({ variant = 'definition', title, content }) {
  return (
    <div className={`info-box ${variant}`}>
      <div className="info-title">
        <span className="mark" />
        {title || INFO_LABEL[variant] || variant}
      </div>
      <div className="info-content">{renderInline(content)}</div>
    </div>
  );
}
