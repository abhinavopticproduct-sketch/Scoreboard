import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SetupMatch from './pages/SetupMatch';
import MatchPage from './pages/MatchPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/setup" element={<SetupMatch />} />
                <Route path="/match" element={<MatchPage />} />
            </Routes>
        </Router>
    );
}

export default App;
