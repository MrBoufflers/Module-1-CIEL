import React from 'react';
import PracticalWork from '../../components/organisms/PraticalWork';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';

const tpTitle = 'Contrôle Python - Groupe 1 : NetWatch';
const tpObjective = 'Évaluer votre maîtrise des bases de Python (variables, conditions, boucles, listes, dictionnaires, fonctions) en créant un outil de surveillance réseau simplifié.';
const tpMaterials = [
    'Un navigateur web avec accès à online-python.com',
    'Les cours Python 1 et Python 2 (vos notes personnelles).',
    'Durée : 2 heures.',
];

const tpSteps = [
    {
        title: "Contexte : Le Projet NetWatch",
        description: (
            <>
                <Card className="bg-blue-50 border-blue-200">
                    <p><strong>Mise en situation :</strong> Vous êtes un technicien réseau junior dans l'entreprise <strong>NetWatch Solutions</strong>. Votre responsable vous demande de créer un petit outil en ligne de commande pour surveiller l'état des équipements du réseau de l'entreprise (serveurs, routeurs, switchs).</p>
                    <p className="mt-2">L'outil doit permettre de :</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Gérer un inventaire d'équipements réseau</li>
                        <li>Simuler une vérification de leur état (en ligne / hors ligne)</li>
                        <li>Générer un rapport de diagnostic</li>
                    </ul>
                </Card>
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
                    <p><strong>Barème :</strong></p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Exercice 1 (Les données) : <strong>5 points</strong></li>
                        <li>Exercice 2 (Les fonctions) : <strong>8 points</strong></li>
                        <li>Exercice 3 (Le programme principal) : <strong>5 points</strong></li>
                        <li>Bonus : <strong>2 points</strong></li>
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "Exercice 1 : Les Données (5 points)",
        description: (
            <>
                <p>Commencez par créer la structure de données qui représente le réseau de l'entreprise.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>(2 pts) Créez une liste <code>reseau</code></strong> contenant au moins 5 dictionnaires. Chaque dictionnaire représente un équipement avec les clés suivantes :
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li><code>"nom"</code> : le nom de l'équipement (ex: "Serveur-Web-01")</li>
                            <li><code>"type"</code> : le type d'équipement ("serveur", "routeur" ou "switch")</li>
                            <li><code>"ip"</code> : l'adresse IP (ex: "192.168.1.10")</li>
                            <li><code>"statut"</code> : "en ligne" ou "hors ligne"</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-500">Conseil : Variez les types et les statuts pour avoir des données intéressantes.</p>
                    </li>
                    <li><strong>(1 pt) Créez un tuple <code>types_equipements</code></strong> contenant les 3 types possibles : <code>("serveur", "routeur", "switch")</code>.</li>
                    <li><strong>(2 pts) Affichez</strong> avec une boucle <code>for</code> le nom et l'IP de chaque équipement du réseau, sous la forme :
                        <pre className="code-block mt-2"><code>{`[Serveur-Web-01] IP : 192.168.1.10
[Routeur-Principal] IP : 192.168.1.1
...`}</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Exercice 2 : Les Fonctions (8 points)",
        description: (
            <>
                <p>Créez les fonctions suivantes pour gérer le réseau :</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>(2 pts) <code>compter_par_type(reseau, type_recherche)</code></strong>
                        <p>Cette fonction prend la liste du réseau et un type d'équipement en paramètre. Elle doit <strong>retourner</strong> le nombre d'équipements de ce type.</p>
                        <pre className="code-block mt-2"><code>{`# Exemple d'utilisation attendu :
nb_serveurs = compter_par_type(reseau, "serveur")
print("Nombre de serveurs :", nb_serveurs)  # ex: 2`}</code></pre>
                    </li>
                    <li><strong>(2 pts) <code>equipements_hors_ligne(reseau)</code></strong>
                        <p>Cette fonction prend la liste du réseau en paramètre. Elle doit <strong>retourner une nouvelle liste</strong> contenant uniquement les noms des équipements dont le statut est "hors ligne".</p>
                        <pre className="code-block mt-2"><code>{`# Exemple d'utilisation attendu :
pannes = equipements_hors_ligne(reseau)
print("Équipements en panne :", pannes)  # ex: ["Switch-Etage2", "Serveur-BDD"]`}</code></pre>
                    </li>
                    <li><strong>(2 pts) <code>ajouter_equipement(reseau, nom, type_equip, ip)</code></strong>
                        <p>Cette fonction ajoute un nouvel équipement au réseau avec le statut "en ligne" par défaut. Elle doit vérifier que le <code>type_equip</code> est bien un type valide (présent dans le tuple <code>types_equipements</code>). Si le type est invalide, la fonction affiche un message d'erreur et n'ajoute rien.</p>
                    </li>
                    <li><strong>(2 pts) <code>generer_rapport(reseau)</code></strong>
                        <p>Cette fonction affiche un rapport complet du réseau :</p>
                        <pre className="code-block mt-2"><code>{`# Exemple de sortie attendue :
# === RAPPORT NETWATCH ===
# Nombre total d'équipements : 5
# - Serveurs : 2
# - Routeurs : 1
# - Switchs : 2
# Équipements en ligne : 3
# Équipements hors ligne : 2
# Liste des pannes : Switch-Etage2, Serveur-BDD
# =========================`}</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Exercice 3 : Le Programme Principal (5 points)",
        description: (
            <>
                <p>Créez un menu interactif qui permet à l'utilisateur d'utiliser l'outil NetWatch :</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>(5 pts)</strong> Le menu doit proposer les options suivantes dans une boucle <code>while</code> :
                        <pre className="code-block mt-2"><code>{`# --- NetWatch Solutions ---
# 1. Afficher tous les équipements
# 2. Ajouter un équipement
# 3. Générer le rapport
# 4. Quitter
# Votre choix :`}</code></pre>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li><strong>Option 1 :</strong> Affiche le nom, le type, l'IP et le statut de chaque équipement.</li>
                            <li><strong>Option 2 :</strong> Demande le nom, le type et l'IP à l'utilisateur, puis appelle <code>ajouter_equipement()</code>.</li>
                            <li><strong>Option 3 :</strong> Appelle <code>generer_rapport()</code>.</li>
                            <li><strong>Option 4 :</strong> Affiche "Déconnexion de NetWatch..." et quitte le programme.</li>
                        </ul>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "⭐ Bonus (2 points)",
        description: (
            <>
                <p>Pour les plus rapides :</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>(1 pt) Simulation de ping :</strong> Ajoutez une option "5. Simuler un ping" au menu. Cette option demande une adresse IP, et utilise <code>import random</code> pour simuler un temps de réponse aléatoire entre 1ms et 200ms. Si l'équipement est "hors ligne", afficher "Délai d'attente dépassé".</li>
                    <li><strong>(1 pt) Recherche :</strong> Ajoutez une option "6. Rechercher un équipement" qui demande un nom (ou une partie du nom) et affiche les équipements correspondants.</li>
                </ol>
            </>
        )
    }
];

export const moduleControleG1 = {
    course: (
        <>
            <h3>a. Rappel des notions évaluées</h3>
            <p>Ce contrôle évalue l'ensemble des compétences acquises durant les cours Python 1 et Python 2. Voici un récapitulatif des concepts que vous devez maîtriser :</p>

            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Variables et Types</h4>
                    <p className="text-sm">Déclarer des variables, utiliser les types <code>str</code>, <code>int</code>, <code>float</code>, <code>bool</code>, et convertir entre eux avec <code>int()</code>, <code>str()</code>, <code>float()</code>.</p>
                </div>
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Conditions</h4>
                    <p className="text-sm">Utiliser <code>if</code>, <code>elif</code>, <code>else</code> pour créer des branchements logiques. Maîtriser les opérateurs de comparaison (<code>==</code>, <code>!=</code>, <code>{'>'}</code>, <code>{'<'}</code>, <code>{'>='}</code>, <code>{'<='}</code>).</p>
                </div>
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Boucles</h4>
                    <p className="text-sm">Utiliser <code>while</code> pour répéter tant qu'une condition est vraie, et <code>for</code> pour parcourir des listes ou des <code>range()</code>.</p>
                </div>
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Structures de données</h4>
                    <p className="text-sm">Créer et manipuler des <strong>listes</strong> (<code>[]</code>), des <strong>dictionnaires</strong> (<code>{'{}'}</code>) et des <strong>tuples</strong> (<code>()</code>). Combiner listes et dictionnaires.</p>
                </div>
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold">Fonctions</h4>
                    <p className="text-sm">Définir des fonctions avec <code>def</code>, utiliser des paramètres, retourner des valeurs avec <code>return</code>.</p>
                </div>
            </div>

            <h3>b. Conseils pour l'évaluation</h3>
            <ul>
                <li><strong>Lisez tout l'énoncé</strong> avant de commencer à coder.</li>
                <li><strong>Testez régulièrement</strong> votre code au fur et à mesure.</li>
                <li><strong>Commentez</strong> votre code pour expliquer votre logique.</li>
                <li>En cas de blocage sur un exercice, passez au suivant et revenez-y après.</li>
            </ul>
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
