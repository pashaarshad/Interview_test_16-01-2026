'use client';

import React, { useState } from 'react';

const ChevronDown = ({ isOpen }: { isOpen: boolean }) => (
    <svg
        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M7 10l5 5 5-5z" />
    </svg>
);

export default function Footer() {
    const [openSections, setOpenSections] = useState<Set<string>>(new Set());

    const toggleSection = (section: string) => {
        const newOpenSections = new Set(openSections);
        if (newOpenSections.has(section)) {
            newOpenSections.delete(section);
        } else {
            newOpenSections.add(section);
        }
        setOpenSections(newOpenSections);
    };

    const footerSections = [
        {
            title: 'Explore',
            links: ['Flights', 'Hotels', 'Car hire', 'Travel restrictions'],
        },
        {
            title: 'Company',
            links: ['About us', 'Careers', 'News', 'Sustainability'],
        },
        {
            title: 'Partners',
            links: ['Work with us', 'Travel APIs', 'Affiliate program'],
        },
        {
            title: 'Trips',
            links: ['My trips', 'Price alerts', 'Saved', 'Download app'],
        },
        {
            title: 'International Sites',
            links: ['United States', 'United Kingdom', 'Deutschland', 'España', 'France'],
        },
    ];

    return (
        <footer className="bg-[#05203c] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                    {/* Country Selector */}
                    <div className="md:col-span-1">
                        <button className="bg-[#1a3a5c] px-4 py-3 rounded-lg flex items-center gap-2 text-sm w-full justify-between hover:bg-[#254569] transition-colors">
                            <div className="flex items-center gap-2">
                                <span className="text-lg">🇮🇳</span>
                                <div className="text-left">
                                    <div className="text-xs text-gray-400">India</div>
                                    <div>English (UK) · ₹ INR</div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-sky-300 transition-colors">Help</a></li>
                            <li><a href="#" className="hover:text-sky-300 transition-colors">Privacy Settings</a></li>
                            <li><a href="#" className="hover:text-sky-300 transition-colors">Log in</a></li>
                        </ul>
                    </div>

                    {/* Policy Links */}
                    <div className="md:col-span-1">
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-sky-300 transition-colors">Cookie policy</a></li>
                            <li><a href="#" className="hover:text-sky-300 transition-colors">Privacy policy</a></li>
                            <li><a href="#" className="hover:text-sky-300 transition-colors">Terms of service</a></li>
                            <li><a href="#" className="text-[#ff7e1d] hover:text-orange-400 transition-colors">Company Details</a></li>
                        </ul>
                    </div>

                    {/* Expandable Sections */}
                    {footerSections.slice(0, 3).map((section) => (
                        <div key={section.title} className="md:col-span-1">
                            <button
                                onClick={() => toggleSection(section.title)}
                                className="flex items-center justify-between w-full md:cursor-default"
                            >
                                <span className="font-medium">{section.title}</span>
                                <span className="md:hidden">
                                    <ChevronDown isOpen={openSections.has(section.title)} />
                                </span>
                            </button>
                            <ul className={`space-y-2 text-sm mt-3 text-gray-400 ${openSections.has(section.title) || 'hidden md:block'}`}>
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
                    <p className="mb-2">Cheap flight booking from anywhere, to everywhere.</p>
                    <p>© Skyscanner Ltd 2002 – 2026</p>
                </div>
            </div>
        </footer>
    );
}
