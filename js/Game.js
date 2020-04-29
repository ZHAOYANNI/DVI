BasicGame.Game = function (game) {
  //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:
    this.game;    //  a reference to the currently running game
    this.add;   //  used to add sprites, text, groups, etc
    this.camera;  //  a reference to the game camera
    this.cache;   //  the game cache
    this.input;   //  the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;    //  for preloading assets
    this.math;    //  lots of useful common math operations
    this.sound;   //  the sound manager - add a sound, play one, set-up markers, etc
    this.stage;   //  the game stage
    this.time;    //  the clock
    this.tweens;    //  the tween manager
    this.state;     //  the state manager
    this.world;   //  the game world
    this.particles; //  the particle manager
    this.physics; //  the physics manager
    this.rnd;   //  the repeatable random number generator

    this.score = 0;
    this.life = 3;
    this.bullet = 0;

    this.fish = [];
};

BasicGame.Game.prototype = {

  create: function () {
    this.add.image(0, 0, 'background');
    this.add.image(100, 100, 'life');
    this.add.image(500, 100, 'score');
    this.add.image(900, 100, 'bullet');
    this.add.image(1600, 100, 'pause');
    this.add.image(1750, 100, 'sound');

    this.label1 = this.game.add.text(200, 100);
    this.label2 = this.game.add.text(600, 100);
    this.label3 = this.game.add.text(1000, 100);

    this.player = this.game.add.sprite(300,640,'shark');
    this.player.animations.add('player_normal',[0,1,2,3,4,5,6,7],7,true);//'run'
    this.player.animations.add('player_attack',[8,9,10,11,12],7,false);
    this.player.animations.add('player_died',[13],7,false);

    this.physics.enable(this.player);
    this.player.body.collideWorldBounds = true;
    this.player.body.onWorldBounds = new Phaser.Signal();

    this.player.body.bounce.set(0);
    //this.camera.follow(this.player);

    //this.input.onDown.add(this.jump,this);
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.TILE_BIAS = 50;
    this.playing = true;

    //创建WASD按键
    A = this.input.keyboard.addKey(Phaser.Keyboard.A);
    D = this.input.keyboard.addKey(Phaser.Keyboard.D);
    W = this.input.keyboard.addKey(Phaser.Keyboard.W);
    S = this.input.keyboard.addKey(Phaser.Keyboard.S);
    Q = this.input.keyboard.addKey(Phaser.Keyboard.Q);
    Z = this.input.keyboard.addKey(Phaser.Keyboard.Z);

    this.bubble = new bubbleObj(this);
    this.bubble.init();
  },

  update: function () {

    //this.game.physics.arcade.collide(this.player,this.layer);
    if (D.isDown) {
        this.player.animations.play('player_normal', true);
        this.player.body.velocity.x = 100;
        this.player.body.velocity.y = 0;
    } else if(A.isDown){
        this.player.animations.play('player_normal', true);
        this.player.body.velocity.x =- 100;
        this.player.body.velocity.y = 0;
    }
    else if(W.isDown){
        this.player.animations.play('player_normal', true);
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = -100;
    }
    else if(S.isDown){
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 100;
    }
    else if(A.isUp || S.isUp || D.isUp || W.isUp ){
      this.player.body.velocity.x = 0;
      this.player.body.velocity.y = 0;
    }
    if (Q.isDown){
      this.player.animations.play('player_attack');
    }
    else if(Q.isUp){
      this.player.animations.play('player_normal', true);
    }
    if (Z.isDown) {
      this.dead();
    }
  
   /* 
    while(this.fish.length < 10){
      var food = this.game.add.sprite(900, 500, 'fish');
      this.game.physics.arcade.enable(food);
      food.enableBody = true;
      this.fish.push(food);
      food.body.velocity.x = -150;
      
      
    }*/
    bubbleMonitor(this.bubble);
    this.bubble.dead();
    this.quitGame(this.playing);
  },

    quitGame: function (pointer) {

        if(!this.playing) {
               // delete this.player;
                delete this.sprite;
                //takes us back to Main Menu
                this.game.time.events.add(3000, function(){this.state.start('MainMenu');}, this);
                
        }
    },
    /*
    hitCoin: function (sprite,tile) {
        if (tile.alpha != 0) {
            tile.alpha = 0;
            this.layer.dirty = true;
            return false;
        }
    },*/

    dead: function () {
      this.player.animations.play('player_died');
      this.player.body.velocity.y = 100;
      console.log("dead");
      this.playing=false;
    },
  
   foodUp: function (fish) {
     var food = this.game.add.sprite(500, 1080, 'fish');
     this.game.physics.arcade.enable(food);
     food.enableBody = true;
     fish.push(food);
  },
  
};