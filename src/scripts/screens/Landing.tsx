import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
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
              <Link to="#" style={{
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

      <main>
        <section style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '50px',
          backgroundColor: '#ffffff',
        }}>
          <div style={{ maxWidth: '50%' }}>
            <h1 style={{
              fontSize: '4em',
              color: '#ff9800',
              marginBottom: '20px'
            }}>CAMP CODE</h1>
            <p style={{
              fontSize: '1.2em',
              color: '#757575',
              marginBottom: '40px'
            }}>A fun and easy way to learn code.</p>
            <Link to="/game" style={{
              textDecoration: 'none',
              backgroundColor: '#ff5722',
              color: '#fff',
              padding: '15px 30px',
              borderRadius: '5px',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}>Play</Link>
            <Link to="/game" style={{
              textDecoration: 'none',
              backgroundColor: '#ff5722',
              color: '#fff',
              padding: '15px 30px',
              borderRadius: '5px',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}>Learn More</Link>
          </div>
          <div style={{ maxWidth: '50%' }}>
            <img src="https://i.pinimg.com/564x/c5/3a/44/c53a44d3af7099b6bb7e7bd5bb472e41.jpg" alt="Camping Image" style={{
              maxWidth: '100%',
              height: 'auto'
            }} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;