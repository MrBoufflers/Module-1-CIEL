import BlockRenderer from './BlockRenderer';

export default function SectionBlock({ title, blocks }) {
  return (
    <section>
      {title && <h2 className="section-title">{title}</h2>}
      {blocks && (
        <div className="section-body">
          <BlockRenderer blocks={blocks} />
        </div>
      )}
    </section>
  );
}
