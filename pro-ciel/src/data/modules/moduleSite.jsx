
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';

// Molécule pour afficher du code (Guide de survie)
const CodeSnippet = ({ title, code, language = 'javascript' }) => (
    <div className="my-4 bg-gray-800 rounded-md overflow-hidden text-sm font-mono text-white not-prose">
        <div className="bg-gray-900 px-4 py-2 text-xs text-gray-400 uppercase tracking-wider border-b border-gray-700">
            {title}
        </div>
        <div className="p-4 overflow-x-auto">
            <pre><code className={`language-${language}`}>{code.trim()}</code></pre>
        </div>
    </div>
);
  const subjects = [
    {
      id: 1,
      title: "Sujet 1 : Le Fan-Site",
      subtitle: "Musique, Sport ou Jeu Vidéo",
      difficulty: "⭐ Niveau 1 - Note max : 14/20",
      description: "Vous créez une page dédiée à votre artiste, sportif ou jeu préféré.",
      details: {
        html: [
            "<strong>En-tête :</strong> Nom de la star/jeu + Menu (Accueil, Bio, Galerie).",
            "<strong>Section Présentation :</strong> Une belle image alignée à côté d'un texte.",
            "<strong>Section Galerie :</strong> 3 images alignées horizontalement.",
            "<strong>Pied de page :</strong> Votre nom."
        ],
        css: [
            "Police d'écriture originale (Google Fonts).",
            "Couleur ou image de fond en rapport avec le thème.",
            "Images de la galerie de même taille."
        ],
        js: [
            "<strong>Mission : Mode Sombre</strong>",
            "Ajoutez un bouton 'Changer de style'.",
            "Au clic : le fond de la page devient sombre et le texte devient clair."
        ]
      }
    },
    {
      id: 2,
      title: "Sujet 2 : La Fiche Produit",
      subtitle: "E-commerce",
      difficulty: "⭐⭐ Niveau 2 - Note max : 17/20",
      description: "Vous vendez un produit unique (baskets, montre, téléphone...).",
      details: {
        html: [
            "<strong>Titre :</strong> Nom du produit.",
            "<strong>Zone centrale :</strong> Grande image du produit + Colonne détails (Description, Prix en gros, Bouton 'Ajouter').",
            "<strong>Section Détails :</strong> Un paragraphe de texte technique (caché au départ)."
        ],
        css: [
            "Utiliser Flexbox pour mettre l'image à gauche et le texte à droite.",
            "Bouton 'Ajouter' stylisé (couleur, arrondi, curseur main)."
        ],
        js: [
            "<strong>Mission : Afficher / Masquer</strong>",
            "Ajoutez un bouton 'Voir les caractéristiques'.",
            "Au clic : le texte caché apparaît. Si on reclique, il disparaît (toggle)."
        ]
      }
    },
    {
      id: 3,
      title: "Sujet 3 : Le Quiz Rapide",
      subtitle: "Jeu & Culture",
      difficulty: "⭐⭐⭐ Niveau 3 - Note max : 20/20",
      description: "Vous créez un petit jeu de culture générale sur le thème de votre choix.",
      details: {
        html: [
            "<strong>Titre :</strong> 'Quiz de Culture Générale'.",
            "<strong>3 Questions :</strong> Pour chaque question, l'énoncé et 3 boutons de réponse.",
            "<strong>Zone Résultat :</strong> Une zone vide en bas pour afficher le message final."
        ],
        css: [
            "Chaque question dans un encadré (bordure, fond léger, marges).",
            "Les boutons de réponse doivent s'assombrir au survol (:hover)."
        ],
        js: [
            "<strong>Mission : Vérification</strong>",
            "Choisissez une question.",
            "Au clic sur la <strong>bonne</strong> réponse : le bouton devient VERT.",
            "Au clic sur une <strong>mauvaise</strong> réponse : le bouton devient ROUGE."
        ]
      }
    }
  ];

export const moduleSite = {
    course :  (
    <div className="space-y-12">
      
      {/* EN-TÊTE */}
      <section className="text-center space-y-4 border-b pb-8">
        <Heading level={1}>TP Évaluation : Mon Premier Site Interactif</Heading>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Durée :</strong> 6 heures • <strong>Niveau :</strong> Première<br/>
            Mobilisez vos compétences HTML, CSS et JavaScript pour réaliser un mini-site complet.
        </p>
      </section>

      {/* RAPPEL DES COMPÉTENCES */}
      <section>
        <Heading level={2}>Ce qui est évalué</Heading>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
            <Card className="bg-orange-50 border-orange-200">
                <Heading level={4} className="!text-orange-800 !mt-0">1. HTML (Structure)</Heading>
                <p className="text-sm text-gray-700">Utilisation des bonnes balises sémantiques (<code>header</code>, <code>nav</code>, <code>section</code>...). Code propre et bien indenté.</p>
            </Card>
            <Card className="bg-blue-50 border-blue-200">
                <Heading level={4} className="!text-blue-800 !mt-0">2. CSS (Style)</Heading>
                <p className="text-sm text-gray-700">Site agréable à l'œil. Utilisation de <strong>Flexbox</strong> pour aligner les éléments (menus, colonnes).</p>
            </Card>
            <Card className=" border-yellow-300">
                <Heading level={4} className="!text-yellow-800 !mt-0">3. JS (Interaction)</Heading>
                <p className="text-sm text-gray-700">Faire réagir la page à une action de l'utilisateur (clic sur un bouton) pour modifier le contenu ou le style.</p>
            </Card>
        </div>
      </section>
      <section>
        <Heading level={2}>Consignes</Heading>
        <ul>
            <li>
                <p>1. <span className='font-bold'>Choisissez un sujet :</span> Les sujets comportent des difficultés différentes, plus vous prenez un sujets difficiles, plus vous avez de chances d'avoir une meilleur note : la note maximal que vous pouvez avoir dépend de la difficulté choisi. Ce qu'on attend d'un développeur est avant tout que son travail soit propre et professionnel.</p>
            </li>
            <li>
                <p>2. <span className='font-bold'>Préparez :</span> Une fois le sujet choisi, créez un nouveau repository sur GitHub que vous allez nommé : Examen web sujet [X]. Créez un nouveau codespace et installer l'extension "Live Server", comme d'habitude.</p>
            </li>
            <li>
                <p>3. <span className='font-bold'>Codez ! </span> C'est un examen en <span className='font-bold'>SOLO</span>, toute discussion ou utilisation d'une IA sera puni. <br /> 
                Le seul site internet que vous pouvez consulter est : <a className='font-bold' href="https://developer.mozilla.org/fr/">https://developer.mozilla.org/fr/</a>, vous pouvez trouver toutes les ressources nécessaires pour l'HTML, le CSS et le Javascript.</p>
            </li>
            <li>4. <span className='font-bold'>Sauvegardez : </span> Faire des sauvegardes régulières en utilisant Git est obligatoire, les commits seront évalués !</li>
        </ul>
      </section>

      {/* CHOIX DES SUJETS */}
      <section>
        <Heading level={2}>Choisissez UN sujet parmi les 3</Heading>
      
        <div className="grid lg:grid-cols-3 gap-8 mt-6">
            {subjects.map((subject) => (
                <Card key={subject.id} className="flex flex-col h-full hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-blue-500 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-blue-500 to-purple-500">
                        <p  className="text-white font-bold">{subject.difficulty}</p>
                    </div>
                    <Heading level={3} className="!mt-2 !mb-1">{subject.title}</Heading>
                    <p className="text-sm text-blue-600 font-bold uppercase tracking-wide mb-4">{subject.subtitle}</p>
                    
                    <p className="text-gray-600 mb-6 italic">{subject.description}</p>
                    
                    <div className="space-y-4 text-sm flex-grow">
                        <div className="bg-gray-50 p-3 rounded">
                            <strong className="text-orange-600 block mb-1">HTML</strong>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {subject.details.html.map((item, idx) => <li key={idx} dangerouslySetInnerHTML={{__html: item}} />)}
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-3 rounded">
                            <strong className="text-blue-600 block mb-1">CSS</strong>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {subject.details.css.map((item, idx) => <li key={idx} dangerouslySetInnerHTML={{__html: item}} />)}
                            </ul>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded border border-yellow-100">
                            <strong className="text-yellow-700 block mb-1">JavaScript</strong>
                            <ul className="list-disc list-inside text-gray-800 space-y-1">
                                {subject.details.js.map((item, idx) => <li key={idx} dangerouslySetInnerHTML={{__html: item}} />)}
                            </ul>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
      </section>

      {/* GUIDE DE SURVIE */}
      <section className="bg-gray-100 p-6 rounded-xl border border-gray-300">
        <Heading level={2} className="!mt-0 flex items-center gap-2">
          Guide de Survie (Rappels)
        </Heading>
        
        <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
                <Heading level={4}>1. Relier les fichiers</Heading>
                <p className="text-sm mb-2">Dans le <code>{'<head>'}</code> pour le CSS :</p>
                <CodeSnippet title="index.html (head)" language="html" code={`<link rel="stylesheet" href="style.css">`} />
                
                <p className="text-sm mb-2 mt-4">Juste avant la fin du <code>{'</body>'}</code> pour le JS :</p>
                <CodeSnippet title="index.html (body)" language="html" code={`<script src="script.js"></script>`} />
            </div>
           

            <div>
                <Heading level={4}>2. Le JavaScript en 3 étapes</Heading>
                <p className="text-sm mb-2">Le plan de bataille pour toute interaction :</p>
                
                <div className="space-y-4">
                    <div>
                        <strong className="text-purple-700">Étape 1 : Je Cible</strong>
                        <CodeSnippet title="script.js" code={`let monElement = document.querySelector('.ma-classe');`} />
                    </div>
                    <div>
                        <strong className="text-purple-700">Étape 2 : J'Écoute</strong>
                        <CodeSnippet title="script.js" code={`
monElement.addEventListener('click', () => {
   // Le code à exécuter au clic
});
                        `} />
                    </div>
                    <div>
                        <strong className="text-purple-700">Étape 3 : Je manipule(Exemples)</strong>
                        <CodeSnippet title="script.js" code={`
// Changer le texte
monElement.textContent = 'Bravo !';

// Ajouter/Enlever une classe 
document.body.classList.toggle('ma-classe');
                        `} />
                    </div>
                </div>
            </div>
             <div>
                <Heading level={4}>3. Sauvegarder</Heading>
                <p className="text-sm mb-2">Dans le terminal :</p>
                <CodeSnippet title="terminal" language="html" code={`git add .`} />
                <CodeSnippet title="terminal" language="html" code={`git commit -m "message pertinent de commit"`} />
                <CodeSnippet title="terminal" language="html" code={`git push`} />

            </div>
        </div>
      </section>

    </div>
  )
}

