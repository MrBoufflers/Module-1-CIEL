import { renderInline } from '../../lib/inlineMarkdown';

export default function CardsBlock({ columns = 3, items }) {
  return (
    <div className={`cards c${columns}`}>
      {items?.map((item, i) => (
        <div key={i} className="card-v2">
          {item.code && <span className="card-code">{item.code}</span>}
          {item.title && <div className="card-title">{item.title}</div>}
          {item.text && <div className="card-text">{renderInline(item.text)}</div>}
        </div>
      ))}
    </div>
  );
}
