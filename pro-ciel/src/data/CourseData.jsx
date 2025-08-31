
import { module1Content } from './modules/module1content.jsx';
import { module2Content } from './modules/module2content.jsx';
import { module3Content } from './modules/module3content.jsx';
import { module4Content } from './modules/module4content.jsx';
import { module5Content } from './modules/module5content.jsx';

export const courseData = [
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
    id: 'module4',
    title: "Intro Codage",
    icon: "💻",
    ref: {
      competence: 'C08 - Coder',
      savoirs: 'S5.1, S5.5',
    },
    content: module4Content,

  },
  {
    id: 'module5',
    title: "Bases de Données",
    icon: "🗃️",
    ref: {
      competence: 'C04 - Analyser...',
      savoirs: 'S3.1',
    },
    content: module5Content,
  },
];