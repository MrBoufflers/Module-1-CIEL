import React from 'react';
import PracticalWork from '../../components/organisms/PraticalWork';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';

const tpTitle = 'TP : Générateur de Rapports Réseau';
const tpObjective = 'Créer un outil Python qui génère un rapport sur le parc informatique des clients. L\'outil doit analyser une liste d\'équipements et produire des statistiques en utilisant les listes, dictionnaires et fonctions.';
const tpMaterials = [
    'Un éditeur Python en ligne (learnpython.org/fr/ ou programiz.com/python-programming/online-compiler/)',
    'Les connaissances du Cours 1 et du Cours 2 (structures de données et fonctions).',
];

const tpSteps = [
    {
        title: "Contexte professionnel",
        description: (
            <>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p>Le responsable technique de <strong>NetSecure</strong> (votre entreprise de services informatiques) vous demande de créer un outil Python qui génère un <strong>rapport sur le parc informatique</strong> des clients. L'outil doit analyser une liste d'équipements et produire des statistiques.</p>
                </div>
            </>
        )
    },
    {
        title: "Partie A — La base de données du parc (20 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Créez la structure de données suivante (liste de dictionnaires) représentant le parc informatique :</p>
                <pre className="code-block"><code>{`parc = [
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
]`}</code></pre>
                <p className="mt-3">Puis créez <strong>3 fonctions utilitaires</strong> :</p>
                <ol className="list-decimal ml-6 space-y-2">
                    <li><code>afficher_equipement(equip)</code> — Affiche joliment un équipement (une ligne formatée)</li>
                    <li><code>compter_par_etat(parc)</code> — Renvoie un dictionnaire {`{"actif": X, "maintenance": Y, "hors_service": Z}`}</li>
                    <li><code>filtrer_par_client(parc, nom_client)</code> — Renvoie la liste des équipements d'un client donné</li>
                </ol>
            </>
        )
    },
    {
        title: "Partie B — Les statistiques (25 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Créez les fonctions suivantes :</p>
                <ol className="list-decimal ml-6 space-y-3" start={4}>
                    <li><code>compter_par_type(parc)</code> — Renvoie un dictionnaire avec le nombre d'équipements par type (routeur: 2, switch: 2, etc.)</li>
                    <li><code>compter_par_marque(parc)</code> — Même chose mais par marque</li>
                    <li><code>equipements_critiques(parc)</code> — Renvoie la liste des équipements en "maintenance" ou "hors_service"</li>
                    <li><code>generer_rapport(parc)</code> — Fonction principale qui appelle toutes les autres et affiche un rapport formaté</li>
                </ol>
                <pre className="code-block mt-4"><code>{`# Exemple d'affichage attendu :
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
══════════════════════════════════════════`}</code></pre>
            </>
        )
    },
    {
        title: "Partie C — Menu interactif (20 min)",
        description: (
            <>
                <p><strong>Consigne :</strong> Ajoutez un menu interactif qui permet de :</p>
                <ol className="list-decimal ml-6 space-y-1">
                    <li>Afficher le rapport complet</li>
                    <li>Chercher un équipement par nom ou IP</li>
                    <li>Afficher les équipements d'un client</li>
                    <li>Afficher les équipements critiques uniquement</li>
                    <li>Ajouter un nouvel équipement</li>
                    <li>Quitter</li>
                </ol>
                <p className="mt-3">Pour le choix 5 (ajouter), le programme demande toutes les informations via <code>input()</code> et ajoute le dictionnaire à la liste.</p>
            </>
        )
    },
    {
        title: "Partie D — Bonus (pour les plus rapides)",
        description: (
            <>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p><strong>Améliorations possibles :</strong></p>
                    <ol className="list-decimal ml-6 space-y-2" start={8}>
                        <li><code>generer_mot_de_passe(longueur)</code> — Fonction qui génère un mot de passe sécurisé (modules <code>random</code> et <code>string</code>)</li>
                        <li>Ajoutez un outil 7 au menu : "Ping simulator" — l'utilisateur entre une IP, le programme attend entre 1 et 3 secondes (<code>random</code> + <code>time.sleep</code>) et affiche un résultat aléatoire de ping</li>
                        <li>Sauvegarde : Trouvez comment écrire le rapport dans un fichier texte (indice : <code>open("rapport.txt", "w")</code>)</li>
                    </ol>
                </div>
            </>
        )
    },
//     {
//         title: "Correction complète",
//         description: (
//             <>
//                 <p><strong>Code complet du Générateur de Rapports :</strong></p>
//                 <pre className="code-block"><code>{`from datetime import datetime

// # --- BASE DE DONNÉES ---
// parc = [
//     {"id": 1, "nom": "RTR-LYON-01", "type": "routeur", "marque": "Cisco", "ip": "192.168.1.1", "client": "TechnoLyon", "etat": "actif"},
//     {"id": 2, "nom": "SW-LYON-01", "type": "switch", "marque": "TP-Link", "ip": "192.168.1.2", "client": "TechnoLyon", "etat": "actif"},
//     {"id": 3, "nom": "AP-LYON-01", "type": "borne_wifi", "marque": "Ubiquiti", "ip": "192.168.1.10", "client": "TechnoLyon", "etat": "maintenance"},
//     {"id": 4, "nom": "FW-BIO-01", "type": "firewall", "marque": "Fortinet", "ip": "10.0.0.1", "client": "BioSanté", "etat": "actif"},
//     {"id": 5, "nom": "SRV-BIO-01", "type": "serveur", "marque": "Dell", "ip": "10.0.0.100", "client": "BioSanté", "etat": "actif"},
//     {"id": 6, "nom": "SRV-BIO-02", "type": "serveur", "marque": "HP", "ip": "10.0.0.101", "client": "BioSanté", "etat": "hors_service"},
//     {"id": 7, "nom": "SW-IND-01", "type": "switch", "marque": "Cisco", "ip": "172.16.0.2", "client": "IndusRhône", "etat": "actif"},
//     {"id": 8, "nom": "RTR-IND-01", "type": "routeur", "marque": "Cisco", "ip": "172.16.0.1", "client": "IndusRhône", "etat": "actif"},
//     {"id": 9, "nom": "AP-IND-01", "type": "borne_wifi", "marque": "Ubiquiti", "ip": "172.16.0.10", "client": "IndusRhône", "etat": "actif"},
//     {"id": 10, "nom": "FW-IND-01", "type": "firewall", "marque": "Fortinet", "ip": "172.16.0.254", "client": "IndusRhône", "etat": "maintenance"},
// ]

// # --- FONCTIONS UTILITAIRES ---

// def afficher_equipement(equip):
//     icones = {"actif": "✅", "maintenance": "🔧", "hors_service": "❌"}
//     icone = icones.get(equip["etat"], "❓")
//     print(f"  {icone} {equip['nom']} ({equip['type']}) — {equip['ip']} — {equip['client']} — {equip['etat']}")

// def compter_par_etat(parc):
//     compteur = {"actif": 0, "maintenance": 0, "hors_service": 0}
//     for equip in parc:
//         etat = equip["etat"]
//         if etat in compteur:
//             compteur[etat] += 1
//     return compteur

// def filtrer_par_client(parc, nom_client):
//     resultat = []
//     for equip in parc:
//         if equip["client"] == nom_client:
//             resultat.append(equip)
//     return resultat

// def compter_par_type(parc):
//     compteur = {}
//     for equip in parc:
//         t = equip["type"]
//         if t in compteur:
//             compteur[t] += 1
//         else:
//             compteur[t] = 1
//     return compteur

// def compter_par_marque(parc):
//     compteur = {}
//     for equip in parc:
//         m = equip["marque"]
//         if m in compteur:
//             compteur[m] += 1
//         else:
//             compteur[m] = 1
//     return compteur

// def equipements_critiques(parc):
//     critiques = []
//     for equip in parc:
//         if equip["etat"] in ["maintenance", "hors_service"]:
//             critiques.append(equip)
//     return critiques

// def obtenir_clients(parc):
//     clients = []
//     for equip in parc:
//         if equip["client"] not in clients:
//             clients.append(equip["client"])
//     return clients

// def generer_rapport(parc):
//     print("══════════════════════════════════════════")
//     print("   📊 RAPPORT PARC INFORMATIQUE NETSECURE")
//     print("══════════════════════════════════════════")
//     print(f"Date : {datetime.now().strftime('%d/%m/%Y %H:%M')}")

//     etats = compter_par_etat(parc)
//     print(f"\\n--- RÉSUMÉ GÉNÉRAL ---")
//     print(f"Total équipements : {len(parc)}")
//     print(f"  ✅ Actifs : {etats['actif']}")
//     print(f"  🔧 En maintenance : {etats['maintenance']}")
//     print(f"  ❌ Hors service : {etats['hors_service']}")

//     types = compter_par_type(parc)
//     print(f"\\n--- PAR TYPE ---")
//     for t, nb in types.items():
//         print(f"  {t} : {nb}")

//     marques = compter_par_marque(parc)
//     print(f"\\n--- PAR MARQUE ---")
//     for m, nb in marques.items():
//         print(f"  {m} : {nb}")

//     critiques = equipements_critiques(parc)
//     print(f"\\n--- ÉQUIPEMENTS CRITIQUES ({len(critiques)}) ---")
//     for equip in critiques:
//         afficher_equipement(equip)

//     clients = obtenir_clients(parc)
//     print(f"\\n--- PAR CLIENT ---")
//     for client in clients:
//         equips_client = filtrer_par_client(parc, client)
//         nb_actifs = sum(1 for e in equips_client if e["etat"] == "actif")
//         nb_autres = len(equips_client) - nb_actifs
//         print(f"[{client}] {len(equips_client)} équipements ({nb_actifs} actifs, {nb_autres} autres)")

//     print("══════════════════════════════════════════")

// # --- MENU INTERACTIF ---

// def chercher_equipement(parc, recherche):
//     resultats = []
//     for equip in parc:
//         if recherche.lower() in equip["nom"].lower() or recherche in equip["ip"]:
//             resultats.append(equip)
//     return resultats

// def ajouter_equipement(parc):
//     print("\\n--- AJOUTER UN ÉQUIPEMENT ---")
//     nouvel_id = max(e["id"] for e in parc) + 1
//     nom = input("Nom : ")
//     type_equip = input("Type (routeur/switch/borne_wifi/firewall/serveur) : ")
//     marque = input("Marque : ")
//     ip = input("Adresse IP : ")
//     client = input("Client : ")
//     etat = input("État (actif/maintenance/hors_service) : ")

//     nouveau = {
//         "id": nouvel_id, "nom": nom, "type": type_equip,
//         "marque": marque, "ip": ip, "client": client, "etat": etat
//     }
//     parc.append(nouveau)
//     print(f"✅ Équipement {nom} ajouté avec l'ID {nouvel_id}")

// # --- PROGRAMME PRINCIPAL ---
// print("══════════════════════════════════════")
// print("   🔧 GESTIONNAIRE DE PARC NETSECURE")
// print("══════════════════════════════════════")

// while True:
//     print("\\n--- MENU ---")
//     print("1. Rapport complet")
//     print("2. Chercher un équipement")
//     print("3. Équipements d'un client")
//     print("4. Équipements critiques")
//     print("5. Ajouter un équipement")
//     print("6. Quitter")

//     choix = input("\\nVotre choix : ")

//     if choix == "1":
//         generer_rapport(parc)
//     elif choix == "2":
//         recherche = input("Nom ou IP à chercher : ")
//         resultats = chercher_equipement(parc, recherche)
//         if resultats:
//             for equip in resultats:
//                 afficher_equipement(equip)
//         else:
//             print("Aucun résultat.")
//     elif choix == "3":
//         client = input("Nom du client : ")
//         equips = filtrer_par_client(parc, client)
//         if equips:
//             for equip in equips:
//                 afficher_equipement(equip)
//         else:
//             print("Client non trouvé.")
//     elif choix == "4":
//         critiques = equipements_critiques(parc)
//         for equip in critiques:
//             afficher_equipement(equip)
//     elif choix == "5":
//         ajouter_equipement(parc)
//     elif choix == "6":
//         print("Au revoir ! 👋")
//         break
//     else:
//         print("Choix invalide.")`}</code></pre>
//             </>
//         )
//     },
];

export const modulePythonCours2 = {
    course: (
        <>
            <h3>Organiser, structurer, réutiliser</h3>
            <p>Dans le cours précédent, vous avez appris à faire des scripts simples. Mais imaginez que vous devez stocker 50 adresses IP, ou répéter la même opération à 10 endroits différents dans votre code. <strong>Copier-coller, c'est la pire chose que vous puissiez faire en programmation.</strong> Aujourd'hui, on apprend les outils pour travailler comme des pros.</p>

            <h3>a. Les Listes</h3>

            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">JavaScript vs Python</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">JavaScript (Array) :</p>
                            <pre className="code-block"><code>{`let ports = [22, 80, 443];
ports.push(8080);
console.log(ports.length);  // 4
console.log(ports[0]);      // 22`}</code></pre>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Python (Liste) :</p>
                            <pre className="code-block"><code>{`ports = [22, 80, 443]
ports.append(8080)
print(len(ports))           # 4
print(ports[0])             # 22`}</code></pre>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Créer une liste</h4>
                    <pre className="code-block"><code>{`# Liste vide
ma_liste = []

# Liste avec des valeurs
ports_ouverts = [22, 80, 443, 8080]
noms_serveurs = ["web01", "db01", "mail01"]
mixte = ["texte", 42, True, 3.14]    # Python accepte les types mélangés`}</code></pre>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Opérations courantes sur les listes</h4>
                    <pre className="code-block"><code>{`ports = [22, 80, 443, 8080, 3306]

# --- Accéder aux éléments ---
print(ports[0])      # 22 (premier élément)
print(ports[-1])     # 3306 (dernier élément — spécifique Python !)
print(ports[1:3])    # [80, 443] (slice : index 1 à 2)

# --- Ajouter des éléments ---
ports.append(5432)        # Ajoute à la fin
ports.insert(0, 21)       # Insère à l'index 0

# --- Supprimer des éléments ---
ports.remove(80)          # Supprime la valeur 80
del ports[0]              # Supprime par index
dernier = ports.pop()     # Retire et renvoie le dernier

# --- Informations ---
print(len(ports))         # Nombre d'éléments
print(80 in ports)        # True ou False
print(ports.count(22))    # Combien de fois 22 apparaît

# --- Trier ---
ports.sort()              # Tri croissant
ports.sort(reverse=True)  # Tri décroissant`}</code></pre>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold mb-2">Mémo rapide JS → Python pour les listes</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm border">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-3 py-2 text-left">Action</th>
                                    <th className="border px-3 py-2 text-left">JavaScript</th>
                                    <th className="border px-3 py-2 text-left">Python</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border px-3 py-1">Ajouter à la fin</td><td className="border px-3 py-1"><code>arr.push(x)</code></td><td className="border px-3 py-1"><code>arr.append(x)</code></td></tr>
                                <tr><td className="border px-3 py-1">Supprimer par valeur</td><td className="border px-3 py-1">—</td><td className="border px-3 py-1"><code>arr.remove(x)</code></td></tr>
                                <tr><td className="border px-3 py-1">Supprimer par index</td><td className="border px-3 py-1"><code>arr.splice(i, 1)</code></td><td className="border px-3 py-1"><code>del arr[i]</code></td></tr>
                                <tr><td className="border px-3 py-1">Longueur</td><td className="border px-3 py-1"><code>arr.length</code></td><td className="border px-3 py-1"><code>len(arr)</code></td></tr>
                                <tr><td className="border px-3 py-1">Contient ?</td><td className="border px-3 py-1"><code>arr.includes(x)</code></td><td className="border px-3 py-1"><code>x in arr</code></td></tr>
                                <tr><td className="border px-3 py-1">Dernier élément</td><td className="border px-3 py-1"><code>arr[arr.length-1]</code></td><td className="border px-3 py-1"><code>arr[-1]</code></td></tr>
                                <tr><td className="border px-3 py-1">Slice</td><td className="border px-3 py-1"><code>arr.slice(1,3)</code></td><td className="border px-3 py-1"><code>arr[1:3]</code></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Parcourir une liste</h4>
                    <pre className="code-block"><code>{`# Boucle simple
serveurs = ["web01", "db01", "mail01"]
for serveur in serveurs:
    print(f"Vérification de {serveur}...")

# Avec l'index — enumerate() (n'existe pas nativement en JS)
for i, serveur in enumerate(serveurs):
    print(f"Serveur n°{i+1} : {serveur}")
# Affiche :
# Serveur n°1 : web01
# Serveur n°2 : db01
# Serveur n°3 : mail01`}</code></pre>
                </div>
            </div>

            <h3>b. Les Dictionnaires</h3>

            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">JavaScript vs Python</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">JavaScript (Object) :</p>
                            <pre className="code-block"><code>{`let serveur = {
    nom: "web01",
    ip: "192.168.1.10",
    port: 80,
    actif: true
};
console.log(serveur.nom);
console.log(serveur["ip"]);`}</code></pre>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Python (Dictionnaire) :</p>
                            <pre className="code-block"><code>{`serveur = {
    "nom": "web01",
    "ip": "192.168.1.10",
    "port": 80,
    "actif": True
}
print(serveur["nom"])
print(serveur.get("ip"))`}</code></pre>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold mb-2">Différences avec JS :</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Les clés <strong>DOIVENT</strong> être entre guillemets (en JS, c'est optionnel)</li>
                        <li>On accède avec des crochets <code>["clé"]</code> (pas de notation point <code>serveur.nom</code>)</li>
                        <li>La méthode <code>.get("clé")</code> est plus sûre car elle renvoie <code>None</code> au lieu de planter si la clé n'existe pas</li>
                    </ul>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Opérations sur les dictionnaires</h4>
                    <pre className="code-block"><code>{`equipement = {
    "type": "routeur",
    "marque": "Cisco",
    "modele": "ISR 1100",
    "ip": "192.168.1.1"
}

# Accéder à une valeur
print(equipement["marque"])          # "Cisco"
print(equipement.get("os", "N/A"))   # "N/A" (clé inexistante, valeur par défaut)

# Ajouter ou modifier
equipement["os"] = "IOS 15"          # Ajoute la clé "os"
equipement["ip"] = "10.0.0.1"        # Modifie la valeur de "ip"

# Supprimer une clé
del equipement["modele"]

# Vérifier si une clé existe
if "ip" in equipement:
    print(f"IP trouvée : {equipement['ip']}")`}</code></pre>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Parcourir un dictionnaire</h4>
                    <pre className="code-block"><code>{`equipement = {"type": "switch", "marque": "TP-Link", "ports": 8}

# Parcourir les clés
for cle in equipement:
    print(cle)

# Parcourir les valeurs
for valeur in equipement.values():
    print(valeur)

# Parcourir les clés ET les valeurs (le plus courant)
for cle, valeur in equipement.items():
    print(f"{cle} : {valeur}")`}</code></pre>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold mb-2">Liste de dictionnaires = Mini base de données</h4>
                    <pre className="code-block"><code>{`# C'est l'équivalent d'un tableau JSON — très courant
parc_info = [
    {"nom": "PC-01", "ip": "192.168.1.10", "os": "Windows 11", "etat": "actif"},
    {"nom": "PC-02", "ip": "192.168.1.11", "os": "Ubuntu 24", "etat": "actif"},
    {"nom": "SRV-01", "ip": "192.168.1.100", "os": "Debian 12", "etat": "maintenance"},
]

# Afficher toutes les machines actives
for machine in parc_info:
    if machine["etat"] == "actif":
        print(f"{machine['nom']} ({machine['ip']}) — {machine['os']}")`}</code></pre>
                </div>
            </div>

            <h3>c. Les Fonctions</h3>

            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">JavaScript vs Python</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">JavaScript :</p>
                            <pre className="code-block"><code>{`function saluer(nom) {
    return "Bonjour " + nom + " !";
}
console.log(saluer("Lucas"));`}</code></pre>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Python :</p>
                            <pre className="code-block"><code>{`def saluer(nom):
    return f"Bonjour {nom} !"

print(saluer("Lucas"))`}</code></pre>
                        </div>
                    </div>
                    <p className="text-sm mt-2"><code>function</code> → <code>def</code> | Pas d'accolades → indentation | Deux-points <code>:</code> après la définition</p>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Fonctions avec paramètres par défaut</h4>
                    <pre className="code-block"><code>{`def scanner_port(ip, port=80):
    print(f"Scan de {ip}:{port}...")

scanner_port("192.168.1.1")         # Utilise le port 80 par défaut
scanner_port("192.168.1.1", 443)    # Utilise le port 443`}</code></pre>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Fonctions qui retournent une valeur</h4>
                    <pre className="code-block"><code>{`def convertir_go_en_mo(go):
    return go * 1024

resultat = convertir_go_en_mo(4)
print(f"4 Go = {resultat} Mo")    # 4 Go = 4096 Mo`}</code></pre>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold mb-2">Retourner plusieurs valeurs (spécifique Python !)</h4>
                    <pre className="code-block"><code>{`# Python permet de retourner plusieurs valeurs — impossible en JS
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
# → Classe C, Privée : True`}</code></pre>
                </div>
            </div>

            <h3>d. Les Modules</h3>
            <p>Un module, c'est un fichier Python qui contient du code réutilisable (fonctions, constantes...). Python en fournit des centaines. En JS, c'est l'équivalent de <code>require()</code> ou <code>import</code>.</p>

            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Importer un module</h4>
                    <pre className="code-block"><code>{`# Import complet
import random
print(random.randint(1, 100))    # Nombre aléatoire entre 1 et 100

# Import spécifique (on importe juste ce qu'on veut)
from random import randint, choice
print(randint(1, 100))           # Plus besoin du préfixe random.

# Import avec alias
import datetime as dt
print(dt.datetime.now())         # Date et heure actuelles`}</code></pre>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Modules utiles pour CIEL</h4>
                    <pre className="code-block"><code>{`# --- random --- Génération aléatoire
import random
random.randint(1, 100)          # Entier aléatoire entre 1 et 100
random.choice(["a", "b", "c"])  # Choix aléatoire dans une liste
random.shuffle(ma_liste)        # Mélange la liste

# --- string --- Constantes de caractères
import string
print(string.ascii_lowercase)   # abcdefghijklmnopqrstuvwxyz
print(string.digits)            # 0123456789
print(string.punctuation)       # !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~

# --- time --- Gestion du temps
import time
print(time.time())              # Timestamp Unix
time.sleep(2)                   # Pause de 2 secondes

# --- os --- Interaction avec le système
import os
print(os.name)                  # 'posix' (Linux) ou 'nt' (Windows)
print(os.getcwd())              # Répertoire courant

# --- datetime --- Dates et heures
from datetime import datetime
maintenant = datetime.now()
print(maintenant.strftime("%d/%m/%Y %H:%M"))`}</code></pre>
                </div>
            </div>

            <h3>e. Méthodes utiles à connaître</h3>

            <div className="space-y-4 not-prose">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Méthodes sur les chaînes de caractères</h4>
                    <pre className="code-block"><code>{`texte = "Bonjour le Monde"
print(texte.upper())       # "BONJOUR LE MONDE"
print(texte.lower())       # "bonjour le monde"
print(texte.split(" "))    # ["Bonjour", "le", "Monde"]
print(texte.replace("Monde", "Python"))  # "Bonjour le Python"`}</code></pre>
                </div>
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Fonctions utiles sur les listes</h4>
                    <pre className="code-block"><code>{`notes = [12, 15, 9, 18, 14]
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
