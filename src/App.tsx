import React, { useState } from 'react';
import Login from './scripts/screens/Login';
import Game from './scripts/screens/Game';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <Game /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default App;
