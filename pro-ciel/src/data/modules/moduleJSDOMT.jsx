import React from 'react';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';
import PracticalWork from '../../components/organisms/PraticalWork';

// Molécule pour un exemple de code JS
const CodeExample = ({ title, code, language = 'javascript' }) => (
    <div className="my-6 not-prose">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <pre className={`mt-2 text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto`}><code className={`language-${language}`}>{code.trim()}</code></pre>
    </div>
);

// --- 1. CONTENU DU COURS ---

const courseContent = (
    <div className="space-y-12 prose prose-lg max-w-none prose-headings:font-bold prose-h2:border-b prose-h2:pb-2">
      
      <section>
        <Heading level={1} className="mb-4">JavaScript : Rendre vos Pages Interactives avec le DOM</Heading>
        <Heading level={2}>Introduction : Le "Système Nerveux" du Web</Heading>
        <p>Jusqu'à présent, nous avons construit un "corps" pour notre site web :</p>
        <ul className="list-disc list-inside">
            <li><strong>HTML :</strong> Le squelette, la structure du contenu.</li>
            <li><strong>CSS :</strong> L'apparence, l'habillage, le style.</li>
        </ul>
        <p>Aujourd'hui, nous allons lui greffer un <strong>système nerveux</strong> : le <strong>JavaScript</strong>.</p>
        <p>Une page HTML/CSS est "morte", c'est une simple image statique. Le JavaScript est le langage qui va la rendre vivante et interactive. C'est lui qui va :</p>
        <ul className="list-disc list-inside">
            <li>Réagir quand l'utilisateur <strong>clique</strong> sur un bouton.</li>
            <li><strong>Vérifier</strong> si un formulaire est correct avant de l'envoyer.</li>
            <li><strong>Afficher</strong> ou <strong>cacher</strong> des éléments (comme un menu "burger").</li>
            <li><strong>Changer</strong> le contenu ou le style de la page dynamiquement.</li>
        </ul>
        <p>Pour faire tout cela, JavaScript a besoin d'un "plan" de la page HTML à manipuler. Ce plan, c'est le <strong>DOM</strong>.</p>
      </section>

      <section>
        <Heading level={2} id="dom-definition">Section 1 : Qu'est-ce que le DOM ? (Le "Plan" de la Page)</Heading>
        <p><strong>Définition :</strong> DOM signifie <strong>Document Object Model</strong>.</p>
        <p><strong>Le "Pourquoi" (La Leçon) :</strong> Quand votre navigateur lit votre fichier <code>index.html</code>, il ne le garde pas sous forme de texte. Il le "traduit" en un objet en mémoire, une structure de données vivante. <strong>Cet objet, c'est le DOM.</strong></p>
        
        <Card className="bg-blue-50 border-blue-200 not-prose">
            <Heading level={4} className="!text-blue-800 !mt-0">L'Analogie Fondamentale : L'Arbre Généalogique</Heading>
            <p>Le DOM représente votre page HTML comme un arbre généalogique.</p>
            <ul className="list-disc list-inside text-sm">
                <li>La balise <code>{'<html>'}</code> est l'ancêtre commun.</li>
                <li><code>{'<head>'}</code> et <code>{'<body>'}</code> sont ses enfants directs.</li>
                <li><code>{'<body>'}</code> est le parent de votre <code>{'<header>'}</code>, <code>{'<main>'}</code>, et <code>{'<footer>'}</code>.</li>
                <li>Votre <code>{'<nav>'}</code> est un enfant du <code>{'<header>'}</code>, et le <code>{'<ul>'}</code> est un enfant de la <code>{'<nav>'}</code>.</li>
                <li>Chaque balise est un <strong>nœud</strong> (un "membre de la famille").</li>
            </ul>
        </Card>

        <p className="mt-4"><strong>La Règle d'Or :</strong> Votre code JavaScript ne modifie <strong>jamais</strong> votre fichier <code>index.html</code>. Il modifie <strong>le DOM</strong>, cet arbre qui vit dans le navigateur. Le navigateur, en retour, met à jour ce qu'il affiche à l'écran pour refléter l'état de l'arbre.</p>
      </section>

      <section>
        <Heading level={2} id="dom-process">Section 2 : Le Processus en 3 Étapes (Notre Plan de Bataille)</Heading>
        <p>Toute interaction JavaScript/DOM, de la plus simple à la plus complexe, suit toujours ces 3 étapes :</p>
        <ol className="list-decimal list-inside font-semibold">
            <li><strong>CIBLER :</strong> "Trouver" l'élément HTML avec lequel on veut interagir (un bouton, un titre...).</li>
            <li><strong>ÉCOUTER :</strong> "Attendre" que l'utilisateur fasse une action sur cet élément (un clic, un survol...).</li>
            <li><strong>MANIPULER :</strong> "Agir" en modifiant le DOM (changer un texte, ajouter une classe CSS...).</li>
        </ol>
      </section>

      <section>
        <Heading level={2} id="dom-cibler">Section 3 : Étape 1 - "CIBLER" les Éléments du DOM</Heading>
        <p>Pour "trouver" un nœud dans l'arbre DOM, on utilise l'objet global <code>document</code> (qui représente toute la page) et ses méthodes de sélection.</p>
        
        <Heading level={3}>document.querySelector('sélecteurCSS')</Heading>
        <p>C'est la méthode la plus moderne et la plus polyvalente. Elle prend en paramètre <strong>n'importe quel sélecteur CSS</strong> (exactement comme ceux que vous écrivez dans votre fichier <code>style.css</code>) et retourne le <strong>premier</strong> élément qu'elle trouve.</p>
        <CodeExample title="Exemples de querySelector" code={`
// Cible par balise
const premierParagraphe = document.querySelector('p');

// Cible par ID (le plus précis)
const titrePrincipal = document.querySelector('#main-title');

// Cible par classe
const boutonPrincipal = document.querySelector('.btn-primary');
        `} />

        <Heading level={3}>document.querySelectorAll('sélecteurCSS')</Heading>
        <p>La même chose, mais au pluriel. Elle retourne <strong>TOUS</strong> les éléments qui correspondent au sélecteur, sous forme d'une <code>NodeList</code> (qui ressemble à un tableau).</p>
        <CodeExample title="Exemple de querySelectorAll" code={`
const tousLesTitresH2 = document.querySelectorAll('h2');

// On la parcourt avec forEach pour agir sur chaque élément
tousLesTitresH2.forEach(titre => {
  console.log(titre.textContent); // Affiche le texte de chaque h2
});
        `} />
      </section>

      <section>
        <Heading level={2} id="dom-ecouter">Section 4 : Étape 2 - "ÉCOUTER" les Événements</Heading>
        <p>Maintenant qu'on a stocké nos éléments dans des constantes, on doit attendre que l'utilisateur agisse. C'est le rôle des "écouteurs d'événements".</p>
        <Heading level={3}>element.addEventListener()</Heading>
        <p>C'est la méthode qui attache une "oreille" à un élément. Sa syntaxe est : <code>element.addEventListener('nom-de-l-evenement', fonctionAExecuter);</code></p>
        <p>Le 2ème paramètre, <code>fonctionAExecuter</code>, est une <strong>fonction de rappel (callback)</strong>. C'est une fonction que vous donnez au navigateur en lui disant : "Tiens, garde ce bloc de code. Le jour où l'utilisateur clique, c'est TOI qui l'exécuteras." On utilise presque toujours une fonction fléchée pour ça.</p>
        <CodeExample title="Exemple d'écouteur d'événement" code={`
const monBouton = document.querySelector('#mon-bouton');

monBouton.addEventListener('click', () => {
  // Ce code ne s'exécute QUE si l'utilisateur clique.
  console.log('Bouton cliqué !');
});
        `} />
        <p><strong>Événements Courants :</strong></p>
        <ul className="list-disc list-inside">
            <li><code>'click'</code> : Clic de souris (le plus courant).</li>
            <li><code>'mouseover'</code> : Quand la souris entre sur l'élément.</li>
            <li><code>'mouseout'</code> : Quand la souris sort de l'élément.</li>
            <li><code>'submit'</code> : Quand on soumet un formulaire.</li>
        </ul>
      </section>

      <section>
        <Heading level={2} id="dom-manipuler">Section 5 : Étape 3 - "MANIPULER" le DOM</Heading>
        <p>OK, l'utilisateur a cliqué. Notre fonction de rappel s'exécute. Qu'est-ce qu'on peut faire ?</p>
        
        <Heading level={3}>Manipuler le Contenu Textuel : .textContent</Heading>
        <p>Permet de lire ou de <strong>modifier</strong> le texte brut à l'intérieur d'un élément.</p>
        <CodeExample title="Changer un texte" code={`titrePrincipal.textContent = "Nouveau Titre !";`} />

        <Heading level={3}>Manipuler les Classes CSS : .classList (LA MEILLEURE PRATIQUE)</Heading>
        <p>On ne doit <strong>jamais</strong> modifier le style directement en JS (ex: <code>element.style.color = 'red'</code>). C'est sale. La bonne pratique est de garder tout le style dans le <code>.css</code> et de n'utiliser le JS que pour <strong>ajouter ou supprimer des classes</strong>.</p>
        <Card className="bg-green-50 border-green-200 not-prose">
            <p><strong>Les méthodes magiques de <code>.classList</code> :</strong></p>
            <ul className="list-disc list-inside text-sm">
                <li><code>element.classList.add('ma-classe')</code> : Ajoute la classe.</li>
                <li><code>element.classList.remove('ma-classe')</code> : Supprime la classe.</li>
                <li><code>element.classList.toggle('ma-classe')</code> : **Le plus utile !** Ajoute si absente, supprime si présente.</li>
                <li><code>element.classList.contains('ma-classe')</code> : Vérifie si la classe est présente (retourne `true` ou `false`).</li>
            </ul>
        </Card>
        <CodeExample title="Exemple de workflow pour un Dark Mode" code={`
// CSS:
// body.dark-mode { background-color: #333; color: white; }

// JS:
document.body.classList.toggle('dark-mode');
        `} />

        <Heading level={3}>Manipuler les Attributs : .setAttribute() / .getAttribute()</Heading>
        <p>Permet de changer ou de lire n'importe quel attribut HTML (`src`, `href`, `alt`...).</p>
        <CodeExample title="Changer une image" code={`
const monImage = document.querySelector('#logo');
monImage.setAttribute('src', 'nouveau-logo.png');
monImage.setAttribute('alt', 'Description du nouveau logo');
        `} />

        <Heading level={3}>Manipuler les Valeurs de Formulaire : .value</Heading>
        <p>Pour les balises <code>{'<input>'}</code>, <code>{'<textarea>'}</code> et <code>{'<select>'}</code>, <code>.value</code> permet de <strong>lire</strong> ce que l'utilisateur a tapé.</p>
        <CodeExample title="Lire la valeur d'un champ" code={`const email = document.querySelector('#email-input').value;`} />

        <Heading level={3}>L'Outil Indispensable : event.preventDefault()</Heading>
        <p>Quand on soumet un formulaire, le navigateur <strong>recharge</strong> la page. C'est le comportement par défaut. <code>event.preventDefault()</code> est une ligne de code qu'on place au tout début d'un écouteur d'événement `submit` pour dire au navigateur : **"Stop ! Ne recharge pas la page. C'est mon code JS qui prend le contrôle."**</p>
      </section>
    </div>
);

// --- 2. CONTENU DU TP ---

const tpTitle = 'TP : Dynamiser votre Portfolio "One-Page"';
const tpObjective = 'Mettre en pratique les concepts du DOM pour rendre interactif le portfolio "one-page" réalisé en HTML/CSS, en forçant les allers-retours entre le cours et le projet.';
const tpMaterials = [
    'Le dossier du TP "mon-portfolio" (avec index.html, style.css).',
    'Un ordinateur avec VS Code et Git installés.',
    'Un navigateur web avec la console (F12) ouverte.',
];

const tpSteps = [
    {
        title: "Phase 1 : Préparation et Premier Événement (",
        description: (
            <>
                <p><strong>Objectif :</strong> Lier notre script JavaScript et prouver qu'il communique avec le HTML.</p>
                
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    
                     <li><strong>Liaison des fichiers :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Allez dans votre fichier index.html. Juste avant la balise de fermeture <code>{'</body>'}</code>, ajoutez la ligne <code>{'<script src="script.js"></script>'}</code>.</li>
                        </ul>
                        <strong>Le "Pourquoi" :</strong> On place le script à la fin du body pour s'assurer que toute la page HTML est chargée avant que le JavaScript n'essaie de s'exécuter. C'est crucial pour le prochain TP où nous manipulerons le DOM.
            
             
                    </li>
                    <li><strong>Vérification :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Installer l'extension "Live Server".</li>
                            <li>Cliquez droit sur `index.html` et sélectionnez "Open with Live Server". Ou cliquez sur le bouton "Go Live" en bas à droite de VS Code.</li>
                            <li>Dans `script.js`, écrivez un <code>console.log("Script chargé !");</code>. Ouvrez votre page dans le navigateur et vérifiez que le message s'affiche dans la console (F12).</li>
                         </ul>
                    </li>
                    <li><strong>Défi - Rendre le titre cliquable :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Assurez-vous que votre {"`<h1>`"} principal a un `id` (ex: `id="titre-principal"`).</li>
                            <li>Dans `script.js`, suivez le "Processus en 3 Étapes" (vu en **Section 2** du cours) :</li>
                            <li>**1. Cibler :** Créez une constante `titre` qui sélectionne votre `h1` grâce à son `id`. (Relisez la **Section 3** du cours sur `querySelector`).</li>
                            <li>**2. Écouter :** Ajoutez un `addEventListener` à votre constante `titre` pour écouter l'événement `'click'`. (Relisez la **Section 4**).</li>
                            <li>**3. Manipuler :** Dans la fonction fléchée de l'écouteur, changez le `textContent` du titre en "Vous avez cliqué sur le titre !". (Relisez la **Section 5**).</li>
                         </ul>
                    </li>
                     <li><strong>Commit Git :</strong>
                        <pre className="code-block"><code>git add . <br />
git commit -m "feat: Ajout de script.js et première interaction DOM" <br />
git push</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 2 : Fonctionnalité \"Mode Sombre\" (Dark Mode)",
        description: (
             <>
                <p><strong>Objectif :</strong> Maîtriser <code>classList.toggle()</code> pour changer le style de toute la page.</p>
                <p>Pour comprendre et bien utiliser le CSS, il y a des notions de CSS avancées à comprendre. Vous devez aller dans le module CSS avancé et lire le cours!</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Préparation HTML & CSS :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans votre `index.html` (dans le header), ajoutez un bouton : <code>{'<button id="theme-toggle">Mode Sombre</button>'}</code>.</li>
                            <li>Dans `style.css`, ajoutez les règles de style pour le mode sombre. Le JS se contentera d'ajouter la classe, c'est le CSS qui fait le travail de style.
                             <CodeExample title="style.css (à ajouter à la fin)" code={`
body.dark-mode {
  background-color: #2c3e50;
  color: #ecf0f1;
}

body.dark-mode .card {
  background-color: #34495e;
  border-color: #555;
}
                             `} />
                             </li>
                        </ul>
                    </li>
                    <li><strong>Défi - Coder l'interrupteur :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans `script.js`, suivez à nouveau le processus en 3 étapes :</li>
                            <li>**1. Cibler :** Créez une constante `themeButton` qui cible votre bouton grâce à son `id`.</li>
                            <li>**2. Écouter :** Ajoutez un `addEventListener` `'click'` sur ce bouton.</li>
                            <li>**3. Manipuler :** Dans le callback, vous devez cibler `document.body`. Quelle méthode de `classList` (vue en **Section 5**) permet de "basculer" (ajouter si absente, retirer si présente) la classe `dark-mode` en une seule ligne ?</li>
                         </ul>
                    </li>
                     <li><strong>Defi - Changement de texte dynamiquement</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans le même `addEventListener`, ajoutez une condition `if...else`.</li>
                            <li>Utilisez `document.body.classList.contains('dark-mode')` pour vérifier si le mode sombre est *maintenant* activé.</li>
                            <li>Si oui, changez le `textContent` du bouton en "Mode Clair".</li>
                            <li>Sinon, remettez-le en "Mode Sombre".</li>
                         </ul>
                    </li>
                     <li><strong>Commit :</strong>
                        <pre className="code-block"><code>git add . <br />
git commit -m "feat: Implémentation du toggle dark mode" <br />
git push</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 3 : Défilement Fluide (Smooth Scroll)",
        description: (
             <>
                <p><strong>Objectif :</strong> Rendre la navigation "one-page" fluide, en s'entraînant à intercepter un événement par défaut.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Le Problème :</strong> Quand vous cliquez sur vos liens de navigation (`#projets`, `#contact`), la page "saute" brutalement. Nous voulons qu'elle défile fluidement.</li>
                    <li><strong>Défi - Coder le "Smooth Scroll" :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>**1. Cibler :** Sélectionnez **TOUS** les liens de votre navigation. (Relisez la **Section 3** sur `querySelectorAll`).</li>
                            <li>**2. Écouter (en boucle) :** Puisque vous avez une `NodeList` (un tableau) de liens, vous devez utiliser `forEach` pour attacher un `addEventListener('click', ...)` à **chacun** d'entre eux.</li>
                            <li>**3. Manipuler (dans le callback) :**</li>
                            <li>La **toute première ligne** du callback doit être `event.preventDefault();`. (Pourquoi ? Relisez la **Section 5**).</li>
                            <li>Récupérez la cible du lien (l'attribut `href`, qui vaut `#contact` par exemple). (Indice : `const href = lien.getAttribute('href');` - voir **Section 5**).</li>
                            <li>Ciblez l'élément de la section correspondante : `const section = document.querySelector(href);`</li>
                            <li>Demandez au navigateur de défiler jusqu'à cet élément : `section.scrollIntoView({" behavior: 'smooth' "});`</li>
                        </ul>
                    </li>
                     <li><strong>Tester et Commiter :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Vérifiez que tous vos liens de navigation provoquent un défilement fluide.</li>
                           
                                
                          
                        </ul>
                    </li>
                </ol>
                <pre className="code-block"><code>git add . <br />
git commit -m "feat: Ajout du smooth scroll en JS" <br />
git push</code></pre>
            </>
        )
    },
    {
        title: "⭐ Bonus (Validation du Formulaire)",
        description: (
            <>
                <p>Reprenez le code de validation de formulaire de la page `contact.html` (du TP des Premières) et adaptez-le pour votre formulaire de portfolio. Les étapes sont les mêmes :</p>
                <ol className="list-decimal list-inside">
                    <li>Cibler le formulaire (<code>querySelector</code>) et écouter l'événement <code>'submit'</code>.</li>
                    <li>Empêcher le rechargement (<code>event.preventDefault()</code>).</li>
                    <li>Cibler les champs (`input`, `textarea`) et lire leur <code>.value</code>.</li>
                    <li>Valider les données (ex: email contient `@`, message a une <code>.length</code> min).</li>
                    <li>Afficher un message de succès ou d'erreur en modifiant le <code>.textContent</code> d'un paragraphe vide.</li>
                </ol>
            </>
        )
    }
];


// --- 3. EXPORT DU MODULE ---

export const moduleJS_DOM_Terminale = {
  course: courseContent,
  tp: (
    <PracticalWork 
      title={tpTitle}
      objective={tpObjective}
      materials={tpMaterials}
      steps={tpSteps}
    />
  )
};