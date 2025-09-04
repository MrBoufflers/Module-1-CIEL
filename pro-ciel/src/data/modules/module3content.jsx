import { WebStackDiagramComponent } from "../../components/organisms/WebStackDiagramComponent";
import { TP3FormComponent } from "../../components/organisms/TP3FormComponent";

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
        </>
    ),
    tp: (
        <>
            <h3>TP 1 : Analyse de Besoins Clients</h3>
            <p><strong>Objectif :</strong> Appliquer les concepts pour résoudre des problèmes concrets. Travail en petits groupes.</p>
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
                        {/* <p><strong>Solution:</strong> Application Web (site portfolio).</p><p><strong>Justification:</strong> Le but est d'être accessible mondialement, sans installation pour les clients.</p><p><strong>Fonctionnalités:</strong> Galerie d'images, page "À propos", formulaire de contact.</p> */}
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
        </>
    )
};