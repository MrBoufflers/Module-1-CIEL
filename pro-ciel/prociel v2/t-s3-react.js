export const ts3React = {
  meta: {
    id: 'react', sequence: 'S3', niveau: 'terminale',
    title: 'Frameworks modernes : React', icon: 'brand-react', duree: '12 h',
    theme: 'Développement front-end',
    filRouge: "L'API existe (S2). On construit maintenant l'interface qui l'utilise : React, le framework le plus demandé du marché, qui structure le front-end en composants réutilisables.",
    ref: { competences: ['C08', 'C04'], savoirs: ['S3.1', 'S3.2'] },
    cyber: "Ne jamais injecter du HTML brut (dangerouslySetInnerHTML). Valider les données reçues de l'API.",
    evalInfo: { format: 'Contrôle pratique (créer une mini-app React connectée à une API)', duree: '3 h', competence: 'C08 (Application)', ressourcesAutorisees: ['React docs', 'Le cours S3'], note: "Évaluation réalisée en classe." },
  },
  course: [
    { type: 'hero', title: 'React : construire des interfaces modernes', subtitle: "Fini le DOM à la main. React découpe l'interface en composants autonomes et réactifs : tu décris ce que tu veux voir, React s'occupe de mettre à jour l'écran." },
    { type: 'info', variant: 'astuce', title: 'Objectifs', content: "Comprendre les composants, le JSX, les props, le state (useState), les effets (useEffect), et connecter React à une API." },
    { type: 'section', title: 'a. Pourquoi React ?', blocks: [
      { type: 'prose', content: "En S7 (Première), tu manipulais le DOM à la main : `querySelector`, `addEventListener`, `textContent`... Ça marche pour 3 boutons, pas pour une app avec 50 composants interactifs. **React** automatise la mise à jour du DOM : tu décris *l'état* de l'interface, React calcule les changements et les applique." },
      { type: 'info', variant: 'analogie', title: 'Analogie', content: "Le JS vanilla, c'est peindre un tableau à la main. React, c'est donner une photo et dire « reproduis ça » : si la photo change, React repeint uniquement ce qui a changé." },
      { type: 'code', language: 'bash', title: 'Créer un projet React', code: 'npm create vite@latest mon-app -- --template react\ncd mon-app\nnpm install\nnpm run dev' },
    ]},
    { type: 'section', title: 'b. Les composants et le JSX', blocks: [
      { type: 'prose', content: "Un **composant** est une fonction qui retourne du **JSX** (du HTML écrit dans du JS). Chaque composant est un bloc réutilisable de l'interface." },
      { type: 'code', language: 'js', title: 'Un composant simple', code: 'function Carte({ titre, description }) {\n  return (\n    <div className="carte">\n      <h3>{titre}</h3>\n      <p>{description}</p>\n    </div>\n  );\n}\n\n// Utilisation\n<Carte titre="Mon projet" description="Un super projet" />' },
      { type: 'info', variant: 'attention', title: 'JSX \u2260 HTML', content: "`className` au lieu de `class`. `htmlFor` au lieu de `for`. Les expressions JS s'écrivent entre `{}`. Toute balise doit être fermée (`<img />`, `<br />`)." },
    ]},
    { type: 'exercise', title: 'Exercice 1 — Premier composant', body: [
      { type: 'list', ordered: true, items: [
        'Crée un projet React avec Vite. Lance-le.',
        'Dans `App.jsx`, crée un composant `Profil` qui affiche ton nom, ta classe et un hobby dans une carte stylée.',
        'Utilise le composant 3 fois dans `App` avec des props différentes (3 profils d\u2019élèves fictifs).',
      ]},
    ]},
    { type: 'section', title: 'c. Le state : des données qui changent', blocks: [
      { type: 'prose', content: "Le **state** est une valeur qui peut changer dans le temps. Quand elle change, React **re-rend** automatiquement le composant." },
      { type: 'code', language: 'js', title: 'useState', code: 'import { useState } from "react";\n\nfunction Compteur() {\n  const [compte, setCompte] = useState(0);\n\n  return (\n    <div>\n      <p>Compteur : {compte}</p>\n      <button onClick={() => setCompte(compte + 1)}>+1</button>\n    </div>\n  );\n}' },
      { type: 'info', variant: 'definition', title: 'La règle du state', content: "`useState(valeurInitiale)` retourne un tableau : `[valeur, fonctionPourLaModifier]`. On ne modifie **jamais** la valeur directement (`compte = 5` est interdit). On utilise **toujours** le setter (`setCompte(5)`)." },
    ]},
    { type: 'exercise', title: 'Exercice 2 — Un compteur interactif', body: [
      { type: 'list', ordered: true, items: [
        'Crée un composant `Compteur` avec +1, -1 et remise à zéro.',
        'Ajoute un affichage conditionnel : si le compteur est négatif, le texte est rouge ; positif, vert ; zéro, neutre.',
        'Bonus : ajoute un `<input>` pour définir le pas d\u2019incrémentation.',
      ]},
    ]},
    { type: 'section', title: 'd. Les listes et le rendu conditionnel', blocks: [
      { type: 'code', language: 'js', title: 'Afficher une liste', code: 'function ListeEleves({ eleves }) {\n  return (\n    <ul>\n      {eleves.map((e, i) => (\n        <li key={i}>{e.nom} — {e.moyenne}</li>\n      ))}\n    </ul>\n  );\n}' },
      { type: 'code', language: 'js', title: 'Rendu conditionnel', code: '// Avec un ternaire\n{estConnecte ? <p>Bienvenue !</p> : <p>Connecte-toi</p>}\n\n// Avec &&\n{erreur && <p className="erreur">{erreur}</p>}' },
    ]},
    { type: 'exercise', title: 'Exercice 3 — Liste dynamique', body: [
      { type: 'list', ordered: true, items: [
        'Crée un state `taches` (tableau de strings) et un `<input>` + bouton pour en ajouter.',
        'Affiche la liste des tâches avec `.map()`. Chaque tâche a un bouton « Supprimer ».',
        'Ajoute un compteur « X tâches restantes » qui se met à jour automatiquement.',
      ]},
    ]},
    { type: 'section', title: 'e. useEffect : les effets de bord', blocks: [
      { type: 'prose', content: "`useEffect` exécute du code **après le rendu** : appels API, timers, écoute d'événements..." },
      { type: 'code', language: 'js', title: 'useEffect pour charger des données', code: 'import { useState, useEffect } from "react";\n\nfunction App() {\n  const [data, setData] = useState([]);\n\n  useEffect(() => {\n    fetch("http://localhost:3000/utilisateurs")\n      .then(res => res.json())\n      .then(json => setData(json));\n  }, []); // [] = exécuté une seule fois au montage\n\n  return <ul>{data.map(u => <li key={u.id}>{u.nom}</li>)}</ul>;\n}' },
      { type: 'info', variant: 'definition', title: 'Le tableau de dépendances', content: "`useEffect(fn, [])` : exécuté **une seule fois** (au montage). `useEffect(fn, [x])` : ré-exécuté **quand x change**. `useEffect(fn)` (sans tableau) : ré-exécuté **à chaque rendu** (rarement voulu)." },
    ]},
    { type: 'exercise', title: 'Exercice 4 — Connecter React à l\u2019API', body: [
      { type: 'list', ordered: true, items: [
        'Lance ton serveur Express de T-S2 (`node server.js`).',
        'Dans React, utilise `useEffect` + `fetch` pour charger la liste de tes données depuis l\u2019API.',
        'Affiche-les dans une liste. Ajoute un état `chargement` (true/false) pour afficher « Chargement... » pendant le fetch.',
        'Bonus : ajoute un formulaire qui envoie un POST à l\u2019API pour créer un nouvel élément, puis recharge la liste.',
      ]},
    ]},
    { type: 'section', title: 'f. Organiser son app en composants', blocks: [
      { type: 'prose', content: "La force de React : découper l'interface en **composants réutilisables**. Un fichier par composant, dans un dossier `components/`. Chaque composant fait **une seule chose**." },
      { type: 'list', ordered: false, items: [
        '`Header.jsx` : l\u2019en-tête du site.',
        '`Carte.jsx` : une carte réutilisable (produit, utilisateur...).',
        '`Formulaire.jsx` : le formulaire de saisie.',
        '`App.jsx` : le composant racine qui assemble les autres.',
      ]},
    ]},
    { type: 'exercise', title: 'Exercice 5 — Refactoring en composants', body: [
      { type: 'list', ordered: true, items: [
        'Prends le code de l\u2019exercice 4 et découpe-le en composants séparés : `Header`, `ListeItems`, `FormulaireAjout`.',
        'Chaque composant dans son propre fichier dans `src/components/`.',
        'Passe les données et les fonctions via les **props**.',
      ]},
    ]},
    { type: 'section', title: 'Point cybersécurité', blocks: [
      { type: 'info', variant: 'attention', title: 'dangerouslySetInnerHTML', content: "React échappe automatiquement le HTML pour empêcher les injections XSS. Si tu utilises `dangerouslySetInnerHTML`, tu désactives cette protection. **Ne l'utilise jamais** avec des données venant de l'utilisateur." },
    ]},
    { type: 'section', title: 'Mémo', blocks: [
      { type: 'list', ordered: false, items: [
        'Composant = fonction qui retourne du JSX. Un fichier par composant.',
        'Props = données passées du parent à l\u2019enfant (lecture seule).',
        'State (`useState`) = données locales qui changent → re-rendu automatique.',
        '`useEffect` = exécuter du code après le rendu (API, timers).',
        'Listes : `.map()` avec une `key` unique. Conditionnel : `? :` ou `&&`.',
        'Toujours utiliser le setter du state, jamais modifier directement.',
      ]},
    ]},
  ],
  tp: {
    kind: 'digital',
    title: 'Le front-end React du projet annuel',
    mission: "Construire l'interface React de ton projet, connectée à l'API Express de S2.",
    prerequis: ['Cours T-S3 suivi', 'API T-S2 fonctionnelle', 'React + Vite installés'],
    criteres: ['Au moins 3 composants séparés', 'Données chargées depuis l\u2019API', 'State et props utilisés correctement', 'Interface lisible et organisée', 'Commits réguliers'],
    bonus: "Ajouter React Router pour naviguer entre plusieurs pages (npm install react-router-dom).",
    steps: [
      { title: 'Structure et composants de base', body: [
        { type: 'list', ordered: true, items: [
          'Crée le projet React avec Vite dans un dossier `front/` de ton repo.',
          'Crée les composants de base : `Header`, `Footer`, et un composant principal pour ton contenu.',
          'Style minimal avec un fichier CSS.',
        ]},
      ], done: 'L\u2019app React démarre et affiche les composants de base.', validation: { commit: 'git commit -m "feat: structure React et composants de base"' } },
      { title: 'Connexion à l\u2019API', body: [
        { type: 'list', ordered: true, items: [
          'Avec `useEffect` + `fetch`, charge les données depuis ton API Express.',
          'Affiche-les dans un composant liste.',
          'Gère l\u2019état de chargement et les erreurs.',
        ]},
      ], done: 'Les données de l\u2019API s\u2019affichent dans React.', validation: { commit: 'git commit -m "feat: connexion API et affichage données"' } },
      { title: 'Formulaire et CRUD front-end', body: [
        { type: 'list', ordered: true, items: [
          'Crée un composant formulaire pour ajouter un nouvel élément (POST vers l\u2019API).',
          'Ajoute un bouton de suppression sur chaque élément (DELETE vers l\u2019API).',
          'Après chaque action, recharge la liste pour refléter les changements.',
        ]},
      ], done: 'L\u2019interface permet de lire, créer et supprimer via l\u2019API.', validation: { commit: 'git commit -m "feat: CRUD front-end complet" && git push' } },
    ],
  },
};
