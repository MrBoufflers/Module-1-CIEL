import React from 'react';
import { Link } from 'react-router-dom';

const CODE_STYLE = {
  color: 'var(--accent)',
  fontFamily: 'ui-monospace, monospace',
  fontSize: '0.9em',
  background: 'var(--surface-2)',
  padding: '1px 5px',
  borderRadius: 4,
};

// Récursif : gère `code`, **gras** et *italique*, y compris imbriqués
// (ex. **une **`route`** en gras**). Les délimiteurs sont recherchés de
// gauche à droite ; le contenu d'un code span n'est jamais réinterprété,
// tandis que le contenu du gras/italique est parsé récursivement.
function parseInline(text) {
  const out = [];
  let buf = '';
  let i = 0;

  const flush = () => {
    if (buf) { out.push(buf); buf = ''; }
  };

  while (i < text.length) {
    const ch = text[i];

    // `code` — contenu littéral, pas de parsing interne
    if (ch === '`') {
      const end = text.indexOf('`', i + 1);
      if (end !== -1) {
        flush();
        out.push(<code key={out.length} style={CODE_STYLE}>{text.slice(i + 1, end)}</code>);
        i = end + 1;
        continue;
      }
    }

    // **gras** — vérifié avant *italique* car il commence aussi par *
    if (ch === '*' && text[i + 1] === '*') {
      const end = text.indexOf('**', i + 2);
      if (end !== -1 && end > i + 2) {
        flush();
        out.push(<strong key={out.length}>{parseInline(text.slice(i + 2, end))}</strong>);
        i = end + 2;
        continue;
      }
    }

    // *italique*
    if (ch === '*') {
      const end = text.indexOf('*', i + 1);
      if (end !== -1 && end > i + 1) {
        flush();
        out.push(<em key={out.length}>{parseInline(text.slice(i + 1, end))}</em>);
        i = end + 1;
        continue;
      }
    }

    // [texte](url) — lien interne (react-router) ou externe (nouvel onglet)
    if (ch === '[') {
      const close = text.indexOf(']', i + 1);
      if (close !== -1 && text[close + 1] === '(') {
        const paren = text.indexOf(')', close + 2);
        if (paren !== -1) {
          flush();
          const label = parseInline(text.slice(i + 1, close));
          const href = text.slice(close + 2, paren);
          if (href.startsWith('/')) {
            out.push(<Link key={out.length} to={href} className="inline-link">{label}</Link>);
          } else {
            out.push(<a key={out.length} href={href} target="_blank" rel="noopener noreferrer" className="inline-link">{label}</a>);
          }
          i = paren + 1;
          continue;
        }
      }
    }

    buf += ch;
    i += 1;
  }

  flush();
  return out;
}

export function renderInline(text) {
  if (!text) return null;
  const parts = parseInline(text);
  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : <>{parts}</>;
}
