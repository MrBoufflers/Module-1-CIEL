export const ts4Docker = {
  meta: {
    id: 'docker', sequence: 'S4', niveau: 'terminale',
    title: 'Conteneuriser : Docker', icon: 'box', duree: '9 h',
    theme: 'Infrastructure',
    filRouge: "L'app tourne sur ta machine. Mais elle ne tournera pas forcément sur celle du prof, ni sur un serveur. Docker résout ce problème : il emballe tout (code + dépendances + config) dans un conteneur identique partout.",
    ref: { competences: ['C09', 'C04'], savoirs: ['S2.1', 'S5.2'] },
    cyber: "Images officielles vs images piégées. Ne jamais mettre de secrets dans un Dockerfile.",
    evalInfo: { format: 'Évaluation pratique (conteneuriser une app et la lancer)', duree: '3 h', competence: 'C09 (Application)', ressourcesAutorisees: ['Docker docs', 'Le cours S4'], note: "Évaluation réalisée en classe." },
  },
  course: [
    { type: 'hero', title: 'Docker : « ça marche sur ma machine » n\u2019existe plus', subtitle: "Un conteneur embarque ton app avec tout ce dont elle a besoin. Même environnement partout : dev, test, production." },
    { type: 'info', variant: 'astuce', title: 'Objectifs', content: "Comprendre les conteneurs vs les machines virtuelles, écrire un Dockerfile, construire et lancer une image, et orchestrer plusieurs conteneurs avec Docker Compose." },
    { type: 'section', title: 'a. Le problème que Docker résout', blocks: [
      { type: 'prose', content: "« Ça marche sur ma machine » — la phrase la plus frustrante en informatique. Ton app a besoin de Node 20, d'une BDD SQLite, et d'un npm install propre. Si le serveur a Node 18 ou un OS différent, ça casse. **Docker** crée un **conteneur** : une boîte isolée qui contient ton app + tout son environnement." },
      { type: 'info', variant: 'analogie', title: 'Analogie — Le conteneur maritime', content: "Un conteneur Docker, c'est comme un conteneur de transport : peu importe ce qu'il y a dedans (fruits, meubles, électronique), il a la même taille standard et se charge sur n'importe quel bateau, camion ou train. Ton app, c'est le contenu. Docker, c'est le conteneur standard." },
      { type: 'cards', columns: 2, items: [
        { title: 'Machine virtuelle (VM)', text: "Simule un ordinateur complet (OS inclus). Lourd (Go), long à démarrer. Isolation totale." },
        { title: 'Conteneur Docker', text: "Partage le noyau de l'OS hôte. Léger (Mo), démarre en secondes. Isolation suffisante pour 99% des cas." },
      ]},
    ]},
    { type: 'section', title: 'b. Les concepts clés', blocks: [
      { type: 'cards', columns: 3, items: [
        { title: 'Image', text: "Le « plan » du conteneur : un fichier figé qui décrit tout (OS de base, dépendances, code, commandes). On la construit une fois." },
        { title: 'Conteneur', text: "Une instance en cours d'exécution d'une image. Éphémère : on peut le créer, arrêter, supprimer à volonté." },
        { title: 'Dockerfile', text: "La recette pour construire l'image. Un fichier texte avec des instructions (FROM, COPY, RUN, CMD)." },
      ]},
    ]},
    { type: 'section', title: 'c. Écrire un Dockerfile', blocks: [
      { type: 'code', language: 'bash', title: 'Dockerfile pour une app Node.js', code: '# Image de base : Node.js officiel\nFROM node:20-alpine\n\n# Dossier de travail dans le conteneur\nWORKDIR /app\n\n# Copier package.json et installer les dépendances\nCOPY package*.json ./\nRUN npm install\n\n# Copier le reste du code\nCOPY . .\n\n# Port exposé\nEXPOSE 3000\n\n# Commande de lancement\nCMD ["node", "server.js"]' },
      { type: 'info', variant: 'definition', title: 'Lire un Dockerfile', content: "`FROM` : l'image de base (ici Node 20 sur Alpine Linux, très léger). `WORKDIR` : le dossier de travail. `COPY` : copier des fichiers locaux dans l'image. `RUN` : exécuter une commande pendant la construction. `EXPOSE` : documenter le port. `CMD` : la commande lancée au démarrage du conteneur." },
    ]},
    { type: 'exercise', title: 'Exercice 1 — Premier Dockerfile', body: [
      { type: 'list', ordered: true, items: [
        'Dans ton projet API (T-S2), crée un fichier `Dockerfile` à la racine.',
        'Écris les instructions pour conteneuriser ton serveur Express.',
        'Crée un `.dockerignore` (comme `.gitignore`) : `node_modules`, `.git`, `*.db`.',
      ]},
    ]},
    { type: 'section', title: 'd. Construire et lancer', blocks: [
      { type: 'code', language: 'bash', title: 'Commandes Docker essentielles', code: '# Construire l\'image\ndocker build -t mon-api .\n\n# Lancer un conteneur\ndocker run -p 3000:3000 mon-api\n\n# Lister les conteneurs en cours\ndocker ps\n\n# Arrêter un conteneur\ndocker stop <id>\n\n# Voir les images locales\ndocker images' },
    ]},
    { type: 'exercise', title: 'Exercice 2 — Construire et tester', body: [
      { type: 'list', ordered: true, items: [
        'Construis l\u2019image avec `docker build -t mon-api .`.',
        'Lance le conteneur avec `docker run -p 3000:3000 mon-api`.',
        'Ouvre `http://localhost:3000` et vérifie que l\u2019API répond.',
        'Dans un autre terminal : `docker ps` pour voir le conteneur, puis `docker stop <id>` pour l\u2019arrêter.',
      ]},
    ]},
    { type: 'section', title: 'e. Docker Compose : orchestrer plusieurs conteneurs', blocks: [
      { type: 'prose', content: "Une app réelle a souvent **plusieurs services** (API + BDD + front). Docker Compose les gère ensemble dans un seul fichier `docker-compose.yml`." },
      { type: 'code', language: 'bash', title: 'docker-compose.yml', code: 'version: "3.8"\nservices:\n  api:\n    build: .\n    ports:\n      - "3000:3000"\n    depends_on:\n      - db\n  db:\n    image: postgres:15-alpine\n    environment:\n      POSTGRES_PASSWORD: secret\n      POSTGRES_DB: monapp\n    volumes:\n      - db-data:/var/lib/postgresql/data\nvolumes:\n  db-data:' },
      { type: 'code', language: 'bash', title: 'Commandes Compose', code: '# Lancer tous les services\ndocker compose up\n\n# En arrière-plan\ndocker compose up -d\n\n# Arrêter tout\ndocker compose down' },
    ]},
    { type: 'exercise', title: 'Exercice 3 — Docker Compose', body: [
      { type: 'list', ordered: true, items: [
        'Crée un `docker-compose.yml` pour ton API + une base de données.',
        'Lance avec `docker compose up` et vérifie que les deux services démarrent.',
        'Teste l\u2019API et vérifie qu\u2019elle communique avec la BDD conteneurisée.',
      ]},
    ]},
    { type: 'section', title: 'Point cybersécurité', blocks: [
      { type: 'info', variant: 'attention', title: 'Images officielles et secrets', content: "Utilise toujours des images **officielles** (node:20-alpine, postgres:15-alpine). Des images non-officielles peuvent contenir du code malveillant. Et **ne mets jamais de secrets (mots de passe, clés API) dans le Dockerfile** : ils resteraient dans l'image. Utilise des variables d'environnement ou Docker Secrets." },
    ]},
    { type: 'section', title: 'Mémo', blocks: [
      { type: 'list', ordered: false, items: [
        'Image = plan figé. Conteneur = instance en cours d\u2019exécution.',
        'Dockerfile : FROM, WORKDIR, COPY, RUN, EXPOSE, CMD.',
        '`docker build -t nom .` → `docker run -p port:port nom`.',
        'Docker Compose : `docker-compose.yml` pour orchestrer plusieurs services.',
        'Toujours des images officielles. Jamais de secrets dans le Dockerfile.',
      ]},
    ]},
  ],
  tp: {
    kind: 'digital',
    title: 'Conteneuriser son projet',
    mission: "Conteneuriser l'intégralité de ton projet (API + BDD + front) avec Docker et Docker Compose.",
    prerequis: ['Cours T-S4 suivi', 'Docker installé', 'Projet T-S2 + T-S3 fonctionnels'],
    criteres: ['Dockerfile fonctionnel', 'docker-compose.yml avec au moins 2 services', 'L\u2019app tourne entièrement dans Docker', 'Commits réguliers'],
    bonus: "Ajouter un service front-end (conteneur séparé pour le build React) dans le Compose.",
    steps: [
      { title: 'Dockerfile de l\u2019API', body: [
        { type: 'list', ordered: true, items: ['Écris le Dockerfile pour ton API Node.js.', 'Crée le `.dockerignore`.', 'Construis et teste l\u2019image seule.'] },
      ], done: 'L\u2019API tourne dans un conteneur Docker.', validation: { commit: 'git commit -m "feat: Dockerfile API"' } },
      { title: 'Docker Compose multi-services', body: [
        { type: 'list', ordered: true, items: ['Écris le `docker-compose.yml` avec API + BDD.', 'Configure les variables d\u2019environnement.', 'Lance et teste la communication entre services.'] },
      ], done: 'L\u2019app complète tourne avec `docker compose up`.', validation: { commit: 'git commit -m "feat: Docker Compose" && git push' } },
    ],
  },
};
