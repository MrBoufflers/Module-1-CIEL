import { renderInline } from '../../lib/inlineMarkdown';

export default function EvalInfo({ evalInfo, meta }) {
  if (!evalInfo) return null;

  return (
    <div className="eval-wrap reveal">
      <div className="eval-card">
        <h2>Évaluation — {meta?.sequence || ''}</h2>
        <p className="prose" style={{ marginTop: 0 }}>{renderInline(evalInfo.format)}</p>
        <div className="eval-grid">
          <div className="eval-item">
            <div className="ei-k">Durée</div>
            <div className="ei-v">{evalInfo.duree}</div>
          </div>
          <div className="eval-item">
            <div className="ei-k">Compétences</div>
            <div className="ei-v">{evalInfo.competence}</div>
          </div>
          {evalInfo.ressourcesAutorisees && (
            <div className="eval-item">
              <div className="ei-k">Ressources autorisées</div>
              <div className="ei-v">{evalInfo.ressourcesAutorisees.join(' · ')}</div>
            </div>
          )}
        </div>
        {evalInfo.note && (
          <div className="eval-note">
            <div className="info-title">
              <span className="mark" style={{ background: 'var(--warn)' }} />
              À savoir
            </div>
            <div className="info-content">{renderInline(evalInfo.note)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
