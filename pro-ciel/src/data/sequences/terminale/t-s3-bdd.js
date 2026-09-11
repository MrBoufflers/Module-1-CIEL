// =============================================================================
// Terminale S3 — Bases de données & SQL (18 h)
// Contenu BDD + connexion API<->BDD issu de l'ancienne T-S2 (Node.js + BDD).
// NOTE : séquence à réécrire entièrement dans une session ultérieure.
// =============================================================================

export const ts3Bdd = {
  meta: {
    id: 'bdd',
    sequence: 'S3',
    niveau: 'terminale',
    title: 'Bases de données & SQL',
    icon: 'database',
    duree: '18 h',
    theme: 'Bases de données',
    filRouge:
      "L'API Node.js existe (S2). On lui donne une mémoire persistante : une base de données " +
      "relationnelle, interrogée en SQL, puis connectée à l'API.",
    ref: { competences: ['C08', 'C04', 'C09'], savoirs: ['S3.2', 'S3.3'] },
    cyber: "Injection SQL, paramètres préparés, validation côté serveur.",
  },

  course: [
    { type: 'hero', title: 'Bases de données & SQL',
      subtitle: "Une application a besoin de mémoire. On conçoit une base relationnelle, on l'interroge en SQL, puis on la branche sur l'API Node.js." },
    { type: 'info', variant: 'astuce', title: 'Objectifs',
      content: "Concevoir une base de données relationnelle, écrire des requêtes SQL (CREATE, INSERT, SELECT, UPDATE, DELETE), et connecter la base à une API Express." },

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

    { type: 'section', title: 'g. Connecter Node.js à la base de données',
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
          'BDD relationnelle : tables, colonnes, clés primaires, clés étrangères.',
          'SQL : CREATE TABLE, INSERT INTO, SELECT (WHERE, ORDER BY), UPDATE, DELETE.',
          'Toujours des paramètres préparés (`?`) contre l\u2019injection SQL.',
        ]},
      ],
    },
  ],
};
