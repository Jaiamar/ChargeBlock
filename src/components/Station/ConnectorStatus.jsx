import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Zap, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const ConnectorStatus = ({ connector, stationId }) => {
  const isFree = connector.status === 'free';
  const isUsed = connector.status === 'used';
  const isFaulted = connector.status === 'faulted';

  return (
    <div style={{
      background: 'var(--bg-main)',
      border: `1px solid ${isFree ? 'var(--success)' : isUsed ? 'var(--warning)' : 'var(--danger)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: `0 4px 20px -5px ${isFree ? 'rgba(16, 185, 129, 0.2)' : isUsed ? 'rgba(245, 158, 11, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px',
        background: isFree ? 'var(--success)' : isUsed ? 'var(--warning)' : 'var(--danger)',
        filter: 'blur(80px)', opacity: 0.15, borderRadius: '50%'
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <h3 style={{ margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={20} color="var(--primary)" />
            {connector.type}
          </h3>
          <span style={{
            background: 'var(--bg-surface)', padding: '0.2rem 0.6rem',
            borderRadius: 'var(--radius-full)', fontSize: '0.875rem', color: 'var(--text-muted)'
          }}>
            Max {connector.power}
          </span>
        </div>
        
        <div style={{ 
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          color: isFree ? 'var(--success)' : isUsed ? 'var(--warning)' : 'var(--danger)',
          fontWeight: 600, background: 'var(--bg-surface)', padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)'
        }}>
          {isFree && <><CheckCircle size={16} /> Available</>}
          {isUsed && <><Battery size={16} /> Charging</>}
          {isFaulted && <><AlertTriangle size={16} /> Offline</>}
        </div>
      </div>

      <div style={{ background: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
        {isFree && (
          <p style={{ margin: 0, display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
            <span>Tariff:</span>
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{connector.tariff}</span>
          </p>
        )}
        {isUsed && (
          <div>
            <p style={{ margin: '0 0 0.5rem 0', color: 'var(--warning)', fontSize: '0.9rem' }}>Live Telemetry</p>
            <div style={{
              width: '100%', height: '8px', background: 'var(--bg-main)',
              borderRadius: 'var(--radius-full)', overflow: 'hidden', marginBottom: '0.5rem'
            }}>
              <div style={{
                width: connector.summary?.match(/\((\d+)%\)/)?.[1] + '%' || '50%',
                height: '100%',
                background: 'var(--warning)',
                boxShadow: '0 0 10px var(--warning)'
              }} />
            </div>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>{connector.summary}</p>
          </div>
        )}
        {isFaulted && (
          <p style={{ margin: 0, color: 'var(--danger)', fontSize: '0.9rem' }}>{connector.error}</p>
        )}
      </div>

      {isFree ? (
        <Link to={`/booking/${stationId}?c=${connector.id}`} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
          width: '100%', background: 'var(--primary)', color: 'var(--bg-main)',
          padding: '0.8rem', borderRadius: 'var(--radius-md)', fontWeight: 600,
          transition: 'var(--transition)'
        }}>
          <Clock size={18} /> Book Advance Slot
        </Link>
      ) : (
        <button disabled style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
          width: '100%', background: 'var(--bg-surface)', color: 'var(--text-muted)',
          padding: '0.8rem', borderRadius: 'var(--radius-md)', fontWeight: 600,
          cursor: 'not-allowed', border: '1px solid var(--border)'
        }}>
          Slot Unavailable
        </button>
      )}
    </div>
  );
};

export default ConnectorStatus;
