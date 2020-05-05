export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player');
    this.score = 0;
    this.life = 3;
    this.bullet = 0;

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.scene.sys.displayList.add(this);
    this.scene.sys.updateList.add(this);
    this.scene.sys.arcadePhysics.world.enableBody(this, 0);
    this.body.setCollideWorldBounds(true);

    //this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.label1 = this.scene.add.text(200, 100);
    this.label2 = this.scene.add.text(600, 100);
    this.label3 = this.scene.add.text(1000, 100);
    this.updateScore();
  }

  point(num) {
    this.score = this.score + num;
    this.updateScore();
  }

  corazon(num) {
    this.life = this.life + num;
    this.updateScore();
  }
  
  balas(num) {
    this.bullet = this.bullet + num;
    this.updateScore();
  }

  updateScore() {
    this.label1.text = this.life;
    this.label2.text = this.score;
    this.label3.text = this.bullet;
  }

  preUpdate(t,d) {
    super.preUpdate(t,d);
    // movimiento de jugador
    this.scene.input.keyboard.on("keydown_D", () => {
      this.body.setVelocity(100,0);
      this.play('player_normal',true);
    });
    this.scene.input.keyboard.on("keyup_D", () => {
      this.body.setVelocity(0,0);
    });
    this.scene.input.keyboard.on("keydown_A", () => {
      this.body.setVelocity(-100,0);
      this.play('player_normal',true);
    });
    this.scene.input.keyboard.on("keyup_A", () => {
      this.body.setVelocity(0,0);
    });
    this.scene.input.keyboard.on("keydown_W", () => {
      this.body.setVelocity(0,-100);
      this.play('player_normal',true);
    });
    this.scene.input.keyboard.on("keyup_W", () => {
      this.body.setVelocity(0,0);
    });
    this.scene.input.keyboard.on("keydown_S", () => {
      this.body.setVelocity(0,100);
      this.play('player_normal',true);
    });
    this.scene.input.keyboard.on("keyup_S", () => {
      this.body.setVelocity(0,0);
    });
    this.scene.input.keyboard.on("keydown_Z", () => {
      this.play('player_attack',true);
    });
    this.scene.input.keyboard.on("keyup_Z", () => {
      this.play('player_normal',true);
    });
  }
}
