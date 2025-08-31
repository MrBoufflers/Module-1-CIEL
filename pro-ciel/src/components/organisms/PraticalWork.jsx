import React from 'react';
import Heading from '../atoms/Heading';
import Card from '../atoms/Card';
import Icon from '../atoms/Icon';

/**
 * Composant Template pour afficher une fiche de Travaux Pratiques.
 * @param {string} title - Le titre du TP.
 * @param {string} objective - L'objectif pédagogique du TP.
 * @param {string[]} materials - Une liste du matériel nécessaire.
 * @param {object[]} steps - Une liste des étapes à suivre. Chaque étape est un objet { title: string, description: React.ReactNode }.
 */
export default function PracticalWork({ title, objective, materials, steps }) {
  return (
    <div className="space-y-8">
      <Heading level={3}>{title}</Heading>

      <Card>
        <Heading level={4} className="!mb-3">🎯 Objectif</Heading>
        <p className="text-gray-700">{objective}</p>
      </Card>

      <Card>
        <Heading level={4} className="!mb-3">🛠️ Matériel Nécessaire</Heading>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {materials.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Card>

      <div>
        <Heading level={4} className="!mb-3">📋 Déroulé Détaillé</Heading>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <>
                <div key={index} className="flex items-start">
                <div className="flex-grow">
                    <h3 className="font-bold text-lg text-gray-800">{step.title}</h3>
                    <div className="text-gray-600 prose prose-sm max-w-none">{step.description}</div>
                </div>
                </div>
                <div className='bg-black w-full m-0 p-0 h-[1px]'/>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
