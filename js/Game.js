import Player from './player.js';
import SmallFish from './SmallFish.js';
import BigFish from './BigFish.js';
import Bubble from './Bubble.js';
import Submarino from './Submarino.js';
import Vida from './Vida.js';
import Balas from './Balas.js';
import Bomba from './Bomba.js';
import PezVeneno from './PezVeneno.js';
import Minas from './Minas.js';
import SharkB from './SharkB.js';

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
    this.load.image('vida', 'assets/images/sharklife-sheet0.png');
    this.load.image('balas', 'assets/images/fireballs-sheet0.png');
    this.load.image('bomba', 'assets/images/superbomb-sheet0.png');
    this.load.image('PezVeneno', 'assets/images/bigfish-sheet2.png');
    //this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);
    this.load.spritesheet('player', 'assets/images/shark-sheet0.png', {frameWidth: 128,frameHeight: 101});

    this.load.spritesheet('bubble', 'assets/images/bubble18px-sheet0.png', {frameWidth: 18, frameHeight: 18});
    this.load.spritesheet('SmallFish', 'assets/images/smallfish-sheet0.png', {frameWidth: 48, frameHeight: 27});
    this.load.spritesheet('BigFish', 'assets/images/bigfish-sheet0.png', {frameWidth: 80, frameHeight: 64});
    this.load.spritesheet('Submarino', 'assets/images/submarino.png', {frameWidth: 192, frameHeight: 128});
    this.load.spritesheet('minas', 'assets/images/bomb-sheet0.png', {frameWidth: 69, frameHeight: 74});
    this.load.spritesheet('sharkbullet', 'assets/images/sharkbullet-sheet0.png', {frameWidth: 64, frameHeight: 80});
  }

  create() {
  	this.add.image(960, 540, 'background');
    this.add.image(100, 100, 'life');
    this.add.image(500, 100, 'score');
    this.add.image(900, 100, 'bullet');
    this.add.image(1600, 100, 'pause');
    this.add.image(1800, 100, 'sound');

    // animaciones de player
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

    //animaciones de submarinos
    this.anims.create({
      key: 'Sub_1',
      frames: this.anims.generateFrameNumbers('Submarino', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'Sub_2',
      frames: this.anims.generateFrameNumbers('Submarino', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'Sub_3',
      frames: this.anims.generateFrameNumbers('Submarino', { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1
    });
    //animacion de ataque de player
    this.anims.create({
      key: 'shark_bullet',
      frames: this.anims.generateFrameNumbers('sharkbullet', { start: 0, end: 5 }),
      frameRate: 2
    });

    this.player = new Player(this,300, 640);
    //this.bubble = new Bubble(this, this.game.width,this.game.height);
     //el grupo de los pecesitos.
     this.smallgroup = this.add.group();
     this.biggroup = this.add.group();
     this.bubblegroup = this.add.group();
     this.subgroup = this.add.group();
     this.Mingroup = this.add.group();

     for (var i = 0; i < 7; i++){
       this.SmallFish = new SmallFish(this, this.game.config.width, 300+Math.random()*700);
       this.smallgroup.add(this.SmallFish);
     };
     for (var i = 0; i < 2; i++){
       this.BigFish = new BigFish(this, this.game.config.width, 300+Math.random()*700);
       this.biggroup.add(this.BigFish);
     };

     for (var i = 0; i < 20; i++){
      this.bubble = new Bubble(this, Math.random()*this.game.config.width, Math.random()*this.game.config.height);
      this.bubblegroup.add(this.bubble);
     }
    this.cont = 0;
  }

  update(time, delta) {  
    this.cont++;
    // Genera pecesitos
    if(this.cont % 30 == 0){
      this.SmallFish = new SmallFish(this, this.game.config.width, 300+Math.random()*700);
      this.smallgroup.add(this.SmallFish);
    }
    // Genera peces grandes
    if(this.cont % 40 == 0){
      var j = Math.random();
      if(j < 0.3){
        this.BigFish = new BigFish(this, this.game.config.width, 300+Math.random()*700);
        this.biggroup.add(this.BigFish);
      }
    }
    // Genera minas
    if(this.cont % 190 == 0){
      var j = Math.random();
      if(j < 0.3){
        this.Minas = new Minas(this, Math.random()*this.game.config.width, 300+Math.random()*700);
        this.Mingroup.add(this.Minas);
      }
    }
    // Genera submarinos
    if(this.cont % 240 == 0){
      var j = Math.random();
      if(j < 0.3){
        this.Submarino = new Submarino(this, this.game.config.width, 300+Math.random()*700);
        this.subgroup.add(this.Submarino);
      }
    }
    // Genera pez venenoso y los accesorios
    if(this.cont % 480 == 0){
      var j = Math.random();
      if(j < 0.3){
        var i = Math.random()*4;
        if(i < 1){
          this.accesorio = new Vida(this, this.game.config.width, 300+Math.random()*700);
        }
        else if(i >= 1 && i < 2){
          this.accesorio = new Balas(this, this.game.config.width, 300+Math.random()*700);
        }
        else if(i >= 2 && i < 3){
          this.accesorio = new Bomba(this, this.game.config.width, 300+Math.random()*700);
        }
        else{
          this.accesorio = new PezVeneno(this, this.game.config.width, 300+Math.random()*700);
        }

      }
    }
     // Destruir una mina
     if(this.cont % 600 == 0){
        if(this.Mingroup.getLength()>0){
          this.Mingroup.remove(this.Mingroup.getChildren()[0], true, true);
        }

        this.cont = 0;
     }

    // Actualiza las burbujas
    for (var i = 0; i < 20; i++){
      if(this.bubblegroup.getChildren()[i].y <= 150){
        this.bubblegroup.getChildren()[i].x =Math.random() * this.game.config.width;
        this.bubblegroup.getChildren()[i].y =Math.random() * this.game.config.height;
      }
    }
       // Actualiza los pecesitos
    var len = this.smallgroup.getLength();
    var i = 0;
    while(i < 7 && i < len){
      if(this.smallgroup.getChildren()[i].x <= 100){
        this.smallgroup.remove(this.smallgroup.getChildren()[i], true, true);
        i--;
      }else{
        break;
      }
      i++;
    }
    // Actualiza los peces grandes
    len = this.biggroup.getLength();
    i = 0;
    while(i < 2 && i < len){
      if(this.biggroup.getChildren()[i].x <= 100){
        this.biggroup.remove(this.biggroup.getChildren()[i], true, true);
        i--;
      }else{
        break;
      }
      i++;
    }
    // Actualiza los submarinos
    len = this.subgroup.getLength();
    i = 0;
    if(i < len && this.subgroup.getChildren()[i].x <= 100){
      this.subgroup.remove(this.subgroup.getChildren()[i], true, true);
    }
    // Dispara balas
    this.input.keyboard.on("keydown_Q", () => {
      if(this.player.getNumbalas() != 0){
        this.player.play('player_attack',true);
        this.playerbullet = new SharkB(this, this.player.x + 15, this.player.y);
        this.playerbullet.play('shark_bullet',false)
        this.player.balas(-1);
      }
    });
    this.input.keyboard.on("keyup_Q", () => {
      this.player.play('player_normal',true);
    });

    // Collider de Submarinos, minas y accesorio
    this.physics.add.collider(
      this.player,
      this.Mingroup, 
      function (player,Mingroup){
        Mingroup.destroy();
        this.player.corazon(-1);
        /*let explosion = this.add.sprite(200, player.y, 'boom');
        explosion.play('explode');
        explosion.on('animationcomplete', function(listener){
            this.gameOver = true;
       }.bind(this))*/
      }.bind(this));
    this.physics.add.collider(
      this.player,
      this.subgroup,
      function (player,subgroup){
        subgroup.destroy();
        this.player.corazon(-1);
      }.bind(this));
    this.physics.add.collider(
      this.player,
      this.accesorio,
      function (player,accesorio){
        accesorio.destroy();
        if(this.accesorio.collide() == 1){
          this.player.corazon(1);
        }
        else if(this.accesorio.collide() == 2){
          this.player.balas(20);
        }
        else if(this.accesorio.collide() == 3){
          this.smallgroup.clear(true,true);
          this.biggroup.clear(true,true);
          this.subgroup.clear(true,true);
          this.Mingroup.clear(true,true);
        }
        else if(this.accesorio.collide() == 4){
          this.player.corazon(-1);
        }
        else if(this.accesorio.collide() == 5){
          this.player.point(250);
        }
      }.bind(this));
    
    // Collider de peces 
    this.physics.add.collider(
      this.player,
      this.biggroup,
      function (player,biggroup){
        biggroup.destroy();
        this.player.point(100);
      }.bind(this)); 
    this.physics.add.collider(
      this.player,
      this.smallgroup,
      function (player,smallgroup){
        smallgroup.destroy();
        this.player.point(50);
      }.bind(this)); 
  }
}
