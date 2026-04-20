import React from 'react';
import PracticalWork from '../../components/organisms/PraticalWork';

const tpTitle = 'TP : Architecte de Données — Mission Réseau';
const tpObjective = 'Concevoir un schéma de base de données complet à partir d’un besoin réel : identifier les entités, définir les attributs, établir les relations et vérifier la qualité du schéma.';
const tpMaterials = [
    'Un cahier ou un éditeur de texte pour dessiner les schémas.',
    'Le cours sur la conception de base de données (onglet Cours).',
    'https://dbdiagram.io/home',
];

const tpSteps = [
    {
        title: "Contexte professionnel",
        description: (
            <>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p>Vous êtes <strong>technicien(ne) réseau</strong> dans une entreprise de services informatiques appelée <strong>« NetSecure »</strong>. Votre responsable vous confie la mission suivante :</p>
                    <blockquote className="mt-3 pl-4 border-l-4 border-blue-400 italic text-gray-700">
                        « On doit créer une application interne pour gérer notre parc informatique. On a besoin de suivre nos <strong>clients</strong> (les entreprises pour qui on travaille), les <strong>équipements réseau</strong> qu’on installe chez eux (routeurs, switchs, bornes WiFi, serveurs...), et les <strong>tickets d’intervention</strong> quand un client signale un problème. Il faut aussi pouvoir savoir quel <strong>technicien</strong> a traité chaque ticket. »
                    </blockquote>
                </div>
            </>
        )
    },
    {
        title: "Mission 1 — Identifier les entités (15 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> À partir du texte ci-dessus, identifiez toutes les entités nécessaires. Pour chaque entité, listez au moins <strong>4 attributs pertinents</strong> avec leurs types de données.</p>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mt-3">
                    <p><strong>Indice :</strong> Il y a au minimum <strong>4 entités</strong>. Attention, les techniciens sont aussi une entité !</p>
                </div>
                <div className="mt-4">
                    <p><strong>Pour chaque entité, précisez :</strong></p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Le nom de la table (au pluriel, en minuscules)</li>
                        <li>Les attributs avec leurs types (INT, VARCHAR, TEXT, DATE...)</li>
                        <li>La clé primaire</li>
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "Mission 2 — Identifier les relations (15 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Pour chaque paire d’entités liées, précisez :</p>
                <ol className="list-decimal ml-6 space-y-1">
                    <li>Le type de relation (1-1, 1-N, ou N-N)</li>
                    <li>De quel côté va la clé étrangère</li>
                </ol>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="font-semibold mb-2">Questions guidées :</p>
                    <ol className="list-decimal ml-6 space-y-2">
                        <li>Un client peut-il avoir plusieurs équipements ? Un équipement appartient-il à un seul client ?</li>
                        <li>Un client peut-il ouvrir plusieurs tickets ? Un ticket concerne-t-il un seul client ?</li>
                        <li>Un ticket peut-il être traité par plusieurs techniciens ? Un technicien peut-il traiter plusieurs tickets ?</li>
                        <li>Un ticket concerne-t-il un équipement précis ?</li>
                    </ol>
                </div>
            </>
        )
    },
    {
        title: "Mission 3 — Dessiner le schéma complet (30 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Dessinez le schéma relationnel complet avec :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Toutes les tables avec leurs champs et types</li>
                    <li>Les clés primaires identifiées (PK)</li>
                    <li>Les clés étrangères identifiées (FK) avec la table de référence</li>
                    <li>Les tables de liaison si nécessaire</li>
                    <li>Les traits de relation avec la cardinalité (1-N, N-N)</li>
                </ul>

                <div className="mt-4 p-4 bg-gray-50 border rounded-lg">
                    <p className="font-semibold mb-2">Utilisez le format vu en cours :</p>
                    <pre className="code-block"><code>{`nom_table (PK id, champ1, champ2, ..., FK ref_id -> autre_table.id)`}</code></pre>
                </div>
                <p className="mt-3">Vous pouvez le faire sur papier ou dans un éditeur de texte.</p>
            </>
        )
    },
    {
        title: "Mission 4 — Vérification qualité (15 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Relisez votre schéma et vérifiez les <strong>4 règles de bonne conception</strong> :</p>
                <ol className="list-decimal ml-6 space-y-2">
                    <li><strong>Pas de redondance</strong> de données ?</li>
                    <li>Chaque champ est <strong>atomique</strong> ?</li>
                    <li>Les noms respectent les <strong>conventions</strong> ? (minuscules, underscores, pluriel pour les tables)</li>
                    <li>Chaque table a une <strong>clé primaire</strong> ?</li>
                </ol>
                <p className="mt-3">Corrigez votre schéma si nécessaire.</p>
            </>
        )
    },
    {
        title: "Mission 5 — Évolution du besoin",
        description: (
            <>
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <p>Le responsable revient vous voir :</p>
                    <blockquote className="mt-2 pl-4 border-l-4 border-orange-400 italic text-gray-700">
                        « En fait, un ticket peut concerner <strong>plusieurs équipements</strong> en même temps (par exemple, une panne réseau qui affecte le routeur ET le switch). Et j’aimerais aussi qu’on puisse stocker les <strong>pièces de rechange</strong> utilisées lors de chaque intervention. »
                    </blockquote>
                </div>
                <div className="mt-4">
                    <p><strong>Consigne :</strong> Modifiez votre schéma pour intégrer ces deux évolutions :</p>
                    <ol className="list-decimal ml-6 space-y-2">
                        <li>La relation ticket-équipement devient <strong>N-N</strong> → Quelle table de liaison devez-vous créer ?</li>
                        <li>Il faut une nouvelle entité <strong>« pièces »</strong> et une relation avec les tickets/interventions.</li>
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
            <h3>Introduction — Pourquoi concevoir avant de coder ?</h3>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
                <p className="italic">Imaginez qu’on vous demande de construire une maison. Est-ce que vous commencez directement à poser des briques, ou est-ce que vous dessinez d’abord un plan ? En base de données, c’est exactement pareil : le schéma, c’est le plan de votre BDD. Sans lui, vous allez droit dans le mur.</p>
            </div>
            <p>Vous avez découvert dans la fiche enquête les problèmes posés par les fichiers Excel : doublons, incohérences, pas d’accès simultané. Vous avez aussi appris le vocabulaire de base : <strong>table</strong>, <strong>champ</strong>, <strong>enregistrement</strong>, <strong>clé primaire</strong>, <strong>clé étrangère</strong>. Aujourd’hui, on passe à la pratique : comment <strong>concevoir un schéma de BDD</strong> propre et fonctionnel.</p>

            <div className="mt-4 p-4 bg-gray-50 border rounded-lg not-prose">
                <h4 className="font-semibold mb-2">Objectifs du cours :</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Savoir identifier les entités et leurs attributs à partir d’un besoin réel</li>
                    <li>Comprendre et appliquer les règles des clés primaires et étrangères</li>
                    <li>Savoir représenter les relations entre tables (1-1, 1-N, N-N)</li>
                    <li>Dessiner un schéma de base de données complet et cohérent</li>
                </ul>
            </div>

            {/* Partie 1 */}
            <h3 className="mt-8">Partie 1 — Les entités et les attributs</h3>
            <p>Une <strong>entité</strong>, c’est un « objet » du monde réel que l’on veut stocker dans notre BDD. Chaque entité devient une <strong>table</strong>. Les caractéristiques de cette entité deviennent les <strong>champs</strong> (colonnes) de la table.</p>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg mt-3 not-prose">
                <h4 className="font-semibold mb-2">Méthode pour identifier les entités :</h4>
                <p className="text-sm">Prenez la description d’un besoin et <strong>soulignez tous les noms communs importants</strong>. Ce sont vos candidats pour devenir des entités.</p>
            </div>

            <h4 className="mt-6 font-semibold">Exemple fil rouge — Le cas « CyberShop »</h4>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mt-2">
                <p className="italic">« CyberShop est une boutique en ligne qui vend du matériel informatique. L’entreprise a besoin de gérer ses <strong>clients</strong>, les <strong>produits</strong> qu’elle vend, et les <strong>commandes</strong> passées par les clients. Chaque client a un nom, un prénom, un email et une adresse. Chaque produit a un nom, une description, un prix et une quantité en stock. Chaque commande est passée par un client, contient un ou plusieurs produits, et a une date. »</p>
            </div>

            <p className="mt-3"><strong>Identification des entités :</strong></p>
            <ul className="list-disc list-inside ml-4">
                <li>Client → table <code>clients</code></li>
                <li>Produit → table <code>produits</code></li>
                <li>Commande → table <code>commandes</code></li>
            </ul>

            <h4 className="mt-6 font-semibold">Les attributs et les types de données</h4>
            <p>Pour chaque entité, on liste ses attributs et on choisit le type de donnée approprié :</p>

            <div className="space-y-4 mt-3 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Table « clients »</h4>
                    <pre className="code-block mt-2"><code>{`id              : INT           -- identifiant unique
nom             : VARCHAR(100)  -- texte de longueur variable (max 100 caractères)
prenom          : VARCHAR(100)  -- texte
email           : VARCHAR(255)  -- texte
adresse         : TEXT          -- texte long
date_inscription: DATE          -- date`}</code></pre>
                </div>
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Table « produits »</h4>
                    <pre className="code-block mt-2"><code>{`id          : INT            -- identifiant unique
nom         : VARCHAR(200)   -- texte
description : TEXT           -- texte long
prix        : DECIMAL(10,2)  -- nombre décimal (10 chiffres max, 2 après la virgule)
stock       : INT            -- entier`}</code></pre>
                </div>
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Table « commandes »</h4>
                    <pre className="code-block mt-2"><code>{`id             : INT          -- identifiant unique
date_commande  : DATE         -- date
statut         : VARCHAR(50)  -- texte (en attente, expédiée, livrée...)`}</code></pre>
                </div>
            </div>

            <h4 className="mt-6 font-semibold">Mémo des types de données courants</h4>
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
                        <tr><td className="border border-gray-300 px-4 py-2"><code>INT</code></td><td className="border border-gray-300 px-4 py-2">Nombres entiers</td><td className="border border-gray-300 px-4 py-2">âge, quantité, identifiant</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>VARCHAR(n)</code></td><td className="border border-gray-300 px-4 py-2">Texte court (max n caractères)</td><td className="border border-gray-300 px-4 py-2">nom, email, ville</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>TEXT</code></td><td className="border border-gray-300 px-4 py-2">Texte long</td><td className="border border-gray-300 px-4 py-2">description, commentaire</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>DATE</code></td><td className="border border-gray-300 px-4 py-2">Date (AAAA-MM-JJ)</td><td className="border border-gray-300 px-4 py-2">date de naissance</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>DATETIME</code></td><td className="border border-gray-300 px-4 py-2">Date et heure</td><td className="border border-gray-300 px-4 py-2">horodatage de connexion</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>DECIMAL</code></td><td className="border border-gray-300 px-4 py-2">Nombre décimal précis</td><td className="border border-gray-300 px-4 py-2">prix (10,2 → 99999999.99)</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>BOOLEAN</code></td><td className="border border-gray-300 px-4 py-2">Vrai ou Faux</td><td className="border border-gray-300 px-4 py-2">actif, vérifié</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Exercice 1 — À faire ensemble</h4>
                <p className="italic">« Un lycée veut gérer ses salles informatiques. Il a besoin de suivre les <strong>salles</strong> (numéro, bâtiment, nombre de postes), les <strong>ordinateurs</strong> dans chaque salle (numéro de série, marque, modèle, état), et les <strong>interventions</strong> de maintenance (date, description du problème, technicien). »</p>
                <p className="mt-2"><strong>Consigne :</strong> Identifiez les 3 entités et listez leurs attributs avec les types de données.</p>
            </div>

            {/* <div className="mt-3 space-y-3 not-prose">
                <details className="p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Correction exercice 1</summary>
                    <div className="mt-3 space-y-3">
                        <div>
                            <p className="font-semibold">Table « salles » :</p>
                            <pre className="code-block mt-1"><code>{`id        : INT
numero    : VARCHAR(10)
batiment  : VARCHAR(50)
nb_postes : INT`}</code></pre>
                        </div>
                        <div>
                            <p className="font-semibold">Table « ordinateurs » :</p>
                            <pre className="code-block mt-1"><code>{`id           : INT
numero_serie : VARCHAR(100)
marque       : VARCHAR(50)
modele       : VARCHAR(100)
etat         : VARCHAR(30)  -- fonctionnel, en panne, en maintenance`}</code></pre>
                        </div>
                        <div>
                            <p className="font-semibold">Table « interventions » :</p>
                            <pre className="code-block mt-1"><code>{`id                : INT
date_intervention : DATE
description       : TEXT
technicien        : VARCHAR(100)`}</code></pre>
                        </div>
                    </div>
                </details>
            </div> */}

            {/* Partie 2 */}
            <h3 className="mt-8">Partie 2 — La clé primaire</h3>
            <p>La <strong>clé primaire</strong> (PRIMARY KEY) est le champ qui identifie de manière <strong>unique</strong> chaque enregistrement dans une table. Deux règles absolues :</p>
            <ol className="list-decimal ml-6 mt-2">
                <li>Elle doit être <strong>unique</strong> (pas deux lignes avec la même valeur)</li>
                <li>Elle ne peut <strong>jamais être vide</strong> (NOT NULL)</li>
            </ol>

            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg not-prose">
                <h4 className="font-semibold mb-2">Bonne pratique :</h4>
                <p className="text-sm">Utilisez toujours un champ <code>id</code> de type <strong>INT avec auto-incrémentation</strong>. Ne prenez jamais un email, un numéro de téléphone ou un nom comme clé primaire, même s’ils semblent uniques. Pourquoi ? Parce qu’un client peut changer d’email, deux personnes peuvent avoir le même nom, et un numéro de téléphone peut être réattribué.</p>
            </div>

            <p className="mt-4"><strong>Notation dans un schéma :</strong></p>
            <p>La clé primaire se note avec le symbole <strong>PK</strong> (Primary Key) ou en soulignant le nom du champ.</p>
            <pre className="code-block mt-2"><code>{`clients (PK id, nom, prenom, email, adresse, date_inscription)`}</code></pre>

            {/* <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Question flash :</h4>
                <p>« Dans une table <code>eleves</code>, pourquoi est-ce une mauvaise idée d’utiliser le nom de l’élève comme clé primaire ? »</p>
                <details className="mt-2">
                    <summary className="cursor-pointer text-blue-600 font-semibold">Voir la réponse</summary>
                    <p className="mt-1">Deux élèves peuvent avoir le même nom. De plus, un nom peut contenir des erreurs ou être modifié (mariage, correction).</p>
                </details>
            </div> */}

            {/* Partie 3 */}
            <h3 className="mt-8">Partie 3 — Les clés étrangères et les relations</h3>
            <p>La <strong>clé étrangère</strong> (FOREIGN KEY) est le mécanisme qui <strong>relie deux tables</strong> entre elles. C’est un champ dans une table qui fait référence à la clé primaire d’une autre table.</p>

            <h4 className="mt-6 font-semibold">Les 3 types de relations :</h4>

            <div className="space-y-4 mt-3 not-prose">
                <div className="p-4 bg-white border-l-4 border-purple-400 rounded-lg shadow-sm">
                    <h4 className="font-semibold">Relation 1-1 (Un à Un) — Rare en pratique</h4>
                    <p className="text-sm mt-1">Un enregistrement dans la table A correspond à <strong>exactement un</strong> enregistrement dans la table B, et inversement.</p>
                    <p className="text-sm mt-1"><strong>Exemple :</strong> Un employé a un seul badge d’accès, et un badge appartient à un seul employé.</p>
                    <p className="text-sm mt-1"><strong>Usage :</strong> On sépare les données quand certaines infos sont sensibles ou rarement consultées (ex : données confidentielles dans une table à part).</p>
                </div>

                <div className="p-4 bg-white border-l-4 border-blue-400 rounded-lg shadow-sm">
                    <h4 className="font-semibold">Relation 1-N (Un à Plusieurs) — La plus courante</h4>
                    <p className="text-sm mt-1">Un enregistrement dans la table A peut être lié à <strong>plusieurs</strong> enregistrements dans la table B, mais chaque enregistrement de B n’est lié qu’à <strong>un seul</strong> de A.</p>
                    <p className="text-sm mt-2"><strong>Exemple CyberShop :</strong> Un client peut passer plusieurs commandes, mais une commande appartient à un seul client.</p>
                    <p className="text-sm mt-1">→ On ajoute la clé étrangère <code>client_id</code> dans la table <code>commandes</code>.</p>
                    <pre className="code-block mt-2"><code>{`clients    (PK id, nom, prenom, email, adresse, date_inscription)
commandes  (PK id, date_commande, statut, FK client_id -> clients.id)`}</code></pre>
                    <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
                        <strong>Règle d’or :</strong> la clé étrangère va toujours du côté « plusieurs ». Si un client a plusieurs commandes, c’est dans <code>commandes</code> qu’on met <code>client_id</code> (pas l’inverse).
                    </div>
                </div>

                <div className="p-4 bg-white border-l-4 border-red-400 rounded-lg shadow-sm">
                    <h4 className="font-semibold">Relation N-N (Plusieurs à Plusieurs) — Nécessite une table de liaison</h4>
                    <p className="text-sm mt-1">Un enregistrement dans la table A peut être lié à <strong>plusieurs</strong> enregistrements de la table B, <strong>et inversement</strong>.</p>
                    <p className="text-sm mt-2"><strong>Exemple CyberShop :</strong> Une commande peut contenir plusieurs produits, et un produit peut apparaître dans plusieurs commandes.</p>
                    <p className="text-sm mt-1">→ On ne peut pas résoudre ça avec une simple clé étrangère. Il faut créer une <strong>table intermédiaire</strong> (table de liaison, table de jonction, ou table associative).</p>
                    <pre className="code-block mt-2"><code>{`commande_produits (PK id, FK commande_id -> commandes.id,
                         FK produit_id  -> produits.id,
                         quantite       : INT,
                         prix_unitaire  : DECIMAL(10,2))`}</code></pre>
                    <p className="text-sm mt-2 text-gray-600">Le <code>prix_unitaire</code> est stocké ici car le prix d’un produit peut évoluer dans le temps. On garde le prix <strong>au moment de la commande</strong>.</p>
                </div>
            </div>

            <h4 className="mt-6 font-semibold">Schéma complet CyberShop :</h4>
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
                <h4 className="font-semibold mb-2">Exercice 2 — À faire ensemble</h4>
                <p>Reprenons le cas du lycée (exercice 1). Identifiez les relations :</p>
                <ol className="list-decimal ml-6 mt-2">
                    <li>Quel est le lien entre « salles » et « ordinateurs » ?</li>
                    <li>Quel est le lien entre « ordinateurs » et « interventions » ?</li>
                    <li>Ajoutez les clés étrangères aux bonnes tables.</li>
                </ol>
            </div>

            {/* <div className="mt-3 not-prose">
                <details className="p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Correction exercice 2</summary>
                    <div className="mt-3">
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>Une salle contient plusieurs ordinateurs → relation <strong>1-N</strong> → on ajoute <code>salle_id</code> dans la table <code>ordinateurs</code></li>
                            <li>Un ordinateur peut avoir plusieurs interventions → relation <strong>1-N</strong> → on ajoute <code>ordinateur_id</code> dans la table <code>interventions</code></li>
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
            </div> */}

            {/* Partie 4 */}
            <h3 className="mt-8">Partie 4 — Les règles d’une bonne conception</h3>

            <div className="space-y-4 mt-3 not-prose">
                <div className="p-4 bg-white border-l-4 border-red-400 rounded-lg shadow-sm">
                    <h4 className="font-semibold">Règle 1 : Pas de redondance</h4>
                    <p className="text-sm mt-1">Ne jamais stocker la même information à deux endroits. Si l’adresse d’un client est stockée dans la table <code>clients</code> ET dans la table <code>commandes</code>, que se passe-t-il quand le client déménage ? On doit modifier partout → risque d’incohérence.</p>
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
                    <h4 className="font-semibold">Règle 2 : Chaque champ est atomique</h4>
                    <p className="text-sm mt-1">Un champ ne doit contenir qu’<strong>une seule information</strong>.</p>
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
                    <p className="text-sm mt-2 text-gray-600">Pourquoi ? Parce qu’on veut pouvoir chercher tous les clients d’une ville donnée. Si tout est dans un seul champ, c’est très compliqué.</p>
                </div>

                <div className="p-4 bg-white border-l-4 border-blue-400 rounded-lg shadow-sm">
                    <h4 className="font-semibold">Règle 3 : Des noms explicites</h4>
                    <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                        <li>Noms de tables au <strong>pluriel</strong> : <code>clients</code>, <code>produits</code>, <code>commandes</code></li>
                        <li>Noms de champs en <strong>minuscules avec underscores</strong> : <code>date_commande</code>, <code>prix_unitaire</code></li>
                        <li><strong>Pas d’espaces</strong>, pas d’accents, pas de caractères spéciaux</li>
                        <li>Les clés étrangères portent le nom de la table référencée au <strong>singulier + "_id"</strong> : <code>client_id</code>, <code>produit_id</code></li>
                    </ul>
                </div>

                <div className="p-4 bg-white border-l-4 border-green-400 rounded-lg shadow-sm">
                    <h4 className="font-semibold">Règle 4 : Toujours une clé primaire</h4>
                    <p className="text-sm mt-1">Chaque table doit avoir une clé primaire. <strong>Toujours. Sans exception.</strong></p>
                </div>
            </div>

            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Exercice 3 — Trouvez les erreurs</h4>
                <p>Voici un schéma mal conçu. Identifiez <strong>au moins 4 problèmes</strong> :</p>
                <pre className="code-block mt-2"><code>{`Table "Commande" :
  Numéro          : INT
  Date Commande   : DATE
  Nom Client      : VARCHAR(100)
  Email Client    : VARCHAR(255)
  Adresse Livraison : TEXT
  Produits        : TEXT  (ex: "Clavier x2, Souris x1, Écran x1")
  Prix Total      : DECIMAL`}</code></pre>
            </div>

            {/* <div className="mt-3 not-prose">
                <details className="p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Correction exercice 3</summary>
                    <ol className="list-decimal ml-6 mt-3 space-y-2 text-sm">
                        <li><strong>Pas de clé primaire</strong> explicite</li>
                        <li><strong>Nom de table au singulier</strong> et sans convention (devrait être <code>commandes</code>)</li>
                        <li><strong>Noms de champs avec espaces et majuscules</strong> (devrait être <code>date_commande</code>, <code>nom_client</code>)</li>
                        <li><strong>Redondance</strong> : les infos client sont copiées au lieu d’utiliser une clé étrangère</li>
                        <li>Le champ <code>Produits</code> <strong>viole la règle d’atomicité</strong> — il faut une table de liaison</li>
                        <li>Le prix total <strong>ne devrait pas être stocké</strong> — il se calcule à partir des lignes de commande</li>
                    </ol>
                </details>
            </div> */}

            {/* Partie 5 */}
            <h3 className="mt-8">Partie 5 — Dessiner un schéma complet</h3>

            <p><strong>Notation utilisée :</strong></p>
            <pre className="code-block mt-2"><code>{`nom_table (PK id, champ1, champ2, ..., FK ref_id -> autre_table.id)

Relations :  ---- 1 ---- N ----  (lecture : "un ... a plusieurs ...")`}</code></pre>

            <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Exercice 4 — Schéma guidé</h4>
                <p>On reprend CyberShop et on dessine ensemble le schéma complet :</p>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                    <li><strong>Étape 1 :</strong> Lister les entités → clients, produits, commandes</li>
                    <li><strong>Étape 2 :</strong> Lister les attributs de chaque entité avec les types</li>
                    <li><strong>Étape 3 :</strong> Identifier les relations et leur cardinalité</li>
                    <li><strong>Étape 4 :</strong> Ajouter les clés étrangères et les tables de liaison si nécessaire</li>
                    <li><strong>Étape 5 :</strong> Vérifier les 4 règles de bonne conception</li>
                </ol>
            </div>

            <h4 className="mt-6 font-semibold">Résultat final attendu :</h4>
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