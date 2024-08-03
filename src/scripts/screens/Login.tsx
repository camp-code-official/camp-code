import React, { useState } from 'react';

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f4' }}>
      <form onSubmit={handleSubmit} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '24px', color: '#333' }}>Login</h1>
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#555' }}>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px', margin: '5px 0 20px', border: '1px solid #ddd', borderRadius: '4px' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#555' }}>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '10px', margin: '5px 0 20px', border: '1px solid #ddd', borderRadius: '4px' }} />
        </label>
        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer', width: '100%', fontSize: '16px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
