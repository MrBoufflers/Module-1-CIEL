// =============================================================================
// Terminale S2 — Back-end & données : Node.js + bases de données (15 h)
// 5 exercices intégrés. TP digital. Fond BDD repris de moduleBDDCours1/2.
// =============================================================================

export const ts2NodejsBdd = {
  meta: {
    id: 'nodejs-bdd',
    sequence: 'S2',
    niveau: 'terminale',
    title: 'Back-end & données : Node.js + BDD',
    icon: 'server',
    duree: '15 h',
    theme: 'Développement back-end',
    filRouge:
      "Le cadrage est fait (S1). On construit maintenant le cœur de l'application : un serveur " +
      "Node.js qui expose une API, connecté à une base de données qui stocke les informations " +
      "de façon permanente et structurée.",
    ref: { competences: ['C08', 'C04', 'C09'], savoirs: ['S3.1', 'S3.2', 'S3.3'] },
    cyber: "Injection SQL, validation côté serveur, ne jamais faire confiance au client.",
    evalInfo: {
      format: 'Évaluation pratique sur poste (créer une API + BDD fonctionnelles)',
      duree: '3 h',
      competence: 'C08 (Application) · C04 (Application)',
      ressourcesAutorisees: ['Documentation Node.js', 'MDN', 'Le cours S2'],
      note: "Évaluation réalisée en classe.",
    },
  },

  course: [
    { type: 'hero', title: 'Node.js & bases de données',
      subtitle: "JavaScript quitte le navigateur et passe côté serveur. Combiné à une base de données, il peut tout faire : stocker, traiter, servir." },
    { type: 'info', variant: 'astuce', title: 'Objectifs',
      content: "Comprendre le rôle d'un back-end, créer un serveur Node.js avec Express, concevoir une base de données relationnelle, écrire des requêtes SQL, et connecter les deux dans une API REST." },

    // === PARTIE 1 : Node.js ===
    { type: 'section', title: 'Partie 1 — Node.js : JavaScript côté serveur',
      blocks: [
        { type: 'info', variant: 'astuce', title: 'Objectifs partie 1',
          content: "Comprendre ce qu'est Node.js, créer un serveur HTTP minimal, et construire une API REST avec Express." },
      ],
    },
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

    // === PARTIE 2 : BDD ===
    { type: 'section', title: 'Partie 2 — Bases de données relationnelles',
      blocks: [
        { type: 'info', variant: 'astuce', title: 'Objectifs partie 2',
          content: "Concevoir un schéma de données (entités, relations), créer des tables SQL, insérer/lire/modifier/supprimer des données." },
      ],
    },
    {
      type: 'section', title: 'd. Pourquoi une base de données ?',
      blocks: [
        { type: 'prose', content:
          "En Première, on stockait les données dans des fichiers texte. Ça marche pour 10 " +
          "lignes, pas pour 10 000. Une **base de données relationnelle** stocke les données " +
          "dans des **tables** (comme des tableaux Excel), avec des **relations** entre elles, " +
          "et un langage puissant pour les interroger : le **SQL**." },
        { type: 'info', variant: 'analogie', title: 'Analogie',
          content: "Un fichier texte, c'est un carnet de notes. Une base de données, c'est un système de classeurs indexés et liés entre eux : tu retrouves n'importe quelle information instantanément, même parmi des millions." },
      ],
    },
    {
      type: 'section', title: 'e. Concevoir un schéma de données',
      blocks: [
        { type: 'prose', content: "Avant de créer des tables, on **conçoit** le schéma : quelles **entités** (choses qu'on stocke), quels **attributs** (propriétés de chaque entité), et quelles **relations** (liens entre entités)." },
        { type: 'cards', columns: 3, items: [
          { title: 'Entité', text: "Une « chose » qu'on stocke : un utilisateur, un produit, une commande." },
          { title: 'Attribut', text: "Une propriété de l'entité : nom, email, prix, date." },
          { title: 'Relation', text: "Un lien entre entités : un utilisateur PASSE une commande, une commande CONTIENT des produits." },
        ]},
        { type: 'info', variant: 'definition', title: 'Clé primaire et clé étrangère',
          content: "**Clé primaire (PRIMARY KEY)** : l'identifiant unique d'un enregistrement (souvent `id`, un nombre auto-incrémenté). **Clé étrangère (FOREIGN KEY)** : une colonne qui référence la clé primaire d'une autre table — c'est elle qui crée la relation." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 2 — Concevoir un schéma',
      body: [
        { type: 'prose', content: 'Pour ton projet annuel (ou un projet fictif : une bibliothèque, un magasin...) :' },
        { type: 'list', ordered: true, items: [
          'Identifie 3 entités principales (ex. Utilisateur, Livre, Emprunt).',
          'Pour chaque entité, liste 4-5 attributs (dont un `id` en clé primaire).',
          'Identifie les relations entre les entités et les clés étrangères.',
          'Dessine le schéma (chaque entité dans un rectangle, les attributs listés, les relations fléchées).',
        ]},
      ],
    },
    {
      type: 'section', title: 'f. SQL : créer, insérer, lire',
      blocks: [
        { type: 'code', language: 'sql', title: 'CREATE TABLE',
          code: 'CREATE TABLE utilisateurs (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  nom TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE,\n  age INTEGER\n);' },
        { type: 'code', language: 'sql', title: 'INSERT INTO',
          code: 'INSERT INTO utilisateurs (nom, email, age)\nVALUES ("Alice Dupont", "alice@example.com", 17);' },
        { type: 'code', language: 'sql', title: 'SELECT',
          code: '-- Tout lire\nSELECT * FROM utilisateurs;\n\n-- Filtrer\nSELECT nom, email FROM utilisateurs WHERE age >= 18;\n\n-- Trier\nSELECT * FROM utilisateurs ORDER BY nom ASC;\n\n-- Compter\nSELECT COUNT(*) FROM utilisateurs;' },
        { type: 'code', language: 'sql', title: 'UPDATE et DELETE',
          code: '-- Modifier\nUPDATE utilisateurs SET age = 18 WHERE id = 1;\n\n-- Supprimer\nDELETE FROM utilisateurs WHERE id = 3;' },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 3 — Écrire du SQL',
      body: [
        { type: 'prose', content: 'Dans un outil SQL en ligne (ex. SQLite Online) ou dans le terminal avec `sqlite3` :' },
        { type: 'list', ordered: true, items: [
          'Crée la table `utilisateurs` ci-dessus.',
          'Insère 5 utilisateurs avec des données réalistes.',
          'Écris un `SELECT` qui affiche les utilisateurs majeurs (>= 18).',
          'Modifie l\u2019âge d\u2019un utilisateur avec `UPDATE`.',
          'Supprime un utilisateur avec `DELETE`.',
          'Bonus : crée une 2e table `projets` avec une clé étrangère `auteur_id` vers `utilisateurs`, et fais un `SELECT` avec `JOIN`.',
        ]},
      ],
    },

    // === PARTIE 3 : Connecter ===
    { type: 'section', title: 'Partie 3 — Connecter Node.js à la BDD',
      blocks: [
        { type: 'prose', content:
          "L'étape finale : faire communiquer Express et la base de données. Le serveur reçoit " +
          "une requête HTTP, exécute une requête SQL, et renvoie le résultat en JSON." },
        { type: 'code', language: 'js', title: 'Exemple : API + SQLite',
          code:
            'const express = require("express");\n' +
            'const Database = require("better-sqlite3");\n\n' +
            'const app = express();\n' +
            'const db = new Database("app.db");\n' +
            'app.use(express.json());\n\n' +
            '// GET /utilisateurs → tous les utilisateurs\n' +
            'app.get("/utilisateurs", (req, res) => {\n' +
            '  const rows = db.prepare("SELECT * FROM utilisateurs").all();\n' +
            '  res.json(rows);\n' +
            '});\n\n' +
            '// POST /utilisateurs → créer un utilisateur\n' +
            'app.post("/utilisateurs", (req, res) => {\n' +
            '  const { nom, email, age } = req.body;\n' +
            '  const result = db.prepare("INSERT INTO utilisateurs (nom, email, age) VALUES (?, ?, ?)").run(nom, email, age);\n' +
            '  res.json({ id: result.lastInsertRowid });\n' +
            '});' },
        { type: 'info', variant: 'attention', title: 'Les ? dans le SQL',
          content: "Les `?` sont des **paramètres préparés**. Ils protègent contre l'**injection SQL** : au lieu d'insérer directement la valeur de l'utilisateur dans la requête (dangereux), on la passe séparément. La base de données sait que c'est une valeur, pas du SQL. **Utilise TOUJOURS des paramètres, jamais de concaténation.**" },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 4 — API CRUD complète',
      body: [
        { type: 'list', ordered: true, items: [
          'Installe `better-sqlite3` (`npm install better-sqlite3`).',
          'Crée un script `init-db.js` qui crée la table et insère 3 utilisateurs de test.',
          'Dans `server.js`, implémente les 4 routes CRUD : GET (tous), GET (par id), POST (créer), DELETE (supprimer).',
          'Teste chaque route avec le navigateur (GET) et un outil comme Thunder Client (POST, DELETE).',
        ]},
      ],
    },

    // === Cyber + Mémo ===
    {
      type: 'section', title: 'Point cybersécurité',
      blocks: [
        { type: 'info', variant: 'attention', title: 'Injection SQL',
          content: "Si tu écris `\"SELECT * FROM users WHERE nom = '\" + nom + \"'\"`, un attaquant peut taper `'; DROP TABLE users; --` et détruire ta base. Les **paramètres préparés** (`?`) empêchent ça. C'est la faille n°1 du web et la plus facile à éviter. **Jamais de concaténation dans une requête SQL.**" },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 5 — Tester une injection SQL',
      body: [
        { type: 'list', ordered: true, items: [
          'Dans une version de test (PAS sur ton vrai projet), écris volontairement une requête avec concaténation au lieu de paramètres.',
          'Essaie de faire passer `\' OR 1=1 --` comme valeur de recherche. Observe le résultat.',
          'Corrige avec des paramètres préparés et vérifie que l\u2019injection ne fonctionne plus.',
        ]},
      ],
    },
    {
      type: 'section', title: 'Mémo',
      blocks: [
        { type: 'list', ordered: false, items: [
          'Node.js = JS côté serveur. npm = gestionnaire de paquets. Express = framework web.',
          'API REST : GET (lire), POST (créer), PUT (modifier), DELETE (supprimer).',
          'BDD relationnelle : tables, colonnes, clés primaires, clés étrangères.',
          'SQL : CREATE TABLE, INSERT INTO, SELECT (WHERE, ORDER BY), UPDATE, DELETE.',
          'Toujours des paramètres préparés (`?`) contre l\u2019injection SQL.',
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
