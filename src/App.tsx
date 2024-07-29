import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import GameComponent from './components/GameComponent';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div style={{ height: '100vh' }}>
      {isLoggedIn ? <GameComponent /> : <LoginForm onLogin={handleLogin} />}
    </div>
  );
};

export default App;
