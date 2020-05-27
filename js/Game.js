import Player from './player.js';
import SmallFish from './SmallFish.js';
import BigFish from './BigFish.js';
import Bubble from './Bubble.js';
import Submarino from './Submarino.js';
import Rocket from './Rocket.js';
import Vida from './Vida.js';
import Balas from './Balas.js';
import Bomba from './Bomba.js';
import PezVeneno from './PezVeneno.js';
import Minas from './Minas.js';
import SharkB from './SharkB.js';
import Meat from './Meat.js';
import Cubo from './Cubo.js';

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'playgame'});
  }
  preload() {  
  	this.load.image('background', 'assets/images/background.png');
    this.load.image('life', 'assets/images/guilife-sheet0.png');
    this.load.image('score', 'assets/images/guiscore-sheet0.png');
    this.load.image('bullet', 'assets/images/guitime-sheet0.png');
    this.load.image('vida', 'assets/images/sharklife-sheet0.png');
    this.load.image('balas', 'assets/images/fireballs-sheet0.png');
    this.load.image('bomba', 'assets/images/superbomb-sheet0.png');
    this.load.image('PezVeneno', 'assets/images/bigfish-sheet2.png');
    this.load.image('pollo', 'assets/images/meat-sheet0.png');
    this.load.spritesheet('pause', 'assets/images/btnpause-sheet0.png', {frameWidth: 141, frameHeight: 147});
    this.load.spritesheet('sound', 'assets/images/btnsound-sheet1.png', {frameWidth: 141, frameHeight: 147});
    this.load.spritesheet('player', 'assets/images/shark-sheet0.png', {frameWidth: 128,frameHeight: 101});

    this.load.spritesheet('bubble', 'assets/images/bubble18px-sheet0.png', {frameWidth: 18, frameHeight: 18});
    this.load.spritesheet('SmallFish', 'assets/images/smallfish-sheet0.png', {frameWidth: 48, frameHeight: 27});
    this.load.spritesheet('BigFish', 'assets/images/bigfish-sheet0.png', {frameWidth: 80, frameHeight: 64});
    this.load.spritesheet('Submarino', 'assets/images/submarino.png', {frameWidth: 192, frameHeight: 128});
    this.load.spritesheet('rocket', 'assets/images/rocket-sheet0.png', {frameWidth: 64, frameHeight: 26});
    this.load.spritesheet('minas', 'assets/images/bomb-sheet0.png', {frameWidth: 69, frameHeight: 74});
    this.load.spritesheet('cubos', 'assets/images/barrel-sheet0.png', {frameWidth: 51, frameHeight: 77});
    this.load.spritesheet('sharkbullet', 'assets/images/sharkbullet-sheet0.png', {frameWidth: 64, frameHeight: 80});
    this.load.spritesheet('explosion', 'assets/images/explosion-sheet0.png', {frameWidth: 208, frameHeight: 172});
  
    this.load.audio('Sexplosion1', 'assets/media/explosion1.ogg');
    this.load.audio('Sexplosion2', 'assets/media/explosion2.ogg');
    this.load.audio('Sexplosion3', 'assets/media/explosion3.ogg');
    this.load.audio('Sexplosion4', 'assets/media/explosion4.ogg');
    this.load.audio('addfireballs', 'assets/media/addfireballs.ogg');
    this.load.audio('attack', 'assets/media/attack.ogg');
    this.load.audio('addlife', 'assets/media/addlife.ogg');
    this.load.audio('veneno', 'assets/media/veneno.ogg');
    this.load.audio('bombexplosion', 'assets/media/bombexplosion.ogg');
    this.load.audio('touchfish', 'assets/media/touchfish.ogg');
    this.load.audio('touchmeat', 'assets/media/touchmeat.ogg');
    
  }

  create() {
  	this.add.image(960, 540, 'background');
    this.add.image(100, 100, 'life');
    this.add.image(500, 100, 'score');
    this.add.image(900, 100, 'bullet');
    // add button
    this.pauseButton = this.add.sprite(1600, 100, 'pause').setInteractive();
    this.pauseButton.on('pointerdown', function(){
      this.setFrame(1);
      this.scene.scene.pause('playgame');   
    });

    this.pauseButton = this.add.sprite(1800, 100, 'sound').setInteractive();
    this.soundOn = true;
    this.pauseButton.on('pointerdown', function(){
      if(this.scene.soundOn == true){
        this.setFrame(1);
        this.scene.soundExplosion1.setVolume(0);
        this.scene.soundExplosion2.setVolume(0);
        this.scene.soundExplosion3.setVolume(0);
        this.scene.soundExplosion4.setVolume(0);
        this.scene.attack.setVolume(0);
        this.scene.addfireballs.setVolume(0);
        this.scene.addlife.setVolume(0);
        this.scene.veneno.setVolume(0);
        this.scene.bombexplosion.setVolume(0);
        this.scene.touchfish.setVolume(0);
        this.scene.touchmeat.setVolume(0);
        this.scene.soundOn = false;
      }
      else{
        this.setFrame(0);
        this.scene.soundExplosion1.setVolume(1);
        this.scene.soundExplosion2.setVolume(1);
        this.scene.soundExplosion3.setVolume(1);
        this.scene.soundExplosion4.setVolume(1);
        this.scene.attack.setVolume(1);
        this.scene.addfireballs.setVolume(1);
        this.scene.addlife.setVolume(1);
        this.scene.veneno.setVolume(1);
        this.scene.bombexplosion.setVolume(1);
        this.scene.touchfish.setVolume(1);
        this.scene.touchmeat.setVolume(1);
        this.scene.soundOn = true;
      }
    });

    // animaciones de player
    this.anims.create({
      key: 'player_normal',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 6 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'player_attack',
      frames: this.anims.generateFrameNumbers('player', { start: 7, end: 12 }),
      frameRate: 15,
      repeat: -1
    });
    this.anims.create({
      key: 'player_die',
      frames: this.anims.generateFrameNumbers('player', { start: 13, end: 13 }),
      frameRate: 5,
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

    this.anims.create({
      key: 'explosion1',
      frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 13 }),
      frameRate: 15
    });
    this.anims.create({
      key: 'explosion2',
      frames: this.anims.generateFrameNumbers('explosion', { start: 14, end: 25 }),
      frameRate: 15
    });
    
    // Sonido
    const config = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
    }; // config es opcional
    this.soundExplosion1 = this.sound.add('Sexplosion1', config);
    this.soundExplosion2 = this.sound.add('Sexplosion2', config);
    this.soundExplosion3 = this.sound.add('Sexplosion3', config);
    this.soundExplosion4 = this.sound.add('Sexplosion4', config);
    this.attack = this.sound.add('attack', config);
    
    this.addfireballs = this.sound.add('addfireballs', config);
    this.addlife = this.sound.add('addlife', config);
    this.veneno = this.sound.add('veneno', config);
    this.bombexplosion = this.sound.add('bombexplosion', config);

    this.touchmeat = this.sound.add('touchmeat', config);
    this.touchfish = this.sound.add('touchfish', config);

    
    this.player = new Player(this,300, 640);
    this.playerbullet;
    this.explosion = this.add.sprite(-10, -10, '');
    //el grupo de los pecesitos.
    this.smallgroup = this.add.group();
    this.biggroup = this.add.group();
    this.bubblegroup = this.add.group();
    this.subgroup = this.add.group();
    this.Mingroup = this.add.group();
    this.bulletgroup = this.add.group();
    this.rocketgroup = this.add.group();
    this.cubogroup = this.add.group();

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

    // Disparar balas
    this.input.keyboard.on("keydown_Q", () => {
      if(this.player.getNumbalas() > 0){
        this.player.play('player_attack',true);
        this.playerbullet = new SharkB(this, this.player.x + 15, this.player.y);
        this.bulletgroup.add(this.playerbullet);
        this.playerbullet.play('shark_bullet',false);
        this.player.balas(-1);
      }
    });
    this.input.keyboard.on("keyup_Q", () => {
      this.player.play('player_normal',true);
      this.attack.play();
    });
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
    // Genera cubo toxico
    if(this.cont % 235 == 0){
      var j = Math.random();
      if(j < 0.3){
        this.cubo = new Cubo(this, this.player.x, 100);
        this.cubogroup.add(this.cubo);
      }
    }
    // Genera pez venenoso y los accesorios
    if(this.cont % 480 == 0){
      var j = Math.random();
      if(j < 0.3){
        var i = Math.random()*5;
        if(i < 1){
          this.accesorio = new Vida(this, this.game.config.width, 300+Math.random()*700);
        }
        else if(i >= 1 && i < 2){
          this.accesorio = new Balas(this, this.game.config.width, 300+Math.random()*700);
        }
        else if(i >= 2 && i < 3){
          this.accesorio = new Bomba(this, this.game.config.width, 300+Math.random()*700);
        }
        else if(i >= 3 && i < 4){
          this.accesorio = new PezVeneno(this, this.game.config.width, 300+Math.random()*700);
        }
        else{
          this.accesorio = new Meat(this, this.game.config.width, 300+Math.random()*700);
        }
      }
    }

    // Destruir una mina
    if(this.cont % 600 == 0){
      if(this.Mingroup.getLength()>0){
        this.Mingroup.remove(this.Mingroup.getChildren()[0], true, true);
      }
    }
    
    // Actualiza las burbujas
    for (var i = 0; i < 20; i++){
      if(this.bubblegroup.getChildren()[i].y <= 150){
        this.bubblegroup.getChildren()[i].x = Math.random() * this.game.config.width;
        this.bubblegroup.getChildren()[i].y = Math.random() * this.game.config.height;
      }
    }
    // Actualiza las balas
    for (var i = 0; i < this.bulletgroup.getLength(); i++){
      if(this.bulletgroup.getChildren()[i].x >= 1850){
        this.bulletgroup.remove(this.bulletgroup.getChildren()[i], true, true);
      }
    }
    // Actualiza los pecesitos
    var i = 0;
    while(i < 7 && i < this.smallgroup.getLength()){
      if(this.smallgroup.getChildren()[i].x <= 100){
        this.smallgroup.remove(this.smallgroup.getChildren()[i], true, true);
        i--;
      }else{
        break;
      }
      i++;
    }
    // Actualiza los peces grandes
    i = 0;
    while(i < 2 && i < this.biggroup.getLength()){
      if(this.biggroup.getChildren()[i].x <= 100){
        this.biggroup.remove(this.biggroup.getChildren()[i], true, true);
        i--;
      }else{
        break;
      }
      i++;
    }
    // Actualiza los submarinos
    for (var i = 0; i < this.subgroup.getLength(); i++){
      if(this.subgroup.getChildren()[i].x <= 100){
        this.subgroup.remove(this.subgroup.getChildren()[i], true, true);
      }

      if(this.cont % 100 == 0){
        this.rocket = new Rocket(this, this.subgroup.getChildren()[i].x - 20, this.subgroup.getChildren()[i].y, this.subgroup.getChildren()[i].getImagen());
        this.rocketgroup.add(this.rocket);
      }
    }
    // Actualiza los rockets
    for (var i = 0; i < this.rocketgroup.getLength(); i++){
      if(this.rocketgroup.getChildren()[i].x <= 100){
        this.rocketgroup.remove(this.rocketgroup.getChildren()[i], true, true);
      }
    }  
    
    // Collider de player
    this.physics.add.collider(
      this.player,
      this.Mingroup, 
      function (player,Mingroup){
        this.explosion.x = Mingroup.x;
        this.explosion.y = Mingroup.y;
        this.explosion.play('explosion2');
        this.soundExplosion2.play();
        Mingroup.destroy();
        this.player.corazon(-1);
      }.bind(this));
    this.physics.add.collider(
      this.player,
      this.rocketgroup,
      function (player,rocketgroup){
        rocketgroup.destroy();
        this.player.corazon(-1);
        this.soundExplosion4.play();
      }.bind(this));
    this.physics.add.collider(
      this.player,
      this.subgroup,
      function (player,subgroup){
        this.explosion.x = subgroup.x;
        this.explosion.y = subgroup.y;
        this.explosion.play('explosion1');
        this.soundExplosion1.play();
        subgroup.destroy();
        this.player.corazon(-1);
      }.bind(this));
    this.physics.add.collider(
      this.player,
      this.cubogroup,
      function (player,cubogroup){
        this.explosion.x = cubogroup.x;
        this.explosion.y = cubogroup.y;
        this.explosion.play('explosion1');
        this.soundExplosion3.play();
        cubogroup.destroy();
        this.player.corazon(-1);
      }.bind(this));
    this.physics.add.collider(
      this.player,
      this.accesorio,
      function (player,accesorio){
        if(this.accesorio.collide() == 1){
          this.player.corazon(1);
          this.addlife.play();
        }
        else if(this.accesorio.collide() == 2){
          this.player.balas(20);
          this.addfireballs.play();
        }
        else if(this.accesorio.collide() == 3){
          this.smallgroup.clear(true,true);
          this.biggroup.clear(true,true);
          this.subgroup.clear(true,true);
          this.Mingroup.clear(true,true);
          this.bombexplosion.play();
        }
        else if(this.accesorio.collide() == 4){
          this.player.corazon(-1);
          this.veneno.play();
        }
        else if(this.accesorio.collide() == 5){
          this.player.point(250);
          this.touchmeat.play();
        }
        accesorio.destroy();
      }.bind(this));
    
    // Collider de peces 
    this.physics.add.collider(
      this.player,
      this.biggroup,
      function (player,biggroup){
        biggroup.destroy();
        this.player.point(100);
        this.touchfish.play();
      }.bind(this)); 
    this.physics.add.collider(
      this.player,
      this.smallgroup,
      function (player,smallgroup){
        smallgroup.destroy();
        this.player.point(50);
      }.bind(this)); 

    // Collider de balas
    this.physics.add.collider(
      this.bulletgroup,
      this.subgroup,
      function (bulletgroup,subgroup){
        bulletgroup.destroy();
        this.explosion.x = subgroup.x;
        this.explosion.y = subgroup.y;
        this.explosion.play('explosion1');
        this.soundExplosion1.play();
        subgroup.destroy();
        this.player.point(250);
      }.bind(this)); 
    this.physics.add.collider(
      this.bulletgroup,
      this.Mingroup,
      function (bulletgroup,Mingroup){
        bulletgroup.destroy();
        this.explosion.x = Mingroup.x;
        this.explosion.y = Mingroup.y;
        this.explosion.play('explosion1');
        this.soundExplosion4.play();
        Mingroup.destroy();
        this.player.point(25);
      }.bind(this)); 
    this.physics.add.collider(
      this.rocketgroup,
      this.Mingroup,
      function (rocketgroup,Mingroup){
        rocketgroup.destroy();
        this.explosion.x = Mingroup.x;
        this.explosion.y = Mingroup.y;
        this.explosion.play('explosion2');
        this.soundExplosion2.play();
        Mingroup.destroy();
      }.bind(this)); 
  }

}
