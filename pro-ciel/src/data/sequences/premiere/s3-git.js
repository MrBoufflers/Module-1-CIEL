// =============================================================================
// Séquence S3 — Git & GitHub : versionner son travail
// Niveau : Première · Durée : 3 h (cours + exercices guidés + présentation Classroom)
// Format : système de blocs (voir CAHIER-DES-CHARGES-V2.md).
//
// NOTES :
// - Pas de TP autonome ni d'évaluation séparés : la pratique de Git se fait
//   en situation réelle à chaque séquence suivante (S4+).
// - C09 sera évaluée à chaque TP suivant (qualité et régularité des commits,
//   propreté du dépôt).
// - Point cybersécurité en filigrane : ne jamais versionner de secrets.
// =============================================================================

export const s3Git = {
  meta: {
    id: 'git',
    sequence: 'S3',
    niveau: 'premiere',
    title: 'Git & GitHub : versionner son travail',
    icon: 'git-branch',
    duree: '3 h',
    theme: 'Outils & projet',
    filRouge:
      "En S2 on a appris à produire des documents pro. Avant de construire le web (S4), " +
      "on apprend ici à sauvegarder, retrouver et partager proprement son travail avec " +
      "Git et GitHub. Cet outil sera utilisé dès la séance suivante — et toute l'année.",
    ref: { competences: ['C09', 'C01'], savoirs: ['S1.2'] },
    cyber:
      "Ne jamais versionner de secrets (mots de passe, clés API). Comprendre la " +
      "différence entre dépôt public et privé.",
  },

  // ---------------------------------------------------------------------------
  // COURS + EXERCICES GUIDÉS
  // ---------------------------------------------------------------------------
  course: [
    {
      type: 'hero',
      title: 'Git & GitHub : versionner son travail',
      subtitle:
        "Apprends à sauvegarder ton code proprement, à revenir en arrière, et à " +
        "partager ton travail. Git sera ton outil quotidien dès la prochaine séance.",
    },

    {
      type: 'info',
      variant: 'astuce',
      title: 'Objectifs de la séquence',
      content:
        "Comprendre pourquoi versionner son travail. Faire la différence entre **Git** " +
        "et **GitHub**. Utiliser les commandes essentielles pour sauvegarder et " +
        "partager un projet. Reconnaître ce qu'est une branche.",
    },

    {
      type: 'info',
      variant: 'attention',
      title: 'Particularité de cette séquence',
      content:
        "**Pas de TP autonome ni d'évaluation séparés.** La pratique de Git se fera " +
        "**en situation réelle** à chaque séquence suivante (S4, S5…). C'est aussi à " +
        "chaque TP qui suit que la compétence C09 sera évaluée (qualité et régularité " +
        "des commits, propreté du dépôt).",
    },

    // ==================== INTRODUCTION ====================
    {
      type: 'section',
      title: "Introduction — Le chaos qu'on veut éviter",
      blocks: [
        {
          type: 'prose',
          content:
            "Tu écris un devoir important. Au bout de quelques heures, ton dossier " +
            "ressemble à ça : `devoir.docx`, `devoir_v2.docx`, `devoir_final.docx`, " +
            "`devoir_final_corrigé.docx`, `devoir_VRAI_final.docx`. Tu n'oses plus " +
            "rien supprimer, tu ne sais plus laquelle est la bonne, et si tu casses " +
            "quelque chose tu n'as aucun moyen de revenir en arrière.",
        },
        {
          type: 'prose',
          content:
            "**Cette situation, c'est exactement ce que Git résout.** Git est une " +
            "*machine à remonter le temps* pour ton code (et pour tous tes fichiers). " +
            "GitHub, lui, est le cloud sur lequel tu déposes ces sauvegardes pour les " +
            "partager et les retrouver de n'importe où.",
        },
      ],
    },

    // ==================== PARTIE 1 ====================
    {
      type: 'section',
      title: "Partie 1 — Git n'est PAS GitHub",
      blocks: [
        {
          type: 'prose',
          content:
            "C'est la première chose à clarifier. Ce sont deux choses différentes " +
            "mais complémentaires.",
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: "Git : l'outil",
              content:
                "Un **logiciel** installé sur ton ordinateur. Son seul rôle : suivre " +
                "les modifications de tes fichiers dans un dossier. Il fonctionne " +
                "entièrement **en local**, sans Internet.",
            },
            {
              title: 'GitHub : le service en ligne',
              content:
                "Un **site web** qui héberge tes projets Git. Il y ajoute des " +
                "fonctionnalités sociales : collaboration, partage, suivi de bugs, " +
                "hébergement public.",
            },
          ],
        },
        {
          type: 'info',
          variant: 'analogie',
          title: 'Analogie',
          content:
            "**Git**, c'est **Microsoft Word** : il est sur ton PC et gère tes documents. " +
            "**GitHub**, c'est **Google Docs** : c'est en ligne, ça permet de stocker ses " +
            "documents et de travailler à plusieurs dessus.",
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'À retenir',
          content:
            "Git fait le travail technique sur ta machine. GitHub est l'un des sites où " +
            "l'on dépose les projets Git (il en existe d'autres : GitLab, Bitbucket…). " +
            "On peut très bien utiliser Git sans GitHub, mais aujourd'hui les deux vont " +
            "presque toujours ensemble.",
        },
      ],
    },

    // ==================== PARTIE 2 ====================
    {
      type: 'section',
      title: 'Partie 2 — Le vocabulaire essentiel',
      blocks: [
        {
          type: 'prose',
          content: "Cinq mots à connaître pour ne plus être perdu :",
        },
        {
          type: 'table',
          headers: ['Mot', 'Analogie', "Ce que c'est"],
          rows: [
            [
              '**Repository (dépôt)**',
              'Le dossier du projet',
              "Le dossier qui contient ton projet + tout son historique de modifications (caché dans un sous-dossier `.git`).",
            ],
            [
              '**Commit**',
              'Un point de sauvegarde',
              "Une « photo » de l'état de tes fichiers à un instant T, avec un message qui explique ce qui a changé.",
            ],
            [
              '**Push**',
              'Envoyer son travail',
              "Envoyer tes commits depuis ton ordinateur vers GitHub.",
            ],
            [
              '**Pull**',
              'Récupérer le travail',
              "Faire le contraire : récupérer ce qu'il y a sur GitHub vers ton ordinateur.",
            ],
            [
              '**Branch (branche)**',
              'Un univers parallèle',
              "Une copie séparée du projet où tu peux travailler sans casser la version principale.",
            ],
          ],
        },
      ],
    },

    // ==================== PARTIE 3 ====================
    {
      type: 'section',
      title: 'Partie 3 — Le workflow quotidien',
      blocks: [
        {
          type: 'prose',
          content:
            "Tout le cycle de Git tient en **4 étapes**, que tu refais des dizaines " +
            "de fois par jour quand tu travailles :",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Tu modifies tes fichiers** (tu codes, tu écris, tu corriges).",
            "**Tu sélectionnes les changements à sauvegarder** : `git add .`",
            "**Tu fais un commit** (un point de sauvegarde local) : `git commit -m \"Message clair\"`",
            "**Tu pousses sur GitHub** pour partager/sauvegarder en ligne : `git push`",
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Le réflexe matinal',
          content:
            "Avant de commencer à travailler (ou après une longue pause), fais toujours " +
            "un `git pull` pour récupérer les dernières modifications. Sinon tu risques de " +
            "travailler sur une vieille version.",
        },
      ],
    },

    // ==================== EXERCICE GUIDÉ 1 ====================
    {
      type: 'section',
      title: 'Exercice guidé 1 — Installer et configurer Git',
      blocks: [
        {
          type: 'prose',
          content: "Pour démarrer une bonne fois pour toutes :",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Vérifier que Git est installé** : ouvre le terminal de VS Code, tape `git --version`. Une version doit s'afficher.",
            "**Se présenter à Git** (à faire une seule fois sur la machine) :",
          ],
        },
        {
          type: 'code',
          language: 'bash',
          title: 'Configuration initiale',
          code:
            'git config --global user.name "Prénom Nom"\n' +
            'git config --global user.email "ton.email@exemple.fr"',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            "**Vérifier la configuration** : `git config --list` doit afficher ton nom et ton email.",
          ],
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Pourquoi ces deux infos ?',
          content:
            "Chaque commit est signé avec ton nom : tu sais qui a fait quoi dans un " +
            "projet. C'est essentiel en travail d'équipe.",
        },
      ],
    },

    // ==================== EXERCICE GUIDÉ 2 ====================
    {
      type: 'section',
      title: 'Exercice guidé 2 — Mon premier dépôt local',
      blocks: [
        {
          type: 'prose',
          content:
            "On crée un mini-projet et on le versionne. Cet exercice est le squelette " +
            "de ce que tu feras pour de vrai dès S4.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Créer un dossier** `mon-premier-depot` dans Documents et l'ouvrir dans VS Code.",
            "**Initialiser Git** : dans le terminal, tape `git init`. Un dossier caché `.git` est créé : ton dépôt est né.",
            "**Créer un premier fichier** : `bonjour.txt`, écris « Bonjour Git ! » dedans, enregistre.",
            "**Voir l'état du dépôt** : `git status` montre que `bonjour.txt` est « non suivi ».",
            "**Ajouter au prochain commit** : `git add .` (le `.` = tous les fichiers du dossier).",
            "**Faire le premier commit** :",
          ],
        },
        {
          type: 'code',
          language: 'bash',
          title: 'Premier commit',
          code: 'git commit -m "Premier commit : ajout du fichier bonjour"',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            "**Modifier puis re-committer** : ajoute une 2e ligne dans `bonjour.txt`, refais `git add .` puis `git commit -m \"Ajout d'une phrase\"`. Tu as deux points de sauvegarde.",
            "**Voir l'historique** : `git log --oneline` affiche tes commits.",
          ],
        },
        {
          type: 'info',
          variant: 'attention',
          title: 'Un bon message de commit',
          content:
            "Un message comme `\"truc\"` ne sert à rien. Un bon message dit *ce que le " +
            "commit change*, à l'impératif : `\"Ajout du titre principal\"`, " +
            "`\"Correction du bug d'affichage du menu\"`. C'est ce que tu liras dans " +
            "6 mois quand tu chercheras pourquoi tu as fait un changement.",
        },
      ],
    },

    // ==================== PARTIE 4 ====================
    {
      type: 'section',
      title: 'Partie 4 — La notion de branche',
      blocks: [
        {
          type: 'prose',
          content:
            "Une **branche**, c'est comme un *univers parallèle* de ton projet. Par " +
            "défaut, tu travailles sur la branche `main`. Mais tu pourrais créer une " +
            "branche `essai-nouvelle-fonctionnalite` pour tester quelque chose : tes " +
            "modifications y sont **isolées**, le `main` reste intact. Si l'essai est " +
            "concluant, on **fusionne** la branche dans le `main`. Sinon, on jette la " +
            "branche, sans dommage.",
        },
        {
          type: 'info',
          variant: 'analogie',
          title: 'Pourquoi en parler sans pratiquer ?',
          content:
            "Tu vas voir le mot « branch » partout : sur GitHub, dans VS Code, dans " +
            "les commandes. Il faut au moins savoir ce que c'est. On créera et " +
            "fusionnera des branches plus tard, en Terminale, quand on en aura vraiment " +
            "besoin (maintenance d'application déployée).",
        },
        {
          type: 'info',
          variant: 'definition',
          title: "Pour l'instant",
          content:
            "On travaille sur `main`, et ça suffit largement.",
        },
      ],
    },

    // ==================== PARTIE 5 ====================
    {
      type: 'section',
      title: 'Partie 5 — Mettre son projet en ligne sur GitHub',
      blocks: [
        {
          type: 'prose',
          content:
            "Le dépôt local, c'est bien. Mais il vit sur ta seule machine : si elle " +
            "tombe en panne, tout est perdu. **GitHub** est un site qui héberge des " +
            "dépôts Git en ligne — sauvegarde, accès partout, partage facile.",
        },
      ],
    },

    // ==================== EXERCICE GUIDÉ 3 ====================
    {
      type: 'section',
      title: 'Exercice guidé 3 — Premier dépôt sur GitHub',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            "**Créer un compte** sur github.com (si ce n'est pas déjà fait). *Note ton identifiant et ton mot de passe sur une fiche que tu gardes.*",
            "**Créer un dépôt vide sur GitHub** : bouton « New » → nom `mon-premier-depot` → laisser **privé** par défaut → créer (ne pas cocher « Add a README »).",
            "**Lier le dépôt local au dépôt distant** (commande affichée par GitHub après création) :",
          ],
        },
        {
          type: 'code',
          language: 'bash',
          title: 'Lier et pousser vers GitHub',
          code:
            'git remote add origin <URL_du_depot>\n' +
            'git branch -M main\n' +
            'git push -u origin main',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            "**Vérifier** : recharge la page du dépôt sur GitHub, tes fichiers doivent y être.",
          ],
        },
        {
          type: 'info',
          variant: 'attention',
          title: 'Cybersécurité — Public ou privé ?',
          content:
            "Sur GitHub, un dépôt peut être **public** (n'importe qui peut le voir) ou " +
            "**privé** (seulement toi et les personnes invitées). **Pour les travaux " +
            "scolaires, on reste en privé** par défaut. Et surtout : **on ne met jamais " +
            "de mot de passe, de clé API, ou de donnée personnelle dans un dépôt** — " +
            "même privé. Une fois un secret poussé, il reste dans l'historique même si " +
            "on l'efface après.",
        },
      ],
    },

    // ==================== PARTIE 6 ====================
    {
      type: 'section',
      title: 'Partie 6 — GitHub Classroom',
      blocks: [
        {
          type: 'prose',
          content:
            "Pour les TP de cours, on n'utilisera pas des dépôts créés à la main : " +
            "on passera par **GitHub Classroom**. C'est un outil de GitHub fait exprès " +
            "pour les enseignants.",
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Comment ça marche, côté élève',
          content:
            "Le professeur publie un « assignment » (un TP) et partage un lien " +
            "d'invitation. L'élève clique sur le lien → **son dépôt personnel est " +
            "créé automatiquement** à partir d'un template préparé par le prof. " +
            "L'élève code dans son dépôt, fait ses `add` / `commit` / `push` " +
            "comme appris aujourd'hui.",
        },
        {
          type: 'prose',
          content: "**Le workflow de validation des TP (à partir de S4) :**",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "Tu travailles sur ton dépôt par étapes (chaque TP est découpé en plusieurs étapes sur le site).",
            "Quand tu finis une étape, tu **push**, et tu **préviens le professeur**.",
            "Le professeur regarde ton dépôt sur Classroom et te donne **le feu vert** (ou vient t'expliquer ce qui ne va pas).",
            "Tu passes à l'étape suivante.",
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Une vraie posture de pro',
          content:
            "C'est exactement le fonctionnement d'une équipe de développement " +
            "professionnelle : on travaille par petits incréments, on demande une " +
            "« revue » à un collègue avant de continuer. Tu es donc déjà dans une " +
            "vraie posture de pro.",
        },
        {
          type: 'prose',
          content:
            "**En fin de séance :** on suivra le lien d'invitation du premier " +
            "assignment, on vérifiera que ton dépôt personnel s'est bien créé, et " +
            "on le clonera sur ta machine avec `git clone <URL>` — pour être prêt " +
            "à attaquer S4 la séance suivante.",
        },
      ],
    },

    // ==================== MÉMO ====================
    {
      type: 'section',
      title: 'Mémo de fin de séquence',
      blocks: [
        {
          type: 'list',
          ordered: false,
          items: [
            "**Git** = outil local pour versionner. **GitHub** = service en ligne pour héberger et partager.",
            "Le **workflow quotidien** : modifier → `git add .` → `git commit -m \"...\"` → `git push`. Et le matin : `git pull`.",
            "Un **commit** = une sauvegarde avec un message clair (à l'impératif).",
            "Une **branche** = un univers parallèle (on en reparlera en Terminale).",
            "**Sécurité** : jamais de secrets dans un dépôt ; pour les TP, on reste en privé.",
            "À partir de S4 : tous les TP passent par **GitHub Classroom**. Tu pousses, le prof regarde, il valide → tu continues.",
          ],
        },
      ],
    },
  ],
};
