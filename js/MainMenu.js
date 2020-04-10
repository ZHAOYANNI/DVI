
BasicGame.MainMenu = function (game) {
	this.music = null;
	this.playButton = null;
};

BasicGame.MainMenu.prototype = {

	create: function () {
		this.add.sprite(0,0,'preloaderBackground');
        this.playButton = this.add.button(820, 850, 'button', this.startGame, this, 2, 1, 0); 
	},

	update: function () {

	},

	startGame: function (pointer) {
		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();

		//	And start the actual game
		this.state.start('Game');
	}

};
