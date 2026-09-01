import { lazy } from 'react';

const registry = {
  HistoryTimeline: lazy(() => import('../organisms/HistoryTimeLine.jsx')),
  VonNeumannDiagramComponent: lazy(() =>
    import('../organisms/VonNeumannDiagram.jsx').then(m => ({ default: m.VonNeumannDiagramComponent }))
  ),
  ComponentShowcase: lazy(() => import('../organisms/ComponentShowcase.jsx')),
  SemanticLayoutDiagram: lazy(() => import('../organisms/SemanticLayoutDiagram.jsx')),
  FileExplorerComponent: lazy(() =>
    import('../organisms/FileExplorerComponent.jsx').then(m => ({ default: m.FileExplorerComponent }))
  ),
};

export default registry;
