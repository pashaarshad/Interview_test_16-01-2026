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
        city: "Muscat",
        country: "Oman",
        date: "Mon, 2 Feb",
        price: "₹ 11,482",
        image: "/images/flights/deal-dubai.jpg", // Using Dubai image as proxy for Oman/Middle East
        airline: "Oman Air",
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
        image: "/images/flights/deal-kl.jpg", // Need to generate
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
        city: "Colombo",
        country: "Sri Lanka",
        date: "Thu, 29 Jan",
        price: "₹ 10,244",
        image: "/images/flights/deal-colombo.jpg", // Need to generate
        airline: "SriLankan Airlines",
        direct: true
    }
];

export default function FlightDeals() {
    return (
        <div className="bg-[#f1f2f8] py-10">
            <div className="max-w-[1248px] mx-auto px-4">
                <h2 className="text-[#161616] text-2xl font-bold mb-2">Flight deals from India</h2>
                <p className="text-[#626971] text-sm mb-6">Here are the flight deals with the lowest prices. Act fast – they all depart within the next three months.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {deals.map((deal, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden flex flex-col">
                            {/* Image Section */}
                            <div className="h-48 w-full overflow-hidden relative bg-gray-200">
                                {/* Fallback for missing image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                                    style={{ backgroundImage: `url('${deal.image}')` }}
                                ></div>
                            </div>

                            {/* Content Section */}
                            <div className="p-4 flex flex-col gap-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#161616]">{deal.city}</h3>
                                        <p className="text-xs text-[#626971]">{deal.country}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-[#161616]">
                                    {/* Mock Airline Logo */}
                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-500">
                                        AL
                                    </div>
                                    <span>{deal.date}</span>
                                    <span className="ml-auto text-xs text-[#626971]">{deal.direct ? 'Direct' : '1 stop'}</span>
                                </div>

                                <div className="mt-2 pt-3 border-t border-gray-100 flex items-center justify-end">
                                    <div className="text-right">
                                        <span className="text-xs text-[#626971] block">from</span>
                                        <span className="text-lg font-bold text-[#0770e3]">{deal.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
