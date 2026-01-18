'use client';

import React from 'react';

const SkyscannerLogo = () => (
    <svg viewBox="0 0 201 128" className="h-[25px] w-auto lg:h-[32px]" fill="white">
        <path d="M101 127.1c2.1 0 4.1-.5 6-1.6l21.9-12.6c4.4-2.5 9.5-3.6 14.6-3 26.6 3.1 45.2 8.1 50.7 9.7 1.1.3 2.4-.1 3.1-1 .9-1.1 2-2.9 2.9-5.5.8-2.5.9-4.6.8-6.1-.1-1.2-.9-2.3-2.1-2.6-8.6-2.5-46.7-12.8-97.9-12.8s-89.3 10.3-97.9 12.8c-1.2.3-2 1.4-2.1 2.6-.1 1.4 0 3.5.8 6.1.8 2.6 2 4.4 2.9 5.5.7.9 2 1.3 3.1 1 5.5-1.6 24.2-6.6 50.7-9.7 5.1-.6 10.2.5 14.6 3L95 125.5c1.9 1.1 3.9 1.6 6 1.6zM64.5 56.2c1.2 2.1 3.1 3.5 5.3 4.1 2.2.6 4.5.3 6.6-.9 2.1-1.2 3.5-3.1 4.1-5.3.6-2.2.3-4.5-.9-6.6L59.9 13.4c-.6-1.1-1.9-1.5-3.1-1.4-1.6.1-3.8.9-6.4 2.4-2.6 1.5-4.4 3-5.3 4.3-.7 1-.9 2.3-.3 3.4l19.7 34.1zm-18 24.4c2.1 1.2 4.5 1.4 6.6.9 2.1-.5 4.1-2 5.3-4.1 1.2-2.1 1.4-4.5.9-6.6-.5-2.1-2-4.1-4.1-5.3L21.1 45.9c-1.1-.6-2.4-.4-3.4.3-1.3.9-2.8 2.7-4.3 5.3-1.5 2.6-2.3 4.8-2.4 6.4-.1 1.3.4 2.5 1.4 3.1l34.1 19.6zm63.2-36.5c0 2.4-1 4.6-2.5 6.2-1.6 1.6-3.7 2.5-6.2 2.5s-4.6-1-6.2-2.5c-1.6-1.6-2.5-3.7-2.5-6.2V4.8c0-1.3.8-2.3 2-2.8C95.7 1.3 98 .9 101 .9s5.3.4 6.7 1.1c1.1.6 2 1.5 2 2.8v39.3zm27.8 12.1c-1.2 2.1-3.1 3.5-5.3 4.1-2.2.6-4.5.3-6.6-.9-2.1-1.2-3.5-3.1-4.1-5.3-.6-2.2-.3-4.5.9-6.6l19.7-34.1c.6-1.1 1.9-1.5 3.1-1.4 1.6.1 3.8.9 6.4 2.4 2.6 1.5 4.4 3 5.3 4.3.7 1 .9 2.3.3 3.4l-19.7 34.1zm18 24.4c-2.1 1.2-4.5 1.4-6.6.9-2.1-.5-4.1-2-5.3-4.1-1.2-2.1-1.4-4.5-.9-6.6.5-2.1 2-4.1 4.1-5.3l34.1-19.7c1.1-.6 2.4-.4 3.4.3 1.3.9 2.8 2.7 4.3 5.3 1.5 2.6 2.3 4.8 2.4 6.4.1 1.3-.4 2.5-1.4 3.1l-34.1 19.7z" />
    </svg>
);

const PlaneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
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

interface HeaderProps {
    activeTab: 'flights' | 'hotels' | 'tours';
    onTabChange: (tab: 'flights' | 'hotels' | 'tours') => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
    const tabs = [
        { id: 'flights' as const, label: 'Flights', icon: PlaneIcon },
        { id: 'hotels' as const, label: 'Hotels', icon: HotelIcon },
        { id: 'tours' as const, label: 'Car hire', icon: CarIcon },
    ];

    return (
        <header className="bg-[#05203c] text-white font-sans border-b border-white/10 relative z-50">
            <div className="max-w-[1248px] mx-auto px-4 sm:px-6">

                {/* Top Row: Logo & Actions */}
                <div className="h-[65px] flex items-center justify-between">
                    {/* Logo Area */}
                    <a href="/" className="flex items-center gap-3 pr-8">
                        <SkyscannerLogo />
                        <span className="text-xl font-bold tracking-tight hidden lg:block">Skyscanner</span>
                    </a>

                    {/* Right Actions */}
                    <div className="flex items-center gap-2">
                        <button className="hidden sm:block text-sm font-bold hover:bg-white/10 px-3 py-2 rounded transition-colors text-white/90">
                            Help
                        </button>

                        <button className="hidden sm:flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded transition-colors text-sm font-bold text-white/90">
                            <span className="rounded-sm overflow-hidden w-5 h-3.5 bg-gray-200 relative">
                                {/* Simple CSS flag placeholder */}
                                <span className="absolute inset-0 bg-white"></span>
                                <span className="absolute top-0 left-0 w-full h-1/3 bg-[#FF9933]"></span>
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-[#138808]"></span>
                                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#000080] rounded-full"></span>
                            </span>
                            <span>English (UK)</span>
                            <span className="text-white/40">|</span>
                            <span>INR</span>
                        </button>

                        <button className="hidden sm:flex items-center gap-2 bg-[#1a3a5c] hover:bg-[#254a6f] px-4 py-2 rounded-lg text-sm font-bold ml-2 transition-colors border border-white/10">
                            <span>Log in</span>
                        </button>

                        {/* Mobile Menu */}
                        <button className="sm:hidden p-2 text-white/90">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                    </div>
                </div>

                {/* Tab Row - Integrated into bottom of header */}
                <div className="flex gap-1 pb-1 mt-1">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => onTabChange(tab.id)}
                                className={`
                                    flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-bold transition-all relative
                                    ${isActive
                                        ? 'bg-[#00a698] text-white shadow-sm'
                                        : 'text-white hover:bg-white/10'
                                    }
                                `}
                            >
                                <Icon />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
