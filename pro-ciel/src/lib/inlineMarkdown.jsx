import React from 'react';

const INLINE_RULES = [
  { pattern: /`([^`]+)`/g, render: (m, i) => <code key={i} style={{ color: 'var(--accent)', fontFamily: 'ui-monospace, monospace', fontSize: '0.9em', background: 'var(--surface-2)', padding: '1px 5px', borderRadius: 4 }}>{m[1]}</code> },
  { pattern: /\*\*([^*]+)\*\*/g, render: (m, i) => <strong key={i}>{m[1]}</strong> },
  { pattern: /\*([^*]+)\*/g, render: (m, i) => <em key={i}>{m[1]}</em> },
];

export function renderInline(text) {
  if (!text) return null;
  let parts = [text];

  for (const rule of INLINE_RULES) {
    const next = [];
    for (const part of parts) {
      if (typeof part !== 'string') {
        next.push(part);
        continue;
      }
      let lastIndex = 0;
      const regex = new RegExp(rule.pattern.source, rule.pattern.flags);
      let match;
      while ((match = regex.exec(part)) !== null) {
        if (match.index > lastIndex) {
          next.push(part.slice(lastIndex, match.index));
        }
        next.push(rule.render(match, `${next.length}`));
        lastIndex = regex.lastIndex;
      }
      if (lastIndex < part.length) {
        next.push(part.slice(lastIndex));
      }
    }
    parts = next;
  }

  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : <>{parts}</>;
}
