import React, { useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { getStationById } from '../utils/mockData';
import SlotPicker from '../components/Booking/SlotPicker';
import { CreditCard, Calendar, Zap, ArrowLeft, CheckCircle } from 'lucide-react';

const Booking = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const connectorId = searchParams.get('c');
  const navigate = useNavigate();
  
  const station = getStationById(id);
  const connector = station?.connectors.find(c => c.id === connectorId);

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!station || !connector) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Invalid Booking Link</h2>
        <button onClick={() => navigate('/')}>Back to Map</button>
      </div>
    );
  }

  const handleBook = () => {
    if (selectedSlot) {
      setBookingConfirmed(true);
    }
  };

  if (bookingConfirmed) {
    return (
      <div style={{ 
        maxWidth: '600px', margin: '4rem auto', padding: '3rem 2rem', 
        textAlign: 'center', borderRadius: 'var(--radius-lg)', 
        animation: 'fade-in 0.5s var(--transition) forwards' 
      }} className="glass">
        <div style={{ 
          background: 'rgba(16, 185, 129, 0.2)', width: '80px', height: '80px', 
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.5rem auto'
        }}>
          <CheckCircle size={40} color="var(--success)" />
        </div>
        <h1 style={{ color: 'var(--success)' }}>Booking Confirmed!</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Your slot at <strong>{station.name}</strong> is reserved for <strong>{selectedSlot}</strong>.
        </p>
        
        <div style={{ background: 'var(--bg-main)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'left', marginBottom: '2rem' }}>
          <p style={{ margin: '0 0 0.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Station:</span> {station.name}
          </p>
          <p style={{ margin: '0 0 0.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Connector:</span> {connector.type} ({connector.power})
          </p>
          <p style={{ margin: '0 0 0.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Time:</span> {selectedSlot}
          </p>
          <p style={{ margin: 0, display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Pre-authorized:</span> <span style={{ color: 'var(--success)', fontWeight: 600 }}>₹200.00</span>
          </p>
        </div>

        <button 
          onClick={() => navigate('/')}
          style={{ 
            background: 'var(--primary)', color: 'var(--bg-main)', padding: '1rem 2rem', 
            borderRadius: 'var(--radius-md)', fontWeight: 600, width: '100%' 
          }}
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', animation: 'fade-in 0.5s var(--transition) forwards' }}>
      <button 
        onClick={() => navigate(`/station/${id}`)}
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem' }}
      >
        <ArrowLeft size={20} /> Back to Station
      </button>

      <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '300px', height: '300px',
          background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.1, zIndex: -1
        }} />

        <h1 style={{ marginBottom: '0.5rem' }}>Lock Your Slot</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Advance booking ensures your charger is waiting for you.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ flex: 1, minWidth: '250px', background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
              <Zap size={18} color="var(--primary)" /> Connector Selected
            </div>
            <h3 style={{ margin: 0 }}>{connector.type} - {connector.power}</h3>
            <p style={{ margin: '0.2rem 0 0 0', color: 'var(--success)' }}>{connector.tariff}</p>
          </div>
          <div style={{ flex: 1, minWidth: '250px', background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
              <Calendar size={18} color="var(--primary)" /> Station Location
            </div>
            <h3 style={{ margin: 0 }}>{station.name.split('-')[0]}</h3>
            <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{station.location.city}</p>
          </div>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <SlotPicker onSelectSlot={setSelectedSlot} />
        </div>

        <div style={{ background: 'var(--bg-surface)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: '0 0 0.2rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CreditCard size={20} color="var(--text-muted)" /> Secure Pre-authorization
            </h3>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>₹200 to hold the slot. Adjusted against final bill.</p>
          </div>
          <h2 style={{ margin: 0, color: 'var(--success)' }}>₹200</h2>
        </div>

        <button 
          onClick={handleBook}
          disabled={!selectedSlot}
          style={{ 
            background: selectedSlot ? 'var(--primary)' : 'var(--bg-main)', 
            color: selectedSlot ? 'var(--bg-main)' : 'var(--text-muted)', 
            padding: '1.2rem 2rem', 
            borderRadius: 'var(--radius-md)', 
            fontWeight: 600, 
            width: '100%',
            fontSize: '1.1rem',
            transition: 'var(--transition)',
            boxShadow: selectedSlot ? '0 10px 25px -5px var(--primary-glow)' : 'none',
            cursor: selectedSlot ? 'pointer' : 'not-allowed',
            border: selectedSlot ? 'none' : '1px solid var(--border)'
          }}
        >
          {selectedSlot ? `Confirm Booking for ${selectedSlot}` : 'Select a time slot'}
        </button>

      </div>
    </div>
  );
};

export default Booking;
