import BlockRenderer from './BlockRenderer';

export default function ExerciseBlock({ title, body }) {
  return (
    <div className="exercise-box">
      <div className="exercise-title">
        <span className="mark" />
        {title || 'Exercice'}
      </div>
      {body && (
        <div className="exercise-body">
          <BlockRenderer blocks={body} />
        </div>
      )}
    </div>
  );
}
