import React from 'react';

// Mock Data
const topDestinations = [
    { city: "Paris", country: "France", img: "/images/tours/tour-paris.jpg" },
    { city: "Bangkok", country: "Thailand", img: "/images/flights/deal-bangkok.jpg" },
    { city: "Dubai", country: "UAE", img: "/images/flights/deal-dubai.jpg" },
    { city: "Singapore", country: "Singapore", img: "/images/flights/deal-singapore.jpg" },
];

const trendingExperiences = [
    { title: "Safari Adventure", location: "Kenya", price: "₹ 12,000", rating: "4.9", img: "/images/tours/tour-hero.jpg" }, // Reuse hero for safari
    { title: "Scuba Diving", location: "Maldives", price: "₹ 8,500", rating: "4.8", img: "/images/flights/deal-colombo.jpg" }, // Reuse colombo for beach/scuba
    { title: "Desert Safari", location: "Dubai", price: "₹ 3,200", rating: "4.7", img: "/images/flights/deal-dubai.jpg" },
    { title: "City Walking Tour", location: "Paris", price: "₹ 2,500", rating: "4.6", img: "/images/tours/tour-paris.jpg" },
];

export default function TourFeatures() {
    return (
        <div className="bg-[#f1f2f8] py-10 pb-20">

            {/* Section 1: Top Destinations */}
            <div className="max-w-[1248px] mx-auto px-4 mb-16">
                <h2 className="text-[#161616] text-2xl font-bold mb-6">Top destinations for tours</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topDestinations.map((dest, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer group relative h-64">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${dest.img}')` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <h3 className="font-bold text-xl">{dest.city}</h3>
                                <p className="text-sm font-medium opacity-90">{dest.country}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 2: Trending Experiences */}
            <div className="max-w-[1248px] mx-auto px-4">
                <h2 className="text-[#161616] text-2xl font-bold mb-6">Trending experiences</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trendingExperiences.map((exp, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer flex flex-col group">
                            <div className="h-48 w-full bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${exp.img}')` }}></div>
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <p className="text-xs text-[#626971] uppercase font-bold tracking-wide">{exp.location}</p>
                                        <div className="flex items-center text-xs font-bold text-[#05203c]">
                                            <span className="text-yellow-400 mr-1">★</span> {exp.rating}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg text-[#161616] mb-2 leading-snug">{exp.title}</h3>
                                </div>
                                <div className="mt-4 pt-3 border-t border-gray-100 text-right">
                                    <span className="text-xs text-[#626971]">from </span>
                                    <span className="font-bold text-[#161616]">{exp.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
