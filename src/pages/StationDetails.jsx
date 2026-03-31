import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStationById } from '../utils/mockData';
import ConnectorStatus from '../components/Station/ConnectorStatus';
import { MapPin, Clock, ArrowLeft, Coffee, Wifi, Star } from 'lucide-react';

const AMENITY_ICONS = {
  "Restrooms": null,
  "Cafe": <Coffee size={18} />,
  "WiFi": <Wifi size={18} />,
  "Shopping Mall": null,
  "Food Court": <Coffee size={18} />
};

const StationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const station = getStationById(id);

  if (!station) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Station not found</h2>
        <button onClick={() => navigate('/')} style={{ background: 'var(--primary)', color: 'var(--bg-main)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)' }}>
          Back to Map
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem', width: '100%', animation: 'fade-in 0.5s var(--transition) forwards' }}>
      <button 
        onClick={() => navigate('/')}
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem' }}
      >
        <ArrowLeft size={20} /> Back to Map
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        
        {/* Sidebar Info */}
        <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', height: 'fit-content' }}>
          <h1 style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>{station.name}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            <MapPin size={18} />
            <span>{station.location.address}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success)', marginBottom: '2rem', background: 'rgba(16, 185, 129, 0.1)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', width: 'fit-content' }}>
            <Clock size={16} />
            <span style={{ fontWeight: 600 }}>Open • {station.operatingHours}</span>
          </div>

          <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Amenities</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2rem' }}>
            {station.amenities.map((amenity, idx) => (
              <div key={idx} style={{ 
                display: 'flex', alignItems: 'center', gap: '0.4rem', 
                background: 'var(--bg-main)', border: '1px solid var(--border)', 
                padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem', color: 'var(--text-main)'
              }}>
                {AMENITY_ICONS[amenity] || <Star size={14} color="var(--primary)" />}
                {amenity}
              </div>
            ))}
          </div>
          
          <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>AI Prediction Insight</h3>
          <div style={{ background: 'var(--bg-main)', borderLeft: '4px solid var(--accent)', padding: '1rem', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--accent)' }}>Peak Hours Expected:</strong> 4 PM - 7 PM.<br/>
              Currently, wait time is estimated at <strong style={{color: 'var(--success)'}}>0 mins</strong>. Booking an advance slot is recommended if arriving after 3 PM.
            </p>
          </div>
        </div>

        {/* Telemetry Grid */}
        <div>
          <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Live Connectors <span style={{ background: 'var(--primary)', color: 'var(--bg-main)', fontSize: '1rem', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)' }}>{station.connectors.length}</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {station.connectors.map(connector => (
              <ConnectorStatus key={connector.id} connector={connector} stationId={station.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationDetails;
