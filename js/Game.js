import Player from './player.js';
import SmallFish from './SmallFish.js';
import BigFish from './BigFish.js';

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

    this.load.image('bubbleM', 'assets/images/bubble12px-sheet0.png');
    this.load.image('bubbleL', 'assets/images/bubble18px-sheet0.png');
    this.load.spritesheet('SmallFish', 'assets/images/smallfish-sheet0.png', {frameWidth: 48, frameHeight: 27});
    this.load.spritesheet('BigFish', 'assets/images/bigfish-sheet0.png', {frameWidth: 80, frameHeight: 64});
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
    //this.bubble = new Bubble(this, this.game.width,this.game.height);
     //el grupo de los pecesitos.
     this.smallgroup = this.add.group();
     this.biggroup = this.add.group();
     for (var i = 0; i < 10; i++){
       this.SmallFish = new SmallFish(this, 1000, 200+Math.random()*700);
       this.smallgroup.add(this.SmallFish);
     };
     for (var i = 0; i < 5; i++){
       this.BigFish = new BigFish(this, 1000, 200+Math.random()*700);
       this.biggroup.add(this.BigFish);
     };
  }

  update(time, delta) {    
  }
}