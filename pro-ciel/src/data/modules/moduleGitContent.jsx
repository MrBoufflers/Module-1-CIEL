import React from 'react';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';
import PracticalWork from '../../components/organisms/PraticalWork';


// Molécule pour un concept clé de Git
const GitConceptCard = ({ title, analogy, description, command }) => (
    <Card>
        <Heading level={4} className="!text-blue-700">{title}</Heading>
        <p className="mt-2 font-semibold text-sm italic text-gray-500">"{analogy}"</p>
        <p className="mt-2 text-sm text-gray-700">{description}</p>
        {command && <pre className="mt-4 text-xs bg-gray-800 text-white p-2 rounded"><code>{command}</code></pre>}
    </Card>
);

const tpGitTitle = 'TP : Maîtriser Git & GitHub, du solo à la collaboration';

const tpGitObjective = 'Appliquer le workflow complet de Git et GitHub dans un contexte réaliste. L\'élève devra d\'abord gérer un projet personnel, puis collaborer sur un projet d\'équipe en utilisant les branches, les Pull Requests et en apprenant à résoudre un conflit de fusion.';

const tpGitMaterials = [
  'Un ordinateur par élève avec un accès à Internet.',
  'Un compte GitHub créé et validé par élève.',
  'Le logiciel Git installé sur chaque poste (ex: Git Bash sur Windows).',
  'Un éditeur de code comme Visual Studio Code.',
];

const tpGitSteps = [
  {
    title: "Partie 1 : Configuration Initiale (30 min)",
    description: (
      <>
        <p>Avant de coder, nous devons nous assurer que Git et GitHub sont correctement configurés sur votre machine. C'est comme préparer ses outils avant de bricoler.</p>
        <ol>
          <li><strong>Créer un compte GitHub :</strong> Si ce n'est pas déjà fait, allez sur <a href="https://github.com/join" target="_blank" rel="noopener noreferrer">github.com/join</a> et créez votre compte. C'est votre futur CV de développeur !</li>
          <li><strong>Configurer Git :</strong> Ouvrez le terminal (Git Bash). Tapez les deux commandes suivantes en remplaçant les informations par les vôtres. Ces informations seront associées à tous vos futurs commits.
            <pre className="code-block"><code>git config --global user.name "Votre Nom"
git config --global user.email "votre.email@github.com"</code></pre>
          </li>
          <li><strong>Vérifier la configuration :</strong> Tapez <code>git config --list</code> pour vérifier que votre nom et votre email ont bien été enregistrés.</li>
        </ol>
      </>
    )
  },
  {
    title: "Partie 2 : Mon Premier Projet Solo (1h)",
    description: (
      <>
        <p>Nous allons maintenant utiliser Git pour suivre l'évolution d'un petit projet personnel : une page web de présentation.</p>
        <ol>
          <li><strong>Création du projet :</strong> Sur votre bureau, créez un dossier nommé `mon-portfolio`. Ouvrez ce dossier avec VS Code.</li>
          <li><strong>Initialisation de Git :</strong> Dans le terminal de VS Code, tapez <code>git init</code>. Cette commande crée le dépôt Git local (un sous-dossier caché `.git`).</li>
          <li><strong>Premier Fichier :</strong> Créez un fichier `index.html` et ajoutez un titre simple : `<h1>Mon Portfolio</h1>`.</li>
          <li><strong>Premier Commit :</strong> Suivez le cycle `add` -> `commit`.
            <pre className="code-block"><code># Ajoute tous les fichiers modifiés à la "zone de préparation"
git add .

# Crée une sauvegarde (commit) avec un message descriptif
git commit -m "Initial commit : Ajout de la structure de base HTML"</code></pre>
          </li>
          <li><strong>Création du Dépôt Distant :</strong> Allez sur votre profil GitHub. Créez un nouveau dépôt public nommé `mon-portfolio`. Ne cochez aucune case (pas de README, etc.).</li>
          <li><strong>Lier le local au distant :</strong> GitHub vous donne des commandes à copier. Prenez celles qui commencent par `git remote add origin...` et `git branch -M main`.
             <pre className="code-block"><code>git remote add origin https://github.com/VOTRE_PSEUDO/mon-portfolio.git
git branch -M main</code></pre>
          </li>
          <li><strong>Pousser votre travail :</strong> Envoyez vos commits locaux vers GitHub.
            <pre className="code-block"><code>git push -u origin main</code></pre>
            <p className="text-sm">Votre code est maintenant en ligne ! Allez vérifier sur la page de votre dépôt GitHub.</p>
          </li>
        </ol>
      </>
    )
  },
   {
    title: "Partie 3 : Le Projet Collaboratif (1h30)",
    description: (
      <>
        <p>C'est le cœur du métier de développeur : travailler en équipe. Mettez-vous en binôme. L'un sera le "Mainteneur" (propriétaire du projet), l'autre le "Collaborateur".</p>
        
        <Heading level={4} className="!mt-6">Étape A : Le Mainteneur prépare le terrain</Heading>
        <ol>
            <li>Créez un nouveau dépôt sur GitHub nommé `projet-collab`.</li>
            <li>Allez dans "Settings" {'>'} "Collaborators" et ajoutez votre binôme comme collaborateur.</li>
            <li>Clonez ce dépôt vide sur votre PC : <code>git clone https://github.com/VOTRE_PSEUDO/projet-collab.git</code></li>
            <li>Dedans, créez un fichier `liste.html` avec un titre simple. Faites un commit et poussez-le (`git add .`, `git commit -m "Init"`, `git push`).</li>
        </ol>

        <Heading level={4} className="!mt-6">Étape B : Le Collaborateur ajoute une fonctionnalité</Heading>
        <ol>
            <li>Acceptez l'invitation reçue par email. Clonez le projet sur votre propre PC.</li>
            <li><strong>Créez une branche pour travailler :</strong> C'est l'étape la plus importante. Ne travaillez JAMAIS directement sur `main`.
                <pre className="code-block"><code>git checkout -b ajout-ma-liste</code></pre>
            </li>
            <li>Modifiez `liste.html` pour y ajouter votre top 3 (films, jeux...).</li>
            <li>Faites un commit sur votre branche : `git add .`, `git commit -m "Ajout de ma liste"`.</li>
            <li>Poussez votre branche sur GitHub : `git push origin ajout-ma-liste`.</li>
            <li>Allez sur GitHub. Un bandeau jaune apparaît : cliquez sur "Compare & pull request". Décrivez vos changements et créez la "Pull Request".</li>
        </ol>

        <Heading level={4} className="!mt-6">Étape C : Le Mainteneur valide le travail</Heading>
        <ol>
            <li>Sur GitHub, allez dans l'onglet "Pull Requests". Regardez le travail de votre collègue.</li>
            <li>Si tout est bon, cliquez sur "Merge pull request" puis "Confirm merge". Le travail du collaborateur est maintenant intégré à la branche `main`.</li>
            <li>Sur votre PC, mettez à jour votre version locale :
                 <pre className="code-block"><code>git checkout main
git pull</code></pre>
                 <p className="text-sm">Vous devriez voir apparaître la liste de votre collègue !</p>
            </li>
        </ol>

        <Heading level={4} className="!mt-6 !text-red-600">Étape D : Le Conflit (Simulation)</Heading>
        <ol>
            <li>**Le Mainteneur :** Dans `liste.html`, changez le titre `{"<h1>"}`. Commitez et pushez sur `main`.</li>
            <li>**Le Collaborateur :** SANS FAIRE `git pull`, changez le MÊME titre `{"<h1>"}` avec un texte différent. Commitez votre changement.</li>
            <li>**Le Collaborateur :** Essayez de pousser (`git push`). Erreur ! Git vous dit de faire un `git pull` d'abord.</li>
            <li>**Le Collaborateur :** Faites `git pull`. **CONFLIT !** Le terminal vous annonce un conflit de fusion.</li>
            <li>Ouvrez `liste.html`. Vous verrez les marqueurs `{'<<<<<<<'}`, `=======`, `{'>>>>>>>'}`. C'est Git qui vous montre les deux versions contradictoires.</li>
            <li>**Résolvez le conflit :** Éditez le fichier pour ne garder qu'une seule version du titre (ou une nouvelle version qui combine les deux). Supprimez les marqueurs de conflit.</li>
            <li>Terminez la fusion : `git add .`, `git commit` (pas besoin de message, Git en propose un), et enfin `git push`. Le conflit est résolu !</li>
        </ol>
      </>
    )
  },
];

// La page complète du cours
export const moduleGitContent = {
  course : (
    <div className="space-y-12 prose max-w-none">
      
      {/* Introduction */}
      <section>
        <Heading level={1} className="mb-4">Introduction à Git & GitHub</Heading>
        <p className="text-xl text-gray-600">"Imaginez que vous écrivez un rapport important. Vous enregistrez des versions (V1, V2, V2_final, V2_final_corrigé...). C'est le chaos. Git, c'est une machine à remonter le temps pour votre code, et GitHub, c'est le cloud où vous stockez ces sauvegardes et collaborez avec d'autres."</p>
      </section>

      {/* Partie 1: Git vs. GitHub */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 1 : Git ≠ GitHub : La Différence Cruciale</Heading>
        <p>C'est la première chose à comprendre. Ce ne sont pas des synonymes.</p>
        <div className="grid md:grid-cols-2 gap-8 mt-4 not-prose">
            <Card>
                <Heading level={3} className="flex items-center"><span className="text-3xl mr-2">📄</span> Git</Heading>
                <p className="mt-2 text-2xl font-bold">L'Outil</p>
                <p className="mt-2">Git est un **logiciel** que vous installez sur votre ordinateur. Son seul but est de suivre les modifications de vos fichiers dans un dossier. Il fonctionne entièrement **en local**, sans avoir besoin d'Internet.</p>
                 <p className="mt-4 p-4 bg-blue-50 rounded-lg font-semibold">Analogie : Git, c'est Microsoft Word. Il est sur votre PC et gère vos documents.</p>
            </Card>
             <Card>
                <Heading level={3} className="flex items-center"><span className="text-3xl mr-2">☁️</span> GitHub</Heading>
                <p className="mt-2 text-2xl font-bold">Le Service</p>
                <p className="mt-2">GitHub est un **site web** qui héberge vos projets Git. Il utilise Git en coulisses, mais y ajoute des fonctionnalités sociales : collaboration, partage de code, suivi de bugs...</p>
                <p className="mt-4 p-4 bg-green-50 rounded-lg font-semibold">Analogie : GitHub, c'est Google Docs. C'est en ligne, ça vous permet de stocker vos documents et de travailler à plusieurs dessus.</p>
            </Card>
        </div>
      </section>
      
      {/* Partie 2: Les concepts clés */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 2 : Le Vocabulaire du Développeur</Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose mt-4">
            <GitConceptCard 
                title="Repository (Dépôt)"
                analogy="Le dossier du projet"
                description="C'est le dossier qui contient tous les fichiers de votre projet, ainsi qu'un sous-dossier caché (.git) qui contient tout l'historique des modifications."
                command="git init"
            />
            <GitConceptCard 
                title="Commit"
                analogy="Un point de sauvegarde"
                description="Un 'commit' est un instantané, une photo de l'état de vos fichiers à un moment T. Chaque commit a un message qui explique ce qui a été changé. C'est l'action la plus importante de Git."
                command="git commit -m 'Ajout du footer'"
            />
            <GitConceptCard 
                title="Branch (Branche)"
                analogy="Un univers parallèle"
                description="Une branche est une copie de votre projet où vous pouvez travailler sur une nouvelle fonctionnalité (ex: 'branche-connexion') sans casser la version principale (la branche 'main')."
                command="git branch nouvelle-feature"
            />
            <GitConceptCard 
                title="Merge (Fusionner)"
                analogy="La réunion des univers"
                description="Quand votre nouvelle fonctionnalité est terminée et testée dans sa branche, vous la 'fusionnez' (merge) dans la branche 'main' pour que tout le monde puisse en profiter."
                command="git merge nouvelle-feature"
            />
             <GitConceptCard 
                title="Push"
                analogy="Envoyer son travail"
                description="L'action d'envoyer vos commits (vos sauvegardes locales) depuis votre ordinateur vers le dépôt distant sur GitHub, pour les partager avec votre équipe."
                command="git push origin main"
            />
              <GitConceptCard 
                title="Pull"
                analogy="Récupérer le travail des autres"
                description="L'action de récupérer les derniers commits faits par vos collègues depuis GitHub et de mettre à jour votre version locale du projet. À faire tous les matins !"
                command="git pull origin main"
            />
        </div>
      </section>

      {/* Partie 3: Le Workflow de base */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 3 : Le Workflow Quotidien</Heading>
        <p>Le travail avec Git et GitHub suit un cycle très précis. Voici les 5 étapes que vous ferez des dizaines de fois par jour.</p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mt-6 not-prose">
            <Card className="text-center">
                <p className="font-bold">1. Je modifie mes fichiers</p>
                <p className="text-4xl mt-2">✍️</p>
                <p className="text-xs mt-2">(Ajout de code, correction...)</p>
            </Card>
            <div className="text-2xl text-gray-400">→</div>
            <Card className="text-center">
                <p className="font-bold">2. Je sélectionne les changements</p>
                <p className="text-4xl mt-2">➕</p>
                <p className="text-xs mt-2"><code>git add .</code></p>
            </Card>
            <div className="text-2xl text-gray-400">→</div>
            <Card className="text-center">
                <p className="font-bold">3. Je sauvegarde (Commit)</p>
                <p className="text-4xl mt-2">💾</p>
                <p className="text-xs mt-2"><code>git commit -m "Message"</code></p>
            </Card>
            <div className="text-2xl text-gray-400">→</div>
             <Card className="text-center">
                <p className="font-bold">4. Je pousse sur GitHub</p>
                <p className="text-4xl mt-2">☁️</p>
                <p className="text-xs mt-2"><code>git push</code></p>
            </Card>
        </div>
        <Card className="mt-8 bg-blue-50 border-blue-200">
            <p className="font-bold text-blue-800">N'oubliez pas ! Avant de commencer à travailler, ou après une longue pause, faites toujours un `git pull` pour récupérer les dernières modifications de vos collègues !</p>
        </Card>
      </section>

      {/* Partie 4: Pourquoi c'est essentiel */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 4 : Pourquoi c'est Essentiel pour votre Carrière ?</Heading>
        <div className="grid md:grid-cols-3 gap-4 not-prose mt-4">
            <Card>
                <Heading level={4}>Travail d'Équipe</Heading>
                <p className="text-sm mt-2">Aucun projet informatique ne se fait seul. Git et GitHub sont les standards absolus pour la collaboration.</p>
            </Card>
            <Card>
                <Heading level={4}>Sécurité et Historique</Heading>
                <p className="text-sm mt-2">Vous avez fait une erreur qui a tout cassé ? Avec Git, vous pouvez revenir à n'importe quelle version précédente en quelques secondes. C'est une assurance vie pour votre code.</p>
            </Card>
            <Card>
                <Heading level={4}>Votre Portfolio Professionnel</Heading>
                <p className="text-sm mt-2">Votre profil GitHub devient votre CV de technicien. Les recruteurs iront voir vos projets pour juger de la qualité de votre code et de votre manière de travailler.</p>
            </Card>
        </div>
      </section>
    </div>
  ),tp : (
    <>
       <PracticalWork 
      title={tpGitTitle}
      objective={tpGitObjective}
      materials={tpGitMaterials}
      steps={tpGitSteps}
        />
    </>
  )
}
