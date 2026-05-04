import React from 'react';
import PracticalWork from '../../components/organisms/PraticalWork';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';
import GameChallenge from '../../components/molecules/GameChallenge';

const tpTitle = 'TP : La Boîte à Outils du SysAdmin';
const tpObjective = 'Créer un outil en ligne de commande (CLI) en Python qui permettra aux techniciens de faire rapidement des opérations courantes : conversion de stockage, vérification de ports et calcul réseau.';
const tpMaterials = [
    'Un éditeur Python en ligne (learnpython.org/fr/ ou programiz.com/python-programming/online-compiler/)',
    'Le cours sur les bases de Python (onglet Cours).',
];

const tpSteps = [
    {
        title: "Contexte professionnel",
        description: (
            <>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p>Vous êtes <strong>stagiaire</strong> dans le service informatique d'une entreprise. Votre tuteur vous demande de créer un petit outil en ligne de commande (CLI) qui permettra aux techniciens de faire rapidement des opérations courantes. L'outil doit être en Python et fonctionner dans un terminal.</p>
                </div>
            </>
        )
    },
    {
        title: "Mission 1 — L'accueil (15 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Créez un script qui :</p>
                <ol className="list-decimal ml-6 space-y-2">
                    <li>Affiche un message d'accueil stylé (avec des ═ ou des ─ pour faire un cadre)</li>
                    <li>Demande le nom du technicien</li>
                    <li>Affiche "Bienvenue [nom] ! Que voulez-vous faire ?"</li>
                    <li>Affiche un menu numéroté :
                        <ul className="list-disc list-inside ml-4 mt-1">
                            <li>1. Convertisseur d'unités de stockage</li>
                            <li>2. Vérificateur de port</li>
                            <li>3. Calculateur d'adresses réseau</li>
                            <li>4. Quitter</li>
                        </ul>
                    </li>
                </ol>
                <pre className="code-block mt-4"><code>{`# Exemple d'affichage attendu :
══════════════════════════════════════
   🔧 BOÎTE À OUTILS SYSADMIN 🔧
══════════════════════════════════════
Votre nom : Lucas
Bienvenue Lucas ! Que voulez-vous faire ?

1. Convertisseur d'unités de stockage
2. Vérificateur de port
3. Calculateur d'adresses réseau
4. Quitter

Votre choix :`}</code></pre>
            </>
        )
    },
    {
        title: "Mission 2 — Le convertisseur de stockage (20 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Si l'utilisateur choisit 1, le programme :</p>
                <ol className="list-decimal ml-6 space-y-2">
                    <li>Demande une valeur numérique</li>
                    <li>Demande l'unité source (octets, Ko, Mo, Go, To)</li>
                    <li>Convertit et affiche dans toutes les autres unités</li>
                </ol>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mt-3">
                    <p><strong>Rappel des conversions :</strong> 1 Ko = 1024 octets, 1 Mo = 1024 Ko, 1 Go = 1024 Mo, 1 To = 1024 Go</p>
                </div>
                <pre className="code-block mt-4"><code>{`# Exemple :
Valeur : 2
Unité (octets/Ko/Mo/Go/To) : Go
--- Résultat ---
2 Go = 2048 Mo
2 Go = 2097152 Ko
2 Go = 2147483648 octets
2 Go = 0.00195 To`}</code></pre>
                <p className="mt-3"><strong>Indice :</strong> Convertissez d'abord tout en octets, puis reconvertissez dans chaque unité.</p>
            </>
        )
    },
    {
        title: "Mission 3 — Le vérificateur de port (20 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Si l'utilisateur choisit 2, le programme :</p>
                <ol className="list-decimal ml-6 space-y-2">
                    <li>Demande un numéro de port</li>
                    <li>Vérifie s'il est valide (entre 0 et 65535)</li>
                    <li>Indique sa catégorie (well-known 0-1023, registered 1024-49151, dynamic 49152-65535)</li>
                    <li>Si c'est un port connu, affiche le service associé</li>
                </ol>
                <div className="mt-4">
                    <p><strong>Ports à reconnaître :</strong></p>
                    <div className="overflow-x-auto mt-2">
                        <table className="min-w-full text-sm border">
                            <tbody>
                                <tr><td className="border px-3 py-1">21</td><td className="border px-3 py-1">FTP</td><td className="border px-3 py-1">25</td><td className="border px-3 py-1">SMTP</td></tr>
                                <tr><td className="border px-3 py-1">22</td><td className="border px-3 py-1">SSH</td><td className="border px-3 py-1">53</td><td className="border px-3 py-1">DNS</td></tr>
                                <tr><td className="border px-3 py-1">23</td><td className="border px-3 py-1">Telnet</td><td className="border px-3 py-1">80</td><td className="border px-3 py-1">HTTP</td></tr>
                                <tr><td className="border px-3 py-1">110</td><td className="border px-3 py-1">POP3</td><td className="border px-3 py-1">143</td><td className="border px-3 py-1">IMAP</td></tr>
                                <tr><td className="border px-3 py-1">443</td><td className="border px-3 py-1">HTTPS</td><td className="border px-3 py-1">3306</td><td className="border px-3 py-1">MySQL</td></tr>
                                <tr><td className="border px-3 py-1">3389</td><td className="border px-3 py-1">RDP</td><td className="border px-3 py-1">8080</td><td className="border px-3 py-1">HTTP alt</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="mt-3"><strong>Indice :</strong> Utilisez un système de conditions if/elif ou préparez un dictionnaire.</p>
            </>
        )
    },
    {
        title: "Mission 4 — Le calculateur réseau simplifié (20 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Si l'utilisateur choisit 3, le programme :</p>
                <ol className="list-decimal ml-6 space-y-2">
                    <li>Demande une adresse IP (ex: "192.168.1.100")</li>
                    <li>Demande un masque en notation CIDR (ex: 24)</li>
                    <li>Affiche la classe de l'adresse (A, B, C, D, E) en se basant sur le premier octet</li>
                    <li>Indique si c'est une adresse privée ou publique</li>
                </ol>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mt-3">
                    <p><strong>Rappels :</strong></p>
                    <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Classe A : 1-126 (privé : 10.0.0.0 - 10.255.255.255)</li>
                        <li>Classe B : 128-191 (privé : 172.16.0.0 - 172.31.255.255)</li>
                        <li>Classe C : 192-223 (privé : 192.168.0.0 - 192.168.255.255)</li>
                        <li>127.x.x.x : loopback</li>
                    </ul>
                </div>
                <pre className="code-block mt-4"><code>{`# Indice : utilisez .split(".") pour séparer l'adresse IP
ip = "192.168.1.100"
octets = ip.split(".")       # → ["192", "168", "1", "100"]
premier_octet = int(octets[0])  # → 192`}</code></pre>
            </>
        )
    },
    {
        title: "Mission 5 — La boucle principale (15 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Faites en sorte que le programme ne s'arrête pas après une seule opération. Après chaque outil, il revient au menu principal. Le programme ne s'arrête que si l'utilisateur choisit 4 (Quitter).</p>
                <p className="mt-3"><strong>Indice :</strong> Encadrez tout dans une boucle <code>while True:</code> avec un <code>break</code> quand le choix est 4.</p>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg mt-4">
                    <p><strong>Mission Bonus</strong> (pour les plus rapides) :</p>
                    <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Ajoutez un outil 5 : "Générateur de mot de passe" qui demande la longueur souhaitée et génère un mot de passe aléatoire (<code>import random</code>)</li>
                        <li>Ajoutez une gestion d'erreur : si l'utilisateur entre du texte au lieu d'un nombre, le programme ne plante pas (astuce : <code>try/except</code>)</li>
                    </ul>
                </div>
            </>
        )
//     },
//     {
//         title: "Correction complète",
//         description: (
//             <>
//                 <p><strong>Code complet de la Boîte à Outils :</strong></p>
//                 <pre className="code-block"><code>{`# ═══════════════════════════════════════════
// #   BOÎTE À OUTILS SYSADMIN — CORRECTION
// # ═══════════════════════════════════════════

// # --- ACCUEIL ---
// print("══════════════════════════════════════")
// print("   🔧 BOÎTE À OUTILS SYSADMIN 🔧   ")
// print("══════════════════════════════════════")
// nom = input("Votre nom : ")
// print(f"Bienvenue {nom} !")

// # --- BOUCLE PRINCIPALE ---
// while True:
//     print("\\n--- MENU PRINCIPAL ---")
//     print("1. Convertisseur d'unités de stockage")
//     print("2. Vérificateur de port")
//     print("3. Calculateur d'adresses réseau")
//     print("4. Quitter")

//     choix = input("\\nVotre choix : ")

//     # --- OUTIL 1 : CONVERTISSEUR ---
//     if choix == "1":
//         print("\\n--- CONVERTISSEUR DE STOCKAGE ---")
//         valeur = float(input("Valeur : "))
//         unite = input("Unité (octets/Ko/Mo/Go/To) : ").strip()

//         # Conversion en octets d'abord
//         if unite == "octets":
//             octets = valeur
//         elif unite == "Ko":
//             octets = valeur * 1024
//         elif unite == "Mo":
//             octets = valeur * 1024 ** 2
//         elif unite == "Go":
//             octets = valeur * 1024 ** 3
//         elif unite == "To":
//             octets = valeur * 1024 ** 4
//         else:
//             print("Unité non reconnue !")
//             continue

//         # Affichage dans toutes les unités
//         print(f"\\n--- Résultat ---")
//         print(f"{valeur} {unite} = {octets} octets")
//         print(f"{valeur} {unite} = {octets / 1024:.2f} Ko")
//         print(f"{valeur} {unite} = {octets / 1024**2:.2f} Mo")
//         print(f"{valeur} {unite} = {octets / 1024**3:.5f} Go")
//         print(f"{valeur} {unite} = {octets / 1024**4:.8f} To")

//     # --- OUTIL 2 : VÉRIFICATEUR DE PORT ---
//     elif choix == "2":
//         print("\\n--- VÉRIFICATEUR DE PORT ---")
//         port = int(input("Numéro de port : "))

//         if port < 0 or port > 65535:
//             print("❌ Port invalide ! (doit être entre 0 et 65535)")
//             continue

//         # Catégorie du port
//         if port <= 1023:
//             categorie = "Well-known (réservé)"
//         elif port <= 49151:
//             categorie = "Registered (enregistré)"
//         else:
//             categorie = "Dynamic/Private (dynamique)"

//         print(f"Port {port} — Catégorie : {categorie}")

//         # Services connus
//         if port == 21:
//             print("→ Service : FTP (transfert de fichiers)")
//         elif port == 22:
//             print("→ Service : SSH (connexion sécurisée)")
//         elif port == 23:
//             print("→ Service : Telnet (connexion non sécurisée)")
//         elif port == 25:
//             print("→ Service : SMTP (envoi d'emails)")
//         elif port == 53:
//             print("→ Service : DNS (résolution de noms)")
//         elif port == 80:
//             print("→ Service : HTTP (web)")
//         elif port == 110:
//             print("→ Service : POP3 (réception d'emails)")
//         elif port == 143:
//             print("→ Service : IMAP (réception d'emails)")
//         elif port == 443:
//             print("→ Service : HTTPS (web sécurisé)")
//         elif port == 3306:
//             print("→ Service : MySQL (base de données)")
//         elif port == 3389:
//             print("→ Service : RDP (bureau à distance)")
//         elif port == 8080:
//             print("→ Service : HTTP alternatif (proxy/dev)")
//         else:
//             print("→ Service : non référencé dans notre base")

//     # --- OUTIL 3 : CALCULATEUR RÉSEAU ---
//     elif choix == "3":
//         print("\\n--- CALCULATEUR RÉSEAU ---")
//         ip = input("Adresse IP (ex: 192.168.1.100) : ")
//         cidr = input("Masque CIDR (ex: 24) : ")

//         octets_ip = ip.split(".")
//         premier = int(octets_ip[0])

//         # Classe de l'adresse
//         if premier == 127:
//             classe = "Loopback"
//             privee = True
//         elif premier >= 1 and premier <= 126:
//             classe = "A"
//             privee = (premier == 10)
//         elif premier >= 128 and premier <= 191:
//             classe = "B"
//             deuxieme = int(octets_ip[1])
//             privee = (premier == 172 and deuxieme >= 16 and deuxieme <= 31)
//         elif premier >= 192 and premier <= 223:
//             classe = "C"
//             deuxieme = int(octets_ip[1])
//             privee = (premier == 192 and deuxieme == 168)
//         elif premier >= 224 and premier <= 239:
//             classe = "D (Multicast)"
//             privee = False
//         else:
//             classe = "E (Expérimentale)"
//             privee = False

//         print(f"\\nAdresse : {ip}/{cidr}")
//         print(f"Classe : {classe}")
//         if privee:
//             print("Type : Adresse privée (RFC 1918)")
//         else:
//             print("Type : Adresse publique")

//     # --- QUITTER ---
//     elif choix == "4":
//         print(f"\\nAu revoir {nom} ! 👋")
//         break

//     else:
//         print("❌ Choix invalide, veuillez réessayer.")`}</code></pre>
//             </>
//         )
    },
];

const gameChallengesData = [
    {
        groupNumber: 1,
        title: "Pierre-Feuille-Ciseaux",
        concept: "Le jeu classique contre l'ordinateur. Le but est de créer une boucle de jeu qui permet de rejouer autant de fois que souhaité.",
        rules: [
            "L'ordinateur doit choisir un coup ('pierre', 'feuille' ou 'ciseaux') au hasard.",
            "Le joueur doit pouvoir entrer son propre coup via le terminal.",
            "Le programme doit comparer les deux coups et annoncer le gagnant (ou l'égalité).",
            "Après chaque manche, le programme doit demander à l'utilisateur s'il souhaite rejouer."
        ],
        skills: "input(), random.choice(), if/elif/else, boucle while."
    },
    {
        groupNumber: 2,
        title: "Le Quiz des Capitales",
        concept: "Un petit quiz de culture générale qui pose des questions et calcule un score final.",
        rules: [
            "Le programme doit contenir une liste d'au moins 5 questions (ex: 'Quelle est la capitale de la France ?').",
            "Pour chaque question, le programme doit vérifier si la réponse de l'utilisateur est correcte.",
            "Le programme doit tenir le compte des bonnes réponses.",
            "À la fin du quiz, le programme doit afficher le score final (ex: 'Vous avez eu 3 bonnes réponses sur 5')."
        ],
        skills: "listes ou dictionnaires, boucle for, input(), if/else, variables (pour le score)."
    },
    {
        groupNumber: 3,
        title: "Le Labyrinthe Textuel Simplifié",
        concept: "Créer un mini jeu d'aventure où le joueur se déplace entre quelques pièces en tapant des commandes.",
        rules: [
            "Le jeu commence dans une pièce. Le programme décrit la pièce (ex: 'Vous êtes dans le salon. Il y a une porte au nord.').",
            "Le joueur peut taper des commandes simples comme 'aller nord', 'aller sud', etc.",
            "Le programme doit réagir à ces commandes en changeant la 'position' du joueur et en décrivant la nouvelle pièce.",
            "Le jeu se termine lorsque le joueur atteint la 'sortie'."
        ],
        skills: "boucle while, input(), if/elif/else, variables pour suivre la position du joueur."
    },
    {
        groupNumber: 4,
        title: "Le Désamorçage de Bombe",
        concept: "Un jeu de rapidité et de logique où le joueur doit trouver le bon code pour désamorcer une bombe avant la fin du compte à rebours.",
        rules: [
            "Au début, l'ordinateur choisit un 'code de désamorçage' secret (un nombre aléatoire entre 1 et 15).",
            "Un compte à rebours de 10 secondes se lance.",
            "À chaque seconde, le programme doit demander au joueur de proposer un code.",
            "Si le code est incorrect, le programme continue le décompte.",
            "Si le joueur trouve le bon code avant la fin du temps, il gagne et le programme affiche 'Bombe désamorcée !'.",
            "Si le compte à rebours atteint 0, le joueur perd et le programme affiche 'BOOM !'."
        ],
        skills: "import time, random.randint(), boucle for avec range(), input(), int(), if/else, time.sleep(1)."
    },
    {
        groupNumber: 5,
        title: "Le Générateur d'Acronymes",
        concept: "Un petit programme amusant qui transforme une phrase entrée par l'utilisateur en un acronyme.",
        rules: [
            "Le programme demande à l'utilisateur d'entrer une expression (ex: 'Baccalauréat Professionnel').",
            "Il doit ensuite extraire la première lettre de chaque mot.",
            "Enfin, il doit assembler ces lettres en majuscules pour former l'acronyme et l'afficher (ex: 'BP')."
        ],
        skills: "input(), manipulation de chaînes de caractères (.split(), .upper(), index [0]), boucle for."
    },
    {
        groupNumber: 6,
        title: "Le Jeu du Pendu",
        concept: "Une version simplifiée du célèbre jeu du pendu, où le joueur doit deviner un mot lettre par lettre.",
        rules: [
            "L'ordinateur choisit un mot secret dans une liste prédéfinie.",
            "Le programme affiche des tirets ( _ _ _ ) correspondant au nombre de lettres du mot.",
            "Le joueur a droit à un nombre limité de tentatives (ex: 10 vies).",
            "À chaque tour, le joueur propose une lettre. Si elle est dans le mot, les tirets correspondants sont remplacés. Sinon, il perd une vie.",
            "Le jeu se termine si le mot est trouvé ou si le joueur n'a plus de vies."
        ],
        skills: "random.choice(), listes, chaînes de caractères, boucles, conditions, variables (vies, lettres devinées)."
    },
    {
        groupNumber: 7,
        title: "Le Simulateur de Lancer de Dés",
        concept: "Un outil pratique pour les joueurs de jeux de rôle qui a besoin de simuler des lancers de dés complexes.",
        rules: [
            "Le programme demande à l'utilisateur : 'Combien de dés voulez-vous lancer ?'.",
            "Puis il demande : 'Combien de faces a chaque dé ?'.",
            "Le programme doit alors simuler le lancer pour chaque dé (générer un nombre aléatoire entre 1 et le nombre de faces).",
            "Il doit afficher le résultat de chaque dé individuellement, ainsi que la somme totale de tous les dés."
        ],
        skills: "input(), int(), boucle for, random.randint(), variables pour calculer la somme."
    }
];

export const modulePythonCours1 = {
    course: (
        <>
            <h3>Python, le couteau suisse du technicien CIEL</h3>
            <p>Vous connaissez JavaScript. Vous savez faire des variables, des conditions, des boucles. Bonne nouvelle : <strong>vous savez déjà programmer</strong>. Maintenant, on va apprendre Python — et vous allez voir que c'est plus simple, plus lisible, et surtout c'est LE langage de la cybersécurité et de l'administration système.</p>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mt-4 not-prose">
                <h4 className="font-semibold mb-2">Pourquoi Python en CIEL ?</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>C'est le langage n°1 en <strong>cybersécurité</strong> (scripts d'audit, tests d'intrusion, analyse de logs)</li>
                    <li>C'est le langage de l'<strong>automatisation système</strong> (scripts d'administration, gestion de serveurs)</li>
                    <li>C'est le langage des <strong>outils réseau</strong> (Scapy, Nmap scripting, Wireshark plugins)</li>
                    <li>Les outils comme Metasploit, Burp Suite sont écrits en Python</li>
                    <li>C'est le langage le plus demandé dans les offres d'emploi IT</li>
                </ul>
            </div>

            <h3>a. Premier programme et syntaxe de base</h3>

            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Hello World — JavaScript vs Python</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">JavaScript :</p>
                            <pre className="code-block"><code>{`// JavaScript
console.log("Hello World !");
let nom = "CIEL";
console.log("Bienvenue en " + nom);`}</code></pre>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Python :</p>
                            <pre className="code-block"><code>{`# Python
print("Hello World !")
nom = "CIEL"
print("Bienvenue en " + nom)`}</code></pre>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold mb-2">Ce qui change par rapport au JavaScript :</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Plus de point-virgule en fin de ligne</li>
                        <li>{"Plus d'accolades { } → c'est l'indentation (les espaces) qui structure le code"}</li>
                        <li>{"Plus de var / let / const → on écrit directement le nom de la variable"}</li>
                        <li>{"console.log() → print()"}</li>
                        <li>{"Les commentaires passent de // à #"}</li>
                    </ul>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Les règles de base de Python :</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Une instruction par ligne (pas de ; pour séparer)</li>
                        <li>Les commentaires commencent par <code>#</code></li>
                        <li>Les noms de variables : en minuscules, avec des underscores (<code>mon_nombre</code>, <code>adresse_ip</code>)</li>
                        <li>Python est sensible à la casse : <code>nom</code> et <code>Nom</code> sont deux variables différentes</li>
                        <li>L'indentation est OBLIGATOIRE et fait partie de la syntaxe</li>
                    </ul>
                </div>
            </div>

            <h3>b. Variables, types et conversions</h3>

            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Les types de données en Python</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm border">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border px-3 py-2 text-left">Type Python</th>
                                    <th className="border px-3 py-2 text-left">Équivalent JS</th>
                                    <th className="border px-3 py-2 text-left">Exemple</th>
                                    <th className="border px-3 py-2 text-left">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border px-3 py-1"><code>int</code></td><td className="border px-3 py-1">Number</td><td className="border px-3 py-1">42</td><td className="border px-3 py-1">Nombre entier</td></tr>
                                <tr><td className="border px-3 py-1"><code>float</code></td><td className="border px-3 py-1">Number</td><td className="border px-3 py-1">3.14</td><td className="border px-3 py-1">Nombre décimal</td></tr>
                                <tr><td className="border px-3 py-1"><code>str</code></td><td className="border px-3 py-1">String</td><td className="border px-3 py-1">"hello"</td><td className="border px-3 py-1">Chaîne de caractères</td></tr>
                                <tr><td className="border px-3 py-1"><code>bool</code></td><td className="border px-3 py-1">Boolean</td><td className="border px-3 py-1">True / False</td><td className="border px-3 py-1">Booléen (majuscule !)</td></tr>
                                <tr><td className="border px-3 py-1"><code>list</code></td><td className="border px-3 py-1">Array</td><td className="border px-3 py-1">[1, 2, 3]</td><td className="border px-3 py-1">Liste (tableau)</td></tr>
                                <tr><td className="border px-3 py-1"><code>dict</code></td><td className="border px-3 py-1">Object</td><td className="border px-3 py-1">{`{"cle": "val"}`}</td><td className="border px-3 py-1">Dictionnaire</td></tr>
                                <tr><td className="border px-3 py-1"><code>None</code></td><td className="border px-3 py-1">null</td><td className="border px-3 py-1">None</td><td className="border px-3 py-1">Valeur nulle</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Vérifier le type et convertir</h4>
                    <pre className="code-block"><code>{`# Vérifier le type avec type()
nombre = 42
print(type(nombre))    # <class 'int'>

texte = "Bonjour"
print(type(texte))     # <class 'str'>

# Les conversions de type (casting)
int("42")        # 42
float("3.14")    # 3.14
str(42)          # "42"
bool(0)          # False
bool(1)          # True`}</code></pre>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold mb-2">Les f-strings — La meilleure façon d'afficher</h4>
                    <pre className="code-block"><code>{`# La concaténation classique (comme en JS)
nom = "Lucas"
age = 17
print("Je m'appelle " + nom + " et j'ai " + str(age) + " ans")

# Les f-strings (bien plus propre !)
print(f"Je m'appelle {nom} et j'ai {age} ans")

# On peut même faire des calculs dans les { }
prix = 49.99
quantite = 3
print(f"Total : {prix * quantite} €")    # Total : 149.97 €`}</code></pre>
                    <p className="text-sm mt-2">Les f-strings, c'est la façon moderne et recommandée. Mettez un <code>f</code> avant les guillemets et vos variables entre <code>{'{}'}</code>.</p>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Récupérer une saisie utilisateur — input()</h4>
                    <pre className="code-block"><code>{`# En JS : prompt() ou un formulaire HTML
# En Python : input()

nom = input("Quel est votre nom ? ")
print(f"Bonjour {nom} !")

# ATTENTION : input() renvoie TOUJOURS une chaîne (str)
age = input("Quel est votre âge ? ")   # age est un str !

# Il faut convertir si on veut un nombre
age = int(input("Quel est votre âge ? "))
print(type(age))                         # <class 'int'>`}</code></pre>
                </div>
            </div>

            <h3>c. Les conditions : if / elif / else</h3>

            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">JavaScript vs Python</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">JavaScript :</p>
                            <pre className="code-block"><code>{`// JavaScript
let port = 443;
if (port === 80) {
    console.log("HTTP");
} else if (port === 443) {
    console.log("HTTPS");
} else {
    console.log("Autre port");
}`}</code></pre>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Python :</p>
                            <pre className="code-block"><code>{`# Python
port = 443
if port == 80:
    print("HTTP")
elif port == 443:
    print("HTTPS")
else:
    print("Autre port")`}</code></pre>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h4 className="font-semibold mb-2">L'indentation — C'est VITAL</h4>
                    <pre className="code-block"><code>{`# CORRECT — le print est indenté (4 espaces)
if True:
    print("Ce code est dans le if")

# ERREUR — Python va planter !
if True:
print("Pas d'indentation = erreur")
# → IndentationError: expected an indented block`}</code></pre>
                    <p className="text-sm mt-2">L'indentation n'est pas décorative en Python. C'est elle qui dit au programme quel code appartient à quel bloc. Règle : <strong>4 espaces</strong> par niveau.</p>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Les opérateurs de comparaison</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm border">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border px-3 py-2 text-left">Python</th>
                                    <th className="border px-3 py-2 text-left">JavaScript</th>
                                    <th className="border px-3 py-2 text-left">Signification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border px-3 py-1"><code>==</code></td><td className="border px-3 py-1"><code>===</code></td><td className="border px-3 py-1">Égal à</td></tr>
                                <tr><td className="border px-3 py-1"><code>!=</code></td><td className="border px-3 py-1"><code>!==</code></td><td className="border px-3 py-1">Différent de</td></tr>
                                <tr><td className="border px-3 py-1"><code>{'<'}</code></td><td className="border px-3 py-1"><code>{'<'}</code></td><td className="border px-3 py-1">Inférieur à</td></tr>
                                <tr><td className="border px-3 py-1"><code>{'>'}</code></td><td className="border px-3 py-1"><code>{'>'}</code></td><td className="border px-3 py-1">Supérieur à</td></tr>
                                <tr><td className="border px-3 py-1"><code>and</code></td><td className="border px-3 py-1"><code>&&</code></td><td className="border px-3 py-1">ET logique</td></tr>
                                <tr><td className="border px-3 py-1"><code>or</code></td><td className="border px-3 py-1"><code>||</code></td><td className="border px-3 py-1">OU logique</td></tr>
                                <tr><td className="border px-3 py-1"><code>not</code></td><td className="border px-3 py-1"><code>!</code></td><td className="border px-3 py-1">NON logique</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm mt-2">Python utilise les mots anglais <code>and</code>, <code>or</code>, <code>not</code> au lieu des symboles. C'est plus lisible.</p>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">L'opérateur <code>in</code> — Spécialité Python</h4>
                    <pre className="code-block"><code>{`# Vérifier si une valeur est dans une liste
ports_critiques = [22, 80, 443, 3306, 8080]
port = int(input("Entrez un numéro de port : "))

if port in ports_critiques:
    print(f"⚠️ Le port {port} est un port critique !")
else:
    print(f"Le port {port} n'est pas dans la liste")`}</code></pre>
                    <p className="text-sm mt-2">Cet opérateur <code>in</code> n'existe pas directement en JS (il faut utiliser <code>.includes()</code>). En Python, c'est natif et très utilisé.</p>
                </div>
            </div>

            <h3>d. Les boucles : for et while</h3>

            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">La boucle for — JavaScript vs Python</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">JavaScript :</p>
                            <pre className="code-block"><code>{`// Boucle classique
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Boucle for...of
let ports = [22, 80, 443];
for (let port of ports) {
    console.log(port);
}`}</code></pre>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Python :</p>
                            <pre className="code-block"><code>{`# Boucle avec range()
for i in range(5):
    print(i)    # 0, 1, 2, 3, 4

# Boucle sur une liste
ports = [22, 80, 443]
for port in ports:
    print(port) # 22, 80, 443`}</code></pre>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Comprendre range()</h4>
                    <pre className="code-block"><code>{`# range(fin) → de 0 à fin-1
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
    print(i)           # 10, 9, 8, ... 1`}</code></pre>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">La boucle while</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">JavaScript :</p>
                            <pre className="code-block"><code>{`// JavaScript
let tentatives = 0;
while (tentatives < 3) {
    console.log("Tentative "
        + (tentatives + 1));
    tentatives++;
}`}</code></pre>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Python :</p>
                            <pre className="code-block"><code>{`# Python
tentatives = 0
while tentatives < 3:
    print(f"Tentative {tentatives + 1}")
    tentatives += 1
# Pas de ++ en Python ! += 1`}</code></pre>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Boucle de connexion avec tentatives limitées</h4>
                    <pre className="code-block"><code>{`mot_de_passe_correct = "CielPro2026"
tentatives = 0
max_tentatives = 3

while tentatives < max_tentatives:
    saisie = input("Mot de passe : ")
    if saisie == mot_de_passe_correct:
        print("✅ Accès autorisé !")
        break    # sort de la boucle immédiatement
    else:
        tentatives += 1
        restantes = max_tentatives - tentatives
        print(f"❌ Incorrect. {restantes} tentative(s) restante(s)")

if tentatives == max_tentatives:
    print("🔒 Compte bloqué ! Trop de tentatives.")`}</code></pre>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold mb-2">break et continue</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><code>break</code> : sort immédiatement de la boucle (identique à JS)</li>
                        <li><code>continue</code> : passe directement à l'itération suivante (identique à JS)</li>
                    </ul>
                    <pre className="code-block mt-2"><code>{`# Exemple avec continue — ignorer les ports réservés
for port in range(75, 85):
    if port == 80:
        continue    # On saute le port 80
    print(f"Scan du port {port}...")
# Affiche : 75, 76, 77, 78, 79, 81, 82, 83, 84`}</code></pre>
                </div>
            </div>

            <h3>e. Récapitulatif JS → Python</h3>

            <div className="not-prose">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-3 py-2 text-left">Concept</th>
                                <th className="border px-3 py-2 text-left">JavaScript</th>
                                <th className="border px-3 py-2 text-left">Python</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="border px-3 py-1">Afficher</td><td className="border px-3 py-1"><code>console.log()</code></td><td className="border px-3 py-1"><code>print()</code></td></tr>
                            <tr><td className="border px-3 py-1">Saisie utilisateur</td><td className="border px-3 py-1"><code>prompt()</code></td><td className="border px-3 py-1"><code>input()</code></td></tr>
                            <tr><td className="border px-3 py-1">Déclarer une variable</td><td className="border px-3 py-1"><code>let x = 5;</code></td><td className="border px-3 py-1"><code>x = 5</code></td></tr>
                            <tr><td className="border px-3 py-1">Commentaire</td><td className="border px-3 py-1"><code>{"// ou /* */"}</code></td><td className="border px-3 py-1"><code>#</code></td></tr>
                            <tr><td className="border px-3 py-1">Égalité</td><td className="border px-3 py-1"><code>===</code></td><td className="border px-3 py-1"><code>==</code></td></tr>
                            <tr><td className="border px-3 py-1">ET / OU / NON</td><td className="border px-3 py-1"><code>{"&& || !"}</code></td><td className="border px-3 py-1"><code>and or not</code></td></tr>
                            <tr><td className="border px-3 py-1">Bloc de code</td><td className="border px-3 py-1"><code>{"{  }"}</code></td><td className="border px-3 py-1">indentation (4 espaces)</td></tr>
                            <tr><td className="border px-3 py-1">else if</td><td className="border px-3 py-1"><code>else if</code></td><td className="border px-3 py-1"><code>elif</code></td></tr>
                            <tr><td className="border px-3 py-1">Boucle for</td><td className="border px-3 py-1"><code>{"for(let i=0; i<n; i++)"}</code></td><td className="border px-3 py-1"><code>for i in range(n):</code></td></tr>
                            <tr><td className="border px-3 py-1">Incrémenter</td><td className="border px-3 py-1"><code>i++</code></td><td className="border px-3 py-1"><code>i += 1</code></td></tr>
                            <tr><td className="border px-3 py-1">Longueur</td><td className="border px-3 py-1"><code>.length</code></td><td className="border px-3 py-1"><code>len()</code></td></tr>
                            <tr><td className="border px-3 py-1">Null / Booléens</td><td className="border px-3 py-1"><code>null, true, false</code></td><td className="border px-3 py-1"><code>None, True, False</code></td></tr>
                            <tr><td className="border px-3 py-1">Template literals</td><td className="border px-3 py-1"><code>{"`${var}`"}</code></td><td className="border px-3 py-1"><code>{"f\"{var}\""}</code></td></tr>
                            <tr><td className="border px-3 py-1">Fin de ligne</td><td className="border px-3 py-1"><code>;</code></td><td className="border px-3 py-1">rien</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h3>f. Les outils</h3>
            <p>Pour écrire et exécuter du Python facilement, nous utiliserons <a className='text-blue-500' href='https://www.online-python.com/'>online-python.com</a>. C'est un éditeur en ligne gratuit qui permet d'écrire et tester du code Python directement dans le navigateur, sans rien installer.</p>
        </>
    ),
    tp: (
        <PracticalWork
            title={tpTitle}
            objective={tpObjective}
            materials={tpMaterials}
            steps={tpSteps}
        />
    ),
    tp2: (
        <div className="space-y-12 prose max-w-none">
            <section>
                <Heading level={1} className="mb-4">TP : Création de Mini-Jeux en Python</Heading>
                <p className="text-xl text-gray-600">Après avoir vu les bases de la programmation, il est temps de créer ! Chaque groupe va réaliser un petit jeu en ligne de commande. L'objectif est de transformer une idée en un programme fonctionnel en utilisant les briques logiques que nous avons apprises.</p>
            </section>

            <section>
                <Heading level={2} className="border-b pb-2 mb-4">Objectif et Livrables</Heading>
                <Card className="bg-blue-50 border-blue-200">
                    <p>Pour le projet assigné à votre groupe, vous devez produire un unique fichier Python (<code>.py</code>) qui contient le code complet et fonctionnel de votre jeu. Le code doit être commenté pour expliquer les parties les plus importantes de votre logique.</p>
                    <ul className="list-disc list-inside mt-2 font-semibold">
                        <li><strong>Outils :</strong> <a className='text-blue-500' href='https://www.online-python.com/'>online-python</a></li>
                        <li><strong>Livrable :</strong> Une fois votre code opérationnel, envoyer par mail le lien du code partagé ("Share", à côté de "Run").</li>
                    </ul>
                </Card>
            </section>

            <section>
                <Heading level={2} className="border-b pb-2 mb-4">Énoncés des Mini-Jeux (1 par groupe)</Heading>
                <p>Chaque groupe se voit attribuer un des projets suivants. Lisez attentivement les règles et les contraintes, et commencez à réfléchir à l'algorithme (la suite d'instructions logiques) que vous allez devoir écrire.</p>
                <div className="space-y-4 mt-6 not-prose">
                    {gameChallengesData.map(challenge => (
                        <GameChallenge key={challenge.groupNumber} {...challenge} />
                    ))}
                </div>
            </section>
        </div>
    )
};
