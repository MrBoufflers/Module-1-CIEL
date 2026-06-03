import { renderInline } from '../../lib/inlineMarkdown';

export default function ListBlock({ ordered = false, items }) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className="mb-4 pl-6" style={{
      listStyleType: ordered ? 'decimal' : 'disc',
      color: 'var(--text)',
      fontSize: 15,
    }}>
      {items?.map((item, i) => (
        <li key={i} className="mb-1">{renderInline(item)}</li>
      ))}
    </Tag>
  );
}
