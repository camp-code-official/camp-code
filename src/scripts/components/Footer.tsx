import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const linkedInProfiles = [
    { name: 'Banibe Ebegbodi', link: 'https://www.linkedin.com/in/bani-ebegbodi/' },
    { name: 'Jaden Wong', link: 'https://www.linkedin.com/in/jadenawong/' },
    { name: 'Shreya Gogini', link: 'https://www.linkedin.com/in/shreya-gogini-917606234/' },
    { name: 'Thompson Ngo', link: 'https://www.linkedin.com/in/tngo2001/' }
  ];

  return (
    <footer style={{
      padding: '20px 20px',
      textAlign: 'center',
      borderTop: '2px solid #ddd',
      backgroundColor: '#fff',
      bottom: 0,
      left: 0,
      width: '100%',
    }}>
      <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
          Created by Camp Code Team
        </span>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {linkedInProfiles.map((profile, idx) => (
          <a
            key={idx}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#007BFF', fontSize: '16px', fontWeight: 'bold' }}
          >
            {profile.name}
          </a>
        ))}
      </div>

      <div style={{ marginTop: '10px' }}>
        <a
          href="https://github.com/camp-code-official"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#333', fontSize: '36px', marginRight: '20px' }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/company/camp-code"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#333', fontSize: '36px' }}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;