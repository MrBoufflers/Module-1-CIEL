import { renderInline } from '../../lib/inlineMarkdown';

export default function TableBlock({ headers, rows }) {
  const hasHead = headers && headers.some(h => h !== '');
  return (
    <div className="table-wrap">
      <table className="table-v2">
        {hasHead && (
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
                <td key={ci}>{renderInline(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
