import React from 'react';
import Heading from '../../components/atoms/Heading';
import GameChallenge from '../../components/molecules/GameChallenge';
import Card from '../../components/atoms/Card';

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
        concept: "Un outil pratique pour les joueurs de jeux de rôle qui ont besoin de simuler des lancers de dés complexes.",
        rules: [
            "Le programme demande à l'utilisateur : 'Combien de dés voulez-vous lancer ?'.",
            "Puis il demande : 'Combien de faces a chaque dé ?'.",
            "Le programme doit alors simuler le lancer pour chaque dé (générer un nombre aléatoire entre 1 et le nombre de faces).",
            "Il doit afficher le résultat de chaque dé individuellement, ainsi que la somme totale de tous les dés."
        ],
        skills: "input(), int(), boucle for, random.randint(), variables pour calculer la somme."
    }
];

export const module4Content = {
    course: (
        <>
            <h3>a. Définition et historique</h3>
            <p>Coder (ou programmer), c'est donner une série d'ordres précis à un ordinateur dans un langage qu'il peut comprendre. L'ordinateur est un exécutant parfait mais sans initiative : il ne fait que ce qu'on lui dit. Le rôle du développeur est de traduire un besoin en une suite d'instructions logiques et simples.</p>
            <h3>b. Les briques de base de la programmation</h3>
            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm"><h4 className="font-semibold">Les Variables</h4><p className="text-sm">Une variable, c'est comme une boîte avec une étiquette. On peut mettre quelque chose dedans (un nombre, du texte...) et on y fait référence avec son étiquette.</p><pre className="code-block mt-2"><code>age = 17{"\n"}nom = "Dupont"{"\n"}print(nom, "a", age, "ans.")</code></pre></div>
                <div className="p-4 bg-white border rounded-lg shadow-sm"><h4 className="font-semibold">Les Conditions (`if`, `elif`, `else`)</h4><p className="text-sm">Permet à un programme de prendre des décisions. "S'il pleut, prends un parapluie, sinon, prends des lunettes de soleil".</p><pre className="code-block mt-2"><code># Cas d'usage : Gestion de ticket{"\n"}statut_ticket = "Nouveau"{"\n"}if statut_ticket == "Nouveau":{"\n"}    print("Ticket assigné à un technicien."){"\n"}elif statut_ticket == "En cours":{"\n"}    print("En attente de la réponse du technicien."){"\n"}else:{"\n"}    print("Le ticket est fermé.")</code></pre></div>
                <div className="p-4 bg-white border rounded-lg shadow-sm"><h4 className="font-semibold">Les Boucles `while` (Tant que)</h4><p className="text-sm">Répète un bloc d'instructions TANT QU'une condition est vraie.</p><pre className="code-block mt-2"><code># Cas d'usage : Traiter tous les nouveaux tickets{"\n"}tickets_nouveaux = 3{"\n"}while tickets_nouveaux {'>'} 0:{"\n"}    print("Je traite un nouveau ticket."){"\n"}    tickets_nouveaux = tickets_nouveaux - 1{"\n"}print("Plus de nouveaux tickets à traiter.")</code></pre></div>
                <div className="p-4 bg-white border rounded-lg shadow-sm"><h4 className="font-semibold">Les Boucles `for` (Pour)</h4><p className="text-sm">Répète un bloc d'instructions un nombre de fois défini, parfait pour parcourir une liste d'éléments.</p><pre className="code-block mt-2"><code># Cas d'usage : Envoyer un rappel pour chaque ticket assigné{"\n"}tickets_assignes = ["Ticket001", "Ticket005", "Ticket012"]{"\n"}for ticket in tickets_assignes:{"\n"}    print("Email de rappel envoyé pour le", ticket)</code></pre></div>
            </div>
        </>
    ),
    tp: (
        <>
            <h3>TP : Mon Premier Script Python</h3>
            <p><strong>Objectif :</strong> Maîtriser progressivement les briques de base de la programmation en Python.</p>
            <div className="space-y-6">
                <div><h4>Étape 1 : Afficher et Demander (print / input)</h4><p>Écrivez un script qui dit bonjour, demande le nom de l'utilisateur et le salue en retour.</p><pre className="code-block"><code>print("Bonjour !"){"\n"}nom_utilisateur = input("Quel est ton nom ? "){"\n"}print("Bienvenue,", nom_utilisateur)</code></pre></div>
                <div><h4>Étape 2 : Variables et types</h4><p>Écrivez un script qui demande l'année de naissance, la convertit en nombre, calcule l'âge et l'affiche.</p><pre className="code-block"><code>annee_naissance_str = input("En quelle année es-tu né ? "){"\n"}annee_naissance = int(annee_naissance_str){"\n"}age = 2024 - annee_naissance{"\n"}print("Tu as ou auras", age, "ans cette année.")</code></pre></div>
                <div><h4>Étape 3 : Conditions (if / else)</h4><p>Reprenez le script précédent et ajoutez une condition pour afficher si l'utilisateur est majeur ou mineur.</p><pre className="code-block"><code>annee_naissance_str = input("En quelle année es-tu né ? "){"\n"}annee_naissance = int(annee_naissance_str){"\n"}age = 2024 - annee_naissance{"\n"}print("Tu as ou auras", age, "ans cette année."){"\n"}{"\n"}if age {'>'}= 18:{"\n"}    print("Tu es majeur."){"\n"}else:{"\n"}    print("Tu es mineur.")</code></pre></div>
                <div><h4>Étape 4 : Boucles (while)</h4><p>Écrivez un script qui demande un mot de passe et ne s'arrête que lorsque l'utilisateur entre "1234".</p><pre className="code-block"><code>mot_de_passe = ""{"\n"}while mot_de_passe != "1234":{"\n"}    mot_de_passe = input("Entrez le mot de passe : "){"\n"}{"\n"}print("Accès autorisé !")</code></pre></div>
                <div><h4>Étape 5 : Le jeu complet "Plus ou Moins"</h4><p>Maintenant, assemblez tous ces concepts pour créer le jeu final.</p><pre className="code-block"><code>import random{"\n"}import time{"\n"}{"\n"}while True:{"\n"}    print("Je pense à un nombre entre 1 et 100..."){"\n"}    nombre_secret = random.randint(1, 100){"\n"}    {"\n"}    while True:{"\n"}        proposition_str = input("Devine le nombre : "){"\n"}        {"\n"}        if not proposition_str.isdigit():{"\n"}            print("Erreur : Veuillez entrer un nombre."){"\n"}            continue{"\n"}            {"\n"}        proposition = int(proposition_str){"\n"}        {"\n"}        if proposition &lt; nombre_secret:{"\n"}            print("C'est plus grand !"){"\n"}        elif proposition {'>'} nombre_secret:{"\n"}            print("C'est plus petit !"){"\n"}        else:{"\n"}            print("Bravo ! C'était bien", nombre_secret){"\n"}            time.sleep(5){"\n"}            break{"\n"}            {"\n"}    rejouer = input("Veux-tu rejouer ? (oui/non) "){"\n"}    if rejouer.lower() != "oui":{"\n"}        break</code></pre></div>
            </div>
            <div className="space-y-12 prose max-w-none">
                <section>
                    <Heading level={1} className="mb-4">TP : Création de Mini-Jeux en Python</Heading>
                    <p className="text-xl text-gray-600">Après avoir vu les bases de la programmation, il est temps de créer ! Chaque groupe va réaliser un petit jeu en ligne de commande. L'objectif est de transformer une idée en un programme fonctionnel en utilisant les briques logiques que nous avons apprises.</p>
                </section>

                <section>
                    <Heading level={2} className="border-b pb-2 mb-4">Objectif et Livrables</Heading>
                    <Card className="bg-blue-50 border-blue-200">
                        <p>Pour le projet assigné à votre groupe, vous devez produire un unique fichier Python (`.py`) qui contient le code complet et fonctionnel de votre jeu. Le code doit être commenté pour expliquer les parties les plus importantes de votre logique.</p>
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
        </>
    )
};
