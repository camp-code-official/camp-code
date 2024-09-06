import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './../../../firebase-config';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import clearBody from '../utils/ClearBody';

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  clearBody();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, redirect to the dashboard page
        navigate('/dashboard');
      }
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();  // Optionally handle state changes or other logic
      navigate('/dashboard'); // Navigate to the dashboard upon successful login
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
      <NavBar />

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

      <Footer />
    </div>
  );
};

export default Login;