// =============================================================================
// Ressource — Tutoriel Word : les bases professionnelles
// Type : Ressource (pas une séquence de cours) — accessible depuis /ressources/word
// Objectif : tuto pas à pas + mémo de référence pour les élèves.
// À utiliser pendant le cours S2 (activités guidées) et comme référence ensuite.
// =============================================================================

export const resWord = {
  meta: {
    id: 'word',
    sequence: null,              // ce n'est pas une séquence numérotée
    niveau: 'ressources',
    title: 'Word — Les bases professionnelles',
    icon: 'file-text',
    duree: 'Référence',
    theme: 'Bureautique',
    filRouge: "Ce guide t'accompagne pour produire des documents structurés et professionnels. Suis-le en cours pour t'entraîner, et reviens-y chaque fois que tu as besoin d'un rappel.",
    ref: { competences: ['C01'], savoirs: [] },
    cyber: null,
  },

  course: [
    {
      type: 'hero',
      title: 'Word — Les bases professionnelles',
      subtitle: "Apprends à produire un document structuré, propre et professionnel. Suis chaque étape sur ton poste.",
    },

    // ===================== PARTIE 1 : LES STYLES =====================
    {
      type: 'section',
      title: "1. Les styles : la règle n°1 du professionnel",
      blocks: [
        {
          type: 'info',
          variant: 'attention',
          title: "L'erreur du débutant",
          content: "Sélectionner un texte et changer sa taille / police / couleur à la main pour en faire un titre. C'est le meilleur moyen d'avoir un document incohérent et impossible à maintenir.",
        },
        {
          type: 'prose',
          content: "Un professionnel utilise les **styles**. Un style, c'est un réglage prédéfini (taille, police, espacement) associé à un *rôle* (Titre 1, Titre 2, Normal). Quand tu appliques un style, **tout le formatage se fait automatiquement et de façon cohérente** dans tout le document.",
        },
        {
          type: 'info',
          variant: 'analogie',
          title: 'Analogie',
          content: "Les styles, c'est comme un uniforme : chaque rôle (titre, sous-titre, texte) a son « uniforme » visuel. Si tu changes l'uniforme, tous ceux qui le portent changent en même temps.",
        },
        {
          type: 'prose',
          content: "**Comment appliquer un style :**",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "Tape ton texte normalement.",
            "Sélectionne la ligne que tu veux transformer en titre.",
            "Dans le ruban **Accueil**, dans la zone **Styles**, clique sur **Titre 1** (pour un titre principal) ou **Titre 2** (pour un sous-titre).",
            "Le texte change immédiatement d'apparence : c'est le style qui s'applique.",
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Mémo rapide — Les styles à connaître',
          content: "**Titre 1** : le titre principal du document ou d'une grande partie. **Titre 2** : un sous-titre à l'intérieur d'une partie. **Normal** : le texte courant. Tu n'as besoin que de ces trois-là pour commencer.",
        },
      ],
    },

    // ===================== EXERCICE 1 =====================
    {
      type: 'section',
      title: 'Exercice 1 — Appliquer des styles',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            "Ouvre un nouveau document Word vierge.",
            "Tape sur la première ligne : **Mon premier document structuré**. Sélectionne cette ligne et applique le style **Titre 1**.",
            "Saute une ligne, tape : **Partie 1 — Introduction**. Applique le style **Titre 2**.",
            "En dessous, tape un paragraphe de 2-3 phrases (n'importe quoi, c'est pour s'entraîner). Laisse-le en style **Normal**.",
            "Tape : **Partie 2 — Détails**. Applique **Titre 2**.",
            "Ajoute un autre paragraphe en dessous.",
            "Vérifie : tu dois avoir un Titre 1 en haut, puis deux sections avec chacune un Titre 2 et un paragraphe.",
          ],
        },
      ],
    },

    // ===================== PARTIE 2 : TABLE DES MATIÈRES =====================
    {
      type: 'section',
      title: '2. La table des matières automatique',
      blocks: [
        {
          type: 'prose',
          content: "C'est là que les styles prennent tout leur sens. Word peut **générer automatiquement** une table des matières à partir des titres stylés. Si tu changes un titre, la table se met à jour toute seule.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "Place ton curseur **tout en haut du document** (avant le Titre 1). Appuie sur Entrée pour créer une ligne vide au-dessus.",
            "Va dans l'onglet **Références** du ruban.",
            "Clique sur **Table des matières** → choisis un des modèles automatiques proposés.",
            "La table apparaît avec tes titres et les numéros de page.",
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Mettre à jour la table',
          content: "Si tu ajoutes ou modifies des titres, **fais un clic droit sur la table des matières → « Mettre à jour le champ » → « Mettre à jour toute la table »**. Tout se recalcule. C'est pour ça que les styles sont essentiels : sans eux, pas de table automatique.",
        },
      ],
    },

    // ===================== EXERCICE 2 =====================
    {
      type: 'section',
      title: 'Exercice 2 — Insérer une table des matières',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            "Sur le document de l'exercice 1, ajoute une table des matières automatique en haut.",
            "Vérifie qu'elle affiche bien « Partie 1 — Introduction » et « Partie 2 — Détails » avec les numéros de page.",
            "Ajoute une **Partie 3 — Conclusion** (en Titre 2) avec un paragraphe en dessous.",
            "Reviens sur la table des matières, fais un clic droit → **Mettre à jour toute la table**. La Partie 3 doit apparaître.",
          ],
        },
      ],
    },

    // ===================== PARTIE 3 : LISTES =====================
    {
      type: 'section',
      title: '3. Les listes à puces et numérotées',
      blocks: [
        {
          type: 'prose',
          content: "Pour énumérer des éléments : utilise les **listes** du ruban Accueil (boutons avec les puces ou les numéros). Ne tape jamais des tirets à la main.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "Tape plusieurs lignes d'éléments (un par ligne).",
            "Sélectionne-les toutes.",
            "Dans **Accueil**, clique sur le bouton **Liste à puces** (les trois points) ou **Liste numérotée** (les 1-2-3).",
          ],
        },
      ],
    },

    // ===================== PARTIE 4 : EN-TÊTE / PIED DE PAGE =====================
    {
      type: 'section',
      title: '4. En-tête et pied de page',
      blocks: [
        {
          type: 'prose',
          content: "L'en-tête apparaît en haut de **chaque page**, le pied de page en bas. On y met souvent le nom du document, le nom de l'auteur, ou les numéros de page.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "Va dans l'onglet **Insertion** → **Pied de page** → choisis un modèle simple.",
            "Tape ton nom et ta classe.",
            "Pour ajouter un numéro de page automatique : dans le pied de page, clique sur **Numéro de page** → **Bas de page** → choisis un style.",
            "Double-clique en dehors du pied de page pour revenir au texte normal.",
          ],
        },
      ],
    },

    // ===================== EXERCICE 3 =====================
    {
      type: 'section',
      title: 'Exercice 3 — Document complet',
      blocks: [
        {
          type: 'prose',
          content: "Reprends ton document des exercices précédents et finalise-le :",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "Ajoute une **liste à puces** dans la Partie 1 (au moins 3 éléments).",
            "Ajoute une **liste numérotée** dans la Partie 2.",
            "Insère un **pied de page** avec ton nom et le numéro de page automatique.",
            "Mets à jour la table des matières si besoin.",
            "Enregistre le fichier sous le nom **Exercice-Word-NomPrenom.docx**.",
          ],
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Récap — Les gestes essentiels Word',
          content: "**Styles** (Titre 1, Titre 2, Normal) pour structurer. **Table des matières automatique** via Références. **Listes** via Accueil. **Pied de page** via Insertion. C'est tout ce qu'il te faut pour un document professionnel.",
        },
      ],
    },
  ],
};
