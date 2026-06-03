# Séquence S3 — Git & GitHub : versionner son travail

**Niveau :** Première · **Durée :** 3 h (cours + exercices guidés + présentation Classroom)
**Thème :** Outils & projet
**Compétences :** C09 (Installer les éléments d'un système informatique) — Découverte · C01 (Communiquer en situation professionnelle) — touché en filigrane
**Place dans le fil rouge :** Avant de produire des pages web (S4), on apprend à les **sauvegarder, retrouver et partager** proprement avec Git et GitHub. Cet outil sera utilisé dès la séance suivante — et toute l'année.

**Particularité de cette séquence :** **pas de TP autonome ni d'évaluation séparés.** La pratique de Git se fera **en situation réelle** à chaque séquence qui suit (S4 HTML et toutes les autres). C'est aussi à chaque TP qui suit que la C09 sera évaluée (qualité et régularité des commits, propreté du dépôt). Pendant les 3h, c'est cours + exercices guidés sur le poste + présentation de GitHub Classroom.

**Point cybersécurité (en filigrane) :** ne jamais versionner de secrets (mots de passe, clés). Comprendre la différence entre dépôt public et privé.

> Document de validation. Une fois validé, transformation au format blocs (`s3-git.js`).

---

## PARTIE COURS + EXERCICES GUIDÉS (3 h, alternant explications et manipulations)

### Introduction — Le chaos qu'on veut éviter

Tu écris un devoir important. Au bout de quelques heures, ton dossier ressemble à ça : `devoir.docx`, `devoir_v2.docx`, `devoir_final.docx`, `devoir_final_corrigé.docx`, `devoir_VRAI_final.docx`. Tu n'oses plus rien supprimer, tu ne sais plus laquelle est la bonne, et si tu casses quelque chose tu n'as aucun moyen de revenir en arrière.

**Cette situation, c'est exactement ce que Git résout.** Git est une *machine à remonter le temps* pour ton code (et pour tous tes fichiers, en réalité). GitHub, lui, est le cloud sur lequel tu déposes ces sauvegardes pour les partager et les retrouver de n'importe où.

À la fin de cette séquence, tu sauras : pourquoi versionner ton travail, faire la différence entre Git et GitHub, utiliser les commandes essentielles pour sauvegarder ton travail, mettre ton projet en ligne, et reconnaître ce qu'est une branche.

---

### Partie 1 — Git n'est PAS GitHub

C'est la première chose à clarifier. Ce sont deux choses différentes mais complémentaires.

**Git : l'outil**
Un **logiciel** installé sur ton ordinateur. Son seul rôle : suivre les modifications de tes fichiers dans un dossier. Il fonctionne entièrement **en local**, sans Internet.

> *Analogie : Git, c'est Microsoft Word. Il est sur ton PC et gère tes documents.*

**GitHub : le service en ligne**
Un **site web** qui héberge tes projets Git. Il utilise Git en coulisses, mais y ajoute des fonctionnalités sociales : collaboration, partage, suivi de bugs, hébergement public.

> *Analogie : GitHub, c'est Google Docs. C'est en ligne, ça permet de stocker ses documents et de travailler à plusieurs dessus.*

> **À retenir**
> Git fait le travail technique sur ta machine. GitHub est l'un des sites où l'on dépose les projets Git (il en existe d'autres : GitLab, Bitbucket…). On peut très bien utiliser Git sans GitHub, mais aujourd'hui les deux vont presque toujours ensemble.

---

### Partie 2 — Le vocabulaire essentiel

Cinq mots à connaître pour ne plus être perdu :

| Mot | Analogie | Ce que c'est |
|---|---|---|
| **Repository (dépôt)** | Le dossier du projet | Le dossier qui contient ton projet + tout son historique de modifications (caché dans un sous-dossier `.git`). |
| **Commit** | Un point de sauvegarde | Une « photo » de l'état de tes fichiers à un instant T, avec un message qui explique ce qui a changé. |
| **Push** | Envoyer son travail | Envoyer tes commits depuis ton ordinateur vers GitHub. |
| **Pull** | Récupérer le travail des autres | Faire le contraire : récupérer ce qu'il y a sur GitHub vers ton ordinateur. |
| **Branch (branche)** | Un univers parallèle | Une copie séparée du projet où tu peux travailler sans casser la version principale. *(Concept à connaître ; on ne pratiquera pas la création de branches aujourd'hui.)* |

---

### Partie 3 — Le workflow quotidien (à retenir absolument)

Tout le cycle de Git tient en **4 étapes**, que tu refais des dizaines de fois par jour quand tu travailles :

1. **Tu modifies tes fichiers** (tu codes, tu écris, tu corriges).
2. **Tu sélectionnes les changements à sauvegarder** : `git add .`
3. **Tu fais un commit** (un point de sauvegarde local) : `git commit -m "Message clair"`
4. **Tu pousses sur GitHub** pour partager/sauvegarder en ligne : `git push`

> **Le réflexe matinal**
> Avant de commencer à travailler (ou après une longue pause), fais toujours un `git pull` pour récupérer les dernières modifications. Sinon tu risques de travailler sur une vieille version.

---

### Exercice guidé n° 1 — Installer et configurer Git *(15-20 min, ensemble au tableau + chacun son poste)*

Pour démarrer une bonne fois pour toutes :

1. **Vérifier que Git est installé** : ouvrir le terminal de VS Code, taper `git --version`. Une version doit s'afficher.
2. **Se présenter à Git** (à faire une seule fois sur la machine) :
   ```
   git config --global user.name "Prénom Nom"
   git config --global user.email "ton.email@exemple.fr"
   ```
3. **Vérifier la configuration** : `git config --list` doit afficher ton nom et ton email.

> *Pourquoi ces deux infos ?* Chaque commit est signé avec ton nom : tu sais qui a fait quoi dans un projet. C'est essentiel en travail d'équipe.

---

### Exercice guidé n° 2 — Mon premier dépôt local *(20-30 min, en suivant pas à pas)*

On crée un mini-projet et on le versionne. Cet exercice est le squelette de ce que les élèves feront pour de vrai dès S4.

1. **Créer un dossier** `mon-premier-depot` dans Documents et l'ouvrir dans VS Code.
2. **Initialiser Git** : dans le terminal, taper `git init`. Un dossier caché `.git` est créé : ton dépôt est né.
3. **Créer un premier fichier** : `bonjour.txt`, écrire « Bonjour Git ! » dedans, enregistrer.
4. **Voir l'état du dépôt** : `git status` montre que `bonjour.txt` est « non suivi » (Git le voit mais ne le surveille pas encore).
5. **Ajouter au prochain commit** : `git add .` (le `.` = tous les fichiers du dossier).
6. **Faire le premier commit** : `git commit -m "Premier commit : ajout du fichier bonjour"`. Bravo, c'est ta première photo enregistrée.
7. **Modifier puis re-committer** : ajouter une 2e ligne dans `bonjour.txt`, refaire `git add .` puis `git commit -m "Ajout d'une phrase"`. Tu as deux points de sauvegarde maintenant.
8. **Voir l'historique** : `git log --oneline` affiche tes commits.

> **Encadré — Un bon message de commit**
> Un message comme `"truc"` ne sert à rien. Un bon message dit *ce que le commit change*, à l'impératif : `"Ajout du titre principal"`, `"Correction du bug d'affichage du menu"`. C'est ce que tu liras dans 6 mois quand tu chercheras pourquoi tu as fait un changement.

---

### Partie 4 — La notion de branche (sans pratique)

Une **branche**, c'est comme un *univers parallèle* de ton projet. Par défaut, tu travailles sur la branche `main` (ou parfois `master` sur d'anciens projets). Mais tu pourrais créer une branche `essai-nouvelle-fonctionnalite` pour tester quelque chose : tes modifications y sont **isolées**, le `main` reste intact. Si l'essai est concluant, on **fusionne** la branche dans le `main`. Sinon, on jette la branche, sans dommage.

> *Pourquoi en parler aujourd'hui sans pratiquer ?*
> Parce que tu vas voir le mot « branch » partout : sur GitHub, dans VS Code, dans les commandes. Il faut au moins savoir ce que c'est. On créera et fusionnera des branches plus tard, en Terminale, quand on en aura vraiment besoin (maintenance d'application déployée).

**Pour l'instant, on travaille sur `main`, et ça suffit largement.**

---

### Partie 5 — Mettre son projet en ligne sur GitHub

Le dépôt local, c'est bien. Mais il vit sur ta seule machine : si elle tombe en panne, tout est perdu. **GitHub** est un site qui héberge des dépôts Git en ligne — sauvegarde, accès partout, partage facile.

---

### Exercice guidé n° 3 — Créer son compte GitHub et son premier dépôt en ligne *(30-40 min)*

1. **Créer un compte** sur github.com (si ce n'est pas déjà fait). *Note ton identifiant et ton mot de passe sur une fiche que tu gardes.*
2. **Créer un dépôt vide sur GitHub** : bouton « New » → nom `mon-premier-depot` → laisser **privé** par défaut → créer (ne pas cocher « Add a README », on a déjà du contenu local).
3. **Lier le dépôt local au dépôt distant** (commande affichée par GitHub après création) :
   ```
   git remote add origin <URL_du_depot>
   git branch -M main
   git push -u origin main
   ```
4. **Vérifier** : recharger la page du dépôt sur GitHub, tes fichiers doivent y être.

> **Encadré cybersécurité — Public ou privé ?**
> Sur GitHub, un dépôt peut être **public** (n'importe qui peut le voir, y compris des recruteurs plus tard) ou **privé** (seulement toi et les personnes que tu invites). **Pour les travaux scolaires, on reste en privé** par défaut. Et surtout : **on ne met jamais de mot de passe, de clé API, ou de donnée personnelle dans un dépôt** — même privé. Une fois un secret poussé, il reste dans l'historique même si on l'efface après.

---

### Partie 6 — Présentation de GitHub Classroom *(15-20 min, démonstration)*

Pour les TP de cours, on n'utilisera pas des dépôts créés à la main : on passera par **GitHub Classroom**. C'est un outil de GitHub fait exprès pour les enseignants.

**Comment ça marche, du côté élève :**
- Le professeur publie un « assignment » (un TP).
- Il partage un lien d'invitation.
- L'élève clique sur le lien → **son dépôt personnel est créé automatiquement** à partir d'un template (un dépôt de départ préparé par le prof).
- L'élève code dans son dépôt, fait ses `add` / `commit` / `push` comme appris aujourd'hui.

**Le workflow de validation des TP (à partir de S4) :**
1. Tu travailles sur ton dépôt par étapes (chaque TP est découpé en plusieurs étapes sur le site).
2. Quand tu finis une étape, tu **push**, et tu **préviens le professeur**.
3. Le professeur regarde ton dépôt sur Classroom et te donne **le feu vert** (ou vient t'expliquer ce qui ne va pas).
4. Tu passes à l'étape suivante.

> *C'est exactement le fonctionnement d'une équipe de développement professionnelle : on travaille par petits incréments, on demande une « revue » à un collègue avant de continuer. Tu es donc déjà dans une vraie posture de pro.*

**Ce qu'on fera ensemble en fin de séance :** suivre le lien d'invitation du premier assignment, vérifier que ton dépôt personnel s'est bien créé, et le cloner sur ta machine avec `git clone <URL>` — pour être prêt à attaquer S4 la séance suivante.

---

### Mémo de fin de séquence

- **Git** = outil local pour versionner. **GitHub** = service en ligne pour héberger et partager.
- Le **workflow quotidien** : modifier → `git add .` → `git commit -m "..."` → `git push`. Et le matin : `git pull`.
- Un **commit** = une sauvegarde avec un message clair (à l'impératif).
- Une **branche** = un univers parallèle (on en reparlera en Terminale).
- **Sécurité** : jamais de secrets dans un dépôt ; pour les TP, on reste en privé.
- À partir de S4 : tous les TP passent par **GitHub Classroom**. Tu pousses, je regarde, je valide → tu continues.

---

## Notes pour la suite

- **Pas de TP autonome** : la pratique réelle commence en S4.
- **Pas d'évaluation séparée** : C09 sera évaluée en situation **à chaque TP suivant** (qualité des commits, régularité, propreté du dépôt). C'est plus fidèle qu'un QCM ponctuel et donne plusieurs relevés au lieu d'un seul.
- **Côté progression** : à mettre à jour pour refléter cette évolution (S3 sans TP/éval séparés ; relevés C09 répartis sur S4–S11).
