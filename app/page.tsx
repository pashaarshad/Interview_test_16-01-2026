'use client';

import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import FlightDeals from './components/FlightDeals';
import InternationalSites from './components/InternationalSites';
import FAQ from './components/FAQ';
import Header from './components/Header';
import Footer from './components/Footer';
import HotelBrands from './components/HotelBrands';
import HotelFeatureCards from './components/HotelFeatureCards';
import HotelFeatures from './components/HotelFeatures';
import TourFeatures from './components/TourFeatures';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'tours'>('flights');

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main>
        {/* Hero Section with Search Widget */}
        <HeroSection activeTab={activeTab} onTabChange={setActiveTab} />

        {/* FLIGHTS CONTENT */}
        {activeTab === 'flights' && (
          <>
            {/* Brand Feature Cards */}
            <FeatureCards />

            {/* Flight Deals Grid */}
            <FlightDeals />

            {/* Promo Banner / Peace of mind */}
            <div className="bg-[#f1f2f8] py-8 pb-16">
              <div className="max-w-[1248px] mx-auto px-4">
                <div className="bg-[#e5f0fd] rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#cbe1fc] shadow-sm">
                  <div className="text-center md:text-left flex-1">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                      <h3 className="text-[#05203c] text-xl font-bold">Looking for the best flight deals to anywhere in the world?</h3>
                    </div>
                    <p className="text-[#05203c] text-sm leading-relaxed max-w-2xl">
                      It's easy around here. 100 million travellers use us as their go-to tool, comparing flight deals and offers from more than 1,200 airlines and travel providers. With so many options to choose from in one place, you can say hello to savings, and goodbye to stress – here's how.
                    </p>
                  </div>

                  {/* Illustration with icons */}
                  <div className="hidden md:flex gap-8 items-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-24 h-24 relative">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-[#48a1d9] drop-shadow-md" fill="currentColor">
                          <circle cx="50" cy="50" r="48" fill="#a1d2f2" />
                          <path d="M50 2a48 48 0 0 0-48 48c0 10.4 3.3 20.1 8.9 28.1l.6.8C20.4 86.8 34.3 98 50 98s29.6-11.2 38.5-29.1l.6-.8A47.9 47.9 0 0 0 98 50c0-26.5-21.5-48-48-48z" fill="#7abcf0" />
                          <path d="M50 10c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 72c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z" fill="#fff" opacity="0.3" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-[#05203c] text-center w-24">Search 'Everywhere', explore anywhere</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className="w-24 h-24 relative flex items-center justify-center">
                        <div className="w-16 h-20 bg-[#5c8ef2] rounded-md rotate-[-5deg] shadow-lg border-2 border-white flex items-center justify-center">
                          <span className="text-white text-xs">PASSPORT</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#05203c] text-center w-24">Pay less, go further with transparent pricing</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className="w-24 h-24 relative flex items-center justify-center">
                        <svg className="w-16 h-16 text-[#e85e34]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-[#05203c] text-center w-24">Book when it's best with Price Alerts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan your journey with peace of mind */}
            <div className="bg-white py-12">
              <div className="max-w-[1248px] mx-auto px-4">
                <h2 className="text-[#161616] text-xl font-bold mb-6">Plan your journey with peace of mind</h2>
                <p className="text-[#626971] text-sm mb-8">We've made it our mission to help you travel with confidence and make your journey as smooth as possible.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-gray-100 rounded-full">
                      <svg className="w-6 h-6 text-[#161616]" viewBox="0 0 24 24" fill="currentColor"><path d="M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#05203c] text-base mb-1">Find flexible flight deals</h4>
                      <p className="text-[#626971] text-sm leading-relaxed">Explore flexible flight ticket options so you won't lose out if your flight is changed or cancelled.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-gray-100 rounded-full">
                      <svg className="w-6 h-6 text-[#161616]" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2zm0 10H5V8h14v8z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#05203c] text-base mb-1">Add hotels and car hire</h4>
                      <p className="text-[#626971] text-sm leading-relaxed">Plan your journey with hotels and car hire, and keep your bookings all in one place.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* HOTELS CONTENT */}
        {activeTab === 'hotels' && (
          <>
            <HotelBrands />
            <HotelFeatureCards />
            <HotelFeatures />
          </>
        )}

        {/* TOURS CONTENT */}
        {activeTab === 'tours' && (
          <>
            <TourFeatures />
          </>
        )}

        {/* FAQ Section */}
        <FAQ />

        {/* International Sites */}
        <InternationalSites />
      </main>

      <Footer />
    </div>
  );
}
