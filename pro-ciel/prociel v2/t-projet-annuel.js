// =============================================================================
// Page spéciale — Cadrage du projet annuel de Terminale
// Accessible depuis /terminale/projet (ou via un lien dans la sidebar Terminale)
// Ce n'est pas une séquence numérotée : c'est la page de référence du projet.
// =============================================================================

export const projetAnnuel = {
  meta: {
    id: 'projet',
    sequence: null,
    niveau: 'terminale',
    title: 'Le projet annuel',
    icon: 'rocket',
    duree: 'Toute l\u2019année',
    theme: 'Projet',
    filRouge:
      "Cette page décrit le cadre de votre projet annuel : ce que vous devez construire, " +
      "les contraintes, les fonctionnalités attendues, les livrables et le calendrier. " +
      "Revenez-y régulièrement pour vérifier que vous êtes sur la bonne voie.",
    ref: { competences: ['C08', 'C04', 'C09', 'C03'], savoirs: [] },
    cyber: null,
  },

  course: [
    {
      type: 'hero',
      title: 'Le projet annuel',
      subtitle:
        "Tout au long de l'année, vous construisez une application web complète, " +
        "de la conception au déploiement. Cette page est votre cahier des charges.",
    },

    // ===== LE PROJET EN UNE PHRASE =====
    {
      type: 'section',
      title: 'En une phrase',
      blocks: [
        {
          type: 'prose',
          content:
            "Concevoir, développer, conteneuriser et déployer une **application web full-stack** " +
            "sur un thème de votre choix, en utilisant les technologies vues en cours : " +
            "**React** (front-end), **Node.js + Express** (back-end), **SQL** (base de données), " +
            "**Docker** (conteneurisation) et **Git/GitHub** (versionnement).",
        },
      ],
    },

    // ===== LES RÈGLES =====
    {
      type: 'section',
      title: 'Les règles du jeu',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Individuel', text: "Chaque élève construit sa propre application. Pas de projet en groupe. Vous pouvez vous entraider (s'expliquer un concept, débuguer ensemble) mais le code est le vôtre." },
            { title: 'Thème libre', text: "Vous choisissez le sujet de votre application (recettes, sport, musique, jeux, portfolio...). Le thème doit être validé par le professeur en S1." },
            { title: 'Stack imposée', text: "Les technologies sont celles du cours : React, Node.js, Express, SQLite/PostgreSQL, Docker. Pas de framework ou de langage alternatif sans accord préalable." },
            { title: 'Versionné sur GitHub', text: "Tout le code vit dans un dépôt GitHub Classroom. Commits réguliers avec des messages clairs. L'historique fait partie de l'évaluation." },
          ],
        },
        {
          type: 'info',
          variant: 'attention',
          title: 'Ce projet est séparé du chef-d\u2019œuvre',
          content:
            "Le projet annuel d'informatique et le chef-d'œuvre du Bac Pro sont deux choses " +
            "distinctes. Les compétences développées ici alimentent votre profil professionnel, " +
            "mais le projet n'est pas le chef-d'œuvre.",
        },
      ],
    },

    // ===== NIVEAU 1 : SOCLE =====
    {
      type: 'section',
      title: 'Niveau 1 — Le socle obligatoire',
      blocks: [
        {
          type: 'prose',
          content:
            "Ces fonctionnalités sont **obligatoires pour tous les projets**, quel que soit le " +
            "thème. Elles correspondent au minimum attendu et couvrent les compétences du référentiel. " +
            "Un projet qui remplit correctement le socle est un projet **validé**.",
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Page d\u2019accueil', text: "Une page d'accueil qui présente l'application et donne envie de l'utiliser." },
            { title: 'Navigation', text: "Un système de navigation clair entre les différentes pages/vues de l'application." },
            { title: 'Création de données', text: "Un formulaire fonctionnel qui permet d'ajouter de nouvelles données dans la base (ex. ajouter une recette, un film, un contact...)." },
            { title: 'Affichage des données', text: "Une page qui affiche les données stockées en base, récupérées via l'API (ex. la liste des recettes, des films...)." },
            { title: 'Suppression de données', text: "La possibilité de supprimer un élément, avec confirmation (pas de suppression accidentelle)." },
            { title: 'Base de données structurée', text: "Au moins 2 tables liées par une relation (clé étrangère). Ex. : une table « recettes » liée à une table « catégories »." },
            { title: 'Conteneurisation', text: "L'application tourne dans Docker (Dockerfile + docker-compose.yml avec au moins 2 services)." },
            { title: 'Documentation', text: "Un fichier README.md propre : description du projet, technologies utilisées, instructions d'installation et de lancement." },
          ],
        },
      ],
    },

    // ===== NIVEAU 2 : AU CHOIX =====
    {
      type: 'section',
      title: 'Niveau 2 — Fonctionnalités au choix (2 parmi la liste)',
      blocks: [
        {
          type: 'prose',
          content:
            "En plus du socle, choisissez **2 fonctionnalités** dans la liste ci-dessous. Ce choix " +
            "se fait en S1 (cadrage) et est validé par le professeur. Il doit être cohérent avec " +
            "votre thème — toutes les fonctionnalités ne font pas sens pour tous les sujets.",
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Recherche / filtrage', text: "Un champ de recherche ou des filtres pour trouver un élément dans la liste (par nom, catégorie, date...)." },
            { title: 'Modification de données', text: "Un formulaire de modification (UPDATE) pour éditer un élément existant, pré-rempli avec les données actuelles." },
            { title: 'Tri', text: "La possibilité de trier les données affichées par différents critères (date, nom, note...) via l'interface." },
            { title: 'Upload d\u2019images', text: "Permettre à l'utilisateur d'associer une image à un élément (upload de fichier, stockage, affichage)." },
            { title: 'Catégories / tags', text: "Un système de catégorisation ou de tags pour organiser les données (avec filtrage par catégorie)." },
            { title: 'Pagination', text: "Quand il y a beaucoup de données, les afficher par pages (10 par page, boutons précédent/suivant)." },
            { title: 'Vue détaillée', text: "Cliquer sur un élément de la liste ouvre une page dédiée avec toutes ses informations (route dynamique)." },
            { title: 'Tableau de bord / statistiques', text: "Une page qui affiche des compteurs, des moyennes ou des graphiques résumant les données (ex. nombre de recettes par catégorie)." },
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Comment choisir ?',
          content:
            "Choisissez les fonctionnalités qui ont du **sens pour votre thème**. Un site de " +
            "recettes gagne à avoir des catégories et une recherche. Un tracker sportif gagne " +
            "à avoir des statistiques et du tri par date. Un portfolio gagne à avoir l'upload " +
            "d'images et une vue détaillée.",
        },
      ],
    },

    // ===== NIVEAU 3 : BONUS =====
    {
      type: 'section',
      title: 'Niveau 3 — Bonus (non requis, valorisés)',
      blocks: [
        {
          type: 'prose',
          content:
            "Ces fonctionnalités ne sont **pas exigées** et leur absence ne pénalise pas. " +
            "Elles valorisent l'investissement et la maîtrise technique des élèves les plus " +
            "avancés. Elles apportent des **points supplémentaires** sur l'évaluation.",
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Authentification', text: "Un système de login / logout avec création de compte. Les données de chaque utilisateur sont séparées." },
            { title: 'Mode sombre / clair', text: "Un toggle de thème qui bascule toute l'interface, avec mémorisation du choix (localStorage)." },
            { title: 'Responsive avancé', text: "L'application est utilisable et agréable aussi bien sur ordinateur que sur mobile (pas juste « ça ne déborde pas »)." },
            { title: 'Export de données', text: "Exporter les données au format CSV ou PDF (ex. exporter la liste de ses recettes)." },
            { title: 'Animations / transitions', text: "Des animations soignées (apparition, transitions de page, hover) qui améliorent l'expérience sans gêner l'usage." },
            { title: 'Déploiement public', text: "L'application est accessible en ligne avec un vrai nom de domaine et HTTPS, pas juste sur localhost." },
          ],
        },
      ],
    },

    // ===== LIVRABLES =====
    {
      type: 'section',
      title: 'Les livrables',
      blocks: [
        {
          type: 'prose',
          content: "À la fin de l'année, votre projet doit contenir :",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Le code source** complet dans le dépôt GitHub, avec un historique de commits propre et régulier.",
            "**Le README.md** : description, technologies, installation, lancement, fonctionnalités implémentées.",
            "**Le Dockerfile** et le **docker-compose.yml** fonctionnels.",
            "**Le document de cadrage** (`PROJET.md`) rédigé en S1 : besoin, fonctionnalités choisies, schéma d'architecture.",
            "**Le schéma de base de données** (dans le README ou un fichier dédié).",
          ],
        },
      ],
    },

    // ===== CALENDRIER =====
    {
      type: 'section',
      title: 'Le calendrier',
      blocks: [
        {
          type: 'prose',
          content:
            "Le projet suit le rythme des séquences. Chaque séquence ajoute une couche à " +
            "votre application :",
        },
        {
          type: 'table',
          headers: ['Séquence', 'Ce que vous faites sur le projet', 'Livrable attendu'],
          rows: [
            ['S1 — Cadrage', 'Choisir le thème, définir les fonctionnalités (socle + 2 au choix), planifier', 'PROJET.md + backlog'],
            ['S2 — Back-end', 'Concevoir la BDD, créer l\u2019API REST (routes CRUD)', 'API fonctionnelle + BDD'],
            ['S3 — React', 'Construire l\u2019interface, la connecter à l\u2019API', 'Front-end connecté'],
            ['S4 — Docker', 'Conteneuriser l\u2019app (Dockerfile + Compose)', 'docker compose up fonctionne'],
            ['S5 — Production', 'Déployer (si serveur dispo), workflow branches', 'App déployée ou déployable'],
            ['S6 — Maintenance', 'Corriger les bugs, ajouter les finitions, auditer', 'Projet finalisé et propre'],
          ],
        },
        {
          type: 'info',
          variant: 'attention',
          title: 'Pas de rattrapage de dernière minute',
          content:
            "Le projet avance **séquence par séquence**. Si vous n'avez pas d'API à la fin de S2, " +
            "vous ne pourrez pas connecter le front-end en S3. Chaque étape dépend de la précédente. " +
            "Les commits sont datés : un projet fait entièrement la dernière semaine, ça se voit — " +
            "et ce n'est pas du travail régulier.",
        },
      ],
    },

    // ===== ÉVALUATION =====
    {
      type: 'section',
      title: 'L\u2019évaluation',
      blocks: [
        {
          type: 'prose',
          content: "Le projet est évalué **à chaque séquence** (pas juste à la fin) et sur **4 axes** :",
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Technique (C08)', text: "Le code fonctionne, est propre, bien organisé. Les fonctionnalités du socle sont implémentées. Les fonctionnalités au choix sont opérationnelles." },
            { title: 'Architecture (C04)', text: "Le schéma de BDD est cohérent. L'API est bien structurée. L'architecture front/back/BDD est claire et documentée." },
            { title: 'Déploiement (C09)', text: "Docker fonctionne. Le déploiement est reproductible. Git est utilisé correctement (commits réguliers, messages clairs, branches)." },
            { title: 'Conduite de projet (C03)', text: "Le cadrage est réaliste. Le backlog est suivi. Le README est à jour. Le projet avance au rythme des séquences." },
          ],
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Notation bienveillante',
          content:
            "Un socle bien réalisé avec des choix judicieux vaut mieux qu'un projet ambitieux " +
            "mais bancal. On valorise la qualité, la régularité et la propreté du travail autant " +
            "que la quantité de fonctionnalités. Les bonus apportent des points supplémentaires " +
            "mais ne sont jamais requis.",
        },
      ],
    },

    // ===== EXEMPLES DE THÈMES =====
    {
      type: 'section',
      title: 'Exemples de thèmes (pour vous inspirer)',
      blocks: [
        {
          type: 'prose',
          content:
            "Voici quelques idées, mais vous pouvez proposer n'importe quel sujet qui vous " +
            "motive — tant qu'il permet d'implémenter le socle et 2 fonctionnalités au choix.",
        },
        {
          type: 'cards',
          columns: 3,
          items: [
            { title: 'Gestionnaire de recettes', text: "Ajouter, classer, rechercher des recettes. Catégories, images, temps de préparation." },
            { title: 'Tracker sportif', text: "Enregistrer ses séances, suivre sa progression. Statistiques, graphiques, tri par date." },
            { title: 'Bibliothèque personnelle', text: "Gérer une collection de livres/films/jeux. Notes, avis, catégories, recherche." },
            { title: 'Portfolio créatif', text: "Présenter ses projets avec images, descriptions. Vue détaillée, catégories, responsive." },
            { title: 'Carnet de voyages', text: "Documenter ses voyages avec photos et notes. Tri par date, tags de pays, vue détaillée." },
            { title: 'Gestionnaire de budget', text: "Suivre revenus et dépenses. Catégories, tableau de bord, statistiques mensuelles." },
          ],
        },
      ],
    },

    // ===== MÉMO =====
    {
      type: 'section',
      title: 'Récapitulatif',
      blocks: [
        {
          type: 'list',
          ordered: false,
          items: [
            "**Individuel**, thème libre (validé par le prof), stack imposée (React + Node + SQL + Docker + Git).",
            "**Socle obligatoire** : accueil, navigation, CRUD (créer, lire, supprimer), 2 tables liées, Docker, README.",
            "**2 fonctionnalités au choix** parmi 8, cohérentes avec votre thème.",
            "**Bonus** valorisés mais non requis (authentification, responsive avancé, export...).",
            "Le projet avance **séquence par séquence** : S1 cadrage → S2 back → S3 front → S4 Docker → S5 prod → S6 maintenance.",
            "Évaluation sur 4 axes : technique, architecture, déploiement, conduite de projet.",
            "**Qualité > quantité.** Un socle propre vaut mieux qu'un projet ambitieux mais bancal.",
          ],
        },
      ],
    },
  ],
};
