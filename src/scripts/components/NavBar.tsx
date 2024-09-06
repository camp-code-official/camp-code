import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './../../../firebase-config';
import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

const NavBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
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
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src="../assets/img/campcode.png" alt="Camp Code Logo" style={{
            height: '50px',
            marginRight: '10px',
            cursor: 'pointer',
            userSelect: 'none',
            pointerEvents: 'none'
          }} />
        </Link>
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
            <Link to="https://forms.gle/jSQrvAUN3JD93RCi6" target="_blank" style={{
              textDecoration: 'none',
              color: '#007BFF',
              fontWeight: 'bold'
            }}>Contact</Link>
          </li>
          <li style={{ marginLeft: '20px' }}>
            {isLoggedIn ? (
              <button onClick={handleLogout} style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#007BFF',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>Logout</button>
            ) : (
              <Link to="/login" style={{
                textDecoration: 'none',
                color: '#007BFF',
                fontWeight: 'bold'
              }}>Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;