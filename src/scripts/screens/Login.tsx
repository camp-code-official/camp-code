import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../../firebase-config'; // Ensure this path is correct to your Firebase config

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();  // Optionally handle state changes or other logic
      navigate('/game'); // Navigate to the dashboard upon successful login
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); // Display Firebase error messages
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup'); // Directs user to the signup page
  };

  return (
    <div>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img src="../assets/img/campcode.png" alt="Camp Code Logo" style={{
            height: '50px',
            marginRight: '10px'
          }} />
        </div>
        <nav>
          <ul style={{
            listStyle: 'none',
            margin: '0',
            padding: '0',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <li style={{ marginLeft: '20px' }}>
              <Link to="/" style={{
                textDecoration: 'none',
                color: '#007BFF',
                fontWeight: 'bold'
              }}>Home</Link>
            </li>
            <li style={{ marginLeft: '20px' }}>
              <Link to="/about" style={{
                textDecoration: 'none',
                color: '#007BFF',
                fontWeight: 'bold'
              }}>About</Link>
            </li>
            <li style={{ marginLeft: '20px' }}>
              <Link to="/contact" style={{
                textDecoration: 'none',
                color: '#007BFF',
                fontWeight: 'bold'
              }}>Contact</Link>
            </li>
            <li style={{ marginLeft: '20px' }}>
              <Link to="/login" style={{
                textDecoration: 'none',
                color: '#007BFF',
                fontWeight: 'bold'
              }}>Login</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 80px)' }}>
        <form onSubmit={handleSubmit} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
          <h1 style={{ marginBottom: '20px', fontSize: '24px', color: '#333' }}>Login</h1>
          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
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
          <button onClick={handleSignUpRedirect} style={{ backgroundColor: '#FFA500', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer', width: '100%', fontSize: '16px', marginTop: '10px' }}>
            Sign Up
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
