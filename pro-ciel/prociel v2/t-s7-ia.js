export const ts7Ia = {
  meta: {
    id: 'ia', sequence: 'S7', niveau: 'terminale',
    title: "L'intelligence artificielle : comprendre, utiliser, situer", icon: 'brain', duree: '9 h',
    theme: 'Intelligence artificielle',
    filRouge: "L'IA est partout : dans les outils qu'on utilise, dans les métiers qu'on prépare. Cette séquence démystifie le sujet : comment ça marche vraiment, comment s'en servir, et quelles sont les limites.",
    ref: { competences: ['C01', 'C04', 'C03'], savoirs: ['S3.4', 'S4.1'] },
    cyber: "Biais des modèles, données d'entraînement, vie privée, désinformation générée par IA.",
    evalInfo: { format: 'Exposé oral + dossier écrit (veille technologique sur un sujet IA)', duree: '3 h (préparation) + oral', competence: 'C01 (Application) · C03 (Application)', ressourcesAutorisees: ['Recherche Internet', 'Le cours S7'], note: "Évaluation en classe entière (exposés)." },
  },
  course: [
    { type: 'hero', title: "L'IA : comprendre, utiliser, situer", subtitle: "Ni magie ni menace : l'IA est un outil puissant avec des forces, des limites et des responsabilités. Comprenons ce qu'elle est vraiment." },
    { type: 'info', variant: 'astuce', title: 'Objectifs', content: "Comprendre ce qu'est (et n'est pas) l'IA, connaître les grandes familles (IA classique, machine learning, deep learning, IA générative), savoir l'utiliser de façon responsable, et en situer les enjeux éthiques et sociaux." },

    { type: 'section', title: "a. L'IA vue de l'extérieur : qu'est-ce que c'est ?", blocks: [
      { type: 'prose', content: "L'**intelligence artificielle** n'est pas un robot qui pense. C'est un ensemble de techniques qui permettent à une machine de **réaliser des tâches qui nécessiteraient normalement de l'intelligence humaine** : reconnaître une image, comprendre du texte, prendre une décision, générer du contenu." },
      { type: 'info', variant: 'attention', title: 'Ce que l\u2019IA ne fait PAS', content: "L'IA ne comprend pas, ne ressent pas, ne « pense » pas. Elle calcule des probabilités à partir de données. Un modèle de langue ne « sait » rien : il prédit le mot le plus probable après les précédents. C'est puissant, mais ce n'est pas de l'intelligence au sens humain." },
    ]},

    { type: 'section', title: 'b. Les grandes familles d\u2019IA', blocks: [
      { type: 'cards', columns: 1, items: [
        { title: 'IA classique (règles explicites)', text: "Le programmeur écrit les règles à la main (si ... alors ...). Exemples : un thermostat, un filtre anti-spam à règles fixes. Limité : il faut prévoir tous les cas." },
        { title: 'Machine Learning (apprentissage automatique)', text: "La machine apprend les règles à partir de données. On lui montre des milliers d'exemples étiquetés (« ceci est un chat », « ceci n'est pas un chat ») et elle déduit un modèle. Exemples : reconnaissance d'images, recommandation de vidéos." },
        { title: 'Deep Learning (apprentissage profond)', text: "Un sous-ensemble du ML utilisant des réseaux de neurones à beaucoup de couches. Très performant pour la vision, le langage, l'audio. Nécessite énormément de données et de puissance de calcul." },
        { title: 'IA générative', text: "Des modèles qui créent du contenu nouveau : texte (ChatGPT, Claude), images (DALL-E, Midjourney), code (GitHub Copilot). Entraînés sur des quantités massives de données existantes." },
      ]},
    ]},

    { type: 'section', title: 'c. Comment un modèle apprend (en simplifié)', blocks: [
      { type: 'prose', content: "Le processus en 3 étapes :" },
      { type: 'list', ordered: true, items: [
        "**Les données d'entraînement** : des millions d'exemples (images, textes, sons) que le modèle va « étudier ».",
        "**L'entraînement** : le modèle ajuste ses paramètres internes pour minimiser ses erreurs sur les données d'entraînement. C'est un processus itératif qui peut durer des jours ou des semaines.",
        "**L'inférence** : une nouvelle donnée arrive (une image, une question), le modèle utilise ce qu'il a appris pour produire un résultat (une classification, une réponse).",
      ]},
      { type: 'info', variant: 'analogie', title: 'Analogie', content: "L'entraînement, c'est comme étudier pour un examen : tu lis des centaines de cas, tu en déduis des règles. L'inférence, c'est le jour de l'examen : tu appliques ce que tu as appris à un problème que tu n'as jamais vu." },
    ]},
    { type: 'exercise', title: 'Exercice 1 — Identifier le type d\u2019IA', body: [
      { type: 'prose', content: 'Pour chaque exemple, identifie s\u2019il s\u2019agit d\u2019IA classique, de ML, de deep learning, ou d\u2019IA générative :' },
      { type: 'list', ordered: true, items: [
        'Un correcteur orthographique qui suit des règles grammaticales codées à la main.',
        'Un système de reconnaissance faciale sur un téléphone.',
        'ChatGPT qui rédige un email.',
        'Un algorithme de recommandation Netflix.',
        'Un filtre Instagram qui transforme ton visage.',
        'Un programme d\u2019échecs qui évalue des millions de coups possibles (comme Deep Blue).',
      ]},
    ]},

    { type: 'section', title: 'd. Utiliser l\u2019IA de façon responsable', blocks: [
      { type: 'prose', content: "L'IA générative est un outil puissant, mais il faut savoir **l'utiliser correctement** — pas en aveugle." },
      { type: 'cards', columns: 2, items: [
        { title: 'Les bonnes pratiques', text: "Vérifier les réponses (l'IA peut se tromper ou « halluciner »). Citer quand on s'en sert. Comprendre avant de copier. L'utiliser comme assistant, pas comme remplaçant de la réflexion." },
        { title: 'Les mauvaises pratiques', text: "Copier-coller sans comprendre. Faire confiance aveuglément. Soumettre des données personnelles ou confidentielles. Faire passer le travail de l'IA pour le sien sans le dire." },
      ]},
      { type: 'info', variant: 'attention', title: 'Pourquoi on interdit l\u2019IA en évaluation', content: "Ce n'est pas parce que l'IA est « mauvaise ». C'est parce qu'en évaluation, on mesure CE QUE TU sais faire, pas ce qu'un outil sait faire. En entreprise, tu utiliseras l'IA — mais on t'embauchera pour ta capacité à réfléchir, pas pour ta capacité à taper un prompt." },
    ]},
    { type: 'exercise', title: 'Exercice 2 — Tester les limites d\u2019une IA', body: [
      { type: 'list', ordered: true, items: [
        'Pose à une IA générative (ChatGPT, Claude...) une question factuelle que tu connais bien. Vérifie la réponse : est-elle correcte ? Complète ?',
        'Pose-lui une question piège ou absurde (ex. « Combien de pattes a un triangle ? »). Observe comment elle répond.',
        'Demande-lui de citer ses sources. Vérifie si les sources existent vraiment.',
        'Note tes observations : dans quels cas l\u2019IA est-elle fiable ? Pas fiable ?',
      ]},
    ]},

    { type: 'section', title: 'e. Les enjeux éthiques et sociaux', blocks: [
      { type: 'list', ordered: false, items: [
        "**Biais** : un modèle reflète les biais de ses données d'entraînement. Si les données sont biaisées (ex. sous-représentation de certaines populations), le modèle le sera aussi.",
        "**Vie privée** : les données d'entraînement peuvent contenir des informations personnelles. Le RGPD s'applique.",
        "**Désinformation** : l'IA générative peut créer de fausses images, faux textes, fausses vidéos (deepfakes) — très convaincants.",
        "**Impact environnemental** : entraîner un grand modèle consomme énormément d'énergie (équivalent de milliers de vols transatlantiques).",
        "**Impact sur l'emploi** : l'IA automatise certaines tâches, en transforme d'autres, en crée de nouvelles. Le métier de développeur évolue, il ne disparaît pas.",
      ]},
    ]},
    { type: 'exercise', title: 'Exercice 3 — Débat structuré', body: [
      { type: 'prose', content: 'En binôme ou en petit groupe, préparez un argumentaire de 5 minutes sur un des sujets suivants :' },
      { type: 'list', ordered: false, items: [
        '« L\u2019IA devrait-elle être utilisée pour la surveillance dans les lieux publics ? »',
        '« Les œuvres créées par IA devraient-elles être protégées par le droit d\u2019auteur ? »',
        '« Faut-il obliger les contenus générés par IA à être identifiés comme tels ? »',
      ]},
      { type: 'prose', content: 'Pour chaque sujet : 2-3 arguments pour, 2-3 arguments contre, et votre position personnelle argumentée.' },
    ]},

    { type: 'section', title: 'f. L\u2019IA dans le métier CIEL', blocks: [
      { type: 'prose', content: "En tant que futur professionnel du numérique, l'IA est ton outil, pas ton concurrent :" },
      { type: 'list', ordered: false, items: [
        "**Assistants de code** (Copilot, Claude Code) : accélèrent le développement, mais tu dois comprendre et vérifier le code produit.",
        "**Automatisation** : scripts IA pour la maintenance, le monitoring, la détection d'anomalies.",
        "**Cybersécurité** : détection d'intrusions par ML, analyse de logs automatisée.",
        "**Ton avantage** : savoir utiliser ces outils ET comprendre leurs limites. C'est la combinaison qui fait la valeur.",
      ]},
    ]},
    { type: 'exercise', title: 'Exercice 4 — Veille technologique (préparation de l\u2019exposé)', body: [
      { type: 'prose', content: 'Choisis un sujet lié à l\u2019IA pour ton exposé de veille technologique. Exemples :' },
      { type: 'list', ordered: false, items: [
        'L\u2019IA dans la cybersécurité (détection d\u2019intrusions, deepfakes).',
        'L\u2019IA générative et le droit d\u2019auteur.',
        'L\u2019impact environnemental de l\u2019IA.',
        'Les assistants de code IA : révolution ou béquille ?',
        'L\u2019IA dans la santé, les transports, l\u2019éducation...',
      ]},
      { type: 'prose', content: 'Prépare un dossier écrit (1-2 pages) + un exposé oral (5-10 min) avec 3-4 diapositives.' },
    ]},

    { type: 'section', title: 'Point cybersécurité', blocks: [
      { type: 'info', variant: 'attention', title: 'Deepfakes et désinformation', content: "L'IA peut générer des images, vidéos et textes indiscernables du vrai. En tant que professionnel, tu dois savoir que ça existe, et développer un réflexe de vérification : source, contexte, recoupement. La vigilance face à l'IA est une compétence de cybersécurité." },
    ]},
    { type: 'section', title: 'Mémo', blocks: [
      { type: 'list', ordered: false, items: [
        'IA = techniques pour réaliser des tâches « intelligentes ». Pas de conscience, pas de compréhension.',
        'Familles : IA classique (règles), ML (apprentissage sur données), DL (réseaux profonds), IA générative (création de contenu).',
        'Entraînement (données → modèle) → Inférence (modèle → résultat).',
        'Utilisation responsable : vérifier, comprendre, citer, ne pas soumettre de données sensibles.',
        'Enjeux : biais, vie privée, désinformation, environnement, emploi.',
        'Dans le métier CIEL : l\u2019IA est un outil à maîtriser, pas un concurrent.',
      ]},
    ]},
  ],
  tp: {
    kind: 'physical',
    title: 'Exposé de veille technologique IA',
    mission: "Préparer et présenter un exposé de veille technologique sur un sujet lié à l'IA, avec dossier écrit et présentation orale.",
    prerequis: ['Cours T-S7 suivi', 'Sujet validé par le professeur'],
    criteres: ['Dossier écrit structuré (1-2 pages)', 'Sources citées et vérifiées', 'Exposé oral clair (5-10 min)', 'Diapositives lisibles (peu de texte)', 'Capacité à répondre aux questions'],
    note: "L'exposé est noté (C01 communication + C03 veille). Barème : dossier 8 pts, oral 8 pts, réponses aux questions 4 pts.",
    steps: [
      { title: 'Recherche et rédaction du dossier', body: [
        { type: 'list', ordered: true, items: ['Choisis ton sujet et fais-le valider.', 'Recherche des sources fiables (pas uniquement Wikipedia).', 'Rédige un dossier structuré : introduction, développement (2-3 parties), conclusion, sources.'] },
      ], done: 'Le dossier est rédigé et les sources sont citées.' },
      { title: 'Préparation de l\u2019oral', body: [
        { type: 'list', ordered: true, items: ['Crée 3-4 diapositives (règle : peu de texte, des visuels).', 'Prépare ton discours (tu parles, les diapos illustrent).', 'Entraîne-toi à tenir 5-10 minutes sans lire.'] },
      ], done: 'La présentation est prête et chronométrée.' },
      { title: 'Présentation en classe', body: [
        { type: 'prose', content: 'Présente ton exposé devant la classe. Réponds aux questions du professeur et des camarades.' },
      ], done: 'L\u2019exposé est présenté et le dossier remis.' },
    ],
  },
};
