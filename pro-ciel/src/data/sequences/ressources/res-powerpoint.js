// =============================================================================
// Ressource — Tutoriel PowerPoint : les bases professionnelles
// Type : Ressource — accessible depuis /ressources/powerpoint
// =============================================================================

export const resPowerpoint = {
  meta: {
    id: 'powerpoint',
    sequence: null,
    niveau: 'ressources',
    title: 'PowerPoint — Les bases professionnelles',
    icon: 'presentation',
    duree: 'Référence',
    theme: 'Bureautique',
    filRouge: "Ce guide t'apprend à construire une présentation claire et percutante. Suis-le pour t'entraîner, reviens-y comme mémo.",
    ref: { competences: ['C01'], savoirs: [] },
    cyber: null,
  },

  course: [
    {
      type: 'hero',
      title: 'PowerPoint — Les bases professionnelles',
      subtitle: "Apprends à construire une présentation qui donne envie d'écouter, pas de lire. Suis chaque étape sur ton poste.",
    },

    // ===================== LA RÈGLE D'OR =====================
    {
      type: 'section',
      title: 'La règle d\u2019or avant de commencer',
      blocks: [
        {
          type: 'info',
          variant: 'attention',
          title: "L'erreur du débutant",
          content: "Copier-coller tout son texte sur les diapositives et lire l'écran pendant la présentation. Le public décroche en 30 secondes.",
        },
        {
          type: 'prose',
          content: "**La règle d'or** : une diapositive = **une idée** = **peu de texte** (des mots-clés, pas des phrases). C'est **toi** qui parles, la diapo **illustre**. Si le public peut tout comprendre rien qu'en lisant les diapos, tu ne sers à rien.",
        },
        {
          type: 'info',
          variant: 'analogie',
          title: 'Analogie',
          content: "Une bonne présentation, c'est comme un panneau routier : un pictogramme, un ou deux mots, tu comprends en un coup d'oeil. Pas un roman.",
        },
      ],
    },

    // ===================== PARTIE 1 : STRUCTURE =====================
    {
      type: 'section',
      title: '1. La structure de base',
      blocks: [
        {
          type: 'prose',
          content: "Toute présentation suit un plan simple qui fonctionne toujours :",
        },
        {
          type: 'cards',
          columns: 4,
          items: [
            { title: 'Diapo 1 — Titre', text: "Le sujet, ton nom, la date. C'est la couverture." },
            { title: 'Diapo 2 — Plan', text: "Les grandes parties de ta présentation (optionnel mais pro)." },
            { title: 'Diapos 3-N — Contenu', text: "Une idée par diapo. Des mots-clés, des images, des schémas." },
            { title: 'Dernière — Conclusion', text: "Le message à retenir et/ou les questions." },
          ],
        },
        {
          type: 'prose',
          content: "**Comment créer des diapositives :**",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "Ouvre PowerPoint. Un diaporama vierge s'ouvre avec une diapositive de titre.",
            "Pour **ajouter une diapositive** : onglet **Accueil** → **Nouvelle diapositive** → choisis une disposition (Titre + contenu, Deux contenus, Vide…).",
            "Pour **changer la disposition** d'une diapo existante : clic droit sur la diapo dans le panneau de gauche → **Disposition** → choisis.",
            "Pour **supprimer** : clic droit sur la diapo → **Supprimer la diapositive**.",
          ],
        },
      ],
    },

    // ===================== EXERCICE 1 =====================
    {
      type: 'section',
      title: 'Exercice 1 — Créer la structure',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            "Ouvre un nouveau diaporama vierge.",
            "Sur la **diapo 1** (titre) : tape le titre de ta présentation (sujet libre) et ton nom en dessous.",
            "Ajoute une **diapo 2** avec la disposition « Titre + contenu » : tape un titre « Plan » et liste 3 parties.",
            "Ajoute **3 diapos de contenu** (une par partie de ton plan). Mets juste un titre et 3-4 mots-clés en puces.",
            "Ajoute une **dernière diapo** : titre « Conclusion » avec un ou deux mots-clés et « Questions ? ».",
            "Tu dois avoir **6 diapositives** au total.",
          ],
        },
      ],
    },

    // ===================== PARTIE 2 : IMAGES ET VISUELS =====================
    {
      type: 'section',
      title: '2. Insérer des images et visuels',
      blocks: [
        {
          type: 'prose',
          content: "Les visuels rendent une présentation vivante. Mais ils doivent **illustrer**, pas décorer. Chaque image doit être liée à l'idée de la diapo.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "Va dans l'onglet **Insertion** → **Images** → choisis **Cet appareil** (pour une image enregistrée) ou **Images en ligne** (pour chercher).",
            "L'image s'insère sur la diapo. **Redimensionne-la** en tirant un coin (toujours un coin, pas un côté, pour garder les proportions).",
            "**Positionne-la** : fais-la glisser où tu veux. Des guides bleus apparaissent pour l'aligner.",
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Astuce du pro',
          content: "Une image de qualité en plein écran avec juste un mot en titre, c'est souvent plus percutant que 10 puces de texte. Ose les grandes images.",
        },
      ],
    },

    // ===================== PARTIE 3 : MISE EN FORME =====================
    {
      type: 'section',
      title: '3. Mise en forme et lisibilité',
      blocks: [
        {
          type: 'prose',
          content: "Les règles de lisibilité d'une présentation projetée :",
        },
        {
          type: 'list',
          ordered: false,
          items: [
            "**Taille de police** : minimum 24 pt pour le texte courant, 32-44 pt pour les titres. En dessous, c'est illisible au fond de la salle.",
            "**Contraste** : texte clair sur fond sombre, ou texte sombre sur fond clair. Jamais de texte gris clair sur fond blanc.",
            "**Nombre de mots** : la règle « 6x6 » : maximum 6 lignes de 6 mots par diapo. Si tu dépasses, tu as trop de texte.",
            "**Une seule police** pour tout le diaporama (deux au maximum : une pour les titres, une pour le texte).",
            "**Pas d'animation excessive** : les lettres qui arrivent une par une, le texte qui rebondit — c'est distrayant. Au plus, un « apparition » simple.",
          ],
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Mémo — la checklist de la bonne diapo',
          content: "Un titre clair. Des mots-clés (pas des phrases). Un visuel si pertinent. Police > 24 pt. Bon contraste. Pas de surcharge.",
        },
      ],
    },

    // ===================== EXERCICE 2 =====================
    {
      type: 'section',
      title: 'Exercice 2 — Enrichir et soigner',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            "Reprends le diaporama de l'exercice 1.",
            "Insère **au moins une image** sur une des diapos de contenu.",
            "Vérifie la **taille de police** : les titres doivent être en 32+ pt et le texte en 24+ pt. Corrige si besoin.",
            "Vérifie la **règle 6x6** : aucune diapo ne doit avoir plus de 6 lignes de texte.",
            "Choisis un **thème** sobre : onglet **Création** → clique sur un des thèmes proposés (pas les plus chargés).",
            "Enregistre sous le nom **Exercice-PPT-NomPrenom.pptx**.",
          ],
        },
      ],
    },

    // ===================== PARTIE 4 : PRESENTER =====================
    {
      type: 'section',
      title: '4. Présenter (le mode diaporama)',
      blocks: [
        {
          type: 'prose',
          content: "Tes diapos sont prêtes. Voici comment les projeter :",
        },
        {
          type: 'list',
          ordered: false,
          items: [
            "**Lancer le diaporama** : touche **F5** (depuis le début) ou **Maj+F5** (depuis la diapo actuelle).",
            "**Avancer** : clic, Entrée, ou flèche droite.",
            "**Reculer** : flèche gauche.",
            "**Quitter** : touche **Echap**.",
          ],
        },
        {
          type: 'info',
          variant: 'astuce',
          title: 'Dernier conseil',
          content: "Quand tu présentes : **regarde ton public, pas l'écran**. Tu connais tes diapos (tu les as faites). Le public te regarde, pas la projection. C'est toi le sujet, la diapo est juste un appui.",
        },
        {
          type: 'info',
          variant: 'definition',
          title: 'Récap — Les gestes essentiels PowerPoint',
          content: "**Structure** : titre → plan → contenu (1 idée/diapo) → conclusion. **Règle d'or** : peu de texte, c'est toi qui parles. **Visuels** : des images qui illustrent, pas qui décorent. **Lisibilité** : police > 24 pt, bon contraste, pas de surcharge. **F5** pour lancer.",
        },
      ],
    },
  ],
};
