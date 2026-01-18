'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ===== ICONS =====
const SkyscannerLogo = () => (
    <svg viewBox="0 0 201 128" style={{ width: '32px', height: '32px' }} fill="white">
        <path d="M101 127.1c2.1 0 4.1-.5 6-1.6l21.9-12.6c4.4-2.5 9.5-3.6 14.6-3 26.6 3.1 45.2 8.1 50.7 9.7 1.1.3 2.4-.1 3.1-1 .9-1.1 2-2.9 2.9-5.5.8-2.5.9-4.6.8-6.1-.1-1.2-.9-2.3-2.1-2.6-8.6-2.5-46.7-12.8-97.9-12.8s-89.3 10.3-97.9 12.8c-1.2.3-2 1.4-2.1 2.6-.1 1.4 0 3.5.8 6.1.8 2.6 2 4.4 2.9 5.5.7.9 2 1.3 3.1 1 5.5-1.6 24.2-6.6 50.7-9.7 5.1-.6 10.2.5 14.6 3L95 125.5c1.9 1.1 3.9 1.6 6 1.6zM64.5 56.2c1.2 2.1 3.1 3.5 5.3 4.1 2.2.6 4.5.3 6.6-.9 2.1-1.2 3.5-3.1 4.1-5.3.6-2.2.3-4.5-.9-6.6L59.9 13.4c-.6-1.1-1.9-1.5-3.1-1.4-1.6.1-3.8.9-6.4 2.4-2.6 1.5-4.4 3-5.3 4.3-.7 1-.9 2.3-.3 3.4l19.7 34.1zm-18 24.4c2.1 1.2 4.5 1.4 6.6.9 2.1-.5 4.1-2 5.3-4.1 1.2-2.1 1.4-4.5.9-6.6-.5-2.1-2-4.1-4.1-5.3L21.1 45.9c-1.1-.6-2.4-.4-3.4.3-1.3.9-2.8 2.7-4.3 5.3-1.5 2.6-2.3 4.8-2.4 6.4-.1 1.3.4 2.5 1.4 3.1l34.1 19.6zm63.2-36.5c0 2.4-1 4.6-2.5 6.2-1.6 1.6-3.7 2.5-6.2 2.5s-4.6-1-6.2-2.5c-1.6-1.6-2.5-3.7-2.5-6.2V4.8c0-1.3.8-2.3 2-2.8C95.7 1.3 98 .9 101 .9s5.3.4 6.7 1.1c1.1.6 2 1.5 2 2.8v39.3zm27.8 12.1c-1.2 2.1-3.1 3.5-5.3 4.1-2.2.6-4.5.3-6.6-.9-2.1-1.2-3.5-3.1-4.1-5.3-.6-2.2-.3-4.5.9-6.6l19.7-34.1c.6-1.1 1.9-1.5 3.1-1.4 1.6.1 3.8.9 6.4 2.4 2.6 1.5 4.4 3 5.3 4.3.7 1 .9 2.3.3 3.4l-19.7 34.1zm18 24.4c-2.1 1.2-4.5 1.4-6.6.9-2.1-.5-4.1-2-5.3-4.1-1.2-2.1-1.4-4.5-.9-6.6.5-2.1 2-4.1 4.1-5.3l34.1-19.7c1.1-.6 2.4-.4 3.4.3 1.3.9 2.8 2.7 4.3 5.3 1.5 2.6 2.3 4.8 2.4 6.4.1 1.3-.4 2.5-1.4 3.1l-34.1 19.7z" />
    </svg>
);

const FlightIcon = () => (
    <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
);

const HotelIcon = () => (
    <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
    </svg>
);

const TravelIcon = () => (
    <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
);

const GlobeIcon = () => (
    <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
);

const HeartIcon = () => (
    <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

const SwapIcon = () => (
    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="#161616">
        <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
    </svg>
);

const ChevronDown = ({ rotate = false }: { rotate?: boolean }) => (
    <svg
        style={{
            width: '16px',
            height: '16px',
            transition: 'transform 0.2s ease',
            transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)'
        }}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M7 10l5 5 5-5z" />
    </svg>
);

const CalendarIcon = () => (
    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
    </svg>
);

const PriceTagIcon = () => (
    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
    </svg>
);

// ===== HEADER =====
function FlightsHeader() {
    return (
        <header style={{ backgroundColor: '#05203c', color: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'white' }}>
                        <SkyscannerLogo />
                        <span style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-0.5px' }}>Skyscanner</span>
                    </Link>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <span style={{ fontSize: '14px', cursor: 'pointer' }}>Help</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '13px' }}>
                            <span style={{ padding: '2px 6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>English (UK)</span>
                            <span>🇮🇳 India</span>
                            <span style={{ padding: '2px 6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>₹ INR</span>
                        </div>
                        <HeartIcon />
                        <button style={{
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.3)',
                            borderRadius: '8px',
                            padding: '10px 20px',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}>
                            Log in
                        </button>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div style={{ display: 'flex', gap: '8px', paddingBottom: '24px' }}>
                    <Link href="/flights" style={{ textDecoration: 'none' }}>
                        <button style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '10px 18px',
                            borderRadius: '24px',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '500',
                            backgroundColor: '#0770e3',
                            color: 'white',
                        }}>
                            <FlightIcon /> Flights
                        </button>
                    </Link>
                    <Link href="/hotels" style={{ textDecoration: 'none' }}>
                        <button style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '10px 18px',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '500',
                            backgroundColor: 'transparent',
                            color: 'white',
                        }}>
                            <HotelIcon /> Hotels
                        </button>
                    </Link>
                    <Link href="/travel" style={{ textDecoration: 'none' }}>
                        <button style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '10px 18px',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '500',
                            backgroundColor: 'transparent',
                            color: 'white',
                        }}>
                            <TravelIcon /> Travel Guide
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

// ===== HERO SECTION WITH SEARCH =====
function FlightsHero() {
    return (
        <div style={{ position: 'relative' }}>
            {/* Background Image - Large-Flights-hero-2.webp */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(/Large-Flights-hero-2.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0,
            }}>
                {/* Overlay gradient */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to right, rgba(5,32,60,0.85) 0%, rgba(5,32,60,0.6) 50%, rgba(5,32,60,0.3) 100%)',
                }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1, padding: '60px 0 100px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <h1 style={{
                        color: 'white',
                        fontSize: '42px',
                        fontWeight: '300',
                        fontStyle: 'italic',
                        marginBottom: '40px',
                        lineHeight: '1.3',
                        maxWidth: '600px',
                    }}>
                        The best flight offers from anywhere, to everywhere
                    </h1>

                    {/* Trip Type */}
                    <div style={{ marginBottom: '16px' }}>
                        <button style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.3)',
                            padding: '10px 16px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '14px',
                        }}>
                            Return <ChevronDown />
                        </button>
                    </div>

                    {/* Search Form */}
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'stretch' }}>
                            {/* From */}
                            <div style={{
                                flex: '1 1 22%',
                                padding: '16px 20px',
                                borderRight: '1px solid #e0e3e5',
                                position: 'relative',
                            }}>
                                <label style={{ display: 'block', fontSize: '12px', color: '#626971', marginBottom: '4px' }}>From</label>
                                <div style={{ fontSize: '16px', fontWeight: '700', color: '#161616' }}>India (IN)</div>

                                {/* Swap Button */}
                                <button style={{
                                    position: 'absolute',
                                    right: '-18px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'white',
                                    border: '1px solid #e0e3e5',
                                    borderRadius: '50%',
                                    width: '36px',
                                    height: '36px',
                                    cursor: 'pointer',
                                    zIndex: 10,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                                }}>
                                    <SwapIcon />
                                </button>
                            </div>

                            {/* To */}
                            <div style={{
                                flex: '1 1 22%',
                                padding: '16px 20px',
                                borderRight: '1px solid #e0e3e5',
                            }}>
                                <label style={{ display: 'block', fontSize: '12px', color: '#626971', marginBottom: '4px' }}>To</label>
                                <input
                                    type="text"
                                    placeholder="Country, city or airport"
                                    style={{
                                        width: '100%',
                                        border: 'none',
                                        outline: 'none',
                                        fontSize: '16px',
                                        color: '#626971',
                                    }}
                                />
                            </div>

                            {/* Depart */}
                            <div style={{
                                flex: '1 1 14%',
                                padding: '16px 20px',
                                borderRight: '1px solid #e0e3e5',
                            }}>
                                <label style={{ display: 'block', fontSize: '12px', color: '#626971', marginBottom: '4px' }}>Depart</label>
                                <span style={{ fontSize: '16px', fontWeight: '700', color: '#161616' }}>23/01/2026</span>
                            </div>

                            {/* Return */}
                            <div style={{
                                flex: '1 1 14%',
                                padding: '16px 20px',
                                borderRight: '1px solid #e0e3e5',
                            }}>
                                <label style={{ display: 'block', fontSize: '12px', color: '#626971', marginBottom: '4px' }}>Return</label>
                                <span style={{ fontSize: '16px', fontWeight: '700', color: '#161616' }}>30/01/2026</span>
                            </div>

                            {/* Travelers */}
                            <div style={{
                                flex: '1 1 20%',
                                padding: '16px 20px',
                            }}>
                                <label style={{ display: 'block', fontSize: '12px', color: '#626971', marginBottom: '4px' }}>Travellers and cabin class</label>
                                <span style={{ fontSize: '16px', fontWeight: '700', color: '#161616' }}>1 Adult, Economy</span>
                            </div>

                            {/* Search Button */}
                            <div style={{ display: 'flex', alignItems: 'center', padding: '12px' }}>
                                <button style={{
                                    backgroundColor: '#0770e3',
                                    color: 'white',
                                    border: 'none',
                                    padding: '16px 32px',
                                    borderRadius: '8px',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                }}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Checkboxes */}
                    <div style={{ display: 'flex', gap: '32px', marginTop: '16px', color: 'white', fontSize: '14px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                            <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: '#0770e3' }} />
                            Add nearby airports
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                            <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: '#0770e3' }} />
                            Add nearby airports
                        </label>
                    </div>
                    <div style={{ marginTop: '8px', color: 'white', fontSize: '14px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                            <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: '#0770e3' }} />
                            Direct flights
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ===== BREADCRUMB =====
function Breadcrumb() {
    return (
        <div style={{ backgroundColor: 'white', padding: '16px 0', borderBottom: '1px solid #e0e3e5' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ display: 'flex', gap: '8px', fontSize: '14px' }}>
                    <Link href="/" style={{ color: '#0770e3', textDecoration: 'underline' }}>Home</Link>
                    <span style={{ color: '#626971' }}>›</span>
                    <span style={{ color: '#161616' }}>Flights</span>
                </div>
            </div>
        </div>
    );
}

// ===== FLIGHT FEATURES =====
function FlightFeatures() {
    const features = [
        {
            icon: <FlightIcon />,
            title: "Explore the best flight deals from anywhere, to everywhere, then book with no fees"
        },
        {
            icon: <CalendarIcon />,
            title: "Compare flight deals from over 1000 providers, and choose the cheapest, fastest or lowest-emission tickets"
        },
        {
            icon: <PriceTagIcon />,
            title: "Find the cheapest month – or even day – to fly, and set up Price Alerts to book when the price is right"
        }
    ];

    return (
        <div style={{ backgroundColor: 'white', padding: '32px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                    {features.map((feature, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                            <div style={{
                                backgroundColor: '#f1f2f8',
                                padding: '12px',
                                borderRadius: '8px',
                                color: '#161616'
                            }}>
                                {feature.icon}
                            </div>
                            <p style={{ fontSize: '14px', color: '#161616', lineHeight: '1.5', fontWeight: '500' }}>
                                {feature.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ===== FLIGHT DEALS =====
function FlightDeals() {
    // Using single image for all destinations: GettyImages-479156297.jpg
    const defaultImage = '/GettyImages-479156297.jpg';

    const deals = [
        {
            city: 'Salem',
            country: 'India',
            image: defaultImage,
            flights: [
                { date: 'Tue, 27 Jan', route: 'BLR - SXV with Alliance Air', type: 'Direct' },
                { date: 'Wed, 28 Jan', route: 'SXV - BLR with Alliance Air', type: 'Direct' }
            ],
            price: '₹ 1,978'
        },
        {
            city: 'Muscat',
            country: 'Oman',
            image: defaultImage,
            flights: [
                { date: 'Mon, 2 Feb', route: 'BLR - MCT with SalamAir', type: 'Direct' },
                { date: 'Wed, 4 Feb', route: 'MCT - BLR with SalamAir', type: 'Direct' }
            ],
            price: '₹ 11,452'
        },
        {
            city: 'Bangkok',
            country: 'Thailand',
            image: defaultImage,
            flights: [
                { date: 'Mon, 2 Mar', route: 'BLR - DMK with Thai LionAir', type: 'Direct' },
                { date: 'Thu, 19 Mar', route: 'DMK - BLR with Thai AirAsia', type: 'Direct' }
            ],
            price: '₹ 13,830'
        },
        {
            city: 'Kuala Lumpur',
            country: 'Malaysia',
            image: defaultImage,
            flights: [
                { date: 'Wed, 18 Mar', route: 'BLR - KUL with AirAsia', type: 'Direct' },
                { date: 'Mon, 23 Mar', route: 'KUL - BLR with AirAsia', type: 'Direct' }
            ],
            price: '₹ 8,500'
        },
        {
            city: 'Singapore',
            country: 'Singapore',
            image: defaultImage,
            flights: [
                { date: 'Tue, 3 Feb', route: 'BLR - SIN with IndiGo', type: 'Direct' },
                { date: 'Thu, 5 Feb', route: 'SIN - BLR with IndiGo', type: 'Direct' }
            ],
            price: '₹ 12,200'
        },
        {
            city: 'Kuwait',
            country: 'Kuwait',
            image: defaultImage,
            flights: [
                { date: 'Fri, 13 Mar', route: 'BLR - KWI with Kuwait Airways', type: 'Direct' },
                { date: 'Sun, 22 Mar', route: 'KWI - BLR with Kuwait Airways', type: 'Direct' }
            ],
            price: '₹ 15,000'
        }
    ];

    return (
        <div style={{ backgroundColor: '#f1f2f8', padding: '48px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#161616', marginBottom: '8px' }}>
                    Flight deals from India
                </h2>
                <p style={{ fontSize: '14px', color: '#626971', marginBottom: '32px' }}>
                    Here are the flight deals with the lowest prices. Act fast – they all depart within the next three months.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    {deals.map((deal, i) => (
                        <div key={i} style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                            cursor: 'pointer',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                        }}>
                            {/* Image */}
                            <div style={{ height: '140px', backgroundColor: '#ddd', position: 'relative' }}>
                                <img
                                    src={deal.image}
                                    alt={deal.city}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div style={{ padding: '16px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#161616', marginBottom: '4px' }}>{deal.city}</h3>
                                <p style={{ fontSize: '13px', color: '#626971', marginBottom: '16px' }}>{deal.country}</p>

                                {deal.flights.map((flight, fi) => (
                                    <div key={fi} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: '8px',
                                        fontSize: '13px'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <FlightIcon />
                                            <div>
                                                <div style={{ fontWeight: '600', color: '#161616' }}>{flight.date}</div>
                                                <div style={{ color: '#626971', fontSize: '11px' }}>{flight.route}</div>
                                            </div>
                                        </div>
                                        <span style={{
                                            fontSize: '12px',
                                            color: '#0770e3',
                                            backgroundColor: '#e6f2ff',
                                            padding: '4px 8px',
                                            borderRadius: '4px'
                                        }}>
                                            {flight.type}
                                        </span>
                                    </div>
                                ))}

                                <div style={{
                                    marginTop: '16px',
                                    textAlign: 'right',
                                    color: '#0770e3',
                                    fontWeight: '700',
                                    fontSize: '16px'
                                }}>
                                    from {deal.price} ›
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button style={{
                    marginTop: '32px',
                    backgroundColor: '#05203c',
                    color: 'white',
                    border: 'none',
                    padding: '14px 24px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    See more deals →
                </button>

                <p style={{
                    marginTop: '24px',
                    fontSize: '12px',
                    color: '#626971',
                    padding: '16px',
                    backgroundColor: 'white',
                    borderRadius: '8px'
                }}>
                    <strong style={{ color: '#161616' }}>ℹ️ How did we find these deals?</strong> We looked at every economy class flight from India leaving in the next three months. These fares have the biggest savings when compared to the average price. They were found in the last four days and prices are subject to change.
                </p>
            </div>
        </div>
    );
}

// ===== FAQ SECTION =====
function FlightFAQ() {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const faqs = [
        "How can I find the best flight deals?",
        "How can I find the best last minute flight deals?",
        "How can I stay updated on flight deals and low fares?",
        "What happens after I've booked my flight?",
        "Where should I book a flight to right now?"
    ];

    const toggle = (i: number) => {
        const next = new Set(openItems);
        next.has(i) ? next.delete(i) : next.add(i);
        setOpenItems(next);
    };

    return (
        <div style={{ backgroundColor: 'white', padding: '48px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#161616', marginBottom: '24px' }}>
                    Finding flight deals: frequently asked questions
                </h2>

                <div>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{ borderBottom: '1px solid #e0e3e5' }}>
                            <button
                                onClick={() => toggle(i)}
                                style={{
                                    width: '100%',
                                    padding: '20px 0',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                }}
                            >
                                <span style={{ color: '#161616', fontWeight: '400', fontSize: '16px' }}>{faq}</span>
                                <ChevronDown rotate={openItems.has(i)} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ===== BEST DEALS SECTION =====
function BestDealsSection() {
    const features = [
        {
            icon: '🌍',
            title: "Search 'Everywhere', explore anywhere",
            description: "Enter your departure airport and travel dates, then hit 'Everywhere'. You'll see flights to every destination in the world, cheapest first."
        },
        {
            icon: '💳',
            title: "Pay less, go further with transparent pricing",
            description: "The cheapest flight deals. No hidden fees. No funny business. With us, the price you see when you search is what you'll pay."
        },
        {
            icon: '⏰',
            title: "Book when it's best with Price Alerts",
            description: "Found your flight, but not quite ready to book? Set up Price Alerts and we'll let you know when your flight price goes up or down."
        }
    ];

    return (
        <div style={{ backgroundColor: '#f1f2f8', padding: '64px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#161616', marginBottom: '12px' }}>
                    Looking for the best flight deals to anywhere in the world?
                </h2>
                <p style={{ fontSize: '14px', color: '#626971', marginBottom: '48px', maxWidth: '900px', margin: '0 auto 48px' }}>
                    It's easy around here. 100 million travellers use us as their go-to tool, comparing flight deals and offers from more than 1,200 airlines and travel providers. With so many options to choose from in one place, you can say hello to savings, and goodbye to stress – here's how.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
                    {features.map((feature, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '100px',
                                height: '100px',
                                margin: '0 auto 24px',
                                backgroundColor: '#e6f2ff',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '48px'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#161616', marginBottom: '12px' }}>
                                {feature.title}
                            </h3>
                            <p style={{ fontSize: '14px', color: '#626971', lineHeight: '1.6' }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ===== PEACE OF MIND SECTION =====
function PeaceOfMindSection() {
    return (
        <div style={{ backgroundColor: 'white', padding: '48px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#161616', marginBottom: '8px' }}>
                    Plan your journey with peace of mind
                </h2>
                <p style={{ fontSize: '14px', color: '#626971', marginBottom: '32px' }}>
                    We've made it our mission to help you travel with confidence and make your journey as smooth as possible.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{ fontSize: '24px' }}>🎫</div>
                        <div>
                            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#161616', marginBottom: '8px' }}>
                                Find flexible flight deals
                            </h3>
                            <p style={{ fontSize: '14px', color: '#0770e3' }}>
                                Explore flexible flight ticket deals so you won't lose out if your flight is changed or cancelled
                            </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{ fontSize: '24px' }}>🏨</div>
                        <div>
                            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#161616', marginBottom: '8px' }}>
                                Add hotels and car hire
                            </h3>
                            <p style={{ fontSize: '14px', color: '#0770e3' }}>
                                Plan your journey with hotels and car hire, and keep your bookings all in one place
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ===== MORE TRAVEL OPTIONS =====
function MoreTravelOptions() {
    const [activeTab, setActiveTab] = useState('Popular cities');
    const tabs = ['Popular cities', 'Popular countries', 'Popular flight routes', 'Top airlines'];

    const cities = [
        ['Flights to Berlin Brandenburg', 'Flights to Chicago', 'Flights to Frankfurt'],
        ['Flights to Bangkok', 'Flights to Colombo', 'Flights to Istanbul'],
        ['Flights to Jakarta', 'Flights to Dubai', 'Flights to Kuala Lumpur']
    ];

    return (
        <div style={{ backgroundColor: 'white', padding: '48px 0', borderTop: '1px solid #e0e3e5' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#161616', marginBottom: '24px' }}>
                    More travel options
                </h2>

                <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                padding: '10px 18px',
                                borderRadius: '24px',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '500',
                                backgroundColor: activeTab === tab ? '#05203c' : '#e5e7eb',
                                color: activeTab === tab ? 'white' : '#161616',
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    {cities.flat().map((city, i) => (
                        <a key={i} href="#" style={{
                            color: '#0770e3',
                            fontSize: '14px',
                            textDecoration: 'none',
                            padding: '8px 0'
                        }}>
                            {city}
                        </a>
                    ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
                    <button style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#626971' }}>‹</button>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#05203c' }}></span>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#d1d5db' }}></span>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#d1d5db' }}></span>
                    </div>
                    <button style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#161616' }}>›</button>
                </div>
            </div>
        </div>
    );
}

// ===== SIMPLE FOOTER =====
function SimpleFooter() {
    return (
        <footer style={{ backgroundColor: '#05203c', color: 'white', padding: '32px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '24px',
                    marginBottom: '24px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <SkyscannerLogo />
                        <span style={{ fontSize: '18px', fontWeight: '700' }}>Skyscanner</span>
                    </div>

                    <div style={{ display: 'flex', gap: '32px', fontSize: '14px' }}>
                        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Help</a>
                        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy</a>
                        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Terms</a>
                        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
                    </div>
                </div>

                <div style={{ textAlign: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                    <p>© Skyscanner Ltd 2002 – 2026</p>
                </div>
            </div>
        </footer>
    );
}

// ===== MAIN PAGE =====
export default function FlightsPage() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#f1f2f8' }}>
            <FlightsHeader />
            <FlightsHero />
            <Breadcrumb />
            <FlightFeatures />
            <FlightDeals />
            <FlightFAQ />
            <BestDealsSection />
            <PeaceOfMindSection />
            <MoreTravelOptions />
            <SimpleFooter />
        </main>
    );
}
