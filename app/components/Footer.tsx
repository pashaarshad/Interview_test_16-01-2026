'use client';

import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#05203c] text-white">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    {/* Country Selector */}
                    <div className="col-span-2 md:col-span-1">
                        <button className="bg-[#1a3a5c] px-4 py-3 rounded-lg text-sm w-full text-left hover:bg-[#254569] transition-colors">
                            <div className="text-xs text-gray-400 mb-1">India</div>
                            <div className="text-white">English (UK) · ₹ INR</div>
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-sky-300 transition-colors">Help</a></li>
                            <li><a href="#" className="hover:text-sky-300 transition-colors">Privacy Settings</a></li>
                            <li><a href="#" className="hover:text-sky-300 transition-colors">Log in</a></li>
                        </ul>
                    </div>

                    {/* Policy Links */}
                    <div>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-sky-300 transition-colors">Cookie policy</a></li>
                            <li><a href="#" className="hover:text-sky-300 transition-colors">Privacy policy</a></li>
                            <li><a href="#" className="hover:text-sky-300 transition-colors">Terms of service</a></li>
                            <li><a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">Company Details</a></li>
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="font-medium mb-3">Explore</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Flights</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Hotels</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Car hire</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-medium mb-3">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                        </ul>
                    </div>

                    {/* Partners */}
                    <div>
                        <h4 className="font-medium mb-3">Partners</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Work with us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Travel APIs</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-400">
                    <p className="mb-1">Cheap flight booking from anywhere, to everywhere.</p>
                    <p>© Skyscanner Ltd 2002 – 2026</p>
                </div>
            </div>
        </footer>
    );
}
