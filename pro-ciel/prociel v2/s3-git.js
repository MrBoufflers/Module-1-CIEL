// =============================================================================
// Séquence S3 — Git & GitHub : versionner son travail
// Niveau : Première · Durée : 3 h (cours + exercices guidés + présentation Classroom)
// Format : système de blocs (voir CAHIER-DES-CHARGES-V2.md).
//
// NOTES POUR CLAUDE CODE :
// - Cas particulier : cette séquence N'A NI TP AUTONOME NI ÉVALUATION SÉPARÉE.
//   La pratique de Git se fait en situation réelle à chaque TP des séquences
//   suivantes (S4 et au-delà). C09 est évaluée en continu à travers ces TP
//   (qualité et régularité des commits, propreté du dépôt).
// - Donc : pas de bloc `tp` dans cette séquence, pas d'evalInfo non plus
//   (l'onglet TP et l'onglet Éval doivent être MASQUÉS pour S3).
// - Les exercices guidés font partie intégrante du cours (ils ne sont pas un TP
//   au sens du système : ce sont des manipulations dirigées en groupe).
// - Le fond est REPRIS et RESSERRÉ depuis moduleGitContent.jsx (V1) : on retire
//   les commandes avancées (rebase, cherry-pick, amend), les Pull Requests, le
//   projet collaboratif en binôme. La notion de branche est ABORDÉE mais SANS
//   pratique de commande.
// =============================================================================

export const s3Git = {
  meta: {
    id: 'git',                     // URL : /premiere/git
    sequence: 'S3',
    niveau: 'premiere',
    title: 'Git & GitHub : versionner son travail',
    icon: 'git-branch',            // identifiant d'icône Tabler — PAS d'emoji
    duree: '3 h',
    theme: 'Outils & projet',
    filRouge:
      "Avant de produire des pages web (S4), on apprend à les sauvegarder, retrouver et " +
      "partager proprement avec Git et GitHub. Cet outil sera utilisé dès la séance suivante, " +
      "et toute l'année.",
    ref: { competences: ['C09', 'C01'], savoirs: ['S2.2', 'S5.2'] },
    cyber:
      "Ne jamais versionner de secrets (mots de passe, clés). Comprendre la différence entre " +
      "dépôt public et privé.",
    // PAS d'evalInfo : C09 est évaluée en continu sur les séquences suivantes,
    // pas par un contrôle spécifique à S3. L'onglet "Éval" doit être MASQUÉ.
  },

  // ---------------------------------------------------------------------------
  // COURS (les exercices guidés sont intégrés au cours via des blocs 'info'
  // de variant 'astuce' avec le titre « Exercice guidé »).
  // ---------------------------------------------------------------------------
  course: [
    {
      type: 'hero',
      title: 'Git & GitHub : versionner son travail',
      subtitle:
        "Une machine à remonter le temps pour ton code, et le cloud où tu stockes tes " +
        "sauvegardes et partages ton travail.",
    },

    {
      type: 'info',
      variant: 'attention',
      title: 'Particularité de cette séquence',
      content:
        "Cette séquence n'a **ni TP autonome ni évaluation séparée**. La pratique de Git se fera " +
        "en situation réelle dès la séquence suivante (S4) et à chaque TP de l'année. La " +
        "compétence C09 sera évaluée à travers ces TP (qualité et régularité des commits).",
    },

    {
      type: 'section',
      title: 'Introduction — Le chaos qu\u2019on veut éviter',
      blocks: [
        {
          type: 'prose',
          content:
            "Tu écris un devoir important. Au bout de quelques heures, ton dossier ressemble à ça : " +
            "`devoir.docx`, `devoir_v2.docx`, `devoir_final.docx`, `devoir_final_corrigé.docx`, " +
            "`devoir_VRAI_final.docx`. Tu n'oses plus rien supprimer, tu ne sais plus laquelle est " +
            "la bonne, et si tu casses quelque chose tu n'as aucun moyen de revenir en arrière.",
        },
        {
          type: 'prose',
          content:
            "**Cette situation, c'est exactement ce que Git résout.** Git est une *machine à " +
            "remonter le temps* pour ton code (et pour tous tes fichiers, en réalité). GitHub, lui, " +
            "est le cloud sur lequel tu déposes ces sauvegardes pour les partager et les retrouver " +
            "de n'importe où.",
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Objectifs',
          content:
            "À la fin de cette séquence, tu sauras : pourquoi versionner ton travail, faire la " +
            "différence entre Git et GitHub, utiliser les commandes essentielles pour sauvegarder " +
            "ton travail, mettre ton projet en ligne, et reconnaître ce qu'est une branche.",
        },
      ],
    },

    {
      type: 'section',
      title: 'Partie 1 — Git n\u2019est PAS GitHub',
      blocks: [
        { type: 'prose', content: "C'est la première chose à clarifier. Deux choses différentes mais complémentaires." },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'Git — l\u2019outil',
              text: "Un **logiciel** installé sur ton ordinateur. Son seul rôle : suivre les modifications de tes fichiers dans un dossier. Il fonctionne entièrement en local, sans Internet.",
            },
            {
              title: 'GitHub — le service en ligne',
              text: "Un **site web** qui héberge tes projets Git. Il utilise Git en coulisses, mais y ajoute des fonctionnalités sociales : collaboration, partage, suivi de bugs, hébergement public.",
            },
          ],
        },
        {
          type: 'info',
          variant: 'analogie',
          title: 'Analogie',
          content:
            "Git, c'est **Microsoft Word** : un logiciel sur ton PC qui gère tes documents. GitHub, " +
            "c'est **Google Docs** : un site en ligne pour stocker et collaborer.",
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'À retenir',
          content:
            "Git fait le travail technique sur ta machine. GitHub est l'un des sites où l'on dépose " +
            "les projets Git (il en existe d'autres : GitLab, Bitbucket). On peut très bien utiliser " +
            "Git sans GitHub, mais aujourd'hui les deux vont presque toujours ensemble.",
        },
      ],
    },

    {
      type: 'section',
      title: 'Partie 2 — Le vocabulaire essentiel',
      blocks: [
        { type: 'prose', content: "Cinq mots à connaître pour ne plus être perdu :" },
        {
          type: 'table',
          headers: ['Mot', 'Analogie', "Ce que c'est"],
          rows: [
            ['Repository (dépôt)', 'Le dossier du projet', "Le dossier qui contient ton projet + tout son historique de modifications (caché dans `.git`)."],
            ['Commit', 'Un point de sauvegarde', "Une « photo » de l'état de tes fichiers à un instant T, avec un message qui explique ce qui a changé."],
            ['Push', 'Envoyer son travail', "Envoyer tes commits depuis ton ordinateur vers GitHub."],
            ['Pull', 'Récupérer le travail des autres', "Faire le contraire : récupérer ce qu'il y a sur GitHub vers ton ordinateur."],
            ['Branch (branche)', 'Un univers parallèle', "Une copie séparée du projet où tu peux travailler sans casser la version principale. *(Vu plus bas.)*"],
          ],
        },
      ],
    },

    {
      type: 'section',
      title: 'Partie 3 — Le workflow quotidien (à retenir absolument)',
      blocks: [
        {
          type: 'prose',
          content: "Tout le cycle de Git tient en **4 étapes**, que tu refais des dizaines de fois par jour quand tu travailles :",
        },
        {
          type: 'cards',
          columns: 4,
          items: [
            { title: '1. Modifier', text: "Tu codes, tu écris, tu corriges." },
            { title: '2. Sélectionner', text: "`git add .` — Prépare les changements à sauvegarder." },
            { title: '3. Commit', text: "`git commit -m \"Message clair\"` — Point de sauvegarde local." },
            { title: '4. Push', text: "`git push` — Envoie sur GitHub pour partager/sauvegarder." },
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Le réflexe matinal',
          content:
            "Avant de commencer à travailler (ou après une longue pause), fais toujours un " +
            "`git pull` pour récupérer les dernières modifications. Sinon tu risques de travailler " +
            "sur une vieille version.",
        },
      ],
    },

    {
      type: 'section',
      title: 'Exercice guidé n° 1 — Installer et configurer Git',
      blocks: [
        {
          type: 'info',
          variant: 'astuce',
          title: 'Exercice guidé · ~15-20 min',
          content: "On le fait ensemble au tableau, chacun reproduit sur son poste.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Vérifier que Git est installé** : ouvrir le terminal de VS Code, taper `git --version`. Une version doit s'afficher.",
            "**Se présenter à Git** (à faire une seule fois sur la machine) :",
          ],
        },
        {
          type: 'code',
          language: 'bash',
          code: 'git config --global user.name "Prénom Nom"\ngit config --global user.email "ton.email@exemple.fr"',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Vérifier la configuration** : `git config --list` doit afficher ton nom et ton email.",
          ],
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Pourquoi ces deux infos ?',
          content:
            "Chaque commit est signé avec ton nom : on sait qui a fait quoi dans un projet. " +
            "Essentiel en travail d'équipe.",
        },
      ],
    },

    {
      type: 'section',
      title: 'Exercice guidé n° 2 — Mon premier dépôt local',
      blocks: [
        {
          type: 'info',
          variant: 'astuce',
          title: 'Exercice guidé · ~25-30 min',
          content:
            "On crée un mini-projet et on le versionne. Cet exercice est le squelette de ce que tu " +
            "feras pour de vrai dès S4.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Créer un dossier** `mon-premier-depot` dans Documents et l'ouvrir dans VS Code.",
            "**Initialiser Git** : `git init` dans le terminal. Un dossier caché `.git` est créé.",
            "**Créer un premier fichier** : `bonjour.txt`, écrire « Bonjour Git ! » dedans, enregistrer.",
            "**Voir l'état du dépôt** : `git status` montre que `bonjour.txt` est « non suivi ».",
            "**Ajouter au prochain commit** : `git add .` (le `.` = tous les fichiers du dossier).",
            "**Faire le premier commit** : `git commit -m \"Premier commit : ajout du fichier bonjour\"`.",
            "**Modifier puis re-committer** : ajouter une 2e ligne, refaire `git add .` puis `git commit -m \"Ajout d'une phrase\"`.",
            "**Voir l'historique** : `git log --oneline` affiche tes commits.",
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Un bon message de commit',
          content:
            "Un message comme `\"truc\"` ne sert à rien. Un bon message dit *ce que le commit " +
            "change*, à l'impératif : `\"Ajout du titre principal\"`, `\"Correction du bug " +
            "d'affichage du menu\"`. C'est ce que tu liras dans 6 mois quand tu chercheras " +
            "pourquoi tu as fait un changement.",
        },
      ],
    },

    {
      type: 'section',
      title: 'Partie 4 — La notion de branche (sans pratique aujourd\u2019hui)',
      blocks: [
        {
          type: 'prose',
          content:
            "Une **branche**, c'est comme un *univers parallèle* de ton projet. Par défaut, tu " +
            "travailles sur la branche `main`. Mais tu pourrais créer une branche " +
            "`essai-nouvelle-fonctionnalite` pour tester quelque chose : tes modifications y sont " +
            "**isolées**, le `main` reste intact. Si l'essai est concluant, on **fusionne** la " +
            "branche dans le `main`. Sinon, on jette la branche, sans dommage.",
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Pourquoi en parler aujourd\u2019hui sans pratiquer ?',
          content:
            "Parce que tu vas voir le mot « branch » partout : sur GitHub, dans VS Code, dans les " +
            "commandes. Il faut au moins savoir ce que c'est. On créera et fusionnera des branches " +
            "plus tard, en Terminale, quand on en aura vraiment besoin (maintenance d'application " +
            "déployée). **Pour l'instant, on travaille sur `main`, et ça suffit largement.**",
        },
      ],
    },

    {
      type: 'section',
      title: 'Partie 5 — Mettre son projet en ligne sur GitHub',
      blocks: [
        {
          type: 'prose',
          content:
            "Le dépôt local, c'est bien. Mais il vit sur ta seule machine : si elle tombe en panne, " +
            "tout est perdu. **GitHub** est un site qui héberge des dépôts Git en ligne — " +
            "sauvegarde, accès partout, partage facile.",
        },
      ],
    },

    {
      type: 'section',
      title: 'Exercice guidé n° 3 — Compte GitHub et premier dépôt en ligne',
      blocks: [
        {
          type: 'info',
          variant: 'astuce',
          title: 'Exercice guidé · ~30-40 min',
          content: "Création du compte (si pas déjà fait), création d'un dépôt distant et premier push.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Créer un compte** sur github.com (si ce n'est pas déjà fait). *Note ton identifiant et ton mot de passe sur une fiche que tu gardes.*",
            "**Créer un dépôt vide sur GitHub** : bouton « New » → nom `mon-premier-depot` → laisser **privé** par défaut → créer (ne pas cocher « Add a README », on a déjà du contenu local).",
            "**Lier le dépôt local au dépôt distant** (commandes affichées par GitHub après création) :",
          ],
        },
        {
          type: 'code',
          language: 'bash',
          code: 'git remote add origin <URL_du_depot>\ngit branch -M main\ngit push -u origin main',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Vérifier** : recharger la page du dépôt sur GitHub, tes fichiers doivent y être.",
          ],
        },
        {
          type: 'info',
          variant: 'attention',
          title: 'Cybersécurité — Public ou privé ?',
          content:
            "Sur GitHub, un dépôt peut être **public** (n'importe qui peut le voir) ou **privé** " +
            "(seulement toi et les personnes invitées). **Pour les travaux scolaires, on reste en " +
            "privé.** Et surtout : **on ne met jamais de mot de passe, de clé API, ou de donnée " +
            "personnelle dans un dépôt** — même privé. Une fois un secret poussé, il reste dans " +
            "l'historique même si on l'efface après.",
        },
      ],
    },

    {
      type: 'section',
      title: 'Partie 6 — Présentation de GitHub Classroom',
      blocks: [
        {
          type: 'prose',
          content:
            "Pour les TP de cours, on n'utilisera pas des dépôts créés à la main : on passera par " +
            "**GitHub Classroom**, un outil de GitHub fait exprès pour les enseignants.",
        },
        {
          type: 'list',
          ordered: false,
          items: [
            "Le professeur publie un « assignment » (un TP) et partage un lien d'invitation.",
            "L'élève clique sur le lien → **son dépôt personnel est créé automatiquement** à partir d'un template.",
            "L'élève code dans son dépôt, fait ses `add` / `commit` / `push` comme appris aujourd'hui.",
          ],
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Le workflow de validation des TP (à partir de S4)',
          content:
            "1. Tu travailles sur ton dépôt par étapes (chaque TP est découpé en étapes sur le site). " +
            "2. Quand tu finis une étape, tu **push**, et tu **préviens le professeur**. " +
            "3. Le professeur regarde ton dépôt sur Classroom et te donne **le feu vert** " +
            "(ou vient t'expliquer ce qui ne va pas). " +
            "4. Tu passes à l'étape suivante.",
        },
        {
          type: 'info',
          variant: 'astuce',
          content:
            "C'est exactement le fonctionnement d'une équipe de développement professionnelle : on " +
            "travaille par petits incréments, on demande une « revue » à un collègue avant de " +
            "continuer. Tu es donc déjà dans une vraie posture de pro.",
        },
        {
          type: 'prose',
          content:
            "**En fin de séance**, on suit ensemble le lien d'invitation du premier assignment, on " +
            "vérifie que ton dépôt personnel s'est bien créé, et on le clone sur ta machine avec " +
            "`git clone <URL>` — pour être prêt à attaquer S4 la séance suivante.",
        },
      ],
    },

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
            "À partir de S4 : tous les TP passent par **GitHub Classroom**. Tu pousses, je regarde, je valide → tu continues.",
          ],
        },
      ],
    },
  ],

  // PAS de bloc `tp` : la pratique réelle commence en S4. Le composant d'affichage
  // doit MASQUER l'onglet TP pour cette séquence.
};
