// =============================================================================
// Séquence S9 — Python : structures de données (partie 2)
// Niveau : Première · Durée : 9 h (3 h cours+exos · 3 h TP · 3 h éval)
// 5 exercices intégrés. TP digital (GitHub). Éval pratique.
// =============================================================================

export const s9Python2 = {
  meta: {
    id: 'python-2',
    sequence: 'S9',
    niveau: 'premiere',
    title: 'Python : structures de données (partie 2)',
    icon: 'database',
    duree: '9 h',
    theme: 'Programmation',
    filRouge:
      "Tu sais écrire des programmes Python simples (S8). Ici on passe à la manipulation de " +
      "données structurées : listes, dictionnaires, fichiers. Ce sont les outils qui rendent " +
      "Python si puissant pour traiter de l'information.",
    ref: { competences: ['C08', 'C04'], savoirs: ['S3.1', 'S3.3'] },
    cyber: "Traitement de données personnelles : minimisation, prudence, RGPD.",
    evalInfo: {
      format: 'Évaluation pratique sur poste (programme manipulant des données structurées)',
      duree: '3 h',
      competence: 'C08 (Application) · C04 (Application)',
      ressourcesAutorisees: ['Documentation Python officielle', 'Le cours S9'],
      note: "Évaluation réalisée en classe — aucun sujet n'est publié sur le site.",
    },
  },

  course: [
    {
      type: 'hero',
      title: 'Python : structures de données',
      subtitle: "Les listes et les dictionnaires sont les deux piliers de Python. Avec eux, tu peux stocker, organiser et traiter n'importe quelle information.",
    },
    {
      type: 'info', variant: 'astuce', title: 'Objectifs',
      content: "Maîtriser les listes et les dictionnaires, parcourir des données, lire et écrire des fichiers, et découvrir les modules Python.",
    },

    // ===== a. Listes =====
    {
      type: 'section', title: 'a. Les listes : le tableau de Python',
      blocks: [
        { type: 'prose', content:
          "Tu connais les tableaux (arrays) de JS. En Python, on les appelle des **listes**. " +
          "Même principe : une collection ordonnée d'éléments, indexée à partir de 0." },
        { type: 'code', language: 'python', title: 'Créer et manipuler une liste',
          code:
            'fruits = ["pomme", "banane", "cerise"]\n\n' +
            'print(fruits[0])       # "pomme"\n' +
            'print(fruits[-1])      # "cerise" (le dernier !)\n' +
            'print(len(fruits))     # 3\n\n' +
            'fruits.append("mangue")  # ajouter à la fin\n' +
            'fruits.remove("banane")  # retirer par valeur\n' +
            'fruits.sort()            # trier alphabétiquement' },
        { type: 'prose', content: "**Parcourir une liste** — Python rend ça très lisible :" },
        { type: 'code', language: 'python', title: 'Parcours de liste',
          code:
            '# Parcours direct (le plus courant en Python)\n' +
            'for fruit in fruits:\n' +
            '    print(fruit)\n\n' +
            '# Avec l\'index\n' +
            'for i, fruit in enumerate(fruits):\n' +
            '    print(f"{i + 1}. {fruit}")' },
        { type: 'info', variant: 'astuce', title: 'for...in vs for...range',
          content: "En Python, on privilégie `for element in liste:` (direct et lisible) plutôt que `for i in range(len(liste)):` (lourd). On utilise `enumerate` quand on a besoin de l'index ET de la valeur." },
        { type: 'prose', content: "**Le slicing** — découper une liste :" },
        { type: 'code', language: 'python', title: 'Slicing',
          code:
            'nombres = [10, 20, 30, 40, 50]\n\n' +
            'print(nombres[1:3])    # [20, 30] (index 1 à 2)\n' +
            'print(nombres[:3])     # [10, 20, 30] (du début à 2)\n' +
            'print(nombres[2:])     # [30, 40, 50] (de 2 à la fin)\n' +
            'print(nombres[::-1])   # [50, 40, 30, 20, 10] (inversé)' },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 1 — Manipuler des listes',
      body: [
        { type: 'list', ordered: true, items: [
          'Crée une liste `notes` contenant 8 notes (entre 0 et 20).',
          'Affiche la première, la dernière (avec `[-1]`), et le nombre de notes.',
          'Ajoute une note avec `.append()`, retire la plus basse avec `.remove(min(notes))`.',
          'Affiche la liste triée (`.sort()`) et la liste inversée (slicing `[::-1]`).',
          'Avec une boucle `for note in notes:`, calcule la somme et la moyenne manuellement (sans utiliser `sum()`).',
          'Bonus : affiche uniquement les notes au-dessus de la moyenne.',
        ]},
      ],
    },

    // ===== b. Dictionnaires =====
    {
      type: 'section', title: 'b. Les dictionnaires : clé → valeur',
      blocks: [
        { type: 'prose', content:
          "Un **dictionnaire** associe des **clés** à des **valeurs**. C'est l'équivalent d'un " +
          "objet JS (`{}`), mais le vocabulaire est différent. On s'en sert pour représenter " +
          "des entités structurées (un élève, un produit, une config...)." },
        { type: 'code', language: 'python', title: 'Créer et utiliser un dictionnaire',
          code:
            'eleve = {\n' +
            '    "nom": "Dupont",\n' +
            '    "prenom": "Alice",\n' +
            '    "age": 17,\n' +
            '    "classe": "1CIEL"\n' +
            '}\n\n' +
            'print(eleve["prenom"])      # "Alice"\n' +
            'eleve["moyenne"] = 14.5     # ajouter une clé\n' +
            'print(eleve)' },
        { type: 'prose', content: "**Parcourir un dictionnaire** :" },
        { type: 'code', language: 'python', title: 'Parcours de dictionnaire',
          code:
            '# Les clés\n' +
            'for cle in eleve:\n' +
            '    print(cle)\n\n' +
            '# Les clés et les valeurs\n' +
            'for cle, valeur in eleve.items():\n' +
            '    print(f"{cle} : {valeur}")' },
        { type: 'info', variant: 'definition', title: 'Liste de dictionnaires',
          content: "Le combo le plus courant en Python : une **liste de dictionnaires**. Chaque dictionnaire est un « enregistrement » (un élève, un produit...), la liste les rassemble. C'est exactement la structure d'une base de données simple." },
        { type: 'code', language: 'python', title: 'Liste de dictionnaires',
          code:
            'eleves = [\n' +
            '    {"nom": "Dupont", "moyenne": 14.5},\n' +
            '    {"nom": "Martin", "moyenne": 11.0},\n' +
            '    {"nom": "Durand", "moyenne": 16.2},\n' +
            ']\n\n' +
            'for e in eleves:\n' +
            '    print(f"{e[\"nom\"]} : {e[\"moyenne\"]}")' },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 2 — Dictionnaires et liste de dictionnaires',
      body: [
        { type: 'list', ordered: true, items: [
          'Crée un dictionnaire `mon_profil` avec 5 clés (nom, prenom, age, ville, langage_prefere). Affiche-le proprement avec une boucle `.items()`.',
          'Crée une liste `classe` contenant 4 dictionnaires d\u2019élèves (nom + moyenne).',
          'Avec une boucle, affiche chaque élève et sa moyenne.',
          'Calcule et affiche la moyenne de la classe.',
          'Bonus : affiche le nom de l\u2019élève qui a la meilleure moyenne.',
        ]},
      ],
    },

    // ===== c. Les méthodes utiles =====
    {
      type: 'section', title: 'c. Méthodes utiles sur les chaînes et les listes',
      blocks: [
        { type: 'table', headers: ['Méthode', 'Sur quoi', 'Ce qu\u2019elle fait', 'Exemple'],
          rows: [
            ['.upper() / .lower()', 'String', 'Majuscules / minuscules', '"hello".upper() → "HELLO"'],
            ['.strip()', 'String', 'Retire les espaces autour', '"  ok  ".strip() → "ok"'],
            ['.split()', 'String', 'Découpe en liste', '"a,b,c".split(",") → ["a","b","c"]'],
            ['.join()', 'String', 'Assemble une liste en string', '", ".join(["a","b"]) → "a, b"'],
            ['.startswith()', 'String', 'Teste le début', '"Bonjour".startswith("Bon") → True'],
            ['.append()', 'Liste', 'Ajoute à la fin', 'liste.append(42)'],
            ['.sort()', 'Liste', 'Trie en place', 'liste.sort()'],
            ['.count()', 'Liste/String', 'Compte les occurrences', '[1,2,1].count(1) → 2'],
            ['in', 'Liste/String', 'Teste la présence', '"a" in "chat" → True'],
          ] },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 3 — Manipuler des chaînes',
      body: [
        { type: 'list', ordered: true, items: [
          'Demande une phrase à l\u2019utilisateur avec `input()`. Affiche-la en majuscules, en minuscules, et le nombre de mots (`len(phrase.split())`).',
          'Écris une fonction `compter_voyelles(texte)` qui retourne le nombre de voyelles (utilise `in` pour tester chaque caractère).',
          'Écris une fonction `est_palindrome(mot)` qui retourne `True` si le mot se lit pareil à l\u2019endroit et à l\u2019envers (astuce : compare `mot.lower()` avec `mot.lower()[::-1]`).',
        ]},
      ],
    },

    // ===== d. Fichiers =====
    {
      type: 'section', title: 'd. Lire et écrire des fichiers',
      blocks: [
        { type: 'prose', content:
          "Un programme qui perd ses données à chaque fermeture n'est pas très utile. Les " +
          "**fichiers** permettent de **sauvegarder** des données et de les **relire** plus tard." },
        { type: 'code', language: 'python', title: 'Écrire puis lire un fichier',
          code:
            '# Écrire dans un fichier\n' +
            'with open("donnees.txt", "w") as f:\n' +
            '    f.write("Alice,14.5\\n")\n' +
            '    f.write("Bob,11.0\\n")\n\n' +
            '# Lire un fichier\n' +
            'with open("donnees.txt", "r") as f:\n' +
            '    contenu = f.read()\n' +
            '    print(contenu)\n\n' +
            '# Lire ligne par ligne\n' +
            'with open("donnees.txt", "r") as f:\n' +
            '    for ligne in f:\n' +
            '        nom, note = ligne.strip().split(",")\n' +
            '        print(f"{nom} a {note}")' },
        { type: 'info', variant: 'definition', title: 'Le bloc with',
          content: "`with open(...) as f:` ouvre le fichier et le **ferme automatiquement** à la fin du bloc, même en cas d'erreur. C'est la bonne pratique en Python — n'utilise jamais `open()` / `close()` séparément." },
        { type: 'info', variant: 'attention', title: 'Modes d\u2019ouverture',
          content: '`"r"` = lecture (read). `"w"` = écriture (write, écrase le contenu). `"a"` = ajout (append, écrit à la fin sans écraser).' },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 4 — Lire et écrire des fichiers',
      body: [
        { type: 'list', ordered: true, items: [
          'Écris un programme qui demande 5 prénoms à l\u2019utilisateur et les écrit dans un fichier `prenoms.txt` (un par ligne).',
          'Écris un programme qui lit `prenoms.txt`, les met en majuscules, et les affiche.',
          'Crée un fichier `notes.csv` avec 5 lignes `nom,note` écrites par ton programme. Puis lis-le, parse chaque ligne (`.split(",")`) et affiche le tableau + la moyenne.',
          'Bonus : écris une fonction `ajouter_note(nom, note)` qui ajoute une ligne au fichier (mode `"a"`).',
        ]},
      ],
    },

    // ===== e. Modules =====
    {
      type: 'section', title: 'e. Les modules : réutiliser du code existant',
      blocks: [
        { type: 'prose', content:
          "Python est livré avec une **bibliothèque standard** immense. Un **module** est un " +
          "fichier Python prêt à l'emploi qu'on importe avec `import`." },
        { type: 'code', language: 'python', title: 'Importer et utiliser des modules',
          code:
            'import random\n' +
            'print(random.randint(1, 100))    # nombre aléatoire entre 1 et 100\n' +
            'print(random.choice(["a", "b", "c"]))  # choix aléatoire\n\n' +
            'import math\n' +
            'print(math.sqrt(144))    # racine carrée → 12.0\n' +
            'print(math.pi)           # 3.14159...\n\n' +
            'from datetime import date\n' +
            'print(date.today())      # date du jour' },
        { type: 'info', variant: 'astuce', title: 'Les modules les plus utiles',
          content: "`random` (aléatoire), `math` (calculs), `datetime` (dates), `os` (système de fichiers), `json` (lire/écrire du JSON). On en verra d'autres en Terminale." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 5 — Modules',
      body: [
        { type: 'list', ordered: true, items: [
          'Utilise `random.randint()` pour simuler 100 lancers de dé (1 à 6). Compte combien de fois chaque face apparaît et affiche les résultats.',
          'Utilise `math.sqrt()` pour écrire une fonction `est_carre_parfait(n)` qui retourne `True` si n est un carré parfait (ex. 16, 25, 36...).',
          'Utilise `datetime.date.today()` pour afficher la date du jour et calculer le nombre de jours avant la fin de l\u2019année scolaire.',
        ]},
      ],
    },

    // ===== Cyber + Mémo =====
    {
      type: 'section', title: 'Point cybersécurité',
      blocks: [
        { type: 'info', variant: 'attention', title: 'Données personnelles et fichiers',
          content: "Quand tu lis/écris des fichiers contenant des noms, notes, emails... ce sont des **données personnelles** protégées par le RGPD. Règles : ne stocker que le nécessaire (minimisation), ne pas les partager, les supprimer quand on n'en a plus besoin." },
      ],
    },
    {
      type: 'section', title: 'Mémo',
      blocks: [
        { type: 'list', ordered: false, items: [
          'Listes : `[]`, `.append()`, `.sort()`, `for x in liste:`, slicing `[1:3]`, `enumerate()`.',
          'Dictionnaires : `{}`, `dico["clé"]`, `.items()`, combo `liste de dictionnaires`.',
          'Chaînes : `.upper()`, `.lower()`, `.strip()`, `.split()`, `.join()`, `in`.',
          'Fichiers : `with open("f", "r/w/a") as f:`, `.read()`, `.write()`, boucle ligne par ligne.',
          'Modules : `import module`, `from module import truc`. `random`, `math`, `datetime`.',
        ]},
      ],
    },
  ],

  tp: {
    kind: 'digital',
    title: 'Programme de gestion de données',
    mission: "Construire un petit programme qui manipule des données structurées : saisie, stockage en fichier, traitement et affichage.",
    prerequis: ['Cours S9 suivi', 'Python installé', 'Dépôt GitHub Classroom accepté'],
    criteres: ['Programme fonctionnel', 'Utilisation de listes et dictionnaires', 'Lecture/écriture fichier', 'Code organisé en fonctions', 'Commits réguliers'],
    bonus: "Ajoute une fonctionnalité de recherche (l'utilisateur tape un nom, le programme affiche les infos correspondantes).",
    steps: [
      {
        title: 'Structure de données et saisie',
        body: [
          { type: 'prose', content: "Crée un programme de gestion d'un parc informatique (ou tout autre thème validé par le prof) :" },
          { type: 'list', ordered: true, items: [
            'Définis la structure d\u2019un équipement : un dictionnaire avec `nom`, `type`, `annee`, `etat` (bon/moyen/HS).',
            'Écris une fonction `saisir_equipement()` qui demande les infos à l\u2019utilisateur avec `input()` et retourne le dictionnaire.',
            'Crée une liste vide `parc = []` et une boucle qui permet d\u2019ajouter des équipements un par un (sortie quand l\u2019utilisateur tape "stop").',
          ]},
        ],
        done: 'Le programme permet de saisir plusieurs équipements dans une liste.',
        validation: { commit: 'git commit -m "feat: saisie des équipements"' },
      },
      {
        title: 'Sauvegarde et lecture fichier',
        body: [
          { type: 'list', ordered: true, items: [
            'Écris une fonction `sauvegarder(parc)` qui écrit la liste dans un fichier `parc.txt` (un équipement par ligne, valeurs séparées par `;`).',
            'Écris une fonction `charger()` qui lit le fichier et reconstruit la liste de dictionnaires.',
            'Modifie le programme principal : au démarrage il charge les données existantes, à la fin il sauvegarde.',
          ]},
        ],
        done: 'Les données persistent entre deux exécutions du programme.',
        validation: { commit: 'git commit -m "feat: sauvegarde et chargement fichier"' },
      },
      {
        title: 'Statistiques et menu',
        body: [
          { type: 'list', ordered: true, items: [
            'Écris une fonction `afficher_parc(parc)` qui affiche tous les équipements proprement.',
            'Écris une fonction `statistiques(parc)` qui affiche : le nombre total, le nombre par état (bon/moyen/HS), l\u2019équipement le plus ancien.',
            'Crée un menu interactif : 1. Afficher le parc / 2. Ajouter un équipement / 3. Statistiques / 4. Sauvegarder et quitter.',
          ]},
        ],
        done: 'Le menu fonctionne, les statistiques sont correctes, les données sont sauvegardées.',
        validation: { commit: 'git commit -m "feat: menu et statistiques" && git push' },
      },
    ],
  },
};
