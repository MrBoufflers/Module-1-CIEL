import React from 'react';
import Heading from '../../components/atoms/Heading.jsx';
import Card from '../../components/atoms/Card.jsx';
import { courseData } from '../../data/CourseData.jsx'; // Importe les données des modules

// Petite molécule pour afficher un résumé de module
const ModuleSummaryCard = ({ module }) => (
    <div className="flex items-start p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
        <span className="text-3xl mr-4">{module.icon}</span>
        <div>
            <h4 className="font-bold text-gray-800">{module.title}</h4>
            <p className="text-sm text-gray-600 mt-1">
                <strong>Compétence visée :</strong> {module.ref.competence}
            </p>
        </div>
    </div>
);

// La page complète
export default function HomePage() {
    const levelInfo = {
        troncCommun: { name: 'Tronc Commun', style: 'bg-gray-100' },
        premiere: { name: 'Première', style: 'bg-blue-100' },
        terminale: { name: 'Terminale', style: 'bg-green-100' },
    };

    return (
        <div className="space-y-12 prose max-w-none">
            
            {/* Section de Bienvenue */}
            <section className="text-center">
                <Heading level={1} className="mb-2">Bienvenue sur le Parcours Pédagogique CIEL</Heading>
                <p className="text-xl text-gray-600">Votre plateforme interactive pour maîtriser les compétences du Baccalauréat Professionnel en Cybersécurité, Informatique et Réseaux, Électronique.</p>
            </section>

            {/* Section "Comment ça marche ?" */}
            <section>
                <Heading level={2} className="border-b pb-2 mb-4">Comment utiliser ce site ?</Heading>
                <div className="grid md:grid-cols-2 gap-8 not-prose">
                    <Card>
                        <Heading level={3} className="!text-blue-700">1. Naviguez par Niveau</Heading>
                        <p className="mt-2">Le menu à gauche est organisé par niveau : **Tronc Commun**, **Première** et **Terminale**. Cliquez sur une section pour déplier les modules correspondants. Vous pouvez ainsi suivre la progression logique de votre année ou revenir sur des notions passées.</p>
                    </Card>
                    <Card>
                        <Heading level={3} className="!text-green-700">2. Explorez chaque Module</Heading>
                        <p className="mt-2">Chaque module est divisé en deux onglets principaux : **"Cours"** pour la partie théorique, et **"Travaux Pratiques"** pour mettre en application vos connaissances. Certains modules contiennent aussi des quiz ou des ressources supplémentaires.</p>
                    </Card>
                </div>
            </section>

            {/* Section "Aperçu des Modules" */}
            <section>
                <Heading level={2} className="border-b pb-2 mb-4">Aperçu des Modules Disponibles</Heading>
                <div className="space-y-8 not-prose">
                    {Object.entries(courseData).map(([levelKey, modules]) => {
                        if (!modules || modules.length === 0) return null;
                        return (
                            <div key={levelKey} className={`p-6 rounded-lg ${levelInfo[levelKey]?.style || 'bg-gray-50'}`}>
                                <Heading level={3} className="!mb-4">{levelInfo[levelKey]?.name || levelKey}</Heading>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {modules.map(module => (
                                        <ModuleSummaryCard key={module.id} module={module} />
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

        </div>
    );
}

