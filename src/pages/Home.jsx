import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="container" style={{ textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 className="text-neon-blue" style={{ fontSize: '3rem', marginBottom: '2rem' }}>CRICKET <br /><span className="text-neon-green">SCOREBOARD</span></h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '0 auto', width: '100%' }}>
                <button
                    onClick={() => navigate('/setup')}
                    style={{
                        padding: '16px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        background: 'var(--neon-green)',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        color: '#000'
                    }}
                >
                    START NEW MATCH
                </button>
            </div>

            <div style={{ marginTop: '2rem', color: 'var(--text-secondary)' }}>
                <p>Pro Scorer v1.0</p>
            </div>
        </div>
    );
};

export default Home;
