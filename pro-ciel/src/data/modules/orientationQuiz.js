// =============================================================================
// Questionnaire d'orientation — logique PURE (aucun rendu, aucune persistance).
// Tout le calcul se fait ici, côté client. Aucune réponse n'est enregistrée
// ni envoyée (public mineur). Testé par orientationQuiz.test.mjs.
// =============================================================================

export const QUIZ_QUESTIONS = [
  { id: 'horizon', label: 'Après le bac, tu te vois…', options: [
    { value: 'vite', label: 'Travailler le plus vite possible' },
    { value: 'bac2', label: "Faire 2 ans d'études, puis travailler" },
    { value: 'bac3plus', label: "Aller jusqu'à bac+3 ou plus" },
    { value: 'nsp', label: 'Je ne sais pas encore' },
  ] },
  { id: 'domaine', label: 'Ce qui te plaît le plus en CIEL…', options: [
    { value: 'reseaux', label: 'Les réseaux et la cybersécurité' },
    { value: 'prog', label: 'Programmer' },
    { value: 'elec', label: "L'électronique et les objets connectés" },
    { value: 'support', label: 'Aider les utilisateurs, dépanner' },
  ] },
  { id: 'apprendre', label: 'Tu apprends le mieux…', options: [
    { value: 'entreprise', label: 'En entreprise, en faisant' },
    { value: 'classe', label: 'En classe' },
    { value: 'mix', label: 'Un mélange des deux' },
  ] },
  { id: 'maths', label: 'Les maths et la physique, pour toi…', options: [
    { value: 'aise', label: "Je suis à l'aise" },
    { value: 'moyen', label: 'Ça va' },
    { value: 'difficile', label: "C'est difficile" },
  ] },
  { id: 'salaire', label: 'Être payé pendant tes études, c\'est…', options: [
    { value: 'indispensable', label: 'Indispensable' },
    { value: 'plus', label: 'Un plus' },
    { value: 'egal', label: 'Pas important' },
  ] },
  { id: 'mobilite', label: 'Pour tes études, tu serais prêt à…', options: [
    { value: 'oui', label: 'Partir étudier dans une autre ville (par exemple Grenoble)' },
    { value: 'region', label: 'Rester dans la région lyonnaise' },
    { value: 'non', label: 'Rester près de chez moi' },
  ] },
];

// BTS proposé (principale / alternative) selon le domaine préféré.
const BTS = {
  cielA: 'BTS CIEL option A (Informatique et réseaux)',
  cielB: 'BTS CIEL option B (Électronique et réseaux)',
  sisr: 'BTS SIO option SISR',
  slam: 'BTS SIO option SLAM',
};

const DOMAINE_TO_BTS = {
  reseaux: { principale: BTS.cielA, alternative: BTS.sisr },
  prog: { principale: BTS.slam, alternative: BTS.cielA },
  elec: { principale: BTS.cielB, alternative: BTS.cielA },
  support: { principale: BTS.sisr, alternative: BTS.cielA },
};

// Calcule le résultat à partir des réponses { horizon, domaine, apprendre, maths, salaire, mobilite }.
// Retourne { principale, alternative, ajouts:[{key,titre,texte,lien}], explication:[string] }.
export function computeQuizResult(a) {
  const map = DOMAINE_TO_BTS[a.domaine];
  const principaleIsCiel = a.domaine === 'reseaux' || a.domaine === 'elec';

  // Règle 2 — modalité
  const apprentissage =
    a.apprendre === 'entreprise' || a.salaire === 'indispensable' || a.horizon === 'vite';
  const modalite = apprentissage ? 'en apprentissage' : 'en statut scolaire';

  const principale = { bts: map.principale, modalite, lien: '#bts' };
  const alternative = { bts: map.alternative, lien: '#bts' };

  const ajouts = [];

  // Règle 3 — emploi direct si horizon = vite
  if (a.horizon === 'vite') {
    ajouts.push({
      key: 'emploi',
      titre: 'Travailler dès le bac pro',
      texte: "C'est un choix possible. Mais le BTS en apprentissage te fait travailler ET obtenir un diplôme en même temps : c'est pour ça que la voie principale reste le BTS.",
      lien: '#metiers',
    });
  }

  // Règle 2 (suite) — doubler avec des vœux en apprentissage (statut scolaire uniquement)
  if (!apprentissage && (a.apprendre === 'mix' || a.salaire === 'plus')) {
    ajouts.push({
      key: 'doubler',
      titre: 'Pense à doubler en apprentissage',
      texte: 'Ajoute aussi des vœux en apprentissage : ils ne comptent pas dans tes 10 vœux et te donnent une seconde chance.',
      lien: '#bts-apprentissage',
    });
  }

  // Règle 4 — après le BTS, si horizon = bac3plus
  if (a.horizon === 'bac3plus') {
    const items = ['Licence pro (1 an, très appréciée des recruteurs)'];
    if (principaleIsCiel) items.push("Prépa ATS, vers l'école d'ingénieur (BTS CIEL industriel)");
    items.push('BUT 3e année, sur dossier (admission parallèle)');
    ajouts.push({
      key: 'apresBTS',
      titre: 'Après ton BTS',
      texte: 'Ton BTS ouvre plusieurs suites vers le bac+3 : ' + items.join(' · ') + '.',
      lien: '#apres-bts',
    });
  }

  // Règle 5 — vœu ambitieux ENEPS, ou simple mention
  if (a.horizon === 'bac3plus' && a.maths === 'aise') {
    const specialite =
      a.domaine === 'reseaux' || a.domaine === 'support' ? 'BUT R&T' : 'BUT GEII';
    if (a.mobilite === 'oui') {
      ajouts.push({
        key: 'eneps',
        titre: 'Vœu ambitieux : ENEPS (' + specialite + ')',
        texte: "L'ENEPS à Grenoble est un BUT réservé aux bacs pros. À formuler EN PLUS de tes vœux de BTS, jamais à leur place. Spécialité conseillée : " + specialite + '.',
        lien: '#but',
      });
    } else {
      ajouts.push({
        key: 'enepsMention',
        titre: 'À savoir : un BUT réservé aux bacs pros',
        texte: "Il existe un BUT réservé aux bacs pros à Grenoble (ENEPS). Si tu changes d'avis sur la mobilité, regarde-le.",
        lien: '#but',
      });
    }
  }

  // Règle 6 — conseils maths si difficile
  if (a.maths === 'difficile') {
    ajouts.push({
      key: 'maths',
      titre: 'Pour réussir ton BTS',
      texte: 'En BTS, les maths et la physique comptent autant que la technique. Renforce-les dès la Terminale et ne reste pas seul en cas de difficulté.',
      lien: '#reussir-bts',
    });
  }

  // Règle 7 — plan B, toujours affiché
  ajouts.push({
    key: 'planB',
    titre: 'Ton plan B',
    texte: 'Si ça ne marche pas du premier coup : phase complémentaire, vœux en apprentissage (calendrier plus souple), classe passerelle via la CAES.',
    lien: '#plan-b',
  });

  // Explication « Pourquoi ce résultat ? » — une phrase par réponse clé
  const explication = [];
  const domainePhrase = {
    reseaux: 'Tu aimes les réseaux et la cybersécurité → le BTS CIEL option A est le plus proche de ce que tu fais déjà.',
    prog: 'Tu aimes programmer → le BTS SIO option SLAM est centré sur le développement.',
    elec: "Tu aimes l'électronique et les objets connectés → le BTS CIEL option B est fait pour ça.",
    support: "Tu aimes aider et dépanner → le BTS SIO option SISR est orienté support et infrastructure.",
  };
  explication.push(domainePhrase[a.domaine]);
  if (apprentissage) {
    if (a.apprendre === 'entreprise') explication.push("Tu préfères apprendre en entreprise → l'apprentissage.");
    else if (a.salaire === 'indispensable') explication.push("Être payé pendant tes études est indispensable → l'apprentissage.");
    else explication.push("Tu veux travailler vite → l'apprentissage te forme tout en te faisant travailler.");
  } else {
    explication.push('Le statut scolaire te convient (temps plein, avec des stages).');
  }
  const horizonPhrase = {
    vite: 'Tu veux travailler vite → le BTS en apprentissage combine emploi et diplôme.',
    bac2: 'Tu veux un diplôme en 2 ans → le BTS répond exactement à ça.',
    bac3plus: 'Tu vises bac+3 ou plus → on te montre les suites possibles après le BTS.',
    nsp: 'Tu hésites encore → le BTS garde toutes les portes ouvertes.',
  };
  explication.push(horizonPhrase[a.horizon]);
  if (a.maths === 'difficile') explication.push('Les maths sont difficiles pour toi → des conseils pour tenir en BTS.');

  return { principale, alternative, ajouts, explication };
}
