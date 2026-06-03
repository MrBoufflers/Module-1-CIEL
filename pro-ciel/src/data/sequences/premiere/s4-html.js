// =============================================================================
// Séquence S4 — HTML : le squelette du web
// Niveau : Première · Durée : 6 h · TP de type 'digital' (versionné sur GitHub)
// Format : système de blocs (voir CAHIER-DES-CHARGES-V2.md).
//
// NOTES POUR CLAUDE CODE :
// - Contenu repris et reformaté depuis module6content.jsx (V1) : le FOND est conservé.
// - Le composant interactif SemanticLayoutDiagram (V1) est conservé et rendu via
//   { type: 'component', name: 'SemanticLayoutDiagram' }.
// - TP 'digital' : chaque étape a une validation par commit/push (workflow GitHub).
// - C'est la séquence PILOTE du Lot 1, à utiliser comme exemple de TP de code
//   (complémentaire de S1 qui illustre le TP 'physical').
// =============================================================================

export const s4Html = {
  meta: {
    id: 'html',                    // URL : /premiere/html
    sequence: 'S4',
    niveau: 'premiere',
    title: 'HTML : le squelette du web',
    icon: 'brand-html5',           // identifiant d'icône Tabler — PAS d'emoji
    duree: '6 h',
    theme: 'Développement web',
    filRouge:
      "Tu sais versionner avec Git (S3). Ici tu produis tes premières pages web, " +
      "hébergées sur GitHub. En S5, tu les mettras en forme avec le CSS.",
    ref: { competences: ['C08', 'C04', 'C09'], savoirs: ['S1.2', 'S5.1'] },
    cyber:
      "Le HTTPS, ce que voit (et ne voit pas) l'utilisateur, données affichées vs " +
      "données cachées.",
    evalInfo: {
      format: 'Contrôle pratique sur poste (coder une page conforme à une consigne)',
      duree: '1 h 30',
      competence: 'C08 (Découverte)',
      ressourcesAutorisees: ['MDN Web Docs', 'Le cours S4'],
      note: "Évaluation réalisée en classe — aucun sujet n'est publié sur le site.",
    },
  },

  // ---------------------------------------------------------------------------
  // COURS
  // ---------------------------------------------------------------------------
  course: [
    {
      type: 'hero',
      title: 'HTML : le squelette du web',
      subtitle:
        "Avant de peindre un mur, on le construit. Avant de styliser une page, on lui donne " +
        "une structure solide : c'est le rôle du HTML, le squelette de chaque page web.",
    },

    {
      type: 'info',
      variant: 'astuce',
      title: 'Objectifs de la séquence',
      content:
        "À la fin, tu sauras : structurer une page avec les balises HTML, écrire du HTML " +
        "sémantique (qui a du sens), créer plusieurs pages reliées entre elles, et héberger " +
        "ton travail sur GitHub.",
    },

    {
      type: 'section',
      title: "Partie 1 — Qu'est-ce que le HTML ?",
      blocks: [
        {
          type: 'prose',
          content:
            "Le HTML (HyperText Markup Language) n'est **pas** un langage de programmation : " +
            "c'est un *langage de balisage*. Son unique but est de **décrire et structurer le " +
            "contenu** d'une page. Il dit au navigateur : « ceci est un titre », « ceci est un " +
            "paragraphe », « ceci est une image ».",
        },
        {
          type: 'info',
          variant: 'analogie',
          title: 'Analogie',
          content:
            "Le HTML est le plan de l'architecte et le gros œuvre d'une maison : il définit les " +
            "pièces, les étages, les portes (les liens), mais il ne choisit ni la couleur des " +
            "murs ni le type de sol. Ça, ce sera le travail du CSS (en S5).",
        },
        {
          type: 'prose',
          content:
            "Toute page HTML commence par ce squelette minimal, qui déclare son type, sa langue, " +
            "et sépare les métadonnées (`<head>`) du contenu visible (`<body>`).",
        },
        {
          type: 'code',
          language: 'html',
          title: 'Le squelette de départ',
          code:
            '<!DOCTYPE html>\n' +
            '<html lang="fr">\n' +
            '<head>\n' +
            '  <meta charset="UTF-8">\n' +
            '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
            '  <title>Titre de ma page</title>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <!-- Tout le contenu visible ira ici -->\n' +
            '</body>\n' +
            '</html>',
        },
      ],
    },

    {
      type: 'section',
      title: 'Partie 2 — Les balises de contenu',
      blocks: [
        {
          type: 'prose',
          content: "Voici les balises que tu utiliseras le plus souvent pour structurer ton texte et tes médias.",
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            { code: '<h1>…<h6>', text: "Les titres. <h1> est le plus important, <h6> le moins." },
            { code: '<p>', text: "Un paragraphe de texte." },
            { code: '<a href="URL">', text: "Un lien hypertexte. L'attribut href est la destination." },
            { code: '<img src alt>', text: "Une image. src est le chemin, alt le texte alternatif (essentiel pour l'accessibilité)." },
            { code: '<ul> <ol> <li>', text: "Des listes : ul à puces, ol numérotée, li pour chaque élément." },
            { code: '<strong> <em>', text: "Mettre en valeur : strong (importance forte), em (emphase)." },
          ],
        },
      ],
    },

    {
      type: 'section',
      title: 'Partie 3 — Le HTML sémantique : donner du sens',
      blocks: [
        {
          type: 'prose',
          content:
            "C'est le cœur du HTML5. Au lieu d'empiler des boîtes génériques `<div>`, on utilise " +
            "des balises qui décrivent le **rôle** de leur contenu. Pourquoi ? Pour les **moteurs " +
            "de recherche** (référencement) et l'**accessibilité** (lecteurs d'écran).",
        },
        {
          type: 'info',
          variant: 'attention',
          title: "La règle d'or",
          content:
            "Choisis toujours la balise qui décrit le mieux le **sens** de ton contenu, pas son apparence.",
        },
        { type: 'component', name: 'SemanticLayoutDiagram' },
        {
          type: 'list',
          ordered: false,
          items: [
            "`<header>` : l'en-tête de la page ou d'une section (logo, titre principal, navigation).",
            "`<nav>` : les liens de navigation principaux du site.",
            "`<main>` : le contenu principal et unique de la page (un seul par page).",
            "`<section>` : un regroupement thématique, contenant presque toujours un titre.",
            "`<article>` : un contenu autonome qui pourrait exister seul (article de blog, produit).",
            "`<aside>` : un contenu complémentaire (biographie, liens connexes).",
            "`<footer>` : le pied de page (contact, crédits, mentions légales).",
          ],
        },
      ],
    },

    {
      type: 'section',
      title: 'Point cybersécurité',
      blocks: [
        {
          type: 'info',
          variant: 'attention',
          title: 'Ce que voit vraiment un visiteur',
          content:
            "Tout le HTML d'une page est **visible** par n'importe qui (clic droit → « code source »). " +
            "Ne mets jamais d'information sensible (mot de passe, donnée privée) en clair dans le HTML. " +
            "Et le **HTTPS** (le cadenas) garantit que la page n'a pas été modifiée entre le serveur et toi.",
        },
      ],
    },

    {
      type: 'section',
      title: 'Mémo de fin de cours',
      blocks: [
        {
          type: 'list',
          ordered: false,
          items: [
            "Le HTML structure le contenu ; il ne s'occupe pas de l'apparence (c'est le CSS).",
            "Toute page a un squelette : <!DOCTYPE>, <html>, <head>, <body>.",
            "Les balises sémantiques (header, nav, main, section, footer) donnent du sens.",
            "Le HTML est public : jamais de données sensibles en clair.",
          ],
        },
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // TP — digital (versionné sur GitHub)
  // ---------------------------------------------------------------------------
  tp: {
    kind: 'digital',
    title: "Le mini-site de présentation de ton chef-d'œuvre",
    mission:
      "Construire un site web multi-pages en HTML5 sémantique, structuré et logique : créer " +
      "plusieurs fichiers HTML, les lier entre eux, et versionner le projet sur GitHub à chaque " +
      "étape clé.",
    prerequis: [
      'Cours S4 suivi',
      'VS Code et Git installés',
      'Dépôt GitHub Classroom accepté',
      "Une idée (même vague) de ton projet de chef-d'œuvre",
    ],
    criteres: [
      'Site multi-pages fonctionnel et navigable',
      'HTML sémantique correct',
      'Commits réguliers avec des messages clairs',
      'Code propre et indenté',
    ],
    bonus:
      "Sur la page « Détails », ajoute une section « Schéma du projet » avec une balise <figure> " +
      "contenant une <img> et une <figcaption> pour la légender.",
    steps: [
      {
        title: "Initialisation & page d'accueil",
        body: [
          {
            type: 'prose',
            content: "On prépare le projet et on construit la page principale, vitrine du chef-d'œuvre.",
          },
          {
            type: 'list',
            ordered: true,
            items: [
              "Crée un dossier `mon-chef-d-oeuvre-nom-prenom` et ouvre-le dans VS Code.",
              "Initialise Git dans le terminal : `git init`.",
              "Crée `index.html`, génère le squelette de base (`!` puis Tab) et change le `<title>`.",
              "Dans le `<body>`, ajoute les balises sémantiques : `<header>`, `<nav>`, `<main>`, `<footer>`.",
              "Remplis : un `<h1>` (nom du projet) dans le header ; une `<section>` avec `<h2>` « Présentation » et un `<p>` dans le main ; « Projet réalisé par … » dans le footer.",
            ],
          },
        ],
        done: "La page d'accueil s'affiche avec une structure header / nav / main / footer correcte.",
        validation: { commit: 'git commit -m "Initial commit: structure et page d\'accueil"' },
      },
      {
        title: 'Page « Détails » & navigation',
        body: [
          {
            type: 'prose',
            content: "On crée une 2e page et, surtout, on apprend à lier les pages entre elles.",
          },
          {
            type: 'list',
            ordered: true,
            items: [
              "Crée `details.html` à partir d'une copie de `index.html`. Change le `<title>` en « Détails du projet ».",
              "Dans le `<main>`, mets une `<section>` « Matériel nécessaire » avec une liste `<ul>`, et une `<section>` « Fonctionnalités » avec une liste `<ol>`.",
              "Remplis le `<nav>` avec une liste de liens : Accueil (`index.html`) et Détails (`details.html`). **Le menu doit être identique sur toutes les pages.**",
              "Teste la navigation dans le navigateur : tu dois passer d'une page à l'autre.",
            ],
          },
          {
            type: 'info',
            variant: 'astuce',
            content: "Un menu de navigation identique partout, c'est une règle d'ergonomie : l'utilisateur ne doit jamais être perdu.",
          },
        ],
        done: "Les deux pages se naviguent dans les deux sens via le menu, identique sur chacune.",
        validation: { commit: 'git commit -m "feat: page Détails et navigation principale"' },
      },
      {
        title: 'Page « Contact » & mise en ligne',
        body: [
          {
            type: 'prose',
            content: "On finalise avec une page de contact, puis on met le site en ligne pour le rendre accessible à tous.",
          },
          {
            type: 'list',
            ordered: true,
            items: [
              "Crée `contact.html` (même structure de base). Adapte le titre et le `<main>`.",
              "Ajoute un `<h2>` « Me contacter » et un formulaire : `<form>`, `<label>`, `<input type=\"text\">`, `<input type=\"email\">`, `<textarea>`, `<button type=\"submit\">`.",
              "Ajoute le lien vers `contact.html` dans le `<nav>` des **trois** pages.",
              "Pousse ton dépôt sur GitHub, puis active GitHub Pages (Settings → Pages → branche main) pour publier le site.",
            ],
          },
          {
            type: 'info',
            variant: 'attention',
            content: "Le formulaire est seulement structurel ici : il ne fait rien encore. On le rendra interactif plus tard (en JavaScript, S7).",
          },
        ],
        done: "Les trois pages sont reliées, le formulaire est présent, et le site est accessible en ligne via GitHub Pages.",
        validation: { commit: 'git commit -m "feat: page Contact + mise en ligne" && git push' },
      },
    ],
  },
};
