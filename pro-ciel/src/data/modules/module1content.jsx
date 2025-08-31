import Quiz from '../../components/organisms/Quiz'
import { VonNeumannDiagramComponent } from './../../components/organisms/VonNeumannDiagram';
import ComponentShowcase from '../../components/organisms/ComponentShowcase';
import HistoryTimeline from '../../components/organisms/HistoryTimeLine';
import InfoLangage from '../../assets/images/infoLangage.jpg';
import PracticalWork from '../../components/organisms/PraticalWork';

const tpModule1Title = 'TP : Désassembler et Remonter un PC';
const tpModule1Objective = 'Mettre les mains dans le "concret" (hardware), identifier physiquement chaque composant vu en cours, comprendre leur emplacement, leur connectique et comment ils s\'assemblent logiquement et physiquement.';
const tpModule1Materials = [
  'Tours de PC fonctionnelles ou de récupération (1 pour 2-3 élèves).',
  'Un jeu de tournevis cruciformes de différentes tailles.',
  'Bracelets antistatiques (1 par élève).',
  'Petits récipients (pots de yaourt, boîtes) pour organiser les vis.',
  'Un smartphone par groupe pour documenter chaque étape par des photos.',
];
const tpModule1Steps = [
  {
    title: "Phase 1 : La Sécurité et la Préparation",
    description: (
      <>
        <p className="font-bold text-red-600">Cette phase est la plus importante. Aucune manipulation ne commence avant sa validation.</p>
        <ol>
          <li><strong>Briefing sur l'Électricité Statique (ESD) :</strong> Expliquer que le corps humain peut accumuler de l'électricité statique, invisible et indolore, mais fatale pour les composants électroniques.</li>
          <li><strong>Utilisation du Bracelet Antistatique :</strong> Montrer comment porter le bracelet (serré au poignet) et connecter la pince crocodile à une partie métallique non peinte du boîtier du PC.</li>
          <li><strong>Sécurité Électrique :</strong> S'assurer que TOUS les câbles d'alimentation sont débranchés du mur ET de la tour. Appuyer sur le bouton d'alimentation de la tour pendant 5 secondes (une fois débranchée) pour vider l'électricité résiduelle des condensateurs.</li>
        </ol>
      </>
    )
  },
  {
    title: "Phase 2 : Le Démontage méthodique",
    description: (
      <>
        <p><strong>La règle d'or :</strong> "On ne force jamais". Si quelque chose résiste, c'est qu'il y a une vis, un clip ou un levier que vous n'avez pas vu.</p>
        <ol>
          <li><strong>Documentation Initiale :</strong> Prenez une photo de l'intérieur du PC avant de toucher à quoi que ce soit. Elle vous servira de guide pour le remontage.</li>
          <li><strong>Déconnexion des Câbles :</strong> Débranchez délicatement tous les connecteurs : l'alimentation de la carte mère (le gros connecteur 24 broches et le petit 4/8 broches près du CPU), l'alimentation des disques durs et de la carte graphique, les câbles de données (SATA), et les petits câbles du panneau avant (Power, Reset, LED). Prenez des photos de ces derniers avant de les débrancher, leur ordre est crucial.</li>
          <li><strong>Retrait des Composants "Faciles" :</strong>
            <ul>
                <li><strong>Carte Graphique (GPU) :</strong> Dévissez-la du boîtier, puis ouvrez le petit levier de sécurité sur le port PCI-Express de la carte mère avant de la retirer bien droit.</li>
                <li><strong>Barrettes de RAM :</strong> Écartez les deux clips en plastique de chaque côté de la barrette, elle se soulèvera toute seule.</li>
                <li><strong>Disques de Stockage (SSD/HDD) :</strong> Dévissez-les de leur baie et retirez-les.</li>
            </ul>
          </li>
          <li><strong>Organisation des Vis :</strong> Placez les vis de chaque composant dans un récipient séparé et étiqueté (ex: "Vis carte mère", "Vis disques durs").</li>
        </ol>
      </>
    )
  },
   {
    title: "Phase 3 : Le Remontage logique",
    description: (
      <>
        <p>On procède dans l'ordre inverse du démontage, en s'aidant des photos.</p>
        <ol>
            <li><strong>Installation de la Carte Mère (si démontée) :</strong> Assurez-vous que les entretoises en laiton dans le boîtier correspondent bien aux trous de la carte mère avant de la visser.</li>
            <li><strong>Installation des Composants :</strong>
                <ul>
                    <li><strong>Processeur et Ventirad :</strong> (Généralement, on ne les démonte pas dans ce TP, mais si c'est le cas, c'est la première chose à remonter).</li>
                    <li><strong>Barrettes de RAM :</strong> Alignez l'encoche de la barrette avec celle du port, puis appuyez fermement des deux côtés jusqu'à entendre un "clic".</li>
                    <li><strong>Carte Graphique :</strong> Insérez-la dans le port PCI-Express principal jusqu'au "clic" du levier de sécurité, puis revissez-la au boîtier.</li>
                    <li><strong>Disques de Stockage :</strong> Revissez-les dans leurs emplacements.</li>
                </ul>
            </li>
            <li><strong>Le Câblage ("Cable Management") :</strong> C'est l'étape la plus minutieuse. Rebranchez tous les câbles d'alimentation et de données. Utilisez vos photos pour les petits connecteurs du panneau avant (Power SW, Reset SW, etc.). Essayez de faire passer les câbles derrière la carte mère pour un flux d'air optimal.</li>
        </ol>
      </>
    )
  },
   {
    title: "Phase 4 : Le Test Final",
    description: (
      <>
        <p>Avant de refermer le boîtier, effectuez un premier test.</p>
        <ol>
            <li><strong>Double Vérification :</strong> Assurez-vous qu'aucun câble ne touche un ventilateur et qu'aucun outil ou vis n'a été oublié dans la tour.</li>
            <li><strong>Connexion minimale :</strong> Branchez uniquement le câble d'alimentation, un écran et un clavier.</li>
            <li><strong>Le Démarrage :</strong> Allumez l'ordinateur. Si tout va bien, les ventilateurs tournent et un message devrait apparaître à l'écran, vous invitant souvent à entrer dans le BIOS (avec une touche comme F2 ou Suppr). C'est le signe que le POST (Power-On Self Test) a réussi.</li>
            <li><strong>Validation :</strong> Entrez dans le BIOS et vérifiez si le processeur, la RAM et les disques durs sont bien reconnus. Si c'est le cas, votre mission est accomplie !</li>
        </ol>
      </>
    )
  },
];

export const module1Content = {
  course: (
    <>
      <h3>a. Les bases de l'informatique (historique)</h3>
      <p>L'informatique n'est pas née avec les smartphones. C'est une longue histoire d'idées et d'inventions.</p>
      <HistoryTimeline/>
      <div className='p-10 pt-20'>
          <h2 className="text-3xl font-bold text-center text-gray-900 my-6">
          Une Brève Histoire des langages informatique
          </h2>
          <img src={InfoLangage} alt={"Historique des langages informatique"} className=" w-[50%] h-full m-auto" />
      </div>
      <h3>b. Comment marche un PC théoriquement ?</h3>
      <p>Presque tous les ordinateurs modernes fonctionnent sur un principe simple appelé <strong>l'architecture de Von Neumann</strong>. Elle repose sur quatre éléments principaux qui travaillent ensemble.</p>
      <VonNeumannDiagramComponent />
      <p className="mt-4">Le processus est simple : quand vous lancez un programme, le CPU va chercher ses instructions sur le disque de stockage, les charge dans la RAM pour y accéder rapidement, et exécute les calculs. Le résultat est ensuite affiché sur un périphérique de sortie, comme l'écran.</p>
      <h3>c. Les composants d'un ordinateur et leurs rôles</h3>
      <ComponentShowcase/>
       <h3>d. Différence hardware, firmware et software</h3>
       <div className="not-prose grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white border rounded-lg shadow-sm"><strong>Hardware (Matériel):</strong> Tout ce qui est physique et tangible. Le CPU, l'écran, la souris... C'est la machine elle-même.</div>
          <div className="p-4 bg-white border rounded-lg shadow-sm"><strong>Software (Logiciel):</strong> L'ensemble des programmes et instructions qui disent au hardware quoi faire. C'est immatériel. Ex: Windows, un jeu, un navigateur.</div>
          <div className="p-4 bg-white border rounded-lg shadow-sm"><strong>Firmware (Micrologiciel):</strong> Un logiciel spécial, "gravé" dans un composant matériel pour le faire fonctionner à un bas niveau. Le BIOS de la carte mère est l'exemple parfait.</div>
       </div>
    </>
  ),
  tp: (
        <PracticalWork 
      title={tpModule1Title}
      objective={tpModule1Objective}
      materials={tpModule1Materials}
      steps={tpModule1Steps}
    />
  ),

  quiz: <Quiz/>
};
