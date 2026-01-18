import React from 'react';

// Mock Data based on the reference image "Flight deals from India"
const deals = [
    {
        city: "Salem",
        country: "India",
        date: "Mon, 26 Jan",
        price: "₹ 1,878",
        image: "/images/flights/deal-india.jpg",
        airline: "IndiGo",
        direct: true
    },
    {
        city: "Bangkok",
        country: "Thailand",
        date: "Mon, 2 Mar",
        price: "₹ 12,600",
        image: "/images/flights/deal-bangkok.jpg",
        airline: "Thai AirAsia",
        direct: true
    },
    {
        city: "Kuala Lumpur",
        country: "Malaysia",
        date: "Wed, 18 Mar",
        price: "₹ 10,683",
        image: "/images/flights/deal-kl.jpg",
        airline: "AirAsia",
        direct: true
    },
    {
        city: "Singapore",
        country: "Singapore",
        date: "Tue, 3 Feb",
        price: "₹ 16,678",
        image: "/images/flights/deal-singapore.jpg",
        airline: "Singapore Airlines",
        direct: true
    },
    {
        city: "Dubai",
        country: "UAE",
        date: "Mon, 2 Feb",
        price: "₹ 11,482",
        image: "/images/flights/deal-dubai.jpg",
        airline: "Emirates",
        direct: true
    },
    {
        city: "Colombo",
        country: "Sri Lanka",
        date: "Thu, 29 Jan",
        price: "₹ 10,244",
        image: "/images/flights/deal-colombo.jpg",
        airline: "SriLankan",
        direct: true
    }
];

export default function FlightDeals() {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-[#05203c] text-2xl sm:text-3xl font-bold mb-2">Flight deals from India</h2>
                        <p className="text-gray-600 text-sm sm:text-base">Here are the flight deals with the lowest prices. Act fast – they all depart within the next three months.</p>
                    </div>
                    <button className="text-[#0770e3] hover:text-[#0660c3] font-semibold text-sm whitespace-nowrap transition-colors">
                        View all deals →
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {deals.map((deal, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group border border-gray-100"
                        >
                            {/* Image Section */}
                            <div className="h-44 w-full overflow-hidden relative">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${deal.image}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Direct Badge */}
                                {deal.direct && (
                                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[#05203c] text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                                        Direct
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#05203c] mb-0.5">{deal.city}</h3>
                                        <p className="text-sm text-gray-500">{deal.country}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                                    {/* Airline Badge */}
                                    <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-500 uppercase">
                                        {deal.airline.substring(0, 2)}
                                    </div>
                                    <span className="font-medium">{deal.date}</span>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <span className="text-sm text-gray-500">Round trip from</span>
                                    <span className="text-xl font-bold text-[#0770e3]">{deal.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
