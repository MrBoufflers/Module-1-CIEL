import { renderInline } from '../../lib/inlineMarkdown';

export default function ProseBlock({ content }) {
  return (
    <p className="prose-block mb-4" style={{ fontSize: 16, color: 'var(--text)' }}>
      {renderInline(content)}
    </p>
  );
}
