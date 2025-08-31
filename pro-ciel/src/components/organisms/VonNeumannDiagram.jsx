import React from 'react';


export const VonNeumannDiagramComponent = () => {
    const [info, setInfo] = React.useState('Survolez un composant pour voir sa description.');
    const descriptions = {
      cpu: "<strong>CPU (Processeur):</strong> Le cerveau de l'ordinateur.",
      ram: "<strong>RAM (Mémoire Vive):</strong> La mémoire à court terme.",
      io: "<strong>Périphériques E/S:</strong> Permettent de communiquer avec l'extérieur.",
    };
    return (
      <div className="not-prose p-4 border rounded-lg bg-white shadow-sm" onMouseLeave={() => setInfo('Survolez un composant...')}>
        <div className="relative max-w-2xl mx-auto text-center font-semibold">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div onMouseEnter={() => setInfo(descriptions.io)} className="p-4 border-2 border-dashed rounded-lg bg-green-100 cursor-pointer transition hover:scale-105">Périphériques E/S</div>
            <div className="text-2xl font-thin">&lt;=&gt;</div>
            <div className="space-y-4 border rounded p-2">
              <div onMouseEnter={() => setInfo(descriptions.cpu)} className="p-4 border-2 border-dashed rounded-lg bg-blue-100 cursor-pointer transition hover:scale-105">CPU</div>
              <div className="text-2xl font-thin">&#8595;&#8593;</div>
              <div onMouseEnter={() => setInfo(descriptions.ram)} className="p-4 border-2 border-dashed rounded-lg bg-yellow-100 cursor-pointer transition hover:scale-105">Mémoire Vive (RAM)</div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 rounded-lg text-sm text-gray-700 min-h-[80px] border" dangerouslySetInnerHTML={{ __html: info }} />
        </div>
      </div>
    );
  };