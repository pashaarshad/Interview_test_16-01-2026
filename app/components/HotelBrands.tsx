import React from 'react';

export default function HotelBrands() {
    const brands = [
        { name: "Booking.com", color: "#003580" },
        { name: "Agoda", color: "#515151" },
        { name: "Trip.com", color: "#2d5a9d" },
        { name: "Expedia", color: "#eeb700" },
        { name: "Hotels.com", color: "#d32f2f" },
    ];

    return (
        <div className="bg-white py-8 border-b border-gray-100">
            <div className="max-w-[1248px] mx-auto px-4">
                <p className="text-[#161616] font-bold text-lg mb-6">Compare hotels across your favourite brands</p>
                <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all">
                    {brands.map((brand, index) => (
                        <div key={index} className="flex items-center gap-2">
                            {/* Mock Logo Text */}
                            <span style={{ color: brand.color }} className="text-xl md:text-2xl font-black tracking-tight font-sans">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
