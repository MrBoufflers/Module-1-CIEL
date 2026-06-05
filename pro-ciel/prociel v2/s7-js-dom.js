// =============================================================================
// Séquence S7 — JavaScript & la page web : le DOM
// Niveau : Première · Durée : 6 h (3 h cours+exos · 1,5 h TP · 1,5 h contrôle)
// 5 exercices intégrés au cours. TP digital (GitHub). Éval pratique sur poste.
// Fond repris de moduleJSDOM.jsx (V1) : arbre DOM, 3 étapes, dark mode, formulaire.
// =============================================================================

export const s7JsDom = {
  meta: {
    id: 'js-dom',
    sequence: 'S7',
    niveau: 'premiere',
    title: 'JavaScript & la page web : le DOM',
    icon: 'click',
    duree: '6 h',
    theme: 'Développement web',
    filRouge:
      "Tu connais les bases de JS (S6). Maintenant on le branche sur la page : quand " +
      "l'utilisateur clique, la page réagit. Ton site statique devient interactif.",
    ref: { competences: ['C08', 'C04'], savoirs: ['S3.1', 'S3.2'] },
    cyber: "Ne jamais faire confiance aux entrées utilisateur. Validation côté client \u2260 sécurité.",
    evalInfo: {
      format: 'Contrôle pratique sur poste (coder une fonctionnalité JS/DOM)',
      duree: '1 h 30',
      competence: 'C08 (Application)',
      ressourcesAutorisees: ['MDN Web Docs', 'Le cours S7'],
      note: "Évaluation réalisée en classe — aucun sujet n'est publié sur le site.",
    },
  },

  course: [
    {
      type: 'hero',
      title: 'JavaScript & la page web : le DOM',
      subtitle: "Le JS que tu connais ne touchait pas à la page. Maintenant, on lui greffe un système nerveux : il voit, écoute et modifie tout.",
    },
    {
      type: 'info', variant: 'astuce', title: 'Objectifs',
      content:
        "Comprendre ce qu'est le DOM, sélectionner des éléments de la page, écouter des " +
        "événements (clic, saisie...), modifier la page dynamiquement, et valider un formulaire " +
        "côté client.",
    },

    // ===== PARTIE 1 : QU'EST-CE QUE LE DOM =====
    {
      type: 'section', title: "a. Le DOM : le plan vivant de la page",
      blocks: [
        { type: 'prose', content:
          "Quand le navigateur lit ton fichier HTML, il ne le garde pas sous forme de texte. " +
          "Il le **traduit en un objet en mémoire**, une structure de données vivante qu'il " +
          "peut manipuler. Cet objet, c'est le **DOM** (Document Object Model)." },
        { type: 'info', variant: 'analogie', title: 'Analogie — L\u2019arbre généalogique',
          content:
            "Le DOM représente ta page comme un arbre. `<html>` est l'ancêtre. `<head>` et " +
            "`<body>` sont ses enfants. `<body>` est le parent de `<header>`, `<main>`, " +
            "`<footer>`. Chaque balise est un **noeud** de l'arbre. JavaScript peut parcourir " +
            "cet arbre, trouver n'importe quel noeud, et le modifier." },
        { type: 'info', variant: 'attention', title: 'La règle d\u2019or',
          content:
            "Ton JavaScript ne modifie **jamais** ton fichier `index.html`. Il modifie le **DOM** " +
            "(l'arbre en mémoire). Le navigateur met à jour l'affichage pour refléter les " +
            "changements du DOM. C'est pour ça que tes modifications disparaissent quand tu " +
            "recharges la page : le DOM est recréé à partir du fichier HTML original." },
      ],
    },

    // ===== PARTIE 2 : SÉLECTIONNER =====
    {
      type: 'section', title: "b. Étape 1 — Sélectionner un élément",
      blocks: [
        { type: 'prose', content:
          "Avant de modifier quoi que ce soit, il faut **attraper** l'élément qu'on veut " +
          "manipuler. JavaScript offre plusieurs méthodes :" },
        { type: 'code', language: 'js', title: 'Les méthodes de sélection',
          code:
            '// Par ID (un seul élément)\n' +
            'const titre = document.getElementById("titre-principal");\n\n' +
            '// Par sélecteur CSS (le premier trouvé)\n' +
            'const premierBouton = document.querySelector(".btn");\n\n' +
            '// Par sélecteur CSS (tous les éléments correspondants)\n' +
            'const tousLesBoutons = document.querySelectorAll(".btn");' },
        { type: 'info', variant: 'astuce', title: 'querySelector = le couteau suisse',
          content:
            "`querySelector` accepte n'importe quel sélecteur CSS : `.classe`, `#id`, " +
            "`nav a`, `input[type='email']`... C'est la méthode la plus polyvalente. " +
            "`querySelectorAll` retourne **tous** les éléments qui correspondent (une NodeList, " +
            "qu'on peut parcourir avec une boucle)." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 1 — Sélectionner des éléments',
      body: [
        { type: 'prose', content:
          'Ouvre une de tes pages HTML du chef-d\u2019oeuvre (S4) dans le navigateur avec Live ' +
          'Server. Ouvre la console (F12) et tape directement dedans :' },
        { type: 'list', ordered: true, items: [
          '`document.querySelector("h1")` — observe ce qui s\u2019affiche. Survole le résultat : l\u2019élément est mis en surbrillance sur la page.',
          '`document.querySelectorAll("p")` — combien de paragraphes sont trouvés ?',
          '`document.querySelector("nav a")` — sélectionne le premier lien du menu.',
          '`document.querySelector("footer").textContent` — affiche le texte du footer.',
          'Ajoute un `id="hero"` à ton `<h1>` dans le HTML, recharge, puis tape `document.getElementById("hero")` — vérifie que ça fonctionne.',
        ]},
      ],
    },

    // ===== PARTIE 3 : ÉCOUTER =====
    {
      type: 'section', title: "c. Étape 2 — Écouter un événement",
      blocks: [
        { type: 'prose', content:
          "Un **événement**, c'est quelque chose qui se passe : l'utilisateur **clique**, " +
          "**survole**, **tape** du texte, **envoie** un formulaire, **redimensionne** la " +
          "fenêtre... JavaScript peut **écouter** ces événements et réagir." },
        { type: 'code', language: 'js', title: 'addEventListener',
          code:
            'const bouton = document.querySelector("#mon-bouton");\n\n' +
            '// Quand le bouton est cliqué, exécute cette fonction\n' +
            'bouton.addEventListener("click", function() {\n' +
            '  console.log("Bouton cliqué !");\n' +
            '});' },
        { type: 'prose', content: "Les **événements les plus courants** :" },
        { type: 'table', headers: ['Événement', 'Se déclenche quand...', 'Exemple d\u2019usage'],
          rows: [
            ['click', 'L\u2019utilisateur clique', 'Bouton, lien, carte'],
            ['submit', 'Un formulaire est envoyé', 'Validation avant envoi'],
            ['input', 'L\u2019utilisateur tape dans un champ', 'Recherche en temps réel'],
            ['mouseover / mouseout', 'La souris entre / sort d\u2019un élément', 'Effet de survol'],
            ['keydown', 'Une touche du clavier est pressée', 'Raccourci clavier'],
          ] },
        { type: 'info', variant: 'definition', title: 'La logique addEventListener',
          content:
            "Le schéma est toujours le même : `element.addEventListener(\"événement\", fonctionÀExécuter)`. " +
            "On sélectionne d'abord, on écoute ensuite. La fonction passée en 2e argument s'appelle un " +
            "**callback** : elle est « rappelée » par le navigateur quand l'événement survient." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 2 — Réagir au clic',
      body: [
        { type: 'prose', content: 'Dans un nouveau fichier `exo-dom.html` + `exo-dom.js` :' },
        { type: 'list', ordered: true, items: [
          'Dans le HTML : crée un `<h1 id="titre">Clique sur le bouton</h1>` et un `<button id="btn">Change le titre</button>`.',
          'Dans le JS : sélectionne le bouton et le titre.',
          'Ajoute un `addEventListener("click", ...)` sur le bouton qui change le `textContent` du titre en "Bien joué !".',
          'Teste : clique sur le bouton, le titre doit changer.',
          'Bonus : à chaque clic, alterne entre "Clique sur le bouton" et "Bien joué !" (astuce : un `if` sur le contenu actuel).',
        ]},
      ],
    },

    // ===== PARTIE 4 : RÉAGIR (MODIFIER) =====
    {
      type: 'section', title: "d. Étape 3 — Modifier la page",
      blocks: [
        { type: 'prose', content: "Une fois l'événement capté, on modifie le DOM. Les outils principaux :" },
        { type: 'code', language: 'js', title: 'Modifier le contenu et le style',
          code:
            '// Changer le texte\n' +
            'element.textContent = "Nouveau texte";\n\n' +
            '// Changer le HTML interne\n' +
            'element.innerHTML = "<strong>En gras</strong>";\n\n' +
            '// Changer un style CSS\n' +
            'element.style.color = "red";\n' +
            'element.style.display = "none"; // cacher\n\n' +
            '// Ajouter / retirer / basculer une classe CSS\n' +
            'element.classList.add("visible");\n' +
            'element.classList.remove("visible");\n' +
            'element.classList.toggle("visible"); // ajoute si absente, retire si présente' },
        { type: 'info', variant: 'astuce', title: 'classList.toggle = le meilleur ami',
          content:
            "`classList.toggle(\"classe\")` est le couteau suisse de l'interactivité. Un clic " +
            "pour afficher, un clic pour cacher. Un clic pour activer le dark mode, un clic " +
            "pour le désactiver. C'est ce qu'on utilise dans la vraie vie." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 3 — Toggle une classe CSS',
      body: [
        { type: 'prose', content: 'On va créer un bouton « Mode sombre » :' },
        { type: 'list', ordered: true, items: [
          'Dans ton CSS, crée une classe `.dark` qui met `background-color: #1a1a2e; color: #eee;` sur le `body`.',
          'Dans le HTML, ajoute un `<button id="toggle-dark">Mode sombre</button>`.',
          'Dans le JS : au clic sur ce bouton, fais `document.body.classList.toggle("dark")`.',
          'Teste : chaque clic doit basculer entre le mode clair et le mode sombre.',
          'Bonus : change aussi le texte du bouton (« Mode sombre » ↔ « Mode clair ») selon l\u2019état.',
        ]},
      ],
    },

    // ===== PARTIE 5 : FORMULAIRES =====
    {
      type: 'section', title: 'e. Valider un formulaire côté client',
      blocks: [
        { type: 'prose', content:
          "Les formulaires HTML (`<form>`) envoient des données. Avant l'envoi, JavaScript " +
          "peut **vérifier** que les champs sont correctement remplis. C'est la validation " +
          "côté client." },
        { type: 'code', language: 'js', title: 'Intercepter l\u2019envoi d\u2019un formulaire',
          code:
            'const form = document.querySelector("#mon-formulaire");\n\n' +
            'form.addEventListener("submit", function(event) {\n' +
            '  // Empêche le rechargement de la page\n' +
            '  event.preventDefault();\n\n' +
            '  // Lire la valeur d\u2019un champ\n' +
            '  const email = document.querySelector("#email").value;\n\n' +
            '  if (email === "") {\n' +
            '    console.log("Le champ email est vide !");\n' +
            '  } else {\n' +
            '    console.log("Email envoyé :", email);\n' +
            '  }\n' +
            '});' },
        { type: 'info', variant: 'definition', title: 'event.preventDefault()',
          content:
            "Par défaut, un formulaire **recharge la page** quand on le soumet. " +
            "`event.preventDefault()` empêche ce comportement : la page reste, et c'est " +
            "ton JS qui décide quoi faire. C'est indispensable pour la validation." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 4 — Valider un champ de saisie',
      body: [
        { type: 'prose', content: 'Crée un mini formulaire d\u2019inscription :' },
        { type: 'list', ordered: true, items: [
          'Dans le HTML : un `<form id="inscription">` avec un `<input id="pseudo" type="text" placeholder="Ton pseudo">` et un `<button type="submit">S\u2019inscrire</button>`. Ajoute aussi un `<p id="message"></p>` vide en dessous.',
          'Dans le JS : écoute l\u2019événement `submit` du formulaire. N\u2019oublie pas `event.preventDefault()`.',
          'Lis la valeur du champ pseudo avec `.value`.',
          'Si le pseudo est vide → affiche "Merci d\u2019entrer un pseudo" dans le `<p id="message">` (en rouge).',
          'Si le pseudo fait moins de 3 caractères → affiche "Le pseudo doit faire au moins 3 caractères" (en orange).',
          'Sinon → affiche "Bienvenue, [pseudo] !" (en vert).',
        ]},
      ],
    },

    // ===== PARTIE 6 : CRÉER DES ÉLÉMENTS =====
    {
      type: 'section', title: 'f. Créer et supprimer des éléments',
      blocks: [
        { type: 'prose', content:
          "On peut aussi **ajouter** de nouveaux éléments au DOM (pas seulement modifier " +
          "ceux qui existent) et en **supprimer**." },
        { type: 'code', language: 'js', title: 'Créer un élément et l\u2019ajouter',
          code:
            '// Créer un nouvel élément\n' +
            'const nouvelItem = document.createElement("li");\n' +
            'nouvelItem.textContent = "Nouvel élément";\n\n' +
            '// L\u2019ajouter à une liste existante\n' +
            'const liste = document.querySelector("ul");\n' +
            'liste.appendChild(nouvelItem);\n\n' +
            '// Supprimer un élément\n' +
            'liste.removeChild(nouvelItem);' },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 5 — Une liste dynamique',
      body: [
        { type: 'prose', content: 'Crée une mini-application « To-do list » :' },
        { type: 'list', ordered: true, items: [
          'HTML : un `<input id="tache" placeholder="Nouvelle tâche">`, un `<button id="ajouter">Ajouter</button>`, et une `<ul id="liste"></ul>` vide.',
          'JS : au clic sur le bouton, lis la valeur de l\u2019input, crée un `<li>` avec ce texte, et ajoute-le à la liste avec `appendChild`.',
          'Vide l\u2019input après l\u2019ajout (`input.value = ""`).',
          'Bonus : ajoute un bouton « X » dans chaque `<li>` qui supprime l\u2019élément au clic (`removeChild` ou `element.remove()`).',
        ]},
      ],
    },

    // ===== CYBER + MÉMO =====
    {
      type: 'section', title: 'Point cybersécurité',
      blocks: [
        { type: 'info', variant: 'attention', title: 'Ne jamais faire confiance au client',
          content:
            "La validation côté client (JS) est un **confort pour l'utilisateur**, pas une " +
            "sécurité. Un utilisateur malveillant peut désactiver le JS ou modifier le DOM. " +
            "La vraie validation se fait **côté serveur** (on le verra en Terminale avec Node.js). " +
            "Règle : valide côté client pour le confort, valide côté serveur pour la sécurité." },
      ],
    },
    {
      type: 'section', title: 'Mémo',
      blocks: [
        { type: 'list', ordered: false, items: [
          "Le DOM est l'arbre vivant de la page en mémoire. JS modifie le DOM, pas le fichier HTML.",
          "Toute interaction JS/DOM suit 3 étapes : **Sélectionner** → **Écouter** → **Réagir**.",
          "`querySelector` / `querySelectorAll` pour sélectionner (avec des sélecteurs CSS).",
          "`addEventListener(\"événement\", callback)` pour écouter.",
          "`textContent`, `innerHTML`, `style.*`, `classList.toggle()` pour modifier.",
          "`createElement` + `appendChild` pour ajouter, `remove()` pour supprimer.",
          "Formulaires : `event.preventDefault()` + `.value` pour lire les champs.",
          "Validation client = confort. Validation serveur = sécurité.",
        ]},
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // TP — digital (GitHub)
  // ---------------------------------------------------------------------------
  tp: {
    kind: 'digital',
    title: "Rendre le site du chef-d'œuvre interactif",
    mission:
      "Ajouter de l'interactivité au site HTML/CSS du chef-d'œuvre : un menu réactif, un " +
      "formulaire validé, et une fonctionnalité dynamique.",
    prerequis: ['TP S5 terminé (site HTML/CSS)', 'Cours S7 suivi', 'Dépôt GitHub à jour'],
    criteres: [
      'Au moins 2 fonctionnalités interactives opérationnelles',
      'addEventListener utilisé correctement',
      'Code JS propre et commenté',
      'Commits réguliers avec messages clairs',
    ],
    bonus:
      "Ajoute un compteur de caractères en temps réel sous le champ message du formulaire " +
      "(écoute l'événement \"input\" et affiche le nombre de caractères tapés).",
    steps: [
      {
        title: 'Liaison JS + menu interactif',
        body: [
          { type: 'list', ordered: true, items: [
            'Crée `script.js` à la racine et lie-le à tes 3 pages (avant `</body>`).',
            'Vérifie avec un `console.log("JS connecté")` dans la console.',
            'Crée un bouton « burger » (visible sur mobile) qui affiche/cache le menu de navigation avec `classList.toggle`.',
            'En CSS : le menu est caché par défaut en mobile (`.nav-links { display: none; }`) et affiché quand la classe `.open` est ajoutée (`.nav-links.open { display: flex; }`).',
          ]},
        ],
        done: 'Le bouton burger affiche/cache le menu sur mobile.',
        validation: { commit: 'git commit -m "feat: menu burger interactif"' },
      },
      {
        title: 'Validation du formulaire de contact',
        body: [
          { type: 'list', ordered: true, items: [
            'Sur la page contact, ajoute un `<p id="form-message">` sous le formulaire pour les retours.',
            'Dans le JS : écoute le `submit` du formulaire, empêche le rechargement.',
            'Vérifie que le champ nom n\u2019est pas vide et que l\u2019email contient un `@`.',
            'Si tout est bon → affiche un message de succès (en vert). Sinon → affiche les erreurs (en rouge).',
          ]},
        ],
        done: 'Le formulaire affiche des messages d\u2019erreur ou de succès sans recharger la page.',
        validation: { commit: 'git commit -m "feat: validation formulaire de contact"' },
      },
      {
        title: 'Fonctionnalité dynamique au choix',
        body: [
          { type: 'prose', content: 'Ajoute **une fonctionnalité de ton choix** parmi :' },
          { type: 'list', ordered: false, items: [
            'Un bouton « Mode sombre / clair » avec `classList.toggle`.',
            'Un système d\u2019onglets (cliquer sur un onglet affiche sa section, cache les autres).',
            'Un « retour en haut de page » qui apparaît quand on scrolle.',
            'Un compteur de clics sur un bouton.',
            'Autre idée validée par le professeur.',
          ]},
        ],
        done: 'La fonctionnalité fonctionne correctement.',
        validation: { commit: 'git commit -m "feat: fonctionnalité dynamique" && git push' },
      },
    ],
  },
};
