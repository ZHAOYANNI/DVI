export default class Bubble extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, '');
		this.maxnum = 25;
		this.entities = [];
		this.alive = [];
		this.posx = [];
		this.posy = [];
		this.spd = [];
		this.bubbleType = [];

		this.scene.add.existing(this.entities);
		this.scene.physics.add.existing(this.entities);
		this.scene.sys.arcadePhysics.world.enableBody(this.entities, 0);
	}

	preUpdate(t,d) {
		super.preUpdate(t,d);
		
	}
	init(){
		for (var i = 0; i < this.maxnum; i++) {
			this.alive[i] = false;
			this.posx[i] = 0;
			this.posy[i] = 0;
			this.spd[i] = Math.random()*0.87+0.4;
			this.bubbleType[i] = "";
		}
	}
	bubbleMonitor(){
		var num = 0;
		for (var i = 0; i < this.maxnum; i++) {
			console.log(i);
			if(this.alive[i]) num++;
		}
		if(num < 15){
			for (var i = 0; i < this.num; i++) {
				if (!this.alive[i]) {
					born(i);
				}
			}
		}

		for (var i = 0; i < this.num; i++) {
			if (this.alive[i] == true) {
				
				if (this.posy[i] < 150) {
					this.entities[i].destroy();
					this.alive[i] = false;
				}
			}	
		}
	}

	born(i){
		this.posx[i] = Math.random() * this.game.width;
		this.posy[i] = Math.random() * this.game.height;
		this.alive[i] = true;
		var ran = Math.random();
		if (ran < 0.3) {
			this.entities[i] = this.game.add.sprite(this.posx[i], this.posy[i], 'bubbleM');
		}
		else{
			this.entities[i] = this.game.add.sprite(this.posx[i], this.posy[i], 'bubbleL');
		}
		this.entities[i].body.velocity.y = -this.spd[i] * 100;
	}
}