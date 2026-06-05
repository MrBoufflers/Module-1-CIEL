// =============================================================================
// Séquence S5 — Le web côté style : CSS (MISE À JOUR : exercices intégrés)
// Niveau : Première · Durée : 9 h (3h CSS1 + 3h CSS2 + 1,5h TP + 1,5h contrôle)
// 7 exercices intégrés au cours (4 dans CSS1, 3 dans CSS2), sans correction.
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
      "Ton site HTML existe (S4). Il est structuré mais moche : texte noir sur fond blanc. " +
      "Le CSS va le transformer en un site qui a de la gueule, adapté à tous les écrans.",
    ref: { competences: ['C08', 'C04', 'C09'], savoirs: ['S1.2', 'S5.1'] },
    cyber: "La cohérence visuelle d'un site est un signal de confiance pour l'utilisateur.",
    evalInfo: {
      format: 'Contrôle pratique sur poste (reproduire une maquette en CSS, HTML fourni)',
      duree: '1 h 30',
      competence: 'C08 (Application)',
      ressourcesAutorisees: ['MDN Web Docs', 'CSS-Tricks', 'Le cours S5'],
      note: "Évaluation réalisée en classe — aucun sujet n'est publié sur le site.",
    },
  },

  course: [
    {
      type: 'hero',
      title: 'CSS : donner du style au web',
      subtitle: "Le HTML structure, le CSS habille. Deux cours pour passer d'une page brute à un site professionnel et responsive.",
    },

    // ==================== CSS 1 — FONDAMENTAUX ====================
    {
      type: 'section', title: 'Cours 1 — Les fondamentaux du CSS',
      blocks: [
        { type: 'info', variant: 'astuce', title: 'Objectifs du cours 1',
          content: "Lier une feuille de style, cibler des éléments avec des sélecteurs, modifier couleurs / polices / espacements, et comprendre le modèle de boîte." },
      ],
    },

    // --- a. Liaison ---
    {
      type: 'section', title: 'a. La liaison HTML / CSS',
      blocks: [
        { type: 'prose', content:
          "Le CSS s'écrit dans un fichier séparé (`.css`) lié au HTML via une balise `<link>` dans le `<head>` :" },
        { type: 'code', language: 'html', title: 'Lier une feuille de style',
          code: '<head>\n  <link rel="stylesheet" href="style.css">\n</head>' },
        { type: 'prose', content:
          "Un seul fichier CSS stylise **toutes les pages** du site. Tu changes un style une seule fois, ça s'applique partout." },
        { type: 'info', variant: 'analogie', title: 'Analogie',
          content: "Le HTML est le gros œuvre d'un bâtiment. Le CSS est le peintre-décorateur — et il travaille à partir d'un seul cahier des charges pour tout l'immeuble." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 1 — Lier un fichier CSS',
      body: [
        { type: 'list', ordered: true, items: [
          'Reprends un de tes fichiers HTML de S4 (ou crée un nouveau fichier `exo-css.html` avec un squelette basique contenant un `<h1>` et deux `<p>`).',
          'Crée un fichier `style.css` dans le même dossier.',
          'Lie-le au HTML avec la balise `<link>` dans le `<head>`.',
          'Dans `style.css`, écris : `body { background-color: #f0f0f0; }` et enregistre.',
          'Ouvre le HTML dans le navigateur : le fond doit avoir changé. Si oui, la liaison fonctionne.',
        ]},
      ],
    },

    // --- b. Sélecteurs ---
    {
      type: 'section', title: 'b. Les sélecteurs',
      blocks: [
        { type: 'prose', content: "Une règle CSS : **sélecteur** { **propriété** : **valeur** ; }" },
        { type: 'code', language: 'css', title: 'Anatomie d\u2019une règle',
          code: 'h1 {\n  color: blue;\n  font-size: 32px;\n}' },
        { type: 'table', headers: ['Sélecteur', 'Syntaxe', 'Ce qu\u2019il cible', 'Exemple'],
          rows: [
            ['Par balise', 'p', 'Toutes les <p>', 'p { color: gray; }'],
            ['Par classe', '.nom', 'Éléments avec class="nom"', '.important { font-weight: bold; }'],
            ['Par identifiant', '#nom', "L'unique élément avec id=\"nom\"", '#header { background: navy; }'],
          ] },
        { type: 'info', variant: 'attention', title: 'Règle d\u2019or',
          content: "En pratique, on utilise **surtout les classes**. Les balises sont trop larges, les id trop spécifiques." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 2 — Cibler 3 éléments différemment',
      body: [
        { type: 'prose', content: 'Dans ton fichier `exo-css.html`, assure-toi d\u2019avoir un `<h1>`, un `<p>` normal et un `<p class="important">`. Puis dans `style.css` :' },
        { type: 'list', ordered: true, items: [
          'Cible le `<h1>` **par balise** : change sa couleur en bleu foncé.',
          'Cible `.important` **par classe** : mets-le en gras et en rouge.',
          'Ajoute un `id="intro"` sur le premier `<p>` et cible-le **par id** : mets-le en italique.',
          'Ouvre dans le navigateur et vérifie que les 3 styles s\u2019appliquent.',
        ]},
      ],
    },

    // --- c. Couleurs, texte, fond ---
    {
      type: 'section', title: 'c. Couleurs, texte, fond',
      blocks: [
        { type: 'cards', columns: 2, items: [
          { title: 'Couleurs', text: '`color` : texte. `background-color` : fond. Notations : noms (`red`), hexa (`#FF5733`), RGB (`rgb(255,87,51)`).' },
          { title: 'Texte', text: '`font-size`, `font-family`, `font-weight`, `text-align`, `line-height`, `text-decoration`.' },
          { title: 'Fond et bordures', text: '`background-color`, `border` (ex. `1px solid #ccc`), `border-radius` (coins arrondis).' },
        ]},
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 3 — Styliser du texte et un fond',
      body: [
        { type: 'prose', content: 'Toujours dans ton fichier `exo-css.html` / `style.css` :' },
        { type: 'list', ordered: true, items: [
          'Change la `font-family` du body en `Arial, sans-serif`.',
          'Mets le `<h1>` en `text-align: center` et `font-size: 2rem`.',
          'Ajoute un `line-height: 1.6` sur les `<p>` pour aérer le texte.',
          'Ajoute un `border-bottom: 2px solid #333` sous le `<h1>` pour le souligner.',
          'Vérifie le rendu dans le navigateur.',
        ]},
      ],
    },

    // --- d. Box Model ---
    {
      type: 'section', title: 'd. Le modèle de boîte (Box Model)',
      blocks: [
        { type: 'prose', content:
          "**Chaque élément HTML est une boîte rectangulaire.** La boîte a 4 couches :" },
        { type: 'cards', columns: 4, items: [
          { title: '1. Contenu', text: "Le texte, l'image." },
          { title: '2. Padding', text: "Espace entre contenu et bordure (rembourrage)." },
          { title: '3. Bordure', text: "Le cadre de la boîte." },
          { title: '4. Marge', text: "Espace entre cette boîte et les voisines." },
        ]},
        { type: 'info', variant: 'analogie', title: 'Analogie — Le tableau dans un cadre',
          content: "Le tableau = **contenu**. Le passe-partout = **padding**. Le cadre = **bordure**. L'espace entre le cadre et le mur = **marge**." },
        { type: 'code', language: 'css', title: 'Exemple',
          code: '.carte {\n  padding: 16px;\n  border: 1px solid #ddd;\n  margin: 24px;\n  border-radius: 8px;\n}' },
        { type: 'info', variant: 'attention', title: 'Astuce indispensable : box-sizing',
          content: "Par défaut, `width: 300px` ne compte que le contenu. Avec `* { box-sizing: border-box; }`, la largeur inclut padding et bordure. **Mets toujours cette règle en haut de ton CSS.**" },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 4 — Créer une carte avec le Box Model',
      body: [
        { type: 'prose', content: 'Dans ton HTML, ajoute une `<div class="carte">` contenant un titre `<h3>` et un `<p>`. Puis dans le CSS :' },
        { type: 'list', ordered: true, items: [
          'Ajoute `* { box-sizing: border-box; }` en tout premier dans ton CSS (si pas déjà fait).',
          'Cible `.carte` : `padding: 20px;`, `border: 1px solid #ccc;`, `border-radius: 12px;`, `margin: 16px 0;`.',
          'Ajoute un `background-color` léger (ex. `#fafafa`) sur la carte.',
          'Donne une `max-width: 400px` à la carte pour qu\u2019elle ne s\u2019étale pas.',
          'Observe dans l\u2019inspecteur du navigateur (clic droit → Inspecter → onglet « Computed ») : tu dois voir les 4 couches du box model colorées.',
        ]},
      ],
    },

    // --- e. Unités ---
    {
      type: 'section', title: 'e. Les unités',
      blocks: [
        { type: 'table', headers: ['Unité', 'Ce que c\u2019est', 'Quand l\u2019utiliser'],
          rows: [
            ['px', 'Pixel, fixe', 'Bordures, petits détails'],
            ['rem', 'Relatif à la base (16px)', 'Texte, espacements — le meilleur choix'],
            ['em', 'Relatif au parent', 'Padding interne, cas spécifiques'],
            ['%', 'Pourcentage du parent', 'Largeurs responsives'],
            ['vh / vw', '% de l\u2019écran', 'Sections plein écran'],
          ] },
        { type: 'info', variant: 'astuce',
          content: "Pour le texte, préfère `rem` : si l'utilisateur change la taille de police de son navigateur (accessibilité), tout s'adapte." },
      ],
    },

    // ==================== CSS 2 — MISE EN PAGE ====================
    {
      type: 'section', title: 'Cours 2 — Mise en page et responsive',
      blocks: [
        { type: 'info', variant: 'astuce', title: 'Objectifs du cours 2',
          content: "Utiliser Flexbox pour aligner, CSS Grid pour les grilles, et les media queries pour s'adapter à tous les écrans." },
      ],
    },

    // --- f. Flexbox ---
    {
      type: 'section', title: 'f. Flexbox : aligner sur un axe',
      blocks: [
        { type: 'prose', content:
          "Tu mets `display: flex` sur un conteneur, et ses enfants deviennent « flexibles »." },
        { type: 'code', language: 'css', title: 'Exemple Flexbox',
          code: '.nav-links {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  justify-content: space-between;\n}' },
        { type: 'table', headers: ['Propriété', 'Ce qu\u2019elle fait', 'Valeurs courantes'],
          rows: [
            ['display: flex', 'Active Flexbox', '—'],
            ['flex-direction', 'Direction', 'row (défaut), column'],
            ['justify-content', 'Distribution axe principal', 'flex-start, center, space-between'],
            ['align-items', 'Alignement axe transversal', 'flex-start, center, stretch'],
            ['gap', 'Espace entre enfants', '8px, 1rem'],
            ['flex-wrap', 'Retour à la ligne', 'nowrap, wrap'],
          ] },
        { type: 'info', variant: 'analogie', title: 'Analogie — L\u2019étagère',
          content: "Flexbox = une étagère. Objets en rang (row) ou empilés (column), poussés à gauche / centre / répartis, avec retour à la ligne quand c'est plein (wrap)." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 5 — Une barre de navigation en Flexbox',
      body: [
        { type: 'prose', content: 'Dans ton HTML, crée (ou réutilise) un `<nav>` avec une `<ul>` contenant 4 `<li>` (Accueil, Projets, Contact, Blog). Puis dans le CSS :' },
        { type: 'list', ordered: true, items: [
          'Cible le `<ul>` du nav : `display: flex;`, `list-style: none;` (retire les puces), `gap: 24px;`, `padding: 0;`.',
          'Cible les `<a>` du nav : `text-decoration: none;`, `color: #333;`.',
          'Ajoute un `:hover` sur les liens : `color: blue;`.',
          'Centre le tout horizontalement avec `justify-content: center;`.',
          'Vérifie : les liens doivent être sur une ligne, sans puces, centrés, avec un effet au survol.',
        ]},
      ],
    },

    // --- g. Grid ---
    {
      type: 'section', title: 'g. CSS Grid : la grille 2D',
      blocks: [
        { type: 'prose', content:
          "Grid crée une **grille à deux dimensions** (lignes ET colonnes). Parfait pour les galeries et layouts complexes." },
        { type: 'code', language: 'css', title: 'Exemple Grid',
          code: '.galerie {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}' },
        { type: 'info', variant: 'definition', title: 'Flexbox ou Grid ?',
          content: "**Flexbox** : un axe (nav, ligne de boutons). **Grid** : deux axes (galerie, layout de page). Les deux se combinent." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 6 — Une galerie en Grid',
      body: [
        { type: 'prose', content: 'Dans ton HTML, crée une `<div class="galerie">` contenant 6 `<div class="carte">` (réutilise le style de carte de l\u2019exercice 4). Puis :' },
        { type: 'list', ordered: true, items: [
          'Cible `.galerie` : `display: grid;`, `grid-template-columns: repeat(3, 1fr);`, `gap: 16px;`.',
          'Vérifie : les 6 cartes doivent s\u2019afficher en grille de 3 colonnes.',
          'Change `repeat(3, 1fr)` en `repeat(2, 1fr)` : observe le passage à 2 colonnes.',
          'Remets 3 colonnes.',
        ]},
      ],
    },

    // --- h. Responsive ---
    {
      type: 'section', title: 'h. Le responsive',
      blocks: [
        { type: 'prose', content:
          "Un site pro doit être lisible sur un 27 pouces comme sur un smartphone. On utilise les **media queries**." },
        { type: 'code', language: 'css', title: 'Approche mobile-first',
          code:
            '/* Mobile par défaut */\n.galerie { display: grid; grid-template-columns: 1fr; gap: 16px; }\n\n' +
            '/* Tablette (>= 768px) */\n@media (min-width: 768px) {\n  .galerie { grid-template-columns: repeat(2, 1fr); }\n}\n\n' +
            '/* Desktop (>= 1024px) */\n@media (min-width: 1024px) {\n  .galerie { grid-template-columns: repeat(3, 1fr); }\n}' },
        { type: 'info', variant: 'astuce', title: 'Mobile-first',
          content: "On code d'abord pour mobile, puis on ajoute des règles pour les écrans plus grands (`min-width`). Plus simple et plus fiable." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 7 — Rendre la galerie responsive',
      body: [
        { type: 'prose', content: 'Reprends la galerie de l\u2019exercice 6 et applique l\u2019approche mobile-first :' },
        { type: 'list', ordered: true, items: [
          'Change la règle `.galerie` pour qu\u2019elle affiche **1 colonne** par défaut.',
          'Ajoute une `@media (min-width: 768px)` qui passe à **2 colonnes**.',
          'Ajoute une `@media (min-width: 1024px)` qui passe à **3 colonnes**.',
          'Redimensionne la fenêtre du navigateur de large à étroit : les colonnes doivent s\u2019adapter progressivement.',
          'Bonus : dans la media query mobile, passe aussi le `<nav>` en `flex-direction: column` pour que les liens s\u2019empilent.',
        ]},
      ],
    },

    // --- i. Sélecteurs combinés ---
    {
      type: 'section', title: 'i. Les sélecteurs combinés',
      blocks: [
        { type: 'table', headers: ['Syntaxe', 'Nom', 'Cible', 'Exemple'],
          rows: [
            ['A.B (sans espace)', 'Chaîné', 'A ET classe B', 'p.intro = un <p class="intro">'],
            ['A B (avec espace)', 'Descendant', 'B dans A', 'nav a = tous les <a> dans <nav>'],
            ['A > B', 'Enfant direct', 'B juste sous A', 'header > nav'],
          ] },
        { type: 'info', variant: 'attention', title: 'Attention à l\u2019espace',
          content: "`p.intro` (sans espace) = un paragraphe avec la classe intro. `p .intro` (avec espace) = un élément .intro *à l'intérieur* d'un paragraphe. Un espace change tout." },
      ],
    },

    // --- Cyber + Mémo ---
    {
      type: 'section', title: 'Point cybersécurité',
      blocks: [
        { type: 'info', variant: 'attention', title: 'Le visuel comme signal de confiance',
          content: "Un site mal présenté envoie un signal négatif : « pas sérieux, peut-être pas sûr ». Le CSS n'est pas qu'esthétique : c'est un vecteur de confiance." },
      ],
    },
    {
      type: 'section', title: 'Mémo CSS',
      blocks: [
        { type: 'list', ordered: false, items: [
          'CSS = apparence. Un fichier, toutes les pages.',
          'Sélecteurs : `.classe` (le plus courant). Combinaisons : chaîné (A.B), descendant (A B), enfant direct (A > B).',
          'Box Model : contenu → padding → bordure → marge. Toujours `box-sizing: border-box`.',
          'Flexbox (1 axe) pour aligner, Grid (2 axes) pour les grilles.',
          'Responsive : `@media (min-width: ...)`, approche mobile-first.',
        ]},
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // TP — digital (GitHub)
  // ---------------------------------------------------------------------------
  tp: {
    kind: 'digital',
    title: "Styliser le site du chef-d'œuvre",
    mission: "Transformer les pages HTML brutes du chef-d'œuvre en un site visuellement professionnel et responsive.",
    prerequis: ['TP S4 terminé', 'Cours CSS 1 et CSS 2 suivis', 'Dépôt GitHub à jour'],
    criteres: ['Site visuellement professionnel', 'Responsive', 'CSS organisé et commenté', 'Commits réguliers'],
    bonus: "Ajouter un effet de survol (hover) sur les cartes : ombre portée + léger translateY.",
    steps: [
      {
        title: 'Liaison et styles globaux',
        body: [
          { type: 'list', ordered: true, items: [
            'Crée `style.css` et lie-le à tes 3 pages HTML.',
            'Ajoute `* { box-sizing: border-box; }` en premier.',
            'Style le `body` : font-family, background-color, color, margin: 0.',
            'Crée `.container` (max-width: 960px, margin: 0 auto, padding: 0 20px) et enveloppe le contenu de chaque page.',
          ]},
        ],
        done: 'Les 3 pages ont une police, un fond et un conteneur centré.',
        validation: { commit: 'git commit -m "feat: liaison CSS et styles globaux"' },
      },
      {
        title: 'Header, navigation et footer',
        body: [
          { type: 'list', ordered: true, items: [
            'Header en Flexbox (display: flex, justify-content: space-between, align-items: center).',
            'Liens du nav : text-decoration: none, couleur + hover.',
            'Footer : fond sombre, texte clair, centré, padding confortable.',
          ]},
        ],
        done: 'Header aligné, nav stylée, footer distinct.',
        validation: { commit: 'git commit -m "feat: header flexbox + nav + footer"' },
      },
      {
        title: 'Contenu et responsive',
        body: [
          { type: 'list', ordered: true, items: [
            'Style les sections du main (marges, titres colorés, listes espacées).',
            'Ajoute des media queries : sur mobile (< 768px), le header passe en colonne.',
            'Teste en redimensionnant la fenêtre.',
          ]},
        ],
        done: 'Le site est lisible en large et en étroit.',
        validation: { commit: 'git commit -m "feat: styles contenu + responsive" && git push' },
      },
    ],
  },
};
