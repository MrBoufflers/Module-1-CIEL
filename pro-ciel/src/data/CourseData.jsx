
import { module1Content } from './modules/module1content.jsx';
import { module2Content } from './modules/module2content.jsx';
import { module3Content } from './modules/module3content.jsx';
// import { module4Content } from './modules/module4content.jsx';
// import { module5Content } from './modules/module5content.jsx';
import { moduleBonusJV } from './modules/moduleBonusJV.jsx';
import { moduleGitContent } from './modules/moduleGitContent.jsx';
import { module6content } from './modules/module6content.jsx'
import { module6TContent} from './modules/module6Tcontent.jsx'
import { moduleCSScontent} from './modules/moduleCSScontent.jsx'
import { moduleJSTcontent } from './modules/moduleJSTcontent';
import {moduleIAcontent} from './modules/moduleIAcontent';
import {moduleOrientation} from './modules/moduleOrientation.jsx'
import {moduleJS_DOM} from './modules/moduleJSDOM.jsx'
import {moduleJS_DOM_Terminale} from './modules/moduleJSDOMT.jsx'
import {CSSSelectorsCourse} from './modules/moduleCSSavance.jsx'
import { moduleSite } from './modules/moduleSite.jsx';
import { modulePythonCours1 } from './modules/modulePythonCours1.jsx';
import { modulePythonCours2 } from './modules/modulePythonCours2.jsx';
import { moduleControleG1 } from './modules/moduleControleG1.jsx';
import { moduleControleG2 } from './modules/moduleControleG2.jsx';
import { moduleBDDCours1 } from './modules/moduleBDDCours1.jsx';


export const courseData = {
  troncCommun: [
    {
    id: 'moduleOrientation',
    title: "Guide de l'orientation",
    icon: "🎓",
    ref: {
      competence: '',
      savoirs: '',
    },
    content: moduleOrientation,
  },
  {
    id: 'module1',
    title: "Intro Informatique",
    icon: "🎓",
    ref: {
      competence: 'C04 - Analyser une structure matérielle et logicielle.',
      savoirs: 'S3.1, S3.5, S4.11',
    },
    content: module1Content,
  },
  {
    id: 'module2',
    title: "Intro Windows",
    icon: "🖥️",
    ref: {
      competence: 'C09 - Installer les éléments d\'un système...',
      savoirs: 'S4.11, S4.12',
    },
    content: module2Content,
  },
  {
    id: 'module3',
    title: "Software & Web",
    icon: "🌐",
    ref: {
      competence: 'C04 & D1',
      savoirs: 'S3.1, S3.2, S5.1',
    },
     content: module3Content,
  },
      {
     id: 'moduleGit',
     title: "Git et Github",
     icon: "🔀",
     ref: {
       competence: 'C03, C01, C08.',
       savoirs: 'S2.10, S2.7, S1.2',
     },
     content: moduleGitContent,
   },
    // Placez ici les autres modules fondamentaux comme l'intro info, Windows, etc.
  ],
  premiere: [
       {
     id: 'module6',
     title: "Introduction HTML",
     icon: "🏗️",
     ref: {
       competence: 'C03, C01, C08.',
       savoirs: 'S1.2, S5.1, S2.10, S1.4',
     },
     content: module6content,
   },
    {
     id: 'moduleCSS',
     title: "Introduction CSS",
     icon: "🎨",
     ref: {
       competence: 'C03, C01, C08.',
       savoirs: 'S1.2, S5.1, S2.10, S1.4',
     },
     content: moduleCSScontent,
   },
  {
    id: 'moduleJST',
    title: "Javascript",
    icon: "🏗️",
    ref: {
      competence: 'C08, C03, C01',
      savoirs: 'S1.2, S5.1, S2.10, S1.4',
    },
    content: moduleJSTcontent,
  },
      {
    id: 'moduleJSOM',
    title: "Javascript & DOM",
    icon: "🏗️",
    ref: {
      competence: 'C08, C03, C01',
      savoirs: 'S1.2, S5.1, S2.10, S1.4',
    },
    content: moduleJS_DOM,
  },
  ,
      {
    id: 'moduleSite',
    title: "Examen Web",
    icon: "🌐",
    ref: {
      competence: 'C08, C03, C01',
      savoirs: 'S1.2, S5.1, S2.10, S1.4',
    },
    content: moduleSite,
  },
  {
    id: 'modulePythonCours1',
    title: "Python - Les Bases",
    icon: "🐍",
    ref: {
      competence: 'C08 - Coder',
      savoirs: 'S5.1, S5.5',
    },
    content: modulePythonCours1,
  },
  {
    id: 'moduleBDDCours1',
    title: "Conception BDD",
    icon: "🗃️",
    ref: {
      competence: 'C08 - Coder, C04 - Analyser',
      savoirs: 'S5.1, S3.1',
    },
    content: moduleBDDCours1,
  },
  // {
  //   id: 'modulePythonCours2',
  //   title: "Python - Avancé",
  //   icon: "🐍",
  //   ref: {
  //     competence: 'C08 - Coder',
  //     savoirs: 'S5.1, S5.5',
  //   },
  //   content: modulePythonCours2,
  // },
  // {
  //   id: 'moduleControleG1',
  //   title: "Contrôle G1 - NetWatch",
  //   icon: "📝",
  //   ref: {
  //     competence: 'C08 - Coder',
  //     savoirs: 'S5.1, S5.5',
  //   },
  //   content: moduleControleG1,
  // },
  // {
  //   id: 'moduleControleG2',
  //   title: "Contrôle G2 - CyberGuard",
  //   icon: "📝",
  //   ref: {
  //     competence: 'C08 - Coder',
  //     savoirs: 'S5.1, S5.5',
  //   },
  //   content: moduleControleG2,
  // },
    // Ajoutez ici les futurs modules de Première...
  ],
  terminale: [
      {
    id: 'moduleBonus1',
    title: "Jeux Video",
    icon: "🎮",
    ref: {
      competence: 'C08 - Coder, C04 - Analyser une structure matérielle et logicielle',
      savoirs: 'S5.5, S5.1, S3.1, S3.6',
    },
    content: moduleBonusJV,
  },
     {
    id: 'module6T',
    title: "HTML & CSS",
    icon: "🏗️",
    ref: {
      competence: 'C08, C03, C01',
      savoirs: 'S1.2, S5.1, S2.10, S1.4',
    },
    content: module6TContent,
  },
  {
    id: 'moduleJST',
    title: "Javascript",
    icon: "🏗️",
    ref: {
      competence: 'C08, C03, C01',
      savoirs: 'S1.2, S5.1, S2.10, S1.4',
    },
    content: moduleJSTcontent,
  },
  {
    id: 'moduleJSDOMT',
    title: "Javascript & DOM",
    icon: "🏗️",
    ref: {
      competence: 'C08, C03, C01',
      savoirs: 'S1.2, S5.1, S2.10, S1.4',
    },
    content: moduleJS_DOM_Terminale,
  }, 
  {
    id: 'moduleCSSavance',
    title: "CSS Avancé",
    icon: "🏗️",
    ref: {
      competence: 'C08, C03, C01',
      savoirs: 'S1.2, S5.1, S2.10, S1.4',
    },
    content: CSSSelectorsCourse,
  },

        {
    id: 'moduleBonusIA',
    title: "L'IA",
    icon: "🎮",
    ref: {
      competence: 'C08 - Coder, C04 - Analyser une structure matérielle et logicielle',
      savoirs: 'S5.5, S5.1, S3.1, S3.6',
    },
    content: moduleIAcontent,
  },
  {
    id: 'modulePythonCours1',
    title: "Python - Les Bases",
    icon: "🐍",
    ref: {
      competence: 'C08 - Coder',
      savoirs: 'S5.1, S5.5',
    },
    content: modulePythonCours1,
  },
  // {
  //   id: 'moduleBDDCours1T',
  //   title: "Conception BDD",
  //   icon: "🗃️",
  //   ref: {
  //     competence: 'C08 - Coder, C04 - Analyser',
  //     savoirs: 'S5.1, S3.1',
  //   },
  //   content: moduleBDDCours1,
  // },
     // Ajoutez ici les futurs modules de Terminale...
  ],
  
};
// export const courseData = [
//   {
//     id: 'module1',
//     title: "Intro Informatique",
//     icon: "🎓",
//     ref: {
//       competence: 'C04 - Analyser une structure matérielle et logicielle.',
//       savoirs: 'S3.1, S3.5, S4.11',
//     },
//     content: module1Content,
//   },
//   {
//     id: 'module2',
//     title: "Intro Windows",
//     icon: "🖥️",
//     ref: {
//       competence: 'C09 - Installer les éléments d\'un système...',
//       savoirs: 'S4.11, S4.12',
//     },
//     content: module2Content,
//   },
//   {
//     id: 'module3',
//     title: "Software & Web",
//     icon: "🌐",
//     ref: {
//       competence: 'C04 & D1',
//       savoirs: 'S3.1, S3.2, S5.1',
//     },
//      content: module3Content,
//   },
//   // {
//   //   id: 'module4',
//   //   title: "Intro Codage",
//   //   icon: "💻",
//   //   ref: {
//   //     competence: 'C08 - Coder',
//   //     savoirs: 'S5.1, S5.5',
//   //   },
//   //   content: module4Content,

//   // },
//   // {
//   //   id: 'module5',
//   //   title: "Bases de Données",
//   //   icon: "🗃️",
//   //   ref: {
//   //     competence: 'C04 - Analyser...',
//   //     savoirs: 'S3.1',
//   //   },
//   //   content: module5Content,
//   // },
//     {
//     id: 'moduleBonus1',
//     title: "Jeux Video",
//     icon: "🎮",
//     ref: {
//       competence: 'C08 - Coder, C04 - Analyser une structure matérielle et logicielle',
//       savoirs: 'S5.5, S5.1, S3.1, S3.6',
//     },
//     content: moduleBonusJV,
//   },

//        {
//      id: 'module6',
//      title: "Introduction HTML",
//      icon: "🔀",
//      ref: {
//        competence: 'C03, C01, C08.',
//        savoirs: 'S2.10, S2.7, S1.2',
//      },
//      content: module6content,
//    },
// ];
