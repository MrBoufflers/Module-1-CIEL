import React from 'react';

import imgMother from "../../assets/images/motherboard.jpg";
import imgCPU from "../../assets/images/CPU.jpg";
import imgRAM from "../../assets/images/RAM.jpg";
import imgGPU from "../../assets/images/GPU.jpg";
import imgSSD from "../../assets/images/SSD.jpg";
import imgPSU from "../../assets/images/PSU.jpg";

// --- Données des composants ---
// C'est ici que vous listerez tous vos composants.
// Remplacez les URLs de 'placehold.co' par les chemins vers vos propres photos
// (par exemple, '/images/carte-mere.jpg' si vous placez vos images dans le dossier `public/images`).
const componentsData = [
  {
    id: 1,
    name: "Carte Mère",
    description: "Le système nerveux de l'ordinateur. Elle connecte tous les composants entre eux pour qu'ils puissent communiquer.",
    imageUrl: imgMother
  },
  {
    id: 2,
    name: "Processeur (CPU)",
    description: "Le cerveau de la machine. Il exécute les instructions et effectue tous les calculs nécessaires au fonctionnement des programmes.",
    imageUrl: imgCPU
  },
  {
    id: 3,
    name: "Mémoire Vive (RAM)",
    description: "La mémoire à court terme de l'ordinateur. Elle stocke temporairement les données des applications en cours d'utilisation.",
    imageUrl: imgRAM
  },
  {
    id: 4,
    name: "Carte Graphique (GPU)",
    description: "Spécialisée dans le traitement des images et des vidéos, elle gère tout ce qui est affiché à l'écran.",
    imageUrl: imgGPU
  },
  {
    id: 5,
    name: "Disque de Stockage (SSD/HDD)",
    description: "La mémoire à long terme. C'est ici que sont conservés le système d'exploitation, vos logiciels et vos fichiers.",
    imageUrl: imgSSD
  },
  {
    id: 6,
    name: "Alimentation (PSU)",
    description: "Le cœur de l'ordinateur. Elle convertit le courant du mur en tensions utilisables par tous les autres composants.",
    imageUrl: imgPSU
  },
];

// --- Le composant Card ---
// C'est un composant "atome" qui représente une seule carte.
const ComponentCard = ({ name, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
      <img src={imageUrl} alt={name} className="w-full h-88 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

// --- Le composant principal ---
// C'est un "organisme" qui assemble toutes les cartes dans une grille.
export default function ComponentShowcase() {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">        
        {/* Grille responsive qui s'adapte à la taille de l'écran */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* On utilise .map() pour créer une carte pour chaque objet dans nos données */}
          {componentsData.map(component => (
            <ComponentCard
              key={component.id}
              name={component.name}
              description={component.description}
              imageUrl={component.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
