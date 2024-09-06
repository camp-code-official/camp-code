import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import clearBody from '../utils/ClearBody';

const Landing: React.FC = () => {
  clearBody();

  return (
    <div>
      <NavBar/>
      <main>
        <section style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '50px',
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
            <Link
              to="/login"
              style={{
                textDecoration: 'none',
                backgroundColor: '#007BFF',
                color: '#fff',
                padding: '15px 30px',
                borderRadius: '5px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                marginRight: '20px'
              }}>
              Dashboard
            </Link>
            <Link to="/about" style={{
              textDecoration: 'none',
              backgroundColor: '#ff5722',
              color: '#fff',
              padding: '15px 30px',
              borderRadius: '5px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginRight: '20px'
            }}>Learn More</Link>
          </div>
          <div style={{ maxWidth: '50%' }}>
            <img src="https://i.pinimg.com/564x/c5/3a/44/c53a44d3af7099b6bb7e7bd5bb472e41.jpg" alt="Camping Image" style={{
              maxWidth: '100%',
              height: 'auto',
              userSelect: 'none',
              pointerEvents: 'none'
            }} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
