import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetupMatch = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        homeTeam: 'Team A',
        awayTeam: 'Team B',
        overs: 20,
        striker: 'Player 1',
        nonStriker: 'Player 2',
        bowler: 'Bowler 1'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const startMatch = () => {
        navigate('/match', { state: formData });
    };

    return (
        <div className="container" style={{ padding: '20px' }}>
            <h2 className="text-neon-blue" style={{ textAlign: 'center', marginBottom: '24px' }}>MATCH SETUP</h2>

            <div className="card">
                <div style={{ marginBottom: '16px' }}>
                    <label className="label">Home Team</label>
                    <input name="homeTeam" value={formData.homeTeam} onChange={handleChange} style={{ width: '100%', padding: '12px', background: '#334155', border: 'none', color: 'white', borderRadius: '4px', marginTop: '4px' }} />
                </div>
                <div style={{ marginBottom: '16px' }}>
                    <label className="label">Away Team</label>
                    <input name="awayTeam" value={formData.awayTeam} onChange={handleChange} style={{ width: '100%', padding: '12px', background: '#334155', border: 'none', color: 'white', borderRadius: '4px', marginTop: '4px' }} />
                </div>
                <div style={{ marginBottom: '16px' }}>
                    <label className="label">Overs</label>
                    <input type="number" name="overs" value={formData.overs} onChange={handleChange} style={{ width: '100%', padding: '12px', background: '#334155', border: 'none', color: 'white', borderRadius: '4px', marginTop: '4px' }} />
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '16px 0' }}></div>

                <h3 className="label" style={{ marginBottom: '12px' }}>OPENING PLAYERS</h3>
                <div style={{ marginBottom: '16px' }}>
                    <label className="label">Striker</label>
                    <input name="striker" value={formData.striker} onChange={handleChange} style={{ width: '100%', padding: '12px', background: '#334155', border: 'none', color: 'white', borderRadius: '4px', marginTop: '4px' }} />
                </div>
                <div style={{ marginBottom: '16px' }}>
                    <label className="label">Non-Striker</label>
                    <input name="nonStriker" value={formData.nonStriker} onChange={handleChange} style={{ width: '100%', padding: '12px', background: '#334155', border: 'none', color: 'white', borderRadius: '4px', marginTop: '4px' }} />
                </div>
                <div style={{ marginBottom: '24px' }}>
                    <label className="label">Opening Bowler</label>
                    <input name="bowler" value={formData.bowler} onChange={handleChange} style={{ width: '100%', padding: '12px', background: '#334155', border: 'none', color: 'white', borderRadius: '4px', marginTop: '4px' }} />
                </div>

                <button
                    onClick={startMatch}
                    style={{
                        width: '100%',
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
                    START MATCH
                </button>
            </div>
        </div>
    );
};

export default SetupMatch;
