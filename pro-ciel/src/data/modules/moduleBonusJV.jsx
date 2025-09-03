import React, { useState } from 'react';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';

// Petite molécule pour les cartes Avantages/Inconvénients
const ProsConsCard = ({ title, items, isPros }) => {
    const color = isPros ? 'green' : 'red';
    return (
        <div className={`border-l-4 border-${color}-500 bg-${color}-50 p-4 rounded-r-lg`}>
            <h4 className={`font-bold text-${color}-800`}>{title}</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};

// Organisme pour le schéma Client/Serveur interactif
const ClientServerDiagram = () => {
    // 'idle', 'requesting', 'responding'
    const [animationPhase, setAnimationPhase] = useState('idle');

    const handleSimulate = () => {
        if (animationPhase !== 'idle') return;

        setAnimationPhase('requesting'); // Phase 1: Les clients envoient les requêtes

        setTimeout(() => {
            setAnimationPhase('responding'); // Phase 2: Le serveur répond
        }, 1200); // Durée de l'animation de la requête

        setTimeout(() => {
            setAnimationPhase('idle'); // Fin de la simulation
        }, 2400); // Durée totale
    };
    
    const clients = [
        { id: 1, top: '15%', left: '15%', emoji: '🎮' },
        { id: 2, top: '85%', left: '10%', emoji: '💻' },
        { id: 3, top: '75%', left: '85%', emoji: '📱' },
    ];

    const serverPos = { top: '50%', left: '50%' };

    return (
        <Card className="mt-4">
            <div className="relative h-64">
                {/* Lignes de connexion */}
                {clients.map(client => (
                    <svg key={`line-${client.id}`} className="absolute w-full h-full pointer-events-none" style={{ top: 0, left: 0 }}>
                        <line x1={client.left} y1={client.top} x2={serverPos.left} y2={serverPos.top} stroke="#E5E7EB" strokeWidth="2" />
                    </svg>
                ))}

                {/* Serveur Central */}
                <div className="absolute p-4 bg-red-100 border-2 border-red-400 rounded-full flex flex-col items-center shadow-lg z-10"
                     style={{ top: serverPos.top, left: serverPos.left, transform: 'translate(-50%, -50%)' }}>
                    <span className="text-4xl">🧠</span>
                    <span className="font-bold">SERVEUR</span>
                </div>

                {/* Clients */}
                {clients.map(client => (
                    <div key={client.id} className="absolute p-2 bg-blue-100 border-2 border-blue-400 rounded-full shadow z-10"
                         style={{ top: client.top, left: client.left, transform: 'translate(-50%, -50%)' }}>
                        <span className="text-2xl">{client.emoji}</span>
                    </div>
                ))}

                {/* Paquets de données en mouvement */}
                {clients.map(client => (
                    <React.Fragment key={`packets-${client.id}`}>
                        {/* Paquet de requête (Client -> Serveur) */}
                        <div className="absolute w-3 h-3 bg-yellow-400 rounded-full z-20 transition-all duration-1000 ease-in-out"
                             style={{
                                top: animationPhase === 'requesting' ? serverPos.top : client.top,
                                left: animationPhase === 'requesting' ? serverPos.left : client.left,
                                opacity: animationPhase === 'requesting' ? 1 : 0,
                                transform: 'translate(-50%, -50%)'
                             }}
                        />
                        {/* Paquet de réponse (Serveur -> Client) */}
                        <div className="absolute w-3 h-3 bg-green-400 rounded-full z-20 transition-all duration-1000 ease-in-out"
                             style={{
                                top: animationPhase === 'responding' ? client.top : serverPos.top,
                                left: animationPhase === 'responding' ? client.left : serverPos.left,
                                opacity: animationPhase === 'responding' ? 1 : 0,
                                transform: 'translate(-50%, -50%)'
                             }}
                        />
                    </React.Fragment>
                ))}
            </div>
            <div className="text-center mt-4">
                <button onClick={handleSimulate} disabled={animationPhase !== 'idle'} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition">
                    {animationPhase !== 'idle' ? 'Simulation en cours...' : 'Simuler l\'échange de données'}
                </button>
            </div>
        </Card>
    );
};


// La page complète du cours
export const moduleBonusJV = {

  course: (
    <div className="space-y-12 prose max-w-none">
      
      {/* Introduction */}
      <section>
        <Heading level={1} className="mb-4">Infrastructure des Jeux Vidéo</Heading>
        <p className="text-xl text-gray-600">"Qui d'entre vous a déjà eu du 'lag' en jouant en ligne ? Ce sentiment de frustration quand votre action ne se produit pas tout de suite ? Aujourd'hui, on va démystifier ce qui se passe entre votre console ou votre PC et le serveur du jeu."</p>
      </section>

      {/* Partie 1: Le trajet de l'information */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 1 : De la manette à l'écran : le trajet de l'information</Heading>
        <div>
            <Heading level={3}>1.1. L'action du joueur</Heading>
            <p>"Quand vous appuyez sur une touche, votre PC ou votre console ne fait pas que déplacer votre personnage. Il crée un 'paquet de données'. Un petit message qui dit, par exemple, 'joueur X se déplace à gauche'."</p>
            <Card className="bg-yellow-50 border-yellow-300">
                <p><strong>Analogie :</strong> Pensez à ce paquet comme une lettre. Sauf que cette lettre doit arriver en une fraction de seconde, et non en plusieurs jours.</p>
            </Card>
        </div>
        <div className="mt-8">
            <Heading level={3}>1.2. Les deux architectures principales</Heading>
            <div className="grid md:grid-cols-2 gap-8 mt-4">
                {/* Client-Serveur */}
                <div>
                    <Heading level={4} className="text-blue-700">Architecture Client-Serveur</Heading>
                    <p>Le client (votre PC) est "bête" : il envoie ses actions au serveur. Le serveur est le "cerveau" : il reçoit tout, calcule tout, et renvoie le résultat à tout le monde.</p>
                    <ClientServerDiagram />
                    <div className="mt-4 space-y-4">
                        <ProsConsCard title="Avantages" isPros items={['Sécurité (anti-triche)', 'Stabilité', 'Équité pour tous les joueurs']} />
                        <p><strong>Exemples :</strong> MMO, FPS (*Valorant*, *Counter-Strike*)</p>
                    </div>
                </div>
                {/* Pair-à-Pair */}
                <div>
                    <Heading level={4} className="text-green-700">Architecture Pair-à-Pair (P2P)</Heading>
                    <p>Un des joueurs est désigné comme "hôte". Les autres se connectent directement à lui. L'hôte est à la fois client et serveur.</p>
                    <div className="mt-4 space-y-4">
                        <ProsConsCard title="Avantages" isPros items={['Moins cher pour les studios', 'Simple pour les petits jeux']} />
                        <ProsConsCard title="Inconvénients" isPros={false} items={['Triche plus facile', 'Dépend de la connexion de l\'hôte', 'La partie s\'arrête si l\'hôte quitte']} />
                        <p><strong>Exemples :</strong> Jeux de combat, jeux de sport (matchs 1 vs 1).</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      {/* Partie 2: Serveurs et protocoles */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 2 : Le cœur de l'opération : serveurs et protocoles</Heading>
        <div>
          <Heading level={3}>2.1. Le matériel : un serveur de jeu, c'est quoi ?</Heading>
          <p>C'est un ordinateur surpuissant, optimisé pour la performance et la stabilité. Ses composants sont choisis avec soin :</p>
          <div className="grid md:grid-cols-3 gap-4 not-prose mt-4">
              <Card><strong>CPU :</strong> Crucial pour les calculs de logique de jeu (collisions, scores...).</Card>
              <Card><strong>RAM :</strong> Indispensable pour stocker l'état de chaque joueur (position, vie...).</Card>
              <Card><strong>Stockage :</strong> Des SSD rapides pour charger les cartes et les données du jeu.</Card>
          </div>
          <p className="mt-4">Ces serveurs tournent principalement sur <strong>Windows Server</strong> ou <strong>Linux</strong>, ce dernier étant souvent préféré pour sa légèreté et sa stabilité.</p>
        </div>
        <div className="mt-8">
            <Heading level={3}>2.2. Les protocoles réseau : la règle du jeu</Heading>
            <p>Pour communiquer, clients et serveurs utilisent des protocoles. Les deux plus importants pour les jeux sont TCP et UDP.</p>
            <div className="grid md:grid-cols-2 gap-8 mt-4">
                <Card>
                    <Heading level={4} className="!text-fuchsia-700">TCP : La Fiabilité</Heading>
                    <p className="mt-2 font-semibold">"La lettre recommandée"</p>
                    <p className="text-sm">TCP garantit que chaque paquet de données arrive à destination, dans le bon ordre. Il y a un accusé de réception pour chaque envoi. S'il manque, le paquet est renvoyé.</p>
                    <p className="mt-4 font-bold text-sm">Utilisation en jeu :</p>
                    <ul className="list-disc list-inside text-sm"><li>Chat</li><li>Transactions (boutique)</li><li>Gestion de l'inventaire</li></ul>
                </Card>
                 <Card>
                    <Heading level={4} className="!text-orange-700">UDP : La Vitesse</Heading>
                    <p className="mt-2 font-semibold">"La carte postale"</p>
                    <p className="text-sm">UDP envoie les paquets sans se soucier de savoir s'ils sont arrivés ou dans quel ordre. C'est "tire et oublie".</p>
                    <p className="mt-4 font-bold text-sm">Utilisation en jeu :</p>
                    <ul className="list-disc list-inside text-sm"><li>Position du joueur</li><li>Tirs et actions en temps réel</li><li>Voix sur IP (VoIP)</li></ul>
                </Card>
            </div>
        </div>
      </section>

      {/* Partie 3: Du code au jeu */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 3 : Du code au jeu : les métiers et les outils</Heading>
        <p><strong>Langages :</strong> Le C++ est le roi pour les performances, mais le C# (avec Unity) est aussi très utilisé.</p>
        <p><strong>Cloud Gaming :</strong> C'est la nouvelle évolution. Le jeu ne tourne plus sur votre PC, mais sur un serveur distant ultra-puissant. Vous recevez simplement un flux vidéo du jeu, comme un film sur Netflix. Vos actions sont envoyées au serveur, et la vidéo est mise à jour en temps réel. Exemples : Nvidia GeForce Now, Xbox Cloud Gaming.</p>
      </section>

       {/* Partie 4: Synthèse */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 4 : Synthèse et Diagnostic</Heading>
        <Card className="bg-blue-50 border-blue-300">
            <Heading level={4} className="!text-blue-800">Problématique : "Mon ami a du 'lag'. Que vérifier ?"</Heading>
            <p className="mt-4">Après ce cours, voici les pistes de diagnostic que vous pouvez explorer :</p>
            <ul className="list-disc list-inside mt-2">
                <li><strong>Sa propre connexion :</strong> Est-il en Wi-Fi loin de la box ? Quelqu'un d'autre utilise la bande passante ?</li>
                <li><strong>L'architecture du jeu :</strong> Si c'est un jeu P2P, la connexion de l'hôte est peut-être mauvaise.</li>
                <li><strong>La distance au serveur :</strong> Utiliser des outils en ligne de commande comme <code>ping {'<adresse_du_serveur>'}</code> pour mesurer la latence (le temps de réponse en millisecondes).</li>
                <li><strong>Le chemin des données :</strong> Utiliser <code>tracert {'<adresse_du_serveur>'}</code> (ou <code>traceroute</code> sur Linux/macOS) pour voir par où passent les paquets de données et s'il y a un point de blocage sur le trajet.</li>
            </ul>
        </Card>
      </section>
      
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 5 : Le cas des consoles de salon (PlayStation, Xbox)</Heading>
        <p>Une console de jeu n'est pas un PC. C'est un ordinateur hautement spécialisé, conçu avec un seul objectif : offrir la meilleure expérience de jeu possible pour un coût maîtrisé. Cela entraîne des différences fondamentales.</p>
        <div>
            <Heading level={3}>5.1. Spécificités Matérielles</Heading>
            <div className="grid md:grid-cols-3 gap-4 not-prose mt-4">
                <Card>
                    <Heading level={4}>Architecture Unifiée (APU)</Heading>
                    <p className="text-sm mt-2">Le CPU et le GPU sont sur la même puce. Cela permet une communication ultra-rapide entre eux, idéale pour les jeux.</p>
                </Card>
                <Card>
                    <Heading level={4}>Mémoire Partagée</Heading>
                    <p className="text-sm mt-2">La RAM est partagée entre le CPU et le GPU. C'est plus efficace car les données n'ont pas besoin d'être copiées d'un endroit à l'autre comme sur PC (RAM vs VRAM).</p>
                </Card>
                <Card>
                    <Heading level={4}>SSD "Magique"</Heading>
                    <p className="text-sm mt-2">Les SSD des PS5 et Xbox Series sont bien plus rapides que les SSD standards. Ils permettent des temps de chargement quasi inexistants.</p>
                </Card>
            </div>
        </div>
        <div className="mt-8">
            <Heading level={3}>5.2. Spécificités Logicielles</Heading>
            <p><strong>Un OS sur mesure :</strong> L'OS d'une console (ex: Orbis OS pour la PS5, basé sur FreeBSD) est minimaliste. Il n'y a que le strict nécessaire pour lancer les jeux et les applications multimédia. Pas de processus inutiles en arrière-plan.</p>
            <p><strong>Un écosystème fermé :</strong> Contrairement à un PC, vous ne pouvez installer que des jeux et applications validés par le constructeur (Sony, Microsoft) via leur store. C'est un "jardin fermé", plus sûr mais moins libre.</p>
        </div>
        <div className="mt-8">
            <Heading level={3}>5.3. Tableau Comparatif : Console vs. PC Gamer</Heading>
            <div className="not-prose overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">Caractéristique</th>
                            <th scope="col" className="px-6 py-3 bg-blue-50">Console de Jeu (PS5, Xbox)</th>
                            <th scope="col" className="px-6 py-3 bg-green-50">PC Gamer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Objectif Principal</th>
                            <td className="px-6 py-4 bg-blue-50">Jeu optimisé "plug-and-play"</td>
                            <td className="px-6 py-4 bg-green-50">Polyvalence (Jeu, travail, création...)</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Matériel</th>
                            <td className="px-6 py-4 bg-blue-50">Fixe et optimisé pour sa génération</td>
                            <td className="px-6 py-4 bg-green-50">Modulaire, personnalisable et évolutif</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Système d'exploitation</th>
                            <td className="px-6 py-4 bg-blue-50">Fermé, léger et dédié</td>
                            <td className="px-6 py-4 bg-green-50">Ouvert et complet (Windows, Linux)</td>
                        </tr>
                         <tr className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Optimisation des jeux</th>
                            <td className="px-6 py-4 bg-blue-50">Excellente (une seule configuration matérielle)</td>
                            <td className="px-6 py-4 bg-green-50">Variable (dépend des milliers de configurations)</td>
                        </tr>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Prix</th>
                            <td className="px-6 py-4 bg-blue-50">Coût initial maîtrisé, souvent vendu à perte</td>
                            <td className="px-6 py-4 bg-green-50">Variable et potentiellement très élevé</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>
      {/* Partie 6: Dans les coulisses du développement */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 6 : Dans les coulisses du développement</Heading>
        <p>Créer un jeu vidéo est un processus long et complexe qui implique des dizaines, voire des centaines de personnes aux compétences très variées.</p>
        <div>
          <Heading level={3}>6.1. Les principaux métiers du jeu vidéo</Heading>
          <div className="grid md:grid-cols-2 gap-4 not-prose mt-4">
            <Card>
              <Heading level={4}>Game Designer</Heading>
              <p className="text-sm mt-2">L'architecte du jeu. Il imagine les règles, le gameplay, l'histoire et l'expérience globale du joueur.</p>
            </Card>
            <Card>
              <Heading level={4}>Programmeur / Développeur</Heading>
              <p className="text-sm mt-2">Le bâtisseur. Il traduit les idées du Game Designer en code. Spécialités : Gameplay, Moteur 3D, IA, Réseau...</p>
            </Card>
            <Card>
              <Heading level={4}>Artiste 2D/3D</Heading>
              <p className="text-sm mt-2">Le décorateur. Il crée tous les visuels du jeu : personnages, environnements, objets, interfaces...</p>
            </Card>
            <Card>
              <Heading level={4}>Sound Designer & Compositeur</Heading>
              <p className="text-sm mt-2">L'ambianceur. Il crée les bruitages, les musiques et les effets sonores qui donnent vie au jeu.</p>
            </Card>
          </div>
        </div>
        <div className="mt-8">
          <Heading level={3}>6.2. Le "Development Hell" : quand le temps devient l'ennemi</Heading>
          <p>Parfois, le développement d'un jeu prend tellement de temps qu'il devient un piège. Les technologies évoluent, les équipes changent, et le projet initial devient obsolète avant même sa sortie.</p>
          <div className="space-y-4 not-prose mt-4">
            <Card className="border-l-4 border-orange-500 bg-orange-50">
              <Heading level={4} className="!text-orange-800">Anecdote : Duke Nukem Forever</Heading>
              <p className="text-sm mt-2">Annoncé en 1997, le jeu est finalement sorti en 2011, soit 14 ans plus tard. Entre-temps, il a changé plusieurs fois de moteur graphique et de studio. À sa sortie, son gameplay et ses graphismes étaient complètement dépassés, ce qui en a fait un échec critique majeur malgré l'attente immense.</p>
            </Card>
            <Card className="border-l-4 border-yellow-500 bg-yellow-50">
              <Heading level={4} className="!text-yellow-800">Anecdote : Cyberpunk 2077</Heading>
              <p className="text-sm mt-2">Bien que le développement n'ait pas été aussi long, le jeu a été développé en visant les PC haut de gamme et les nouvelles consoles (PS5/Xbox Series). Sa sortie sur les consoles de la génération précédente (PS4/Xbox One) a été catastrophique, car le matériel de ces consoles, vieux de 7 ans, n'était plus capable de faire tourner correctement un jeu aussi ambitieux. Cela illustre comment un décalage technologique peut briser une expérience de jeu.</p>
            </Card>
          </div>
        </div>
        <div className="mt-8">
            <Heading level={3}>6.3. Les Moteurs de Jeu : Le Cœur du Réacteur</Heading>
            <p>Un moteur de jeu est un logiciel qui fournit aux développeurs une base complète et des outils pour créer un jeu. Au lieu de réinventer la roue à chaque fois, ils peuvent se concentrer sur le gameplay et le contenu. </p>
            <p>Un moteur gère typiquement :</p>
            <ul>
                <li><strong>Le Rendu Graphique (Rendering Engine) :</strong> Affiche les graphismes 2D et 3D, gère les lumières, les ombres, les textures.</li>
                <li><strong>Le Moteur Physique :</strong> Simule la physique du monde réel (gravité, collisions, etc.).</li>
                <li><strong>La Gestion Audio :</strong> Joue les musiques et les effets sonores.</li>
                <li><strong>L'Animation, l'Intelligence Artificielle, le Réseau...</strong> et bien d'autres systèmes complexes.</li>
            </ul>
            <p>Les principaux moteurs du marché sont <strong>Unreal Engine</strong> (réputé pour ses graphismes photoréalistes), <strong>Unity</strong> (très populaire pour les jeux indépendants et mobiles), et <strong>Godot</strong> (une alternative open source en pleine croissance).</p>
        </div>
        <div className="mt-8">
            <Heading level={3}>6.4. Focus sur Unity : La Créativité Accessible</Heading>
            <p>Unity est un excellent point de départ pour ceux qui veulent s'initier à la création de jeux. Il est utilisé pour des succès planétaires comme *Among Us*, *Fall Guys* ou *Genshin Impact*.</p>
            <p><strong>Comment ça marche ?</strong> Unity utilise un langage de script (le C#) et une approche basée sur les composants. Chaque objet dans le jeu (un personnage, une arme, une porte) est un "GameObject" auquel on attache des "Components" qui lui donnent un comportement (un composant "Rigidbody" pour la physique, un script personnalisé pour les actions...). </p>
            <Card className="bg-green-50 border-green-300">
                <Heading level={4} className="!text-green-800">Pour aller plus loin et se lancer</Heading>
                <p className="mt-2">Pour donner envie aux élèves d'essayer, voici quelques ressources incontournables (et gratuites) :</p>
                <ul className="list-disc list-inside mt-2">
                    <li><strong>Unity Learn :</strong> La plateforme officielle de Unity, remplie de tutoriels vidéo et de projets guidés pour débutants.</li>
                    <li><strong>Brackeys sur YouTube :</strong> Une chaîne de référence (aujourd'hui archivée mais toujours pertinente) avec des tutoriels clairs et concis pour apprendre les bases.</li>
                    <li><strong>Itch.io :</strong> Un site pour découvrir et publier des jeux indépendants, souvent créés avec Unity. C'est une excellente source d'inspiration.</li>
                </ul>
            </Card>
        </div>
      </section>
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 7 : L'Intelligence Artificielle, le futur du jeu ?</Heading>
        <p>L'IA est un domaine fascinant qui transforme et va continuer de transformer le jeu vidéo. On peut la diviser en deux grandes catégories : l'IA "classique" des ennemis et l'IA "générative" qui arrive en force.</p>
        <div>
            <Heading level={3}>7.1. L'IA des PNJ : L'art du "juste assez intelligent"</Heading>
            <p>L'intelligence artificielle des PNJ (Personnages Non Joueurs) dans la plupart des jeux n'a pas pour but d'être la plus intelligente possible. Au contraire, elle est soigneusement calibrée.</p>
            <Card className="bg-purple-50 border-purple-300">
                <Heading level={4} className="!text-purple-800">Pourquoi une IA "imparfaite" ?</Heading>
                <p className="mt-2">L'objectif est de créer une expérience amusante, pas frustrante. Une IA parfaite qui ne rate jamais ses tirs serait imbattable et donc, pas amusante. Les développeurs créent donc des comportements prévisibles (des "patterns") que le joueur peut apprendre et contrer. C'est un équilibre délicat entre donner un défi au joueur et lui procurer un sentiment de puissance lorsqu'il arrive à déjouer l'IA.</p>
            </Card>
        </div>
        <div className="mt-8">
            <Heading level={3}>7.2. L'IA Générative : La Révolution à Venir</Heading>
            <p>Les nouvelles IA, comme celles qui peuvent générer du texte ou des images, ouvrent des possibilités incroyables pour l'avenir du jeu vidéo.</p>
            <div className="grid md:grid-cols-2 gap-4 not-prose mt-4">
                <Card>
                    <Heading level={4}>Des Mondes Infinis et Uniques</Heading>
                    <p className="text-sm mt-2">L'IA peut générer des quêtes, des dialogues, des environnements et même des personnages à la volée. Imaginez un jeu où chaque partie est différente, avec des histoires qui s'adaptent à vos actions.</p>
                </Card>
                <Card>
                    <Heading level={4}>Des PNJ Vraiment "Vivants"</Heading>
                    <p className="text-sm mt-2">Au lieu de répéter les mêmes phrases, les PNJ pourraient avoir de vraies conversations avec vous, se souvenir de vos actions passées et réagir de manière dynamique et imprévisible. </p>
                </Card>
                 <Card>
                    <Heading level={4}>Aide au Développement</Heading>
                    <p className="text-sm mt-2">L'IA est aussi un outil formidable pour les développeurs. Elle peut aider à générer des textures, des modèles 3D, des lignes de code ou même à débusquer des bugs, accélérant considérablement le processus de création.</p>
                </Card>
                 <Card>
                    <Heading level={4}>Le Défi de Demain</Heading>
                    <p className="text-sm mt-2">Le grand enjeu pour les développeurs sera d'intégrer ces technologies tout en gardant le contrôle sur l'expérience de jeu pour qu'elle reste cohérente, amusante et bien rythmée.</p>
                </Card>
            </div>
        </div>
      </section>
    </div>
  )
}

