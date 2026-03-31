import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import { Zap } from 'lucide-react';

const createIcon = (color) => L.divIcon({
  className: 'custom-icon',
  html: `<div style="background-color: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid #161b22; box-shadow: 0 0 10px ${color}; transition: all 0.3s ease;"></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12]
});

const getStatusColor = (station) => {
  const hasFree = station.connectors.some(c => c.status === 'free');
  if (hasFree) return 'var(--success)';
  const hasUsed = station.connectors.some(c => c.status === 'used');
  if (hasUsed) return 'var(--warning)';
  return 'var(--danger)';
};

function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.5 });
  }, [center, map, zoom]);
  return null;
}

const ChargingMap = ({ stations, center = [11.1271, 78.6569], zoom = 7 }) => {
  return (
    <div style={{ height: '100%', width: '100%', borderRadius: 'inherit', overflow: 'hidden' }}>
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%', background: 'var(--bg-main)' }}>
        <ChangeView center={center} zoom={zoom} />
        
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">Carto</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        {stations.map(station => (
          <Marker 
            key={station.id} 
            position={[station.location.lat, station.location.lng]}
            icon={createIcon(getStatusColor(station))}
          >
            <Popup>
              <div style={{ padding: '0.25rem', minWidth: '220px' }}>
                <h3 style={{ margin: '0 0 0.25rem 0', color: 'initial' }}>{station.name}</h3>
                <p style={{ margin: '0 0 1rem 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  {station.location.city} • {station.powerKW}kW
                </p>
                
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {station.connectors.map(c => (
                    <div 
                      key={c.id} 
                      title={`${c.type} - ${c.status}`}
                      style={{
                        width: '12px', height: '12px', borderRadius: '50%',
                        background: c.status === 'free' ? 'var(--success)' : (c.status === 'used' ? 'var(--warning)' : 'var(--danger)'),
                        boxShadow: `0 0 5px ${c.status === 'free' ? 'var(--success)' : 'transparent'}`
                      }}
                    />
                  ))}
                </div>
                
                <Link to={`/station/${station.id}`} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: 'var(--primary)',
                  color: 'var(--bg-main)',
                  padding: '0.6rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  transition: 'var(--transition)'
                }}>
                  <Zap size={16} /> View Telemetry
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ChargingMap;
