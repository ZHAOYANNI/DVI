import Game from './Game.js';

export default class TerMenu extends Phaser.Scene {
	constructor() {
	    super({ key: 'termenu' });
	}
	preload() {  
          this.load.image('replay', 'assets/images/replay.png');
		  this.load.image('quit', 'assets/images/quit.png')
		  this.load.image('backg', 'assets/images/gameOver.png')
	}

	create() {
		this.add.image(960, 540, 'backg');
		this.replayButton = this.add.imagen(950, 600, 'replay').setInteractive();
		this.quitButton = this.add.imagen(950, 1200, 'quit').setInteractive();
		
	    this.replayButton.on('pointerdown', function(){
	    	this.scene.scene.start('playgame');
		});
		
		this.quitButton.on('pointerdown', function(){
	    	this.scene.scene.start('menu');
	    });
	}

	update(titleme, delta) {
	    
	}
}