import React, { useState } from 'react';
import Login from './scripts/screens/Login';
import SignUp from './scripts/screens/SignUp';
import Game from './scripts/screens/Game';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignUp = () => {
    setIsSigningUp(false); // Go back to login or game after sign-up
    setIsLoggedIn(true); // Automatically log in after sign-up
  };

  return (
    <div style={{ padding: '20px' }}>
      {isLoggedIn ? (
        <Game />
      ) : isSigningUp ? (
        <>
          <SignUp onSignUp={handleSignUp} />
          <button onClick={() => setIsSigningUp(false)} style={{ marginTop: '10px' }}>
            Back to Login
          </button>
        </>
      ) : (
        <>
          <Login onLogin={handleLogin} />
          <button onClick={() => setIsSigningUp(true)} style={{ marginTop: '10px' }}>
            Sign Up
          </button>
        </>
      )}
    </div>
  );
};

export default App;
