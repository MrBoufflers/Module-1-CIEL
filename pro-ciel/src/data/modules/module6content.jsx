import React from 'react';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';
import PracticalWork from '../../components/organisms/PraticalWork';

const tpTitle = 'TP : Créer le mini-site de présentation de votre Chef-d\'Œuvre';
const tpObjective = 'Appliquer les concepts du HTML5 sémantique pour construire un site web multi-pages, structuré et logique. L\'objectif est de maîtriser la création de plusieurs fichiers HTML, de les lier entre eux, et d\'utiliser Git pour versionner le projet à chaque étape clé.';
const tpMaterials = [
    'Un ordinateur avec Visual Studio Code et Git installés.',
    'Un navigateur web (Firefox, Chrome...).',
    'Une idée (même vague) de votre projet de chef-d\'œuvre (nom, concept, matériel...).',
];

const tpSteps = [
    {
        title: "Phase 1 : Initialisation & Page d'Accueil",
        description: (
            <>
                <p>On commence par préparer le projet et construire la page principale qui servira de vitrine à votre chef-d'œuvre.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-2">
                    <li><strong>Préparation du dossier :</strong> Sur votre bureau, créez un nouveau dossier nommé `mon-chef-d-oeuvre-nom-prenom`. Ouvrez ce dossier avec VS Code.</li>
                    <li><strong>Initialisation de Git :</strong> C'est la première chose à faire. Dans le terminal de VS Code, tapez :
                        <pre className="code-block"><code>git init</code></pre>
                    </li>
                    <li><strong>Création de la page d'accueil :</strong> Créez un fichier `index.html` et générez le squelette de base (tapez `!` puis `Tab`). Modifiez le <code>&lt;title&gt;</code> avec le nom de votre projet.</li>
                    <li><strong>Structure sémantique :</strong> Dans le <code>&lt;body&gt;</code>, ajoutez les balises principales : <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, et <code>&lt;footer&gt;</code>.</li>
                    <li><strong>Remplissage du contenu :</strong>
                        <ul>
                            <li>Dans le <code>&lt;header&gt;</code>, mettez un <code>&lt;h1&gt;</code> avec le nom de votre chef-d'œuvre.</li>
                            <li>Dans le <code>&lt;main&gt;</code>, ajoutez une <code>&lt;section&gt;</code> avec un <code>&lt;h2&gt;</code> "Présentation du Projet" et un paragraphe <code>&lt;p&gt;</code> qui résume le concept.</li>
                            <li>Dans le <code>&lt;footer&gt;</code>, mettez un <code>&lt;p&gt;</code> avec "Projet réalisé par [Votre Nom]".</li>
                        </ul>
                    </li>
                    <li><strong>Premier Commit :</strong> C'est le moment de sauvegarder notre première version.
                        <pre className="code-block"><code>git add . <br />
git commit -m "Initial commit: Création de la structure et de la page d'accueil"</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 2 : Page \"Détails\" et Navigation",
        description: (
            <>
                <p>On va maintenant créer une deuxième page pour détailler les aspects techniques du projet et, surtout, apprendre à lier les pages entre elles.</p>
                 <ol className="list-[lower-alpha] ml-6 space-y-2">
                    <li><strong>Création de la nouvelle page :</strong> Créez un second fichier, `details.html`. Copiez-collez tout le contenu de `index.html` dedans pour avoir la même base. Changez le <code>&lt;title&gt;</code> en "Détails du Projet".</li>
                    <li><strong>Modification du contenu de `details.html` :</strong> Dans la balise <code>&lt;main&gt;</code>, remplacez la section "Présentation" par deux nouvelles sections :
                        <ul>
                            <li>Une <code>&lt;section&gt;</code> avec un <code>&lt;h2&gt;</code> "Matériel Nécessaire" et une liste à puces <code>&lt;ul&gt;</code> des composants prévus.</li>
                             <li>Une <code>&lt;section&gt;</code> avec un <code>&lt;h2&gt;</code> "Fonctionnalités" et une liste numérotée <code>&lt;ol&gt;</code> des fonctionnalités principales.</li>
                        </ul>
                    </li>
                    <li><strong>Création de la navigation :</strong> C'est l'étape clé. Nous allons remplir la balise <code>&lt;nav&gt;</code>.
                        <ul>
                            <li>**Dans `index.html` :** Dans le <code>&lt;nav&gt;</code>, créez une liste <code>&lt;ul&gt;</code> avec deux liens : <code>&lt;li&gt;&lt;a href="index.html"&gt;Accueil&lt;/a&gt;&lt;/li&gt;</code> et <code>&lt;li&gt;&lt;a href="details.html"&gt;Détails Techniques&lt;/a&gt;&lt;/li&gt;</code>.</li>
                            <li>**Dans `details.html` :** Faites exactement la même chose. Le menu doit être identique sur toutes les pages pour ne pas perturber l'utilisateur.</li>
                        </ul>
                    </li>
                    <li><strong>Testez la navigation :</strong> Ouvrez `index.html` dans votre navigateur et cliquez sur les liens. Vous devriez pouvoir passer d'une page à l'autre.</li>
                     <li><strong>Deuxième Commit :</strong> On sauvegarde cette nouvelle fonctionnalité majeure.
                        <pre className="code-block"><code>git add . <br />
git commit -m "feat: Ajout de la page 'Détails' et de la navigation principale"</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 3 : Page \"Contact\" et Déploiement",
        description: (
            <>
                <p>On finalise notre mini-site avec une page de contact et on le met en ligne pour le rendre accessible à tous.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-2">
                    <li><strong>Création de la page contact :</strong> Créez un fichier `contact.html`, copiez-y la structure de base. Changez le titre et le contenu du <code>&lt;main&gt;</code>.</li>
                    <li><strong>Ajout d'un formulaire :</strong> Dans le <code>&lt;main&gt;</code> de `contact.html`, ajoutez un <code>&lt;h2&gt;</code> "Me Contacter" et un formulaire simple avec les balises <code>&lt;form&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;input type="text"&gt;</code>, <code>&lt;input type="email"&gt;</code>, <code>&lt;textarea&gt;</code> et <code>&lt;button type="submit"&gt;</code>.</li>
                    <li><strong>Mise à jour de la navigation :</strong> N'oubliez pas d'ajouter le lien vers `contact.html` dans le <code>&lt;nav&gt;</code> des **trois** fichiers HTML.</li>
                    <li><strong>Commit Final :</strong>
                        <pre className="code-block"><code>git add . <br />
git commit -m "feat: Ajout de la page Contact avec formulaire"</code></pre>
                    </li>
                    <li><strong>Déploiement sur GitHub Pages :</strong>
                        <ul>
                            <li>Créez un dépôt public sur GitHub nommé `presentation-chef-d-oeuvre`.</li>
                            <li>Liez votre projet local à ce dépôt et poussez votre code :
                                <pre className="code-block"><code>git remote add origin https://github.com/... <br />
git branch -M main <br />
git push -u origin main</code></pre>
                            </li>
                            <li>Sur GitHub, allez dans "Settings" {'>'} "Pages", sélectionnez la branche `main` et sauvegardez.</li>
                            <li>Attendez quelques minutes et votre site sera en ligne !</li>
                        </ul>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "⭐ Bonus (Pour les plus rapides)",
        description: (
            <p>Sur votre page `details.html`, ajoutez une section "Schéma du Projet". À l'intérieur, utilisez une balise <code>&lt;figure&gt;</code> pour y insérer une image <code>&lt;img&gt;</code> (un schéma ou un dessin de votre projet, même simple) et une balise <code>&lt;figcaption&gt;</code> pour légender cette image.</p>
        )
    }
];


// Molécule pour un exemple de code
const CodeExample = ({ title, code, language = 'html' }) => (
    <div className="my-6">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <pre className={`mt-2 text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto`}><code className={`language-${language}`}>{code.trim()}</code></pre>
    </div>
);

// Organisme pour illustrer la structure sémantique
const SemanticLayoutDiagram = () => (
    <div className="my-6 not-prose p-6 bg-white border-2 border-gray-200 rounded-lg text-center font-sans">
        <div className="w-full bg-blue-100 border border-blue-300 p-4 rounded mb-2">
            <p className="font-bold text-blue-800">&lt;header&gt;</p>
        </div>
        <div className="w-full bg-indigo-100 border border-indigo-300 p-3 rounded mb-2">
            <p className="font-bold text-indigo-800">&lt;nav&gt;</p>
        </div>
        <div className="w-full bg-gray-100 border border-gray-300 p-4 rounded">
            <p className="font-bold text-gray-800 mb-2">&lt;main&gt;</p>
            <div className="bg-green-100 border border-green-300 p-4 rounded mb-2">
                <p className="font-bold text-green-800">&lt;section&gt;</p>
                 <div className="bg-yellow-100 border border-yellow-300 p-4 rounded mt-2">
                    <p className="font-bold text-yellow-800">&lt;article&gt;</p>
                 </div>
            </div>
             <div className="bg-green-100 border border-green-300 p-4 rounded">
                <p className="font-bold text-green-800">&lt;section&gt;</p>
            </div>
        </div>
        <div className="w-full bg-purple-100 border border-purple-300 p-4 rounded mt-2">
            <p className="font-bold text-purple-800">&lt;footer&gt;</p>
        </div>
    </div>
);


export const module6content = {
    course: (
 
    <div className="space-y-12 prose max-w-none">
      
      <section>
        <Heading level={1} className="mb-4">HTML5 : Le Squelette Sémantique du Web</Heading>
        <p className="text-xl text-gray-600">"Avant de peindre un mur, on le construit. Avant de styliser une page web, on lui donne une structure solide. C'est le rôle du HTML : être le squelette intelligent de chaque page que vous visitez."</p>
      </section>

      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 1 : Qu'est-ce que le HTML ?</Heading>
        <p>Le HTML (HyperText Markup Language) n'est pas un langage de programmation. C'est un **langage de balisage**. Son unique but est de **décrire et de structurer le contenu** d'une page web. Il dit au navigateur : "Ceci est un titre", "Ceci est un paragraphe", "Ceci est une image".</p>
        <Card className="bg-blue-50 border-blue-200">
            <p><strong>Analogie :</strong> Le HTML est le plan d'un architecte et le gros œuvre d'une maison. Il définit les pièces (la tête, le corps), les étages (les sections), les portes (les liens), mais il ne choisit ni la couleur des murs, ni le type de sol.</p>
        </Card>
        
        <div className="mt-8">
            <Heading level={3}>La Structure de Base d'un Document HTML5</Heading>
            <p>Toute page HTML commence par ce squelette minimal, qui déclare son type, sa langue, et sépare les métadonnées (<code>&lt;head&gt;</code>) du contenu visible (<code>&lt;body&gt;</code>).</p>
            <CodeExample title="Le squelette de départ" code={
`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre de ma page</title>
</head>
<body>
    <!-- Tout votre contenu visible ira ici -->
</body>
</html>`
            } />
        </div>
      </section>

      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 2 : Les Balises de Contenu</Heading>
        <p>Ce sont les balises que vous utiliserez le plus souvent pour structurer votre texte et vos médias.</p>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
            <Card><p><code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code> : Les titres. <code>&lt;h1&gt;</code> est le plus important, <code>&lt;h6&gt;</code> le moins.</p></Card>
            <Card><p><code>&lt;p&gt;</code> : Un paragraphe de texte.</p></Card>
            <Card><p><code>&lt;a href="URL"&gt;</code> : Un lien hypertexte. L'attribut `href` est la destination du lien.</p></Card>
            <Card><p><code>&lt;img src="image.jpg" alt="..."&gt;</code> : Une image. `src` est le chemin vers l'image, `alt` est un texte descriptif crucial pour l'accessibilité.</p></Card>
            <Card><p><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code> : Des listes. <code>ul</code> pour une liste à puces, <code>ol</code> pour une liste numérotée, <code>li</code> pour chaque élément de la liste.</p></Card>
            <Card><p><code>&lt;strong&gt;</code> et <code>&lt;em&gt;</code> : Pour mettre du texte en gras (importance forte) ou en italique (emphase).</p></Card>
        </div>
      </section>
      
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 3 : Le HTML Sémantique - Donner du Sens</Heading>
        <p>C'est le cœur du HTML5. Au lieu d'utiliser des boîtes génériques <code>&lt;div&gt;</code> partout, on utilise des balises qui décrivent le **rôle** de leur contenu. Pourquoi ? Pour les **moteurs de recherche** (SEO) et l'**accessibilité** (lecteurs d'écran).</p>
        <Card className="bg-yellow-50 border-yellow-300">
            <p><strong>La règle d'or :</strong> Choisissez toujours la balise qui décrit le mieux le sens de votre contenu, pas son apparence.</p>
        </Card>
        <SemanticLayoutDiagram />
        <ul className="list-disc list-inside">
            <li><code>&lt;header&gt;</code> : L'en-tête de la page ou d'une section. Contient souvent le logo, le titre principal, la navigation.</li>
            <li><code>&lt;nav&gt;</code> : Contient les liens de navigation principaux du site.</li>
            <li><code>&lt;main&gt;</code> : Le contenu principal et unique de la page. Il ne doit y en avoir qu'un par page.</li>
            <li><code>&lt;section&gt;</code> : Regroupe un contenu thématique. Doit presque toujours contenir un titre (h2, h3...).</li>
            <li><code>&lt;article&gt;</code> : Un contenu autonome qui pourrait exister indépendamment du reste (un article de blog, un post de forum, un produit).</li>
            <li><code>&lt;aside&gt;</code> : Pour du contenu complémentaire, lié indirectement au contenu principal (une biographie d'auteur, des liens connexes).</li>
            <li><code>&lt;footer&gt;</code> : Le pied de page. Contient les informations de contact, les crédits, les mentions légales.</li>
        </ul>
      </section>
    </div>
  ), 
  tp: (
  <PracticalWork 
      title={tpTitle}
      objective={tpObjective}
      materials={tpMaterials}
      steps={tpSteps}
    />
  )
}

