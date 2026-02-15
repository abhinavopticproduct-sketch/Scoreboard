import React from 'react';

const BallTracker = ({ balls }) => {
    const getBallStyle = (ball) => {
        if (ball === 'W') return { background: 'var(--neon-red)', color: 'white', borderColor: 'var(--neon-red)' };
        if (ball === '4') return { background: 'var(--neon-blue)', color: 'black', borderColor: 'var(--neon-blue)' };
        if (ball === '6') return { background: 'var(--neon-green)', color: 'black', borderColor: 'var(--neon-green)' };
        return { background: 'transparent', color: 'var(--text-secondary)', borderColor: 'var(--text-secondary)' };
    };

    return (
        <div className="card" style={{ padding: '12px 16px' }}>
            <div className="flex-row">
                <span className="label" style={{ marginRight: '12px' }}>This Over:</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                    {balls.map((ball, idx) => (
                        <div key={idx} style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            border: '1px solid',
                            ...getBallStyle(ball)
                        }}>
                            {ball}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BallTracker;
