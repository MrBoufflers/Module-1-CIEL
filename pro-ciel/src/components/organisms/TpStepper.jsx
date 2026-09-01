import { useState } from 'react';
import { renderInline } from '../../lib/inlineMarkdown';
import BlockRenderer from '../blocks/BlockRenderer';

export default function TpStepper({ tp }) {
  const [openStep, setOpenStep] = useState(0);
  const [validated, setValidated] = useState([]);

  if (!tp || !tp.steps) return null;

  const isDigital = tp.kind === 'digital';
  const total = tp.steps.length;
  const progress = Math.round((validated.length / total) * 100);

  const stateOf = (i) => {
    if (validated.includes(i)) return 'done';
    if (i === validated.length) return 'current';
    return 'locked';
  };

  const validate = (i) => {
    setValidated(v => v.includes(i) ? v : [...v, i].sort((a, b) => a - b));
    setOpenStep(i + 1 < total ? i + 1 : i);
  };

  return (
    <div className="reveal">
      <div className="tp-mission">
        <div className="m-label">Mission</div>
        <div className="m-title">{tp.title}</div>
        <div className="m-text">{renderInline(tp.mission)}</div>
      </div>

      <div className="tp-meta">
        {tp.prerequis && tp.prerequis.length > 0 && (
          <div className="tp-card">
            <div className="tc-label">Prérequis</div>
            <ul>{tp.prerequis.map((p, i) => <li key={i}>{renderInline(p)}</li>)}</ul>
          </div>
        )}
        {tp.materiel && tp.materiel.length > 0 && (
          <div className="tp-card">
            <div className="tc-label">Matériel</div>
            <ul>{tp.materiel.map((m, i) => <li key={i}>{renderInline(m)}</li>)}</ul>
          </div>
        )}
        {tp.criteres && tp.criteres.length > 0 && (
          <div className="tp-card">
            <div className="tc-label">Critères de réussite</div>
            <ul>{tp.criteres.map((c, i) => <li key={i}>{renderInline(c)}</li>)}</ul>
          </div>
        )}
      </div>

      <div className="progress-rail">
        <span className="lbl">{validated.length} / {total} étapes</span>
        <div className="bar"><span style={{ width: `${progress}%` }} /></div>
        <span className="lbl">{progress}%</span>
      </div>

      <div className="steps">
        {tp.steps.map((step, i) => {
          const st = stateOf(i);
          const isOpen = openStep === i && st !== 'locked';
          return (
            <div key={i} className={`step-v2 ${isOpen && st === 'current' ? 'current ' : ''}${st}`}>
              <div className="step-head" onClick={() => st !== 'locked' && setOpenStep(isOpen ? -1 : i)}>
                <span className="step-num">{st === 'done' ? '✓' : i + 1}</span>
                <span className="step-title">{step.title}</span>
                <span className={`status ${st}`}>
                  <span className="sd" />
                  {st === 'done' ? 'validé' : st === 'current' ? 'en cours' : 'verrouillé'}
                </span>
              </div>
              {isOpen && (
                <div className="step-body">
                  <BlockRenderer blocks={step.body} />
                  <div className="validate-box">
                    <div className="v-title">
                      <span className="sd" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--status-done)', display: 'inline-block' }} />
                      {isDigital ? 'Pour valider cette étape' : 'Validation par le professeur'}
                    </div>
                    <div className="v-text">{renderInline(step.done)}</div>
                    {isDigital && step.validation?.commit && (
                      <code>{step.validation.commit}</code>
                    )}
                    {st !== 'done' && (
                      <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
                        <button className="btn-primary" onClick={() => validate(i)}>Marquer comme fait</button>
                        <button className="btn-ghost">Prévenir le professeur</button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {tp.bonus && (
        <div className="info-box astuce" style={{ marginTop: 24 }}>
          <div className="info-title"><span className="mark" />Bonus</div>
          <div className="info-content">{renderInline(tp.bonus)}</div>
        </div>
      )}

      {tp.note && (
        <div className="info-box definition" style={{ marginTop: 24 }}>
          <div className="info-title"><span className="mark" />Note</div>
          <div className="info-content">{renderInline(tp.note)}</div>
        </div>
      )}
    </div>
  );
}
