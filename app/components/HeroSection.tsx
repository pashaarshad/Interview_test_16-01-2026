'use client';

import React, { useState } from 'react';

const PlaneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
);

const HotelIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
    </svg>
);

const ToursIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
    </svg>
);

const SwapIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
);

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'tours'>('flights');
    const [fromCity, setFromCity] = useState('Bengaluru (BLR)');
    const [toCity, setToCity] = useState('');
    const [nearbyFrom, setNearbyFrom] = useState(false);
    const [nearbyTo, setNearbyTo] = useState(false);
    const [directFlights, setDirectFlights] = useState(false);

    // Background image style - using the generated image path
    // Since we are not strictly using Next.js Image component for background often (CSS is easier for full bleed)
    const bgStyle = {
        backgroundImage: `url('/images/hero-flight.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const swapCities = () => {
        const temp = fromCity;
        setFromCity(toCity);
        setToCity(temp);
    };

    return (
        <div className="relative min-h-[550px] flex flex-col pt-10 pb-20 px-4" style={bgStyle}>
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-[#05203c]/40 z-0"></div>

            <div className="relative z-10 w-full max-w-[1248px] mx-auto">
                {/* Headline */}
                <h1 className="text-white text-4xl font-bold mb-8 leading-tight tracking-tight drop-shadow-md max-w-2xl">
                    The best flight offers from anywhere, to everywhere
                </h1>

                {/* Search Widget Container */}
                <div className="bg-[#05203c] rounded-[16px] shadow-2xl p-6">

                    {/* Tabs */}
                    <div className="flex gap-2 mb-6">
                        <button
                            onClick={() => setActiveTab('flights')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'flights' ? 'bg-[#0770e3] text-white' : 'text-white hover:bg-white/10'}`}
                        >
                            <PlaneIcon />
                            Flights
                        </button>
                        <button
                            onClick={() => setActiveTab('hotels')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'hotels' ? 'bg-[#0770e3] text-white' : 'text-white hover:bg-white/10'}`}
                        >
                            <HotelIcon />
                            Hotels
                        </button>
                        <button
                            onClick={() => setActiveTab('tours')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'tours' ? 'bg-[#0770e3] text-white' : 'text-white hover:bg-white/10'}`}
                        >
                            <ToursIcon />
                            Tours & Tickets
                        </button>
                    </div>

                    {/* FLIGHTS FORM */}
                    {activeTab === 'flights' && (
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2 mb-2">
                                <button className="text-white text-sm flex items-center gap-1">Return <span className="text-[10px]">▼</span></button>
                                <button className="text-white text-sm flex items-center gap-1">1 Adult, Economy <span className="text-[10px]">▼</span></button>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-1">
                                {/* From */}
                                <div className="flex-1 min-w-[200px] relative">
                                    <div className="bg-white rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none p-3 h-full flex flex-col justify-center">
                                        <label className="text-xs text-gray-500 font-semibold">From</label>
                                        <input
                                            type="text"
                                            value={fromCity}
                                            onChange={(e) => setFromCity(e.target.value)}
                                            className="w-full font-bold text-[#05203c] outline-none text-ellipsis"
                                            placeholder="Country, city or airport"
                                        />
                                    </div>
                                    <button onClick={swapCities} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-1.5 shadow-md hover:text-[#0770e3] lg:block hidden">
                                        <SwapIcon />
                                    </button>
                                </div>

                                {/* To */}
                                <div className="flex-1 min-w-[200px]">
                                    <div className="bg-white lg:rounded-none p-3 h-full flex flex-col justify-center">
                                        <label className="text-xs text-gray-500 font-semibold">To</label>
                                        <input
                                            type="text"
                                            value={toCity}
                                            onChange={(e) => setToCity(e.target.value)}
                                            className="w-full font-bold text-[#05203c] outline-none text-ellipsis"
                                            placeholder="Country, city or airport"
                                        />
                                    </div>
                                </div>

                                {/* Depart */}
                                <div className="flex-1 min-w-[140px]">
                                    <div className="bg-white lg:rounded-none p-3 h-full flex flex-col justify-center border-l lg:border-l border-gray-100">
                                        <label className="text-xs text-gray-500 font-semibold">Depart</label>
                                        <input type="text" placeholder="Add date" className="w-full font-bold text-[#05203c] outline-none placeholder-gray-400" />
                                    </div>
                                </div>

                                {/* Return */}
                                <div className="flex-1 min-w-[140px]">
                                    <div className="bg-white lg:rounded-none p-3 h-full flex flex-col justify-center border-l border-gray-100">
                                        <label className="text-xs text-gray-500 font-semibold">Return</label>
                                        <input type="text" placeholder="Add date" className="w-full font-bold text-[#05203c] outline-none placeholder-gray-400" />
                                    </div>
                                </div>

                                {/* Search Button */}
                                <div className="lg:pl-2">
                                    <button className="w-full lg:w-auto h-full bg-[#00a698] hover:bg-[#008f82] text-white text-xl font-bold px-8 py-3 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none transition-colors">
                                        Search
                                    </button>
                                </div>
                            </div>

                            {/* Checkboxes */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-2 text-white text-sm font-medium">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${nearbyFrom ? 'bg-[#00a698] border-[#00a698]' : 'border-gray-400 group-hover:border-white'}`}>
                                        {nearbyFrom && <CheckIcon />}
                                    </div>
                                    <input type="checkbox" checked={nearbyFrom} onChange={(e) => setNearbyFrom(e.target.checked)} className="sr-only" />
                                    <span>Add nearby airports</span>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${nearbyTo ? 'bg-[#00a698] border-[#00a698]' : 'border-gray-400 group-hover:border-white'}`}>
                                        {nearbyTo && <CheckIcon />}
                                    </div>
                                    <input type="checkbox" checked={nearbyTo} onChange={(e) => setNearbyTo(e.target.checked)} className="sr-only" />
                                    <span>Add nearby airports</span>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${directFlights ? 'bg-[#00a698] border-[#00a698]' : 'border-gray-400 group-hover:border-white'}`}>
                                        {directFlights && <CheckIcon />}
                                    </div>
                                    <input type="checkbox" checked={directFlights} onChange={(e) => setDirectFlights(e.target.checked)} className="sr-only" />
                                    <span>Direct flights</span>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* HOTELS FORM (Placeholder) */}
                    {activeTab === 'hotels' && (
                        <div className="flex flex-col gap-4 min-h-[140px] justify-center text-white">
                            <p>Hotel search functionality coming soon...</p>
                        </div>
                    )}

                    {/* TOURS FORM (Placeholder) */}
                    {activeTab === 'tours' && (
                        <div className="flex flex-col gap-4 min-h-[140px] justify-center text-white">
                            <p>Tours & Tickets search coming soon...</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
