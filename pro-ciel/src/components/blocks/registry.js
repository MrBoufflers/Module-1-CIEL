import { lazy } from 'react';

const registry = {
  HistoryTimeline: lazy(() => import('../organisms/HistoryTimeLine.jsx')),
  VonNeumannDiagramComponent: lazy(() =>
    import('../organisms/VonNeumannDiagram.jsx').then(m => ({ default: m.VonNeumannDiagramComponent }))
  ),
  ComponentShowcase: lazy(() => import('../organisms/ComponentShowcase.jsx')),
  SemanticLayoutDiagram: lazy(() => import('../organisms/SemanticLayoutDiagram.jsx')),
};

export default registry;
