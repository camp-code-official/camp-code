import { Scene3D, ExtendedObject3D, ThirdPersonControls } from '@enable3d/phaser-extension';
import * as THREE from 'three';

export default class MainScene extends Scene3D {
  private man?: ExtendedObject3D;
  private controls?: ThirdPersonControls;
  private canJump: boolean = true;
  private isJumping: boolean = false;

  constructor() {
    super({ key: 'MainScene' });
  }

  init() {
    this.accessThirdDimension();
  }

  create() {
    this.setupScene();
    this.loadPlayer();
    this.setupInput();
    this.createCommandLibrary(); // Add command library to the screen
  }

  setupScene() {
    // Setup the scene
    this.third.warpSpeed('camera', 'sky', 'grid', 'ground', 'light');
    this.third.physics.add.box({ x: -1, y: 2 });
  }

  loadPlayer() {
    // Load the player model and add to the scene
    this.third.load.gltf('/assets/glb/box_man.glb').then(object => {
      const manModel = object.scene.children[0];
      this.man = new ExtendedObject3D();
      this.man.name = 'man';
      this.man.add(manModel);
      this.setupPlayerPhysics();
      this.setupPlayerAnimations(object.animations);
      this.addThirdPersonControls();
    });
  }

  setupPlayerPhysics() {
    // Setup player physics and material properties
    if (!this.man) return;

    this.man.traverse(child => {
      if (child.isMesh) {
        child.shape = 'convex';
        child.castShadow = child.receiveShadow = true;

        if (child.material instanceof THREE.MeshStandardMaterial) {
          child.material.roughness = 1;
          child.material.metalness = 0;
        }
      }
    });

    this.man.position.set(0, 2, 8);
    this.third.add.existing(this.man);
    this.third.physics.add.existing(this.man, {
      shape: 'capsule',
      radius: 0.2,
      height: 0.6,
      offset: { y: -0.55 }
    });
    this.man.body.setFriction(0.8);
    this.man.body.setAngularFactor(0, 0, 0);
  }

  setupPlayerAnimations(animations: THREE.AnimationClip[]) {
    // Setup player animations
    if (!this.man) return;

    this.third.animationMixers.add(this.man.anims.mixer);
    animations.forEach(animation => {
      if (animation.name) {
        this.man?.anims.add(animation.name, animation);
      }
    });
    this.man?.anims.play('idle');
  }

  addThirdPersonControls() {
    // Add third-person controls for the camera
    if (!this.man) return;

    this.controls = new ThirdPersonControls(this.third.camera, this.man, {
      offset: new THREE.Vector3(0, 1, 0),
      targetRadius: 3
    });
  }

  setupInput() {
    // Setup input for text commands
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter a command...';
    
    // Center the input box at the bottom of the screen
    Object.assign(input.style, {
      position: 'fixed',
      bottom: '20px', // 20px from the bottom of the screen
      left: '50%', // Center horizontally
      transform: 'translateX(-50%)', // Center the input box itself
      width: '400px', // Wider input box
      height: '50px',
      fontSize: '20px',
      backgroundColor: 'white',
      color: '#333', // Dark grey text
      border: '2px solid #ccc', // Light grey border for a cleaner look
      padding: '10px',
      borderRadius: '8px', // Slightly reduced border radius
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Softer shadow for a more subtle effect
      zIndex: '1000',
      outline: 'none', // Remove default outline on focus
    });
  
    document.body.appendChild(input);
    input.focus();
  
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const command = input.value.toLowerCase().trim();
        console.log("Command entered:", command);
        this.executeCommand(command);
        input.value = '';
      }
    });
  }
  
  
  createCommandLibrary() {
    // Create a command library element
    const commandLibrary = document.createElement('div');
    commandLibrary.innerHTML = `
      <h2>Command Library</h2>
      <ul>
        <li><strong>forward()</strong> - Move forward</li>
        <li><strong>backward()</strong> - Move backward</li>
        <li><strong>left()</strong> - Move left</li>
        <li><strong>right()</strong> - Move right</li>
        <li><strong>jump()</strong> - Jump up</li>
        <li><strong>jump_forward()</strong> - Jump forward</li>
        <li><strong>jump_left()</strong> - Jump left</li>
        <li><strong>jump_right()</strong> - Jump right</li>
      </ul>
    `;
  
    // Style the command library
    Object.assign(commandLibrary.style, {
      position: 'fixed',
      top: '20px', // 20px from the top of the screen
      left: '20px', // 20px from the left of the screen
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Increased opacity for better readability
      color: 'white',
      padding: '14px',
      borderRadius: '8px',
      fontSize: '20px',
      zIndex: '1000',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', // Softer shadow for depth
    });
  
    document.body.appendChild(commandLibrary);
  }
  

  executeCommand(command: string) {
    // Execute movement commands based on input
    switch (command) {
      case 'forward()':
        this.moveInDirection(0);
        break;
      case 'backward()':
        this.moveInDirection(Math.PI);
        break;
      case 'left()':
        this.moveInDirection(Math.PI / 2);
        break;
      case 'right()':
        this.moveInDirection(-Math.PI / 2);
        break;
      case 'jump()':
        this.jump();
        break;
      case 'jump_forward()':
        this.jumpAndMove(0);
        break;
      case 'jump_left()':
        this.jumpAndMove(Math.PI / 2);
        break;
      case 'jump_right()':
        this.jumpAndMove(-Math.PI / 2);
        break;
      default:
        console.log('Unknown command:', command);
    }
  }

  moveInDirection(angleOffset: number) {
    // Move the player in the specified direction
    if (this.man && this.man.body) {
      const speed = 4;
      const v3 = new THREE.Vector3();
      const cameraDirection = this.third.camera.getWorldDirection(v3);
      const theta = Math.atan2(cameraDirection.x, cameraDirection.z) + angleOffset;

      const x = Math.sin(theta) * speed;
      const y = this.man.body.velocity.y; // Preserve vertical velocity
      const z = Math.cos(theta) * speed;

      this.man.body.setVelocity(x, y, z);

      if (!this.isJumping) {
        this.man?.anims.play('idle');
      }
    }
  }

  jump() {
    // Handle jumping
    if (this.man && this.canJump && this.man.body) {
      this.canJump = false;
      this.isJumping = true;
      this.man?.anims.play('jump_running');
      this.man.body.applyForceY(4);

      this.time.addEvent({
        delay: 750,
        callback: () => {
          this.canJump = true;
        }
      });

      this.time.addEvent({
        delay: 750,
        callback: () => {
          if (this.man) {
            this.man?.anims.play('idle');
            this.isJumping = false;
          }
        }
      });
    }
  }

  jumpAndMove(angleOffset: number) {
    // Jump and move in the specified direction
    this.jump();
    this.moveInDirection(angleOffset);
  }

  update(time: number, delta: number) {
    // Update third-person controls
    if (this.man && this.man.body && this.controls && this.controls.update) {
      this.controls.update(0, 0); // No directional movement in this version
    }
  }
}

