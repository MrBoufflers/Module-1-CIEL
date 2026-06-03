// =============================================================================
// Séquence S2 — Écosystème logiciel & bureautique professionnelle
// Niveau : Première · Durée : 6 h (3 h cours + activités · 3 h contrôle)
// Format : système de blocs (voir CAHIER-DES-CHARGES-V2.md).
//
// NOTES POUR CLAUDE CODE :
// - On REPREND une partie du fond de module2content.jsx (OS, organisation des
//   fichiers) et on ABANDONNE le TP d'installation de Windows.
// - Le composant interactif FileExplorerComponent (V1) est conservé et rendu via
//   { type: 'component', name: 'FileExplorerComponent' }.
// - Le TP est de type 'physical' au sens « pas de dépôt Git » : c'est une production
//   bureautique (fichiers Word/Excel/PowerPoint), pas du code versionné. On réutilise
//   donc kind: 'physical' pour ne pas afficher d'encadré commit/push. La validation
//   se fait sur les fichiers produits (rendus au professeur / déposés où il l'indique).
// - L'évaluation (contrôle) est dans un fichier séparé et imprimée (mini-dossier
//   comparatif, modèles imposés, G1=CPU / G2=GPU). meta.evalInfo décrit l'onglet Éval.
// =============================================================================

export const s2Logiciels = {
  meta: {
    id: 'logiciels',                // URL : /premiere/logiciels
    sequence: 'S2',
    niveau: 'premiere',
    title: 'Écosystème logiciel & bureautique professionnelle',
    icon: 'apps',                   // identifiant d'icône Tabler — PAS d'emoji
    duree: '6 h',
    theme: 'Logiciel & outils pro',
    filRouge:
      "En S1 on a compris la machine (le matériel). Ici on découvre les logiciels qui " +
      "tournent dessus, et on apprend à se servir des outils bureautiques comme un pro. " +
      "En S3 on versionnera notre travail avec Git, avant de construire le web en S4.",
    ref: { competences: ['C04', 'C01'], savoirs: ['S1.2', 'S2.1'] },
    cyber:
      "L'hygiène des fichiers (nommage, sauvegarde, versions) et la méfiance face aux " +
      "fichiers piégés.",
    evalInfo: {
      format: 'Contrôle pratique sur poste — mini-dossier comparatif (tableur + présentation + texte), avec recherche Internet (sans IA)',
      duree: '3 h',
      competence: 'C04 (Application) · C01 (Découverte)',
      ressourcesAutorisees: ['Recherche Internet libre', 'Le cours S2'],
      note: "Évaluation réalisée en classe — aucun sujet n'est publié sur le site. L'usage d'une IA est interdit pendant le contrôle.",
    },
  },

  // ---------------------------------------------------------------------------
  // COURS
  // ---------------------------------------------------------------------------
  course: [
    {
      type: 'hero',
      title: 'Écosystème logiciel & bureautique',
      subtitle:
        "Une machine sans logiciel est une coquille vide. Découvrons ce qui lui donne vie, " +
        "puis apprenons à nous servir des outils que tout professionnel doit maîtriser.",
    },
    {
      type: 'info',
      variant: 'astuce',
      title: 'Objectifs de la séquence',
      content:
        "À la fin, tu sauras : expliquer ce qu'est un système d'exploitation, distinguer une " +
        "application web d'un logiciel installé, classer les familles de logiciels, et produire " +
        "des documents professionnels (traitement de texte, tableur, présentation).",
    },

    {
      type: 'section',
      title: "a. Le système d'exploitation : le chef d'orchestre",
      blocks: [
        {
          type: 'prose',
          content:
            "Un **système d'exploitation (OS)** est le logiciel principal de la machine. Il fait le " +
            "lien entre le matériel (vu en S1) et toi, avec tes applications. Sans OS, l'ordinateur " +
            "n'est qu'une boîte de métal et de plastique.",
        },
        {
          type: 'list',
          ordered: false,
          items: [
            "**Gérer le matériel** : il parle au processeur, à la RAM, au stockage.",
            "**Gérer les fichiers** : il organise les données en dossiers et fichiers.",
            "**Fournir une interface** : le bureau, les icônes, les fenêtres.",
            "**Exécuter les logiciels** : il donne à chaque application les ressources nécessaires.",
          ],
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Repère historique',
          content:
            "Au début, tout se faisait en ligne de commande (texte uniquement, comme MS-DOS). Puis " +
            "sont arrivées les interfaces graphiques (fenêtres + souris). On reverra la ligne de " +
            "commande : c'est un outil toujours essentiel pour un professionnel.",
        },
        {
          type: 'table',
          headers: ['Windows', 'macOS', 'Linux'],
          rows: [
            [
              'Le plus répandu. Grande compatibilité logicielle. Accessible aux débutants.',
              'Exclusif aux appareils Apple. Réputé pour sa stabilité et son design.',
              'Open source, gratuit, ultra-personnalisable. Le roi des serveurs.',
            ],
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'À retenir pour la suite',
          content:
            "Linux est le système des serveurs. Quand on déploiera notre site web en Terminale, il " +
            "tournera très probablement sur un serveur Linux : c'est l'OS qui fait tourner la " +
            "majorité du web.",
        },
      ],
    },

    {
      type: 'section',
      title: 'b. Comment Windows organise les fichiers',
      blocks: [
        {
          type: 'prose',
          content:
            "L'**Explorateur de fichiers** sert à naviguer dans tes données. Le lecteur `C:` est le " +
            "disque principal, organisé en une hiérarchie de dossiers. Bien ranger ses fichiers est " +
            "une compétence pro : un dossier de projet clair, des noms explicites, pas de " +
            "« Document1 (2) (final) (vrai final).docx ».",
        },
        { type: 'component', name: 'FileExplorerComponent' },
      ],
    },

    {
      type: 'section',
      title: 'c. Web ou logiciel installé : où tourne le programme ?',
      blocks: [
        {
          type: 'prose',
          content:
            "Distinction fondamentale du métier : tous les logiciels se rangent en deux catégories " +
            "selon **l'endroit où ils s'exécutent**.",
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Le logiciel installé', text: "Installé sur ta machine, il s'exécute dessus (CPU, RAM). Fonctionne sans Internet, mais à installer et mettre à jour sur chaque poste. Ex. : Word installé, un jeu, VS Code." },
            { title: "L'application web", text: "S'exécute en partie sur un serveur distant ; tu l'utilises via ton navigateur. Rien à installer, accessible partout, mais nécessite Internet. Ex. : Gmail, Google Docs, un site marchand." },
          ],
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Le modèle client / serveur',
          content:
            "Quand tu utilises une application web, ta machine est le **client** : elle *demande*. Le " +
            "**serveur** (machine distante, souvent sous Linux) *répond*. Le navigateur affiche le " +
            "résultat. C'est exactement ce qu'on construira à partir de S4.",
        },
        {
          type: 'info',
          variant: 'analogie',
          title: 'Analogie — Le DVD et le streaming',
          content:
            "Un logiciel installé, c'est un DVD : tu possèdes le film chez toi, il marche sans " +
            "Internet, mais il faut le disque. Une application web, c'est le streaming : le film est " +
            "sur un serveur, tu y accèdes de partout avec une connexion, sans rien posséder.",
        },
        {
          type: 'table',
          headers: ['', 'Logiciel installé', 'Application web'],
          rows: [
            ['S\u2019exécute…', 'Sur ta machine', 'En partie sur un serveur distant'],
            ['Accès', 'Le logiciel installé localement', 'Via un navigateur'],
            ['Internet', 'Pas toujours nécessaire', 'Nécessaire'],
            ['Mise à jour', 'Sur chaque machine', 'Automatique, côté serveur'],
            ['Exemple', 'Word, VS Code, un jeu', 'Gmail, Google Docs, un site web'],
          ],
        },
      ],
    },

    {
      type: 'section',
      title: 'd. Les grandes familles de logiciels',
      blocks: [
        { type: 'prose', content: "Au-delà du « où ça tourne », on classe les logiciels par **usage** :" },
        {
          type: 'list',
          ordered: false,
          items: [
            "**Systèmes d'exploitation** : Windows, Linux, macOS.",
            "**Bureautique** : traitement de texte, tableur, présentation.",
            "**Navigateurs web** : Firefox, Chrome, Edge.",
            "**Outils de développement** : éditeurs de code (VS Code), terminaux, Git (S3).",
            "**Multimédia** : retouche d'image, montage vidéo, son.",
            "**Utilitaires** : antivirus, compression, sauvegarde.",
          ],
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Logiciel libre vs propriétaire',
          content:
            "Certains logiciels sont **libres/open source** (gratuits, code ouvert, modifiables : " +
            "Linux, Firefox, LibreOffice) ; d'autres **propriétaires** (payants, code fermé : Windows, " +
            "Microsoft Office). Ce n'est pas « gratuit contre payant » : c'est surtout une question de " +
            "liberté d'usage et d'accès au code.",
        },
      ],
    },

    {
      type: 'section',
      title: 'e. La bureautique professionnelle',
      blocks: [
        {
          type: 'prose',
          content: "Trois outils que tout professionnel doit maîtriser. On les présente ici ; tu les pratiques juste après.",
        },
        {
          type: 'cards',
          columns: 1,
          items: [
            { title: 'Traitement de texte (Word / Writer)', text: "Pour des documents structurés. L'erreur du débutant : mettre en forme à la main. Le pro utilise les styles (Titre 1, Titre 2…) : cohérence garantie et table des matières automatique." },
            { title: 'Tableur (Excel / Calc)', text: "Pour manipuler des données et calculer. Sa force : les formules. On ne calcule pas à la main, on écrit une formule qui se recalcule seule (=SOMME, =MOYENNE, une multiplication…)." },
            { title: 'Présentation (PowerPoint / Impress)', text: "Pour présenter à l'oral. L'erreur du débutant : tout écrire sur la diapo. Le pro met peu de texte (des mots-clés), des visuels, et c'est lui qui parle." },
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          title: "Une formule, c'est déjà de la logique",
          content:
            "Quand tu écris `=A1*B1`, tu donnes une *instruction* à la machine : « multiplie ces deux " +
            "valeurs ». C'est un premier pas vers la programmation : on décrit un calcul une fois, la " +
            "machine l'exécute autant qu'on veut. On retrouvera cette idée en JavaScript (S6) et Python (S8).",
        },
      ],
    },

    {
      type: 'section',
      title: "f. Point cybersécurité — L'hygiène des fichiers",
      blocks: [
        {
          type: 'list',
          ordered: false,
          items: [
            "**Nommer clairement** ses fichiers et dossiers : on retrouve son travail, on évite les erreurs.",
            "**Sauvegarder régulièrement** et garder des **versions** : une seule copie, c'est un accident qui efface tout (Git, en S3, est l'outil ultime pour ça).",
            "**Méfiance** avec les pièces jointes et fichiers téléchargés : un fichier bureautique peut cacher du code malveillant (macros piégées).",
          ],
        },
        {
          type: 'info',
          variant: 'attention',
          title: 'À retenir',
          content:
            "Un fichier n'est pas toujours inoffensif. Un document Word ou un tableur peut embarquer " +
            "des instructions cachées. Règle pro : on n'ouvre que ce dont on connaît la provenance.",
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
            "L'OS est le chef d'orchestre : matériel, fichiers, interface, exécution des logiciels.",
            "Web vs installé = où tourne le programme : sur ta machine, ou sur un serveur distant (modèle client/serveur).",
            "On classe les logiciels par usage et par licence (libre / propriétaire).",
            "Bureautique pro : Word (styles), Excel (formules), PowerPoint (peu de texte).",
            "Sécurité : nommer, sauvegarder, versionner, se méfier des fichiers douteux.",
          ],
        },
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // TP — production bureautique (pas de dépôt Git => kind 'physical')
  // ---------------------------------------------------------------------------
  tp: {
    kind: 'physical',
    title: 'Prise en main des outils bureautiques',
    mission:
      "S'entraîner aux trois outils bureautiques avant le contrôle, chacun sur son poste, en " +
      "produisant de petits livrables guidés.",
    prerequis: ['Cours S2 suivi', 'Une suite bureautique installée (Microsoft Office ou LibreOffice)'],
    materiel: ['Un poste par élève avec une suite bureautique'],
    criteres: [
      'Arborescence de dossiers propre',
      'Document Word avec styles et table des matières automatique',
      'Tableau Excel avec au moins deux formules',
      'Présentation respectant la règle « peu de texte »',
    ],
    note:
      "Entraînement individuel. Ces productions ne sont pas notées : elles préparent au contrôle. " +
      "Le professeur passe valider chaque étape.",
    steps: [
      {
        title: 'Ranger ses fichiers',
        body: [
          {
            type: 'prose',
            content: "Crée dans l'explorateur une arborescence propre pour tes cours : un dossier par séquence, des noms clairs.",
          },
        ],
        done: "L'arborescence est claire et logique (vérifiée par le professeur).",
      },
      {
        title: 'Word — un document structuré',
        body: [
          {
            type: 'list',
            ordered: true,
            items: [
              "Reproduis un court document (une demi-page) avec un titre en style « Titre 1 » et deux sous-titres en « Titre 2 ».",
              "Insère une table des matières automatique en haut.",
              "Ajoute un pied de page avec ton nom.",
            ],
          },
        ],
        done: "Le document utilise de vrais styles (pas de mise en forme à la main) et la table des matières est automatique.",
      },
      {
        title: 'Excel — données et formules',
        body: [
          {
            type: 'list',
            ordered: true,
            items: [
              "Saisis un petit tableau (ex. un relevé de notes ou un budget).",
              "Écris au moins deux formules : `=SOMME(...)` et `=MOYENNE(...)`.",
              "Mets en forme le tableau (en-têtes, bordures) et ajoute un graphique simple.",
            ],
          },
        ],
        done: "Les formules se calculent correctement et le graphique reflète les données.",
      },
      {
        title: 'PowerPoint — présenter sans surcharger',
        body: [
          {
            type: 'prose',
            content: "Fais 3 diapositives sur un sujet libre en respectant la règle « peu de texte » : des mots-clés, pas des phrases entières, et un visuel.",
          },
        ],
        done: "Les diapositives sont lisibles, peu chargées, avec au moins un visuel.",
      },
    ],
  },
};
