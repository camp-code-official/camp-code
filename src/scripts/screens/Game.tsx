import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Phaser from 'phaser';
import { enable3d, Canvas } from '@enable3d/phaser-extension';
import PreloadScene from '../scenes/preloadScene';
import MenuScene from '../scenes/MenuScene';
import LevelOneScene from '../scenes/LevelOneScene';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './../../../firebase-config';
import NavBar from '../components/NavBar';

const Game: React.FC = () => {
  const gameRef = useRef<Phaser.Game | null>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is not signed in, redirect to the login page
        navigate('/login');
      }
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, [navigate]);

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.WEBGL,
      transparent: true,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720,
      },
      scene: [PreloadScene, MenuScene, LevelOneScene],
      ...Canvas(),
    };

    // Initialize the Phaser game instance using a callback for enable3d
    enable3d(() => {
      const phaserGame = new Phaser.Game(config);
      gameRef.current = phaserGame;
      return phaserGame;
    }).withPhysics('assets/ammo');

    // Cleanup function to destroy the game instance
    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <NavBar />
      <div
        id="phaser-game"
        style={{
          width: '100%',
          height: 'calc(100vh - <NavBar height> - 1mm)', 
          margin: 0,
          marginTop: '-90px',
          marginBottom: '30px'
        }}
      />
    </div>
  );
};

export default Game;