'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

// Placeholder for image - just shows description
const ImagePlaceholder = ({ prompt, className = "" }: { prompt: string; className?: string }) => (
  <div className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-center p-4 ${className}`}>
    <span className="text-xs text-gray-600 font-medium">[IMG: {prompt}]</span>
  </div>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'tours'>('flights');

  return (
    <div className="min-h-screen bg-[#05203c] font-sans">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main>
        <HeroSection activeTab={activeTab} onTabChange={setActiveTab} />

        {/* FLIGHTS CONTENT */}
        {activeTab === 'flights' && (
          <div className="bg-[#05203c] pb-16">
            {/* Extra Days Off Section */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Blue promo card */}
                <div className="bg-[#0770e3] rounded-lg p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Extra days off.</h3>
                  <p className="text-xl font-bold mb-4">Endless possibilities.</p>
                  <p className="text-white/80 mb-4">Make the most of public holidays.</p>
                  <button className="bg-white text-[#0770e3] px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
                    Plan your adventure
                  </button>
                </div>

                {/* Calendar with destination images */}
                <div className="bg-white rounded-lg p-4 overflow-hidden">
                  <div className="grid grid-cols-5 gap-2">
                    {[10, 11, 12, 13, 14].map((day) => (
                      <div key={day} className="text-center">
                        <ImagePlaceholder
                          prompt={`Travel destination ${day}`}
                          className="h-20 rounded-lg mb-1"
                        />
                        <span className="text-sm text-gray-600">{day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#1a3a5c] rounded-lg p-6 text-white">
                  <div className="w-12 h-12 bg-[#0770e3] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2z" /></svg>
                  </div>
                  <h3 className="font-bold mb-2">Explore the best flight deals</h3>
                  <p className="text-white/70 text-sm">From anywhere, to everywhere, then book with no fees</p>
                </div>
                <div className="bg-[#1a3a5c] rounded-lg p-6 text-white">
                  <div className="w-12 h-12 bg-[#00a698] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                  </div>
                  <h3 className="font-bold mb-2">Compare all your options</h3>
                  <p className="text-white/70 text-sm">From over 1000 providers, find the cheapest, fastest or lowest-emission flights</p>
                </div>
                <div className="bg-[#1a3a5c] rounded-lg p-6 text-white">
                  <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" /></svg>
                  </div>
                  <h3 className="font-bold mb-2">Find the cheapest month</h3>
                  <p className="text-white/70 text-sm">Or even day – to fly, and set up Price Alerts to book when the price is right</p>
                </div>
              </div>
            </div>

            {/* Flight Deals */}
            <div className="bg-white mt-12">
              <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
                <h2 className="text-[#05203c] text-2xl font-bold mb-2">Flight deals from India</h2>
                <p className="text-gray-600 mb-6">Here are the flight deals with the lowest prices. Act fast – they all depart within the next three months.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { city: 'Salem', country: 'India', date: 'Mon, 26 Jan', price: '₹ 1,878' },
                    { city: 'Bangkok', country: 'Thailand', date: 'Mon, 2 Mar', price: '₹ 12,600' },
                    { city: 'Kuala Lumpur', country: 'Malaysia', date: 'Wed, 18 Mar', price: '₹ 10,683' },
                    { city: 'Singapore', country: 'Singapore', date: 'Tue, 3 Feb', price: '₹ 16,678' },
                    { city: 'Dubai', country: 'UAE', date: 'Mon, 2 Feb', price: '₹ 11,482' },
                    { city: 'Colombo', country: 'Sri Lanka', date: 'Thu, 29 Jan', price: '₹ 10,244' },
                  ].map((deal, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <ImagePlaceholder prompt={`${deal.city} ${deal.country} cityscape`} className="h-40 w-full" />
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-[#05203c]">{deal.city}</h3>
                            <p className="text-sm text-gray-500">{deal.country}</p>
                          </div>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">Direct</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{deal.date}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Round trip from</span>
                          <span className="text-lg font-bold text-[#00a698]">{deal.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HOTELS CONTENT */}
        {activeTab === 'hotels' && (
          <div className="bg-white">
            {/* Compare hotels brands strip */}
            <div className="bg-[#05203c] py-4">
              <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                <p className="text-white/80 text-sm">Compare hotels across your favourite brands</p>
              </div>
            </div>

            {/* Hotels in your home country */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
              <h2 className="text-[#05203c] text-2xl font-bold mb-2">Hotels in your home country</h2>
              <p className="text-gray-600 mb-6">Your next adventure may be closer than you think. Discover hotels just beyond your doorstep.</p>

              {/* City tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Hyderabad', 'Bengaluru', 'New Delhi', 'Mumbai', 'Jaipur'].map((city, i) => (
                  <button
                    key={city}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-[#05203c] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {city}
                  </button>
                ))}
              </div>

              {/* Hotel cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Hotel O Langar Houz Near...', rating: '★★★★', score: '3.5', review: 'Good', reviews: 47, price: '₹727' },
                  { name: 'Golden Premier Luxury Hot...', rating: '★★★★★', score: '4.3', review: 'Very good', reviews: 80, price: '₹970' },
                  { name: 'Hotel Green Leaf', rating: '★★★★', score: '2.5', review: 'Average', reviews: 12, price: '₹970' },
                ].map((hotel, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative">
                      <ImagePlaceholder prompt={`Hotel room interior ${hotel.name}`} className="h-48 w-full" />
                      <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-[#05203c] text-sm">{hotel.name}</h3>
                        <span className="text-yellow-500 text-xs">{hotel.rating}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">0.5km from city centre</p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-[#05203c] text-white text-xs px-2 py-0.5 rounded">{hotel.score}</span>
                        <span className="text-sm"><strong>{hotel.review}</strong> · {hotel.reviews} reviews</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-bold text-[#00a698]">{hotel.price}</span>
                        <span className="text-xs text-gray-500 block">Per night</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Hotels for fab city breaks */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
              <h2 className="text-[#05203c] text-2xl font-bold mb-2">Hotels for fab city breaks</h2>
              <p className="text-gray-600 mb-6">The key to a great city break? A perfectly-placed base. Check out the best city centre hotels.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { city: 'Dubai', country: 'Dubai Emirate', price: '₹1,321' },
                  { city: 'Bangkok', country: 'Thailand', price: '₹645' },
                  { city: 'London', country: 'United Kingdom', price: '₹613' },
                ].map((dest, i) => (
                  <div key={i} className="relative rounded-lg overflow-hidden cursor-pointer group">
                    <ImagePlaceholder prompt={`${dest.city} skyline landmark photo`} className="h-56 w-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg">{dest.city}</h3>
                      <p className="text-sm text-white/80">{dest.country}</p>
                      <p className="text-lg font-bold text-[#00a698] mt-1">{dest.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CARS CONTENT */}
        {activeTab === 'tours' && (
          <div className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
              <h2 className="text-[#05203c] text-2xl font-bold mb-6">Popular car hire destinations</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {['Dubai', 'London', 'Goa', 'Delhi', 'Mumbai', 'Bangalore', 'Paris', 'New York'].map((city) => (
                  <div key={city} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <ImagePlaceholder prompt={`${city} car rental location`} className="h-32 w-full" />
                    <div className="p-3">
                      <h3 className="font-semibold text-[#05203c]">{city}</h3>
                      <p className="text-sm text-gray-500">Car hire from ₹1,200/day</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
