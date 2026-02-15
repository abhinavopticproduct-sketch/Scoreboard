import { useState, useEffect } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Batsmen from './components/Batsmen';
import Bowler from './components/Bowler';
import BallTracker from './components/BallTracker';
import MatchInfo from './components/MatchInfo';

const INITIAL_DATA = {
    match: "Nepal vs India",
    runs: 142,
    wickets: 3,
    overs: 16.4,
    batsmen: [
        { name: "Rohit Sharma", runs: 67, balls: 42, fours: 8, sixes: 2, strike: true, out: false },
        { name: "Virat Kohli", runs: 48, balls: 35, fours: 5, sixes: 1, strike: false, out: false }
    ],
    bowler: { name: "Sandeep Lamichhane", overs: 3.4, runs: 28, wickets: 2, maidens: 0 },
    thisOver: ["1", "4", "0", "W"],
    extras: { wides: 2, noBalls: 1, byes: 0, legByes: 1 },
    target: 180
};

const BOWLERS = [
    "Sandeep Lamichhane", "Sompal Kami", "Karan KC", "Abinash Bohara", "Dipendra Singh Airee"
];

function App() {
    const [matchData, setMatchData] = useState(INITIAL_DATA);

    // Simulation Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setMatchData(prev => {
                // Stop if match over
                if (prev.runs >= prev.target || prev.wickets >= 10 || parseFloat(prev.overs) >= 20.0) {
                    clearInterval(interval);
                    return prev;
                }

                const events = ['0', '1', '1', '2', '4', '4', '6', 'W', '0', '1'];
                const outcome = events[Math.floor(Math.random() * events.length)];

                let newData = { ...prev };
                let runsScored = 0;
                let isWicket = false;
                let isExtra = false; // Simplified for now

                // Parse overs
                let [ov, balls] = newData.overs.toString().split('.').map(Number);
                if (isNaN(balls)) balls = 0;

                // Process Ball
                if (outcome === 'W') {
                    isWicket = true;
                    newData.wickets += 1;
                    newData.thisOver = [...newData.thisOver, 'W'];
                } else {
                    runsScored = parseInt(outcome);
                    newData.runs += runsScored;
                    newData.thisOver = [...newData.thisOver, outcome];
                }

                // Update Bowler Stats
                if (!isExtra) { // Assuming no extras in random events for simplicity yet
                    newData.bowler = { ...newData.bowler, runs: newData.bowler.runs + runsScored };
                    if (isWicket) newData.bowler.wickets += 1;

                    // Update Balls
                    balls += 1;
                    if (balls === 6) {
                        ov += 1;
                        balls = 0;
                        newData.thisOver = []; // Clear for new over or keep history? Usually clear visual or show last
                        // Switch Bowler (Randomly pick distinct)
                        const nextBowlerName = BOWLERS.filter(b => b !== newData.bowler.name)[Math.floor(Math.random() * (BOWLERS.length - 1))];
                        // Reset bowler stats for this "current bowler" view, realistically we should track all bowlers map.
                        // For simple dashboard, we just simulate "Current Bowler" stats object.
                        // We'll just reset over count for new bowler distinct from game over count
                        // But to keep it consistent with UI asking for "Current Bowler", we often show cumulative figures.
                        // Let's just simulate cumulative stats for simplicity of the prompt's requirements
                        newData.bowler = {
                            name: nextBowlerName,
                            overs: 0,
                            runs: Math.floor(Math.random() * 20), // Mock previous stats 
                            wickets: Math.floor(Math.random() * 2),
                            maidens: 0
                        };
                        // Correct logic would be to have a map of bowlers. I'll stick to simple update.
                    }
                    newData.bowler.overs = parseFloat(`${ov}.${balls}`); // Approximate for display
                }

                newData.overs = `${ov}.${balls}`;

                // Update Batsmen
                // Find striker
                const strikerIdx = newData.batsmen.findIndex(b => b.strike);
                const nonStrikerIdx = newData.batsmen.findIndex(b => !b.strike);

                if (strikerIdx !== -1) {
                    let striker = { ...newData.batsmen[strikerIdx] };

                    if (!isWicket) {
                        striker.runs += runsScored;
                        striker.balls += 1;
                        if (runsScored === 4) striker.fours += 1;
                        if (runsScored === 6) striker.sixes += 1;

                        // Strike Rotation
                        if (runsScored % 2 !== 0) {
                            striker.strike = false;
                            if (nonStrikerIdx !== -1) newData.batsmen[nonStrikerIdx].strike = true;
                        }
                    } else {
                        // Wicket fall
                        striker.out = true;
                        striker.strike = false;
                        striker.balls += 1; // Ball faced
                        // Replace with new batsman
                        // Logic to shift old striker to history? Or just replace in array?
                        // Prompt says "For 2 current batsmen".
                        // I'll replace the out batsman with a new one after a brief delay or immediately.
                        // For now, I'll just reset the stats to a "New Batsman" to keep array size 2.
                        striker = { name: "New Batter " + (newData.wickets + 1), runs: 0, balls: 0, fours: 0, sixes: 0, strike: true, out: false };
                    }
                    newData.batsmen[strikerIdx] = striker;
                }

                // Over end strike rotation
                if (balls === 0) { // Always rotate strike at the end of an over
                    const sIdx = newData.batsmen.findIndex(b => b.strike);
                    const nsIdx = newData.batsmen.findIndex(b => !b.strike && !b.out);
                    if (sIdx !== -1 && nsIdx !== -1) {
                        newData.batsmen[sIdx].strike = false;
                        newData.batsmen[nsIdx].strike = true;
                    }
                }

                // Calculate RR
                const totalBalls = ov * 6 + balls;
                const rr = totalBalls > 0 ? (newData.runs / (totalBalls / 6)).toFixed(2) : 0;

                return {
                    ...newData,
                    runRate: rr
                };
            });
        }, 3000); // Update every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <Header matchData={matchData} />

            <Scoreboard
                score={`${matchData.runs}/${matchData.wickets}`}
                overs={matchData.overs}
                runRate={matchData.runRate}
                target={matchData.target}
            />

            <Batsmen batsmen={matchData.batsmen} />

            <div className="flex-row" style={{ gap: '12px', alignItems: 'stretch' }}>
                <div style={{ flex: 1 }}>
                    <Bowler bowler={matchData.bowler} />
                </div>
            </div>
            <BallTracker balls={matchData.thisOver} />

            <MatchInfo extras={matchData.extras} partnerships={{}} />
        </div>
    )
}

export default App
