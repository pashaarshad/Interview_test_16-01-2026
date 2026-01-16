'use client';

import React, { useState } from 'react';

// ===== ICONS =====
const SkyscannerLogo = () => (
  <svg viewBox="0 0 201 128" className="w-7 h-7" fill="white">
    <path d="M101 127.1c2.1 0 4.1-.5 6-1.6l21.9-12.6c4.4-2.5 9.5-3.6 14.6-3 26.6 3.1 45.2 8.1 50.7 9.7 1.1.3 2.4-.1 3.1-1 .9-1.1 2-2.9 2.9-5.5.8-2.5.9-4.6.8-6.1-.1-1.2-.9-2.3-2.1-2.6-8.6-2.5-46.7-12.8-97.9-12.8s-89.3 10.3-97.9 12.8c-1.2.3-2 1.4-2.1 2.6-.1 1.4 0 3.5.8 6.1.8 2.6 2 4.4 2.9 5.5.7.9 2 1.3 3.1 1 5.5-1.6 24.2-6.6 50.7-9.7 5.1-.6 10.2.5 14.6 3L95 125.5c1.9 1.1 3.9 1.6 6 1.6zM64.5 56.2c1.2 2.1 3.1 3.5 5.3 4.1 2.2.6 4.5.3 6.6-.9 2.1-1.2 3.5-3.1 4.1-5.3.6-2.2.3-4.5-.9-6.6L59.9 13.4c-.6-1.1-1.9-1.5-3.1-1.4-1.6.1-3.8.9-6.4 2.4-2.6 1.5-4.4 3-5.3 4.3-.7 1-.9 2.3-.3 3.4l19.7 34.1zm-18 24.4c2.1 1.2 4.5 1.4 6.6.9 2.1-.5 4.1-2 5.3-4.1 1.2-2.1 1.4-4.5.9-6.6-.5-2.1-2-4.1-4.1-5.3L21.1 45.9c-1.1-.6-2.4-.4-3.4.3-1.3.9-2.8 2.7-4.3 5.3-1.5 2.6-2.3 4.8-2.4 6.4-.1 1.3.4 2.5 1.4 3.1l34.1 19.6zm63.2-36.5c0 2.4-1 4.6-2.5 6.2-1.6 1.6-3.7 2.5-6.2 2.5s-4.6-1-6.2-2.5c-1.6-1.6-2.5-3.7-2.5-6.2V4.8c0-1.3.8-2.3 2-2.8C95.7 1.3 98 .9 101 .9s5.3.4 6.7 1.1c1.1.6 2 1.5 2 2.8v39.3zm27.8 12.1c-1.2 2.1-3.1 3.5-5.3 4.1-2.2.6-4.5.3-6.6-.9-2.1-1.2-3.5-3.1-4.1-5.3-.6-2.2-.3-4.5.9-6.6l19.7-34.1c.6-1.1 1.9-1.5 3.1-1.4 1.6.1 3.8.9 6.4 2.4 2.6 1.5 4.4 3 5.3 4.3.7 1 .9 2.3.3 3.4l-19.7 34.1zm18 24.4c-2.1 1.2-4.5 1.4-6.6.9-2.1-.5-4.1-2-5.3-4.1-1.2-2.1-1.4-4.5-.9-6.6.5-2.1 2-4.1 4.1-5.3l34.1-19.7c1.1-.6 2.4-.4 3.4.3 1.3.9 2.8 2.7 4.3 5.3 1.5 2.6 2.3 4.8 2.4 6.4.1 1.3-.4 2.5-1.4 3.1l-34.1 19.7z" />
  </svg>
);

const FlightIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
);

const HotelIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
  </svg>
);

const CarIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const SwapIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
  </svg>
);

const ChevronDown = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

// ===== HEADER COMPONENT =====
function Header() {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <header style={{ backgroundColor: '#05203c', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Top Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SkyscannerLogo />
            <span style={{ fontSize: '20px', fontWeight: '600' }}>Skyscanner</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '14px' }}>Help</button>
            <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><GlobeIcon /></button>
            <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><HeartIcon /></button>
            <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <UserIcon />
              <span style={{ fontSize: '14px' }}>Log in</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '8px', paddingBottom: '20px' }}>
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
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '20px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                backgroundColor: activeTab === tab.id ? '#0770e3' : '#1a3a5c',
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

// ===== SEARCH FORM COMPONENT =====
function SearchForm() {
  const [fromCity, setFromCity] = useState('Bengaluru (BLR)');
  const [toCity, setToCity] = useState('');
  const [addHotel, setAddHotel] = useState(true);
  const [nearbyFrom, setNearbyFrom] = useState(false);
  const [nearbyTo, setNearbyTo] = useState(false);
  const [directFlights, setDirectFlights] = useState(false);

  return (
    <div style={{ backgroundColor: '#05203c', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Headline */}
        <h1 style={{ color: 'white', fontSize: '28px', fontWeight: '600', marginBottom: '24px' }}>
          Millions of cheap flights. One simple search.
        </h1>

        {/* Trip Type */}
        <div style={{ marginBottom: '12px' }}>
          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#1a3a5c',
            color: 'white',
            border: 'none',
            padding: '8px 14px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
          }}>
            Return <ChevronDown />
          </button>
        </div>

        {/* Search Form */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          overflow: 'visible',
        }}>
          <div style={{ display: 'flex', alignItems: 'stretch' }}>
            {/* From */}
            <div style={{
              flex: '1 1 22%',
              padding: '12px 16px',
              borderRight: '1px solid #ddd',
              position: 'relative',
              minWidth: '180px',
            }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#68697f', marginBottom: '2px' }}>From</label>
              <input
                type="text"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  fontSize: '15px',
                  fontWeight: '500',
                  color: '#05203c',
                  background: 'transparent',
                }}
                placeholder="Country, city or airport"
              />
              {/* Swap Button */}
              <button
                style={{
                  position: 'absolute',
                  right: '-16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  border: '2px solid #ddd',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SwapIcon />
              </button>
            </div>

            {/* To */}
            <div style={{
              flex: '1 1 22%',
              padding: '12px 16px',
              borderRight: '1px solid #ddd',
              minWidth: '180px',
            }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#68697f', marginBottom: '2px' }}>To</label>
              <input
                type="text"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  fontSize: '15px',
                  fontWeight: '500',
                  color: '#05203c',
                  background: 'transparent',
                }}
                placeholder="Country, city or airport"
              />
            </div>

            {/* Depart */}
            <div style={{
              flex: '1 1 14%',
              padding: '12px 16px',
              borderRight: '1px solid #ddd',
              minWidth: '110px',
            }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#68697f', marginBottom: '2px' }}>Depart</label>
              <input
                type="text"
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  fontSize: '15px',
                  color: '#9ca3af',
                  background: 'transparent',
                }}
                placeholder="Add date"
              />
            </div>

            {/* Return */}
            <div style={{
              flex: '1 1 14%',
              padding: '12px 16px',
              borderRight: '1px solid #ddd',
              minWidth: '110px',
            }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#68697f', marginBottom: '2px' }}>Return</label>
              <input
                type="text"
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  fontSize: '15px',
                  color: '#9ca3af',
                  background: 'transparent',
                }}
                placeholder="Add date"
              />
            </div>

            {/* Travelers */}
            <div style={{
              flex: '1 1 22%',
              padding: '12px 16px',
              minWidth: '180px',
            }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#68697f', marginBottom: '2px' }}>Travellers and cabin class</label>
              <span style={{ fontSize: '15px', fontWeight: '500', color: '#05203c' }}>1 Adult, Economy</span>
            </div>

            {/* Search Button */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '8px 8px 8px 0' }}>
              <button style={{
                backgroundColor: '#0770e3',
                color: 'white',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '16px',
                whiteSpace: 'nowrap',
              }}>
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Checkboxes - Row 1 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '12px', color: 'white', fontSize: '14px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={nearbyFrom}
              onChange={(e) => setNearbyFrom(e.target.checked)}
              style={{ width: '16px', height: '16px', accentColor: '#0770e3' }}
            />
            Add nearby airports
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={nearbyTo}
              onChange={(e) => setNearbyTo(e.target.checked)}
              style={{ width: '16px', height: '16px', accentColor: '#0770e3' }}
            />
            Add nearby airports
          </label>
          <div style={{ marginLeft: 'auto' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={addHotel}
                onChange={(e) => setAddHotel(e.target.checked)}
                style={{ width: '16px', height: '16px', accentColor: '#0770e3' }}
              />
              Add a hotel
            </label>
          </div>
        </div>

        {/* Checkboxes - Row 2 */}
        <div style={{ display: 'flex', gap: '24px', marginTop: '8px', color: 'white', fontSize: '14px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={directFlights}
              onChange={(e) => setDirectFlights(e.target.checked)}
              style={{ width: '16px', height: '16px', accentColor: '#0770e3' }}
            />
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
    <div style={{ backgroundColor: 'white', padding: '32px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <button style={{
            backgroundColor: '#05203c',
            color: 'white',
            border: 'none',
            padding: '16px 24px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            cursor: 'pointer',
            fontWeight: '500',
          }}>
            <HotelIcon /> Hotels
          </button>
          <button style={{
            backgroundColor: '#0b2d4e',
            color: 'white',
            border: 'none',
            padding: '16px 24px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            cursor: 'pointer',
            fontWeight: '500',
          }}>
            <CarIcon /> Car hire
          </button>
          <button style={{
            backgroundColor: '#05203c',
            color: 'white',
            border: 'none',
            padding: '16px 24px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            cursor: 'pointer',
            fontWeight: '500',
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
    <div style={{ backgroundColor: 'white', padding: '0 0 32px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          height: '350px',
        }}>
          {/* Background Image - already contains 35% off badge */}
          <img
            src="/Tablet-IN-SING-AU.jpg"
            alt="Save on your next stay - up to 35% off"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Overlay for text readability */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 40%, transparent 60%)',
          }} />

          {/* Content */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <h2 style={{ color: 'white', fontSize: '36px', fontWeight: '700', lineHeight: 1.2, maxWidth: '280px' }}>
              Save on your next stay
            </h2>
            <button style={{
              marginTop: '24px',
              backgroundColor: 'white',
              color: '#05203c',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              width: 'fit-content',
            }}>
              Go
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
    { q: "How does Skyscanner work?", a: "Skyscanner searches millions of flights to find you the best prices." },
    { q: "Does Skyscanner do hotels too?", a: "Yes! We search and compare hotel deals." },
    { q: "How can I find the cheapest flight using Skyscanner?", a: "Use our 'Everywhere' search feature." },
    { q: "What about car hire?", a: "We compare car hire from all major brands." },
    { q: "Do I book my flight with Skyscanner?", a: "We redirect you to airlines or travel agents to complete booking." },
    { q: "Can I book a flexible flight ticket?", a: "Many airlines offer flexible tickets." },
    { q: "What happens after I have booked my flight?", a: "You'll receive confirmation from the airline." },
    { q: "Can I book flights that emit less CO₂?", a: "Look for 'Greener choice' labels." },
  ];

  const toggle = (i: number) => {
    const next = new Set(openItems);
    next.has(i) ? next.delete(i) : next.add(i);
    setOpenItems(next);
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '48px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#05203c', marginBottom: '24px' }}>
          Booking flights with Skyscanner
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 48px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <button
                onClick={() => toggle(i)}
                style={{
                  width: '100%',
                  padding: '16px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ color: '#05203c', fontWeight: '500', fontSize: '14px' }}>{faq.q}</span>
                <ChevronDown />
              </button>
              {openItems.has(i) && (
                <p style={{ padding: '0 0 16px', color: '#6b7280', fontSize: '14px' }}>{faq.a}</p>
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
    'Best car hire in China', 'Car hire in Oman', 'Car hire in United Arab Emirates',
    'Saudi Arabia car hire', 'Cheap car hire in Japan', 'Cheap car hire in India',
    'Cheap car hire in Thailand', 'Best car hire in Singapore', 'Sri Lanka car hire',
  ];

  return (
    <div style={{ backgroundColor: 'white', padding: '32px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '16px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#05203c' }}>Our international sites</h3>
        </div>

        <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#05203c', marginBottom: '20px' }}>
          Start planning your adventure
        </h4>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
          {['Country', 'City', 'Region', 'Airport'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                backgroundColor: activeTab === tab.toLowerCase() ? '#05203c' : '#f3f4f6',
                color: activeTab === tab.toLowerCase() ? 'white' : '#05203c',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px 48px' }}>
          {links.map((link, i) => (
            <a key={i} href="#" style={{ color: '#0770e3', fontSize: '14px', textDecoration: 'none', padding: '4px 0' }}>
              {link}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#05203c' }}></span>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#d1d5db' }}></span>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#d1d5db' }}></span>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#d1d5db' }}></span>
        </div>
      </div>
    </div>
  );
}

// ===== FOOTER =====
function Footer() {
  return (
    <footer style={{ backgroundColor: '#05203c', color: 'white', padding: '48px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '32px' }}>
          {/* Country Selector */}
          <div>
            <button style={{
              backgroundColor: '#1a3a5c',
              color: 'white',
              border: 'none',
              padding: '12px 16px',
              borderRadius: '8px',
              textAlign: 'left',
              cursor: 'pointer',
              width: '100%',
            }}>
              <div style={{ fontSize: '12px', color: '#9ca3af' }}>India</div>
              <div style={{ fontSize: '14px' }}>English (UK) · ₹ INR</div>
            </button>
          </div>

          <div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Help</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy Settings</a></li>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Log in</a></li>
            </ul>
          </div>

          <div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Cookie policy</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy policy</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Terms of service</a></li>
              <li><a href="#" style={{ color: '#f97316', textDecoration: 'none' }}>Company Details</a></li>
            </ul>
          </div>

          <div>
            <h5 style={{ fontWeight: '600', marginBottom: '12px' }}>Explore</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#9ca3af' }}>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Flights</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Hotels</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Car hire</a></li>
            </ul>
          </div>

          <div>
            <h5 style={{ fontWeight: '600', marginBottom: '12px' }}>Company</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#9ca3af' }}>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>About us</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Careers</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>News</a></li>
            </ul>
          </div>

          <div>
            <h5 style={{ fontWeight: '600', marginBottom: '12px' }}>Partners</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#9ca3af' }}>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Work with us</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Travel APIs</a></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #374151', marginTop: '48px', paddingTop: '32px', textAlign: 'center', fontSize: '14px', color: '#9ca3af' }}>
          <p>Cheap flight booking from anywhere, to everywhere.</p>
          <p>© Skyscanner Ltd 2002 – 2026</p>
        </div>
      </div>
    </footer>
  );
}

// ===== MAIN PAGE =====
export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Header />
      <SearchForm />
      <ActionButtons />
      <PromoBanner />
      <FAQ />
      <InternationalSites />
      <Footer />
    </main>
  );
}
