import React from 'react';

const ExploreIcon = () => (
    <svg className="w-8 h-8 text-[#0770e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

const CompareIcon = () => (
    <svg className="w-8 h-8 text-[#0770e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);

const CheapestMonthIcon = () => (
    <svg className="w-8 h-8 text-[#0770e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

export default function FeatureCards() {
    const cards = [
        {
            icon: <ExploreIcon />,
            title: "Explore the best flight deals from anywhere, to everywhere, then book with no fees",
        },
        {
            icon: <CompareIcon />,
            title: "Compare flight deals from over 1000 providers, and choose the cheapest, fastest or lowest-emission tickets",
        },
        {
            icon: <CheapestMonthIcon />,
            title: "Find the cheapest month – or even day – to fly, and set up Price Alerts to book when the price is right",
        },
    ];

    return (
        <div className="bg-white py-12">
            <div className="max-w-[1248px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
                            <div className="mb-2">{card.icon}</div>
                            <p className="text-[#161616] text-lg font-medium leading-relaxed">
                                {card.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
