'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

// Minimalist placeholder for pixel-perfect look
const ImagePlaceholder = ({ prompt, className = "" }: { prompt: string; className?: string }) => (
  <div className={`bg-slate-200 flex items-center justify-center text-center overflow-hidden ${className}`}>
    {/* Abstract pattern to simulate image content without being distracting */}
    <div className="w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent" />
    <span className="absolute text-[10px] uppercase tracking-widest text-slate-500 font-bold bg-white/80 px-2 py-1 rounded-sm backdrop-blur-sm">
      {prompt}
    </span>
  </div>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'tours'>('flights');

  return (
    <div className="min-h-screen bg-white font-sans text-[#111236]">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main>
        <HeroSection activeTab={activeTab} onTabChange={setActiveTab} />

        {/* FLIGHTS CONTENT */}
        {activeTab === 'flights' && (
          <>
            {/* Extra Days Off Section - "Ditto" Styling */}
            <div className="bg-[#05203c] pb-16 pt-8">
              <div className="max-w-[1248px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                  {/* Blue promo card */}
                  <div className="bg-[#1268e3] rounded-md p-8 text-white flex flex-col justify-center h-full">
                    <h3 className="text-[28px] font-bold leading-tight mb-2">Extra days off.<br />Endless possibilities.</h3>
                    <p className="text-white/90 mb-6 text-lg">Make the most of public holidays.</p>
                    <div>
                      <button className="bg-white text-[#1268e3] px-5 py-3 rounded font-bold hover:bg-white/90 transition-colors">
                        Plan your adventure
                      </button>
                    </div>
                  </div>

                  {/* Calendar with destination images */}
                  <div className="bg-white rounded-md p-4 h-full">
                    <div className="grid grid-cols-5 gap-3 h-full">
                      {[
                        { day: 10, dest: 'Goa' },
                        { day: 11, dest: 'Dubai' },
                        { day: 12, dest: 'Paris' },
                        { day: 13, dest: 'Bali' },
                        { day: 14, dest: 'Tokyo' },
                      ].map((item, i) => (
                        <div key={item.day} className="text-center flex flex-col h-full">
                          <ImagePlaceholder
                            prompt={item.dest}
                            className={`flex-1 rounded-md mb-2 ${i % 2 === 0 ? 'bg-slate-300' : 'bg-slate-200'}`}
                          />
                          <span className="text-sm font-bold text-[#111236]">{item.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards - 3 Column */}
            <div className="bg-[#05203c] pb-16">
              <div className="max-w-[1248px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#1a3a5c] rounded-md p-6 text-white text-center sm:text-left flex flex-col sm:block items-center">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-[#00a698]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" /></svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Explore the best flight deals</h3>
                    <p className="text-white/70 text-sm leading-relaxed">From anywhere, to everywhere, then book with no fees</p>
                  </div>
                  <div className="bg-[#1a3a5c] rounded-md p-6 text-white text-center sm:text-left flex flex-col sm:block items-center">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-[#00a698]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Compare all your options</h3>
                    <p className="text-white/70 text-sm leading-relaxed">From over 1000 providers, find the cheapest, fastest or lowest-emission flights</p>
                  </div>
                  <div className="bg-[#1a3a5c] rounded-md p-6 text-white text-center sm:text-left flex flex-col sm:block items-center">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-[#00a698]" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23 1.12 4.82z" /></svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Find the cheapest month</h3>
                    <p className="text-white/70 text-sm leading-relaxed">Or even day – to fly, and set up Price Alerts to book when the price is right</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Flight Deals */}
            <div className="bg-white py-12">
              <div className="max-w-[1248px] mx-auto px-4 sm:px-6">
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <h2 className="text-[#111236] text-2xl font-bold mb-2">Flight deals from India</h2>
                    <p className="text-slate-600">Here are the flight deals with the lowest prices. Act fast – they all depart within the next three months.</p>
                  </div>
                  <button className="text-[#00a698] font-bold hover:underline whitespace-nowrap hidden sm:block">
                    View all deals →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { city: 'Salem', country: 'India', date: 'Mon, 26 Jan', price: '₹ 1,878' },
                    { city: 'Bangkok', country: 'Thailand', date: 'Mon, 2 Mar', price: '₹ 12,600' },
                    { city: 'Kuala Lumpur', country: 'Malaysia', date: 'Wed, 18 Mar', price: '₹ 10,683' },
                    { city: 'Singapore', country: 'Singapore', date: 'Tue, 3 Feb', price: '₹ 16,678' },
                    { city: 'Dubai', country: 'UAE', date: 'Mon, 2 Feb', price: '₹ 11,482' },
                    { city: 'Colombo', country: 'Sri Lanka', date: 'Thu, 29 Jan', price: '₹ 10,244' },
                  ].map((deal, i) => (
                    <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200">
                      <div className="relative h-48">
                        <ImagePlaceholder prompt={deal.city} className="w-full h-full" />
                        <div className="absolute top-0 right-0 p-3">
                          <span className="bg-white/95 text-[#111236] text-xs font-bold px-2 py-1 rounded shadow-sm">Direct</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="font-bold text-lg text-[#111236] tracking-tight">{deal.city}</h3>
                          <p className="text-sm text-slate-500">{deal.country}</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-xs text-slate-500 mb-0.5">Round trip from</p>
                            <p className="text-sm font-semibold text-[#111236]">{deal.date}</p>
                          </div>
                          <span className="text-xl font-bold text-[#111236]">{deal.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* HOTELS & CARS CONTENT placeholders for brevity in this "Ditto" push, keeping same structure */}
        {activeTab !== 'flights' && (
          <div className="bg-white py-20 text-center">
            <div className="max-w-[1248px] mx-auto px-4 sm:px-6">
              <h2 className="text-[#111236] text-3xl font-bold mb-4">
                {activeTab === 'hotels' ? 'Find your perfect stay' : 'Car hire made easy'}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto mb-12">
                {activeTab === 'hotels'
                  ? "Compare prices from top hotel booking sites to find the best deal for your trip."
                  : "Search, compare and save on car hire for your next road trip."
                }
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md">
                    <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Best Prices</h3>
                    <p className="text-sm text-slate-500">We search hundreds of sites so you don't have to.</p>
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
