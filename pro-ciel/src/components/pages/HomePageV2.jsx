import { Link } from 'react-router-dom';
import { getSequencesByNiveau } from '../../data/sequences/index';

const levels = [
  { id: 'premiere', num: 'Niveau 2', title: 'Première', desc: 'Du matériel au logiciel, puis du versioning au développement web.', path: '/premiere' },
  { id: 'terminale', num: 'Niveau 3', title: 'Terminale', desc: 'Déploiement, cybersécurité appliquée et projet chef-d’œuvre.', path: '/terminale', soon: true },
  { id: 'ressources', num: 'Ressources', title: 'Ressources', desc: 'Cours bonus et ressources complémentaires.', path: '/ressources' },
];

export default function HomePageV2() {
  return (
    <div className="home reveal">
      <div className="home-logo">PC</div>
      <h1>Apprendre le numérique,<br /><span className="grad">étape par étape.</span></h1>
      <p className="sub">Le parcours CIEL en fil rouge : du matériel au déploiement web, une séquence à la fois.</p>
      <div className="levels">
        {levels.map((level) => {
          const seqs = level.id !== 'ressources' ? getSequencesByNiveau(level.id) : [];
          const count = level.id === 'ressources' ? 'Voir tout' : `${seqs.length} séquence${seqs.length > 1 ? 's' : ''}`;
          return (
            <Link
              key={level.id}
              to={level.path}
              className={`level-card${level.soon ? ' soon' : ' active'}`}
            >
              <div className="lc-num">{level.num}</div>
              <div className="lc-title">{level.title}</div>
              <div className="lc-desc">{level.desc}</div>
              <div className="lc-foot">
                <span className="lc-count">{level.soon ? 'Bientôt disponible' : count}</span>
                {!level.soon && (
                  <span className="lc-arrow"><span className="arrow-r" /></span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
