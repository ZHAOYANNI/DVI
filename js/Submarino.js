export default class BigFish extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, 'Submarino');

      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.scene.sys.displayList.add(this);
      this.scene.sys.updateList.add(this);
      this.scene.sys.arcadePhysics.world.enableBody(this, 0);

      this.imagen = 0;
      var j = Math.random();
      if(j < 0.33)
        this.imagen = 1;
      else if(j >= 0.33 && j< 0.67)
        this.imagen = 2;
      else
        this.imagen = 3;
      this.setFrame(this.imagen*4);
    }
  
    getImagen(){
      return this.imagen - 1;
    }

    preUpdate(t,d) {
      super.preUpdate(t,d);
      this.body.setVelocity(-150, 0);
      var key = 'Sub_' + this.imagen;
      this.play(key, true);
    }
  }