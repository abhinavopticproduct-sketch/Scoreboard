import React from 'react';

const Bowler = ({ bowler }) => {
    return (
        <div className="glass-card">
            <div className="flex-row" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '8px' }}>
                <span className="label">BOWLER</span>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <span className="label">O</span>
                    <span className="label">M</span>
                    <span className="label">R</span>
                    <span className="label">W</span>
                    <span className="label">ECO</span>
                </div>
            </div>

            <div className="flex-row" style={{ alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                    <span style={{ fontWeight: '600' }}>{bowler.name}</span>
                </div>
                <div style={{ minWidth: '30px', textAlign: 'right' }}>{bowler.overs}</div>
                <div style={{ minWidth: '30px', textAlign: 'right', color: 'var(--text-secondary)' }}>{bowler.maidens || 0}</div>
                <div style={{ minWidth: '30px', textAlign: 'right' }}>{bowler.runs}</div>
                <div style={{ minWidth: '30px', textAlign: 'right', fontWeight: 'bold' }}>{bowler.wickets}</div>
                <div style={{ minWidth: '40px', textAlign: 'right' }}>
                    {(bowler.runs / (Math.floor(bowler.overs) + (bowler.overs % 1) * 1.666)).toFixed(1)}
                </div>
            </div>
        </div>
    );
};

export default Bowler;
