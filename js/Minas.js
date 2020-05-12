export default class Minas extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, 'minas');

      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.scene.sys.displayList.add(this);
      this.scene.sys.updateList.add(this);
      this.scene.sys.arcadePhysics.world.enableBody(this, 0);
      var j = Math.random();
      if(j < 0.2)
        this.setFrame(0);
      else if( 0.2 <= j && j < 0.4)
        this.setFrame(1);
      else if( 0.4 <= j && j < 0.6)
        this.setFrame(2);
      else if( 0.6 <= j && j < 0.8)
        this.setFrame(3);
      else 
        this.setFrame(4);
    }
  
    preUpdate(t,d) {
      super.preUpdate(t,d);
    }
  }