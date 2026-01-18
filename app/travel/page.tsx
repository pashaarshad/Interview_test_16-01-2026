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

// ===== HEADER =====
function TravelHeader() {
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
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '500',
                            backgroundColor: '#0770e3',
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
function TravelHero() {
    return (
        <div style={{ position: 'relative' }}>
            {/* Background Image */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(https://www.iesonline.co.in/blog/images/travel-guide1.jpg)',
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
                    background: 'linear-gradient(to bottom, rgba(5,32,60,0.8) 0%, rgba(5,32,60,0.5) 100%)',
                }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1, padding: '100px 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
                    <h1 style={{
                        color: 'white',
                        fontSize: '52px',
                        fontWeight: '700',
                        marginBottom: '20px',
                        lineHeight: '1.2',
                    }}>
                        Your Ultimate Travel Guide
                    </h1>
                    <p style={{
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: '20px',
                        marginBottom: '40px',
                        maxWidth: '700px',
                        margin: '0 auto 40px',
                    }}>
                        Discover the world's most incredible destinations, travel tips, and insider guides curated by our experts
                    </p>

                    {/* Search Box */}
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '50px',
                        padding: '8px 8px 8px 32px',
                        maxWidth: '600px',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    }}>
                        <input
                            type="text"
                            placeholder="Where do you want to explore?"
                            style={{
                                flex: 1,
                                border: 'none',
                                outline: 'none',
                                fontSize: '16px',
                                color: '#161616',
                            }}
                        />
                        <button style={{
                            backgroundColor: '#0770e3',
                            color: 'white',
                            border: 'none',
                            padding: '16px 32px',
                            borderRadius: '50px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            fontSize: '16px',
                        }}>
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ===== TRENDING DESTINATIONS =====
function TrendingDestinations() {
    // Using single external image for all destinations
    const defaultImage = 'https://www.iesonline.co.in/blog/images/travel-guide1.jpg';

    const destinations = [
        { name: 'Bali, Indonesia', description: 'Tropical paradise with ancient temples', tag: 'Beach Paradise', image: defaultImage, color: '#10b981' },
        { name: 'Tokyo, Japan', description: 'Where tradition meets future', tag: 'Culture Hub', image: defaultImage, color: '#8b5cf6' },
        { name: 'Santorini, Greece', description: 'Iconic blue domes & sunsets', tag: 'Romantic Escape', image: defaultImage, color: '#f43f5e' },
        { name: 'Dubai, UAE', description: 'Luxury & adventure combined', tag: 'Modern Marvel', image: defaultImage, color: '#f59e0b' },
        { name: 'Maldives', description: 'Crystal clear waters await', tag: 'Island Getaway', image: defaultImage, color: '#06b6d4' },
        { name: 'Iceland', description: 'Land of fire and ice', tag: 'Nature Wonder', image: defaultImage, color: '#84cc16' },
    ];

    return (
        <div style={{ backgroundColor: 'white', padding: '64px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#161616', marginBottom: '12px' }}>
                        🔥 Trending Destinations
                    </h2>
                    <p style={{ fontSize: '16px', color: '#626971' }}>
                        The hottest places travelers are exploring right now
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    {destinations.map((dest, i) => (
                        <div key={i} style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            position: 'relative',
                            height: '280px',
                            backgroundImage: `url(${dest.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'transform 0.3s ease',
                        }}>
                            {/* Overlay */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)',
                            }} />

                            {/* Tag */}
                            <span style={{
                                position: 'absolute',
                                top: '16px',
                                left: '16px',
                                backgroundColor: dest.color,
                                color: 'white',
                                padding: '6px 12px',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: '600',
                            }}>
                                {dest.tag}
                            </span>

                            {/* Content */}
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '20px',
                                right: '20px',
                                color: 'white',
                            }}>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '6px' }}>{dest.name}</h3>
                                <p style={{ fontSize: '14px', opacity: 0.9 }}>{dest.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ===== TRAVEL CATEGORIES =====
function TravelCategories() {
    const categories = [
        { icon: '🏖️', title: 'Beach Holidays', count: '1,200+ guides', color: '#dbeafe' },
        { icon: '🏔️', title: 'Mountain Adventures', count: '800+ guides', color: '#dcfce7' },
        { icon: '🏛️', title: 'Cultural Experiences', count: '950+ guides', color: '#fef3c7' },
        { icon: '🍜', title: 'Food & Culinary', count: '650+ guides', color: '#fee2e2' },
        { icon: '🎢', title: 'Theme Parks', count: '320+ guides', color: '#f3e8ff' },
        { icon: '🌿', title: 'Eco Tourism', count: '480+ guides', color: '#d1fae5' },
        { icon: '💑', title: 'Honeymoon Spots', count: '550+ guides', color: '#fce7f3' },
        { icon: '👨‍👩‍👧‍👦', title: 'Family Friendly', count: '720+ guides', color: '#e0e7ff' },
    ];

    return (
        <div style={{ backgroundColor: '#f1f2f8', padding: '64px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#161616', marginBottom: '12px' }}>
                        Explore by Category
                    </h2>
                    <p style={{ fontSize: '16px', color: '#626971' }}>
                        Find the perfect trip for every type of traveler
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                    {categories.map((cat, i) => (
                        <div key={i} style={{
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            padding: '24px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                        }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                backgroundColor: cat.color,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '28px',
                                margin: '0 auto 16px',
                            }}>
                                {cat.icon}
                            </div>
                            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#161616', marginBottom: '4px' }}>
                                {cat.title}
                            </h3>
                            <p style={{ fontSize: '13px', color: '#0770e3' }}>{cat.count}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ===== TRAVEL TIPS =====
function TravelTips() {
    const tips = [
        {
            icon: '💳',
            title: 'Smart Money Tips',
            description: 'Use travel cards, avoid airport currency exchange, and always have some local cash for emergencies.',
        },
        {
            icon: '📱',
            title: 'Essential Apps',
            description: 'Download offline maps, translation apps, and your airline apps before you travel.',
        },
        {
            icon: '🧳',
            title: 'Packing Hacks',
            description: 'Roll clothes instead of folding, use packing cubes, and always carry essentials in your hand luggage.',
        },
        {
            icon: '🏥',
            title: 'Health & Safety',
            description: 'Get travel insurance, check vaccination requirements, and carry a basic first aid kit.',
        },
    ];

    return (
        <div style={{ backgroundColor: 'white', padding: '64px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#161616', marginBottom: '12px' }}>
                        💡 Pro Travel Tips
                    </h2>
                    <p style={{ fontSize: '16px', color: '#626971' }}>
                        Expert advice to make your journey smoother
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                    {tips.map((tip, i) => (
                        <div key={i} style={{
                            backgroundColor: '#f8fafc',
                            borderRadius: '16px',
                            padding: '28px',
                            textAlign: 'center',
                            border: '1px solid #e2e8f0',
                        }}>
                            <div style={{ fontSize: '40px', marginBottom: '16px' }}>{tip.icon}</div>
                            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#161616', marginBottom: '12px' }}>
                                {tip.title}
                            </h3>
                            <p style={{ fontSize: '14px', color: '#626971', lineHeight: '1.6' }}>
                                {tip.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ===== FEATURED ARTICLES =====
function FeaturedArticles() {
    // Using single external image for all articles
    const defaultImage = 'https://www.iesonline.co.in/blog/images/travel-guide1.jpg';

    const articles = [
        {
            title: '10 Hidden Gems in Southeast Asia You Must Visit',
            category: 'Adventure',
            readTime: '8 min read',
            image: defaultImage,
            author: 'Sarah Chen'
        },
        {
            title: 'The Ultimate Guide to Solo Female Travel',
            category: 'Tips & Advice',
            readTime: '12 min read',
            image: defaultImage,
            author: 'Maya Rodriguez'
        },
        {
            title: 'Budget-Friendly European Road Trips',
            category: 'Budget Travel',
            readTime: '10 min read',
            image: defaultImage,
            author: 'James Wilson'
        },
        {
            title: 'Best Street Food Markets Around the World',
            category: 'Food & Culture',
            readTime: '7 min read',
            image: defaultImage,
            author: 'Priya Patel'
        },
    ];

    return (
        <div style={{ backgroundColor: '#f1f2f8', padding: '64px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                    <div>
                        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#161616', marginBottom: '8px' }}>
                            📚 Featured Articles
                        </h2>
                        <p style={{ fontSize: '16px', color: '#626971' }}>
                            Stories and insights from our travel experts
                        </p>
                    </div>
                    <button style={{
                        backgroundColor: '#05203c',
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '14px',
                    }}>
                        View All Articles →
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                    {articles.map((article, i) => (
                        <div key={i} style={{
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            display: 'flex',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                        }}>
                            <div style={{
                                width: '200px',
                                height: '180px',
                                backgroundColor: '#ddd',
                                backgroundImage: `url(${article.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                flexShrink: 0,
                            }} />
                            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <span style={{
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    color: '#0770e3',
                                    textTransform: 'uppercase',
                                    marginBottom: '8px',
                                }}>
                                    {article.category}
                                </span>
                                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#161616', marginBottom: '12px', lineHeight: '1.4' }}>
                                    {article.title}
                                </h3>
                                <div style={{ fontSize: '13px', color: '#626971' }}>
                                    By {article.author} · {article.readTime}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ===== TRAVEL STATS =====
function TravelStats() {
    const stats = [
        { value: '195+', label: 'Countries Covered' },
        { value: '50K+', label: 'Travel Guides' },
        { value: '2M+', label: 'Happy Travelers' },
        { value: '10K+', label: 'Local Tips' },
    ];

    return (
        <div style={{ backgroundColor: '#05203c', padding: '64px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center' }}>
                    {stats.map((stat, i) => (
                        <div key={i}>
                            <div style={{ fontSize: '48px', fontWeight: '700', color: '#0770e3', marginBottom: '8px' }}>
                                {stat.value}
                            </div>
                            <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ===== NEWSLETTER =====
function Newsletter() {
    return (
        <div style={{ backgroundColor: 'white', padding: '64px 0' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#161616', marginBottom: '12px' }}>
                    ✈️ Get Travel Inspiration
                </h2>
                <p style={{ fontSize: '16px', color: '#626971', marginBottom: '32px' }}>
                    Subscribe to our newsletter for exclusive deals, destination guides, and travel tips delivered to your inbox.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '12px',
                    backgroundColor: '#f1f2f8',
                    borderRadius: '50px',
                    padding: '8px 8px 8px 24px',
                }}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        style={{
                            flex: 1,
                            border: 'none',
                            outline: 'none',
                            fontSize: '16px',
                            backgroundColor: 'transparent',
                            color: '#161616',
                        }}
                    />
                    <button style={{
                        backgroundColor: '#0770e3',
                        color: 'white',
                        border: 'none',
                        padding: '14px 28px',
                        borderRadius: '50px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '14px',
                    }}>
                        Subscribe
                    </button>
                </div>

                <p style={{ fontSize: '12px', color: '#626971', marginTop: '16px' }}>
                    No spam, unsubscribe anytime. Read our <a href="#" style={{ color: '#0770e3' }}>Privacy Policy</a>
                </p>
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
export default function TravelGuidePage() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#f1f2f8' }}>
            <TravelHeader />
            <TravelHero />
            <TrendingDestinations />
            <TravelCategories />
            <TravelTips />
            <FeaturedArticles />
            <TravelStats />
            <Newsletter />
            <SimpleFooter />
        </main>
    );
}
