// =============================================================================
// Terminale S1 — Reprise & cadrage du projet annuel (9 h)
// 3 exercices intégrés. TP digital. C04 Application, C03 Application.
// =============================================================================

export const ts1Reprise = {
  meta: {
    id: 'reprise',
    sequence: 'S1',
    niveau: 'terminale',
    title: 'Reprise & cadrage du projet annuel',
    icon: 'rocket',
    duree: '9 h',
    theme: 'Reprise & projet',
    filRouge:
      "Retour de vacances. On repart du site de Première (HTML/CSS/JS) et on le transforme " +
      "en vraie application : back-end, base de données, déploiement. Cette séquence cadre " +
      "le projet annuel et remet les outils en marche.",
    ref: { competences: ['C04', 'C03', 'C09'], savoirs: ['S2.2', 'S5.2'] },
    cyber: "Analyse de risque initiale du projet (ce qu'on protège, contre quoi).",
    evalInfo: {
      format: 'Évaluation pratique : cadrage de projet + architecture argumentée',
      duree: '3 h',
      competence: 'C04 (Application) · C03 (Application)',
      ressourcesAutorisees: ['Tous les cours de Première', 'Documentation en ligne'],
      note: "Évaluation réalisée en classe.",
    },
  },

  course: [
    { type: 'hero', title: 'Terminale : du site à l\u2019application',
      subtitle: "L'année de Première t'a donné les briques. Cette année, tu construis l'immeuble : une application complète, déployée et maintenue." },
    { type: 'info', variant: 'astuce', title: 'Objectifs',
      content: "Faire le bilan des acquis, comprendre l'architecture cible (du statique au dynamique), cadrer son projet annuel (besoin, jalons, backlog), et remettre en route l'environnement de développement." },

    {
      type: 'section', title: 'a. Bilan de Première : ce que tu sais faire',
      blocks: [
        { type: 'table', headers: ['Compétence', 'Acquis de Première', 'Ce qu\u2019on ajoute en Terminale'],
          rows: [
            ['HTML/CSS', 'Pages structurées, sémantiques, responsives', 'Interface React (S3)'],
            ['JavaScript', 'Logique pure + manipulation DOM', 'Node.js côté serveur (S2)'],
            ['Python', 'Variables, fonctions, fichiers, données', 'IA et automatisation (S7)'],
            ['Git/GitHub', 'Commits, push, Classroom', 'Branches, workflow déploiement (S5)'],
            ['Cybersécurité', 'Posture, HTTPS, validation', 'Sécurité serveur, production (S5-S6)'],
          ] },
      ],
    },

    {
      type: 'section', title: 'b. L\u2019architecture cible : du statique au dynamique',
      blocks: [
        { type: 'prose', content:
          "Ton site de Première est **statique** : des fichiers HTML/CSS/JS servis tels quels. " +
          "Pas de base de données, pas de compte utilisateur, pas de contenu qui change selon " +
          "le visiteur. Cette année on ajoute les couches manquantes :" },
        { type: 'cards', columns: 2, items: [
          { title: 'Le front-end (S3)', text: "L'interface que l'utilisateur voit. On passe du HTML/JS à la main à un framework moderne (React) qui structure l'interface en composants réutilisables." },
          { title: 'Le back-end (S2)', text: "Le serveur qui traite les demandes : une API en Node.js qui reçoit les requêtes du front, interroge la base de données, et renvoie les résultats." },
          { title: 'La base de données (S2)', text: "Le stockage permanent et structuré des données (utilisateurs, contenus, paramètres). On apprend la conception + le SQL." },
          { title: 'Le déploiement (S4-S5)', text: "Mettre tout ça en ligne sur un vrai serveur, accessible au monde. Docker pour conteneuriser, puis mise en production." },
        ]},
        { type: 'info', variant: 'analogie', title: 'Analogie — Le restaurant complet',
          content: "En Première, tu avais une vitrine avec le menu affiché (site statique). Maintenant tu construis le restaurant entier : la cuisine (back-end), le réfrigérateur (base de données), le service en salle (API), et l'adresse dans la rue (déploiement)." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 1 — Schéma d\u2019architecture',
      body: [
        { type: 'prose', content: 'Sur une feuille (ou dans un outil de dessin), dessine le schéma de l\u2019architecture cible de ton application :' },
        { type: 'list', ordered: true, items: [
          'Place les 4 blocs : Front-end (navigateur), Back-end (serveur Node.js), Base de données, Serveur de déploiement.',
          'Dessine les flèches de communication entre eux (qui parle à qui, dans quel sens).',
          'Indique les technologies qu\u2019on utilisera sur chaque bloc (React, Node.js, SQL, Docker).',
          'Compare avec le schéma de ton site actuel (juste des fichiers statiques hébergés).',
        ]},
      ],
    },

    {
      type: 'section', title: 'c. Cadrer son projet : penser comme un pro',
      blocks: [
        { type: 'prose', content:
          "Un projet professionnel ne démarre pas par le code. Il commence par un **cadrage** : " +
          "quel est le besoin, que va-t-on construire, comment on découpe le travail, quels sont " +
          "les jalons." },
        { type: 'list', ordered: true, items: [
          "**Le besoin** : quelle application veux-tu construire ? Quel problème résout-elle ? Pour qui ?",
          "**Les fonctionnalités** : liste les fonctionnalités principales (ex. inscription, affichage de données, recherche...).",
          "**Le backlog** : découpe chaque fonctionnalité en tâches concrètes et réalisables.",
          "**Les jalons** : place les grandes étapes sur un calendrier (quand le back-end, quand le front, quand le déploiement).",
        ]},
        { type: 'info', variant: 'definition', title: 'Le backlog',
          content: "C'est la liste ordonnée de toutes les tâches à faire. Chaque tâche est petite, concrète et vérifiable (« Créer la route API /utilisateurs » et pas « Faire le back-end »). On les traite dans l'ordre de priorité." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 2 — Définir son projet',
      body: [
        { type: 'list', ordered: true, items: [
          'Écris en 3 phrases le **besoin** de ton application (quoi, pour qui, pourquoi).',
          'Liste **5 à 8 fonctionnalités** principales.',
          'Pour chacune, découpe en **2-3 tâches** concrètes.',
          'Classe les tâches par priorité (ce qu\u2019on fait en premier → ce qu\u2019on fait si on a le temps).',
        ]},
      ],
    },

    {
      type: 'section', title: 'd. Remise en route de l\u2019environnement',
      blocks: [
        { type: 'prose', content: "Avant de coder, on vérifie que tout fonctionne : Git, VS Code, Node.js (qu'on va utiliser à partir de S2), et le dépôt du projet." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 3 — Checklist technique',
      body: [
        { type: 'list', ordered: true, items: [
          '`git --version` → Git est installé.',
          '`node --version` → Node.js est installé (sinon, on l\u2019installe ensemble).',
          '`npm --version` → npm est installé (vient avec Node).',
          'Clone ton dépôt de Première et vérifie que le site tourne (ouvre les fichiers HTML).',
          'Crée un nouveau dépôt pour le projet de Terminale, fais un premier commit vide (`git commit --allow-empty -m "Initial commit"`) et push.',
        ]},
      ],
    },

    {
      type: 'section', title: 'Point cybersécurité',
      blocks: [
        { type: 'info', variant: 'attention', title: 'Analyse de risque initiale',
          content: "Avant même de coder, pose-toi la question : **qu'est-ce que mon application protège ?** Des données d'utilisateurs ? Des mots de passe ? Des fichiers ? Et **contre quoi** ? Un accès non autorisé ? Une perte de données ? Une modification malveillante ? Cette analyse guidera tes choix techniques tout au long de l'année." },
      ],
    },
    {
      type: 'section', title: 'Mémo',
      blocks: [
        { type: 'list', ordered: false, items: [
          'Architecture cible : front-end (React) + back-end (Node.js) + BDD (SQL) + déploiement (Docker).',
          'Cadrage : besoin → fonctionnalités → backlog → jalons.',
          'Backlog : tâches petites, concrètes, vérifiables, priorisées.',
          'Analyse de risque : que protège-t-on, contre quoi.',
        ]},
      ],
    },
  ],

  tp: {
    kind: 'digital',
    title: 'Cadrage et planification du projet',
    mission: "Produire le document de cadrage du projet annuel : besoin, fonctionnalités, backlog, jalons, et architecture cible.",
    prerequis: ['Cours T-S1 suivi', 'Environnement vérifié', 'Dépôt Terminale créé'],
    criteres: ['Besoin clairement formulé', 'Fonctionnalités listées et priorisées', 'Backlog en tâches concrètes', 'Schéma d\u2019architecture', 'Commits réguliers'],
    bonus: "Rédiger un README.md professionnel pour le dépôt (description du projet, technologies, installation).",
    steps: [
      {
        title: 'Document de cadrage',
        body: [
          { type: 'list', ordered: true, items: [
            'Crée un fichier `PROJET.md` à la racine du dépôt.',
            'Écris les sections : Besoin, Fonctionnalités (liste priorisée), Architecture cible (texte + schéma ASCII ou image), Technologies utilisées.',
          ]},
        ],
        done: 'Le fichier PROJET.md est complet et lisible.',
        validation: { commit: 'git commit -m "docs: cadrage du projet"' },
      },
      {
        title: 'Backlog et jalons',
        body: [
          { type: 'list', ordered: true, items: [
            'Dans PROJET.md, ajoute une section Backlog avec la liste des tâches concrètes.',
            'Ajoute une section Jalons avec les grandes étapes et leurs dates cibles (S2 = back-end, S3 = front-end, S4 = Docker, S5 = production).',
          ]},
        ],
        done: 'Le backlog et les jalons sont documentés.',
        validation: { commit: 'git commit -m "docs: backlog et jalons"' },
      },
      {
        title: 'Mise en route technique',
        body: [
          { type: 'list', ordered: true, items: [
            'Initialise le projet : `npm init -y` pour créer le `package.json`.',
            'Crée la structure de dossiers de base (`src/`, `public/`, `docs/`).',
            'Crée un `README.md` avec le nom du projet, une description d\u2019une phrase, et les instructions d\u2019installation.',
          ]},
        ],
        done: 'Le dépôt est initialisé avec npm, structuré et documenté.',
        validation: { commit: 'git commit -m "chore: initialisation du projet" && git push' },
      },
    ],
  },
};
