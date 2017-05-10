// JS library for mini 2D games

// Murad Mikayilzada


var Game = (function () {


	//Oyun penceresi yaradir ve "Ishleyir" mesaji verir
    function Game(width,height) {

        console.log("It's working");

        this.width = width;
    	this.height = height;

    	document.write("<canvas id='canvas'></canvas>");

    	var canvas = document.getElementById('canvas');

    	canvas.height=this.height;
    	canvas.width=this.width;

    }


    //Bu funksiya oyun penceresinin bg-sini deyisir
    Game.prototype.changeWindowBg = function(color){

    	this.color = color;
    	var canvas = document.getElementById('canvas');
    	canvas.style.backgroundColor = this.color;

    }

   

    return Game;

}());


var oyun=new Game(400,400);

oyun.changeWindowBg('#666666');




