'use client';

import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const ChevronDown = ({ isOpen }: { isOpen: boolean }) => (
    <svg
        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M7 10l5 5 5-5z" />
    </svg>
);

export default function FAQ() {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const faqItems: FAQItem[] = [
        {
            question: "How does Skyscanner work?",
            answer: "Skyscanner searches millions of flights, hotels, and car hire deals to find you the best prices. We compare prices from hundreds of airlines and travel agents to help you find the cheapest flights."
        },
        {
            question: "Does Skyscanner do hotels too?",
            answer: "Yes! Skyscanner searches and compares hotel deals from hundreds of travel sites so you can find the best hotel prices."
        },
        {
            question: "How can I find the cheapest flight using Skyscanner?",
            answer: "Use our 'Everywhere' search to find the cheapest destinations, search with flexible dates, or set up price alerts to be notified when prices drop."
        },
        {
            question: "What about car hire?",
            answer: "We compare car hire prices from all the major brands and local suppliers to help you find the best deal for your trip."
        },
        {
            question: "Do I book my flight with Skyscanner?",
            answer: "Skyscanner is a search engine - we find and compare prices from airlines and travel agents, then redirect you to their site to complete your booking."
        },
        {
            question: "Can I book a flexible flight ticket?",
            answer: "Many airlines offer flexible tickets that allow you to change your travel dates. Look for the 'flexible' tag in search results."
        },
        {
            question: "What happens after I have booked my flight?",
            answer: "After booking, you'll receive a confirmation email from the airline or travel agent. Your booking is with them, not Skyscanner."
        },
        {
            question: "Can I book flights that emit less CO₂?",
            answer: "Yes! Look for our 'Greener choice' labels on flights that emit less CO₂ compared to the average for that route."
        },
    ];

    const toggleItem = (index: number) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(index)) {
            newOpenItems.delete(index);
        } else {
            newOpenItems.add(index);
        }
        setOpenItems(newOpenItems);
    };

    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-[#05203c] mb-8">
                    Booking flights with Skyscanner
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    {faqItems.map((item, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full py-4 flex items-center justify-between text-left hover:text-[#0770e3] transition-colors group"
                            >
                                <span className="text-[#05203c] font-medium group-hover:text-[#0770e3] pr-4">
                                    {item.question}
                                </span>
                                <ChevronDown isOpen={openItems.has(index)} />
                            </button>

                            {openItems.has(index) && (
                                <div className="pb-4 text-gray-600 text-sm animate-fadeIn">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
