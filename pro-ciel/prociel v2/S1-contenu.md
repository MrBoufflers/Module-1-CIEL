# Séquence S1 — C'est quoi un ordinateur ?

**Niveau :** Première · **Durée :** 3 h (1 h cours · 1 h TP démontage · 1 h évaluation QCM)
**Thème :** Matériel & systèmes
**Compétences :** C04 (Analyser une structure matérielle et logicielle) — niveau Découverte
**Place dans le fil rouge :** C'est le tout premier contact. Avant d'écrire la moindre ligne de code, on comprend la machine sur laquelle on va travailler. En S2 on verra les logiciels qui tournent dessus, en S3 on apprendra à versionner notre travail.
**Point cybersécurité (en filigrane) :** la surface d'attaque matérielle (ports, périphériques) et pourquoi on verrouille sa session.

> Ce document présente le contenu pédagogique pour validation. Une fois validé, il sera transformé au format « blocs » défini dans le cahier des charges, puis intégré par Claude Code. Le fond reprend et complète le cours existant de la V1 ; les composants interactifs existants (frise historique, diagramme de Von Neumann, présentation des composants) sont conservés.

---

## PARTIE COURS (1 h)

### Introduction — De quoi on parle ?

On utilise des ordinateurs tous les jours sans vraiment savoir ce qu'il y a dedans. Avant de devenir celui ou celle qui les programme, les répare et les sécurise, il faut ouvrir le capot et comprendre comment la machine fonctionne. C'est l'objet de cette première séquence.

À la fin de ce cours, tu sauras : nommer les composants principaux d'un ordinateur et leur rôle, expliquer comment ils travaillent ensemble, faire la différence entre matériel et logiciel, et distinguer un PC d'un serveur ou d'un smartphone.

---

### a. Une brève histoire de l'informatique

L'informatique n'est pas née avec les smartphones. C'est une longue histoire d'idées et d'inventions, des premières machines à calculer mécaniques jusqu'aux ordinateurs de poche d'aujourd'hui.

*(Composant interactif conservé : frise chronologique `HistoryTimeline`, et illustration de l'histoire des langages informatiques.)*

> **Encadré — Pourquoi connaître cette histoire ?**
> Comprendre d'où on vient aide à comprendre pourquoi les machines sont faites ainsi aujourd'hui. Chaque composant moderne est la réponse à un problème rencontré par les ingénieurs d'avant.

---

### b. Comment fonctionne un ordinateur, en théorie ?

Presque tous les ordinateurs modernes reposent sur un principe simple : **l'architecture de Von Neumann**. Elle décrit quatre éléments qui travaillent ensemble.

*(Composant interactif conservé : `VonNeumannDiagramComponent`.)*

Le processus, étape par étape : quand tu lances un programme, le **processeur (CPU)** va chercher les instructions stockées sur le **disque de stockage**, les charge dans la **mémoire vive (RAM)** pour y accéder très vite, puis exécute les calculs. Le résultat est envoyé vers un **périphérique de sortie** (l'écran, par exemple).

> **Analogie — La cuisine d'un restaurant**
> Le processeur, c'est le cuisinier. Le disque de stockage, c'est le garde-manger (tout y est rangé, mais c'est loin). La RAM, c'est le plan de travail : on y pose les ingrédients du plat en cours pour les avoir sous la main. Et l'assiette servie au client, c'est l'écran.

---

### c. Les composants d'un ordinateur et leurs rôles

Voici les pièces que tu retrouveras dans (presque) toutes les machines.

*(Composant interactif conservé : `ComponentShowcase`.)*

En résumé :

- **Le processeur (CPU)** — le cerveau : il exécute les instructions et fait les calculs.
- **La mémoire vive (RAM)** — la mémoire de travail : rapide mais *volatile* (tout s'efface à l'extinction).
- **Le stockage (SSD / disque dur)** — la mémoire permanente : plus lent que la RAM, mais conserve les données même éteint.
- **La carte mère** — la colonne vertébrale : elle relie et fait communiquer tous les composants.
- **La carte graphique (GPU)** — spécialisée dans l'affichage et les calculs graphiques.
- **L'alimentation** — convertit le courant du secteur pour nourrir chaque composant.

> **Le point à retenir**
> RAM et stockage sont souvent confondus. Règle simple : la **RAM** est rapide et s'efface ; le **stockage** est plus lent mais garde tout. Plus de RAM = on peut travailler sur plus de choses à la fois ; plus de stockage = on peut garder plus de fichiers.

---

### d. Matériel, logiciel, micrologiciel

Trois mots qu'on confond souvent :

- **Matériel (hardware)** — tout ce qui est physique et qu'on peut toucher : le processeur, l'écran, la souris. La machine elle-même.
- **Logiciel (software)** — l'ensemble des programmes qui disent au matériel quoi faire. C'est immatériel : Windows, un jeu, un navigateur.
- **Micrologiciel (firmware)** — un logiciel spécial « gravé » dans un composant pour le faire fonctionner à très bas niveau. Le BIOS/UEFI de la carte mère en est l'exemple parfait.

---

### e. PC, serveur, smartphone : même principe, usages différents *(NOUVEAU)*

Tous ces appareils sont des ordinateurs : ils ont un processeur, de la mémoire, du stockage, un système d'exploitation. Ce qui change, c'est **leur usage et donc leurs priorités**.

| | Ordinateur personnel (PC) | Serveur | Smartphone |
|---|---|---|---|
| **Sert à...** | Travailler, naviguer, jouer | Fournir un service à d'autres machines (sites web, fichiers, jeux en ligne) | Communiquer, applis mobiles |
| **Fonctionne...** | Quand on l'allume | En continu, 24h/24, 7j/7 | Toute la journée, sur batterie |
| **Priorité** | Polyvalence | Fiabilité et puissance soutenue | Autonomie et compacité |
| **Exemple concret** | La tour devant toi | La machine qui héberge `pro-ciel.netlify.app` | Ton téléphone |

> **Analogie — Le restaurant, encore lui**
> Un PC, c'est ta cuisine à la maison : tu cuisines pour toi quand tu veux. Un serveur, c'est la cuisine d'un restaurant : elle tourne en continu pour servir des centaines de clients (les autres machines qui demandent une page web, un fichier...). Un smartphone, c'est un food-truck : il fait presque tout, mais en version compacte et sur batterie.

Ce vocabulaire reviendra toute l'année : quand on déploiera notre site web (en Terminale), on l'installera justement sur un **serveur**.

---

### f. Point cybersécurité — La machine, première ligne de défense *(NOUVEAU, en filigrane)*

La sécurité commence par le matériel.

- **Les ports physiques** (USB, etc.) sont une porte d'entrée : brancher une clé USB inconnue peut infecter une machine. On parle de *surface d'attaque*.
- **Verrouiller sa session** (Windows + L) quand on s'éloigne du poste empêche quelqu'un d'accéder à ses données. Geste simple, réflexe professionnel.

> **À retenir**
> Plus un appareil a de portes d'entrée (ports, connexions sans fil, périphériques), plus il offre d'occasions à un attaquant. La sécurité, c'est aussi savoir fermer les portes qu'on n'utilise pas.

---

### Mémo de fin de cours

- Un ordinateur = matériel (qu'on touche) + logiciel (les programmes) + micrologiciel (le firmware bas niveau).
- Architecture de Von Neumann : CPU + mémoire + stockage + entrées/sorties.
- RAM = rapide et volatile ; stockage = lent et permanent.
- PC, serveur et smartphone sont tous des ordinateurs, avec des usages différents.
- Sécurité : la machine est la première ligne de défense (ports, verrouillage de session).

**Ressources autorisées (réutilisables en évaluation) :** la frise historique et le diagramme de Von Neumann du cours.

---

## PARTIE TP (1 h) — Démontage, remontage et identification

> **Cas particulier : TP physique.** Ce TP ne produit pas de code, donc il ne passe pas par GitHub. La validation se fait par **observation directe du professeur** et par une **fiche d'identification des composants** remplie par l'élève. Chaque élève travaille **individuellement** sur son poste (PC de récupération).

**Mission :** ouvrir une unité centrale, identifier physiquement les composants vus en cours, les retirer puis les remonter correctement, et vérifier que la machine redémarre.

**Matériel par élève :** une tour de PC de récupération, un tournevis cruciforme, un bracelet antistatique, un petit récipient pour les vis, une fiche d'identification à compléter.

### Étape 1 — Sécurité et préparation *(validation obligatoire avant de continuer)*
La sécurité d'abord. Avant toute manipulation :
- Comprendre l'électricité statique (ESD) : invisible, indolore, mais qui peut détruire un composant.
- Porter le bracelet antistatique, pince reliée à une partie métallique non peinte du boîtier.
- Vérifier que la tour est débranchée du secteur, puis appuyer 5 secondes sur le bouton d'allumage pour vider l'électricité résiduelle.

**Validé quand :** le professeur a vérifié le port du bracelet et le débranchement.

### Étape 2 — Observation et identification
Avant de toucher : ouvrir le boîtier et **remplir la fiche d'identification** — repérer et nommer le CPU (sous le ventirad), la RAM, le stockage, la carte mère, la carte graphique si présente, l'alimentation.

**Validé quand :** la fiche est correctement remplie (vérifiée par le professeur).

### Étape 3 — Démontage méthodique
Retirer les composants amovibles dans l'ordre, en **prenant une photo à chaque étape** (pour le remontage) : carte graphique, barrettes de RAM, câbles de données du stockage. *(On ne démonte pas le CPU ni le ventirad.)*

**Validé quand :** les composants sont retirés proprement, rangés, sans forçage.

### Étape 4 — Remontage et test
Remonter dans l'ordre inverse en s'aidant des photos. Réinsérer la RAM jusqu'au « clic », la carte graphique dans son port, rebrancher les câbles. Puis test minimal : alimentation + écran + clavier, allumer.

**Validé quand :** la machine démarre et atteint le POST/BIOS (les composants y sont reconnus). C'est la réussite de la mission.

**Critères de réussite globaux :** respect de la sécurité ESD, fiche correctement remplie, manipulation soignée, machine fonctionnelle au redémarrage. *(Évaluation bienveillante : une tentative sérieuse mais imparfaite au remontage n'annule pas le travail d'identification.)*

---

## PARTIE ÉVALUATION (1 h) — QCM

> Format QCM, sur poste (le composant `Quiz` existant est réutilisé et enrichi). Évalue **C04** au niveau Découverte : reconnaître les composants, comprendre leur rôle, distinguer les types de machines. Deux variantes de mêmes difficulté et structure (G1/G2) avec questions mélangées pour éviter la copie.

Banque de questions proposée (à répartir entre G1 et G2) :

1. Quel composant est le « cerveau » de l'ordinateur ? — RAM / GPU / **CPU** / Disque dur
2. La mémoire vive (RAM) est une mémoire... — **Volatile** / Permanente / Optique / Mécanique
3. Quel est le rôle de la carte mère ? — Afficher les graphismes / **Relier tous les composants** / Alimenter le PC / Refroidir le CPU
4. Le BIOS/UEFI est un exemple de... — Matériel / Logiciel / **Micrologiciel (firmware)** / Virus
5. Lequel conserve les données quand l'ordinateur est éteint ? — La RAM / **Le SSD** / Le processeur / Le cache
6. Dans l'architecture de Von Neumann, que fait le CPU ? — Stocke les fichiers / **Exécute les instructions** / Affiche l'image / Alimente la carte mère
7. Quelle machine est conçue pour fonctionner 24h/24 et servir d'autres ordinateurs ? — Un smartphone / **Un serveur** / Un PC de bureau / Une tablette
8. Lequel relève du *logiciel* (software) ? — L'écran / La souris / **Le navigateur web** / La carte graphique
9. Pourquoi verrouiller sa session quand on quitte son poste ? — Pour économiser la batterie / **Pour empêcher l'accès à ses données** / Pour éteindre l'écran / Pour accélérer le PC
10. Qu'est-ce qu'une « surface d'attaque » matérielle ? — La taille de l'écran / **Les points d'entrée physiques (ports, périphériques)** / La puissance du CPU / La vitesse du disque

**Barème indicatif :** 1 point par bonne réponse, QCM noté sur 10. Pas de point négatif.
