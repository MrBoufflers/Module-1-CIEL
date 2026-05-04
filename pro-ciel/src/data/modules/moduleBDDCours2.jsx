import React from 'react';
import PracticalWork from '../../components/organisms/PraticalWork';

const tpTitle = 'TP : DBA Junior — Construire la BDD NetSecure';
const tpObjective = 'Créer, alimenter et interroger une base de données complète en SQL à partir du schéma conçu au cours 1. Vous utiliserez CREATE TABLE, INSERT, SELECT, UPDATE, DELETE et INNER JOIN.';
const tpMaterials = [
    'Un navigateur web avec programiz.com/sql/online-compiler ouvert.',
    'Le schéma de la BDD NetSecure (cours 1).',
    'Ce cours (onglet Cours) comme référence.',
];

const tpSteps = [
    {
        title: "Contexte professionnel",
        description: (
            <>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p>Vous êtes en stage chez <strong>NetSecure</strong>, une entreprise de services informatiques. Votre tuteur vous confie la mission de créer et alimenter la base de données qui gère le parc informatique des clients. Vous partez du schéma conçu au cours 1 (TP NetSecure) et vous le traduisez en SQL.</p>
                </div>
                <div className="mt-4 p-4 bg-gray-50 border rounded-lg">
                    <p className="font-semibold mb-2">Rappel du schéma :</p>
                    <pre className="code-block"><code>{`clients (🔑 id, nom_entreprise, adresse, telephone, email_contact, secteur_activite)
    ↓ 1-N
equipements (🔑 id, type, marque, modele, numero_serie, date_installation,
             adresse_ip, 🔗 client_id)
    ↓ 1-N
tickets (🔑 id, titre, description, date_ouverture, date_cloture, priorite,
         statut, 🔗 client_id, 🔗 equipement_id, 🔗 technicien_id)
    ↑ N-1
techniciens (🔑 id, nom, prenom, email, telephone, specialite)`}</code></pre>
                </div>
            </>
        )
    },
    {
        title: "Mission 1 — Création des tables (25 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Écrivez les 4 commandes <code>CREATE TABLE</code> dans l'ordre correct. Respectez ces règles :</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Chaque table a une clé primaire <code>id INTEGER PRIMARY KEY AUTOINCREMENT</code></li>
                    <li>Les champs importants ont <code>NOT NULL</code></li>
                    <li>Les emails ont la contrainte <code>UNIQUE</code></li>
                    <li>Les clés étrangères sont déclarées avec <code>FOREIGN KEY ... REFERENCES</code></li>
                </ul>
                <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p><strong>Ordre de création :</strong> clients → techniciens → equipements → tickets</p>
                </div>
                <div className="mt-3">
                    <p><strong>Contraintes spécifiques :</strong></p>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                        <li><code>tickets.priorite</code> : valeur par défaut <code>'moyenne'</code></li>
                        <li><code>tickets.statut</code> : valeur par défaut <code>'ouvert'</code></li>
                        <li><code>tickets.date_ouverture</code> : valeur par défaut <code>CURRENT_DATE</code></li>
                        <li><code>tickets.date_cloture</code> : peut être NULL (ticket pas encore fermé)</li>
                        <li><code>tickets.equipement_id</code> : peut être NULL (ticket pas lié à un équipement)</li>
                    </ul>
                </div>
                <details className="mt-4 p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Voir la correction</summary>
                    <pre className="code-block mt-3"><code>{`CREATE TABLE clients (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_entreprise  VARCHAR(200) NOT NULL,
    adresse         TEXT,
    telephone       VARCHAR(20),
    email_contact   VARCHAR(255) UNIQUE NOT NULL,
    secteur_activite VARCHAR(100)
);

CREATE TABLE techniciens (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    nom         VARCHAR(100) NOT NULL,
    prenom      VARCHAR(100) NOT NULL,
    email       VARCHAR(255) UNIQUE NOT NULL,
    telephone   VARCHAR(20),
    specialite  VARCHAR(100)
);

CREATE TABLE equipements (
    id                INTEGER PRIMARY KEY AUTOINCREMENT,
    type              VARCHAR(50) NOT NULL,
    marque            VARCHAR(100),
    modele            VARCHAR(100),
    numero_serie      VARCHAR(100) UNIQUE,
    date_installation DATE,
    adresse_ip        VARCHAR(45),
    client_id         INTEGER NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE tickets (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    titre         VARCHAR(200) NOT NULL,
    description   TEXT,
    date_ouverture DATE NOT NULL DEFAULT CURRENT_DATE,
    date_cloture  DATE,
    priorite      VARCHAR(20) NOT NULL DEFAULT 'moyenne',
    statut        VARCHAR(30) NOT NULL DEFAULT 'ouvert',
    client_id     INTEGER NOT NULL,
    equipement_id INTEGER,
    technicien_id INTEGER,
    FOREIGN KEY (client_id)    REFERENCES clients(id),
    FOREIGN KEY (equipement_id) REFERENCES equipements(id),
    FOREIGN KEY (technicien_id) REFERENCES techniciens(id)
);`}</code></pre>
                </details>
            </>
        )
    },
    {
        title: "Mission 2 — Insertion des données (20 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Peuplez la base avec des données réalistes. Insérez dans l'ordre :</p>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                    <li><strong>3 clients</strong> (des entreprises du secteur tech, santé, industrie)</li>
                    <li><strong>3 techniciens</strong> (avec différentes spécialités : réseau, sécurité, systèmes)</li>
                    <li><strong>6 équipements</strong> répartis chez les clients (routeurs, switchs, serveurs, firewalls — marques réelles : Cisco, Fortinet, Dell, HP...)</li>
                    <li><strong>5 tickets</strong> avec différents statuts (ouvert, en_cours, resolu) et priorités (basse, moyenne, haute, critique)</li>
                </ol>
                <details className="mt-4 p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Voir la correction</summary>
                    <pre className="code-block mt-3"><code>{`-- Clients
INSERT INTO clients (nom_entreprise, adresse, telephone,
                     email_contact, secteur_activite) VALUES
('TechnoLyon SAS', '45 rue Garibaldi, 69003 Lyon',
 '04 72 00 11 22', 'contact@technolyon.fr', 'Informatique'),
('BioSanté SARL', '12 av. Berthelot, 69007 Lyon',
 '04 72 33 44 55', 'info@biosante.fr', 'Santé'),
('IndusRhône SA', '8 zone industrielle, 69400 Villefranche',
 '04 74 66 77 88', 'it@indusrhone.fr', 'Industrie');

-- Techniciens
INSERT INTO techniciens (nom, prenom, email, telephone, specialite) VALUES
('Martin', 'Lucas', 'l.martin@netsecure.fr', '06 11 22 33 44', 'Réseaux'),
('Benali', 'Sarah', 's.benali@netsecure.fr', '06 22 33 44 55', 'Sécurité'),
('Nguyen', 'Thomas', 't.nguyen@netsecure.fr', '06 33 44 55 66', 'Systèmes');

-- Équipements
INSERT INTO equipements (type, marque, modele, numero_serie,
                         date_installation, adresse_ip, client_id) VALUES
('routeur',  'Cisco',   'ISR 1100',      'CSC-2024-001',
 '2024-03-15', '192.168.1.1',  1),
('switch',   'TP-Link', 'TL-SG108',      'TPL-2024-042',
 '2024-03-15', '192.168.1.2',  1),
('firewall', 'Fortinet','FortiGate 40F', 'FGT-2024-033',
 '2024-01-20', '10.0.0.1',     2),
('serveur',  'Dell',    'PowerEdge T150','DEL-2023-899',
 '2023-11-10', '10.0.0.100',   2),
('switch',   'Cisco',   'CBS350-8T',     'CSC-2025-012',
 '2025-01-08', '172.16.0.2',   3),
('routeur',  'Cisco',   'ISR 1100',      'CSC-2024-099',
 '2024-06-01', '172.16.0.1',   3);

-- Tickets
INSERT INTO tickets (titre, description, priorite, statut,
                     client_id, equipement_id, technicien_id) VALUES
('Perte WiFi intermittente',
 'Déconnexions fréquentes dans le bureau B',
 'haute', 'en_cours', 1, 1, 1),
('MàJ firmware firewall urgente',
 'CVE critique détectée, patch disponible',
 'critique', 'ouvert', 2, 3, 2),
('Serveur lent au démarrage',
 'Plus de 10 min pour démarrer',
 'moyenne', 'resolu', 2, 4, 3),
('Installation switch atelier',
 'Nouveau switch pour extension réseau',
 'basse', 'ouvert', 3, 5, 1),
('Tentative intrusion détectée',
 'Alertes IDS sur port 22',
 'critique', 'en_cours', 2, 3, 2);`}</code></pre>
                </details>
            </>
        )
    },
    {
        title: "Mission 3 — Requêtes de consultation (30 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Écrivez les requêtes SQL suivantes. Chaque requête doit retourner des données correctes.</p>

                <h4 className="font-semibold mt-4 mb-2">Requêtes simples :</h4>
                <ol className="list-decimal ml-6 space-y-1">
                    <li>Affichez tous les équipements de type <code>'routeur'</code></li>
                    <li>Affichez les tickets dont le statut est <code>'ouvert'</code> ou <code>'en_cours'</code></li>
                    <li>Affichez les équipements installés après le 01/01/2024</li>
                    <li>Affichez les tickets de priorité <code>'haute'</code> ou <code>'critique'</code>, triés par priorité</li>
                </ol>

                <h4 className="font-semibold mt-4 mb-2">Requêtes avec jointures :</h4>
                <ol className="list-decimal ml-6 space-y-1" start={5}>
                    <li>Affichez pour chaque équipement : son type, sa marque et le nom de l'entreprise cliente</li>
                    <li>Affichez tous les tickets avec : le titre, le nom du client, et le prénom + nom du technicien</li>
                    <li>Affichez les tickets encore ouverts (<code>date_cloture IS NULL</code>) avec le nom du client</li>
                </ol>

                <h4 className="font-semibold mt-4 mb-2">Requêtes avec agrégation :</h4>
                <ol className="list-decimal ml-6 space-y-1" start={8}>
                    <li>Comptez le nombre d'équipements par client</li>
                    <li>Comptez le nombre de tickets par technicien</li>
                    <li>Comptez le nombre de tickets par statut</li>
                </ol>

                <h4 className="font-semibold mt-4 mb-2">Requêtes de modification :</h4>
                <ol className="list-decimal ml-6 space-y-1" start={11}>
                    <li>Clôturez un ticket (statut → <code>'resolu'</code> + date de clôture)</li>
                    <li>Réassignez tous les tickets <code>'ouvert'</code> d'un technicien à un autre</li>
                </ol>

                <details className="mt-4 p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Voir la correction</summary>
                    <pre className="code-block mt-3"><code>{`-- 1. Équipements de type routeur
SELECT * FROM equipements WHERE type = 'routeur';

-- 2. Tickets ouverts ou en cours
SELECT * FROM tickets WHERE statut IN ('ouvert', 'en_cours');

-- 3. Équipements installés après le 01/01/2024
SELECT * FROM equipements WHERE date_installation > '2024-01-01';

-- 4. Tickets haute/critique, triés
SELECT * FROM tickets
WHERE priorite IN ('haute', 'critique')
ORDER BY priorite DESC;

-- 5. Équipements avec nom du client (jointure)
SELECT e.type, e.marque, e.modele, c.nom_entreprise
FROM equipements e
INNER JOIN clients c ON e.client_id = c.id;

-- 6. Tickets avec client et technicien
SELECT t.titre, c.nom_entreprise, tech.prenom, tech.nom
FROM tickets t
INNER JOIN clients c ON t.client_id = c.id
INNER JOIN techniciens tech ON t.technicien_id = tech.id;

-- 7. Tickets encore ouverts avec nom du client
SELECT t.titre, t.statut, c.nom_entreprise
FROM tickets t
INNER JOIN clients c ON t.client_id = c.id
WHERE t.date_cloture IS NULL;

-- 8. Nombre d'équipements par client
SELECT c.nom_entreprise, COUNT(e.id) AS nb_equipements
FROM clients c
INNER JOIN equipements e ON e.client_id = c.id
GROUP BY c.id;

-- 9. Nombre de tickets par technicien
SELECT tech.nom, tech.prenom, COUNT(t.id) AS nb_tickets
FROM techniciens tech
INNER JOIN tickets t ON t.technicien_id = tech.id
GROUP BY tech.id;

-- 10. Nombre de tickets par statut
SELECT statut, COUNT(*) AS nombre
FROM tickets
GROUP BY statut;

-- 11. Clôturer un ticket
UPDATE tickets
SET statut = 'resolu', date_cloture = CURRENT_DATE
WHERE id = 3;

-- 12. Réassigner les tickets ouverts
UPDATE tickets
SET technicien_id = 3
WHERE technicien_id = 1 AND statut = 'ouvert';`}</code></pre>
                </details>
            </>
        )
    },
    {
        title: "Mission 4 — Pour les plus rapides (bonus)",
        description: (
            <>
                <ol className="list-decimal ml-6 space-y-2" start={13}>
                    <li>Affichez le technicien qui a le <strong>plus de tickets</strong> assignés (jointure + GROUP BY + ORDER BY + LIMIT 1)</li>
                    <li>Affichez les clients qui <strong>n'ont aucun ticket ouvert</strong></li>
                    <li>Affichez pour chaque client : le <strong>nombre d'équipements ET le nombre de tickets</strong></li>
                </ol>
                <details className="mt-4 p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Voir la correction</summary>
                    <pre className="code-block mt-3"><code>{`-- 13. Technicien avec le plus de tickets
SELECT tech.nom, tech.prenom, COUNT(t.id) AS nb_tickets
FROM techniciens tech
INNER JOIN tickets t ON t.technicien_id = tech.id
GROUP BY tech.id
ORDER BY nb_tickets DESC
LIMIT 1;

-- 14. Clients sans ticket ouvert
SELECT c.nom_entreprise
FROM clients c
WHERE c.id NOT IN (
    SELECT client_id FROM tickets WHERE statut = 'ouvert'
);

-- 15. Équipements et tickets par client
SELECT
    c.nom_entreprise,
    COUNT(DISTINCT e.id) AS nb_equipements,
    COUNT(DISTINCT t.id) AS nb_tickets
FROM clients c
LEFT JOIN equipements e ON e.client_id = c.id
LEFT JOIN tickets t ON t.client_id = c.id
GROUP BY c.id;`}</code></pre>
                </details>
            </>
        )
    },
];

export const moduleBDDCours2 = {
    course: (
        <>
            {/* Introduction */}
            <h3>Introduction — Donner des ordres à une base de données</h3>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
                <p className="italic">Vous savez maintenant dessiner un schéma de base de données propre. Mais un schéma sur papier ne stocke rien du tout. Pour créer réellement votre base de données, insérer des données et les consulter, vous devez parler au SGBD (Système de Gestion de Base de Données) dans sa langue. Cette langue, c'est le <strong>SQL</strong> — <em>Structured Query Language</em>, ou en français : Langage de Requêtes Structurées.</p>
            </div>
            <p>Le SQL existe depuis les années 1970 et il n'a quasiment pas changé depuis. Ce que vous allez apprendre aujourd'hui, vous pourrez l'utiliser dans n'importe quelle entreprise, sur n'importe quel système (MySQL, PostgreSQL, SQLite, Oracle...).</p>

            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold mb-2">Outil utilisé dans ce cours :</h4>
                <p>Ouvrez <strong>programiz.com/sql/online-compiler</strong> dans votre navigateur. C'est un éditeur SQL en ligne, sans installation, basé sur SQLite. Vous tapez vos requêtes, vous cliquez sur <strong>Run</strong>, et vous voyez le résultat immédiatement.</p>
            </div>

            <h4 className="mt-6 font-semibold">Rappel CRUD → SQL</h4>
            <p>Vous avez vu dans la fiche enquête les 4 opérations fondamentales sur les données :</p>
            <div className="overflow-x-auto mt-2 not-prose">
                <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">Opération</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">SQL</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border border-gray-300 px-4 py-2">Create</td><td className="border border-gray-300 px-4 py-2"><code>INSERT</code></td><td className="border border-gray-300 px-4 py-2">Ajouter des données</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">Read</td><td className="border border-gray-300 px-4 py-2"><code>SELECT</code></td><td className="border border-gray-300 px-4 py-2">Lire / rechercher des données</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">Update</td><td className="border border-gray-300 px-4 py-2"><code>UPDATE</code></td><td className="border border-gray-300 px-4 py-2">Modifier des données existantes</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">Delete</td><td className="border border-gray-300 px-4 py-2"><code>DELETE</code></td><td className="border border-gray-300 px-4 py-2">Supprimer des données</td></tr>
                    </tbody>
                </table>
            </div>
            <p className="mt-3">Et les commandes de <strong>structure</strong> :</p>
            <div className="overflow-x-auto mt-2 not-prose">
                <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">Opération</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">SQL</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border border-gray-300 px-4 py-2">Créer une table</td><td className="border border-gray-300 px-4 py-2"><code>CREATE TABLE</code></td><td className="border border-gray-300 px-4 py-2">Définir la structure</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">Supprimer une table</td><td className="border border-gray-300 px-4 py-2"><code>DROP TABLE</code></td><td className="border border-gray-300 px-4 py-2">Supprimer la structure et les données</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-4 p-4 bg-gray-50 border rounded-lg not-prose">
                <h4 className="font-semibold mb-2">Objectifs du cours :</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Créer des tables avec <code>CREATE TABLE</code></li>
                    <li>Insérer des données avec <code>INSERT INTO</code></li>
                    <li>Lire des données avec <code>SELECT</code> (simple, filtré, trié)</li>
                    <li>Modifier des données avec <code>UPDATE</code></li>
                    <li>Supprimer des données avec <code>DELETE</code></li>
                    <li>Comprendre les bases d'une jointure avec <code>INNER JOIN</code></li>
                </ul>
            </div>

            {/* ======================== PARTIE 1 ======================== */}
            <h3 className="mt-8">Partie 1 — CREATE TABLE : créer une table</h3>
            <p><code>CREATE TABLE</code> traduit directement le schéma que vous avez dessiné au cours 1. C'est la première commande à écrire, avant toute autre opération.</p>

            <h4 className="mt-6 font-semibold">Syntaxe</h4>
            <pre className="code-block mt-2"><code>{`CREATE TABLE nom_table (
    nom_champ TYPE CONTRAINTE,
    nom_champ TYPE CONTRAINTE,
    ...
);`}</code></pre>

            <h4 className="mt-6 font-semibold">Exemple complet — La table « clients »</h4>
            <pre className="code-block mt-2"><code>{`CREATE TABLE clients (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    nom       VARCHAR(100) NOT NULL,
    prenom    VARCHAR(100) NOT NULL,
    email     VARCHAR(255) UNIQUE NOT NULL,
    adresse   TEXT,
    date_inscription DATE DEFAULT CURRENT_DATE
);`}</code></pre>

            <h4 className="mt-6 font-semibold">Décortiquons ligne par ligne</h4>
            <div className="space-y-3 mt-3 not-prose">
                <div className="p-3 bg-white border rounded-lg shadow-sm">
                    <p className="font-mono text-sm font-semibold">id INTEGER PRIMARY KEY AUTOINCREMENT</p>
                    <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                        <li><code>INTEGER</code> : nombre entier</li>
                        <li><code>PRIMARY KEY</code> : c'est la clé primaire — unique et jamais vide</li>
                        <li><code>AUTOINCREMENT</code> : la base de données remplit ce champ toute seule (1, 2, 3, 4...). Vous n'avez jamais besoin de le remplir vous-même.</li>
                    </ul>
                </div>
                <div className="p-3 bg-white border rounded-lg shadow-sm">
                    <p className="font-mono text-sm font-semibold">nom VARCHAR(100) NOT NULL</p>
                    <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                        <li><code>VARCHAR(100)</code> : texte de 100 caractères maximum</li>
                        <li><code>NOT NULL</code> : ce champ est obligatoire, il ne peut pas être vide</li>
                    </ul>
                </div>
                <div className="p-3 bg-white border rounded-lg shadow-sm">
                    <p className="font-mono text-sm font-semibold">email VARCHAR(255) UNIQUE NOT NULL</p>
                    <ul className="list-disc list-inside text-sm mt-1">
                        <li><code>UNIQUE</code> : deux lignes ne peuvent pas avoir la même valeur dans ce champ</li>
                    </ul>
                </div>
                <div className="p-3 bg-white border rounded-lg shadow-sm">
                    <p className="font-mono text-sm font-semibold">adresse TEXT</p>
                    <p className="text-sm mt-1">Pas de contrainte → le champ est facultatif</p>
                </div>
                <div className="p-3 bg-white border rounded-lg shadow-sm">
                    <p className="font-mono text-sm font-semibold">date_inscription DATE DEFAULT CURRENT_DATE</p>
                    <p className="text-sm mt-1"><code>DEFAULT CURRENT_DATE</code> : si on ne précise pas la date, c'est la date du jour qui est utilisée automatiquement</p>
                </div>
            </div>

            <h4 className="mt-6 font-semibold">Les contraintes principales</h4>
            <div className="overflow-x-auto mt-2 not-prose">
                <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">Contrainte</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Signification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>PRIMARY KEY</code></td><td className="border border-gray-300 px-4 py-2">Clé primaire (unique + non null)</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>AUTOINCREMENT</code></td><td className="border border-gray-300 px-4 py-2">S'incrémente automatiquement</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>NOT NULL</code></td><td className="border border-gray-300 px-4 py-2">Champ obligatoire</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>UNIQUE</code></td><td className="border border-gray-300 px-4 py-2">Pas de doublon autorisé</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>DEFAULT valeur</code></td><td className="border border-gray-300 px-4 py-2">Valeur utilisée si non renseignée</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>FOREIGN KEY ... REFERENCES</code></td><td className="border border-gray-300 px-4 py-2">Clé étrangère</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 className="mt-6 font-semibold">Exemple avec une clé étrangère</h4>
            <pre className="code-block mt-2"><code>{`CREATE TABLE commandes (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    date_commande DATE NOT NULL DEFAULT CURRENT_DATE,
    statut        VARCHAR(50) NOT NULL DEFAULT 'en_attente',
    client_id     INTEGER NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);`}</code></pre>
            <p className="mt-2">La ligne <code>FOREIGN KEY (client_id) REFERENCES clients(id)</code> signifie : <strong>« Le champ client_id doit contenir une valeur qui existe dans le champ id de la table clients. »</strong></p>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold mb-2">Ordre de création important :</h4>
                <p>Si une table A référence une table B, <strong>il faut créer B avant A</strong>. On ne peut pas référencer une table qui n'existe pas encore.</p>
                <p className="mt-1">Exemple : créer <code>clients</code> AVANT <code>commandes</code> (car <code>commandes</code> a une clé étrangère vers <code>clients</code>).</p>
            </div>

            {/* Exercice 1 */}
            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Exercice 1 — À faire dans programiz.com</h4>
                <p><strong>Contexte :</strong> On gère un réseau informatique. On a besoin de trois tables : <code>salles</code>, <code>ordinateurs</code> et <code>interventions</code>.</p>
                <pre className="code-block mt-2"><code>{`salles (🔑 id, numero VARCHAR(10), batiment VARCHAR(50), nb_postes INT)
    ↓ 1-N
ordinateurs (🔑 id, numero_serie VARCHAR(100), marque VARCHAR(50),
             modele VARCHAR(100), etat VARCHAR(30), 🔗 salle_id)
    ↓ 1-N
interventions (🔑 id, date_intervention DATE, description TEXT,
               technicien VARCHAR(100), 🔗 ordinateur_id)`}</code></pre>
                <p className="mt-2"><strong>Consigne :</strong> Écrivez les 3 commandes <code>CREATE TABLE</code> dans le bon ordre. Chaque table doit avoir :</p>
                <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Une clé primaire <code>id</code> auto-incrémentée</li>
                    <li>Les contraintes <code>NOT NULL</code> sur les champs importants</li>
                    <li>Les clés étrangères déclarées avec <code>FOREIGN KEY ... REFERENCES</code></li>
                </ul>
            </div>
            <div className="mt-3 not-prose">
                <details className="p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Correction exercice 1</summary>
                    <pre className="code-block mt-3"><code>{`-- 1. D'abord les tables sans dépendance
CREATE TABLE salles (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    numero    VARCHAR(10) NOT NULL,
    batiment  VARCHAR(50) NOT NULL,
    nb_postes INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE ordinateurs (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    numero_serie VARCHAR(100) NOT NULL,
    marque       VARCHAR(50),
    modele       VARCHAR(100),
    etat         VARCHAR(30) NOT NULL DEFAULT 'fonctionnel',
    salle_id     INTEGER NOT NULL,
    FOREIGN KEY (salle_id) REFERENCES salles(id)
);

-- 2. Ensuite les tables qui dépendent des précédentes
CREATE TABLE interventions (
    id                INTEGER PRIMARY KEY AUTOINCREMENT,
    date_intervention DATE NOT NULL DEFAULT CURRENT_DATE,
    description       TEXT,
    technicien        VARCHAR(100),
    ordinateur_id     INTEGER NOT NULL,
    FOREIGN KEY (ordinateur_id) REFERENCES ordinateurs(id)
);`}</code></pre>
                </details>
            </div>

            {/* ======================== PARTIE 2 ======================== */}
            <h3 className="mt-8">Partie 2 — INSERT INTO : insérer des données</h3>
            <p><code>INSERT INTO</code> ajoute des enregistrements (des lignes) dans une table existante.</p>

            <h4 className="mt-6 font-semibold">Syntaxe</h4>
            <pre className="code-block mt-2"><code>{`INSERT INTO nom_table (champ1, champ2, champ3)
VALUES ('valeur1', 'valeur2', 'valeur3');`}</code></pre>

            <div className="mt-3 p-4 bg-green-50 border border-green-200 rounded-lg not-prose">
                <h4 className="font-semibold mb-2">Règles importantes :</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Les <strong>textes</strong> sont entre guillemets simples <code>'...'</code></li>
                    <li>Les <strong>nombres</strong> sont sans guillemets</li>
                    <li>On ne met <strong>pas</strong> les champs <code>AUTOINCREMENT</code> (la base s'en charge)</li>
                    <li>On peut <strong>omettre</strong> les champs qui ont une valeur <code>DEFAULT</code></li>
                </ul>
            </div>

            <h4 className="mt-6 font-semibold">Exemples</h4>
            <p><strong>Insérer un client :</strong></p>
            <pre className="code-block mt-2"><code>{`INSERT INTO clients (nom, prenom, email, adresse)
VALUES ('Dupont', 'Marie', 'marie.dupont@email.com',
        '12 rue de la Paix, Paris');`}</code></pre>
            <p className="mt-2 text-sm text-gray-600">On n'a pas mis <code>id</code> (AUTOINCREMENT) ni <code>date_inscription</code> (DEFAULT CURRENT_DATE).</p>

            <p className="mt-4"><strong>Insérer plusieurs lignes d'un coup :</strong></p>
            <pre className="code-block mt-2"><code>{`INSERT INTO salles (numero, batiment, nb_postes) VALUES
('A101', 'Bâtiment A', 20),
('A102', 'Bâtiment A', 15),
('B201', 'Bâtiment B', 25),
('B202', 'Bâtiment B', 30);`}</code></pre>

            {/* Exercice 2 */}
            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Exercice 2 — À faire dans programiz.com</h4>
                <p><strong>Contexte :</strong> Après avoir créé les 3 tables de l'exercice 1, peuplez-les avec des données réalistes.</p>
                <p className="mt-2"><strong>Consigne :</strong> Insérez dans l'ordre :</p>
                <ol className="list-decimal ml-6 mt-1">
                    <li>Au moins <strong>3 salles</strong> (différents bâtiments)</li>
                    <li>Au moins <strong>5 ordinateurs</strong> répartis dans les salles</li>
                    <li>Au moins <strong>3 interventions</strong> sur différents ordinateurs</li>
                </ol>
                <p className="mt-2 text-sm">Utilisez des données cohérentes avec un lycée (marques : Dell, HP, Lenovo ; états : fonctionnel, en panne, en maintenance).</p>
            </div>
            <div className="mt-3 not-prose">
                <details className="p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Correction exercice 2</summary>
                    <pre className="code-block mt-3"><code>{`-- Salles
INSERT INTO salles (numero, batiment, nb_postes) VALUES
('101', 'Atelier A', 20),
('102', 'Atelier A', 18),
('201', 'Atelier B', 24);

-- Ordinateurs
INSERT INTO ordinateurs (numero_serie, marque, modele, etat, salle_id) VALUES
('DELL-2024-001', 'Dell', 'OptiPlex 5090', 'fonctionnel', 1),
('DELL-2024-002', 'Dell', 'OptiPlex 5090', 'en panne', 1),
('HP-2023-042', 'HP', 'ProDesk 600', 'fonctionnel', 1),
('HP-2023-043', 'HP', 'ProDesk 600', 'en maintenance', 2),
('LNVO-2022-007', 'Lenovo', 'ThinkCentre M75q', 'fonctionnel', 3);

-- Interventions
INSERT INTO interventions (description, technicien, ordinateur_id) VALUES
('Écran noir au démarrage — vérification alimentation', 'Lucas Martin', 2),
('Remplacement ventilateur processeur', 'Sarah Benali', 4),
('Mise à jour BIOS et nettoyage', 'Lucas Martin', 1);`}</code></pre>
                </details>
            </div>

            {/* ======================== PARTIE 3 ======================== */}
            <h3 className="mt-8">Partie 3 — SELECT : lire des données</h3>
            <p><code>SELECT</code> est la commande la plus utilisée en SQL. Elle permet de <strong>récupérer</strong> des données.</p>

            {/* 3.1 */}
            <h4 className="mt-6 font-semibold">3.1 — SELECT de base</h4>
            <pre className="code-block mt-2"><code>{`SELECT champ1, champ2 FROM nom_table;`}</code></pre>

            <div className="space-y-3 mt-3 not-prose">
                <div className="p-3 bg-white border rounded-lg shadow-sm">
                    <p className="font-semibold text-sm">Tout sélectionner (l'étoile = tous les champs) :</p>
                    <pre className="code-block mt-1"><code>{`SELECT * FROM clients;`}</code></pre>
                </div>
                <div className="p-3 bg-white border rounded-lg shadow-sm">
                    <p className="font-semibold text-sm">Sélectionner des champs précis :</p>
                    <pre className="code-block mt-1"><code>{`SELECT nom, prenom, email FROM clients;`}</code></pre>
                </div>
                <div className="p-3 bg-white border rounded-lg shadow-sm">
                    <p className="font-semibold text-sm">Donner un alias (un nom temporaire) à une colonne :</p>
                    <pre className="code-block mt-1"><code>{`SELECT nom AS Nom_de_famille, prenom AS Prénom FROM clients;`}</code></pre>
                </div>
            </div>

            {/* 3.2 */}
            <h4 className="mt-6 font-semibold">3.2 — WHERE : filtrer les résultats</h4>
            <p><code>WHERE</code> ajoute une condition pour ne récupérer que certaines lignes.</p>
            <pre className="code-block mt-2"><code>{`SELECT * FROM ordinateurs WHERE etat = 'en panne';`}</code></pre>

            <h4 className="mt-4 font-semibold">Les opérateurs de comparaison</h4>
            <div className="overflow-x-auto mt-2 not-prose">
                <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">Opérateur</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Signification</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Exemple</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>=</code></td><td className="border border-gray-300 px-4 py-2">Égal à</td><td className="border border-gray-300 px-4 py-2"><code>etat = 'fonctionnel'</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>!=</code> ou <code>&lt;&gt;</code></td><td className="border border-gray-300 px-4 py-2">Différent de</td><td className="border border-gray-300 px-4 py-2"><code>etat != 'fonctionnel'</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>&lt;</code></td><td className="border border-gray-300 px-4 py-2">Inférieur à</td><td className="border border-gray-300 px-4 py-2"><code>nb_postes &lt; 20</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>&gt;</code></td><td className="border border-gray-300 px-4 py-2">Supérieur à</td><td className="border border-gray-300 px-4 py-2"><code>nb_postes &gt; 10</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>&lt;=</code></td><td className="border border-gray-300 px-4 py-2">Inférieur ou égal</td><td className="border border-gray-300 px-4 py-2"><code>nb_postes &lt;= 20</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>&gt;=</code></td><td className="border border-gray-300 px-4 py-2">Supérieur ou égal</td><td className="border border-gray-300 px-4 py-2"><code>nb_postes &gt;= 15</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>LIKE</code></td><td className="border border-gray-300 px-4 py-2">Recherche partielle</td><td className="border border-gray-300 px-4 py-2"><code>nom LIKE 'Du%'</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>IN</code></td><td className="border border-gray-300 px-4 py-2">Dans une liste</td><td className="border border-gray-300 px-4 py-2"><code>etat IN ('en panne', 'en maintenance')</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>BETWEEN</code></td><td className="border border-gray-300 px-4 py-2">Entre deux valeurs</td><td className="border border-gray-300 px-4 py-2"><code>nb_postes BETWEEN 15 AND 25</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>IS NULL</code></td><td className="border border-gray-300 px-4 py-2">Est vide</td><td className="border border-gray-300 px-4 py-2"><code>description IS NULL</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>IS NOT NULL</code></td><td className="border border-gray-300 px-4 py-2">N'est pas vide</td><td className="border border-gray-300 px-4 py-2"><code>description IS NOT NULL</code></td></tr>
                    </tbody>
                </table>
            </div>

            <h4 className="mt-4 font-semibold">Combiner les conditions avec AND / OR</h4>
            <pre className="code-block mt-2"><code>{`-- Les ordinateurs en panne dans la salle 1
SELECT * FROM ordinateurs WHERE etat = 'en panne' AND salle_id = 1;

-- Les ordinateurs en panne OU en maintenance
SELECT * FROM ordinateurs WHERE etat = 'en panne' OR etat = 'en maintenance';`}</code></pre>
            <p className="mt-2"><strong>Raccourci avec IN pour le OR :</strong></p>
            <pre className="code-block mt-1"><code>{`SELECT * FROM ordinateurs WHERE etat IN ('en panne', 'en maintenance');`}</code></pre>

            <h4 className="mt-4 font-semibold">Recherche partielle avec LIKE</h4>
            <p>Le <code>%</code> remplace n'importe quels caractères.</p>
            <pre className="code-block mt-2"><code>{`-- Tous les clients dont le nom commence par 'Du'
SELECT * FROM clients WHERE nom LIKE 'Du%';

-- Tous les clients dont l'email contient 'gmail'
SELECT * FROM clients WHERE email LIKE '%gmail%';`}</code></pre>

            {/* Exercice 3 */}
            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Exercice 3 — À faire dans programiz.com</h4>
                <p>En utilisant les données insérées à l'exercice 2, écrivez les requêtes SQL pour :</p>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                    <li>Afficher tous les ordinateurs de la salle 1</li>
                    <li>Afficher les ordinateurs qui ne sont PAS en état <code>'fonctionnel'</code></li>
                    <li>Afficher tous les ordinateurs de marque <code>'Dell'</code> ou <code>'HP'</code></li>
                    <li>Afficher les salles qui ont plus de 20 postes</li>
                    <li>Afficher les interventions dont la description contient le mot <code>'ventilateur'</code></li>
                </ol>
            </div>
            <div className="mt-3 not-prose">
                <details className="p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Correction exercice 3</summary>
                    <pre className="code-block mt-3"><code>{`-- 1.
SELECT * FROM ordinateurs WHERE salle_id = 1;

-- 2.
SELECT * FROM ordinateurs WHERE etat != 'fonctionnel';

-- 3.
SELECT * FROM ordinateurs WHERE marque IN ('Dell', 'HP');
-- ou :
SELECT * FROM ordinateurs WHERE marque = 'Dell' OR marque = 'HP';

-- 4.
SELECT * FROM salles WHERE nb_postes > 20;

-- 5.
SELECT * FROM interventions WHERE description LIKE '%ventilateur%';`}</code></pre>
                </details>
            </div>

            {/* 3.3 */}
            <h4 className="mt-6 font-semibold">3.3 — ORDER BY : trier les résultats</h4>
            <pre className="code-block mt-2"><code>{`-- Trier les salles par nombre de postes (croissant)
SELECT * FROM salles ORDER BY nb_postes ASC;

-- Trier les salles par nombre de postes (décroissant)
SELECT * FROM salles ORDER BY nb_postes DESC;

-- Trier par plusieurs critères
SELECT * FROM salles ORDER BY batiment ASC, numero ASC;`}</code></pre>
            <p className="mt-2"><code>ASC</code> = croissant (A→Z, 0→9) — c'est la valeur par défaut. <code>DESC</code> = décroissant (Z→A, 9→0).</p>

            {/* 3.4 */}
            <h4 className="mt-6 font-semibold">3.4 — LIMIT : limiter le nombre de résultats</h4>
            <pre className="code-block mt-2"><code>{`-- Les 3 premières interventions
SELECT * FROM interventions LIMIT 3;

-- Le dernier ordinateur ajouté (id le plus élevé)
SELECT * FROM ordinateurs ORDER BY id DESC LIMIT 1;`}</code></pre>

            {/* Exercice 4 */}
            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Exercice 4 — À faire dans programiz.com</h4>
                <ol className="list-decimal ml-6 space-y-1">
                    <li>Afficher les ordinateurs triés par marque (ordre alphabétique)</li>
                    <li>Afficher les salles triées du plus grand nombre de postes au plus petit</li>
                    <li>Afficher les 2 interventions les plus récentes (par date décroissante)</li>
                    <li>Afficher les ordinateurs fonctionnels, triés par salle</li>
                </ol>
            </div>
            <div className="mt-3 not-prose">
                <details className="p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Correction exercice 4</summary>
                    <pre className="code-block mt-3"><code>{`-- 1.
SELECT * FROM ordinateurs ORDER BY marque ASC;

-- 2.
SELECT * FROM salles ORDER BY nb_postes DESC;

-- 3.
SELECT * FROM interventions ORDER BY date_intervention DESC LIMIT 2;

-- 4.
SELECT * FROM ordinateurs WHERE etat = 'fonctionnel' ORDER BY salle_id ASC;`}</code></pre>
                </details>
            </div>

            {/* 3.5 */}
            <h4 className="mt-6 font-semibold">3.5 — Fonctions d'agrégation : COUNT, SUM, AVG, MIN, MAX</h4>
            <p>Ces fonctions font des calculs sur un ensemble de lignes.</p>
            <div className="overflow-x-auto mt-2 not-prose">
                <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">Fonction</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Exemple</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>COUNT(*)</code></td><td className="border border-gray-300 px-4 py-2">Compte le nombre de lignes</td><td className="border border-gray-300 px-4 py-2"><code>SELECT COUNT(*) FROM ordinateurs;</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>COUNT(champ)</code></td><td className="border border-gray-300 px-4 py-2">Compte les valeurs non nulles</td><td className="border border-gray-300 px-4 py-2"><code>SELECT COUNT(description) FROM interventions;</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>SUM(champ)</code></td><td className="border border-gray-300 px-4 py-2">Somme des valeurs</td><td className="border border-gray-300 px-4 py-2"><code>SELECT SUM(nb_postes) FROM salles;</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>AVG(champ)</code></td><td className="border border-gray-300 px-4 py-2">Moyenne des valeurs</td><td className="border border-gray-300 px-4 py-2"><code>SELECT AVG(nb_postes) FROM salles;</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>MIN(champ)</code></td><td className="border border-gray-300 px-4 py-2">Valeur minimale</td><td className="border border-gray-300 px-4 py-2"><code>SELECT MIN(nb_postes) FROM salles;</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>MAX(champ)</code></td><td className="border border-gray-300 px-4 py-2">Valeur maximale</td><td className="border border-gray-300 px-4 py-2"><code>SELECT MAX(nb_postes) FROM salles;</code></td></tr>
                    </tbody>
                </table>
            </div>
            <pre className="code-block mt-3"><code>{`-- Combien d'ordinateurs au total ?
SELECT COUNT(*) AS total_ordinateurs FROM ordinateurs;

-- Combien de postes en tout ?
SELECT SUM(nb_postes) AS total_postes FROM salles;

-- Moyenne du nombre de postes par salle
SELECT AVG(nb_postes) AS moyenne_postes FROM salles;`}</code></pre>

            {/* 3.6 */}
            <h4 className="mt-6 font-semibold">3.6 — GROUP BY : grouper et agréger</h4>
            <p><code>GROUP BY</code> groupe les lignes qui ont la même valeur dans un champ, puis permet de faire des calculs par groupe.</p>
            <pre className="code-block mt-2"><code>{`-- Compter les ordinateurs par état
SELECT etat, COUNT(*) AS nombre
FROM ordinateurs
GROUP BY etat;

-- Compter les ordinateurs par marque
SELECT marque, COUNT(*) AS nombre
FROM ordinateurs
GROUP BY marque
ORDER BY nombre DESC;

-- Nombre total de postes par bâtiment
SELECT batiment, SUM(nb_postes) AS total_postes
FROM salles
GROUP BY batiment;`}</code></pre>

            {/* Exercice 5 */}
            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Exercice 5 — À faire dans programiz.com</h4>
                <ol className="list-decimal ml-6 space-y-1">
                    <li>Compter le nombre d'ordinateurs dans chaque salle</li>
                    <li>Afficher combien il y a d'ordinateurs par état</li>
                    <li>Trouver le nombre de postes moyen par bâtiment</li>
                    <li>Compter combien d'interventions a réalisé chaque technicien</li>
                </ol>
            </div>
            <div className="mt-3 not-prose">
                <details className="p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Correction exercice 5</summary>
                    <pre className="code-block mt-3"><code>{`-- 1.
SELECT salle_id, COUNT(*) AS nb_ordinateurs
FROM ordinateurs
GROUP BY salle_id;

-- 2.
SELECT etat, COUNT(*) AS nombre
FROM ordinateurs
GROUP BY etat;

-- 3.
SELECT batiment, AVG(nb_postes) AS moyenne_postes
FROM salles
GROUP BY batiment;

-- 4.
SELECT technicien, COUNT(*) AS nb_interventions
FROM interventions
GROUP BY technicien;`}</code></pre>
                </details>
            </div>

            {/* ======================== PARTIE 4 ======================== */}
            <h3 className="mt-8">Partie 4 — UPDATE et DELETE : modifier et supprimer</h3>

            <h4 className="mt-4 font-semibold">4.1 — UPDATE : modifier des données existantes</h4>
            <pre className="code-block mt-2"><code>{`UPDATE nom_table SET champ1 = 'nouvelle_valeur' WHERE condition;`}</code></pre>
            <pre className="code-block mt-3"><code>{`-- Changer l'état d'un ordinateur
UPDATE ordinateurs SET etat = 'fonctionnel' WHERE id = 2;

-- Changer l'email d'un client
UPDATE clients SET email = 'nouveau@email.com' WHERE id = 1;

-- Mettre à jour plusieurs champs en même temps
UPDATE ordinateurs
SET etat = 'en maintenance', salle_id = 2
WHERE id = 4;`}</code></pre>

            <div className="mt-4 p-4 bg-red-50 border-2 border-red-400 rounded-lg">
                <h4 className="font-semibold text-red-700 mb-2">ATTENTION — N'oubliez JAMAIS le WHERE !</h4>
                <pre className="code-block mt-2"><code>{`-- ✅ CORRECT : modifie uniquement l'ordinateur n°2
UPDATE ordinateurs SET etat = 'fonctionnel' WHERE id = 2;

-- ❌ DANGER : modifie TOUS les ordinateurs !
UPDATE ordinateurs SET etat = 'fonctionnel';`}</code></pre>
                <p className="mt-2 text-sm text-red-700">Sans <code>WHERE</code>, la commande s'applique à <strong>toutes les lignes</strong> de la table. C'est une erreur irréversible.</p>
            </div>

            <h4 className="mt-6 font-semibold">4.2 — DELETE : supprimer des données</h4>
            <pre className="code-block mt-2"><code>{`DELETE FROM nom_table WHERE condition;`}</code></pre>
            <pre className="code-block mt-3"><code>{`-- Supprimer un ordinateur précis
DELETE FROM ordinateurs WHERE id = 5;

-- Supprimer toutes les interventions d'un technicien
DELETE FROM interventions WHERE technicien = 'Lucas Martin';`}</code></pre>

            <div className="mt-4 p-4 bg-red-50 border-2 border-red-400 rounded-lg">
                <h4 className="font-semibold text-red-700 mb-2">MÊME DANGER avec DELETE !</h4>
                <pre className="code-block mt-2"><code>{`-- ✅ CORRECT : supprime uniquement l'ordinateur n°5
DELETE FROM ordinateurs WHERE id = 5;

-- ❌ DANGER : supprime TOUS les ordinateurs !
DELETE FROM ordinateurs;`}</code></pre>
            </div>

            {/* Exercice 6 */}
            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Exercice 6 — À faire dans programiz.com</h4>
                <ol className="list-decimal ml-6 space-y-1">
                    <li>Mettez à jour l'état de l'ordinateur n°4 : passez-le de <code>'en maintenance'</code> à <code>'fonctionnel'</code></li>
                    <li>Changez le nombre de postes de la salle <code>'101'</code> : passez-le à 22</li>
                    <li>Ajoutez un ordinateur, puis supprimez-le</li>
                    <li>Modifiez le technicien de l'intervention n°1 (remplacez son nom par le vôtre)</li>
                </ol>
            </div>
            <div className="mt-3 not-prose">
                <details className="p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Correction exercice 6</summary>
                    <pre className="code-block mt-3"><code>{`-- 1.
UPDATE ordinateurs SET etat = 'fonctionnel' WHERE id = 4;

-- 2.
UPDATE salles SET nb_postes = 22 WHERE numero = '101';

-- 3.
INSERT INTO ordinateurs (numero_serie, marque, etat, salle_id)
VALUES ('TEST-999', 'Test', 'fonctionnel', 1);
DELETE FROM ordinateurs WHERE numero_serie = 'TEST-999';

-- 4.
UPDATE interventions SET technicien = 'VotreNom' WHERE id = 1;`}</code></pre>
                </details>
            </div>

            {/* ======================== PARTIE 5 ======================== */}
            <h3 className="mt-8">Partie 5 — INNER JOIN : combiner plusieurs tables</h3>

            <h4 className="mt-4 font-semibold">Le problème</h4>
            <p>On a des données réparties dans plusieurs tables. Comment afficher le <strong>numéro de la salle</strong> à côté de chaque ordinateur, quand la salle est dans une autre table ?</p>
            <p className="mt-2">La table <code>ordinateurs</code> a un champ <code>salle_id</code>, mais pas le numéro ni le bâtiment. Ces informations sont dans la table <code>salles</code>.</p>

            <h4 className="mt-6 font-semibold">La solution : la jointure</h4>
            <p>Une <strong>jointure</strong> combine les lignes de deux tables en utilisant leur relation (la clé étrangère).</p>

            <h4 className="mt-4 font-semibold">INNER JOIN — Syntaxe</h4>
            <pre className="code-block mt-2"><code>{`SELECT champs
FROM table1
INNER JOIN table2 ON table1.cle_etrangere = table2.cle_primaire;`}</code></pre>

            <h4 className="mt-6 font-semibold">Exemple concret</h4>
            <pre className="code-block mt-2"><code>{`-- Afficher chaque ordinateur avec le numéro et le bâtiment de sa salle
SELECT
    ordinateurs.numero_serie,
    ordinateurs.marque,
    ordinateurs.etat,
    salles.numero AS salle,
    salles.batiment
FROM ordinateurs
INNER JOIN salles ON ordinateurs.salle_id = salles.id;`}</code></pre>

            <h4 className="mt-6 font-semibold">Utiliser des alias pour simplifier</h4>
            <p>On peut donner un alias court à chaque table pour éviter de répéter les longs noms.</p>
            <pre className="code-block mt-2"><code>{`SELECT
    o.numero_serie,
    o.marque,
    o.etat,
    s.numero AS salle,
    s.batiment
FROM ordinateurs o
INNER JOIN salles s ON o.salle_id = s.id;`}</code></pre>
            <p className="mt-2 text-sm text-gray-600">Ici <code>o</code> est l'alias de <code>ordinateurs</code>, <code>s</code> est l'alias de <code>salles</code>.</p>

            <h4 className="mt-6 font-semibold">Ajouter un filtre sur une jointure</h4>
            <pre className="code-block mt-2"><code>{`-- Tous les ordinateurs en panne, avec le nom de leur salle
SELECT o.numero_serie, o.marque, o.etat, s.numero AS salle
FROM ordinateurs o
INNER JOIN salles s ON o.salle_id = s.id
WHERE o.etat = 'en panne';`}</code></pre>

            <h4 className="mt-6 font-semibold">Jointure sur 3 tables</h4>
            <p>On peut enchaîner les jointures.</p>
            <pre className="code-block mt-2"><code>{`-- Interventions avec le nom de l'ordinateur et la salle
SELECT
    i.date_intervention,
    i.description,
    i.technicien,
    o.numero_serie,
    o.marque,
    s.numero AS salle
FROM interventions i
INNER JOIN ordinateurs o ON i.ordinateur_id = o.id
INNER JOIN salles s ON o.salle_id = s.id;`}</code></pre>

            {/* Exercice 7 */}
            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h4 className="font-semibold mb-2">Exercice 7 — À faire dans programiz.com</h4>
                <ol className="list-decimal ml-6 space-y-1">
                    <li>Affichez tous les ordinateurs avec le numéro et le bâtiment de leur salle</li>
                    <li>Affichez les ordinateurs <code>'en panne'</code> avec le numéro de leur salle, triés par bâtiment</li>
                    <li>Affichez toutes les interventions avec le numéro de série de l'ordinateur concerné et le technicien</li>
                    <li>Affichez les interventions complètes : date, description, technicien, numéro de série ET numéro de salle (jointure sur 3 tables)</li>
                    <li>Comptez combien d'ordinateurs il y a dans chaque bâtiment (jointure + GROUP BY)</li>
                </ol>
            </div>
            <div className="mt-3 not-prose">
                <details className="p-4 bg-white border rounded-lg shadow-sm">
                    <summary className="font-semibold cursor-pointer">Correction exercice 7</summary>
                    <pre className="code-block mt-3"><code>{`-- 1.
SELECT o.numero_serie, o.marque, o.etat, s.numero, s.batiment
FROM ordinateurs o
INNER JOIN salles s ON o.salle_id = s.id;

-- 2.
SELECT o.numero_serie, o.marque, s.numero AS salle, s.batiment
FROM ordinateurs o
INNER JOIN salles s ON o.salle_id = s.id
WHERE o.etat = 'en panne'
ORDER BY s.batiment ASC;

-- 3.
SELECT i.date_intervention, i.description, i.technicien, o.numero_serie
FROM interventions i
INNER JOIN ordinateurs o ON i.ordinateur_id = o.id;

-- 4.
SELECT i.date_intervention, i.description, i.technicien,
       o.numero_serie, s.numero AS salle
FROM interventions i
INNER JOIN ordinateurs o ON i.ordinateur_id = o.id
INNER JOIN salles s ON o.salle_id = s.id;

-- 5.
SELECT s.batiment, COUNT(o.id) AS nb_ordinateurs
FROM ordinateurs o
INNER JOIN salles s ON o.salle_id = s.id
GROUP BY s.batiment;`}</code></pre>
                </details>
            </div>

            {/* ======================== RÉCAPITULATIF ======================== */}
            <h3 className="mt-8">Récapitulatif — L'ordre d'une requête SELECT complète</h3>
            <p>Une requête <code>SELECT</code> peut comporter plusieurs clauses. Elles doivent toujours être dans cet ordre :</p>
            <pre className="code-block mt-2"><code>{`SELECT    champs (ou *)
FROM      table_principale
JOIN      autre_table ON condition_jointure
WHERE     condition_filtre
GROUP BY  champ_de_regroupement
ORDER BY  champ_de_tri ASC/DESC
LIMIT     nombre_de_résultats;`}</code></pre>
            <p className="mt-2">Seuls <code>SELECT</code> et <code>FROM</code> sont obligatoires. Le reste est optionnel.</p>

            <h4 className="mt-6 font-semibold">Mémo des commandes SQL vues en cours</h4>
            <div className="overflow-x-auto mt-2 not-prose">
                <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">Commande</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Rôle</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Exemple court</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>CREATE TABLE</code></td><td className="border border-gray-300 px-4 py-2">Créer une table</td><td className="border border-gray-300 px-4 py-2"><code>CREATE TABLE clients (id INTEGER PRIMARY KEY, nom TEXT);</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>INSERT INTO</code></td><td className="border border-gray-300 px-4 py-2">Ajouter une ligne</td><td className="border border-gray-300 px-4 py-2"><code>INSERT INTO clients (nom) VALUES ('Dupont');</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>SELECT</code></td><td className="border border-gray-300 px-4 py-2">Lire des données</td><td className="border border-gray-300 px-4 py-2"><code>SELECT * FROM clients;</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>WHERE</code></td><td className="border border-gray-300 px-4 py-2">Filtrer</td><td className="border border-gray-300 px-4 py-2"><code>WHERE etat = 'en panne'</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>ORDER BY</code></td><td className="border border-gray-300 px-4 py-2">Trier</td><td className="border border-gray-300 px-4 py-2"><code>ORDER BY nom ASC</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>LIMIT</code></td><td className="border border-gray-300 px-4 py-2">Limiter</td><td className="border border-gray-300 px-4 py-2"><code>LIMIT 10</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>COUNT</code></td><td className="border border-gray-300 px-4 py-2">Compter</td><td className="border border-gray-300 px-4 py-2"><code>SELECT COUNT(*) FROM clients;</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>GROUP BY</code></td><td className="border border-gray-300 px-4 py-2">Grouper</td><td className="border border-gray-300 px-4 py-2"><code>GROUP BY marque</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>UPDATE ... SET</code></td><td className="border border-gray-300 px-4 py-2">Modifier</td><td className="border border-gray-300 px-4 py-2"><code>UPDATE clients SET nom = 'Martin' WHERE id = 1;</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>DELETE FROM</code></td><td className="border border-gray-300 px-4 py-2">Supprimer</td><td className="border border-gray-300 px-4 py-2"><code>DELETE FROM clients WHERE id = 1;</code></td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2"><code>INNER JOIN</code></td><td className="border border-gray-300 px-4 py-2">Joindre deux tables</td><td className="border border-gray-300 px-4 py-2"><code>FROM a INNER JOIN b ON a.b_id = b.id</code></td></tr>
                    </tbody>
                </table>
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
