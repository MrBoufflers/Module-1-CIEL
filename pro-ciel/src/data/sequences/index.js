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
import { ts2NodejsBdd } from './terminale/t-s2-nodejs-bdd.js';
import { ts3React } from './terminale/t-s3-react.js';
import { ts4Docker } from './terminale/t-s4-docker.js';
import { ts5Production } from './terminale/t-s5-production.js';
import { ts6Maintenance } from './terminale/t-s6-maintenance.js';
import { ts7Ia } from './terminale/t-s7-ia.js';
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
  ts2NodejsBdd,
  ts3React,
  ts4Docker,
  ts5Production,
  ts6Maintenance,
  ts7Ia,
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
