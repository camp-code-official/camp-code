import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', color: '#333', margin: 0, padding: 0 }}>
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

      <main className="content" style={{ textAlign: 'center', padding: '50px 20px' }}>
        <h1 style={{ color: '#ff8c00', fontSize: '36px' }}>About Camp Code</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
          Camp Code is an immersive coding program designed to help you learn Python in a fun and adventurous way. Imagine yourself in a camping scenario where each coding task you complete helps you survive and thrive in the wild. From building a shelter to foraging for food, your coding skills will be your key to mastering the forest.
        </p>
      </main>

      <div className="forest-border" style={{ paddingTop: '50px' }}>
        <div style={badgeStyle}>
          <h2 style={{ fontSize: '28px', margin: 0, paddingTop: '100px' }}>Learn Survival Coding</h2>
          <p style={{ fontSize: '16px' }}>
            As you navigate through the forest, you'll learn the basics of Python programming. Each challenge is a step towards mastering coding fundamentals while you gather resources, set up camp, and keep the forest critters at bay.
          </p>
        </div>

        <div style={badgeStyle}>
          <h2 style={{ fontSize: '28px', margin: 0, paddingTop: '100px' }}>Advanced Coding Challenges</h2>
          <p style={{ fontSize: '16px' }}>
            Once you've set up camp, it's time to delve deeper into Python. Advanced coding challenges will test your skills as you build tools, solve puzzles, and unlock new areas of the forest.
          </p>
        </div>

        <div style={badgeStyle}>
          <h2 style={{ fontSize: '28px', margin: 0, paddingTop: '100px' }}>Earn Badges & Rewards</h2>
          <p style={{ fontSize: '16px' }}>
            Complete tasks and challenges to earn badges that showcase your coding prowess. Collect rewards as you progress, and watch your coding skills grow alongside your survival instincts.
          </p>
        </div>
      </div>
    </div>
  );
};

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

export default About;