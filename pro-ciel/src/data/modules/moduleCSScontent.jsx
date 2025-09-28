import React from 'react';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';
import PracticalWork from '../../components/organisms/PraticalWork';

const tpTitle = 'TP : Styliser la page de présentation de votre Chef-d\'Œuvre';
const tpObjective = 'Appliquer les concepts fondamentaux du CSS pour transformer un document HTML brut en une page web esthétique et bien mise en page. L\'objectif est de maîtriser la liaison d\'une feuille de style, l\'utilisation des sélecteurs, du Box Model et de Flexbox.';
const tpMaterials = [
    'Le dossier du TP précédent (`mon-chef-d-oeuvre`) contenant les 3 fichiers HTML.',
    'Un ordinateur avec VS Code et Git installés.',
    'Un navigateur web.',
];

const tpSteps = [
    {
        title: "Phase 1 : Préparation et Styles Globaux",
        description: (
            <>
                <p>On commence par créer notre feuille de style et par définir une ambiance visuelle pour l'ensemble du site. C'est le fond de teint de notre page.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li>
                        <strong>Création et Liaison du fichier CSS :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans votre dossier de projet, créez un nouveau fichier nommé `style.css`.</li>
                            <li>Ouvrez votre fichier `index.html`. Dans la balise <code>{'<head>'}</code>, juste avant <code>{'</title>'}</code>, ajoutez la balise <code>{'<link>'}</code> pour lier votre feuille de style.
                                <pre className="code-block"><code>{'<link rel="stylesheet" href="style.css">'}</code></pre>
                            </li>
                            <li><strong>Action :</strong> Répétez cette opération pour vos deux autres fichiers, `details.html` et `contact.html`, pour que le style s'applique partout.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Objectif : Définir les styles de base.</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans `style.css`, ajoutez une règle pour le sélecteur `body`. À l'intérieur, définissez une `font-family` (ex: `Arial, sans-serif`), une `background-color` (une couleur de fond très claire, ex: `#f8f9fa`) et une `color` (une couleur de texte sombre, ex: `#333`).</li>
                            <li>Ajoutez la règle `margin: 0;` au `body` pour supprimer les marges par défaut que le navigateur impose.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Objectif : Créer un conteneur principal pour centrer le contenu.</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Pour éviter que votre contenu ne s'étale sur toute la largeur de l'écran sur de grands moniteurs, on va le centrer. Dans `style.css`, créez une classe `.container`. Donnez-lui une largeur maximale (`max-width: 960px;`), et centrez-la horizontalement avec `margin: 0 auto;`.</li>
                             <li>**Action :** Dans vos 3 fichiers HTML, trouvez la balise {`<body>`} et "enveloppez" tout son contenu (du `header` au `footer`) dans une {`<div>`} avec cette classe : {'<div class="container">...</div>'}</li>
                         </ul>
                    </li>
                    <li>
                        <strong>Premier Commit CSS :</strong>
                        <p>Les bases du style sont posées. On sauvegarde cette étape importante.</p>
                        <pre className="code-block">
                            <code>
                                git add . <br />
                                git commit -m "feat: Ajout de la feuille de style et des styles globaux" <br />
                                git push
                            </code>
                        </pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 2 : Mise en Page du Header et de la Navigation",
        description: (
            <>
                <p>On va maintenant utiliser Flexbox pour créer un en-tête et un menu professionnels, la carte de visite de votre site.</p>
                 <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li>
                        <strong>Objectif : Aligner le header.</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans `style.css`, ciblez la balise `header` et transformez-la en conteneur Flexbox en lui ajoutant la propriété `display: flex;`.</li>
                             <li>**Défi :** Complétez la règle CSS ci-dessous en trouvant les bonnes propriétés Flexbox pour que le titre {`<h1>`} soit poussé à gauche et la balise {`<nav>`} à droite, tout en étant centrés verticalement.
                                 <pre className="code-block">
                                    <code>{`header {
    display: flex;
    /* ??? : Quelle propriété pour pousser les éléments aux extrémités ? */
    /* ??? : Quelle propriété pour centrer les éléments verticalement ? */
    padding: 1rem 2rem;
    background-color: white;
}`}
                                    </code>
                                </pre>
                            </li>
                             <li><strong>Astuce :</strong> Utilisez les outils de développement (F12) de votre navigateur pour sélectionner le header et tester en direct différentes valeurs (`center`, `space-between`, `flex-end`...).</li>
                        </ul>
                    </li>
                     <li>
                        <strong>Objectif : Styliser la navigation.</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Ciblez le {`<ul>`} à l'intérieur de la `nav` en y mettant la class "menu". Enlevez les puces avec `list-style: none;`.</li>
                            <li>Utilisez de nouveau `display: flex;` pour aligner les liens horizontalement, et ajoutez un `margin: 0 15px` pour les espacer.</li>
                            <li>Ciblez les liens {(`<a>`)} pour enlever le soulignement avec `text-decoration: none;` et changer leur `color`.</li>
                        </ul>
                    </li>
                     <li>
                        <strong>Deuxième Commit :</strong>
                        <pre className="code-block"><code>git add . <br />
                        git commit -m "feat: Style du header et de la navigation avec Flexbox" <br />
                        git push
                        </code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 3 : Style du Contenu et Finalisation",
        description: (
            <>
                <p>On finalise l'apparence des sections principales pour une lecture agréable.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li>
                        <strong>Objectif : Espacer et styliser les sections.</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Ciblez la balise `section`. Donnez à toutes les sections un `padding` généreux (ex: `2rem 0;`) pour aérer le contenu verticalement.</li>
                            <li>Ajoutez une `border-top` à chaque section pour les séparer visuellement.</li>
                        </ul>
                    </li>
                     <li>
                        <strong>Objectif : Mettre en forme le formulaire de contact.</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Sur la page `contact.html`, ciblez les balises `input` et `textarea`. Pour qu'ils prennent toute la largeur, donnez-leur `width: 100%;`. N'oubliez pas `box-sizing: border-box;` pour que le padding ne les fasse pas déborder.</li>
                             <li>Ajoutez du `padding`, une `border`, et un `margin-bottom` pour les espacer.</li>
                             <li>Stylez le bouton d'envoi pour qu'il soit plus visible (changez son `background-color`, sa `color`, enlevez sa `border` et ajoutez du `padding`).</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Commit Final et Push :</strong>
                        <p>Le style de base de votre site est terminé !</p>
                        <pre className="code-block"><code>git add . <br />
                            git commit -m "feat: Finalisation du style des sections et du formulaire" <br />
                            git push</code></pre>
                        <p>C'est le moment d'activer GitHub Pages pour voir le résultat en ligne !</p>
                    </li>
                </ol>
            </>
        )
    },
     {
        title: "⭐ Finition",
        description: (
            <div>
                <p>Ajoutez un peu d'interactivité : utilisez le sélecteur `:hover` en CSS pour que les liens de votre navigation changent de couleur au survol, et pour que le bouton de votre formulaire s'éclaircisse légèrement. Utilisez la propriété `transition` pour que l'effet soit fluide.</p>
                <p>Continuer à personnaliser votre page ! Plus votre page est belle est remplie de contenu, meilleure sera votre note!</p>
            </div>
        )
    }
];


// Molécule pour un exemple de code
const CodeExample = ({ title, code, language = 'css' }) => (
    <div className="my-6">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <pre className={`mt-2 text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto`}><code className={`language-${language}`}>{code.trim()}</code></pre>
    </div>
);

// Organisme pour expliquer le Box Model
const BoxModelDiagram = () => (
    <div className="my-8 not-prose p-4 flex items-center justify-center font-sans text-center">
        {/* La Marge est l'espace à l'extérieur de la bordure pointillée */}
        <div className="p-5 bg-orange-100" style={{ border: '2px dashed #9ca3af' }}>
            <p className="text-sm font-bold text-orange-500 -mt-10 mb-5">Margin</p>
            
            {/* La Bordure est le trait solide vert */}
            <div className="p-5 bg-blue-100" style={{ border: '4px solid #10b981' }}>
                 <p className="text-sm font-bold text-green-600 -mt-10 mb-5">Border</p>
                 
                {/* Le Padding est l'espace bleu entre la bordure et le contenu */}
                <div className="p-5 bg-blue-100">
                    <p className="text-sm font-bold text-blue-800 -mt-8 mb-2">Padding</p>
                    
                    {/* Le Contenu est la boîte blanche centrale */}
                    <div className="bg-white p-8 shadow-inner">
                        <p className="font-bold">Contenu</p>
                        <p className="text-xs text-gray-600">(texte, image, etc.)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const moduleCSScontent = {
  course : (
    <div className="space-y-12 prose max-w-none">
      
      <section>
        <Heading level={1} className="mb-4">CSS : L'Art de Donner du Style au Web</Heading>
        <p className="text-xl text-gray-600">"Vous avez construit le squelette de votre page avec HTML. Il est maintenant temps de jouer le rôle du décorateur d'intérieur. Le CSS est le langage qui va nous permettre de choisir les couleurs, les polices, les espacements, et de créer des mises en page professionnelles."</p>
      </section>

      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 1 : Qu'est-ce que le CSS ?</Heading>
        <p>Le CSS (Cascading Style Sheets, ou Feuilles de Style en Cascade) est un langage qui décrit la présentation et le style d'un document HTML. Son seul rôle est de gérer l'apparence. On sépare toujours le CSS du HTML pour une raison simple :</p>
        <Card className="bg-green-50 border-green-200">
            <p><strong>La séparation des préoccupations :</strong> Le HTML s'occupe du **contenu et de la structure** (le fond). Le CSS s'occupe de la **présentation** (la forme). Cette séparation rend le code plus propre, plus facile à maintenir et plus flexible.</p>
        </Card>
        
        <div className="mt-8">
            <Heading level={3}>La Syntaxe d'une Règle CSS</Heading>
            <p>Une règle CSS est comme une instruction que l'on donne au navigateur. Elle est toujours composée de trois parties :</p>
            <CodeExample title="Anatomie d'une règle CSS" language="css" code={
`p {
    color: blue;
}`
            } />
            <ul className="list-disc list-inside">
                <li><strong>Le Sélecteur</strong> (<code>p</code>) : Il cible le ou les éléments HTML que l'on veut styliser. Ici, tous les paragraphes.</li>
                <li><strong>La Propriété</strong> (<code>color</code>) : La caractéristique visuelle que l'on veut changer (la couleur du texte, la taille de la police, la marge...).</li>
                <li><strong>La Valeur</strong> (<code>blue</code>) : La valeur que l'on veut donner à la propriété.</li>
            </ul>
        </div>
      </section>

      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 2 : Les Sélecteurs - Cibler avec Précision</Heading>
        <p>Pour styliser votre page, vous devez d'abord dire au CSS quels éléments vous visez. C'est le rôle des sélecteurs.</p>
        <div className="grid md:grid-cols-3 gap-4 not-prose">
            <Card>
                <Heading level={4}>Sélecteur de Balise</Heading>
                <p className="text-sm mt-2">Cible tous les éléments d'un certain type. Simple, mais impacte toute la page.</p>
                <pre className="code-block mt-2"><code>h1 {`{ font-size: 3rem; }`}</code></pre>
            </Card>
             <Card>
                <Heading level={4}>Sélecteur de Classe</Heading>
                <p className="text-sm mt-2">Le plus utilisé. Cible tous les éléments qui ont un attribut <code>class="..."</code>. Réutilisable à l'infini.</p>
                <pre className="code-block mt-2"><code>.button-primary {`{ background-color: blue; }`}</code></pre>
            </Card>
             <Card>
                <Heading level={4}>Sélecteur d'ID</Heading>
                <p className="text-sm mt-2">Cible l'**unique** élément qui a un attribut <code>id="..."</code>. Utile pour des éléments spécifiques comme un header principal.</p>
                <pre className="code-block mt-2"><code>#main-header {`{ padding: 2rem; }`}</code></pre>
            </Card>
        </div>
      </section>
      
       <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 3 : Le Box Model - Chaque Élément est une Boîte</Heading>
        <p>C'est le concept le plus fondamental du CSS. Chaque élément HTML sur votre page est vu par le navigateur comme une boîte rectangulaire. Cette boîte est composée de quatre couches, de l'intérieur vers l'extérieur :</p>
        <BoxModelDiagram />
         <ul className="list-disc list-inside">
            <li><strong>Le Contenu :</strong> Votre texte, votre image.</li>
            <li><strong>Le Padding (marge interne) :</strong> L'espace entre le contenu et la bordure.</li>
            <li><strong>La Bordure (border) :</strong> Le trait qui entoure le padding et le contenu.</li>
            <li><strong>La Marge (margin) :</strong> L'espace à l'extérieur de la boîte, qui la sépare des autres éléments.</li>
        </ul>
      </section>

      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 4 : La Mise en Page avec Flexbox</Heading>
        <p>Oubliez les anciennes techniques compliquées. Pour aligner des éléments, que ce soit horizontalement ou verticalement, Flexbox est l'outil moderne et indispensable.</p>
        <p>Pour l'utiliser, il suffit d'appliquer `display: flex;` sur un conteneur. Tous ses enfants directs deviennent alors des "flex-items".</p>
        <CodeExample title="Les deux propriétés Flexbox les plus importantes" code={
`.container {
    display: flex;
    justify-content: center; /* Gère l'alignement sur l'axe principal (horizontal par défaut) */
    align-items: center;    /* Gère l'alignement sur l'axe secondaire (vertical par défaut) */
}`
            } />
        <p>En changeant les valeurs de `justify-content` (`flex-start`, `flex-end`, `space-between`...) et `align-items` (`flex-start`, `flex-end`...), vous pouvez créer la plupart des mises en page dont vous aurez besoin.</p>
        <p>Pour plus d'informations sur les différentes propriétées de flexbox vous pouvez aller sur : <span className='text-blue-500'><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target='_blank'>CSS TRICKS</a></span></p>
      </section>
    </div>
  ),
  tp: (
  <PracticalWork 
      title={tpTitle}
      objective={tpObjective}
      materials={tpMaterials}
      steps={tpSteps}
    />
  )
}

