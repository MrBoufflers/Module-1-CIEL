/* eslint-disable react-refresh/only-export-components -- module de données : petits composants (encadrés, schéma, quiz) co-localisés avec le contenu exporté */
import React from 'react';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';
import PracticalWork from '../../components/organisms/PraticalWork';
import { QUIZ_QUESTIONS, computeQuizResult } from './orientationQuiz.js';

// =============================================================================
// Guide d'orientation 2027 — Après le bac pro CIEL
// Mise à jour septembre 2026. Dates de la session 2027 non publiées = « à venir ».
// Chiffres : jeux de données ouverts du ministère (Parcoursup 2024 et 2025).
// Le questionnaire (section 3) calcule tout côté client : aucune réponse
// n'est enregistrée ni envoyée. Logique testée dans orientationQuiz.test.mjs.
// =============================================================================

// ----- Encadrés colorés -----
const Callout = ({ tone, label, children }) => {
  const bg = {
    parents: 'bg-amber-50 border-amber-300',
    attention: 'bg-red-50 border-red-300',
    astuce: 'bg-blue-50 border-blue-200',
  }[tone];
  const tc = {
    parents: 'text-amber-900',
    attention: 'text-red-800',
    astuce: 'text-blue-800',
  }[tone];
  return (
    <Card className={`${bg} not-prose`}>
      <p className={`font-semibold mb-2 ${tc}`}>{label}</p>
      <div className="text-sm text-gray-700 space-y-2">{children}</div>
    </Card>
  );
};
const Parents = ({ children }) => <Callout tone="parents" label="Pour les parents">{children}</Callout>;
const Attention = ({ children }) => <Callout tone="attention" label="Attention">{children}</Callout>;
const Astuce = ({ children }) => <Callout tone="astuce" label="Astuce">{children}</Callout>;

// ----- Accordéon (tableaux détaillés) -----
const Accordion = ({ summary, children }) => (
  <details className="not-prose my-4 border border-gray-300 rounded-lg overflow-hidden">
    <summary className="cursor-pointer select-none px-4 py-3 font-semibold bg-gray-50 hover:bg-gray-100">{summary}</summary>
    <div className="p-4">{children}</div>
  </details>
);

// ----- Tableau (cellules pouvant contenir du HTML : liens) -----
const renderTable = (headers, data) => (
  <div className="overflow-x-auto not-prose my-6">
    <table className="w-full text-sm text-left text-gray-600 border-collapse border border-gray-300">
      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
          {headers.map((h) => (
            <th key={h} scope="col" className="px-3 py-2 border border-gray-300">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="bg-white border-b hover:bg-gray-50 align-top">
            {row.map((cell, j) => (
              <td key={j} className="px-3 py-2 border border-gray-300" dangerouslySetInnerHTML={{ __html: cell }} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ----- Schéma d'orientation (SVG cliquable, code couleur commun) -----
const C = {
  teal: { fill: '#E1F5EE', stroke: '#0F6E56', text: '#085041' },
  ambre: { fill: '#FAEEDA', stroke: '#854F0B', text: '#633806' },
  gris: { fill: '#F1EFE8', stroke: '#5F5E5A', text: '#444441' },
};
const SchemaNode = ({ x, y, w, tone, href, title, sub }) => {
  const c = C[tone];
  return (
    <a href={href}>
      <rect x={x} y={y} width={w} height={46} rx={8} fill={c.fill} stroke={c.stroke} strokeWidth={1.5} />
      <text x={x + w / 2} y={y + (sub ? 20 : 28)} textAnchor="middle" fontSize="12" fontWeight="700" fill={c.text}>{title}</text>
      {sub && <text x={x + w / 2} y={y + 34} textAnchor="middle" fontSize="9.5" fill={c.text}>{sub}</text>}
    </a>
  );
};
const Edge = ({ d, tone, dashed }) => (
  <path d={d} fill="none" stroke={C[tone].stroke} strokeWidth={1.6}
    strokeDasharray={dashed ? '5 4' : undefined} markerEnd={`url(#arrow-${tone})`} />
);
const OrientationSchema = () => (
  <div className="not-prose my-6 overflow-x-auto">
    <svg viewBox="0 0 660 430" width="100%" role="img"
      aria-label="Schéma des parcours après le bac pro CIEL : bac, bac+2, bac+3, bac+5"
      style={{ minWidth: 560, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12 }}>
      <defs>
        {['teal', 'ambre', 'gris'].map((t) => (
          <marker key={t} id={`arrow-${t}`} viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill={C[t].stroke} />
          </marker>
        ))}
      </defs>
      {/* étiquettes de niveau */}
      {[['Bac', 54], ['Bac+2', 144], ['Bac+3', 250], ['Bac+5', 356]].map(([l, y]) => (
        <text key={l} x={8} y={y} fontSize="11" fontWeight="700" fill="#9ca3af">{l}</text>
      ))}
      {/* flèches (tracées avant les nœuds) */}
      <Edge d="M225,54 L410,54" tone="gris" />
      <Edge d="M150,78 L150,120" tone="teal" />
      <Edge d="M225,66 L470,120" tone="ambre" />
      <Edge d="M120,168 L110,228" tone="teal" />
      <Edge d="M180,168 L320,228" tone="teal" dashed />
      <Edge d="M215,166 L540,228" tone="teal" dashed />
      <Edge d="M500,168 L545,228" tone="ambre" />
      <Edge d="M110,274 L330,332" tone="teal" dashed />
      <Edge d="M330,274 L345,332" tone="ambre" />
      <Edge d="M545,274 L370,332" tone="ambre" />
      {/* nœuds */}
      <SchemaNode x={75} y={32} w={150} tone="gris" href="#essentiel" title="Bac pro CIEL" />
      <SchemaNode x={410} y={32} w={150} tone="gris" href="#metiers" title="Emploi" sub="dès le bac" />
      <SchemaNode x={75} y={122} w={150} tone="teal" href="#bts" title="BTS CIEL ou SIO" sub="scolaire ou apprentissage" />
      <SchemaNode x={410} y={122} w={150} tone="ambre" href="#but" title="BUT ENEPS" sub="réservé bacs pros" />
      <SchemaNode x={35} y={228} w={150} tone="teal" href="#apres-bts" title="Licence pro" sub="1 an, insertion" />
      <SchemaNode x={255} y={228} w={150} tone="ambre" href="#apres-bts" title="Prépa ATS" sub="vers l'ingénieur" />
      <SchemaNode x={475} y={228} w={150} tone="ambre" href="#but" title="BUT 3e année" sub="grade de licence" />
      <SchemaNode x={250} y={334} w={190} tone="gris" href="#apres-bts" title="École d'ingénieur, master" sub="dossier, concours ou alternance" />
    </svg>
    <div className="text-xs text-gray-600 mt-2 flex flex-wrap gap-x-6 gap-y-1">
      <span><span style={{ color: C.teal.stroke }}>■</span> Accessible avec un bac pro</span>
      <span><span style={{ color: C.ambre.stroke }}>■</span> Sélectif : très bon dossier</span>
      <span>┄ Sur dossier après le BTS : possible, jamais automatique</span>
    </div>
  </div>
);

// ----- Questionnaire interactif (aucune donnée enregistrée ni envoyée) -----
const OrientationQuiz = () => {
  const [answers, setAnswers] = React.useState({});
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState('');

  const pick = (qid, value) => {
    setAnswers((a) => ({ ...a, [qid]: value }));
    setError('');
  };
  const submit = () => {
    if (QUIZ_QUESTIONS.some((q) => !answers[q.id])) { setError('Choisis une réponse'); return; }
    setResult(computeQuizResult(answers));
  };
  const reset = () => { setAnswers({}); setResult(null); setError(''); };

  if (result) {
    return (
      <Card className="not-prose bg-white border-gray-200">
        <p className="text-lg font-bold mb-1">Ton résultat</p>
        <p className="text-xs text-gray-500 mb-4">Une piste, pas une décision. Rien n'a été enregistré.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <a href={result.principale.lien} className="block p-4 rounded-lg bg-green-50 border border-green-300 no-underline">
            <span className="text-xs uppercase font-bold text-green-700">Voie principale</span>
            <span className="block font-semibold text-gray-800">{result.principale.bts}</span>
            <span className="block text-sm text-gray-600">{result.principale.modalite}</span>
          </a>
          <a href={result.alternative.lien} className="block p-4 rounded-lg bg-blue-50 border border-blue-200 no-underline">
            <span className="text-xs uppercase font-bold text-blue-700">Alternative</span>
            <span className="block font-semibold text-gray-800">{result.alternative.bts}</span>
          </a>
        </div>
        <div className="mt-4 space-y-2">
          {result.ajouts.map((add) => (
            <a key={add.key} href={add.lien} className="block p-3 rounded-lg bg-gray-50 border border-gray-200 no-underline">
              <span className="block font-semibold text-gray-800">{add.titre}</span>
              <span className="block text-sm text-gray-600">{add.texte}</span>
            </a>
          ))}
        </div>
        <details className="mt-4">
          <summary className="cursor-pointer font-semibold text-gray-700">Pourquoi ce résultat ?</summary>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
            {result.explication.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </details>
        <button onClick={reset} className="mt-4 px-4 py-2 rounded-lg bg-gray-800 text-white text-sm font-semibold">Recommencer</button>
      </Card>
    );
  }

  return (
    <Card className="not-prose bg-white border-gray-200">
      <div className="space-y-5">
        {QUIZ_QUESTIONS.map((q) => (
          <fieldset key={q.id}>
            <legend className="font-semibold text-gray-800 mb-2">{q.label}</legend>
            <div className="flex flex-wrap gap-2">
              {q.options.map((o) => {
                const on = answers[q.id] === o.value;
                return (
                  <button key={o.value} type="button" onClick={() => pick(q.id, o.value)}
                    className={`px-3 py-2 rounded-lg border text-sm text-left ${on ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-gray-300 text-gray-700 hover:border-indigo-400'}`}>
                    {o.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>
      {error && <p className="text-sm font-semibold text-red-600 mt-3">{error}</p>}
      <button onClick={submit} className="mt-5 px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold">Voir mon résultat</button>
      <p className="text-xs text-gray-500 mt-3">Tes réponses ne sont ni enregistrées ni envoyées : tout est calculé dans ton navigateur.</p>
    </Card>
  );
};

// =============================================================================
// Données des tableaux
// =============================================================================
const ext = (url, label) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">${label}</a>`;
const psFiche = (cod) => ext(`https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=${cod}&typeBac=0&originePc=0`, 'Parcoursup');

const cartesHeaders = ['', 'BTS', 'BUT', 'Licence', 'Licence pro', "Bachelor d'école privée"];
const cartesData = [
  ['<strong>Durée</strong>', '2 ans', '3 ans', '3 ans', '1 an, après un bac+2', '3 ans en général'],
  ['<strong>Niveau</strong>', 'Bac+2 (120 ECTS)', 'Bac+3, grade de licence (180 ECTS)', 'Bac+3, grade de licence (180 ECTS)', 'Bac+3', 'Bac+3, reconnaissance variable'],
  ['<strong>Où ?</strong>', 'Lycée ou CFA', 'IUT (université)', 'Université', 'IUT, université, CNAM…', 'École privée'],
  ['<strong>Sélection</strong>', 'Sur dossier, <strong>places prioritaires pour les bacs pros</strong>', 'Sur dossier, très sélectif ; la moitié des places visées pour les bacs techno', 'Souvent peu sélective à l\'entrée', 'Sur dossier', 'Sur dossier, parfois entretien'],
  ['<strong>Style</strong>', 'Très concret, petits groupes', 'Théorie + pratique, maths et physique importantes', 'Surtout théorique, grands amphis', 'Très professionnel, spécialisé', 'Variable'],
  ['<strong>Coût</strong>', 'Gratuit en lycée public ; gratuit en apprentissage', 'Droits universitaires (exonérés boursiers)', 'Idem BUT', 'Idem BUT, gratuit en apprentissage', 'Souvent plusieurs milliers d\'€/an'],
  ['<strong>Pour un bac pro CIEL</strong>', '✅ <strong>La voie principale</strong>', '⚠️ Via l\'ENEPS, ou en 3e année après un BTS', '❌ Déconseillée en direct', '✅ Excellente suite après un BTS', '⚠️ À vérifier au cas par cas'],
];

const cielHeaders = ['', 'Option A : Informatique et réseaux (IR)', 'Option B : Électronique et réseaux (ER)'];
const cielData = [
  ['<strong>Tu aimes…</strong>', 'Les réseaux, la cybersécurité, programmer', 'L\'électronique, les cartes, les objets connectés'],
  ['<strong>Ce que tu fais</strong>', 'Administrer systèmes et réseaux, développer des applis sécurisées, configurer routeurs et pare-feu, serveurs Windows/Linux', 'Concevoir, prototyper, tester et maintenir des produits électroniques, systèmes embarqués et objets connectés'],
  ['<strong>Métiers</strong>', 'Admin systèmes et réseaux, technicien d\'exploitation, technicien cybersécurité, développeur', 'Technicien électronicien, technicien d\'essais, systèmes embarqués, SAV'],
];
const sioHeaders = ['', 'Option SISR (infrastructure, systèmes, réseaux)', 'Option SLAM (solutions logicielles)'];
const sioData = [
  ['<strong>Tu aimes…</strong>', 'Les réseaux, le support, la gestion de parc', 'Programmer, créer des applications'],
  ['<strong>Ce que tu fais</strong>', 'Garantir la disponibilité et la sécurité du SI, gérer le parc, aider les utilisateurs', 'Analyser les besoins, concevoir, développer, tester et maintenir des applications'],
  ['<strong>Métiers</strong>', 'Admin systèmes et réseaux, technicien d\'infrastructure, hot liner', 'Développeur d\'applications, technicien d\'études, support applicatif'],
];

const etabHeaders = ['Établissement (statut)', 'Commune', 'BTS et options', 'Modalités', 'Frais annuels', 'Points forts', 'Fiche'];
const etabData = [
  ['Lycée Edouard Branly (public)', 'Lyon 5e', 'CIEL A et B', 'Scolaire ; apprentissage (A et B)', 'Gratuit', 'Certifs Cisco CCNA et CyberSecurity, AWS Academy ; parcours Armée de Terre (B) ; prépa ATS sur place', psFiche(8248)],
  ['Lycée Marcel Sembat (public)', 'Vénissieux', 'CIEL A et B', 'Scolaire', 'Gratuit', '—', psFiche(18832)],
  ['Lycée ORT Lyon (privé sous contrat)', 'Lyon 8e', 'CIEL A ; SIO', 'Scolaire', '1 998 €', 'Certifs TOEIC et PIX', psFiche(8323)],
  ['Lyon Ynov Campus (privé hors contrat)', 'Lyon 2e', 'CIEL A ; SIO', 'Apprentissage', 'Gratuit en apprentissage', 'SEELA Cybertraining, certif Stormshield CSNA', psFiche(48715)],
  ['Lycée La Martinière Duchère (public)', 'Lyon 9e', 'SIO SISR et SLAM', 'Scolaire', 'Gratuit', 'Internat ; plus grosse capacité publique en SIO', psFiche(8223)],
  ['Lycée Jacques Brel (public)', 'Vénissieux', 'SIO SISR et SLAM', 'Scolaire', 'Gratuit', 'Forte part de bacs pros parmi les admis', psFiche(8545)],
  ['Lycée Les Chassagnes (privé sous contrat)', 'Oullins-Pierre-Bénite', 'SIO SISR et SLAM', 'Scolaire', 'Donnée non disponible', 'Taux d\'accès le plus élevé du panel en 2025', psFiche(25406)],
  ['Centre Scolaire Notre Dame (privé sous contrat)', 'Limas', 'SIO SISR et SLAM', 'Scolaire', 'Donnée non disponible', 'Petite structure, hors agglomération', psFiche(8303)],
  ['ICOF - Campus Lyon Saint Irénée (privé sous contrat)', 'Lyon 5e', 'SIO SISR et SLAM', 'Scolaire', 'Donnée non disponible', 'Projet Voltaire, TOEIC, Erasmus+', psFiche(8318)],
  ['Institution des Chartreux (privé sous contrat)', 'Lyon 1er', 'SIO SISR et SLAM', 'Scolaire', '1 729 € (2024-25)', 'Internat ; passerelle ingénieur ICS (CPE Lyon) ; sélectif pour les bacs pros', psFiche(8310)],
  ['Sciences U / CRESPA (privé, sup)', 'Lyon 3e', 'SIO SISR et SLAM', 'Scolaire et apprentissage', 'Donnée non disponible', '—', psFiche(26525)],
  ['AFIP (privé hors contrat)', 'Villeurbanne', 'SIO SISR et SLAM', 'Apprentissage', 'Gratuit en apprentissage', '—', psFiche(30035)],
  ['My Digital School (privé hors contrat)', 'Lyon 3e', 'SIO SISR et SLAM', 'Apprentissage', '≈ 9 800 € au total, gratuit en apprentissage', '—', psFiche(49872)],
  ['EPSI (privé hors contrat)', 'Lyon', 'SIO', 'Scolaire', '7 590 € + 90 € de dossier', '<strong>Absent du jeu de données Parcoursup du Rhône</strong> : vérifier auprès de l\'école', ext('https://www.epsi.fr/', 'epsi.fr')],
];

const scoHeaders = ['Formation', 'Établissement', 'Places', 'Candidats', 'dont bacs pros', 'Taux d\'accès (tous)', '% bacs pros parmi les admis néo-bacheliers', 'Admis'];
const scoData = [
  ['BTS CIEL A', 'Edouard Branly (Lyon 5e)', '45 → 45', '1 492 → 1 809', '268 → 338', '20 % → 21 %', '48 % → 49 %', '49 → 51'],
  ['BTS CIEL A', 'ORT (Lyon 8e)', '24 → 22', '465 → 391', '121 → 90', '28 % → 45 %', '47 % → 27 %', '22 → 22'],
  ['BTS CIEL A', 'Marcel Sembat (Vénissieux)', '15 → 15', '1 056 → 1 378', '242 → 309', '14 % → 13 %', '55 % → 67 %', '15 → 15'],
  ['BTS CIEL B', 'Edouard Branly (Lyon 5e)', '15 → 15', '442 → 934', '148 → 228', '20 % → 16 %', '30 % → 45 %', '15 → 15'],
  ['BTS CIEL B', 'Branly — parcours Armée de Terre', '3 → 3', '292 → 261', '71 → 69', '2 % → 0 %', '0 % → 0 %', '3 → 0'],
  ['BTS CIEL B', 'Marcel Sembat (Vénissieux)', '15 → 15', '602 → 969', '171 → 250', '15 % → 13 %', '44 % → 50 %', '15 → 15'],
  ['BTS SIO', 'La Martinière Duchère (Lyon 9e)', '48 → 48', '937 → 1 761', '208 → 348', '27 % → 16 %', '41 % → 47 %', '49 → 42'],
  ['BTS SIO', 'Jacques Brel (Vénissieux)', '24 → 24', '956 → 1 444', '209 → 337', '18 % → 8 %', '35 % → 64 %', '25 → 23'],
  ['BTS SIO', 'Les Chassagnes (Oullins-PB)', '25 → 26', '315 → 203', '71 → 57', '69 % → 82 %', '41 % → 53 %', '26 → 33'],
  ['BTS SIO', 'Notre Dame (Limas)', '20 → 25', '137 → 163', '31 → 27', '56 % → 57 %', '40 % → 29 %', '19 → 23'],
  ['BTS SIO', 'ICOF Saint Irénée (Lyon 5e)', '34 → 32', '339 → 330', '87 → 79', '53 % → 54 %', '35 % → 33 %', '26 → 29'],
  ['BTS SIO', 'ORT (Lyon 8e)', '16 → 16', '299 → 275', '77 → 72', '53 % → 37 %', '38 % → 43 %', '13 → 23'],
  ['BTS SIO', 'Institution des Chartreux (Lyon 1er)', '35 → 35', '285 → 262', '52 → 43', '76 % → 54 %', '15 % → 18 %', '33 → 37'],
  ['BTS SIO', 'CRESPA - Sciences U (Lyon 3e)', '20 → 30', '198 → 77', '35 → 22', '8 % → 39 %', '50 % → 0 %', '4 → 5'],
];

const remuHeaders = ['Âge', '1re année', '2e année', '3e année'];
const remuData = [
  ['Moins de 18 ans', '27 %', '39 %', '55 %'],
  ['18 à 20 ans', '43 %', '51 %', '67 %'],
  ['21 à 25 ans', '53 %', '61 %', '78 %'],
];

const apprHeaders = ['Formation', 'Établissement', 'Places', 'Candidats', 'dont bacs pros', 'Vœux en recherche de contrat', 'Fiche'];
const apprData = [
  ['BTS CIEL A', 'Edouard Branly (Lyon 5e, public)', '12 → 16', '821 → 972', '178 → 202', '371 → 419', psFiche(17040)],
  ['BTS CIEL A', 'Sup\'Etixs (Décines-Charpieu)', '25 → 25', '329 → 164', '77 → 43', '311 → 31', psFiche(45132)],
  ['BTS CIEL A', 'LYSSU (Villeurbanne)', '— → 20', '— → 236', '— → 65', '— → 236', psFiche(49078)],
  ['BTS CIEL A', 'INSEEC Lyon (Lyon 7e)', '— → 15', '— → 325', '— → 85', '— → 325', psFiche(49015)],
  ['BTS CIEL A', 'Lyon Ynov Campus (Lyon 2e)', '— → 30', '— → 278', '— → 68', '— → 260', psFiche(48715)],
  ['BTS CIEL B', 'Edouard Branly (Lyon 5e, public)', '12 → 16', '566 → 665', '145 → 151', '144 → 224', psFiche(17042)],
  ['BTS SIO', 'SEPR (Lyon)', '24 → 20', '251 → 262', '87 → 80', '247 → 262', '—'],
  ['BTS SIO', 'CFA AFIP (Villeurbanne)', '45 → 30', '216 → 150', '58 → 45', '194 → 130', psFiche(30035)],
  ['BTS SIO', 'Doranco (Lyon 2e)', '40 → 24', '252 → 194', '74 → 54', '193 → 188', psFiche(43779)],
  ['BTS SIO', 'Diderot Education (Lyon 6e)', '200 → 20', '192 → 214', '50 → 63', '191 → 214', psFiche(42521)],
  ['BTS SIO', 'Isitech - Isicom (Lyon 7e)', '30 → 20', '236 → 173', '75 → 49', '236 → 173', psFiche(33453)],
  ['BTS SIO', 'Sciences-U Lyon (Lyon 3e)', '25 → 30', '175 → 189', '44 → 57', '23 → 136', psFiche(29486)],
  ['BTS SIO', 'Lyon Ynov Campus (Lyon 2e)', '— → 30', '— → 223', '— → 73', '— → 144', psFiche(48714)],
  ['BTS SIO', 'My Digital School (Lyon 3e)', '— → 10', '— → 117', '— → 33', '— → 85', psFiche(49872)],
  ['BTS SIO', 'Sup\'Etixs (Décines-Charpieu)', '— → 25', '— → 80', '— → 26', '— → 13', psFiche(49392)],
  ['BTS SIO', 'SOLEMN (Oullins-PB)', '— → 24', '— → 92', '— → 26', '— → 92', psFiche(49988)],
  ['BTS SIO', 'Jacques Brel (Vénissieux, public)', '12 → absent 2025', '613 → —', '139 → —', '613 → —', '—'],
  ['BTS SIO', 'CFA CIFEP (Villeurbanne)', '20 → absent 2025', '178 → —', '48 → —', '167 → —', '—'],
];

const butReelHeaders = ['', '2024', '2025'];
const butReelData = [
  ['<strong>IUT Lyon 1 — BUT GEII</strong> (200 places)', '<strong>0</strong> bac pro sur 191 admis', '<strong>0</strong> bac pro sur 198 admis'],
  ['<strong>IUT Lyon 1 — BUT Informatique</strong> (125 places)', '<strong>0</strong> bac pro sur 125 admis', '<strong>0</strong> bac pro sur 129 admis'],
  ['France — BUT Informatique', '9 / 4 347 (0,2 %)', '9 / 4 323 (0,2 %)'],
  ['France — BUT GEII', '46 / 3 406 (1,4 %)', '60 / 3 561 (1,7 %)'],
  ['France — BUT Réseaux et télécoms', '35 / 1 559 (2,2 %)', '28 / 1 542 (1,8 %)'],
];

const enepsHeaders = ['', 'Places', 'Candidats (dont bacs pros)', 'Taux d\'accès', 'Admis (dont bacs pros)'];
const enepsData = [
  ['<strong>BUT GEII</strong> (génie électrique et informatique industrielle)', '22', '78 (66) → 111 (91)', '39 % → 29 %', '16 (16) → 17 (17)'],
  ['<strong>BUT R&T</strong> (réseaux et télécommunications)', '18', '86 (78) → 96 (71)', '47 % → 41 %', '18 (18) → 17 (17)'],
];

const iutHeaders = ['IUT', 'BUT et parcours', 'Places', 'Candidats', 'dont bacs pros', 'Taux d\'accès', 'Admis', 'dont bacs pros admis'];
const iutData = [
  ['IUT Lyon 1 (Gratte-Ciel)', 'BUT GEII (ESE, AII, EME)', '200 → 200', '2 437 → 3 309', '69 → 123', '60 % → 52 %', '191 → 198', '<strong>0 → 0</strong>'],
  ['IUT Lyon 1 (La Doua)', 'BUT Informatique (Réalisation, Déploiement, Admin. de données)', '125 → 125', '3 946 → 4 997', '79 → 117', '20 % → 16 %', '125 → 129', '<strong>0 → 0</strong>'],
];

const lpHeaders = ['Licence professionnelle', 'Salaire net mensuel médian (EQTP)', 'Emploi stable'];
const lpData = [
  ['Administration et sécurité des systèmes et des réseaux', '1 980 €', '82 %'],
  ['Métiers des réseaux informatiques et télécommunications', '1 900 €', '76 %'],
  ['Systèmes automatisés, réseaux et informatique industrielle', '2 070 €', '82 %'],
];

const calHeaders = ['Phase', 'Dates 2027', 'Ce que tu dois faire'];
const calData = [
  ['<strong>1. Information</strong>', '<em>À venir</em>', 'Explorer les formations : contenus, attendus, taux d\'accès, frais, dates de JPO.'],
  ['<strong>2. Inscription et vœux</strong>', '<em>À venir</em>', 'Créer ton dossier, formuler jusqu\'à 10 vœux sous statut scolaire et 10 en apprentissage, sans les classer.'],
  ['<strong>3. Finalisation et confirmation</strong>', '<em>À venir</em>', 'Rédiger un projet motivé par vœu, remplir « Activités et centres d\'intérêt », <strong>confirmer chaque vœu</strong>.'],
  ['<strong>4. Admission (phase principale)</strong>', '<em>À venir</em>', 'Répondre à chaque proposition dans les délais (suspendus pendant les écrits du bac).'],
  ['<strong>Étape clé</strong>', '<em>À venir</em>', 'Classer par ordre de préférence tes vœux en attente.'],
  ['<strong>5. Phase complémentaire</strong>', '<em>À venir</em>', 'Sans proposition : jusqu\'à 10 nouveaux vœux sur les places vacantes.'],
];

const retroHeaders = ['Période', 'Échéance Parcoursup', 'Ce que tu dois faire'];
const retroData = [
  ['<strong>Sept.–oct. 2026</strong>', '—', 'Faire le point (le questionnaire). Repérer 5 à 10 formations. Soigner les notes du 1er trimestre.'],
  ['<strong>Nov. 2026</strong>', 'Publication du calendrier <em>(à venir)</em>', 'Semaine de l\'orientation, salons. Préparer tes questions pour les JPO.'],
  ['<strong>Déc. 2026</strong>', 'Ouverture du site d\'info <em>(à venir)</em>', 'Explorer les fiches formations. Noter les dates de JPO.'],
  ['<strong>Janv. 2027</strong>', 'Inscriptions et vœux <em>(à venir)</em>', 'Créer ton dossier, saisir tes vœux. Aller aux JPO. Penser aux vœux en apprentissage.'],
  ['<strong>Fév. 2027</strong>', '—', 'Rédiger un projet motivé <strong>différent pour chaque vœu</strong>. Remplir « Activités et centres d\'intérêt ».'],
  ['<strong>Mars 2027</strong>', 'Date limite des vœux <em>(à venir)</em>', 'Vérifier que tous tes vœux sont enregistrés.'],
  ['<strong>Mars–avril 2027</strong>', 'Date limite de confirmation <em>(à venir)</em>', 'Confirmer chaque vœu, au moins 48 h avant la limite.'],
  ['<strong>Avril–mai 2027</strong>', '—', 'Chercher ton entreprise (apprentissage) : CV, lettre, relances. Réviser le bac.'],
  ['<strong>Juin 2027</strong>', 'Début des admissions <em>(à venir)</em>', 'Répondre à chaque proposition. Classer les vœux en attente. Passer le bac.'],
  ['<strong>Juil. 2027</strong>', 'Fin de la phase principale <em>(à venir)</em>', 'Accepter une proposition et faire ton inscription administrative.'],
  ['<strong>Juil.–sept. 2027</strong>', 'Phase complémentaire <em>(à venir)</em>', 'Sans proposition : nouveaux vœux et saisine de la CAES.'],
];

const jpoHeaders = ['Établissement', 'Formations', 'Dates', 'Site'];
const jpoData = [
  ['Lycée Edouard Branly', 'BTS CIEL A et B', '<em>À venir</em>', ext('https://lyceebranly.com', 'lyceebranly.com')],
  ['Lycée Marcel Sembat', 'BTS CIEL A et B', '<em>À venir</em>', ext('https://sembat-seguin.ent.auvergnerhonealpes.fr', 'site ENT')],
  ['Lycée ORT Lyon', 'BTS CIEL A, BTS SIO', '<em>À venir</em>', ext('https://ort-france.fr', 'ort-france.fr')],
  ['Lyon Ynov Campus', 'BTS CIEL A, SIO (apprentissage)', '<em>À venir</em>', psFiche(48715)],
  ['Lycée La Martinière Duchère', 'BTS SIO', '<em>À venir</em>', ext('https://martiniere-duchere.fr', 'martiniere-duchere.fr')],
  ['Lycée Jacques Brel', 'BTS SIO', '<em>À venir</em>', psFiche(8545)],
  ['Lycée Les Chassagnes', 'BTS SIO', '<em>À venir</em>', psFiche(25406)],
  ['Institution des Chartreux', 'BTS SIO', '<em>À venir</em>', psFiche(8310)],
  ['IUT Lyon 1', 'BUT GEII, BUT Informatique', '<em>À venir</em>', ext('https://iut.univ-lyon1.fr', 'iut.univ-lyon1.fr')],
  ['ENEPS (IUT 1 Grenoble)', 'BUT GEII, BUT R&T (réservés bacs pros)', '<em>À venir</em>', ext('https://eneps.univ-grenoble-alpes.fr/', 'eneps.univ-grenoble-alpes.fr')],
];

// ----- TP (annexe) -----
const tpMaterials = [
  'Ordinateur avec accès Internet.',
  'Outil de création de diaporama (PowerPoint, Google Slides, etc.).',
  'Le guide d\'orientation (pour les pistes de métiers et de formations).',
  'Sources : fiches métiers (Onisep, CIDJ), offres d\'emploi (APEC, LinkedIn, Indeed).',
];
const evalHeaders = ['Critère', 'Exigence (compétence C01)'];
const evalData = [
  ['Clarté du discours', 'Style, ton et vocabulaire adaptés (technique mais accessible). Le vocabulaire CIEL est utilisé correctement.'],
  ['Qualité de la présentation', 'Présentation soignée (typographie, orthographe, lisibilité). Argumentation structurée, enchaînements logiques.'],
  ['Maîtrise du contenu', 'Argumentation de qualité. Réponses précises et pertinentes aux questions.'],
  ['Gestion du temps', 'La présentation respecte strictement la durée impartie (15 à 20 minutes maximum).'],
];
const tpSteps = [
  {
    title: 'Phase 1 : Recherche et analyse du métier',
    description: (
      <>
        <p><strong>Problématique :</strong> dans le cadre de ta réflexion sur ta poursuite d'études, tu présentes à tes camarades un métier (que tu souhaites faire ou non) accessible après le bac pro CIEL, avec ou sans poursuite d'études après le BTS.</p>
        <p>Commence par une recherche approfondie (fiches Onisep, offres d'emploi, ce guide). Ton but : collecter de quoi couvrir les 5 sections exigées.</p>
        <Attention><p>La recherche de sources (fiches métiers, offres d'emploi) est fondamentale et doit être citée pendant ta présentation.</p></Attention>
      </>
    ),
  },
  {
    title: 'Phase 2 : Contenu exigé (les 5 sections)',
    description: (
      <ol className="list-decimal list-inside space-y-2">
        <li><strong>Identification du poste :</strong> intitulé précis (ex. technicien en cybersécurité opérationnelle) ; secteur d'activité (industrie 4.0, télécoms, défense, santé…).</li>
        <li><strong>Missions opérationnelles :</strong> 3 à 5 tâches quotidiennes ; lien avec un ou plusieurs pôles du bac pro CIEL (réalisation et maintenance, réseaux, cybersécurité et données).</li>
        <li><strong>Savoirs et compétences clés :</strong> 3 compétences CIEL (ex. C04, C09, C11) justifiées ; 2 à 3 savoirs associés (modèle OSI/TCP-IP, structures électroniques, langages…).</li>
        <li><strong>Parcours de formation :</strong> niveau de qualification minimal ; parcours après le bac pro CIEL (BTS, licence pro, BUT…) — appuie-toi sur le schéma de la section 2.1 ; perspectives d'évolution.</li>
        <li><strong>Enjeux et normes :</strong> défis technologiques et sociétaux (cybersécurité, IA, IoT, durabilité…) ; au moins une norme ou réglementation (normes IPC pour le brasage, RGPD pour les données…).</li>
      </ol>
    ),
  },
  {
    title: 'Phase 3 : Préparation du support et évaluation',
    description: (
      <>
        <ul className="list-disc list-inside">
          <li><strong>Support obligatoire :</strong> présentation numérique (diaporama soigné).</li>
          <li><strong>Durée totale :</strong> 15 à 20 minutes maximum, dont 3 à 5 minutes de questions.</li>
        </ul>
        <p>L'évaluation s'appuie sur la <strong>compétence C01 : communiquer en situation professionnelle</strong>.</p>
        {renderTable(evalHeaders, evalData)}
      </>
    ),
  },
];

const SummaryLink = ({ href, children }) => (
  <li><a href={href} className="text-blue-600 hover:underline no-underline">{children}</a></li>
);

export const moduleOrientation = {
  course: (
    <div className="space-y-10 prose prose-lg max-w-none prose-headings:font-bold prose-h2:border-b prose-h2:pb-2 prose-a:text-blue-600">
      <Heading level={1}>Guide d'orientation 2027 — Après le bac pro CIEL</Heading>

      <Attention>
        <p>Ce guide, mis à jour en <strong>septembre 2026</strong> par un professeur de CIEL, est un outil d'aide à l'orientation et non un document officiel.</p>
        <ul className="list-disc list-inside">
          <li>Il n'est <strong>pas exhaustif</strong> : d'autres formations et établissements existent.</li>
          <li>Frais, dates et taux changent vite : <strong>vérifie toujours</strong> sur Parcoursup et auprès des établissements.</li>
          <li>Les <strong>dates de la session 2027 ne sont pas encore publiées</strong> : elles apparaissent en « à venir ».</li>
          <li>Les statistiques proviennent des jeux de données ouverts du ministère (Parcoursup <strong>2024 et 2025</strong>).</li>
        </ul>
      </Attention>

      <section>
        <Heading level={2}>Sommaire</Heading>
        <ol className="list-decimal list-inside not-prose space-y-1">
          <SummaryLink href="#essentiel">L'essentiel en 30 secondes</SummaryLink>
          <SummaryLink href="#comprendre">Comprendre les études après le bac</SummaryLink>
          <SummaryLink href="#questionnaire">Trouver ta voie : le questionnaire</SummaryLink>
          <SummaryLink href="#bts">Le BTS : la voie principale</SummaryLink>
          <SummaryLink href="#but">Le BUT : par l'ENEPS ou après le BTS</SummaryLink>
          <SummaryLink href="#licence">Pourquoi on ne te conseille pas la licence générale</SummaryLink>
          <SummaryLink href="#apres-bts">Et après le BTS ?</SummaryLink>
          <SummaryLink href="#candidater">Candidater : calendrier, rétroplanning, dossier</SummaryLink>
          <SummaryLink href="#plan-b">Plan B : si ça ne marche pas du premier coup</SummaryLink>
          <SummaryLink href="#metiers">Les métiers</SummaryLink>
          <SummaryLink href="#sources">Sources</SummaryLink>
        </ol>
      </section>

      <section id="essentiel">
        <Heading level={2}>1. L'essentiel en 30 secondes</Heading>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Le BTS est fait pour toi.</strong> En 2025, plus de 71 % des bacheliers professionnels ont reçu au moins une proposition en BTS sur Parcoursup.</li>
          <li><strong>Le bac+3 et le bac+5 ne sont pas fermés : ils passent par le BTS.</strong> Licence pro, prépa ATS vers l'école d'ingénieur, 3e année de BUT.</li>
          <li><strong>L'apprentissage est un vrai atout.</strong> Tu es payé, la formation est gratuite ; deux ans après leur sortie, 73 % des anciens apprentis sont en emploi (contre 59 % en voie scolaire).</li>
          <li><strong>Une seule entrée directe en BUT est réaliste pour un bac pro CIEL : l'ENEPS à Grenoble</strong>, réservée aux bacheliers professionnels.</li>
        </ol>
        <p>👉 <a href="#questionnaire"><strong>Fais le questionnaire</strong></a> pour voir quelle voie te correspond.</p>
        <Parents><p><strong>En une phrase :</strong> après un bac pro CIEL, la poursuite d'études la plus sûre est un BTS (2 ans), en lycée ou en apprentissage ; c'est aussi le tremplin vers le bac+3 et au-delà. Le BTS en lycée public est gratuit, et en apprentissage la formation est prise en charge et votre enfant est rémunéré.</p></Parents>
      </section>

      <section id="comprendre">
        <Heading level={2}>2. Comprendre les études après le bac</Heading>

        <Heading level={3}>2.1. Le schéma à retenir</Heading>
        <OrientationSchema />
        <p><strong>Comment le lire :</strong> tu montes marche par marche. La marche la plus sûre après le bac pro, c'est le BTS. Depuis le BTS, tu peux t'arrêter et travailler, ou continuer vers le bac+3, puis le bac+5.</p>

        <Heading level={3}>2.2. Les diplômes, carte d'identité</Heading>
        {renderTable(cartesHeaders, cartesData)}
        <Parents>
          <p><strong>« Bachelor » ne veut pas dire « licence ».</strong> Le mot n'est pas protégé. Avant toute inscription dans une école privée, posez trois questions :</p>
          <ol className="list-decimal list-inside">
            <li>Le diplôme <strong>confère-t-il le grade de licence</strong> ?</li>
            <li>Est-il <strong>visé par l'État</strong> ? (une formation peut être visée sans conférer de grade)</li>
            <li>Est-il <strong>enregistré au RNCP</strong>, et à quel niveau ? (niveau 6 = bac+3)</li>
          </ol>
          <p>Vérifiez un titre RNCP sur France Compétences. Toutes les formations sous contrat avec l'État sont sur Parcoursup.</p>
        </Parents>

        <Heading level={3}>2.3. Petit lexique</Heading>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Bac+2, bac+3…</strong> : années après le bac (niveau 5 = bac+2, niveau 6 = bac+3, niveau 7 = bac+5).</li>
          <li><strong>ECTS</strong> : crédits européens. Une année validée = 60 ECTS.</li>
          <li><strong>Grade de licence</strong> : reconnaissance officielle du niveau bac+3, ouvre l'accès au master.</li>
          <li><strong>Formation sélective</strong> : l'établissement choisit ses étudiants sur dossier (BTS, BUT, écoles).</li>
          <li><strong>Statut scolaire</strong> : étudiant à temps plein, avec des stages.</li>
          <li><strong>Apprentissage (alternance)</strong> : salarié d'une entreprise, formation gratuite, tu es payé.</li>
          <li><strong>Admission parallèle</strong> : entrer directement en 2e ou 3e année (ex. 3e année de BUT après un BTS).</li>
          <li><strong>Taux d'accès</strong> : part des candidats assez bien classés pour recevoir une proposition — <strong>tous</strong> candidats confondus.</li>
        </ul>
      </section>

      <section id="questionnaire">
        <Heading level={2}>3. Trouver ta voie : le questionnaire</Heading>
        <p>Réponds à 6 questions (2 minutes). Tu obtiens une <strong>voie principale</strong>, une <strong>alternative</strong>, un <strong>plan B</strong> et l'explication de ces choix. Tes réponses ne sont ni enregistrées ni envoyées.</p>
        <Parents><p>Faites-le <strong>avec</strong> votre enfant, puis comparez vos réponses : un bon point de départ pour en parler. Le résultat est une piste, pas une décision.</p></Parents>
        <OrientationQuiz />
      </section>

      <section id="bts">
        <Heading level={2}>4. Le BTS : la voie principale</Heading>

        <Heading level={3}>4.1. Pourquoi le BTS ?</Heading>
        <p>Diplôme de niveau bac+2, préparé en deux ans en lycée ou en CFA. Trois avantages :</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Des places prioritaires pour les bacheliers professionnels</strong>, et un examen prioritaire de ton dossier dans les BTS en lien avec ta spécialité.</li>
          <li><strong>Un rythme proche du lycée</strong> : petites classes, beaucoup de pratique.</li>
          <li><strong>Deux sorties possibles</strong> : travailler dès le bac+2, ou continuer (licence pro, prépa ATS, BUT 3e année).</li>
        </ul>
        <p>Deux statuts : <strong>scolaire</strong> (temps plein avec stages) ou <strong>apprentissage</strong> (salarié, formation gratuite).</p>

        <Heading level={3}>4.2. BTS CIEL ou BTS SIO ?</Heading>
        <p><strong>BTS CIEL</strong> (Cybersécurité, Informatique et réseaux, Électronique) : la suite directe de ton bac pro.</p>
        {renderTable(cielHeaders, cielData)}
        <p><strong>BTS SIO</strong> (Services informatiques aux organisations) : plus tourné vers les services informatiques en entreprise.</p>
        {renderTable(sioHeaders, sioData)}
        <Astuce><p>Tu hésites entre CIEL option A et SIO SISR ? Les deux mènent à des métiers proches. Le CIEL est plus technique et industriel (et ouvre plus facilement la prépa ATS) ; le SIO est plus orienté services et support. Rien ne t'empêche de mettre des vœux dans les deux.</p></Astuce>

        <Heading level={3}>4.3. Tes chances d'y entrer, et d'en sortir diplômé</Heading>
        <p><strong>Y entrer :</strong> en 2025, plus de 71 % des bacheliers professionnels ont reçu au moins une proposition en BTS.</p>
        <p><strong>En sortir diplômé :</strong> parmi les bacheliers pros entrés en BTS en 2017, <strong>40 %</strong> l'ont eu en deux ans et <strong>48 %</strong> en deux ou trois ans (contre 76 % et 79 % pour les bacheliers généraux). Mais parmi les bacheliers pros <strong>présents à l'examen</strong> en 2024, <strong>65 %</strong> l'ont obtenu. Autrement dit : la plupart de ceux qui échouent <strong>abandonnent en cours de route</strong>, souvent en première année.</p>

        <Heading level={3}><span id="reussir-bts" />4.4. Pour réussir ton BTS</Heading>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Dès la Terminale</strong>, renforce les matières générales : maths, physique, anglais, expression écrite.</li>
          <li><strong>Choisis un BTS qui te plaît vraiment</strong> : la motivation fait tenir en première année.</li>
          <li><strong>Ne reste pas seul</strong> : en cas de difficulté, parles-en tout de suite à tes professeurs.</li>
          <li><strong>En apprentissage</strong>, choisis ton entreprise avec soin : un bon tuteur fait la différence.</li>
          <li><strong>Travaille régulièrement</strong> : le BTS se prépare sur deux ans.</li>
        </ul>
        <Parents><p>La première année de BTS est une marche importante. Votre rôle : aider à organiser le travail, repérer tôt les signes de décrochage (absences, perte de motivation) et encourager à solliciter les enseignants. Le passage en 2e année est le cap décisif.</p></Parents>

        <Heading level={3}>4.5. Les BTS près de chez nous</Heading>
        {renderTable(etabHeaders, etabData)}

        <Heading level={3}>4.6. Ce que disent les chiffres d'admission (2024 → 2025)</Heading>
        <ul className="list-disc list-inside space-y-1">
          <li>La pression a fortement augmenté dans le public : le taux d'accès du BTS SIO de Jacques Brel passe de 18 % à 8 %, celui de La Martinière Duchère de 27 % à 16 %.</li>
          <li>Mais un taux d'accès bas ne ferme pas la porte : ces deux formations comptent 64 % et 47 % de bacs pros parmi leurs admis néo-bacheliers en 2025.</li>
          <li>En BTS CIEL, les trois formations publiques ont des taux d'accès de 13 % à 21 %, mais 45 % à 67 % de bacs pros admis : c'est là que ton profil est le plus attendu.</li>
          <li>En SIO, certains privés sous contrat sont plus accessibles (Les Chassagnes : 82 % de taux d'accès). Les Chartreux reste l'exception sélective (18 %).</li>
        </ul>
        <Accordion summary="Voir le tableau complet — voie scolaire">
          {renderTable(scoHeaders, scoData)}
          <p className="text-xs text-gray-500">Le parcours Armée de Terre de Branly (option B) n'a recruté aucun bachelier professionnel sur les deux sessions.</p>
        </Accordion>

        <Heading level={3} className="!mt-8"><span id="bts-apprentissage" />4.7. Le BTS en apprentissage</Heading>
        <p>En apprentissage, <strong>ce n'est pas l'école qui est difficile à obtenir, c'est l'entreprise.</strong> À Branly en 2025, 419 vœux étaient « en recherche de contrat » pour 16 places en BTS CIEL A. <strong>Commence ta recherche d'entreprise dès le premier trimestre.</strong></p>
        <Parents>
          <p><strong>Combien est payé un apprenti ?</strong> Un pourcentage du SMIC, selon l'âge et l'année de contrat :</p>
          {renderTable(remuHeaders, remuData)}
          <p>(grille officielle, août 2026 ; un accord de branche peut prévoir plus). Deux ans après leur sortie, 73 % des anciens apprentis (CAP à BTS) sont en emploi, contre 59 % en voie scolaire.</p>
        </Parents>
        <Accordion summary="Voir le tableau complet — apprentissage">
          <p className="text-sm text-gray-600">« Vœux en recherche de contrat » = candidats retenus par la formation mais sans contrat signé. Les propositions ne sont enregistrées que si le contrat est saisi, ce qui les sous-estime fortement.</p>
          {renderTable(apprHeaders, apprData)}
          <p className="text-xs text-gray-500">« — » = formation absente du jeu de données cette année-là. Anomalies signalées telles quelles (Diderot : 200 puis 20 places ; Jacques Brel et CIFEP absents en 2025).</p>
        </Accordion>
      </section>

      <section id="but">
        <Heading level={2}>5. Le BUT : par l'ENEPS ou après le BTS</Heading>

        <Heading level={3}>5.1. La réalité de l'admission en BUT « classique »</Heading>
        <p>Le BUT est un diplôme national de 3 ans (grade de licence, 180 ECTS), en IUT, qui demande un bon niveau en maths et en physique. Les IUT visent 50 % de bacheliers technologiques. Pour les bacheliers professionnels :</p>
        {renderTable(butReelHeaders, butReelData)}
        <p><strong>Conclusion honnête :</strong> en dehors de l'ENEPS, l'entrée directe en BUT après un bac pro est exceptionnelle. Ce n'est <strong>pas</strong> une question de valeur du bac pro : le BUT attend un volume de maths et de physique que le bac pro ne prévoit pas. <strong>Ne mets jamais un BUT classique comme vœu de sécurité.</strong></p>

        <Heading level={3}><span id="eneps" />5.2. L'exception : l'ENEPS, un BUT réservé aux bacs pros</Heading>
        <p>L'<strong>ENEPS</strong> (École nationale de l'enseignement professionnel supérieur) est une voie de l'IUT 1 de Grenoble <strong>réservée aux bacheliers professionnels du secteur Production</strong>, dont le bac pro CIEL. Elle recrute dans toute la France. Deux spécialités te concernent :</p>
        {renderTable(enepsHeaders, enepsData)}
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Où ?</strong> IUT 1, Saint-Martin-d'Hères (Grenoble, ~100 km de Lyon) : prévoir un logement.</li>
          <li><strong>Candidater :</strong> sur Parcoursup, comme un BUT (entretiens en visio possibles).</li>
          <li><strong>Alternance :</strong> possible à partir de la 2e année. <strong>Après :</strong> master ou école d'ingénieur.</li>
        </ul>
        <p><strong>Contacts ENEPS :</strong> {' '}
          <a href="https://eneps.univ-grenoble-alpes.fr/" target="_blank" rel="noopener noreferrer">site</a>,{' '}
          <a href="mailto:eneps@univ-grenoble-alpes.fr">eneps@univ-grenoble-alpes.fr</a>,{' '}
          <a href="https://dossier.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=4973" target="_blank" rel="noopener noreferrer">fiche BUT GEII</a> ·{' '}
          <a href="https://dossier.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=4974" target="_blank" rel="noopener noreferrer">fiche BUT R&T</a>.
        </p>
        <Astuce><p>L'ENEPS est sélective (autour d'un candidat sur trois ou sur deux), avec peu de places. C'est un <strong>vœu ambitieux</strong>, à formuler <strong>en plus</strong> de tes vœux de BTS, jamais à leur place.</p></Astuce>
        <Parents><p>Partir à Grenoble à 18 ans implique un logement et un budget. Renseignez-vous tôt sur les logements CROUS et les bourses (dossier social étudiant, pendant la période des vœux). N'hésitez pas à écrire à l'école.</p></Parents>

        <Heading level={3}>5.3. L'autre route : le BUT après le BTS</Heading>
        <p>Après un BTS, tu peux candidater <strong>en 3e année de BUT</strong> (admission parallèle, sur dossier). C'est la route la plus réaliste vers un bac+3 de type BUT, et ton profil technique y est bien plus valorisé qu'à la sortie du bac.</p>
        <Accordion summary="Voir le détail — IUT Lyon 1">
          {renderTable(iutHeaders, iutData)}
          <p className="text-xs text-gray-500">Le BUT R&T, le plus proche de la composante réseaux du bac pro CIEL, n'est pas proposé par les IUT lyonnais.</p>
        </Accordion>
      </section>

      <section id="licence">
        <Heading level={2}>6. Pourquoi on ne te conseille pas la licence générale</Heading>
        <p>La licence à l'université est souvent peu sélective à l'entrée : facile d'y être accepté, difficile d'y réussir.</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Seuls <strong>12 %</strong> des bacheliers professionnels inscrits en licence obtiennent leur diplôme en 3, 4 ou 5 ans (contre 56 % des bacheliers généraux).</li>
          <li><strong>77 %</strong> se réorientent ou abandonnent avant la 3e année.</li>
        </ul>
        <p>Très théorique, grands amphis, beaucoup d'autonomie : l'inverse de ce que le bac pro t'a appris. <strong>Si tu vises un bac+3 universitaire, passe par le BTS</strong>, puis par une licence pro ou une 3e année de licence.</p>
        <Parents><p>Une admission en licence n'est pas une bonne nouvelle en soi pour un bachelier professionnel : c'est souvent une année perdue. Si c'est la seule proposition reçue, regardez d'abord la phase complémentaire, l'apprentissage et la classe passerelle (section 9).</p></Parents>
      </section>

      <section id="apres-bts">
        <Heading level={2}>7. Et après le BTS ?</Heading>

        <Heading level={3}>7.1. La licence professionnelle (1 an)</Heading>
        <p>Une formation d'un an après un bac+2, très spécialisée et appréciée des recruteurs, souvent en alternance. Dans la région : <strong>LP ASSR</strong> (administration et sécurité des systèmes et réseaux, IUT Lyon 1), <strong>LP MRIT</strong> (réseaux et télécoms, Lyon 1), <strong>Licence informatique spé cybersécurité</strong> (CNAM Auvergne-Rhône-Alpes, en alternance).</p>
        <p>Ce que gagnent les diplômés (InserSup, promo 2022, 12 mois après le diplôme, salaires <strong>nets mensuels</strong>) :</p>
        {renderTable(lpHeaders, lpData)}

        <Heading level={3}>7.2. La prépa ATS, vers l'école d'ingénieur (1 an)</Heading>
        <p>Une classe préparatoire d'un an réservée aux titulaires d'un BTS ou d'un BUT : remise à niveau intensive en maths/physique/sciences, puis concours d'entrée en école d'ingénieur. Gratuite en lycée public. La prépa ATS « ingénierie industrielle » vise surtout les BTS industriels, comme le <strong>BTS CIEL</strong>. <strong>Le lycée Branly en a une.</strong></p>

        <Heading level={3}>7.3. La 3e année de BUT</Heading>
        <p>Sur dossier, après un BTS : voir la section 5.3.</p>

        <Heading level={3}>7.4. Les bachelors d'écoles privées</Heading>
        <p>Par exemple le bachelor Cybersécurité des systèmes industriels et urbains d'ECAM LaSalle, ou celui de la Guardia Cybersecurity School (hors Parcoursup). Avant de t'inscrire, pose les trois questions de l'encadré de la section 2.2.</p>

        <Heading level={3}>7.5. Salaires après un BTS : ce qu'on sait et ce qu'on ne sait pas</Heading>
        <p>Il n'existe <strong>aucune statistique publique de salaire</strong> pour les diplômés de BTS : InserSup commence au bac+3. Ce qui est mesuré, c'est le <strong>taux d'emploi</strong> : deux ans après leur sortie en 2023, 59 % des sortants de la voie scolaire (CAP au BTS) étaient en emploi, contre 73 % des anciens apprentis. Le taux d'emploi de chaque établissement figure sur sa fiche Parcoursup.</p>
      </section>

      <section id="candidater">
        <Heading level={2}>8. Candidater : calendrier, rétroplanning, dossier</Heading>

        <Heading level={3}>8.1. Le calendrier Parcoursup 2027</Heading>
        <p>La session 2026 s'est achevée le 10 septembre 2026. <strong>Le calendrier officiel de la session 2027 n'est pas encore publié</strong> ({' '}
          <a href="https://www.parcoursup.gouv.fr/calendrier" target="_blank" rel="noopener noreferrer">parcoursup.gouv.fr/calendrier</a>). Les phases, elles, ne changent pas.</p>
        {renderTable(calHeaders, calData)}
        <Astuce><p>En <strong>apprentissage</strong>, le calendrier est plus souple : il est souvent possible de formuler des vœux bien après la date limite de mars. Une vraie seconde chance si tu trouves ton entreprise plus tard.</p></Astuce>

        <Heading level={3}>8.2. Ton rétroplanning de Terminale</Heading>
        <p>Le découpage suit le rythme des sessions précédentes : il sert à t'organiser. Seules les dates officielles, encore à venir, font foi.</p>
        {renderTable(retroHeaders, retroData)}
        <Parents><p>Trois dates à noter dès leur publication : la <strong>limite des vœux</strong> (mars), la <strong>limite de confirmation</strong> (fin mars – début avril) et le <strong>début des réponses</strong> (juin). En juin, votre enfant doit répondre vite à chaque proposition, y compris pendant les vacances.</p></Parents>

        <Heading level={3}>8.3. Journées portes ouvertes 2026-2027</Heading>
        <p>Les dates de JPO n'étaient publiées nulle part à la mise à jour de ce guide. La fiche Parcoursup de chaque formation affiche la date dès qu'elle est connue, avec une option de rappel : c'est la source la plus fiable.</p>
        {renderTable(jpoHeaders, jpoData)}

        <Heading level={3}>8.4. Un dossier Parcoursup efficace</Heading>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Valorise ton bac pro</strong> dans « Activités et centres d'intérêt » : projets techniques, compétences pratiques, stages.</li>
          <li><strong>Un projet motivé par vœu</strong> : explique en quoi ton bac pro CIEL est un atout pour <strong>cette</strong> formation. Les copier-coller se repèrent.</li>
          <li><strong>Équilibre tes vœux :</strong> des BTS plus accessibles (Les Chassagnes, Notre Dame) ; des BTS très demandés mais qui recrutent des bacs pros (Branly, Marcel Sembat, La Martinière Duchère, Jacques Brel) ; des vœux en apprentissage ; éventuellement un vœu ambitieux (ENEPS), jamais à la place des autres.</li>
        </ul>
      </section>

      <section id="plan-b">
        <Heading level={2}>9. Plan B : si ça ne marche pas du premier coup</Heading>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>La phase complémentaire</strong> (juin à septembre) : de nouveaux vœux sur les places libres.</li>
          <li><strong>L'apprentissage</strong> : calendrier plus souple, tu peux souvent encore candidater après la phase principale.</li>
          <li><strong>La CAES</strong> (commission d'accès à l'enseignement supérieur) : sans aucune proposition, saisis-la depuis Parcoursup.</li>
          <li><strong>La classe passerelle</strong> : une année pour renforcer tes acquis et entrer en BTS l'année suivante. Elle est proposée par le rectorat, en général via la CAES.</li>
        </ul>
        <Parents><p>Ne pas avoir de proposition en juin n'est pas un échec définitif : beaucoup de places se libèrent au fil de l'été. L'important est de répondre vite et de ne pas laisser passer la phase complémentaire.</p></Parents>
      </section>

      <section id="metiers">
        <Heading level={2}>10. Les métiers</Heading>
        <p>Le bac pro CIEL, consolidé par un BTS et éventuellement une licence pro, ouvre des métiers techniques recherchés (numérique, industrie, télécoms, banque, énergie, secteur public) :</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Administration systèmes et réseaux</strong> : administrateur systèmes et réseaux ; technicien d'infrastructure ; technicien télécoms.</li>
          <li><strong>Cybersécurité</strong> : opérateur/technicien en cybersécurité ; intégrateur de solutions ; analyste junior.</li>
          <li><strong>Développement</strong> : développeur d'applications ; développeur embarqué ou industriel.</li>
          <li><strong>Support et maintenance</strong> : technicien de maintenance ; hot liner, technicien support ; responsable SAV.</li>
          <li><strong>Électronique et systèmes embarqués</strong> : technicien électronicien ; technicien d'essais.</li>
        </ul>
        <p><strong>Travailler dès le bac pro ?</strong> C'est un vrai choix. Mais le BTS en apprentissage permet de travailler <strong>et</strong> d'obtenir un diplôme en même temps.</p>
      </section>

      <section id="sources">
        <Heading level={2}>11. Sources</Heading>
        <p className="text-sm text-gray-600">Données : jeux ouverts du ministère (Parcoursup 2024 et 2025, apprentissage, InserSup, InserJeunes). Études : Notes Flash SIES (parcours en STS, résultats du BTS), parcours et réussite en licence, Onisep (classe passerelle, prépas ATS). Rémunération des apprentis : La bonne alternance. RNCP / grade / visa : France Compétences.</p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li><a href="https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/" target="_blank" rel="noopener noreferrer">Parcoursup 2025 — vœux et admissions (MESR)</a></li>
          <li><a href="https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup_2024/" target="_blank" rel="noopener noreferrer">Parcoursup 2024 — vœux et admissions (MESR)</a></li>
          <li><a href="https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-insersup/" target="_blank" rel="noopener noreferrer">InserSup — insertion des diplômés du supérieur</a></li>
          <li><a href="https://www.parcoursup.gouv.fr/calendrier" target="_blank" rel="noopener noreferrer">Parcoursup — calendrier</a></li>
        </ul>
      </section>
    </div>
  ),
  tp: (
    <PracticalWork
      title="TP : Exposé sur un métier du numérique"
      objective="Rechercher, analyser et présenter un métier accessible après le bac pro CIEL (avec ou sans poursuite d'études), pour concrétiser ton projet d'orientation et valider la compétence C01."
      materials={tpMaterials}
      steps={tpSteps}
    />
  ),
};
