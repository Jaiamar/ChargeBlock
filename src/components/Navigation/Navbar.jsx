import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      zIndex: 1000,
      borderBottom: '1px solid var(--border)'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Zap color="var(--primary)" size={28} fill="var(--primary-glow)" />
        <span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
          EVConnect <span className="text-gradient">TN</span>
        </span>
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" style={{ fontWeight: 500, color: 'var(--text-main)' }}>Map</Link>
        <span style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Bookings</span>
        <button style={{ 
          background: 'var(--primary)', 
          color: 'var(--bg-main)', 
          padding: '0.5rem 1.25rem', 
          borderRadius: 'var(--radius-full)',
          fontWeight: 600
        }}>
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
