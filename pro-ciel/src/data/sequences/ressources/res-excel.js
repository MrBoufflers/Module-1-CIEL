// =============================================================================
// Ressource — Tutoriel Excel : les bases professionnelles
// Type : Ressource — accessible depuis /ressources/excel
// =============================================================================

export const resExcel = {
  meta: {
    id: 'excel',
    sequence: null,
    niveau: 'ressources',
    title: 'Excel — Les bases professionnelles',
    icon: 'table',
    duree: 'Référence',
    theme: 'Bureautique',
    filRouge: "Ce guide t'apprend à manipuler des données et automatiser des calculs. Suis-le pour t'entraîner, reviens-y comme mémo.",
    ref: { competences: ['C01'], savoirs: [] },
    cyber: null,
  },

  course: [
    {
      type: 'hero',
      title: 'Excel — Les bases professionnelles',
      subtitle: "Apprends à organiser des données, écrire des formules et produire des graphiques. Suis chaque étape sur ton poste.",
    },

    // ===================== PARTIE 1 : L'INTERFACE =====================
    {
      type: 'section',
      title: "1. Comprendre l'interface",
      blocks: [
        {
          type: 'prose',
          content: "Un fichier Excel s'appelle un **classeur**. Un classeur contient des **feuilles** (les onglets en bas). Chaque feuille est une **grille de cellules**, repérées par une lettre (colonne) et un numéro (ligne). Exemple : la cellule **B3** est à la colonne B, ligne 3.",
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Vocabulaire',
          content: "**Cellule** : la case dans laquelle tu tapes. **Barre de formule** : la zone en haut qui affiche le contenu brut de la cellule sélectionnée (c'est là que tu verras tes formules). **Feuille** : un onglet de la grille.",
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Astuce navigation',
          content: "Clique sur une cellule pour la sélectionner. Tape directement pour saisir. Appuie sur **Tab** pour aller à la cellule suivante à droite, **Entrée** pour descendre. **Ctrl+Flèche** pour sauter au bout d'un bloc de données.",
        },
      ],
    },

    // ===================== PARTIE 2 : SAISIR DES DONNÉES =====================
    {
      type: 'section',
      title: '2. Saisir et organiser des données',
      blocks: [
        {
          type: 'prose',
          content: "La première règle : **une donnée par cellule**. Pas de paragraphe dans une cellule, pas plusieurs infos mélangées. Un tableau propre a des **en-têtes en première ligne** (noms des colonnes) et des **données en dessous** (une ligne par élément).",
        },
        {
          type: 'info',
          variant: 'attention',
          title: "L'erreur du débutant",
          content: "Fusionner des cellules pour « faire joli ». Ça casse les formules et les tris. **On ne fusionne pas** (sauf pour un titre isolé au-dessus du tableau, et encore).",
        },
      ],
    },

    // ===================== EXERCICE 1 =====================
    {
      type: 'section',
      title: 'Exercice 1 — Créer un tableau propre',
      blocks: [
        {
          type: 'prose',
          content: "On va créer un petit tableau de notes pour s'entraîner.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "Ouvre un nouveau classeur Excel.",
            "En **A1**, tape : **Matière**. En **B1** : **Note 1**. En **C1** : **Note 2**. En **D1** : **Moyenne**.",
            "En **A2** : Maths. **A3** : Français. **A4** : Anglais. **A5** : Info.",
            "Remplis les colonnes B et C avec des notes fictives (entre 0 et 20).",
            "Sélectionne la ligne 1 (les en-têtes), passe-la en **gras** (Ctrl+B).",
            "Sélectionne tout le tableau (A1 jusqu'à D5), ajoute des **bordures** : Accueil → Bordures → Toutes les bordures.",
          ],
        },
      ],
    },

    // ===================== PARTIE 3 : LES FORMULES =====================
    {
      type: 'section',
      title: "3. Les formules : la force d'Excel",
      blocks: [
        {
          type: 'prose',
          content: "C'est **LE** sujet. Une formule commence toujours par le signe **=**. Elle dit à Excel : « calcule quelque chose ». Le résultat s'affiche dans la cellule, et se **recalcule automatiquement** si les données changent.",
        },
        {
          type: 'info',
          variant: 'analogie',
          title: 'Analogie',
          content: "Une formule, c'est une recette de cuisine : tu donnes les ingrédients (les cellules) et l'opération (additionner, moyenner…), et Excel te sert le plat (le résultat). Si tu changes un ingrédient, le plat change tout seul.",
        },
        {
          type: 'prose',
          content: "**Les formules essentielles :**",
        },
        {
          type: 'table',
          headers: ['Ce que tu veux faire', 'La formule', 'Exemple'],
          rows: [
            ['Additionner deux cellules', '=A1+B1', '=B2+C2 → additionne les deux notes'],
            ['Faire la somme d\u2019une plage', '=SOMME(plage)', '=SOMME(B2:B5) → total de toutes les notes 1'],
            ['Calculer la moyenne', '=MOYENNE(plage)', '=MOYENNE(B2:C2) → moyenne des 2 notes de Maths'],
            ['Trouver le maximum', '=MAX(plage)', '=MAX(B2:B5) → la meilleure note 1'],
            ['Trouver le minimum', '=MIN(plage)', '=MIN(B2:B5) → la moins bonne note 1'],
            ['Compter les cellules', '=NB(plage)', '=NB(B2:B5) → combien de notes il y a'],
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Mémo — Écrire une formule',
          content: "1. Clique sur la cellule où tu veux le résultat. 2. Tape **=** puis la formule. 3. Appuie sur **Entrée**. Le résultat s'affiche. Pour **voir** la formule d'une cellule, clique dessus et regarde la barre de formule en haut.",
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Notion de plage',
          content: "**B2:B5** signifie « de la cellule B2 à la cellule B5 » (4 cellules). **B2:C2** signifie « de B2 à C2 » (2 cellules sur la même ligne). On utilise les **:** pour définir une plage continue.",
        },
      ],
    },

    // ===================== EXERCICE 2 =====================
    {
      type: 'section',
      title: 'Exercice 2 — Écrire des formules',
      blocks: [
        {
          type: 'prose',
          content: "Sur le tableau de l'exercice 1 :",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "En **D2**, tape : `=MOYENNE(B2:C2)` puis Entrée. La moyenne des deux notes de Maths s'affiche.",
            "Fais de même en **D3**, **D4**, **D5** pour chaque matière (adapte les numéros de ligne).",
            "En **B6**, tape : `=SOMME(B2:B5)` → le total des notes 1.",
            "En **B7**, tape : `=MAX(B2:B5)` → la meilleure note 1.",
            "En **B8**, tape : `=MIN(B2:B5)` → la moins bonne note 1.",
            "Change une note dans la colonne B : observe que **toutes les formules se recalculent** automatiquement.",
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Astuce du pro : recopier une formule',
          content: "Au lieu de retaper la même formule pour chaque ligne, tu peux **recopier** : clique sur D2, place ta souris sur le petit carré noir en bas à droite de la cellule (la poignée de recopie), et **tire vers le bas** jusqu'à D5. Excel adapte automatiquement les numéros de ligne.",
        },
      ],
    },

    // ===================== PARTIE 4 : MISE EN FORME =====================
    {
      type: 'section',
      title: '4. Mise en forme d\u2019un tableau',
      blocks: [
        {
          type: 'list',
          ordered: false,
          items: [
            "**En-têtes en gras** : sélectionne la ligne 1, Ctrl+B.",
            "**Bordures** : sélectionne tout le tableau, Accueil → Bordures → Toutes les bordures.",
            "**Largeur des colonnes** : double-clique sur le séparateur de colonne (entre A et B en haut) pour ajuster automatiquement la largeur au contenu.",
            "**Couleur d'en-tête** (optionnel) : sélectionne la ligne 1, Accueil → Couleur de remplissage → un bleu ou gris clair.",
          ],
        },
      ],
    },

    // ===================== PARTIE 5 : GRAPHIQUE =====================
    {
      type: 'section',
      title: '5. Créer un graphique',
      blocks: [
        {
          type: 'prose',
          content: "Un graphique rend les données visuelles et plus faciles à comparer.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "Sélectionne les données que tu veux représenter (par ex. A1:C5 — les matières et les deux notes).",
            "Va dans l'onglet **Insertion** → **Graphiques** → choisis **Histogramme groupé** (les barres côte à côte).",
            "Le graphique apparaît : chaque matière a ses deux barres (Note 1 et Note 2).",
            "Double-clique sur le titre du graphique pour le modifier (ex. « Comparaison des notes »).",
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Mémo — Types de graphiques courants',
          content: "**Histogramme** (barres) : comparer des valeurs entre catégories. **Courbe** (lignes) : montrer une évolution dans le temps. **Camembert** (secteurs) : montrer des proportions d'un total.",
        },
      ],
    },

    // ===================== EXERCICE 3 =====================
    {
      type: 'section',
      title: 'Exercice 3 — Tableau complet avec graphique',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            "Reprends le tableau des exercices précédents (avec formules et mise en forme).",
            "Crée un **histogramme** comparant les moyennes de chaque matière (colonnes A et D).",
            "Change le titre du graphique en quelque chose de clair.",
            "Enregistre le fichier sous le nom **Exercice-Excel-NomPrenom.xlsx**.",
          ],
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Récap — Les gestes essentiels Excel',
          content: "**Une donnée par cellule**, en-têtes en ligne 1. **Formules** avec = (SOMME, MOYENNE, MAX, MIN). **Recopie** la poignée vers le bas. **Mise en forme** : gras, bordures, largeur auto. **Graphique** via Insertion.",
        },
      ],
    },
  ],
};
