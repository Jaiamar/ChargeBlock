import React, { useState, useMemo } from 'react';
import ChargingMap from '../components/Map/ChargingMap';
import { EV_STATIONS, getUniqueCities } from '../utils/mockData';
import { MapPin, BatteryCharging, Search } from 'lucide-react';

const CITY_COORDINATES = {
  "Tamil Nadu": [11.1271, 78.6569], // Default TN Scale
  "Chennai": [12.9716, 80.2428],
  "Coimbatore": [11.0168, 76.9558],
  "Salem": [11.6643, 78.1460],
  "Madurai": [9.9252, 78.1198]
};

const Home = () => {
  const [selectedCity, setSelectedCity] = useState("Tamil Nadu");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStations = useMemo(() => {
    return EV_STATIONS.filter(s => {
      const matchCity = selectedCity === "Tamil Nadu" || s.location.city === selectedCity;
      const matchSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.location.address.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCity && matchSearch;
    });
  }, [selectedCity, searchTerm]);

  const mapCenter = CITY_COORDINATES[selectedCity] || CITY_COORDINATES["Tamil Nadu"];
  const mapZoom = selectedCity === "Tamil Nadu" ? 7 : 12;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 70px)', padding: '1rem', gap: '1rem' }}>
      {/* Header Filters */}
      <div className="glass" style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        padding: '1rem 1.5rem',
        borderRadius: 'var(--radius-lg)',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: '300px' }}>
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', 
            background: 'var(--bg-main)', padding: '0.6rem 1rem', 
            borderRadius: 'var(--radius-full)', border: '1px solid var(--border)', flex: 1 
          }}>
            <Search size={18} color="var(--text-muted)" />
            <input 
              type="text" 
              placeholder="Search hubs or address..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: 'transparent', border: 'none', color: 'var(--text-main)', 
                outline: 'none', width: '100%', fontSize: '0.95rem'
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '4px' }}>
          <button 
            onClick={() => setSelectedCity("Tamil Nadu")}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              background: selectedCity === "Tamil Nadu" ? 'var(--primary)' : 'var(--bg-main)',
              color: selectedCity === "Tamil Nadu" ? 'var(--bg-main)' : 'var(--text-muted)',
              border: `1px solid ${selectedCity === "Tamil Nadu" ? 'var(--primary)' : 'var(--border)'}`,
              fontWeight: 600,
              whiteSpace: 'nowrap',
              transition: 'var(--transition)'
            }}
          >
            All Tamil Nadu
          </button>
          {getUniqueCities().map(city => (
            <button 
              key={city}
              onClick={() => setSelectedCity(city)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                background: selectedCity === city ? 'var(--primary)' : 'var(--bg-main)',
                color: selectedCity === city ? 'var(--bg-main)' : 'var(--text-muted)',
                border: `1px solid ${selectedCity === city ? 'var(--primary)' : 'var(--border)'}`,
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'var(--transition)'
              }}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ display: 'flex', gap: '1rem', flex: 1, overflow: 'hidden' }}>
        
        {/* Dynamic Map Area */}
        <div className="glass" style={{ flex: 3, borderRadius: 'var(--radius-lg)', padding: '0.5rem', position: 'relative' }}>
          <ChargingMap stations={filteredStations} center={mapCenter} zoom={mapZoom} />
          
          {/* Overlay Stats */}
          <div className="glass" style={{
            position: 'absolute', bottom: '2rem', right: '2rem', zIndex: 1000,
            padding: '1rem', borderRadius: 'var(--radius-md)',
            display: 'flex', gap: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '0.5rem', borderRadius: 'var(--radius-full)' }}>
                <MapPin size={20} color="var(--secondary)" />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>Found Hubs</p>
                <h3 style={{ margin: 0 }}>{filteredStations.length}</h3>
              </div>
            </div>
            <div style={{ width: '1px', background: 'var(--border)' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '0.5rem', borderRadius: 'var(--radius-full)' }}>
                <BatteryCharging size={20} color="var(--success)" />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>Live Connectors</p>
                <h3 style={{ margin: 0 }}>{filteredStations.reduce((acc, s) => acc + s.connectors.length, 0)}</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
