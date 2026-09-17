// =============================================================================
// Ressource — Tutoriel Insomnia : tester une API CRUD (produits)
// Type : Ressource (pas une séquence de cours) — accessible depuis /ressources/insomnia
// Objectif : apprendre à tester une API REST avec Insomnia, route par route.
// Complète le TP de la séquence T-S2 (Back-end & API : Node.js).
// Hypothèse : l'API `produits` du cours tourne sur http://localhost:3000.
// =============================================================================

export const resInsomnia = {
  meta: {
    id: 'insomnia',
    sequence: null,              // ce n'est pas une séquence numérotée
    niveau: 'ressources',
    title: 'Insomnia — Tester une API CRUD',
    icon: 'api',
    duree: 'Référence',
    theme: 'Back-end & API',
    filRouge:
      "Le navigateur ne sait faire que des GET. Pour tester une vraie API (POST, PUT, DELETE), " +
      "il te faut un client HTTP : Insomnia. Ce guide te montre comment tester ton API `produits` " +
      "route par route, et reste ta référence pour tout le back-end de l'année.",
    ref: { competences: ['C08', 'C04'], savoirs: [] },
    cyber: null,
  },

  course: [
    {
      type: 'hero',
      title: 'Insomnia — Tester une API CRUD',
      subtitle:
        "Envoyer des requêtes GET, POST, PUT, DELETE à ton serveur et lire les réponses (données + code de statut), sans écrire une ligne de front-end.",
    },
    {
      type: 'info', variant: 'astuce', title: 'Avant de commencer',
      content:
        "Ce guide suppose que l'API **`produits`** du cours T-S2 tourne sur **`http://localhost:3000`** " +
        "(lance-la avec `npm run dev`). On teste les routes `GET /produits`, `GET /produits/:id`, " +
        "`POST /produits`, `PUT /produits/:id` et `DELETE /produits/:id`.",
    },

    // ===================== 1. POURQUOI INSOMNIA =====================
    {
      type: 'section',
      title: "1. Pourquoi un client HTTP ?",
      blocks: [
        {
          type: 'prose',
          content:
            "La barre d'adresse d'un navigateur ne sait envoyer que des requêtes **GET**. Impossible d'y " +
            "tester un **POST** (créer), un **PUT** (modifier) ou un **DELETE** (supprimer). Un **client " +
            "HTTP** comme **Insomnia** permet d'envoyer n'importe quelle méthode, avec un corps de requête, " +
            "et de lire la réponse en détail (données **et** code de statut).",
        },
        {
          type: 'info', variant: 'analogie', title: 'Analogie',
          content:
            "Le navigateur, c'est une télécommande avec un seul bouton (GET). Insomnia, c'est la " +
            "télécommande complète : tous les boutons (GET, POST, PUT, DELETE) plus l'écran qui affiche " +
            "exactement ce que le serveur répond.",
        },
      ],
    },

    // ===================== 2. INSTALLER + PREMIÈRE REQUÊTE =====================
    {
      type: 'section',
      title: "2. Installer Insomnia et créer sa première requête",
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            "Télécharge Insomnia depuis **`insomnia.rest`** et installe l'application.",
            "À la première ouverture, crée (ou passe) sans compte : clique sur **New Collection** (ou **Create → Request Collection**) et nomme-la par exemple **API Produits**.",
            "Dans la collection, clique sur **+** puis **HTTP Request** : une nouvelle requête vide apparaît.",
            "Tu peux renommer chaque requête (double-clic sur son nom) pour t'y retrouver : « Liste produits », « Créer produit », etc.",
          ],
        },
        {
          type: 'info', variant: 'definition', title: 'Collection',
          content:
            "Une **collection** est un dossier qui regroupe les requêtes d'un même projet. Tu gardes ainsi " +
            "toutes les requêtes de ton API au même endroit, prêtes à être relancées.",
        },
      ],
    },

    // ===================== 3. ANATOMIE D'UNE REQUÊTE =====================
    {
      type: 'section',
      title: "3. Anatomie d'une requête dans Insomnia",
      blocks: [
        {
          type: 'prose',
          content:
            "Chaque requête se compose de quatre éléments, toujours les mêmes :",
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: '1. La méthode', text: "Le menu déroulant à gauche : GET, POST, PUT, DELETE. C'est le type d'action." },
            { title: '2. L’URL', text: "L'adresse de la route, ex. http://localhost:3000/produits." },
            { title: '3. Le corps (Body)', text: "Les données envoyées (pour POST et PUT). Onglet Body → JSON." },
            { title: '4. Le bouton Send', text: "Envoie la requête. La réponse s'affiche à droite." },
          ],
        },
        {
          type: 'prose',
          content:
            "La **réponse** (panneau de droite) affiche deux choses essentielles : le **code de statut** " +
            "en haut (ex. `200 OK`, `201 Created`, `404 Not Found`) et le **corps** de la réponse (les " +
            "données JSON renvoyées par le serveur).",
        },
        {
          type: 'info', variant: 'astuce', title: 'Le code de statut, ton premier réflexe',
          content:
            "Regarde toujours le code de statut **avant** le contenu : **2xx** ça a marché, **4xx** tu " +
            "t'es trompé dans ta requête, **5xx** le serveur a planté.",
        },
      ],
    },

    // ===================== 4. GET LISTE =====================
    {
      type: 'section',
      title: "4. Lire la liste — GET /produits",
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            "Méthode : **GET**.",
            "URL : `http://localhost:3000/produits`.",
            "Clique **Send**.",
          ],
        },
        {
          type: 'prose',
          content: "Résultat attendu : statut **200** et la liste de tes produits en JSON, par exemple :",
        },
        {
          type: 'code', language: 'json', title: 'Réponse',
          code:
            '[\n' +
            '  { "id": 1, "nom": "Clavier", "prix": 25 },\n' +
            '  { "id": 2, "nom": "Souris", "prix": 15 },\n' +
            '  { "id": 3, "nom": "Ecran", "prix": 120 }\n' +
            ']',
        },
      ],
    },

    // ===================== 5. GET PAR ID =====================
    {
      type: 'section',
      title: "5. Lire un seul produit — GET /produits/:id",
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            "Duplique ta requête précédente (clic droit → **Duplicate**) ou crée-en une nouvelle.",
            "Méthode : **GET**. URL : `http://localhost:3000/produits/1`.",
            "**Send** → statut **200** et un seul produit (le n°1).",
            "Change l'URL en `http://localhost:3000/produits/999` et renvoie : statut **404** et un message d'erreur.",
          ],
        },
        {
          type: 'info', variant: 'attention', title: 'Teste toujours le cas qui échoue',
          content:
            "Une API bien faite renvoie **404** quand la ressource n'existe pas. Vérifier ce cas fait " +
            "partie du test : ce n'est pas parce que le cas « normal » marche que l'API est correcte.",
        },
      ],
    },

    // ===================== 6. POST =====================
    {
      type: 'section',
      title: "6. Créer un produit — POST /produits",
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            "Nouvelle requête. Méthode : **POST**. URL : `http://localhost:3000/produits`.",
            "Ouvre l'onglet **Body** → choisis **JSON**.",
            "Saisis le corps de la requête (les données du nouveau produit) :",
          ],
        },
        {
          type: 'code', language: 'json', title: 'Body → JSON',
          code: '{ "nom": "Casque", "prix": 40 }',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "Clique **Send** : statut **201** (Created) et le produit créé (avec son `id`) en réponse.",
            "Relance ta requête `GET /produits` : le casque apparaît maintenant dans la liste.",
            "Teste la validation : renvoie un POST avec un corps **vide** `{}` → statut **400** (le serveur refuse car il manque des données).",
          ],
        },
        {
          type: 'info', variant: 'attention', title: 'Erreur classique',
          content:
            "Si tu oublies de choisir **Body → JSON**, le serveur reçoit un corps vide et te répond **400** " +
            "(ou crée un produit sans nom). Vérifie toujours que l'onglet Body est bien en mode **JSON**.",
        },
      ],
    },

    // ===================== 7. PUT =====================
    {
      type: 'section',
      title: "7. Modifier un produit — PUT /produits/:id",
      blocks: [
        {
          type: 'prose',
          content:
            "Le **PUT** sert à modifier un produit existant. On précise l'`id` dans l'URL et les nouvelles " +
            "valeurs dans le corps.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "Méthode : **PUT**. URL : `http://localhost:3000/produits/2`.",
            "Onglet **Body** → **JSON**, avec les nouvelles valeurs :",
          ],
        },
        {
          type: 'code', language: 'json', title: 'Body → JSON',
          code: '{ "nom": "Souris gamer", "prix": 35 }',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Send** → statut **200** et le produit modifié.",
            "Vérifie avec `GET /produits/2` que le changement est bien pris en compte.",
            "Teste un `id` inexistant (`/produits/999`) → statut **404**.",
          ],
        },
      ],
    },

    // ===================== 8. DELETE =====================
    {
      type: 'section',
      title: "8. Supprimer un produit — DELETE /produits/:id",
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            "Méthode : **DELETE**. URL : `http://localhost:3000/produits/1`. (Pas de corps pour un DELETE.)",
            "**Send** → statut **200** et un message de confirmation.",
            "Relance `GET /produits` : le produit n°1 a disparu.",
            "Retente le même DELETE sur `/produits/1` → statut **404** (il n'existe plus).",
          ],
        },
      ],
    },

    // ===================== 9. ASTUCES =====================
    {
      type: 'section',
      title: "9. Astuces pour aller plus vite",
      blocks: [
        {
          type: 'list',
          ordered: false,
          items: [
            "**Duplique** tes requêtes (clic droit → Duplicate) au lieu de tout retaper.",
            "**Nomme** clairement chaque requête (« Créer produit », « Supprimer produit »).",
            "**Variable d'environnement** : dans Insomnia, définis `base_url = http://localhost:3000`, puis utilise `{{ base_url }}/produits` dans tes URLs. Si tu changes de port, tu ne modifies qu'un seul endroit.",
            "Garde toutes tes requêtes CRUD dans une **collection** : tu peux rejouer tout le parcours en quelques clics.",
          ],
        },
      ],
    },

    // ===================== 10. ERREURS FRÉQUENTES =====================
    {
      type: 'section',
      title: "10. Les erreurs fréquentes",
      blocks: [
        {
          type: 'table',
          headers: ['Symptôme', 'Cause probable', 'Solution'],
          rows: [
            ['Error: could not connect / ECONNREFUSED', 'Le serveur n’est pas lancé', 'Lance `npm run dev` dans le dossier de l’API'],
            ['Ça ne répond pas sur le bon chemin (404 partout)', 'Mauvaise URL ou mauvais port', 'Vérifie l’URL et que le serveur écoute bien sur le port 3000'],
            ['POST/PUT renvoie 400 alors que tu as rempli le corps', 'Body pas en mode JSON', 'Onglet Body → JSON, puis relance'],
            ['Le corps arrive vide côté serveur', 'express.json() oublié dans serveur.js', 'Ajoute `app.use(express.json())`'],
          ],
        },
        {
          type: 'info', variant: 'definition', title: 'Mémo — Les codes de statut à reconnaître',
          content:
            "**200** OK · **201** Created (après un POST) · **400** Bad Request (données invalides) · " +
            "**404** Not Found (ressource absente) · **500** Internal Server Error (bug côté serveur).",
        },
      ],
    },
  ],
};
