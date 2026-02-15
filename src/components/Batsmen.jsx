import React from 'react';

const Batsmen = ({ batsmen }) => {
    return (
        <div className="glass-card">
            <div className="flex-row" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '8px' }}>
                <span className="label">BATSMAN</span>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <span className="label">R</span>
                    <span className="label">B</span>
                    <span className="label">4s</span>
                    <span className="label">6s</span>
                    <span className="label">SR</span>
                </div>
            </div>

            {batsmen.map((batsman, index) => (
                <div key={index} className="flex-row" style={{
                    marginBottom: '8px',
                    opacity: batsman.out ? 0.5 : 1,
                    background: batsman.strike ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
                    padding: '4px',
                    borderRadius: '4px'
                }}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                        {batsman.strike && <span className="text-neon-yellow" style={{ marginRight: '6px' }}>➤</span>}
                        <span style={{ fontWeight: batsman.strike ? 'bold' : 'normal' }}>{batsman.name}</span>
                    </div>
                    <div style={{ minWidth: '30px', textAlign: 'right', fontWeight: 'bold' }}>{batsman.runs}</div>
                    <div style={{ minWidth: '30px', textAlign: 'right', color: 'var(--text-secondary)' }}>{batsman.balls}</div>
                    <div style={{ minWidth: '30px', textAlign: 'right', color: 'var(--text-secondary)' }}>{batsman.fours}</div>
                    <div style={{ minWidth: '30px', textAlign: 'right', color: 'var(--text-secondary)' }}>{batsman.sixes}</div>
                    <div style={{ minWidth: '40px', textAlign: 'right', fontSize: '0.85rem' }}>
                        {batsman.balls > 0 ? ((batsman.runs / batsman.balls) * 100).toFixed(0) : '0'}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Batsmen;
