# Guide pratique — Claude Code & GitHub Classroom

Ce guide t'accompagne pas à pas pour : (1) faire construire la V2 du site par Claude Code, et (2) mettre en place GitHub Classroom pour gérer les dépôts des élèves. Garde-le sous la main et avance étape par étape, sans te presser.

---

# PARTIE 1 — Piloter Claude Code

## 1.1. Avant de commencer : déposer les fichiers dans le repo

Place ces quatre fichiers dans ton dépôt (par exemple dans un dossier `docs/` à la racine) :

- `CAHIER-DES-CHARGES-V2.md` — la spécification complète
- `reference-visuelle.html` — la cible visuelle (ouvre-la dans ton navigateur pour la voir)
- `s1-ordinateur.js` — séquence exemple (TP physique + éval papier)
- `s4-html.js` — séquence pilote (TP de code + workflow GitHub)

Commits puis push, pour que Claude Code y ait accès :

```bash
git add docs/
git commit -m "docs: cahier des charges V2 + séquences de référence"
git push
```

## 1.2. Principe de travail avec Claude Code

Claude Code travaille directement dans ton dépôt : il lit, écrit et modifie les fichiers. Trois règles d'or :

1. **Avance par étapes, pas tout d'un coup.** Demande-lui un plan d'abord, valide, puis laisse-le exécuter une étape à la fois.
2. **Teste après chaque étape** (`npm run dev` pour voir le site en local). Ne passe à la suite que si l'étape précédente marche.
3. **Commits réguliers.** Demande-lui de committer après chaque étape réussie, pour pouvoir revenir en arrière si besoin.

## 1.3. Les prompts, dans l'ordre

### Prompt 0 — Démarrage (lecture et plan)

> Lis entièrement `docs/CAHIER-DES-CHARGES-V2.md`. Ouvre aussi `docs/reference-visuelle.html` pour comprendre l'apparence cible, et étudie `docs/s1-ordinateur.js` et `docs/s4-html.js` comme exemples normatifs du format de contenu. Ne code rien pour l'instant : propose-moi un plan d'implémentation du **Lot 1** découpé en petites étapes vérifiables, et signale-moi les points où tu as besoin d'une décision de ma part.

Lis son plan. S'il te pose des questions, réponds. S'il veut tout faire d'un bloc, demande-lui de redécouper plus finement.

### Prompt 1 — Le socle technique (routing + design)

> On commence. Étape 1 : mets en place `react-router` avec la structure d'URL décrite en section 4.3, et le système de design de la section 5 (variables CSS pour les thèmes clair/sombre, le toggle dyslexie, la couleur fonctionnelle bleu=cours/violet=TP, le glassmorphisme). Reproduis l'apparence de `reference-visuelle.html` en React + Tailwind. Ne touche pas encore au contenu des cours. Quand c'est prêt, dis-moi comment tester en local.

Teste : lance `npm run dev`, vérifie que les thèmes basculent et que l'apparence ressemble à la maquette. Si oui :

> C'est bon. Committe cette étape avec un message clair, puis on continue.

### Prompt 2 — Le moteur de blocs

> Étape 2 : implémente le système de blocs (section 4.1) : un composant `BlockRenderer` qui sait afficher tous les types de la grammaire (`hero`, `section`, `prose`, `info`, `code`, `cards`, `image`, `list`, `component`, `table`). Le `prose` doit gérer le markdown léger (**gras**, *italique*, `code inline`). Les blocs de code sont toujours sombres avec coloration syntaxique. Rends le `BlockRenderer` extensible. Crée une page de test temporaire qui affiche un exemple de chaque type pour que je vérifie le rendu.

Teste chaque type de bloc visuellement. Ajuste si besoin (« l'encadré analogie devrait être plus lisible », etc.). Puis commit.

### Prompt 3 — Layout et navigation

> Étape 3 : refais les composants de layout — en-tête avec logo en dégradé et le sélecteur de thème (clair / sombre / dyslexie), la sidebar de navigation branchée sur le routing (sections Première / Terminale / Ressources), les onglets Cours / TP / Éval qui changent l'URL, et le footer. Conserve l'atomic design existant.

### Prompt 4 — Les séquences de référence

> Étape 4 : intègre les deux séquences fournies. Place `s1-ordinateur.js` et `s4-html.js` dans `src/data/sequences/premiere/`, crée l'index des séquences, et fais en sorte qu'elles s'affichent entièrement via le `BlockRenderer`. Vérifie le TP physique de S1 (encadré « validation par le professeur », sans git) et le TP digital de S4 (encadré commit/push). Conserve et adapte les composants interactifs existants (`HistoryTimeline`, `VonNeumannDiagramComponent`, `ComponentShowcase`, `SemanticLayoutDiagram`).

### Prompt 5 — Ressources et nettoyage

> Étape 5 : déplace les anciens modules hors progression (orientation, jeux vidéo, etc.) dans une section « Ressources / Bonus » accessible depuis la sidebar, sans perdre leur contenu. Nettoie `CourseData.jsx` du code commenté et des doublons.

### Prompt 6 — Vérification finale

> Étape 6 : passons en revue les critères d'acceptation du Lot 1 (section 8.3 du cahier des charges) un par un. Pour chacun, dis-moi s'il est rempli et montre-moi comment le vérifier. Corrige ce qui manque.

## 1.4. Réflexes utiles pendant le travail

- **S'il part dans une mauvaise direction** : « Stop, ce n'est pas ce que je veux. Reprends à partir de [X] en faisant plutôt [Y]. »
- **Pour comprendre ce qu'il a fait** : « Explique-moi en quelques phrases ce que tu viens de changer et pourquoi. »
- **S'il y a un bug** : copie-colle le message d'erreur tel quel, il saura souvent le corriger.
- **Avant un gros changement** : « Décris-moi ce que tu vas modifier avant de le faire. »
- **Toujours** : un commit après chaque étape qui fonctionne.

## 1.5. Plus tard : les autres séquences (Lot 2)

Quand le Lot 1 tournera, on produira ensemble le contenu des autres séquences (S2, S3, etc.) au même format que `s1-ordinateur.js`. Pour chacune, le prompt sera simple :

> Voici la séquence `sX-nom.js` au format blocs. Ajoute-la dans `src/data/sequences/premiere/` (ou `terminale/`) et à l'index, comme on l'a fait pour S1 et S4.

---

# PARTIE 2 — Mettre en place GitHub Classroom

GitHub Classroom est l'outil (gratuit) qui crée et centralise les dépôts de tes élèves. Il est **indépendant du site** : le site guide, Classroom gère les dépôts et te permet de les lire facilement.

## 2.1. Vocabulaire en 30 secondes

- **Organisation** : un espace GitHub qui regroupe tous les dépôts d'une classe. (Recommandé : une organisation par promo.)
- **Classroom** : à l'intérieur de l'organisation, l'espace de gestion de tes devoirs.
- **Template (dépôt modèle)** : un dépôt de départ que tu prépares ; chaque élève en recevra une copie.
- **Assignment (devoir)** : un TP. Quand l'élève l'accepte, son dépôt personnel est créé automatiquement.

## 2.2. Mise en place (à faire une fois)

### Étape A — Créer une organisation
1. Sur GitHub, clique sur le **+** en haut à droite → **New organization** → choisis le plan **gratuit**.
2. Donne-lui un nom clair, par exemple `ciel-stcharles-2026`.

### Étape B — Demander les avantages enseignant (gratuit)
1. Va sur **education.github.com** et demande le statut **GitHub Teacher** (vérification par ton établissement/email pro).
2. Une fois validé, ton organisation peut avoir des dépôts privés illimités pour les élèves.

### Étape C — Créer la classroom
1. Va sur **classroom.github.com** → **New classroom**.
2. Choisis ton organisation (clique sur **Grant** si GitHub demande l'accès).
3. Nomme la classroom (ex. « Première CIEL 2026-2027 »).

### Étape D — Inscrire les élèves
1. Dans la classroom → **Students** : tu peux ajouter une liste (un identifiant par élève) ou laisser GitHub la créer au fur et à mesure.
2. **Important sur les comptes élèves** : c'est le point sensible que tu avais identifié. Conseils :
   - Fais créer les comptes GitHub en classe, lors de la séquence S3 (Git/GitHub), pas à la maison.
   - Demande un **identifiant simple et noté** (ex. `prenom-nom-ciel`) et fais-leur **écrire identifiant + email** sur une fiche que tu gardes.
   - Recommande d'utiliser leur email scolaire si possible (récupération de mot de passe plus fiable).

## 2.3. Créer un TP (à refaire pour chaque TP de code)

### Étape A — Préparer le dépôt template
1. Dans ton organisation, crée un nouveau dépôt (ex. `tp-s4-html-template`).
2. Mets-y le strict nécessaire de départ : un `README.md` qui rappelle la mission, et éventuellement un fichier vide à compléter.
3. Va dans **Settings** du dépôt → coche **Template repository**.

> Astuce : le README du template peut reprendre la mission et les étapes du TP affichées sur le site — l'élève a ainsi la consigne sous les yeux dans son dépôt.

### Étape B — Créer l'assignment
1. Sur classroom.github.com, dans ta classroom → **New assignment** → **Individual** (jamais « group » : tes TP sont individuels).
2. Donne un titre (ex. « S4 — Mini-site HTML »), une éventuelle date limite.
3. À l'étape « Starter code », choisis ton **template** (`tp-s4-html-template`).
4. Laisse la visibilité en **privé** (par défaut) : seuls l'élève et toi voyez son dépôt.
5. Termine : GitHub te donne un **lien d'invitation** à partager aux élèves.

### Étape C — Les élèves rejoignent
1. Donne le lien d'invitation (sur le site, par mail, ou écrit au tableau).
2. Chaque élève clique, accepte → **son dépôt personnel est créé automatiquement** à partir du template.

## 2.4. Ton workflow de validation (le cœur de ta pédagogie)

C'est là que tout se rejoint. Pour chaque étape d'un TP :

1. L'élève suit les consignes affichées **sur le site** (onglet TP).
2. Quand il a fini l'étape, il fait son **commit + push** (la commande est indiquée sur le site).
3. Il te **prévient** (à l'oral, en montrant son écran).
4. Tu ouvres le **tableau de bord de la classroom** : tu vois tous les dépôts, tu cliques sur le sien, tu lis son code et l'historique de commits.
5. Si c'est bon → feu vert, il passe à l'étape suivante. Sinon → tu vas le voir pour expliquer.

> Le **tableau de bord** (dans la classroom, onglet de l'assignment) liste tous les élèves et l'état de leurs dépôts. C'est ton point de lecture central : pas besoin de chercher les dépôts un par un.

## 2.5. Lire et commenter le code d'un élève

- Ouvre son dépôt depuis le tableau de bord.
- Onglet **Commits** : tu vois la régularité et les messages (utile pour évaluer C09/C03 — qualité du versionnement).
- Pour un retour écrit : ouvre un fichier → clique sur une ligne → **commentaire**. L'élève le verra.

## 2.6. L'année suivante

Tu pourras **réutiliser** un assignment (et son template) dans une nouvelle classroom : pas besoin de tout refaire. Crée une nouvelle organisation/classroom par promo, et réutilise tes devoirs existants.

---

# Récapitulatif — l'ordre des opérations

1. Déposer les 4 fichiers dans le repo (Partie 1.1).
2. Lancer Claude Code avec le Prompt 0, puis les prompts 1 à 6, en testant à chaque étape.
3. En parallèle ou ensuite : créer l'organisation + classroom GitHub (Partie 2.2), une fois.
4. Pour chaque TP de code : préparer un template + créer l'assignment (Partie 2.3).
5. En classe : workflow push → lecture dans le tableau de bord → validation (Partie 2.4).
6. Plus tard : produire les autres séquences (Lot 2) et les confier à Claude Code.

Garde en tête : rien ne presse, on avance lot par lot. Le site sera fonctionnel dès le Lot 1, et se remplira au fil des séquences qu'on produira ensemble.
