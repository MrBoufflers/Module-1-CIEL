import { renderInline } from '../../lib/inlineMarkdown';

export default function CardsBlock({ columns = 2, items }) {
  return (
    <div className="mb-4" style={{
      display: 'grid',
      gap: 10,
      gridTemplateColumns: `repeat(auto-fit, minmax(${columns >= 3 ? '180px' : '220px'}, 1fr))`,
    }}>
      {items?.map((item, i) => (
        <div key={i} className="card-v2">
          {item.icon && <div className="text-2xl mb-2">{item.icon}</div>}
          {item.code && <code>{item.code}</code>}
          {item.title && <div className="font-semibold mt-1" style={{ fontSize: 14, color: 'var(--text)' }}>{item.title}</div>}
          {item.text && <p className="mt-1" style={{ fontSize: 13, color: 'var(--text-muted)' }}>{renderInline(item.text)}</p>}
        </div>
      ))}
    </div>
  );
}
