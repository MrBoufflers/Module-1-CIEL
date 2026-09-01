export const ts5Production = {
  meta: {
    id: 'production', sequence: 'S5', niveau: 'terminale',
    title: 'Mettre en production : serveur web & déploiement', icon: 'cloud-upload', duree: '9 h',
    theme: 'Infrastructure & déploiement',
    filRouge: "L'app tourne dans Docker sur ta machine. On la met en ligne sur un vrai serveur accessible au monde. C'est la mise en production : le moment où le code devient un service.",
    ref: { competences: ['C09', 'C10', 'C04'], savoirs: ['S2.1', 'S5.2'] },
    cyber: "HTTPS en production, pare-feu, mises à jour, principe du moindre privilège.",
    evalInfo: { format: 'Évaluation pratique (déployer une app conteneurisée)', duree: '3 h', competence: 'C09 (Application) · C10 (Application)', ressourcesAutorisees: ['Documentation en ligne', 'Le cours S5'], note: "Évaluation réalisée en classe." },
  },
  course: [
    { type: 'hero', title: 'Mise en production', subtitle: "Le code qui ne tourne que sur ta machine n'a aucune valeur. La mise en production, c'est le passage de l'artisanat au service." },
    { type: 'info', variant: 'astuce', title: 'Objectifs', content: "Comprendre l'infrastructure de production (serveur, nom de domaine, DNS), déployer une app conteneurisée, configurer HTTPS, et mettre en place un workflow de déploiement." },
    { type: 'section', title: 'a. Qu\u2019est-ce que la production ?', blocks: [
      { type: 'prose', content: "La **production** (ou « prod »), c'est l'environnement final où l'application est accessible aux vrais utilisateurs. En face, il y a le **développement** (ta machine) et éventuellement un environnement de **test/staging** (intermédiaire). Chacun a ses règles." },
      { type: 'table', headers: ['', 'Développement', 'Production'],
        rows: [
          ['Qui y accède', 'Toi seul', 'Le monde entier'],
          ['Tolérance aux erreurs', 'Totale (on casse et on répare)', 'Zéro (une erreur = des utilisateurs impactés)'],
          ['HTTPS', 'Optionnel', 'Obligatoire'],
          ['Données', 'Données de test', 'Données réelles (à protéger)'],
          ['Monitoring', 'Console.log', 'Logs structurés, alertes, métriques'],
        ] },
    ]},
    { type: 'section', title: 'b. L\u2019infrastructure de base', blocks: [
      { type: 'cards', columns: 3, items: [
        { title: 'Le serveur', text: "Une machine (physique ou virtuelle) accessible en permanence sur Internet. On la loue chez un hébergeur (OVH, Scaleway, DigitalOcean...)." },
        { title: 'Le nom de domaine', text: "L'adresse lisible (ex. mon-app.fr). On l'achète chez un registrar (OVH, Gandi...). Le DNS traduit ce nom en adresse IP." },
        { title: 'Le reverse proxy', text: "Un serveur intermédiaire (Nginx, Caddy) qui reçoit les requêtes HTTPS et les redirige vers ton conteneur Docker. Il gère aussi les certificats SSL." },
      ]},
    ]},
    { type: 'exercise', title: 'Exercice 1 — Schéma d\u2019infrastructure', body: [
      { type: 'list', ordered: true, items: [
        'Dessine le schéma de l\u2019infrastructure de production de ton app : utilisateur → DNS → serveur → reverse proxy (Nginx) → conteneur Docker (API) → conteneur BDD.',
        'Indique où se place le HTTPS dans ce schéma.',
        'Compare avec le schéma de développement (utilisateur → localhost → node server.js).',
      ]},
    ]},
    { type: 'section', title: 'c. Déployer avec Docker', blocks: [
      { type: 'prose', content: "Le workflow de déploiement simplifié : tu pousses ton code sur GitHub, tu te connectes au serveur (SSH), tu récupères le code (`git pull`), et tu lances `docker compose up -d`. L'app est en ligne." },
      { type: 'code', language: 'bash', title: 'Workflow de déploiement', code: '# Sur le serveur distant (via SSH)\nssh user@mon-serveur.fr\n\n# Récupérer le code\ncd /opt/mon-app\ngit pull origin main\n\n# Reconstruire et relancer\ndocker compose down\ndocker compose up -d --build\n\n# Vérifier\ndocker compose ps\ndocker compose logs -f api' },
    ]},
    { type: 'exercise', title: 'Exercice 2 — Simuler un déploiement', body: [
      { type: 'list', ordered: true, items: [
        'Si un serveur de test est disponible : connecte-toi en SSH, clone ton repo, lance `docker compose up -d`.',
        'Sinon : simule sur ta machine en changeant le port (ex. 8080) et en accédant depuis un autre appareil du réseau local.',
        'Vérifie que l\u2019app est accessible depuis l\u2019extérieur de ta machine.',
      ]},
    ]},
    { type: 'section', title: 'd. HTTPS en production', blocks: [
      { type: 'prose', content: "En production, HTTPS est **obligatoire**. Let's Encrypt fournit des certificats SSL gratuits. Un reverse proxy comme **Caddy** ou **Nginx + Certbot** gère automatiquement le renouvellement." },
    ]},
    { type: 'section', title: 'e. Les branches Git en production', blocks: [
      { type: 'prose', content: "En production, on travaille avec des **branches** (concept vu en S3 mais pas pratiqué). La branche `main` représente le code en production. On développe sur des branches séparées (feature branches), on fusionne dans `main` après vérification." },
      { type: 'code', language: 'bash', title: 'Workflow branches', code: '# Créer une branche pour une fonctionnalité\ngit checkout -b feature/ajout-recherche\n\n# Travailler, committer\ngit add . && git commit -m "feat: recherche par nom"\n\n# Revenir sur main et fusionner\ngit checkout main\ngit merge feature/ajout-recherche\ngit push' },
    ]},
    { type: 'exercise', title: 'Exercice 3 — Travailler avec des branches', body: [
      { type: 'list', ordered: true, items: [
        'Crée une branche `feature/test` dans ton projet.',
        'Fais un petit changement et un commit dessus.',
        'Reviens sur `main`, fusionne, et pousse.',
        'Vérifie l\u2019historique avec `git log --oneline --graph`.',
      ]},
    ]},
    { type: 'section', title: 'Point cybersécurité', blocks: [
      { type: 'info', variant: 'attention', title: 'Sécurité en production', content: "HTTPS obligatoire. Pare-feu activé (seuls les ports 80/443 ouverts). Mises à jour régulières du serveur et des images Docker. Principe du moindre privilège : chaque service a uniquement les droits dont il a besoin, rien de plus." },
    ]},
    { type: 'section', title: 'Mémo', blocks: [
      { type: 'list', ordered: false, items: [
        'Production = accessible au monde, zéro tolérance aux erreurs, HTTPS obligatoire.',
        'Infrastructure : serveur + nom de domaine + DNS + reverse proxy + conteneurs.',
        'Déploiement : git pull → docker compose up -d --build.',
        'Branches : main = production, feature branches pour développer.',
        'Sécurité : HTTPS, pare-feu, mises à jour, moindre privilège.',
      ]},
    ]},
  ],
  tp: {
    kind: 'digital',
    title: 'Déployer son projet',
    mission: "Mettre en production l'application conteneurisée sur un serveur accessible.",
    prerequis: ['Cours T-S5 suivi', 'Docker Compose fonctionnel (T-S4)', 'Accès au serveur de test (si disponible)'],
    criteres: ['App accessible depuis l\u2019extérieur', 'HTTPS configuré (ou justifié si impossible)', 'Workflow branches utilisé', 'Commits réguliers'],
    bonus: "Mettre en place un déploiement automatisé (GitHub Actions : à chaque push sur main, le serveur se met à jour).",
    steps: [
      { title: 'Préparer le déploiement', body: [
        { type: 'list', ordered: true, items: ['Vérifie que `docker compose up` fonctionne localement.', 'Crée une branche `feature/deploy-config` pour les ajustements de production.', 'Ajoute un fichier `.env.example` avec les variables nécessaires (sans les vraies valeurs).'] },
      ], done: 'Le projet est prêt à être déployé.', validation: { commit: 'git commit -m "chore: config de production"' } },
      { title: 'Déployer et vérifier', body: [
        { type: 'list', ordered: true, items: ['Déploie sur le serveur de test (ou simule localement sur un port différent).', 'Vérifie l\u2019accès depuis un autre appareil.', 'Fusionne la branche dans main et pousse.'] },
      ], done: 'L\u2019app est accessible en production.', validation: { commit: 'git commit -m "feat: déploiement production" && git push' } },
    ],
  },
};
