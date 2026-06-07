export const ts6Maintenance = {
  meta: {
    id: 'maintenance', sequence: 'S6', niveau: 'terminale',
    title: 'Maintenir & faire évoluer en production', icon: 'tool', duree: '9 h',
    theme: 'Maintenance & évolution',
    filRouge: "L'app est en production (S5). Mais un logiciel ne s'arrête jamais : bugs à corriger, fonctionnalités à ajouter, performances à surveiller, sécurité à maintenir. C'est le quotidien du métier.",
    ref: { competences: ['C08', 'C09', 'C10'], savoirs: ['S2.2', 'S5.2'] },
    cyber: "Veille sécurité, gestion des vulnérabilités, mises à jour critiques.",
    evalInfo: { format: 'Évaluation pratique (corriger un bug + ajouter une fonctionnalité sur un code existant)', duree: '3 h', competence: 'C08 (Application) · C10 (Application)', ressourcesAutorisees: ['Documentation en ligne', 'Le cours S6'], note: "Évaluation réalisée en classe." },
  },
  course: [
    { type: 'hero', title: 'Maintenir & faire évoluer', subtitle: "80% du temps d'un développeur se passe sur du code existant, pas du code neuf. Apprendre à lire, corriger et améliorer du code, c'est la compétence la plus demandée du métier." },
    { type: 'info', variant: 'astuce', title: 'Objectifs', content: "Lire et comprendre du code existant, corriger des bugs méthodiquement, ajouter une fonctionnalité sans casser l'existant, surveiller une app en production, et gérer les mises à jour de sécurité." },
    { type: 'section', title: 'a. La maintenance : le vrai métier', blocks: [
      { type: 'prose', content: "Dans le monde réel, tu écris rarement du code from scratch. La majorité du temps, tu travailles sur un code **existant** : écrit par quelqu'un d'autre (ou par toi il y a 6 mois — et tu ne te souviens plus). Savoir **lire**, **comprendre** et **modifier** du code sans tout casser est LA compétence du professionnel." },
      { type: 'cards', columns: 3, items: [
        { title: 'Corrective', text: "Corriger des bugs signalés. Le quotidien." },
        { title: 'Évolutive', text: "Ajouter des fonctionnalités demandées par les utilisateurs." },
        { title: 'Préventive', text: "Mises à jour de sécurité, refactoring, dette technique." },
      ]},
    ]},
    { type: 'section', title: 'b. Corriger un bug : la méthode', blocks: [
      { type: 'list', ordered: true, items: [
        "**Reproduire** : avant de corriger, reproduis le bug de façon fiable (quelles étapes déclenchent l'erreur ?).",
        "**Isoler** : où est le problème ? Front, back, BDD ? Utilise les logs, l'inspecteur, les messages d'erreur.",
        "**Comprendre** : lis le code autour du bug. Comprends ce qu'il est *censé* faire avant de le modifier.",
        "**Corriger** : fais la modification la plus petite possible qui résout le problème.",
        "**Tester** : vérifie que le bug est corrigé ET que rien d'autre n'est cassé.",
        "**Documenter** : commit clair (`fix: correction du calcul de moyenne`) + commentaire si le correctif n'est pas évident.",
      ]},
      { type: 'info', variant: 'attention', title: 'Le piège du correctif rapide', content: "Tu trouves le bug, tu corriges en 2 secondes, tu pushes. Et tu crées 3 nouveaux bugs. Prends le temps de comprendre AVANT de modifier. Teste APRÈS." },
    ]},
    { type: 'exercise', title: 'Exercice 1 — Corriger un bug', body: [
      { type: 'prose', content: 'Le professeur te donne un petit programme JS ou Python avec 3 bugs cachés. Pour chacun :' },
      { type: 'list', ordered: true, items: [
        'Lance le programme et observe le comportement incorrect.',
        'Lis le code et identifie la cause.',
        'Corrige avec la modification la plus petite possible.',
        'Teste et vérifie que le résultat est correct.',
        'Fais un commit avec un message `fix:` clair pour chaque bug.',
      ]},
    ]},
    { type: 'section', title: 'c. Ajouter une fonctionnalité sur du code existant', blocks: [
      { type: 'list', ordered: true, items: [
        "**Comprendre l'existant** : lis le code, identifie la structure, les fichiers clés, les conventions.",
        "**Planifier** : où ta fonctionnalité s'insère dans l'architecture ? Quels fichiers toucher ?",
        "**Brancher** : crée une branche dédiée (`feature/nom-de-la-fonctionnalité`).",
        "**Implémenter** : en respectant les conventions du code existant (nommage, indentation, style).",
        "**Tester** : la nouvelle fonctionnalité marche, ET l'existant n'est pas cassé.",
        "**Merger** : fusionne dans main après vérification.",
      ]},
    ]},
    { type: 'exercise', title: 'Exercice 2 — Ajouter une fonctionnalité', body: [
      { type: 'list', ordered: true, items: [
        'Le professeur te donne une app fonctionnelle avec une liste de tâches.',
        'Tu dois ajouter une fonctionnalité : marquer une tâche comme « terminée » (barre le texte, change la couleur).',
        'Travaille sur une branche `feature/tache-terminee`.',
        'Fusionne dans main et vérifie que tout fonctionne.',
      ]},
    ]},
    { type: 'section', title: 'd. Surveiller en production', blocks: [
      { type: 'prose', content: "Une fois en prod, il faut **surveiller** que tout va bien. Les outils de base :" },
      { type: 'list', ordered: false, items: [
        "**Logs** : `docker compose logs -f` pour voir en temps réel ce que fait l'app. Structurer les logs (pas juste `console.log(\"ici\")`).",
        "**Monitoring** : vérifier régulièrement que le serveur répond (uptime), que la BDD n'est pas pleine, que les temps de réponse sont normaux.",
        "**Alertes** : se faire prévenir quand quelque chose casse (email, notification).",
      ]},
    ]},
    { type: 'section', title: 'e. Mises à jour et veille sécurité', blocks: [
      { type: 'prose', content: "Les dépendances (npm packages, images Docker) ont des **vulnérabilités** découvertes régulièrement. Il faut les mettre à jour." },
      { type: 'code', language: 'bash', title: 'Vérifier et mettre à jour', code: '# Vérifier les vulnérabilités npm\nnpm audit\n\n# Mettre à jour les dépendances\nnpm update\n\n# Mettre à jour les images Docker\ndocker compose pull\ndocker compose up -d' },
      { type: 'info', variant: 'attention', title: 'Ne pas tout mettre à jour aveuglément', content: "Une mise à jour majeure peut casser ton app. Règle : mets à jour en environnement de test d'abord, vérifie que tout fonctionne, PUIS déploie en production." },
    ]},
    { type: 'exercise', title: 'Exercice 3 — Audit de dépendances', body: [
      { type: 'list', ordered: true, items: [
        'Lance `npm audit` sur ton projet. Combien de vulnérabilités sont signalées ?',
        'Classe-les par sévérité (low, moderate, high, critical).',
        'Corrige les vulnérabilités « high » et « critical » avec `npm audit fix`.',
        'Vérifie que l\u2019app fonctionne toujours après la mise à jour.',
      ]},
    ]},
    { type: 'section', title: 'Mémo', blocks: [
      { type: 'list', ordered: false, items: [
        'Maintenance = corrective (bugs) + évolutive (fonctionnalités) + préventive (sécurité).',
        'Corriger un bug : reproduire → isoler → comprendre → corriger → tester → documenter.',
        'Ajouter une fonctionnalité : comprendre l\u2019existant → branche → implémenter → tester → merger.',
        'Surveiller : logs, monitoring, alertes.',
        'Mises à jour : `npm audit`, tester avant de déployer.',
      ]},
    ]},
  ],
  tp: {
    kind: 'digital',
    title: 'Maintenance de son projet',
    mission: "Corriger des bugs, ajouter une fonctionnalité, et auditer les dépendances de ton projet en production.",
    prerequis: ['Cours T-S6 suivi', 'Projet déployé (T-S5)'],
    criteres: ['Bugs corrigés avec des commits fix:', 'Fonctionnalité ajoutée via une branche', 'Audit npm effectué', 'Aucune régression introduite'],
    bonus: "Mettre en place un log structuré (horodaté, avec niveau info/warn/error) dans ton API.",
    steps: [
      { title: 'Corriger 2 bugs identifiés', body: [
        { type: 'list', ordered: true, items: ['Identifie 2 bugs dans ton projet (ou le prof t\u2019en signale).', 'Pour chacun : reproduire, isoler, corriger, tester.', 'Un commit `fix:` par bug.'] },
      ], done: 'Les 2 bugs sont corrigés sans régression.', validation: { commit: 'git commit -m "fix: corrections de bugs"' } },
      { title: 'Ajouter une fonctionnalité', body: [
        { type: 'list', ordered: true, items: ['Crée une branche `feature/[nom]`.', 'Implémente la fonctionnalité (ex. recherche, tri, filtre...).', 'Teste, fusionne dans main.'] },
      ], done: 'La fonctionnalité fonctionne sans casser l\u2019existant.', validation: { commit: 'git commit -m "feat: [fonctionnalité]"' } },
      { title: 'Audit et mise à jour', body: [
        { type: 'list', ordered: true, items: ['Lance `npm audit` et corrige les vulnérabilités.', 'Mets à jour les images Docker (`docker compose pull`).', 'Vérifie que tout fonctionne après les mises à jour.'] },
      ], done: 'L\u2019audit est propre et l\u2019app tourne.', validation: { commit: 'git commit -m "chore: audit et mises à jour" && git push' } },
    ],
  },
};
