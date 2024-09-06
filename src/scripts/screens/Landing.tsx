import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import clearBody from '../utils/ClearBody';

const Landing: React.FC = () => {
  clearBody();

  // Function to scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <NavBar />
      <main style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '40px 20px',
        minHeight: '100vh'
      }}>
        <section style={{
          marginBottom: '30px',
          color: '#ffffff',
          marginTop: '15%',
        }}>
          <img
            src="../assets/img/campcode.png"
            alt="Camp Code Logo"
            style={{
              height: '100px',
              marginBottom: '20px',
              display: 'block',
              margin: '0 auto',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
          <p style={{
            fontSize: '1.3em',
            color: '#a0a0a0',
            marginBottom: '30px'
          }}>A fun and easy way to learn code.</p>
          <Link
            to="/login"
            style={{
              textDecoration: 'none',
              backgroundColor: '#00aaff',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '5px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginRight: '15px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}>
            Dashboard
          </Link>
          <button
            onClick={scrollToBottom}
            style={{
              textDecoration: 'none',
              backgroundColor: '#fff',
              color: '#ff6f00',
              padding: '12px 24px',
              borderRadius: '5px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              border: '2px solid #ff6f00',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer'
            }}>
            Learn More
          </button>
        </section>

        {/* Video Section */}
        <section style={{
          width: '50vw',
          height: '28.125vw',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          marginTop: '20%',
          backgroundColor: '#f5f5f5',
          padding: '10px'
        }}>
          <p style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '1em',
            color: '#333',
            fontWeight: 'bold',
            backgroundColor: '#fff',
            padding: '5px 10px',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}>
            Game Demo
          </p>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/MmB9b5njVbA?controls=1&autoplay=1&mute=1&loop=1&playlist=MmB9b5njVbA"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              border: 'none',
            }}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;