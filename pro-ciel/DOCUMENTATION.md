# Pro CIEL -- Documentation technique

> Site statique de cours pour le BAC PRO CIEL (Cybersecurite, Informatique et reseaux, ELectronique).
> Deploye sur **Netlify** : [pro-ciel.netlify.app](https://pro-ciel.netlify.app)

---

## Table des matieres

1. [Stack technique](#stack-technique)
2. [Architecture du projet](#architecture-du-projet)
3. [Arborescence des fichiers](#arborescence-des-fichiers)
4. [Routing](#routing)
5. [Modele de donnees -- Sequences](#modele-de-donnees----sequences)
6. [Systeme de blocs](#systeme-de-blocs)
7. [Composants interactifs](#composants-interactifs)
8. [Design system et themes](#design-system-et-themes)
9. [Modules legacy (V1)](#modules-legacy-v1)
10. [Deploiement](#deploiement)
11. [Commandes utiles](#commandes-utiles)
12. [Ajouter une nouvelle sequence](#ajouter-une-nouvelle-sequence)
13. [Contraintes de securite](#contraintes-de-securite)

---

## Stack technique

| Couche        | Technologie                    | Version   |
|---------------|--------------------------------|-----------|
| Framework     | React                          | 19.1.1    |
| Bundler       | Vite                           | 7.1.2+    |
| CSS           | Tailwind CSS v4 + CSS custom   | 4.1.12    |
| Routing       | react-router-dom               | 7.16.0    |
| Icones        | @tabler/icons-react            | 3.44.0    |
| Timeline      | react-chrono                   | 2.9.1     |
| Linting       | ESLint                         | 9.33.0    |
| Deploiement   | Netlify (statique)             | --        |

> **Note importante** : Les classes utilitaires Tailwind v4 ne sont pas generees dans ce projet.
> Tout le style est porte par les classes CSS custom dans `src/index.css` ou par des styles inline.

---

## Architecture du projet

Le projet suit une architecture **Atomic Design** (atoms, molecules, organisms, pages)
combinee a un **systeme de blocs** pour le rendu du contenu pedagogique.

```
React App
  |
  +-- BrowserRouter (react-router-dom)
  |     |
  |     +-- ThemeProvider (theme clair/sombre, mode cours/tp, dyslexie)
  |           |
  |           +-- AppLayout
  |                 +-- HeaderV2          (navigation, toggles theme/dyslexie)
  |                 +-- SidebarV2         (sidebar routee, sequences par niveau)
  |                 +-- <main>            (contenu de la page active)
  |                 |     +-- Halos       (blobs decoratifs en arriere-plan)
  |                 |     +-- <Outlet />  (page rendue par le routeur)
  |                 +-- FooterV2
```

### Flux de rendu du contenu

```
Sequence (data)  --->  SequencePage  --->  Onglet actif
                                            |
                    +-- Cours ---> BlockRenderer ---> [HeroBlock, SectionBlock, ProseBlock, ...]
                    |
                    +-- TP    ---> TpStepper --------> BlockRenderer (pour chaque etape)
                    |
                    +-- Eval  ---> EvalInfo (metadonnees uniquement, jamais de sujet)
```

---

## Arborescence des fichiers

```
pro-ciel/
+-- public/                          # Assets statiques
+-- netlify.toml                     # Config Netlify (SPA redirect)
+-- package.json                     # Dependances et scripts
+-- vite.config.js                   # Config Vite (plugins React + Tailwind)
+-- src/
    +-- main.jsx                     # Point d'entree (BrowserRouter + ThemeProvider)
    +-- App.jsx                      # Routeur principal + AppLayout
    +-- index.css                    # Design system complet (~685 lignes)
    |
    +-- lib/
    |   +-- ThemeProvider.jsx        # Context React (theme, dys, mode)
    |   +-- useTheme.jsx             # Hook d'acces au contexte theme
    |   +-- inlineMarkdown.jsx       # Parseur markdown inline (**gras**, *italique*, `code`)
    |
    +-- components/
    |   +-- atoms/
    |   |   +-- Button.jsx           # Bouton de base
    |   |   +-- Card.jsx             # Conteneur carte reutilisable
    |   |   +-- Heading.jsx          # Titre semantique
    |   |   +-- Icon.jsx             # Wrapper icone Tabler
    |   |
    |   +-- molecules/
    |   |   +-- CaseStudy.jsx        # Affichage etude de cas
    |   |   +-- ChallengeCard.jsx    # Carte defi
    |   |   +-- Footer.jsx           # Footer legacy
    |   |   +-- GameChallenge.jsx    # Composant defi ludique
    |   |   +-- NavLink.jsx          # Lien de navigation
    |   |   +-- Tab.jsx              # Onglet individuel
    |   |   +-- UserStory.jsx        # User story
    |   |
    |   +-- organisms/
    |   |   +-- HeaderV2.jsx         # Header sticky (logo, menu, toggles)
    |   |   +-- SidebarV2.jsx        # Sidebar responsive (niveaux + sequences)
    |   |   +-- FooterV2.jsx         # Footer avec toggles
    |   |   +-- TpStepper.jsx        # Stepper TP (etapes, validation)
    |   |   +-- EvalInfo.jsx         # Affichage metadonnees evaluation
    |   |   +-- LegacyModuleView.jsx # Wrapper pour contenu V1
    |   |   +-- HistoryTimeLine.jsx  # Frise chronologique (react-chrono)
    |   |   +-- VonNeumannDiagram.jsx          # Schema architecture von Neumann
    |   |   +-- SemanticLayoutDiagram.jsx      # Schema HTML semantique
    |   |   +-- ComponentShowcase.jsx          # Vitrine composants interactive
    |   |   +-- FileExplorerComponent.jsx      # Explorateur de fichiers interactif
    |   |   +-- WebStackDiagramComponent.jsx   # Schema couches web
    |   |   +-- ModuleContent.jsx    # Rendu contenu module (legacy)
    |   |   +-- Sidebar.jsx          # Sidebar legacy
    |   |   +-- Tabs.jsx             # Onglets legacy
    |   |   +-- Quiz.jsx             # Quiz
    |   |
    |   +-- blocks/
    |   |   +-- BlockRenderer.jsx    # Dispatche type -> composant
    |   |   +-- HeroBlock.jsx        # Bloc hero (titre + sous-titre gradient)
    |   |   +-- SectionBlock.jsx     # Bloc section (titre + enfants recursifs)
    |   |   +-- ProseBlock.jsx       # Bloc texte avec markdown inline
    |   |   +-- InfoBlock.jsx        # Encadre colore (astuce/attention/analogie/definition)
    |   |   +-- CodeBlock.jsx        # Bloc code avec coloration syntaxique
    |   |   +-- CardsBlock.jsx       # Grille de cartes (1-3 colonnes)
    |   |   +-- ImageBlock.jsx       # Image responsive + legende
    |   |   +-- ListBlock.jsx        # Liste ordonnee/non-ordonnee
    |   |   +-- TableBlock.jsx       # Tableau de donnees
    |   |   +-- ComponentBlock.jsx   # Charge un composant du registre
    |   |   +-- ExerciseBlock.jsx    # Exercice integre (encadre vert)
    |   |   +-- registry.js          # Registre lazy-load des composants interactifs
    |   |
    |   +-- pages/
    |       +-- HomePageV2.jsx       # Accueil (cartes niveaux)
    |       +-- NiveauPage.jsx       # Liste des sequences d'un niveau
    |       +-- SequencePage.jsx     # Page sequence (onglets Cours/TP/Eval)
    |       +-- RessourcesPage.jsx   # Liste modules legacy
    |       +-- LegacyModulePage.jsx # Wrapper module legacy
    |       +-- TestBlocksPage.jsx   # Page de test des blocs (dev)
    |       +-- HomePage.jsx         # Accueil legacy
    |       +-- CoursePage.jsx       # Page cours legacy
    |
    +-- data/
    |   +-- CourseData.jsx           # Donnees modules legacy
    |   +-- legacyModules.js         # Aggregateur modules legacy
    |   |
    |   +-- modules/                 # Contenu V1 (JSX, ~20 fichiers)
    |   |   +-- module1content.jsx ... moduleSite.jsx
    |   |
    |   +-- sequences/
    |       +-- index.js             # Export + helpers (getSequence, getSequencesByNiveau)
    |       |
    |       +-- premiere/            # 10 sequences Premiere
    |       |   +-- s1-ordinateur.js
    |       |   +-- s2-logiciels.js
    |       |   +-- s3-git.js
    |       |   +-- s4-html.js
    |       |   +-- s5-css.js
    |       |   +-- s6-js-base.js
    |       |   +-- s7-js-dom.js
    |       |   +-- s8-python1.js
    |       |   +-- s9-python2.js
    |       |   +-- s10-cyber.js
    |       |
    |       +-- terminale/           # 7 sequences Terminale
    |       |   +-- t-s1-reprise.js
    |       |   +-- t-s2-nodejs-bdd.js
    |       |   +-- t-s3-react.js
    |       |   +-- t-s4-docker.js
    |       |   +-- t-s5-production.js
    |       |   +-- t-s6-maintenance.js
    |       |   +-- t-s7-ia.js
    |       |
    |       +-- ressources/          # 3 ressources
    |           +-- res-word.js
    |           +-- res-excel.js
    |           +-- res-powerpoint.js
    |
    +-- polices/
        +-- OpenDyslexic-Regular.otf # Police d'accessibilite
```

---

## Routing

| Route                        | Page              | Description                            |
|------------------------------|-------------------|----------------------------------------|
| `/`                          | HomePageV2        | Accueil avec cartes niveaux            |
| `/:niveau`                   | NiveauPage        | Liste des sequences du niveau          |
| `/:niveau/:seqId`            | redirect          | Redirige vers `/:niveau/:seqId/cours`  |
| `/:niveau/:seqId/cours`      | SequencePage      | Onglet Cours (BlockRenderer)           |
| `/:niveau/:seqId/tp`         | SequencePage      | Onglet TP (TpStepper)                  |
| `/:niveau/:seqId/eval`       | SequencePage      | Onglet Evaluation (EvalInfo)           |
| `/ressources`                | RessourcesPage    | Liste des modules legacy               |
| `/ressources/:id`            | LegacyModulePage  | Module legacy individuel               |
| `/test-blocks`               | TestBlocksPage    | Page de test des blocs (dev)           |

**Niveaux valides** : `premiere`, `terminale`, `ressources`

Toutes les routes sont gerees cote client par react-router-dom. Le fichier `netlify.toml`
redirige toutes les requetes vers `/index.html` (mode SPA).

---

## Modele de donnees -- Sequences

Chaque sequence est un objet JS exporte depuis un fichier dans `src/data/sequences/`.

### Structure complete

```javascript
export const nomSequence = {

  // --- Metadonnees ---
  meta: {
    id: 'slug',                    // Identifiant URL (ex: 'ordinateur', 'react')
    sequence: 'S1',                // Numerotation (ex: 'S1', 'T-S3')
    niveau: 'premiere',            // 'premiere' | 'terminale' | 'ressources'
    title: 'Titre de la sequence',
    icon: 'device-desktop',        // Nom d'icone Tabler (sans prefixe Icon)
    duree: '9 h',                  // Duree indicative
    theme: 'Theme pedagogique',
    filRouge: 'Fil conducteur du cours',
    ref: {
      competences: ['C04', 'C08'], // References competences BAC PRO
      savoirs: ['S1.1', 'S1.2'],   // References savoirs associes
    },
    cyber: 'Angle cybersecurite',  // Optionnel, null si absent

    // Optionnel -- si absent, l'onglet Eval est masque
    evalInfo: {
      format: 'Evaluation ecrite',
      duree: '1 h',
      competence: 'C04 – Analyser',
      ressourcesAutorisees: ['Cours imprime', 'Calculatrice'],
      note: 'Aucun sujet disponible en ligne.',
    },
  },

  // --- Contenu du cours (tableau de blocs) ---
  course: [
    { type: 'hero', title: '...', subtitle: '...' },
    { type: 'section', title: '...', blocks: [ /* blocs enfants */ ] },
    // ...
  ],

  // --- TP (optionnel) ---
  tp: {
    kind: 'digital',              // 'digital' (commandes git) | 'physical' (validation prof)
    title: 'Titre du TP',
    mission: 'Objectif en markdown inline',
    prerequis: ['Prerequis 1', 'Prerequis 2'],
    materiel: ['Navigateur web', 'VS Code'],
    criteres: ['Critere de reussite 1'],
    steps: [
      {
        title: 'Etape 1',
        body: [ /* blocs */ ],     // Contenu de l'etape (BlockRenderer recursif)
        done: 'Ce qui doit etre fait',
        validation: {
          commit: 'git commit -m "step-1"',  // Seulement si kind === 'digital'
        },
      },
    ],
    bonus: 'Defi bonus (optionnel)',
    note: 'Note complementaire (optionnel)',
  },
};
```

### Agregation (`src/data/sequences/index.js`)

```javascript
import { s1Ordinateur } from './premiere/s1-ordinateur.js';
// ... toutes les sequences

const sequences = [ s1Ordinateur, /* ... */ ];

export default sequences;

// Helpers
export function getSequencesByNiveau(niveau) {
  return sequences.filter(s => s.meta.niveau === niveau);
}

export function getSequence(niveau, seqId) {
  return sequences.find(s => s.meta.niveau === niveau && s.meta.id === seqId);
}
```

### Inventaire des sequences

#### Premiere (10 sequences)

| Fichier             | Export        | ID          | Titre                                  |
|---------------------|---------------|-------------|----------------------------------------|
| `s1-ordinateur.js`  | s1Ordinateur  | ordinateur  | L'ordinateur                           |
| `s2-logiciels.js`   | s2Logiciels   | logiciels   | Les logiciels                          |
| `s3-git.js`         | s3Git         | git         | Git et le versioning                   |
| `s4-html.js`        | s4Html        | html        | HTML -- structurer le web              |
| `s5-css.js`         | s5Css         | css         | CSS -- styliser le web                 |
| `s6-js-base.js`     | s6JsBase      | js-base     | JavaScript -- les fondamentaux         |
| `s7-js-dom.js`      | s7JsDom       | js-dom      | JavaScript -- le DOM                   |
| `s8-python1.js`     | s8Python1     | python-1    | Python -- les bases                    |
| `s9-python2.js`     | s9Python2     | python-2    | Python -- approfondissement            |
| `s10-cyber.js`      | s10Cyber      | cyber       | Cybersecurite                          |

#### Terminale (7 sequences)

| Fichier               | Export          | ID          | Titre                                  |
|------------------------|-----------------|-------------|----------------------------------------|
| `t-s1-reprise.js`     | ts1Reprise      | reprise     | Reprise & cadrage du projet annuel     |
| `t-s2-nodejs-bdd.js`  | ts2NodejsBdd    | nodejs-bdd  | Back-end & donnees : Node.js + BDD     |
| `t-s3-react.js`       | ts3React        | react       | Frameworks modernes : React            |
| `t-s4-docker.js`      | ts4Docker       | docker      | Conteneuriser : Docker                 |
| `t-s5-production.js`  | ts5Production   | production  | Mettre en production                   |
| `t-s6-maintenance.js` | ts6Maintenance  | maintenance | Maintenir & faire evoluer              |
| `t-s7-ia.js`          | ts7Ia           | ia          | Intelligence artificielle              |

#### Ressources (3 sequences)

| Fichier              | Export         | ID          | Titre                                  |
|----------------------|----------------|-------------|----------------------------------------|
| `res-word.js`        | resWord        | word        | Word -- les bases                      |
| `res-excel.js`       | resExcel       | excel       | Excel -- les bases                     |
| `res-powerpoint.js`  | resPowerpoint  | powerpoint  | PowerPoint -- les bases                |

---

## Systeme de blocs

Le contenu pedagogique est structure en **blocs** rendus par `BlockRenderer.jsx`.
Chaque bloc est un objet `{ type, ...props }` dispatche vers le composant correspondant.

### Types de blocs disponibles

| Type        | Composant          | Props principales                                | Description                        |
|-------------|--------------------|--------------------------------------------------|------------------------------------|
| `hero`      | HeroBlock          | `title`, `subtitle`                              | Titre principal avec gradient      |
| `section`   | SectionBlock       | `title`, `blocks: Block[]`                       | Section avec enfants (recursif)    |
| `prose`     | ProseBlock         | `content: string`                                | Paragraphe avec markdown inline    |
| `info`      | InfoBlock          | `variant`, `title`, `content`                    | Encadre colore (4 variantes)       |
| `code`      | CodeBlock          | `language`, `title`, `code`, `filename`          | Code avec coloration syntaxique    |
| `cards`     | CardsBlock         | `columns: 1|2|3`, `items: [{title, text, code}]` | Grille de cartes                  |
| `image`     | ImageBlock         | `src`, `alt`, `caption`                          | Image responsive + legende         |
| `list`      | ListBlock          | `ordered: boolean`, `items: string[]`            | Liste a puces ou numerotee         |
| `table`     | TableBlock         | `headers`, `rows`                                | Tableau de donnees                 |
| `component` | ComponentBlock     | `name: string`                                   | Composant interactif (lazy-load)   |
| `exercise`  | ExerciseBlock      | `title`, `body: Block[]`                         | Exercice integre (encadre vert)    |

### Variantes `info`

| Variant      | Couleur   | Usage                          |
|--------------|-----------|--------------------------------|
| `astuce`     | Bleu      | Conseil, bonne pratique        |
| `analogie`   | Violet    | Analogie pedagogique           |
| `attention`  | Orange    | Avertissement, piege courant   |
| `definition` | Blanc     | Definition formelle            |

### Rendu recursif

`SectionBlock` et `ExerciseBlock` contiennent des tableaux de blocs enfants,
rendus a leur tour par `BlockRenderer`. La recursion permet d'imbriquer des sections,
des exercices contenant du code, des listes, etc.

### Tolerence aux erreurs

Un type de bloc inconnu est ignore silencieusement (log console `warn`) sans casser
le rendu du reste de la page.

---

## Composants interactifs

Le bloc `{ type: 'component', name: '...' }` charge dynamiquement un composant
depuis le registre (`src/components/blocks/registry.js`).

| Nom dans le registre            | Fichier                              | Usage                  |
|---------------------------------|--------------------------------------|------------------------|
| `HistoryTimeline`               | organisms/HistoryTimeLine.jsx        | Frise chronologique S1 |
| `VonNeumannDiagramComponent`    | organisms/VonNeumannDiagram.jsx      | Schema von Neumann S1  |
| `ComponentShowcase`             | organisms/ComponentShowcase.jsx      | Vitrine composants S1  |
| `SemanticLayoutDiagram`         | organisms/SemanticLayoutDiagram.jsx  | Schema HTML S4         |
| `FileExplorerComponent`         | organisms/FileExplorerComponent.jsx  | Explorateur fichiers   |

Les composants sont charges en **lazy-loading** (`React.lazy`) pour ne pas alourdir
le bundle initial.

---

## Design system et themes

### Tokens CSS (`src/index.css`)

#### Tokens invariants (independants du theme)

```css
--grad-brand: linear-gradient(120deg, #4f7cff, #9b5cff)  /* Gradient signature */
--accent-course: #4f7cff        /* Bleu cours */
--accent-tp: #9b5cff            /* Violet TP */
--warn: #ff974d                 /* Orange avertissement */
--code-bg: #0d1117             /* Fond code (toujours sombre) */
--status-done: #06d6a0          /* Vert validation */
--status-current: #ffd166       /* Jaune en cours */
--radius: 14px                  /* Rayon standard */
--radius-lg: 20px               /* Rayon large */
--sidebar-w: 280px              /* Largeur sidebar */
--header-h: 68px                /* Hauteur header */
```

#### Themes clair/sombre

| Token             | Sombre (defaut)               | Clair                          |
|-------------------|-------------------------------|--------------------------------|
| `--bg`            | `#0a0b14`                     | `#eceef6`                      |
| `--bg-card`       | `rgba(255,255,255,0.04)`      | `rgba(255,255,255,0.75)`       |
| `--text`          | `#e2e4ed`                     | `#1a1c2e`                      |
| `--text-sub`      | `#9ca0b0`                     | `#5c5f72`                      |
| `--border`        | `rgba(255,255,255,0.08)`      | `rgba(0,0,0,0.10)`            |
| `--glass-bg`      | `rgba(255,255,255,0.03)`      | `rgba(255,255,255,0.60)`       |

Bascule via `data-theme="dark"` ou `data-theme="light"` sur `<html>`.

#### Modes d'accentuation

- `data-mode="course"` : accent bleu (variable `--accent` = `--accent-course`)
- `data-mode="tp"` : accent violet (variable `--accent` = `--accent-tp`)
- `data-mode="eval"` : accent violet

Bascule automatiquement selon l'onglet actif dans `SequencePage`.

#### Accessibilite -- dyslexie

`data-dys="on"` sur `<html>` active :
- Police OpenDyslexic (`src/polices/OpenDyslexic-Regular.otf`)
- Interlettrage augmente (`letter-spacing: 0.05em`)
- Interligne augmente (`line-height: 1.85`)

#### Patterns visuels

- **Glassmorphisme** : `backdrop-filter: blur(12px)` + fond semi-transparent + bordure glass
- **Halos** : Blobs flous animes en arriere-plan (bleu haut-gauche, violet bas-droite)
- **Texte gradient** : classe `.text-gradient` avec le gradient signature
- **Blocs code** : Toujours fond sombre (`--code-bg`) quel que soit le theme

### Persistance

Le `ThemeProvider` (`src/lib/ThemeProvider.jsx`) lit/ecrit dans `localStorage` :
- `localStorage('theme')` : `'dark'` | `'light'`
- `localStorage('dys')` : `'on'` | `'off'`
- Le mode (course/tp/eval) n'est pas persiste (derive de l'URL).

---

## Modules legacy (V1)

Les anciens modules V1 sont conserves dans `src/data/modules/` sous forme de composants JSX.
Ils sont accessibles via la section **Ressources** du site.

### Acces

- `/ressources` : liste des modules legacy
- `/ressources/:id` : rendu via `LegacyModuleView` > `ModuleContent`

### Fichiers

| Fichier                    | Contenu                            |
|----------------------------|------------------------------------|
| `module1content.jsx`       | Module 1 (ancien)                  |
| `module2content.jsx`       | Module 2 (ancien)                  |
| `module3content.jsx`       | Module 3 (ancien)                  |
| `module4content.jsx`       | Module 4 (ancien)                  |
| `module5content.jsx`       | Module 5 (ancien)                  |
| `module6content.jsx`       | Module 6 Premiere (ancien)         |
| `module6Tcontent.jsx`      | Module 6 Terminale (ancien)        |
| `moduleBDDCours1.jsx`      | BDD cours 1                        |
| `moduleBDDCours2.jsx`      | BDD cours 2                        |
| `moduleBonusJV.jsx`        | Bonus jeu video                    |
| `moduleCSSavance.jsx`      | CSS avance                         |
| `moduleCSScontent.jsx`     | CSS bases                          |
| `moduleControleG1.jsx`     | Controle G1                        |
| `moduleControleG2.jsx`     | Controle G2                        |
| `moduleGitContent.jsx`     | Git (ancien)                       |
| `moduleIAcontent.jsx`      | Intelligence artificielle (ancien) |
| `moduleJSBaseContent.jsx`  | JS bases (ancien)                  |
| `moduleJSDOM.jsx`          | JS DOM (ancien)                    |
| `moduleJSDOMT.jsx`         | JS DOM Terminale (ancien)          |
| `moduleJSTcontent.jsx`     | JS Terminale (ancien)              |
| `moduleOrientation.jsx`    | Orientation (seul module visible)  |
| `modulePythonCours1.jsx`   | Python 1 (ancien)                  |
| `modulePythonCours2.jsx`   | Python 2 (ancien)                  |
| `moduleSite.jsx`           | Projet site web (ancien)           |

> Seul `moduleOrientation` est visible par defaut (`VISIBLE_IDS` dans `legacyModules.js`).

---

## Deploiement

### Netlify

Configuration dans `netlify.toml` :

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

- **Build** : `npm run build` (Vite) genere le dossier `dist/`
- **SPA** : Toutes les routes redirigent vers `index.html` (react-router gere le routing cote client)
- **Pas de backend** : Aucune fonction serverless, aucune API, aucune base de donnees

### Branches

| Branche                             | Role                        |
|--------------------------------------|-----------------------------|
| `master`                             | Production (V1 + sources V2)|
| `claude/create-python-module-HY0AK`  | Developpement V2           |
| `documentation`                      | Cette documentation         |

---

## Commandes utiles

```bash
# Installation
npm install

# Developpement (serveur local avec HMR)
npm run dev

# Build de production
npm run build

# Previsualisation du build
npm run preview

# Linting
npm run lint

# Verification syntaxe d'un fichier sequence
node --input-type=module -e "$(cat src/data/sequences/premiere/s1-ordinateur.js)"
```

---

## Ajouter une nouvelle sequence

### 1. Creer le fichier de donnees

```
src/data/sequences/[niveau]/[prefixe]-[slug].js
```

Convention de nommage :
- Premiere : `s[N]-[slug].js` (export `s[N]NomCamelCase`)
- Terminale : `t-s[N]-[slug].js` (export `ts[N]NomCamelCase`)
- Ressources : `res-[slug].js` (export `res[NomCamelCase]`)

### 2. Definir la structure

```javascript
export const sXNom = {
  meta: {
    id: 'slug',           // Doit etre unique au sein du niveau
    sequence: 'SX',
    niveau: 'premiere',    // 'premiere' | 'terminale' | 'ressources'
    title: 'Titre',
    icon: 'nom-icone',    // Icone Tabler (sans prefixe "Icon")
    duree: '9 h',
    theme: 'Theme',
    filRouge: 'Description fil conducteur',
    ref: { competences: ['C04'], savoirs: ['S1.1'] },
    // evalInfo: { ... }  // Optionnel : ajouter pour afficher l'onglet Eval
  },
  course: [
    { type: 'hero', title: '...', subtitle: '...' },
    // ... blocs de contenu
  ],
  // tp: { ... }          // Optionnel : ajouter pour afficher l'onglet TP
};
```

### 3. Enregistrer dans l'index

Editer `src/data/sequences/index.js` :

```javascript
import { sXNom } from './premiere/sX-slug.js';

const sequences = [
  // ... sequences existantes
  sXNom,
  // ... ressources en dernier
];
```

### 4. Verifier

```bash
# Syntaxe
node --input-type=module -e "$(cat src/data/sequences/premiere/sX-slug.js)"

# Build
npm run build

# Test visuel
npm run dev
# Naviguer vers /premiere/slug/cours
```

Les routes et la sidebar se mettent a jour automatiquement grace a `getSequencesByNiveau()`.

---

## Contraintes de securite

- **100 % statique** : aucun backend, aucun login, aucune base de donnees.
- **Aucune API externe** : le site n'appelle pas l'API GitHub et ne gere aucun token.
- **Evaluations** : jamais publiees dans le code source (un sujet ou des reponses seraient
  consultables/copiables). L'onglet Eval affiche uniquement les metadonnees (`evalInfo`).
- **localStorage** : utilise uniquement pour les preferences d'affichage (theme, dyslexie).
- **Bouton "Prevenir le professeur"** : purement indicatif, aucune action reseau.

---

## Statistiques

| Metrique                    | Valeur |
|-----------------------------|--------|
| Sequences totales           | 20     |
| -- Premiere                 | 10     |
| -- Terminale                | 7      |
| -- Ressources               | 3      |
| Types de blocs              | 11     |
| Composants interactifs      | 5      |
| Modules legacy              | ~24    |
| Lignes CSS (index.css)      | ~685   |
