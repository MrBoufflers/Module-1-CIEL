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

// Cible par sélecteur complexe
const premierLienNav = document.querySelector('nav ul li a');
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

        <Heading level={3}>Manipuler les Attributs : .setAttribute()</Heading>
        <p>Permet de changer n'importe quel attribut HTML (`src`, `href`, `alt`...).</p>
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

const tpTitle = 'TP : Dynamiser votre Projet "Chef-d\'Œuvre" avec JavaScript';
const tpObjective = 'Utiliser JavaScript et le DOM pour ajouter des fonctionnalités interactives au projet HTML/CSS "chef-d\'œuvre". Maîtriser la sélection d\'éléments, la gestion des événements (clic, submit) et la manipulation des classes CSS.';
const tpMaterials = [
    'Le dossier du TP "mon-chef-d-oeuvre" (avec index.html, details.html, contact.html, style.css).',
    'Un ordinateur avec VS Code et Git installés.',
    'Un navigateur web avec la console (F12) ouverte.',
];

const tpSteps = [
    {
        title: "Phase 1 : Préparation et Premier Événement",
        description: (
            <>
                <p><strong>Objectif :</strong> Lier notre script JavaScript et prouver qu'il communique avec le HTML.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Préparation des Fichiers :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans votre dossier `mon-chef-d-oeuvre`, créez un nouveau fichier : `script.js`.</li>
                            <li>Ouvrez `index.html`.</li>
                            <li><strong>Action Cruciale :</strong> Allez tout en bas du fichier, juste avant la balise de fermeture <code>{'</body>'}</code>, et ajoutez cette ligne :
                                <br />
                                <code>{'<script src="script.js"></script>'}</code>
                            </li>
                            <li><strong>Le "Pourquoi" :</strong> On le place à la fin pour que le navigateur ait fini de lire et de construire l'arbre DOM (le "plan" de la page) *avant* d'exécuter notre script. Si on le met dans le <code>{'<head>'}</code>, le JS s'exécutera avant que le <code>{'<h1>'}</code> n'existe, et `document.querySelector('h1')` retournera `null`.</li>
                            <li>Répétez l'étape 3 pour vos fichiers `details.html` et `contact.html`. Ils utiliseront tous le même fichier `script.js`.</li>
                        </ul>
                    </li>
                    <li><strong>Vérification :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                             <li>Dans `script.js`, écrivez : <code>console.log("Le script est chargé !");</code></li>
                             <li>Ouvrez `index.html` dans votre navigateur, ouvrez la console (F12), et vérifiez que le message s'affiche. Si oui, la liaison fonctionne.</li>
                         </ul>
                    </li>
                    <li><strong>Premier Test d'Interaction :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans `index.html`, donnez un `id` à votre titre principal pour le cibler facilement :
                                <br/>
                                <code>{'<h1 id="titre-principal">'}Projet : [Nom de votre projet]{'</h1>'}</code>
                            </li>
                            <li>Dans `script.js`, écrivez vos 3 étapes (Cibler, Écouter, Manipuler) :
                                <CodeExample title="script.js" code={`
// 1. CIBLER
const titre = document.querySelector('#titre-principal');

// On vérifie s'il existe (pour ne pas créer d'erreur sur les autres pages)
if (titre) {
  // 2. ÉCOUTER
  titre.addEventListener('click', () => {
    // 3. MANIPULER
    console.log("J'ai cliqué sur le titre !");
    titre.textContent = "Titre cliqué !";
  });
}`} />
                            </li>
                             <li><strong>Testez :</strong> Allez sur votre page `index.html` et cliquez sur votre titre. Il doit changer de texte.</li>
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
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Ajouter le Bouton (HTML) :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans `index.html`, `details.html` et `contact.html`, ajoutez un bouton dans votre <code>{'<header>'}</code> (près de la <code>{'<nav>'}</code>). Donnez-lui un `id` unique.
                                <br />
                                <code>{'<button id="theme-toggle">Changer Thème</button>'}</code>
                            </li>
                        </ul>
                    </li>
                    <li><strong>Préparer le Style (CSS) :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                             <li>Ouvrez `style.css` et ajoutez les règles qui s'appliqueront *uniquement* si le <code>{'<body>'}</code> a la classe `.dark-mode`.</li>
                             <li><strong>Le "Pourquoi" :</strong> Le JS va juste ajouter/retirer la classe. C'est le CSS qui décide ce que "dark mode" veut dire. C'est la séparation des rôles.</li>
                             <CodeExample title="style.css (à ajouter à la fin)" code={`
/* ... vos styles existants ... */

body.dark-mode {
  background-color: #2c3e50;
  color: #ecf0f1;
}

body.dark-mode .container {
  background-color: #34495e;
  /* Ajoutez d'autres styles pour le dark mode si nécessaire */
}

body.dark-mode a {
  color: #3498db;
}
                             `} />
                         </ul>
                    </li>
                    <li><strong>Coder l'Interaction (JavaScript) :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Retournez dans `script.js` et ajoutez ce bloc de code :</li>
                            <CodeExample title="script.js" code={`
// --- LOGIQUE DU DARK MODE ---
// 1. CIBLER
const themeButton = document.querySelector('#theme-toggle');

// On vérifie si le bouton existe sur la page actuelle
if (themeButton) {
  // 2. ÉCOUTER
  themeButton.addEventListener('click', () => {
    // 3. MANIPULER
    // On ajoute/retire la classe 'dark-mode' sur le body
    document.body.classList.toggle('dark-mode');
  });
}`} />
                         </ul>
                    </li>
                     <li><strong>Tester et Commiter :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Vérifiez dans votre navigateur que le clic sur le bouton change bien les couleurs.</li>
                             <li>
                                <pre className="code-block"><code>git add . <br />
git commit -m "feat: Implémentation du toggle dark mode" <br />
git push</code></pre>
                            </li>
                        </ul>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 3 : Validation du Formulaire de Contact",
        description: (
             <>
                <p><strong>Objectif :</strong> Maîtriser <code>event.preventDefault()</code>, la lecture des <code>.value</code> et la manipulation du <code>.textContent</code>.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Préparer le HTML (`contact.html`) :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Ouvrez `contact.html`.</li>
                            <li>Assurez-vous que votre formulaire a un `id` : <code>{'<form id="contact-form">'}</code></li>
                            <li>Assurez-vous que vos champs de saisie ont des `id` (ex: `id="email-input"`, `id="message-input"`).</li>
                            <li>Ajoutez un paragraphe vide sous le formulaire pour les messages de retour :
                                <br/>
                                <code>{'<p id="form-message"></p>'}</code>
                            </li>
                        </ul>
                    </li>
                    <li><strong>Coder la Validation (JavaScript) :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans `script.js`, ajoutez ce nouveau bloc de code. On vérifie d'abord si le formulaire existe sur la page actuelle.</li>
                             <CodeExample title="script.js (à ajouter)" code={`
// --- LOGIQUE DU FORMULAIRE DE CONTACT ---
const contactForm = document.querySelector('#contact-form');

// Ce code ne s'exécute QUE si l'élément 'contact-form' est trouvé
if (contactForm) {
  
  // 1. CIBLER (les éléments internes au formulaire)
  const emailInput = document.querySelector('#email-input');
  const messageInput = document.querySelector('#message-input');
  const messageElement = document.querySelector('#form-message');

  // 2. ÉCOUTER l'événement "submit"
  contactForm.addEventListener('submit', (event) => {
    
    // 3. MANIPULER (d'abord, empêcher le rechargement)
    event.preventDefault(); // TRÈS IMPORTANT !
    
    // Récupérer les valeurs des champs
    const email = emailInput.value;
    const message = messageInput.value;

    // Logique de validation
    if (email.includes('@') && message.length >= 10) {
      // Succès
      messageElement.textContent = "Merci ! Votre message a bien été envoyé.";
      messageElement.style.color = "green";
      
      // Vider les champs
      emailInput.value = "";
      messageInput.value = "";
    
    } else {
      // Échec
      messageElement.textContent = "Erreur : email invalide ou message trop court (10 caractères min).";
      messageElement.style.color = "red";
    }
  });
}
                             `} />
                         </ul>
                    </li>
                     <li><strong>Tester et Commiter :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Allez sur `contact.html`. Essayez de soumettre le formulaire vide, avec un email invalide, etc.</li>
                            <li>Vérifiez que les messages s'affichent et que la page ne se recharge pas.</li>
                             <li>
                                <pre className="code-block"><code>git add . <br />
git commit -m "feat: Ajout de la validation du formulaire de contact" <br />
git push</code></pre>
                            </li>
                        </ul>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "⭐ Bonus (Pour les plus rapides)",
        description: (
            <>
                <p><strong>Améliorer le Dark Mode :</strong> Dans l'écouteur d'événement du bouton "Dark Mode", ajoutez une condition `if (document.body.classList.contains('dark-mode'))`... `else`... pour changer le `textContent` du bouton en "Mode Clair" ou "Mode Sombre" en fonction de l'état.</p>
                <p><strong>Effets sur les Projets :</strong> Sur `details.html`, sélectionnez tous les {"<h2>"} des fonctionnalités avec `querySelectorAll`. Utilisez `forEach` pour ajouter un `addEventListener('mouseover')` à chacun, qui change leur `style.color` en bleu, et un `'mouseout'` pour le remettre à la couleur normale.</p>
            </>
        )
    }
];


// --- 3. EXPORT DU MODULE ---

export const moduleJS_DOM = {
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