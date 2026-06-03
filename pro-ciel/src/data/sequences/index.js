// Sequence index — aggregates all sequences and orders them by level.
// For now this is a placeholder; Step 4 will populate it with S1 and S4.
// Each entry: { meta, course, tp } imported from its file.

const sequences = [];

export default sequences;

export function getSequencesByNiveau(niveau) {
  return sequences.filter(s => s.meta.niveau === niveau);
}

export function getSequence(niveau, seqId) {
  return sequences.find(s => s.meta.niveau === niveau && s.meta.id === seqId);
}
