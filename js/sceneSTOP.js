export default class sceneSTOP extends Phaser.Scene {
	constructor() {
	    super({ key: 'sceneSTOP' });
	}

	preload() {  
          this.load.image('stopImage', 'assets/images/lights-sheet0.png');
	}

	create() {
		this.add.image(960, 540, 'stopImage');

        this.input.once('pointerdown', function () {
			this.scene.scene.resume('playgame');
			this.scene.scene.stop('sceneSTOP'); 
        });
	}

	update(titleme, delta) {
	    
	}
}