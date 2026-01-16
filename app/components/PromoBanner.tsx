'use client';

import React from 'react';

export default function PromoBanner() {
    return (
        <div className="bg-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="relative rounded-2xl overflow-hidden h-[350px] md:h-[400px]">
                    {/* Background Image */}
                    <img
                        src="/Tablet-IN-SING-AU.jpg"
                        alt="Save on your next stay"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight max-w-xs">
                            Save on your<br />next stay
                        </h2>

                        <button className="mt-6 bg-white text-[#05203c] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all w-fit">
                            Go
                        </button>
                    </div>

                    {/* 35% off badge */}
                    <div className="absolute top-4 right-4 md:top-8 md:right-8">
                        <div className="bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-2">
                            <svg className="w-6 h-6 text-[#0770e3]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
                            </svg>
                            <span className="text-[#0770e3] text-xl md:text-2xl font-bold">35% off</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
