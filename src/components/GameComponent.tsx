import React, { useEffect, useRef } from 'react';
import * as Phaser from 'phaser';
import { enable3d, Canvas } from '@enable3d/phaser-extension';
import MainScene from '../scripts/scenes/MainScene';
import PreloadScene from '../scripts/scenes/PreloadScene';

const GameComponent: React.FC = () => {
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
      scene: [PreloadScene, MainScene],
      ...Canvas(),
    };

    // Initialize the Phaser game instance and save it in a ref
    gameRef.current = enable3d(() => new Phaser.Game(config)).withPhysics('assets/ammo');

    // Cleanup function to destroy the game instance
    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return <div id="phaser-game" style={{ width: '100%', height: '100%' }} />;
};

export default GameComponent;
