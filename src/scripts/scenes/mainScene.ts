import { Scene3D, ExtendedObject3D, ThirdPersonControls } from '@enable3d/phaser-extension';
import * as THREE from 'three';

export default class MainScene extends Scene3D {
  private man?: ExtendedObject3D;
  private controls?: ThirdPersonControls;
  private canJump: boolean = true;
  private isJumping: boolean = false;
  private commandQueue: string[] = [];
  private processingQueue: boolean = false;

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
    // Setup a textarea for multi-line input and a Run button
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Enter commands...';
    
    // Style the textarea
    Object.assign(textarea.style, {
      position: 'fixed',
      top: '20px', 
      right: '20px', 
      width: '400px',
      height: '200px',
      fontSize: '20px',
      backgroundColor: 'white',
      color: '#333',
      border: '2px solid #ccc',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
      zIndex: '1000',
      outline: 'none',
    });
  
    document.body.appendChild(textarea);
    textarea.focus();

    // Add Run button
    const runButton = document.createElement('button');
    runButton.textContent = 'Run';
    
    // Style the Run button
    Object.assign(runButton.style, {
      position: 'fixed',
      top: '240px', 
      right: 'calc(20px + 150px)', 
      width: '100px',
      height: '50px',
      marginTop: '20px', 
      fontSize: '20px',
      backgroundColor: '#333',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
      zIndex: '1000',
      cursor: 'pointer',
    });
    
    document.body.appendChild(runButton);

    runButton.addEventListener('click', () => {
      const commands = textarea.value.split('\n').map(cmd => cmd.trim());
      this.commandQueue = [];
      
      commands.forEach((command, index) => {
        if (this.isValidCommand(command)) {
          this.commandQueue.push(command);
        } else {
          alert(`Error on line ${index + 1}: Invalid command '${command}'`);
        }
      });

      this.processCommands();
    });
  }

  isValidCommand(command: string) {
    // List of valid commands
    const validCommands = ['forward()', 'backward()', 'left()', 'right()', 'jump()', 'jump_forward()', 'jump_left()', 'jump_right()'];
    return validCommands.includes(command);
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

  processCommands() {
    // Check if there are commands to process and not currently processing the queue
    if (this.commandQueue.length === 0 || this.processingQueue) return;
    
    this.processingQueue = true;
    const command = this.commandQueue.shift();
    if (command) {
      this.executeCommand(command);
    }

    this.time.addEvent({
      delay: 500, // Delay between commands (in milliseconds)
      callback: () => {
        this.processingQueue = false;
        this.processCommands(); // Continue processing the next command
      }
    });
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