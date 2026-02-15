import React from 'react';

const Scoreboard = ({ score, overs, runRate, target }) => {
    return (
        <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(145deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))' }}>
            <div style={{ textAlign: 'left' }}>
                <div className="label" style={{ marginBottom: '4px' }}>SCORE</div>
                <div style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1', color: 'white', textShadow: '0 0 20px rgba(255,255,255,0.2)' }}>
                    {score}
                </div>
            </div>

            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div>
                    <span className="label" style={{ marginRight: '8px' }}>OVERS</span>
                    <span className="text-neon-blue" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{overs}</span>
                </div>
                <div>
                    <span className="label" style={{ marginRight: '8px' }}>CRR</span>
                    <span className="text-neon-yellow" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{runRate}</span>
                </div>
            </div>
        </div>
    );
};

export default Scoreboard;
