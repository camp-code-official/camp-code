import React, { useEffect, useRef } from 'react';
import * as Phaser from 'phaser';
import { enable3d, Canvas } from '@enable3d/phaser-extension';
import PreloadScene from '../scenes/PreloadScene';
import MenuScene from '../scenes/MenuScene';
import LevelOneScene from '../scenes/LevelOneScene';
import NavBar from '../components/NavBar';

const Game: React.FC = () => {
  const gameRef = useRef<Phaser.Game | null>(null);

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
      <div id="phaser-game" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Game;