import React from 'react';

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
        </>
    )
};
