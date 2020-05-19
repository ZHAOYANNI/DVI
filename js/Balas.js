export default class Balas extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, 'balas');

      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.scene.sys.displayList.add(this);
      this.scene.sys.updateList.add(this);
      this.scene.sys.arcadePhysics.world.enableBody(this, 0);
    }
    
    collide(){
      return 2;
    }

    preUpdate(t,d) {
      super.preUpdate(t,d);
      this.body.setVelocity(-300, 0);
    }
  }