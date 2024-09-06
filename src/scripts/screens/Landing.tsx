import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import clearBody from '../utils/ClearBody';

const Landing: React.FC = () => {
  clearBody();

  // Function to scroll to the "About Camp Code" section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
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
        backgroundColor: '#ffffff',
        minHeight: '100vh'
      }}>
        <section style={{
          marginBottom: '30px',
          color: '#333',
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
          <button onClick={scrollToAbout} style={{
            textDecoration: 'none',
            backgroundColor: '#fff',
            color: '#ff6f00',
            padding: '12px 24px',
            borderRadius: '5px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            border: '2px solid #ff6f00',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
          }}>Learn More</button>
        </section>

        {/* Video Section */}
        <section style={{
          width: '50vw',
          height: '28.125vw',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          marginTop: '10%',
          backgroundColor: '#f5f5f5',
          padding: '10px'
        }}>
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

      {/* About Section */}
      <main id="about-section" className="content" style={{ textAlign: 'center', padding: '50px 20px' }}>
        <h1 style={{ color: '#ff8c00', fontSize: '36px' }}>About Camp Code</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
          Camp Code is an immersive coding program designed to help you learn programming in a fun and adventurous way. Imagine yourself in a camping scenario where each coding task you complete helps you survive and thrive in the wild. From building a shelter to foraging for food, your coding skills will be your key to mastering the forest.
        </p>
      </main>

      <div className="forest-border" style={{ paddingTop: '50px' }}>
        <div style={badgeStyle}>
          <h2 style={{ fontSize: '28px', margin: 0, paddingTop: '100px' }}>Learn Survival Coding</h2>
          <p style={{ fontSize: '16px' }}>
            As you navigate through the forest, you'll learn the basics of programming. Each challenge is a step towards mastering coding fundamentals while you gather resources, set up camp, and keep the forest critters at bay.
          </p>
        </div>

        <div style={badgeStyle}>
          <h2 style={{ fontSize: '28px', margin: 0, paddingTop: '100px' }}>Advanced Coding Challenges</h2>
          <p style={{ fontSize: '16px' }}>
            Once you've set up camp, it's time to delve deeper into programming. Advanced coding challenges will test your skills as you build tools, solve puzzles, and unlock new areas of the forest.
          </p>
        </div>

        <div style={badgeStyle}>
          <h2 style={{ fontSize: '28px', margin: 0, paddingTop: '100px' }}>Earn Badges & Rewards</h2>
          <p style={{ fontSize: '16px' }}>
            Complete tasks and challenges to earn badges that showcase your coding prowess. Collect rewards as you progress, and watch your programming skills grow alongside your survival instincts.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const badgeStyle: React.CSSProperties = {
  backgroundImage: 'url(https://www.clipartmax.com/png/full/107-1074090_cartoon-medal-badge-png.png)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  padding: '20px',
  marginBottom: '40px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '80%',
  marginLeft: '10%',
  position: 'relative',
  border: '4px solid #f0f8ff',
  borderImage: 'linear-gradient(to right, #87cefa, #ffeb3b) 1',
};

export default Landing;
