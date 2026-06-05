// =============================================================================
// Séquence S5 — Le web côté style : CSS
// Niveau : Première · Durée : 9 h (3 h CSS1 + 3 h CSS2 + 1,5 h TP + 1,5 h contrôle)
// Format : système de blocs (voir CAHIER-DES-CHARGES-V2.md).
//
// NOTES POUR CLAUDE CODE :
// - Reprend et complète le contenu de moduleCSScontent.jsx (TP) et
//   moduleCSSavance.jsx (sélecteurs combinés) de la V1.
// - TP de type 'digital' (GitHub), comme S4.
// - L'évaluation est pratique sur poste (CSS à coder à partir d'une maquette),
//   fournit un HTML pré-existant.
// =============================================================================

export const s5Css = {
  meta: {
    id: 'css',
    sequence: 'S5',
    niveau: 'premiere',
    title: 'Le web côté style : CSS',
    icon: 'brush',
    duree: '9 h',
    theme: 'Développement web',
    filRouge:
      "Ton site HTML existe (S4). Il est structuré mais moche : texte noir sur fond blanc, " +
      "tout collé. Le CSS va le transformer en un site qui a de la gueule, adapté à tous " +
      "les écrans.",
    ref: { competences: ['C08', 'C04', 'C09'], savoirs: ['S1.2', 'S5.1'] },
    cyber:
      "Pas de données sensibles dans le code public ; la cohérence visuelle d'un site est " +
      "un signal de confiance pour l'utilisateur.",
    evalInfo: {
      format: 'Contrôle pratique sur poste (reproduire une maquette en CSS, HTML fourni)',
      duree: '1 h 30',
      competence: 'C08 (Application)',
      ressourcesAutorisees: ['MDN Web Docs', 'CSS-Tricks', 'Le cours S5'],
      note: "Évaluation réalisée en classe — aucun sujet n'est publié sur le site.",
    },
  },

  // ---------------------------------------------------------------------------
  // COURS CSS 1 — Les fondamentaux (3 h)
  // ---------------------------------------------------------------------------
  course: [
    {
      type: 'hero',
      title: 'CSS : donner du style au web',
      subtitle:
        "Le HTML structure, le CSS habille. Deux cours pour passer d'une page brute à un site " +
        "professionnel et responsive.",
    },

    // ===== CSS 1 =====
    {
      type: 'section',
      title: "Cours 1 — Les fondamentaux du CSS",
      blocks: [
        {
          type: 'info',
          variant: 'astuce',
          title: 'Objectifs du cours 1',
          content:
            "Lier une feuille de style, cibler des éléments avec des sélecteurs, modifier couleurs " +
            "/ polices / espacements, et comprendre le modèle de boîte.",
        },
      ],
    },

    {
      type: 'section',
      title: "a. La liaison HTML / CSS",
      blocks: [
        {
          type: 'prose',
          content:
            "Le CSS s'écrit dans un fichier séparé (`.css`) lié au HTML via une balise `<link>` " +
            "dans le `<head>` :",
        },
        {
          type: 'code',
          language: 'html',
          title: 'Lier une feuille de style',
          code: '<head>\n  <link rel="stylesheet" href="style.css">\n</head>',
        },
        {
          type: 'prose',
          content:
            "Un seul fichier CSS peut styliser **toutes les pages** du site. Tu changes la couleur " +
            "des titres *une seule fois*, ça s'applique partout. C'est le principe DRY (Don't " +
            "Repeat Yourself).",
        },
        {
          type: 'info',
          variant: 'analogie',
          title: 'Analogie',
          content:
            "Le HTML est le gros œuvre d'un bâtiment. Le CSS est le travail du peintre et du " +
            "décorateur — et il travaille à partir d'un seul cahier des charges (le fichier CSS) " +
            "pour tout l'immeuble (toutes les pages).",
        },
      ],
    },

    {
      type: 'section',
      title: 'b. Les sélecteurs : cibler ce qu\u2019on veut styliser',
      blocks: [
        {
          type: 'prose',
          content: "Une règle CSS a toujours la même forme : **sélecteur** { **propriété** : **valeur** ; }",
        },
        {
          type: 'code',
          language: 'css',
          title: 'Anatomie d\u2019une règle CSS',
          code: 'h1 {\n  color: blue;\n  font-size: 32px;\n}',
        },
        {
          type: 'table',
          headers: ['Sélecteur', 'Syntaxe', 'Ce qu\u2019il cible', 'Exemple'],
          rows: [
            ['Par balise', 'p', 'Toutes les balises <p>', 'p { color: gray; }'],
            ['Par classe', '.nom', '\u00c9l\u00e9ments avec class="nom"', '.important { font-weight: bold; }'],
            ['Par identifiant', '#nom', 'L\u2019unique \u00e9l\u00e9ment avec id="nom"', '#header { background: navy; }'],
          ],
        },
        {
          type: 'info',
          variant: 'attention',
          title: 'La règle d\u2019or',
          content:
            "En pratique, on utilise **surtout les classes**. Les sélecteurs par balise sont trop " +
            "larges, les identifiants trop spécifiques. La classe est le bon niveau de précision.",
        },
      ],
    },

    {
      type: 'section',
      title: 'c. Couleur, texte, fond',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Couleurs', text: "`color` : texte. `background-color` : fond. Notations : noms (`red`), hexa (`#FF5733`), RGB (`rgb(255,87,51)`), HSL." },
            { title: 'Texte', text: "`font-size` (taille), `font-family` (police), `font-weight` (épaisseur), `text-align` (alignement), `line-height` (interligne), `text-decoration` (soulignement)." },
            { title: 'Fond et bordures', text: "`background-color`, `background-image`. `border` (ex. `1px solid #ccc`), `border-radius` (coins arrondis, ex. `8px` ou `50%` pour un cercle)." },
          ],
        },
      ],
    },

    {
      type: 'section',
      title: 'd. Le modèle de boîte (Box Model)',
      blocks: [
        {
          type: 'prose',
          content:
            "**Chaque élément HTML est une boîte rectangulaire.** Comprendre cette boîte, c'est " +
            "comprendre 80% du CSS. La boîte a 4 couches, de l'intérieur vers l'extérieur :",
        },
        {
          type: 'cards',
          columns: 4,
          items: [
            { title: '1. Contenu', text: "Le texte, l'image. Ce qui est « dedans »." },
            { title: '2. Padding', text: "L'espace entre le contenu et la bordure (rembourrage intérieur)." },
            { title: '3. Bordure', text: "Le cadre visible (ou invisible) de la boîte." },
            { title: '4. Marge', text: "L'espace entre cette boîte et les boîtes voisines (vide autour)." },
          ],
        },
        {
          type: 'info',
          variant: 'analogie',
          title: 'Analogie — Le tableau dans un cadre',
          content:
            "Le tableau, c'est le **contenu**. Le passe-partout (le carton autour du tableau), " +
            "c'est le **padding**. Le cadre, c'est la **bordure**. L'espace entre le cadre et le " +
            "mur, c'est la **marge**.",
        },
        {
          type: 'code',
          language: 'css',
          title: 'Exemple de box model',
          code: '.carte {\n  padding: 16px;           /* espace intérieur */\n  border: 1px solid #ddd;  /* bordure fine */\n  margin: 24px;            /* espace extérieur */\n  border-radius: 8px;      /* coins arrondis */\n}',
        },
        {
          type: 'info',
          variant: 'attention',
          title: 'Astuce indispensable : box-sizing',
          content:
            "Par défaut, `width: 300px` ne compte que le contenu : padding et bordure font " +
            "**dépasser** la boîte au-delà de 300px. La solution que tout pro met en haut de son " +
            "CSS : `* { box-sizing: border-box; }`. Avec ça, 300px inclut tout.",
        },
      ],
    },

    {
      type: 'section',
      title: 'e. Les unités',
      blocks: [
        {
          type: 'table',
          headers: ['Unité', 'Ce que c\u2019est', 'Quand l\u2019utiliser'],
          rows: [
            ['px', 'Pixel, valeur fixe', 'Bordures, petits détails'],
            ['rem', 'Relatif à la taille de base (16px)', 'Tailles de texte, espacements — le meilleur choix'],
            ['em', 'Relatif au parent', 'Padding interne, cas spécifiques'],
            ['%', 'Pourcentage du parent', 'Largeurs responsives'],
            ['vh / vw', '% de la hauteur / largeur écran', 'Sections plein écran'],
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          content:
            "Pour le texte, préfère `rem` : si l'utilisateur change la taille de police de son " +
            "navigateur (accessibilité), tout s'adapte. Les `px` sont figés.",
        },
      ],
    },

    // ===== CSS 2 =====
    {
      type: 'section',
      title: 'Cours 2 — Mise en page et responsive',
      blocks: [
        {
          type: 'info',
          variant: 'astuce',
          title: 'Objectifs du cours 2',
          content:
            "Utiliser Flexbox pour aligner et distribuer, CSS Grid pour les grilles, et les " +
            "media queries pour s'adapter à tous les écrans.",
        },
      ],
    },

    {
      type: 'section',
      title: 'f. Flexbox : aligner sur un axe',
      blocks: [
        {
          type: 'prose',
          content:
            "Flexbox fonctionne sur **un axe** (horizontal ou vertical). Tu mets `display: flex` " +
            "sur un conteneur, et ses enfants deviennent « flexibles ».",
        },
        {
          type: 'code',
          language: 'css',
          title: 'Exemple Flexbox',
          code: '.nav-links {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  justify-content: space-between;\n}',
        },
        {
          type: 'table',
          headers: ['Propriété', 'Ce qu\u2019elle fait', 'Valeurs courantes'],
          rows: [
            ['display: flex', 'Active Flexbox', '—'],
            ['flex-direction', 'Direction de l\u2019axe', 'row (défaut), column'],
            ['justify-content', 'Distribution axe principal', 'flex-start, center, space-between'],
            ['align-items', 'Alignement axe transversal', 'flex-start, center, stretch'],
            ['gap', 'Espace entre enfants', '8px, 1rem, etc.'],
            ['flex-wrap', 'Retour à la ligne', 'nowrap (défaut), wrap'],
          ],
        },
        {
          type: 'info',
          variant: 'analogie',
          title: 'Analogie — L\u2019étagère',
          content:
            "Flexbox, c'est une étagère. Tu choisis si les objets sont en rang (row) ou en " +
            "colonne (column), s'ils sont poussés à gauche, au centre, ou répartis, et s'ils " +
            "peuvent « tomber » sur l'étagère en dessous quand il n'y a plus de place (wrap).",
        },
      ],
    },

    {
      type: 'section',
      title: 'g. CSS Grid : la grille 2D',
      blocks: [
        {
          type: 'prose',
          content:
            "Grid crée une **grille à deux dimensions** (lignes ET colonnes). Parfait pour les " +
            "mises en page complexes.",
        },
        {
          type: 'code',
          language: 'css',
          title: 'Exemple Grid',
          code: '.galerie {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}',
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Flexbox ou Grid ?',
          content:
            "**Flexbox** : un axe (une barre de navigation, une ligne de boutons). " +
            "**Grid** : deux axes (une galerie, un layout de page). Les deux se combinent très bien.",
        },
      ],
    },

    {
      type: 'section',
      title: 'h. Le responsive : s\u2019adapter à tous les écrans',
      blocks: [
        {
          type: 'prose',
          content:
            "Un site pro doit être lisible sur un 27 pouces comme sur un smartphone. On utilise " +
            "les **media queries** : des règles CSS qui ne s'activent qu'à certaines tailles d'écran.",
        },
        {
          type: 'code',
          language: 'css',
          title: 'Approche mobile-first',
          code:
            '/* Mobile par défaut */\n' +
            '.galerie {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n\n' +
            '/* Tablette (>= 768px) */\n' +
            '@media (min-width: 768px) {\n  .galerie { grid-template-columns: repeat(2, 1fr); }\n}\n\n' +
            '/* Desktop (>= 1024px) */\n' +
            '@media (min-width: 1024px) {\n  .galerie { grid-template-columns: repeat(3, 1fr); }\n}',
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Mobile-first',
          content:
            "On code d'abord pour le plus petit écran (mobile), puis on ajoute des règles pour " +
            "les écrans plus grands (`min-width`). C'est plus simple et plus fiable que l'inverse.",
        },
      ],
    },

    {
      type: 'section',
      title: 'i. Les sélecteurs combinés',
      blocks: [
        {
          type: 'table',
          headers: ['Syntaxe', 'Nom', 'Ce que \u00e7a cible', 'Exemple'],
          rows: [
            ['A.B (sans espace)', 'Chaîné', 'Un élément A ET classe B', 'p.intro = un <p class="intro">'],
            ['A B (avec espace)', 'Descendant', 'B à l\u2019intérieur de A', 'nav a = tous les <a> dans <nav>'],
            ['A > B', 'Enfant direct', 'B juste en dessous de A', 'header > nav'],
          ],
        },
        {
          type: 'info',
          variant: 'attention',
          title: 'Attention à l\u2019espace',
          content:
            "`p.intro` (sans espace) = un paragraphe qui a la classe intro. " +
            "`p .intro` (avec espace) = un élément de classe intro *à l'intérieur* d'un paragraphe. " +
            "Un seul espace change tout.",
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
          title: 'Le visuel comme signal de confiance',
          content:
            "Un site mal présenté (texte mal aligné, couleurs criardes, pas de responsive) envoie " +
            "un signal négatif : « ce site n'est pas sérieux, peut-être pas sûr ». Le CSS n'est pas " +
            "qu'esthétique : c'est un vecteur de confiance.",
        },
      ],
    },

    {
      type: 'section',
      title: 'Mémo CSS',
      blocks: [
        {
          type: 'list',
          ordered: false,
          items: [
            "CSS = apparence du HTML. Un fichier, toutes les pages.",
            "Sélecteurs : par balise, par `.classe` (le plus courant), par `#id`. Combinaisons : chaîné (A.B), descendant (A B), enfant direct (A > B).",
            "Box Model : contenu → padding → bordure → marge. Toujours `box-sizing: border-box`.",
            "Flexbox (1 axe) pour aligner, Grid (2 axes) pour les grilles.",
            "Responsive : `@media (min-width: ...)`, approche mobile-first.",
            "Unités : `rem` pour le texte, `px` pour les bordures, `%` pour les largeurs.",
          ],
        },
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // TP — digital (GitHub)
  // ---------------------------------------------------------------------------
  tp: {
    kind: 'digital',
    title: "Styliser le site du chef-d'œuvre",
    mission:
      "Transformer les pages HTML brutes du chef-d'œuvre en un site visuellement professionnel " +
      "et responsive, en appliquant les deux cours CSS.",
    prerequis: [
      'TP S4 terminé (3 pages HTML liées)',
      'Cours CSS 1 et CSS 2 suivis',
      'Dépôt GitHub à jour',
    ],
    criteres: [
      'Site visuellement professionnel',
      'Responsive (lisible en large et en étroit)',
      'Code CSS organisé et commenté',
      'Commits réguliers avec messages clairs',
    ],
    bonus: "Ajouter un effet de survol (hover) sur les cartes : ombre portée qui apparaît, légère montée (transform: translateY).",
    steps: [
      {
        title: 'Liaison et styles globaux',
        body: [
          {
            type: 'list',
            ordered: true,
            items: [
              "Crée `style.css` à la racine du projet.",
              "Lie-le à tes 3 pages HTML (`<link rel=\"stylesheet\" href=\"style.css\">`).",
              "Définis les styles de base : `* { box-sizing: border-box; }`, `body { font-family: ...; background-color: ...; color: ...; margin: 0; }`.",
              "Crée une classe `.container` (`max-width: 960px; margin: 0 auto; padding: 0 20px;`) et enveloppe le contenu de chaque page dedans.",
            ],
          },
        ],
        done: "Les 3 pages ont une police, un fond et un conteneur centré.",
        validation: { commit: 'git commit -m "feat: liaison CSS et styles globaux"' },
      },
      {
        title: 'Header, navigation et footer',
        body: [
          {
            type: 'list',
            ordered: true,
            items: [
              "Style le `<header>` en Flexbox (`display: flex; justify-content: space-between; align-items: center;`).",
              "Style les liens du `<nav>` : retire le soulignement (`text-decoration: none`), ajoute une couleur, un hover.",
              "Style le `<footer>` : fond sombre, texte clair, centré, padding confortable.",
            ],
          },
        ],
        done: "Le header est aligné horizontalement, la nav est stylée, le footer est visuellement distinct.",
        validation: { commit: 'git commit -m "feat: header flexbox + nav + footer"' },
      },
      {
        title: 'Contenu et responsive',
        body: [
          {
            type: 'list',
            ordered: true,
            items: [
              "Style les sections du `<main>` (marges entre sections, titres `<h2>` avec une couleur ou une bordure, listes avec espacement).",
              "Rends la page responsive : sur mobile (< 768px), le header passe en colonne, les sections prennent toute la largeur.",
              "Teste en redimensionnant la fenêtre du navigateur.",
            ],
          },
        ],
        done: "Le site est lisible sur un grand écran ET en largeur mobile.",
        validation: { commit: 'git commit -m "feat: styles contenu + responsive" && git push' },
      },
    ],
  },
};
