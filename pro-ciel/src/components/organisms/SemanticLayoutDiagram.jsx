export default function SemanticLayoutDiagram() {
  const bandStyle = (bg) => ({
    background: bg,
    color: 'var(--text)',
    padding: '10px 16px',
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 14,
    opacity: 0.85,
  });

  return (
    <div
      className="my-6 not-prose"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: 24,
        fontFamily: 'inherit',
        textAlign: 'center',
      }}
    >
      <div className="flex flex-col" style={{ gap: 6 }}>
        <div style={bandStyle('rgba(72, 187, 120, 0.25)')}>
          <p>&lt;header&gt;</p>
        </div>
        <div style={bandStyle('rgba(99, 140, 255, 0.25)')}>
          <p>&lt;nav&gt;</p>
        </div>
        <div
          style={{
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: 16,
          }}
        >
          <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 8 }}>
            &lt;main&gt;
          </p>
          <div className="flex flex-col" style={{ gap: 6 }}>
            <div style={bandStyle('rgba(72, 187, 120, 0.2)')}>
              <p style={{ marginBottom: 8 }}>&lt;section&gt;</p>
              <div style={bandStyle('rgba(234, 179, 8, 0.22)')}>
                <p>&lt;article&gt;</p>
              </div>
            </div>
            <div style={bandStyle('rgba(72, 187, 120, 0.2)')}>
              <p>&lt;section&gt;</p>
            </div>
          </div>
        </div>
        <div style={bandStyle('rgba(155, 92, 255, 0.25)')}>
          <p>&lt;footer&gt;</p>
        </div>
      </div>
    </div>
  );
}
