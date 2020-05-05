import Player from './player.js';

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'playgame'});
  }
  preload() {  
  	this.load.image('background', 'assets/images/background.png');
    this.load.image('life', 'assets/images/guilife-sheet0.png');
    this.load.image('score', 'assets/images/guiscore-sheet0.png');
    this.load.image('bullet', 'assets/images/guitime-sheet0.png');
    this.load.image('pause', 'assets/images/btnpause-sheet0.png');
    this.load.image('sound', 'assets/images/btnsound-sheet1.png');
    //this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);
    this.load.spritesheet('player', 'assets/images/shark-sheet0.png', {frameWidth: 128,frameHeight: 101});
  }

  create() {
  	this.add.image(960, 540, 'background');
    this.add.image(100, 100, 'life');
    this.add.image(500, 100, 'score');
    this.add.image(900, 100, 'bullet');
    this.add.image(1600, 100, 'pause');
    this.add.image(1800, 100, 'sound');

    this.anims.create({
      key: 'player_normal',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 6 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'player_attack',
      frames: this.anims.generateFrameNumbers('player', { start: 7, end: 11 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'player_die',
      frames: this.anims.generateFrameNumbers('player', { start: 12, end: 13 }),
      frameRate: 10,
      repeat: -1
    });

    this.player = new Player(this,300, 640);
  }

  update(time, delta) {    
    
  }
}