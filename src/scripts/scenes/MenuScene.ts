import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
  private unlockedLevels: Set<string>;

  constructor() {
    super({ key: 'MenuScene' });
    this.unlockedLevels = new Set(); // Keep track of unlocked levels
  }

  preload() {
    // No need to preload button images
  }

  create() {
    // Initialize the set with the levels that are unlocked
    this.unlockedLevels.add('LevelOneScene'); // Initially, Level 1 is unlocked

    // Define levels with their corresponding scene keys
    const levels = [
      { name: 'Level 1', sceneKey: 'LevelOneScene' },
      { name: 'Level 2', sceneKey: 'LevelTwoScene' },
      { name: 'Level 3', sceneKey: 'LevelThreeScene' },
    ];

    const buttonWidth = 200;
    const buttonHeight = 50;
    const spacing = 60;
    const startX = this.cameras.main.centerX - buttonWidth / 2;
    let startY = 100;

    levels.forEach((level) => {
      // Create a button as a Phaser.Graphics object
      const button = this.add.graphics();
      const isUnlocked = this.unlockedLevels.has(level.sceneKey);
      const buttonColor = isUnlocked ? 0x4CAF50 : 0x9E9E9E; // Green for unlocked, grey for locked
      button.fillStyle(buttonColor);
      button.fillRect(startX, startY, buttonWidth, buttonHeight);

      // Add text on top of the button
      const text = this.add.text(startX + buttonWidth / 2, startY + buttonHeight / 2, level.name, {
        fontSize: '16px',
      }).setOrigin(0.5);

      // Make the button interactive
      button.setInteractive(new Phaser.Geom.Rectangle(startX, startY, buttonWidth, buttonHeight), Phaser.Geom.Rectangle.Contains);

      button.on('pointerdown', () => {
        if (isUnlocked) {
          this.scene.start(level.sceneKey);
        }
      });

      startY += buttonHeight + spacing;
    });
  }

  unlockLevel(sceneKey: string) {
    this.unlockedLevels.add(sceneKey);
    // You might want to refresh the menu to update the lock status
    this.scene.restart(); // Restart the scene to refresh button states
  }
}