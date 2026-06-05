// =============================================================================
// Séquence S6 — JavaScript : les bases du langage
// Niveau : Première · Durée : 6 h (3 h cours+exos · 2 h TP · 1 h éval)
// 5 exercices intégrés au cours. TP digital (GitHub). Éval pratique sur poste.
// =============================================================================

export const s6JsBase = {
  meta: {
    id: 'js-base',
    sequence: 'S6',
    niveau: 'premiere',
    title: 'JavaScript : les bases du langage',
    icon: 'brand-javascript',
    duree: '6 h',
    theme: 'Développement web',
    filRouge:
      "Ton site a du HTML (S4) et du CSS (S5). Mais il est statique : rien ne bouge, rien ne " +
      "réagit. JavaScript est le langage qui rend les pages web vivantes. Dans cette première " +
      "partie, on apprend la logique du langage. En S7, on le branchera sur la page.",
    ref: { competences: ['C08'], savoirs: ['S3.1', 'S3.2'] },
    cyber: "Un programme qui plante proprement vs une faille. La gestion des erreurs.",
    evalInfo: {
      format: 'Évaluation pratique sur poste (exercices de logique JS)',
      duree: '1 h',
      competence: 'C08 (Application)',
      ressourcesAutorisees: ['MDN Web Docs', 'Le cours S6'],
      note: "Évaluation réalisée en classe — aucun sujet n'est publié sur le site.",
    },
  },

  course: [
    {
      type: 'hero',
      title: 'JavaScript : les bases du langage',
      subtitle: "Le langage qui rend le web vivant. On commence par la logique pure avant de toucher à la page.",
    },
    {
      type: 'info', variant: 'astuce', title: 'Objectifs',
      content:
        "Déclarer des variables, utiliser les types de base, écrire des conditions, des boucles " +
        "et des fonctions. À la fin, tu sauras penser comme une machine.",
    },
    {
      type: 'info', variant: 'definition', title: 'Prérequis : mettre en place l\u2019environnement',
      content:
        "Crée un fichier `index.html` avec le squelette de base, et un fichier `script.js`. " +
        "Lie-les : `<script src=\"script.js\"></script>` juste avant `</body>`. Ouvre la page " +
        "avec Live Server (VS Code), puis ouvre la console du navigateur (F12 → Console). " +
        "C'est dans cette console que tu verras les résultats de `console.log()`.",
    },

    // ===== PARTIE 1 : VARIABLES ET TYPES =====
    {
      type: 'section', title: 'a. Variables et types de données',
      blocks: [
        { type: 'prose', content:
          "Une **variable** est une boîte dans laquelle on range une valeur. En JavaScript, " +
          "on déclare une variable avec `let` (si la valeur peut changer) ou `const` (si elle " +
          "ne doit pas changer)." },
        { type: 'code', language: 'js', title: 'Déclarer des variables',
          code:
            'const prenom = "Alice";   // texte (string) — ne changera pas\n' +
            'let age = 17;             // nombre (number) — pourra changer\n' +
            'let estMajeur = false;    // booléen (boolean) — vrai ou faux\n\n' +
            'console.log(prenom);      // affiche "Alice" dans la console\n' +
            'console.log(age);         // affiche 17' },
        { type: 'info', variant: 'attention', title: 'let vs const',
          content:
            "Utilise **`const` par défaut**. Tu ne passes à `let` que si tu sais que la valeur " +
            "changera. N'utilise **jamais** `var` (ancien mot-clé, piégeux)." },
        { type: 'prose', content: "Les **trois types de base** :" },
        { type: 'cards', columns: 3, items: [
          { title: 'String (texte)', text: "Entre guillemets doubles ou simples, ou backticks.\n`\"Bonjour\"`, `'Salut'`, `` `J'ai ${age} ans` ``" },
          { title: 'Number (nombre)', text: "Entiers ou décimaux, sans guillemets.\n`42`, `3.14`, `-7`" },
          { title: 'Boolean (booléen)', text: "Vrai ou faux, pour les décisions.\n`true`, `false`" },
        ]},
        { type: 'info', variant: 'astuce', title: 'Les template literals (backticks)',
          content:
            "Les backticks (`` ` ``) permettent d'insérer des variables directement dans un texte " +
            "avec `${variable}` : `` `Bonjour ${prenom}, tu as ${age} ans` ``. " +
            "C'est plus lisible que la concaténation avec `+`." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 1 — Déclarer et afficher',
      body: [
        { type: 'prose', content: 'Dans ton `script.js` (vide le contenu précédent à chaque exercice) :' },
        { type: 'list', ordered: true, items: [
          'Déclare une constante `nom` avec ton nom de famille.',
          'Déclare une variable `age` avec ton âge.',
          'Déclare une constante `classe` avec le nom de ta classe.',
          'Affiche dans la console une phrase complète avec les backticks : `` `Je m\'appelle ${nom}, j\'ai ${age} ans, je suis en ${classe}.` ``',
          'Essaie de modifier `nom` (ex. `nom = "Autre"`) : observe l\u2019erreur dans la console. Pourquoi ?',
          'Modifie `age` (ex. `age = age + 1`) : affiche à nouveau. Pourquoi ça marche cette fois ?',
        ]},
      ],
    },

    // ===== PARTIE 2 : CONDITIONS =====
    {
      type: 'section', title: 'b. Les conditions : faire des choix',
      blocks: [
        { type: 'prose', content:
          "Un programme doit souvent **prendre des décisions** : si telle condition est vraie, " +
          "faire ceci ; sinon, faire cela. C'est le rôle du `if` / `else if` / `else`." },
        { type: 'code', language: 'js', title: 'La structure if / else',
          code:
            'const age = 17;\n\n' +
            'if (age >= 18) {\n' +
            '  console.log("Tu es majeur");\n' +
            '} else if (age >= 16) {\n' +
            '  console.log("Tu es presque majeur");\n' +
            '} else {\n' +
            '  console.log("Tu es mineur");\n' +
            '}' },
        { type: 'prose', content: "Les **opérateurs de comparaison** :" },
        { type: 'table', headers: ['Opérateur', 'Signification', 'Exemple'],
          rows: [
            ['===', 'Strictement égal', '5 === 5 → true'],
            ['!==', 'Strictement différent', '5 !== 3 → true'],
            ['>', 'Supérieur', '10 > 5 → true'],
            ['<', 'Inférieur', '3 < 7 → true'],
            ['>=', 'Supérieur ou égal', '18 >= 18 → true'],
            ['<=', 'Inférieur ou égal', '5 <= 10 → true'],
          ] },
        { type: 'info', variant: 'attention', title: '=== et pas ==',
          content:
            "Utilise toujours **`===`** (triple égal, comparaison stricte), jamais `==` (double " +
            "égal, qui fait des conversions bizarres). C'est une source de bugs classique en JS." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 2 — Un vérificateur de mot de passe',
      body: [
        { type: 'list', ordered: true, items: [
          'Déclare une constante `motDePasseAttendu` avec la valeur `"secret123"`.',
          'Déclare une variable `motDePasseUtilisateur` avec une valeur de ton choix.',
          'Écris un `if / else` qui compare les deux : si égaux → affiche "Accès autorisé" ; sinon → "Accès refusé".',
          'Teste avec le bon mot de passe, puis avec un mauvais.',
          'Bonus : ajoute un `else if` pour le cas où le mot de passe est vide (`""`) qui affiche "Veuillez entrer un mot de passe".',
        ]},
      ],
    },

    // ===== PARTIE 3 : BOUCLES =====
    {
      type: 'section', title: 'c. Les boucles : répéter une action',
      blocks: [
        { type: 'prose', content:
          "Quand tu dois faire la même chose plusieurs fois (afficher les nombres de 1 à 10, " +
          "parcourir une liste...), tu utilises une **boucle**." },
        { type: 'code', language: 'js', title: 'La boucle for',
          code:
            '// Affiche les nombres de 1 à 10\n' +
            'for (let i = 1; i <= 10; i++) {\n' +
            '  console.log(i);\n' +
            '}\n\n' +
            '// Anatomie : for (initialisation; condition; incrémentation)' },
        { type: 'info', variant: 'definition', title: 'Lire un for',
          content:
            "`for (let i = 1; i <= 10; i++)` se lit : « On commence avec `i` à 1. Tant que `i` " +
            "est inférieur ou égal à 10, on exécute le bloc. Après chaque tour, on ajoute 1 à `i` " +
            "(`i++`). »" },
        { type: 'code', language: 'js', title: 'La boucle while',
          code:
            '// La même chose avec while\n' +
            'let i = 1;\n' +
            'while (i <= 10) {\n' +
            '  console.log(i);\n' +
            '  i++;\n' +
            '}' },
        { type: 'info', variant: 'astuce',
          content: "`for` quand tu connais le nombre de tours à l'avance ; `while` quand tu boucles tant qu'une condition est vraie (mais attention à la boucle infinie si tu oublies d'incrémenter)." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 3 — Boucles',
      body: [
        { type: 'list', ordered: true, items: [
          'Écris une boucle `for` qui affiche les nombres de 1 à 20.',
          'Modifie-la pour n\u2019afficher que les nombres **pairs** (astuce : `i % 2 === 0` teste si un nombre est pair).',
          'Écris une boucle `while` qui affiche le compte à rebours de 10 à 1, puis "Décollage !" à la fin.',
        ]},
      ],
    },

    // ===== PARTIE 4 : TABLEAUX =====
    {
      type: 'section', title: 'd. Les tableaux : stocker une liste de valeurs',
      blocks: [
        { type: 'prose', content:
          "Un **tableau** (array) est une variable qui contient **plusieurs valeurs**, rangées " +
          "dans un ordre et accessibles par leur position (index, qui commence à **0**)." },
        { type: 'code', language: 'js', title: 'Créer et utiliser un tableau',
          code:
            'const fruits = ["pomme", "banane", "cerise"];\n\n' +
            'console.log(fruits[0]);    // "pomme" (le premier, index 0)\n' +
            'console.log(fruits[2]);    // "cerise" (le troisième, index 2)\n' +
            'console.log(fruits.length); // 3 (le nombre d\u2019éléments)\n\n' +
            'fruits.push("mangue");     // ajoute à la fin\n' +
            'console.log(fruits);       // ["pomme", "banane", "cerise", "mangue"]' },
        { type: 'info', variant: 'attention', title: 'L\u2019index commence à 0',
          content:
            "Le premier élément est à l'index **0**, pas 1. C'est déroutant au début, mais c'est " +
            "une convention universelle en programmation. `fruits[1]` est le **deuxième** élément." },
        { type: 'prose', content: '**Parcourir un tableau** avec une boucle `for` :' },
        { type: 'code', language: 'js', title: 'Parcourir un tableau',
          code:
            'const notes = [15, 12, 18, 9, 14];\n\n' +
            'for (let i = 0; i < notes.length; i++) {\n' +
            '  console.log(`Note n°${i + 1} : ${notes[i]}`);\n' +
            '}' },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 4 — Manipuler un tableau',
      body: [
        { type: 'list', ordered: true, items: [
          'Crée un tableau `prenoms` contenant 5 prénoms de ton choix.',
          'Affiche le premier et le dernier prénom (astuce pour le dernier : `prenoms[prenoms.length - 1]`).',
          'Ajoute un 6e prénom avec `.push()`.',
          'Avec une boucle `for`, affiche chaque prénom sur une ligne : `` `Élève ${i + 1} : ${prenoms[i]}` ``.',
          'Bonus : calcule et affiche le nombre total de lettres de tous les prénoms (astuce : chaque string a une propriété `.length`).',
        ]},
      ],
    },

    // ===== PARTIE 5 : FONCTIONS =====
    {
      type: 'section', title: 'e. Les fonctions : ne pas se répéter',
      blocks: [
        { type: 'prose', content:
          "Si tu dois faire le même calcul plusieurs fois, tu ne vas pas copier-coller le code. " +
          "Tu crées une **fonction** : un bloc de code réutilisable, avec un nom, des paramètres, " +
          "et un résultat (`return`)." },
        { type: 'code', language: 'js', title: 'Déclarer et appeler une fonction',
          code:
            '// Déclaration\n' +
            'function saluer(prenom) {\n' +
            '  return `Bonjour ${prenom} !`;\n' +
            '}\n\n' +
            '// Appel\n' +
            'const message = saluer("Alice");\n' +
            'console.log(message);  // "Bonjour Alice !"' },
        { type: 'prose', content: "La **fonction fléchée** (arrow function) — une syntaxe plus courte :" },
        { type: 'code', language: 'js', title: 'Fonction classique vs fléchée',
          code:
            '// Classique\n' +
            'function addition(a, b) {\n  return a + b;\n}\n\n' +
            '// Fléchée (même résultat)\n' +
            'const addition = (a, b) => a + b;\n\n' +
            'console.log(addition(10, 5));  // 15' },
        { type: 'info', variant: 'definition', title: 'Quand utiliser quoi ?',
          content:
            "La fonction fléchée est un raccourci. Pour l'instant, les deux se valent. " +
            "La règle : si le corps tient sur une ligne, la fléchée est plus lisible. " +
            "Si c'est plus long, la classique est plus claire." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 5 — Écrire des fonctions',
      body: [
        { type: 'list', ordered: true, items: [
          'Écris une fonction `calculerMoyenne(note1, note2, note3)` qui retourne la moyenne des trois notes. Teste-la avec des valeurs de ton choix.',
          'Écris une fonction fléchée `estPair(n)` qui retourne `true` si le nombre est pair, `false` sinon.',
          'Écris une fonction `trouverMax(tableau)` qui parcourt un tableau de nombres avec une boucle et retourne le plus grand. Teste-la avec `[12, 5, 18, 3, 9]`.',
          'Bonus : réécris `calculerMoyenne` pour qu\u2019elle accepte un **tableau** de notes (de taille variable) au lieu de 3 paramètres fixes.',
        ]},
      ],
    },

    // ===== CYBER + MÉMO =====
    {
      type: 'section', title: 'Point cybersécurité',
      blocks: [
        { type: 'info', variant: 'attention', title: 'Un programme qui plante proprement',
          content:
            "Un programme qui rencontre une erreur doit **planter proprement** (afficher un message " +
            "clair, s'arrêter sans dégâts) plutôt que de continuer en silence avec des données " +
            "corrompues. En JS, `console.error()` et les blocs `try/catch` servent à ça. On y " +
            "reviendra. Retiens le principe : **une erreur gérée est mille fois mieux qu'une erreur ignorée**." },
      ],
    },
    {
      type: 'section', title: 'Mémo',
      blocks: [
        { type: 'list', ordered: false, items: [
          '`const` par défaut, `let` si la valeur change. Jamais `var`.',
          'Types de base : String (texte), Number (nombre), Boolean (vrai/faux).',
          'Conditions : `if / else if / else`. Toujours `===` (triple égal).',
          'Boucles : `for` (nombre de tours connu), `while` (condition).',
          'Tableaux : index à 0, `.push()` pour ajouter, `.length` pour la taille.',
          'Fonctions : un bloc réutilisable. `function nom(params) { return ... }` ou `(params) => ...`.',
        ]},
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // TP — digital (GitHub)
  // ---------------------------------------------------------------------------
  tp: {
    kind: 'digital',
    title: 'Exercices de logique JavaScript',
    mission:
      "Résoudre une série de problèmes de logique en JavaScript pur (pas de page web, que du " +
      "code et la console). Chaque exercice met en pratique les notions du cours.",
    prerequis: ['Cours S6 suivi', 'Environnement JS prêt (HTML + script.js + Live Server)', 'Dépôt GitHub Classroom accepté'],
    criteres: [
      'Exercices fonctionnels (les résultats attendus s\u2019affichent dans la console)',
      'Code clair et indenté',
      'Variables bien nommées',
      'Commits réguliers avec messages clairs',
    ],
    bonus: "Écris une fonction `trierTableau(tab)` qui trie un tableau de nombres du plus petit au plus grand, sans utiliser `.sort()` (implémente un tri par sélection ou à bulles).",
    steps: [
      {
        title: 'Mise en place + exercices variables et conditions',
        body: [
          { type: 'list', ordered: true, items: [
            'Clone ton dépôt Classroom et ouvre-le dans VS Code.',
            'Crée `index.html` + `script.js` liés (comme dans le cours). Vérifie que `console.log("OK")` s\u2019affiche.',
            '**Exercice A** : déclare 5 variables décrivant un élève (nom, prénom, âge, classe, moyenne). Affiche une phrase complète avec les backticks.',
            '**Exercice B** : écris une condition qui affiche "Admis" si la moyenne >= 10, "Rattrapage" si >= 8, "Refusé" sinon.',
            '**Exercice C** : écris une condition qui prend un numéro de mois (1 à 12) et affiche la saison correspondante.',
          ]},
        ],
        done: 'Les 3 exercices fonctionnent dans la console.',
        validation: { commit: 'git commit -m "feat: exercices variables et conditions"' },
      },
      {
        title: 'Exercices boucles et tableaux',
        body: [
          { type: 'list', ordered: true, items: [
            '**Exercice D** : affiche la table de multiplication d\u2019un nombre donné (ex. `const nombre = 7` → affiche `7 x 1 = 7`, `7 x 2 = 14`... jusqu\u2019à 10).',
            '**Exercice E** : crée un tableau de 10 notes aléatoires (entre 0 et 20). Parcours-le pour trouver et afficher la note la plus haute, la plus basse, et la moyenne.',
            '**Exercice F** : crée un tableau de prénoms. Parcours-le et affiche uniquement ceux qui commencent par la lettre "A" (astuce : `prenom[0] === "A"` ou `prenom.startsWith("A")`).',
          ]},
        ],
        done: 'Les 3 exercices fonctionnent dans la console.',
        validation: { commit: 'git commit -m "feat: exercices boucles et tableaux"' },
      },
      {
        title: 'Exercices fonctions',
        body: [
          { type: 'list', ordered: true, items: [
            '**Exercice G** : écris une fonction `convertirCelsiusFahrenheit(celsius)` qui retourne la conversion (formule : F = C * 9/5 + 32). Teste avec 0, 100, 37.',
            '**Exercice H** : écris une fonction `compterVoyelles(texte)` qui retourne le nombre de voyelles dans un texte. Teste avec ton prénom et une phrase.',
            '**Exercice I** : écris une fonction `inverserTableau(tab)` qui retourne un nouveau tableau inversé (sans utiliser `.reverse()`). Teste avec `[1, 2, 3, 4, 5]` → `[5, 4, 3, 2, 1]`.',
          ]},
        ],
        done: 'Les 3 fonctions retournent les bons résultats.',
        validation: { commit: 'git commit -m "feat: exercices fonctions" && git push' },
      },
    ],
  },
};
