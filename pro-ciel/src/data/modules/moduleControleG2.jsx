import React from 'react';
import PracticalWork from '../../components/organisms/PraticalWork';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';

const tpTitle = 'Contrôle Python - Groupe 2 : CyberGuard';
const tpObjective = 'Évaluer votre maîtrise des bases de Python (variables, conditions, boucles, listes, dictionnaires, fonctions) en créant un outil de cybersécurité simplifié.';
const tpMaterials = [
    'Un navigateur web avec accès à online-python.com',
    'Les cours Python 1 et Python 2 (vos notes personnelles).',
    'Durée : 2 heures.',
];

const tpSteps = [
    {
        title: "Contexte : Le Projet CyberGuard",
        description: (
            <>
                <Card className="bg-blue-50 border-blue-200">
                    <p><strong>Mise en situation :</strong> Vous êtes un analyste cybersécurité junior dans l'entreprise <strong>CyberGuard Security</strong>. Votre responsable vous demande de créer un petit outil en ligne de commande pour analyser les tentatives de connexion au système de l'entreprise et détecter les activités suspectes.</p>
                    <p className="mt-2">L'outil doit permettre de :</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Gérer un journal (log) de tentatives de connexion</li>
                        <li>Analyser les tentatives pour détecter les comportements suspects</li>
                        <li>Générer un rapport de sécurité</li>
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
                <p>Commencez par créer la structure de données qui représente le journal de sécurité.</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>(2 pts) Créez une liste <code>journal</code></strong> contenant au moins 6 dictionnaires. Chaque dictionnaire représente une tentative de connexion avec les clés suivantes :
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li><code>"utilisateur"</code> : le nom d'utilisateur (ex: "alice", "admin", "root")</li>
                            <li><code>"ip"</code> : l'adresse IP de la tentative (ex: "192.168.1.15")</li>
                            <li><code>"resultat"</code> : "succes" ou "echec"</li>
                            <li><code>"heure"</code> : l'heure de la tentative (ex: "08:30", "23:45")</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-500">Conseil : Créez des données variées avec plusieurs échecs pour le même utilisateur et des connexions à des heures tardives.</p>
                    </li>
                    <li><strong>(1 pt) Créez un tuple <code>utilisateurs_sensibles</code></strong> contenant les noms d'utilisateurs à surveiller en priorité : <code>("admin", "root", "superuser")</code>.</li>
                    <li><strong>(2 pts) Affichez</strong> avec une boucle <code>for</code> chaque tentative sous la forme :
                        <pre className="code-block mt-2"><code>{`[08:30] alice (192.168.1.15) -> succes
[09:15] admin (10.0.0.5) -> echec
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
                <p>Créez les fonctions suivantes pour analyser les tentatives de connexion :</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>(2 pts) <code>compter_echecs(journal, nom_utilisateur)</code></strong>
                        <p>Cette fonction prend le journal et un nom d'utilisateur en paramètre. Elle doit <strong>retourner</strong> le nombre de tentatives échouées pour cet utilisateur.</p>
                        <pre className="code-block mt-2"><code>{`# Exemple d'utilisation attendu :
nb_echecs = compter_echecs(journal, "admin")
print("Échecs pour admin :", nb_echecs)  # ex: 3`}</code></pre>
                    </li>
                    <li><strong>(2 pts) <code>detecter_suspects(journal, seuil=3)</code></strong>
                        <p>Cette fonction analyse le journal et <strong>retourne une liste</strong> des noms d'utilisateurs qui ont eu un nombre d'échecs supérieur ou égal au <code>seuil</code> (3 par défaut). Chaque utilisateur ne doit apparaître qu'une seule fois dans la liste.</p>
                        <pre className="code-block mt-2"><code>{`# Exemple d'utilisation attendu :
suspects = detecter_suspects(journal)
print("Comptes suspects :", suspects)  # ex: ["admin", "root"]`}</code></pre>
                    </li>
                    <li><strong>(2 pts) <code>ajouter_tentative(journal, utilisateur, ip, resultat, heure)</code></strong>
                        <p>Cette fonction ajoute une nouvelle tentative au journal. Elle doit vérifier que le <code>resultat</code> est bien "succes" ou "echec". Si la valeur est invalide, la fonction affiche un message d'erreur et n'ajoute rien.</p>
                    </li>
                    <li><strong>(2 pts) <code>generer_rapport(journal, utilisateurs_sensibles)</code></strong>
                        <p>Cette fonction affiche un rapport de sécurité complet :</p>
                        <pre className="code-block mt-2"><code>{`# Exemple de sortie attendue :
# === RAPPORT CYBERGUARD ===
# Nombre total de tentatives : 6
# Tentatives réussies : 3
# Tentatives échouées : 3
# Comptes suspects (>= 3 échecs) : admin
#
# ⚠ Alertes sur comptes sensibles :
# - admin : 3 échec(s) détecté(s) !
# - root : 1 échec(s) détecté(s) !
# ============================`}</code></pre>
                    </li>
                </ol>
            </>
        )
    },
    {
        title: "Exercice 3 : Le Programme Principal (5 points)",
        description: (
            <>
                <p>Créez un menu interactif qui permet à l'utilisateur d'utiliser l'outil CyberGuard :</p>
                <ol className="list-[lower-alpha] ml-6 space-y-4">
                    <li><strong>(5 pts)</strong> Le menu doit proposer les options suivantes dans une boucle <code>while</code> :
                        <pre className="code-block mt-2"><code>{`# --- CyberGuard Security ---
# 1. Afficher le journal complet
# 2. Ajouter une tentative
# 3. Vérifier un utilisateur
# 4. Générer le rapport de sécurité
# 5. Quitter
# Votre choix :`}</code></pre>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li><strong>Option 1 :</strong> Affiche toutes les tentatives du journal (comme dans l'exercice 1).</li>
                            <li><strong>Option 2 :</strong> Demande l'utilisateur, l'IP, le résultat et l'heure, puis appelle <code>ajouter_tentative()</code>.</li>
                            <li><strong>Option 3 :</strong> Demande un nom d'utilisateur et affiche le nombre d'échecs. Si l'utilisateur est dans <code>utilisateurs_sensibles</code>, affiche une alerte supplémentaire.</li>
                            <li><strong>Option 4 :</strong> Appelle <code>generer_rapport()</code>.</li>
                            <li><strong>Option 5 :</strong> Affiche "Fermeture de CyberGuard..." et quitte le programme.</li>
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
                    <li><strong>(1 pt) Détection d'horaires suspects :</strong> Créez une fonction <code>connexions_nocturnes(journal)</code> qui retourne la liste des tentatives effectuées entre 22h00 et 06h00. Indice : comparez les heures sous forme de chaînes de caractères (<code>"22:00"</code> {'<='} heure ou heure {'<'} <code>"06:00"</code>).</li>
                    <li><strong>(1 pt) Blocage automatique :</strong> Ajoutez une option "6. Bloquer les suspects" au menu. Cette option utilise <code>detecter_suspects()</code> pour trouver les comptes suspects, puis ajoute une clé <code>"bloque": True</code> à chaque tentative future de ces utilisateurs.</li>
                </ol>
            </>
        )
    }
];

export const moduleControleG2 = {
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
