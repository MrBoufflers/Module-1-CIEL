import Pascaline from "../../assets/images/pascaline.jpg"
import Analytic from "../../assets/images/machine-nalytique-Babagge.jpg"
import Eniac from "../../assets/images/eniac.jpg"
import Microproc from "../../assets/images/firstProc.jpg"
import Apple1 from "../../assets/images/apple1.png"
import IBMPC from "../../assets/images/imbpc.png"
import WWW from "../../assets/images/www.png"
import Iphone from "../../assets/images/iphone.webp"
import React from "react";
import { Chrono } from "react-chrono";

// --- Données pour la chronologie ---
// Chaque objet représente un point sur la frise chronologique.
const timelineItems = [
  {
    title: "1642",
    cardTitle: "La Pascaline",
    media: {
        type: "IMAGE",
        name: "Pascaline",
        source: {
            url: Pascaline
        }
    },
    cardSubtitle: "Blaise Pascal",
    cardDetailedText: "Invention de la première machine à calculer mécanique, capable d'effectuer des additions et des soustractions.",
  },
  {
    title: "1834",
    cardTitle: "La Machine Analytique",
        media: {
        type: "IMAGE",
        name: "Machine Analytique",
        source: {
            url: Analytic
        }
    },
    cardSubtitle: "Charles Babbage & Ada Lovelace",
    cardDetailedText: "Concept de la première machine programmable, ancêtre mécanique de l'ordinateur. Ada Lovelace écrit ce qui est considéré comme le premier programme informatique.",
  },
  {
    title: "1945",
    cardTitle: "L'ENIAC",
        media: {
        type: "IMAGE",
        name: "ENIAC",
        source: {
            url: Eniac
        }
    },
    cardSubtitle: "J. Presper Eckert & John Mauchly",
    cardDetailedText: "Premier ordinateur électronique programmable à grande échelle. Il occupait une pièce de 167 m² et pesait 30 tonnes.",
  },
  {
    title: "1971",
    cardTitle: "Le Microprocesseur",
        media: {
        type: "IMAGE",
        name: "Microprocesseur",
        source: {
            url: Microproc
        }
    },
    cardSubtitle: "Intel (Intel 4004)",
    cardDetailedText: "Invention du premier microprocesseur commercial, intégrant tous les composants d'un CPU sur une seule puce. C'est la révolution qui a permis l'informatique personnelle.",
  },
  {
    title: "1976",
    cardTitle: "L'Apple I",
        media: {
        type: "IMAGE",
        name: "Apple 1",
        source: {
            url: Apple1
        }
    },
    cardSubtitle: "Steve Jobs & Steve Wozniak",
    cardDetailedText: "L'un des premiers ordinateurs personnels, vendu sous forme de kit à assembler. Il a contribué à lancer la révolution du PC depuis un garage.",
  },
  {
    title: "1981",
    cardTitle: "L'IBM PC",
        media: {
        type: "IMAGE",
        name: "IBM PC",
        source: {
            url: IBMPC
        }
    },
    cardSubtitle: "IBM",
    cardDetailedText: "Lancement de l'ordinateur personnel d'IBM, qui a standardisé l'architecture des PC et a permis l'essor de l'écosystème Microsoft (MS-DOS).",
  },
  {
    title: "1991",
    cardTitle: "Le World Wide Web",
        media: {
        type: "IMAGE",
        name: "World Wide Web",
        source: {
            url: WWW
        }
    },
    cardSubtitle: "Tim Berners-Lee",
    cardDetailedText: "Le CERN met le World Wide Web à la disposition du public, rendant Internet accessible et graphique pour tous grâce au protocole HTTP et au langage HTML.",
  },
  {
    title: "2007",
    cardTitle: "L'iPhone",
        media: {
        type: "IMAGE",
        name: "Iphone",
        source: {
            url: Iphone
        }
    },
    cardSubtitle: "Apple",
    cardDetailedText: "Lancement du premier smartphone moderne, qui a redéfini l'informatique mobile et a popularisé les applications et l'internet de poche.",
  },
];

// --- Le composant principal de la chronologie ---
export default function HistoryTimeline() {
  return (
    <div className="w-full h-[100vh] bg-white p-4 m-3">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Une Brève Histoire de l'Informatique
      </h2>
      <Chrono
        items={timelineItems}
        mode="VERTICAL_ALTERNATING" // Alterne les événements à gauche et à droite
        theme={{
          primary: "#3b82f6", // Couleur des points sur la ligne
          secondary: "#ffffff", // Couleur de fond des cartes
          cardBgColor: "#ffffff",
          cardForeColor: "#374151",
          titleColor: "#3b82f6",
          titleColorActive: "#1e40af",
        }}
        fontSizes={{
          cardSubtitle: '0.85rem',
          cardText: '0.8rem',
          cardTitle: '1.1rem',
          title: '1rem',
        }}
        scrollable 
      />
    </div>
  );
}

