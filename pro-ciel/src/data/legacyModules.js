import { courseData } from './CourseData.jsx';

const allLegacy = [];

const levelLabels = {
  troncCommun: 'Tronc Commun',
  premiere: 'Première',
  terminale: 'Terminale',
};

for (const [levelKey, modules] of Object.entries(courseData)) {
  for (const mod of modules) {
    allLegacy.push({ ...mod, level: levelKey, levelLabel: levelLabels[levelKey] || levelKey });
  }
}

export default allLegacy;

export function getLegacyModule(id) {
  return allLegacy.find(m => m.id === id);
}
