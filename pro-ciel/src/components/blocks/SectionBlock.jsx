import BlockRenderer from './BlockRenderer';

export default function SectionBlock({ title, blocks }) {
  return (
    <section className="mb-8">
      {title && <h2 className="section-title mb-4">{title}</h2>}
      {blocks && <BlockRenderer blocks={blocks} />}
    </section>
  );
}
