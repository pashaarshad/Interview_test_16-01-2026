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

interface HeroSectionProps {
    activeTab: 'flights' | 'hotels' | 'tours';
    onTabChange: (tab: 'flights' | 'hotels' | 'tours') => void;
}

export default function HeroSection({ activeTab, onTabChange }: HeroSectionProps) {
    const [fromCity, setFromCity] = useState('Bengaluru (BLR)');
    const [toCity, setToCity] = useState('');
    const [nearbyFrom, setNearbyFrom] = useState(false);
    const [directFlights, setDirectFlights] = useState(false);

    const getBgImage = () => {
        switch (activeTab) {
            case 'hotels': return "url('/images/hotels/hotel-hero.jpg')";
            case 'tours': return "url('/images/tours/tour-hero.jpg')";
            default: return "url('/images/flights/hero-flight.jpg')";
        }
    };

    const getHeadline = () => {
        switch (activeTab) {
            case 'hotels': return "Find the right hotel today";
            case 'tours': return "Discover tours, tickets and travel experiences";
            default: return "The best flight offers from anywhere, to everywhere";
        }
    };

    const swapCities = () => {
        const temp = fromCity;
        setFromCity(toCity);
        setToCity(temp);
    };

    return (
        <div
            className="relative min-h-[520px] flex flex-col justify-start pt-8 pb-16 px-4"
            style={{
                backgroundImage: getBgImage(),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transition: 'background-image 0.5s ease-in-out'
            }}
        >
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#05203c]/60 via-[#05203c]/40 to-[#05203c]/70 z-0" />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto">
                {/* Headline */}
                <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight drop-shadow-lg max-w-3xl">
                    {getHeadline()}
                </h1>

                {/* Search Widget Container */}
                <div className="bg-[#05203c] rounded-2xl shadow-2xl p-5 sm:p-6 border border-white/10">

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        <button
                            onClick={() => onTabChange('flights')}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'flights'
                                    ? 'bg-[#0770e3] text-white shadow-lg'
                                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            <PlaneIcon />
                            <span>Flights</span>
                        </button>
                        <button
                            onClick={() => onTabChange('hotels')}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'hotels'
                                    ? 'bg-[#0770e3] text-white shadow-lg'
                                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            <HotelIcon />
                            <span>Hotels</span>
                        </button>
                        <button
                            onClick={() => onTabChange('tours')}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'tours'
                                    ? 'bg-[#0770e3] text-white shadow-lg'
                                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            <ToursIcon />
                            <span>Tours & Tickets</span>
                        </button>
                    </div>

                    {/* FLIGHTS FORM */}
                    {activeTab === 'flights' && (
                        <div className="space-y-4">
                            {/* Trip Type Row */}
                            <div className="flex flex-wrap gap-3 text-white/90 text-sm">
                                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                                    <span>Return</span>
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                </button>
                                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                                    <span>1 Adult, Economy</span>
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                </button>
                            </div>

                            {/* Search Fields */}
                            <div className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
                                {/* From */}
                                <div className="flex-1 min-w-0 relative border-b lg:border-b-0 lg:border-r border-gray-200">
                                    <div className="p-4">
                                        <label className="block text-xs font-semibold text-gray-500 mb-1">From</label>
                                        <input
                                            type="text"
                                            value={fromCity}
                                            onChange={(e) => setFromCity(e.target.value)}
                                            className="w-full text-lg font-bold text-[#05203c] outline-none bg-transparent truncate"
                                            placeholder="Country, city or airport"
                                        />
                                    </div>
                                    {/* Swap Button */}
                                    <button
                                        onClick={swapCities}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 bg-white border-2 border-gray-200 rounded-full p-2 shadow-md hover:border-[#0770e3] hover:text-[#0770e3] transition-all hidden lg:flex"
                                    >
                                        <SwapIcon />
                                    </button>
                                </div>

                                {/* To */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200">
                                    <div className="p-4">
                                        <label className="block text-xs font-semibold text-gray-500 mb-1">To</label>
                                        <input
                                            type="text"
                                            value={toCity}
                                            onChange={(e) => setToCity(e.target.value)}
                                            className="w-full text-lg font-bold text-[#05203c] outline-none bg-transparent truncate"
                                            placeholder="Country, city or airport"
                                        />
                                    </div>
                                </div>

                                {/* Depart */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200">
                                    <div className="p-4">
                                        <label className="block text-xs font-semibold text-gray-500 mb-1">Depart</label>
                                        <input
                                            type="text"
                                            className="w-full text-lg font-bold text-gray-400 outline-none bg-transparent"
                                            placeholder="Add date"
                                        />
                                    </div>
                                </div>

                                {/* Return */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200">
                                    <div className="p-4">
                                        <label className="block text-xs font-semibold text-gray-500 mb-1">Return</label>
                                        <input
                                            type="text"
                                            className="w-full text-lg font-bold text-gray-400 outline-none bg-transparent"
                                            placeholder="Add date"
                                        />
                                    </div>
                                </div>

                                {/* Search Button */}
                                <div className="p-2 lg:p-0">
                                    <button className="w-full lg:w-auto h-full min-h-[56px] lg:min-h-full bg-[#00a698] hover:bg-[#008f82] text-white text-lg font-bold px-8 py-4 lg:rounded-none lg:rounded-r-xl rounded-lg transition-colors">
                                        Search
                                    </button>
                                </div>
                            </div>

                            {/* Checkboxes */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white text-sm">
                                <label className="flex items-center gap-2.5 cursor-pointer group">
                                    <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${nearbyFrom ? 'bg-[#00a698] border-[#00a698]' : 'border-white/50 group-hover:border-white'}`}>
                                        {nearbyFrom && <CheckIcon />}
                                    </div>
                                    <input type="checkbox" checked={nearbyFrom} onChange={(e) => setNearbyFrom(e.target.checked)} className="sr-only" />
                                    <span className="font-medium">Add nearby airports</span>
                                </label>

                                <label className="flex items-center gap-2.5 cursor-pointer group">
                                    <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${directFlights ? 'bg-[#00a698] border-[#00a698]' : 'border-white/50 group-hover:border-white'}`}>
                                        {directFlights && <CheckIcon />}
                                    </div>
                                    <input type="checkbox" checked={directFlights} onChange={(e) => setDirectFlights(e.target.checked)} className="sr-only" />
                                    <span className="font-medium">Direct flights only</span>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* HOTELS FORM */}
                    {activeTab === 'hotels' && (
                        <div className="space-y-4">
                            <div className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
                                {/* Destination */}
                                <div className="flex-[2] min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200">
                                    <div className="p-4">
                                        <label className="block text-xs font-semibold text-gray-500 mb-1">Where do you want to stay?</label>
                                        <input
                                            type="text"
                                            className="w-full text-lg font-bold text-[#05203c] outline-none bg-transparent truncate"
                                            placeholder="Destination, hotel or attraction"
                                        />
                                    </div>
                                </div>

                                {/* Check-in */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200">
                                    <div className="p-4">
                                        <label className="block text-xs font-semibold text-gray-500 mb-1">Check-in</label>
                                        <input type="text" placeholder="Add date" className="w-full text-lg font-bold text-gray-400 outline-none bg-transparent" />
                                    </div>
                                </div>

                                {/* Check-out */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200">
                                    <div className="p-4">
                                        <label className="block text-xs font-semibold text-gray-500 mb-1">Check-out</label>
                                        <input type="text" placeholder="Add date" className="w-full text-lg font-bold text-gray-400 outline-none bg-transparent" />
                                    </div>
                                </div>

                                {/* Guests */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200">
                                    <div className="p-4">
                                        <label className="block text-xs font-semibold text-gray-500 mb-1">Guests and rooms</label>
                                        <div className="text-lg font-bold text-[#05203c]">1 adult, 1 room</div>
                                    </div>
                                </div>

                                {/* Search Button */}
                                <div className="p-2 lg:p-0">
                                    <button className="w-full lg:w-auto h-full min-h-[56px] lg:min-h-full bg-[#00a698] hover:bg-[#008f82] text-white text-lg font-bold px-8 py-4 lg:rounded-none lg:rounded-r-xl rounded-lg transition-colors">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TOURS FORM */}
                    {activeTab === 'tours' && (
                        <div className="space-y-4">
                            <div className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
                                {/* Destination */}
                                <div className="flex-[2] min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200">
                                    <div className="p-4">
                                        <label className="block text-xs font-semibold text-gray-500 mb-1">Where to?</label>
                                        <input
                                            type="text"
                                            className="w-full text-lg font-bold text-[#05203c] outline-none bg-transparent truncate"
                                            placeholder="Country, city or attraction"
                                        />
                                    </div>
                                </div>

                                {/* Dates */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200">
                                    <div className="p-4">
                                        <label className="block text-xs font-semibold text-gray-500 mb-1">Dates</label>
                                        <input type="text" placeholder="Add dates" className="w-full text-lg font-bold text-gray-400 outline-none bg-transparent" />
                                    </div>
                                </div>

                                {/* Search Button */}
                                <div className="p-2 lg:p-0">
                                    <button className="w-full lg:w-auto h-full min-h-[56px] lg:min-h-full bg-[#00a698] hover:bg-[#008f82] text-white text-lg font-bold px-8 py-4 lg:rounded-none lg:rounded-r-xl rounded-lg transition-colors">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
