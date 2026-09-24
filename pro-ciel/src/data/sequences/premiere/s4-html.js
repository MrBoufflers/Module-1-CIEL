// =============================================================================
// Séquence S4 — HTML : le squelette du web
// Niveau : Première · Durée : 6 h · TP 'digital' (GitHub)
// Cours enrichi : attributs, indentation & imbrication, liens & navigation,
// formulaires. 7 exercices intégrés au cours, sans correction (faite à l'oral).
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
      duree: '3 h',
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
        "Comprendre comment fonctionne le web, structurer une page avec les balises et leurs " +
        "**attributs**, **indenter et imbriquer** proprement, créer des **liens** et une " +
        "**navigation** entre pages, écrire du HTML **sémantique**, construire un **formulaire**, " +
        "et héberger sur GitHub.",
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
          "Une balise s'écrit entre chevrons, et la plupart vont **par paire** : une balise " +
          "**ouvrante** et une balise **fermante** (avec un `/`)." },
        { type: 'code', language: 'html', title: 'Une balise paire',
          code:
            '<p>Ceci est un paragraphe.</p>\n' +
            '<!-- balise ouvrante : <p>   |   balise fermante : </p> -->\n' +
            '<!-- ceci est un commentaire : invisible dans la page -->' },
        { type: 'info', variant: 'analogie', title: 'Analogie',
          content: "Le HTML est le plan de l'architecte : il définit les pièces, les étages, les portes " +
          "(les liens), mais pas la couleur des murs. Ça, c'est le CSS (S5)." },
        { type: 'prose', content: "Toute page HTML commence par ce squelette minimal :" },
        { type: 'code', language: 'html', title: 'Le squelette de départ',
          code:
            '<!DOCTYPE html>\n<html lang="fr">\n<head>\n' +
            '\t<meta charset="UTF-8">\n' +
            '\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
            '\t<title>Titre de ma page</title>\n' +
            '</head>\n<body>\n\t<!-- Contenu visible ici -->\n</body>\n</html>' },
        { type: 'list', ordered: false, items: [
          '`<!DOCTYPE html>` : déclare du HTML5.',
          '`<html lang="fr">` : le conteneur de toute la page, en français.',
          '`<head>` : les métadonnées (invisibles) : encodage, titre de l’onglet.',
          '`<body>` : le contenu visible.',
          'Un **commentaire** `<!-- ... -->` : une note pour toi, jamais affichée.',
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
          'Ajoute un **commentaire** `<!-- ... -->` au-dessus du `<h1>`.',
          'Ouvre le fichier dans le navigateur (clic droit → ouvrir avec) et vérifie que ça s’affiche.',
        ]},
      ],
    },

    // ===== PARTIE 3 — ATTRIBUTS =====
    {
      type: 'section', title: "Partie 3 — Anatomie d'une balise : les attributs",
      blocks: [
        { type: 'prose', content:
          "Une balise peut recevoir des **attributs** (on dit aussi des **paramètres**) qui la " +
          "**configurent**. Un attribut s'écrit **toujours dans la balise ouvrante**, sous la forme " +
          "`nom=\"valeur\"`. Une même balise peut en avoir plusieurs, séparés par des espaces." },
        { type: 'code', language: 'html', title: 'Des attributs sur une balise',
          code:
            '<!-- href = la destination du lien -->\n' +
            '<a href="https://developer.mozilla.org" title="Documentation de reference">MDN</a>\n\n' +
            '<!-- plusieurs attributs, separes par des espaces -->\n' +
            '<img src="images/chat.jpg" alt="Un chat roux endormi" width="300">' },
        { type: 'info', variant: 'analogie', title: 'Analogie',
          content: "Les attributs, ce sont les **réglages** d'un appareil. Une télé, c'est une télé ; " +
          "mais volume, luminosité et chaîne (ses réglages) changent son comportement. Idem pour une " +
          "balise : `<img>` reste une image, mais `src`, `alt` et `width` disent *quelle* image et *comment*." },
        { type: 'prose', content: "Les attributs que tu croiseras le plus souvent :" },
        { type: 'cards', columns: 2, items: [
          { code: 'href', text: "La destination d'un lien `<a>` (une URL ou une autre page)." },
          { code: 'src', text: "La source d'une image `<img>` (le chemin du fichier)." },
          { code: 'alt', text: "Le texte alternatif d'une image (accessibilité + si l'image ne charge pas)." },
          { code: 'id', text: "Un identifiant **unique** dans la page (sert aux ancres et au CSS/JS)." },
          { code: 'class', text: "Une étiquette **réutilisable** sur plusieurs balises (prépare le CSS, S5)." },
          { code: 'type / placeholder', text: "Configurent les champs de formulaire (on le verra en Partie 8)." },
        ]},
        { type: 'prose', content:
          "Certaines balises n'entourent aucun contenu : elles sont **auto-fermantes** (on dit *balises " +
          "orphelines* ou *void elements*). Elles n'ont **pas de balise fermante** — toute leur information " +
          "est dans leurs attributs." },
        { type: 'code', language: 'html', title: 'Balises auto-fermantes',
          code:
            '<img src="logo.png" alt="Logo">   <!-- une image -->\n' +
            '<br>                               <!-- un saut de ligne -->\n' +
            '<hr>                               <!-- une ligne de separation -->\n' +
            '<input type="text">                <!-- un champ de saisie -->\n' +
            '<meta charset="UTF-8">             <!-- une metadonnee -->' },
        { type: 'info', variant: 'attention', title: 'id unique, class réutilisable',
          content: "Un **`id`** ne doit apparaître **qu'une seule fois** dans la page. Une **`class`** peut " +
          "être posée sur autant de balises que tu veux. Tu t'en serviras énormément dès le CSS (S5)." },
      ],
    },

    // ===== EXERCICE 2 — ATTRIBUTS =====
    {
      type: 'exercise',
      title: 'Exercice 2 — Repérer et ajouter des attributs',
      body: [
        { type: 'prose', content: 'Dans un fichier `exercice2.html` :' },
        { type: 'list', ordered: true, items: [
          'Recopie cet extrait, puis **liste** tous les attributs que tu y vois (nom + valeur) :',
        ]},
        { type: 'code', language: 'html', title: 'À analyser',
          code: '<a href="https://exemple.fr" title="Site officiel">Exemple</a>\n<img src="photo.jpg" alt="" width="200">' },
        { type: 'list', ordered: true, items: [
          "Sur l'image, l'`alt` est vide : écris un `alt` qui décrit **vraiment** une photo de ton choix.",
          'Ajoute une image de ton prénom-logo avec `src`, `alt` et `width`.',
          'Ajoute un lien vers un site réel avec un attribut `title`.',
          'Ajoute un `<input type="text">` (auto-fermante) et observe qu’il n’a **pas** de balise fermante.',
        ]},
      ],
    },

    // ===== PARTIE 4 — INDENTATION & IMBRICATION =====
    {
      type: 'section', title: "Partie 4 — Imbrication et indentation",
      blocks: [
        { type: 'prose', content:
          "En HTML, on place des balises **dans** d'autres balises : c'est l'**imbrication**. On parle " +
          "alors de balise **parente** et de balises **enfants**. Règle absolue : on **ferme la dernière " +
          "balise ouverte en premier** — les balises ne doivent jamais se croiser." },
        { type: 'code', language: 'html', title: 'Imbrication : faux vs correct',
          code:
            '<!-- FAUX : les balises se croisent -->\n' +
            '<p><strong>Bonjour</p></strong>\n\n' +
            '<!-- CORRECT : la derniere ouverte est la premiere fermee -->\n' +
            '<p><strong>Bonjour</strong></p>' },
        { type: 'prose', content:
          "L'**indentation**, c'est décaler le code d'une **tabulation** (la touche **Tab**) à chaque niveau d'imbrication. " +
          "Ça ne change **rien** pour le navigateur, mais ça rend l'**arborescence** lisible d'un coup " +
          "d'œil : on voit immédiatement qui est enfant de qui. C'est **primordial** en équipe et pour " +
          "se relire." },
        { type: 'code', language: 'html', title: 'Bien indenté = arborescence visible',
          code:
            '<main>\n' +
            '\t<section>\n' +
            '\t\t<h2>Mon titre</h2>\n' +
            '\t\t<p>Un paragraphe.</p>\n' +
            '\t</section>\n' +
            '</main>' },
        { type: 'info', variant: 'astuce', title: 'Laisse VS Code indenter pour toi',
          content: "Dans VS Code, **formate automatiquement** tout le fichier avec **Maj+Alt+F** (Windows) " +
          "ou **Maj+Option+F** (Mac). Prends l'habitude de le faire avant chaque commit : ton code reste propre." },
      ],
    },

    // ===== EXERCICE 3 — INDENTATION =====
    {
      type: 'exercise',
      title: 'Exercice 3 — Réparer un code mal imbriqué et mal indenté',
      body: [
        { type: 'prose', content: 'Recopie ce code (volontairement cassé) dans `exercice3.html`, puis corrige-le :' },
        { type: 'code', language: 'html', title: 'À réparer',
          code:
            '<main>\n' +
            '<section>\n' +
            '<h2>Mes jeux préférés</h2>\n' +
            '<p><strong>Mon jeu favori : Zelda</p></strong>\n' +
            '<ul>\n' +
            '<li>Minecraft</li>\n' +
            '<li>Mario</li>\n' +
            '</ul>\n' +
            '</section>\n' +
            '</main>' },
        { type: 'list', ordered: true, items: [
          "Corrige l'**imbrication** : trouve la ligne où deux balises se **croisent** et remets-les dans le bon ordre.",
          'Corrige l’**indentation** : une **tabulation** (Tab) par niveau, puis vérifie avec **Maj+Alt+F**.',
          'Ouvre dans le navigateur : la liste doit s’afficher correctement.',
        ]},
      ],
    },

    // ===== PARTIE 5 — BALISES DE CONTENU =====
    {
      type: 'section', title: 'Partie 5 — Les balises de contenu',
      blocks: [
        { type: 'prose', content: 'Les balises que tu utiliseras le plus souvent :' },
        { type: 'cards', columns: 2, items: [
          { code: '<h1> à <h6>', text: 'Les titres. <h1> est le plus important, <h6> le moins. Un seul <h1> par page.' },
          { code: '<p>', text: 'Un paragraphe de texte.' },
          { code: '<a href="URL">', text: "Un lien hypertexte. L'attribut href est la destination (voir Partie 6)." },
          { code: '<img src alt>', text: "Une image. src = le chemin, alt = le texte alternatif (accessibilité)." },
          { code: '<ul> <ol> <li>', text: 'Des listes : ul à puces, ol numérotée, li pour chaque élément.' },
          { code: '<strong> <em>', text: 'Mettre en valeur : strong (importance), em (emphase).' },
        ]},
        { type: 'code', language: 'html', title: 'Chaque balise en action',
          code:
            '<h1>Titre principal de la page</h1>\n' +
            '<h2>Un sous-titre</h2>\n\n' +
            '<p>Un paragraphe avec du <strong>texte important</strong> et du <em>texte en emphase</em>.</p>\n\n' +
            '<a href="https://developer.mozilla.org">Un lien vers MDN</a>\n\n' +
            '<img src="chat.jpg" alt="Un chat roux">\n\n' +
            '<ul>\n' +
            '\t<li>Une puce</li>\n' +
            '\t<li>Une autre puce</li>\n' +
            '</ul>\n\n' +
            '<ol>\n' +
            '\t<li>Premiere etape</li>\n' +
            '\t<li>Deuxieme etape</li>\n' +
            '</ol>' },
        { type: 'info', variant: 'astuce', title: 'Hiérarchie des titres',
          content: "Les titres suivent une **hiérarchie logique** : un seul `<h1>` (le sujet de la page), " +
          "puis des `<h2>` pour les grandes parties, des `<h3>` à l'intérieur, etc. On ne saute pas de niveau " +
          "juste pour l'apparence." },
      ],
    },

    // ===== EXERCICE 4 — PAGE COMPLÈTE =====
    {
      type: 'exercise',
      title: 'Exercice 4 — Une page complète avec toutes les balises',
      body: [
        { type: 'prose', content: 'Crée un fichier `exercice4.html` et construis une page qui utilise **toutes** les balises de contenu :' },
        { type: 'list', ordered: true, items: [
          'Un titre `<h1>` (le sujet de la page) et un sous-titre `<h2>`.',
          'Deux paragraphes `<p>` avec du texte (utilise `<strong>` et `<em>` dans au moins un).',
          'Un lien `<a>` vers un site réel (par ex. MDN).',
          'Une image `<img>` (image libre de droits, ou un placeholder comme `https://picsum.photos/400/200`). N’oublie pas l’`alt`.',
          'Une liste à puces `<ul>` de 3 éléments et une liste numérotée `<ol>` de 3 éléments.',
          'Indente proprement (une **tabulation** par niveau) et vérifie avec **Maj+Alt+F**.',
          'Ouvre dans le navigateur et vérifie que tout s’affiche.',
        ]},
      ],
    },

    // ===== PARTIE 6 — LIENS & NAVIGATION =====
    {
      type: 'section', title: 'Partie 6 — Les liens et la navigation',
      blocks: [
        { type: 'prose', content:
          "Le lien hypertexte est **le cœur du web** (le *HyperText* de HTML). On le crée avec la balise " +
          "`<a>` et son attribut **`href`** (la destination). Il existe plusieurs types de liens :" },
        { type: 'code', language: 'html', title: 'Les types de liens',
          code:
            '<!-- 1. Lien externe : une URL complete (absolue) -->\n' +
            '<a href="https://developer.mozilla.org" target="_blank" rel="noopener">MDN</a>\n\n' +
            '<!-- 2. Lien interne : une autre page du meme site (chemin relatif) -->\n' +
            '<a href="contact.html">Nous contacter</a>\n\n' +
            '<!-- 3. Ancre : aller a un endroit precis de la page (via un id) -->\n' +
            '<a href="#footer">Aller en bas de page</a>\n\n' +
            '<!-- 4. E-mail -->\n' +
            '<a href="mailto:prof@exemple.fr">Envoyer un mail</a>' },
        { type: 'prose', content:
          "Pour les liens internes (et les images), on utilise des **chemins relatifs** : on décrit où est " +
          "le fichier **par rapport à la page actuelle**." },
        { type: 'list', ordered: false, items: [
          '`page.html` : un fichier dans le **même dossier**.',
          '`dossier/page.html` : un fichier dans un **sous-dossier**.',
          '`../page.html` : **remonter d’un niveau** (dossier parent).',
          'La même logique s’applique à `<img src="...">`.',
        ]},
        { type: 'info', variant: 'analogie', title: 'La navigation = le plan du métro',
          content: "Un site multi-pages, ce sont des stations (les pages) reliées par des lignes (les liens). " +
          "Le **menu de navigation** (`<nav>`) doit être **identique sur toutes les pages** : l'utilisateur " +
          "garde toujours le même plan sous les yeux et n'est jamais perdu." },
        { type: 'info', variant: 'attention', title: 'Le piège n°1 : les chemins cassés',
          content: "Un chemin relatif faux = un lien mort ou une image absente. Vérifie **toujours** tes liens " +
          "en cliquant dessus. `target=\"_blank\"` ouvre dans un nouvel onglet ; ajoute alors `rel=\"noopener\"` " +
          "(sécurité)." },
      ],
    },

    // ===== EXERCICE 5 — LIENS & NAVIGATION =====
    {
      type: 'exercise',
      title: 'Exercice 5 — Relier deux pages',
      body: [
        { type: 'list', ordered: true, items: [
          'Crée deux fichiers dans le même dossier : `accueil.html` et `infos.html`.',
          'Dans **chaque** page, ajoute un `<nav>` **identique** avec deux liens internes : « Accueil » (`accueil.html`) et « Infos » (`infos.html`).',
          'Teste la navigation dans les deux sens (clique sur les liens).',
          'Sur `accueil.html`, ajoute un **lien externe** vers un site réel avec `target="_blank"` et `rel="noopener"`.',
          'Sur `infos.html`, donne un `id` à ton `<footer>` (ex. `id="bas"`) et ajoute en haut de page une **ancre** `<a href="#bas">Aller en bas</a>`.',
        ]},
      ],
    },

    // ===== PARTIE 7 — SÉMANTIQUE =====
    {
      type: 'section', title: 'Partie 7 — Le HTML sémantique : donner du sens',
      blocks: [
        { type: 'prose', content:
          "C'est le cœur du HTML5. Au lieu d'empiler des `<div>` génériques, on utilise des " +
          "balises qui décrivent le **rôle** du contenu. Pour les moteurs de recherche (référencement) " +
          "et l'accessibilité (lecteurs d'écran)." },
        { type: 'info', variant: 'attention', title: 'La règle d’or',
          content: 'Choisis toujours la balise qui décrit le mieux le **sens** de ton contenu, pas son apparence.' },
        { type: 'component', name: 'SemanticLayoutDiagram' },
        { type: 'list', ordered: false, items: [
          '`<header>` : l’en-tête (logo, titre, navigation).',
          '`<nav>` : les liens de navigation principaux.',
          '`<main>` : le contenu principal et unique (un seul par page).',
          '`<section>` : un regroupement thématique avec un titre.',
          '`<article>` : un contenu autonome (article, produit).',
          '`<aside>` : contenu complémentaire.',
          '`<footer>` : pied de page (contact, crédits).',
        ]},
      ],
    },

    // ===== EXERCICE 6 — SÉMANTIQUE =====
    {
      type: 'exercise',
      title: 'Exercice 6 — Restructurer en HTML sémantique',
      body: [
        { type: 'prose', content:
          "Reprends ton `exercice4.html` et transforme-le en page sémantique :" },
        { type: 'list', ordered: true, items: [
          'Enveloppe tout le contenu visible dans les bonnes balises sémantiques : `<header>`, `<main>`, `<footer>`.',
          'Déplace le `<h1>` dans le `<header>`.',
          'Ajoute un `<nav>` dans le `<header>` avec une liste de 3 liens (même fictifs).',
          'Regroupe tes paragraphes et listes dans une `<section>` à l’intérieur du `<main>`.',
          'Ajoute un `<footer>` avec ton nom et l’année.',
          'Ouvre dans le navigateur : visuellement rien ne change (c’est normal, le sémantique est invisible). Mais la structure est propre.',
        ]},
        { type: 'info', variant: 'astuce',
          content: 'Pour vérifier ta structure, utilise l’outil « Inspecteur » du navigateur (clic droit → Inspecter) et déplie les balises : tu dois voir header > nav, main > section, footer.' },
      ],
    },

    // ===== PARTIE 8 — FORMULAIRES =====
    {
      type: 'section', title: 'Partie 8 — Les formulaires',
      blocks: [
        { type: 'prose', content:
          "Un **formulaire** sert à **collecter des informations** auprès de l'utilisateur (inscription, " +
          "contact, recherche...). En Première, on construit **seulement sa structure** : le " +
          "**traitement** des données viendra en JavaScript (S7), puis côté serveur en Terminale." },
        { type: 'prose', content:
          "Tout est contenu dans une balise `<form>`. Le duo de base, c'est `<label>` + `<input>`, " +
          "**reliés** par `for` (sur le label) et `id` (sur l'input) — essentiel pour l'accessibilité." },
        { type: 'code', language: 'html', title: 'Un formulaire de base',
          code:
            '<form>\n' +
            '\t<label for="prenom">Prenom</label>\n' +
            '\t<input type="text" id="prenom" name="prenom" placeholder="Ton prenom" required>\n\n' +
            '\t<label for="email">E-mail</label>\n' +
            '\t<input type="email" id="email" name="email" required>\n\n' +
            '\t<label for="message">Message</label>\n' +
            '\t<textarea id="message" name="message"></textarea>\n\n' +
            '\t<button type="submit">Envoyer</button>\n' +
            '</form>' },
        { type: 'prose', content: "L'attribut `type` de l'`<input>` change le champ affiché :" },
        { type: 'cards', columns: 2, items: [
          { code: 'type="text"', text: 'Un texte court (nom, pseudo).' },
          { code: 'type="email"', text: 'Une adresse e-mail (le navigateur vérifie le format).' },
          { code: 'type="password"', text: 'Un mot de passe (caractères masqués).' },
          { code: 'type="number"', text: 'Un nombre.' },
          { code: 'type="date"', text: 'Un sélecteur de date.' },
          { code: 'type="checkbox" / "radio"', text: 'Une case à cocher / un choix exclusif.' },
        ]},
        { type: 'info', variant: 'attention', title: 'Toujours associer label et input',
          content: "Le `for` du `<label>` doit valoir le `id` de l'`<input>`. Ainsi, cliquer sur le libellé " +
          "place le curseur dans le champ, et les lecteurs d'écran savent quel champ est lequel. " +
          "`placeholder` = texte d'aide grisé ; `required` = champ obligatoire." },
      ],
    },

    // ===== EXERCICE 7 — FORMULAIRE =====
    {
      type: 'exercise',
      title: 'Exercice 7 — Un formulaire d’inscription',
      body: [
        { type: 'prose', content: 'Dans `exercice7.html`, construis un formulaire d’inscription :' },
        { type: 'list', ordered: true, items: [
          'Un champ **Prénom** (`type="text"`, `required`, avec un `placeholder`).',
          'Un champ **E-mail** (`type="email"`, `required`).',
          'Un champ **Date de naissance** (`type="date"`).',
          'Une zone **Message** avec un `<textarea>`.',
          'Un `<button type="submit">` pour envoyer.',
          'Relie **chaque** `<label>` à son `<input>` avec `for`/`id`. Vérifie : cliquer sur un libellé doit activer son champ.',
        ]},
        { type: 'info', variant: 'astuce',
          content: 'Le bouton ne « fait » rien pour l’instant, c’est normal : un formulaire HTML est purement structurel. On le rendra vivant en JavaScript (S7).' },
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
        { type: 'info', variant: 'attention', title: 'Un formulaire = des données à ne jamais croire',
          content:
            "Un formulaire envoie ce que l'utilisateur tape — donc potentiellement n'importe quoi. Les " +
            "attributs comme `required` sont un **confort**, pas une **sécurité** : la vraie validation se " +
            "fera côté serveur (Terminale). Retiens dès maintenant : **ne jamais faire confiance à une saisie**." },
      ],
    },
    {
      type: 'section', title: 'Mémo',
      blocks: [
        { type: 'list', ordered: false, items: [
          'Le HTML structure le contenu ; l’apparence, c’est le CSS (S5).',
          'Squelette : <!DOCTYPE>, <html>, <head>, <body>. Commentaire : <!-- ... -->.',
          'Une balise se configure avec des **attributs** : `nom="valeur"` (href, src, alt, id, class...).',
          'On **imbrique** (parent/enfant) et on **indente** (une **tabulation** par niveau) ; on ferme la dernière balise ouverte en premier.',
          '**Liens** : `href` externe (URL) ou interne (chemin relatif `page.html`, `../`), ancres `#id`, `mailto:`.',
          'Balises **sémantiques** (header, nav, main, section, footer) = du sens.',
          '**Formulaire** : `<label>` + `<input>` reliés par `for`/`id` ; traitement en JS (S7).',
          'Le HTML est public : jamais de données sensibles en clair.',
        ]},
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // TP — digital (GitHub) — chaque notion du cours est pratiquée
  // ---------------------------------------------------------------------------
  tp: {
    kind: 'digital',
    title: "Le mini-site de présentation de ton chef-d'œuvre",
    mission:
      "Construire un site web multi-pages en HTML5 sémantique — attributs corrects, code bien imbriqué " +
      "et indenté, navigation par liens, et un formulaire — versionné sur GitHub.",
    prerequis: ['Cours S4 suivi', 'VS Code et Git installés', 'Dépôt GitHub Classroom accepté'],
    criteres: [
      'Site multi-pages fonctionnel',
      'HTML sémantique correct (header, nav, main, section, footer)',
      'Attributs corrects : `alt` sur les images, `href` sur les liens',
      'Navigation par liens internes relatifs + au moins un lien externe (`target="_blank"`)',
      'Formulaire avec labels associés (`for`/`id`) et types d’input adaptés',
      'Code propre, bien imbriqué et indenté (tabulation)',
      'Commits réguliers avec messages clairs',
    ],
    bonus: "Ajouter une section avec <figure>, <img> et <figcaption>, et une ancre « Retour en haut ».",
    steps: [
      {
        title: "Initialisation & page d'accueil",
        body: [
          { type: 'list', ordered: true, items: [
            "Crée un dossier `mon-chef-d-oeuvre-nom-prenom` et ouvre-le dans VS Code.",
            "Initialise Git : `git init`.",
            "Crée `index.html` avec le squelette HTML5 et les balises sémantiques (header, nav, main, footer).",
            "Dans le header : un `<h1>` (nom du projet) et une image (logo ou illustration) avec un `alt` pertinent.",
            "Dans le main : une `<section>` « Présentation » avec un `<p>`. Dans le footer : « Projet réalisé par ... ».",
            "**Indente proprement** (une **tabulation** par niveau) et formate avec **Maj+Alt+F** avant de committer.",
          ]},
        ],
        done: "La page d'accueil s'affiche avec header / nav / main / footer, une image avec `alt`, et un code bien indenté.",
        validation: { commit: 'git commit -m "Initial commit: structure et page d\'accueil"' },
      },
      {
        title: 'Page « Détails » & navigation',
        body: [
          { type: 'list', ordered: true, items: [
            "Crée `details.html` (copie de index.html). Change le `<title>`.",
            "Dans le main : une `<section>` « Matériel nécessaire » avec `<ul>`, une `<section>` « Fonctionnalités » avec `<ol>`.",
            "Remplis le `<nav>` des deux pages avec une liste de liens **identique** et **relative** : Accueil (`index.html`) et Détails (`details.html`).",
            "Ajoute un **lien externe** (vers une doc ou une ressource) avec `target=\"_blank\"` et `rel=\"noopener\"`.",
            "Teste la navigation dans les deux sens et le lien externe.",
          ]},
          { type: 'info', variant: 'astuce',
            content: "Un menu **identique** partout = règle d'ergonomie. L'utilisateur ne doit jamais être perdu." },
        ],
        done: "Les deux pages se naviguent dans les deux sens via le menu (liens relatifs), et un lien externe s'ouvre dans un nouvel onglet.",
        validation: { commit: 'git commit -m "feat: page Détails et navigation"' },
      },
      {
        title: 'Page « Contact » & mise en ligne',
        body: [
          { type: 'list', ordered: true, items: [
            "Crée `contact.html`. Ajoute un `<form>` avec, pour chaque champ, un `<label for>` relié à son `<input id>` : un `<input type=\"text\">` (nom), un `<input type=\"email\" required>`, un `<textarea>` (message) et un `<button type=\"submit\">`.",
            "Ajoute un `placeholder` sur au moins un champ.",
            "Ajoute le lien contact dans le `<nav>` des **trois** pages.",
            "Formate le code (**Maj+Alt+F**), puis pousse sur GitHub et active GitHub Pages (Settings → Pages → branche main).",
          ]},
          { type: 'info', variant: 'attention',
            content: "Le formulaire est structurel : il ne fait rien encore. On le rendra interactif en JS (S7)." },
        ],
        done: "Les trois pages sont reliées, le formulaire a des labels associés (for/id), et le site est en ligne.",
        validation: { commit: 'git commit -m "feat: page Contact + mise en ligne" && git push' },
      },
    ],
  },
};
