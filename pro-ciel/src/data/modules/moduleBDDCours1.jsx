import React from 'react';
import PracticalWork from '../../components/organisms/PraticalWork';

const tpTitle = 'TP : Architecte de Donn\u00e9es \u2014 Mission R\u00e9seau';
const tpObjective = 'Concevoir un sch\u00e9ma de base de donn\u00e9es complet \u00e0 partir d\u2019un besoin r\u00e9el : identifier les entit\u00e9s, d\u00e9finir les attributs, \u00e9tablir les relations et v\u00e9rifier la qualit\u00e9 du sch\u00e9ma.';
const tpMaterials = [
    'Un cahier ou un \u00e9diteur de texte pour dessiner les sch\u00e9mas.',
    'Le cours sur la conception de base de donn\u00e9es (onglet Cours).',
    'Un crayon et une gomme (si travail sur papier).',
];

const tpSteps = [
    {
        title: "Contexte professionnel",
        description: (
            <>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p>Vous \u00eates <strong>technicien(ne) r\u00e9seau</strong> dans une entreprise de services informatiques appel\u00e9e <strong>\u00ab NetSecure \u00bb</strong>. Votre responsable vous confie la mission suivante :</p>
                    <blockquote className="mt-3 pl-4 border-l-4 border-blue-400 italic text-gray-700">
                        \u00ab On doit cr\u00e9er une application interne pour g\u00e9rer notre parc informatique. On a besoin de suivre nos <strong>clients</strong> (les entreprises pour qui on travaille), les <strong>\u00e9quipements r\u00e9seau</strong> qu\u2019on installe chez eux (routeurs, switchs, bornes WiFi, serveurs...), et les <strong>tickets d\u2019intervention</strong> quand un client signale un probl\u00e8me. Il faut aussi pouvoir savoir quel <strong>technicien</strong> a trait\u00e9 chaque ticket. \u00bb
                    </blockquote>
                </div>
            </>
        )
    },
    {
        title: "Mission 1 \u2014 Identifier les entit\u00e9s (15 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> \u00c0 partir du texte ci-dessus, identifiez toutes les entit\u00e9s n\u00e9cessaires. Pour chaque entit\u00e9, listez au moins <strong>4 attributs pertinents</strong> avec leurs types de donn\u00e9es.</p>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mt-3">
                    <p><strong>Indice :</strong> Il y a au minimum <strong>4 entit\u00e9s</strong>. Attention, les techniciens sont aussi une entit\u00e9 !</p>
                </div>
                <div className="mt-4 p-4 bg-gray-50 border rounded-lg">
                    <p className="font-semibold mb-2">Aide si besoin :</p>
                    <p>Les 4 entit\u00e9s principales sont : <code>clients</code> (les entreprises), <code>equipements</code>, <code>tickets</code>, <code>techniciens</code>.</p>
                </div>
                <div className="mt-4">
                    <p><strong>Pour chaque entit\u00e9, pr\u00e9cisez :</strong></p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Le nom de la table (au pluriel, en minuscules)</li>
                        <li>Les attributs avec leurs types (INT, VARCHAR, TEXT, DATE...)</li>
                        <li>La cl\u00e9 primaire</li>
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "Mission 2 \u2014 Identifier les relations (15 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Pour chaque paire d\u2019entit\u00e9s li\u00e9es, pr\u00e9cisez :</p>
                <ol className="list-decimal ml-6 space-y-1">
                    <li>Le type de relation (1-1, 1-N, ou N-N)</li>
                    <li>De quel c\u00f4t\u00e9 va la cl\u00e9 \u00e9trang\u00e8re</li>
                    <li>Justifiez votre choix en une phrase</li>
                </ol>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="font-semibold mb-2">Questions guid\u00e9es :</p>
                    <ol className="list-decimal ml-6 space-y-2">
                        <li>Un client peut-il avoir plusieurs \u00e9quipements ? Un \u00e9quipement appartient-il \u00e0 un seul client ?</li>
                        <li>Un client peut-il ouvrir plusieurs tickets ? Un ticket concerne-t-il un seul client ?</li>
                        <li>Un ticket peut-il \u00eatre trait\u00e9 par plusieurs techniciens ? Un technicien peut-il traiter plusieurs tickets ?</li>
                        <li>Un ticket concerne-t-il un \u00e9quipement pr\u00e9cis ?</li>
                    </ol>
                </div>
            </>
        )
    },
    {
        title: "Mission 3 \u2014 Dessiner le sch\u00e9ma complet (30 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Dessinez le sch\u00e9ma relationnel complet avec :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Toutes les tables avec leurs champs et types</li>
                    <li>Les cl\u00e9s primaires identifi\u00e9es (PK)</li>
                    <li>Les cl\u00e9s \u00e9trang\u00e8res identifi\u00e9es (FK) avec la table de r\u00e9f\u00e9rence</li>
                    <li>Les tables de liaison si n\u00e9cessaire</li>
                    <li>Les traits de relation avec la cardinalit\u00e9 (1-N, N-N)</li>
                </ul>

                <div className="mt-4 p-4 bg-gray-50 border rounded-lg">
                    <p className="font-semibold mb-2">Utilisez le format vu en cours :</p>
                    <pre className="code-block"><code>{`nom_table (PK id, champ1, champ2, ..., FK ref_id -> autre_table.id)`}</code></pre>
                </div>
                <p className="mt-3">Vous pouvez le faire sur papier ou dans un \u00e9diteur de texte.</p>
            </>
        )
    },
    {
        title: "Mission 4 \u2014 V\u00e9rification qualit\u00e9 (15 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Relisez votre sch\u00e9ma et v\u00e9rifiez les <strong>4 r\u00e8gles de bonne conception</strong> :</p>
                <ol className="list-decimal ml-6 space-y-2">
                    <li><strong>Pas de redondance</strong> de donn\u00e9es ?</li>
                    <li>Chaque champ est <strong>atomique</strong> ?</li>
                    <li>Les noms respectent les <strong>conventions</strong> ? (minuscules, underscores, pluriel pour les tables)</li>
                    <li>Chaque table a une <strong>cl\u00e9 primaire</strong> ?</li>
                </ol>
                <p className="mt-3">Corrigez votre sch\u00e9ma si n\u00e9cessaire. <strong>Notez les corrections que vous avez faites.</strong></p>
            </>
        )
    },
    {
        title: "Mission Bonus \u2014 \u00c9volution du besoin (pour les plus rapides)",
        description: (
            <>
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <p>Le responsable revient vous voir :</p>
                    <blockquote className="mt-2 pl-4 border-l-4 border-orange-400 italic text-gray-700">
                        \u00ab En fait, un ticket peut concerner <strong>plusieurs \u00e9quipements</strong> en m\u00eame temps (par exemple, une panne r\u00e9seau qui affecte le routeur ET le switch). Et j\u2019aimerais aussi qu\u2019on puisse stocker les <strong>pi\u00e8ces de rechange</strong> utilis\u00e9es lors de chaque intervention. \u00bb
                    </blockquote>
                </div>
                <div className="mt-4">
                    <p><strong>Consigne :</strong> Modifiez votre sch\u00e9ma pour int\u00e9grer ces deux \u00e9volutions :</p>
                    <ol className="list-decimal ml-6 space-y-2">
                        <li>La relation ticket-\u00e9quipement devient <strong>N-N</strong> \u2192 Quelle table de liaison devez-vous cr\u00e9er ?</li>
                        <li>Il faut une nouvelle entit\u00e9 <strong>\u00ab pi\u00e8ces \u00bb</strong> et une relation avec les tickets/interventions.</li>
                    </ol>
                </div>
            </>
        )
    },
];

export const moduleBDDCours1 = {
    course: (
        <>
            {/* Introduction */}
            <h3>Introduction \u2014 Pourquoi concevoir avant de coder ?</h3>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
                <p className="italic">Imaginez qu\u2019on vous demande de construire une maison. Est-ce que vous commencez directement \u00e0 poser des briques, ou est-ce que vous dessinez d\u2019abord un plan ? En base de donn\u00e9es, c\u2019est exactement pareil : le sch\u00e9ma, c\u2019est le plan de votre BDD. Sans lui, vous allez droit dans le mur.</p>
            </div>
            <p>Vous avez d\u00e9couvert dans la fiche enqu\u00eate les probl\u00e8mes pos\u00e9s par les fichiers Excel : doublons, incoh\u00e9rences, pas d\u2019acc\u00e8s simultan\u00e9. Vous avez aussi appris le vocabulaire de base : <strong>table</strong>, <strong>champ</strong>, <strong>enregistrement</strong>, <strong>cl\u00e9 primaire</strong>, <strong>cl\u00e9 \u00e9trang\u00e8re</strong>. Aujourd\u2019hui, on passe \u00e0 la pratique : comment <strong>concevoir un sch\u00e9ma de BDD</strong> propre et fonctionnel.</p>

            <div className="mt-4 p-4 bg-gray-50 border rounded-lg not-prose">
                <h4 className="font-semibold mb-2">Objectifs du cours :</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Savoir identifier les entit\u00e9s et leurs attributs \u00e0 partir d\u2019un besoin r\u00e9el</li>
                    <li>Comprendre et appliquer les r\u00e8gles des cl\u00e9s primaires et \u00e9trang\u00e8res</li>
                    <li>Savoir repr\u00e9senter les relations entre tables (1-1, 1-N, N-N)</li>
                    <li>Dessiner un sch\u00e9ma de base de donn\u00e9es complet et coh\u00e9rent</li>
                </ul>
            </div>

            {/* Partie 1 */}
            <h3 className="mt-8">Partie 1 \u2014 Les entit\u00e9s et les attributs</h3>
            <p>Une <strong>entit\u00e9</strong>, c\u2019est un \u00ab objet \u00bb du monde r\u00e9el que l\u2019on veut stocker dans notre BDD. Chaque entit\u00e9 devient une <strong>table</strong>. Les caract\u00e9ristiques de cette entit\u00e9 deviennent les <strong>champs</strong> (colonnes) de la table.</p>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg mt-3 not-prose">
                <h4 className="font-semibold mb-2">M\u00e9thode pour identifier les entit\u00e9s :</h4>
                <p className="text-sm">Prenez la description d\u2019un besoin et <strong>soulignez tous les noms communs importants</strong>. Ce sont vos candidats pour devenir des entit\u00e9s.</p>
            </div>

            <h4 className="mt-6 font-semibold">Exemple fil rouge \u2014 Le cas \u00ab CyberShop \u00bb</h4>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mt-2">
                <p className="italic">\u00ab CyberShop est une boutique en ligne qui vend du mat\u00e9riel informatique. L\u2019entreprise a besoin de g\u00e9rer ses <strong>clients</strong>, les <strong>produits</strong> qu\u2019elle vend, et les <strong>commandes</strong> pass\u00e9es par les clients. Chaque client a un nom, un pr\u00e9nom, un email et une adresse. Chaque produit a un nom, une description, un prix et une quantit\u00e9 en stock. Chaque commande est pass\u00e9e par un client, contient un ou plusieurs produits, et a une date. \u00bb</p>
            </div>

            <p className="mt-3"><strong>Identification des entit\u00e9s :</strong></p>
            <ul className="list-disc list-inside ml-4">
                <li>Client \u2192 table <code>clients</code></li>
                <li>Produit \u2192 table <code>produits</code></li>
                <li>Commande \u2192 table <code>commandes</code></li>
            </ul>

            <h4 className="mt-6 font-semibold">Les attributs et les types de donn\u00e9es</h4>
            <p>Pour chaque entit\u00e9, on liste ses attributs et on choisit le type de donn\u00e9e appropri\u00e9 :</p>

            <div className="space-y-4 mt-3 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Table \u00ab clients \u00bb</h4>
                    <pre className="code-block mt-2"><code>{`id              : INT           -- identifiant unique
nom             : VARCHAR(100)  -- texte de longueur variable (max 100 caract\u00e8res)
prenom          : VARCHAR(100)  -- texte
email           : VARCHAR(255)  -- texte
adresse         : TEXT          -- texte long
date_inscription: DATE          -- date`}</code></pre>
                </div>
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Table \u00ab produits \u00bb</h4>
                    <pre className="code-block mt-2"><code>{`id          : INT            -- identifiant unique
nom         : VARCHAR(200)   -- texte
description : TEXT           -- texte long
prix        : DECIMAL(10,2)  -- nombre d\u00e9cimal (10 chiffres max, 2 apr\u00e8s la virgule)
stock       : INT            -- entier`}</code></pre>
                </div>
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Table \u00ab commandes \u00bb</h4>
                    <pre className="code-block mt-2"><code>{`id             : INT          -- identifiant unique
date_commande  : DATE         -- date
statut         : VARCHAR(50)  -- texte (en attente, exp\u00e9di\u00e9e, livr\u00e9e...)`}</code></pre>
                </div>
            </div>

            <h4 className="mt-6 font-semibold">M\u00e9mo des types de donn\u00e9es courants</h4>
            <div className="overflow-x-auto mt-2 not-prose">
                <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Usage</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Exemple</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>INT</code></td><td className="border border-gray-300 px-4 py-2">Nombres entiers</td><td className="border border-gray-300 px-4 py-2">\u00e2ge, quantit\u00e9, identifiant</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>VARCHAR(n)</code></td><td className="border border-gray-300 px-4 py-2">Texte court (max n caract\u00e8res)</td><td className="border border-gray-300 px-4 py-2">nom, email, ville</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>TEXT</code></td><td className="border border-gray-300 px-4 py-2">Texte long</td><td className="border border-gray-300 px-4 py-2">description, commentaire</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>DATE</code></td><td className="border border-gray-300 px-4 py-2">Date (AAAA-MM-JJ)</td><td className="border border-gray-300 px-4 py-2">date de naissance</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>DATETIME</code></td><td className="border border-gray-300 px-4 py-2">Date et heure</td><td className="border border-gray-300 px-4 py-2">horodatage de connexion</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>DECIMAL(p,s)</code></td><td className="border border-gray-300 px-4 py-2">Nombre d\u00e9cimal pr\u00e9cis</td><td className="border border-gray-300 px-4 py-2">prix (10,2 \u2192 99999999.99)</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>BOOLEAN</code></td><td className="border border-gray-300 px-4 py-2">Vrai ou Faux</td><td className="border border-gray-300 px-4 py-2">actif, v\u00e9rifi\u00e9</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Exercice 1 \u2014 \u00c0 faire ensemble</h4>
                <p className="italic">\u00ab Un lyc\u00e9e veut g\u00e9rer ses salles informatiques. Il a besoin de suivre les <strong>salles</strong> (num\u00e9ro, b\u00e2timent, nombre de postes), les <strong>ordinateurs</strong> dans chaque salle (num\u00e9ro de s\u00e9rie, marque, mod\u00e8le, \u00e9tat), et les <strong>interventions</strong> de maintenance (date, description du probl\u00e8me, technicien). \u00bb</p>
                <p className="mt-2"><strong>Consigne :</strong> Identifiez les 3 entit\u00e9s et listez leurs attributs avec les types de donn\u00e9es.</p>
            </div>

            <div className="mt-3 space-y-3 not-prose">
                <details className="p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Correction exercice 1</summary>
                    <div className="mt-3 space-y-3">
                        <div>
                            <p className="font-semibold">Table \u00ab salles \u00bb :</p>
                            <pre className="code-block mt-1"><code>{`id        : INT
numero    : VARCHAR(10)
batiment  : VARCHAR(50)
nb_postes : INT`}</code></pre>
                        </div>
                        <div>
                            <p className="font-semibold">Table \u00ab ordinateurs \u00bb :</p>
                            <pre className="code-block mt-1"><code>{`id           : INT
numero_serie : VARCHAR(100)
marque       : VARCHAR(50)
modele       : VARCHAR(100)
etat         : VARCHAR(30)  -- fonctionnel, en panne, en maintenance`}</code></pre>
                        </div>
                        <div>
                            <p className="font-semibold">Table \u00ab interventions \u00bb :</p>
                            <pre className="code-block mt-1"><code>{`id                : INT
date_intervention : DATE
description       : TEXT
technicien        : VARCHAR(100)`}</code></pre>
                        </div>
                    </div>
                </details>
            </div>

            {/* Partie 2 */}
            <h3 className="mt-8">Partie 2 \u2014 La cl\u00e9 primaire</h3>
            <p>La <strong>cl\u00e9 primaire</strong> (PRIMARY KEY) est le champ qui identifie de mani\u00e8re <strong>unique</strong> chaque enregistrement dans une table. Deux r\u00e8gles absolues :</p>
            <ol className="list-decimal ml-6 mt-2">
                <li>Elle doit \u00eatre <strong>unique</strong> (pas deux lignes avec la m\u00eame valeur)</li>
                <li>Elle ne peut <strong>jamais \u00eatre vide</strong> (NOT NULL)</li>
            </ol>

            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg not-prose">
                <h4 className="font-semibold mb-2">Bonne pratique :</h4>
                <p className="text-sm">Utilisez toujours un champ <code>id</code> de type <strong>INT avec auto-incr\u00e9mentation</strong>. Ne prenez jamais un email, un num\u00e9ro de t\u00e9l\u00e9phone ou un nom comme cl\u00e9 primaire, m\u00eame s\u2019ils semblent uniques. Pourquoi ? Parce qu\u2019un client peut changer d\u2019email, deux personnes peuvent avoir le m\u00eame nom, et un num\u00e9ro de t\u00e9l\u00e9phone peut \u00eatre r\u00e9attribu\u00e9.</p>
            </div>

            <p className="mt-4"><strong>Notation dans un sch\u00e9ma :</strong></p>
            <p>La cl\u00e9 primaire se note avec le symbole <strong>PK</strong> (Primary Key) ou en soulignant le nom du champ.</p>
            <pre className="code-block mt-2"><code>{`clients (PK id, nom, prenom, email, adresse, date_inscription)`}</code></pre>

            <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Question flash :</h4>
                <p>\u00ab Dans une table <code>eleves</code>, pourquoi est-ce une mauvaise id\u00e9e d\u2019utiliser le nom de l\u2019\u00e9l\u00e8ve comme cl\u00e9 primaire ? \u00bb</p>
                <details className="mt-2">
                    <summary className="cursor-pointer text-blue-600 font-semibold">Voir la r\u00e9ponse</summary>
                    <p className="mt-1">Deux \u00e9l\u00e8ves peuvent avoir le m\u00eame nom. De plus, un nom peut contenir des erreurs ou \u00eatre modifi\u00e9 (mariage, correction).</p>
                </details>
            </div>

            {/* Partie 3 */}
            <h3 className="mt-8">Partie 3 \u2014 Les cl\u00e9s \u00e9trang\u00e8res et les relations</h3>
            <p>La <strong>cl\u00e9 \u00e9trang\u00e8re</strong> (FOREIGN KEY) est le m\u00e9canisme qui <strong>relie deux tables</strong> entre elles. C\u2019est un champ dans une table qui fait r\u00e9f\u00e9rence \u00e0 la cl\u00e9 primaire d\u2019une autre table.</p>

            <h4 className="mt-6 font-semibold">Les 3 types de relations :</h4>

            <div className="space-y-4 mt-3 not-prose">
                <div className="p-4 bg-white border-l-4 border-purple-400 rounded-lg shadow-sm">
                    <h4 className="font-semibold">Relation 1-1 (Un \u00e0 Un) \u2014 Rare en pratique</h4>
                    <p className="text-sm mt-1">Un enregistrement dans la table A correspond \u00e0 <strong>exactement un</strong> enregistrement dans la table B, et inversement.</p>
                    <p className="text-sm mt-1"><strong>Exemple :</strong> Un employ\u00e9 a un seul badge d\u2019acc\u00e8s, et un badge appartient \u00e0 un seul employ\u00e9.</p>
                    <p className="text-sm mt-1"><strong>Usage :</strong> On s\u00e9pare les donn\u00e9es quand certaines infos sont sensibles ou rarement consult\u00e9es (ex : donn\u00e9es confidentielles dans une table \u00e0 part).</p>
                </div>

                <div className="p-4 bg-white border-l-4 border-blue-400 rounded-lg shadow-sm">
                    <h4 className="font-semibold">Relation 1-N (Un \u00e0 Plusieurs) \u2014 La plus courante</h4>
                    <p className="text-sm mt-1">Un enregistrement dans la table A peut \u00eatre li\u00e9 \u00e0 <strong>plusieurs</strong> enregistrements dans la table B, mais chaque enregistrement de B n\u2019est li\u00e9 qu\u2019\u00e0 <strong>un seul</strong> de A.</p>
                    <p className="text-sm mt-2"><strong>Exemple CyberShop :</strong> Un client peut passer plusieurs commandes, mais une commande appartient \u00e0 un seul client.</p>
                    <p className="text-sm mt-1">\u2192 On ajoute la cl\u00e9 \u00e9trang\u00e8re <code>client_id</code> dans la table <code>commandes</code>.</p>
                    <pre className="code-block mt-2"><code>{`clients    (PK id, nom, prenom, email, adresse, date_inscription)
commandes  (PK id, date_commande, statut, FK client_id -> clients.id)`}</code></pre>
                    <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
                        <strong>R\u00e8gle d\u2019or :</strong> la cl\u00e9 \u00e9trang\u00e8re va toujours du c\u00f4t\u00e9 \u00ab plusieurs \u00bb. Si un client a plusieurs commandes, c\u2019est dans <code>commandes</code> qu\u2019on met <code>client_id</code> (pas l\u2019inverse).
                    </div>
                </div>

                <div className="p-4 bg-white border-l-4 border-red-400 rounded-lg shadow-sm">
                    <h4 className="font-semibold">Relation N-N (Plusieurs \u00e0 Plusieurs) \u2014 N\u00e9cessite une table de liaison</h4>
                    <p className="text-sm mt-1">Un enregistrement dans la table A peut \u00eatre li\u00e9 \u00e0 <strong>plusieurs</strong> enregistrements de la table B, <strong>et inversement</strong>.</p>
                    <p className="text-sm mt-2"><strong>Exemple CyberShop :</strong> Une commande peut contenir plusieurs produits, et un produit peut appara\u00eetre dans plusieurs commandes.</p>
                    <p className="text-sm mt-1">\u2192 On ne peut pas r\u00e9soudre \u00e7a avec une simple cl\u00e9 \u00e9trang\u00e8re. Il faut cr\u00e9er une <strong>table interm\u00e9diaire</strong> (table de liaison, table de jonction, ou table associative).</p>
                    <pre className="code-block mt-2"><code>{`commande_produits (PK id, FK commande_id -> commandes.id,
                         FK produit_id  -> produits.id,
                         quantite       : INT,
                         prix_unitaire  : DECIMAL(10,2))`}</code></pre>
                    <p className="text-sm mt-2 text-gray-600">Le <code>prix_unitaire</code> est stock\u00e9 ici car le prix d\u2019un produit peut \u00e9voluer dans le temps. On garde le prix <strong>au moment de la commande</strong>.</p>
                </div>
            </div>

            <h4 className="mt-6 font-semibold">Sch\u00e9ma complet CyberShop :</h4>
            <pre className="code-block mt-2"><code>{`clients (PK id, nom, prenom, email, adresse, date_inscription)
    |
    | 1-N
    v
commandes (PK id, date_commande, statut, FK client_id)
    |
    | 1-N
    v
commande_produits (PK id, FK commande_id, FK produit_id, quantite, prix_unitaire)
    ^
    | N-1
    |
produits (PK id, nom, description, prix, stock)`}</code></pre>

            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Exercice 2 \u2014 \u00c0 faire ensemble</h4>
                <p>Reprenons le cas du lyc\u00e9e (exercice 1). Identifiez les relations :</p>
                <ol className="list-decimal ml-6 mt-2">
                    <li>Quel est le lien entre \u00ab salles \u00bb et \u00ab ordinateurs \u00bb ?</li>
                    <li>Quel est le lien entre \u00ab ordinateurs \u00bb et \u00ab interventions \u00bb ?</li>
                    <li>Ajoutez les cl\u00e9s \u00e9trang\u00e8res aux bonnes tables.</li>
                </ol>
            </div>

            <div className="mt-3 not-prose">
                <details className="p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Correction exercice 2</summary>
                    <div className="mt-3">
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>Une salle contient plusieurs ordinateurs \u2192 relation <strong>1-N</strong> \u2192 on ajoute <code>salle_id</code> dans la table <code>ordinateurs</code></li>
                            <li>Un ordinateur peut avoir plusieurs interventions \u2192 relation <strong>1-N</strong> \u2192 on ajoute <code>ordinateur_id</code> dans la table <code>interventions</code></li>
                        </ul>
                        <pre className="code-block mt-3"><code>{`salles (PK id, numero, batiment, nb_postes)
    |
    | 1-N
    v
ordinateurs (PK id, numero_serie, marque, modele, etat, FK salle_id)
    |
    | 1-N
    v
interventions (PK id, date_intervention, description, technicien, FK ordinateur_id)`}</code></pre>
                    </div>
                </details>
            </div>

            {/* Partie 4 */}
            <h3 className="mt-8">Partie 4 \u2014 Les r\u00e8gles d\u2019une bonne conception</h3>

            <div className="space-y-4 mt-3 not-prose">
                <div className="p-4 bg-white border-l-4 border-red-400 rounded-lg shadow-sm">
                    <h4 className="font-semibold">R\u00e8gle 1 : Pas de redondance</h4>
                    <p className="text-sm mt-1">Ne jamais stocker la m\u00eame information \u00e0 deux endroits. Si l\u2019adresse d\u2019un client est stock\u00e9e dans la table <code>clients</code> ET dans la table <code>commandes</code>, que se passe-t-il quand le client d\u00e9m\u00e9nage ? On doit modifier partout \u2192 risque d\u2019incoh\u00e9rence.</p>
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-3 bg-red-50 border border-red-200 rounded">
                            <p className="text-sm font-semibold text-red-700">Mauvais :</p>
                            <pre className="code-block mt-1 text-xs"><code>{`commandes (id, date, client_nom,
           client_email, client_adresse)`}</code></pre>
                        </div>
                        <div className="p-3 bg-green-50 border border-green-200 rounded">
                            <p className="text-sm font-semibold text-green-700">Bon :</p>
                            <pre className="code-block mt-1 text-xs"><code>{`commandes (id, date, FK client_id)`}</code></pre>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white border-l-4 border-orange-400 rounded-lg shadow-sm">
                    <h4 className="font-semibold">R\u00e8gle 2 : Chaque champ est atomique</h4>
                    <p className="text-sm mt-1">Un champ ne doit contenir qu\u2019<strong>une seule information</strong>.</p>
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-3 bg-red-50 border border-red-200 rounded">
                            <p className="text-sm font-semibold text-red-700">Mauvais :</p>
                            <p className="text-xs mt-1"><code>adresse = "12 rue de la Paix, 75002, Paris"</code></p>
                        </div>
                        <div className="p-3 bg-green-50 border border-green-200 rounded">
                            <p className="text-sm font-semibold text-green-700">Bon :</p>
                            <p className="text-xs mt-1"><code>numero_rue = "12"</code>, <code>rue = "rue de la Paix"</code>, <code>code_postal = "75002"</code>, <code>ville = "Paris"</code></p>
                        </div>
                    </div>
                    <p className="text-sm mt-2 text-gray-600">Pourquoi ? Parce qu\u2019on veut pouvoir chercher tous les clients d\u2019une ville donn\u00e9e. Si tout est dans un seul champ, c\u2019est tr\u00e8s compliqu\u00e9.</p>
                </div>

                <div className="p-4 bg-white border-l-4 border-blue-400 rounded-lg shadow-sm">
                    <h4 className="font-semibold">R\u00e8gle 3 : Des noms explicites</h4>
                    <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                        <li>Noms de tables au <strong>pluriel</strong> : <code>clients</code>, <code>produits</code>, <code>commandes</code></li>
                        <li>Noms de champs en <strong>minuscules avec underscores</strong> : <code>date_commande</code>, <code>prix_unitaire</code></li>
                        <li><strong>Pas d\u2019espaces</strong>, pas d\u2019accents, pas de caract\u00e8res sp\u00e9ciaux</li>
                        <li>Les cl\u00e9s \u00e9trang\u00e8res portent le nom de la table r\u00e9f\u00e9renc\u00e9e au <strong>singulier + "_id"</strong> : <code>client_id</code>, <code>produit_id</code></li>
                    </ul>
                </div>

                <div className="p-4 bg-white border-l-4 border-green-400 rounded-lg shadow-sm">
                    <h4 className="font-semibold">R\u00e8gle 4 : Toujours une cl\u00e9 primaire</h4>
                    <p className="text-sm mt-1">Chaque table doit avoir une cl\u00e9 primaire. <strong>Toujours. Sans exception.</strong></p>
                </div>
            </div>

            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Exercice 3 \u2014 Trouvez les erreurs</h4>
                <p>Voici un sch\u00e9ma mal con\u00e7u. Identifiez <strong>au moins 4 probl\u00e8mes</strong> :</p>
                <pre className="code-block mt-2"><code>{`Table "Commande" :
  Num\u00e9ro          : INT
  Date Commande   : DATE
  Nom Client      : VARCHAR(100)
  Email Client    : VARCHAR(255)
  Adresse Livraison : TEXT
  Produits        : TEXT  (ex: "Clavier x2, Souris x1, \u00c9cran x1")
  Prix Total      : DECIMAL`}</code></pre>
            </div>

            <div className="mt-3 not-prose">
                <details className="p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Correction exercice 3</summary>
                    <ol className="list-decimal ml-6 mt-3 space-y-2 text-sm">
                        <li><strong>Pas de cl\u00e9 primaire</strong> explicite</li>
                        <li><strong>Nom de table au singulier</strong> et sans convention (devrait \u00eatre <code>commandes</code>)</li>
                        <li><strong>Noms de champs avec espaces et majuscules</strong> (devrait \u00eatre <code>date_commande</code>, <code>nom_client</code>)</li>
                        <li><strong>Redondance</strong> : les infos client sont copi\u00e9es au lieu d\u2019utiliser une cl\u00e9 \u00e9trang\u00e8re</li>
                        <li>Le champ <code>Produits</code> <strong>viole la r\u00e8gle d\u2019atomicit\u00e9</strong> \u2014 il faut une table de liaison</li>
                        <li>Le prix total <strong>ne devrait pas \u00eatre stock\u00e9</strong> \u2014 il se calcule \u00e0 partir des lignes de commande</li>
                    </ol>
                </details>
            </div>

            {/* Partie 5 */}
            <h3 className="mt-8">Partie 5 \u2014 Dessiner un sch\u00e9ma complet</h3>

            <p><strong>Notation utilis\u00e9e :</strong></p>
            <pre className="code-block mt-2"><code>{`nom_table (PK id, champ1, champ2, ..., FK ref_id -> autre_table.id)

Relations :  ---- 1 ---- N ----  (lecture : "un ... a plusieurs ...")`}</code></pre>

            <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Exercice 4 \u2014 Sch\u00e9ma guid\u00e9</h4>
                <p>On reprend CyberShop et on dessine ensemble le sch\u00e9ma complet :</p>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                    <li><strong>\u00c9tape 1 :</strong> Lister les entit\u00e9s \u2192 clients, produits, commandes</li>
                    <li><strong>\u00c9tape 2 :</strong> Lister les attributs de chaque entit\u00e9 avec les types</li>
                    <li><strong>\u00c9tape 3 :</strong> Identifier les relations et leur cardinalit\u00e9</li>
                    <li><strong>\u00c9tape 4 :</strong> Ajouter les cl\u00e9s \u00e9trang\u00e8res et les tables de liaison si n\u00e9cessaire</li>
                    <li><strong>\u00c9tape 5 :</strong> V\u00e9rifier les 4 r\u00e8gles de bonne conception</li>
                </ol>
            </div>

            <h4 className="mt-6 font-semibold">R\u00e9sultat final attendu :</h4>
            <div className="mt-2 not-prose">
                <div className="space-y-3">
                    <div className="p-4 bg-white border-2 border-blue-300 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-blue-700">clients</h4>
                        <pre className="text-sm mt-1"><code>{`PK id              : INT
   nom             : VARCHAR(100)
   prenom          : VARCHAR(100)
   email           : VARCHAR(255)
   adresse         : TEXT
   date_inscription: DATE`}</code></pre>
                    </div>
                    <div className="text-center text-gray-500 text-sm font-mono">| 1-N</div>
                    <div className="p-4 bg-white border-2 border-green-300 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-green-700">commandes</h4>
                        <pre className="text-sm mt-1"><code>{`PK id             : INT
   date_commande  : DATE
   statut         : VARCHAR(50)
FK client_id      : INT  -> clients.id`}</code></pre>
                    </div>
                    <div className="text-center text-gray-500 text-sm font-mono">| 1-N</div>
                    <div className="p-4 bg-white border-2 border-yellow-300 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-yellow-700">commande_produits (table de liaison)</h4>
                        <pre className="text-sm mt-1"><code>{`PK id             : INT
FK commande_id    : INT  -> commandes.id
FK produit_id     : INT  -> produits.id
   quantite       : INT
   prix_unitaire  : DECIMAL(10,2)`}</code></pre>
                    </div>
                    <div className="text-center text-gray-500 text-sm font-mono">N-1 |</div>
                    <div className="p-4 bg-white border-2 border-red-300 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-red-700">produits</h4>
                        <pre className="text-sm mt-1"><code>{`PK id          : INT
   nom         : VARCHAR(200)
   description : TEXT
   prix        : DECIMAL(10,2)
   stock       : INT`}</code></pre>
                    </div>
                </div>
            </div>
        </>
    ),
    tp: (
        <PracticalWork
            title={tpTitle}
            objective={tpObjective}
            materials={tpMaterials}
            steps={tpSteps}
        />
    )
};
