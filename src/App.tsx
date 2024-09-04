import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './scripts/screens/Landing';
import About from './scripts/screens/About';
import Game from './scripts/screens/Game';
import Login from './scripts/screens/Login';
import SignUp from './scripts/screens/SignUp';
import Dashboard from './scripts/screens/Dashboard'; // Import the Dashboard

const App: React.FC = () => {
  const handleLogin = () => {
    // Handle login logic here, such as setting user state or redirecting
  };

  const handleSignUp = () => {
    // Handle sign-up logic here
  };

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/game" element={<Game />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
