import { renderInline } from '../../lib/inlineMarkdown';

export default function ProseBlock({ content }) {
  return <p className="prose">{renderInline(content)}</p>;
}
