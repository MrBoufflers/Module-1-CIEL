import { renderInline } from '../../lib/inlineMarkdown';

export default function TableBlock({ headers, rows }) {
  return (
    <div className="mb-4 overflow-x-auto">
      <table className="table-v2">
        {headers && (
          <thead>
            <tr>
              {headers.map((h, i) => <th key={i}>{renderInline(h)}</th>)}
            </tr>
          </thead>
        )}
        <tbody>
          {rows?.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ color: 'var(--text)' }}>{renderInline(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
