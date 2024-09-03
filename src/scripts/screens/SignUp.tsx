import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../../firebase-config.js';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import clearBody from '../utils/ClearBody';

const SignUp: React.FC<{ onSignUp: () => void }> = ({ onSignUp }) => {
  clearBody();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onSignUp(); // This could be used to manage login state or direct post-signup actions
      navigate('/dashboard'); // Optionally navigate to dashboard or some other page
    } catch (error) {
      if (error instanceof Error) {
        setError('Error creating user: ' + error.message);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  const handleBackToLogin = () => {
    navigate('/login'); // Navigate back to the login page
  };

  return (
    <div>
      <NavBar/>
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <form onSubmit={handleSubmit} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
          <h1 style={{ marginBottom: '20px', fontSize: '24px', color: '#333' }}>Sign Up</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#555' }}>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px', margin: '5px 0 20px', border: '1px solid #ddd', borderRadius: '4px' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#555' }}>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '10px', margin: '5px 0 20px', border: '1px solid #ddd', borderRadius: '4px' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#555' }}>
            Confirm Password:
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required style={{ width: '100%', padding: '10px', margin: '5px 0 20px', border: '1px solid #ddd', borderRadius: '4px' }} />
          </label>
          <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer', width: '100%', fontSize: '16px' }}>
            Sign Up
          </button>
          <button onClick={handleBackToLogin} style={{ backgroundColor: '#FFA500', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer', width: '100%', fontSize: '16px', marginTop: '10px' }}>
            Back to Login
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
