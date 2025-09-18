import React from 'react';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';
import PracticalWork from '../../components/organisms/PraticalWork';
import GitIdentif from '../../assets/images/gitIdentif.png'
import NewRepo from "../../assets/images/newrepo.PNG"


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
    title: "Partie 1 : Configuration Initiale",
    description: (
      <>
        <p>Avant de coder, nous devons nous assurer que Git et GitHub sont correctement configurés sur votre machine. C'est comme préparer ses outils avant de bricoler.</p>
        <ol>
          <li><strong>Créer un compte GitHub :</strong> Si ce n'est pas déjà fait, allez sur <a href="https://github.com/join" target="_blank" rel="noopener noreferrer">github.com/join</a> et créez votre compte.</li>
          <li>Si vous êtes plusieurs à utiliser le même ordinateur, il faut déjà supprimer les dernières informations d'identification, pour ce faire vous devez aller dans :</li> <br/>
          <img src={GitIdentif} alt={"Gestionnaire d'identification"} className=" w-[50%] h-full m-auto" />
          <li><strong>Configurer Git :</strong> Ouvrez le terminal dans Visual Studio Code (Terminal {"->"} New Terminal ). Tapez les deux commandes suivantes en remplaçant les informations par les vôtres.
            <pre className="code-block"><code>git config --global user.name "Votre Nom" <br/>
git config --global user.email "votre.email@github.com"</code></pre>
          </li>
          <li><strong>Vérifier la configuration :</strong> Tapez cette commande pour vérifier que votre nom et votre email ont bien été enregistrés.</li>
          <pre className="code-block"><code>git config --list</code></pre>
          <li>Vous devriez voir vos identifiants (nom et email)</li>
        </ol>
      </>
    )
  },
  {
    title: "Partie 2 : Mon Projet Solo - La Machine à Remonter le Temps",
    description: (
      <>
        <p>Nous allons utiliser Git pour suivre l'évolution d'un petit projet, en adoptant les bonnes pratiques avec les branches et en apprenant à corriger nos erreurs.</p> <br/>
        <ol>
          <li><strong>1. Initialisation :</strong> <br />
            a. Créez un dossier `mon-portfolio-PRENOM-NOM` dans le dossier `Documents`
          </li>
          <li>b. Dans Visual Studio Code, ouvrez le dossier que vous venez de créer : `Files` -{">"} `Open Folder`</li>
          <li>c. Il est maintenant temps d'initialiser git dans le dossier avec la commande :</li>
          <pre className="code-block"><code>git init</code></pre> <br/>
          <li><strong>2. Le `.gitignore` :</strong> <br />
           a. Créez un fichier `.gitignore` (ne pas oublier le ".", c'est une extension) à partir de l'explorateur de fichier de VIsual Studio Code. <br />
           b. À l'intérieur, écrivez `notes.txt`.</li>
          <li>c.Maintenant, créez un fichier `notes.txt`. <br />
           d. Tapez : <pre className='code-block'> <code>git status</code></pre> Si vous ne voyez pas le fichier notes.txt dans le terminal, le fichier de notes est bien ignoré par Git ! C'est essentiel pour ignorer les fichiers qui ne doivent pas être partagés.</li> <br/>
          <li><strong>3. Premier Commit :</strong> <br />a. Créez le fichier `index.html`, toujours dans le même dossier <br />
           b. Ajoutez un titre en HTML `{"<h1>Mon Portfolio</h1>"}`. <br />
           c. Faites votre premier commit sur la branche `master`, pour ce faire, on commence par ajouter les fichiers au commit :
            <pre className="code-block"><code>git add .</code></pre>
            Ensuite on fait le commit avec son message :
            <pre className="code-block"><code>git commit -m "Initial commit: Ajout de la structure de base HTML"</code></pre>
          </li>
          <li>Si vous n'avez pas d'erreur, votre premier commit est fait! Vos dernières modifications sont sauvegardées.</li> <br />
          <li><strong>4. Création d'une Branche :</strong> <br />
          Vous allez maintenant alimenter un peu votre portefolio en ajoutant une biographie. <br />
           a. Pour ajouter une biographie, créez une branche dédiée :
            <pre className="code-block"><code>git checkout -b feature/ajout-bio</code></pre>
           b. Faites la commande suivante pour vous assuer d'avoir bien créer votre nouvelle branch et s'assurer de bien être dedans :
          <pre className="code-block"><code>git branch</code></pre>
          Vous devriez voir la branch `feature/ajout-bio` en verte.
          </li> <br/>
          <li><strong>5. Travail en Branche :</strong> <br /> 
           a. Ajoutez un nouveau titre pour votre nouvelle section de biographie dans `index.html` à la suite de votre titre H1: `{"<h2>Ma biographie</h2>"}`.
           b. Maintenant nous allons sauvegarder ces modifications dans notre nouvelle branch en faisant un commit :
            <pre className="code-block"><code>git add .  <br/>
            git commit -m "feat: Ajout de la section biographie"</code></pre>
          </li> <br/>
           <li><strong>6. Corriger le dernier commit :</strong> <br />
            a. Oups, vous avez oublié d'ajouter votre âge! Modifiez le fichier `index.html` en ajoutant votre age à votre biographie `{"<p>J'ai 16ans</p>"}`, <br />
            b. Puis utilisez la commande `amend` pour ajouter cette modification au commit précédent sans en créer un nouveau.
            <pre className="code-block"><code>git add .  <br/>
            git commit --amend --no-edit</code></pre>
          </li> <br/>
          <li><strong>7. Explorer l'historique :</strong><br />
           a. Vous ne savez plus où vous en êtes? Utilisez cette commande pour voir votre historique :
           <pre className='code-block'><code> git log --oneline --graph</code></pre>
            b. Repérez le hash de votre premier commit (l'identifiant composant de nombres et lettres) et utilisez cette commande pour inspecter ses détails :
            <pre className="code-block"><code>git show {"<hash_du_commit>"}</code></pre> </li> <br/>
          <li><strong>8. Fusionner la Branche :</strong> <br />
          Vous êtes satisfait de votre travail sur cette branch, vous allez pouvoir retourner sur la branch `master` et fusionnez votre travail :
            <pre className="code-block"><code>git checkout main  <br/>
             git merge feature/ajout-bio</code></pre>
          </li> <br/>
          <li><strong>9. Synchronisation avec GitHub :</strong> <br />
          Le local c'est bien, mais mettre votre projet sur Github c'est mieux! Pour ce faire : <br />
           a. Créez un dépôt `mon-portfolio` sur GitHub ("New Repository") <br />
           b. Une fois créé, copiez le lien HTTPS du repository
           <img src={NewRepo} alt="Nouveau repository" />
           c. Liez-le au local avec la commande : 
           <pre className="code-block"><code>git remote add origin {"<lien_du_repo>"}</code></pre>
           d. Identifiez-vous <br />
           e. Maintenant que notre machine local et le repository sur Github sont liés, poussez votre travail avec : <br />
           <pre className="code-block"><code></code>git push -u origin master</pre></li>
           f. Bravo, votre projet est sur github ! Maintenant allez dans les paramètres de votre repository ("Settings"), ensuite dans "Collaborators", et ajouter "MrBoufflers".
        </ol>
      </>
    )
  },
   {
    title: "Partie 3 : Le Projet Collaboratif (puis inversion des rôles)",
    description: (
      <>
        <p>Mettez-vous en binôme. L'un sera le "Mainteneur", l'autre le "Collaborateur". Vous allez simuler un vrai cycle de développement en équipe. Une fois terminé, vous devez recommencer en changeant de rôle.</p>
        
        <Heading level={4} className="!mt-6">Étape A : Préparation (Mainteneur)</Heading>
        <ol>
            <li>a. Créez un repository `projet-collab` sur GitHub, ajoutez votre binôme comme collaborateur.</li>
            <li>b. Clonez le projet :
              <pre className="code-block"><code>git clone {"<lien_du_repository>"}</code></pre> 
              c. Créez un fichier `README.MD`. <br />
              d. commitez et pushez.</li>
            <li>e. Sur GitHub, allez dans l'onglet "Issues" et créez un nouveau ticket : "Ajouter la liste des membres de l'équipe". Assignez-le à votre collaborateur.</li>
        </ol>

        <Heading level={4} className="!mt-6">Étape B : Développement (Collaborateur)</Heading>
        <ol>
            <li>a.Acceptez l'invitation et clonez le projet.</li>
            <li>b. Créez une branche nommée en fonction de l'issue (ex: `feature/1-liste-equipe`).
                <pre className="code-block"><code>git checkout -b feature/1-liste-equipe</code></pre>
            </li>
            <li>c. Modifiez le `README.md` pour y ajouter les noms des deux membres de l'équipe.</li>
            <li>d. Faites un commit qui ferme automatiquement l'issue :
              <pre className="code-block"><code>git commit -m "feat: Ajout de la liste des membres (closes #1)"</code></pre></li>
            <li>e. Poussez votre branche sur GitHub :
              <pre className="code-block"><code>git push origin feature/1-liste-equipe</code></pre></li>
            <li>f. Sur GitHub, créez la "Pull Request".</li>
        </ol>

        <Heading level={4} className="!mt-6">Étape C : Revue de Code et Fusion (Mainteneur)</Heading>
        <ol>
            <li>a. Sur la Pull Request, allez dans l'onglet "Files changed". Laissez un commentaire pour demander une modification (ex: "Peux-tu mettre les noms en gras ?"). Puis cliquez sur "Request changes".</li>
            <li>b. **(Collaborateur)** : Faites la modification demandée, commitez (`git commit -m "style: Mise en gras des noms"`) et poussez à nouveau sur la même branche. La PR (Pull Request) se met à jour.</li>
            <li>c. **(Mainteneur)** : Approuvez les changements, puis cliquez sur "Merge pull request".</li>
            <li>d. Mettez à jour votre projet local : `git checkout main` puis `git pull`.</li>
        </ol>

        <Heading level={4} className="!mt-6 !text-purple-600">Étape D : On inverse les Rôles !</Heading>
        <ol>
            <li>a. Le Mainteneur devient le Collaborateur, et vice-versa.</li>
            <li>b. Le **nouveau Mainteneur** crée une nouvelle issue sur GitHub (ex: "Ajouter un lien vers nos profils GitHub").</li>
            <li>c. Le **nouveau Collaborateur** répète tout le processus de l'étape B et C : il crée une branche, fait le travail, crée une Pull Request, reçoit une demande de modification, la corrige, et attend la fusion.</li>
        </ol>
      </>
    )
  },
  {
    title: "Partie 4 : Bonus (Pour les plus rapides)",
    description: (
        <>
            <p>Si vous avez terminé en avance, voici quelques défis pour approfondir vos compétences.</p>
            <div className="space-y-4">
                <Card>
                    <Heading level={4} className="!text-green-700">Défi 1 : L'Archéologue du Code</Heading>
                    <p className="text-sm mt-2">Apprenez à enquêter dans l'historique pour comprendre son évolution.</p>
                    <ul className="list-disc list-inside text-sm mt-2">
                        <li>Utilisez <code>git log --author="{'<nom_du_collègue>'}"</code> pour ne voir que les commits de votre binôme.</li>
                        <li>Utilisez <code>git log -p README.md</code> pour voir l'historique complet des modifications pour ce fichier uniquement.</li>
                        <li>Utilisez <code>git blame README.md</code> pour afficher, ligne par ligne, qui a écrit quoi et quand.</li>
                    </ul>
                </Card>
                <Card>
                    <Heading level={4} className="!text-green-700">Défi 2 : Le Voyage dans le Temps</Heading>
                    <p className="text-sm mt-2">Apprenez à annuler un commit proprement sans détruire l'historique.</p>
                     <ol className="list-decimal list-inside text-sm mt-2">
                        <li>Repérez le hash du dernier commit fusionné sur `main` avec `git log`.</li>
                        <li>Utilisez la commande <code>git revert {'<hash_du_commit>'}</code>. Git va créer un **nouveau commit** qui fait l'inverse du commit problématique.</li>
                        <li>Regardez l'historique : le mauvais commit est toujours là, mais un nouveau "commit d'annulation" a été ajouté. Poussez ce nouveau commit.</li>
                    </ol>
                </Card>
                 <Card>
                    <Heading level={4} className="!text-green-700">Défi 3 : Le Nettoyage de Printemps (Avancé)</Heading>
                    <p className="text-sm mt-2">Apprenez à "nettoyer" plusieurs petits commits en un seul avant de créer une Pull Request.</p>
                    <ol className="list-decimal list-inside text-sm mt-2">
                        <li>Créez une branche et faites 3 petits commits dessus (ex: "début", "correction typo", "ajout image").</li>
                        <li>Utilisez <code>git rebase -i HEAD~3</code>.</li>
                        <li>Dans l'éditeur qui s'ouvre, remplacez `pick` par `squash` (ou `s`) pour le deuxième et troisième commit. Sauvegardez.</li>
                        <li>Git vous demande de rédiger un nouveau message de commit unique pour résumer les 3.</li>
                        <li>Vérifiez votre `git log` : les 3 commits ont été fusionnés en un seul !</li>
                    </ol>
                </Card>
            </div>
        </>
    )
  }
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
                description="Une branche est une copie de votre projet où vous pouvez travailler sur une nouvelle fonctionnalité (ex: 'branche-connexion') sans casser la version principale (la branche 'main'). Pour savoir quelles branches sont présentent : `git branch`"
                command="git branch nouvelle-feature"
            />
            <GitConceptCard 
                title="Checkout"
                analogy="Se téléporter sur une branche"
                description="La commande pour se déplacer d'une branche à une autre. Le raccourci '-b' permet de créer la branche ET de se déplacer dessus en une seule commande."
                command="git checkout nouvelle-feature"
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

      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 3 : Gérer les Dépôts Distants (Les "Remotes")</Heading>
        <p>Un dépôt local sur votre machine peut être connecté à plusieurs dépôts distants. Chaque connexion est appelée un "remote". C'est comme avoir plusieurs services de cloud synchronisés avec le même dossier.</p>
        <GitConceptCard 
            title="Qu'est-ce que 'origin' ?"
            analogy="Le surnom par défaut"
            description="Quand vous clonez un projet depuis GitHub, Git crée automatiquement un remote nommé 'origin' qui pointe vers l'URL du dépôt sur GitHub. C'est une convention, un raccourci pratique. Vous pourriez l'appeler 'github' ou 'mon-cloud', mais tout le monde utilise 'origin'."
        />
          <Heading level={3} className="!mt-8">HTTPS vs. SSH : Comment se connecter ?</Heading>
        <p>Pour lier votre dépôt local à GitHub, vous avez deux manières de vous authentifier. Le choix se fait au moment de copier l'URL depuis GitHub.</p>
        <div className="grid md:grid-cols-2 gap-8 mt-4 not-prose">
            <Card>
                <Heading level={4} className="flex items-center">Connexion HTTPS</Heading>
                <p className="mt-2 font-semibold text-sm italic text-gray-500">"Le mot de passe du site web"</p>
                <p className="mt-2 text-sm text-gray-700">C'est la méthode la plus simple. À chaque `push` ou `pull`, Git vous demandera votre nom d'utilisateur et votre mot de passe GitHub (ou, de manière plus sécurisée, un "Personal Access Token" que vous pouvez générer dans les paramètres de votre compte).</p>
                <pre className="mt-4 text-xs bg-gray-800 text-white p-2 rounded"><code>git remote add origin https://github.com/user/repo.git</code></pre>
            </Card>
             <Card>
                <Heading level={4} className="flex items-center">Connexion SSH</Heading>
                <p className="mt-2 font-semibold text-sm italic text-gray-500">"La clé de la maison"</p>
                <p className="mt-2 text-sm text-gray-700">Plus sécurisée et plus pratique. Vous générez une "clé SSH" sur votre ordinateur et donnez la partie "publique" de la clé à GitHub. Votre ordinateur utilisera alors sa clé "privée" pour s'authentifier automatiquement, sans mot de passe.</p>
                <pre className="mt-4 text-xs bg-gray-800 text-white p-2 rounded"><code>git remote add origin git@github.com:user/repo.git</code></pre>
            </Card>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose mt-4">
             <Card>
                <Heading level={4}>Ajouter un remote</Heading>
                <p className="text-sm mt-2">Connecte votre dépôt local à un dépôt distant existant. C'est ce que vous faites après un `git init`.</p>
                <pre className="mt-4 text-xs bg-gray-800 text-white p-2 rounded"><code>git remote add origin https://...</code></pre>
            </Card>
            <Card>
                <Heading level={4}>Lister / Supprimer les remotes</Heading>
                <p className="text-sm mt-2">Pour voir tous vos remotes connectés (`git remote -v`) ou en supprimer un (`git remote remove {'<nom>'}`).</p>
                <pre className="mt-4 text-xs bg-gray-800 text-white p-2 rounded"><code>git remote remove origin</code></pre>
            </Card>
        </div>
      </section>

      {/* Partie 4: Commandes Avancées */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 4 : Commandes Avancées (Pour aller plus loin)</Heading>
         <div className="grid md:grid-cols-2 gap-6 not-prose mt-4">
            <GitConceptCard 
                title="git rebase"
                analogy="Réécrire l'histoire proprement"
                description="Le 'rebase' permet de déplacer une série de commits pour qu'ils partent d'une nouvelle base. C'est une alternative au 'merge' qui garde un historique plus propre et linéaire, comme si vous aviez travaillé sans interruption après les autres."
                command="git rebase main"
            />
            <GitConceptCard 
                title="git cherry-pick"
                analogy="Le copier-coller d'un commit"
                description="Permet de prendre un commit spécifique d'une branche et de l'appliquer sur une autre. Très utile pour récupérer une correction de bug urgente sans avoir à fusionner toute la branche de fonctionnalités."
                command="git cherry-pick {'<hash_du_commit>'}"
            />
        </div>
      </section>

      {/* Partie 3: Le Workflow de base */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 5 : Le Workflow Quotidien</Heading>
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
        <Heading level={2} className="border-b pb-2 mb-4">Partie 6 : Pourquoi c'est Essentiel pour votre Carrière ?</Heading>
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
