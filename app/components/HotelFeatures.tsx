import React from 'react';

// Mock Data
const homeHotels = [
    { name: "Taj Exotica Resort & Spa", location: "Goa, India", price: "₹ 18,450", img: "/images/hotels/hotel-india.jpg", stars: 5, rating: "9.2/10" },
    { name: "The Oberoi Udaivilas", location: "Udaipur, India", price: "₹ 32,000", img: "/images/hotels/hotel-hero.jpg", stars: 5, rating: "9.8/10" },
    { name: "Radisson Blu", location: "Mumbai, India", price: "₹ 7,500", img: "/images/hotels/hotel-india.jpg", stars: 4, rating: "8.5/10" },
    { name: "Grand Hyatt", location: "Kochi, India", price: "₹ 9,800", img: "/images/hotels/hotel-hero.jpg", stars: 5, rating: "9.0/10" },
];

const cityBreaks = [
    { city: "Bangkok", country: "Thailand", hotels: "2,400+ hotels", price: "₹ 1,800", img: "/images/flights/deal-bangkok.jpg" },
    { city: "Dubai", country: "United Arab Emirates", hotels: "1,800+ hotels", price: "₹ 5,200", img: "/images/flights/deal-dubai.jpg" },
    { city: "Singapore", country: "Singapore", hotels: "900+ hotels", price: "₹ 9,500", img: "/images/flights/deal-singapore.jpg" },
    { city: "Kuala Lumpur", country: "Malaysia", hotels: "1,200+ hotels", price: "₹ 2,100", img: "/images/flights/deal-kl.jpg" },
];

const StarRating = ({ count }: { count: number }) => (
    <div className="flex text-yellow-400 text-xs">
        {[...Array(count)].map((_, i) => <span key={i}>★</span>)}
    </div>
);

export default function HotelFeatures() {
    return (
        <div className="bg-[#f1f2f8] py-10 pb-20">

            {/* Section 1: Hotels in your home country */}
            <div className="max-w-[1248px] mx-auto px-4 mb-16">
                <h2 className="text-[#161616] text-2xl font-bold mb-6">Hotels in your home country</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {homeHotels.map((hotel, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer group">
                            <div className="h-40 w-full bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${hotel.img}')` }}></div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-[#161616] truncate">{hotel.name}</h3>
                                <p className="text-xs text-[#626971] mb-1">{hotel.location}</p>
                                <div className="flex items-center gap-2 mb-3">
                                    <StarRating count={hotel.stars} />
                                    <span className="text-xs font-bold text-[#05203c] bg-blue-100 px-1.5 rounded">{hotel.rating}</span>
                                </div>
                                <div className="text-right border-t border-gray-100 pt-3">
                                    <p className="text-xs text-[#626971]">from</p>
                                    <p className="text-lg font-bold text-[#161616]">{hotel.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 2: Promo Banner */}
            <div className="max-w-[1248px] mx-auto px-4 mb-16">
                <div className="relative rounded-xl overflow-hidden min-h-[300px] flex items-center">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hotels/hotel-promo.jpg')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

                    <div className="relative z-10 p-8 md:p-12 max-w-xl text-white">
                        <h2 className="text-3xl font-bold mb-4">Save on your next hotel booking</h2>
                        <p className="text-lg mb-8 text-gray-200 leading-relaxed">Book a hotel with us, and you could save up to 35% on your stay. Terms and conditions apply.</p>
                        <button className="bg-[#0770e3] hover:bg-[#0660c3] text-white font-bold py-3 px-6 rounded-lg transition-colors">
                            View deals
                        </button>
                    </div>
                </div>
            </div>

            {/* Section 3: City Breaks */}
            <div className="max-w-[1248px] mx-auto px-4">
                <h2 className="text-[#161616] text-2xl font-bold mb-6">Hotels for fab city breaks</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cityBreaks.map((city, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer flex flex-col group">
                            <div className="h-48 w-full bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${city.img}')` }}></div>
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-bold text-lg text-[#161616]">{city.city}</h3>
                                    <p className="text-sm text-[#626971]">{city.country}</p>
                                    <p className="text-xs text-[#0770e3] mt-1 font-medium">{city.hotels}</p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-gray-100 text-right">
                                    <span className="text-xs text-[#626971]">from </span>
                                    <span className="font-bold text-[#161616]">{city.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
