export default function CodeBlock({ language, title, code, filename }) {
  return (
    <div className="code-block-v2">
      <div className="code-head">
        <span className="lamps">
          <i style={{ background: '#ff6b6b' }} />
          <i style={{ background: '#ffd166' }} />
          <i style={{ background: '#06d6a0' }} />
        </span>
        {filename || title || language || 'code'}
      </div>
      <pre><code>{code}</code></pre>
    </div>
  );
}
