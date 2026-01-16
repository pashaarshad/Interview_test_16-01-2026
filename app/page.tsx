'use client';

import React, { useState, useEffect } from 'react';

// ===== RESPONSIVE STYLES =====
const ResponsiveStyles = () => (
  <style jsx global>{`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: "Relative", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      line-height: 1.5;
      color: #161616;
    }
    
    /* Animated city name */
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(10px); }
      15% { opacity: 1; transform: translateY(0); }
      85% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-10px); }
    }
    
    .animate-city {
      animation: fadeInUp 3s ease-in-out infinite;
    }
    
    /* Mobile-first responsive design */
    @media (max-width: 768px) {
      .desktop-only { display: none !important; }
      .mobile-only { display: block !important; }
      .search-form-container { flex-direction: column !important; }
      .search-field { 
        flex: 1 1 100% !important; 
        border-right: none !important;
        border-bottom: 1px solid #e0e3e5 !important;
        min-width: 100% !important;
      }
      .search-field:last-of-type { border-bottom: none !important; }
      .search-btn-container { 
        padding: 16px !important;
        width: 100% !important;
      }
      .search-btn-container button { width: 100% !important; }
      .action-buttons-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
      .promo-banner { height: 350px !important; }
      .promo-title { font-size: 28px !important; }
      .promo-subtitle { font-size: 14px !important; }
      .promo-content { width: 60% !important; }
      .faq-grid { grid-template-columns: 1fr !important; }
      .footer-main { flex-direction: column !important; gap: 32px !important; }
      .footer-right { flex-direction: column !important; gap: 24px !important; }
      .links-grid { grid-template-columns: 1fr !important; }
      .header-right { gap: 12px !important; }
      .main-container { padding: 0 16px !important; }
      .swap-btn { display: none !important; }
      .checkbox-grid { 
        flex-direction: column !important; 
        align-items: flex-start !important; 
        gap: 8px !important; 
      }
      .checkbox-right { margin-left: 0 !important; }
    }
    
    @media (max-width: 480px) {
      .promo-banner { height: 300px !important; }
      .promo-title { font-size: 24px !important; }
      .promo-content { padding: 24px !important; width: 100% !important; background: linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 80%, rgba(255,255,255,0) 100%) !important; }
    }
    
    button:focus-visible, input:focus-visible, a:focus-visible {
      outline: 2px solid #0770e3;
      outline-offset: 2px;
    }
    
    button, a {
      transition: background-color 0.2s ease, color 0.2s ease;
    }
  `}</style>
);

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

const CarIcon = () => (
  <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
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

const UserIcon = () => (
  <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const SwapIcon = () => (
  <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="#161616">
    <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
  </svg>
);

const ChevronDown = ({ rotate = false, color = 'currentColor' }: { rotate?: boolean; color?: string }) => (
  <svg
    style={{
      width: '16px',
      height: '16px',
      transition: 'transform 0.2s ease',
      transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)'
    }}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

// ===== HEADER COMPONENT =====
function Header() {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <header style={{ backgroundColor: '#05203c', color: 'white' }}>
      <div className="main-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Main Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SkyscannerLogo />
            <span style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-0.5px' }}>Skyscanner</span>
          </div>

          <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span className="desktop-only" style={{ fontSize: '14px', cursor: 'pointer' }}>Help</span>
            <GlobeIcon />
            <HeartIcon />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <UserIcon />
              <span className="desktop-only" style={{ fontSize: '14px' }}>Log in</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '8px', paddingBottom: '24px' }}>
          {[
            { id: 'flights', label: 'Flights', Icon: FlightIcon },
            { id: 'hotels', label: 'Hotels', Icon: HotelIcon },
            { id: 'cars', label: 'Cars', Icon: CarIcon },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 18px',
                borderRadius: '24px',
                border: activeTab === tab.id ? 'none' : '1px solid rgba(255,255,255,0.3)',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                backgroundColor: activeTab === tab.id ? '#0770e3' : 'transparent',
                color: 'white',
              }}
            >
              <tab.Icon />
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

// ===== SEARCH FORM COMPONENT WITH ANIMATED CITIES =====
function SearchForm() {
  const cities = ['Bengaluru (BLR)', 'Mumbai (BOM)', 'Delhi (DEL)', 'Chennai (MAA)', 'Hyderabad (HYD)', 'Kolkata (CCU)'];
  const [cityIndex, setCityIndex] = useState(0);
  const [toCity, setToCity] = useState('');
  const [addHotel, setAddHotel] = useState(true);
  const [nearbyFrom, setNearbyFrom] = useState(false);
  const [nearbyTo, setNearbyTo] = useState(false);
  const [directFlights, setDirectFlights] = useState(false);

  // Animated city switching
  useEffect(() => {
    const interval = setInterval(() => {
      setCityIndex((prev) => (prev + 1) % cities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cities.length]);

  return (
    <div style={{ backgroundColor: '#05203c', paddingBottom: '40px' }}>
      <div className="main-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Headline */}
        <h1 style={{
          color: 'white',
          fontSize: 'clamp(26px, 4vw, 36px)',
          fontWeight: '700',
          marginBottom: '28px',
          lineHeight: '1.2',
        }}>
          Millions of cheap flights. One simple search.
        </h1>

        {/* Trip Type Selector */}
        <div style={{ marginBottom: '16px' }}>
          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.4)',
            padding: '10px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '400',
          }}>
            Return <ChevronDown />
          </button>
        </div>

        {/* Search Form Container */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          border: '2px solid #05203c',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          overflow: 'visible',
        }}>
          <div className="search-form-container" style={{ display: 'flex', alignItems: 'stretch' }}>
            {/* From */}
            <div className="search-field" style={{
              flex: '1 1 22%',
              padding: '16px 20px',
              borderRight: '1px solid #e0e3e5',
              position: 'relative',
              minWidth: '170px',
            }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#626971', marginBottom: '4px' }}>From</label>
              <div
                key={cityIndex}
                className="animate-city"
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#161616',
                }}
              >
                {cities[cityIndex]}
              </div>
              {/* Swap Button */}
              <button
                className="swap-btn"
                style={{
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
                }}
              >
                <SwapIcon />
              </button>
            </div>

            {/* To */}
            <div className="search-field" style={{
              flex: '1 1 22%',
              padding: '16px 20px',
              borderRight: '1px solid #e0e3e5',
              minWidth: '170px',
            }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#626971', marginBottom: '4px' }}>To</label>
              <input
                type="text"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  fontSize: '16px',
                  fontWeight: '400',
                  color: '#626971',
                  background: 'transparent',
                }}
                placeholder="Country, city or airport"
              />
            </div>

            {/* Depart */}
            <div className="search-field" style={{
              flex: '1 1 14%',
              padding: '16px 20px',
              borderRight: '1px solid #e0e3e5',
              minWidth: '120px',
            }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#626971', marginBottom: '4px' }}>Depart</label>
              <span style={{ fontSize: '16px', fontWeight: '400', color: '#626971' }}>Add date</span>
            </div>

            {/* Return */}
            <div className="search-field" style={{
              flex: '1 1 14%',
              padding: '16px 20px',
              borderRight: '1px solid #e0e3e5',
              minWidth: '120px',
            }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#626971', marginBottom: '4px' }}>Return</label>
              <span style={{ fontSize: '16px', fontWeight: '400', color: '#626971' }}>Add date</span>
            </div>

            {/* Travelers */}
            <div className="search-field" style={{
              flex: '1 1 20%',
              padding: '16px 20px',
              minWidth: '180px',
            }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#626971', marginBottom: '4px' }}>Travellers and cabin class</label>
              <span style={{ fontSize: '16px', fontWeight: '700', color: '#161616' }}>1 Adult, Economy</span>
            </div>

            {/* Search Button */}
            <div className="search-btn-container" style={{ display: 'flex', alignItems: 'center', padding: '12px' }}>
              <button style={{
                backgroundColor: '#0770e3',
                color: 'white',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '8px',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '16px',
                whiteSpace: 'nowrap',
              }}>
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Checkboxes - First Row */}
        <div className="checkbox-grid" style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '16px',
          color: 'white',
          fontSize: '14px',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', flex: '1' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={nearbyFrom} onChange={(e) => setNearbyFrom(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: '#0770e3' }} />
              Add nearby airports
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={nearbyTo} onChange={(e) => setNearbyTo(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: '#0770e3' }} />
              Add nearby airports
            </label>
          </div>
          <div className="checkbox-right" style={{ marginLeft: 'auto' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={addHotel} onChange={(e) => setAddHotel(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: '#0770e3' }} />
              Add a hotel
            </label>
          </div>
        </div>

        {/* Second row - Direct flights */}
        <div style={{ marginTop: '8px', color: 'white', fontSize: '14px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input type="checkbox" checked={directFlights} onChange={(e) => setDirectFlights(e.target.checked)}
              style={{ width: '18px', height: '18px', accentColor: '#0770e3' }} />
            Direct flights
          </label>
        </div>
      </div>
    </div>
  );
}

// ===== ACTION BUTTONS =====
function ActionButtons() {
  return (
    <div style={{ backgroundColor: '#f1f2f8', padding: '24px 0' }}>
      <div className="main-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="action-buttons-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <button style={{
            backgroundColor: '#05203c',
            color: 'white',
            border: 'none',
            padding: '18px 24px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '16px',
          }}>
            <HotelIcon /> Hotels
          </button>
          <button style={{
            backgroundColor: '#05203c',
            color: 'white',
            border: 'none',
            padding: '18px 24px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '16px',
          }}>
            <CarIcon /> Car hire
          </button>
          <button style={{
            backgroundColor: '#05203c',
            color: 'white',
            border: 'none',
            padding: '18px 24px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '16px',
          }}>
            <GlobeIcon /> Explore everywhere
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== PROMO BANNER =====
function PromoBanner() {
  return (
    <div style={{ backgroundColor: '#f1f2f8', padding: '0 0 32px 0' }}>
      <div className="main-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div
          className="promo-banner"
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            width: '100%',
            height: '460px',
          }}
        >
          {/* Background Image */}
          <img
            src="/Tablet-IN-SING-AU.jpg"
            alt="Save on your next stay"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />

          {/* Content Overlay */}
          <div
            className="promo-content"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '45%',
              background: 'linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0) 100%)',
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h2 className="promo-title" style={{
              color: '#161616',
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: '12px',
            }}>
              Save on your next stay
            </h2>
            <p className="promo-subtitle" style={{
              color: '#626971',
              fontSize: '16px',
              lineHeight: '1.5',
              marginBottom: '24px',
              maxWidth: '280px',
            }}>
              Get together with the best hand-picked deals from around the world.
            </p>
            <button style={{
              backgroundColor: 'white',
              color: '#161616',
              border: '1px solid #e0e3e5',
              padding: '14px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              width: 'fit-content',
              fontSize: '16px',
            }}>
              Find your room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== FAQ SECTION =====
function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqs = [
    { q: "How does Skyscanner work?", a: "We're a flight, car hire and hotel search engine. We scan all the top airlines and travel providers across the net, so you can compare flight fares and other travel costs in one place. Once you've found the best flight, car hire or hotel, you book directly with the provider." },
    { q: "How can I find the cheapest flight using Skyscanner?", a: "Finding flights is easy here – over 100 million savvy travellers come to us each month to find cheap flight tickets, hotels and car hire. Save money and time." },
    { q: "Where should I book a flight to right now?", a: "If you're looking for inspiration for your next trip, search Everywhere to find a cheap flight ticket anywhere." },
    { q: "Do I book my flight with Skyscanner?", a: "We're a search engine, so after you've found the best flight ticket you'll book directly with the airline or travel provider on their site." },
    { q: "What happens after I have booked my flight?", a: "Your flight booking confirmation email and all the other info you'll need will come from the airline or provider you booked with." },
    { q: "Does Skyscanner do hotels too?", a: "Yes! You can use the same magic that powers our flight search to find your perfect stay anywhere." },
    { q: "What about car hire?", a: "You can also use Skyscanner to search for and compare cheap car hire in seconds, then pick up your wheels from the airport as soon as you touch down." },
    { q: "What's a Price Alert?", a: "If you set up a Price Alert, we'll watch the price of plane tickets for you, and let you know via email or push notification via the app if they rise or fall." },
    { q: "Can I book a flexible flight ticket?", a: "We understand how important it is to have flexible holiday plans. Sometimes, you can pay an extra fee for an amendable airline ticket, so look out for this option as you book." },
    { q: "Can I book flights that emit less CO₂?", a: "Yes - since we began showing carbon emission info on flights where it's available, over 100 million travellers have found a plane ticket with lower emissions for their route." },
  ];

  const toggle = (i: number) => {
    const next = new Set(openItems);
    next.has(i) ? next.delete(i) : next.add(i);
    setOpenItems(next);
  };

  return (
    <div style={{ backgroundColor: '#f1f2f8', padding: '48px 0' }}>
      <div className="main-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#161616', marginBottom: '32px' }}>
          Booking flights with Skyscanner
        </h2>
        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 48px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid #d1d5db' }}>
              <button
                onClick={() => toggle(i)}
                style={{
                  width: '100%',
                  padding: '20px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ color: '#161616', fontWeight: '400', fontSize: '16px', paddingRight: '16px', lineHeight: '1.4' }}>{faq.q}</span>
                <ChevronDown rotate={openItems.has(i)} />
              </button>
              {openItems.has(i) && (
                <p style={{ padding: '0 0 20px', color: '#626971', fontSize: '14px', lineHeight: '1.6' }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== INTERNATIONAL SITES =====
function InternationalSites() {
  const [activeTab, setActiveTab] = useState('country');
  const links = [
    'Best car hire in China', 'Saudi Arabia car hire', 'Cheap car hire in Thailand',
    'Car hire in Oman', 'Cheap car hire in Japan', 'Best car hire in Singapore',
    'Car hire in United Arab Emirates', 'Cheap car hire in India', 'Sri Lanka car hire',
  ];

  return (
    <div style={{ backgroundColor: '#f1f2f8', padding: '32px 0 48px' }}>
      <div className="main-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#161616', marginBottom: '24px' }}>
          Our international sites
        </h3>
        <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#161616', marginBottom: '20px' }}>
          Start planning your adventure
        </h4>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {['Country', 'City', 'Region', 'Airport'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              style={{
                padding: '10px 18px',
                borderRadius: '24px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                backgroundColor: activeTab === tab.toLowerCase() ? '#05203c' : '#e5e7eb',
                color: activeTab === tab.toLowerCase() ? 'white' : '#161616',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="links-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px 48px' }}>
          {links.map((link, i) => (
            <a key={i} href="#" style={{ color: '#161616', fontSize: '14px', textDecoration: 'none', padding: '6px 0' }}>{link}</a>
          ))}
        </div>

        {/* Horizontal Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid #d1d5db', margin: '32px 0 0' }} />
      </div>
    </div>
  );
}

// ===== FOOTER - Matching exact reference layout =====
function Footer() {
  return (
    <footer style={{ backgroundColor: '#05203c', color: 'white', padding: '48px 0 32px' }}>
      <div className="main-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Main Footer Content */}
        <div className="footer-main" style={{ display: 'flex', gap: '48px', marginBottom: '32px' }}>
          {/* Country Selector */}
          <div style={{ flexShrink: 0 }}>
            <button style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '12px 20px',
              borderRadius: '8px',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '14px',
              whiteSpace: 'nowrap',
            }}>
              India · English (UK) · ₹ INR
            </button>
          </div>

          {/* Links Columns */}
          <div className="footer-right" style={{ display: 'flex', flex: 1, gap: '64px' }}>
            {/* Column 1 */}
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Help</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy Settings</a></li>
                <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Log in</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Cookie policy</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy policy</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Terms of service</a></li>
                <li><a href="#" style={{ color: '#ff9332', textDecoration: 'none' }}>Company Details</a></li>
              </ul>
            </div>

            {/* Column 3 - Expandable sections */}
            <div style={{ flex: 1 }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
                <li style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <span style={{ color: 'white' }}>Explore</span>
                  <ChevronDown color="white" />
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <span style={{ color: 'white' }}>Company</span>
                  <ChevronDown color="white" />
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <span style={{ color: 'white' }}>Partners</span>
                  <ChevronDown color="white" />
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <span style={{ color: 'white' }}>Trips</span>
                  <ChevronDown color="white" />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <span style={{ color: 'white' }}>International Sites</span>
                  <ChevronDown color="white" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', textAlign: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
          <p style={{ marginBottom: '4px' }}>Cheap flight booking from anywhere, to everywhere</p>
          <p>© Skyscanner Ltd 2002 – 2026</p>
        </div>
      </div>
    </footer>
  );
}

// ===== MAIN PAGE =====
export default function Home() {
  return (
    <>
      <ResponsiveStyles />
      <main style={{ minHeight: '100vh', backgroundColor: '#f1f2f8' }}>
        <Header />
        <SearchForm />
        <ActionButtons />
        <PromoBanner />
        <FAQ />
        <InternationalSites />
        <Footer />
      </main>
    </>
  );
}
