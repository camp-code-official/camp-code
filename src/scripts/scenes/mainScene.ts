import { Scene3D, ExtendedObject3D, ThirdPersonControls, PointerLock, PointerDrag } from '@enable3d/phaser-extension';
import * as THREE from 'three';

export default class MainScene extends Scene3D {
  private man?: ExtendedObject3D;
  private controls?: ThirdPersonControls;
  private keys: any;
  private canJump: boolean = true;
  private isJumping: boolean = false;
  private move: boolean = false;
  private moveTop: number = 0;
  private moveRight: number = 0;

  constructor() {
    super({ key: 'MainScene' });
  }

  init() {
    this.accessThirdDimension();
  }

  create() {
    // creates a nice scene
    this.third.warpSpeed('camera', 'sky', 'grid', 'ground', 'light');

    // adds a box with physics
    this.third.physics.add.box({ x: -1, y: 2 });

    // throws some random object on the scene
    this.third.haveSomeFun();

    // Create Player
    this.third.load.gltf('/assets/glb/box_man.glb').then(object => {
      const man = object.scene.children[0];

      this.man = new ExtendedObject3D();
      this.man.name = 'man';
      this.man.rotateY(Math.PI + 0.1);
      this.man.add(man);

      // Add shadow and adjust materials
      this.man.traverse(child => {
        if (child.isMesh) {
          child.shape = 'convex';
          child.castShadow = child.receiveShadow = true;

          // Check if the material is MeshStandardMaterial
          if (child.material instanceof THREE.MeshStandardMaterial) {
            child.material.roughness = 1;
            child.material.metalness = 0;
          }
        }
      });

      // Animations
      this.third.animationMixers.add(this.man.anims.mixer);
      object.animations.forEach(animation => {
        if (animation.name) {
          animation.tracks.forEach(track => {
            if (/(scale|position)/.test(track.name)) {
              const newValues = track.values.map(v => v * 1);
              track.values = newValues;
            }
          });

          if (!this.man) return;
          this.man.anims.add(animation.name, animation);
        }
      });
      this.man.anims.play('idle');
      this.man.position.set(0, 2, 8);

      // Add the player to the scene with a body
      if (this.man) {
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

      // Add 3rd Person Controls
      if (this.man) {
        this.controls = new ThirdPersonControls(this.third.camera, this.man, {
          offset: new THREE.Vector3(0, 1, 0),
          targetRadius: 3
        });
      }
    });

    // Add Keys
    this.keys = {
      w: this.input.keyboard.addKey('w'),
      space: this.input.keyboard.addKey(32)
    };

    // PointerLock and PointerDrag
    if (!('ontouchstart' in window)) {
      const pointerLock = new PointerLock(this.game.canvas);
      const pointerDrag = new PointerDrag(this.game.canvas);
      pointerDrag.onMove(delta => {
        if (!pointerLock.isLocked()) return;
        const { x, y } = delta;
        this.moveTop = -y;
        this.moveRight = x;
      });
    }
  }

  jump() {
    if (!this.man) return;
    this.canJump = false;
    this.isJumping = true;
    this.man.anims.play('jump_running');
    this.time.addEvent({
      delay: 750,
      callback: () => {
        this.canJump = true;
      }
    });
    this.time.addEvent({
      delay: 750,
      callback: () => {
        if (!this.man) return;
        this.man.anims.play('idle');
        this.isJumping = false;
      }
    });
    this.man.body.applyForceY(4);
  }

  update(time: number, delta: number) {
    if (this.man && this.man.body && this.controls && this.controls.update) {
      // Update Controls
      this.controls.update(this.moveRight * 3, -this.moveTop * 3);
      if (!('ontouchstart' in window)) {
        this.moveRight = this.moveTop = 0;
      }

      // Player Turn
      const speed = 4;
      const v3 = new THREE.Vector3();

      const rotation = this.third.camera.getWorldDirection(v3);
      const theta = Math.atan2(rotation.x, rotation.z);
      const rotationMan = this.man.getWorldDirection(v3);
      const thetaMan = Math.atan2(rotationMan.x, rotationMan.z);
      this.man.body.setAngularVelocityY(0);

      const l = Math.abs(theta - thetaMan);
      let rotationSpeed = 'ontouchstart' in window ? 2 : 4;
      let d = Math.PI / 24;

      if (l > d) {
        if (l > Math.PI - d) rotationSpeed *= -1;
        if (theta < thetaMan) rotationSpeed *= -1;
        this.man.body.setAngularVelocityY(rotationSpeed);
      }

      // Player Move
      if (this.keys.w.isDown || this.move) {
        if (this.man.anims.current === 'idle' && !this.isJumping) {
          this.man.anims.play('run');
        }

        const x = Math.sin(theta) * speed;
        const y = this.man.body.velocity.y;
        const z = Math.cos(theta) * speed;

        this.man.body.setVelocity(x, y, z);
      } else {
        if (this.man.anims.current === 'run' && !this.isJumping) {
          this.man.anims.play('idle');
        }
      }

      // Player Jump
      if (this.keys.space.isDown && this.canJump) {
        this.jump();
      }
    }
  }
}
