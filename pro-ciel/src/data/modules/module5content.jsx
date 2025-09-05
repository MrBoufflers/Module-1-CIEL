import React from 'react';

export const module5Content = {
    course: (
        <>
            <h3>a. Définition et concepts clés</h3>
            <p>Une base de données (BDD), c'est une manière <strong>organisée et structurée</strong> de stocker de l'information pour pouvoir la retrouver et la manipuler facilement. On s'intéresse au type le plus courant : les <strong>bases de données relationnelles</strong>.</p>
            <p>L'idée est de ranger les données dans des <strong>tables</strong> (comme des tableaux Excel).</p>
            <ul>
                <li><strong>Table :</strong> Représente un type d'objet (ex: `Eleves`).</li>
                <li><strong>Champ (ou Colonne) :</strong> Une caractéristique de cet objet (ex: `nom`).</li>
                <li><strong>Enregistrement (ou Ligne) :</strong> Un objet spécifique (ex: l'élève Dupont).</li>
            </ul>
            <h4>Les Clés : le Super-Pouvoir des BDD Relationnelles</h4>
            <ul>
                <li><strong>Clé Primaire (PK) :</strong> Un identifiant unique pour chaque ligne d'une table (ex: `id_eleve`). Elle ne peut pas être vide.</li>
                <li><strong>Clé Étrangère (FK) :</strong> Un champ dans une table qui fait référence à la clé primaire d'une autre table. C'est ce qui crée la <strong>relation</strong>.</li>
            </ul>
            <h3>b. Modélisation : exemple progressif d'un blog</h3>
            <p><strong>Étape 1 : Les articles.</strong> On commence avec une simple table pour stocker nos articles.</p>
            <div className="not-prose p-4 bg-white border rounded-lg shadow-sm w-full md:w-2/3 mx-auto">
                <h4 className="font-bold text-center">Table `Articles`</h4>
                <table className="w-full mt-2 text-sm"><thead><tr className="bg-gray-100"><th>id_article (PK)</th><th>titre</th><th>contenu</th></tr></thead><tbody><tr><td className="border p-1 text-center font-bold text-red-600">1</td><td className="border p-1">Mon premier article</td><td className="border p-1">...</td></tr><tr><td className="border p-1 text-center font-bold text-red-600">2</td><td className="border p-1">Un autre sujet</td><td className="border p-1">...</td></tr></tbody></table>
            </div>
            <p className="mt-4"><strong>Étape 2 : Ajout des auteurs (Relation 1-N).</strong> Un auteur peut écrire plusieurs articles, mais un article n'est écrit que par un seul auteur. C'est une relation "un à plusieurs". On ajoute une table `Auteurs` et une clé étrangère dans `Articles`.</p>
            <div className="not-prose flex flex-col md:flex-row gap-4 items-start">
                <div className="p-4 bg-white border rounded-lg shadow-sm w-full md:w-1/2"><h4 className="font-bold text-center">Table `Auteurs`</h4><table className="w-full mt-2 text-sm"><thead><tr className="bg-gray-100"><th>id_auteur (PK)</th><th>nom_auteur</th></tr></thead><tbody><tr><td className="border p-1 text-center font-bold text-red-600">10</td><td className="border p-1">Alice</td></tr><tr><td className="border p-1 text-center font-bold text-red-600">11</td><td className="border p-1">Bob</td></tr></tbody></table></div>
                <div className="p-4 bg-white border rounded-lg shadow-sm w-full md:w-1/2"><h4 className="font-bold text-center">Table `Articles`</h4><table className="w-full mt-2 text-sm"><thead><tr className="bg-gray-100"><th>id_article (PK)</th><th>titre</th><th>id_auteur (FK)</th></tr></thead><tbody><tr><td className="border p-1 text-center">1</td><td className="border p-1">Mon premier article</td><td className="border p-1 text-center bg-blue-100 font-bold text-blue-600">10</td></tr><tr><td className="border p-1 text-center">2</td><td className="border p-1">Un autre sujet</td><td className="border p-1 text-center bg-blue-100 font-bold text-blue-600">10</td></tr></tbody></table></div>
            </div>
            <p className="mt-4"><strong>Étape 3 : Ajout des catégories (Relation N-N).</strong> Un article peut appartenir à plusieurs catégories (ex: "Tech" et "Web"), et une catégorie peut contenir plusieurs articles. C'est une relation "plusieurs à plusieurs". On a besoin d'une <strong>table de liaison</strong>.</p>
            <div className="not-prose grid md:grid-cols-3 gap-4 text-sm items-start">
                <div className="p-2 border rounded bg-gray-50"><strong>Table `Articles`</strong><ul className="list-disc pl-5 mt-1"><li>id_article (PK)</li><li>titre</li></ul></div>
                <div className="p-2 border rounded bg-red-50"><strong>Table de liaison `Article_Categories`</strong><ul className="list-disc pl-5 mt-1"><li>id_article (FK)</li><li>id_categorie (FK)</li></ul></div>
                <div className="p-2 border rounded bg-gray-50"><strong>Table `Categories`</strong><ul className="list-disc pl-5 mt-1"><li>id_categorie (PK)</li><li>nom_categorie</li></ul></div>
            </div>
        </>
    ),
    tp: (
         <>
            <h3>TP : Modéliser la Base de Données de Netflix</h3>
            <p><strong>Objectif :</strong> Passer d'un besoin complexe à un modèle de données structuré.</p>
            <h4>Déroulé Détaillé du TP</h4>
            <ol className="list-decimal list-inside space-y-3">
                <li><strong>Phase 1 : Brainstorming (30 min)</strong><p>Au tableau, lister les types d'informations visibles sur Netflix : films, séries, acteurs, genres, profils, etc. Ce seront nos tables.</p></li>
                <li><strong>Phase 2 : Définir les tables et les champs (45 min)</strong><p>En groupes, définir les champs pour chaque table. Ex: Pour `Films` -{'>'} `id_film` (PK), `titre`, `description`, `annee_sortie`...</p><p>Poser la question piège : "Comment lier un film à ses acteurs ?" pour les amener à la phase suivante.</p></li>
                <li><strong>Phase 3 : Définir les relations (45 min)</strong><p>Introduire le concept de <strong>table de liaison</strong> pour les relations "plusieurs à plusieurs". Ex: un film a plusieurs acteurs, un acteur joue dans plusieurs films.</p><p>Créer la table `Film_Acteurs` avec seulement deux champs : `id_film` (FK) et `id_acteur` (FK).</p><p>Identifier d'autres relations : "un à plusieurs" (une Série a plusieurs Episodes) qui ne nécessite qu'une FK dans la table `Episodes`.</p></li>
            </ol>
            {/* <h4>Schéma Final à obtenir</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm not-prose">
                <div className="border p-2 rounded bg-gray-50"><strong>Entités Principales:</strong><ul className="list-disc pl-5 mt-1"><li>Utilisateurs</li><li>Profils</li><li>Films</li><li>Series</li><li>Acteurs</li><li>Genres</li></ul></div>
                <div className="border p-2 rounded bg-gray-50"><strong>Relations 1-N:</strong><ul className="list-disc pl-5 mt-1"><li>Utilisateurs -{'>'} Profils</li><li>Series -{'>'} Episodes</li></ul></div>
                <div className="border p-2 rounded bg-red-50"><strong>Tables de Liaison (N-N):</strong><ul className="list-disc pl-5 mt-1"><li>Film_Acteurs</li><li>Film_Genres</li><li>Serie_Acteurs</li><li>Serie_Genres</li></ul></div>
            </div> */}
        </>
    )
};