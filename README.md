# Cricket Scoreboard Platform

A production-ready, mobile-responsive cricket scoreboard built with React + Vite.

## Features
- **Real-time Simulation**: Updates scores, wickets, and events every 3 seconds.
- **Broadcast UI**: Dark mode with neon accents.
- **Responsive Design**: Mobile-first layout.
- **Logic**: 
  - Strike rotation (runs & over end).
  - Run rate calculation.
  - Bowler switching.
  - Target chasing logic.

## Setup & Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

## Deployment
Build for production:
```bash
npm run build
```
The `dist` folder can be deployed to Vercel, Netlify, or GitHub Pages.

## Structure
- `src/components/`: UI components (Header, Scoreboard, Batsmen, etc.)
- `src/App.jsx`: Main game logic and simulation engine.
- `src/index.css`: Global styles and theme variables.
