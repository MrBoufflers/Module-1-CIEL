// Pro CIEL V2 — Blocs de contenu + BlockRenderer
const { useState } = React;

// ---- Mini-formateur inline : **gras**, *italique*, `code` ----
function fmt(text) {
  if (text == null) return null;
  const tokens = String(text).split(/(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g);
  return tokens.map((t, i) => {
    if (/^\*\*[^*]+\*\*$/.test(t)) return <strong key={i}>{t.slice(2, -2)}</strong>;
    if (/^`[^`]+`$/.test(t)) return <code key={i}>{t.slice(1, -1)}</code>;
    if (/^\*[^*]+\*$/.test(t)) return <em key={i}>{t.slice(1, -1)}</em>;
    return t;
  });
}

// ---- Hero ----
function HeroBlock({ block }) {
  return (
    <div className="hero reveal">
      <h1>{block.title}</h1>
      <p>{fmt(block.subtitle)}</p>
    </div>
  );
}

// ---- Prose ----
function ProseBlock({ block }) {
  return <p className="prose">{fmt(block.content)}</p>;
}

// ---- Liste ----
function ListBlock({ block }) {
  const Tag = block.ordered ? 'ol' : 'ul';
  return (
    <Tag className={"list " + (block.ordered ? 'ordered' : 'unordered')}>
      {block.items.map((it, i) => <li key={i}>{fmt(it)}</li>)}
    </Tag>
  );
}

// ---- Encadré info ----
const INFO_LABEL = { astuce: 'Astuce', analogie: 'Analogie', attention: 'Attention', definition: 'Définition' };
function InfoBlock({ block }) {
  const variant = block.variant || 'definition';
  return (
    <div className={"info-box " + variant}>
      <div className="info-title">
        <span className="mark"></span>
        {block.title || INFO_LABEL[variant]}
      </div>
      <div className="info-content">{fmt(block.content)}</div>
    </div>
  );
}

// ---- Cartes ----
function CardsBlock({ block }) {
  const cols = block.columns || 3;
  return (
    <div className={"cards c" + cols}>
      {block.items.map((c, i) => (
        <div className="card-v2" key={i}>
          {c.code && <span className="card-code">{c.code}</span>}
          {c.title && <div className="card-title">{c.title}</div>}
          <div className="card-text">{fmt(c.text)}</div>
        </div>
      ))}
    </div>
  );
}

// ---- Tableau ----
function TableBlock({ block }) {
  const hasHead = block.headers && block.headers.some(h => h !== '');
  return (
    <div className="table-wrap">
      <table className="table-v2">
        {hasHead && (
          <thead>
            <tr>{block.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
        )}
        <tbody>
          {block.rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{fmt(cell)}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ---- Code ----
function CodeBlock({ block }) {
  return (
    <div className="code-block-v2">
      <div className="code-head">
        <span className="lamps"><i style={{background:'#ff6b6b'}}></i><i style={{background:'#ffd166'}}></i><i style={{background:'#06d6a0'}}></i></span>
        {block.filename || 'code'}
      </div>
      <pre><code>{block.content}</code></pre>
    </div>
  );
}

// ---- Composant interactif : Explorateur de fichiers ----
const FX_TREE = {
  name: 'Disque local (C:)', kind: 'drive', path: 'C:\\',
  children: [
    { name: 'Utilisateurs', kind: 'dir', path: 'C:\\Utilisateurs', children: [
      { name: 'eleve', kind: 'dir', path: 'C:\\Utilisateurs\\eleve', children: [
        { name: 'Cours-CIEL', kind: 'dir', path: 'C:\\Utilisateurs\\eleve\\Cours-CIEL', children: [
          { name: 'S1-materiel', kind: 'dir', path: '…\\S1-materiel', children: [
            { name: 'schema-carte-mere.png', kind: 'img' },
            { name: 'notes-composants.docx', kind: 'doc' },
          ]},
          { name: 'S2-logiciels', kind: 'dir', path: '…\\S2-logiciels', children: [
            { name: 'cours-os.docx', kind: 'doc' },
            { name: 'comparatif-os.xlsx', kind: 'xls' },
            { name: 'presentation.pptx', kind: 'ppt' },
          ]},
          { name: 'S3-git', kind: 'dir', path: '…\\S3-git', children: [] },
        ]},
        { name: 'Téléchargements', kind: 'dir', path: '…\\Téléchargements', children: [
          { name: 'facture_???.pdf.exe', kind: 'danger' },
        ]},
      ]},
    ]},
    { name: 'Program Files', kind: 'dir', path: 'C:\\Program Files', children: [
      { name: 'LibreOffice', kind: 'dir', children: [] },
      { name: 'Mozilla Firefox', kind: 'dir', children: [] },
    ]},
    { name: 'Windows', kind: 'dir', path: 'C:\\Windows', children: [] },
  ],
};
const FILE_TAG = {
  doc: { tag: 'DOC', c: '#2b579a' }, xls: { tag: 'XLS', c: '#217346' },
  ppt: { tag: 'PPT', c: '#d24726' }, img: { tag: 'IMG', c: '#9b5cff' },
  danger: { tag: 'EXE', c: '#e5484d' },
};

function TreeRow({ node, depth, sel, onSel, open, toggle }) {
  const hasKids = node.children && node.children.length > 0;
  const isDir = node.kind === 'dir' || node.kind === 'drive';
  const isOpen = open[node.name + depth];
  const selected = sel === node;
  return (
    <React.Fragment>
      <div className={"fx-row" + (selected ? ' sel' : '')} style={{ paddingLeft: 9 + depth * 16 }}
        onClick={() => { onSel(node); if (isDir && hasKids) toggle(node.name + depth); }}>
        <span className={"caret" + (isOpen ? ' open' : '') + ((isDir && hasKids) ? '' : ' hidden')}></span>
        <span className={"ico " + (isDir ? ('folder' + (isOpen ? ' open' : '')) : 'file')}></span>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{node.name}</span>
      </div>
      {isDir && isOpen && hasKids && node.children.map((c, i) => (
        <TreeRow key={i} node={c} depth={depth + 1} sel={sel} onSel={onSel} open={open} toggle={toggle} />
      ))}
    </React.Fragment>
  );
}

function FileExplorerComponent() {
  const [open, setOpen] = useState({ 'Disque local (C:)0': true, 'Utilisateurs1': true, 'eleve2': true, 'Cours-CIEL3': true });
  const [sel, setSel] = useState(FX_TREE.children[0].children[0].children[0]); // Cours-CIEL
  const toggle = (k) => setOpen(o => ({ ...o, [k]: !o[k] }));
  const kids = (sel.children || []);
  const path = sel.path || sel.name;
  return (
    <div className="fx">
      <div className="fx-bar">
        <span className="fx-lamps"><i style={{background:'#ff6b6b'}}></i><i style={{background:'#ffd166'}}></i><i style={{background:'#06d6a0'}}></i></span>
        <span className="fx-path">{path}</span>
      </div>
      <div className="fx-body">
        <div className="fx-tree">
          <TreeRow node={FX_TREE} depth={0} sel={sel} onSel={setSel} open={open} toggle={toggle} />
        </div>
        <div className="fx-pane">
          <h4><span className="ico folder open" style={{ width: 18, height: 15, borderRadius: 4, background: 'linear-gradient(135deg,#4f7cff,#9b5cff)' }}></span>{sel.name}</h4>
          <div className="pane-sub">{kids.length} élément{kids.length > 1 ? 's' : ''}</div>
          {kids.length === 0 ? (
            <div className="fx-empty">Ce dossier est vide.</div>
          ) : (
            <div className="fx-files">
              {kids.map((c, i) => {
                const isDir = c.kind === 'dir';
                const meta = FILE_TAG[c.kind];
                return (
                  <div className={"fx-file " + (isDir ? 'dir' : 'doc')} key={i} title={c.name}>
                    <div className="big">
                      {meta && <span className="tag" style={{ background: meta.c }}>{meta.tag}</span>}
                    </div>
                    <span className="name">{c.name}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const COMPONENTS = { FileExplorerComponent };
function ComponentBlock({ block }) {
  const C = COMPONENTS[block.name];
  return C ? <C /> : <div className="info-box definition"><div className="info-content">Composant « {block.name} » indisponible.</div></div>;
}

// ---- Section ----
function SectionBlock({ block }) {
  return (
    <section className="b-section">
      <h2 className="section-title">{block.title}</h2>
      <div className="section-body">
        {block.blocks.map((b, i) => <Block key={i} block={b} />)}
      </div>
    </section>
  );
}

// ---- Dispatcher ----
const BLOCKS = {
  hero: HeroBlock, prose: ProseBlock, list: ListBlock, info: InfoBlock,
  cards: CardsBlock, table: TableBlock, code: CodeBlock,
  component: ComponentBlock, section: SectionBlock,
};
function Block({ block }) {
  const C = BLOCKS[block.type];
  return C ? <C block={block} /> : null;
}

// ---- BlockRenderer : rythme vertical géré ici (24px) ----
function BlockRenderer({ blocks }) {
  return (
    <div className="blocks">
      {blocks.map((b, i) => <Block key={i} block={b} />)}
    </div>
  );
}

Object.assign(window, {
  fmt, BlockRenderer, Block, FileExplorerComponent,
  HeroBlock, ProseBlock, ListBlock, InfoBlock, CardsBlock, TableBlock, CodeBlock, SectionBlock,
});
