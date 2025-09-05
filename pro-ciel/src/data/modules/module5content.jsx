import React from 'react';
import ChallengeCard from '../../components/molecules/ChallengeCard';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';

const challengesData = [
    {
        level: "Niveau 1 (Simple)",
        title: "Gestion d'une Bibliothèque Personnelle",
        context: "Vous voulez créer une base de données pour cataloguer vos livres. L'objectif est de savoir quels livres vous possédez et qui les a écrits.",
        entities: "Auteurs, Livres.",
        relations: [
            "Un auteur peut avoir écrit plusieurs livres.",
            "Un livre n'est écrit que par un seul auteur (pour simplifier)."
        ]
    },
    {
        level: "Niveau 2 (Moyen)",
        title: "Site de Recettes de Cuisine",
        context: "Vous lancez un site web où les utilisateurs peuvent trouver des recettes. Une recette est composée de plusieurs ingrédients et appartient à une catégorie (entrée, plat, dessert).",
        entities: "Recettes, Ingrédients, Catégories.",
        relations: [
            "Une recette appartient à une seule catégorie.",
            "Une catégorie peut contenir plusieurs recettes.",
            "Une recette est composée de plusieurs ingrédients.",
            "Un même ingrédient peut être utilisé dans plusieurs recettes."
        ]
    },
    {
        level: "Niveau 3 (Complexe)",
        title: "Plateforme de Streaming Musical",
        context: "Vous devez concevoir la base de données d'un service type Spotify. La structure doit gérer les artistes, leurs albums, les chansons et les playlists des utilisateurs.",
        entities: "Artistes, Albums, Chansons, Playlists, Utilisateurs.",
        relations: [
            "Un album est réalisé par un seul artiste (pour simplifier).",
            "Un artiste peut avoir plusieurs albums.",
            "Un album contient plusieurs chansons.",
            "Une chanson n'appartient qu'à un seul album.",
            "Un utilisateur peut créer plusieurs playlists.",
            "Une playlist appartient à un seul utilisateur.",
            "Une playlist contient plusieurs chansons.",
            "Une même chanson peut être dans plusieurs playlists différentes (celles de plusieurs utilisateurs)."
        ]
    }
];
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
    <div className="space-y-12 prose max-w-none">
      
      <section>
        <Heading level={1} className="mb-4">TP : Modélisation d'une Base de Données Relationnelle</Heading>
        <p className="text-xl text-gray-600">Ce TP est central dans votre formation. Vous allez apprendre à transformer un besoin client en un schéma de base de données structuré et logique, d'abord sur papier, puis avec un outil professionnel en ligne.</p>
      </section>

      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Déroulé de la séance (3h)</Heading>
        <div className="grid md:grid-cols-3 gap-4 not-prose">
            <Card>
                <Heading level={3} className="!text-blue-700">Phase 1 : Conception (1h)</Heading>
                <p className="text-sm mt-2">Sur une feuille, modélisez les 3 schémas de base de données demandés. Pour chaque table, listez ses champs, identifiez la clé primaire (PK) et les clés étrangères (FK). Dessinez les liens entre les tables.</p>
            </Card>
            <Card>
                <Heading level={3} className="!text-orange-700">Phase 2 : Validation (30 min)</Heading>
                <p className="text-sm mt-2">Une fois vos 3 schémas terminés sur papier, **appelez le professeur**. Il viendra valider votre logique de conception avant que vous ne passiez à l'outil numérique. C'est une étape obligatoire.</p>
            </Card>
            <Card>
                <Heading level={3} className="!text-green-700">Phase 3 : Implémentation (1h30)</Heading>
                <p className="text-sm mt-2">Utilisez l'outil en ligne <a href="https://dbdiagram.io" target="_blank" rel="noopener noreferrer" className="font-bold">dbdiagram.io</a> pour retranscrire numériquement vos 3 schémas. Suivez le tutoriel ci-dessous pour apprendre à utiliser l'outil.</p>
            </Card>
        </div>
      </section>
      
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Tutoriel : Utiliser dbdiagram.io</Heading>
        <p>Dbdiagram est un outil en ligne qui permet de dessiner des schémas de base de données en écrivant un code très simple. </p>
        <div>
            <Heading level={3}>1. Créer une Table et ses Champs</Heading>
            <p>Pour créer une table, on utilise le mot-clé <code>Table</code> suivi de son nom et d'accolades. À l'intérieur, on liste chaque champ avec son type.</p>
            <pre className="code-block"><code>
{`Table users {
  id int [pk] // Clé primaire
  username varchar(50)
  email varchar(255)
  created_at timestamp
}`}
            </code></pre>
        </div>
        <div className="mt-8">
            <Heading level={3}>2. Les Types de Champs Courants</Heading>
            <ul className="list-disc list-inside">
                <li><code>int</code> : Pour les nombres entiers (comme un identifiant).</li>
                <li><code>varchar(X)</code> : Pour du texte de longueur variable (avec une limite de X caractères). Parfait pour un nom, un titre.</li>
                <li><code>text</code> : Pour du texte long (comme le contenu d'un article de blog).</li>
                <li><code>timestamp</code> ou <code>datetime</code> : Pour stocker une date et une heure.</li>
                <li><code>bool</code> : Pour stocker une valeur Vrai/Faux (true/false).</li>
            </ul>
        </div>
         <div className="mt-8">
            <Heading level={3}>3. Définir les Relations</Heading>
            <p>Les relations se définissent en dehors des tables avec le mot-clé <code>Ref:</code>. La syntaxe est <code>Table1.champ_fk {'>'} Table2.champ_pk</code>.</p>
            <p><strong>Exemple d'une relation "un à plusieurs" (1-N) :</strong> Un utilisateur peut écrire plusieurs articles.</p>
            <pre className="code-block"><code>
{`Table users {
  id int [pk]
  username varchar
}

Table articles {
  id int [pk]
  title varchar
  content text
  user_id int // Clé étrangère
}

// Un utilisateur (users.id) peut avoir plusieurs articles (articles.user_id)
Ref: users.id < articles.user_id`}
            </code></pre>
            <p><strong>Exemple d'une relation "plusieurs à plusieurs" (N-N) :</strong> Un article peut avoir plusieurs tags, et un tag peut être sur plusieurs articles. On a besoin d'une table de liaison.</p>
            <pre className="code-block"><code>
{`Table articles {
  id int [pk]
  title varchar
}

Table tags {
  id int [pk]
  name varchar
}

// Table de liaison
Table article_tags {
  article_id int
  tag_id int
}

Ref: articles.id < article_tags.article_id
Ref: tags.id < article_tags.tag_id`}
            </code></pre>
            <p className="mt-2 text-sm"><strong>Astuce :</strong> le symbole <code>{'>'}</code> signifie "un" et <code>{'<'}</code> signifie "plusieurs". La pointe de la flèche va toujours vers le "plusieurs".</p>
        </div>
      </section>

      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Énoncés des Schémas à Réaliser</Heading>
        <p>Vous devez réaliser les trois schémas suivants, en commençant par le plus simple pour vous entraîner.</p>
        <div className="space-y-4 mt-6 not-prose">
            {challengesData.map(challenge => (
                <ChallengeCard key={challenge.level} {...challenge} />
            ))}
        </div>
      </section>

    </div>
  )
};