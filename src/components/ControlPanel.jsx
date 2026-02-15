
import React, { useState } from 'react';

const ControlPanel = ({ onUpdate, matchData }) => {
    const [subView, setSubView] = useState(null); // 'WIDE', 'NOBALL', 'WICKET', null

    const handleRunClick = (run) => {
        onUpdate('run', run);
    };

    const handleExtraClick = (type, runs) => {
        onUpdate('extra', type, runs); // Pass runs as 3rd arg
        setSubView(null);
    };

    const handleWicketClick = (type, runs) => {
        onUpdate('wicket', type, runs);
        setSubView(null);
    };

    if (subView === 'WIDE') {
        return (
            <div className="glass-card control-panel" style={{ marginTop: '20px', borderColor: 'var(--neon-blue)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span className="label text-neon-blue">WIDE + RUNS</span>
                    <button onClick={() => setSubView(null)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>✕</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
                    {[0, 1, 2, 3, 4].map(r => (
                        <button key={r} onClick={() => handleExtraClick('WD', r)} style={{ padding: '12px', background: 'rgba(0, 242, 255, 0.15)', border: '1px solid var(--neon-blue)', color: 'white', borderRadius: '8px', fontWeight: 'bold' }}>
                            {r === 0 ? 'WD' : `WD+${r}`}
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    if (subView === 'NOBALL') {
        return (
            <div className="glass-card control-panel" style={{ marginTop: '20px', borderColor: 'var(--neon-yellow)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span className="label text-neon-yellow">NO BALL + RUNS (OFF BAT/BYES)</span>
                    <button onClick={() => setSubView(null)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>✕</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                    {[0, 1, 2, 3, 4, 6].map(r => (
                        <button key={r} onClick={() => handleExtraClick('NB', r)} style={{ padding: '12px', background: 'rgba(250, 204, 21, 0.15)', border: '1px solid var(--neon-yellow)', color: 'white', borderRadius: '8px', fontWeight: 'bold' }}>
                            {r === 0 ? 'NB' : `NB+${r}`}
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    if (subView === 'WICKET') {
        return (
            <div className="glass-card control-panel" style={{ marginTop: '20px', borderColor: 'var(--neon-pink)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span className="label text-neon-pink">WICKET METHOD</span>
                    <button onClick={() => setSubView(null)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>✕</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <button onClick={() => handleWicketClick('std', 0)} style={{ padding: '12px', background: 'var(--neon-pink)', border: 'none', color: 'white', borderRadius: '8px', fontWeight: 'bold' }}>BOWLED / CAUGHT</button>
                    <button onClick={() => handleWicketClick('runout', 0)} style={{ padding: '12px', background: 'rgba(255, 0, 85, 0.3)', border: '1px solid var(--neon-pink)', color: 'white', borderRadius: '8px' }}>RUN OUT (0)</button>
                    <button onClick={() => handleWicketClick('runout', 1)} style={{ padding: '12px', background: 'rgba(255, 0, 85, 0.3)', border: '1px solid var(--neon-pink)', color: 'white', borderRadius: '8px' }}>RUN OUT (+1)</button>
                    <button onClick={() => handleWicketClick('runout', 2)} style={{ padding: '12px', background: 'rgba(255, 0, 85, 0.3)', border: '1px solid var(--neon-pink)', color: 'white', borderRadius: '8px' }}>RUN OUT (+2)</button>
                </div>
            </div>
        )
    }

    return (
        <div className="glass-card control-panel" style={{ marginTop: '20px' }}>
            <div style={{ marginBottom: '12px', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>SCORING</span>
                <span className="label">{matchData.bowler.name} to {matchData.batsmen.find(b => b.strike)?.name}</span>
            </div>

            {/* Edit Details - Collapsible or Inline? Keeping inline for speed */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px', background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px' }}>
                <div>
                    <label className="label">Bowler</label>
                    <input type="text" value={matchData.bowler.name} onChange={(e) => onUpdate('update_bowler_name', e.target.value)} style={{ width: '100%' }} />
                </div>
                <div>
                    <label className="label">Striker</label>
                    <input type="text" value={matchData.batsmen.find(b => b.strike)?.name || ''} onChange={(e) => onUpdate('update_striker_name', e.target.value)} style={{ width: '100%' }} />
                </div>
            </div>

            {/* Runs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '8px', marginBottom: '16px' }}>
                {[0, 1, 2, 3, 4, 6].map(run => (
                    <button
                        key={run}
                        onClick={() => handleRunClick(run)}
                        style={{
                            background: run === 4 || run === 6 ? 'rgba(71, 85, 105, 0.8)' : 'rgba(30, 41, 59, 0.6)',
                            border: run === 4 ? '1px solid var(--neon-green)' : (run === 6 ? '1px solid var(--neon-blue)' : '1px solid rgba(255,255,255,0.1)'),
                            color: run === 4 ? 'var(--neon-green)' : (run === 6 ? 'var(--neon-blue)' : 'white'),
                            padding: '16px 0',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            fontWeight: '800',
                            fontSize: '1.2rem',
                            boxShadow: run === 6 ? '0 0 10px rgba(0, 242, 255, 0.1)' : 'none'
                        }}
                    >
                        {run}
                    </button>
                ))}
            </div>

            {/* Extras & Wicket */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '16px' }}>
                <button onClick={() => setSubView('WIDE')} style={{ background: '#334155', border: 'none', color: 'var(--text-secondary)', padding: '12px 0', borderRadius: '8px', fontWeight: 'bold' }}>WD</button>
                <button onClick={() => setSubView('NOBALL')} style={{ background: '#334155', border: 'none', color: 'var(--text-secondary)', padding: '12px 0', borderRadius: '8px', fontWeight: 'bold' }}>NB</button>
                <button onClick={() => onUpdate('extra', 'BYE', 1)} style={{ background: '#334155', border: 'none', color: 'var(--text-secondary)', padding: '12px 0', borderRadius: '8px', fontWeight: 'bold' }}>BYE</button>
                <button onClick={() => onUpdate('extra', 'LB', 1)} style={{ background: '#334155', border: 'none', color: 'var(--text-secondary)', padding: '12px 0', borderRadius: '8px', fontWeight: 'bold' }}>LB</button>

                <button
                    onClick={() => setSubView('WICKET')}
                    style={{
                        background: 'rgba(255, 0, 85, 0.1)',
                        border: '1px solid var(--neon-pink)',
                        color: 'var(--neon-pink)',
                        padding: '12px 0',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        boxShadow: '0 0 10px rgba(255, 0, 85, 0.2)'
                    }}
                >
                    OUT
                </button>
            </div>

            {/* Actions */}
            <div className="flex-row" style={{ gap: '12px' }}>
                <button
                    onClick={() => onUpdate('undo')}
                    style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px', cursor: 'pointer' }}
                >
                    UNDO
                </button>
                <button
                    onClick={() => onUpdate('switch_bowler')}
                    style={{ flex: 1, padding: '12px', background: 'rgba(0, 242, 255, 0.1)', border: '1px solid var(--neon-blue)', color: 'var(--neon-blue)', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    SWITCH BOWLER
                </button>
            </div>
        </div>
    );
};

export default ControlPanel;
