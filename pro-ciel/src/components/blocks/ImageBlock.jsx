export default function ImageBlock({ src, alt, caption }) {
  return (
    <figure className="mb-4">
      <img
        src={src}
        alt={alt || ''}
        className="rounded-lg w-full"
        style={{ border: '1px solid var(--border)' }}
        loading="lazy"
      />
      {caption && (
        <figcaption className="text-center mt-2" style={{ fontSize: 13, color: 'var(--text-muted)' }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
