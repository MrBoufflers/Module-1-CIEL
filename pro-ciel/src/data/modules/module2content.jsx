import { FileExplorerComponent } from './../../components/organisms/FileExplorerComponent';
import PracticalWork from '../../components/organisms/PraticalWork';

const tpModule2Title = 'TP : Installer Windows à partir de zéro';

const tpModule2Objective = 'Comprendre le processus complet d\'installation d\'un système d\'exploitation, apprendre à manipuler le BIOS/UEFI pour changer l\'ordre de démarrage, et maîtriser le concept de partitionnement de disque pour une installation propre.';

const tpModule2Materials = [
  'Un PC de test par groupe (fixe ou portable).',
  'Une clé USB vierge d\'au moins 8 Go par groupe.',
  'Un accès à un PC fonctionnel avec une connexion internet pour la préparation de la clé.',
];

const tpModule2Steps = [
  {
    title: "Phase 1 : Création de la clé USB bootable",
    description: (
      <>
        <p>Cette première étape consiste à transformer une clé USB standard en un programme d'installation de Windows.</p>
        <ol>
          <li>Sur un PC fonctionnel, ouvrez un navigateur web et cherchez "Télécharger Windows 11" (ou 10). Allez sur le site officiel de Microsoft.</li>
          <li>Dans la section "Création d'un support d'installation", téléchargez "l'Outil de création de média". </li>
          <li>Branchez votre clé USB de 8 Go (ou plus). Attention, tout son contenu sera effacé.</li>
          <li>Lancez l'outil téléchargé. Acceptez les termes du contrat de licence.</li>
          <li>Choisissez l'option "Créer un support d'installation (clé USB, DVD ou fichier ISO) pour un autre PC".</li>
          <li>Vérifiez que la langue et l'édition sont correctes (généralement détectées automatiquement) et cliquez sur "Suivant".</li>
          <li>Sélectionnez "Disque mémoire flash USB" et choisissez votre clé dans la liste. L'outil va alors télécharger Windows et rendre la clé "bootable" (capable de démarrer un ordinateur).</li>
        </ol>
      </>
    )
  },
  {
    title: "Phase 2 : Démarrer sur la clé USB",
    description: (
      <>
        <p>Maintenant, nous allons dire au PC de test de démarrer sur notre clé USB plutôt que sur son disque dur interne.</p>
        <ol>
          <li>Éteignez complètement le PC de test. Branchez la clé USB que vous venez de préparer sur un de ses ports USB.</li>
          <li>Allumez le PC et tapotez immédiatement et de manière répétée la touche d'accès au BIOS/UEFI. Cette touche varie selon les marques : souvent <strong>F2</strong>, <strong>F12</strong>, <strong>Suppr (Del)</strong> ou <strong>Échap (Esc)</strong>.</li>
          <li>Une fois dans le menu du BIOS/UEFI, cherchez un onglet appelé "Boot", "Démarrage" ou "Boot Order". </li>
          <li>Dans ce menu, modifiez l'ordre de priorité de démarrage pour placer votre clé USB (souvent identifiée par son nom, ex: "UEFI: Kingston...") en toute première position.</li>
          <li>Allez dans l'onglet "Exit" ou "Quitter" et choisissez l'option "Save Changes and Exit" (Sauvegarder les modifications et quitter). Confirmez.</li>
          <li>Le PC va redémarrer et, si tout est correct, il devrait démarrer sur le programme d'installation de Windows présent sur la clé USB.</li>
        </ol>
      </>
    )
  },
   {
    title: "Phase 3 : Installation de Windows et Partitionnement",
    description: (
      <>
        <p className="font-bold text-red-600">C'est l'étape la plus critique. Les actions sur les partitions sont irréversibles.</p>
        <ol>
            <li>L'installateur Windows se lance. Choisissez la langue, le format horaire et le type de clavier. Cliquez sur "Suivant" puis "Installer maintenant".</li>
            <li>Si une clé produit est demandée, cliquez sur "Je n'ai pas de clé de produit". Choisissez la version de Windows à installer (ex: Windows 11 Famille).</li>
            <li>Acceptez les termes du contrat de licence.</li>
            <li>Choisissez le type d'installation : <strong>"Personnalisé : installer uniquement Windows (avancé)"</strong>. C'est l'option obligatoire pour une installation propre.</li>
            <li>Vous arrivez sur l'écran de partitionnement.  Vous verrez la liste des disques et de leurs partitions (divisions). Pour une installation propre, sélectionnez chaque partition existante du disque principal et cliquez sur <strong>"Supprimer"</strong> jusqu'à n'avoir plus qu'une seule ligne "Espace non alloué".</li>
            <li>Sélectionnez cette ligne "Espace non alloué" et cliquez simplement sur "Suivant". Windows va automatiquement créer les partitions nécessaires (système, récupération, etc.) et commencer la copie des fichiers.</li>
            <li>Le PC va redémarrer plusieurs fois pendant ce processus. Ne touchez à rien et laissez-le faire.</li>
        </ol>
      </>
    )
  },
   {
    title: "Phase 4 : Configuration Initiale (OOBE)",
    description: (
      <>
        <p>C'est la dernière ligne droite, la phase de personnalisation "Out-of-Box Experience".</p>
        <ol>
            <li>Après le dernier redémarrage, Windows vous accueille avec un assistant de configuration.</li>
            <li>Suivez les étapes pour choisir votre région et la disposition du clavier.</li>
            <li>Connectez-vous au réseau si nécessaire.</li>
            <li>Il vous sera demandé de vous connecter avec un compte Microsoft. Pour un PC de test, il est souvent plus simple de créer un compte local. Cherchez l'option "Options de connexion" {'>'} "Compte hors connexion" ou "Compte local".</li>
            <li>Choisissez un nom d'utilisateur et un mot de passe (ou laissez le mot de passe vide).</li>
            <li>Réglez les paramètres de confidentialité (vous pouvez désactiver la plupart des options de suivi).</li>
            <li>Windows va finaliser la préparation de votre session, et vous arriverez enfin sur un bureau Windows tout neuf et fonctionnel. Félicitations !</li>
        </ol>
      </>
    )
  },
];

export const module2Content = {
    course: (
        <>
            <h3>a. Qu’est-ce qu’un système d’exploitation ?</h3>
            <p>Un OS (Operating System), c'est le chef d'orchestre de l'ordinateur. C'est le logiciel principal qui fait le lien entre le matériel (hardware) et vous (l'utilisateur) avec vos logiciels (software). Sans OS, un ordinateur n'est qu'une boîte de métal et de plastique inutile.</p>
            <p>Ses rôles principaux :</p>
            <ul>
                <li><strong>Gérer le matériel :</strong> Il parle au CPU, à la RAM, au disque dur... pour que tout fonctionne ensemble.</li>
                <li><strong>Gérer les fichiers :</strong> Il organise les données sur le disque dur avec des dossiers et des fichiers.</li>
                <li><strong>Fournir une interface utilisateur :</strong> C'est ce que vous voyez à l'écran : le bureau, les icônes, les fenêtres (GUI - Graphical User Interface).</li>
                <li><strong>Exécuter les logiciels :</strong> Il donne aux applications (Chrome, Word...) les ressources dont elles ont besoin pour fonctionner.</li>
            </ul>
            <p><strong>Petit historique :</strong> Au début, tout se faisait en ligne de commande (comme MS-DOS). Puis sont arrivés les OS avec des fenêtres et une souris, rendant l'informatique accessible à tous.</p>
            <h3>b. Les principaux OS : Windows, Linux et macOS</h3>
            <div className="not-prose grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Windows</h4>
                    <p className="text-sm">Le plus répandu. Grande compatibilité logicielle. Facile d'accès pour les débutants.</p>
                </div>
                <div className="p-6 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2">macOS</h4>
                    <p className="text-sm">Exclusif aux appareils Apple. Réputé pour sa stabilité et son design soigné.</p>
                </div>
                <div className="p-6 bg-white border rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Linux</h4>
                    <p className="text-sm">Open source, gratuit et ultra-personnalisable. Le roi des serveurs.</p>
                </div>
            </div>
            <h3>c. Qu’est-ce que le BIOS ?</h3>
            <p>Le <strong>BIOS (Basic Input/Output System)</strong> ou son successeur moderne <strong>l'UEFI</strong>, est le tout premier programme qui se lance quand vous appuyez sur le bouton d'alimentation. C'est un firmware sur la carte mère.</p>
            <p><strong>À quoi ça sert ?</strong></p>
            <ol>
                <li><strong>Vérifier le matériel (POST) :</strong> Un rapide check-up pour s'assurer que tout fonctionne.</li>
                <li><strong>Configurer le matériel :</strong> Permet des réglages de bas niveau (ex: ordre de démarrage).</li>
                <li><strong>Lancer l'OS :</strong> Sa mission finale est de trouver Windows sur un disque et de lui passer la main.</li>
            </ol>
            <h3>d. Comment est organisé Windows ?</h3>
            <p>L'Explorateur de Fichiers est l'outil pour naviguer. Le lecteur `C:` est le lecteur principal. Explorez cette simulation pour comprendre la hiérarchie :</p>
            <FileExplorerComponent />
        </>
    ),
    tp: (
        <PracticalWork 
        title={tpModule2Title}
        objective={tpModule2Objective}
        materials={tpModule2Materials}
        steps={tpModule2Steps}
        />
    )
};