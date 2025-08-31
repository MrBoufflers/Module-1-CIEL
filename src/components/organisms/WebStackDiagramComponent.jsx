import React from 'react';
export const WebStackDiagramComponent = () => {
    const [info, setInfo] = React.useState('Cliquez sur une partie pour voir les technologies associées.');
    const descriptions = {
        frontend: '<strong>Front-End :</strong> Ce qui s\'exécute dans le navigateur. Langages : HTML, CSS, JavaScript.',
        backend: '<strong>Back-End :</strong> La logique qui s\'exécute sur le serveur. Langages : Python, PHP, Java, Node.js.',
        database: '<strong>Base de Données :</strong> Là où les données sont stockées. Langage : SQL.'
    };
    return (
        <div className="not-prose p-6 bg-white border rounded-lg shadow-sm">
            <div className="grid grid-cols-3 gap-4 text-center items-center">
                <div onClick={() => setInfo(descriptions.frontend)} className="p-4 border-2 border-blue-300 rounded-lg bg-blue-50 cursor-pointer"><h4 className="font-bold">CLIENT (Front-End)</h4></div>
                <div className="font-bold text-gray-400 text-2xl">&lt;-- HTTP --&gt;</div>
                <div onClick={() => setInfo(descriptions.backend)} className="p-4 border-2 border-green-300 rounded-lg bg-green-50 cursor-pointer"><h4 className="font-bold">SERVEUR (Back-End)</h4></div>
            </div>
            <div className="flex justify-center mt-4">
                <div onClick={() => setInfo(descriptions.database)} className="p-4 border-2 border-yellow-300 rounded-lg bg-yellow-50 cursor-pointer"><h4 className="font-bold">BASE DE DONNÉES</h4></div>
            </div>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg text-sm text-gray-700 min-h-[50px]" dangerouslySetInnerHTML={{ __html: info }} />
        </div>
    );
};