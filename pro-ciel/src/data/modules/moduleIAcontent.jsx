import React, { useState } from 'react';

// --- Composants de base inspirés de votre exemple (Atomes) ---
// Normalement importés, recréés ici pour que le fichier soit autonome.
const Heading = ({ level, className, children }) => {
    const Tag = `h${level}`;
    const baseStyle = "font-bold text-gray-800";
    const styles = {
        '1': "text-4xl",
        '2': "text-3xl text-gray-700",
        '3': "text-2xl",
        '4': "text-xl",
    };
    return <Tag className={`${baseStyle} ${styles[level]} ${className}`}>{children}</Tag>;
};

const Card = ({ className, children }) => (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm ${className}`}>
        {children}
    </div>
);

// --- Composants Spécifiques (Molécules & Organismes) ---

const FocusCard = ({ icon, title, problem, solutionTitle, solution, example }) => (
    <Card>
        <div className="flex items-center mb-3">
            {icon}
            <Heading level={4} className="!text-blue-800 ml-3">{title}</Heading>
        </div>
        <div className="space-y-3 text-sm">
            <p><strong className="text-red-600">Le problème :</strong> {problem}</p>
            <div>
                 <strong className="text-green-600">{solutionTitle}</strong>
                 <div className="mt-1 text-gray-700">{solution}</div>
            </div>
            <div className="mt-2 p-3 bg-gray-50 rounded-md border text-gray-600">
                <p><strong>Exemple concret :</strong> {example}</p>
            </div>
        </div>
    </Card>
);

const DebateQuestion = ({ children }) => (
    <div className="p-4 border-l-4 border-purple-500 bg-purple-50 text-purple-800 rounded-r-lg">
        <p className="font-semibold">{children}</p>
    </div>
);


// --- Icônes SVG ---
const ShieldCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-800 h-6 w-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
const NetworkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-800 h-6 w-6"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>;
const CpuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-800 h-6 w-6"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>;


const TrainingInferenceDiagram = () => {
    // 'idle', 'training', 'inference', 'result'
    const [phase, setPhase] = useState('idle');

    const handleSimulate = () => {
        if (phase !== 'idle') return;

        setPhase('training'); // Phase 1: Les données entraînent le modèle
        setTimeout(() => setPhase('inference'), 2500); // Phase 2: Une nouvelle donnée arrive
        setTimeout(() => setPhase('result'), 4000); // Phase 3: Le modèle donne un résultat
        setTimeout(() => setPhase('idle'), 6000); // Fin
    };

    const datasetPos = { top: '50%', left: '10%' };
    const modelPos = { top: '50%', left: '50%' };
    const newDataPos = { top: '15%', left: '85%' };
    
    // Style pour les paquets de données
    const packetStyle = (startPos, endPos, currentPhase) => ({
        top: phase === currentPhase ? endPos.top : startPos.top,
        left: phase === currentPhase ? endPos.left : startPos.left,
        opacity: phase === currentPhase ? 1 : 0,
        transition: 'top 1.2s ease-in-out, left 1.2s ease-in-out, opacity 0.5s',
        transform: 'translate(-50%, -50%)'
    });

    return (
        <Card className="mt-4">
            <div className="relative h-72">
                {/* Lignes de connexion statiques */}
                <svg className="absolute w-full h-full pointer-events-none" style={{ top: 0, left: 0 }}>
                    <line x1={datasetPos.left} y1={datasetPos.top} x2={modelPos.left} y2={modelPos.top} stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1={newDataPos.left} y1={newDataPos.top} x2={modelPos.left} y2={modelPos.top} stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5,5" />
                </svg>

                {/* Éléments */}
                <div className="absolute p-3 text-center bg-blue-100 border-2 border-blue-400 rounded-lg shadow-lg" style={{ top: datasetPos.top, left: datasetPos.left, transform: 'translate(-50%, -50%)' }}>
                    <div className="text-3xl">🗃️</div>
                    <div className="font-bold text-sm">DATASET</div>
                    <div className="text-xs">(Images étiquetées)</div>
                </div>

                <div className={`absolute p-4 text-center bg-red-100 border-2 border-red-400 rounded-full flex flex-col items-center shadow-lg transition-all duration-500 ${phase === 'training' ? 'animate-pulse' : ''}`} style={{ top: modelPos.top, left: modelPos.left, transform: 'translate(-50%, -50%)' }}>
                    <div className="text-4xl">🧠</div>
                    <div className="font-bold">MODÈLE</div>
                </div>
                
                <div className="absolute p-3 text-center bg-purple-100 border-2 border-purple-400 rounded-lg shadow-lg" style={{ top: newDataPos.top, left: newDataPos.left, transform: 'translate(-50%, -50%)' }}>
                    <div className="text-3xl">❓</div>
                    <div className="font-bold text-sm">NOUVELLE DONNÉE</div>
                </div>
                
                {/* Résultat */}
                <div className="absolute p-3 text-center bg-green-100 border-2 border-green-500 rounded-lg shadow-lg transition-opacity duration-500" style={{ top: '85%', left: '50%', transform: 'translate(-50%, -50%)', opacity: phase === 'result' ? 1 : 0 }}>
                    <div className="text-3xl">✅</div>
                    <div className="font-bold text-sm">PRÉDICTION</div>
                     <div className="text-xs">("Conforme")</div>
                </div>

                {/* Paquets animés */}
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full" style={packetStyle(datasetPos, modelPos, 'training')} />
                <div className="absolute w-4 h-4 bg-purple-400 rounded-full" style={packetStyle(newDataPos, modelPos, 'inference')} />
                <div className="absolute w-4 h-4 bg-green-400 rounded-full" style={packetStyle(modelPos, { top: '85%', left: '50%' }, 'result')} />
            </div>
            <div className="text-center mt-4">
                <button onClick={handleSimulate} disabled={phase !== 'idle'} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition">
                    {phase !== 'idle' ? 'Simulation en cours...' : 'Simuler le cycle de vie de l\'IA'}
                </button>
            </div>
        </Card>
    );
};

// --- Page complète du cours (Template) ---

export const moduleIAcontent = {
    course: (
        <div className="bg-gray-50 font-sans p-4 sm:p-8">
            <div className="max-w-5xl mx-auto space-y-12 prose max-w-none">
                
                <section>
                    <Heading level={1} className="mb-4">Introduction à l'IA</Heading>
                    <p className="text-xl text-gray-600">Bien plus que des robots de science-fiction, l'IA est déjà un outil essentiel dans nos métiers. Ce cours a pour but de démystifier son fonctionnement et de découvrir ses applications concrètes en CIEL.</p>
                </section>
                <section title="Partie 1 : L'IA vue de l'extérieur (15 min)">
            <section>
                <Heading level={2} className="mb-4">1. Qu'est-ce qu'une IA (comme ChatGPT, Gemini...) ?</Heading>

              <p>Il est essentiel de bien comprendre ce que nous utilisons.</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-red-400">Ce que ce n'est PAS :</strong> Un cerveau, une conscience, un expert qui "réfléchit" ou qui "comprend" réellement nos questions. L'IA n'a pas d'avis, pas d'intention et ne sait pas si ce qu'elle dit est vrai ou faux.</li>
                <li><strong className="text-green-400">Ce que c'est (en surface) :</strong> Une machine à <strong className="text-white">prédire des mots</strong>. Imaginez un programme qui a lu des milliards de pages sur Internet. Sa seule compétence est de calculer, à partir d'une question, quel mot a le plus de chances de venir après un autre pour former une phrase qui a l'air cohérente et juste. C'est un expert en <strong className="text-white">statistiques</strong>, pas en vérité.</li>
              </ul>
            </section>

            <section >
                <Heading level={2} className="mb-4">2. L'Analogie du Jeu Vidéo</Heading>
                <p>Pour bien interagir avec une IA, la meilleure image est celle d'un jeu vidéo.</p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-700 text-white p-4 rounded-lg">
                        <p className="text-xl font-bold text-white">VOUS</p>
                        <p>Le Joueur / La Joueuse</p>
                        <p className="text-sm mt-2">Intelligence, stratégie, objectif.</p>
                    </div>
                    <div className="bg-gray-700 text-white p-4 rounded-lg">
                        <p className="text-xl font-bold text-white">L'IA</p>
                        <p>Le Personnage du Jeu</p>
                        <p className="text-sm mt-2">Compétent mais passif. Attend les ordres.</p>
                    </div>
                    <div className="bg-gray-700 text-white p-4 rounded-lg">
                        <p className="text-xl font-bold text-white">LE PROMPT</p>
                        <p>La Manette de Jeu</p>
                        <p className="text-sm mt-2">Le seul moyen de communiquer les ordres.</p>
                    </div>
                </div>
            </section>
          </section>

                {/* Partie 1: Introduction */}
                <section>
                    <Heading level={2} className="border-b pb-2 mb-4">L'IA est déjà partout !</Heading>
                    <Card className="bg-yellow-50 border-yellow-300">
                        <Heading level={4} className="!text-yellow-800">Activité : Brainstorming </Heading>
                        <p className="mt-2">"Citez-moi une application que vous utilisez tous les jours et qui, selon vous, utilise de l'IA."</p>
                        <p className="text-sm text-gray-600 mt-2">Exemples attendus : Netflix (recommandation), Siri/Google (assistants vocaux), Instagram (filtres), Waze (calcul d'itinéraire).</p>
                    </Card>

                    <div className="mt-8">
                        <Heading level={3}>Démystifions l'IA</Heading>
                        <Card className="mt-4">
                             <p><strong>Définition simple :</strong> "La capacité d'une machine à imiter des fonctions cognitives humaines comme apprendre, raisonner et résoudre des problèmes."</p>
                        </Card>
                        <div className="grid md:grid-cols-2 gap-8 mt-6">
                            <Card>
                                <Heading level={4}>Programme Classique</Heading>
                                <p className="text-sm mt-2">Suit des instructions précises définies par le développeur (si... alors... sinon...). Il est <strong>déterministe</strong>.</p>
                            </Card>
                            <Card>
                                <Heading level={4}>Programme avec IA</Heading>
                                 <p className="text-sm mt-2"><strong>Apprend à partir de données</strong> pour créer ses propres règles. On ne lui dit pas comment faire, on lui donne des milliers d'exemples.</p>
                            </Card>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <Heading level={3}>Les grandes familles de l'IA</Heading>
                        <div className="grid md:grid-cols-3 gap-4 not-prose mt-4">
                            <Card><strong>Apprentissage Automatique (Machine Learning) :</strong> Le cœur de l'IA moderne. La machine apprend par l'exemple.</Card>
                            <Card><strong>Vision par Ordinateur (Computer Vision) :</strong> Permet aux machines de "voir" et interpréter des images.</Card>
                            <Card><strong>Traitement du Langage Naturel (NLP) :</strong> Permet aux machines de comprendre le langage humain.</Card>
                        </div>
                    </div>

                    <div className="mt-8">
                         <Heading level={3}>Liens avec le Bac Pro CIEL</Heading>
                         <Card>
                            <p>Annonce des applications que nous allons détailler :</p>
                             <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li><strong>Cybersécurité :</strong> Comment une IA peut-elle détecter un pirate ?</li>
                                <li><strong>Réseaux :</strong> Comment une IA peut-elle prédire une panne réseau ?</li>
                                <li><strong>Électronique :</strong> Comment un objet connecté devient-il "intelligent" ?</li>
                             </ul>
                         </Card>
                    </div>
                </section>

                {/* Partie 2: Applications */}
                <section>
                    <Heading level={2} className="border-b pb-2 mb-4">Partie 2 : L'IA au cœur de vos métiers</Heading>
                    <div className="space-y-8">
                        <FocusCard 
                            icon={<ShieldCheckIcon />}
                            title="IA & Cybersécurité : le gendarme intelligent"
                            problem="Des milliers d'événements par seconde sur un réseau. Un humain ne peut pas tout surveiller."
                            solutionTitle="La solution IA : Le 'gardien' qui ne dort jamais."
                            solution={
                                <ul className="list-disc list-inside space-y-1">
                                    <li><strong>Détection d'anomalies :</strong> Le Machine Learning analyse le trafic réseau normal. Si un comportement inhabituel survient, l'IA le détecte et alerte.</li>
                                    <li><strong>Analyse de Malwares :</strong> L'IA peut analyser le code d'un nouveau virus et le classer comme dangereux en se basant sur les milliers d'exemples de malwares qu'elle a déjà "vus".</li>
                                </ul>
                            }
                            example="Une connexion depuis un pays suspect à 3h du matin, suivie d'un transfert de données massif et inhabituel."
                        />
                         <FocusCard 
                            icon={<NetworkIcon />}
                            title="IA & Réseaux : vers une maintenance prédictive"
                            problem="'Mon serveur est tombé en panne sans prévenir !'"
                            solutionTitle="La solution IA : 'Je vais vous dire quand il risque de tomber en panne.'"
                            solution={
                                <ul className="list-disc list-inside space-y-1">
                                    <li><strong>Maintenance prédictive :</strong> L'IA analyse en continu les données de performance des équipements (température, bande passante...). En détectant des tendances invisibles pour un humain, elle peut prédire une défaillance.</li>
                                    <li><strong>Optimisation du trafic :</strong> L'IA peut analyser les flux en temps réel et rediriger dynamiquement le trafic pour éviter les congestions et garantir une meilleure Qualité de Service (QoS).</li>
                                </ul>
                            }
                            example="Une courbe de température d'un CPU qui augmente anormalement sur plusieurs semaines. L'IA détecte la tendance et alerte : 'Risque de surchauffe dans 7 jours'."
                        />
                         <FocusCard 
                            icon={<CpuIcon />}
                            title="IA & Électronique : l'intelligence embarquée"
                            problem="Comment un simple capteur devient un objet 'intelligent' (IoT) ?"
                            solutionTitle="La solution IA : Des modèles d'IA légers (TinyML) directement dans les microcontrôleurs."
                             solution={
                                 <ul className="list-disc list-inside space-y-1">
                                     <li><strong>Reconnaissance locale :</strong> Une caméra "intelligente" avec IA embarquée peut analyser l'image et n'alerter que si elle détecte une présence "humaine" et non un chat qui passe, sans envoyer de flux vidéo constant sur le réseau.</li>
                                      <li><strong>Apprentissage des habitudes :</strong> Un thermostat intelligent apprend vos habitudes et ajuste la température automatiquement pour économiser de l'énergie.</li>
                                 </ul>
                             }
                            example="Le thermostat intelligent (Nest, etc.) qui apprend quand vous partez et quand vous rentrez."
                        />
                    </div>
                </section>

                {/* Partie 3: Démo */}
                <section>
                    <Heading level={2} className="border-b pb-2 mb-4">Partie 3 : Démo : Entraînons une IA !</Heading>
                    <Card className="bg-green-50 border-green-300">
                         <Heading level={4} className="!text-green-800">Activité : Créer un classificateur de composants</Heading>
                         <p className="mt-2">Nous allons utiliser l'outil <strong>Teachable Machine</strong> de Google pour apprendre à une IA à reconnaître des composants électroniques en quelques minutes, sans une seule ligne de code.</p>
                         <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-700">
                             <li><strong>Préparation (5 min) :</strong> Objectif : apprendre à l'IA à reconnaître une "Résistance" vs un "Condensateur".</li>
                             <li><strong>Fournir les données (15 min) :</strong> Créer les 2 classes. Utiliser la webcam pour prendre plusieurs photos de chaque composant sous différents angles.</li>
                             <li><strong>Lancer l'entraînement :</strong> Cliquer sur "Train Model". La machine apprend les caractéristiques visuelles.</li>
                             <li><strong>Test et Discussion (10 min) :</strong> Présenter un nouveau composant à la webcam. Que se passe-t-il ? Et si on présente un transistor ? Discussion sur les possibilités (contrôle qualité, tri...).</li>
                         </ol>
                         <div className="text-center mt-6">
                            <a href="https://teachablemachine.withgoogle.com/train/image" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition no-underline">
                                Lancer Teachable Machine
                            </a>
                        </div>
                    </Card>
                </section>
                
                {/* Partie 4: Limites & Éthique */}
                <section>
                    <Heading level={2} className="border-b pb-2 mb-4">Partie 4 : L'IA, ce n'est pas magique</Heading>
                    <Card className="border-l-4 border-red-500 bg-red-50">
                        <Heading level={4} className="!text-red-800">Les limites de l'IA</Heading>
                        <ul className="list-disc list-inside mt-2 text-gray-700">
                             <li><strong>"Garbage In, Garbage Out" :</strong> Une IA est le reflet des données avec lesquelles on l'entraîne. Si les données sont de mauvaise qualité, incomplètes ou biaisées, l'IA prendra de mauvaises décisions.</li>
                             <li><strong>Le manque de "bon sens" :</strong> L'IA ne comprend pas le contexte comme un humain. Elle peut faire des erreurs "stupides" dans des situations nouvelles.</li>
                        </ul>
                    </Card>
                    <div className="mt-8">
                        <Heading level={3}>Débat : Questions éthiques</Heading>
                        <div className="space-y-4 mt-4 not-prose">
                            <DebateQuestion>"Une IA devrait-elle pouvoir décider seule de bloquer un utilisateur sur un réseau pour comportement suspect ?"</DebateQuestion>
                            <DebateQuestion>"Seriez-vous à l'aise avec une caméra de surveillance IA dans la rue qui analyse les comportements ?"</DebateQuestion>
                            <DebateQuestion>"L'IA va-t-elle détruire des emplois de techniciens ou simplement les transformer ?"</DebateQuestion>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
