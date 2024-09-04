import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock user data
const mockUser = {
    username: 'User',
    progress: 'Level 7',
    badges: [
        { name: 'Skill 1', description: 'Blah Blah' },
        { name: 'Skill 2', description: 'Blah Blah' }
    ],
    character: {
        name: '',
        avatarUrl: '/assets/img/user-avatar.png'
    }
};

const Dashboard: React.FC = () => {
    const [user, setUser] = useState(mockUser);

    // Fetch real user data here if you connect with an API
    useEffect(() => {
        // You can fetch user data here using an API or from local storage if logged in
        // setUser(fetchedUserData);
    }, []);

    return (
        <div style={styles.dashboard}>
            <div style={styles.userInfo}>
                <h1>Welcome, {user.username}</h1>
                <div style={styles.characterInfo}>
                    <img
                        src={user.character.avatarUrl}
                        alt={user.character.name}
                        style={styles.characterAvatar}
                    />
                    <p>{user.character.name}</p>
                </div>
                <div style={styles.progressInfo}>
                    <h2>Progress</h2>
                    <p>{user.progress}</p>
                </div>
                <Link to="/game" style={styles.playButton}>
                    Play
                </Link>
            </div>
            <div style={styles.badgesInfo}>
                <h2>Badges</h2>
                <ul style={styles.badgeList}>
                    {user.badges.map((badge, index) => (
                        <li key={index} style={styles.badgeItem}>
                            <h3>{badge.name}</h3>
                            <p>{badge.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const styles = {
    dashboard: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        padding: '20px',
        backgroundImage: 'url(/assets/img/camp-background1.webp)', // Background image resembling the camp scene
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: '#fff', // White color for text to stand out against the background
        fontFamily: 'Arial, sans-serif',
    },
    userInfo: {
        textAlign: 'center' as const,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for contrast
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px',
        width: '80%',
    },
    characterInfo: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
    },
    characterAvatar: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        border: '5px solid #FFA500', // Orange border matching the theme
        marginBottom: '10px',
    },
    progressInfo: {
        marginTop: '20px',
    },
    badgesInfo: {
        marginTop: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        padding: '20px',
        borderRadius: '10px',
        width: '80%',
    },
    badgeList: {
        listStyle: 'none',
        padding: '0',
    },
    badgeItem: {
        marginBottom: '10px',
        backgroundColor: '#4CAF50', // Green background for badges
        padding: '10px',
        borderRadius: '5px',
    },
    playButton: {
        textDecoration: 'none',
        backgroundColor: '#ff5722',
        color: '#fff',
        padding: '15px 30px',
        borderRadius: '5px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: '20px',
        display: 'inline-block',
    },
};

export default Dashboard;
