var bubbleObj = function(game){
    this.game = game;
	this.alive = [];
	this.x = [];
	this.y = [];
	this.entities = [];
	this.spd = [];
	this.bubbleType = [];
}

bubbleObj.prototype.num = 30;

bubbleObj.prototype.init = function(){
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.spd[i] = Math.random()*0.87+0.4;
        this.bubbleType[i] = "";
        
        this.game.physics.arcade.enable(this.entities[i]);
        this.game.bubble.entities[i].enableBody = true;
	}
}

bubbleObj.prototype.dead = function(){
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i] == true) {
			
			if (this.y[i] < 150) {
                this.entities[i].destroy();
                this.alive[i] = false;
			}
		}	
	}
}

bubbleObj.prototype.born = function(i){
	this.x[i] = Math.random() * this.game.world.width;
	this.y[i] = Math.random() * this.game.world.width;
	this.alive[i] = true;
	var ran = Math.random();
	if (ran < 0.3) {
        this.entities[i] = this.game.add.sprite(this.x[i], this.y[i], 'bubbleM');
	}
	else{
        this.entities[i] = this.game.add.sprite(this.x[i], this.y[i], 'bubbleL');
    }
    this.entities[i].body.velocity.y = -this.spd[i] * 100;
}

function bubbleMonitor(bubble){
	var num = 0;
	for (var i = 0; i < bubble.num; i++) {
		if(bubble.alive[i]) num++;
	}
	if(num < 15){
		sendBubble(bubble);
		return;
	}
}

function sendBubble(bubble){
	for (var i = 0; i < bubble.num; i++) {
		if (!bubble.alive[i]) {
			bubble.born(i);
			return;
		}
	}
}