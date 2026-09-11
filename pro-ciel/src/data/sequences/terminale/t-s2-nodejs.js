// =============================================================================
// Terminale S2 — Back-end & API : Node.js (15 h)
// Partie Node.js/Express issue de l'ancienne T-S2 (Node.js + BDD).
// La partie base de données est désormais en T-S3.
// =============================================================================

export const ts2Nodejs = {
  meta: {
    id: 'nodejs',
    sequence: 'S2',
    niveau: 'terminale',
    title: 'Back-end & API : Node.js',
    icon: 'server',
    duree: '15 h',
    theme: 'Développement back-end',
    filRouge:
      "Le cadrage est fait (S1). On construit maintenant le cœur de l'application : un serveur " +
      "Node.js qui expose une API REST. La base de données, elle, arrive juste après, en S3.",
    ref: { competences: ['C08', 'C04', 'C09'], savoirs: ['S3.1', 'S3.2', 'S3.3'] },
    cyber: "Validation côté serveur : ne jamais faire confiance au client.",
    evalInfo: {
      format: 'Évaluation pratique sur poste (créer une API REST fonctionnelle)',
      duree: '3 h',
      competence: 'C08 (Application) · C04 (Application)',
      ressourcesAutorisees: ['Documentation Node.js', 'MDN', 'Le cours S2'],
      note: "Évaluation réalisée en classe.",
    },
  },

  course: [
    { type: 'hero', title: 'Node.js : le back-end',
      subtitle: "JavaScript quitte le navigateur et passe côté serveur. Avec Express, il expose une API que le front pourra interroger." },
    { type: 'info', variant: 'astuce', title: 'Objectifs',
      content: "Comprendre le rôle d'un back-end, créer un serveur Node.js avec Express, et construire une API REST." },

    {
      type: 'section', title: 'a. Node.js : le JS hors du navigateur',
      blocks: [
        { type: 'prose', content:
          "Jusqu'ici, ton JS tournait dans le navigateur (côté client). **Node.js** est un " +
          "environnement qui permet d'exécuter du JavaScript **sur un serveur**, directement " +
          "dans le terminal. Même langage, nouvel environnement." },
        { type: 'info', variant: 'analogie', title: 'Analogie',
          content: "Le JS dans le navigateur, c'est un cuisinier qui ne travaille qu'en salle (il ne voit que le client). Node.js, c'est le même cuisinier qui passe en cuisine : il accède au réfrigérateur (fichiers), à la réserve (BDD), et prépare les plats (API)." },
        { type: 'code', language: 'js', title: 'Premier script Node',
          code: '// server.js — exécute avec : node server.js\nconsole.log("Je tourne sur le serveur, pas dans le navigateur !");' },
      ],
    },
    {
      type: 'section', title: 'b. npm et les packages',
      blocks: [
        { type: 'prose', content:
          "**npm** (Node Package Manager) est le gestionnaire de paquets de Node. Il te permet " +
          "d'installer des bibliothèques écrites par d'autres développeurs. Le package central " +
          "qu'on va utiliser : **Express**, un framework pour créer des serveurs web facilement." },
        { type: 'code', language: 'bash', title: 'Initialiser un projet et installer Express',
          code: 'npm init -y              # crée package.json\nnpm install express      # installe Express' },
      ],
    },
    {
      type: 'section', title: 'c. Créer un serveur avec Express',
      blocks: [
        { type: 'code', language: 'js', title: 'Un serveur Express minimal',
          code:
            'const express = require("express");\n' +
            'const app = express();\n\n' +
            '// Une route qui répond à GET /\n' +
            'app.get("/", (req, res) => {\n' +
            '  res.json({ message: "Bienvenue sur mon API !" });\n' +
            '});\n\n' +
            '// Démarrer le serveur sur le port 3000\n' +
            'app.listen(3000, () => {\n' +
            '  console.log("Serveur démarré sur http://localhost:3000");\n' +
            '});' },
        { type: 'info', variant: 'definition', title: 'API REST en 30 secondes',
          content: "Une API (Application Programming Interface) est un ensemble de **routes** (URL) auxquelles le front-end envoie des requêtes. Chaque route fait quelque chose : `GET /utilisateurs` → renvoie la liste, `POST /utilisateurs` → en crée un, `DELETE /utilisateurs/5` → supprime le n°5. C'est le contrat entre le front et le back." },
        { type: 'table', headers: ['Méthode HTTP', 'Usage', 'Exemple'],
          rows: [
            ['GET', 'Lire des données', 'GET /produits → liste des produits'],
            ['POST', 'Créer une donnée', 'POST /produits → ajouter un produit'],
            ['PUT', 'Modifier une donnée', 'PUT /produits/3 → modifier le produit 3'],
            ['DELETE', 'Supprimer une donnée', 'DELETE /produits/3 → supprimer le produit 3'],
          ] },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 1 — Premier serveur Express',
      body: [
        { type: 'list', ordered: true, items: [
          'Crée un dossier `api-test`, initialise avec `npm init -y`, installe Express.',
          'Crée `server.js` avec le code minimal ci-dessus. Lance avec `node server.js`.',
          'Ouvre `http://localhost:3000` dans le navigateur : tu dois voir le JSON.',
          'Ajoute une route `GET /salut/:prenom` qui répond `{ message: "Bonjour [prenom] !" }` (utilise `req.params.prenom`).',
          'Teste dans le navigateur : `http://localhost:3000/salut/Alice`.',
        ]},
      ],
    },

    {
      type: 'section', title: 'Mémo',
      blocks: [
        { type: 'list', ordered: false, items: [
          'Node.js = JS côté serveur. npm = gestionnaire de paquets. Express = framework web.',
          'API REST : GET (lire), POST (créer), PUT (modifier), DELETE (supprimer).',
        ]},
      ],
    },
  ],

  tp: {
    kind: 'digital',
    title: 'Construire l\u2019API de son projet',
    mission: "Créer le back-end de ton projet annuel : concevoir la base de données, implémenter les routes API avec Express, et connecter les deux.",
    prerequis: ['Cours T-S2 suivi', 'Node.js + npm installés', 'Cadrage projet (T-S1) terminé'],
    criteres: ['Schéma de BDD cohérent', 'Au moins 4 routes CRUD fonctionnelles', 'Paramètres préparés (pas d\u2019injection)', 'Code organisé', 'Commits réguliers'],
    bonus: "Ajouter une route de recherche (GET /utilisateurs?nom=Alice) avec un WHERE LIKE.",
    steps: [
      {
        title: 'Conception et création de la BDD',
        body: [
          { type: 'list', ordered: true, items: [
            'Finalise le schéma de données de ton projet (au moins 2 tables liées).',
            'Crée un fichier `init-db.js` qui crée les tables et insère des données de test.',
            'Exécute-le (`node init-db.js`) et vérifie que le fichier `.db` est créé.',
          ]},
        ],
        done: 'La base de données est créée avec des données de test.',
        validation: { commit: 'git commit -m "feat: schéma BDD et données de test"' },
      },
      {
        title: 'Routes API de lecture',
        body: [
          { type: 'list', ordered: true, items: [
            'Crée `server.js` avec Express. Connecte-le à la BDD.',
            'Implémente GET / (accueil API), GET /[entité] (liste), GET /[entité]/:id (détail).',
            'Teste chaque route dans le navigateur ou Thunder Client.',
          ]},
        ],
        done: 'Les routes GET fonctionnent et renvoient du JSON.',
        validation: { commit: 'git commit -m "feat: routes API GET"' },
      },
      {
        title: 'Routes de création et suppression',
        body: [
          { type: 'list', ordered: true, items: [
            'Implémente POST /[entité] (créer) et DELETE /[entité]/:id (supprimer).',
            'Ajoute `app.use(express.json())` pour lire le corps des requêtes POST.',
            'Vérifie que les données sont bien insérées/supprimées dans la BDD.',
            'Vérifie que tu utilises des paramètres préparés partout.',
          ]},
        ],
        done: 'L\u2019API CRUD complète fonctionne.',
        validation: { commit: 'git commit -m "feat: routes POST et DELETE" && git push' },
      },
    ],
  },
};
