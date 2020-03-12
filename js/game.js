export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
  	this.load.image('background', 'assets/images/background.png');
  }

  create() {
  	this.add.image(960, 540, 'background');
  }

  update(time, delta) {    
  }
}