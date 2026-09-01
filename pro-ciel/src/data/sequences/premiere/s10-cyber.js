// =============================================================================
// Séquence S10 — Sécuriser dès le départ : synthèse cybersécurité
// Niveau : Première · Durée : 6 h (3 h cours+exos · 3 h TP/éval combiné)
// 4 exercices intégrés au cours. TP combiné avec évaluation (audit du site).
// Synthèse de tous les points cyber abordés en filigrane depuis S1.
// =============================================================================

export const s10Cyber = {
  meta: {
    id: 'cyber',
    sequence: 'S10',
    niveau: 'premiere',
    title: 'Sécuriser dès le départ — synthèse cybersécurité',
    icon: 'shield-lock',
    duree: '6 h',
    theme: 'Cybersécurité (transversal)',
    filRouge:
      "Depuis S1, chaque séquence abordait un point de sécurité en filigrane. Ici on rassemble " +
      "tout : la cybersécurité ce n'est pas un sujet à part, c'est un peu de tout ce qu'on a " +
      "déjà vu, rassemblé avec un regard critique.",
    ref: { competences: ['C04', 'C08'], savoirs: ['S4.1', 'S4.2'] },
    cyber: "Module entièrement dédié à la cybersécurité.",
    evalInfo: {
      format: 'Évaluation pratique : audit de sécurité du site fil rouge (combiné avec le TP)',
      duree: '3 h',
      competence: 'C04 (Application) · C08 (Application)',
      ressourcesAutorisees: ['Le cours S10', 'MDN Web Docs', 'OWASP (ressources ouvertes)'],
      note: "L'évaluation est intégrée au TP : l'élève produit un rapport d'audit noté.",
    },
  },

  course: [
    {
      type: 'hero',
      title: 'Cybersécurité : rassembler les pièces du puzzle',
      subtitle: "Tu as déjà vu la sécurité en filigrane dans chaque séquence. Maintenant on met tout ensemble et on regarde ton propre site avec l'oeil d'un attaquant.",
    },
    {
      type: 'info', variant: 'astuce', title: 'Objectifs',
      content: "Comprendre les principales menaces, connaître les bonnes pratiques d'authentification, savoir ce qu'est le HTTPS, identifier les failles de base d'un site web, et connaître le RGPD pour les données personnelles.",
    },

    // ===== a. Rappel : ce qu'on a déjà vu =====
    {
      type: 'section', title: "a. Ce qu'on a déjà vu (et pourquoi c'est de la cyber)",
      blocks: [
        { type: 'prose', content: "Depuis le début de l'année, chaque séquence avait son point sécurité. Récapitulons :" },
        { type: 'table', headers: ['Séquence', 'Point sécurité', 'Concept'],
          rows: [
            ['S1 — PC', 'Ports USB, verrouillage session', 'Surface d\u2019attaque matérielle'],
            ['S2 — Logiciels', 'Fichiers piégés, macros', 'Vecteur d\u2019infection'],
            ['S3 — Git', 'Secrets dans les dépôts, public/privé', 'Fuite de données'],
            ['S4 — HTML', 'Code source visible, HTTPS', 'Données en clair, intégrité'],
            ['S5 — CSS', 'Cohérence visuelle = confiance', 'Ingénierie sociale'],
            ['S6 — JS base', 'Programme qui plante proprement', 'Gestion des erreurs'],
            ['S7 — JS DOM', 'Validation client \u2260 sécurité', 'Ne jamais faire confiance au client'],
            ['S8 — Python', 'Erreurs et exceptions', 'Robustesse'],
            ['S9 — Python 2', 'Données personnelles, RGPD', 'Protection des données'],
          ] },
        { type: 'info', variant: 'definition', title: 'La cybersécurité, c\u2019est quoi au fond ?',
          content: "C'est l'ensemble des pratiques qui protègent les systèmes, les réseaux et les données contre les accès non autorisés, les modifications et les destructions. Ce n'est pas un sujet à part : **c'est une posture** qui s'applique à tout ce qu'on fait." },
      ],
    },

    // ===== b. Authentification et mots de passe =====
    {
      type: 'section', title: 'b. Authentification et mots de passe',
      blocks: [
        { type: 'prose', content:
          "L'**authentification** est le processus qui vérifie que tu es bien qui tu prétends " +
          "être. Le moyen le plus courant : le **mot de passe**. Mais un mauvais mot de passe, " +
          "c'est une porte ouverte." },
        { type: 'cards', columns: 2, items: [
          { title: 'Un MAUVAIS mot de passe', text: "court (< 8 caractères), courant (123456, password, azerty), personnel (date de naissance, prénom du chien), réutilisé sur plusieurs sites." },
          { title: 'Un BON mot de passe', text: "long (>= 12 caractères), aléatoire ou phrase de passe, unique pour chaque site, stocké dans un gestionnaire de mots de passe." },
        ]},
        { type: 'info', variant: 'attention', title: 'Les attaques sur les mots de passe',
          content: "**Brute force** : tester toutes les combinaisons (un mot de passe de 6 caractères tombe en secondes). **Dictionnaire** : tester les mots courants et leurs variantes. **Phishing** : te faire taper ton mot de passe sur un faux site. **Fuite de base de données** : le site se fait pirater, ton mot de passe est dans la nature — et si tu le réutilisais ailleurs, tous tes comptes sont compromis." },
        { type: 'prose', content: "**Ne jamais stocker un mot de passe en clair.** On stocke un **hash** : une empreinte irréversible. On ne peut pas retrouver le mot de passe à partir du hash, mais on peut vérifier si un mot de passe correspond." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 1 — Évaluer la robustesse d\u2019un mot de passe',
      body: [
        { type: 'prose', content: 'Écris un programme Python qui évalue la robustesse d\u2019un mot de passe saisi par l\u2019utilisateur :' },
        { type: 'list', ordered: true, items: [
          'Demande un mot de passe avec `input()`.',
          'Vérifie : longueur >= 12, contient au moins une majuscule, une minuscule, un chiffre, et un caractère spécial.',
          'Affiche un score : 0 critère = "Très faible", 1-2 = "Faible", 3 = "Moyen", 4 = "Fort".',
          'Teste avec "123456", "Bonjour", "Tr0ub4dor&3!", et ton propre mot de passe (ne le montre à personne).',
        ]},
      ],
    },

    // ===== c. HTTPS =====
    {
      type: 'section', title: 'c. HTTPS : le cadenas qui protège la communication',
      blocks: [
        { type: 'prose', content:
          "Quand tu navigues en **HTTP** (sans le S), tout ce que tu envoies (mots de passe, " +
          "données de formulaire) circule **en clair** sur le réseau : n'importe qui entre " +
          "ton PC et le serveur peut le lire. **HTTPS** ajoute un chiffrement : même interceptées, " +
          "les données sont illisibles." },
        { type: 'cards', columns: 2, items: [
          { title: 'HTTP', text: "Données en clair. Pas de vérification de l'identité du serveur. Le contenu peut être modifié en transit. Le navigateur affiche un avertissement." },
          { title: 'HTTPS', text: "Données chiffrées. Le serveur prouve son identité (certificat). Intégrité garantie. Le navigateur affiche un cadenas." },
        ]},
        { type: 'info', variant: 'definition', title: 'Le certificat SSL/TLS',
          content: "Le serveur présente un **certificat** (délivré par une autorité de confiance) qui prouve son identité. C'est comme une carte d'identité pour un site web. Sans certificat valide : pas de cadenas." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 2 — Vérifier le HTTPS',
      body: [
        { type: 'list', ordered: true, items: [
          'Ouvre 3 sites de ton choix dans le navigateur. Pour chacun, clique sur le cadenas (ou l\u2019icône à gauche de l\u2019URL) : note si c\u2019est HTTP ou HTTPS, et le nom de l\u2019autorité de certification.',
          'Essaie d\u2019accéder à un site en tapant manuellement `http://` au lieu de `https://` — observe ce qui se passe (redirection automatique ? avertissement ?).',
          'Ton site du chef-d\u2019oeuvre hébergé sur GitHub Pages : est-il en HTTPS ? Vérifie.',
        ]},
      ],
    },

    // ===== d. Les menaces courantes =====
    {
      type: 'section', title: 'd. Les menaces courantes du web',
      blocks: [
        { type: 'cards', columns: 1, items: [
          { title: 'Phishing (hameçonnage)', text: "Un email ou site qui imite un service légitime (banque, école) pour te faire saisir tes identifiants. Indices : URL suspecte, fautes d'orthographe, urgence artificielle (« votre compte sera supprimé »)." },
          { title: 'Injection (SQL, XSS)', text: "Injecter du code malveillant via un champ de formulaire. Injection SQL : l'attaquant envoie du SQL dans un champ pour accéder à la base de données. XSS : l'attaquant injecte du JavaScript pour voler des données. Protection : valider et nettoyer TOUTES les entrées utilisateur, côté serveur." },
          { title: 'Ingénierie sociale', text: "Manipuler une personne plutôt qu'une machine : se faire passer pour un technicien, un collègue, un supérieur. La faille, c'est l'humain, pas le système." },
        ]},
        { type: 'info', variant: 'attention', title: 'Le point commun',
          content: "La majorité des attaques exploitent la **confiance** : confiance dans un email, confiance dans une URL, confiance dans un champ de formulaire. La posture de sécurité, c'est **douter par défaut**." },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 3 — Reconnaître un phishing',
      body: [
        { type: 'prose', content: 'Le professeur affiche 4 captures d\u2019écran d\u2019emails (2 vrais, 2 phishing). Pour chacun :' },
        { type: 'list', ordered: true, items: [
          'Identifie l\u2019expéditeur réel (pas le nom affiché, l\u2019adresse email complète).',
          'Survole les liens sans cliquer : l\u2019URL affichée correspond-elle au site légitime ?',
          'Repère les indices de phishing (urgence, fautes, logo flou, URL étrange).',
          'Classe chaque email : légitime ou phishing, et justifie.',
        ]},
      ],
    },

    // ===== e. Validation des entrées =====
    {
      type: 'section', title: 'e. Validation des entrées : la règle universelle',
      blocks: [
        { type: 'prose', content:
          "On l'a vu en S7 : **ne jamais faire confiance aux données qui viennent de " +
          "l'utilisateur**. Que ce soit un champ de formulaire, une URL, un fichier uploadé — " +
          "tout doit être vérifié et nettoyé avant d'être utilisé." },
        { type: 'list', ordered: false, items: [
          "**Côté client (JS)** : validation pour le confort de l'utilisateur (feedback immédiat).",
          "**Côté serveur** : validation pour la **sécurité** (l'utilisateur peut contourner le JS).",
          "**Les deux ensemble** : c'est la bonne pratique. Jamais l'un sans l'autre.",
        ]},
        { type: 'code', language: 'python', title: 'Exemple : ne pas faire confiance à input()',
          code:
            '# MAUVAIS : on suppose que l\u2019utilisateur tape un nombre\n' +
            'age = int(input("Ton âge : "))  # plante si on tape "abc"\n\n' +
            '# BON : on vérifie\n' +
            'saisie = input("Ton âge : ")\n' +
            'if saisie.isdigit():\n' +
            '    age = int(saisie)\n' +
            'else:\n' +
            '    print("Ce n\'est pas un nombre valide.")' },
      ],
    },
    {
      type: 'exercise',
      title: 'Exercice 4 — Sécuriser un input',
      body: [
        { type: 'list', ordered: true, items: [
          'Reprends un de tes programmes Python de S8 qui utilise `input()` pour un nombre.',
          'Ajoute une vérification : si l\u2019utilisateur ne tape pas un nombre valide, affiche un message d\u2019erreur et redemande (boucle `while`).',
          'Bonus : utilise `try / except ValueError:` pour gérer l\u2019erreur proprement.',
        ]},
      ],
    },

    // ===== f. RGPD =====
    {
      type: 'section', title: 'f. RGPD : protéger les données personnelles',
      blocks: [
        { type: 'prose', content:
          "Le **RGPD** (Règlement Général sur la Protection des Données) est une loi européenne " +
          "qui encadre la collecte et le traitement des données personnelles. En tant que futur " +
          "professionnel de l'informatique, tu DOIS le connaître." },
        { type: 'list', ordered: false, items: [
          "**Donnée personnelle** : tout ce qui identifie directement ou indirectement une personne (nom, email, IP, photo, numéro d'élève...).",
          "**Minimisation** : ne collecter que les données strictement nécessaires.",
          "**Consentement** : informer l'utilisateur et obtenir son accord.",
          "**Droit d'accès et d'effacement** : l'utilisateur peut demander à voir ses données et à les faire supprimer.",
          "**Sécurité** : protéger les données collectées (chiffrement, accès restreint).",
        ]},
        { type: 'info', variant: 'attention', title: 'Concrètement pour toi',
          content: "Si ton site collecte un email via un formulaire, tu es concerné par le RGPD. Tu dois dire pourquoi tu le collectes, ne pas le partager sans accord, et permettre sa suppression. Dans un cadre scolaire, les données des élèves sont particulièrement sensibles." },
      ],
    },

    // ===== Mémo =====
    {
      type: 'section', title: 'Mémo cybersécurité',
      blocks: [
        { type: 'list', ordered: false, items: [
          "**Mots de passe** : longs (>= 12), uniques, dans un gestionnaire. Jamais en clair.",
          "**HTTPS** : chiffrement + identité du serveur. Pas de cadenas = pas de confiance.",
          "**Menaces** : phishing (douter des emails), injections (valider les entrées), ingénierie sociale (douter des demandes).",
          "**Validation** : toujours côté client ET côté serveur. Ne jamais faire confiance à l'utilisateur.",
          "**RGPD** : minimiser les données, informer, sécuriser, permettre la suppression.",
          "**Posture** : la sécurité n'est pas un ajout, c'est une façon de penser chaque décision technique.",
        ]},
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // TP + ÉVALUATION COMBINÉS — Audit du site fil rouge
  // ---------------------------------------------------------------------------
  tp: {
    kind: 'physical', // pas de push Git du rapport — rendu au prof
    title: 'Audit de sécurité du site fil rouge',
    mission:
      "Examiner ton propre site du chef-d'œuvre avec l'oeil d'un auditeur de sécurité. " +
      "Repérer les faiblesses, les corriger quand c'est possible, et rédiger un rapport. " +
      "Ce rapport est noté (évaluation combinée avec le TP).",
    prerequis: ['Cours S10 suivi', 'Site du chef-d\u2019oeuvre (S4-S5-S7) accessible'],
    criteres: [
      'Rapport structuré et clair',
      'Au moins 5 points de vérification traités',
      'Corrections appliquées quand possible',
      'Argumentation des choix',
    ],
    note:
      "Le rapport d'audit est noté. Barème indicatif : identification des faiblesses (8 pts), " +
      "corrections appliquées (6 pts), argumentation et clarté du rapport (6 pts). Total /20. " +
      "Évaluation bienveillante : un point bien identifié même sans correction appliquée garde " +
      "la majorité des points d'identification.",
    steps: [
      {
        title: 'Vérifications de base',
        body: [
          { type: 'prose', content: 'Ouvre ton site et vérifie systématiquement les points suivants. Pour chaque point, note dans ton rapport : ce que tu as vérifié, ce que tu as trouvé, et ce que tu as corrigé (ou pourquoi tu ne peux pas).' },
          { type: 'list', ordered: true, items: [
            '**HTTPS** : ton site GitHub Pages est-il en HTTPS ? Le cadenas est-il présent ?',
            '**Données sensibles dans le code** : ouvre le code source (Ctrl+U). Y a-t-il des commentaires, mots de passe, clés, emails en dur ?',
            '**Dépôt Git** : vérifie ton historique de commits. As-tu déjà poussé un secret par erreur ? (Si oui, il est toujours dans l\u2019historique.)',
          ]},
        ],
        done: 'Les 3 vérifications sont documentées dans le rapport.',
      },
      {
        title: 'Vérifications du formulaire et du JavaScript',
        body: [
          { type: 'list', ordered: true, items: [
            '**Validation du formulaire** : ta validation JS (S7) est-elle contournable ? (Ouvre l\u2019inspecteur, désactive le JS, soumets le formulaire — que se passe-t-il ?)',
            '**innerHTML vs textContent** : utilises-tu `innerHTML` quelque part ? Si oui, un utilisateur pourrait-il injecter du HTML/JS ? (Teste en tapant `<script>alert("XSS")</script>` dans un champ.)',
            '**Données affichées** : ton JS affiche-t-il des données de l\u2019utilisateur sur la page ? Ces données sont-elles nettoyées ?',
          ]},
        ],
        done: 'Les vérifications JS sont documentées avec résultats et corrections éventuelles.',
      },
      {
        title: 'Rapport final et recommandations',
        body: [
          { type: 'prose', content: 'Rédige proprement ton rapport d\u2019audit (Word ou texte brut) avec :' },
          { type: 'list', ordered: true, items: [
            'Un titre, ton nom, la date.',
            'Pour chaque point vérifié : **constat** (ce que tu as trouvé), **risque** (ce qui pourrait arriver), **action** (ce que tu as corrigé ou recommandes).',
            'Une **conclusion** : ton site est-il « raisonnablement sécurisé » pour un site statique scolaire ? Quels seraient les risques supplémentaires s\u2019il était dynamique (avec un serveur et une base de données) ?',
          ]},
          { type: 'info', variant: 'astuce',
            content: "La conclusion est importante : elle montre que tu comprends les limites de ce que tu as vérifié. Un site statique (HTML/CSS/JS) a une surface d'attaque bien plus petite qu'une application avec backend — et c'est un choix de sécurité en soi." },
        ],
        done: 'Le rapport est remis au professeur.',
      },
    ],
  },
};
