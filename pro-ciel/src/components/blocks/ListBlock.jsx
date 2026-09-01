import { renderInline } from '../../lib/inlineMarkdown';

export default function ListBlock({ ordered = false, items }) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={`list ${ordered ? 'ordered' : 'unordered'}`}>
      {items?.map((item, i) => (
        <li key={i}>{renderInline(item)}</li>
      ))}
    </Tag>
  );
}
