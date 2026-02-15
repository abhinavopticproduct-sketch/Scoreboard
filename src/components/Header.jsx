import React from 'react';

const Header = ({ matchData }) => {
    // Helper stats logic
    const [ov, b] = (matchData.overs || "0.0").toString().split('.').map(Number);
    const ballsBowled = ov * 6 + (b || 0);
    const ballsRem = 120 - ballsBowled;
    const reqRuns = matchData.target ? matchData.target - matchData.runs : 0;

    // Status Text
    let statusText = "LIVE";
    if (matchData.target) {
        statusText = `Need ${reqRuns} off ${ballsRem}`;
    } else if (matchData.wickets === 10 || ballsBowled === 120) {
        statusText = "Innings Break";
    }

    return (
        <div className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
                        {matchData.match}
                    </h2>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                        T.U. CRICKET GROUND
                    </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '4px 8px',
                        background: 'rgba(255, 0, 85, 0.1)',
                        color: 'var(--neon-pink)',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        fontSize: '0.75rem',
                        border: '1px solid var(--neon-pink)',
                        boxShadow: '0 0 5px rgba(255, 0, 85, 0.2)'
                    }}>
                        ● {statusText}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
