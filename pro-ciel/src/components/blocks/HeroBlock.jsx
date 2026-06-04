import { renderInline } from '../../lib/inlineMarkdown';

export default function HeroBlock({ title, subtitle }) {
  return (
    <div className="hero">
      <h1>{renderInline(title)}</h1>
      {subtitle && <p>{renderInline(subtitle)}</p>}
    </div>
  );
}
