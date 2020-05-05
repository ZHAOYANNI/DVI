import Game from './Game.js';

export default class Menu extends Phaser.Scene {
	constructor() {
	    super({ key: 'menu' });
	}
	preload() {  
	  	this.load.image('preloaderBackground', 'assets/images/loadingbackground-sheet0.png');
	    this.load.spritesheet('button', 'assets/images/button_sprite_sheet.png',{frameWidth: 265,frameHeight: 98});
	}

	create() {
	  	this.add.image(960, 540, 'preloaderBackground');
		this.playButton = this.add.sprite(950, 900, 'button').setInteractive();
		
		this.playButton.on('pointerover', function(){
	    	this.setFrame(1);
	    });
	    this.playButton.on('pointerout', function(){
	    	this.setFrame(0);
	    });
	    this.playButton.on('pointerdown', function(){
	    	//this.scene.scene.start('playgame');
	    	this.scene.scene.start('playgame');
	    });
	}

	update(titleme, delta) {
	    
	}
}