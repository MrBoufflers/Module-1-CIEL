import { s1Ordinateur } from './premiere/s1-ordinateur.js';
import { s2Logiciels } from './premiere/s2-logiciels.js';
import { s4Html } from './premiere/s4-html.js';

const sequences = [
  s1Ordinateur,
  s2Logiciels,
  s4Html,
];

export default sequences;

export function getSequencesByNiveau(niveau) {
  return sequences.filter(s => s.meta.niveau === niveau);
}

export function getSequence(niveau, seqId) {
  return sequences.find(s => s.meta.niveau === niveau && s.meta.id === seqId);
}
