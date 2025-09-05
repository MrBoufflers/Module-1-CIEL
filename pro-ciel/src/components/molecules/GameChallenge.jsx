export default function GameChallenge ({ groupNumber, title, concept, rules, skills }) {
    return (
        <details className="p-6 bg-white border rounded-lg shadow-sm group transition-all duration-300 ease-in-out">
            <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
                <span>Groupe {groupNumber} : {title}</span>
                <span className="text-blue-600 group-open:rotate-90 transition-transform">▶</span>
            </summary>
            <div className="mt-4 pt-4 border-t">
                <h4 className="font-bold text-gray-700">Concept :</h4>
                <p className="mt-1 mb-3 text-gray-600">{concept}</p>
                <h4 className="font-bold text-gray-700">Règles du jeu :</h4>
                <ul className="list-disc list-inside mt-1 mb-3 text-gray-600">
                    {rules.map((rule, index) => <li key={index}>{rule}</li>)}
                </ul>
                <h4 className="font-bold text-gray-700">Compétences à utiliser :</h4>
                <p className="text-sm text-gray-500">{skills}</p>
            </div>
        </details>
    )
};