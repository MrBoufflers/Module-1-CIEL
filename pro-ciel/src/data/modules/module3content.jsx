import { WebStackDiagramComponent } from "../../components/organisms/WebStackDiagramComponent";
import { TP3FormComponent } from "../../components/organisms/TP3FormComponent";
import React from 'react';
import Heading from '../../components/atoms/Heading.jsx';
import Card from '../../components/atoms/Card.jsx';
import UserStoryCard from "../../components/molecules/UserStory.jsx";
import CaseStudy from "../../components/molecules/CaseStudy.jsx"

const caseStudiesData = [
    {
        groupNumber: 1,
        client: "L'association Sportive du Quartier",
        context: "L'association gère ses inscriptions et le planning des matchs via des fichiers Excel échangés par email. C'est un cauchemar à maintenir à jour et les erreurs sont fréquentes.",
        need: "Nous voulons un site web simple où les adhérents peuvent consulter le planning des prochains matchs, voir les résultats, et où les coachs peuvent marquer un match comme 'joué' et entrer le score.",
        constraints: ["Le budget est très limité.", "Le site doit être facile à utiliser pour des personnes peu à l'aise avec l'informatique."]
    },
    {
        groupNumber: 2,
        client: "Le Food Truck 'Le Camion Gourmand'",
        context: "Le food truck change d'emplacement chaque jour. Les clients ont du mal à savoir où le trouver et quel est le 'plat du jour'.",
        need: "J'ai besoin d'une application mobile très simple (ou un site mobile) qui permettrait de mettre à jour mon emplacement du jour sur une carte et d'afficher le menu. Une fonction 'notifications push' pour annoncer l'arrivée serait un plus.",
        constraints: ["La mise à jour doit pouvoir se faire en moins d'une minute depuis mon téléphone."]
    },
    {
        groupNumber: 3,
        client: "Le FabLab du Lycée",
        context: "Le FabLab dispose d'une imprimante 3D et d'une découpeuse laser très demandées. La gestion des réservations se fait sur un cahier papier, ce qui crée des conflits.",
        need: "Nous aimerions un système de réservation en ligne. Les élèves pourraient se connecter avec leur compte du lycée, voir les créneaux disponibles pour chaque machine et réserver une plage horaire.",
        constraints: ["Le système doit pouvoir empêcher une double réservation sur le même créneau.", "Seuls les professeurs peuvent valider ou annuler une réservation."]
    },
    {
        groupNumber: 4,
        client: "L'Artisan Chocolatier 'Cacao Fictif'",
        context: "L'artisan vend ses chocolats uniquement en boutique. De nombreux touristes lui demandent s'il peut expédier ses produits, mais il n'a aucune solution pour gérer des commandes à distance.",
        need: "Je souhaite un petit site e-commerce pour vendre une dizaine de mes produits phares en ligne, avec un paiement sécurisé par carte bancaire et une gestion simple des commandes (à préparer, expédiée).",
        constraints: ["Le design doit être sobre et élégant.", "Le paiement doit être géré par une solution externe fiable (type Stripe ou PayPal)."]
    },
    {
        groupNumber: 5,
        client: "La Serre Connectée du Club de Jardinage",
        context: "Les membres du club oublient souvent d'arroser les plantes dans la serre du lycée, surtout pendant les week-ends, ce qui met en péril les cultures.",
        need: "Nous voulons un système automatisé basé sur un microcontrôleur (type Raspberry Pi) qui mesure l'humidité de la terre. Si la terre est trop sèche, le système doit automatiquement activer une petite pompe à eau pendant 30 secondes.",
        constraints: ["Le système doit être autonome.", "Une petite interface web pour visualiser le taux d'humidité en temps réel serait un bonus."]
    },
    {
        groupNumber: 6,
        client: "Le Cabinet d'Infirmières Libérales",
        context: "Trois infirmières partagent un petit cabinet. Elles ont un seul réseau Wi-Fi pour leurs ordinateurs portables, leurs téléphones et la télé dans la salle d'attente. La connexion est lente et peu sécurisée.",
        need: "Nous avons besoin d'une refonte de notre petite infrastructure réseau. Nous voulons un réseau Wi-Fi sécurisé pour notre usage professionnel (ordinateurs) et un réseau Wi-Fi 'invité' complètement séparé et limité pour les patients dans la salle d'attente.",
        constraints: ["La solution doit utiliser du matériel abordable (un seul routeur si possible).", "Le réseau invité ne doit pas permettre l'accès aux ordinateurs du cabinet."]
    },
    {
        groupNumber: 7,
        client: "Le Service Informatique Interne",
        context: "Les professeurs signalent les problèmes informatiques (vidéoprojecteur en panne, ordinateur lent...) par email ou oralement. Il n'y a aucun suivi, et les demandes se perdent.",
        need: "Il nous faut un logiciel de 'ticketing' très simple. Un professeur pourrait se connecter, créer un 'ticket' en décrivant son problème et en indiquant sa salle. Le technicien pourrait voir la liste des tickets, changer leur statut ('Nouveau', 'En cours', 'Résolu') et ajouter un commentaire.",
        constraints: ["L'application doit être hébergée en interne sur un serveur de l'établissement.", "L'interface doit être extrêmement simple pour ne pas décourager les professeurs."]
    }
];

export const module3Content = {
    course: (
        <>
            <h3>a. Application lourde vs Site web</h3>
            <div className="not-prose grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border rounded-lg shadow-sm"><h4 className="font-bold">Application lourde (Logiciel)</h4><p className="text-sm mt-2">Installée sur votre PC (ex: Word, Photoshop). Elle est souvent plus performante et peut fonctionner hors-ligne, mais nécessite une installation et des mises à jour manuelles.</p></div>
                <div className="p-4 bg-white border rounded-lg shadow-sm"><h4 className="font-bold">Application Web (Site)</h4><p className="text-sm mt-2">Accessible via un navigateur (ex: Gmail, Netflix). Pas d'installation, accessible partout, mises à jour transparentes, mais requiert une connexion internet.</p></div>
            </div>
            <h3>b. Le web : Les protocoles de communication</h3>
            <p>Pour que les ordinateurs puissent communiquer sur un réseau, ils doivent parler le même langage et suivre les mêmes règles. C'est ce qu'on appelle un <strong>protocole</strong>.</p>
            <ul>
                <li><strong>TCP/IP :</strong> La base d'Internet. C'est un ensemble de protocoles qui assure que les données envoyées d'un point A arrivent à un point B, sans erreur.</li>
                <li><strong>HTTP/HTTPS :</strong> Le protocole du Web. Il permet à votre navigateur de demander des pages web à un serveur et de les recevoir. Le 'S' de HTTPS signifie "Sécurisé" (les données sont chiffrées).</li>
                <li><strong>FTP :</strong> Le protocole pour transférer des fichiers.</li>
                <li><strong>SMTP, POP, IMAP :</strong> Les protocoles pour les emails.</li>
            </ul>
            <h3>c. Le protocole HTTP et les API en détail</h3>
            <p>Une requête HTTP est comme une commande au restaurant. Elle contient des "verbes" (méthodes) qui indiquent ce que vous voulez faire :</p>
            <ul className="list-none space-y-2">
                <li><strong className="text-green-600">GET :</strong> "Donnez-moi la page d'accueil." (Récupérer des données)</li>
                <li><strong className="text-blue-600">POST :</strong> "Voici mes informations pour créer un compte." (Envoyer de nouvelles données)</li>
                <li><strong className="text-yellow-600">PUT / PATCH :</strong> "Je veux modifier mon profil." (Mettre à jour des données existantes)</li>
                <li><strong className="text-red-600">DELETE :</strong> "Je veux supprimer mon commentaire." (Supprimer des données)</li>
            </ul>
            <p>Une <strong>API (Application Programming Interface)</strong> est une "carte" qui expose ces actions au monde extérieur. Elle définit des URLs spécifiques (des "endpoints") où d'autres applications peuvent envoyer des requêtes GET, POST, etc., pour interagir avec les données du serveur de manière contrôlée.</p>
            <h3>d. Les langages et technologies du Web</h3>
            <p>Voici un schéma interactif montrant où chaque technologie intervient.</p>
            <WebStackDiagramComponent />
            <h3>e. Les Frameworks : Accélérer le développement</h3>
            <p>Un framework, c'est une "boîte à outils" et un "plan de construction" pour un développeur. Au lieu de tout construire à partir de zéro, un framework fournit des composants prêts à l'emploi et une structure organisée, ce qui permet d'aller beaucoup plus vite et d'éviter les erreurs courantes.</p>
            <div className="not-prose p-6 bg-white border rounded-lg shadow-sm">
                <div className="grid grid-cols-2 gap-8 text-center">
                    <div><h4 className="font-bold mb-2">Frameworks Front-End</h4><div className="relative p-4 border-2 border-blue-300 rounded-lg bg-blue-50 h-24 flex items-center justify-center"><div className="font-semibold text-blue-800">React / Angular / Vue</div></div><div className="text-2xl my-2">↑</div><div className="inline-block p-2 border-2 border-gray-400 rounded-lg bg-gray-100">JavaScript</div><p className="text-sm mt-4">Boîtes à outils pour construire l'interface utilisateur.</p></div>
                    <div><h4 className="font-bold mb-2">Frameworks Back-End</h4><div className="relative p-4 border-2 border-green-300 rounded-lg bg-green-50 h-24 flex items-center justify-center"><div className="font-semibold text-green-800">Symfony / Django / Express</div></div><div className="text-2xl my-2">↑</div><div className="inline-block p-2 border-2 border-gray-400 rounded-lg bg-gray-100">PHP / Python / Node.js</div><p className="text-sm mt-4">Boîtes à outils pour construire la logique serveur.</p></div>
                </div>
            </div>
            <div className="space-y-12 prose max-w-none">
      
      {/* Introduction */}
      <section>
        <Heading level={1} className="mb-4">Rédiger un Cahier des Charges Efficace</Heading>
        <p className="text-xl text-gray-600">"Imaginez que vous voulez construire une maison. Vous n'allez pas voir le maçon en lui disant 'je veux une maison'. Vous lui donnez un plan détaillé. Le cahier des charges, c'est exactement ça : le plan de construction de votre projet informatique."</p>
      </section>

      {/* Partie 1: Définition et Importance */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 1 : Qu'est-ce qu'un Cahier des Charges (CdC) ?</Heading>
        <p>Le cahier des charges est un **document contractuel** qui formalise le besoin d'un client et décrit en détail la solution attendue. C'est le document de référence pour toutes les parties prenantes (le client, le chef de projet, les développeurs, les testeurs).</p>
        <Card className="bg-yellow-50 border-yellow-300">
            <Heading level={4} className="!text-yellow-800">Pourquoi est-il indispensable ?</Heading>
            <ul className="list-disc list-inside mt-2">
                <li><strong>Pour Cadrer le Projet :</strong> Il définit précisément ce qui doit être fait, et ce qui n'en fait pas partie. Fini les "ah, et on pourrait ajouter ça ?".</li>
                <li><strong>Pour Éviter les Malentendus :</strong> Tout est écrit noir sur blanc, ce qui protège à la fois le client et l'équipe technique.</li>
                <li><strong>Pour Estimer le Travail :</strong> Sans un cahier des charges, il est impossible d'estimer le coût et le temps nécessaires à la réalisation.</li>
                <li><strong>Pour Guider le Développement :</strong> C'est la feuille de route des développeurs.</li>
            </ul>
        </Card>
      </section>
      
      {/* Partie 2: Spécifications Fonctionnelles vs Techniques */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 2 : Spécifications Fonctionnelles vs. Techniques</Heading>
        <p>C'est la distinction la plus importante à maîtriser. Elles ne répondent pas à la même question.</p>
        <div className="grid md:grid-cols-2 gap-8 mt-4 not-prose">
            <Card>
                <Heading level={3} className="!text-blue-700">Spécifications Fonctionnelles</Heading>
                <p className="mt-2 text-2xl font-bold">Le "QUOI ?"</p>
                <p className="mt-2">Elles décrivent **ce que le système doit faire**, ses fonctionnalités, vues du côté de l'utilisateur. Elles doivent être compréhensibles par un non-technicien (le client).</p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="font-semibold">Analogie de la voiture :</p>
                    <ul className="list-disc list-inside text-sm mt-2">
                        <li>"La voiture doit pouvoir freiner."</li>
                        <li>"Les phares doivent pouvoir s'allumer."</li>
                        <li>"Il doit y avoir un autoradio."</li>
                    </ul>
                </div>
            </Card>
             <Card>
                <Heading level={3} className="!text-green-700">Spécifications Techniques</Heading>
                <p className="mt-2 text-2xl font-bold">Le "COMMENT ?"</p>
                <p className="mt-2">Elles décrivent **comment les fonctionnalités seront réalisées**. C'est la traduction technique pour les développeurs. Elles sont incompréhensibles pour le client.</p>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="font-semibold">Analogie de la voiture :</p>
                    <ul className="list-disc list-inside text-sm mt-2">
                        <li>"Le freinage sera assuré par un système ABS à disques ventilés."</li>
                        <li>"Les phares utiliseront la technologie LED."</li>
                        <li>"L'autoradio sera un modèle Pioneer avec écran tactile et Bluetooth 5.0."</li>
                    </ul>
                </div>
            </Card>
        </div>
      </section>

      {/* Partie 3: Rédiger les Spécifications Fonctionnelles */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 3 : Comment Rédiger les Spécifications Fonctionnelles ?</Heading>
        <p>La méthode la plus populaire et la plus efficace pour rédiger des spécifications fonctionnelles est l'utilisation des **User Stories** (Histoires d'Utilisateur). C'est une manière simple de décrire une fonctionnalité du point de vue de la personne qui va l'utiliser.</p>
        <Heading level={3}>La structure d'une User Story</Heading>
        <UserStoryCard 
            role="[Type d'utilisateur]"
            action="[Faire une action]"
            benefit="[Obtenir un bénéfice]"
        />
        <p>Cette structure force à réfléchir à trois questions essentielles : **Qui ? Quoi ? Pourquoi ?**</p>
        <Heading level={4}>Exemple pour un site de blog</Heading>
        <UserStoryCard 
            role="Visiteur"
            action="lire les articles sans avoir à me connecter"
            benefit="accéder rapidement à l'information"
        />
        <UserStoryCard 
            role="Auteur"
            action="créer, modifier et supprimer mes propres articles via une interface d'administration"
            benefit="gérer mon contenu facilement"
        />
        <UserStoryCard 
            role="Administrateur"
            action="valider les articles des auteurs avant leur publication"
            benefit="garder le contrôle sur la qualité du contenu"
        />
      </section>

      {/* Partie 4: La Structure d'un Cahier des Charges Complet */}
      <section>
        <Heading level={2} className="border-b pb-2 mb-4">Partie 4 : La Structure Type d'un Cahier des Charges</Heading>
        <p>Un document professionnel suit une structure claire pour être facilement lisible.</p>
        <div className="not-prose overflow-x-auto mt-4">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3 w-1/4">Section</th>
                        <th scope="col" className="px-6 py-3">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">1. Introduction & Contexte</th>
                        <td className="px-6 py-4">Présentation du client, de son activité, du problème à résoudre et des objectifs du projet.</td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">2. Spécifications Fonctionnelles</th>
                        <td className="px-6 py-4">La liste de toutes les fonctionnalités attendues, idéalement sous forme de User Stories. C'est la partie la plus importante pour le client.</td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">3. Spécifications Techniques</th>
                        <td className="px-6 py-4">Le "Comment". Choix des langages (ex: PHP, JavaScript), des frameworks (ex: React, Symfony), de l'hébergement (ex: mutualisé, VPS), de la base de données (ex: MySQL).</td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">4. Contraintes</th>
                        <td className="px-6 py-4">Toutes les limites imposées au projet : budget maximum, délais de livraison, contraintes légales (ex: RGPD), performances attendues (ex: le site doit charger en moins de 3 secondes).</td>
                    </tr>
                     <tr className="bg-white">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">5. Maquettes (Wireframes)</th>
                        <td className="px-6 py-4">Des dessins ou schémas, même simples, des principales pages de l'application. Une image vaut mille mots et permet de valider la structure visuelle avec le client.</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>
    </div>
        </>
    ),
    tp: (
        <>
            <div className="border border-2 rounded p-4 text-center mb-4 border-red-500">
                <Heading level={2} >L'UTILISATION D'UNE IA = 0</Heading>
            </div>
            <h3>TP 1 : Analyse de Besoins Clients</h3>
            <p><strong>Objectif :</strong> Appliquer les concepts pour résoudre des problèmes concrets. Il faut décider si c'est un site web ou un logiciel dont le client a besoin, expliquer pourquoi, et les principales fonctionnalités.</p>
            <div className="space-y-4 mt-4 not-prose">
                <details className="p-4 bg-white border rounded-lg shadow-sm group">
                    <summary className="font-semibold cursor-pointer">
                        <strong>Cas n°1 : Le Boulanger de Quartier</strong>
                    </summary>
                    <div className="mt-4 pt-4 border-t">
                        <p><em>"J'aimerais un système sur un ordinateur à côté de ma caisse pour enregistrer les ventes rapidement. Je n'ai pas une connexion internet très fiable."</em></p>
                        {/* <p><strong>Solution ?</strong> Logiciel (application lourde).</p>
                        <p><strong>Justification:</strong> Doit fonctionner de manière fiable même sans connexion internet, sur un poste unique.</p>
                        <p><strong>Fonctionnalités:</strong> Interface de caisse simple, gestion des stocks, rapport de ventes journalier.</p> */}
                    </div>
                </details>
                <details className="p-4 bg-white border rounded-lg shadow-sm group">
                    <summary className="font-semibold cursor-pointer">
                        <strong>Cas n°2 : La Photographe de Voyage</strong>
                    </summary>
                    <div className="mt-4 pt-4 border-t">
                        <p><em>"Je veux un moyen de montrer mon travail à des clients potentiels partout dans le monde et qu'ils puissent me contacter facilement."</em></p>
                        {/* <p><strong>Solution:</strong> Application Web (site portfolio).</p>
                        <p><strong>Justification:</strong> Le but est d'être accessible mondialement, sans installation pour les clients.</p>
                        <p><strong>Fonctionnalités:</strong> Galerie d'images, page "À propos", formulaire de contact.</p> */}
                    </div>
                </details>
                <details className="p-4 bg-white border rounded-lg shadow-sm group">
                    <summary className="font-semibold cursor-pointer">
                        <strong>Cas n°3 : L'Association Sportive</strong>
                    </summary>
                    <div className="mt-4 pt-4 border-t">
                        <p><em>"On voudrait un outil pour que le trésorier suive les paiements, que le coach voie la liste des inscrits, et que les adhérents consultent le planning, même sur mobile."</em></p>
                        {/* <p><strong>Solution:</strong> Application Web.</p>
                        <p><strong>Justification:</strong> Plusieurs utilisateurs ont besoin d'accéder aux mêmes données centralisées, y compris depuis un mobile.</p>
                        <p><strong>Fonctionnalités:</strong> Connexion avec gestion des droits, module de gestion des cotisations, calendrier des événements.</p> */}
                    </div>
                </details>
            </div>
            <h3 className="mt-8">TP 2 : Étude de cas et Recherche</h3>
            <p><strong>Objectif :</strong> Savoir chercher des informations techniques pour répondre à un cahier des charges client.</p>
            <div className="not-prose mt-4 p-4 border-l-4 border-blue-500 bg-blue-50"><strong>Cahier des charges :</strong> Un client, artisan local, souhaite créer un petit site e-commerce pour vendre une dizaine de produits. Son budget est très serré. Il a besoin d'un site simple, d'un hébergement fiable et d'un moyen de paiement par carte bancaire.</div>
            <TP3FormComponent />
            <div className="space-y-12 prose max-w-none">
      
            <section>
                <h3 className="mt-8">TP 3 : Rédaction d'un Cahier des Charges</h3>
                <p className="text-xl text-gray-600">Mettez-vous dans la peau d'une équipe technique qui reçoit un nouveau client. Votre mission est de traduire son besoin en un document clair et structuré qui servira de base à tout le projet.</p>
            </section>

            <section>
                <Heading level={2} className="border-b pb-2 mb-4">Objectif et Livrables</Heading>
                <Card className="bg-blue-50 border-blue-200">
                    <p>Pour le cas client assigné à votre groupe, vous devez produire un document (Word, Google Docs...) qui est une première ébauche de cahier des charges. Ce document doit contenir au minimum :</p>
                    <ul className="list-disc list-inside mt-2 font-semibold">
                        <li>La présentation du contexte et des objectifs.</li>
                        <li>Une liste de <strong>5 à 10 Spécifications Fonctionnelles</strong> rédigées sous forme de <strong>User Stories</strong>.</li>
                        <li>Une première ébauche des <strong>Spécifications Techniques</strong> (Quels langages ? Quel type d'hébergement ? Quel matériel ?).</li>
                        <li>Une liste des <strong>contraintes</strong> identifiées (budget, délais, etc.).</li>
                    </ul>
                </Card>
            </section>
            
            <section>
                <Heading level={2} className="border-b pb-2 mb-4">Cas Clients (1 par groupe)</Heading>
                <p>Chaque groupe se voit attribuer un des cas suivants. Lisez attentivement le besoin de votre client et commencez à réfléchir aux fonctionnalités et à la solution technique.</p>
                <div className="space-y-4 mt-6 not-prose">
                    {caseStudiesData.map(study => (
                        <CaseStudy key={study.groupNumber} {...study} />
                    ))}
                </div>
            </section>
            <div className="border border-2 rounded p-4 mb-4 border-red-500">
                <Heading level={1} >UNE FOIS FINI, ENVOYEZ VOS REPONSES PAR MAIL AU PROFESSEUR</Heading>
                <br/>
                <p>
                    ={">"} Objet du mail : TP3 du [DATE] - [NOMS DES MEMBRES DU GROUPE] - [NUMERO DE GROUPE]
                    
                </p>
                <p>
                    ={">"} Contenu du mail : votre fichier en pièce jointe.
                </p>
            </div>
            

            </div>
        </>
    )
};