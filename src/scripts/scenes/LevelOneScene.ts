import { Scene3D, ExtendedObject3D, ThirdPersonControls } from '@enable3d/phaser-extension';
import * as THREE from 'three';

export default class LevelOneScene extends Scene3D {
  private man?: ExtendedObject3D;
  private controls?: ThirdPersonControls;
  private canJump: boolean = true;
  private isJumping: boolean = false;
  private commandQueue: string[] = [];
  private processingQueue: boolean = false;

  constructor() {
    super({ key: 'LevelOneScene' });
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
    // Setup the basic scene
    this.third.warpSpeed('camera', 'sky', 'ground', 'light');
    this.loadLandscape();
    // Add the solid floor
    const floorGeometry = new THREE.BoxGeometry(100, 0.01, 100); // Adjust dimensions as needed
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 'yellow' });
    const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
  
    // Position the floor
    floorMesh.position.set(0, 0, 0); // Position the floor at ground level
    floorMesh.receiveShadow = true;
  
    // Add the floor to the scene
    const floor = new ExtendedObject3D();
    floor.add(floorMesh);
    this.third.add.existing(floor);
  
    // Add physics to the floor
    this.third.physics.add.existing(floor, { mass: 0 }); // Make the floor static
  
    // Add other environmental elements or lighting
    const ambientLight = new THREE.AmbientLight(0xaaaaaa, 0.6); // Soft ambient light
    this.third.scene.add(ambientLight);
  
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(50, 100, 50);
    directionalLight.castShadow = true;
    this.third.scene.add(directionalLight);
  }
  
  loadLandscape() {
    this.third.load.gltf('/assets/glb/camp_code_landscape.glb').then((loadedModel) => {
      const landscapeGroup = loadedModel.scene;

        //ExtendedObject3D to hold landscape 
        const landscape = new ExtendedObject3D();
        landscape.add(landscapeGroup);

       //Scaling and positioning scene
        landscape.scale.set(1, 1, 1); //Adjusting scaling
        landscape.position.set(-10, .05, -8); //Adjusting positioning 
        landscape.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true; 
            child.receiveShadow = true; 
          }
        });

        //rotating the landscape
        landscape.rotation.set(
          0, //x
          Math.PI/2, //y
          0 //z
        )

        this.third.scene.add(landscape); 
        this.third.physics.add.existing(landscape, { mass: 0 }); //making scene static
    });
  }

  /** 
  
  createTerrain() {
    // Create a plane geometry for the ground
    const groundGeometry = new THREE.PlaneGeometry(100, 100, 64, 64); // Large enough to simulate a mountain trail
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x4F4F4F }); // Darker color for gravel or dirt
    const ground = new ExtendedObject3D(); // Use ExtendedObject3D for compatibility with `enable3d`
    
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.rotation.x = -Math.PI / 2; // Rotate the plane to be flat
    groundMesh.position.y = 0.1; // Raise the ground slightly to prevent z-fighting
    groundMesh.receiveShadow = true;
    
    // Add some noise to the ground to create a hilly terrain
    const positionAttribute = groundMesh.geometry.getAttribute('position');
    for (let i = 0; i < positionAttribute.count; i++) {
      const y = positionAttribute.getY(i);
      positionAttribute.setY(i, y + Math.random() * 2 - 1); // Random elevation to create hills
    }
    positionAttribute.needsUpdate = true;
    groundMesh.geometry.computeVertexNormals(); // Recalculate normals for lighting
    
    ground.add(groundMesh); // Add the mesh to the extended object
    this.third.add.existing(ground);
    this.third.physics.add.existing(ground, { mass: 0 });
  }
  
  addEnvironmentalElements() {
    // Define fixed positions for the trees
    const treePositions = [
      { x: -15, z: -10 },
      { x: -10, z: -20 },
      { x: -5, z: -5 },
      { x: 5, z: -15 },
      { x: 10, z: -25 },
      { x: 15, z: -10 },
      { x: -20, z: 5 },
      { x: 20, z: -5 },
      { x: -25, z: -15 },
      { x: 15, z: 10 }
    ];
  
    // Add trees at fixed positions
    const treeGeometry = new THREE.CylinderGeometry(0.2, 0.5, 3, 8);
    const treeMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 }); // Brown color for the trunk
    const leavesGeometry = new THREE.ConeGeometry(1, 2, 8);
    const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 }); // Green color for the leaves
  
    treePositions.forEach(({ x, z }) => {
      const treeTrunk = new ExtendedObject3D(); // Create ExtendedObject3D for compatibility
      const treeTrunkMesh = new THREE.Mesh(treeGeometry, treeMaterial);
      treeTrunkMesh.position.set(x, 1.5, z); // Elevate tree trunk
      treeTrunkMesh.castShadow = true;
      treeTrunk.add(treeTrunkMesh);
      this.third.add.existing(treeTrunk);
  
      const treeLeaves = new ExtendedObject3D(); // Create ExtendedObject3D for compatibility
      const treeLeavesMesh = new THREE.Mesh(leavesGeometry, leavesMaterial);
      treeLeavesMesh.position.set(x, 3, z); // Elevate leaves above the trunk
      treeLeavesMesh.castShadow = true;
      treeLeaves.add(treeLeavesMesh);
      this.third.add.existing(treeLeaves);
    });
  
    // Add larger rocks to the scene
    for (let i = 0; i < 10; i++) {
      const rockSize = Math.random() * 0.5 + 0.1;
      const rockGeometry = new THREE.DodecahedronGeometry(rockSize);
      const rockMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 }); // Gray color for rocks
      
      const rock = new ExtendedObject3D(); // Create ExtendedObject3D for compatibility
      const rockMesh = new THREE.Mesh(rockGeometry, rockMaterial);
      const x = Math.random() * 50 - 25;
      const z = Math.random() * 50 - 25;
      rockMesh.position.set(x, rockSize / 2, z);
      rockMesh.castShadow = true;
      
      rock.add(rockMesh);
      this.third.add.existing(rock);
      this.third.physics.add.existing(rock, { mass: 0 }); // Static rock
    }
  
    // Add smaller pebble-like rocks scattered across the floor
    for (let i = 0; i < 30; i++) {
      const pebbleSize = Math.random() * 0.1 + 0.05; // Small pebble size
      const pebbleGeometry = new THREE.SphereGeometry(pebbleSize, 8, 8);
      const pebbleMaterial = new THREE.MeshStandardMaterial({ color: 0x696969 }); // Darker gray color for pebbles
  
      const pebble = new ExtendedObject3D();
      const pebbleMesh = new THREE.Mesh(pebbleGeometry, pebbleMaterial);
      const x = Math.random() * 50 - 25;
      const z = Math.random() * 50 - 25;
      pebbleMesh.position.set(x, pebbleSize / 2, z); // Position pebbles just above the ground
      pebbleMesh.castShadow = true;
  
      pebble.add(pebbleMesh);
      this.third.add.existing(pebble);
      this.third.physics.add.existing(pebble, { mass: 0 }); // Static pebbles
    }
  }
    */
  
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

    this.man.position.set(-10, 2, 8);
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
    // Create a container for the textarea and the Run button
    const inputContainer = document.createElement('div');
    Object.assign(inputContainer.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '400px',
      zIndex: '1000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end', // Align items to the right
      gap: '10px', // Space between the textarea and the button
    });
  
    // Create the textarea
    const textarea = document.createElement('textarea');
    textarea.placeholder = `Enter commands...\n(e.g., "for (let i = 0; i < 3; i++) {\n  forward();\n}")`;
    
    // Style the textarea for proper code formatting
    Object.assign(textarea.style, {
      width: '100%',
      height: '200px',
      fontSize: '16px',
      backgroundColor: '#f5f5f5',
      color: '#333',
      border: '2px solid #ddd',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      outline: 'none',
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
    });
  
    // Add event listener for 'Tab' key to allow indentation
    textarea.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        event.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        
        // Insert tab character (or spaces) at the caret position
        textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1; // Move caret
      }
    });
  
    // Create the Run button
    const runButton = document.createElement('button');
    runButton.textContent = 'Run';
    
    // Style the Run button
    Object.assign(runButton.style, {
      alignSelf: 'center',
      width: '100px',
      height: '50px',
      fontSize: '16px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
    });
  
    runButton.addEventListener('click', () => {
      const inputText = textarea.value;
      this.commandQueue = [];
      
      // Split commands by line and process each line
      const lines = inputText.split('\n').map(line => line.trim());
      
      // Combine lines properly for loop handling
      let combinedLines = '';
      let insideLoop = false;
      lines.forEach((line, index) => {
        if (line.startsWith('for ')) {
          insideLoop = true;
          combinedLines += line + ' ';
        } else if (insideLoop && line.endsWith('}')) {
          insideLoop = false;
          combinedLines += line;
          this.handleForLoop(combinedLines, index);
          combinedLines = ''; // Reset for next potential loop
        } else if (insideLoop) {
          combinedLines += line + ' ';
        } else if (this.isValidCommand(line)) {
          this.commandQueue.push(line);
        } else {
          alert(`Error on line ${index + 1}: Invalid command '${line}'`);
        }
      });
      
      this.processCommands();
      textarea.value = ''; // Empty the input box after running
    });
  
    // Append textarea and button to the container
    inputContainer.appendChild(textarea);
    inputContainer.appendChild(runButton);
  
    // Add the container to the document body
    document.body.appendChild(inputContainer);
  }
  
  handleForLoop(line: string, lineNumber: number) {
    try {
      // Extract the loop body and parameters
      const loopMatch = line.match(/for\s*\(\s*let\s*(\w+)\s*=\s*(\d+)\s*;\s*\w+\s*<\s*(\d+)\s*;\s*\w+\+\+\s*\)\s*\{\s*([^}]*)\s*\}/);
      if (!loopMatch) throw new Error(`Syntax error in for-loop at line ${lineNumber + 1}`);
      
      const [_, varName, start, end, loopBody] = loopMatch;
      const startIdx = parseInt(start);
      const endIdx = parseInt(end);
  
      // Add the commands inside the loop to the command queue
      for (let i = startIdx; i < endIdx; i++) {
        const commands = loopBody.split(';').map(cmd => cmd.trim()).filter(cmd => cmd.length > 0);
        commands.forEach(command => {
          if (this.isValidCommand(command)) {
            this.commandQueue.push(command);
          } else {
            throw new Error(`Invalid command '${command}' inside for-loop at line ${lineNumber + 1}`);
          }
        });
      }
    } catch (error) {
      alert((error as Error).message);
    }
  }
  

  isValidCommand(command: string) {
    // List of valid commands
    const validCommands = ['forward()', 'backward()', 'left()', 'right()', 'jump()', 'jump_forward()', 'jump_left()', 'jump_right()'];
    return validCommands.includes(command);
  }

  createCommandLibrary() {
    // Create a command library container
    const commandLibraryContainer = document.createElement('div');
    Object.assign(commandLibraryContainer.style, {
      position: 'fixed',
      bottom: '20px', // Adjusted from 'top' to 'bottom'
      left: '20px',
      width: '300px',
      maxHeight: '300px',
      overflowY: 'auto', // Enable scroll for overflow
      backgroundColor: '#333', // Darker background for contrast
      color: 'white',
      padding: '10px',
      borderRadius: '12px', // Rounded corners
      fontSize: '14px',
      zIndex: '1000',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
      transition: 'max-height 0.3s ease', // Smooth transition for collapse
    });
    
    // Create a button to toggle the collapse state
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Command Library ▼';
    Object.assign(toggleButton.style, {
      display: 'block',
      width: '100%',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '5px',
      cursor: 'pointer',
      marginBottom: '10px',
      textAlign: 'left',
    });
    
    // Create the content for the command library
    const commandLibraryContent = document.createElement('div');
    commandLibraryContent.innerHTML = `
      <h2 style="margin-top: 0;">Command Library</h2>
      <ul style="padding-left: 20px; list-style: none; line-height: 1.6;">
        <li><strong>forward()</strong> - Move forward</li>
        <li><strong>backward()</strong> - Move backward</li>
        <li><strong>left()</strong> - Move left</li>
        <li><strong>right()</strong> - Move right</li>
        <li><strong>jump()</strong> - Jump up</li>
        <li><strong>jump_forward()</strong> - Jump forward</li>
        <li><strong>jump_left()</strong> - Jump left</li>
        <li><strong>jump_right()</strong> - Jump right</li>
        <li><strong>for loop</strong> - Repeat commands
          <ul style="padding-left: 20px;">
            <li>Syntax: <code>for (let i = 0; i < n; i++) {</code></li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;<code>command;</code></li>
            <li><code>}</code></li>
            <li>Example:</li>
            <li><code>for (let i = 0; i < 3; i++) {</code></li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;<code>forward();</code></li>
            <li><code>}</code></li>
          </ul>
        </li>
      </ul>
    `;
    
    // Initially hide the command library content
    commandLibraryContent.style.display = 'none';
    
    // Toggle button click event to show/hide content
    toggleButton.addEventListener('click', () => {
      const isHidden = commandLibraryContent.style.display === 'none';
      commandLibraryContent.style.display = isHidden ? 'block' : 'none';
      toggleButton.textContent = isHidden ? 'Command Library ▲' : 'Command Library ▼';
    });
    
    // Append the button and content to the container
    commandLibraryContainer.appendChild(toggleButton);
    commandLibraryContainer.appendChild(commandLibraryContent);
    
    // Add the command library container to the document body
    document.body.appendChild(commandLibraryContainer);
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