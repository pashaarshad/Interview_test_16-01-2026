'use client';

import React from 'react';

export default function PromoBanner() {
    return (
        <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="relative rounded-2xl overflow-hidden min-h-[350px] md:min-h-[400px] bg-cover bg-center bg-no-repeat animate-fadeIn"
                    style={{
                        backgroundImage: `url('/promo-banner.png')`,
                    }}
                >
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-12 flex flex-col justify-center h-full min-h-[350px] md:min-h-[400px]">
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-2 leading-tight">
                            Save on your<br />next stay
                        </h2>

                        <div className="mt-6">
                            <button className="bg-white text-[#05203c] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 hover-lift">
                                Go
                            </button>
                        </div>
                    </div>

                    {/* 35% off badge */}
                    <div className="absolute top-4 right-4 md:top-8 md:right-8">
                        <div className="bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-2">
                            <svg className="w-6 h-6 text-[#0770e3]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
                            </svg>
                            <span className="text-[#0770e3] text-2xl font-bold">35% off</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
