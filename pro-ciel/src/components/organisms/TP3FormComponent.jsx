import React from 'react';

export const TP3FormComponent = () => {

    return (
        <div>
            <div>
                <label htmlFor="q1" className="block font-semibold mb-1">1. Quel type d'hébergement web recommanderiez-vous et pourquoi ? Cherchez un hébergeur qui propose une solution adaptée pour moins de 10€/mois et citez son nom.</label>
            </div>
            <div>
                <label htmlFor="q2" className="block font-semibold mb-1">2. Quelle solution de paiement en ligne (ex: Stripe, PayPal) est la plus simple à intégrer pour un débutant ? Donnez un avantage pour celle que vous choisissez.</label>
            </div>
            <div>
                <label htmlFor="q3" className="block font-semibold mb-1">3. Le client veut un design moderne rapidement. Citez un "framework CSS" populaire qui pourrait accélérer le développement du front-end.</label>
            </div>
        </div>
    );
};