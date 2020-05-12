export default class Bubble extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'bubble');

		this.scene.add.existing(this);
		this.scene.physics.add.existing(this);
		this.scene.sys.displayList.add(this);
		this.scene.sys.updateList.add(this);
		this.scene.sys.arcadePhysics.world.enableBody(this, 0);

		var j = Math.random();
		if(j < 0.5)
			this.setFrame(0);
		else if(j >= 0.5 && j<0.8)
			this.setFrame(1);
		else 
			this.setFrame(2);
	}

	preUpdate(t,d) {
		super.preUpdate(t,d);
      	this.body.setVelocity(10,-(Math.random()*0.87+0.4)*100);
	}
}