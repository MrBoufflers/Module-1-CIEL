// =============================================================================
// Séquence S8 — Python : fondamentaux (partie 1)
// Niveau : Première · Durée : 9 h (3 h cours+exos · 3 h TP · 3 h éval)
// 5 exercices intégrés. TP digital (GitHub). Éval pratique sur poste.
// Transition JS → Python explicite. Fond TP repris de modulePythonCours1.jsx.
// =============================================================================

export const s8Python1 = {
  meta: {
    id: 'python-1',
    sequence: 'S8',
    niveau: 'premiere',
    title: 'Python : fondamentaux (partie 1)',
    icon: 'brand-python',
    duree: '9 h',
    theme: 'Programmation',
    filRouge:
      "Tu sais programmer en JS (S6-S7). Python est le deuxième langage du programme : plus " +
      "simple à lire, massivement utilisé en data, IA, cybersécurité et automatisation. On " +
      "le retrouvera en Terminale.",
    ref: { competences: ['C08', 'C09'], savoirs: ['S3.1', 'S3.3'] },
    cyber: "Erreurs et exceptions : un programme qui plante proprement vs une faille.",
    evalInfo: {
      format: 'Évaluation pratique sur poste (coder un programme Python)',
      duree: '3 h',
      competence: 'C08 (Application)',
      ressourcesAutorisees: ['Documentation Python officielle', 'Le cours S8'],
      note: "Évaluation réalisée en classe — aucun sujet n'est publié sur le site.",
    },
  },

  course: [
    {
      type: 'hero',
      title: 'Python : les fondamentaux',
      subtitle: "Un deuxième langage, plus lisible, plus polyvalent. Si tu sais penser en JS, tu sais déjà penser en Python — il ne reste qu'à changer la syntaxe.",
    },
    {
      type: 'info', variant: 'astuce', title: 'Objectifs',
      content: "Installer l'environnement Python, déclarer des variables, écrire des conditions, des boucles et des fonctions. Et comparer systématiquement avec le JS déjà connu.",
    },
    {
      type: 'info', variant: 'definition', title: 'Mise en place',
      content: "Ouvre VS Code. Vérifie que Python est installé : dans le terminal, tape `python --version` (ou `python3 --version`). Crée un fichier `script.py`. Pour l'exécuter : `python script.py` dans le terminal. Pas de navigateur ici — on travaille dans le terminal.",
    },

    // ===== a. Pourquoi Python =====
    {
      type: 'section', title: 'a. Pourquoi un deuxième langage ?',
      blocks: [
        { type: 'prose', content:
          "JavaScript est le langage du **web**. Python est le langage de (presque) **tout le reste** : " +
          "data science, IA, cybersécurité, automatisation, scripts système. Il est aussi réputé " +
          "pour sa **lisibilité** : la syntaxe est épurée, presque du pseudo-code." },
        { type: 'info', variant: 'astuce', title: 'La bonne nouvelle',
          content: "Tu connais déjà les concepts (variables, conditions, boucles, fonctions, tableaux) grâce au JS. En Python, tu ne réapprends pas à penser — tu apprends une nouvelle syntaxe pour les mêmes idées." },
      ],
    },

    // ===== b. Variables et types =====
    {
      type: 'section', title: 'b. Variables et types',
      blocks: [
        { type: 'prose', content: "En Python, pas de `let` ni `const`. On déclare une variable en lui donnant directement un nom et une valeur. Le type est détecté automatiquement." },
        { type: 'code', language: 'python', title: 'Variables en Python vs JS',
          code:
            '# Python\n' +
            'prenom = "Alice"\n' +
            'age = 17\n' +
            'est_majeur = False    # True / False (majuscule !)\n\n' +
            'print(prenom)         # équivalent de console.log()\n' +
            'print(f"J\'ai {age} ans")  # f-string = backticks JS' },
        { type: 'table', headers: ['Concept', 'JavaScript', 'Python'],
          rows: [
            ['Déclarer une variable', 'let age = 17;', 'age = 17'],
            ['Constante', 'const NOM = "Alice";', 'NOM = "Alice"  (convention majuscules)'],
            ['Afficher', 'console.log(age);', 'print(age)'],
            ['Template string', '`J\'ai ${age} ans`', 'f"J\'ai {age} ans"'],
            ['Booléen', 'true / false', 'True / False (majuscule)'],
            ['Fin de ligne', '; (point-virgule)', 'rien (retour à la ligne)'],
          ] },
        { type: 'info', variant: 'attention', title: 'Les pièges de la transition',
          content: "Pas de `;` en fin de ligne. Pas de `{` `}` pour les blocs : Python utilise **l'indentation** (les espaces en début de ligne). `True`/`False` avec majuscule. `print()` au lieu de `console.log()`." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 1 — Premiers pas en Python',
      body: [
        { type: 'list', ordered: true, items: [
          'Crée `exercice1.py`. Déclare 4 variables : `nom`, `prenom`, `age`, `classe`.',
          'Affiche une phrase complète avec une f-string : `f"Je suis {prenom} {nom}, {age} ans, en {classe}."`',
          'Affiche le type de chaque variable avec `print(type(nom))` — observe les résultats (`str`, `int`).',
          'Essaie de faire `age = "dix-sept"` puis `print(age + 1)` — observe l\u2019erreur. Pourquoi ça ne marche pas ? (Comparaison avec JS qui aurait concaténé silencieusement.)',
        ]},
      ],
    },

    // ===== c. Conditions =====
    {
      type: 'section', title: 'c. Conditions',
      blocks: [
        { type: 'prose', content: "Même logique qu'en JS, syntaxe différente : `if` / `elif` / `else`, avec des `:` et **l'indentation** au lieu des accolades." },
        { type: 'code', language: 'python', title: 'Conditions en Python',
          code:
            'age = 17\n\n' +
            'if age >= 18:\n' +
            '    print("Majeur")\n' +
            'elif age >= 16:\n' +
            '    print("Presque majeur")\n' +
            'else:\n' +
            '    print("Mineur")' },
        { type: 'table', headers: ['', 'JavaScript', 'Python'],
          rows: [
            ['Sinon si', 'else if', 'elif'],
            ['Blocs', '{ ... }', 'indentation (4 espaces)'],
            ['Égalité', '===', '=='],
            ['ET / OU', '&& / ||', 'and / or'],
            ['NON', '!', 'not'],
          ] },
        { type: 'info', variant: 'attention', title: 'L\u2019indentation n\u2019est pas optionnelle',
          content: "En JS, l'indentation est un choix de lisibilité. En Python, c'est la **syntaxe** : si tu indentes mal, le programme plante. 4 espaces par niveau, toujours. Configure ton éditeur pour ça." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 2 — Conditions',
      body: [
        { type: 'list', ordered: true, items: [
          'Écris un programme qui demande une note (utilise `note = int(input("Ta note : "))`) et affiche "Excellent" (>= 16), "Bien" (>= 12), "Passable" (>= 10), ou "Insuffisant".',
          'Écris un programme qui prend un numéro de mois (1-12) et affiche la saison. Utilise `and` pour combiner les conditions (ex. `if mois >= 3 and mois <= 5`).',
        ]},
      ],
    },

    // ===== d. Boucles =====
    {
      type: 'section', title: 'd. Boucles',
      blocks: [
        { type: 'code', language: 'python', title: 'for et while en Python',
          code:
            '# Boucle for avec range (équivalent du for classique JS)\n' +
            'for i in range(1, 11):    # de 1 à 10 (11 exclu)\n' +
            '    print(i)\n\n' +
            '# Boucle while\n' +
            'compteur = 10\n' +
            'while compteur > 0:\n' +
            '    print(compteur)\n' +
            '    compteur -= 1\n' +
            'print("Décollage !")' },
        { type: 'info', variant: 'definition', title: 'range()',
          content: "`range(1, 11)` génère les nombres de 1 à 10 (la borne de fin est **exclue**). `range(5)` = de 0 à 4. `range(0, 20, 2)` = de 0 à 18 par pas de 2 (les pairs)." },
        { type: 'table', headers: ['', 'JavaScript', 'Python'],
          rows: [
            ['Boucle compteur', 'for (let i = 0; i < 10; i++)', 'for i in range(10):'],
            ['Boucle condition', 'while (cond) { ... }', 'while cond:'],
            ['Incrément', 'i++', 'i += 1'],
          ] },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 3 — Boucles',
      body: [
        { type: 'list', ordered: true, items: [
          'Affiche la table de multiplication de 7 avec une boucle `for` et `range`.',
          'Affiche tous les nombres pairs de 0 à 50 avec `range(0, 51, 2)`.',
          'Écris un compte à rebours de 10 à 1 avec `while`, suivi de "Décollage !".',
          'Bonus : avec une boucle, calcule la somme des nombres de 1 à 100 et affiche le résultat (réponse attendue : 5050).',
        ]},
      ],
    },

    // ===== e. Fonctions =====
    {
      type: 'section', title: 'e. Fonctions',
      blocks: [
        { type: 'prose', content: "Même concept qu'en JS : un bloc de code réutilisable. Le mot-clé est `def` (au lieu de `function`)." },
        { type: 'code', language: 'python', title: 'Fonctions en Python',
          code:
            'def saluer(prenom):\n' +
            '    return f"Bonjour {prenom} !"\n\n' +
            'message = saluer("Alice")\n' +
            'print(message)  # "Bonjour Alice !"\n\n\n' +
            '# Avec une valeur par défaut\n' +
            'def saluer(prenom, langue="fr"):\n' +
            '    if langue == "fr":\n' +
            '        return f"Bonjour {prenom} !"\n' +
            '    else:\n' +
            '        return f"Hello {prenom}!"' },
        { type: 'table', headers: ['', 'JavaScript', 'Python'],
          rows: [
            ['Déclarer', 'function nom(params) {}', 'def nom(params):'],
            ['Retourner', 'return valeur;', 'return valeur'],
            ['Appeler', 'nom(args)', 'nom(args)'],
            ['Valeur par défaut', 'function f(x = 5)', 'def f(x=5):'],
          ] },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 4 — Fonctions',
      body: [
        { type: 'list', ordered: true, items: [
          'Écris une fonction `calculer_moyenne(note1, note2, note3)` qui retourne la moyenne. Teste-la.',
          'Écris une fonction `est_pair(n)` qui retourne `True` si le nombre est pair.',
          'Écris une fonction `celsius_vers_fahrenheit(c)` qui convertit (F = C * 9/5 + 32). Teste avec 0, 100, 37.',
          'Bonus : écris `factorielle(n)` qui calcule n! avec une boucle.',
        ]},
      ],
    },

    // ===== f. input() =====
    {
      type: 'section', title: 'f. Interagir avec l\u2019utilisateur : input()',
      blocks: [
        { type: 'prose', content: "`input()` demande une saisie à l'utilisateur dans le terminal. La valeur retournée est **toujours un string** — il faut la convertir si on attend un nombre." },
        { type: 'code', language: 'python', title: 'input() et conversion',
          code:
            'nom = input("Ton nom : ")        # string\n' +
            'age = int(input("Ton âge : "))    # converti en entier\n' +
            'taille = float(input("Taille en m : "))  # converti en décimal\n\n' +
            'print(f"{nom}, tu as {age} ans et tu mesures {taille} m.")' },
        { type: 'info', variant: 'attention', title: 'Le piège classique',
          content: "Si tu fais `age = input(\"Ton âge : \")` puis `age + 1`, tu auras une erreur : `input()` retourne un string, pas un nombre. Il faut `int(input(...))` pour convertir." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 5 — Programme interactif',
      body: [
        { type: 'prose', content: 'Écris un programme qui :' },
        { type: 'list', ordered: true, items: [
          'Demande le prénom de l\u2019utilisateur.',
          'Demande son année de naissance.',
          'Calcule et affiche son âge approximatif (année actuelle - année de naissance).',
          'Affiche s\u2019il est majeur ou mineur.',
          'Bonus : demande 3 notes, calcule la moyenne avec ta fonction `calculer_moyenne`, et affiche "Admis" ou "Refusé" selon le résultat.',
        ]},
      ],
    },

    // ===== Cyber + Mémo =====
    {
      type: 'section', title: 'Point cybersécurité',
      blocks: [
        { type: 'info', variant: 'attention', title: 'Un programme qui plante proprement',
          content: "Que se passe-t-il si l'utilisateur tape \"abc\" quand on attend un nombre ? `int(\"abc\")` plante (erreur `ValueError`). Un programme professionnel gère ce cas (avec `try/except` — on le verra en partie 2). Retiens le principe : **une erreur gérée vaut mieux qu'un crash silencieux**." },
      ],
    },
    {
      type: 'section', title: 'Mémo',
      blocks: [
        { type: 'list', ordered: false, items: [
          'Pas de `;`, pas de `{}` : Python utilise `:` et l\u2019**indentation** (4 espaces).',
          '`print()` au lieu de `console.log()`. `input()` pour la saisie.',
          'Types : `str`, `int`, `float`, `bool` (`True`/`False` avec majuscule).',
          'Conditions : `if / elif / else`, opérateurs `and / or / not`.',
          'Boucles : `for i in range(n):`, `while condition:`.',
          'Fonctions : `def nom(params):` + `return`.',
          'Conversion : `int()`, `float()`, `str()` pour changer de type.',
        ]},
      ],
    },
  ],

  tp: {
    kind: 'digital',
    title: 'Résoudre des problèmes en Python',
    mission: "Résoudre une série de problèmes algorithmiques en Python, du concret vers l'abstrait.",
    prerequis: ['Cours S8 suivi', 'Python installé', 'Dépôt GitHub Classroom accepté'],
    criteres: ['Programmes fonctionnels', 'Code clair et indenté', 'Variables bien nommées', 'Commits réguliers'],
    bonus: "Crée un mini-jeu « Pierre-Feuille-Ciseaux » contre l'ordinateur (utilise `import random` et `random.choice([\"pierre\", \"feuille\", \"ciseaux\"])`).",
    steps: [
      {
        title: 'Exercices de base',
        body: [
          { type: 'list', ordered: true, items: [
            '**Exo A** : un programme qui demande nom + âge et affiche un message personnalisé avec majeur/mineur.',
            '**Exo B** : un convertisseur de température (l\u2019utilisateur choisit C→F ou F→C).',
            '**Exo C** : un programme qui demande un nombre et affiche s\u2019il est pair, impair, positif, négatif ou nul.',
          ]},
        ],
        done: 'Les 3 exercices fonctionnent dans le terminal.',
        validation: { commit: 'git commit -m "feat: exercices de base Python"' },
      },
      {
        title: 'Exercices boucles et calculs',
        body: [
          { type: 'list', ordered: true, items: [
            '**Exo D** : un programme qui demande un nombre N et affiche tous les diviseurs de N.',
            '**Exo E** : un programme qui demande combien de notes l\u2019élève a, les saisit une par une, et affiche la moyenne, le max et le min.',
            '**Exo F** : le jeu « devine le nombre » : l\u2019ordinateur choisit un nombre entre 1 et 100, l\u2019utilisateur devine, le programme dit « plus grand » ou « plus petit » jusqu\u2019à trouver.',
          ]},
        ],
        done: 'Les 3 exercices fonctionnent.',
        validation: { commit: 'git commit -m "feat: exercices boucles et calculs"' },
      },
      {
        title: 'Exercices fonctions',
        body: [
          { type: 'list', ordered: true, items: [
            '**Exo G** : écris une fonction `est_premier(n)` et affiche tous les nombres premiers jusqu\u2019à 100.',
            '**Exo H** : écris une fonction `compter_voyelles(texte)` qui retourne le nombre de voyelles.',
            '**Exo I** : écris une fonction `inverser_chaine(texte)` qui retourne le texte à l\u2019envers, sans utiliser `[::-1]`.',
          ]},
        ],
        done: 'Les 3 fonctions retournent les bons résultats.',
        validation: { commit: 'git commit -m "feat: exercices fonctions" && git push' },
      },
    ],
  },
};
