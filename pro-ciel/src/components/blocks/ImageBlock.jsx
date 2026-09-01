export default function ImageBlock({ src, alt, caption }) {
  return (
    <figure>
      <img
        src={src}
        alt={alt || ''}
        style={{ width: '100%', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}
        loading="lazy"
      />
      {caption && (
        <figcaption style={{ textAlign: 'center', marginTop: 10, fontSize: 13, color: 'var(--text-muted)' }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
