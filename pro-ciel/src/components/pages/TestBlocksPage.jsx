import BlockRenderer from '../blocks/BlockRenderer';

const testBlocks = [
  {
    type: 'hero',
    title: 'Page de test — BlockRenderer',
    subtitle: "Tous les types de blocs du Lot 1 sont affichés ci-dessous.",
  },

  {
    type: 'section',
    title: 'Partie 1 — Texte et encadrés',
    blocks: [
      {
        type: 'prose',
        content: "Le HTML n'est **pas** un langage de programmation, mais un *langage de balisage*. Son but : décrire le contenu avec des `balises`.",
      },
      {
        type: 'info',
        variant: 'analogie',
        title: 'Analogie',
        content: "Le HTML est le plan de l'architecte : il définit les pièces, pas la couleur des murs.",
      },
      {
        type: 'info',
        variant: 'astuce',
        content: "Utilisez toujours l'attribut `alt` sur vos images pour l'accessibilité.",
      },
      {
        type: 'info',
        variant: 'attention',
        content: "Ne fermez **jamais** une balise auto-fermante avec `</img>` en HTML5.",
      },
      {
        type: 'info',
        variant: 'definition',
        title: 'Définition',
        content: "Le **DOM** (Document Object Model) est la représentation en mémoire d'un document HTML.",
      },
    ],
  },

  {
    type: 'section',
    title: 'Partie 2 — Code',
    blocks: [
      {
        type: 'code',
        language: 'html',
        title: 'index.html',
        code: '<!DOCTYPE html>\n<html lang="fr">\n<head>\n  <title>Ma page</title>\n</head>\n<body>\n  <h1>Bonjour !</h1>\n</body>\n</html>',
      },
      {
        type: 'code',
        language: 'css',
        title: 'styles.css',
        code: 'body {\n  background: #0a0b14;\n  color: #eef0fb;\n  font-family: system-ui;\n}',
      },
      {
        type: 'code',
        language: 'js',
        code: 'const greeting = "Bonjour";\nconsole.log(greeting);',
      },
    ],
  },

  {
    type: 'section',
    title: 'Partie 3 — Cartes',
    blocks: [
      {
        type: 'cards',
        columns: 2,
        items: [
          { code: '<h1>…<h6>', text: 'Les titres, du plus au moins important.' },
          { code: '<p>', text: 'Un paragraphe de texte.' },
          { code: '<a href="...">', text: 'Un lien hypertexte.' },
          { code: '<img src alt>', text: "Une image, avec texte alternatif." },
        ],
      },
      {
        type: 'cards',
        columns: 3,
        items: [
          { title: 'CPU', text: 'Le processeur exécute les calculs.' },
          { title: 'RAM', text: 'Mémoire vive, temporaire et rapide.' },
          { title: 'SSD', text: 'Stockage permanent et rapide.' },
        ],
      },
    ],
  },

  {
    type: 'section',
    title: 'Partie 4 — Listes',
    blocks: [
      { type: 'prose', content: 'Liste à puces :' },
      {
        type: 'list',
        ordered: false,
        items: ['HTML pour la structure', 'CSS pour le style', 'JavaScript pour le comportement'],
      },
      { type: 'prose', content: 'Liste numérotée :' },
      {
        type: 'list',
        ordered: true,
        items: ['Créer le fichier `index.html`', 'Ajouter la structure de base', 'Ouvrir dans le navigateur'],
      },
    ],
  },

  {
    type: 'section',
    title: 'Partie 5 — Tableau',
    blocks: [
      {
        type: 'table',
        headers: ['Balise', 'Rôle', 'Exemple'],
        rows: [
          ['`<header>`', 'En-tête de page', 'Logo, navigation'],
          ['`<main>`', 'Contenu principal', 'Articles, sections'],
          ['`<footer>`', 'Pied de page', 'Crédits, liens'],
        ],
      },
    ],
  },

  {
    type: 'section',
    title: 'Partie 6 — Composant interactif',
    blocks: [
      { type: 'prose', content: 'Voici le diagramme sémantique HTML (composant interactif réutilisable) :' },
      { type: 'component', name: 'SemanticLayoutDiagram' },
    ],
  },

  {
    type: 'section',
    title: 'Partie 7 — Image',
    blocks: [
      {
        type: 'image',
        src: 'https://placehold.co/800x300/0d1117/4f7cff?text=Image+de+test',
        alt: 'Image placeholder pour le test',
        caption: 'Ceci est une légende de test.',
      },
    ],
  },

  { type: 'unknown_type_for_testing', foo: 'bar' },
];

export default function TestBlocksPage() {
  return (
    <div className="seq-wrap">
      <BlockRenderer blocks={testBlocks} />
    </div>
  );
}
