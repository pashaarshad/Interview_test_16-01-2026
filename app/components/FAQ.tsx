'use client';

import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const ChevronDown = ({ isOpen }: { isOpen: boolean }) => (
    <svg
        className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M7 10l5 5 5-5z" />
    </svg>
);

export default function FAQ() {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const leftColumn: FAQItem[] = [
        { question: "How does Skyscanner work?", answer: "Skyscanner searches millions of flights, hotels, and car hire deals to find you the best prices." },
        { question: "How can I find the cheapest flight using Skyscanner?", answer: "Use our 'Everywhere' search to find the cheapest destinations." },
        { question: "Do I book my flight with Skyscanner?", answer: "Skyscanner is a search engine - we redirect you to their site to complete your booking." },
        { question: "What happens after I have booked my flight?", answer: "You'll receive a confirmation email from the airline or travel agent." },
    ];

    const rightColumn: FAQItem[] = [
        { question: "Does Skyscanner do hotels too?", answer: "Yes! Skyscanner searches and compares hotel deals from hundreds of travel sites." },
        { question: "What about car hire?", answer: "We compare car hire prices from all the major brands and local suppliers." },
        { question: "Can I book a flexible flight ticket?", answer: "Many airlines offer flexible tickets. Look for the 'flexible' tag." },
        { question: "Can I book flights that emit less CO₂?", answer: "Look for our 'Greener choice' labels on flights that emit less CO₂." },
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

    const renderItem = (item: FAQItem, index: number) => (
        <div key={index} className="border-b border-gray-200">
            <button
                onClick={() => toggleItem(index)}
                className="w-full py-4 flex items-center justify-between text-left hover:text-[#0770e3] transition-colors"
            >
                <span className="text-[#05203c] font-medium text-sm pr-4">{item.question}</span>
                <ChevronDown isOpen={openItems.has(index)} />
            </button>
            {openItems.has(index) && (
                <div className="pb-4 text-gray-600 text-sm">{item.answer}</div>
            )}
        </div>
    );

    return (
        <div className="bg-white py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-xl font-bold text-[#05203c] mb-6">
                    Booking flights with Skyscanner
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <div>{leftColumn.map((item, i) => renderItem(item, i))}</div>
                    <div>{rightColumn.map((item, i) => renderItem(item, i + 10))}</div>
                </div>
            </div>
        </div>
    );
}
