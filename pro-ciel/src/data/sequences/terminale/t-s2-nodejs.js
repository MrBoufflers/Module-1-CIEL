// =============================================================================
// Terminale S2 — Back-end & API : Node.js (15 h)
// Refonte pédagogique : chaque notion répond à un besoin ressenti par l'élève.
// AUCUNE base de données : les données vivent dans un tableau JS en mémoire
// (let produits = [...]). Ce caractère provisoire est exploité en fin de séquence
// pour amener la séquence suivante (T-S3 — Bases de données & SQL).
// Format bloc Pro CIEL. ~12 exercices intégrés (sans champ correction).
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
      "Node.js qui expose une API REST. Les données sont d'abord gardées en mémoire, dans un " +
      "simple tableau JavaScript. La vraie base de données, elle, arrive juste après, en S3.",
    ref: { competences: ['C08', 'C04', 'C09'], savoirs: ['S3.1', 'S3.2', 'S3.3'] },
    cyber:
      "Ne jamais faire confiance au client : tout ce que le navigateur envoie (corps de requête, " +
      "paramètres) doit être vérifié côté serveur.",
    evalInfo: {
      format: "Contrôle pratique sur poste, hors ligne : compléter une API Express à partir d'un code de base et d'un cahier des charges, par paliers de difficulté",
      duree: '3 h',
      competence: 'C08 (Application) · C04 (Application)',
      ressourcesAutorisees: ["Le code de départ et le cahier des charges fournis", "Les aides de l'énoncé (req.query, filter, sort, PATCH)", 'Insomnia'],
      note: "Aucune connexion internet pendant le contrôle. Le format est celui de l'étape 7 du TP : entraîne-toi dessus. Aucun sujet n'est publié sur le site.",
    },
  },

  course: [
    {
      type: 'hero',
      title: 'Back-end & API : Node.js',
      subtitle:
        "En Première, tu ouvrais ton site en double-cliquant sur index.html. Cette fois, on " +
        "construit ce qui se cache derrière : un serveur qui répond aux demandes et sert des données.",
    },
    {
      type: 'info', variant: 'astuce', title: 'Ce que tu sauras faire à la fin',
      content:
        "Expliquer pourquoi une vraie application a besoin d'un serveur, écrire un serveur avec " +
        "Node.js et Express, créer une API REST qui renvoie des données en JSON, et comprendre " +
        "pourquoi il nous manquera encore une pièce : la base de données.",
    },

    // =======================================================================
    // a. Pourquoi on a besoin d'un serveur
    // =======================================================================
    {
      type: 'section', title: "a. Pourquoi on a besoin d'un serveur",
      blocks: [
        {
          type: 'prose',
          content:
            "Reprends ton site de Première (le fil rouge). Pour l'ouvrir, tu double-cliques sur " +
            "`index.html` et il s'affiche dans ton navigateur. Regarde bien la **barre d'adresse** : " +
            "elle affiche quelque chose comme `file:///C:/Users/toi/site/index.html`.",
        },
        {
          type: 'prose',
          content:
            "Ce petit mot **`file://`** dit tout : le navigateur lit un **fichier sur ta machine**. " +
            "Personne d'autre au monde ne peut voir ce site, et il ne peut **rien mémoriser** : pas " +
            "de compte, pas de message enregistré, pas de contenu qui change. C'est une vitrine figée.",
        },
        {
          type: 'info', variant: 'definition', title: 'Client et serveur',
          content:
            "Le **client**, c'est le navigateur : il *demande* des pages et les affiche. Le **serveur**, " +
            "c'est un programme, situé ailleurs, qui *reçoit* ces demandes et *répond*. Quand tu vas sur " +
            "un vrai site, ton navigateur (client) parle à un serveur via le réseau. `file://`, lui, ne " +
            "passe par aucun serveur : c'est pour ça qu'il ne peut ni être partagé, ni rien retenir.",
        },
        {
          type: 'info', variant: 'analogie', title: 'Analogie — La vitrine et le magasin',
          content:
            "Ton site en `file://`, c'est une vitrine que toi seul peux regarder, chez toi. Un serveur, " +
            "c'est le magasin ouvert sur la rue : n'importe qui peut entrer, demander quelque chose, et " +
            "un employé (le serveur) va chercher la réponse et la rapporte.",
        },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 1 — Observer les limites de file://',
      body: [
        { type: 'list', ordered: true, items: [
          "Ouvre ton site de Première en double-cliquant sur `index.html`.",
          "Note ce qu'affiche la **barre d'adresse** (elle commence par `file://`).",
          "Écris 3 choses que ce site **ne peut pas faire** tel quel (ex. être vu par un camarade sur sa machine, garder en mémoire un message envoyé...).",
          "En une phrase : à quoi servirait un **serveur** pour lever ces limites ?",
        ]},
      ],
    },

    // =======================================================================
    // b. Qu'est-ce qu'un serveur, vraiment
    // =======================================================================
    {
      type: 'section', title: "b. Qu'est-ce qu'un serveur, vraiment",
      blocks: [
        {
          type: 'prose',
          content:
            "Retiens une chose avant tout : **un serveur est un PROGRAMME, pas une machine**. " +
            "Dans dix minutes, ton PC de TP va en devenir un : tu vas lancer un programme qui " +
            "écoute les demandes et y répond. La machine ne change pas ; c'est le *logiciel* qui la " +
            "transforme en serveur.",
        },
        {
          type: 'info', variant: 'attention', title: 'Un serveur, ce n\u2019est pas « l\u2019armoire dans la baie »',
          content:
            "Beaucoup imaginent le serveur comme la grosse armoire noire de la salle réseau. Cette " +
            "armoire n'est qu'un ordinateur puissant. Le **serveur**, c'est le **programme** qui tourne " +
            "dessus (ou sur ton PC). Un même ordinateur peut faire tourner plusieurs serveurs à la fois.",
        },
        {
          type: 'prose',
          content:
            "Caractéristique clé : un serveur est **réactif**. Il tourne en permanence mais **ne fait " +
            "rien tant qu'on ne lui demande rien**. Il attend. Quand une demande arrive, il la traite " +
            "et répond, puis se remet à attendre.",
        },
        {
          type: 'info', variant: 'analogie', title: 'Analogie — Le standard téléphonique',
          content:
            "Un serveur, c'est un standardiste : il attend, décroche quand ça sonne, répond à la " +
            "demande, puis raccroche et attend le prochain appel. **Il ne t'appelle jamais de lui-même.** " +
            "C'est toujours le client qui initie la conversation.",
        },
        {
          type: 'prose',
          content:
            "Pour joindre un serveur, il faut trois informations : une **adresse IP** (quelle machine), " +
            "un **port** (quel programme sur cette machine), et une **route** (quoi lui demander).",
        },
        {
          type: 'info', variant: 'analogie', title: 'Analogie — Immeuble, appartement, pièce',
          content:
            "L'**adresse IP**, c'est l'immeuble (quelle machine sur le réseau). Le **port**, c'est le " +
            "numéro d'appartement (quel programme dans cette machine). La **route**, c'est la pièce où " +
            "tu vas une fois entré (`/produits`, `/utilisateurs`...). `localhost` (ou `127.0.0.1`) est une " +
            "adresse spéciale qui veut dire « chez moi, cette machine ».",
        },
        {
          type: 'info', variant: 'attention', title: 'Deux programmes ne peuvent pas partager un port',
          content:
            "Un port ne peut être utilisé que par **un seul** programme à la fois. Si tu lances deux " +
            "serveurs sur le port 3000, le second refusera de démarrer avec l'erreur **`EADDRINUSE`** " +
            "(*address in use*, l'adresse est déjà prise). Tu la rencontreras en TP : la solution est " +
            "d'arrêter l'autre serveur, ou d'en choisir un autre port.",
        },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 2 — Adresse, port, route',
      body: [
        { type: 'prose', content: "Pour l'URL `http://localhost:3000/produits` :" },
        { type: 'list', ordered: true, items: [
          "Quelle partie est l'**adresse** (la machine) ? Que signifie-t-elle ici ?",
          "Quelle partie est le **port** ?",
          "Quelle partie est la **route** ?",
          "Avec l'analogie de l'immeuble : associe chaque partie à immeuble / appartement / pièce.",
          "Que se passe-t-il si tu lances un deuxième serveur sur le même port ? Comment s'appelle l'erreur ?",
        ]},
      ],
    },

    // =======================================================================
    // c. Node.js : sortir JavaScript du navigateur
    // =======================================================================
    {
      type: 'section', title: 'c. Node.js : sortir JavaScript du navigateur',
      blocks: [
        {
          type: 'prose',
          content:
            "Jusqu'ici, ton JavaScript était **prisonnier du navigateur** : il ne pouvait s'exécuter " +
            "que dans une page web. **Node.js** est un **moteur d'exécution** qui permet de lancer du " +
            "JavaScript **directement sur la machine**, dans le terminal, sans navigateur.",
        },
        {
          type: 'info', variant: 'analogie', title: 'Analogie — Le poisson sorti du bocal',
          content:
            "Ton JS, c'était un poisson qui ne pouvait vivre que dans le bocal du navigateur. Node.js " +
            "lui donne un environnement pour vivre dehors : il peut désormais accéder aux **fichiers** de " +
            "la machine, au **réseau**, et bientôt à une **base de données**.",
        },
        {
          type: 'prose',
          content:
            "Le bénéfice concret pour toi : **un seul langage** pour le front-end (dans le navigateur) " +
            "et le back-end (sur le serveur). Ce que tu sais déjà en JS, tu le réutilises côté serveur.",
        },
        {
          type: 'code', language: 'js', title: 'Premier script Node',
          filename: 'serveur.js',
          code:
            '// serveur.js\n' +
            '// On lance ce fichier avec la commande : node serveur.js\n' +
            'console.log("Ce message apparait dans le TERMINAL, pas dans le navigateur.");',
        },
        {
          type: 'prose',
          content:
            "Ligne par ligne : la première est un simple commentaire. La deuxième rappelle **comment " +
            "l'exécuter**. La troisième, `console.log(...)`, tu la connais — mais cette fois le message " +
            "s'affiche dans le **terminal**, car il n'y a pas de navigateur : c'est Node qui exécute.",
        },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 3 — Ton premier JavaScript côté serveur',
      body: [
        { type: 'list', ordered: true, items: [
          "Vérifie que Node est installé : `node --version` (sinon, on l'installe ensemble).",
          "Crée un fichier `serveur.js` avec le `console.log` ci-dessus.",
          "Lance-le : `node serveur.js`. Où s'affiche le message : dans le navigateur ou dans le terminal ?",
          "Ajoute une ligne qui calcule et affiche `2 + 3` avec un `console.log`. Relance.",
        ]},
      ],
    },

    // =======================================================================
    // d. Librairies, paquets, dépendances
    // =======================================================================
    {
      type: 'section', title: 'd. Librairies, paquets, dépendances',
      blocks: [
        {
          type: 'prose',
          content:
            "Une **librairie** (ou *bibliothèque*), c'est du **code déjà écrit par quelqu'un d'autre**, " +
            "que tu réutilises au lieu de le réécrire toi-même. C'est la base du développement moderne : " +
            "on ne réinvente pas tout à chaque projet.",
        },
        {
          type: 'info', variant: 'analogie', title: 'Analogie — La visseuse',
          content:
            "Tu n'inventes pas une visseuse à chaque chantier : tu prends celle du magasin et tu " +
            "l'utilises. Une librairie, c'est pareil : un outil tout prêt, testé par des milliers de gens, " +
            "que tu branches dans ton projet.",
        },
        {
          type: 'prose',
          content:
            "**npm** (*Node Package Manager*) est à la fois le **catalogue mondial** de ces librairies et " +
            "l'**outil** qui va les chercher pour toi. On appelle un paquet installable un **package**. " +
            "La commande pour en installer un :",
        },
        {
          type: 'code', language: 'bash', title: 'Installer une librairie avec npm',
          code:
            '# Telecharge la librairie "express" et la range dans node_modules\n' +
            'npm install express',
        },
        {
          type: 'info', variant: 'definition', title: 'Dépendance directe vs dépendance de dépendance',
          content:
            "Une **dépendance directe** est une librairie que **tu** as demandée (ex. Express). Mais " +
            "Express a lui-même besoin d'autres librairies pour fonctionner : ce sont des **dépendances " +
            "de dépendances**. npm les installe **toutes** automatiquement. C'est pour ça que le dossier " +
            "`node_modules` (qu'on découvre juste après) devient si gros : il contient toute cette chaîne.",
        },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 4 — Réutiliser plutôt que réécrire',
      body: [
        { type: 'list', ordered: true, items: [
          "Cite deux tâches, dans ton projet, pour lesquelles il vaut mieux **utiliser une librairie** que tout coder soi-même.",
          "Avec tes mots, explique la différence entre une **dépendance directe** et une **dépendance de dépendance**.",
          "Va sur le catalogue npm (`npmjs.com`) et cherche `express`. Combien de fois est-il téléchargé par semaine ? Qu'est-ce que ça t'apprend sur sa fiabilité ?",
        ]},
      ],
    },

    // =======================================================================
    // e. package.json et node_modules
    // =======================================================================
    {
      type: 'section', title: 'e. package.json et node_modules',
      blocks: [
        {
          type: 'prose',
          content:
            "On va procéder dans un **ordre précis** pour bien comprendre. D'abord on crée le projet, " +
            "on ouvre le fichier presque vide, **ensuite** on installe Express, et on **rouvre** le " +
            "fichier pour voir ce qui a changé tout seul.",
        },
        {
          type: 'code', language: 'bash', title: 'Étape 1 — Initialiser le projet',
          code:
            '# Cree un package.json minimal, sans poser de questions (-y = yes a tout)\n' +
            'npm init -y',
        },
        {
          type: 'prose',
          content:
            "Ouvre le `package.json` créé : il est presque vide (nom, version, un ou deux champs). " +
            "**Maintenant** installe Express (`npm install express`) puis **rouvre** le fichier : une " +
            "section **`dependencies`** est apparue **toute seule**, avec `express` dedans. npm a écrit " +
            "dans ton fichier ce que tu viens d'ajouter.",
        },
        {
          type: 'info', variant: 'definition', title: 'Le package.json',
          content:
            "C'est la **carte d'identité** du projet **et sa liste de courses**. Il dit comment s'appelle " +
            "le projet, comment le lancer, et de quelles librairies il a besoin. C'est le premier fichier " +
            "qu'un développeur ouvre pour comprendre un projet.",
        },
        {
          type: 'prose',
          content:
            "Les champs à connaître : **`name` / `version` / `description`** (survol, l'identité du " +
            "projet) ; **`scripts`** (des raccourcis de commandes — on y revient tout de suite) ; " +
            "**`dependencies`** (les librairies nécessaires pour tourner) ; **`devDependencies`** (les " +
            "librairies utiles seulement pendant le développement — *l'outil de cuisine ne finit pas dans " +
            "le gâteau*) ; **`main` / `type`** (le fichier de départ et le style de modules — simple mention).",
        },
        {
          type: 'prose',
          content:
            "Le champ **`scripts`** est très pratique : tu y donnes un nom court à une commande longue. " +
            "Ajoute par exemple un script `dev` :",
        },
        {
          type: 'code', language: 'json', title: 'Un script « dev » dans package.json',
          filename: 'package.json',
          code:
            '{\n' +
            '  "name": "mon-api",\n' +
            '  "version": "1.0.0",\n' +
            '  "scripts": {\n' +
            '    "dev": "node --watch serveur.js"\n' +
            '  },\n' +
            '  "dependencies": {\n' +
            '    "express": "^5.1.0"\n' +
            '  }\n' +
            '}',
        },
        {
          type: 'prose',
          content:
            "Tu le lances avec **`npm run dev`**. L'option **`--watch`** redémarre le serveur " +
            "automatiquement à chaque fois que tu enregistres ton fichier : plus besoin de l'arrêter " +
            "et le relancer à la main. Tu garderas ce réflexe toute l'année.",
        },
        {
          type: 'prose',
          content:
            "Sur les **versions** (`^5.1.0`) : le numéro se lit **majeur.mineur.correctif**. Le `^` " +
            "devant autorise npm à prendre les petites mises à jour compatibles (5.1.1, 5.2.0...) mais " +
            "pas un changement majeur (6.0.0) qui pourrait tout casser. On n'entre pas dans plus de détail " +
            "ici.",
        },
        {
          type: 'info', variant: 'astuce', title: 'package-lock.json',
          content:
            "À côté, npm crée un **`package-lock.json`**. Si `package.json` est la liste de courses " +
            "(« du pain »), le lock est le **ticket de caisse** détaillé (« baguette Tradition 250 g, " +
            "marque X »). On ne le modifie **jamais** à la main, mais on le **commit** : il garantit que " +
            "tout le monde installe exactement les mêmes versions.",
        },
        {
          type: 'prose',
          content:
            "Enfin, **`node_modules`** : c'est le dossier où npm range toutes les librairies. Il est " +
            "énorme. Fais le test : **supprime-le**, relance **`npm install`**, et il se **reconstruit** " +
            "entièrement à partir du `package.json`. Conclusion : **on transporte la recette " +
            "(`package.json`), pas les ingrédients (`node_modules`)**.",
        },
        {
          type: 'code', language: 'bash', title: 'Le .gitignore',
          filename: '.gitignore',
          code:
            '# On ne versionne JAMAIS node_modules : il se reconstruit avec npm install\n' +
            'node_modules/',
        },
        {
          type: 'info', variant: 'attention', title: 'Pourquoi on ne pousse jamais node_modules',
          content:
            "C'est exactement pour ça qu'on ajoute `node_modules/` au **`.gitignore`** : inutile (et très " +
            "lourd) de pousser des milliers de fichiers reconstructibles sur GitHub. Ton camarade ou le " +
            "correcteur clone le dépôt, tape `npm install`, et retrouve les mêmes librairies. C'est le même " +
            "réflexe que dans ton workflow **GitHub Classroom**.",
        },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 5 — Créer un projet et observer package.json',
      body: [
        { type: 'list', ordered: true, items: [
          "Crée un dossier `mon-api`, place-toi dedans, tape `npm init -y`.",
          "Ouvre `package.json` : recopie les champs que tu vois (il est presque vide).",
          "Installe Express (`npm install express`), **rouvre** le fichier : quelle nouvelle section est apparue ? Que contient-elle ?",
          "Regarde le dossier `node_modules` : combien de dossiers contient-il environ ? (Beaucoup plus qu'une seule librairie — pourquoi ?)",
        ]},
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 6 — Ajouter un script de développement',
      body: [
        { type: 'list', ordered: true, items: [
          "Dans `package.json`, ajoute un script `\"dev\": \"node --watch serveur.js\"`.",
          "Crée un `serveur.js` avec un simple `console.log(\"Salut\")`.",
          "Lance-le avec `npm run dev`.",
          "Modifie le message et enregistre **sans arrêter le serveur** : que se passe-t-il ? Quel est l'intérêt de `--watch` ?",
        ]},
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 7 — La recette, pas les ingrédients',
      body: [
        { type: 'list', ordered: true, items: [
          "**Supprime** entièrement le dossier `node_modules`.",
          "Relance `npm install`. Que se passe-t-il ? À partir de quel fichier npm reconstruit-il tout ?",
          "Crée un fichier `.gitignore` contenant `node_modules/`.",
          "Explique en une phrase pourquoi on ne pousse jamais `node_modules` sur GitHub.",
        ]},
      ],
    },

    // =======================================================================
    // f. Express : à quoi ça sert
    // =======================================================================
    {
      type: 'section', title: 'f. Express : à quoi ça sert',
      blocks: [
        {
          type: 'prose',
          content:
            "Node sait déjà créer un serveur **tout seul**, avec son module natif `http`. Regarde ce " +
            "que ça donne pour répondre à **une seule** route :",
        },
        {
          type: 'code', language: 'js', title: 'Un serveur en Node pur (module http natif)',
          filename: 'serveur-http.js',
          code:
            'const http = require("http");\n' +
            '\n' +
            'const serveur = http.createServer((req, res) => {\n' +
            '  // On doit gerer nous-memes la methode ET l URL demandee\n' +
            '  if (req.method === "GET" && req.url === "/") {\n' +
            '    // On pose nous-memes l en-tete qui dit "je renvoie du JSON"\n' +
            '    res.writeHead(200, { "Content-Type": "application/json" });\n' +
            '    // On doit transformer nous-memes l objet en texte\n' +
            '    res.end(JSON.stringify({ message: "Bonjour" }));\n' +
            '  } else {\n' +
            '    res.writeHead(404, { "Content-Type": "application/json" });\n' +
            '    res.end(JSON.stringify({ erreur: "Page introuvable" }));\n' +
            '  }\n' +
            '});\n' +
            '\n' +
            '// On demarre le serveur sur le port 3000\n' +
            'serveur.listen(3000, () => {\n' +
            '  console.log("Serveur sur http://localhost:3000");\n' +
            '});',
        },
        {
          type: 'prose',
          content:
            "C'est déjà lourd pour **une** route : il faut tester la méthode et l'URL à la main, poser " +
            "les en-têtes à la main, transformer les données à la main. Imagine avec vingt routes. " +
            "Voici **exactement le même serveur** écrit avec **Express** :",
        },
        {
          type: 'code', language: 'js', title: 'Le même serveur avec Express',
          filename: 'serveur.js',
          code:
            'const express = require("express");\n' +
            'const app = express();\n' +
            '\n' +
            '// Une route = une methode + un chemin + une fonction de reponse\n' +
            'app.get("/", (req, res) => {\n' +
            '  res.json({ message: "Bonjour" }); // Express pose l en-tete ET convertit en JSON\n' +
            '});\n' +
            '\n' +
            'app.listen(3000, () => {\n' +
            '  console.log("Serveur sur http://localhost:3000");\n' +
            '});',
        },
        {
          type: 'info', variant: 'astuce', title: 'Ce qu\u2019Express t\u2019évite',
          content:
            "Six lignes au lieu de quinze, et surtout : plus besoin de tester `req.url` à la main " +
            "(`app.get(\"/\")` s'en charge), plus besoin de poser les en-têtes (`res.json` le fait), plus " +
            "besoin d'appeler `JSON.stringify` (`res.json` convertit tout seul). Express range et " +
            "simplifie le travail répétitif.",
        },
        {
          type: 'info', variant: 'definition', title: 'Framework',
          content:
            "Express est un **framework** : une librairie qui, en plus de fournir des outils, **impose une " +
            "structure de travail** (ici : on déclare des routes avec `app.get`, `app.post`...). Une simple " +
            "librairie t'aide ; un framework t'aide **et** t'organise.",
        },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 8 — Node pur vs Express',
      body: [
        { type: 'list', ordered: true, items: [
          "Crée les deux serveurs ci-dessus dans deux fichiers séparés, lance-les (sur des ports différents) et vérifie qu'ils répondent pareil dans le navigateur.",
          "Cite **trois choses** qu'Express fait à ta place par rapport au module `http`.",
          "Avec tes mots : quelle est la différence entre une **librairie** et un **framework** ?",
        ]},
      ],
    },

    // =======================================================================
    // g. Routes, méthodes HTTP, codes de statut
    // =======================================================================
    {
      type: 'section', title: 'g. Routes, méthodes HTTP, codes de statut',
      blocks: [
        {
          type: 'prose',
          content:
            "Une **route** a trois parties : une **méthode** (le type d'action), un **chemin** (l'URL), et " +
            "une **fonction de traitement** qui reçoit deux objets : **`req`** (la demande) et **`res`** " +
            "(la réponse). À partir d'ici, nos données vivent dans un simple **tableau JavaScript en " +
            "mémoire** — provisoire, mais suffisant pour tout comprendre :",
        },
        {
          type: 'code', language: 'js', title: 'Des données en mémoire + deux routes',
          filename: 'serveur.js',
          code:
            '// Nos donnees vivent dans un tableau, en memoire (provisoire !)\n' +
            'let produits = [\n' +
            '  { id: 1, nom: "Clavier", prix: 25 },\n' +
            '  { id: 2, nom: "Souris", prix: 15 },\n' +
            '  { id: 3, nom: "Ecran", prix: 120 }\n' +
            '];\n' +
            '\n' +
            '// GET /produits -> renvoie toute la liste\n' +
            'app.get("/produits", (req, res) => {\n' +
            '  res.json(produits);\n' +
            '});\n' +
            '\n' +
            '// GET /produits/2 -> renvoie le produit dont l id vaut 2\n' +
            'app.get("/produits/:id", (req, res) => {\n' +
            '  const id = Number(req.params.id);          // :id est recupere dans req.params\n' +
            '  const produit = produits.find((p) => p.id === id);\n' +
            '  if (!produit) {\n' +
            '    return res.status(404).json({ erreur: "Produit introuvable" });\n' +
            '  }\n' +
            '  res.json(produit);\n' +
            '});',
        },
        {
          type: 'prose',
          content:
            "Détail de **`req`** (ce que le client envoie) : **`req.params`** contient les morceaux " +
            "variables du chemin (le `:id` ci-dessus) ; **`req.query`** contient les paramètres après le " +
            "`?` dans l'URL (`/produits?max=30`) ; **`req.body`** contient le **corps** de la requête " +
            "(les données envoyées lors d'un POST — on le voit juste après). Détail de **`res`** (ce que " +
            "tu renvoies) : **`res.json(...)`** envoie des données, **`res.status(...)`** fixe le code de statut.",
        },
        {
          type: 'prose',
          content:
            "Les **4 méthodes HTTP** de base correspondent aux 4 actions qu'on appelle **CRUD** " +
            "(*Create, Read, Update, Delete*) :",
        },
        {
          type: 'table',
          headers: ['Méthode', 'Action (CRUD)', 'Exemple'],
          rows: [
            ['GET', 'Read — lire', 'GET /produits → la liste'],
            ['POST', 'Create — créer', 'POST /produits → ajouter un produit'],
            ['PUT', 'Update — modifier', 'PUT /produits/2 → modifier le n°2'],
            ['DELETE', 'Delete — supprimer', 'DELETE /produits/2 → supprimer le n°2'],
          ],
        },
        {
          type: 'prose',
          content:
            "À chaque réponse, le serveur renvoie aussi un **code de statut** : un nombre qui dit si ça " +
            "s'est bien passé. On les range par **familles** : **2xx** ça marche, **4xx** le client s'est " +
            "trompé, **5xx** le serveur a planté.",
        },
        {
          type: 'table',
          headers: ['Code', 'Famille', 'Signification'],
          rows: [
            ['200 OK', '2xx', 'La requête a réussi'],
            ['201 Created', '2xx', 'Une ressource a été créée (après un POST)'],
            ['400 Bad Request', '4xx', "Le client a envoyé une requête invalide"],
            ['404 Not Found', '4xx', "La ressource demandée n'existe pas"],
            ['500 Internal Server Error', '5xx', 'Le serveur a planté'],
          ],
        },
        {
          type: 'code', language: 'js', title: 'Créer un produit (POST) avec les bons statuts',
          filename: 'serveur.js',
          code:
            '// Necessaire pour lire le corps JSON envoye par le client\n' +
            'app.use(express.json());\n' +
            '\n' +
            '// POST /produits -> ajoute un produit recu dans le corps de la requete\n' +
            'app.post("/produits", (req, res) => {\n' +
            '  // On ne fait JAMAIS confiance au client : on verifie les donnees\n' +
            '  if (!req.body.nom) {\n' +
            '    return res.status(400).json({ erreur: "Le nom est obligatoire" });\n' +
            '  }\n' +
            '  const nouveau = { id: produits.length + 1, nom: req.body.nom, prix: req.body.prix };\n' +
            '  produits.push(nouveau);\n' +
            '  res.status(201).json(nouveau); // 201 = cree\n' +
            '});',
        },
        {
          type: 'info', variant: 'attention', title: 'Ne jamais faire confiance au client',
          content:
            "Tout ce qui arrive dans `req.body` vient de l'extérieur : ça peut être vide, faux ou " +
            "malveillant. **Vérifie toujours** les données reçues avant de les utiliser (ici : on refuse " +
            "avec un `400` si le nom manque). C'est le premier réflexe de sécurité d'un back-end.",
        },
        {
          type: 'info', variant: 'astuce', title: 'Comment tester un POST ?',
          content:
            "Un `POST` ne se teste **pas** dans la barre d'adresse du navigateur (elle ne fait que des " +
            "`GET`). Il te faut un **client HTTP** comme Insomnia. Guide pas à pas pour tester ton API " +
            "(GET, POST, PUT, DELETE) : [Insomnia — Tester une API CRUD](/ressources/insomnia).",
        },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 9 — Enrichir l\u2019API (routes, params, statuts)',
      body: [
        { type: 'prose', content: 'Repars du tableau `produits` en mémoire :' },
        { type: 'list', ordered: true, items: [
          "Crée la route `GET /produits` qui renvoie toute la liste.",
          "Crée `GET /produits/:id` qui renvoie **un** produit ; s'il n'existe pas, réponds avec un code **404** et un message.",
          "Ajoute `POST /produits` qui crée un produit ; si le `nom` manque, réponds **400** ; sinon **201** avec le produit créé.",
          "Teste chaque route et vérifie le **code de statut** renvoyé (200, 404, 201, 400).",
        ]},
      ],
    },

    // =======================================================================
    // h. JSON — section complète et autonome
    // =======================================================================
    {
      type: 'section', title: 'h. JSON : le format d\u2019échange',
      blocks: [
        {
          type: 'prose',
          content:
            "**1. Le problème.** Ton serveur a un **objet JavaScript** en mémoire (`{ nom: \"Clavier\", " +
            "prix: 25 }`). Il doit l'envoyer au client **par le réseau**. Or, sur un réseau, on ne peut " +
            "faire transiter que du **texte**. Comment aplatir une structure de données en texte, puis la " +
            "reconstruire à l'arrivée sans rien perdre ?",
        },
        {
          type: 'info', variant: 'analogie', title: 'Analogie — Le meuble en kit',
          content:
            "Tu ne transportes pas une armoire montée à travers une porte étroite : tu la **démontes** en " +
            "pièces plates (le texte), tu transportes, et tu la **remontes** à l'arrivée. `JSON.stringify` " +
            "démonte l'objet en texte ; `JSON.parse` le remonte. Le réseau, c'est la porte étroite.",
        },
        {
          type: 'prose',
          content:
            "**2. Pourquoi JSON précisément ?** Parce qu'il est **lisible par un humain**, **compris par " +
            "tous les langages** (Python, PHP, Java, C#...), et **léger**. Comparé au vieux format **XML**, " +
            "il est beaucoup moins verbeux. C'est grâce à ça qu'un front **React** (S4) pourra parler à ce " +
            "back Node — ou à n'importe quel autre serveur, quel que soit son langage.",
        },
        {
          type: 'code', language: 'json', title: 'Le même produit : JSON vs XML',
          code:
            'JSON :  { "nom": "Clavier", "prix": 25 }\n' +
            '\n' +
            'XML  :  <produit><nom>Clavier</nom><prix>25</prix></produit>',
        },
        {
          type: 'prose',
          content:
            "**3. La syntaxe et ses pièges.** JSON ressemble à un objet JavaScript, mais il est **plus " +
            "strict** : guillemets **doubles obligatoires** (y compris sur les **clés**), **pas de virgule** " +
            "après le dernier élément, **pas de commentaires**, et seulement certains types (chaîne, nombre, " +
            "booléen, `null`, tableau, objet).",
        },
        {
          type: 'table',
          headers: ['', 'Objet JavaScript', 'JSON'],
          rows: [
            ['Clés', 'Guillemets optionnels : { nom: 1 }', 'Guillemets doubles obligatoires : { "nom": 1 }'],
            ['Chaînes', "Simples ou doubles : 'a' ou \"a\"", 'Doubles uniquement : "a"'],
            ['Virgule finale', 'Tolérée', 'Interdite'],
            ['Commentaires', 'Autorisés (// ...)', 'Interdits'],
            ['Fonctions', 'Autorisées', 'Interdites'],
            ['Nature', 'Du code, vit dans le programme', 'Du texte, voyage sur le réseau'],
          ],
        },
        {
          type: 'info', variant: 'attention', title: 'Le piège n°1 des élèves',
          content:
            "Confondre un objet JS et du JSON. `{ nom: 'Clavier' }` est un objet JS **valide** mais un JSON " +
            "**invalide** (guillemets simples, clé sans guillemets). En JSON il faut `{ \"nom\": \"Clavier\" }`. " +
            "Et surtout : **jamais de virgule après le dernier élément**.",
        },
        {
          type: 'prose',
          content:
            "**4. L'utilisation.** Côté client (navigateur), deux fonctions : **`JSON.stringify(objet)`** " +
            "transforme un objet en texte JSON, **`JSON.parse(texte)`** fait l'inverse. Côté serveur avec " +
            "Express, tu utilises **`res.json(...)`** pour renvoyer, et **`express.json()`** pour lire le " +
            "corps reçu.",
        },
        {
          type: 'info', variant: 'astuce', title: 'res.json() fait DEUX choses',
          content:
            "`res.json(data)` **sérialise** l'objet en texte JSON **et** pose l'en-tête " +
            "`Content-Type: application/json` qui prévient le client « attention, je t'envoie du JSON ». " +
            "Deux corvées en un seul appel.",
        },
        {
          type: 'code', language: 'js', title: 'Client : stringify / parse',
          code:
            '// Cote client : transformer un objet en texte JSON avant de l envoyer\n' +
            'const texte = JSON.stringify({ nom: "Clavier", prix: 25 });\n' +
            '\n' +
            '// ... puis reconstruire l objet a partir du texte recu\n' +
            'const objet = JSON.parse(texte);\n' +
            'console.log(objet.nom); // "Clavier"',
        },
        {
          type: 'code', language: 'js', title: 'Serveur : renvoyer un tableau en JSON',
          filename: 'serveur.js',
          code:
            'app.get("/produits", (req, res) => {\n' +
            '  // res.json convertit le tableau en texte JSON ET pose le bon en-tete\n' +
            '  res.json(produits);\n' +
            '});',
        },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 10 — Réparer du JSON cassé',
      body: [
        { type: 'prose', content: 'Voici du JSON invalide. Trouve et corrige **toutes** les erreurs :' },
        { type: 'code', language: 'json', title: 'À corriger', code:
          '{\n' +
          "  nom: 'Clavier',\n" +
          '  prix: 25,\n' +
          '  // clavier mecanique\n' +
          '  tags: ["azerty", "usb",],\n' +
          '}' },
        { type: 'list', ordered: true, items: [
          "Liste chaque erreur (il y en a au moins quatre) et explique pourquoi c'est interdit en JSON.",
          "Réécris la version correcte.",
        ]},
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 11 — Une route qui renvoie du JSON',
      body: [
        { type: 'list', ordered: true, items: [
          "Dans ton serveur, garde le tableau `produits` en mémoire.",
          "Écris `GET /produits` avec `res.json(produits)`.",
          "Ouvre `http://localhost:3000/produits` dans le navigateur : tu dois voir le tableau en JSON.",
          "Dans les outils de développement du navigateur (onglet Réseau), retrouve l'en-tête `Content-Type` de la réponse. Que vaut-il ?",
        ]},
      ],
    },

    // =======================================================================
    // i. API REST : mise en perspective
    // =======================================================================
    {
      type: 'section', title: 'i. API REST : mise en perspective',
      blocks: [
        {
          type: 'prose',
          content:
            "Assemble tout ce qui précède : des **routes** (`/produits`), des **méthodes** (GET, POST...), " +
            "des **données en JSON**, des **codes de statut**. L'ensemble forme une **API REST**.",
        },
        {
          type: 'info', variant: 'definition', title: 'Une API, c\u2019est un contrat',
          content:
            "Une **API** (*Application Programming Interface*) est un **contrat** : une liste de routes " +
            "convenues qui échangent des données en JSON. Le client sait qu'en appelant `GET /produits` il " +
            "recevra la liste. L'API est **indépendante de l'interface** : peu importe qui appelle " +
            "(un site React, une app mobile, un autre serveur), la réponse est la même.",
        },
        {
          type: 'info', variant: 'analogie', title: 'Pont vers T-S4 (React)',
          content:
            "En Première, ton serveur (quand tu en avais un) renvoyait du **HTML tout prêt à afficher**. " +
            "Désormais il renvoie des **données brutes en JSON**. En S4, c'est **React** qui, à partir de " +
            "ces données, **fabriquera l'affichage**. On a séparé le *quoi* (les données, ce back) du " +
            "*comment on l'affiche* (l'interface, le front).",
        },
      ],
    },

    // =======================================================================
    // j. Le problème qu'il nous reste
    // =======================================================================
    {
      type: 'section', title: 'j. Le problème qu\u2019il nous reste',
      blocks: [
        {
          type: 'prose',
          content:
            "Fais un test simple avec ton API : ajoute un produit avec un **POST**, vérifie qu'il apparaît " +
            "bien dans `GET /produits`... puis **arrête et relance le serveur**. Refais `GET /produits` : " +
            "**ton produit a disparu**. Tout est revenu au tableau de départ.",
        },
        {
          type: 'prose',
          content:
            "Normal : nos données vivent dans un **tableau en mémoire**. La mémoire s'efface à chaque " +
            "arrêt du programme (comme la RAM vue en Première). Au-delà de ça, trois limites sérieuses :",
        },
        {
          type: 'list', ordered: false, items: [
            "**Rien n'est conservé** : à chaque redémarrage, tout est perdu.",
            "**Pas de recherche efficace** : chercher dans un tableau de 10 000 éléments, c'est tout parcourir à la main, à chaque fois.",
            "**Accès concurrent** : si deux utilisateurs écrivent en même temps dans le tableau, ils se marchent dessus et les données se corrompent.",
          ],
        },
        {
          type: 'info', variant: 'attention', title: 'La pièce manquante',
          content:
            "Un tableau en mémoire ne suffit donc pas pour une vraie application. Il nous faut un outil " +
            "**conçu exactement pour ça** : conserver les données, les retrouver vite, et gérer plusieurs " +
            "accès à la fois. C'est tout l'objet de la **séquence suivante**.",
        },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 12 — Constater la limite de la mémoire',
      body: [
        { type: 'list', ordered: true, items: [
          "Avec ton API, ajoute un produit via un POST (avec Insomnia ou un autre client HTTP).",
          "Vérifie qu'il apparaît dans `GET /produits`.",
          "**Arrête** le serveur, puis **relance-le**. Refais `GET /produits`.",
          "Que constates-tu ? Explique pourquoi, et écris en une phrase ce qui nous manque pour régler ça.",
        ]},
      ],
    },

    // === Mémo ===
    {
      type: 'section', title: 'Mémo',
      blocks: [
        { type: 'list', ordered: false, items: [
          "Un **serveur** est un **programme** réactif : il attend, répond, puis attend à nouveau.",
          "On le joint par **adresse IP + port + route** ; `localhost` = cette machine ; un port = un seul programme.",
          "**Node.js** exécute du JS hors du navigateur ; **npm** installe des **librairies** (dépendances).",
          "**package.json** = carte d'identité + liste de courses ; **node_modules** se reconstruit (`.gitignore`).",
          "**Express** simplifie la création de routes ; une route = **méthode + chemin + fonction (req, res)**.",
          "**HTTP** : GET/POST/PUT/DELETE ↔ CRUD ; **statuts** : 2xx OK, 4xx erreur client, 5xx erreur serveur.",
          "**JSON** = format texte d'échange (guillemets doubles, pas de virgule finale) ; `res.json()` sérialise + pose l'en-tête.",
          "Données **en mémoire** = tout est perdu au redémarrage → il nous faut une base de données (S3).",
        ]},
      ],
    },
  ],

  tp: {
    kind: 'digital',
    title: "Construire l'API REST de son projet",
    mission:
      "Livrer une API REST complète (CRUD) sur une ressource de ton projet fil rouge, avec des " +
      "données stockées en mémoire, testée avec un client HTTP. Suis les étapes : chacune montre " +
      "exactement comment faire, avec le code à écrire et comment le tester.",
    prerequis: ['Cours T-S2 suivi', 'Node.js + npm installés', 'Dépôt GitHub Classroom du projet'],
    materiel: ['Node.js', 'VS Code', 'Insomnia (client HTTP à installer depuis insomnia.rest)'],
    criteres: [
      "package.json + script `dev` + `.gitignore` (node_modules exclu)",
      'Au moins les 4 routes CRUD (GET liste, GET par id, POST, DELETE)',
      'Données en mémoire (tableau JS), réponses en JSON',
      'Codes de statut corrects (200, 201, 400, 404)',
      'Validation des données reçues (pas de confiance au client)',
      'Commits réguliers avec messages clairs',
    ],
    bonus: "Ajouter une route de recherche `GET /produits?nom=...` qui filtre le tableau avec `req.query`.",
    steps: [
      {
        title: 'Étape 1 — Créer et lancer le projet',
        body: [
          { type: 'info', variant: 'astuce', title: 'Choisis ta ressource',
            content: "Dans tout ce TP on prend l'exemple d'une ressource **`produits`**. Remplace partout `produits` par la ressource de TON projet (livres, recettes, joueurs, tâches...). Le principe est identique." },
          { type: 'prose', content: "**1.1** — Dans ton dépôt GitHub Classroom, crée un dossier `api/`, ouvre un terminal dedans, et initialise le projet :" },
          { type: 'code', language: 'bash', title: 'Terminal (dans le dossier api/)', code:
            'npm init -y            # cree un package.json minimal\n' +
            'npm install express    # installe Express (apparait dans dependencies)' },
          { type: 'prose', content: "**1.2** — Ouvre `package.json` et ajoute un script `dev` dans la section `scripts` (il permet de lancer le serveur et de le relancer tout seul à chaque enregistrement) :" },
          { type: 'code', language: 'json', title: 'package.json (extrait)', code:
            '"scripts": {\n' +
            '  "dev": "node --watch serveur.js"\n' +
            '}' },
          { type: 'prose', content: "**1.3** — Crée un fichier `.gitignore` pour ne jamais pousser `node_modules` :" },
          { type: 'code', language: 'bash', title: '.gitignore', code: 'node_modules/' },
          { type: 'prose', content: "**1.4** — Crée `serveur.js` avec un serveur Express minimal :" },
          { type: 'code', language: 'js', title: 'serveur.js', code:
            'const express = require("express");\n' +
            'const app = express();\n' +
            '\n' +
            '// Route de test : GET /\n' +
            'app.get("/", (req, res) => {\n' +
            '  res.json({ message: "Mon API fonctionne" });\n' +
            '});\n' +
            '\n' +
            '// On demarre le serveur sur le port 3000\n' +
            'app.listen(3000, () => {\n' +
            '  console.log("Serveur sur http://localhost:3000");\n' +
            '});' },
          { type: 'prose', content: "**1.5** — Lance le serveur avec `npm run dev`, puis ouvre `http://localhost:3000` dans le navigateur : tu dois voir `{ \"message\": \"Mon API fonctionne\" }`." },
          { type: 'info', variant: 'attention', title: 'Erreur EADDRINUSE ?',
            content: "Si tu vois `EADDRINUSE`, c'est qu'un autre serveur tourne déjà sur le port 3000. Arrête-le (Ctrl+C dans son terminal) avant de relancer." },
        ],
        done: "Le serveur démarre avec `npm run dev` et `GET /` renvoie du JSON dans le navigateur.",
        validation: { commit: 'git commit -m "chore: init API Express"' },
      },
      {
        title: 'Étape 2 — Les données en mémoire + la route liste (GET)',
        body: [
          { type: 'prose', content: "**2.1** — En haut de `serveur.js` (après `const app = express();`), déclare ton tableau de données. Chaque élément a un `id` unique :" },
          { type: 'code', language: 'js', title: 'serveur.js (les donnees)', code:
            'let produits = [\n' +
            '  { id: 1, nom: "Clavier", prix: 25 },\n' +
            '  { id: 2, nom: "Souris", prix: 15 },\n' +
            '  { id: 3, nom: "Ecran", prix: 120 }\n' +
            '];' },
          { type: 'prose', content: "**2.2** — Ajoute la route qui renvoie **toute la liste**. `res.json(produits)` convertit le tableau en JSON et l'envoie :" },
          { type: 'code', language: 'js', title: 'serveur.js (route liste)', code:
            '// GET /produits -> renvoie tout le tableau\n' +
            'app.get("/produits", (req, res) => {\n' +
            '  res.json(produits);\n' +
            '});' },
          { type: 'prose', content: "**2.3** — Enregistre (le serveur redémarre tout seul grâce à `--watch`), puis ouvre `http://localhost:3000/produits` dans le navigateur : tu dois voir les 3 produits en JSON." },
        ],
        done: "`GET /produits` affiche le tableau complet en JSON dans le navigateur.",
        validation: { commit: 'git commit -m "feat: donnees en memoire + route GET liste"' },
      },
      {
        title: 'Étape 3 — Lire un seul élément (GET /:id) et gérer le 404',
        body: [
          { type: 'prose', content: "**3.1** — On veut une route `GET /produits/2` qui renvoie **un seul** produit. Le `:id` est une partie variable du chemin : Express la range dans `req.params.id`. Comme elle arrive sous forme de texte, on la convertit en nombre avec `Number(...)`, puis on cherche le produit avec `.find(...)` :" },
          { type: 'code', language: 'js', title: 'serveur.js (un seul produit)', code:
            '// GET /produits/2 -> renvoie le produit dont l id vaut 2\n' +
            'app.get("/produits/:id", (req, res) => {\n' +
            '  const id = Number(req.params.id);            // ":id" arrive en texte -> on convertit\n' +
            '  const produit = produits.find((p) => p.id === id);\n' +
            '  if (!produit) {                              // rien trouve\n' +
            '    return res.status(404).json({ erreur: "Produit introuvable" });\n' +
            '  }\n' +
            '  res.json(produit);\n' +
            '});' },
          { type: 'info', variant: 'attention', title: 'Pourquoi Number() ?',
            content: "`req.params.id` est **toujours une chaîne** (`\"2\"`). Si tu compares `\"2\" === 2` c'est `false`. `Number(req.params.id)` transforme `\"2\"` en `2` pour que la comparaison marche." },
          { type: 'prose', content: "**3.2** — Teste les deux cas dans le navigateur : `http://localhost:3000/produits/1` (tu vois le clavier) et `http://localhost:3000/produits/999` (tu vois `{ \"erreur\": \"Produit introuvable\" }` avec un statut 404)." },
        ],
        done: "`GET /produits/1` renvoie un produit ; `GET /produits/999` renvoie une erreur 404.",
        validation: { commit: 'git commit -m "feat: route GET par id avec 404"' },
      },
      {
        title: 'Étape 4 — Créer un élément (POST) : lire le corps, valider, 201',
        body: [
          { type: 'prose', content: "**4.1** — Pour qu'Express sache lire le **corps JSON** envoyé par le client, ajoute cette ligne **une seule fois**, juste après `const app = express();` :" },
          { type: 'code', language: 'js', title: 'serveur.js (activer la lecture du corps)', code:
            'app.use(express.json()); // permet de lire req.body en JSON' },
          { type: 'prose', content: "**4.2** — Ajoute la route de création. On **ne fait jamais confiance au client** : on vérifie que le `nom` est présent (sinon **400**). Sinon on crée le produit et on répond **201** (créé) :" },
          { type: 'code', language: 'js', title: 'serveur.js (creer un produit)', code:
            '// POST /produits -> ajoute un produit envoye dans le corps de la requete\n' +
            'app.post("/produits", (req, res) => {\n' +
            '  if (!req.body.nom) {                          // donnee obligatoire manquante\n' +
            '    return res.status(400).json({ erreur: "Le nom est obligatoire" });\n' +
            '  }\n' +
            '  const nouveau = {\n' +
            '    id: produits.length + 1,\n' +
            '    nom: req.body.nom,\n' +
            '    prix: req.body.prix\n' +
            '  };\n' +
            '  produits.push(nouveau);                       // on ajoute au tableau\n' +
            '  res.status(201).json(nouveau);                // 201 = cree\n' +
            '});' },
          { type: 'prose', content: "**4.3** — Un POST ne se teste pas dans la barre d'adresse du navigateur (elle ne fait que des GET). On utilise un **client HTTP** comme **Insomnia** (une application à installer). Marche à suivre :" },
          { type: 'list', ordered: true, items: [
            "Télécharge et installe **Insomnia** depuis `insomnia.rest`, puis ouvre l'application.",
            "Crée une requête : bouton **+** puis **HTTP Request** (dans une Collection).",
            "Choisis la méthode **POST** et saisis l'URL `http://localhost:3000/produits`.",
            "Ouvre l'onglet **Body**, choisis **JSON**, et colle : `{ \"nom\": \"Casque\", \"prix\": 40 }`.",
            "Clique **Send** : tu dois recevoir le produit créé, avec le statut **201** affiché en haut de la réponse.",
            "Refais un `GET http://localhost:3000/produits` : le casque apparaît dans la liste.",
            "Teste la validation : renvoie un POST avec un corps **vide** `{}` → tu dois obtenir un statut **400**.",
          ]},
        ],
        done: "`POST /produits` crée un produit (201), refuse un corps invalide (400), et le nouvel élément apparaît dans `GET /produits`.",
        validation: { commit: 'git commit -m "feat: route POST avec validation (201/400)"' },
      },
      {
        title: 'Étape 5 — Supprimer un élément (DELETE) et finaliser',
        body: [
          { type: 'prose', content: "**5.1** — Pour supprimer, on cherche la **position** de l'élément dans le tableau avec `.findIndex(...)`, puis on le retire avec `.splice(position, 1)`. Si l'`id` n'existe pas, on répond **404** :" },
          { type: 'code', language: 'js', title: 'serveur.js (supprimer un produit)', code:
            '// DELETE /produits/2 -> supprime le produit n 2\n' +
            'app.delete("/produits/:id", (req, res) => {\n' +
            '  const id = Number(req.params.id);\n' +
            '  const index = produits.findIndex((p) => p.id === id);\n' +
            '  if (index === -1) {                           // -1 = pas trouve\n' +
            '    return res.status(404).json({ erreur: "Produit introuvable" });\n' +
            '  }\n' +
            '  produits.splice(index, 1);                    // retire 1 element a cette position\n' +
            '  res.status(200).json({ message: "Produit supprime" });\n' +
            '});' },
          { type: 'prose', content: "**5.2** — Teste dans Insomnia : méthode **DELETE**, URL `http://localhost:3000/produits/1`, **Send** → statut 200. Refais `GET /produits` : le produit a disparu. Teste aussi un `id` inexistant (`/produits/999`) → statut **404**." },
          { type: 'prose', content: "**5.3** — Tu as maintenant les **4 routes CRUD** pour `produits`. Vérifie chaque code de statut (200, 201, 400, 404), puis commit. La dernière étape va te demander de refaire tout ça, seul, sur un autre sujet." },
          { type: 'info', variant: 'astuce', title: 'Bonus (facultatif)',
            content: "Ajoute une recherche : `GET /produits?nom=Clavier`. Récupère `req.query.nom` et renvoie `produits.filter((p) => p.nom === req.query.nom)`. C'est le rôle de `req.query`." },
        ],
        done: "L'API `produits` CRUD complète fonctionne (GET liste, GET par id, POST, DELETE) avec les bons codes de statut.",
        validation: { commit: 'git commit -m "feat: API produits CRUD complete"' },
      },
      {
        title: 'Étape 6 — À toi de jouer : la bibliothèque de jeux (entraînement type contrôle)',
        body: [
          { type: 'info', variant: 'attention', title: 'Cette fois, sans le code',
            content: "Ici on te donne seulement le **cahier des charges**, pas le code. Tu as tout ce qu'il faut dans le cours et les étapes 1 à 5 pour y arriver seul : c'est exactement le type d'exercice attendu au contrôle du S2. Attention : ce n'est **pas** un copier-coller de `produits` — la ressource est différente et certaines règles sont nouvelles." },
          { type: 'prose', content: "**Contexte.** Tu construis l'API d'une **bibliothèque de jeux vidéo**. Repars d'un projet propre (nouveau dossier `api-jeux`, `npm init`, Express, `serveur.js`, comme à l'étape 1)." },
          { type: 'prose', content: "**La ressource `jeux` (en mémoire).** Chaque jeu est un objet avec ces champs — plus riche que `produits`, à toi d'adapter :" },
          { type: 'list', ordered: false, items: [
            "`id` : nombre unique",
            "`titre` : texte (obligatoire)",
            "`plateforme` : texte (ex. \"PC\", \"Switch\", \"PS5\")",
            "`genre` : texte (ex. \"RPG\", \"Plateforme\")",
            "`note` : nombre **sur 20** (entre 0 et 20)",
            "`termine` : booléen (`true` si le jeu est fini, `false` sinon)",
          ]},
          { type: 'prose', content: "Déclare **3 jeux** de départ dans le tableau. Puis implémente les routes suivantes :" },
          { type: 'list', ordered: true, items: [
            "**`GET /jeux`** : renvoie toute la liste.",
            "**`GET /jeux/:id`** : renvoie un seul jeu, ou **404** s'il n'existe pas.",
            "**`GET /jeux?termine=true`** : renvoie uniquement les jeux terminés (utilise `req.query` et `filter`).",
            "**`POST /jeux`** : crée un jeu. Refuse (**400**) si le `titre` manque **ou** si la `note` n'est pas comprise entre 0 et 20. Refuse (**409**) si un jeu porte déjà ce `titre`. Sinon **201** avec le jeu créé.",
            "**`PUT /jeux/:id`** : modifie un jeu existant à partir des données reçues (**404** si l'id n'existe pas, **400** si les données sont invalides).",
            "**`DELETE /jeux/:id`** : supprime un jeu (**404** si l'id n'existe pas).",
          ]},
          { type: 'info', variant: 'attention', title: 'Trois points qui demandent de réfléchir (pas de copier-coller)',
            content: "**1. L'`id` unique.** N'utilise **pas** `jeux.length + 1` : après une suppression, ça recrée un id déjà pris. Trouve un moyen d'obtenir un id vraiment unique (indice : pense au plus grand id existant). **2. Le code 409.** Il n'est pas dans le cours : cherche ce que signifie **409 Conflict** et sers-t'en pour le doublon de titre. **3. Le `PUT`.** On ne l'a jamais codé ensemble : à toi de transposer ce que tu sais du `GET /:id` (retrouver le jeu) et du `POST` (valider les données)." },
          { type: 'prose', content: "**Teste chaque route dans Insomnia** et vérifie les codes de statut : **200** (lecture/modif/suppression OK), **201** (création), **400** (données invalides), **404** (id absent), **409** (titre déjà pris). Quand tout fonctionne, commit et pousse sur GitHub Classroom." },
          { type: 'info', variant: 'astuce', title: 'Pour aller plus loin (facultatif)',
            content: "Ajoute une route `GET /jeux/genre/:genre` qui renvoie tous les jeux d'un genre donné, ou une route qui renvoie la **moyenne des notes** de ta bibliothèque." },
        ],
        done: "L'API `jeux` complète fonctionne : GET (liste + filtre `termine`), GET/:id, POST (avec 400 et 409), PUT, DELETE, chacune avec le bon code de statut. Le tout est poussé sur GitHub.",
        validation: { commit: 'git commit -m "feat: API bibliotheque de jeux (CRUD complet)" && git push' },
      },
      {
        title: "Étape 7 — Entraînement au contrôle : l'API du refuge",
        body: [
          { type: 'info', variant: 'attention', title: 'Ce que cette étape prépare',
            content:
              "Cette étape a exactement le format du contrôle : un projet de départ avec une seule route, " +
              "un cahier des charges, et des routes à coder par paliers de difficulté. Différence : ici tu as " +
              "internet. Le jour du contrôle, tu seras **hors ligne**, sur un autre thème, avec les mêmes aides " +
              "que ci-dessous. Entraîne-toi donc à chercher d'abord dans ton cours, dans les aides et dans le code " +
              "fourni, avant d'aller sur internet." },

          { type: 'prose', content: "**Démarrer le projet**" },
          { type: 'list', ordered: true, items: [
            "Crée un nouveau dossier `api-refuge` et initialise-le comme aux étapes précédentes (projet Node, Express installé, dépôt Git).",
            "Dans `package.json`, ajoute (ou remplace) le script `dev` : `\"dev\": \"node --watch server.js\"`.",
            "Crée `server.js` et copie le code de départ ci-dessous.",
            "Lance `npm run dev`, puis dans Insomnia teste `GET http://localhost:3000/animaux` : tu dois recevoir la liste des 8 animaux.",
          ] },
          { type: 'code', language: 'js', title: 'server.js — code de départ',
            code: `const express = require("express");
const app = express();
app.use(express.json());

// Données en mémoire : elles sont perdues à chaque redémarrage du serveur.
const soigneurs = [
  { id: 1, nom: "Camille", specialite: "chiens" },
  { id: 2, nom: "Yanis", specialite: "chats" },
  { id: 3, nom: "Inès", specialite: "NAC" },
  { id: 4, nom: "Théo", specialite: "oiseaux" },
];

let animaux = [
  { id: 1, nom: "Rex", espece: "chien", age: 4, adopte: false, soigneurId: 1 },
  { id: 2, nom: "Mina", espece: "chat", age: 2, adopte: true, soigneurId: 2 },
  { id: 3, nom: "Pixel", espece: "lapin", age: 1, adopte: false, soigneurId: 3 },
  { id: 4, nom: "Oslo", espece: "chien", age: 7, adopte: false, soigneurId: 1 },
  { id: 5, nom: "Luna", espece: "chat", age: 5, adopte: false, soigneurId: 2 },
  { id: 6, nom: "Biscotte", espece: "cochon d'Inde", age: 3, adopte: true, soigneurId: 3 },
  { id: 7, nom: "Tank", espece: "chien", age: 1, adopte: false, soigneurId: 1 },
  { id: 8, nom: "Nala", espece: "chat", age: 9, adopte: false, soigneurId: 2 },
];

// Route d'exemple : la liste de tous les animaux
app.get("/animaux", (req, res) => {
  res.json(animaux);
});

// À toi de jouer : les routes à coder sont décrites dans le cahier des charges

app.listen(3000, () => {
  console.log("API du refuge démarrée sur http://localhost:3000");
});` },
          { type: 'info', variant: 'definition', title: 'Les données',
            content:
              "Deux tableaux : `animaux` et `soigneurs`. Chaque animal a un `soigneurId` qui correspond à l'`id` " +
              "d'un soigneur : c'est ce qui relie les deux tableaux. Avec `npm run dev`, le serveur redémarre à " +
              "chaque sauvegarde de `server.js` : observe ce qui arrive aux animaux que tu as créés avec un POST." },
          { type: 'info', variant: 'astuce', title: 'Organise tes tests dans Insomnia',
            content:
              "Crée un dossier « Refuge » dans Insomnia avec une requête par route, **y compris les cas d'erreur** " +
              "(un id qui n'existe pas, un POST sans nom, une adoption en double). Une route n'est terminée que " +
              "si elle renvoie le bon code de statut dans tous les cas." },
          { type: 'table',
            headers: ['Palier', 'Ce que tu codes', "Points (même barème qu'au contrôle)"],
            rows: [
              ['1', 'GET par id, POST avec validation, DELETE', '7'],
              ['2', 'PATCH, filtres et tri combinables', '5'],
              ['3', 'Relier animaux et soigneurs, statistiques', '4'],
              ['4', "Règles métier : adoption, suppression d'un soigneur", '2'],
              ['5', 'Deux questions écrites dans REPONSES.md', '2'],
            ] },

          { type: 'prose', content: "**Palier 1 — CRUD de base (7 pts)**" },
          { type: 'table',
            headers: ['Méthode', 'Route', 'Comportement attendu'],
            rows: [
              ['GET', '/animaux/:id', "200 + l'animal. 404 si l'id n'existe pas."],
              ['POST', '/animaux', "Corps JSON avec `nom`, `espece`, `age`, `soigneurId`. 400 si l'un manque. Sinon 201 + l'animal créé (nouvel `id`, `adopte` à `false`)."],
              ['DELETE', '/animaux/:id', "200 + l'animal supprimé. 404 si l'id n'existe pas."],
            ] },
          { type: 'list', ordered: false, items: [
            "`req.params.id` est une **chaîne de caractères**. Convertis-la avec `Number()` avant de la comparer à l'`id` d'un animal.",
            "`find` retrouve un élément. `findIndex` + `splice` permettent de le retirer du tableau.",
            "Pour répondre avec un code précis : `res.status(404).json({ erreur: \"...\" })`.",
            "Pour le nouvel `id`, prends le plus grand `id` existant + 1. Pourquoi pas simplement la longueur du tableau ? Pense à ce qui se passe après une suppression.",
          ] },

          { type: 'prose', content: "**Palier 2 — Modifier, filtrer, trier (5 pts)**" },
          { type: 'table',
            headers: ['Méthode', 'Route', 'Comportement attendu'],
            rows: [
              ['PATCH', '/animaux/:id', "Ne modifie que les champs envoyés. L'`id` ne change jamais. 404 si introuvable. 200 + l'animal modifié."],
              ['GET', '/animaux?espece=chat', 'Filtre par espèce.'],
              ['GET', '/animaux?adopte=false', "Filtre par statut d'adoption."],
              ['GET', '/animaux?tri=age', 'Trie par âge croissant.'],
            ] },
          { type: 'prose', content:
              "Les paramètres se combinent : `/animaux?espece=chien&adopte=false&tri=age` doit fonctionner. " +
              "Sans paramètre, la route renvoie toujours toute la liste. C'est la route `GET /animaux` existante que tu fais évoluer." },

          { type: 'info', variant: 'definition', title: 'Aide — req.query : les paramètres après le ?',
            content:
              "**À quoi ça sert :** transmettre des options à une route (filtrer, trier, chercher) sans créer une route par option. " +
              "**Comment ça marche :** tout ce qui suit le `?` dans l'URL est découpé en paires `clé=valeur`, séparées par `&`, " +
              "et rangé dans l'objet `req.query`. Un paramètre absent vaut `undefined`, et toutes les valeurs sont des **chaînes**. " +
              "**Ne pas confondre :** `req.params` contient les morceaux du **chemin** (`/produits/:id`), `req.query` les options " +
              "**après le ?**. **Quand l'utiliser :** pour des options facultatives et combinables." },
          { type: 'code', language: 'js', title: 'Exemple (autre sujet que le refuge)',
            code: `// Requête : GET /produits?couleur=rouge&promo=true
app.get("/produits", (req, res) => {
  console.log(req.query);          // { couleur: "rouge", promo: "true" }
  console.log(req.query.couleur);  // "rouge"
  console.log(req.query.taille);   // undefined : absent de l'URL
  console.log(req.query.promo === true);    // false : c'est une chaîne !
  console.log(req.query.promo === "true");  // true
  res.json(req.query);
});` },

          { type: 'info', variant: 'definition', title: 'Aide — filter : garder les éléments qui respectent une condition',
            content:
              "**À quoi ça sert :** obtenir **tous** les éléments d'un tableau qui respectent une condition. " +
              "**Comment ça marche :** `filter` appelle ta fonction sur chaque élément ; si elle renvoie `true`, l'élément est gardé. " +
              "Il renvoie un **nouveau tableau** (éventuellement vide) et ne modifie pas le tableau d'origine. " +
              "**Différence avec find :** `find` renvoie le **premier** élément trouvé (ou `undefined`), `filter` les renvoie **tous**, dans un tableau. " +
              "**Quand l'utiliser :** dès que la réponse peut contenir plusieurs éléments. On peut enchaîner plusieurs `filter` à la suite." },
          { type: 'code', language: 'js', title: 'Exemple (autre sujet que le refuge)',
            code: `const eleves = [
  { nom: "Lina", age: 17, classe: "TCIEL" },
  { nom: "Adam", age: 18, classe: "TCIEL" },
  { nom: "Sofia", age: 16, classe: "1CIEL" },
];

const majeurs = eleves.filter(e => e.age >= 18);
// [ { nom: "Adam", ... } ]

const terminales = eleves.filter(e => e.classe === "TCIEL");
// [ { nom: "Lina", ... }, { nom: "Adam", ... } ]

let resultat = eleves;                                 // on part de tout
resultat = resultat.filter(e => e.classe === "TCIEL"); // 1er filtre
resultat = resultat.filter(e => e.age >= 18);          // 2e filtre
// eleves n'a pas été modifié` },

          { type: 'info', variant: 'definition', title: 'Aide — sort : trier un tableau',
            content:
              "**À quoi ça sert :** ranger les éléments d'un tableau dans un ordre choisi. " +
              "**Comment ça marche :** on donne à `sort` une fonction qui compare deux éléments `a` et `b`. Si elle renvoie un nombre " +
              "**négatif**, `a` passe avant `b` ; **positif**, `b` passe avant `a` ; **0**, l'ordre ne change pas. `a - b` donne donc un tri croissant. " +
              "**Deux pièges :** `sort` **modifie le tableau** sur lequel on l'appelle, donc trie une copie (`[...tableau]`) pour ne pas " +
              "déranger les données d'origine ; et sans fonction de comparaison, `sort` trie les nombres comme du texte. " +
              "**Quand l'utiliser :** pour renvoyer une liste dans un ordre précis (âge, prix, nom...)." },
          { type: 'code', language: 'js', title: 'Exemple (autre sujet que le refuge)',
            code: `const notes = [12, 5, 18, 9];

const croissant = [...notes].sort((a, b) => a - b);   // [5, 9, 12, 18]
const decroissant = [...notes].sort((a, b) => b - a); // [18, 12, 9, 5]
// notes vaut toujours [12, 5, 18, 9]

[10, 9, 1].sort();               // [1, 10, 9] : trié comme du texte !

const films = [{ titre: "Dune", annee: 2021 }, { titre: "Alien", annee: 1979 }];
const parAnnee = [...films].sort((a, b) => a.annee - b.annee);
const parTitre = [...films].sort((a, b) => a.titre.localeCompare(b.titre));` },

          { type: 'info', variant: 'definition', title: 'Aide — PATCH : modifier une partie d’un élément',
            content:
              "**À quoi ça sert :** modifier **seulement certains champs** d'un élément existant. " +
              "**Différence avec PUT :** `PUT` remplace l'élément en entier, `PATCH` ne change que ce qui est envoyé et garde le reste. " +
              "**Comment ça marche :** la route reçoit l'`id` dans `req.params` et les champs à modifier dans `req.body`. On retrouve " +
              "l'élément, puis pour **chaque champ autorisé** on vérifie s'il est présent dans `req.body` avant de le recopier. " +
              "L'`id` n'est jamais modifiable. **Quand l'utiliser :** un formulaire d'édition où l'utilisateur ne change qu'une info." },
          { type: 'code', language: 'js', title: 'Exemple (autre sujet que le refuge)',
            code: `// Requête : PATCH /films/2   avec le corps JSON : { "annee": 1986 }
// Seule l'année change, le titre reste le même.

const film = { id: 2, titre: "Aliens", annee: 1985 };

if (req.body.annee !== undefined) {
  film.annee = req.body.annee;
}
// Même principe pour chacun des autres champs modifiables.
// On ne recopie jamais req.body.id.` },

          { type: 'prose', content: "**Palier 3 — Relier les données (4 pts)**" },
          { type: 'table',
            headers: ['Méthode', 'Route', 'Comportement attendu'],
            rows: [
              ['GET', '/animaux/:id/details', "L'animal avec, en plus, un champ `soigneur` contenant l'objet soigneur complet. 404 si l'animal n'existe pas."],
              ['GET', '/soigneurs/:id/animaux', "Tous les animaux de ce soigneur. 404 si le soigneur n'existe pas."],
              ['GET', '/stats', "`{ \"total\": 8, \"adoptes\": 2, \"parEspece\": { \"chien\": 3, \"chat\": 3, ... } }`, calculé à partir des données actuelles."],
            ] },
          { type: 'list', ordered: false, items: [
            "Pour `/animaux/:id/details` : trouve l'animal, puis son soigneur dans l'autre tableau grâce à `soigneurId`.",
            "Pour `/soigneurs/:id/animaux` : c'est un cas pour `filter`.",
            "Pour `/stats` : parcours les animaux et incrémente un compteur par espèce dans un objet. Aucune valeur ne doit être écrite en dur : si tu ajoutes un animal, les statistiques doivent changer.",
          ] },

          { type: 'prose', content: "**Palier 4 — Règles métier (2 pts)**" },
          { type: 'table',
            headers: ['Méthode', 'Route', 'Comportement attendu'],
            rows: [
              ['POST', '/animaux/:id/adoption', "Passe `adopte` à `true`. 404 si l'animal n'existe pas. 409 s'il est déjà adopté."],
              ['DELETE', '/soigneurs/:id', "404 si le soigneur n'existe pas. 409 s'il a encore des animaux. Sinon 200 + le soigneur supprimé."],
            ] },
          { type: 'prose', content:
              "Avant d'écrire du code, écris sur papier la liste des vérifications et leur **ordre**. " +
              "Faut-il vérifier « déjà adopté » avant ou après « l'animal existe » ? Que se passe-t-il si on inverse ? " +
              "Attention : le tableau `soigneurs` est déclaré avec `const`, ce qui n'empêche pas d'en retirer un élément avec `splice`." },

          { type: 'prose', content:
              "**Palier 5 — Questions (2 pts).** Crée un fichier `REPONSES.md` à la racine de ton projet et réponds par écrit :" },
          { type: 'list', ordered: true, items: [
            "Quelle est la différence entre `req.params`, `req.query` et `req.body` ? Donne un exemple de requête pour chacun.",
            "Quand le serveur redémarre, les animaux que tu as créés disparaissent. Pourquoi ? Que faudrait-il pour qu'ils soient conservés ?",
          ] },

          { type: 'info', variant: 'astuce', title: 'Versionne au fil des paliers',
            content:
              "Un commit à la fin de chaque palier, avec un message clair : `feat: palier 1 - CRUD de base`, " +
              "`feat: palier 2 - PATCH, filtres et tri`, etc." },
          { type: 'info', variant: 'definition', title: 'Le jour du contrôle',
            content:
              "Même format, autre thème, trois heures, **sans internet**. Le code de départ et les aides sur `req.query`, " +
              "`filter`, `sort` et `PATCH` seront fournis dans l'énoncé. Le palier 1 correspond à ce que tu as déjà pratiqué ; " +
              "les paliers suivants demandent de raisonner. Garde ta collection Insomnia : savoir tester vite et bien fait " +
              "partie de l'épreuve." },
        ],
        done:
          "Les paliers 1 à 3 fonctionnent dans Insomnia avec les bons codes de statut, y compris dans les cas " +
          "d'erreur, et REPONSES.md est rempli. Le palier 4 est un plus.",
        validation: { commit: 'git commit -m "feat: palier N - ..." && git push' },
      },
    ],
  },
};
