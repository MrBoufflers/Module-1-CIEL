import { s1Ordinateur } from './premiere/s1-ordinateur.js';
import { s2Logiciels } from './premiere/s2-logiciels.js';
import { s3Git } from './premiere/s3-git.js';
import { s4Html } from './premiere/s4-html.js';
import { s5Css } from './premiere/s5-css.js';
import { s6JsBase } from './premiere/s6-js-base.js';
import { s7JsDom } from './premiere/s7-js-dom.js';
import { s8Python1 } from './premiere/s8-python1.js';
import { s9Python2 } from './premiere/s9-python2.js';
import { s10Cyber } from './premiere/s10-cyber.js';
import { ts1Reprise } from './terminale/t-s1-reprise.js';
import { ts2Nodejs } from './terminale/t-s2-nodejs.js';
import { ts3Bdd } from './terminale/t-s3-bdd.js';
import { ts4React } from './terminale/t-s4-react.js';
import { ts5Docker } from './terminale/t-s5-docker.js';
import { ts6Production } from './terminale/t-s6-production.js';
import { ts7Maintenance } from './terminale/t-s7-maintenance.js';
import { ts8Ia } from './terminale/t-s8-ia.js';
import { resWord } from './ressources/res-word.js';
import { resExcel } from './ressources/res-excel.js';
import { resPowerpoint } from './ressources/res-powerpoint.js';

const sequences = [
  s1Ordinateur,
  s2Logiciels,
  s3Git,
  s4Html,
  s5Css,
  s6JsBase,
  s7JsDom,
  s8Python1,
  s9Python2,
  s10Cyber,
  ts1Reprise,
  ts2Nodejs,
  ts3Bdd,
  ts4React,
  ts5Docker,
  ts6Production,
  ts7Maintenance,
  ts8Ia,
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
