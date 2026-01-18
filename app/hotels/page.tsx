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

const HeartIcon = () => (
    <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

const SearchIcon = () => (
    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
);

const CompareIcon = () => (
    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
);

const StarIcon = () => (
    <svg style={{ width: '14px', height: '14px' }} viewBox="0 0 24 24" fill="#ff9332">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
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

// ===== HEADER =====
function HotelsHeader() {
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
                            border: '1px solid rgba(255,255,255,0.3)',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '500',
                            backgroundColor: 'transparent',
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
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '500',
                            backgroundColor: '#0770e3',
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

// ===== HERO SECTION =====
function HotelsHero() {
    return (
        <div style={{ position: 'relative' }}>
            {/* Background Image */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(/alexander-kaunas-xEaAoizNFV8-unsplash_CROP.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0,
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to right, rgba(5,32,60,0.7) 0%, rgba(5,32,60,0.4) 50%, rgba(5,32,60,0.2) 100%)',
                }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1, padding: '80px 0 120px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <h1 style={{
                        color: 'white',
                        fontSize: '48px',
                        fontWeight: '300',
                        fontStyle: 'italic',
                        marginBottom: '40px',
                        lineHeight: '1.2',
                    }}>
                        Find the right hotel today
                    </h1>

                    {/* Search Form */}
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                        padding: '4px',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'stretch' }}>
                            {/* Destination */}
                            <div style={{
                                flex: '1 1 40%',
                                padding: '16px 20px',
                                borderRight: '1px solid #e0e3e5',
                            }}>
                                <label style={{ display: 'block', fontSize: '12px', color: '#626971', marginBottom: '4px' }}>Where do you want to go?</label>
                                <input
                                    type="text"
                                    placeholder="Enter a destination or hotel name"
                                    style={{
                                        width: '100%',
                                        border: 'none',
                                        outline: 'none',
                                        fontSize: '16px',
                                        color: '#161616',
                                    }}
                                />
                            </div>

                            {/* Check-in */}
                            <div style={{
                                flex: '1 1 15%',
                                padding: '16px 20px',
                                borderRight: '1px solid #e0e3e5',
                            }}>
                                <label style={{ display: 'block', fontSize: '12px', color: '#626971', marginBottom: '4px' }}>Check-in</label>
                                <span style={{ fontSize: '16px', fontWeight: '700', color: '#0770e3' }}>25/01/2026</span>
                            </div>

                            {/* Check-out */}
                            <div style={{
                                flex: '1 1 15%',
                                padding: '16px 20px',
                                borderRight: '1px solid #e0e3e5',
                            }}>
                                <label style={{ display: 'block', fontSize: '12px', color: '#626971', marginBottom: '4px' }}>Check-out</label>
                                <span style={{ fontSize: '16px', fontWeight: '700', color: '#161616' }}>26/01/2026</span>
                            </div>

                            {/* Guests */}
                            <div style={{
                                flex: '1 1 20%',
                                padding: '16px 20px',
                            }}>
                                <label style={{ display: 'block', fontSize: '12px', color: '#626971', marginBottom: '4px' }}>Guests and rooms</label>
                                <span style={{ fontSize: '16px', fontWeight: '700', color: '#161616' }}>2 adults, 1 room</span>
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
                    <div style={{ display: 'flex', gap: '24px', marginTop: '16px', color: 'white', fontSize: '14px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                            <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: '#0770e3' }} />
                            Free cancellation
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                            <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: '#0770e3' }} />
                            4 stars +
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
                    <span style={{ color: '#161616' }}>Hotels</span>
                </div>
            </div>
        </div>
    );
}

// ===== HOTEL FEATURES =====
function HotelFeatures() {
    const features = [
        {
            icon: <SearchIcon />,
            title: "Find the best-value hotel for your dates, search by price or preferences"
        },
        {
            icon: <CompareIcon />,
            title: "Compare hotel deals across hundreds of providers, all in one place"
        },
        {
            icon: <HotelIcon />,
            title: "Look out for hotels with free cancellation or excellent ratings"
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
                                color: '#0770e3'
                            }}>
                                {feature.icon}
                            </div>
                            <p style={{ fontSize: '14px', color: '#0770e3', lineHeight: '1.5', fontWeight: '500' }}>
                                {feature.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ===== PROMO BANNER =====
function PromoBanner() {
    return (
        <div style={{ backgroundColor: '#f1f2f8', padding: '32px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: '320px',
                    backgroundImage: 'url(/alexander-kaunas-xEaAoizNFV8-unsplash_CROP.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    {/* Content */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: '45%',
                        background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,0) 100%)',
                        padding: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#161616', lineHeight: '1.2', marginBottom: '12px' }}>
                            Save on your next hotel booking
                        </h2>
                        <p style={{ fontSize: '14px', color: '#626971', marginBottom: '24px', lineHeight: '1.5' }}>
                            We've pulled together some top hotel deals, so you can find an amazing room at an even better price.
                        </p>
                        <button style={{
                            backgroundColor: 'white',
                            color: '#161616',
                            border: '1px solid #161616',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            width: 'fit-content',
                            fontSize: '14px',
                        }}>
                            See hotel deals
                        </button>
                    </div>

                    {/* Discount Badge */}
                    <div style={{
                        position: 'absolute',
                        top: '40px',
                        right: '120px',
                        backgroundColor: 'white',
                        padding: '20px 24px',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        textAlign: 'center',
                    }}>
                        <div style={{ color: '#0770e3', fontSize: '14px', marginBottom: '4px' }}>up to</div>
                        <div style={{ color: '#0770e3', fontSize: '32px', fontWeight: '700' }}>35% off</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ===== PARTNER BRANDS =====
function PartnerBrands() {
    const brands = ['Booking.com', 'MakeMyTrip', 'Trip.com', 'Expedia', 'Hotels.com', 'Agoda'];

    return (
        <div style={{ backgroundColor: 'white', padding: '48px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#161616', marginBottom: '24px' }}>
                    Compare hotels across your favourite brands
                </h2>
                <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
                    {brands.map((brand, i) => (
                        <span key={i} style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            color: i === 0 ? '#003580' : i === 2 ? '#2577e3' : '#161616',
                        }}>
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ===== HOTELS IN HOME COUNTRY =====
function HomeCountryHotels() {
    const [activeCity, setActiveCity] = useState('Hyderabad');
    const cities = ['Hyderabad', 'Bengaluru', 'New Delhi', 'Mumbai', 'Jaipur'];

    // Using single image for all hotels
    const defaultImage = '/alexander-kaunas-xEaAoizNFV8-unsplash_CROP.jpg';

    const hotels = [
        {
            name: 'Hotel O Langar Houz Near...',
            distance: '5.99 km from city centre',
            rating: 3.6,
            ratingText: 'Good',
            reviews: 47,
            price: '₹727',
            stars: 4,
            image: defaultImage
        },
        {
            name: 'Golden Premier Luxury Hot...',
            distance: '9.99 km from city centre',
            rating: 4.3,
            ratingText: 'Very good',
            reviews: 80,
            price: '₹970',
            stars: 5,
            image: defaultImage
        },
        {
            name: 'Hotel Green Leaf',
            distance: '12.47 km from city centre',
            rating: 2.3,
            ratingText: 'Average',
            reviews: 5,
            price: '₹970',
            stars: 5,
            image: defaultImage
        }
    ];

    return (
        <div style={{ backgroundColor: 'white', padding: '48px 0', borderTop: '1px solid #e0e3e5' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#161616', marginBottom: '8px' }}>
                    Hotels in your home country
                </h2>
                <p style={{ fontSize: '14px', color: '#626971', marginBottom: '24px' }}>
                    Your next adventure may be closer than you think. Discover hotels just beyond your doorstep.
                </p>

                {/* City Tabs */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                    {cities.map((city) => (
                        <button
                            key={city}
                            onClick={() => setActiveCity(city)}
                            style={{
                                padding: '10px 18px',
                                borderRadius: '24px',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '500',
                                backgroundColor: activeCity === city ? '#05203c' : '#e5e7eb',
                                color: activeCity === city ? 'white' : '#161616',
                            }}
                        >
                            {city}
                        </button>
                    ))}
                </div>

                {/* Hotel Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    {hotels.map((hotel, i) => (
                        <div key={i} style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                            cursor: 'pointer',
                        }}>
                            <div style={{ height: '160px', backgroundColor: '#ddd' }}>
                                <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '16px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                                    <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#161616' }}>{hotel.name}</h3>
                                    <div style={{ display: 'flex' }}>
                                        {[...Array(hotel.stars)].map((_, si) => <StarIcon key={si} />)}
                                    </div>
                                </div>
                                <p style={{ fontSize: '12px', color: '#0770e3', marginBottom: '12px' }}>{hotel.distance}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                    <span style={{ fontSize: '14px', fontWeight: '700', color: '#161616' }}>{hotel.rating}</span>
                                    <span style={{ fontSize: '14px', color: '#161616' }}>{hotel.ratingText}</span>
                                    <span style={{ fontSize: '12px', color: '#626971' }}>{hotel.reviews} reviews</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #e0e3e5', paddingTop: '12px' }}>
                                    <div style={{ textAlign: 'right' }}>
                                        <span style={{ fontSize: '20px', fontWeight: '700', color: '#ff5a1f' }}>{hotel.price}</span>
                                        <span style={{ fontSize: '12px', color: '#626971', display: 'block' }}>Per night</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
                    <button style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#626971' }}>‹</button>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#05203c' }}></span>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#d1d5db' }}></span>
                    </div>
                    <button style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#161616' }}>›</button>
                </div>
            </div>
        </div>
    );
}

// ===== CITY BREAKS =====
function CityBreaks() {
    // Using single image for all city breaks
    const defaultImage = '/alexander-kaunas-xEaAoizNFV8-unsplash_CROP.jpg';

    const cities = [
        { name: 'Dubai', country: 'United Arab Emirates', price: '₹1,321', image: defaultImage },
        { name: 'Bangkok', country: 'Thailand', price: '₹645', image: defaultImage },
        { name: 'London', country: 'United Kingdom', price: '₹613', image: defaultImage },
    ];

    return (
        <div style={{ backgroundColor: '#f1f2f8', padding: '48px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#161616', marginBottom: '8px' }}>
                    Hotels for fab city breaks
                </h2>
                <p style={{ fontSize: '14px', color: '#626971', marginBottom: '32px' }}>
                    The key to a great city break? A perfectly-placed base. Check out the best city centre hotels.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    {cities.map((city, i) => (
                        <div key={i} style={{
                            borderRadius: '12px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            backgroundColor: 'white',
                        }}>
                            <div style={{ height: '180px', backgroundImage: `url(${city.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                            <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <div>
                                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#161616' }}>{city.name}</h3>
                                    <p style={{ fontSize: '12px', color: '#626971' }}>{city.country}</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontSize: '12px', color: '#626971' }}>From</span>
                                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#ff5a1f' }}>{city.price}</div>
                                    <span style={{ fontSize: '11px', color: '#626971' }}>a night</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
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

// ===== FAST FACTS =====
function FastFacts() {
    const facts = [
        { icon: '🏨', label: 'Hotel brands to choose from', value: '60+' },
        { icon: '📍', label: 'Hotel destinations to explore', value: '5,000+' },
        { icon: '🛏️', label: 'Hotels available worldwide', value: '3.2 million' },
    ];

    return (
        <div style={{ backgroundColor: 'white', padding: '48px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#161616', marginBottom: '8px' }}>
                    Fast facts
                </h2>
                <p style={{ fontSize: '14px', color: '#626971', marginBottom: '32px' }}>
                    Sleep easy, armed with the stuff that's good to know before you go.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
                    {facts.map((fact, i) => (
                        <div key={i}>
                            <div style={{ fontSize: '24px', marginBottom: '8px' }}>{fact.icon}</div>
                            <p style={{ fontSize: '14px', color: '#626971', marginBottom: '4px' }}>{fact.label}</p>
                            <p style={{ fontSize: '28px', fontWeight: '700', color: '#161616' }}>{fact.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ===== HOTEL BENEFITS =====
function HotelBenefits() {
    const benefits = [
        {
            icon: '/hotel_deal_icon.png',
            title: 'Great hotel deals',
            description: "We search for deals with the world's leading hotels, and share our findings with you."
        },
        {
            icon: '/hotel_pricing_icon.png',
            title: 'Up-to-date pricing',
            description: "We always show you the most recent pricing overview we can find, so you know exactly what to expect."
        },
        {
            icon: '/hotel_search_icon.png',
            title: 'Precise searching',
            description: "Find hotels with swimming pools, free cancellation, and flexible booking. Or whatever matters most to you."
        }
    ];

    return (
        <div style={{ backgroundColor: '#f1f2f8', padding: '64px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', textAlign: 'center' }}>
                    {benefits.map((benefit, i) => (
                        <div key={i}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                margin: '0 auto 24px',
                                backgroundColor: i === 0 ? '#fce7f3' : i === 1 ? '#fef3c7' : '#d1fae5',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '48px'
                            }}>
                                {i === 0 ? '🏷️' : i === 1 ? '🍽️' : '⚖️'}
                            </div>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#161616', marginBottom: '12px' }}>
                                {benefit.title}
                            </h3>
                            <p style={{ fontSize: '14px', color: '#626971', lineHeight: '1.6' }}>
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ===== FAQ SECTION =====
function HotelFAQ() {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const faqs = [
        "How can I find the best-value hotels on Skyscanner?",
        "How does Skyscanner rank hotels?",
        "Do I book my hotel directly through Skyscanner?",
        "How do I know I'm getting a price that reflects the best value?",
        "How can Skyscanner help me plan my trip?",
        "Help! I have too many options. How can I decide which hotel to choose?",
        "Will booking a hotel at the last minute be cheaper?"
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
                    FAQs
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

// ===== EXPLORE MORE =====
function ExploreMore() {
    // Using single image for all articles
    const defaultImage = '/alexander-kaunas-xEaAoizNFV8-unsplash_CROP.jpg';

    const articles = [
        { title: 'The Smarter Summer Report', date: '10 June 2025', author: 'Skyscanner', image: defaultImage },
        { title: 'Expert advice: Planning your first independent trip', date: '23 April 2024', author: 'Skyscanner', image: defaultImage },
        { title: 'All you need to know about Disney locations from around the world', date: '20 March 2025', author: 'Skyscanner', image: defaultImage },
        { title: 'Are Indian cricket fans the best cricket fans in the world?', date: '16 October 2023', author: 'Noelia Guinon', image: defaultImage },
    ];

    return (
        <div style={{ backgroundColor: '#f1f2f8', padding: '48px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#161616', marginBottom: '32px' }}>
                    Plan smart, explore more
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                    {articles.map((article, i) => (
                        <div key={i} style={{ cursor: 'pointer' }}>
                            <div style={{
                                height: '200px',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                marginBottom: '12px',
                                backgroundColor: '#ddd',
                                backgroundImage: `url(${article.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }} />
                            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#161616', marginBottom: '8px' }}>
                                {article.title}
                            </h3>
                            <p style={{ fontSize: '13px', color: '#626971' }}>
                                {article.date} · <span style={{ color: '#0770e3' }}>{article.author}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ===== MORE TRAVEL OPTIONS =====
function MoreTravelOptions() {
    const [activeTab, setActiveTab] = useState('Popular cities');
    const tabs = ['Popular cities', 'Popular neighbourhoods', 'Hotels by star rating', 'Top countries'];

    const links = [
        ['Hotels in Kochi', 'Hotels in Dubai', 'Cheap hotels deals in Port Blair'],
        ['Hotels deals in Ahmedabad', 'Hotels deals in Kolkata', 'Book hotels deals in Patna'],
        ['Book hotels in Bangkok', 'Cheap hotels deals in Hanoi', 'Book hotels deals in Chandigarh']
    ];

    return (
        <div style={{ backgroundColor: 'white', padding: '48px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#161616', marginBottom: '24px' }}>
                    More travel options
                </h2>

                <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
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
                    {links.flat().map((link, i) => (
                        <a key={i} href="#" style={{
                            color: '#0770e3',
                            fontSize: '14px',
                            textDecoration: 'none',
                            padding: '8px 0'
                        }}>
                            {link}
                        </a>
                    ))}
                </div>

                {/* Pagination */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
                    <button style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#626971' }}>‹</button>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {[...Array(5)].map((_, i) => (
                            <span key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: i === 0 ? '#05203c' : '#d1d5db' }}></span>
                        ))}
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
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'white' }}>
                        <SkyscannerLogo />
                        <span style={{ fontSize: '18px', fontWeight: '700' }}>Skyscanner</span>
                    </Link>

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
export default function HotelsPage() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#f1f2f8' }}>
            <HotelsHeader />
            <HotelsHero />
            <Breadcrumb />
            <HotelFeatures />
            <PromoBanner />
            <PartnerBrands />
            <HomeCountryHotels />
            <CityBreaks />
            <FastFacts />
            <HotelBenefits />
            <HotelFAQ />
            <ExploreMore />
            <MoreTravelOptions />
            <SimpleFooter />
        </main>
    );
}
