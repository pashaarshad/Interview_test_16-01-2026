'use client';

import React, { useState } from 'react';

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

export default function SearchForm() {
    const [fromCity, setFromCity] = useState('Bengaluru (BLR)');
    const [toCity, setToCity] = useState('');
    const [addHotel, setAddHotel] = useState(true);
    const [nearbyFrom, setNearbyFrom] = useState(false);
    const [nearbyTo, setNearbyTo] = useState(false);
    const [directFlights, setDirectFlights] = useState(false);

    const swapCities = () => {
        const temp = fromCity;
        setFromCity(toCity);
        setToCity(temp);
    };

    return (
        <div className="bg-[#05203c] pb-10 pt-2">
            <div className="max-w-6xl mx-auto px-4">
                {/* Headline */}
                <h1 className="text-white text-2xl md:text-3xl font-semibold mb-6">
                    Millions of cheap flights. One simple search.
                </h1>

                {/* Trip Type Selector */}
                <div className="mb-4">
                    <button className="inline-flex items-center gap-2 bg-[#1a3a5c] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#254569] transition-colors">
                        <span>Return</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 10l5 5 5-5z" />
                        </svg>
                    </button>
                </div>

                {/* Search Form */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* From Field */}
                        <div className="flex-1 p-4 border-b lg:border-b-0 lg:border-r border-gray-200 relative">
                            <label className="block text-xs text-gray-500 mb-1">From</label>
                            <input
                                type="text"
                                value={fromCity}
                                onChange={(e) => setFromCity(e.target.value)}
                                className="w-full text-[#05203c] font-medium text-base focus:outline-none"
                                placeholder="Country, city or airport"
                            />
                            {/* Swap Button */}
                            <button
                                onClick={swapCities}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white border-2 border-gray-200 rounded-full p-2 hover:border-sky-500 hover:text-sky-500 transition-all shadow-md hidden lg:flex"
                            >
                                <SwapIcon />
                            </button>
                        </div>

                        {/* To Field */}
                        <div className="flex-1 p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
                            <label className="block text-xs text-gray-500 mb-1">To</label>
                            <input
                                type="text"
                                value={toCity}
                                onChange={(e) => setToCity(e.target.value)}
                                className="w-full text-[#05203c] font-medium text-base focus:outline-none"
                                placeholder="Country, city or airport"
                            />
                        </div>

                        {/* Depart Date */}
                        <div className="flex-1 p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
                            <label className="block text-xs text-gray-500 mb-1">Depart</label>
                            <input
                                type="text"
                                className="w-full text-gray-400 font-medium text-base focus:outline-none"
                                placeholder="Add date"
                            />
                        </div>

                        {/* Return Date */}
                        <div className="flex-1 p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
                            <label className="block text-xs text-gray-500 mb-1">Return</label>
                            <input
                                type="text"
                                className="w-full text-gray-400 font-medium text-base focus:outline-none"
                                placeholder="Add date"
                            />
                        </div>

                        {/* Travelers + Search */}
                        <div className="flex-1 p-4 flex items-center gap-4">
                            <div className="flex-1">
                                <label className="block text-xs text-gray-500 mb-1">Travellers and cabin class</label>
                                <span className="text-[#05203c] font-medium text-base">1 Adult, Economy</span>
                            </div>
                            <button className="bg-[#00a698] hover:bg-[#008f82] text-white font-semibold px-6 py-3 rounded-lg transition-all whitespace-nowrap">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* Checkboxes */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4 text-white text-sm">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${nearbyFrom ? 'bg-sky-500 border-sky-500' : 'border-gray-400 group-hover:border-white'}`}>
                            {nearbyFrom && <CheckIcon />}
                        </div>
                        <input type="checkbox" checked={nearbyFrom} onChange={(e) => setNearbyFrom(e.target.checked)} className="sr-only" />
                        <span>Add nearby airports</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${nearbyTo ? 'bg-sky-500 border-sky-500' : 'border-gray-400 group-hover:border-white'}`}>
                            {nearbyTo && <CheckIcon />}
                        </div>
                        <input type="checkbox" checked={nearbyTo} onChange={(e) => setNearbyTo(e.target.checked)} className="sr-only" />
                        <span>Add nearby airports</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${directFlights ? 'bg-sky-500 border-sky-500' : 'border-gray-400 group-hover:border-white'}`}>
                            {directFlights && <CheckIcon />}
                        </div>
                        <input type="checkbox" checked={directFlights} onChange={(e) => setDirectFlights(e.target.checked)} className="sr-only" />
                        <span>Direct flights</span>
                    </label>

                    <div className="lg:ml-auto">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${addHotel ? 'bg-sky-500 border-sky-500' : 'border-gray-400 group-hover:border-white'}`}>
                                {addHotel && <CheckIcon />}
                            </div>
                            <input type="checkbox" checked={addHotel} onChange={(e) => setAddHotel(e.target.checked)} className="sr-only" />
                            <span>Add a hotel</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
