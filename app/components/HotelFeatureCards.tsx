import React from 'react';

const ChoiceIcon = () => (
    <svg className="w-8 h-8 text-[#0770e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const PriceIcon = () => (
    <svg className="w-8 h-8 text-[#0770e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const FeesIcon = () => (
    <svg className="w-8 h-8 text-[#0770e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
);

export default function HotelFeatureCards() {
    const cards = [
        {
            icon: <ChoiceIcon />,
            title: "Incredible choice",
            desc: "We compare over 3 million hotels and accommodation options worldwide."
        },
        {
            icon: <PriceIcon />,
            title: "Low rates",
            desc: "We search the major hotel sites to help you find the best low rates."
        },
        {
            icon: <FeesIcon />,
            title: "No hidden fees",
            desc: "We never add any booking fees – what you see is what you pay."
        },
    ];

    return (
        <div className="bg-white py-12 border-b border-gray-100">
            <div className="max-w-[1248px] mx-auto px-4">
                <h2 className="text-[#161616] text-2xl font-bold mb-8 text-center md:text-left">Why Skyscanner?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="flex gap-4 items-start p-4 hover:bg-gray-50 rounded-lg transition-colors">
                            <div className="mt-1 flex-shrink-0">{card.icon}</div>
                            <div>
                                <h3 className="text-[#161616] text-lg font-bold mb-2">{card.title}</h3>
                                <p className="text-[#626971] text-sm leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
