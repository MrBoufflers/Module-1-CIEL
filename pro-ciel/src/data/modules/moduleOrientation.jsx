import React from 'react';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';
import PracticalWork from '../../components/organisms/PraticalWork';



// Base de données centralisée pour les URL des sources
// Permet une maintenance plus facile
const sourceLinks = {
  2: "https://thotismedia.com/parcoursup-calendrier/",
  3: "https://cfasacef.fr/parcoursup-2026-calendrier-2025-2026-dates-cles-et-conseils/",
  4: "https://www.parcoursup.gouv.fr/calendrier",
  5: "https://www.info.gouv.fr/actualite/le-calendrier-parcoursup-2026",
  6: "https://www.onisep.fr/ressources/structures-enseignement/auvergne-rhone-alpes/rhone/lycee-marcel-sembat",
  7: "https://lyceebranly.com",
  8: "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=8248",
  9: "https://ort-france.fr",
  10: "https://www.google.com/search?q=ynov.com/campus/lyon",
  11: "https://www.google.com/search?q=leschartreux.com",
  12: "https://www.google.com/search?q=leschartreux.com",
  13: "https://clsi.fr",
  14: "https://clsi.fr",
  15: "https://iut.univ-lyon1.fr",
  16: "https://lamartinierediderot.fr",
  17: "https://martiniere-duchere.fr",
  18: "https://sembat-seguin.ent.auvergnerhonealpes.fr",
  19: "https://www.education.gouv.fr/annuaire/69694/venissieux/lycee/0690104n/lycee-marcel-sembat.html",
  21: "https://sembat-seguin.ent.auvergnerhonealpes.fr/actualites-/portes-ouvertes/",
  22: "https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-a-solutions-d-infrastructure-systemes-et-reseaux",
  23: "https://dossier.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=8223",
  24: "https://dossier.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=8323",
  25: "https://dossier.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=8310",
  27: "https://ort-france.fr",
  28: "https://sembat-seguin.ent.auvergnerhonealpes.fr",
  29: "https://sembat-seguin.ent.auvergnerhonealpes.fr",
  30: "https://www.google.com/search?q=ynov.com/campus/lyon",
  31: "https://martiniere-duchere.fr",
  32: "https://clsi.fr",
  33: "https://www.afip-formations.com/", // Lien déduit
  34: "https://www.afip-formations.com/", // Lien déduit
  35: "https://www.sciences-u-lyon.fr/", // Lien déduit
  36: "https://www.epsi.fr/", // Lien déduit
  37: "https://www.epsi.fr/", // Lien déduit
  38: "https://www.mydigitalschool.com/campus-lyon", // Lien déduit
  39: "https://iut.univ-lyon1.fr/formation/but/but-genie-electrique-et-informatique-industrielle",
  40: "https://iut.univ-lyon1.fr/formation/but/info-doua/but-informatique-doua",
  41: "https://dossier.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=8275",
  42: "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=8490",
  43: "https://iut.univ-lyon1.fr/formation/licences-professionnelles/licence-professionnelle-essir",
  44: "https://offre-de-formations.univ-lyon1.fr/mention-65/metiers-des-reseaux-informatiques-et-telecommunications.html",
  45: "https://cnam-auvergnerhonealpes.com/licence-informatique-specialisation-developpement-ou-cybersecurite/",
  46: "https://dossier.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=39319",
  47: "https://www.prepeers.co/etablissement/ecam-lyon/formations/bachelor-cybersecurite-des-systemes-industriels-et-urbains/3208",
  48: "https://guardia.school/",
  49: "https://guardia.school/formations/bachelor-cybersecurite.html",
  50: "https://www.ynov.com/formations/cybersecurite/bts-ciel/bts-ciel-salaire",
  51: "https://www.btsinfo.fr/metiers-apres-bts-sio/"
};

// Fonction utilitaire pour créer un lien source
const createSourceLink = (id) => {
    if (sourceLinks[id]) {
        return ` <a href="${sourceLinks[id]}" target="_blank" rel="noopener noreferrer" class="text-blue-600 no-underline hover:underline">[source]</a>`;
    }
    return ''; // Ne rien afficher si la source n'a pas de lien web
};

const renderTable = (headers, data) => (
<div className="overflow-x-auto not-prose my-6">
    <table className="w-full text-sm text-left text-gray-500 border-collapse border border-gray-300">
    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
        {headers.map((header) => (
            <th key={header} scope="col" className="px-4 py-3 border border-gray-300">{header}</th>
        ))}
        </tr>
    </thead>
    <tbody>
        {data.map((row, rowIndex) => (
        <tr key={rowIndex} className="bg-white border-b hover:bg-gray-50">
            {row.map((cell, cellIndex) => (
            <td key={cellIndex} className="px-4 py-3 border border-gray-300" dangerouslySetInnerHTML={{ __html: cell }}>
                {/* Le contenu est injecté via dangerouslySetInnerHTML pour interpréter les liens <a> */}
            </td>
            ))}
        </tr>
        ))}
    </tbody>
    </table>
</div>
);


const tpTitle = "TP : Exposé sur un Métier du Numérique";
const tpObjective = "Rechercher, analyser et présenter un métier accessible après le Bac Pro CIEL (avec ou sans poursuite d'études). L'objectif est de concrétiser son projet d'orientation en se confrontant aux réalités du marché du travail (missions, compétences, formation, normes) et de valider la compétence C01.";
const tpMaterials = [
    "Ordinateur avec accès Internet.",
    "Outil de création de diaporama (PowerPoint, Google Slides, etc.).",
    "Le Guide d'Orientation (pour les pistes de métiers et de formations).",
    "Sources de recherche : fiches métiers (Onisep, CIDJ), offres d'emploi (APEC, LinkedIn, Indeed)."
];

const evaluationHeaders = ["Critère d'Évaluation", "Exigence (basé sur la Compétence C01)"];
const evaluationData = [
  ["Clarté du Discours", "Le style, le ton et la terminologie sont adaptés (technique mais accessible). Le vocabulaire CIEL est utilisé correctement."],
  ["Qualité de la Présentation", "La présentation (typographie, orthographe, lisibilité) est soignée. L'argumentation est structurée avec des enchaînements logiques."],
  ["Maîtrise du Contenu", "L'argumentation est de qualité. Le groupe répond aux questions avec précision et pertinence, démontrant une maîtrise des savoirs."],
  ["Gestion du Temps", "La présentation respecte strictly la durée impartie (15-20 minutes maximum)."]
];

const tpSteps = [
    {
        title: "Phase 1 : Recherche et Analyse du Métier",
        description: (
            <>
                <p><strong>Problématique :</strong> Dans le cadre d'une réflexion sur votre poursuite d'études, vous devez présenter à vos pairs un métier (que vous souhaitez faire ou pas) qui vous sera accessible après le Bac Pro CIEL (avec ou sans poursuite d'études après le BTS).</p>
                <p>Commencez par une phase de recherche approfondie en utilisant les ressources à votre disposition (fiches Onisep, offres d'emploi, guide d'orientation). Votre but est de collecter toutes les informations nécessaires pour couvrir les 5 sections de contenu exigées.</p>
                <Card className="bg-red-50 border-red-300 not-prose">
                    <p className="font-semibold text-red-800">ATTENTION : La recherche de sources (fiches métiers, offres d'emploi) est fondamentale et doit être citée lors de votre présentation.</p>
                </Card>
            </>
        )
    },
    {
        title: "Phase 2 : Contenu Exigé (Les 5 Sections)",
        description: (
            <>
                <p>Votre exposé doit impérativement couvrir les <strong>cinq sections</strong> suivantes, en apportant un niveau de détail technique suffisant :</p>
                <ol className="list-decimal list-inside space-y-3">
                    <li><strong>Identification du Poste :</strong>
                        <ul className="list-disc list-inside ml-6 text-base">
                            <li>Intitulé précis du métier (ex: Technicien en cybersécurité opérationnelle...).</li>
                            <li>Secteur d'activité (Industrie 4.0, Télécoms, Défense, Santé, etc.).</li>
                        </ul>
                    </li>
                    <li><strong>Missions Opérationnelles :</strong>
                        <ul className="list-disc list-inside ml-6 text-base">
                            <li>Description de 3 à 5 tâches quotidiennes claires.</li>
                            <li>Explication de l'alignement de ces missions avec un ou plusieurs Pôles d'Activités du Bac Pro CIEL (Réalisation/Maintenance, Réseaux, ou Cybersécurité/Donnée).</li>
                        </ul>
                    </li>
                    <li><strong>Savoirs & Compétences Clés :</strong>
                        <ul className="list-disc list-inside ml-6 text-base">
                            <li>Identification de 3 Compétences CIEL (ex: C04, C09, C11...) directement mobilisées (justification obligatoire).</li>
                            <li>Citer 2 à 3 savoirs associés spécifiques que le professionnel doit maîtriser (ex: Modèles OSI/IP, structures électroniques, langages de programmation...).</li>
                        </ul>
                    </li>
                    <li><strong>Parcours de Formation :</strong>
                        <ul className="list-disc list-inside ml-6 text-base">
                            <li>Présenter le niveau de qualification minimal requis (post-Bac).</li>
                            <li>Détailler le parcours d'études après le Bac Pro CIEL (BTS, BUT, Licence Pro...).</li>
                            <li>Évaluation des perspectives d'évolution de carrière.</li>
                        </ul>
                    </li>
                    <li><strong>Enjeux et Normes :</strong>
                        <ul className="list-disc list-inside ml-6 text-base">
                            <li>Analyse des défis technologiques et sociétaux liés au métier (Cybersécurité, IA, IoT, durabilité...).</li>
                            <li>Citer au moins une norme ou une réglementation professionnelle importante (Ex: normes IPC pour le brasage, la réglementation RGPD pour la donnée, etc.).</li>
                        </ul>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 3 : Préparation du Support et Évaluation",
        description: (
            <>
                <p>Une fois vos recherches terminées, construisez votre support de présentation et préparez votre oral en respectant les contraintes de format.</p>
                <ul className="list-disc list-inside">
                    <li><strong>Support obligatoire :</strong> Présentation numérique (diaporama soigné et professionnel).</li>
                    <li><strong>Durée totale :</strong> 15 à 20 minutes (maximum, incluant 3 à 5 minutes de questions/réponses).</li>
                </ul>
                <p>L'évaluation s'appuiera sur la grille d'évaluation de la <strong>Compétence C01 : Communiquer en situation professionnelle</strong>.</p>
                {renderTable(evaluationHeaders, evaluationData)}
            </>
        )
    }
];

  const parcoursupHeaders = ["Phase", "Dates Clés", "Actions Requises pour le Candidat"];
  const parcoursupData = [
    ["<strong>Phase 1 : Information</strong>", "À partir du 17 décembre 2025", "Consultation du moteur de recherche des formations (plus de 23 000 formations). Analyse des fiches détaillées : contenus, attendus, taux d'accès, débouchés, frais de scolarité, dates des JPO."],
    ["<strong>Phase 2 : Inscription et Formulation des Vœux</strong>", "Du 19 janvier au 12 mars 2026 (inclus)", "Création du dossier candidat. Formulation des vœux (jusqu'à 10 vœux en formation initiale et 10 vœux supplémentaires en apprentissage) sans les classer."],
    ["<strong>Phase 3 : Finalisation des Dossiers et Confirmation</strong>", "Du 13 mars au 1er avril 2026 (inclus)", 'Complétion du dossier pour chaque vœu (rédaction du "projet de formation motivé", renseignement de la rubrique "Activités et centres d\'intérêt"). Confirmation de chaque vœu individuellement. Un vœu non confirmé ne sera pas examiné.'],
    ["<strong>Phase 4 : Phase d'Admission Principale</strong>", "Du 2 juin au 11 juillet 2026 (inclus)", 'Réception des réponses des formations ("Oui", "Oui-si", "En attente", "Non"). Réponse obligatoire à chaque proposition dans les délais indiqués. Les délais sont suspendus durant les épreuves écrites du baccalauréat (12 au 19 juin 2026).'],
    ["<strong>Étape Intermédiaire Clé</strong>", "Du 5 au 8 juin 2026 (inclus)", "Classement obligatoire par ordre de préférence des vœux en attente que le candidat souhaite conserver. Cette étape est cruciale pour accélérer l'attribution des places."],
    ["<strong>Phase 5 : Phase Complémentaire</strong>", "Du 11 juin au 10 septembre 2026 (inclus)", "Pour les candidats n'ayant reçu aucune proposition d'admission. Possibilité de formuler jusqu'à 10 nouveaux vœux dans les formations disposant encore de places vacantes."]
  ];

  const jpoHeaders = ["Établissement", "Adresse", "Formations Pertinentes", "Date(s) Annoncée(s)", "Statut de la Date", "Lien vers le site officiel"];
  const jpoData = [
    ["Lycée Edouard Branly", "25 rue de Tourvielle, 69005 Lyon", "BTS CIEL (Option A & B)", "Ven 30 jan 2026 (17h-19h30) & Sam 31 jan 2026 (9h-12h)", "Confirmée 2026", `<a href="${sourceLinks[7]}" target="_blank" rel="noopener noreferrer">lyceebranly.com</a>` + createSourceLink(8)],
    ["Lycée ORT Lyon", "133 rue Marius Berliet, 69008 Lyon", "BTS CIEL (Option A), BTS SIO", "Mercredi 17 décembre 2025 (13h30-18h)", "Confirmée 2025", `<a href="${sourceLinks[9]}" target="_blank" rel="noopener noreferrer">ort-france.fr</a>` + createSourceLink(9)],
    ["Lyon Ynov Campus", "6 Cours de Verdun Rambaud, 69002 Lyon", "BTS CIEL (Option A)", "Samedi 22 novembre 2025 (10h-17h)", "Confirmée 2025", `<a href="${sourceLinks[10]}" target="_blank" rel="noopener noreferrer">ynov.com/campus/lyon</a>` + createSourceLink(10)],
    ["Institution des Chartreux (Campus Sup Alta)", "38 rue Pierre Dupont, 69001 Lyon", "BTS SIO (Option A & B)", "Samedi 31 janvier 2026 (9h-13h)", "Confirmée 2026", `<a href="${sourceLinks[11]}" target="_blank" rel="noopener noreferrer">leschartreux.com</a>` + createSourceLink(12)],
    ["ICOF - Campus Lyon Saint Irénée", "8 Avenue Debrousse, 69005 Lyon", "BTS SIO (Option A & B)", "Jeudi 11 déc 2025 (18h-20h) & Samedi 31 jan 2026", "Confirmées 2025/2026", `<a href="${sourceLinks[13]}" target="_blank" rel="noopener noreferrer">clsi.fr</a>` + createSourceLink(14)],
    ["IUT Lyon 1 (Sites Doua & Gratte-Ciel)", "Villeurbanne", "BUT GEII, BUT Informatique", "JPO : Sam 24 jan 2026 (9h-12h). JES : 28 & 29 jan 2026.", "Confirmées 2026", `<a href="${sourceLinks[15]}" target="_blank" rel="noopener noreferrer">iut.univ-lyon1.fr</a>` + createSourceLink(15)],
    ["Lycée La Martinière Diderot", "18 Place Gabriel Rambaud, 69001 Lyon", "(BTS SIO via La Martinière Duchère)", "Samedi 28 février 2026", "Confirmée 2026", `<a href="${sourceLinks[16]}" target="_blank" rel="noopener noreferrer">lamartinierediderot.fr</a>` + createSourceLink(16)],
    ["Lycée La Martinière Duchère", "300 avenue Andreï Sakharov, 69009 Lyon", "BTS SIO (Option A & B)", "Samedi 31 janvier 2026", "Confirmée 2026", `<a href="${sourceLinks[17]}" target="_blank" rel="noopener noreferrer">martiniere-duchere.fr</a>` + createSourceLink(17)],
    ["Lycée Marcel Sembat", "20 bd Marcel Sembat, 69200 Vénissieux", "BTS CIEL (Option A & B)", "Date non disponible.", "À vérifier", `<a href="${sourceLinks[18]}" target="_blank" rel="noopener noreferrer">sembat-seguin.ent.auvergnerhonealpes.fr</a>` + createSourceLink(18)]
  ];

  const btsHeaders = ["Établissement & Statut", "Adresse", "BTS & Options Disponibles", "Modalités", "Frais de Scolarité (Annuel, si applicable)", "% Bacs Pros Admis en 2024", "Points Forts / Certifications", "Sources"];
  const btsData = [
    ["Lycée Edouard Branly (Public)", "69005 Lyon", "BTS CIEL - Opt A & B", "Scolaire & Apprentissage", "Gratuit", "31% (Opt A Scolaire)", "Certifications CISCO CCNA & CyberSecurity, AWS Academy, logiciels Microsoft", createSourceLink(8)],
    ["Lycée ORT Lyon (Privé sous contrat)", "69008 Lyon", "BTS CIEL - Opt A, BTS SIO - Opt A & B", "Scolaire & Apprentissage", "1998 € (scolaire)", "CIEL : 42%, SIO : 20%", "Certifications TOEIC & PiX", createSourceLink(24) + createSourceLink(27)],
    ["Lycée Marcel Sembat (Public)", "69200 Vénissieux", "BTS CIEL - Opt A & B", "Scolaire", "Gratuit", "44% (Opt A & B)", "-", createSourceLink(28) + createSourceLink(29)],
    ["Lyon Ynov Campus (Privé hors contrat)", "69002 Lyon", "BTS CIEL - Opt A", "Scolaire & Apprentissage", "5000 €-6000 € (gratuit en apprentissage)", "Donnée non disponible", "Accès SEELA Cybertraining, certification Stormshield CSNA", createSourceLink(30)],
    ["Lycée La Martinière Duchère (Public)", "69009 Lyon", "BTS SIO - Opt A (SISR) & B (SLAM)", "Scolaire", "Gratuit", "43% (Objectif 40%)", "Internat possible", createSourceLink(23) + createSourceLink(31)],
    ["ICOF - Campus Lyon Saint Irénée (Privé sous contrat)", "69005 Lyon", "BTS SIO - Opt A (SISR) & B (SLAM)", "Scolaire & Apprentissage", "Donnée non disponible", "30%", "Certifications Projet Voltaire & TOEIC, mini-entreprise, stages à l'étranger (Erasmus+)", createSourceLink(32)],
    ["Institution des Chartreux - Sup Alta (Privé sous contrat)", "69001 Lyon", "BTS SIO - Opt A (SISR) & B (SLAM)", "Scolaire", "1729 € (pour 2024/25)", "9%", "Internat, passerelle vers diplôme d'ingénieur ICS (CPE Lyon)", createSourceLink(25)],
    ["AFIP Formations (Privé hors contrat)", "69100 Villeurbanne", "BTS SIO - Opt A (SISR) & B (SLAM)", "Apprentissage", "Gratuit en apprentissage", "Donnée non disponible", "-", createSourceLink(33) + createSourceLink(34)],
    ["Campus Sciences U Lyon (Privé hors contrat)", "69003 Lyon", "BTS SIO - Opt A (SISR) & B (SLAM)", "Scolaire & Apprentissage", "Donnée non disponible", "Donnée non disponible", "-", createSourceLink(35)],
    ["EPSI - École Privée des Sciences Informatiques (Privé hors contrat)", "69000 Lyon", "BTS SIO - Opt A & B", "Scolaire", "7590 € + 90 € (frais dossier)", "21%", "-", createSourceLink(36) + createSourceLink(37)],
    ["My digital school Lyon (Privé hors contrat)", "69000 Lyon", "BTS SIO - Opt A (SISR) & B (SLAM)", "Scolaire & Apprentissage", "~9800 € (total, gratuit en apprentissage)", "Donnée non disponible", "-", createSourceLink(38)]
  ];

  const butHeaders = ["IUT", "BUT & Parcours Pertinents", "Compétences Clés Développées", "Taux d'Accès Global 2024", "% de Bacs Pros Admis en 2024", "Conclusion Stratégique pour un Bac Pro CIEL"];
  const butData = [
    ["IUT Lyon 1 (Gratte-Ciel)", "BUT GEII (Parcours ESE, AII, EME)", "Électronique, systèmes embarqués, automatisme, informatique industrielle, gestion de l'énergie.", "1382 propositions pour 2341 candidats", "0%", "Vœu très ambitieux. À ne formuler qu'en cas de dossier scolaire exceptionnel. La stratégie recommandée est de viser une admission en 2e ou 3e année après un excellent BTS."],
    ["IUT Lyon 1 (Doua)", "BUT Informatique (Parcours Réalisation d'app., Déploiement d'app., Admin. de données)", "Développement logiciel, administration systèmes et réseaux, gestion de bases de données, sécurité.", "Donnée non disponible", "0%", "Vœu très ambitieux. Mêmes recommandations que pour le BUT GEII. La concurrence y est encore plus forte. À envisager comme un objectif post-BTS."]
  ];

export const moduleOrientation = { 
    course : (
    <div className="space-y-12 prose prose-lg max-w-none prose-headings:font-bold prose-h2:border-b prose-h2:pb-2">
      
      <section>
        <Heading level={1} className="mb-4">Guide d'Orientation 2026 : Poursuites d'Études Post-Bac Pro CIEL dans la Région Lyonnaise</Heading>
      </section>

      {/* Avertissement */}
      <Card className="bg-yellow-50 border-yellow-300 not-prose">
        <Heading level={4} className="!text-yellow-800 !mt-0">Avertissement</Heading>
        <p className="text-sm">Ce guide, rédigé en <strong>octobre 2025</strong> par un professeur de CIEL du lycée Saint Charles, est un outil d'aide à l'orientation et non un document officiel. Il vise à fournir une base de réflexion pour les élèves et leurs familles.</p>
        <ul className="list-disc list-inside text-sm">
            <li>Il n'est <strong>pas exhaustif</strong> : d'autres formations et établissements existent.</li>
            <li>Il peut contenir <strong>quelques erreurs</strong> : les informations (frais, dates, taux) changent très vite.</li>
            <li><strong>Chaque information doit être vérifiée</strong> directement auprès des établissements concernés et sur la plateforme Parcoursup.</li>
        </ul>
      </Card>

      {/* Sommaire */}
      <section>
        <Heading level={2} id="sommaire">Sommaire</Heading>
        <ul className="list-disc list-inside not-prose">
            <li><a href="#section-1" className="text-blue-600 font-semibold hover:underline">Section 1 : Le Calendrier Stratégique de l'Orientation</a></li>
            <li><a href="#section-2" className="text-blue-600 font-semibold hover:underline">Section 2 : La Voie Privilégiée : Le BTS</a></li>
            <li><a href="#section-3" className="text-blue-600 font-semibold hover:underline">Section 3 : Viser Plus Haut : Le BUT</a></li>
            <li><a href="#section-4" className="text-blue-600 font-semibold hover:underline">Section 4 : Se Spécialiser et Construire sa Carrière</a></li>
            <li><a href="#conclusion" className="text-blue-600 font-semibold hover:underline">Conclusion et Recommandations Stratégiques</a></li>
        </ul>
      </section>

      {/* Introduction */}
      <section>
        <Heading level={2}>Introduction</Heading>
        <p>Le Baccalauréat Professionnel CIEL (Cybersécurité, Informatique et Réseaux, Électronique) constitue une porte d'entrée privilégiée vers les métiers du numérique, un secteur en tension constante et porteur de nombreuses opportunités. Les compétences acquises dans ce cursus sont directement alignées sur les besoins critiques des entreprises en matière de cybersécurité, de gestion de réseaux, de développement et de maintenance des systèmes connectés, notamment dans le domaine en pleine expansion de l'Internet des Objets (IoT). L'obtention de ce diplôme n'est pas une finalité, mais le début d'un parcours prometteur.</p>
        <p>La région lyonnaise, en tant que pôle technologique majeur en France, offre un écosystème particulièrement riche pour les diplômés de cette filière. Elle concentre un grand nombre d'établissements d'enseignement supérieur de qualité, des entreprises de services du numérique (ESN), des start-ups innovantes et des industries de pointe, toutes à la recherche de techniciens qualifiés. Pour un jeune bachelier et sa famille, naviguer dans la complexité des choix post-bac peut s'avérer une tâche ardue.</p>
        <p>Ce guide a pour objectif de fournir une feuille de route, entièrement mise à jour pour le cycle d'orientation 2025-2026. Il a été conçu pour démystifier le processus d'orientation et permettre à chaque élève de construire un projet d'avenir réaliste et ambitieux, en adéquation avec ses compétences et ses aspirations. Chaque information présentée a été sourcée et vérifiée à partir des données les plus récentes disponibles. Lorsqu'une information n'est pas disponible ou certaine, cela sera explicitement mentionné.</p>
        <p>Le rapport s'articule autour de quatre axes stratégiques : il débute par les échéances incontournables qui rythmeront l'année de Terminale, détaille ensuite les différentes voies de formation post-bac (BTS et BUT) en analysant en profondeur les diplômes et les établissements lyonnais, pour enfin explorer les perspectives de spécialisation et les débouchés professionnels concrets.</p>
      </section>

      {/* Section 1 */}
      <section id="section-1">
        <Heading level={2} >Section 1 : Le Calendrier Stratégique de l'Orientation 2025-2026</Heading>
        <p>La réussite d'un projet d'orientation repose sur une planification rigoureuse et le respect d'un calendrier précis. Cette section détaille les deux piliers temporels de l'année de Terminale : la procédure Parcoursup, qui centralise les candidatures dans l'enseignement supérieur, et l'agenda des journées portes ouvertes, des moments d'échange essentiels pour affiner ses choix.</p>
        
        <Heading level={3} id="section-1-1">1.1. L'Échéancier Détaillé de Parcoursup 2026</Heading>
        <p>Parcoursup est la plateforme nationale de préinscription en première année de l'enseignement supérieur.<a href={sourceLinks[2]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a> Sa procédure se déroule en plusieurs phases distinctes, chacune avec ses propres dates limites impératives. Une méconnaissance de ce calendrier peut compromettre l'ensemble du projet d'orientation. Le tableau ci-dessous synthétise les étapes clés de la session 2026, basées sur les calendriers officiels communiqués.<a href={sourceLinks[3]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a></p>
        
        <Heading level={4} className="!text-base">Tableau 1 : Calendrier Détaillé de la Procédure Parcoursup 2026</Heading>
        {renderTable(parcoursupHeaders, parcoursupData)}

        <p>Une analyse approfondie du calendrier révèle un avantage stratégique majeur pour les candidats visant l'apprentissage. Contrairement aux formations sous statut scolaire, dont les vœux doivent impérativement être formulés avant le 12 mars, le calendrier pour l'apprentissage est plus flexible. Il est souvent possible de formuler des vœux pour des formations en apprentissage bien au-delà de cette date, et même après le 1er avril.<a href={sourceLinks[2]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a> Cette flexibilité constitue un atout considérable, offrant une seconde chance et un filet de sécurité aux candidats qui n'auraient pas obtenu de réponse positive lors de la phase principale ou qui finaliseraient leur recherche d'entreprise plus tardivement.</p>

        <Heading level={3} id="section-1-2">1.2. L'Agenda des Journées Portes Ouvertes (JPO) à Lyon et ses Environs</Heading>
        <p>Les Journées Portes Ouvertes (JPO) sont des moments privilégiés pour découvrir les établissements, échanger avec les équipes pédagogiques et les étudiants, et visiter les infrastructures (salles techniques, laboratoires). Elles sont indispensables pour confirmer ou infirmer un choix d'orientation. La communication des dates de JPO est décentralisée ; chaque établissement gère son propre calendrier. Une démarche proactive de consultation régulière des sites officiels des établissements ciblés à partir de décembre est donc une compétence clé du processus d'orientation. Le tableau ci-dessous compile les dates disponibles au moment de la rédaction de ce rapport, en distinguant clairement les dates confirmées de celles qui restent à vérifier.</p>

        <Heading level={4} className="!text-base">Tableau 2 : Agenda (Prévisionnel) des Journées Portes Ouvertes 2025-2026 dans la Région Lyonnaise</Heading>
        {renderTable(jpoHeaders, jpoData)}

        <p className="text-sm italic"><strong>Note importante :</strong> Le site officiel du Lycée Marcel Sembat de Vénissieux est sembat-seguin.ent.auvergnerhonealpes.fr.<a href={sourceLinks[19]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a> Il est impératif de consulter ce site pour obtenir la date des JPO 2026, qui n'était pas publiée au moment de nos recherches.<a href={sourceLinks[21]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a></p>
      </section>

      {/* Section 2 */}
      <section id="section-2">
        <Heading level={2} >Section 2 : La Voie Privilégiée : Le Brevet de Technicien Supérieur (BTS)</Heading>
        <p>Pour un titulaire de Baccalauréat Professionnel, la poursuite d'études en Brevet de Technicien Supérieur (BTS) représente la voie la plus naturelle, la plus cohérente et la plus sécurisée. Ce diplôme a été spécifiquement pensé pour articuler les compétences pratiques du lycée professionnel avec les exigences techniques de l'enseignement supérieur.</p>

        <Heading level={3} id="section-2-1">2.1. Le BTS : Le Diplôme Conçu pour les Bacheliers Professionnels</Heading>
        <p>Le BTS est un diplôme national de niveau 5 (Bac+2) qui valide l'obtention de 120 crédits ECTS. Sa préparation s'effectue en deux ans au sein de lycées ou de centres de formation d'apprentis (CFA). Bien qu'il soit conçu pour une insertion professionnelle rapide, il constitue également un excellent tremplin vers des études plus longues, notamment en Licence Professionnelle.</p>
        <p>L'avantage structurel majeur pour les bacheliers professionnels est un accès facilité et prioritaire. La réglementation prévoit en effet qu'un quota de places leur soit réservé dans chaque section de BTS cohérente avec leur spécialité de bac. Leurs dossiers de candidature sur Parcoursup sont examinés en priorité par les commissions de recrutement, ce qui augmente significativement leurs chances de succès par rapport à d'autres filières plus généralistes.</p>
        <p>La formation peut être suivie sous deux statuts principaux :</p>
        <ul>
            <li><strong>Le statut scolaire :</strong> L'étudiant est à temps plein en établissement, avec des périodes de stage obligatoires en entreprise (généralement de 6 à 8 semaines en fin de première année).</li>
            <li><strong>L'apprentissage :</strong> L'étudiant alterne entre des périodes de formation théorique en établissement et des périodes de travail en entreprise, où il a le statut de salarié. Cette modalité offre un triple avantage : les frais de scolarité sont pris en charge par l'entreprise, l'étudiant perçoit un salaire et acquiert une expérience professionnelle très valorisée sur le marché du travail.</li>
        </ul>

        <Heading level={3} id="section-2-2">2.2. Le BTS CIEL : La Poursuite d'Études Naturelle</Heading>
        <p>Le BTS CIEL (Cybersécurité, Informatique et Réseaux, Électronique) est le prolongement direct du Bac Pro CIEL. Il se décline en deux options distinctes, permettant une première spécialisation en phase avec les appétences de l'étudiant.</p>
        <Card className="bg-blue-50 border-blue-200 not-prose">
            <Heading level={4} className="!text-blue-800 !mt-0">Option A : Informatique et Réseaux (IR)</Heading>
            <p>Cette option est axée sur la dimension logicielle et la gestion des infrastructures. Les étudiants y approfondissent leurs compétences en administration des systèmes et des réseaux, en développement de solutions logicielles sécurisées et en cybersécurité. Le programme couvre des technologies et langages essentiels tels que la programmation (Python, C++, C#), le développement web (HTML, CSS, PHP), la gestion de bases de données, la configuration d'équipements réseau (routeurs, commutateurs, via des cours certifiants comme Cisco CCNA), l'administration de serveurs (Windows Server, Linux) et la mise en œuvre de solutions de sécurité (pare-feu, VPN, cryptographie).</p>
            <p><strong>Débouchés métiers :</strong> Administrateur systèmes et réseaux, Technicien d'exploitation, Développeur d'applications, Technicien en cybersécurité, Technicien télécoms et réseaux, Hot liner.</p>
        </Card>
        <Card className="bg-green-50 border-green-200 not-prose mt-6">
            <Heading level={4} className="!text-green-800 !mt-0">Option B : Électronique et Réseaux (ER)</Heading>
            <p>Cette option se concentre sur la dimension matérielle des systèmes communicants. Elle forme des techniciens capables de concevoir, prototyper, valider et maintenir des produits électroniques, des systèmes embarqués et des objets connectés (IoT). Les compétences développées incluent la conception de circuits, la maintenance de systèmes complexes, l'automatisme et la programmation de microcontrôleurs.</p>
            <p><strong>Débouchés métiers :</strong> Technicien électronicien, Technicien de maintenance en informatique, Responsable du service après-vente, Technicien d'essais, Électronicien automobile, Technicien en systèmes embarqués.</p>
        </Card>

        <Heading level={3} id="section-2-3" className="!mt-8">2.3. Le BTS SIO : L'Alternative Spécialisée en Services Informatiques</Heading>
        <p>Le BTS SIO (Services Informatiques aux Organisations) est une autre voie d'excellence, particulièrement pertinente pour les profils CIEL. Il est davantage orienté vers la fourniture de services informatiques au sein des entreprises et se divise également en deux options.</p>
        <Card className="bg-blue-50 border-blue-200 not-prose">
            <Heading level={4} className="!text-blue-800 !mt-0">Option A : Solutions d'Infrastructure, Systèmes et Réseaux (SISR)</Heading>
            <p>Cette option est en parfaite adéquation avec la composante "Réseaux" du Bac Pro CIEL. Elle forme des spécialistes de l'administration et de la maintenance des infrastructures réseau. L'objectif est de garantir la disponibilité, la performance et la sécurité du système d'information de l'entreprise. Les compétences acquises sont très proches de celles du BTS CIEL option IR, avec un accent peut-être plus marqué sur la gestion de parc et le support aux utilisateurs.</p>
            <p><strong>Débouchés métiers :</strong> Administrateur systèmes et réseaux, Technicien d'infrastructure, Technicien de maintenance, Hot liner, Pilote d'exploitation.</p>
        </Card>
        <Card className="bg-green-50 border-green-200 not-prose mt-6">
            <Heading level={4} className="!text-green-800 !mt-0">Option B : Solutions Logicielles et Applications Métiers (SLAM)</Heading>
            <p>Cette option s'adresse aux élèves qui ont développé un intérêt particulier pour la programmation. Elle est centrée sur le cycle de vie du logiciel : analyse des besoins des utilisateurs, conception, développement, test et maintenance d'applications métiers. C'est la voie privilégiée pour devenir développeur d'applications.</p>
            <p><strong>Débouchés métiers :</strong> Développeur d'applications informatiques, Analyste-programmeur, Technicien d'études informatiques, Chargé de support applicatif.</p>
        </Card>

        <Heading level={3} id="section-2-4" className="!mt-8">2.4. Annuaire Détaillé des Établissements BTS de la Région Lyonnaise</Heading>
        <p>Le choix d'un établissement est une décision aussi importante que le choix du diplôme. Le paysage lyonnais est riche, mais hétérogène. L'analyse des données Parcoursup de 2024 révèle des tendances claires qui doivent guider la stratégie de candidature d'un bachelier professionnel.</p>
        <p>Il existe une dualité marquée entre les lycées publics, gratuits et très demandés, et un secteur privé dynamique offrant une capacité d'accueil plus importante, souvent à un coût non négligeable en formation initiale. Cependant, cette dualité est largement atténuée par l'apprentissage. Cette modalité, en plus de fournir une expérience professionnelle inestimable, rend les formations privées financièrement accessibles puisque les frais de scolarité sont pris en charge par l'entreprise d'accueil.</p>
        <p>De plus, les taux d'admission des bacheliers professionnels varient considérablement d'un établissement à l'autre. Des établissements comme le Lycée La Martinière Duchère (public) ou le Lycée ORT (privé) affichent des politiques d'accueil très favorables aux Bac Pro, avec des taux d'admission ou des objectifs affichés de 40% ou plus.<a href={sourceLinks[23]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a> À l'inverse, d'autres, comme l'Institution des Chartreux, sont beaucoup plus sélectifs avec seulement 9% d'admis issus de la voie professionnelle en 2024.<a href={sourceLinks[25]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a></p>
        <p>Enfin, au-delà du diplôme, les établissements se distinguent par les certifications professionnelles qu'ils proposent. Des certifications reconnues par l'industrie comme Cisco CCNA, AWS Academy (Lycée Branly) ou Stormshield (Lyon Ynov Campus) représentent un avantage concurrentiel majeur sur le marché du travail et doivent être un critère de choix important.</p>
        <p>Une candidature bien construite sur Parcoursup devrait donc panacher ces différentes options pour maximiser les chances de succès.</p>

        <Heading level={4} className="!text-base">Tableau 3 : Annuaire Comparatif des BTS CIEL et SIO à Lyon et ses Environs (Données 2024-2026)</Heading>
        {renderTable(btsHeaders, btsData)}
      </section>

      {/* Section 3 */}
      <section id="section-3">
        <Heading level={2} id="section-3">Section 3 : Une Autre Voie d'Études : Le Bachelor Universitaire de Technologie (BUT)</Heading>
        <p>Le Bachelor Universitaire de Technologie (BUT) est un diplôme national (Bac+3) qui a remplacé le DUT. Il représente une voie d'études **plus académique** que le BTS, qui doit être abordée avec un grand réalisme par les bacheliers professionnels.</p>

        <Heading level={3} id="section-3-1">3.1. Le BUT : Un Parcours Académique à Aborder Stratégiquement</Heading>
        <p>Le BUT est un diplôme national de niveau 6 (Bac+3) préparé en trois ans au sein d'un Institut Universitaire de Technologie (IUT)... [Le reste du premier paragraphe reste identique] ...via des stages longs ou l'alternance.</p>
        
        <Card className="bg-red-50 border-red-300 not-prose">
            <Heading level={4} className="!text-red-800 !mt-0">La Réalité de l'Admission : Une Question de Profil</Heading>
            <p>Il est impératif d'aborder la question de l'admission en BUT avec la plus grande transparence. Les IUT, et en particulier l'IUT Lyon 1, sont des structures **très demandées**. Leurs cursus sont principalement conçus en continuité des baccalauréats généraux à spécialités scientifiques et des baccalauréats technologiques (STI2D).<a href={sourceLinks[39]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a> L'analyse des données d'admission de Parcoursup pour l'année 2024 est sans appel :</p>
            <ul className="list-disc list-inside">
                <li>Pour le BUT GEII de l'IUT Lyon 1 (site Gratte-Ciel), sur 193 candidats admis, <strong>aucun n'était issu d'un baccalauréat professionnel (0%)</strong>.</li>
                <li>Pour le BUT Informatique de l'IUT Lyon 1 (site de la Doua), sur 127 candidats admis, <strong>aucun n'était issu d'un baccalauréat professionnel (0%)</strong>.<a href={sourceLinks[41]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a></li>
            </ul>
            <p>Cette situation **ne remet absolument pas en cause la qualité du Bac Pro CIEL**. Elle s'explique par la différence fondamentale de programme : le Bac Pro est axé sur l'acquisition de compétences techniques concrètes et l'insertion professionnelle, tandis que le BUT attend des candidats un volume important de connaissances théoriques en mathématiques et en physique, ce qui avantage les filières générales et technologiques.</p>
            <p>Pour un bachelier professionnel, l'accès direct en BUT est donc statistiquement très difficile. La voie **la plus intelligente et stratégique** pour intégrer ce type de cursus est de **consolider ses acquis avec un excellent BTS**. Un très bon dossier de BTS permet ensuite de postuler à des admissions parallèles (en 2ème ou 3ème année de BUT, ou en école d'ingénieur), où le profil technique et pratique du Bac Pro CIEL est cette fois-ci très recherché et valorisé.</p>
        </Card>

        <Heading level={3} id="section-3-2" className="!mt-8">3.2. Les BUT les Plus Pertinents pour un Profil CIEL</Heading>
        <p>Malgré la difficulté d'accès direct, il est utile de connaître les BUT qui sont les plus en phase avec les compétences du Bac Pro CIEL.</p>
        <ul className="list-disc list-inside">
            <li><strong>BUT GEII (Génie Électrique et Informatique Industrielle) :</strong> C'est une filière très pertinente qui couvre l'électricité, l'électronique, l'automatisme et l'informatique industrielle. L'IUT Lyon 1 (site Gratte-Ciel) propose trois parcours de spécialisation à partir de la deuxième année <a href={sourceLinks[39]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a> :
                <ul>
                    <li>Électronique et Systèmes Embarqués (ESE) : En parfaite continuité avec l'aspect matériel et IoT du Bac Pro CIEL.</li>
                    <li>Automatisme et Informatique Industrielle (AII) : Axé sur la programmation des systèmes automatisés et des robots.</li>
                    <li>Électricité et Maîtrise de l'Énergie (EME) : Orienté vers la gestion des installations électriques et les énergies renouvelables.</li>
                </ul>
            </li>
            <li><strong>BUT R&T (Réseaux et Télécommunications) :</strong> Il s'agit du BUT le plus directement aligné sur la composante "Réseaux" du Bac Pro CIEL. Il forme des experts en conception, déploiement, administration et sécurisation des réseaux informatiques et de télécommunications. <strong>Attention :</strong> sur la base des informations disponibles, ce BUT n'est pas proposé par les IUT de Lyon.</li>
            <li><strong>BUT Informatique :</strong> C'est également une excellente option, plus centrée sur le développement logiciel et la gestion des données. L'IUT Lyon 1 (site de la Doua) propose trois parcours <a href={sourceLinks[40]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a> :
                <ul>
                    <li>Réalisation d'applications : conception, développement, validation : Pour les futurs développeurs.</li>
                    <li>Déploiement d'applications communicantes et sécurisées : Un parcours qui mêle développement et administration réseau.</li>
                    <li>Administration, gestion et exploitation des données : Pour se spécialiser dans les bases de données et la data.</li>
                </ul>
            </li>
        </ul>

        <Heading level={3} id="section-3-3">3.3. Panorama des IUT de la Région Lyonnaise</Heading>
        <ul className="list-disc list-inside">
            <li><strong>IUT Lyon 1 (sites de la Doua à Villeurbanne et Gratte-Ciel à Villeurbanne) :</strong> C'est l'établissement de référence pour les filières techniques et scientifiques. Il propose les BUT GEII et Informatique, les plus pertinents pour un profil CIEL. L'admission y est extrêmement compétitive, comme détaillé précédemment.</li>
            <li><strong>IUT Lumière Lyon 2 (site de Bron) :</strong> Propose des BUT plus orientés vers le tertiaire et les services, comme le BUT Science des Données, qui pourrait être une option pour un élève ayant un fort attrait pour l'analyse de données, mais il est moins technique.</li>
            <li><strong>IUT Jean Moulin Lyon 3 :</strong> Ses BUT sont principalement dans les domaines du droit, de la gestion et de la communication (Carrières Juridiques, GACO, Information-Communication), ce qui les éloigne du cœur de métier d'un Bac Pro CIEL.</li>
        </ul>

        <Heading level={4} className="!text-base">Tableau 4 : Analyse des BUT Pertinents et Taux d'Accès pour les Bacs Pros à Lyon (Données 2024)</Heading>
        {renderTable(butHeaders, butData)}
      </section>

      {/* Section 4 */}
      <section id="section-4">
        <Heading level={2}>Section 4 : Se Spécialiser et Construire sa Carrière</Heading>
        <p>L'obtention d'un premier diplôme post-bac n'est qu'une étape. Le secteur du numérique valorise la spécialisation et la mise à jour continue des compétences. La construction d'un parcours de carrière solide passe souvent par une poursuite d'études ciblée après le BTS, avant de s'insérer durablement sur le marché du travail.</p>

        <Heading level={3} id="section-4-1">4.1. Après le BTS : La Poursuite d'Études en Bac+3</Heading>
        <p>La Licence Professionnelle est une formation d'un an, accessible après un Bac+2 (comme un BTS), qui permet d'obtenir un diplôme de niveau Bac+3 (grade de Licence). Elle est conçue pour apporter une forte spécialisation dans un domaine précis et est très appréciée des recruteurs pour son orientation professionnelle marquée, incluant souvent une longue période en entreprise (stage ou alternance). Pour un diplômé de BTS CIEL ou SIO, c'est la voie idéale pour approfondir une expertise et accéder à des postes à plus grandes responsabilités.</p>
        <p>Plusieurs licences professionnelles et bachelors (diplômes d'écoles privées de niveau Bac+3) pertinents sont accessibles dans la région lyonnaise :</p>
        <ul className="list-disc list-inside">
            <li><strong>Licence Pro Métiers de l'informatique : administration et sécurité des systèmes et des réseaux (ASSR) :</strong> Proposée par l'IUT Lyon 1, cette formation est la suite logique d'un BTS SIO SISR ou CIEL IR. Elle vise à former des experts en administration, sécurité, virtualisation et gestion de parc. L'accès est conditionné à l'étude du dossier pour les titulaires de BTS en informatique.<a href={sourceLinks[43]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a></li>
            <li><strong>Licence Pro Métiers des réseaux informatiques et télécommunications (MRIT) :</strong> Également listée à l'IUT Lyon 1, cette formation se concentre sur les réseaux industriels et informatiques. Il est crucial de noter que, selon les dernières informations, le parcours "Réseaux industriels et informatiques" de cette licence n'est accessible qu'en Validation des Acquis de l'Expérience (VAE) et non en formation initiale pour les étudiants sortant de BTS.<a href={sourceLinks[44]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a></li>
            <li><strong>Licence Sciences, technologies, santé mention informatique (parcours Informatique générale, spécialisation Cybersécurité) :</strong> Offerte par le CNAM Auvergne-Rhône-Alpes en alternance, cette formation est explicitement ouverte aux titulaires de BTS SIO et CIEL. Elle permet d'acquérir des compétences pointues en analyse et audit de sécurité, et en gestion des risques.<a href={sourceLinks[45]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a></li>
            <li><strong>Bachelor Cybersécurité des systèmes industriels et urbains :</strong> Proposé par ECAM LaSalle, une école d'ingénieurs reconnue à Lyon, ce bachelor forme des spécialistes de la sécurité des systèmes critiques.<a href={sourceLinks[46]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a> Les conditions d'accès post-BTS doivent être vérifiées directement auprès de l'établissement.</li>
            <li><strong>Bachelor développeur informatique spécialité cybersécurité :</strong> Dispensé par la Guardia Cybersecurity School à Lyon, ce programme est accessible après le bac et forme en trois ans, avec une alternance en dernière année, des experts opérationnels en sécurité informatique. Il s'agit d'une école privée hors Parcoursup.<a href={sourceLinks[48]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a></li>
        </ul>

        <Heading level={3} id="section-4-2">4.2. Panorama des Métiers et des Débouchés</Heading>
        <p>Le parcours Bac Pro CIEL, consolidé par un BTS et éventuellement une Licence Professionnelle, ouvre les portes d'un large éventail de métiers techniques très recherchés. Le salaire d'un jeune diplômé de BTS se situe généralement dans une fourchette de 24 000 € à 30 000 € brut par an (soit environ 1 800 € à 2 500 € brut par mois).</p>
        <p>Cependant, il est essentiel de comprendre l'impact de l'alternance sur cette rémunération. Un diplômé ayant suivi son BTS en apprentissage n'est pas considéré comme un débutant au même titre qu'un diplômé issu de la voie scolaire. Fort de deux années d'expérience professionnelle concrète, il est immédiatement opérationnel et peut légitimement négocier un salaire dans la fourchette haute, se rapprochant de 30 000 € à 32 000 € brut annuels dès l'embauche.<a href={sourceLinks[50]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a> Cette "prime à l'alternance" est un avantage concurrentiel majeur.</p>
        <p>Les métiers peuvent être regroupés par grandes fonctions :</p>
        <ul>
            <li><strong>Administration Systèmes & Réseaux :</strong>
                <ul>
                    <li>Administrateur/trice systèmes et réseaux : Gère et optimise les serveurs et le réseau d'une entreprise.<a href={sourceLinks[51]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a></li>
                    <li>Technicien/ne d'infrastructure : Installe et maintient le matériel et les logiciels de l'infrastructure informatique.</li>
                    <li>Technicien/ne télécoms et réseaux : Spécialiste des équipements de communication.<a href={sourceLinks[22]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a></li>
                </ul>
            </li>
            <li><strong>Cybersécurité :</strong>
                <ul>
                    <li>Opérateur/trice en Cybersécurité / Technicien/ne en cybersécurité : Surveille les systèmes, détecte les activités suspectes et applique les premières mesures de défense.</li>
                    <li>Intégrateur/trice de solutions de sécurité : Déploie et configure les outils de sécurité (pare-feu, antivirus, sondes).</li>
                    <li>Analyste en cybersécurité (junior) : Participe à l'analyse des menaces et à la gestion des incidents de sécurité.</li>
                </ul>
            </li>
            <li><strong>Développement Logiciel :</strong>
                <ul>
                    <li>Développeur/euse d'applications : Crée des logiciels, des applications mobiles ou des sites web.<a href={sourceLinks[51]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a></li>
                    <li>Développeur/euse en informatique embarquée/industrielle : Programme les logiciels qui fonctionnent au cœur des objets connectés et des machines industrielles.</li>
                </ul>
            </li>
            <li><strong>Support & Maintenance :</strong>
                <ul>
                    <li>Technicien/ne de maintenance en informatique : Diagnostique et répare les pannes matérielles et logicielles.<a href={sourceLinks[51]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a></li>
                    <li>Hot liner / Technicien/ne support client : Assiste les utilisateurs en difficulté.<a href={sourceLinks[22]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a></li>
                    <li>Responsable du service après-vente (SAV) : Gère les équipes de maintenance pour des produits techniques.</li>
                </ul>
            </li>
            <li><strong>Électronique et Systèmes Embarqués :</strong>
                <ul>
                    <li>Technicien/ne électronicien/ne : Conçoit, teste et répare des cartes et des composants électroniques.</li>
                    <li>Technicien/ne d'essais : Valide le fonctionnement et la fiabilité de nouveaux produits électroniques.</li>
                </ul>
            </li>
        </ul>
        <p>Ces professionnels sont recherchés dans une multitude de secteurs d'activité, allant des entreprises de services du numérique (ESN) aux industries de pointe (aéronautique, défense, automobile, santé), en passant par les télécommunications, les banques, l'énergie et le secteur public.</p>
      </section>

      {/* Conclusion */}
      <section id="conclusion">
        <Heading level={2}>Conclusion et Recommandations Stratégiques</Heading>
        <p>Le parcours d'orientation post-Bac Pro CIEL dans la région lyonnaise est riche en opportunités, à condition d'être abordé avec méthode et réalisme. Les compétences acquises au lycée sont une base solide et recherchée, ouvrant la voie à des carrières passionnantes dans le secteur du numérique.</p>

        <Heading level={3} id="conclusion-1">Synthèse des Voies d'Avenir</Heading>
        <ul className="list-disc list-inside">
            <li><strong>La voie principale et la plus sécurisée est le BTS.</strong> Les BTS CIEL (Option A ou B) et SIO (Option A ou B) sont parfaitement adaptés, avec des places réservées et un examen prioritaire des dossiers des bacheliers professionnels. C'est sur cette voie que doit se concentrer la stratégie d'orientation.</li>
<li><strong>Le BUT représente une voie plus académique,</strong> qui doit être considérée comme un objectif à moyen terme. La stratégie la plus pertinente est de viser une admission parallèle après avoir excellé en BTS.</li>            <li><strong>La Licence Professionnelle est l'étape de spécialisation idéale après un BTS.</strong> Elle permet d'atteindre un niveau Bac+3, d'acquérir une expertise pointue (cybersécurité, administration avancée des réseaux) et d'accéder à des postes mieux rémunérés et à plus hautes responsabilités.</li>
        </ul>

        <Heading level={3} id="conclusion-2">Conseils pour un Dossier Parcoursup Efficace</Heading>
        <ul className="list-disc list-inside">
            <li><strong>Valoriser le Bac Pro :</strong> Le dossier Parcoursup n'est pas qu'une suite de notes. Il faut utiliser la rubrique "Activités et centres d'intérêt" pour mettre en avant les projets techniques réalisés au lycée, les compétences pratiques acquises (configuration de routeurs, programmation de microcontrôleurs, etc.) et les expériences de stage. Le "projet de formation motivé" doit expliquer en quoi les compétences du Bac Pro CIEL sont un atout pour le BTS visé.</li>
            <li><strong>Construire une Liste de Vœux Équilibrée :</strong> Une stratégie de vœux robuste doit inclure un panachage d'options pour maximiser les chances de recevoir une proposition. Il est conseillé de formuler des vœux pour :
                <ul>
                    <li><strong>Des options de sécurité :</strong> Des BTS dans des établissements affichant un fort taux d'accueil de bacheliers professionnels, comme le BTS SIO au Lycée La Martinière Duchère (objectif 40% de Bac Pro)<a href={sourceLinks[23]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a> ou le BTS CIEL au Lycée ORT (42% de Bac Pro admis en 2024).<a href={sourceLinks[24]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a></li>
                    <li><strong>Des options équilibrées :</strong> Des BTS dans les grands lycées publics lyonnais comme le Lycée Edouard Branly (31% de Bac Pro admis en 2024).</li>
                    <li><strong>Des options ambitieuses ("vœux de rêve") :</strong> Un ou deux vœux en BUT pour les candidats au dossier exceptionnel, en gardant à l'esprit que les chances d'admission directe sont statistiquement très faibles (0% en 2024 à l'IUT Lyon 1).</li>
                </ul>
            </li>
            <li><strong>L'Apprentissage comme Levier Stratégique :</strong> L'apprentissage doit être considéré comme une option prioritaire. Il résout la question des frais de scolarité dans les établissements privés, offre une rémunération et, surtout, fournit une expérience professionnelle de deux ans qui constitue un avantage concurrentiel majeur à l'embauche, se traduisant par un salaire de départ potentiellement plus élevé.<a href={sourceLinks[50]} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">[source]</a> Il est fortement recommandé de postuler à la fois aux formations en statut scolaire et en apprentissage.</li>
        </ul>
        <p>En conclusion, le titulaire d'un Bac Pro CIEL est en position de force pour construire un avenir professionnel réussi dans le numérique. En abordant le processus d'orientation avec rigueur, en faisant preuve de réalisme dans ses choix et en valorisant ses compétences uniques, chaque élève peut transformer son potentiel en une carrière concrète et épanouissante.</p>
      </section>

      {/* La section des sources a été supprimée comme demandé */}
      
    </div>
  ),
  tp: (
    <PracticalWork 
      title={tpTitle}
      objective={tpObjective}
      materials={tpMaterials}
      steps={tpSteps}
    />
  )
}

