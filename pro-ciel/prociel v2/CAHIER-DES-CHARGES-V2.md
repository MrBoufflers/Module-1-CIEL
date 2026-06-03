# Cahier des charges — Refonte V2 du site Pro CIEL

> Document de spécification destiné à **Claude Code**.
> Objectif : refondre le site pédagogique du Bac Pro CIEL (partie informatique) en réutilisant l'existant, sans le réécrire entièrement de zéro.
> **Lot 1** uniquement dans ce document : socle technique + 1 séquence pilote. Les lots suivants (migration des autres séquences) feront l'objet de documents séparés une fois le Lot 1 validé.

---

## 1. Contexte

### 1.1. Le projet
Le site `pro-ciel.netlify.app` est un site de cours pour les élèves de Bac Pro CIEL (Cybersécurité, Informatique, Électronique, Réseaux), partie **informatique uniquement**. Il héberge les cours, les TP et les évaluations.

La V1 existe déjà (React + Vite + Tailwind, atomic design). Elle fonctionne mais souffre de plusieurs problèmes que cette V2 doit corriger.

### 1.2. Public
- Élèves de Première et Terminale Bac Pro (15-18 ans), débutants en informatique.
- Le site doit être **beau, moderne et donner envie d'y revenir**, tout en restant **lisible sur de longues séances** et **accessible** (notamment dyslexie).

### 1.3. Principes pédagogiques structurants
- Progression en **séquences** (S1, S2, …) sur deux ans.
- Chaque séquence contient un **cours** et un **TP**, parfois une **évaluation**.
- Les TP sont **strictement individuels** (1 élève = 1 poste = 1 dépôt Git).
- Les TP sont découpés en **étapes validables** : l'élève pousse son travail sur GitHub, prévient le professeur, qui vérifie le dépôt et donne le feu vert avant l'étape suivante (workflow professionnel de revue).

---

## 2. Problèmes de la V1 à corriger

1. **Le contenu des cours est écrit en JSX brut** : chaque module mélange fond (le texte du cours) et forme (balises, `className`, composants). Écrire un cours demande d'écrire du React. Très verbeux, source d'erreurs, non homogène.
2. **Composants de présentation redéfinis dans chaque module** (ex. `CodeExample`, `SemanticLayoutDiagram` définis localement dans `module6content.jsx`). À factoriser.
3. **Pas de routing** : `App.jsx` ne rend que `CoursePage`, la navigation est un `useState`. Pas d'URL par cours, pas de bouton retour, pas de lien partageable.
4. **`CourseData.jsx` est encombré de code commenté** (doublons, modules désactivés). À nettoyer.
5. **Styles éparpillés** (un peu d'`index.css`, beaucoup de classes Tailwind inline répétées). Pas de système de design cohérent.
6. **Pas de thème** : ni dark mode, ni choix de thème (seule la police dyslexie existe).

---

## 3. Stack technique

- **Conserver** : Vite, React 19, Tailwind CSS v4, l'organisation atomic design (atoms / molecules / organisms / templates / pages), la police OpenDyslexic et son principe de toggle.
- **Ajouter** : `react-router-dom` (routing avec URL par séquence).
- **Déploiement** : reste sur Netlify (le `netlify.toml` actuel avec redirect SPA `/* → /index.html` est correct et doit être conservé/adapté pour le routing).
- **Contrainte forte : AUCUN backend, AUCUN login, AUCUNE base de données.** Le site reste 100 % statique. Toute fonctionnalité doit respecter cette contrainte.

---

## 4. Architecture cible

### 4.1. Le système de blocs (cœur de la refonte)

Le principe central : **le contenu d'un cours n'est plus du JSX, mais des données** (un tableau d'objets « blocs »). Un composant unique, le **`BlockRenderer`**, lit ces données et produit l'affichage.

Bénéfices : le professeur écrit du contenu lisible sans toucher au style ; l'affichage est homogène ; un seul endroit à modifier pour changer un style ; changer de thème ne touche jamais les cours.

**Un bloc = un objet avec une propriété `type` et des propriétés selon le type.**

#### Grammaire des blocs (types à implémenter pour le Lot 1)

```js
// Titre d'introduction d'un cours
{ type: 'hero', title: 'string', subtitle: 'string' }

// Section avec titre + sous-blocs
{ type: 'section', title: 'string', blocks: [ /* autres blocs */ ] }

// Paragraphe de texte. Supporte un markdown léger : **gras**, *italique*, `code inline`
{ type: 'prose', content: 'string' }

// Encadré mis en valeur. variant ∈ 'analogie' | 'attention' | 'astuce' | 'definition'
{ type: 'info', variant: 'analogie', title: 'string (optionnel)', content: 'string' }

// Bloc de code (toujours affiché en thème sombre type éditeur, même en light mode)
{ type: 'code', language: 'html|css|js|python|bash|sql', title: 'string (optionnel)', code: 'string' }

// Grille de cartes. columns = nombre de colonnes souhaité (1 à 3)
{ type: 'cards', columns: 2, items: [ { code: 'string (optionnel)', title: 'string (optionnel)', text: 'string' } ] }

// Image
{ type: 'image', src: 'string', alt: 'string', caption: 'string (optionnel)' }

// Liste à puces ou numérotée. ordered = true => numérotée
{ type: 'list', ordered: false, items: ['string', 'string'] }

// Référence à un composant interactif spécifique réutilisable (ex. schéma sémantique HTML,
// diagramme de Von Neumann…). 'name' identifie le composant à rendre.
{ type: 'component', name: 'SemanticLayoutDiagram' }

// Tableau comparatif. 'headers' = en-têtes de colonnes (la 1re peut être vide pour une
// colonne de libellés de lignes). 'rows' = tableau de lignes, chaque ligne étant un
// tableau de cellules (texte, markdown léger supporté). Toutes les lignes doivent avoir
// le même nombre de cellules que 'headers'.
{ type: 'table',
  headers: ['', 'Colonne A', 'Colonne B'],
  rows: [ ['Libellé ligne 1', 'valeur', 'valeur'], ['Libellé ligne 2', 'valeur', 'valeur'] ] }
```

> Claude Code doit concevoir le `BlockRenderer` de façon **extensible** : ajouter un nouveau type de bloc plus tard ne doit pas casser l'existant. Les types listés ci-dessus (`hero`, `section`, `prose`, `info`, `code`, `cards`, `image`, `list`, `component`, `table`) sont ceux nécessaires au Lot 1 ; d'autres viendront (`quiz`, `video`, etc.).

#### Exemple de données de cours (extrait réel, séquence HTML)

```js
const courseBlocks = [
  { type: 'hero',
    title: 'HTML : le squelette du web',
    subtitle: "Avant de peindre un mur, on le construit. Le HTML est le squelette de chaque page web." },

  { type: 'section', title: "Partie 1 — Qu'est-ce que le HTML ?", blocks: [
    { type: 'prose', content: "Le HTML n'est **pas** un langage de programmation, mais un *langage de balisage*. Son but : décrire et structurer le contenu d'une page." },
    { type: 'info', variant: 'analogie', title: 'Analogie',
      content: "Le HTML est le plan de l'architecte : il définit les pièces, pas la couleur des murs." },
    { type: 'code', language: 'html', title: 'Le squelette de départ',
      code: '<!DOCTYPE html>\n<html lang="fr">\n<head>\n  <title>Ma page</title>\n</head>\n<body></body>\n</html>' },
  ]},

  { type: 'section', title: 'Partie 2 — Les balises de contenu', blocks: [
    { type: 'prose', content: 'Les balises les plus courantes :' },
    { type: 'cards', columns: 2, items: [
      { code: '<h1>…<h6>', text: 'Les titres, du plus au moins important.' },
      { code: '<p>', text: 'Un paragraphe de texte.' },
      { code: '<a href="...">', text: 'Un lien hypertexte.' },
      { code: '<img src alt>', text: "Une image, avec texte alternatif pour l'accessibilité." },
    ]},
    { type: 'component', name: 'SemanticLayoutDiagram' },
  ]},
];
```

### 4.2. Structure des fichiers de contenu

- **Une séquence = un fichier** regroupant : métadonnées + blocs de cours + définition du TP. Exemple : `src/data/sequences/premiere/s4-html.js`.
- **L'évaluation (contrôle) d'une séquence va dans un fichier séparé** (objet sensible, souvent en deux variantes G1/G2). Exemple : `src/data/evaluations/premiere/s4-html-eval.js`. (Non requis pour le Lot 1 sauf si la séquence pilote en a une.)
- Un **index** (`src/data/sequences/index.js`) agrège les séquences et définit l'ordre et le rattachement Première/Terminale.

#### Forme d'un fichier de séquence

```js
export const s4Html = {
  meta: {
    id: 'html',                  // utilisé dans l'URL : /premiere/html
    sequence: 'S4',
    niveau: 'premiere',          // 'premiere' | 'terminale' | 'ressources'
    title: 'HTML : le squelette du web',
    icon: 'brand-html5',         // identifiant d'icône (Tabler) — JAMAIS d'emoji
    duree: '6 h',
    theme: 'Développement web',
    filRouge: "Tu sais versionner avec Git (S3). Ici tu produis tes premières pages ; en S5 tu les mettras en forme avec CSS.",
    ref: { competences: ['C08', 'C04', 'C09'], savoirs: ['S1.2', 'S5.1'] },
    cyber: "HTTPS, ce que voit l'utilisateur, données affichées vs cachées.",
    // Bloc affiché dans l'onglet « Éval » (voir §6.2). Décrit l'évaluation SANS publier
    // de sujet. Présent pour toute séquence évaluée.
    evalInfo: {
      format: 'Contrôle pratique sur poste',
      duree: '3 h',
      competence: 'C08 (Application)',
      ressourcesAutorisees: ['MDN', 'Le cours S4'],
      note: "Évaluation réalisée en classe — aucun sujet n'est publié sur le site.",
    },
  },
  course: [ /* tableau de blocs (voir grammaire) */ ],
  tp: {
    kind: 'digital',            // 'digital' = TP de code versionné sur GitHub (défaut) ;
                                // 'physical' = TP matériel (démontage, etc.), PAS de Git.
    title: "Le site de ton chef-d'œuvre",
    mission: "Construire un mini-site multi-pages en HTML, versionné sur GitHub.",
    prerequis: ["Cours S4 terminé", "Dépôt GitHub Classroom accepté"],
    materiel: [ /* optionnel : surtout utile pour les TP physiques */ ],
    criteres: ["Site fonctionnel", "Commits réguliers et messages clairs", "Code propre"],
    bonus: "Ajouter une section schéma avec <figure> et <figcaption>.",
    steps: [
      {
        title: "Initialisation & page d'accueil",
        body: [ /* tableau de blocs : prose, code, list, info… */ ],
        done: "La page d'accueil s'affiche avec header/nav/main/footer.",   // « définition de terminé »
        validation: { commit: 'feat: structure et page d\'accueil' },        // commit attendu (TP 'digital' uniquement)
      },
      // … autres étapes
    ],
  },
};
```

> **Type de TP (`tp.kind`) :**
> - `'digital'` (défaut) : TP produisant du code, versionné sur GitHub. Chaque étape affiche un encadré « Pour valider cette étape » avec la « définition de terminé » (`done`) et la commande de commit/push attendue (`validation.commit`).
> - `'physical'` : TP matériel (ex. démontage de PC en S1) qui **ne produit pas de code**. Le composant d'affichage ne montre **aucun encadré commit/push** ; à la place, un encadré « Validation par le professeur » présentant la `done` (vérification par observation directe). La propriété `validation.commit` est alors absente. Une liste `materiel` est généralement fournie.

> Note : le TP réutilise **la même grammaire de blocs** que le cours pour le corps de chaque étape (`body`). Pas de format spécial à inventer.

### 4.3. Routing (react-router)

URLs cibles :

```
/                          → page d'accueil
/premiere                  → liste des séquences de Première
/terminale                 → liste des séquences de Terminale
/ressources                → cours bonus / hors progression
/:niveau/:seqId            → séquence (redirige vers .../cours par défaut)
/:niveau/:seqId/cours      → onglet Cours
/:niveau/:seqId/tp         → onglet TP
/:niveau/:seqId/eval       → onglet Évaluation (page neutre depuis meta.evalInfo ; voir §6.2. Masqué si pas d'evalInfo)
```

- Les onglets Cours / TP / Éval sont une **navigation visuelle** (style segmenté) qui change l'URL (pas un simple `useState`).
- La sidebar de navigation entre séquences est conservée dans son principe (sections repliables Tronc commun / Première / Terminale / Ressources) mais branchée sur le routing.
- Conserver le redirect SPA Netlify.

### 4.4. Sort des contenus V1 hors nouvelle progression

Les modules existants qui ne font pas partie de la progression officielle (guide d'orientation, module « Jeux Vidéo », Intro Windows, etc.) sont **déplacés dans une section « Ressources / Bonus »** accessible depuis la sidebar, et non supprimés. Le contenu pédagogique de ces modules est conservé tel quel (juste migré au nouveau format de blocs si raisonnable, sinon gardé en l'état dans un wrapper de compatibilité).

**Les cours qui restent dans la progression conservent leurs connaissances/contenu** : on refond la forme, pas le fond.

---

## 5. Système de design

### 5.1. Identité

- **Deux couleurs fonctionnelles** : le **bleu** signale le **Cours**, le **violet** signale le **TP**. L'accent de l'interface (onglet actif, barre de titre de section, badges, halos) bascule selon le contexte.
- **Gradient signature bleu → violet** (punchy) sur le logo, le nom du site, les en-têtes, l'onglet actif.
- Style visuel : **glassmorphisme moderne** (surfaces translucides avec `backdrop-filter: blur`, fines bordures lumineuses, halos colorés flous en arrière-plan pour donner de la profondeur).

### 5.2. Trois réglages d'affichage INDÉPENDANTS (cumulables)

Un sélecteur dans l'en-tête propose :
1. **Thème clair** (light glassmorphisme)
2. **Thème sombre** (dark glassmorphisme) — thème par défaut
3. **Police dyslexie** (toggle OpenDyslexic) — indépendant du thème clair/sombre

> Important accessibilité : prévoir que le mode dyslexie reste parfaitement lisible dans les deux thèmes. Le réglage choisi par l'élève est mémorisé localement (localStorage) pour le confort — c'est le **seul** usage autorisé de localStorage côté préférences.

### 5.3. Tokens de couleur (à placer en variables CSS)

```
/* Gradient signature */
--grad-brand: linear-gradient(120deg, #4f7cff, #9b5cff);

/* Accent COURS (bleu) */
--accent-course: #4f7cff;
--accent-course-strong: #2c4fc4;

/* Accent TP (violet) */
--accent-tp: #9b5cff;
--accent-tp-strong: #7e3fd6;

/* DARK MODE */
--dark-bg: #0a0b14;             /* fond profond légèrement teinté */
--dark-surface: rgba(255,255,255,0.05);   /* verre */
--dark-border: rgba(255,255,255,0.10);
--dark-text: #eef0fb;
--dark-text-muted: #9aa0c0;
/* halos flous : bleu #4f7cff et violet #9b5cff, opacity ~0.4, blur ~90px */

/* LIGHT MODE */
--light-bg: #eef0f8;           /* clair teinté, PAS blanc pur */
--light-surface: rgba(255,255,255,0.85);  /* verre clair */
--light-border: rgba(0,0,0,0.08);
--light-text: #1a1c2e;
--light-text-muted: #5b6080;
/* halos flous : mêmes teintes, opacity ~0.30, blur ~95px */

/* Blocs de code : TOUJOURS sombres (dans les deux thèmes) */
--code-bg: #0d1117;
--code-header-bg: #161b22;
/* coloration syntaxique : balises #7ee787, attributs #79c0ff, valeurs #a5d6ff,
   commentaires #8b949e, texte #c9d1d9 */

/* Statuts d'étape de TP */
--status-done: #06d6a0;        /* validé (vert) */
--status-current: #ffd166;     /* en cours (jaune) */
--status-locked: muted/estompé /* verrouillé */
```

### 5.4. Règles de style

- Coins arrondis généreux (12–16 px sur les cartes), ombres très douces, espacements larges.
- Encadrés `info` : fond translucide teinté selon le variant (analogie = violet, astuce = bleu, attention = ambre/rouge doux, définition = neutre).
- Les blocs de code gardent une fausse barre de fenêtre (3 pastilles + nom de fichier) et la coloration syntaxique.
- Lisibilité prioritaire : verre suffisamment opaque et texte contrasté pour de longues lectures.
- Surveiller la performance de `backdrop-filter` (cible : PC de lycée) ; prévoir un repli gracieux si nécessaire.

---

## 6. Le workflow TP (validation par étapes)

Rappel des décisions :
- **Statuts d'étape purement INDICATIFS** : pas de persistance, pas de mécanisme technique de verrouillage. L'affichage « validé / en cours / verrouillé » est une **convention visuelle pédagogique**, pas une serrure réelle.
- **Lien GitHub purement DÉCLARATIF/manuel** : le site **guide** (il affiche, pour chaque étape, ce qu'il faut faire, la « définition de terminé » et la commande de commit/push attendue). Le **suivi réel se fait dans GitHub Classroom** : le professeur regarde les dépôts des élèves, commente, donne le feu vert de vive voix ou via Classroom.
- Le site **n'appelle PAS l'API GitHub** et ne gère aucun token. Aucune intégration technique avec GitHub.
- Le bouton « prévenir le professeur » est un simple repère pédagogique (peut afficher un rappel « montre ton écran / signale sur Classroom »), sans action réseau.

### 6.1. Affichage d'une étape de TP
Chaque étape affiche : son numéro, son titre, son statut (badge indicatif), le corps (blocs), un encadré de validation, et le bouton de rappel. Le contenu de l'encadré de validation **dépend du type de TP** (`tp.kind`) :

- **TP `'digital'`** (code) : encadré « Pour valider cette étape » contenant la « définition de terminé » (`done`) et la commande de commit/push attendue (`validation.commit`), suivi du bouton « prévenir le professeur ».
- **TP `'physical'`** (matériel, ex. S1) : encadré « Validation par le professeur » contenant uniquement la « définition de terminé » (`done`). **Aucun encadré commit/push, aucune commande git.** Le bouton de rappel invite à montrer son poste au professeur.

### 6.2. L'onglet « Évaluation » (pas de sujet sur le site)

Les évaluations ne sont **jamais publiées sur le site** (sécurité : un sujet ou des réponses dans le code source seraient consultables/copiables). L'onglet « Éval » d'une séquence affiche donc uniquement une **page d'information neutre**, construite à partir de `meta.evalInfo` :
- le format de l'évaluation (ex. QCM papier, contrôle pratique sur poste) ;
- la durée ;
- la ou les compétences évaluées et leur niveau ;
- la liste des ressources autorisées ;
- une note rappelant que l'évaluation se déroule en classe et qu'aucun sujet n'est disponible en ligne.

Si une séquence n'a pas de `meta.evalInfo`, l'onglet « Éval » n'est pas affiché pour cette séquence.

---

## 7. Organisation GitHub Classroom (hors site — pour information)

Cette partie ne concerne pas le code du site, mais le contexte d'usage. Les dépôts des élèves sont gérés via **GitHub Classroom** (gratuit) :
- une **organisation GitHub par promo/cours** ;
- un **devoir (assignment) par TP**, basé sur un dépôt **template** ;
- chaque élève accepte le devoir → son dépôt personnel privé est créé automatiquement ;
- le professeur dispose d'un tableau de bord centralisé pour lire et commenter les dépôts.

Le site et GitHub Classroom sont **indépendants** : le site fournit le contenu et le guidage, Classroom gère les dépôts et le suivi réel.

---

## 8. Périmètre du LOT 1 (ce qui est à livrer maintenant)

### 8.1. Socle technique
1. Mise en place de **react-router** et de la structure d'URL (section 4.3).
2. Implémentation du **système de blocs** : le `BlockRenderer` + tous les types de la grammaire (section 4.1).
3. Implémentation du **système de design** : variables CSS, **dark + light + dyslexie**, sélecteur de thème, couleur fonctionnelle cours/TP, glassmorphisme (section 5).
4. Refonte des **composants de layout** (en-tête avec logo dégradé + sélecteur de thème, sidebar branchée au routing, onglets Cours/TP/Éval, footer).
5. Nettoyage de `CourseData.jsx` / mise en place du nouvel **index des séquences**.
6. Mise en place de la section **Ressources / Bonus** (les anciens modules y sont déplacés).
7. Composant d'affichage du **TP en étapes** (section 6).

### 8.2. Séquence pilote
- Migrer **une séquence complète au nouveau format** comme preuve de concept : **S4 — HTML** (cours en blocs + TP `'digital'` en étapes, avec workflow GitHub).
- Le contenu pédagogique provient du module HTML existant de la V1 (`module6content.jsx`) : **on garde le fond, on le reformate en blocs**.
- Le composant interactif `SemanticLayoutDiagram` existant est conservé et rendu via un bloc `{ type: 'component', name: 'SemanticLayoutDiagram' }`.

> **Fichier de référence déjà fourni :** la séquence **S1 — « C'est quoi un ordinateur ? »** est livrée au format blocs définitif (`s1-ordinateur.js`). Elle sert d'**exemple normatif** : elle illustre concrètement la structure `meta`/`course`/`tp`, l'usage des blocs (`hero`, `section`, `prose`, `info`, `code`, `cards`, `list`, `table`, `component`), le cas d'un **TP `'physical'`** (sans Git) et le bloc `meta.evalInfo` (évaluation papier). Claude Code doit s'appuyer sur ce fichier comme modèle, et l'intégrer aussi dans le site (S1 fait partie de la progression). Les composants interactifs `HistoryTimeline`, `VonNeumannDiagramComponent` et `ComponentShowcase` de la V1 sont conservés et rendus via des blocs `component`.

### 8.3. Critères d'acceptation du Lot 1
- Le site démarre, se build et se déploie sur Netlify sans erreur.
- On navigue via de vraies URL ; le bouton retour fonctionne ; un lien direct vers `/premiere/html/tp` ouvre le bon onglet.
- Les trois réglages (clair / sombre / dyslexie) fonctionnent, sont cumulables et mémorisés.
- L'accent passe au bleu en Cours et au violet en TP.
- La séquence HTML s'affiche entièrement via le système de blocs (aucun JSX de contenu en dur dans la page).
- Le TP HTML (`'digital'`) affiche ses étapes avec statuts indicatifs, « définition de terminé » et commande git.
- Le TP de S1 (`'physical'`) affiche ses étapes **sans** encadré git, avec un encadré « Validation par le professeur ».
- L'onglet « Éval » affiche la page neutre depuis `meta.evalInfo` (aucun sujet), et est masqué si `evalInfo` est absent.
- Les anciens modules restent accessibles dans Ressources / Bonus.
- Le `BlockRenderer` est extensible (ajout d'un type sans casser l'existant).

### 8.4. Hors périmètre du Lot 1 (lots suivants)
- Migration de toutes les autres séquences (Première S1-S3, S5-S11 ; Terminale).
- Les évaluations (contrôles G1/G2).
- Types de blocs avancés (`quiz`, etc.).

---

## 9. Démarche attendue de Claude Code

1. Lire ce document en entier avant de commencer.
2. Proposer un plan d'implémentation découpé en petites étapes vérifiables.
3. Commencer par le socle (routing + design system + BlockRenderer), puis la séquence pilote.
4. Conserver l'atomic design et les bonnes pratiques de la V1.
5. Ne rien supprimer du contenu pédagogique existant sans l'avoir migré ou déplacé en Ressources.
6. Demander confirmation avant toute décision structurante non couverte par ce document.
```
