var can1;
var can2;

var contx1;
var contx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;// diferencia de tiempo de frame

var bgPic = new Image();
document.body.onload = game;

function game(){
	init();
	lastTime=Date.now();
	deltaTime = 0;
	gameloop();
}

function init(){
	//conseguir canvas context
	can1 = document.getElementById("canvas1");//peces,submarinos
	contx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");//background
	contx2 = can2.getContext('2d');

	bgPic.src = "./assets/images/background.png";
	canWidth = can1.width;
	canHeight = can1.height;
}

function gameloop(){
	window.requestAnimFrame(gameloop);//zhen shu
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime=now;

	//console.log(deltaTime);
	drawBackground();
}
