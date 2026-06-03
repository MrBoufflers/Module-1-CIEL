import { useState } from 'react';
import { IconCheck, IconLock, IconPlayerPlay } from '@tabler/icons-react';
import BlockRenderer from '../blocks/BlockRenderer';

export default function TpStepper({ tp }) {
  const [currentStep, setCurrentStep] = useState(0);

  if (!tp || !tp.steps) return null;

  const isDigital = tp.kind === 'digital';

  return (
    <div>
      <TpHeader tp={tp} />

      <div className="space-y-3 mt-6">
        {tp.steps.map((step, i) => {
          const status = i < currentStep ? 'done' : i === currentStep ? 'current' : 'locked';
          return (
            <StepCard
              key={i}
              index={i}
              step={step}
              status={status}
              isDigital={isDigital}
              onMarkDone={() => {
                if (i === currentStep && currentStep < tp.steps.length - 1) {
                  setCurrentStep(currentStep + 1);
                } else if (i === currentStep) {
                  setCurrentStep(tp.steps.length);
                }
              }}
              onReopen={() => setCurrentStep(i)}
            />
          );
        })}
      </div>

      {tp.bonus && (
        <div className="info-box astuce mt-6">
          <div className="info-title">Bonus</div>
          <div style={{ fontSize: 14, color: 'var(--text)' }}>{tp.bonus}</div>
        </div>
      )}

      {tp.note && (
        <div className="info-box definition mt-4">
          <div className="info-title">Note</div>
          <div style={{ fontSize: 14, color: 'var(--text)' }}>{tp.note}</div>
        </div>
      )}
    </div>
  );
}

function TpHeader({ tp }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>{tp.title}</h2>

      {tp.mission && (
        <p className="mb-4" style={{ fontSize: 15, color: 'var(--text-muted)' }}>{tp.mission}</p>
      )}

      <div className="flex flex-wrap gap-4 mb-4">
        {tp.prerequis && tp.prerequis.length > 0 && (
          <div className="glass rounded-xl p-4 flex-1 min-w-[200px]">
            <div className="text-xs font-semibold uppercase mb-2" style={{ color: 'var(--accent)', letterSpacing: '0.05em' }}>
              Prérequis
            </div>
            <ul className="pl-4 space-y-1" style={{ listStyleType: 'disc', fontSize: 13, color: 'var(--text)' }}>
              {tp.prerequis.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        )}

        {tp.materiel && tp.materiel.length > 0 && (
          <div className="glass rounded-xl p-4 flex-1 min-w-[200px]">
            <div className="text-xs font-semibold uppercase mb-2" style={{ color: 'var(--accent)', letterSpacing: '0.05em' }}>
              Matériel nécessaire
            </div>
            <ul className="pl-4 space-y-1" style={{ listStyleType: 'disc', fontSize: 13, color: 'var(--text)' }}>
              {tp.materiel.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        )}

        {tp.criteres && tp.criteres.length > 0 && (
          <div className="glass rounded-xl p-4 flex-1 min-w-[200px]">
            <div className="text-xs font-semibold uppercase mb-2" style={{ color: 'var(--accent)', letterSpacing: '0.05em' }}>
              Critères de réussite
            </div>
            <ul className="pl-4 space-y-1" style={{ listStyleType: 'disc', fontSize: 13, color: 'var(--text)' }}>
              {tp.criteres.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function StepCard({ index, step, status, isDigital, onMarkDone, onReopen }) {
  const isExpanded = status === 'current';

  return (
    <div className={`step-v2 ${status}`}>
      <div className="flex items-center gap-3">
        <div className={`step-num ${status === 'locked' ? 'locked' : ''}`}>
          {status === 'done' ? <IconCheck size={14} stroke={2.5} /> : index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold" style={{
            fontSize: 15,
            color: status === 'locked' ? 'var(--text-muted)' : 'var(--text)',
          }}>
            {step.title}
          </div>
        </div>
        <StatusBadge status={status} />
      </div>

      {isExpanded && (
        <div className="mt-4 ml-9">
          {step.body && <BlockRenderer blocks={step.body} />}
          <ValidationBox step={step} isDigital={isDigital} onMarkDone={onMarkDone} />
        </div>
      )}

      {status === 'done' && (
        <div className="mt-2 ml-9">
          <button
            onClick={onReopen}
            className="text-xs"
            style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Revoir cette étape
          </button>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }) {
  if (status === 'done') {
    return <span className="status-badge done">validé</span>;
  }
  if (status === 'current') {
    return <span className="status-badge current">en cours</span>;
  }
  return <span className="text-xs" style={{ color: 'var(--text-muted)' }}>verrouillé</span>;
}

function ValidationBox({ step, isDigital, onMarkDone }) {
  if (isDigital) {
    return (
      <div className="validate-box mt-4">
        <div className="v-title">Pour valider cette étape</div>
        {step.done && (
          <p className="mb-2" style={{ fontSize: 13, color: 'var(--text)' }}>{step.done}</p>
        )}
        {step.validation?.commit && (
          <code>{step.validation.commit}</code>
        )}
        <div className="flex items-center gap-3">
          <button onClick={onMarkDone}>
            Prévenir le professeur
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="validate-box mt-4" style={{
      background: 'color-mix(in srgb, var(--status-done) 10%, transparent)',
      borderColor: 'color-mix(in srgb, var(--status-done) 30%, transparent)',
    }}>
      <div className="v-title" style={{ color: 'var(--status-done)' }}>
        Validation par le professeur
      </div>
      {step.done && (
        <p className="mb-2" style={{ fontSize: 13, color: 'var(--text)' }}>{step.done}</p>
      )}
      <div className="flex items-center gap-3">
        <button onClick={onMarkDone} style={{ background: 'var(--status-done)' }}>
          Montrer au professeur
        </button>
      </div>
    </div>
  );
}
