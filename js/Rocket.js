export default class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y,num) {
      super(scene, x, y, 'rocket');

      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.scene.sys.displayList.add(this);
      this.scene.sys.updateList.add(this);
      this.scene.sys.arcadePhysics.world.enableBody(this, 0);
      this.setFrame(num);
    }
  
    preUpdate(t,d) {
      super.preUpdate(t,d);
      this.body.setVelocity(-300, 0);
    }
  }