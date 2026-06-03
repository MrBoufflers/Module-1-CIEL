export default function SemanticLayoutDiagram() {
  return (
    <div className="my-6 not-prose p-6 border-2 rounded-lg text-center font-sans"
      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
      <div className="w-full p-4 rounded mb-2" style={{ background: 'color-mix(in srgb, var(--accent-course) 15%, transparent)', border: '1px solid color-mix(in srgb, var(--accent-course) 35%, transparent)' }}>
        <p className="font-bold" style={{ color: 'var(--accent-course)' }}>&lt;header&gt;</p>
      </div>
      <div className="w-full p-3 rounded mb-2" style={{ background: 'color-mix(in srgb, var(--accent-tp) 15%, transparent)', border: '1px solid color-mix(in srgb, var(--accent-tp) 35%, transparent)' }}>
        <p className="font-bold" style={{ color: 'var(--accent-tp)' }}>&lt;nav&gt;</p>
      </div>
      <div className="w-full p-4 rounded" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
        <p className="font-bold mb-2" style={{ color: 'var(--text)' }}>&lt;main&gt;</p>
        <div className="p-4 rounded mb-2" style={{ background: 'color-mix(in srgb, var(--status-done) 12%, transparent)', border: '1px solid color-mix(in srgb, var(--status-done) 35%, transparent)' }}>
          <p className="font-bold" style={{ color: 'var(--status-done)' }}>&lt;section&gt;</p>
          <div className="p-4 rounded mt-2" style={{ background: 'color-mix(in srgb, var(--status-current) 12%, transparent)', border: '1px solid color-mix(in srgb, var(--status-current) 35%, transparent)' }}>
            <p className="font-bold" style={{ color: '#a06a00' }}>&lt;article&gt;</p>
          </div>
        </div>
        <div className="p-4 rounded" style={{ background: 'color-mix(in srgb, var(--status-done) 12%, transparent)', border: '1px solid color-mix(in srgb, var(--status-done) 35%, transparent)' }}>
          <p className="font-bold" style={{ color: 'var(--status-done)' }}>&lt;section&gt;</p>
        </div>
      </div>
      <div className="w-full p-4 rounded mt-2" style={{ background: 'color-mix(in srgb, var(--accent-tp) 15%, transparent)', border: '1px solid color-mix(in srgb, var(--accent-tp) 35%, transparent)' }}>
        <p className="font-bold" style={{ color: 'var(--accent-tp)' }}>&lt;footer&gt;</p>
      </div>
    </div>
  );
}
