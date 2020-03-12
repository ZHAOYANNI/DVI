export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
  	this.load.image('background', 'assets/images/background.png');
    this.load.image('shark', 'assets/images/sharkpower-sheet0.png');
    this.load.image('life', 'assets/images/guilife-sheet0.png');
    this.load.image('score', 'assets/images/guiscore-sheet0.png');
    this.load.image('bullet', 'assets/images/guitime-sheet0.png');
    this.load.image('pause', 'assets/images/btnpause-sheet0.png');
    this.load.image('sound', 'assets/images/btnsound-sheet1.png');
    //this.load.spritesheet('shark', 'assets/images/shark-sheet0.png',);
    
  }

  create() {
  	this.add.image(960, 540, 'background');
    this.add.image(100, 100, 'life');
    this.add.image(500, 100, 'score');
    this.add.image(900, 100, 'bullet');
    this.add.image(1600, 100, 'pause');
    this.add.image(1800, 100, 'sound');
    // movimiento de jugador
    this.shark = this.physics.add.image(300, 640, 'shark');
    this.input.keyboard.on("keydown_D", () => {
      this.shark.setVelocity(100,0);
    });
    this.input.keyboard.on("keyup_D", () => {
      this.shark.setVelocity(0,0);
    });
    this.input.keyboard.on("keydown_A", () => {
      this.shark.setVelocity(-100,0);
    });
    this.input.keyboard.on("keyup_A", () => {
      this.shark.setVelocity(0,0);
    });
    this.input.keyboard.on("keydown_W", () => {
      this.shark.setVelocity(0,-100);
    });
    this.input.keyboard.on("keyup_W", () => {
      this.shark.setVelocity(0,0);
    });
    this.input.keyboard.on("keydown_S", () => {
      this.shark.setVelocity(0,100);
    });
    this.input.keyboard.on("keyup_S", () => {
      this.shark.setVelocity(0,0);
    });
    
    /*this.anims.create({
      key: 'player_normal',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'player_attack',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'player_die',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });*/
  }

  update(time, delta) {    
  }
}