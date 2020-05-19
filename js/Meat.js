export default class Meat extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, 'pollo');

      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.scene.sys.displayList.add(this);
      this.scene.sys.updateList.add(this);
      this.scene.sys.arcadePhysics.world.enableBody(this, 0);
    }
  
    preUpdate(t,d) {
      super.preUpdate(t,d);
      this.body.setVelocity(-370, 0);
    }

    collide(){
      return 5;
    }
  }
