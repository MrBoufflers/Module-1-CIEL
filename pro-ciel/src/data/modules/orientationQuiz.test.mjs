// Tests de la logique du questionnaire d'orientation.
// Exécuter : node src/data/modules/orientationQuiz.test.mjs
import { computeQuizResult } from './orientationQuiz.js';

let failures = 0;
function check(name, cond) {
  if (!cond) { failures++; console.error('  ✗ ' + name); }
  else console.log('  ✓ ' + name);
}

const A = (horizon, domaine, apprendre, maths, salaire, mobilite) =>
  ({ horizon, domaine, apprendre, maths, salaire, mobilite });
const keys = (r) => r.ajouts.map(x => x.key);

// ---- Les 7 cas de test du guide ----
const cases = [
  { n: 1, a: A('bac2','reseaux','classe','moyen','egal','region'),
    principale: 'BTS CIEL option A (Informatique et réseaux)', modalite: 'en statut scolaire',
    alternative: 'BTS SIO option SISR', has: ['planB'], hasnot: ['doubler','emploi','apresBTS','eneps','enepsMention','maths'] },
  { n: 2, a: A('vite','support','entreprise','difficile','indispensable','non'),
    principale: 'BTS SIO option SISR', modalite: 'en apprentissage',
    alternative: 'BTS CIEL option A (Informatique et réseaux)', has: ['emploi','maths','planB'], hasnot: ['doubler','apresBTS','eneps','enepsMention'] },
  { n: 3, a: A('bac3plus','elec','mix','aise','plus','oui'),
    principale: 'BTS CIEL option B (Électronique et réseaux)', modalite: 'en statut scolaire',
    alternative: 'BTS CIEL option A (Informatique et réseaux)', has: ['doubler','apresBTS','eneps','planB'], hasnot: ['emploi','enepsMention','maths'] },
  { n: 4, a: A('bac3plus','reseaux','classe','aise','egal','region'),
    principale: 'BTS CIEL option A (Informatique et réseaux)', modalite: 'en statut scolaire',
    alternative: 'BTS SIO option SISR', has: ['apresBTS','enepsMention','planB'], hasnot: ['doubler','emploi','eneps','maths'] },
  { n: 5, a: A('bac3plus','prog','entreprise','moyen','plus','oui'),
    principale: 'BTS SIO option SLAM', modalite: 'en apprentissage',
    alternative: 'BTS CIEL option A (Informatique et réseaux)', has: ['apresBTS','planB'], hasnot: ['doubler','emploi','eneps','enepsMention','maths'] },
  { n: 6, a: A('nsp','prog','mix','difficile','plus','region'),
    principale: 'BTS SIO option SLAM', modalite: 'en statut scolaire',
    alternative: 'BTS CIEL option A (Informatique et réseaux)', has: ['doubler','maths','planB'], hasnot: ['emploi','apresBTS','eneps','enepsMention'] },
  { n: 7, a: A('bac2','elec','classe','difficile','indispensable','non'),
    principale: 'BTS CIEL option B (Électronique et réseaux)', modalite: 'en apprentissage',
    alternative: 'BTS CIEL option A (Informatique et réseaux)', has: ['maths','planB'], hasnot: ['doubler','emploi','apresBTS','eneps','enepsMention'] },
];

for (const c of cases) {
  const r = computeQuizResult(c.a);
  const k = keys(r);
  check(`cas ${c.n} — principale`, r.principale.bts === c.principale && r.principale.modalite === c.modalite);
  check(`cas ${c.n} — alternative`, r.alternative.bts === c.alternative);
  check(`cas ${c.n} — ajouts présents`, c.has.every(x => k.includes(x)));
  check(`cas ${c.n} — ajouts absents`, c.hasnot.every(x => !k.includes(x)));
}

// ATS dans "Après ton BTS" : présent si principal CIEL, absent si SIO
check('cas 3 (elec/CIEL) → ATS proposé', computeQuizResult(cases[2].a).ajouts.find(x=>x.key==='apresBTS').texte.includes('ATS'));
check('cas 4 (reseaux/CIEL) → ATS proposé', computeQuizResult(cases[3].a).ajouts.find(x=>x.key==='apresBTS').texte.includes('ATS'));
check('cas 5 (prog/SIO) → pas d\'ATS', !computeQuizResult(cases[4].a).ajouts.find(x=>x.key==='apresBTS').texte.includes('ATS'));
// Spécialité ENEPS : elec/prog → GEII ; reseaux/support → R&T
check('cas 3 (elec) → ENEPS GEII', computeQuizResult(cases[2].a).ajouts.find(x=>x.key==='eneps').titre.includes('GEII'));

// ---- Garde-fous sur les 1 296 combinaisons ----
const H=['vite','bac2','bac3plus','nsp'], D=['reseaux','prog','elec','support'],
  AP=['entreprise','classe','mix'], MA=['aise','moyen','difficile'],
  SA=['indispensable','plus','egal'], MO=['oui','region','non'];
let total=0, enepsCount=0, allPrincipaleBTS=true, allPlanB=true, allDistinct=true, neverLicence=true;
for (const horizon of H) for (const domaine of D) for (const apprendre of AP)
 for (const maths of MA) for (const salaire of SA) for (const mobilite of MO) {
  total++;
  const r = computeQuizResult({horizon,domaine,apprendre,maths,salaire,mobilite});
  const k = keys(r);
  if (!r.principale.bts.startsWith('BTS')) allPrincipaleBTS=false;
  if (!k.includes('planB')) allPlanB=false;
  if (r.principale.bts === r.alternative.bts) allDistinct=false;
  if (/licence générale|BUT classique/i.test(JSON.stringify(r))) neverLicence=false;
  const enepsHere = k.includes('eneps');
  if (enepsHere) {
    enepsCount++;
    if (!(horizon==='bac3plus' && maths==='aise' && mobilite==='oui')) allPrincipaleBTS=false;
  }
}
check('1296 combinaisons évaluées', total === 1296);
check('la voie principale est TOUJOURS un BTS', allPrincipaleBTS);
check('le plan B est TOUJOURS affiché', allPlanB);
check('principale ≠ alternative partout', allDistinct);
check('jamais de licence générale / BUT classique', neverLicence);
check('ENEPS proposé dans exactement 36 combinaisons', enepsCount === 36);

console.log(failures === 0 ? '\nTOUS LES TESTS PASSENT' : `\n${failures} test(s) en échec`);
process.exit(failures === 0 ? 0 : 1);
