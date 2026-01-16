'use client';

import React, { useState } from 'react';

const ChevronDown = ({ isOpen }: { isOpen: boolean }) => (
    <svg
        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M7 10l5 5 5-5z" />
    </svg>
);

export default function InternationalSites() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('country');

    const tabs = ['Country', 'City', 'Region', 'Airport'];

    const destinations = {
        country: [
            'Best car hire in China', 'Car hire in Oman', 'Car hire in United Arab Emirates',
            'Saudi Arabia car hire', 'Cheap car hire in Japan', 'Cheap car hire in India',
            'Cheap car hire in Thailand', 'Best car hire in Singapore', 'Sri Lanka car hire',
        ],
        city: [
            'Dubai car hire', 'Singapore car hire', 'Bangkok car hire',
            'London car hire', 'Tokyo car hire', 'Mumbai car hire',
        ],
        region: [
            'Asia car hire', 'Europe car hire', 'Middle East car hire',
        ],
        airport: [
            'Dubai Airport car hire', 'Singapore Changi car hire', 'Bangkok Suvarnabhumi car hire',
        ],
    };

    return (
        <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* International Sites Dropdown */}
                <div className="border-b border-gray-200">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full py-4 flex items-center justify-between text-left"
                    >
                        <span className="text-xl font-bold text-[#05203c]">Our international sites</span>
                        <ChevronDown isOpen={isOpen} />
                    </button>
                </div>

                {/* Start Planning Section */}
                <div className="pt-8">
                    <h2 className="text-xl font-bold text-[#05203c] mb-6">Start planning your adventure</h2>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase())}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab.toLowerCase()
                                        ? 'bg-[#05203c] text-white'
                                        : 'bg-gray-100 text-[#05203c] hover:bg-gray-200'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Destinations Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2">
                        {(destinations[activeTab as keyof typeof destinations] || destinations.country).map((dest, index) => (
                            <a
                                key={index}
                                href="#"
                                className="text-[#0770e3] hover:underline text-sm py-1"
                            >
                                {dest}
                            </a>
                        ))}
                    </div>

                    {/* Carousel Dots */}
                    <div className="flex justify-center items-center gap-2 mt-8">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                            </svg>
                        </button>
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#05203c]" />
                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                        </div>
                        <button className="p-2 text-[#0770e3] hover:text-[#0558b8]">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
