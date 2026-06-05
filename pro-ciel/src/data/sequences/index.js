import { s1Ordinateur } from './premiere/s1-ordinateur.js';
import { s2Logiciels } from './premiere/s2-logiciels.js';
import { s3Git } from './premiere/s3-git.js';
import { s4Html } from './premiere/s4-html.js';
import { s5Css } from './premiere/s5-css.js';
import { resWord } from './ressources/res-word.js';
import { resExcel } from './ressources/res-excel.js';
import { resPowerpoint } from './ressources/res-powerpoint.js';

const sequences = [
  s1Ordinateur,
  s2Logiciels,
  s3Git,
  s4Html,
  s5Css,
  resWord,
  resExcel,
  resPowerpoint,
];

export default sequences;

export function getSequencesByNiveau(niveau) {
  return sequences.filter(s => s.meta.niveau === niveau);
}

export function getSequence(niveau, seqId) {
  return sequences.find(s => s.meta.niveau === niveau && s.meta.id === seqId);
}
