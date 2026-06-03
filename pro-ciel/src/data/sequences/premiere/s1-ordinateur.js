// =============================================================================
// Séquence S1 — C'est quoi un ordinateur ?
// Niveau : Première · Durée : 3 h (1 h cours · 1 h TP démontage · 1 h éval papier)
// Format : système de blocs (voir CAHIER-DES-CHARGES-V2.md, section 4).
//
// NOTES POUR CLAUDE CODE :
// - Le contenu réutilise et complète le module HTML existant de la V1
//   (composants interactifs conservés : HistoryTimeline, VonNeumannDiagramComponent,
//   ComponentShowcase — rendus via des blocs { type: 'component', name: '...' }).
// - Le TP de cette séquence est PHYSIQUE (démontage de PC) : il ne passe PAS par
//   GitHub. La propriété tp.kind = 'physical' indique au composant d'affichage de
//   NE PAS afficher d'encadré commit/push, mais un encadré « validation par le
//   professeur » à la place. La validation de chaque étape se fait par observation
//   directe (et fiche d'identification papier).
// - L'évaluation est en PAPIER (hors site). L'onglet « Éval » n'affiche donc pas de
//   sujet : seulement le bloc meta.evalInfo (format, durée, compétence, ressources
//   autorisées). Aucun contenu de QCM ne doit figurer dans le code du site.
// =============================================================================

export const s1Ordinateur = {
  meta: {
    id: 'ordinateur',            // URL : /premiere/ordinateur
    sequence: 'S1',
    niveau: 'premiere',
    title: "C'est quoi un ordinateur ?",
    icon: 'device-desktop',      // identifiant d'icône (Tabler) — PAS d'emoji
    duree: '3 h',
    theme: 'Matériel & systèmes',
    filRouge:
      "C'est le tout premier contact. Avant d'écrire la moindre ligne de code, on " +
      "comprend la machine sur laquelle on va travailler. En S2 on verra les logiciels " +
      "qui tournent dessus ; en S3 on apprendra à versionner notre travail.",
    ref: { competences: ['C04'], savoirs: ['S1.1', 'S1.2'] },
    cyber:
      "La surface d'attaque matérielle (ports, périphériques) et pourquoi on verrouille " +
      "sa session.",
    evalInfo: {
      format: 'QCM papier (questions à choix + justifications + schéma à compléter)',
      duree: '1 h',
      competence: 'C04 (Découverte)',
      ressourcesAutorisees: ['Frise historique du cours', 'Diagramme de Von Neumann du cours'],
      note: "Évaluation réalisée en classe sur support papier — aucun sujet n'est publié sur le site.",
    },
  },

  // ---------------------------------------------------------------------------
  // COURS
  // ---------------------------------------------------------------------------
  course: [
    {
      type: 'hero',
      title: "C'est quoi un ordinateur ?",
      subtitle:
        "On en utilise tous les jours sans savoir ce qu'il y a dedans. Avant de devenir " +
        "celui qui les programme, les répare et les sécurise, ouvrons le capot.",
    },

    {
      type: 'info',
      variant: 'astuce',
      title: 'Objectifs de la séquence',
      content:
        "À la fin de ce cours, tu sauras : nommer les composants principaux d'un ordinateur " +
        "et leur rôle, expliquer comment ils travaillent ensemble, distinguer le matériel du " +
        "logiciel, et faire la différence entre un PC, un serveur et un smartphone.",
    },

    {
      type: 'section',
      title: 'a. Une brève histoire de l\u2019informatique',
      blocks: [
        {
          type: 'prose',
          content:
            "L'informatique n'est pas née avec les smartphones. C'est une longue histoire " +
            "d'idées et d'inventions, des premières machines à calculer mécaniques jusqu'aux " +
            "ordinateurs de poche d'aujourd'hui.",
        },
        { type: 'component', name: 'HistoryTimeline' },
        {
          type: 'info',
          variant: 'definition',
          title: 'Pourquoi connaître cette histoire ?',
          content:
            "Comprendre d'où l'on vient aide à comprendre pourquoi les machines sont faites " +
            "ainsi aujourd'hui. Chaque composant moderne est la réponse à un problème rencontré " +
            "par les ingénieurs d'avant.",
        },
      ],
    },

    {
      type: 'section',
      title: 'b. Comment fonctionne un ordinateur, en théorie ?',
      blocks: [
        {
          type: 'prose',
          content:
            "Presque tous les ordinateurs modernes reposent sur un principe simple : " +
            "**l'architecture de Von Neumann**. Elle décrit quatre éléments qui travaillent ensemble.",
        },
        { type: 'component', name: 'VonNeumannDiagramComponent' },
        {
          type: 'prose',
          content:
            "Le processus, étape par étape : quand tu lances un programme, le **processeur (CPU)** " +
            "va chercher les instructions stockées sur le **disque de stockage**, les charge dans la " +
            "**mémoire vive (RAM)** pour y accéder très vite, puis exécute les calculs. Le résultat " +
            "est envoyé vers un **périphérique de sortie** (l'écran, par exemple).",
        },
        {
          type: 'info',
          variant: 'analogie',
          title: 'Analogie — La cuisine d\u2019un restaurant',
          content:
            "Le processeur, c'est le cuisinier. Le disque de stockage, c'est le garde-manger " +
            "(tout y est rangé, mais c'est loin). La RAM, c'est le plan de travail : on y pose les " +
            "ingrédients du plat en cours pour les avoir sous la main. Et l'assiette servie au " +
            "client, c'est l'écran.",
        },
      ],
    },

    {
      type: 'section',
      title: 'c. Les composants d\u2019un ordinateur et leurs rôles',
      blocks: [
        {
          type: 'prose',
          content: "Voici les pièces que tu retrouveras dans (presque) toutes les machines.",
        },
        { type: 'component', name: 'ComponentShowcase' },
        {
          type: 'cards',
          columns: 3,
          items: [
            { title: 'Processeur (CPU)', text: "Le cerveau : il exécute les instructions et fait les calculs." },
            { title: 'Mémoire vive (RAM)', text: "La mémoire de travail : rapide mais volatile (tout s'efface à l'extinction)." },
            { title: 'Stockage (SSD / disque dur)', text: "La mémoire permanente : plus lente, mais conserve les données éteint." },
            { title: 'Carte mère', text: "La colonne vertébrale : elle relie et fait communiquer tous les composants." },
            { title: 'Carte graphique (GPU)', text: "Spécialisée dans l'affichage et les calculs graphiques." },
            { title: 'Alimentation', text: "Convertit le courant du secteur pour nourrir chaque composant." },
          ],
        },
        {
          type: 'info',
          variant: 'attention',
          title: 'Le point à retenir : RAM vs stockage',
          content:
            "On les confond souvent. Règle simple : la **RAM** est rapide et s'efface ; le " +
            "**stockage** est plus lent mais garde tout. Plus de RAM = travailler sur plus de " +
            "choses à la fois ; plus de stockage = garder plus de fichiers.",
        },
      ],
    },

    {
      type: 'section',
      title: 'd. Matériel, logiciel, micrologiciel',
      blocks: [
        { type: 'prose', content: "Trois mots qu'on confond souvent :" },
        {
          type: 'cards',
          columns: 3,
          items: [
            { title: 'Matériel (hardware)', text: "Tout ce qui est physique et qu'on peut toucher : le processeur, l'écran, la souris. La machine elle-même." },
            { title: 'Logiciel (software)', text: "L'ensemble des programmes qui disent au matériel quoi faire. Immatériel : Windows, un jeu, un navigateur." },
            { title: 'Micrologiciel (firmware)', text: "Un logiciel « gravé » dans un composant pour le faire fonctionner à très bas niveau. Le BIOS/UEFI en est l'exemple parfait." },
          ],
        },
      ],
    },

    {
      type: 'section',
      title: 'e. PC, serveur, smartphone : même principe, usages différents',
      blocks: [
        {
          type: 'prose',
          content:
            "Tous ces appareils sont des ordinateurs : ils ont un processeur, de la mémoire, du " +
            "stockage, un système d'exploitation. Ce qui change, c'est **leur usage et donc leurs priorités**.",
        },
        {
          type: 'table',
          headers: ['', 'Ordinateur personnel (PC)', 'Serveur', 'Smartphone'],
          rows: [
            ['Sert à…', 'Travailler, naviguer, jouer', 'Fournir un service à d\u2019autres machines (sites web, fichiers)', 'Communiquer, applis mobiles'],
            ['Fonctionne…', 'Quand on l\u2019allume', 'En continu, 24h/24', 'Toute la journée, sur batterie'],
            ['Priorité', 'Polyvalence', 'Fiabilité et puissance soutenue', 'Autonomie et compacité'],
            ['Exemple', 'La tour devant toi', 'La machine qui héberge pro-ciel.netlify.app', 'Ton téléphone'],
          ],
        },
        {
          type: 'info',
          variant: 'analogie',
          title: 'Analogie — Le restaurant, encore lui',
          content:
            "Un PC, c'est ta cuisine à la maison : tu cuisines pour toi quand tu veux. Un serveur, " +
            "c'est la cuisine d'un restaurant : elle tourne en continu pour servir des centaines de " +
            "clients (les autres machines qui demandent une page web). Un smartphone, c'est un " +
            "food-truck : il fait presque tout, mais en version compacte et sur batterie.",
        },
        {
          type: 'prose',
          content:
            "Ce vocabulaire reviendra toute l'année : quand on déploiera notre site web (en " +
            "Terminale), on l'installera justement sur un **serveur**.",
        },
      ],
    },

    {
      type: 'section',
      title: 'f. Point cybersécurité — La machine, première ligne de défense',
      blocks: [
        { type: 'prose', content: "La sécurité commence par le matériel." },
        {
          type: 'list',
          ordered: false,
          items: [
            "Les **ports physiques** (USB, etc.) sont une porte d'entrée : brancher une clé USB inconnue peut infecter une machine. On parle de *surface d'attaque*.",
            "**Verrouiller sa session** (Windows + L) quand on s'éloigne empêche l'accès à ses données. Geste simple, réflexe professionnel.",
          ],
        },
        {
          type: 'info',
          variant: 'attention',
          title: 'À retenir',
          content:
            "Plus un appareil a de portes d'entrée (ports, connexions sans fil, périphériques), " +
            "plus il offre d'occasions à un attaquant. La sécurité, c'est aussi savoir fermer les " +
            "portes qu'on n'utilise pas.",
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
            "Un ordinateur = matériel (qu'on touche) + logiciel (les programmes) + micrologiciel (le firmware bas niveau).",
            "Architecture de Von Neumann : CPU + mémoire + stockage + entrées/sorties.",
            "RAM = rapide et volatile ; stockage = lent et permanent.",
            "PC, serveur et smartphone sont tous des ordinateurs, avec des usages différents.",
            "Sécurité : la machine est la première ligne de défense (ports, verrouillage de session).",
          ],
        },
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // TP — physique (pas de GitHub)
  // ---------------------------------------------------------------------------
  tp: {
    kind: 'physical', // <- IMPORTANT : pas d'encadré commit/push ; validation par le prof
    title: 'Démontage, remontage et identification',
    mission:
      "Ouvrir une unité centrale, identifier physiquement les composants vus en cours, les " +
      "retirer puis les remonter correctement, et vérifier que la machine redémarre.",
    prerequis: [
      'Cours S1 suivi',
      'Poste de travail individuel (1 tour de récupération par élève)',
    ],
    materiel: [
      'Une tour de PC de récupération',
      'Un tournevis cruciforme',
      'Un bracelet antistatique',
      'Un petit récipient pour les vis',
      'Une fiche d\u2019identification des composants à compléter',
    ],
    criteres: [
      'Respect des règles de sécurité (ESD)',
      'Fiche d\u2019identification correctement remplie',
      'Manipulation soignée, sans forçage',
      'Machine fonctionnelle au redémarrage (POST/BIOS atteint)',
    ],
    note:
      "Évaluation bienveillante : une tentative sérieuse mais imparfaite au remontage n'annule " +
      "pas le travail d'identification.",
    steps: [
      {
        title: 'Sécurité et préparation',
        body: [
          {
            type: 'list',
            ordered: true,
            items: [
              "Comprendre l'électricité statique (ESD) : invisible, indolore, mais qui peut détruire un composant.",
              "Porter le bracelet antistatique, pince reliée à une partie métallique non peinte du boîtier.",
              "Vérifier que la tour est débranchée du secteur, puis appuyer 5 secondes sur le bouton d'allumage pour vider l'électricité résiduelle.",
            ],
          },
          {
            type: 'info',
            variant: 'attention',
            content: "Cette étape est la plus importante. Aucune manipulation ne commence avant sa validation par le professeur.",
          },
        ],
        done: 'Le professeur a vérifié le port du bracelet et le débranchement complet.',
      },
      {
        title: 'Observation et identification',
        body: [
          {
            type: 'prose',
            content:
              "Avant de toucher quoi que ce soit : ouvre le boîtier et **remplis la fiche " +
              "d'identification**. Repère et nomme le CPU (sous le ventirad), la RAM, le stockage, " +
              "la carte mère, la carte graphique si présente, et l'alimentation.",
          },
        ],
        done: 'La fiche d\u2019identification est correctement remplie (vérifiée par le professeur).',
      },
      {
        title: 'Démontage méthodique',
        body: [
          {
            type: 'prose',
            content:
              "Retire les composants amovibles dans l'ordre, en **prenant une photo à chaque " +
              "étape** (utile pour le remontage) : carte graphique, barrettes de RAM, câbles de " +
              "données du stockage.",
          },
          {
            type: 'info',
            variant: 'astuce',
            content: "On ne démonte pas le processeur ni son ventirad dans ce TP.",
          },
        ],
        done: 'Les composants sont retirés proprement, rangés, sans forçage.',
      },
      {
        title: 'Remontage et test',
        body: [
          {
            type: 'prose',
            content:
              "Remonte dans l'ordre inverse en t'aidant des photos. Réinsère la RAM jusqu'au " +
              "« clic », la carte graphique dans son port, rebranche les câbles. Puis test minimal : " +
              "alimentation + écran + clavier, et allume.",
          },
        ],
        done: 'La machine démarre et atteint le POST/BIOS (les composants y sont reconnus). Mission réussie.',
      },
    ],
  },
};
