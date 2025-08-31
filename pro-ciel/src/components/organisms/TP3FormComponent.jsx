import React from 'react';

export const TP3FormComponent = () => {
    const [allFilled, setAllFilled] = React.useState(false);
    const checkInputs = (e) => {
        const form = e.currentTarget.closest('form');
        const inputs = form.querySelectorAll('input');
        let filled = true;
        inputs.forEach(i => {
            if (i.value.trim() === '') filled = false;
        });
        setAllFilled(filled);
    };
    return (
        <form className="not-prose mt-6 space-y-4" onChange={checkInputs}>
            <div>
                <label htmlFor="q1" className="block font-semibold mb-1">1. Quel type d'hébergement web recommanderiez-vous et pourquoi ? Cherchez un hébergeur qui propose une solution adaptée pour moins de 10€/mois et citez son nom.</label>
                <input type="text" id="q1" className="w-full p-2 border rounded" />
            </div>
            <div>
                <label htmlFor="q2" className="block font-semibold mb-1">2. Quelle solution de paiement en ligne (ex: Stripe, PayPal) est la plus simple à intégrer pour un débutant ? Donnez un avantage pour celle que vous choisissez.</label>
                <input type="text" id="q2" className="w-full p-2 border rounded" />
            </div>
            <div>
                <label htmlFor="q3" className="block font-semibold mb-1">3. Le client veut un design moderne rapidement. Citez un "framework CSS" populaire qui pourrait accélérer le développement du front-end.</label>
                <input type="text" id="q3" className="w-full p-2 border rounded" />
            </div>
            {allFilled && (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center font-bold">
                    Dès que vous avez rempli toutes les réponses, appelez le professeur !
                </div>
            )}
        </form>
    );
};