import React from 'react';
import PracticalWork from '../../components/organisms/PraticalWork';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';

const tpTitle = 'TP : Python Avancé - Structures de Données et Fonctions';
const tpObjective = 'Maîtriser les structures de données avancées (listes, dictionnaires, tuples) et les fonctions pour écrire des programmes plus organisés et puissants.';
const tpMaterials = [
    'Un navigateur web avec accès à online-python.com',
    'Les connaissances du Cours 1 (variables, conditions, boucles).',
];

const tpSteps = [
    {
        title: "Phase 1 : Les Listes - Stocker et Manipuler des Collections",
        description: (
            <>
                <p><strong>Objectif :</strong> Comprendre comment stocker plusieurs éléments dans une seule variable et les manipuler.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Créer et accéder à une liste :</strong>
                        <p>Une liste est une collection ordonnée d'éléments. On la crée avec des crochets <code>[]</code>.</p>
                        <pre className="code-block"><code>{`# Créer une liste de notes
notes = [12, 15, 9, 18, 14]

# Accéder à un élément (l'indice commence à 0 !)
print(notes[0])    # Affiche 12 (premier élément)
print(notes[2])    # Affiche 9 (troisième élément)
print(notes[-1])   # Affiche 14 (dernier élément)

# Connaître la taille
print(len(notes))  # Affiche 5`}</code></pre>
                    </li>
                    <li><strong>Modifier une liste :</strong>
                        <pre className="code-block"><code>{`fruits = ["pomme", "banane", "cerise"]

# Ajouter un élément à la fin
fruits.append("orange")
print(fruits)  # ['pomme', 'banane', 'cerise', 'orange']

# Supprimer un élément
fruits.remove("banane")
print(fruits)  # ['pomme', 'cerise', 'orange']

# Modifier un élément
fruits[0] = "kiwi"
print(fruits)  # ['kiwi', 'cerise', 'orange']`}</code></pre>
                    </li>
                    <li><strong>Parcourir une liste avec une boucle :</strong>
                        <pre className="code-block"><code>{`notes = [12, 15, 9, 18, 14]

# Méthode 1 : boucle for directe
for note in notes:
    print("Note :", note)

# Méthode 2 : avec l'indice
for i in range(len(notes)):
    print("Note n°" + str(i + 1) + " :", notes[i])`}</code></pre>
                    </li>
                    <li><strong>À vous :</strong> Écrivez un programme qui demande 5 notes à l'utilisateur (avec une boucle), les stocke dans une liste, puis affiche la note la plus haute, la plus basse et la moyenne.</li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 2 : Les Dictionnaires - Associer des Clés et des Valeurs",
        description: (
            <>
                <p><strong>Objectif :</strong> Comprendre comment stocker des données structurées avec des paires clé-valeur.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Le concept :</strong>
                        <p>Un dictionnaire est comme un vrai dictionnaire : on cherche un <strong>mot</strong> (la clé) pour trouver sa <strong>définition</strong> (la valeur). On le crée avec des accolades <code>{'{}'}</code>.</p>
                        <pre className="code-block"><code>{`# Un élève modélisé en dictionnaire
eleve = {
    "prenom": "Alice",
    "nom": "Dupont",
    "age": 17,
    "classe": "1CIEL"
}

# Accéder à une valeur par sa clé
print(eleve["prenom"])  # Affiche "Alice"
print(eleve["classe"])  # Affiche "1CIEL"`}</code></pre>
                    </li>
                    <li><strong>Modifier un dictionnaire :</strong>
                        <pre className="code-block"><code>{`# Modifier une valeur existante
eleve["age"] = 18

# Ajouter une nouvelle clé
eleve["email"] = "alice@mail.com"

# Supprimer une clé
del eleve["email"]

print(eleve)`}</code></pre>
                    </li>
                    <li><strong>Parcourir un dictionnaire :</strong>
                        <pre className="code-block"><code>{`eleve = {"prenom": "Alice", "nom": "Dupont", "age": 17}

# Parcourir les clés et valeurs
for cle, valeur in eleve.items():
    print(cle, ":", valeur)`}</code></pre>
                    </li>
                    <li><strong>Combiner listes et dictionnaires :</strong>
                        <pre className="code-block"><code>{`# Une liste de dictionnaires = une base de données simple !
classe = [
    {"prenom": "Alice", "age": 17, "moyenne": 14.5},
    {"prenom": "Bob", "age": 18, "moyenne": 12.0},
    {"prenom": "Charlie", "age": 17, "moyenne": 16.0},
]

# Afficher les élèves qui ont plus de 14 de moyenne
for eleve in classe:
    if eleve["moyenne"] >= 14:
        print(eleve["prenom"], "a", eleve["moyenne"], "de moyenne.")`}</code></pre>
                    </li>
                    <li><strong>À vous :</strong> Créez un mini-répertoire téléphonique. Le programme doit permettre à l'utilisateur d'ajouter un contact (nom + numéro), de rechercher un contact par son nom, et d'afficher tous les contacts.</li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 3 : Les Tuples - Des Données Immuables",
        description: (
            <>
                <p><strong>Objectif :</strong> Comprendre les tuples et savoir quand les utiliser à la place des listes.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Le concept :</strong>
                        <p>Un tuple ressemble à une liste, mais il est <strong>immuable</strong> : une fois créé, on ne peut plus le modifier. On le crée avec des parenthèses <code>()</code>.</p>
                        <pre className="code-block"><code>{`# Un tuple de coordonnées GPS
position = (48.8566, 2.3522)
print(position[0])  # Latitude : 48.8566
print(position[1])  # Longitude : 2.3522

# Tentative de modification → ERREUR !
# position[0] = 50.0  # TypeError !`}</code></pre>
                    </li>
                    <li><strong>Quand utiliser un tuple ?</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Quand les données ne doivent pas changer (coordonnées, jours de la semaine, couleurs RGB...)</li>
                            <li>Pour retourner plusieurs valeurs d'une fonction (on le verra à la Phase 4).</li>
                        </ul>
                    </li>
                    <li><strong>Le déballage (<em>unpacking</em>) :</strong>
                        <pre className="code-block"><code>{`# On peut "déballer" un tuple dans des variables
coordonnees = (48.8566, 2.3522)
latitude, longitude = coordonnees
print("Latitude :", latitude)
print("Longitude :", longitude)

# Très utile avec les dictionnaires
eleve = {"prenom": "Alice", "age": 17}
for cle, valeur in eleve.items():
    print(cle, "->", valeur)`}</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 4 : Les Fonctions - Organiser et Réutiliser son Code",
        description: (
            <>
                <p><strong>Objectif :</strong> Apprendre à créer des fonctions pour structurer son code et éviter les répétitions.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Le problème :</strong>
                        <p>Si on doit calculer une moyenne 10 fois dans un programme, on ne va pas copier-coller le même code 10 fois. On crée une <strong>fonction</strong> : un bloc de code nommé qu'on peut appeler quand on veut.</p>
                    </li>
                    <li><strong>Créer et appeler une fonction :</strong>
                        <pre className="code-block"><code>{`# Définir une fonction avec "def"
def saluer(prenom):
    print("Bonjour", prenom, "!")

# Appeler la fonction
saluer("Alice")    # Affiche "Bonjour Alice !"
saluer("Bob")      # Affiche "Bonjour Bob !"
saluer("Charlie")  # Affiche "Bonjour Charlie !"`}</code></pre>
                    </li>
                    <li><strong>Les fonctions qui retournent une valeur :</strong>
                        <pre className="code-block"><code>{`def calculer_moyenne(liste_notes):
    somme = 0
    for note in liste_notes:
        somme = somme + note
    moyenne = somme / len(liste_notes)
    return moyenne

# Utilisation
mes_notes = [12, 15, 9, 18, 14]
ma_moyenne = calculer_moyenne(mes_notes)
print("Ma moyenne est de", ma_moyenne)`}</code></pre>
                    </li>
                    <li><strong>Fonctions avec plusieurs paramètres et valeurs par défaut :</strong>
                        <pre className="code-block"><code>{`def presenter(prenom, nom, age=17):
    print("Je suis", prenom, nom, "et j'ai", age, "ans.")

presenter("Alice", "Dupont")        # age = 17 par défaut
presenter("Bob", "Martin", 18)      # age = 18`}</code></pre>
                    </li>
                    <li><strong>Retourner plusieurs valeurs (avec un tuple) :</strong>
                        <pre className="code-block"><code>{`def analyser_notes(notes):
    minimum = min(notes)
    maximum = max(notes)
    moyenne = sum(notes) / len(notes)
    return minimum, maximum, moyenne

mes_notes = [12, 15, 9, 18, 14]
note_min, note_max, note_moy = analyser_notes(mes_notes)
print("Min :", note_min, "| Max :", note_max, "| Moyenne :", note_moy)`}</code></pre>
                    </li>
                    <li><strong>À vous :</strong> Créez un programme "Gestionnaire de classe" avec les fonctions suivantes :
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li><code>ajouter_eleve(classe, prenom, moyenne)</code> : ajoute un dictionnaire élève à la liste classe</li>
                            <li><code>afficher_classe(classe)</code> : affiche tous les élèves</li>
                            <li><code>meilleur_eleve(classe)</code> : retourne le prénom de l'élève avec la meilleure moyenne</li>
                            <li><code>moyenne_classe(classe)</code> : calcule et retourne la moyenne générale de la classe</li>
                        </ul>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 5 : Projet Final - Le Carnet de Notes",
        description: (
            <>
                <p><strong>Objectif :</strong> Assembler tous les concepts du cours (listes, dictionnaires, fonctions, boucles, conditions) pour créer un programme complet.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Le cahier des charges :</strong>
                        <p>Créez un programme interactif "Carnet de Notes" qui propose un menu avec les options suivantes :</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li><strong>1. Ajouter un élève</strong> : demande le prénom et l'ajoute à la classe</li>
                            <li><strong>2. Ajouter une note</strong> : demande le prénom de l'élève et la note à ajouter</li>
                            <li><strong>3. Voir les résultats</strong> : affiche chaque élève avec sa liste de notes et sa moyenne</li>
                            <li><strong>4. Classement</strong> : affiche les élèves triés par moyenne décroissante</li>
                            <li><strong>5. Quitter</strong></li>
                        </ul>
                    </li>
                    <li><strong>Structure conseillée :</strong>
                        <pre className="code-block"><code>{`# Structure de données : liste de dictionnaires
classe = []

# Exemple d'un élève dans la liste :
# {"prenom": "Alice", "notes": [12, 15, 18]}

def ajouter_eleve(classe):
    prenom = input("Prénom de l'élève : ")
    classe.append({"prenom": prenom, "notes": []})
    print(prenom, "a été ajouté !")

def ajouter_note(classe):
    prenom = input("Prénom de l'élève : ")
    for eleve in classe:
        if eleve["prenom"].lower() == prenom.lower():
            note = float(input("Note à ajouter : "))
            eleve["notes"].append(note)
            print("Note ajoutée !")
            return
    print("Élève non trouvé.")

def calculer_moyenne(notes):
    if len(notes) == 0:
        return 0
    return sum(notes) / len(notes)

# Menu principal
while True:
    print("\\n--- Carnet de Notes ---")
    print("1. Ajouter un élève")
    print("2. Ajouter une note")
    print("3. Voir les résultats")
    print("4. Classement")
    print("5. Quitter")

    choix = input("Votre choix : ")

    if choix == "1":
        ajouter_eleve(classe)
    elif choix == "2":
        ajouter_note(classe)
    elif choix == "3":
        # À compléter !
        pass
    elif choix == "4":
        # À compléter !
        pass
    elif choix == "5":
        print("Au revoir !")
        break
    else:
        print("Choix invalide.")`}</code></pre>
                    </li>
                    <li><strong>Votre mission :</strong> Complétez les options 3 et 4 du menu. Pour le classement (option 4), vous pouvez trier la liste avec :
                        <pre className="code-block"><code>{`# Trier une liste de dictionnaires par une clé
classe_triee = sorted(classe, key=lambda e: calculer_moyenne(e["notes"]), reverse=True)`}</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "⭐ Bonus : La Manipulation de Fichiers",
        description: (
            <>
                <p>Pour aller plus loin, découvrez comment sauvegarder et charger des données dans un fichier texte.</p>
                <pre className="code-block"><code>{`# Écrire dans un fichier
with open("contacts.txt", "w") as fichier:
    fichier.write("Alice : 0601020304\\n")
    fichier.write("Bob : 0605060708\\n")

# Lire un fichier
with open("contacts.txt", "r") as fichier:
    contenu = fichier.read()
    print(contenu)`}</code></pre>
                <p><strong>Défi :</strong> Modifiez votre programme "Carnet de Notes" pour qu'il sauvegarde automatiquement les données dans un fichier à chaque modification, et les recharge au démarrage du programme.</p>
            </>
        )
    }
];

export const modulePythonCours2 = {
    course: (
        <>
            <h3>a. Les Structures de Données</h3>
            <p>Dans le Cours 1, nous avons vu les variables simples (un nombre, un texte). Mais dans un vrai programme, on manipule souvent des <strong>collections de données</strong> : une liste d'élèves, un catalogue de produits, un répertoire de contacts... Python offre plusieurs structures pour organiser ces données.</p>

            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Les Listes (<code>list</code>)</h4>
                    <p className="text-sm">Une collection ordonnée et modifiable d'éléments. On la crée avec des crochets <code>[]</code>.</p>
                    <pre className="code-block mt-2"><code>{`notes = [12, 15, 9, 18, 14]
notes.append(16)          # Ajouter à la fin
notes.remove(9)           # Supprimer un élément
print(notes[0])           # Premier élément : 12
print(len(notes))         # Taille : 5`}</code></pre>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Les Dictionnaires (<code>dict</code>)</h4>
                    <p className="text-sm">Une collection de paires <strong>clé : valeur</strong>. Comme un vrai dictionnaire : on cherche un mot (clé) pour trouver sa définition (valeur).</p>
                    <pre className="code-block mt-2"><code>{`eleve = {
    "prenom": "Alice",
    "age": 17,
    "classe": "1CIEL"
}
print(eleve["prenom"])    # Affiche "Alice"
eleve["age"] = 18         # Modifier une valeur`}</code></pre>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Les Tuples (<code>tuple</code>)</h4>
                    <p className="text-sm">Comme une liste, mais <strong>immuable</strong> (non modifiable). Idéal pour des données fixes comme des coordonnées.</p>
                    <pre className="code-block mt-2"><code>{`position = (48.8566, 2.3522)
print(position[0])        # 48.8566
# position[0] = 50.0     # ERREUR ! Un tuple ne se modifie pas.`}</code></pre>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Listes + Dictionnaires = Mini Base de Données</h4>
                    <p className="text-sm">En combinant listes et dictionnaires, on peut modéliser des données complexes.</p>
                    <pre className="code-block mt-2"><code>{`classe = [
    {"prenom": "Alice", "moyenne": 14.5},
    {"prenom": "Bob", "moyenne": 12.0},
    {"prenom": "Charlie", "moyenne": 16.0},
]
for eleve in classe:
    print(eleve["prenom"], ":", eleve["moyenne"])`}</code></pre>
                </div>
            </div>

            <h3>b. Les Fonctions</h3>
            <p>Une <strong>fonction</strong> est un bloc de code réutilisable qu'on nomme et qu'on peut appeler quand on en a besoin. C'est le moyen principal d'organiser son code et d'éviter les répétitions.</p>

            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Définir et appeler une fonction</h4>
                    <p className="text-sm">On utilise le mot-clé <code>def</code>, suivi du nom de la fonction et de ses paramètres entre parenthèses.</p>
                    <pre className="code-block mt-2"><code>{`def saluer(prenom):
    print("Bonjour", prenom, "!")

saluer("Alice")    # Affiche "Bonjour Alice !"
saluer("Bob")      # Affiche "Bonjour Bob !"`}</code></pre>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Retourner une valeur avec <code>return</code></h4>
                    <p className="text-sm">Une fonction peut renvoyer un résultat qu'on stocke dans une variable.</p>
                    <pre className="code-block mt-2"><code>{`def calculer_moyenne(notes):
    return sum(notes) / len(notes)

ma_moyenne = calculer_moyenne([12, 15, 18])
print("Moyenne :", ma_moyenne)  # 15.0`}</code></pre>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Paramètres par défaut</h4>
                    <p className="text-sm">On peut donner une valeur par défaut à un paramètre. Si l'utilisateur ne le fournit pas, la valeur par défaut est utilisée.</p>
                    <pre className="code-block mt-2"><code>{`def presenter(prenom, classe="1CIEL"):
    print("Je suis", prenom, "en", classe)

presenter("Alice")              # "Je suis Alice en 1CIEL"
presenter("Bob", "TCIEL")       # "Je suis Bob en TCIEL"`}</code></pre>
                </div>
            </div>

            <h3>c. Méthodes utiles à connaître</h3>
            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Méthodes sur les chaînes de caractères</h4>
                    <pre className="code-block mt-2"><code>{`texte = "Bonjour le Monde"
print(texte.upper())       # "BONJOUR LE MONDE"
print(texte.lower())       # "bonjour le monde"
print(texte.split(" "))    # ["Bonjour", "le", "Monde"]
print(texte.replace("Monde", "Python"))  # "Bonjour le Python"`}</code></pre>
                </div>
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Fonctions utiles sur les listes</h4>
                    <pre className="code-block mt-2"><code>{`notes = [12, 15, 9, 18, 14]
print(min(notes))          # 9
print(max(notes))          # 18
print(sum(notes))          # 68
print(sorted(notes))       # [9, 12, 14, 15, 18]`}</code></pre>
                </div>
            </div>
        </>
    ),
    tp: (
        <PracticalWork
            title={tpTitle}
            objective={tpObjective}
            materials={tpMaterials}
            steps={tpSteps}
        />
    )
};
