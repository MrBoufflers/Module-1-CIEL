import BlockRenderer from './BlockRenderer';

export default function SectionBlock({ title, blocks }) {
  return (
    <section className="mt-12 first:mt-0 mb-8">
      {title && <h2 className="section-title mb-6">{title}</h2>}
      {blocks && (
        <div className="section-body">
          <BlockRenderer blocks={blocks} />
        </div>
      )}
    </section>
  );
}
