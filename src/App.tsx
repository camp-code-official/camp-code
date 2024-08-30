import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './scripts/screens/Landing';
import About from './scripts/screens/About';
import Game from './scripts/screens/Game';
import Login from './scripts/screens/Login';

const App: React.FC = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/game" element={<Game />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
