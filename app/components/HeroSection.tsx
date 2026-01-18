'use client';

import React, { useState } from 'react';

const PlaneIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
);

const HotelIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
    </svg>
);

const CarIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
    </svg>
);

const SwapIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
    </svg>
);

const GlobeIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
);

interface HeroSectionProps {
    activeTab: 'flights' | 'hotels' | 'tours';
    onTabChange: (tab: 'flights' | 'hotels' | 'tours') => void;
}

export default function HeroSection({ activeTab, onTabChange }: HeroSectionProps) {
    const [fromCity] = useState('India (IN)');
    const [addHotel, setAddHotel] = useState(true);
    const [nearbyFrom, setNearbyFrom] = useState(false);
    const [nearbyTo, setNearbyTo] = useState(false);
    const [directFlights, setDirectFlights] = useState(false);
    const [freeCancel, setFreeCancel] = useState(false);
    const [fourStars, setFourStars] = useState(false);

    const tabs = [
        { id: 'flights' as const, label: 'Flights', icon: PlaneIcon },
        { id: 'hotels' as const, label: 'Hotels', icon: HotelIcon },
        { id: 'tours' as const, label: 'Cars', icon: CarIcon },
    ];

    const getBgImage = () => {
        switch (activeTab) {
            case 'hotels': return "url('/images/hotels/hotel-hero.jpg')";
            case 'tours': return "url('/images/tours/tour-hero.jpg')";
            default: return "none";
        }
    };

    const getHeadline = () => {
        switch (activeTab) {
            case 'hotels': return "Find the right hotel today";
            case 'tours': return "Find the best car hire deals";
            default: return "Millions of cheap flights. One simple search.";
        }
    };

    const showBgImage = activeTab !== 'flights';

    return (
        <div
            className="relative min-h-[500px] flex flex-col"
            style={{
                backgroundImage: showBgImage ? getBgImage() : 'none',
                backgroundColor: showBgImage ? 'transparent' : '#05203c',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay for hotel/tours */}
            {showBgImage && (
                <div className="absolute inset-0 bg-gradient-to-b from-[#05203c]/40 via-transparent to-[#05203c]/60" />
            )}

            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-6">
                {/* Headline */}
                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 italic max-w-2xl">
                    {getHeadline()}
                </h1>

                {/* Search Widget Container */}
                <div className="bg-[#05203c] rounded-lg p-4 sm:p-6 shadow-2xl border border-white/5">

                    {/* Tab Pills Inside Search Box */}
                    <div className="flex gap-2 mb-4">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => onTabChange(tab.id)}
                                    className={`
                                        flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-all
                                        ${isActive
                                            ? 'bg-[#00a698] text-white'
                                            : 'border border-white/50 text-white hover:border-white'
                                        }
                                    `}
                                >
                                    <Icon />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* FLIGHTS FORM */}
                    {activeTab === 'flights' && (
                        <>
                            {/* Return dropdown */}
                            <div className="mb-4">
                                <button className="flex items-center gap-2 bg-[#1a3a5c] hover:bg-[#254a6f] text-white px-4 py-2 rounded text-sm transition-colors">
                                    <span>Return</span>
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Search Fields Row */}
                            <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden mb-4">
                                {/* From */}
                                <div className="flex-1 min-w-0 relative border-b lg:border-b-0 lg:border-r border-gray-200 p-3">
                                    <label className="block text-xs text-gray-500 mb-1">From</label>
                                    <div className="text-[#05203c] font-semibold">{fromCity}</div>

                                    {/* Swap Button */}
                                    <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 bg-white border-2 border-[#05203c] rounded-full p-1.5 hover:bg-gray-50 transition-colors hidden lg:flex">
                                        <SwapIcon />
                                    </button>
                                </div>

                                {/* To */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200 p-3">
                                    <label className="block text-xs text-gray-500 mb-1">To</label>
                                    <input
                                        type="text"
                                        placeholder="Country, city or airport"
                                        className="w-full text-gray-400 outline-none bg-transparent placeholder-gray-400"
                                    />
                                </div>

                                {/* Depart */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200 p-3">
                                    <label className="block text-xs text-gray-500 mb-1">Depart</label>
                                    <div className="text-[#05203c] font-semibold">23/01/2026</div>
                                </div>

                                {/* Return */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200 p-3">
                                    <label className="block text-xs text-gray-500 mb-1">Return</label>
                                    <div className="text-[#05203c] font-semibold">30/01/2026</div>
                                </div>

                                {/* Travellers */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200 p-3">
                                    <label className="block text-xs text-gray-500 mb-1">Travellers and cabin class</label>
                                    <div className="text-[#05203c] font-semibold">1 Adult, Economy</div>
                                </div>

                                {/* Search Button */}
                                <button className="bg-[#00a698] hover:bg-[#008f82] text-white font-bold px-6 py-3 lg:py-0 transition-colors text-lg">
                                    Search
                                </button>
                            </div>

                            {/* Checkboxes Row */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white text-sm">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={nearbyFrom} onChange={(e) => setNearbyFrom(e.target.checked)} className="w-4 h-4 accent-[#00a698]" />
                                    <span>Add nearby airports</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={nearbyTo} onChange={(e) => setNearbyTo(e.target.checked)} className="w-4 h-4 accent-[#00a698]" />
                                    <span>Add nearby airports</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={directFlights} onChange={(e) => setDirectFlights(e.target.checked)} className="w-4 h-4 accent-[#00a698]" />
                                    <span>Direct flights</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer ml-auto">
                                    <input type="checkbox" checked={addHotel} onChange={(e) => setAddHotel(e.target.checked)} className="w-4 h-4 accent-[#00a698]" />
                                    <span className="text-[#00a698]">Add a hotel</span>
                                </label>
                            </div>
                        </>
                    )}

                    {/* HOTELS FORM */}
                    {activeTab === 'hotels' && (
                        <>
                            {/* Search Fields Row */}
                            <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden mb-4">
                                {/* Destination */}
                                <div className="flex-[2] min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200 p-3">
                                    <label className="block text-xs text-gray-500 mb-1">Where do you want to go?</label>
                                    <input
                                        type="text"
                                        placeholder="Enter a destination or hotel name"
                                        className="w-full text-gray-400 outline-none bg-transparent placeholder-gray-400"
                                    />
                                </div>

                                {/* Check-in */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200 p-3">
                                    <label className="block text-xs text-gray-500 mb-1">Check-in</label>
                                    <div className="text-[#05203c] font-semibold">25/01/2026</div>
                                </div>

                                {/* Check-out */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200 p-3">
                                    <label className="block text-xs text-gray-500 mb-1">Check-out</label>
                                    <div className="text-[#05203c] font-semibold">26/01/2026</div>
                                </div>

                                {/* Guests */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200 p-3">
                                    <label className="block text-xs text-gray-500 mb-1">Guests and rooms</label>
                                    <div className="text-[#05203c] font-semibold">2 adults, 1 room</div>
                                </div>

                                {/* Search Button */}
                                <button className="bg-[#00a698] hover:bg-[#008f82] text-white font-bold px-6 py-3 lg:py-0 transition-colors text-lg">
                                    Search
                                </button>
                            </div>

                            {/* Checkboxes Row */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white text-sm">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={freeCancel} onChange={(e) => setFreeCancel(e.target.checked)} className="w-4 h-4 accent-[#00a698]" />
                                    <span>Free cancellation</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={fourStars} onChange={(e) => setFourStars(e.target.checked)} className="w-4 h-4 accent-[#00a698]" />
                                    <span>4 stars +</span>
                                </label>
                            </div>
                        </>
                    )}

                    {/* CARS/TOURS FORM */}
                    {activeTab === 'tours' && (
                        <>
                            {/* Search Fields Row */}
                            <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden mb-4">
                                {/* Pick-up */}
                                <div className="flex-[2] min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200 p-3">
                                    <label className="block text-xs text-gray-500 mb-1">Pick-up location</label>
                                    <input
                                        type="text"
                                        placeholder="City or airport"
                                        className="w-full text-gray-400 outline-none bg-transparent placeholder-gray-400"
                                    />
                                </div>

                                {/* Pick-up Date */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200 p-3">
                                    <label className="block text-xs text-gray-500 mb-1">Pick-up</label>
                                    <div className="text-[#05203c] font-semibold">25/01/2026, 10:00</div>
                                </div>

                                {/* Drop-off Date */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200 p-3">
                                    <label className="block text-xs text-gray-500 mb-1">Drop-off</label>
                                    <div className="text-[#05203c] font-semibold">28/01/2026, 10:00</div>
                                </div>

                                {/* Driver Age */}
                                <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-gray-200 p-3">
                                    <label className="block text-xs text-gray-500 mb-1">Driver&apos;s age</label>
                                    <div className="text-[#05203c] font-semibold">30</div>
                                </div>

                                {/* Search Button */}
                                <button className="bg-[#00a698] hover:bg-[#008f82] text-white font-bold px-6 py-3 lg:py-0 transition-colors text-lg">
                                    Search
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* Quick Access Buttons - Only on Flights */}
                {activeTab === 'flights' && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                        <button className="flex items-center gap-3 bg-[#1a3a5c] hover:bg-[#254a6f] text-white px-5 py-4 rounded-lg transition-colors">
                            <HotelIcon />
                            <span className="font-medium">Hotels</span>
                        </button>
                        <button className="flex items-center gap-3 bg-[#1a3a5c] hover:bg-[#254a6f] text-white px-5 py-4 rounded-lg transition-colors">
                            <CarIcon />
                            <span className="font-medium">Car hire</span>
                        </button>
                        <button className="flex items-center gap-3 bg-[#1a3a5c] hover:bg-[#254a6f] text-white px-5 py-4 rounded-lg transition-colors">
                            <GlobeIcon />
                            <span className="font-medium">Explore everywhere</span>
                        </button>
                    </div>
                )}
            </div>

            {/* Home Bar Indicator (decorative) */}
            {activeTab === 'flights' && (
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-[#03152a] to-[#05203c]" />
            )}
        </div>
    );
}
