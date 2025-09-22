import React from 'react';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';
import PracticalWork from '../../components/organisms/PraticalWork';

const tpTitle = 'TP : Maquetter et coder un portfolio "one-page"';
const tpObjective = 'Concevoir et réaliser un portfolio web complet sur une seule page, en utilisant une structure HTML sémantique et des techniques de mise en page CSS modernes (Flexbox) pour créer un design responsive. Le projet final sera versionné avec Git et déployé sur GitHub Pages.';
const tpMaterials = [
    'Un ordinateur avec VS Code et Git installés.',
    'Un compte GitHub.',
    'Contenu à préparer : une courte biographie, une liste de 3-4 projets (fictifs ou réels), et vos informations de contact.',
];


const tpSteps = [
    {
        title: "Phase 1 : La Structure HTML - L'Art de l'Architecte",
        description: (
            <>
                <p>On commence par construire le squelette de notre page en se concentrant uniquement sur le sens et la structure, sans se soucier de l'apparence.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li>
                        <strong>Préparation du projet :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Créez un dossier `portfolio-ciel` et ouvrez-le avec VS Code.</li>
                            <li>Initialisez Git avec la commande <code>git init</code> dans le terminal.</li>
                            <li>Créez le fichier `index.html` et générez le squelette de base (tapez `!` puis `Tab`).</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Objectif : Créer la structure sémantique principale.</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans votre balise <code>{'<body>'}</code>, ajoutez dans l'ordre les quatre balises sémantiques qui formeront les grandes zones de votre page : un en-tête, une navigation, un contenu principal, et un pied de page.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Objectif : Remplir l'en-tête et la navigation.</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans le <code>{'<header>'}</code>, insérez un titre de niveau 1 ({'<h1>'}) avec votre nom.</li>
                            <li>Dans le <code>{'<nav>'}</code>, construisez le menu. Il doit être une liste à puces ({'<ul>'}) contenant trois éléments ({'<li>'}). Chacun de ces éléments doit contenir un lien ({'<a>'}) pointant respectivement vers les sections `#accueil`, `#projets`, et `#contact`.</li>
                         </ul>
                    </li>
                     <li>
                        <strong>Objectif : Structurer le contenu principal.</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans la balise <code>{'<main>'}</code>, créez trois balises <code>{'<section>'}</code>.</li>
                            <li>Donnez à chaque section l'`id` correspondant aux liens créés précédemment (`accueil`, `projets`, `contact`).</li>
                            <li>Dans chaque section, ajoutez un titre de niveau 2 ({`<h2>`}) pour décrire son contenu (ex: "Bienvenue", "Mes Projets", "Me Contacter").</li>
                         </ul>
                    </li>
                    <li>
                        <strong>Premier Commit :</strong>
                        <p>Votre structure est en place. C'est le moment de sauvegarder cette base solide avec Git.</p>
                        <pre className="code-block"><code>git add . <br />
git commit -m "Initial commit: Ajout de la structure HTML sémantique"</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 2 : Le Style CSS - L'Art du Décorateur",
        description: (
            <>
                <p>Maintenant que la maison est construite, on va la décorer. Nous allons utiliser un fichier CSS externe pour bien séparer le fond de la forme.</p>
                 <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li>
                        <strong>Liaison du fichier CSS :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Créez un fichier `style.css`.</li>
                            <li>Dans `index.html`, trouvez la balise <code>{'</head>'}</code> et juste avant, ajoutez la balise <code>{'<link>'}</code> qui pointe vers votre fichier `style.css`.</li>
                        </ul>
                    </li>
                     <li>
                        <strong>Objectif : Définir un style global.</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans `style.css`, ciblez la balise `body`. À l'intérieur, définissez une police (`font-family`), une couleur de fond (`background-color`) et une couleur de texte (`color`) de votre choix.</li>
                        </ul>
                    </li>
                     <li>
                        <strong>Objectif : Mettre en page le header avec Flexbox.</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Nous voulons que votre nom soit à gauche et le menu à droite. C'est le travail parfait pour Flexbox. Complétez le code suivant dans votre CSS :
                                 <pre className="code-block"><code>{`header {
    display: flex;
    /* ??? : Quelle propriété pour pousser les éléments aux extrémités ? */
    /* ??? : Quelle propriété pour centrer les éléments verticalement ? */
    padding: 1rem 2rem;
    background-color: white;
}`}</code></pre>
                            </li>
                             <li>**Expérimentation :** Utilisez les outils de développement (F12) de votre navigateur pour tester en direct différentes valeurs pour `justify-content` et voir l'effet.</li>
                             <li>**Mini-Défi :** Votre menu est une liste verticale. Ciblez le {`<ul>`} de la balise <code>{'<nav>'}</code> et utilisez Flexbox pour rendre les liens horizontaux.</li>
                        </ul>
                    </li>
                     <li>
                        <strong>Deuxième Commit :</strong>
                        <p>La mise en page principale prend forme. On sauvegarde !</p>
                        <pre className="code-block"><code>git add . <br />
git commit -m "feat: Ajout du style global et mise en page du header avec Flexbox"</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 3 : La Galerie de Projets et le Déploiement ",
        description: (
            <>
                <p>On va maintenant créer la galerie de projets en utilisant la puissance de Flexbox pour qu'elle s'adapte à la taille de l'écran.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li>
                        <strong>Objectif : Créer la structure HTML de la galerie.</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans `index.html`, à l'intérieur de la section `#projets`, créez une <code>{'<div class="gallery">'}</code>.</li>
                            <li>À l'intérieur de cette `div`, créez trois <code>{'<div class="card">'}</code> pour représenter vos projets. Chaque carte doit contenir un <code>{'<h3>'}</code> et un <code>{'<p>'}</code>.</li>
                        </ul>
                    </li>
                     <li>
                        <strong>Objectif : Styliser la galerie avec Flexbox multi-lignes.</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans `style.css`, complétez le code suivant pour que les cartes se placent en ligne et aillent à la ligne quand il n'y a plus de place.
                                <pre className="code-block"><code>{`.gallery {
    display: flex;
    /* ??? : La propriété magique qui permet de passer à la ligne */
    gap: 1rem;
}

.card {
    /* ??? : La propriété pour donner une taille de base (ex: 300px) */
    /* ??? : La propriété qui permet aux cartes de grandir pour remplir l'espace vide */
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
}`}</code></pre>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Commit Final et Déploiement :</strong>
                        <p>Votre portfolio est prêt ! Dernière sauvegarde et mise en ligne.</p>
                        <pre className="code-block"><code>git add . <br />
git commit -m "feat: Finalisation de la galerie de projets"</code></pre>
                        <p>Créez un dépôt public sur GitHub, liez votre projet local, poussez votre code, et activez GitHub Pages dans les paramètres du dépôt. Partagez l'URL de votre site !</p>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "⭐ Bonus (Pour les plus rapides)",
        description: (
            <p>Utilisez les **Media Queries** dans votre CSS pour améliorer le responsive design. Créez une règle `@media (max-width: 768px) { "..." }`. À l'intérieur, ciblez le `header` et changez sa `flex-direction` en `column` pour que le menu passe sous votre nom sur les petits écrans.</p>
        )
    }
];


const CodeExample = ({ title, code, language = 'css' }) => (
    <div className="my-6">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <pre className={`mt-2 text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto`}><code className={`language-${language}`}>{code.trim()}</code></pre>
    </div>
);
const SemanticLayoutDiagram = () => (
    <div className="my-6 not-prose p-6 bg-white border-2 border-gray-200 rounded-lg text-center font-sans">
        <div className="w-full bg-blue-100 border border-blue-300 p-4 rounded mb-2">
            <p className="font-bold text-blue-800">&lt;header&gt;</p>
        </div>
        <div className="w-full bg-indigo-100 border border-indigo-300 p-3 rounded mb-2">
            <p className="font-bold text-indigo-800">&lt;nav&gt;</p>
        </div>
        <div className="w-full bg-gray-100 border border-gray-300 p-4 rounded">
            <p className="font-bold text-gray-800 mb-2">&lt;main&gt;</p>
            <div className="bg-green-100 border border-green-300 p-4 rounded mb-2">
                <p className="font-bold text-green-800">&lt;section&gt;</p>
                 <div className="bg-yellow-100 border border-yellow-300 p-4 rounded mt-2">
                    <p className="font-bold text-yellow-800">&lt;article&gt;</p>
                 </div>
            </div>
             <div className="bg-green-100 border border-green-300 p-4 rounded">
                <p className="font-bold text-green-800">&lt;section&gt;</p>
            </div>
        </div>
        <div className="w-full bg-purple-100 border border-purple-300 p-4 rounded mt-2">
            <p className="font-bold text-purple-800">&lt;footer&gt;</p>
        </div>
    </div>
);
export const module6TContent = {
  course : (
    <div className="space-y-12 prose max-w-none">

              <section>
                <Heading level={1} className="mb-4">HTML5 : Le Squelette Sémantique du Web</Heading>
                <p className="text-xl text-gray-600">"Avant de peindre un mur, on le construit. Avant de styliser une page web, on lui donne une structure solide. C'est le rôle du HTML : être le squelette intelligent de chaque page que vous visitez."</p>
              </section>
        
              <section>
                <Heading level={2} className="border-b pb-2 mb-4">Partie 1 : Qu'est-ce que le HTML ?</Heading>
                <p>Le HTML (HyperText Markup Language) n'est pas un langage de programmation. C'est un **langage de balisage**. Son unique but est de **décrire et de structurer le contenu** d'une page web. Il dit au navigateur : "Ceci est un titre", "Ceci est un paragraphe", "Ceci est une image".</p>
                <Card className="bg-blue-50 border-blue-200">
                    <p><strong>Analogie :</strong> Le HTML est le plan d'un architecte et le gros œuvre d'une maison. Il définit les pièces (la tête, le corps), les étages (les sections), les portes (les liens), mais il ne choisit ni la couleur des murs, ni le type de sol.</p>
                </Card>
                
                <div className="mt-8">
                    <Heading level={3}>La Structure de Base d'un Document HTML5</Heading>
                    <p>Toute page HTML commence par ce squelette minimal, qui déclare son type, sa langue, et sépare les métadonnées (<code>&lt;head&gt;</code>) du contenu visible (<code>&lt;body&gt;</code>).</p>
                    <CodeExample title="Le squelette de départ" code={
        `<!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Titre de ma page</title>
        </head>
        <body>
            <!-- Tout votre contenu visible ira ici -->
        </body>
        </html>`
                    } />
                </div>
              </section>
        
              <section>
                <Heading level={2} className="border-b pb-2 mb-4">Partie 2 : Les Balises de Contenu</Heading>
                <p>Ce sont les balises que vous utiliserez le plus souvent pour structurer votre texte et vos médias.</p>
                <div className="grid md:grid-cols-2 gap-4 not-prose">
                    <Card><p><code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code> : Les titres. <code>&lt;h1&gt;</code> est le plus important, <code>&lt;h6&gt;</code> le moins.</p></Card>
                    <Card><p><code>&lt;p&gt;</code> : Un paragraphe de texte.</p></Card>
                    <Card><p><code>&lt;a href="URL"&gt;</code> : Un lien hypertexte. L'attribut `href` est la destination du lien.</p></Card>
                    <Card><p><code>&lt;img src="image.jpg" alt="..."&gt;</code> : Une image. `src` est le chemin vers l'image, `alt` est un texte descriptif crucial pour l'accessibilité.</p></Card>
                    <Card><p><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code> : Des listes. <code>ul</code> pour une liste à puces, <code>ol</code> pour une liste numérotée, <code>li</code> pour chaque élément de la liste.</p></Card>
                    <Card><p><code>&lt;strong&gt;</code> et <code>&lt;em&gt;</code> : Pour mettre du texte en gras (importance forte) ou en italique (emphase).</p></Card>
                </div>
              </section>
              
              <section>
                <Heading level={2} className="border-b pb-2 mb-4">Partie 3 : Le HTML Sémantique - Donner du Sens</Heading>
                <p>C'est le cœur du HTML5. Au lieu d'utiliser des boîtes génériques <code>&lt;div&gt;</code> partout, on utilise des balises qui décrivent le **rôle** de leur contenu. Pourquoi ? Pour les **moteurs de recherche** (SEO) et l'**accessibilité** (lecteurs d'écran).</p>
                <Card className="bg-yellow-50 border-yellow-300">
                    <p><strong>La règle d'or :</strong> Choisissez toujours la balise qui décrit le mieux le sens de votre contenu, pas son apparence.</p>
                </Card>
                <SemanticLayoutDiagram />
                <ul className="list-disc list-inside">
                    <li><code>&lt;header&gt;</code> : L'en-tête de la page ou d'une section. Contient souvent le logo, le titre principal, la navigation.</li>
                    <li><code>&lt;nav&gt;</code> : Contient les liens de navigation principaux du site.</li>
                    <li><code>&lt;main&gt;</code> : Le contenu principal et unique de la page. Il ne doit y en avoir qu'un par page.</li>
                    <li><code>&lt;section&gt;</code> : Regroupe un contenu thématique. Doit presque toujours contenir un titre (h2, h3...).</li>
                    <li><code>&lt;article&gt;</code> : Un contenu autonome qui pourrait exister indépendamment du reste (un article de blog, un post de forum, un produit).</li>
                    <li><code>&lt;aside&gt;</code> : Pour du contenu complémentaire, lié indirectement au contenu principal (une biographie d'auteur, des liens connexes).</li>
                    <li><code>&lt;footer&gt;</code> : Le pied de page. Contient les informations de contact, les crédits, les mentions légales.</li>
                </ul>
              </section>
           
 

      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 4 : CSS - Les Sélecteurs et le Box Model</Heading>
        <p>Le CSS (Cascading Style Sheets) permet de styliser le HTML. Pour cela, on utilise des **sélecteurs** pour cibler les éléments.</p>
        <div className="grid md:grid-cols-3 gap-4 not-prose">
            <Card><p><strong>Sélecteur de balise :</strong> <code>p {`{...}`}</code> (cible tous les paragraphes).</p></Card>
            <Card><p><strong>Sélecteur de classe :</strong> <code>.btn-primary {`{...}`}</code> (cible tous les éléments avec `class="btn-primary"`).</p></Card>
            <Card><p><strong>Sélecteur d'ID :</strong> <code>#main-title {`{...}`}</code> (cible l'unique élément avec `id="main-title"`).</p></Card>
        </div>
        <p className="mt-4">Chaque élément est une boîte. Le **Box Model** (marge, bordure, padding) est le concept fondamental qui définit l'espacement autour et à l'intérieur de ces boîtes.</p>
      </section>
      
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 3 : La Mise en Page Moderne avec Flexbox</Heading>
        <p>Flexbox est un modèle de mise en page unidimensionnel. C'est l'outil parfait pour aligner des éléments sur un axe (horizontal ou vertical).</p>
        <Card className="bg-blue-50 border-blue-200">
            <p><strong>Cas d'usage principal :</strong> Centrer des éléments, créer des barres de navigation, répartir l'espace entre des cartes.</p>
        </Card>
        <CodeExample title="Exemple : Une barre de navigation" code={
`nav {
    display: flex;
    justify-content: space-between; /* Espace maximum entre les éléments */
    align-items: center;         /* Centre verticalement */
}`
            } />
      </section>
      
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 4 : La Mise en Page Avancée avec Flexbox (multi-lignes)</Heading>
        <p>Par défaut, Flexbox essaie de tout mettre sur une seule ligne. Mais avec la propriété <code>flex-wrap</code>, on peut lui permettre de passer à la ligne. C'est idéal pour créer des galeries d'éléments qui s'adaptent à l'espace disponible.</p>
         <Card className="bg-green-50 border-green-200">
            <p><strong>Cas d'usage principal :</strong> Créer une galerie de projets ou de produits qui s'adapte naturellement à la largeur de l'écran.</p>
        </Card>
        <CodeExample title="Exemple : Une galerie de projets multi-lignes" code={
`.gallery {
    display: flex;
    flex-wrap: wrap; /* Permet aux éléments de passer à la ligne */
    gap: 1rem;       /* Espace entre les éléments */
}

.gallery-item {
    flex-basis: 300px; /* Chaque élément essaie de faire 300px de large */
    flex-grow: 1;      /* Permet à l'élément de grandir pour remplir l'espace vide */
}`
            } />
      </section>

      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 5 : Le Responsive Design</Heading>
        <p>Aujourd'hui, un site doit être parfait sur ordinateur, tablette et mobile. Le Responsive Design est la technique qui permet d'adapter la mise en page en fonction de la taille de l'écran, grâce aux **Media Queries**.</p>
        <Card className="bg-yellow-50 border-yellow-200">
            <p><strong>L'approche "Mobile First" :</strong> C'est la meilleure pratique. On commence par créer les styles pour la version mobile, puis on utilise des media queries pour ajouter ou modifier des styles pour les écrans plus grands.</p>
        </Card>
        <CodeExample title="Exemple : Adapter notre galerie Flexbox" code={
`/* Styles par défaut (Mobile) */
.gallery-item {
    flex-basis: 100%; /* Chaque élément prend toute la largeur */
}

/* Styles pour les écrans plus larges que 768px (Tablettes et PC) */
@media (min-width: 768px) {
    .gallery-item {
        flex-basis: 300px; /* On revient à une base de 300px pour avoir plusieurs colonnes */
    }
}`
            } />
      </section>
    </div>
  ), tp: (
       <PracticalWork 
      title={tpTitle}
      objective={tpObjective}
      materials={tpMaterials}
      steps={tpSteps}
    />
  )
}

