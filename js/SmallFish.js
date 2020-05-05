export default class SmallFish extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, 'SmallFish');

      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this,scene.sys.displayList.add(this);
      this.scene.sys.updateList.add(this);
      this.scene.sys.arcadePhysics.world.enableBody(this, 0);
      var j = Math.random();
      if(j < 0.25)
        this.setFrame(0);
      else if(j >= 0.25 && j<0.5)
        this.setFrame(1);
      else if(j >= 0.5 && j<0.75)
        this.setFrame(2);
      else
      this.setFrame(3);
    }
  
    preUpdate(t,d) {
      super.preUpdate(t,d);
      this.body.setVelocity(-110+Math.random()*50,0);
    }
  }