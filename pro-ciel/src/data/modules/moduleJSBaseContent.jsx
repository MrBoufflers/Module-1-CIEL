import React from 'react';

import PracticalWork from '../../components/organisms/PraticalWork';


const tpTitle = 'TP : JavaScript - L\'exploration des Fondamentaux';
const tpObjective = 'Maîtriser les briques de base du langage JavaScript (variables, objets, tableaux, boucles, conditions) par l\'expérimentation directe dans la console du navigateur.';
const tpMaterials = [
    'Un ordinateur avec VS Code.',
    'Un navigateur web (Firefox ou Chrome) et savoir ouvrir la console (F12).',
];

const tpSteps = [
    {
        title: "Phase 1 : Préparation du Laboratoire",
        description: (
            <>
                <p>Avant de coder, nous devons mettre en place un environnement de travail minimal pour tester notre code et voir les résultats instantanément.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Création du projet :</strong> Créez un repository dans github `tp-js-fondamentaux`. Ouvrez-le avec un codespace.</li>
                    <li><strong>Création des fichiers :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Créez un fichier `index.html`.</li>
                            <li>Créez un fichier `script.js`.</li>
                        </ul>
                    </li>
                    <li><strong>Liaison des fichiers :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans `index.html`, tapez `!` et appuyez sur `Tab` pour générer la structure de base.</li>
                            <li>Juste avant la balise de fermeture <code>{'</body>'}</code>, ajoutez la ligne <code>{'<script src="script.js"></script>'}</code>.</li>
                        </ul>
                            <strong>Le "Pourquoi" :</strong> On place le script à la fin du body pour s'assurer que toute la page HTML est chargée avant que le JavaScript n'essaie de s'exécuter. C'est crucial pour le prochain TP où nous manipulerons le DOM.
                    </li>
                    <li><strong>Test du laboratoire :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans `script.js`, écrivez votre première ligne de code : <code>console.log("Laboratoire prêt !");</code></li>
                            <li>Installer l'extension "Live Server".</li>
                            <li>Cliquez droit sur `index.html` et sélectionnez "Open with Live Server". Ou cliquez sur le bouton "Go Live" en bas à droite de VS Code.</li>
                            <li>Ouvrez la console de développement (touche F12, puis allez dans l'onglet "Console"). Vous devez voir votre message "Laboratoire prêt !".</li>
                        </ul>
                    </li>
                    <li><strong>Initialisation de Git :</strong>
                        <p>Maintenant que l'environnement est prêt, on sauvegarde cette base.</p>
                        <pre className="code-block"><code>
git add . <br />
git commit -m "Initial commit: Environnement de test JS prêt" <br />
git push
</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 2 : Les Variables et Conditions",
        description: (
            <>
                <p><strong>Objectif :</strong> Comprendre comment stocker des informations simples et comment le code peut prendre des décisions.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Expérimentation `let` vs `const` :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Dans `script.js`, déclarez une constante `nom` avec votre nom et une variable `age` avec votre âge.
                                <pre className="code-block"><code>{`const nom = "Votre Nom";
let age = 17;`}</code></pre>
                            </li>
                            <li>Tentez de modifier votre nom : <code>nom = "Un autre nom";</code>. Sauvegardez et regardez la console.</li>
                            <li><strong>Analyse :</strong> Vous verrez une erreur rouge (`Assignment to constant variable`). C'est normal. `const` protège la variable contre la réaffectation. Mettez cette ligne d'erreur en commentaire (avec `//`).</li>
                            <li>Tentez de modifier votre âge : <code>age = 18;</code>. Affichez-le avec <code>console.log(age);</code>.</li>
                            <li><strong>Conclusion :</strong> `let` permet de changer la valeur, `const` ne le permet pas. On utilise `const` par défaut.</li>
                        </ul>
                    </li>
                    <li><strong>Expérimentation `if / else if / else` (sur des chaînes) :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                             <li>Écrivons un vérificateur de mot de passe simple.
                                <pre className="code-block"><code>{`const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "12345"; // Changez cette valeur pour tester`}</code></pre>
                             </li>
                             <li>Écrivez une structure conditionnelle qui teste `motDePasseUtilisateur` :
                                <pre className="code-block"><code>{`if ("Comparaison entre motDePasseUtilisateur et motDePasseAttendu") {
    console.log("Accès autorisé. Bienvenue !");
} else if ("Vérification de la longueur du mot de passe (< 8 caractères)") {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}`}</code></pre>
                             </li>
                             <li>Changez la valeur de `motDePasseUtilisateur` (ex: "secret123", "trop", "mauvaisMotDePasse") et vérifiez que le bon message s'affiche.</li>
                         </ul>
                    </li>
                    <li><strong>Commit :</strong>
                        <pre className="code-block"><code>git add . <br />
git commit -m "feat: Maîtrise des variables et conditions" <br />
git push</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 3 : L'Objet (L'étape la plus importante)",
        description: (
             <>
                <p><strong>Objectif :</strong> Comprendre ce qu'est un objet, pourquoi on l'utilise, et comment le manipuler.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Informations :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Si on veut stocker un utilisateur, on pourrait faire : `const nom = "Dupont"`, `const prenom = "Alice"`, `const age = 17`. C'est lourd et les variables ne sont pas regroupées.</li>
                            <li>Un <strong>Objet</strong> (défini avec `{ }`) est une "super-variable" qui contient d'autres variables. On l'utilise pour modéliser une entité du monde réel (un utilisateur, un produit) en regroupant ses propriétés en un seul endroit.</li>
                        </ul>
                    </li>
                    <li><strong>Expérimentation (Création et Lecture) :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                             <li>Créez un objet qui vous modélise. Les "clés" (ex: `prenom`) sont les noms des propriétés :
                                <pre className="code-block"><code>{`const moi = {
    prenom: "VotrePrénom",
    nom: "VotreNom",
    age: 18,
    competences: ["HTML", "CSS"]
};`}</code></pre>
                             </li>
                             <li>Affichez l'objet entier : <code>console.log(moi);</code>. (Dépliez-le dans la console pour l'explorer).</li>
                             <li>Pour lire une seule propriété, on utilise la notation "point" :
                                <pre className="code-block"><code>console.log(moi.prenom); // Affiche "VotrePrénom"</code></pre>
                             </li>
                             <li><strong>Mini-Défi 1 :</strong> Affichez la phrase "Je m'appelle [VotrePrénom] [VotreNom]." en utilisant les propriétés de l'objet.</li>
                         </ul>
                    </li>
                    <li><strong>Expérimentation (Modification) :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                             <li><strong>Le "Pourquoi" de `const` sur un objet :</strong> L'objet `moi` est une `const`, mais on peut quand même modifier son *contenu*. `const` protège la "boîte" (on ne peut pas la remplacer par une nouvelle boîte), mais pas ce qu'il y a dedans.</li>
                             <li>Modifiez votre âge : <code>moi.age = 19;</code></li>
                             <li>Ajoutez une nouvelle propriété qui n'existait pas : <code>moi.ville = "Paris";</code></li>
                             <li>Affichez l'objet `moi` entier pour voir les changements.</li>
                         </ul>
                    </li>
                     <li><strong>Commit :</strong>
                        <pre className="code-block"><code>git add . <br />
git commit -m "feat: Maîtrise des Objets JS" <br />
git push</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Phase 4 : Tableaux et Boucles",
        description: (
            <>
                <p><strong>Objectif :</strong> Comprendre comment stocker et parcourir une *liste* de données.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Informations :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Un <strong>Tableau</strong> (défini avec `[ ]`) est une boîte qui contient une *liste* de valeurs. On l'utilise quand on a plusieurs éléments du même type (une liste de notes, une liste d'élèves...).</li>
                        </ul>
                    </li>
                    <li><strong>Expérimentation (Tableaux Simples) :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                             <li>Créez un tableau de notes : `const notes = [12, 15, 9, 18];`</li>
                             <li><strong>Accès (Le "Pourquoi") :</strong> On accède aux éléments par leur indice (leur position), qui commence TOUJOURS à 0. Le premier élément est à l'indice 0.
                                <pre className="code-block"><code>console.log(notes[0]); // Affiche 12
console.log(notes[1]); // Affiche 15</code></pre>
                             </li>
                             <li>Pour connaître la taille (le nombre d'éléments), on utilise la propriété `.length` :
                                <pre className="code-block"><code>console.log(notes.length); // Affiche 4</code></pre>
                             </li>
                         </ul>
                    </li>
                    <li><strong>Expérimentation (Boucle `for`) :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Le Problème : On veut afficher toutes les notes. On pourrait faire 4 `console.log`, mais si on ajoute une note, il faut modifier le code. C'est là que la boucle intervient.</li>
                            <li><strong>Décomposition de <code>{`for (let i = 0; i < notes.length; i++)`}</code> :</strong>
                                <ul>
                                    <li><code>let i = 0;</code> : On crée un compteur `i` (pour "indice") qui commence à 0.</li>
                                    <li><code>i {'<'} notes.length;</code> : La boucle continue TANT QUE `i` est plus petit que la taille du tableau (donc jusqu'à 3).</li>
                                    <li><code>i++</code> : À la fin de chaque tour, on ajoute 1 à `i` (il vaudra 0, puis 1, puis 2, puis 3).</li>
                                </ul>
                            </li>
                             <li>Écrivez la boucle complète pour afficher chaque note :
                                <pre className="code-block"><code>{`for (let i = 0; i < notes.length; i++) {
    console.log("La note à l'indice " + i + " est " + notes[i]);
}`}</code></pre>
                             </li>
                         </ul>
                    </li>
                    <li><strong>Mini-Défi (Synthèse Objets + Tableaux + Boucles) :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Créez un tableau d'objets :
                                 <pre className="code-block"><code>{`const classe = [
    { prenom: 'Alice', age: 18 },
    { prenom: 'Bob', age: 17 }
];`}</code></pre>
                            </li>
                            <li>Écrivez une boucle `for` qui parcourt ce tableau.</li>
                            <li>À l'intérieur de la boucle, utilisez `if` pour n'afficher que le nom des élèves qui sont majeurs (âge {'>='} 18).</li>
                         </ul>
                    </li>
                    <li><strong>Commit :</strong>
                        <pre className="code-block"><code>git add . <br />
git commit -m "feat: Maîtrise des Tableaux et Boucles for" <br />
git push</code></pre>
                    </li>
                </ol>
            </>
        )
    },
 {
        title: "Phase 5 : Les Fonctions",
        description: (
            <>
                <p><strong>Objectif :</strong> Comprendre comment créer des blocs de code réutilisables pour éviter de se répéter.</p>
                 <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>Informations :</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Si on doit calculer une moyenne 10 fois, on ne va pas copier-coller 10 fois le même code. On crée une Fonction : un bloc de code qu'on nomme et qu'on peut "appeler" quand on en a besoin.</li>
                        </ul>
                    </li>
                    <li><strong>Expérimentation 1 : La fonction classique</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                             <li>Copiez et testez cette fonction "classique". Remarquez le mot-clé `function`, le nom (`saluer`), le paramètre (`prenom`) et le `return` qui renvoie une valeur.
                                <pre className="code-block"><code>{`function saluer(prenom) {
    const message = "Bonjour " + prenom;
    return message;
}

// On "appelle" la fonction
const salutationPourAlice = saluer("Alice");
console.log(salutationPourAlice); // Affiche "Bonjour Alice"`}</code></pre>
                             </li>
                         </ul>
                    </li>
                    <li><strong>Expérimentation 2 : La fonction fléchée (étape par étape)</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                             <li>La syntaxe <code>{'=>'}</code> est intimidante, mais c'est juste un raccourci. Voyons la transformation :</li>
                             <li>Étape A (Classique) : <code>function addition(a, b) {`{ return a + b; }`}</code></li>
                             <li>Étape B (Stockée dans une const) : <code>const addition = function(a, b) {`{ return a + b; }`};</code></li>
                             <li>Étape C (Fléchée) : On enlève `function` et on ajoute `=>` après les parenthèses.
                                <pre className="code-block"><code>const addition = (a, b) => {`{ return a + b; }`};</code></pre>
                             </li>
                              <li><strong>Étape D (Raccourci magique) :</strong> Si la fonction ne fait *que* `return` une seule ligne, on peut enlever les accolades `{}` ET le mot `return`.
                                <pre className="code-block"><code>const addition = (a, b) => a + b;</code></pre>
                             </li>
                             <li>Analyse : Les deux syntaxes (C et D) sont identiques ! La D est juste plus courte. Testez-la : <code>console.log( addition(10, 5) );</code> (Doit afficher 15).</li>
                         </ul>
                    </li>
                     <li><strong>Mini-Défi :</strong>
                         <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Transformez cette fonction classique en fonction fléchée (la version la plus courte possible) :
                                 <pre className="code-block"><code>{`function estMajeur(age) {
    return age >= 18;
}`}</code></pre>
                            </li>
                         </ul>
                    </li>
                    <li><strong>Commit :</strong>
                        <pre className="code-block"><code>git add . <br />
git commit -m "feat: Maîtrise des fonctions classiques et fléchées" <br />
git push
</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "⭐ Bonus",
        description: (
            <p>Maintenant que vous savez tout faire, créez une fonction `calculerMoyenne(tableauDeNotes)` qui prend un tableau (comme `notes`) en paramètre. À l'intérieur de cette fonction, utilisez une boucle `for` pour calculer la somme de toutes les notes, puis `return` la moyenne (somme / nombre de notes).</p>
        )
    }
];

export default function JavascriptTP2() {
  return (
    <PracticalWork 
      title={tpTitle}
      objective={tpObjective}
      materials={tpMaterials}
      steps={tpSteps}
    />
  );
}

