// =============================================================================
// Séquence S4 — HTML : le squelette du web (MISE À JOUR : exercices intégrés)
// Niveau : Première · Durée : 6 h · TP 'digital' (GitHub)
// 3 exercices intégrés au cours, sans correction (faite à l'oral en classe).
// =============================================================================

export const s4Html = {
  meta: {
    id: 'html',
    sequence: 'S4',
    niveau: 'premiere',
    title: 'HTML : le squelette du web',
    icon: 'brand-html5',
    duree: '6 h',
    theme: 'Développement web',
    filRouge:
      "Tu sais versionner avec Git (S3). Ici tu produis tes premières pages web, " +
      "hébergées sur GitHub. En S5, tu les mettras en forme avec le CSS.",
    ref: { competences: ['C08', 'C04', 'C09'], savoirs: ['S1.2', 'S5.1'] },
    cyber:
      "Le HTTPS, ce que voit (et ne voit pas) l'utilisateur, données affichées vs cachées.",
    evalInfo: {
      format: 'Contrôle pratique sur poste (coder une page HTML conforme à un cahier des charges)',
      duree: '1 h 30',
      competence: 'C08 (Découverte)',
      ressourcesAutorisees: ['MDN Web Docs', 'Le cours S4'],
      note: "Évaluation réalisée en classe — aucun sujet n'est publié sur le site.",
    },
  },

  course: [
    {
      type: 'hero',
      title: 'HTML : le squelette du web',
      subtitle:
        "Avant de peindre un mur, on le construit. Avant de styliser une page, on lui donne " +
        "une structure solide.",
    },
    {
      type: 'info', variant: 'astuce', title: 'Objectifs',
      content:
        "Comprendre comment fonctionne le web, structurer une page avec les balises HTML, " +
        "écrire du HTML sémantique, créer plusieurs pages reliées, et héberger sur GitHub.",
    },

    // ===== PARTIE 1 =====
    {
      type: 'section', title: "Partie 1 — Comment fonctionne le web ?",
      blocks: [
        { type: 'prose', content:
          "Quand tu tapes une adresse dans ton navigateur, voici ce qui se passe : " +
          "1) ton navigateur (le **client**) envoie une **requête** au serveur. " +
          "2) le serveur renvoie une **réponse** : le fichier HTML. " +
          "3) le navigateur **lit le HTML** et l'affiche. C'est le modèle client/serveur de S2 en action." },
        { type: 'info', variant: 'analogie', title: 'Analogie',
          content: "Tu commandes un plat au restaurant (la requête). Le serveur va en cuisine (le serveur web) " +
          "et revient avec l'assiette (le HTML). Le navigateur, c'est ton assiette : il présente ce qu'il a reçu." },
      ],
    },

    // ===== PARTIE 2 =====
    {
      type: 'section', title: "Partie 2 — Le HTML, un langage de balisage",
      blocks: [
        { type: 'prose', content:
          "Le HTML (HyperText Markup Language) n'est **pas** un langage de programmation. C'est " +
          "un langage de **balisage** : des balises qui entourent le contenu pour lui donner un sens. " +
          "Une balise s'écrit entre chevrons : `<balise>contenu</balise>`." },
        { type: 'info', variant: 'analogie', title: 'Analogie',
          content: "Le HTML est le plan de l'architecte : il définit les pièces, les étages, les portes " +
          "(les liens), mais pas la couleur des murs. Ça, c'est le CSS (S5)." },
        { type: 'prose', content: "Toute page HTML commence par ce squelette minimal :" },
        { type: 'code', language: 'html', title: 'Le squelette de départ',
          code:
            '<!DOCTYPE html>\n<html lang="fr">\n<head>\n' +
            '  <meta charset="UTF-8">\n' +
            '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
            '  <title>Titre de ma page</title>\n' +
            '</head>\n<body>\n  <!-- Contenu visible ici -->\n</body>\n</html>' },
        { type: 'list', ordered: false, items: [
          '`<!DOCTYPE html>` : déclare du HTML5.',
          '`<html lang="fr">` : le conteneur de toute la page, en français.',
          '`<head>` : les métadonnées (invisibles) : encodage, titre de l\u2019onglet.',
          '`<body>` : le contenu visible.',
        ]},
      ],
    },

    // ===== EXERCICE 1 =====
    {
      type: 'exercise',
      title: 'Exercice 1 — Créer un squelette HTML de mémoire',
      body: [
        { type: 'list', ordered: true, items: [
          'Crée un nouveau fichier `exercice1.html` dans VS Code.',
          'Sans regarder le cours, tape le squelette HTML5 complet de mémoire (DOCTYPE, html, head, body).',
          'Donne un `<title>` de ton choix.',
          'Dans le `<body>`, ajoute un `<h1>` avec ton prénom et un `<p>` avec une phrase de ton choix.',
          'Ouvre le fichier dans le navigateur (clic droit → ouvrir avec) et vérifie que ça s\u2019affiche.',
        ]},
      ],
    },

    // ===== PARTIE 3 =====
    {
      type: 'section', title: 'Partie 3 — Les balises de contenu',
      blocks: [
        { type: 'prose', content: 'Les balises que tu utiliseras le plus souvent :' },
        { type: 'cards', columns: 2, items: [
          { code: '<h1> à <h6>', text: 'Les titres. <h1> est le plus important, <h6> le moins. Un seul <h1> par page.' },
          { code: '<p>', text: 'Un paragraphe de texte.' },
          { code: '<a href="URL">', text: "Un lien hypertexte. L'attribut href est la destination." },
          { code: '<img src alt>', text: "Une image. src = le chemin, alt = le texte alternatif (accessibilité)." },
          { code: '<ul> <ol> <li>', text: 'Des listes : ul à puces, ol numérotée, li pour chaque élément.' },
          { code: '<strong> <em>', text: 'Mettre en valeur : strong (importance), em (emphase).' },
        ]},
      ],
    },

    // ===== EXERCICE 2 =====
    {
      type: 'exercise',
      title: 'Exercice 2 — Une page complète avec toutes les balises',
      body: [
        { type: 'prose', content: 'Crée un fichier `exercice2.html` et construis une page qui utilise **toutes** les balises vues ci-dessus :' },
        { type: 'list', ordered: true, items: [
          'Un titre `<h1>` (le sujet de la page) et un sous-titre `<h2>`.',
          'Deux paragraphes `<p>` avec du texte (utilise `<strong>` et `<em>` dans au moins un).',
          'Un lien `<a>` vers un site réel (par ex. MDN).',
          'Une image `<img>` (utilise une image libre de droits, ou un placeholder comme `https://picsum.photos/400/200`). N\u2019oublie pas l\u2019`alt`.',
          'Une liste à puces `<ul>` de 3 éléments et une liste numérotée `<ol>` de 3 éléments.',
          'Ouvre dans le navigateur et vérifie que tout s\u2019affiche.',
        ]},
      ],
    },

    // ===== PARTIE 4 =====
    {
      type: 'section', title: 'Partie 4 — Le HTML sémantique : donner du sens',
      blocks: [
        { type: 'prose', content:
          "C'est le cœur du HTML5. Au lieu d'empiler des `<div>` génériques, on utilise des " +
          "balises qui décrivent le **rôle** du contenu. Pour les moteurs de recherche (référencement) " +
          "et l'accessibilité (lecteurs d'écran)." },
        { type: 'info', variant: 'attention', title: 'La règle d\u2019or',
          content: 'Choisis toujours la balise qui décrit le mieux le **sens** de ton contenu, pas son apparence.' },
        { type: 'component', name: 'SemanticLayoutDiagram' },
        { type: 'list', ordered: false, items: [
          '`<header>` : l\u2019en-tête (logo, titre, navigation).',
          '`<nav>` : les liens de navigation principaux.',
          '`<main>` : le contenu principal et unique (un seul par page).',
          '`<section>` : un regroupement thématique avec un titre.',
          '`<article>` : un contenu autonome (article, produit).',
          '`<aside>` : contenu complémentaire.',
          '`<footer>` : pied de page (contact, crédits).',
        ]},
      ],
    },

    // ===== EXERCICE 3 =====
    {
      type: 'exercise',
      title: 'Exercice 3 — Restructurer en HTML sémantique',
      body: [
        { type: 'prose', content:
          "Reprends ton `exercice2.html` et transforme-le en page sémantique :" },
        { type: 'list', ordered: true, items: [
          'Enveloppe tout le contenu visible dans les bonnes balises sémantiques : `<header>`, `<main>`, `<footer>`.',
          'Déplace le `<h1>` dans le `<header>`.',
          'Ajoute un `<nav>` dans le `<header>` avec une liste de 3 liens (même fictifs).',
          'Regroupe tes paragraphes et listes dans une `<section>` à l\u2019intérieur du `<main>`.',
          'Ajoute un `<footer>` avec ton nom et l\u2019année.',
          'Ouvre dans le navigateur : visuellement rien ne change (c\u2019est normal, le sémantique est invisible). Mais la structure est propre.',
        ]},
        { type: 'info', variant: 'astuce',
          content: 'Pour vérifier ta structure, utilise l\u2019outil « Inspecteur » du navigateur (clic droit → Inspecter) et déplie les balises : tu dois voir header > nav, main > section, footer.' },
      ],
    },

    // ===== CYBER + MÉMO =====
    {
      type: 'section', title: 'Point cybersécurité',
      blocks: [
        { type: 'info', variant: 'attention', title: 'Le HTML est public',
          content:
            "Tout le HTML est visible (clic droit → code source). **Jamais** de mot de passe ou de " +
            "donnée privée en clair dans le HTML. Et le **HTTPS** (le cadenas) garantit que la page n'a " +
            "pas été modifiée entre le serveur et toi." },
      ],
    },
    {
      type: 'section', title: 'Mémo',
      blocks: [
        { type: 'list', ordered: false, items: [
          'Le HTML structure le contenu ; l\u2019apparence, c\u2019est le CSS (S5).',
          'Squelette : <!DOCTYPE>, <html>, <head>, <body>.',
          'Balises sémantiques (header, nav, main, section, footer) = du sens.',
          'Le HTML est public : jamais de données sensibles en clair.',
        ]},
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // TP — digital (GitHub)
  // ---------------------------------------------------------------------------
  tp: {
    kind: 'digital',
    title: "Le mini-site de présentation de ton chef-d'œuvre",
    mission:
      "Construire un site web multi-pages en HTML5 sémantique, structuré et logique, versionné sur GitHub.",
    prerequis: ['Cours S4 suivi', 'VS Code et Git installés', 'Dépôt GitHub Classroom accepté'],
    criteres: ['Site multi-pages fonctionnel', 'HTML sémantique correct', 'Commits réguliers avec messages clairs', 'Code propre et indenté'],
    bonus: "Ajouter une section avec <figure>, <img> et <figcaption>.",
    steps: [
      {
        title: "Initialisation & page d'accueil",
        body: [
          { type: 'list', ordered: true, items: [
            "Crée un dossier `mon-chef-d-oeuvre-nom-prenom` et ouvre-le dans VS Code.",
            "Initialise Git : `git init`.",
            "Crée `index.html` avec le squelette HTML5 et les balises sémantiques (header, nav, main, footer).",
            "Dans le header : un `<h1>` (nom du projet). Dans le main : une `<section>` « Présentation » avec un `<p>`. Dans le footer : « Projet réalisé par ... ».",
          ]},
        ],
        done: "La page d'accueil s'affiche avec header / nav / main / footer.",
        validation: { commit: 'git commit -m "Initial commit: structure et page d\'accueil"' },
      },
      {
        title: 'Page « Détails » & navigation',
        body: [
          { type: 'list', ordered: true, items: [
            "Crée `details.html` (copie de index.html). Change le `<title>`.",
            "Dans le main : une `<section>` « Matériel nécessaire » avec `<ul>`, une `<section>` « Fonctionnalités » avec `<ol>`.",
            "Remplis le `<nav>` des deux pages avec une liste de liens identique : Accueil et Détails.",
            "Teste la navigation dans les deux sens.",
          ]},
          { type: 'info', variant: 'astuce',
            content: "Un menu identique partout = règle d'ergonomie. L'utilisateur ne doit jamais être perdu." },
        ],
        done: "Les deux pages se naviguent dans les deux sens via le menu.",
        validation: { commit: 'git commit -m "feat: page Détails et navigation"' },
      },
      {
        title: 'Page « Contact » & mise en ligne',
        body: [
          { type: 'list', ordered: true, items: [
            "Crée `contact.html`. Ajoute un `<form>` avec `<label>`, `<input type=\"text\">`, `<input type=\"email\">`, `<textarea>`, `<button type=\"submit\">`.",
            "Ajoute le lien contact dans le `<nav>` des **trois** pages.",
            "Pousse sur GitHub, puis active GitHub Pages (Settings → Pages → branche main).",
          ]},
          { type: 'info', variant: 'attention',
            content: "Le formulaire est structurel : il ne fait rien encore. On le rendra interactif en JS (S7)." },
        ],
        done: "Les trois pages sont reliées, le formulaire est présent, le site est en ligne.",
        validation: { commit: 'git commit -m "feat: page Contact + mise en ligne" && git push' },
      },
    ],
  },
};
