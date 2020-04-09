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
	    //this.playButton = this.add.(320, 520, 'button', this.startGame(), this, 2, 1, 0);
	    this.playButton = this.add.sprite(370, 620, 'button').setInteractive();

	    this.anims.create({
	      key: 'button1',
	      frames: this.anims.generateFrameNumbers('button', { start: 0, end: 1}),
	      frameRate: 10,
	      repeat: 0
	    });
	    this.anims.create({
	      key: 'button2',
	      frames: this.anims.generateFrameNumbers('button', { start: 1, end: 2}),
	      frameRate: 10,
	      repeat: 0
	    });
	}

	update(titleme, delta) {
	    this.playButton.on('pointerover', function(){
	    	this.play('button1');
	    });
	    this.playButton.on('pointerout', function(){
	    	this.play('button2');
	    });
	    this.playButton.on('pointerdown', function(){
	    	this.gamescene.start('playgame');
	    });
	}
}