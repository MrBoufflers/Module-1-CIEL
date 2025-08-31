import Heading from '../atoms/Heading';
import Tabs from './Tabs';
import Card from '../atoms/Card';

// Importez vos composants de contenu interactif
// import Quiz from './Quiz'; 
// import VonNeumannDiagram from './VonNeumannDiagram';

export default function ModuleContent({ module }) {
  if (!module) return null;

  // Configuration des onglets pour cet organisme
  const tabsConfig = [
    { id: 'cours', label: 'Cours', content: <div className="prose max-w-none">{module.content.course}</div> },
    { id: 'tp', label: 'Travaux Pratiques', content: <div className="prose max-w-none">{module.content.tp}</div> },
  ];
  
  // Ajoute l'onglet Quiz s'il existe pour ce module
  if (module.content.quiz) {
    tabsConfig.push({ id: 'quiz', label: 'Quizz', content: module.content.quiz });
  }

  return (
    <div>
        <Heading level={1} className="mb-4">
            Module {module.id.replace('module', '')}: {module.title}
        </Heading>
        <Card className="bg-blue-50 border-blue-200 !p-4 mb-6 text-sm">
            <Heading level={4} className="text-blue-800 !mb-2">Références au Référentiel CIEL</Heading>
            <p><strong>Compétence visée :</strong> {module.ref.competence}</p>
            <p><strong>Savoirs associés :</strong> {module.ref.savoirs}</p>
        </Card>
        <Tabs tabsConfig={tabsConfig} />
    </div>
  );
}