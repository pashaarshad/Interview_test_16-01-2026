'use client';

import React, { useState } from 'react';

const SwapIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
    </svg>
);

const HotelIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
    </svg>
);

const CarIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
    </svg>
);

const GlobeIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
);

interface HeroSectionProps {
    activeTab: 'flights' | 'hotels' | 'tours';
    onTabChange: (tab: 'flights' | 'hotels' | 'tours') => void;
}

export default function HeroSection({ activeTab }: HeroSectionProps) {
    const [fromCity] = useState('India (IN)');

    // Checkbox states
    const [nearbyFrom, setNearbyFrom] = useState(false);
    const [nearbyTo, setNearbyTo] = useState(false);
    const [directFlights, setDirectFlights] = useState(false);
    const [addHotel, setAddHotel] = useState(false);

    const getHeadline = () => {
        switch (activeTab) {
            case 'hotels': return "Find the right hotel today";
            case 'tours': return "Find the best car hire deals";
            default: return "Millions of cheap flights. One simple search.";
        }
    };

    const showBgImage = activeTab !== 'flights';
    const bgStyle = showBgImage
        ? {
            backgroundImage: activeTab === 'hotels'
                ? "linear-gradient(to bottom, rgba(5,32,60,0.3), rgba(5,32,60,0.5)), url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80')"
                : "linear-gradient(to bottom, rgba(5,32,60,0.3), rgba(5,32,60,0.5)), url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
        : { backgroundColor: '#05203c' };

    return (
        <div className="relative min-h-[480px] pt-8 lg:pt-12 pb-20 flex flex-col font-sans" style={bgStyle}>
            <div className="relative z-10 w-full max-w-[1248px] mx-auto px-4 sm:px-6">

                {/* Headline - Added leading-tight to preventing overlap */}
                <h1 className="text-white text-[32px] sm:text-[44px] font-bold mb-8 leading-[1.1] tracking-tight py-2">
                    {getHeadline()}
                </h1>

                {/* FLIGHTS FORM */}
                {activeTab === 'flights' && (
                    <div className="bg-[#05203c] p-4 lg:p-6 rounded-lg shadow-xl border border-white/5">

                        {/* Return dropdown, Cabin Class */}
                        <div className="flex flex-wrap gap-4 mb-4">
                            <button className="flex items-center gap-2 text-white text-base font-bold hover:bg-white/10 px-2 py-1 rounded transition-colors">
                                <span>Return</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <button className="flex items-center gap-2 text-white text-base font-bold hover:bg-white/10 px-2 py-1 rounded transition-colors">
                                <span>1 Adult, Economy</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        {/* Search Bar - Flex Container */}
                        <div className="flex flex-col lg:flex-row gap-1">

                            {/* FROM */}
                            <div className="relative flex-[2] min-w-[200px] group">
                                <div className="bg-white rounded px-3 py-2 h-[66px] flex flex-col justify-center cursor-pointer hover:bg-gray-100 transition-colors relative z-10">
                                    <label className="text-xs text-slate-500 font-bold mb-0.5">From</label>
                                    <div className="text-[#05203c] font-bold text-lg truncate">{fromCity}</div>
                                </div>
                                {/* Swap Button */}
                                <div className="absolute top-1/2 -translate-y-1/2 -right-[18px] z-20 hidden lg:block pointer-events-none">
                                    <div className="pointer-events-auto">
                                        <button className="bg-white text-[#00a698] p-1.5 rounded-full shadow-md border border-gray-100 hover:rotate-180 transition-transform duration-300">
                                            <SwapIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* TO */}
                            <div className="flex-[2] min-w-[200px]">
                                <div className="bg-white rounded px-3 py-2 h-[66px] flex flex-col justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                                    <label className="text-xs text-slate-500 font-bold mb-0.5">To</label>
                                    <input
                                        type="text"
                                        placeholder="Country, city or airport"
                                        className="w-full text-lg font-bold text-[#05203c] placeholder-gray-400 outline-none bg-transparent"
                                    />
                                </div>
                            </div>

                            {/* DATES */}
                            <div className="flex-[2] min-w-[240px] flex gap-1">
                                {/* DEPART */}
                                <div className="flex-1 bg-white rounded px-3 py-2 h-[66px] flex flex-col justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                                    <label className="text-xs text-slate-500 font-bold mb-0.5">Depart</label>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-[#05203c] font-bold text-3xl">23</span>
                                        <span className="text-[#05203c] text-base font-medium">Jan</span>
                                    </div>
                                </div>
                                {/* RETURN */}
                                <div className="flex-1 bg-white rounded px-3 py-2 h-[66px] flex flex-col justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                                    <label className="text-xs text-slate-500 font-bold mb-0.5">Return</label>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-[#05203c] font-bold text-3xl">30</span>
                                        <span className="text-[#05203c] text-base font-medium">Jan</span>
                                    </div>
                                </div>
                            </div>

                            {/* TRAVELLERS */}
                            <div className="flex-[1.5] min-w-[180px] bg-white rounded px-3 py-2 h-[66px] hidden lg:flex flex-col justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                                <label className="text-xs text-slate-500 font-bold mb-0.5">Travellers and cabin class</label>
                                <div className="text-[#05203c] font-bold text-lg truncate">1 Adult, Economy</div>
                            </div>

                            {/* SEARCH BUTTON */}
                            <div className="min-w-[120px]">
                                <button className="w-full h-[66px] bg-[#00a698] hover:bg-[#008f82] text-white font-bold text-2xl px-6 rounded transition-colors flex items-center justify-center gap-2">
                                    Search
                                    <svg className="w-6 h-6 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </button>
                            </div>
                        </div>

                        {/* Checkboxes */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-5 text-white font-bold text-sm">
                            <label className="flex items-center gap-2 cursor-pointer select-none">
                                <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${nearbyFrom ? 'bg-[#00a698] border-[#00a698]' : 'border-white'}`}>
                                    {nearbyFrom && <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                                </div>
                                <input type="checkbox" className="hidden" checked={nearbyFrom} onChange={(e) => setNearbyFrom(e.target.checked)} />
                                <span>Add nearby airports</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer select-none">
                                <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${nearbyTo ? 'bg-[#00a698] border-[#00a698]' : 'border-white'}`}>
                                    {nearbyTo && <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                                </div>
                                <input type="checkbox" className="hidden" checked={nearbyTo} onChange={(e) => setNearbyTo(e.target.checked)} />
                                <span>Add nearby airports</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer select-none">
                                <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${directFlights ? 'bg-[#00a698] border-[#00a698]' : 'border-white'}`}>
                                    {directFlights && <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                                </div>
                                <input type="checkbox" className="hidden" checked={directFlights} onChange={(e) => setDirectFlights(e.target.checked)} />
                                <span>Direct flights</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer select-none ml-auto">
                                <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${addHotel ? 'bg-[#00a698] border-[#00a698]' : 'border-white'}`}>
                                    {addHotel && <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                                </div>
                                <input type="checkbox" className="hidden" checked={addHotel} onChange={(e) => setAddHotel(e.target.checked)} />
                                <span>Add a hotel</span>
                            </label>
                        </div>
                    </div>
                )}

                {/* HOTELS & CARS SEARCH */}
                {activeTab !== 'flights' && (
                    <div className="bg-[#05203c]/90 lg:bg-[#05203c] p-4 lg:p-1 rounded-lg">
                        <div className="flex flex-col lg:flex-row gap-1">
                            {/* Input 1 */}
                            <div className="flex-[3] bg-white rounded px-3 py-2 h-[66px] flex flex-col justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                                <label className="text-xs text-slate-500 font-bold mb-0.5">
                                    {activeTab === 'hotels' ? 'Where do you want to go?' : 'Pick-up location'}
                                </label>
                                <input
                                    type="text"
                                    placeholder={activeTab === 'hotels' ? "Enter a destination or hotel name" : "City or airport"}
                                    className="w-full text-lg font-bold text-[#05203c] placeholder-gray-400 outline-none bg-transparent"
                                />
                            </div>

                            {/* Input 2 (Dates) */}
                            <div className="flex-[2] flex gap-1">
                                <div className="flex-1 bg-white rounded px-3 py-2 h-[66px] flex flex-col justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                                    <label className="text-xs text-slate-500 font-bold mb-0.5">
                                        {activeTab === 'hotels' ? 'Check-in' : 'Pick-up date'}
                                    </label>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-[#05203c] font-bold text-2xl">25</span>
                                        <span className="text-[#05203c] text-base font-medium">Jan</span>
                                    </div>
                                </div>
                                <div className="flex-1 bg-white rounded px-3 py-2 h-[66px] flex flex-col justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                                    <label className="text-xs text-slate-500 font-bold mb-0.5">
                                        {activeTab === 'hotels' ? 'Check-out' : 'Drop-off date'}
                                    </label>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-[#05203c] font-bold text-2xl">26</span>
                                        <span className="text-[#05203c] text-base font-medium">Jan</span>
                                    </div>
                                </div>
                            </div>

                            {/* Input 3 (Guests/Age) */}
                            <div className="flex-[2] bg-white rounded px-3 py-2 h-[66px] flex flex-col justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                                <label className="text-xs text-slate-500 font-bold mb-0.5">
                                    {activeTab === 'hotels' ? 'Guests and rooms' : "Driver's age"}
                                </label>
                                <div className="text-[#05203c] font-bold text-lg truncate">
                                    {activeTab === 'hotels' ? '2 adults, 1 room' : '30'}
                                </div>
                            </div>

                            {/* Search Button */}
                            <div className="min-w-[120px]">
                                <button className="w-full h-[66px] bg-[#00a698] hover:bg-[#008f82] text-white font-bold text-2xl px-6 rounded transition-colors flex items-center justify-center gap-2">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Quick Links for Flights */}
                {activeTab === 'flights' && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
                        <button className="flex items-center gap-3 bg-[#1a3a5c] hover:bg-[#254a6f] text-white px-5 py-4 rounded-lg transition-colors group">
                            <HotelIcon />
                            <span className="font-bold text-lg group-hover:translate-x-1 transition-transform">Hotels</span>
                        </button>
                        <button className="flex items-center gap-3 bg-[#1a3a5c] hover:bg-[#254a6f] text-white px-5 py-4 rounded-lg transition-colors group">
                            <CarIcon />
                            <span className="font-bold text-lg group-hover:translate-x-1 transition-transform">Car hire</span>
                        </button>
                        <button className="flex items-center gap-3 bg-[#1a3a5c] hover:bg-[#254a6f] text-white px-5 py-4 rounded-lg transition-colors group">
                            <GlobeIcon />
                            <span className="font-bold text-lg group-hover:translate-x-1 transition-transform">Explore everywhere</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
