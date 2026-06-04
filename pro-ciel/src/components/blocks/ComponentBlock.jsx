import { Suspense } from 'react';
import registry from './registry';

export default function ComponentBlock({ name }) {
  const Component = registry[name];
  if (!Component) {
    console.warn(`[BlockRenderer] Unknown component: "${name}"`);
    return null;
  }
  return (
    <div>
      <Suspense fallback={
        <div className="glass rounded-xl p-6 text-center" style={{ color: 'var(--text-muted)' }}>
          Chargement…
        </div>
      }>
        <Component />
      </Suspense>
    </div>
  );
}
