import React from 'react';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';
import PracticalWork from '../../components/organisms/PraticalWork';

// Molécule pour un défi logique
const ChallengeCard = ({ groupNumber, title, context, objective, example, hint }) => (
    <details className="p-6 bg-white border rounded-lg shadow-sm group transition-all duration-300 ease-in-out">
        <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
            <span>Groupe {groupNumber} : {title}</span>
            <span className="text-blue-600 group-open:rotate-90 transition-transform">▶</span>
        </summary>
        <div className="mt-4 pt-4 border-t">
            <h4 className="font-bold text-gray-700">Contexte :</h4>
            <p className="mt-1 mb-3 text-gray-600">{context}</p>
            <h4 className="font-bold text-gray-700">Objectif :</h4>
            <p className="mt-1 mb-3 text-gray-600">{objective}</p>
            <h4 className="font-bold text-gray-700">Exemple de résultat attendu :</h4>
            <pre className="code-block mt-1"><code>{example}</code></pre>
            {hint && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="font-semibold text-sm text-yellow-800">💡 Indice :</p>
                    <p className="text-sm text-yellow-700 mt-1">{hint}</p>
                </div>
            )}
        </div>
    </details>
);

const challengesData = [
    { groupNumber: 1, title: "Compteur de Voyelles", context: "Analyser du texte est une tâche courante. On veut savoir combien de voyelles contient une phrase.", objective: "Écrire une fonction qui prend une chaîne de caractères en entrée et retourne le nombre de voyelles (a, e, i, o, u, y) qu'elle contient, peu importe la casse.", example: "compterVoyelles('Bonjour le monde') // Doit retourner 5", hint: "Créez une chaîne avec toutes les voyelles (ex: 'aeiouy'). Parcourez la phrase lettre par lettre avec une boucle `for`. Pour chaque lettre, utilisez la méthode `.toLowerCase()` pour ignorer la casse, puis vérifiez si elle est présente dans votre chaîne de voyelles avec `.includes()`." },
    { groupNumber: 2, title: "Inverseur de Mots", context: "Manipuler des chaînes de caractères est fondamental. Ce défi consiste à inverser un mot.", objective: "Écrire une fonction qui prend une chaîne de caractères en entrée et retourne la même chaîne, mais écrite à l'envers.", example: "inverserMot('javascript') // Doit retourner 'tpircsavaj'", hint: "Une chaîne de caractères ne peut pas être inversée directement. La méthode standard est : 1. Transformer la chaîne en tableau avec `.split('')`. 2. Inverser ce tableau avec `.reverse()`. 3. Rassembler le tableau en une nouvelle chaîne avec `.join('')`." },
    { groupNumber: 3, title: "Calculateur de Factorielle", context: "La factorielle d'un nombre est le produit de tous les entiers de 1 jusqu'à ce nombre. C'est un excellent exercice pour maîtriser les boucles.", objective: "Écrire une fonction qui prend un nombre entier en entrée et retourne sa factorielle. (Factorielle de 5 = 5 * 4 * 3 * 2 * 1 = 120).", example: "factorielle(5) // Doit retourner 120", hint: "Initialisez une variable `resultat` à 1. Utilisez une boucle `for` qui commence à 1 et va jusqu'au nombre inclus. À chaque tour, multipliez `resultat` par le compteur de la boucle." },
    { groupNumber: 4, title: "Chercheur de Trésor", context: "Savoir chercher une valeur dans une liste est une compétence essentielle. Ici, le trésor est le plus grand nombre.", objective: "Écrire une fonction qui prend un tableau de nombres en entrée et retourne le plus grand nombre trouvé dans ce tableau.", example: "trouverMax([12, 5, 27, 8, 19]) // Doit retourner 27", hint: "Initialisez une variable `max` avec le premier élément du tableau (`tableau[0]`). Ensuite, parcourez le reste du tableau avec une boucle `for`. À l'intérieur de la boucle, si un élément est plus grand que `max`, mettez à jour la valeur de `max`." },
    { groupNumber: 5, title: "Le Filtre de Nombres", context: "Souvent, en traitant des données, on a besoin de ne garder que les valeurs qui nous intéressent. Ce défi consiste à nettoyer un tableau de nombres.", objective: "Écrire une fonction qui prend un tableau de nombres (contenant des nombres positifs, négatifs et zéro) en entrée et retourne un **nouveau** tableau contenant uniquement les nombres positifs (supérieurs ou égaux à 0).", example: "filtrerPositifs([-5, 3, 0, -1, 10, -8]) // Doit retourner [3, 0, 10]", hint: "Créez un tableau vide `resultats` avant votre boucle `for`. À chaque tour de la boucle, testez avec `if` si le nombre actuel est positif ou nul. Si c'est le cas, ajoutez-le au tableau `resultats` avec la méthode `.push()`." },
    { groupNumber: 6, title: "Vérificateur de Palindrome", context: "Un palindrome est un mot qui se lit de la même manière dans les deux sens (ex: 'radar', 'level'). C'est un défi de logique classique.", objective: "Écrire une fonction qui prend un mot en entrée et retourne `true` s'il s'agit d'un palindrome, et `false` sinon.", example: "estPalindrome('kayak') // Doit retourner true\nestPalindrome('bonjour') // Doit retourner false", hint: "Regardez l'indice du groupe 2 pour savoir comment inverser un mot. Une fois que vous avez le mot inversé, il ne vous reste plus qu'à le comparer (`===`) au mot original." },
    { groupNumber: 7, title: "Le Formatteur de Noms", context: "Dans de nombreuses applications, on reçoit des données brutes (ex: tout en minuscules) et on doit les formater correctement pour les afficher à l'utilisateur.", objective: "Écrire une fonction qui prend un tableau de noms (en minuscules) en entrée et retourne un **nouveau** tableau où chaque nom a sa première lettre en majuscule.", example: "formatterNoms(['alice', 'bob', 'charlie']) // Doit retourner ['Alice', 'Bob', 'Charlie']", hint: "Pour un nom donné (ex: 'alice'), vous pouvez isoler la première lettre avec `nom[0]` et la mettre en majuscule avec `.toUpperCase()`. Le reste du mot ('lice') peut être obtenu avec `nom.slice(1)`. Il suffit ensuite de concaténer les deux parties avec `+`. Pour appliquer cette logique à chaque nom du tableau, la méthode `.map()` est parfaite." }
];

const tpTitle = 'TP : Les Fondamentaux de JavaScript';
const tpObjective = 'Maîtriser les concepts de base du langage JavaScript (variables, conditions, boucles, fonctions) en résolvant des problèmes logiques dans un environnement contrôlé (la console), avant d\'interagir avec une page web.';
const tpMaterials = [
    'Un ordinateur avec VS Code.',
    'Un navigateur web pour afficher la console de développement (F12).',
];

const tpSteps = [
    {
        title: "Phase 1 : Les Fondamentaux - Entraînement Guidé (1h)",
        description: (
            <>
                <p>Dans cette partie, nous allons créer un seul fichier pour nous entraîner sur chaque concept vu en cours. L'objectif est de s'assurer que les bases sont solides.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li>
                        <strong>Préparation :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Créez un dossier `tp-js-bases`. Ouvrez-le avec VS Code.</li>
                            <li>Créez deux fichiers : `index.html` et `script.js`.</li>
                            <li>Dans `index.html`, générez le squelette de base. Juste avant la fin de la balise `{'</body>'}`, ajoutez : <code>{'<script src="script.js"></script>'}</code>. Cela lie votre fichier JavaScript à votre page.</li>
                            <li>Ouvrez `index.html` dans votre navigateur et ouvrez la console de développement (F12, onglet "Console"). C'est ici que nous verrons les résultats de notre code.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Exercice sur les Variables (`let`/`const`) :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans `script.js`, déclarez une constante `nom` avec votre nom.</li>
                            <li>Déclarez une variable `age` avec votre âge en utilisant `let`.</li>
                            <li>Affichez-les dans la console avec `console.log()`.</li>
                            <li>Essayez de changer la valeur de `age`. Affichez-la à nouveau.</li>
                            <li>Essayez de changer la valeur de `nom`. Que se passe-t-il dans la console ? Commentez la ligne qui provoque l'erreur.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Exercice sur les Conditions (`if`/`else if`/`else`) :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                             <li>Écrivez une structure conditionnelle qui teste la variable `age`.</li>
                             <li>Si l'âge est inférieur à 13, affichez "Accès interdit aux moins de 13 ans."</li>
                             <li>Sinon, si l'âge est inférieur à 18, affichez "Vous pouvez accéder à la section ado."</li>
                             <li>Sinon (pour tous les autres cas), affichez "Bienvenue dans l'espace adulte."</li>
                         </ul>
                    </li>
                     <li>
                        <strong>Exercice sur la Boucle `for` :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Écrivez une boucle `for` qui affiche la table de multiplication de 7 (de 7x1 à 7x10).</li>
                            <li>Le résultat dans la console doit être : "7 x 1 = 7", "7 x 2 = 14", etc.</li>
                         </ul>
                    </li>
                    <li>
                        <strong>Exercice sur les Fonctions :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Écrivez une fonction fléchée nommée `saluer` qui prend un paramètre `prenom`.</li>
                            <li>Cette fonction doit retourner la chaîne de caractères "Bonjour, [prenom] ! Comment vas-tu ?".</li>
                            <li>Appelez cette fonction avec votre prénom et affichez le résultat dans la console.</li>
                         </ul>
                    </li>
                    <li>
                        <strong>Premier Commit :</strong>
                        <p>Vous avez validé les bases. On sauvegarde !</p>
                        <pre className="code-block"><code>
git add . <br />
git commit -m "feat: Exercices sur les fondamentaux JS terminés"</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 2 : Les Défis Logiques (1h45)",
        description: (
            <>
                <p>Maintenant, place aux défis ! Chaque groupe se voit attribuer un des problèmes ci-dessous. Le but est de créer une fonction qui résout le problème. Vous travaillerez dans le même fichier `script.js`.</p>
                <div className="space-y-4 mt-6 not-prose">
                    {challengesData.map(challenge => (
                        <ChallengeCard key={challenge.groupNumber} {...challenge} />
                    ))}
                </div>
                <div className="mt-8">
                    <Heading level={4}>Commit Final</Heading>
                    <p>Une fois votre défi réussi et testé, faites un dernier commit.</p>
                    <pre className="code-block"><code>git add . <br />
git commit -m "feat: Défi logique du groupe X terminé"</code></pre>
                </div>
            </>
        )
    },
    {
        title: "⭐ Bonus (Pour les plus rapides)",
        description: (
            <>
            <p>Le défi "FizzBuzz" est un test d'entretien d'embauche classique pour les développeurs. Tentez de le résoudre !</p>
            <Card>
                <Heading level={4} className="!text-green-700">Défi : FizzBuzz</Heading>
                <p className="text-sm mt-2">Écrivez une boucle `for` qui compte de 1 à 100 et qui affiche :</p>
                <ul className="list-disc list-inside text-sm mt-2">
                    <li>"Fizz" pour les multiples de 3.</li>
                    <li>"Buzz" pour les multiples de 5.</li>
                    <li>"FizzBuzz" pour les multiples de 3 ET de 5.</li>
                    <li>Le nombre lui-même pour tous les autres cas.</li>
                </ul>
            </Card>
            </>
        )
    }
];

// Molécule pour un exemple de code JS
const CodeExample = ({ title, code, language = 'javascript' }) => (
    <div className="my-6">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <pre className={`mt-2 text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto`}><code className={`language-${language}`}>{code.trim()}</code></pre>
    </div>
);

export const moduleJSTcontent = {
  course: (
    <div className="space-y-12 prose max-w-none">
      
     <section>
        <Heading level={1} className="mb-4">JavaScript Moderne (ES6+)</Heading>
        <p className="text-xl text-gray-600">"Si le HTML est le squelette et le CSS l'habillage, le JavaScript est le système nerveux de votre page web. C'est le langage qui va la rendre vivante, interactive et intelligente. Aujourd'hui, nous allons apprendre à parler sa version la plus moderne et la plus puissante."</p>
      </section>

      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 1 : Les Fondamentaux - Variables et Types de Données</Heading>
        <p>Avant toute chose, il faut savoir comment stocker de l'information. En JavaScript moderne, on n'utilise plus `var`. On utilise `const` et `let`.</p>
        <Card className="bg-yellow-50 border-yellow-300">
            <p><strong>La règle d'or :</strong> On utilise <strong>`const`</strong> par défaut pour toute variable. On utilise <strong>`let`</strong> <em>uniquement</em> si on sait à l'avance que la valeur de cette variable devra changer.</p>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8 not-prose">
            <Card>
                <Heading level={3} className="!text-blue-700">`let` : La variable qui peut changer</Heading>
                <p className="mt-2 text-sm">Utilisez `let` pour déclarer une variable dont la valeur est destinée à être réassignée. C'est parfait pour un score qui évolue ou un compteur.</p>
                <CodeExample title="Exemple d'utilisation de `let`" code={`let score = 100;\nconsole.log(score); // Affiche 100\n\nscore = 150; // Valide : on peut changer la valeur\nconsole.log(score); // Affiche 150`} />
            </Card>
             <Card>
                <Heading level={3} className="!text-purple-700">`const` : La constante qui ne change pas</Heading>
                <p className="mt-2 text-sm">Utilisez `const` pour une valeur qui ne changera jamais. Si vous essayez de la modifier, JavaScript générera une erreur, ce qui protège votre code.</p>
                <CodeExample title="Exemple d'utilisation de `const`" code={`const nomJoueur = "Gandalf";\nconsole.log(nomJoueur); // Affiche "Gandalf"\n\n// La ligne suivante produira une erreur et arrêtera le script !\nnomJoueur = "Frodon";`} />
            </Card>
        </div>

        <Heading level={3} className="mt-8">Les Types de Données</Heading>
        <p>Chaque variable stocke une valeur d'un certain type. Voici les principaux :</p>
        <CodeExample title="Déclaration des types de données primitifs" code={
`// String (Chaîne de caractères)
const prenom = "Jean";

// Number (Nombre)
const age = 17;

// Boolean (Booléen)
const aLePermis = false;

// Array (Tableau) : une liste de valeurs
const competences = ["HTML", "CSS", "Bientôt JS"];

// Object (Objet) : une collection de paires clé/valeur
const projet = {
    nom: "Portfolio",
    dureeEnHeures: 20
};

// On peut vérifier le type avec l'opérateur typeof
console.log(typeof prenom);     // Affiche "string"
console.log(typeof age);        // Affiche "number"
console.log(typeof competences); // Affiche "object" (un Array est un type d'objet spécial)`
        } />
      </section>

       <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 2 : La Logique - Conditions et Boucles</Heading>
        <p>Un programme prend des décisions et répète des actions. C'est ce qui le rend puissant.</p>
        <Heading level={3}>Les Conditions (`if` / `else if` / `else`)</Heading>
        <p>Permet d'exécuter du code uniquement si une condition est vraie. On peut enchaîner plusieurs tests avec `else if`.</p>
        <CodeExample title="Exemple : Mention au bac" code={
`const moyenne = 15;

if (moyenne < 10) {
    console.log("A en-dessous de la moyenne");
} else {
    console.log("A au-dessus de la moyenne");
}

if (moyenne < 10) {
    console.log("Recalé");
} else if (moyenne < 12) {
    console.log("Mention Assez Bien");
} else if (moyenne < 16) {
    console.log("Mention Bien");
} else {
    console.log("Mention Très Bien");
}`
            } />
        <Heading level={3} className="mt-6">La Boucle `for` - Répéter un nombre de fois défini</Heading>
        <p>Idéale pour parcourir un tableau. Avant de voir la boucle, il faut comprendre une propriété essentielle des tableaux : <code>.length</code>. C'est une propriété qui donne simplement le **nombre d'éléments** dans un tableau.</p>
        <CodeExample title="Utilisation de .length" code={
`const notes = [12, 15, 9];
console.log(notes.length); // Affiche 3`
        } />
        <p>La boucle `for` est composée de trois parties, séparées par des points-virgules :</p>
        <CodeExample title="Anatomie de la boucle for" code={
`for (let i = 0; i < notes.length; i++) {
    console.log("Note n°" + (i + 1) + ": " + notes[i]);
}`
            } />
        <ul className="list-disc list-inside">
            <li><strong>Initialisation (<code>let i = 0</code>) :</strong> On crée une variable `i` (pour "index" ou "itération") qui servira de compteur. On la commence à 0, car les indices d'un tableau commencent toujours à 0.</li>
            <li><strong>Condition {"(i < notes.length)"} :</strong> La boucle continuera de tourner **tant que** cette condition est vraie. Ici, tant que `i` est strictement inférieur au nombre de notes.</li>
            <li><strong>Incrémentation (<code>i++</code>) :</strong> À la fin de chaque tour de boucle, on exécute cette instruction. `i++` est un raccourci pour `i = i + 1`. Cela permet de passer à l'élément suivant du tableau à chaque tour.</li>
        </ul>

        <Heading level={3} className="mt-6">La Boucle `while` - Répéter tant qu'une condition est vraie</Heading>
        <p>Utile quand on ne sait pas à l'avance combien de fois on doit répéter l'action.</p>
        <CodeExample title="Exemple : Un compte à rebours" code={
`let secondes = 5;

while (secondes > 0) {
    console.log(secondes);
    secondes = secondes - 1; // ou secondes--
}
console.log("Décollage !");`
            } />
      </section>

      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 3 : Les Fonctions - Organiser son Code</Heading>
        <p>Une fonction est un bloc de code réutilisable auquel on donne un nom. C'est la base de tout programme bien structuré. L'idée est simple : si vous devez faire la même chose plusieurs fois, ne copiez-collez pas votre code. Mettez-le dans une fonction, et appelez cette fonction quand vous en avez besoin.</p>
        
        <Heading level={3} className="mt-6">L'Anatomie d'une Fonction</Heading>
        <p>Une fonction classique a plusieurs parties :</p>
        <ul className="list-disc list-inside">
            <li>Le mot-clé <strong><code>function</code></strong> pour la déclarer.</li>
            <li>Un <strong>nom</strong> que vous lui donnez (ex: `calculerMoyenne`).</li>
            <li>Des <strong>paramètres</strong> entre parenthèses <code>(note1, note2)</code>. Ce sont des variables locales à la fonction, des "placeholders" pour les valeurs que vous lui donnerez quand vous l'appellerez. Ce sont les **entrées** de la fonction.</li>
            <li>Le <strong>corps de la fonction</strong> entre accolades <code>{'{...}'}</code>. C'est là que se trouve la logique, les instructions à exécuter.</li>
            <li>Le mot-clé <strong><code>return</code></strong>. Il spécifie la valeur que la fonction doit "renvoyer" une fois son travail terminé. C'est la **sortie** de la fonction.</li>
        </ul>

        <CodeExample title="Exemple : Une fonction qui calcule une moyenne" code={
`// 1. Définition de la fonction avec deux paramètres : note1 et note2
function calculerMoyenne(note1, note2) {
    const moyenne = (note1 + note2) / 2;
    return moyenne; // 2. La fonction renvoie le résultat du calcul
}

// 3. Utilisation (ou "appel") de la fonction
// La valeur 10 est passée au paramètre note1
// La valeur 14 est passée au paramètre note2
const moyenneDeBob = calculerMoyenne(10, 14); 

console.log("La moyenne de Bob est : " + moyenneDeBob); // Affiche "La moyenne de Bob est : 12"`
        } />
        
        <Heading level={3} className="mt-6">Les Fonctions Fléchées (ES6+)</Heading>
        <p>C'est une syntaxe plus courte et moderne pour écrire des fonctions. Elle est très utilisée dans le code actuel.</p>
        <CodeExample title="La même fonction, en version fléchée" code={
`const calculerMoyenne = (note1, note2) => {
    const moyenne = (note1 + note2) / 2;
    return moyenne;
};

// Raccourci ultime si la fonction ne fait qu'un return sur une seule ligne
const additionner = (a, b) => a + b;`
        } />
      </section>
      
        <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 4 : La Magie des Tableaux : `map` et `filter`</Heading>
        <p>Manipuler des listes de données est une tâche quotidienne. Au lieu d'utiliser des boucles `for` complexes, le JS moderne propose des méthodes de tableau bien plus élégantes et lisibles. Elles fonctionnent toutes sur le même principe : on leur donne une "fonction de rappel" (callback) qui s'exécutera sur chaque élément du tableau.</p>
        <CodeExample title="Notre tableau de données de base" code={`const eleves = [\n    { nom: 'Alice', moyenne: 15 },\n    { nom: 'Bob', moyenne: 9 },\n    { nom: 'Charlie', moyenne: 12 }\n];`} />
        
        <div className="mt-8">
            <Heading level={3}>`.map()` - Transformer chaque élément</Heading>
            <p>La méthode `.map()` parcourt un tableau, applique une fonction à **chaque élément**, et retourne un **nouveau tableau** contenant les résultats.</p>
            <Card className="bg-blue-50 border-blue-200">
                <p><strong>Point Clé :</strong> `.map()` retourne **toujours** un nouveau tableau qui a **exactement la même taille** que le tableau d'origine.</p>
            </Card>
            <CodeExample title="Objectif : Obtenir un tableau avec juste les noms des élèves" code={
`const nomsDesEleves = eleves.map((eleve) => {
    return eleve.nom;
});
// nomsDesEleves vaut maintenant ['Alice', 'Bob', 'Charlie']`
            } />
        </div>

        <div className="mt-8">
            <Heading level={3}>`.filter()` - Sélectionner des éléments</Heading>
            <p>La méthode `.filter()` parcourt un tableau, teste chaque élément avec une condition (une fonction qui retourne `true` ou `false`), et retourne un **nouveau tableau** contenant uniquement les éléments qui ont réussi le test.</p>
            <Card className="bg-purple-50 border-purple-200">
                <p><strong>Point Clé :</strong> `.filter()` retourne un nouveau tableau qui peut avoir une taille **inférieure ou égale** à celle du tableau d'origine, mais jamais supérieure.</p>
            </Card>
            <CodeExample title="Objectif : Obtenir un tableau avec seulement les élèves qui ont la moyenne" code={
`const bonsEleves = eleves.filter((eleve) => {
    return eleve.moyenne >= 10;
});
// bonsEleves contient maintenant les objets pour Alice et Charlie`
            } />
        </div>

        <div className="mt-8">
            <Heading level={3}>Exemple Pratique : Filtrer un Tableau</Heading>
            <p>Imaginons que nous ayons un tableau de nombres mélangés. Notre objectif est de créer un nouveau tableau qui ne contient que les nombres positifs (supérieurs ou égaux à 0).</p>
            <CodeExample title="Tableau de départ" code={`const nombres = [-10, 5, 0, -2, 8, -1];`} />
            
            <Heading level={4} className="mt-6">Solution 1 : Avec une boucle `for`</Heading>
            <p>C'est la méthode "classique". On crée un tableau vide, on parcourt le tableau de base, et si un nombre remplit notre condition, on l'ajoute au nouveau tableau.</p>
            <CodeExample title="Filtrage avec une boucle for" code={
`const nombresPositifs = []; // On prépare un tableau vide

for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i];
    if (nombre >= 0) { // Notre condition
        nombresPositifs.push(nombre); // On l'ajoute s'il est positif
    }
}

console.log(nombresPositifs); // Affiche [5, 0, 8]`
            } />

             <Heading level={4} className="mt-6">Solution 2 : Avec `.filter()`</Heading>
            <p>C'est la méthode moderne. On donne directement notre condition à `.filter()`, et il s'occupe de tout.</p>
             <CodeExample title="Filtrage avec .filter()" code={
`const nombresPositifs = nombres.filter((nombre) => {
    return nombre >= 0; // La condition est ici
});

console.log(nombresPositifs); // Affiche [5, 0, 8]`
            } />
            <Card className="bg-green-50 border-green-200">
                <p><strong>Conclusion :</strong> Les deux solutions donnent le même résultat, mais la version avec `.filter()` est plus concise, plus lisible et exprime plus clairement l'**intention** ("je veux filtrer ce tableau") que la version avec la boucle `for` ("je veux parcourir ce tableau et faire des choses dedans").</p>
            </Card>
        </div>
      </section>
    </div>
  ),
  tp: (
    <PracticalWork 
      title={tpTitle}
      objective={tpObjective}
      materials={tpMaterials}
      steps={tpSteps}
    />
  )
}

