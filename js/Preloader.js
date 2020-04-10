
BasicGame.Preloader = function (game) {

	this.background = null;

	this.ready = false;
};

BasicGame.Preloader.prototype = {
	preload: function () {

		this.background = this.add.image(0, 0, 'preloaderBackground');
		this.load.spritesheet('button', 'assets/images/button_sprite_sheet.png',265,98);

		this.load.image('background', 'assets/images/background.png');
	    this.load.image('life', 'assets/images/guilife-sheet0.png');
	    this.load.image('score', 'assets/images/guiscore-sheet0.png');
	    this.load.image('bullet', 'assets/images/guitime-sheet0.png');
	    this.load.image('pause', 'assets/images/btnpause-sheet0.png');
	    this.load.image('sound', 'assets/images/btnsound-sheet1.png');
	    this.load.spritesheet('shark', 'assets/images/shark-sheet0.png', 128,100);
	},

	create: function () {

	},

	update: function () {
			this.ready = true;
			this.state.start('MainMenu');
	}

};
