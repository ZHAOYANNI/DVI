
BasicGame.Preloader = function (game) {

	this.background = null;

	this.ready = false;
};

BasicGame.Preloader.prototype = {
	preload: function () {

		this.background = this.add.image(0, 0, 'preloaderBackground');
		this.load.spritesheet('button', 'assets/images/button_sprite_sheet.png',265,98);

		this.load.image('background', 'assets/images/background.png');
		this.load.image('bubbleS', 'assets/images/bubble8px-sheet0.png');
	    this.load.image('bubbleM', 'assets/images/bubble12px-sheet0.png');
	    this.load.image('bubbleL', 'assets/images/bubble18px-sheet0.png');
	    this.load.image('score25', 'assets/images/score25-sheet0.png');
	    this.load.image('score50', 'assets/images/score50-sheet0.png');
	    this.load.image('score100', 'assets/images/score100-sheet0.png');
	    this.load.image('score250', 'assets/images/score250-sheet0.png');

		this.load.image('fishS1', 'assets/images/smallfish-sheet0.png');
		this.load.image('fishS2', 'assets/images/smallfish-sheet1.png');

	    this.load.image('addlife', 'assets/images/sharklife-sheet0.png');
	    this.load.image('addbomb', 'assets/images/superbomb-sheet0.png');
	    this.load.image('addbullet', 'assets/images/fireballs-sheet0.png');

	    this.load.image('life', 'assets/images/guilife-sheet0.png');
	    this.load.image('score', 'assets/images/guiscore-sheet0.png');
	    this.load.image('bullet', 'assets/images/guitime-sheet0.png');
	    this.load.image('pause', 'assets/images/btnpause-sheet0.png');
	    this.load.image('sound', 'assets/images/btnsound-sheet1.png');
	    this.load.spritesheet('shark', 'assets/images/shark-sheet0.png', 128,100);
	    this.load.spritesheet('explosion', 'assets/images/explosion-sheet0.png', 1040/5,864/5);
	},

	create: function () {

	},

	update: function () {
			this.ready = true;
			this.state.start('MainMenu');
	}

};
