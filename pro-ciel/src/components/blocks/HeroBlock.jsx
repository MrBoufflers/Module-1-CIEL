import { renderInline } from '../../lib/inlineMarkdown';

export default function HeroBlock({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-3" style={{ color: 'var(--text)' }}>
        {renderInline(title)}
      </h1>
      {subtitle && (
        <p className="text-lg italic" style={{ color: 'var(--text-muted)' }}>
          {renderInline(subtitle)}
        </p>
      )}
    </div>
  );
}
