import React, { useState } from 'react';
import LoginComponent from './components/LoginComponent';
import GameComponent from './components/GameComponent';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <GameComponent /> : <LoginComponent onLogin={handleLogin} />}
    </div>
  );
};

export default App;
