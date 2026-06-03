# Séquence S2 — Écosystème logiciel & bureautique professionnelle

**Niveau :** Première · **Durée :** 6 h (3 h cours + activités · 3 h contrôle pratique)
**Thème :** Logiciel & outils pro
**Compétences :** C04 (Analyser une structure matérielle et logicielle) — Application · C01 (Communiquer en situation professionnelle) — Découverte
**Place dans le fil rouge :** En S1 on a compris la machine (le matériel). Ici on découvre les **logiciels** qui tournent dessus, et on apprend à se servir des outils bureautiques comme un professionnel. En S3 on apprendra à versionner notre travail avec Git, avant de construire le web en S4.
**Point cybersécurité (en filigrane) :** l'hygiène des fichiers (nommage, sauvegarde, versions) et la méfiance face aux fichiers piégés.

> Comme pour S1, ce document présente le contenu pour validation. Une fois validé, il sera transformé au format blocs (`s2-logiciels.js`). On garde une partie du fond existant (le cours OS et le composant `FileExplorerComponent`), on abandonne le TP d'installation de Windows, et on ajoute tout le volet « web vs logiciel », « familles de logiciels » et « bureautique ».

---

## PARTIE COURS (3 h)

### Introduction — Du matériel au logiciel

En S1, on a ouvert la machine et compris ses composants physiques. Mais une machine sans logiciel ne sert à rien : c'est une coquille vide. Dans cette séquence, on découvre les **logiciels** — ce qui donne vie à la machine — puis on apprend à se servir des plus utiles d'entre eux : les outils bureautiques.

À la fin de ce cours, tu sauras : expliquer ce qu'est un système d'exploitation, faire la différence entre une application web et un logiciel installé, classer les grandes familles de logiciels, et produire des documents professionnels avec un traitement de texte, un tableur et un logiciel de présentation.

---

### a. Le système d'exploitation : le chef d'orchestre

Un **système d'exploitation (OS, Operating System)** est le logiciel principal de la machine. Il fait le lien entre le matériel (vu en S1) et toi, avec tes applications. Sans OS, l'ordinateur n'est qu'une boîte de métal et de plastique.

Ses quatre rôles principaux :
- **Gérer le matériel** : il parle au processeur, à la RAM, au stockage pour que tout fonctionne ensemble.
- **Gérer les fichiers** : il organise les données sur le disque, en dossiers et fichiers.
- **Fournir une interface** : ce que tu vois à l'écran (le bureau, les icônes, les fenêtres).
- **Exécuter les logiciels** : il donne à chaque application les ressources dont elle a besoin.

> **Repère historique**
> Au début, tout se faisait en ligne de commande (texte uniquement, comme MS-DOS). Puis sont arrivées les interfaces graphiques (fenêtres + souris), qui ont rendu l'informatique accessible à tous. On reverra la ligne de commande plus tard — c'est un outil toujours essentiel pour un professionnel.

**Les trois grands OS :**

| Windows | macOS | Linux |
|---|---|---|
| Le plus répandu. Grande compatibilité logicielle. Accessible aux débutants. | Exclusif aux appareils Apple. Réputé pour sa stabilité et son design. | Open source, gratuit, ultra-personnalisable. **Le roi des serveurs.** |

> **À retenir pour la suite**
> Linux est le système des serveurs. Quand on déploiera notre site web en Terminale, il tournera très probablement sur un serveur Linux. Ce n'est donc pas un OS « exotique » : c'est celui qui fait tourner la majorité du web.

---

### b. Comment Windows organise les fichiers

L'**Explorateur de fichiers** est l'outil pour naviguer dans tes données. Le lecteur `C:` est le disque principal, organisé en une hiérarchie de dossiers. Bien ranger ses fichiers est une compétence professionnelle de base : un dossier de projet clair, des noms explicites, pas de « Document1 (2) (final) (vrai final).docx ».

*(Composant interactif conservé : `FileExplorerComponent` — simulation de la hiérarchie de fichiers.)*

---

### c. Web ou logiciel installé : où tourne le programme ? *(NOUVEAU — concept central)*

C'est une distinction fondamentale du métier. Tous les logiciels que tu utilises se rangent en deux grandes catégories selon **l'endroit où ils s'exécutent**.

**Le logiciel installé (application « lourde »)**
Il est installé sur ta machine et s'exécute dessus, avec ses ressources (CPU, RAM). Exemples : Word installé, un jeu, l'éditeur de code VS Code. Il fonctionne même sans Internet, mais il faut l'installer et le mettre à jour sur chaque machine.

**L'application web**
Elle s'exécute en partie sur un **serveur distant**, et tu l'utilises via ton **navigateur**. Exemples : Gmail, Google Docs, un site d'achat en ligne. Rien à installer, accessible partout, mais il faut une connexion Internet.

> **Le schéma client / serveur**
> Quand tu utilises une application web, ta machine est le **client** : elle *demande* quelque chose. Le **serveur** (une machine distante, souvent sous Linux) *répond*. Le navigateur affiche le résultat.
> Exemple concret : tu tapes une adresse, ton navigateur (client) demande la page au serveur, le serveur renvoie le HTML, le navigateur l'affiche. C'est exactement ce qu'on construira à partir de S4.

> **Analogie — Le DVD et le streaming**
> Un logiciel installé, c'est un DVD : tu possèdes le film sur un disque chez toi, il marche sans Internet, mais pour le voir sur une autre télé il faut le disque. Une application web, c'est le streaming : le film est sur un serveur, tu y accèdes de n'importe où avec une connexion, sans rien posséder.

| | Logiciel installé | Application web |
|---|---|---|
| S'exécute… | Sur ta machine | En partie sur un serveur distant |
| Accès | Le logiciel installé localement | Via un navigateur |
| Internet | Pas toujours nécessaire | Nécessaire |
| Mise à jour | À faire sur chaque machine | Automatique, côté serveur |
| Exemple | Word, VS Code, un jeu | Gmail, Google Docs, un site web |

---

### d. Les grandes familles de logiciels *(NOUVEAU)*

Au-delà du « où ça tourne », on classe les logiciels par **usage** :

- **Systèmes d'exploitation** : Windows, Linux, macOS (vus plus haut).
- **Bureautique** : traitement de texte, tableur, présentation (la suite de cette séquence).
- **Navigateurs web** : Firefox, Chrome, Edge.
- **Outils de développement** : éditeurs de code (VS Code), terminaux, Git (S3).
- **Multimédia** : retouche d'image, montage vidéo, son.
- **Utilitaires** : antivirus, compression, sauvegarde.

> **Logiciel libre vs propriétaire**
> Certains logiciels sont **libres/open source** (gratuits, code ouvert, modifiables : Linux, Firefox, LibreOffice) ; d'autres sont **propriétaires** (payants, code fermé : Windows, la suite Microsoft Office). Ce n'est pas « gratuit contre payant » : c'est surtout une question de liberté d'usage et d'accès au code. On y reviendra, c'est un sujet important du métier.

---

### e. La bureautique professionnelle *(NOUVEAU — partie pratique du cours)*

Trois outils que tout professionnel doit maîtriser. On les présente ici ; tu les pratiques juste après en activité.

**Le traitement de texte (Word / LibreOffice Writer)**
Pour produire des documents structurés : rapports, courriers, comptes-rendus.
- L'erreur du débutant : mettre en forme « à la main » (espaces, sauts de ligne). Le pro utilise les **styles** (Titre 1, Titre 2, Normal) : cohérence garantie et table des matières automatique.
- À maîtriser : styles de titres, listes, insertion d'images, en-tête/pied de page, table des matières automatique.

**Le tableur (Excel / LibreOffice Calc)**
Pour manipuler des données et faire des calculs automatiques.
- La force du tableur : les **formules**. On ne calcule pas à la main, on écrit une formule qui se recalcule toute seule.
- À maîtriser : saisir des données, écrire une formule (`=SOMME(...)`, `=MOYENNE(...)`, une multiplication simple), mettre en forme un tableau, faire un graphique.

> **Encadré — Une formule, c'est déjà de la logique**
> Quand tu écris `=A1*B1` dans une cellule, tu donnes une *instruction* à la machine : « multiplie ces deux valeurs ». C'est un premier pas vers la programmation : on décrit un calcul une fois, la machine l'exécute autant de fois qu'on veut. Garde ça en tête, on retrouvera cette idée en JavaScript (S6) et en Python (S8).

**Le logiciel de présentation (PowerPoint / LibreOffice Impress)**
Pour présenter un travail à l'oral, avec des diapositives.
- L'erreur du débutant : tout écrire sur la diapo. Le pro met **peu de texte** (des mots-clés), des visuels, et c'est lui qui parle.
- À maîtriser : créer des diapositives, utiliser un plan clair (titre, contenu, conclusion), insérer images et schémas, soigner la lisibilité.

---

### f. Point cybersécurité — L'hygiène des fichiers

Travailler proprement, c'est aussi travailler en sécurité.
- **Nommer clairement** ses fichiers et dossiers : on retrouve son travail, on évite les erreurs.
- **Sauvegarder régulièrement** et garder des **versions** : une seule copie, c'est un accident qui efface tout. (On verra en S3 que Git est l'outil ultime pour ça.)
- **Méfiance avec les pièces jointes et fichiers téléchargés** : un fichier bureautique peut contenir du code malveillant (les fameuses « macros » piégées). On n'ouvre pas un fichier d'origine douteuse.

> **À retenir**
> Un fichier n'est pas toujours inoffensif. Un document Word ou un tableur peut embarquer des instructions cachées. Règle pro : on n'ouvre que ce dont on connaît la provenance.

---

### Mémo de fin de cours

- L'OS est le chef d'orchestre : matériel, fichiers, interface, exécution des logiciels.
- Web vs installé = **où tourne le programme** : sur ta machine, ou sur un serveur distant qu'on consulte via le navigateur (modèle client/serveur).
- On classe les logiciels par usage (OS, bureautique, navigateurs, dev, multimédia, utilitaires) et par licence (libre / propriétaire).
- Bureautique pro : Word (styles), Excel (formules), PowerPoint (peu de texte, on parle).
- Sécurité : nommer, sauvegarder, versionner, se méfier des fichiers douteux.

---

## PARTIE ACTIVITÉS (intégrées aux 3 h de cours)

Petites mises en main guidées, à faire au fil du cours (chacun sur son poste) :
1. **Explorateur de fichiers** : créer une arborescence de dossiers propre pour ses cours (un dossier par séquence).
2. **Word** : reproduire un court document avec styles de titres et une table des matières automatique.
3. **Excel** : saisir un petit tableau (ex. relevé de notes ou budget) et écrire deux formules (`=SOMME`, `=MOYENNE`).
4. **PowerPoint** : faire 3 diapositives sur un sujet libre, en respectant la règle « peu de texte ».

---

## PARTIE CONTRÔLE (3 h) — Mini-dossier technique

> Évaluation pratique sur poste, **individuelle**. Même structure que les activités du cours, mais sur un **sujet imposé** et noté. Deux variantes G1/G2 : même travail demandé, contextes différents pour éviter la copie. Le résultat est un mini-dossier composé des trois livrables. (Évaluation séparée : voir le document de contrôle dédié.)

**Mission :** produire un petit dossier de présentation professionnel sur un sujet technique simple, en utilisant les trois outils bureautiques.

**Contexte G1 :** présenter un composant d'ordinateur de ton choix (vu en S1).
**Contexte G2 :** présenter un système d'exploitation de ton choix.

**Livrables (les trois) :**

1. **Document Word structuré** (environ 1 page) — avec :
   - un titre mis en forme par un **style** (pas à la main),
   - au moins deux sous-titres (Titre 2),
   - un paragraphe de présentation, une liste à puces,
   - une **table des matières automatique**,
   - un pied de page avec le nom de l'élève.

2. **Tableau Excel** — un petit tableau comparatif (ex. 3 éléments comparés sur 3 critères) avec :
   - des données saisies proprement,
   - au moins **une formule** (`=SOMME`, `=MOYENNE`, ou un calcul),
   - une mise en forme lisible (bordures, en-têtes),
   - un **graphique** simple.

3. **Présentation PowerPoint** (3-4 diapositives) — avec :
   - une diapo de titre, une à deux diapos de contenu, une diapo de conclusion,
   - **peu de texte** par diapo (mots-clés),
   - au moins une image ou un schéma.

**Barème indicatif (sur 20) :**
- Word — structure et styles : 7 pts (titre par style 2, sous-titres 1, table des matières auto 2, liste + pied de page 2)
- Excel — données et formule : 7 pts (tableau propre 2, formule correcte 3, graphique 2)
- PowerPoint — clarté : 6 pts (structure 2, règle « peu de texte » 2, visuel 2)

> **Esprit de notation (bienveillant) :** un travail sérieux mais imparfait garde ses points sur ce qui est réussi. Une formule qui a une petite erreur mais montre la bonne logique vaut une grande partie des points. On valorise la démarche professionnelle (propreté, structure) autant que le résultat.

**Compétences évaluées :** C04 (analyser/structurer l'information sur un sujet technique) et C01 (communiquer clairement à l'écrit et via une présentation).
