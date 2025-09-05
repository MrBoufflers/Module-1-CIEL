export default function CaseStudy ({ groupNumber, client, context, need, constraints = [] })  {
    return (
    <details className="p-6 bg-white border rounded-lg shadow-sm group transition-all duration-300 ease-in-out">
        <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
            <span>Groupe {groupNumber} : {client}</span>
            <span className="text-blue-600 group-open:rotate-90 transition-transform">▶</span>
        </summary>
        <div className="mt-4 pt-4 border-t">
            <h4 className="font-bold text-gray-700">Contexte :</h4>
            <p className="mt-1 mb-3 text-gray-600">{context}</p>
            <h4 className="font-bold text-gray-700">Besoin exprimé :</h4>
            <p className="mt-1 mb-3 text-gray-600">{need}</p>
            {constraints.length > 0 && (
                <>
                    <h4 className="font-bold text-gray-700">Contraintes :</h4>
                    <ul className="list-disc list-inside mt-1 text-gray-600">
                        {constraints.map((constraint, index) => <li key={index}>{constraint}</li>)}
                    </ul>
                </>
            )}
        </div>
    </details>
)};