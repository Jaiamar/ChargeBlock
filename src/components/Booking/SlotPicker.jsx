import React, { useState } from 'react';

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"
];

const SlotPicker = ({ onSelectSlot }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (idx, time) => {
    setSelected(idx);
    onSelectSlot(time);
  };

  return (
    <div>
      <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
        Select Charging Slot 
        <span style={{ fontSize: '0.8rem', background: 'var(--bg-surface)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-full)' }}>
          Today
        </span>
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.8rem' }}>
        {timeSlots.map((time, idx) => {
          const isSelected = selected === idx;
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx, time)}
              style={{
                background: isSelected ? 'var(--primary)' : 'var(--bg-main)',
                color: isSelected ? 'var(--bg-main)' : 'var(--text-main)',
                border: `1px solid ${isSelected ? 'var(--primary)' : 'var(--border)'}`,
                padding: '0.8rem',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                transition: 'var(--transition)',
                boxShadow: isSelected ? `0 0 15px var(--primary-glow)` : 'none'
              }}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SlotPicker;
