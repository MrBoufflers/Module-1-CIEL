export default function CodeBlock({ language, title, code }) {
  return (
    <div className="code-block-v2 mb-4">
      <div className="code-head">
        <span className="code-dots"><span /><span /><span /></span>
        <span>{title || language || 'code'}</span>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  );
}
