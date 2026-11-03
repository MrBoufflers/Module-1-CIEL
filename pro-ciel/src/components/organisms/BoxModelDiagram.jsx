// Schéma du modèle de boîte (box model) : contenu → padding → bordure → marge.
// Figure autoportante (fond clair fixe) pour rester lisible en thème sombre ou clair.
const band = (bg, outline) => ({
  background: bg,
  padding: '30px 18px 18px',
  borderRadius: 8,
  position: 'relative',
  ...(outline ? { outline, outlineOffset: -1 } : {}),
});
const lab = (color) => ({
  position: 'absolute',
  top: 7,
  left: 12,
  fontSize: 11,
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '.06em',
  color,
});

export default function BoxModelDiagram() {
  return (
    <div className="o-figure" style={{ padding: 18 }}>
      <div style={{ maxWidth: 460, margin: '0 auto' }}>
        <div style={band('#f6d6a0')}>
          <span style={lab('#b06f16')}>marge · margin — 24px</span>
          <div style={band('#f1df9f', '2px dashed #c6a24a')}>
            <span style={lab('#8a6a12')}>bordure · border — 1px</span>
            <div style={band('#cfe7b0')}>
              <span style={lab('#4f7a2e')}>padding — 16px</span>
              <div style={{ background: '#aad0ec', borderRadius: 6, padding: '26px 14px', textAlign: 'center', color: '#15364f' }}>
                <div style={{ fontWeight: 800, fontSize: 13, textTransform: 'uppercase', letterSpacing: '.06em' }}>contenu · content</div>
                <div style={{ fontSize: 12, marginTop: 4 }}>le texte, l'image…</div>
              </div>
            </div>
          </div>
        </div>
        <p style={{ fontSize: 12, color: '#475569', marginTop: 10, textAlign: 'center' }}>
          De l'intérieur vers l'extérieur : <strong>contenu</strong> → <strong>padding</strong> (rembourrage) → <strong>bordure</strong> → <strong>marge</strong> (espace extérieur).
        </p>
      </div>
    </div>
  );
}
