import React from 'react';
import PracticalWork from '../../components/organisms/PraticalWork';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';
import GameChallenge from '../../components/molecules/GameChallenge';

const tpTitle = 'TP : Mon Premier Script Python';
const tpObjective = 'Maîtriser progressivement les briques de base de la programmation en Python : affichage, saisie, variables, conditions et boucles.';
const tpMaterials = [
    'Un navigateur web avec accès à online-python.com',
    'Un cahier ou bloc-notes pour prendre des notes sur les concepts clés.',
];

const tpSteps = [
    {
        title: "Phase 1 : Afficher et Demander (print / input)",
        description: (
            <>
                <p><strong>Objectif :</strong> Comprendre comment afficher du texte et demander une information à l'utilisateur.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Afficher un message :</strong>
                        <p>La fonction <code>print()</code> permet d'écrire du texte dans le terminal.</p>
                        <pre className="code-block"><code>{`print("Bonjour !")
print("Je suis un programme Python.")`}</code></pre>
                    </li>
                    <li><strong>Demander une information :</strong>
                        <p>La fonction <code>input()</code> met le programme en pause et attend que l'utilisateur tape quelque chose.</p>
                        <pre className="code-block"><code>{`print("Bonjour !")
nom_utilisateur = input("Quel est ton nom ? ")
print("Bienvenue,", nom_utilisateur)`}</code></pre>
                    </li>
                    <li><strong>À vous :</strong> Écrivez un script qui demande le prénom ET le nom de l'utilisateur, puis affiche une phrase complète comme : "Bonjour Jean Dupont, bienvenue !"</li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 2 : Les Variables et les Types",
        description: (
            <>
                <p><strong>Objectif :</strong> Comprendre comment stocker des données et les convertir d'un type à un autre.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Les types de données :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li><code>str</code> (texte) : <code>"Bonjour"</code></li>
                            <li><code>int</code> (nombre entier) : <code>42</code></li>
                            <li><code>float</code> (nombre décimal) : <code>3.14</code></li>
                            <li><code>bool</code> (vrai/faux) : <code>True</code> ou <code>False</code></li>
                        </ul>
                    </li>
                    <li><strong>Le piège de <code>input()</code> :</strong>
                        <p><code>input()</code> renvoie TOUJOURS du texte (<code>str</code>). Pour faire des calculs, il faut convertir avec <code>int()</code> ou <code>float()</code>.</p>
                        <pre className="code-block"><code>{`annee_naissance_str = input("En quelle année es-tu né ? ")
annee_naissance = int(annee_naissance_str)
age = 2025 - annee_naissance
print("Tu as ou auras", age, "ans cette année.")`}</code></pre>
                    </li>
                    <li><strong>À vous :</strong> Écrivez un script qui demande la taille en centimètres, la convertit en mètres (division par 100) et affiche le résultat.</li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 3 : Les Conditions (if / elif / else)",
        description: (
            <>
                <p><strong>Objectif :</strong> Permettre au programme de prendre des décisions.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Le principe :</strong>
                        <p>"S'il pleut, prends un parapluie, sinon prends des lunettes de soleil." En Python :</p>
                        <pre className="code-block"><code>{`meteo = input("Quel temps fait-il ? (pluie/soleil) ")

if meteo == "pluie":
    print("Prends un parapluie !")
elif meteo == "soleil":
    print("Prends des lunettes de soleil !")
else:
    print("Je ne connais pas cette météo.")`}</code></pre>
                    </li>
                    <li><strong>Les comparaisons :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li><code>==</code> : est égal à</li>
                            <li><code>!=</code> : est différent de</li>
                            <li><code>{'>'}</code>, <code>{'<'}</code>, <code>{'>='}</code>, <code>{'<='}</code> : supérieur, inférieur, etc.</li>
                        </ul>
                    </li>
                    <li><strong>À vous :</strong> Reprenez le script de l'âge (Phase 2) et ajoutez une condition pour afficher si l'utilisateur est majeur ({'>='} 18) ou mineur.
                        <pre className="code-block"><code>{`annee_naissance = int(input("En quelle année es-tu né ? "))
age = 2025 - annee_naissance
print("Tu as ou auras", age, "ans cette année.")

if age >= 18:
    print("Tu es majeur.")
else:
    print("Tu es mineur.")`}</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 4 : Les Boucles (while et for)",
        description: (
            <>
                <p><strong>Objectif :</strong> Répéter des actions automatiquement.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>La boucle <code>while</code> (Tant que) :</strong>
                        <p>Répète un bloc TANT QU'une condition est vraie. Idéal quand on ne sait pas combien de fois on doit répéter.</p>
                        <pre className="code-block"><code>{`mot_de_passe = ""
while mot_de_passe != "1234":
    mot_de_passe = input("Entrez le mot de passe : ")

print("Accès autorisé !")`}</code></pre>
                    </li>
                    <li><strong>La boucle <code>for</code> (Pour) :</strong>
                        <p>Répète un bloc un nombre de fois défini ou parcourt une liste d'éléments.</p>
                        <pre className="code-block"><code>{`# Compter de 1 à 5
for i in range(1, 6):
    print("Tour numéro", i)

# Parcourir une liste
fruits = ["pomme", "banane", "cerise"]
for fruit in fruits:
    print("J'aime les", fruit)`}</code></pre>
                    </li>
                    <li><strong>À vous :</strong> Écrivez un script qui demande un mot de passe. L'utilisateur a 3 tentatives maximum. S'il trouve le bon mot de passe, afficher "Bienvenue !". S'il échoue 3 fois, afficher "Compte bloqué."</li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 5 : Le Jeu Complet - Plus ou Moins",
        description: (
            <>
                <p><strong>Objectif :</strong> Assembler tous les concepts appris pour créer un vrai programme interactif.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Les règles :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>L'ordinateur choisit un nombre secret entre 1 et 100.</li>
                            <li>Le joueur propose un nombre.</li>
                            <li>Le programme dit "C'est plus grand !" ou "C'est plus petit !"</li>
                            <li>Le jeu continue jusqu'à ce que le joueur trouve.</li>
                        </ul>
                    </li>
                    <li><strong>Nouveau concept - <code>import</code> :</strong>
                        <p>Pour générer un nombre aléatoire, on "importe" le module <code>random</code> de Python.</p>
                    </li>
                    <li><strong>Le code complet :</strong>
                        <pre className="code-block"><code>{`import random
import time

while True:
    print("Je pense à un nombre entre 1 et 100...")
    nombre_secret = random.randint(1, 100)

    while True:
        proposition_str = input("Devine le nombre : ")

        if not proposition_str.isdigit():
            print("Erreur : Veuillez entrer un nombre.")
            continue

        proposition = int(proposition_str)

        if proposition < nombre_secret:
            print("C'est plus grand !")
        elif proposition > nombre_secret:
            print("C'est plus petit !")
        else:
            print("Bravo ! C'était bien", nombre_secret)
            time.sleep(3)
            break

    rejouer = input("Veux-tu rejouer ? (oui/non) ")
    if rejouer.lower() != "oui":
        break`}</code></pre>
                    </li>
                    <li><strong>Améliorations possibles :</strong> Ajoutez un compteur de tentatives et affichez le nombre de coups à la fin !</li>
                </ol>
            </>
        )
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
            <h3>a. Définition et historique</h3>
            <p>Coder (ou programmer), c'est donner une série d'ordres précis à un ordinateur dans un langage qu'il peut comprendre. L'ordinateur est un exécutant parfait mais sans initiative : il ne fait que ce qu'on lui dit. Le rôle du développeur est de traduire un besoin en une suite d'instructions logiques et simples.</p>
            <p><strong>Python</strong> est un langage créé en 1991 par Guido van Rossum. Il est connu pour sa syntaxe simple et lisible, ce qui en fait le langage idéal pour débuter. Il est utilisé dans de nombreux domaines : développement web, intelligence artificielle, automatisation, cybersécurité, science des données...</p>

            <h3>b. Les briques de base de la programmation</h3>
            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Les Variables</h4>
                    <p className="text-sm">Une variable, c'est comme une boîte avec une étiquette. On peut mettre quelque chose dedans (un nombre, du texte...) et on y fait référence avec son étiquette.</p>
                    <pre className="code-block mt-2"><code>{`age = 17
nom = "Dupont"
print(nom, "a", age, "ans.")`}</code></pre>
                </div>
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Les Conditions (<code>if</code>, <code>elif</code>, <code>else</code>)</h4>
                    <p className="text-sm">Permet à un programme de prendre des décisions. "S'il pleut, prends un parapluie, sinon, prends des lunettes de soleil".</p>
                    <pre className="code-block mt-2"><code>{`# Cas d'usage : Gestion de ticket
statut_ticket = "Nouveau"
if statut_ticket == "Nouveau":
    print("Ticket assigné à un technicien.")
elif statut_ticket == "En cours":
    print("En attente de la réponse du technicien.")
else:
    print("Le ticket est fermé.")`}</code></pre>
                </div>
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Les Boucles <code>while</code> (Tant que)</h4>
                    <p className="text-sm">Répète un bloc d'instructions TANT QU'une condition est vraie.</p>
                    <pre className="code-block mt-2"><code>{`# Cas d'usage : Traiter tous les nouveaux tickets
tickets_nouveaux = 3
while tickets_nouveaux > 0:
    print("Je traite un nouveau ticket.")
    tickets_nouveaux = tickets_nouveaux - 1
print("Plus de nouveaux tickets à traiter.")`}</code></pre>
                </div>
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Les Boucles <code>for</code> (Pour)</h4>
                    <p className="text-sm">Répète un bloc d'instructions un nombre de fois défini, parfait pour parcourir une liste d'éléments.</p>
                    <pre className="code-block mt-2"><code>{`# Cas d'usage : Envoyer un rappel pour chaque ticket assigné
tickets_assignes = ["Ticket001", "Ticket005", "Ticket012"]
for ticket in tickets_assignes:
    print("Email de rappel envoyé pour le", ticket)`}</code></pre>
                </div>
            </div>

            <h3>c. Les outils</h3>
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
