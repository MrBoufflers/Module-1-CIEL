

---

## PARTIE COURS/EXERCICES (1h30 — avec le professeur)

---

### Introduction (10 min)

#### Titre : Python, le couteau suisse du technicien CIEL

#### Accroche :
Vous connaissez JavaScript. Vous savez faire des variables, des conditions, des boucles. Bonne nouvelle : vous savez déjà programmer. Maintenant, on va apprendre Python — et vous allez voir que c'est plus simple, plus lisible, et surtout c'est LE langage de la cybersécurité et de l'administration système.

#### Pourquoi Python en CIEL ?
- C'est le langage n°1 en cybersécurité (scripts d'audit, tests d'intrusion, analyse de logs)
- C'est le langage de l'automatisation système (scripts d'administration, gestion de serveurs)
- C'est le langage des outils réseau (Scapy, Nmap scripting, Wireshark plugins)
- Les outils comme Metasploit, Burp Suite, et de nombreux exploits sont écrits en Python
- C'est aussi le langage le plus demandé dans les offres d'emploi IT

#### Ce qui change par rapport au JavaScript :
- Plus de point-virgule en fin de ligne
- Plus d'accolades { } → c'est l'indentation (les espaces) qui structure le code
- Plus de var / let / const → on écrit directement le nom de la variable
- console.log() devient print()
- Les commentaires passent de // à #

#### Objectifs du cours :
- Écrire et exécuter un script Python
- Maîtriser les variables, les types de données et les conversions
- Utiliser input() et print() pour interagir avec l'utilisateur
- Écrire des conditions (if / elif / else)
- Écrire des boucles (for et while)

---

### Partie 1 — Premier programme et syntaxe de base (15 min)

#### Hello World — La comparaison :

En JavaScript :
```javascript
// JavaScript
console.log("Hello World !");
let nom = "CIEL";
console.log("Bienvenue en " + nom);
```

En Python :
```python
# Python
print("Hello World !")
nom = "CIEL"
print("Bienvenue en " + nom)
```

#### Ce qu'on remarque tout de suite :
1. Pas de point-virgule → Python n'en a pas besoin
2. Pas de let/const/var → on écrit directement le nom de la variable
3. console.log() → print()
4. // commentaire → # commentaire
5. La syntaxe est plus courte et plus lisible

#### Les règles de base de Python :
- Une instruction par ligne (pas de ; pour séparer)
- Les commentaires commencent par #
- Les noms de variables : en minuscules, avec des underscores (mon_nombre, adresse_ip)
- Python est sensible à la casse : nom et Nom sont deux variables différentes
- L'indentation est OBLIGATOIRE et fait partie de la syntaxe (on y revient dans les conditions)

#### Exercice 1 — À faire ensemble :
Traduisez ce code JavaScript en Python :

```javascript
// JavaScript
let prenom = "Lucas";
let age = 17;
console.log("Je m'appelle " + prenom);
console.log("J'ai " + age + " ans");
```

#### Correction :

```python
# Python
prenom = "Lucas"
age = 17
print("Je m'appelle " + prenom)
print("J'ai " + str(age) + " ans")
```

Point important : en Python, on ne peut pas concaténer directement un nombre avec une chaîne. Il faut le convertir avec str(). Alternativement, on peut utiliser les f-strings (qu'on verra juste après).

---

### Partie 2 — Variables, types et conversions (15 min)

#### Les types de données en Python :

| Type Python | Équivalent JS | Exemple | Description |
|------------|---------------|---------|-------------|
| int | Number | 42 | Nombre entier |
| float | Number | 3.14 | Nombre décimal |
| str | String | "hello" | Chaîne de caractères |
| bool | Boolean | True / False | Booléen (attention à la majuscule !) |
| list | Array | [1, 2, 3] | Liste (tableau) |
| dict | Object | {"cle": "valeur"} | Dictionnaire (objet) |
| None | null | None | Valeur nulle |

#### Différences cruciales avec JavaScript :
- Les booléens s'écrivent True et False (avec majuscule), pas true/false
- Le "null" de JS s'appelle None en Python
- Python n'a pas de undefined
- Pas besoin de déclarer le type : Python le devine tout seul (typage dynamique)

#### Vérifier le type d'une variable :

```python
# La fonction type() — équivalent de typeof en JS
nombre = 42
print(type(nombre))    # <class 'int'>

texte = "Bonjour"
print(type(texte))     # <class 'str'>

decimal = 3.14
print(type(decimal))   # <class 'float'>

actif = True
print(type(actif))     # <class 'bool'>
```

#### Les conversions de type (casting) :

```python
# Convertir en entier
int("42")        # 42

# Convertir en décimal
float("3.14")    # 3.14

# Convertir en texte
str(42)          # "42"

# Convertir en booléen
bool(0)          # False
bool(1)          # True
bool("")         # False (chaîne vide = False)
bool("texte")    # True (chaîne non vide = True)
```

#### Les f-strings — La meilleure façon d'afficher :

```python
# La concaténation classique (comme en JS)
nom = "Lucas"
age = 17
print("Je m'appelle " + nom + " et j'ai " + str(age) + " ans")

# Les f-strings (bien plus propre !) — préfixe f devant les guillemets
print(f"Je m'appelle {nom} et j'ai {age} ans")

# On peut même faire des calculs dans les { }
prix = 49.99
quantite = 3
print(f"Total : {prix * quantite} €")    # Total : 149.97 €
```

Les f-strings, c'est la façon moderne et recommandée. Mettez un f avant les guillemets et vos variables entre { }.

#### Récupérer une saisie utilisateur — input() :

```python
# En JS : prompt() ou un formulaire HTML
# En Python : input()

nom = input("Quel est votre nom ? ")
print(f"Bonjour {nom} !")

# ATTENTION : input() renvoie TOUJOURS une chaîne de caractères (str)
age = input("Quel est votre âge ? ")   # age est un str, pas un int !
print(type(age))                         # <class 'str'>

# Il faut convertir si on veut un nombre
age = int(input("Quel est votre âge ? "))
print(type(age))                         # <class 'int'>
```

#### Exercice 2 — À faire ensemble :
Écrivez un script Python qui :
1. Demande à l'utilisateur son nom
2. Demande à l'utilisateur un nombre de Go (gigaoctets)
3. Convertit les Go en Mo (1 Go = 1024 Mo)
4. Affiche le résultat avec une f-string

#### Correction :

```python
# Script de conversion Go → Mo
nom = input("Votre nom : ")
go = float(input("Nombre de Go à convertir : "))
mo = go * 1024
print(f"{nom}, {go} Go = {mo} Mo")
```

---

### Partie 3 — Les conditions : if / elif / else (15 min)

#### La comparaison JS vs Python :

En JavaScript :
```javascript
// JavaScript
let port = 443;
if (port === 80) {
    console.log("HTTP");
} else if (port === 443) {
    console.log("HTTPS");
} else {
    console.log("Autre port");
}
```

En Python :
```python
# Python
port = 443
if port == 80:
    print("HTTP")
elif port == 443:
    print("HTTPS")
else:
    print("Autre port")
```

#### Les différences clés :
1. Pas d'accolades { } → c'est l'INDENTATION qui délimite le bloc (4 espaces ou 1 tabulation)
2. Pas de parenthèses obligatoires autour de la condition
3. else if → elif (contraction)
4. Deux-points : à la fin de chaque ligne if / elif / else
5. == au lieu de === (Python n'a pas de triple égal)

#### L'indentation — C'est VITAL :

```python
# CORRECT — le print est indenté (4 espaces)
if True:
    print("Ce code est dans le if")

# ERREUR — Python va planter !
if True:
print("Pas d'indentation = erreur")
# → IndentationError: expected an indented block
```

L'indentation n'est pas décorative en Python. C'est elle qui dit au programme quel code appartient à quel bloc. Si vous oubliez d'indenter, votre programme ne fonctionnera pas.

Règle : 4 espaces par niveau d'indentation. Tous les IDE et éditeurs de code font ça automatiquement avec la touche Tab.

#### Les opérateurs de comparaison :

| Python | JavaScript | Signification |
|--------|-----------|---------------|
| == | === | Égal à |
| != | !== | Différent de |
| < | < | Inférieur à |
| > | > | Supérieur à |
| <= | <= | Inférieur ou égal |
| >= | >= | Supérieur ou égal |
| and | && | ET logique |
| or | \|\| | OU logique |
| not | ! | NON logique |

Remarque importante : Python utilise les mots anglais and, or, not au lieu des symboles &&, ||, !. C'est plus lisible.

#### Conditions combinées :

```python
# Vérifier si un port est dans la plage des ports "bien connus"
port = 22
if port >= 0 and port <= 1023:
    print(f"Le port {port} est un port bien connu (well-known)")
elif port >= 1024 and port <= 49151:
    print(f"Le port {port} est un port enregistré")
else:
    print(f"Le port {port} est un port dynamique/privé")
```

#### L'opérateur in — Spécialité Python :

```python
# Vérifier si une valeur est dans une liste
ports_critiques = [22, 80, 443, 3306, 8080]
port = int(input("Entrez un numéro de port : "))

if port in ports_critiques:
    print(f"⚠️ Le port {port} est un port critique !")
else:
    print(f"Le port {port} n'est pas dans la liste des ports critiques")
```

Cet opérateur in n'existe pas directement en JS (il faut utiliser .includes()). En Python, c'est natif et très utilisé.

#### Exercice 3 — À faire ensemble :
Écrivez un script qui demande à l'utilisateur un mot de passe et vérifie :
- S'il fait moins de 8 caractères → "Trop court !"
- S'il fait entre 8 et 12 caractères → "Acceptable"
- S'il fait plus de 12 caractères → "Excellent !"

Indice : la longueur d'une chaîne se mesure avec len()

#### Correction :

```python
# Vérificateur de longueur de mot de passe
mdp = input("Entrez un mot de passe : ")
longueur = len(mdp)

if longueur < 8:
    print(f"❌ Trop court ! ({longueur} caractères, minimum 8)")
elif longueur <= 12:
    print(f"✅ Acceptable ({longueur} caractères)")
else:
    print(f"🔒 Excellent ! ({longueur} caractères)")
```

---

### Partie 4 — Les boucles : for et while (20 min)

#### La boucle for — Comparaison JS vs Python :

En JavaScript :
```javascript
// JavaScript — boucle classique
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// JavaScript — boucle for...of (sur un tableau)
let ports = [22, 80, 443];
for (let port of ports) {
    console.log(port);
}
```

En Python :
```python
# Python — boucle avec range()
for i in range(5):
    print(i)       # Affiche 0, 1, 2, 3, 4

# Python — boucle sur une liste
ports = [22, 80, 443]
for port in ports:
    print(port)    # Affiche 22, 80, 443
```

#### Comprendre range() :

```python
# range(fin) → de 0 à fin-1
for i in range(5):
    print(i)           # 0, 1, 2, 3, 4

# range(debut, fin) → de debut à fin-1
for i in range(1, 6):
    print(i)           # 1, 2, 3, 4, 5

# range(debut, fin, pas) → avec un pas personnalisé
for i in range(0, 20, 5):
    print(i)           # 0, 5, 10, 15

# Compte à rebours
for i in range(10, 0, -1):
    print(i)           # 10, 9, 8, ... 1
```

#### Exercice 4 — À faire ensemble :
Écrivez une boucle for qui affiche tous les ports "bien connus" par tranche de 100, de 0 à 1023 :
"Ports 0 à 99", "Ports 100 à 199", ..., "Ports 900 à 999", "Ports 1000 à 1023"

#### Correction :

```python
# Affichage des plages de ports bien connus
for i in range(0, 1024, 100):
    fin = min(i + 99, 1023)
    print(f"Ports {i} à {fin}")
```

#### La boucle while — Même logique qu'en JS :

En JavaScript :
```javascript
// JavaScript
let tentatives = 0;
while (tentatives < 3) {
    console.log("Tentative " + (tentatives + 1));
    tentatives++;
}
```

En Python :
```python
# Python
tentatives = 0
while tentatives < 3:
    print(f"Tentative {tentatives + 1}")
    tentatives += 1    # Pas de ++ en Python ! On utilise += 1
```

Différence importante : Python n'a PAS l'opérateur ++ (incrémentation). Il faut écrire += 1.

#### while avec condition de sortie — Le classique "mot de passe" :

```python
# Boucle de connexion avec nombre de tentatives limité
mot_de_passe_correct = "CielPro2026"
tentatives = 0
max_tentatives = 3

while tentatives < max_tentatives:
    saisie = input("Mot de passe : ")
    if saisie == mot_de_passe_correct:
        print("✅ Accès autorisé !")
        break    # break sort de la boucle immédiatement
    else:
        tentatives += 1
        restantes = max_tentatives - tentatives
        print(f"❌ Incorrect. {restantes} tentative(s) restante(s)")

# Ce code s'exécute après la boucle
if tentatives == max_tentatives:
    print("🔒 Compte bloqué ! Trop de tentatives.")
```

#### break et continue :
- break : sort immédiatement de la boucle (identique à JS)
- continue : passe directement à l'itération suivante (identique à JS)

```python
# Exemple avec continue — ignorer les ports réservés
for port in range(75, 85):
    if port == 80:
        continue    # On saute le port 80
    print(f"Scan du port {port}...")
# Affiche : 75, 76, 77, 78, 79, 81, 82, 83, 84
```

#### Exercice 5 — À faire ensemble :
Écrivez un script qui simule un scanner de ports simplifié :
1. Demande à l'utilisateur un port de début et un port de fin
2. Pour chaque port dans cette plage, affiche "Port X : ouvert" ou "Port X : fermé"
3. Pour simuler, considérez que les ports 22, 80, 443 et 8080 sont "ouverts", les autres "fermés"

#### Correction :

```python
# Mini scanner de ports (simulation)
ports_ouverts = [22, 80, 443, 8080]

debut = int(input("Port de début : "))
fin = int(input("Port de fin : "))

print(f"\n--- Scan des ports {debut} à {fin} ---")
nb_ouverts = 0

for port in range(debut, fin + 1):
    if port in ports_ouverts:
        print(f"Port {port} : ✅ OUVERT")
        nb_ouverts += 1
    else:
        print(f"Port {port} : ❌ fermé")

print(f"\n--- Résultat : {nb_ouverts} port(s) ouvert(s) sur {fin - debut + 1} scannés ---")
```

---

### Récapitulatif JS → Python (5 min)

#### Mémo de conversion rapide :

| Concept | JavaScript | Python |
|---------|-----------|--------|
| Afficher | console.log() | print() |
| Saisie utilisateur | prompt() | input() |
| Déclarer une variable | let x = 5; | x = 5 |
| Constante | const X = 5; | X = 5 (convention majuscule) |
| Commentaire | // ou /* */ | # |
| Égalité | === | == |
| ET logique | && | and |
| OU logique | \|\| | or |
| NON logique | ! | not |
| Bloc de code | { } | indentation (4 espaces) |
| else if | else if | elif |
| Boucle for | for(let i=0; i<n; i++) | for i in range(n): |
| Boucle for...of | for(let x of arr) | for x in arr: |
| Incrémenter | i++ | i += 1 |
| Longueur chaîne | str.length | len(str) |
| Longueur tableau | arr.length | len(arr) |
| Null | null | None |
| Booléens | true / false | True / False |
| Template literals | \`${var}\` | f"{var}" |
| Fin de ligne | ; | rien |

---

## PARTIE TP (1h30 — en autonomie)

---

### TP 1 : "La Boîte à Outils du SysAdmin"

#### Contexte professionnel :
Vous êtes stagiaire dans le service informatique d'une entreprise. Votre tuteur vous demande de créer un petit outil en ligne de commande (CLI) qui permettra aux techniciens de faire rapidement des opérations courantes. L'outil doit être en Python et fonctionner dans un terminal.

#### Outil utilisé :
Ouvrez un éditeur Python en ligne (learnpython.org/fr/ ou programiz.com/python-programming/online-compiler/)

---

#### Mission 1 — L'accueil (15 min)

Consigne : Créez un script qui :
1. Affiche un message d'accueil stylé (avec des ═ ou des ─ pour faire un cadre)
2. Demande le nom du technicien
3. Affiche "Bienvenue [nom] ! Que voulez-vous faire ?"
4. Affiche un menu numéroté :
   - 1. Convertisseur d'unités de stockage
   - 2. Vérificateur de port
   - 3. Calculateur d'adresses réseau
   - 4. Quitter

Exemple d'affichage attendu :
```
══════════════════════════════════════
   🔧 BOÎTE À OUTILS SYSADMIN 🔧
══════════════════════════════════════
Votre nom : Lucas
Bienvenue Lucas ! Que voulez-vous faire ?

1. Convertisseur d'unités de stockage
2. Vérificateur de port
3. Calculateur d'adresses réseau
4. Quitter

Votre choix :
```

---

#### Mission 2 — Le convertisseur de stockage (20 min)

Consigne : Si l'utilisateur choisit 1, le programme :
1. Demande une valeur numérique
2. Demande l'unité source (octets, Ko, Mo, Go, To)
3. Convertit et affiche dans toutes les autres unités

Rappel des conversions : 1 Ko = 1024 octets, 1 Mo = 1024 Ko, 1 Go = 1024 Mo, 1 To = 1024 Go

Exemple :
```
Valeur : 2
Unité (octets/Ko/Mo/Go/To) : Go
--- Résultat ---
2 Go = 2048 Mo
2 Go = 2097152 Ko
2 Go = 2147483648 octets
2 Go = 0.00195 To
```

Indice : Convertissez d'abord tout en octets, puis reconvertissez dans chaque unité.

---

#### Mission 3 — Le vérificateur de port (20 min)

Consigne : Si l'utilisateur choisit 2, le programme :
1. Demande un numéro de port
2. Vérifie s'il est valide (entre 0 et 65535)
3. Indique sa catégorie (well-known 0-1023, registered 1024-49151, dynamic 49152-65535)
4. Si c'est un port connu, affiche le service associé

Ports à reconnaître :
- 21 → FTP
- 22 → SSH
- 23 → Telnet
- 25 → SMTP
- 53 → DNS
- 80 → HTTP
- 110 → POP3
- 143 → IMAP
- 443 → HTTPS
- 3306 → MySQL
- 3389 → RDP (Bureau à distance)
- 8080 → HTTP alternatif

Indice : Utilisez un système de conditions if/elif ou préparez un dictionnaire (si vous connaissez déjà).

---

#### Mission 4 — Le calculateur réseau simplifié (20 min)

Consigne : Si l'utilisateur choisit 3, le programme :
1. Demande une adresse IP (ex: "192.168.1.100")
2. Demande un masque en notation CIDR (ex: 24)
3. Affiche la classe de l'adresse (A, B, C, D, E) en se basant sur le premier octet
4. Indique si c'est une adresse privée ou publique

Rappels :
- Classe A : 1-126 (privé : 10.0.0.0 - 10.255.255.255)
- Classe B : 128-191 (privé : 172.16.0.0 - 172.31.255.255)
- Classe C : 192-223 (privé : 192.168.0.0 - 192.168.255.255)
- 127.x.x.x : loopback

Indice : Utilisez la méthode .split(".") pour séparer l'adresse IP en ses 4 octets.

```python
# Exemple pour récupérer le premier octet
ip = "192.168.1.100"
octets = ip.split(".")       # → ["192", "168", "1", "100"]
premier_octet = int(octets[0])  # → 192
```

---

#### Mission 5 — La boucle principale (15 min)

Consigne : Faites en sorte que le programme ne s'arrête pas après une seule opération. Après chaque outil, il revient au menu principal. Le programme ne s'arrête que si l'utilisateur choisit 4 (Quitter).

Indice : Encadrez tout dans une boucle while True: avec un break quand le choix est 4.

---

#### Mission Bonus — Améliorations (pour les plus rapides)

- Ajoutez un outil 5 : "Générateur de mot de passe" qui demande la longueur souhaitée et génère un mot de passe aléatoire (vous aurez besoin de import random — on le verra en détail au cours 2, mais vous pouvez déjà explorer)
- Ajoutez une gestion d'erreur : si l'utilisateur entre du texte au lieu d'un nombre, le programme ne plante pas (astuce : try/except)

---

### Correction du TP 1 :

```python
# ═══════════════════════════════════════════
#   BOÎTE À OUTILS SYSADMIN — CORRECTION
# ═══════════════════════════════════════════

# --- ACCUEIL ---
print("══════════════════════════════════════")
print("   🔧 BOÎTE À OUTILS SYSADMIN 🔧   ")
print("══════════════════════════════════════")
nom = input("Votre nom : ")
print(f"Bienvenue {nom} !")

# --- BOUCLE PRINCIPALE ---
while True:
    print("\n--- MENU PRINCIPAL ---")
    print("1. Convertisseur d'unités de stockage")
    print("2. Vérificateur de port")
    print("3. Calculateur d'adresses réseau")
    print("4. Quitter")

    choix = input("\nVotre choix : ")

    # --- OUTIL 1 : CONVERTISSEUR ---
    if choix == "1":
        print("\n--- CONVERTISSEUR DE STOCKAGE ---")
        valeur = float(input("Valeur : "))
        unite = input("Unité (octets/Ko/Mo/Go/To) : ").strip()

        # Conversion en octets d'abord
        if unite == "octets":
            octets = valeur
        elif unite == "Ko":
            octets = valeur * 1024
        elif unite == "Mo":
            octets = valeur * 1024 ** 2
        elif unite == "Go":
            octets = valeur * 1024 ** 3
        elif unite == "To":
            octets = valeur * 1024 ** 4
        else:
            print("Unité non reconnue !")
            continue

        # Affichage dans toutes les unités
        print(f"\n--- Résultat ---")
        print(f"{valeur} {unite} = {octets} octets")
        print(f"{valeur} {unite} = {octets / 1024:.2f} Ko")
        print(f"{valeur} {unite} = {octets / 1024**2:.2f} Mo")
        print(f"{valeur} {unite} = {octets / 1024**3:.5f} Go")
        print(f"{valeur} {unite} = {octets / 1024**4:.8f} To")

    # --- OUTIL 2 : VÉRIFICATEUR DE PORT ---
    elif choix == "2":
        print("\n--- VÉRIFICATEUR DE PORT ---")
        port = int(input("Numéro de port : "))

        if port < 0 or port > 65535:
            print("❌ Port invalide ! (doit être entre 0 et 65535)")
            continue

        # Catégorie du port
        if port <= 1023:
            categorie = "Well-known (réservé)"
        elif port <= 49151:
            categorie = "Registered (enregistré)"
        else:
            categorie = "Dynamic/Private (dynamique)"

        print(f"Port {port} — Catégorie : {categorie}")

        # Services connus
        if port == 21:
            print("→ Service : FTP (transfert de fichiers)")
        elif port == 22:
            print("→ Service : SSH (connexion sécurisée)")
        elif port == 23:
            print("→ Service : Telnet (connexion non sécurisée)")
        elif port == 25:
            print("→ Service : SMTP (envoi d'emails)")
        elif port == 53:
            print("→ Service : DNS (résolution de noms)")
        elif port == 80:
            print("→ Service : HTTP (web)")
        elif port == 110:
            print("→ Service : POP3 (réception d'emails)")
        elif port == 143:
            print("→ Service : IMAP (réception d'emails)")
        elif port == 443:
            print("→ Service : HTTPS (web sécurisé)")
        elif port == 3306:
            print("→ Service : MySQL (base de données)")
        elif port == 3389:
            print("→ Service : RDP (bureau à distance)")
        elif port == 8080:
            print("→ Service : HTTP alternatif (proxy/dev)")
        else:
            print("→ Service : non référencé dans notre base")

    # --- OUTIL 3 : CALCULATEUR RÉSEAU ---
    elif choix == "3":
        print("\n--- CALCULATEUR RÉSEAU ---")
        ip = input("Adresse IP (ex: 192.168.1.100) : ")
        cidr = input("Masque CIDR (ex: 24) : ")

        octets_ip = ip.split(".")
        premier = int(octets_ip[0])

        # Classe de l'adresse
        if premier == 127:
            classe = "Loopback"
            privee = True
        elif premier >= 1 and premier <= 126:
            classe = "A"
            privee = (premier == 10)
        elif premier >= 128 and premier <= 191:
            classe = "B"
            deuxieme = int(octets_ip[1])
            privee = (premier == 172 and deuxieme >= 16 and deuxieme <= 31)
        elif premier >= 192 and premier <= 223:
            classe = "C"
            deuxieme = int(octets_ip[1])
            privee = (premier == 192 and deuxieme == 168)
        elif premier >= 224 and premier <= 239:
            classe = "D (Multicast)"
            privee = False
        else:
            classe = "E (Expérimentale)"
            privee = False

        print(f"\nAdresse : {ip}/{cidr}")
        print(f"Classe : {classe}")
        print(f"Type : {'Adresse privée (RFC 1918)' if privee else 'Adresse publique'}")

    # --- QUITTER ---
    elif choix == "4":
        print(f"\nAu revoir {nom} ! 👋")
        break

    else:
        print("❌ Choix invalide, veuillez réessayer.")
```

---
---

# COURS 2 : STRUCTURES DE DONNÉES ET FONCTIONS
## Durée totale : 3h (1h30 cours/exo + 1h30 TP)

---

## PARTIE COURS/EXERCICES (1h30 — avec le professeur)

---

### Introduction (5 min)

#### Titre : Organiser, structurer, réutiliser

#### Accroche :
Dans le cours précédent, vous avez appris à faire des scripts simples. Mais imaginez que vous devez stocker 50 adresses IP, ou répéter la même opération à 10 endroits différents dans votre code. Copier-coller, c'est la pire chose que vous puissiez faire en programmation. Aujourd'hui, on apprend les outils pour travailler comme des pros : les listes pour stocker des collections de données, les dictionnaires pour organiser des données complexes, et les fonctions pour ne jamais réécrire le même code deux fois.

#### Objectifs du cours :
- Créer et manipuler des listes (l'équivalent des arrays JS)
- Créer et manipuler des dictionnaires (l'équivalent des objets JS)
- Écrire ses propres fonctions
- Importer et utiliser des modules Python

---

### Partie 1 — Les listes (20 min)

#### Comparaison JS vs Python :

En JavaScript :
```javascript
// JavaScript — Array
let ports = [22, 80, 443];
ports.push(8080);
console.log(ports.length);     // 4
console.log(ports[0]);         // 22
```

En Python :
```python
# Python — Liste
ports = [22, 80, 443]
ports.append(8080)
print(len(ports))              # 4
print(ports[0])                # 22
```

#### Créer une liste :

```python
# Liste vide
ma_liste = []

# Liste avec des valeurs
ports_ouverts = [22, 80, 443, 8080]
noms_serveurs = ["web01", "db01", "mail01"]
mixte = ["texte", 42, True, 3.14]    # Python accepte les types mélangés
```

#### Opérations courantes sur les listes :

```python
# --- Accéder aux éléments ---
ports = [22, 80, 443, 8080, 3306]
print(ports[0])      # 22 (premier élément)
print(ports[-1])     # 3306 (dernier élément — spécifique Python !)
print(ports[1:3])    # [80, 443] (slice : index 1 à 2)

# --- Ajouter des éléments ---
ports.append(5432)        # Ajoute à la fin → [22, 80, 443, 8080, 3306, 5432]
ports.insert(0, 21)       # Insère à l'index 0 → [21, 22, 80, ...]

# --- Supprimer des éléments ---
ports.remove(80)          # Supprime la valeur 80
del ports[0]              # Supprime par index
dernier = ports.pop()     # Retire et renvoie le dernier élément

# --- Informations ---
print(len(ports))         # Nombre d'éléments
print(80 in ports)        # True ou False — l'élément est-il dans la liste ?
print(ports.index(443))   # Renvoie l'index de la valeur 443
print(ports.count(22))    # Combien de fois 22 apparaît

# --- Trier ---
ports.sort()              # Tri croissant (modifie la liste)
ports.sort(reverse=True)  # Tri décroissant
ports.reverse()           # Inverse l'ordre
```

#### Mémo rapide JS → Python pour les listes :

| Action | JavaScript | Python |
|--------|-----------|--------|
| Ajouter à la fin | arr.push(x) | arr.append(x) |
| Supprimer par valeur | — | arr.remove(x) |
| Supprimer par index | arr.splice(i, 1) | del arr[i] |
| Longueur | arr.length | len(arr) |
| Contient ? | arr.includes(x) | x in arr |
| Trier | arr.sort() | arr.sort() |
| Dernier élément | arr[arr.length-1] | arr[-1] |
| Slice | arr.slice(1,3) | arr[1:3] |

#### Parcourir une liste :

```python
# Boucle simple
serveurs = ["web01", "db01", "mail01"]
for serveur in serveurs:
    print(f"Vérification de {serveur}...")

# Avec l'index (utile parfois)
for i, serveur in enumerate(serveurs):
    print(f"Serveur n°{i+1} : {serveur}")
# Affiche :
# Serveur n°1 : web01
# Serveur n°2 : db01
# Serveur n°3 : mail01
```

La fonction enumerate() donne à la fois l'index ET la valeur. Très pratique, ça n'existe pas nativement en JS.

#### Exercice 1 — À faire ensemble :
Créez une liste de 5 adresses IP. Écrivez un script qui :
1. Affiche toutes les adresses
2. Ajoute une nouvelle adresse
3. Supprime la 3ème adresse
4. Trie les adresses par ordre alphabétique
5. Affiche le nombre total d'adresses

#### Correction :

```python
# Gestion d'une liste d'adresses IP
adresses_ip = ["192.168.1.1", "10.0.0.1", "172.16.0.1", "192.168.1.254", "10.0.0.254"]

# 1. Afficher toutes les adresses
print("--- Liste initiale ---")
for ip in adresses_ip:
    print(ip)

# 2. Ajouter une adresse
adresses_ip.append("192.168.0.1")
print(f"\nAprès ajout : {adresses_ip}")

# 3. Supprimer la 3ème adresse (index 2)
supprimee = adresses_ip[2]
del adresses_ip[2]
print(f"Adresse supprimée : {supprimee}")

# 4. Trier
adresses_ip.sort()
print(f"\nTriées : {adresses_ip}")

# 5. Nombre total
print(f"\nTotal : {len(adresses_ip)} adresses")
```

---

### Partie 2 — Les dictionnaires (20 min)

#### Comparaison JS vs Python :

En JavaScript :
```javascript
// JavaScript — Objet
let serveur = {
    nom: "web01",
    ip: "192.168.1.10",
    port: 80,
    actif: true
};
console.log(serveur.nom);        // "web01"
console.log(serveur["ip"]);      // "192.168.1.10"
```

En Python :
```python
# Python — Dictionnaire
serveur = {
    "nom": "web01",
    "ip": "192.168.1.10",
    "port": 80,
    "actif": True
}
print(serveur["nom"])             # "web01"
print(serveur.get("ip"))          # "192.168.1.10"
```

#### Différences avec JS :
- Les clés DOIVENT être entre guillemets (en JS, c'est optionnel)
- On accède avec des crochets ["clé"] (pas de notation point serveur.nom)
- La méthode .get("clé") est plus sûre car elle renvoie None au lieu de planter si la clé n'existe pas

#### Opérations sur les dictionnaires :

```python
# Créer un dictionnaire
equipement = {
    "type": "routeur",
    "marque": "Cisco",
    "modele": "ISR 1100",
    "ip": "192.168.1.1"
}

# Accéder à une valeur
print(equipement["marque"])          # "Cisco"
print(equipement.get("os", "N/A"))   # "N/A" (la clé n'existe pas, valeur par défaut)

# Ajouter ou modifier une clé
equipement["os"] = "IOS 15"          # Ajoute la clé "os"
equipement["ip"] = "10.0.0.1"        # Modifie la valeur de "ip"

# Supprimer une clé
del equipement["modele"]

# Vérifier si une clé existe
if "ip" in equipement:
    print(f"IP trouvée : {equipement['ip']}")

# Nombre de paires clé-valeur
print(len(equipement))
```

#### Parcourir un dictionnaire :

```python
equipement = {"type": "switch", "marque": "TP-Link", "ports": 8, "manageable": False}

# Parcourir les clés
for cle in equipement:
    print(cle)

# Parcourir les valeurs
for valeur in equipement.values():
    print(valeur)

# Parcourir les clés ET les valeurs (le plus courant)
for cle, valeur in equipement.items():
    print(f"{cle} : {valeur}")
# Affiche :
# type : switch
# marque : TP-Link
# ports : 8
# manageable : False
```

#### Liste de dictionnaires — La structure la plus utile :

```python
# C'est l'équivalent d'un tableau JSON — très courant en programmation
parc_info = [
    {"nom": "PC-01", "ip": "192.168.1.10", "os": "Windows 11", "etat": "actif"},
    {"nom": "PC-02", "ip": "192.168.1.11", "os": "Ubuntu 24", "etat": "actif"},
    {"nom": "SRV-01", "ip": "192.168.1.100", "os": "Debian 12", "etat": "maintenance"},
]

# Afficher toutes les machines actives
for machine in parc_info:
    if machine["etat"] == "actif":
        print(f"{machine['nom']} ({machine['ip']}) — {machine['os']}")
```

#### Exercice 2 — À faire ensemble :
Créez une liste de 3 dictionnaires représentant des tickets d'incident réseau. Chaque ticket a : un id, un titre, une priorité (haute/moyenne/basse), et un statut (ouvert/fermé). Puis écrivez un script qui affiche uniquement les tickets ouverts avec une priorité haute.

#### Correction :

```python
# Liste de tickets d'incident
tickets = [
    {"id": 1, "titre": "Perte WiFi bâtiment B", "priorite": "haute", "statut": "ouvert"},
    {"id": 2, "titre": "Imprimante hors ligne", "priorite": "basse", "statut": "ouvert"},
    {"id": 3, "titre": "Serveur mail lent", "priorite": "haute", "statut": "ferme"},
    {"id": 4, "titre": "Intrusion détectée", "priorite": "haute", "statut": "ouvert"},
]

print("--- Tickets urgents ouverts ---")
for ticket in tickets:
    if ticket["priorite"] == "haute" and ticket["statut"] == "ouvert":
        print(f"🔴 #{ticket['id']} — {ticket['titre']}")
```

---

### Partie 3 — Les fonctions (20 min)

#### Comparaison JS vs Python :

En JavaScript :
```javascript
// JavaScript
function saluer(nom) {
    return "Bonjour " + nom + " !";
}
console.log(saluer("Lucas"));
```

En Python :
```python
# Python
def saluer(nom):
    return f"Bonjour {nom} !"

print(saluer("Lucas"))
```

#### La syntaxe :
- function → def
- Pas d'accolades → indentation (encore et toujours)
- Deux-points : après la définition
- return fonctionne pareil

#### Fonctions avec paramètres par défaut :

```python
# Paramètre avec valeur par défaut
def scanner_port(ip, port=80):
    print(f"Scan de {ip}:{port}...")

scanner_port("192.168.1.1")         # Utilise le port 80 par défaut
scanner_port("192.168.1.1", 443)    # Utilise le port 443
```

C'est pareil qu'en JS ES6 (function(port = 80) {...}).

#### Fonctions qui retournent une valeur :

```python
def convertir_go_en_mo(go):
    return go * 1024

resultat = convertir_go_en_mo(4)
print(f"4 Go = {resultat} Mo")    # 4 Go = 4096 Mo
```

#### Fonctions qui retournent plusieurs valeurs (spécifique Python !) :

```python
# Python permet de retourner plusieurs valeurs — impossible en JS
def analyser_ip(ip):
    octets = ip.split(".")
    premier = int(octets[0])

    if premier <= 126:
        classe = "A"
    elif premier <= 191:
        classe = "B"
    elif premier <= 223:
        classe = "C"
    else:
        classe = "Autre"

    privee = (premier == 10) or (premier == 172 and 16 <= int(octets[1]) <= 31) or (premier == 192 and int(octets[1]) == 168)

    return classe, privee    # Retourne deux valeurs !

# Récupérer les deux valeurs
classe, est_privee = analyser_ip("192.168.1.100")
print(f"Classe {classe}, Privée : {est_privee}")
# → Classe C, Privée : True
```

#### Exercice 3 — À faire ensemble :
Créez une fonction verifier_mot_de_passe(mdp) qui prend un mot de passe en paramètre et retourne :
- Un score de 0 à 4 (1 point par critère rempli)
- Un message de force ("faible", "moyen", "fort", "très fort")

Critères :
1. Au moins 8 caractères
2. Contient au moins une majuscule
3. Contient au moins un chiffre
4. Contient au moins un caractère spécial (!, @, #, $, %, etc.)

Indice : utilisez any() avec une boucle. Exemple :
```python
contient_majuscule = any(c.isupper() for c in mdp)
```

#### Correction :

```python
def verifier_mot_de_passe(mdp):
    score = 0
    details = []

    # Critère 1 : longueur
    if len(mdp) >= 8:
        score += 1
        details.append("✅ Longueur >= 8")
    else:
        details.append("❌ Trop court (< 8 caractères)")

    # Critère 2 : majuscule
    if any(c.isupper() for c in mdp):
        score += 1
        details.append("✅ Contient une majuscule")
    else:
        details.append("❌ Pas de majuscule")

    # Critère 3 : chiffre
    if any(c.isdigit() for c in mdp):
        score += 1
        details.append("✅ Contient un chiffre")
    else:
        details.append("❌ Pas de chiffre")

    # Critère 4 : caractère spécial
    speciaux = "!@#$%^&*()-_=+[]{}|;:,.<>?/"
    if any(c in speciaux for c in mdp):
        score += 1
        details.append("✅ Contient un caractère spécial")
    else:
        details.append("❌ Pas de caractère spécial")

    # Déterminer la force
    forces = {0: "Très faible", 1: "Faible", 2: "Moyen", 3: "Fort", 4: "Très fort"}
    force = forces[score]

    return score, force, details

# Test
mdp = input("Mot de passe à tester : ")
score, force, details = verifier_mot_de_passe(mdp)
print(f"\nForce : {force} ({score}/4)")
for d in details:
    print(f"  {d}")
```

---

### Partie 4 — Les modules (15 min)

#### Concept :
Un module, c'est un fichier Python qui contient du code réutilisable (fonctions, constantes...). Python en fournit des centaines. En JS, c'est l'équivalent de require() ou import.

#### Importer un module :

```python
# Import complet
import random
print(random.randint(1, 100))    # Nombre aléatoire entre 1 et 100

# Import spécifique (on importe juste ce qu'on veut)
from random import randint, choice
print(randint(1, 100))           # Plus besoin du préfixe random.

# Import avec alias
import datetime as dt
print(dt.datetime.now())         # Date et heure actuelles
```

#### Modules utiles pour CIEL :

**random** — Génération aléatoire :
```python
import random
random.randint(1, 100)          # Entier aléatoire entre 1 et 100
random.choice(["a", "b", "c"])  # Choix aléatoire dans une liste
random.shuffle(ma_liste)        # Mélange la liste
random.sample(ma_liste, 3)      # 3 éléments aléatoires sans remise
```

**string** — Constantes de caractères :
```python
import string
print(string.ascii_lowercase)   # abcdefghijklmnopqrstuvwxyz
print(string.ascii_uppercase)   # ABCDEFGHIJKLMNOPQRSTUVWXYZ
print(string.digits)            # 0123456789
print(string.punctuation)       # !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
```

**time** — Gestion du temps :
```python
import time
print(time.time())              # Timestamp Unix (secondes depuis 1970)
time.sleep(2)                   # Pause de 2 secondes
```

**os** — Interaction avec le système :
```python
import os
print(os.name)                  # 'posix' (Linux/Mac) ou 'nt' (Windows)
print(os.getcwd())              # Répertoire courant
print(os.listdir("."))          # Liste les fichiers du répertoire courant
```

**datetime** — Dates et heures :
```python
from datetime import datetime
maintenant = datetime.now()
print(maintenant.strftime("%d/%m/%Y %H:%M"))   # "23/02/2026 14:30"
```

#### Exercice 4 — À faire ensemble :
En utilisant les modules random et string, écrivez un script qui génère un mot de passe aléatoire de 12 caractères contenant des lettres, des chiffres et des symboles.

#### Correction :

```python
import random
import string

# Tous les caractères possibles
caracteres = string.ascii_letters + string.digits + string.punctuation

# Générer le mot de passe
longueur = 12
mot_de_passe = ""
for i in range(longueur):
    mot_de_passe += random.choice(caracteres)

print(f"Mot de passe généré : {mot_de_passe}")

# Version plus concise (pour les curieux) :
# mot_de_passe = "".join(random.choice(caracteres) for _ in range(longueur))
```

---

## PARTIE TP (1h30 — en autonomie)

---

### TP 2 : "Générateur de Rapports Réseau"

#### Contexte professionnel :
Le responsable technique de NetSecure (votre entreprise de services informatiques) vous demande de créer un outil Python qui génère un rapport sur le parc informatique des clients. L'outil doit analyser une liste d'équipements et produire des statistiques.

#### Outil utilisé :
Éditeur Python en ligne (learnpython.org/fr/ ou programiz.com/python-programming/online-compiler/)

---

#### Partie A — La base de données du parc (20 min)

Consigne : Créez la structure de données suivante (liste de dictionnaires) représentant le parc informatique :

```python
parc = [
    {"id": 1, "nom": "RTR-LYON-01", "type": "routeur", "marque": "Cisco", "ip": "192.168.1.1", "client": "TechnoLyon", "etat": "actif"},
    {"id": 2, "nom": "SW-LYON-01", "type": "switch", "marque": "TP-Link", "ip": "192.168.1.2", "client": "TechnoLyon", "etat": "actif"},
    {"id": 3, "nom": "AP-LYON-01", "type": "borne_wifi", "marque": "Ubiquiti", "ip": "192.168.1.10", "client": "TechnoLyon", "etat": "maintenance"},
    {"id": 4, "nom": "FW-BIO-01", "type": "firewall", "marque": "Fortinet", "ip": "10.0.0.1", "client": "BioSanté", "etat": "actif"},
    {"id": 5, "nom": "SRV-BIO-01", "type": "serveur", "marque": "Dell", "ip": "10.0.0.100", "client": "BioSanté", "etat": "actif"},
    {"id": 6, "nom": "SRV-BIO-02", "type": "serveur", "marque": "HP", "ip": "10.0.0.101", "client": "BioSanté", "etat": "hors_service"},
    {"id": 7, "nom": "SW-IND-01", "type": "switch", "marque": "Cisco", "ip": "172.16.0.2", "client": "IndusRhône", "etat": "actif"},
    {"id": 8, "nom": "RTR-IND-01", "type": "routeur", "marque": "Cisco", "ip": "172.16.0.1", "client": "IndusRhône", "etat": "actif"},
    {"id": 9, "nom": "AP-IND-01", "type": "borne_wifi", "marque": "Ubiquiti", "ip": "172.16.0.10", "client": "IndusRhône", "etat": "actif"},
    {"id": 10, "nom": "FW-IND-01", "type": "firewall", "marque": "Fortinet", "ip": "172.16.0.254", "client": "IndusRhône", "etat": "maintenance"},
]
```

Puis créez 3 fonctions utilitaires :
1. `afficher_equipement(equip)` — Affiche joliment un équipement (une ligne formatée)
2. `compter_par_etat(parc)` — Renvoie un dictionnaire {"actif": X, "maintenance": Y, "hors_service": Z}
3. `filtrer_par_client(parc, nom_client)` — Renvoie la liste des équipements d'un client donné

---

#### Partie B — Les statistiques (25 min)

Consigne : Créez les fonctions suivantes :

4. `compter_par_type(parc)` — Renvoie un dictionnaire avec le nombre d'équipements par type (routeur: 2, switch: 2, etc.)

5. `compter_par_marque(parc)` — Même chose mais par marque

6. `equipements_critiques(parc)` — Renvoie la liste des équipements en "maintenance" ou "hors_service" (ce sont les équipements qui nécessitent une attention)

7. `generer_rapport(parc)` — Fonction principale qui appelle toutes les autres et affiche un rapport formaté :

Exemple d'affichage attendu :
```
══════════════════════════════════════════
   📊 RAPPORT PARC INFORMATIQUE NETSECURE
══════════════════════════════════════════
Date : 23/02/2026

--- RÉSUMÉ GÉNÉRAL ---
Total équipements : 10
  ✅ Actifs : 7
  🔧 En maintenance : 2
  ❌ Hors service : 1

--- PAR TYPE ---
  routeur : 2
  switch : 2
  borne_wifi : 2
  firewall : 2
  serveur : 2

--- PAR MARQUE ---
  Cisco : 3
  TP-Link : 1
  Ubiquiti : 2
  Fortinet : 2
  Dell : 1
  HP : 1

--- ÉQUIPEMENTS CRITIQUES ---
  🔧 AP-LYON-01 (borne_wifi) — TechnoLyon — maintenance
  ❌ SRV-BIO-02 (serveur) — BioSanté — hors_service
  🔧 FW-IND-01 (firewall) — IndusRhône — maintenance

--- PAR CLIENT ---
[TechnoLyon] 3 équipements (2 actifs, 1 en maintenance)
[BioSanté] 3 équipements (2 actifs, 1 hors service)
[IndusRhône] 4 équipements (3 actifs, 1 en maintenance)
══════════════════════════════════════════
```

---

#### Partie C — Menu interactif (20 min)

Consigne : Ajoutez un menu interactif qui permet de :
1. Afficher le rapport complet
2. Chercher un équipement par nom ou IP
3. Afficher les équipements d'un client
4. Afficher les équipements critiques uniquement
5. Ajouter un nouvel équipement
6. Quitter

Pour le choix 5 (ajouter), le programme demande toutes les informations via input() et ajoute le dictionnaire à la liste.

---

#### Partie D — Bonus (pour les plus rapides)

8. `generer_mot_de_passe(longueur)` — Fonction qui génère un mot de passe sécurisé (utilise les modules random et string)

9. Ajoutez un outil 7 au menu : "Ping simulator" — l'utilisateur entre une IP, le programme attend entre 1 et 3 secondes (random + time.sleep) et affiche un résultat aléatoire de ping (temps en ms, ou "timeout")

10. Sauvegarde : Trouvez comment écrire le rapport dans un fichier texte (indice : `open("rapport.txt", "w")`)

---

### Correction du TP 2 :

```python
from datetime import datetime

# --- BASE DE DONNÉES ---
parc = [
    {"id": 1, "nom": "RTR-LYON-01", "type": "routeur", "marque": "Cisco", "ip": "192.168.1.1", "client": "TechnoLyon", "etat": "actif"},
    {"id": 2, "nom": "SW-LYON-01", "type": "switch", "marque": "TP-Link", "ip": "192.168.1.2", "client": "TechnoLyon", "etat": "actif"},
    {"id": 3, "nom": "AP-LYON-01", "type": "borne_wifi", "marque": "Ubiquiti", "ip": "192.168.1.10", "client": "TechnoLyon", "etat": "maintenance"},
    {"id": 4, "nom": "FW-BIO-01", "type": "firewall", "marque": "Fortinet", "ip": "10.0.0.1", "client": "BioSanté", "etat": "actif"},
    {"id": 5, "nom": "SRV-BIO-01", "type": "serveur", "marque": "Dell", "ip": "10.0.0.100", "client": "BioSanté", "etat": "actif"},
    {"id": 6, "nom": "SRV-BIO-02", "type": "serveur", "marque": "HP", "ip": "10.0.0.101", "client": "BioSanté", "etat": "hors_service"},
    {"id": 7, "nom": "SW-IND-01", "type": "switch", "marque": "Cisco", "ip": "172.16.0.2", "client": "IndusRhône", "etat": "actif"},
    {"id": 8, "nom": "RTR-IND-01", "type": "routeur", "marque": "Cisco", "ip": "172.16.0.1", "client": "IndusRhône", "etat": "actif"},
    {"id": 9, "nom": "AP-IND-01", "type": "borne_wifi", "marque": "Ubiquiti", "ip": "172.16.0.10", "client": "IndusRhône", "etat": "actif"},
    {"id": 10, "nom": "FW-IND-01", "type": "firewall", "marque": "Fortinet", "ip": "172.16.0.254", "client": "IndusRhône", "etat": "maintenance"},
]

# --- FONCTIONS UTILITAIRES ---

def afficher_equipement(equip):
    icones = {"actif": "✅", "maintenance": "🔧", "hors_service": "❌"}
    icone = icones.get(equip["etat"], "❓")
    print(f"  {icone} {equip['nom']} ({equip['type']}) — {equip['ip']} — {equip['client']} — {equip['etat']}")

def compter_par_etat(parc):
    compteur = {"actif": 0, "maintenance": 0, "hors_service": 0}
    for equip in parc:
        etat = equip["etat"]
        if etat in compteur:
            compteur[etat] += 1
    return compteur

def filtrer_par_client(parc, nom_client):
    resultat = []
    for equip in parc:
        if equip["client"] == nom_client:
            resultat.append(equip)
    return resultat

def compter_par_type(parc):
    compteur = {}
    for equip in parc:
        t = equip["type"]
        if t in compteur:
            compteur[t] += 1
        else:
            compteur[t] = 1
    return compteur

def compter_par_marque(parc):
    compteur = {}
    for equip in parc:
        m = equip["marque"]
        if m in compteur:
            compteur[m] += 1
        else:
            compteur[m] = 1
    return compteur

def equipements_critiques(parc):
    critiques = []
    for equip in parc:
        if equip["etat"] in ["maintenance", "hors_service"]:
            critiques.append(equip)
    return critiques

def obtenir_clients(parc):
    clients = []
    for equip in parc:
        if equip["client"] not in clients:
            clients.append(equip["client"])
    return clients

def generer_rapport(parc):
    print("══════════════════════════════════════════")
    print("   📊 RAPPORT PARC INFORMATIQUE NETSECURE")
    print("══════════════════════════════════════════")
    print(f"Date : {datetime.now().strftime('%d/%m/%Y %H:%M')}")

    # Résumé général
    etats = compter_par_etat(parc)
    print(f"\n--- RÉSUMÉ GÉNÉRAL ---")
    print(f"Total équipements : {len(parc)}")
    print(f"  ✅ Actifs : {etats['actif']}")
    print(f"  🔧 En maintenance : {etats['maintenance']}")
    print(f"  ❌ Hors service : {etats['hors_service']}")

    # Par type
    types = compter_par_type(parc)
    print(f"\n--- PAR TYPE ---")
    for t, nb in types.items():
        print(f"  {t} : {nb}")

    # Par marque
    marques = compter_par_marque(parc)
    print(f"\n--- PAR MARQUE ---")
    for m, nb in marques.items():
        print(f"  {m} : {nb}")

    # Équipements critiques
    critiques = equipements_critiques(parc)
    print(f"\n--- ÉQUIPEMENTS CRITIQUES ({len(critiques)}) ---")
    for equip in critiques:
        afficher_equipement(equip)

    # Par client
    clients = obtenir_clients(parc)
    print(f"\n--- PAR CLIENT ---")
    for client in clients:
        equips_client = filtrer_par_client(parc, client)
        nb_actifs = sum(1 for e in equips_client if e["etat"] == "actif")
        nb_autres = len(equips_client) - nb_actifs
        print(f"[{client}] {len(equips_client)} équipements ({nb_actifs} actifs, {nb_autres} autres)")

    print("══════════════════════════════════════════")

# --- MENU INTERACTIF ---

def chercher_equipement(parc, recherche):
    resultats = []
    for equip in parc:
        if recherche.lower() in equip["nom"].lower() or recherche in equip["ip"]:
            resultats.append(equip)
    return resultats

def ajouter_equipement(parc):
    print("\n--- AJOUTER UN ÉQUIPEMENT ---")
    nouvel_id = max(e["id"] for e in parc) + 1
    nom = input("Nom : ")
    type_equip = input("Type (routeur/switch/borne_wifi/firewall/serveur) : ")
    marque = input("Marque : ")
    ip = input("Adresse IP : ")
    client = input("Client : ")
    etat = input("État (actif/maintenance/hors_service) : ")

    nouveau = {
        "id": nouvel_id,
        "nom": nom,
        "type": type_equip,
        "marque": marque,
        "ip": ip,
        "client": client,
        "etat": etat
    }
    parc.append(nouveau)
    print(f"✅ Équipement {nom} ajouté avec l'ID {nouvel_id}")

# --- PROGRAMME PRINCIPAL ---
print("══════════════════════════════════════")
print("   🔧 GESTIONNAIRE DE PARC NETSECURE")
print("══════════════════════════════════════")

while True:
    print("\n--- MENU ---")
    print("1. Rapport complet")
    print("2. Chercher un équipement")
    print("3. Équipements d'un client")
    print("4. Équipements critiques")
    print("5. Ajouter un équipement")
    print("6. Quitter")

    choix = input("\nVotre choix : ")

    if choix == "1":
        generer_rapport(parc)
    elif choix == "2":
        recherche = input("Nom ou IP à chercher : ")
        resultats = chercher_equipement(parc, recherche)
        if resultats:
            for equip in resultats:
                afficher_equipement(equip)
        else:
            print("Aucun résultat.")
    elif choix == "3":
        client = input("Nom du client : ")
        equips = filtrer_par_client(parc, client)
        if equips:
            for equip in equips:
                afficher_equipement(equip)
        else:
            print("Client non trouvé.")
    elif choix == "4":
        critiques = equipements_critiques(parc)
        for equip in critiques:
            afficher_equipement(equip)
    elif choix == "5":
        ajouter_equipement(parc)
    elif choix == "6":
        print("Au revoir ! 👋")
        break
    else:
        print("Choix invalide.")
```

---
---
