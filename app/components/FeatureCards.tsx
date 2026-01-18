import React from 'react';

const ExploreIcon = () => (
    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
    </div>
);

const CompareIcon = () => (
    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
    </div>
);

const CheapestMonthIcon = () => (
    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    </div>
);

export default function FeatureCards() {
    const cards = [
        {
            icon: <ExploreIcon />,
            title: "Explore the best flight deals",
            desc: "From anywhere, to everywhere, then book with no fees"
        },
        {
            icon: <CompareIcon />,
            title: "Compare all your options",
            desc: "From over 1000 providers, find the cheapest, fastest or lowest-emission tickets"
        },
        {
            icon: <CheapestMonthIcon />,
            title: "Find the cheapest month",
            desc: "Or even day – to fly, and set up Price Alerts to book when the price is right"
        },
    ];

    return (
        <div className="bg-white py-16">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 group"
                        >
                            <div className="mb-5 transform group-hover:scale-105 transition-transform duration-300">
                                {card.icon}
                            </div>
                            <h3 className="text-[#05203c] text-lg font-bold mb-2 leading-tight">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
