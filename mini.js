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

    //Bu funksiya oyun penceresine dordbucaqli cekir
    Game.prototype.drawRect = function(a,b,c,d,bg){

        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.bg = bg;

        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = this.bg;
        ctx.fillRect(this.a,this.b,this.c,this.d);

    }

    //Bu funksiya ile koordinatlari array seklinde vermekle istenilen fiquru cekmek olar

    Game.prototype.drawFigure = function(coordinats){

        this.coordinats = coordinats;

        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        for (var i = 0; i < coordinats.length; i++) {
            
            ctx.moveTo(coordinats[i][0][0],coordinats[i][0][1]);
            ctx.lineTo(coordinats[i][1][0],coordinats[i][1][1]);
            ctx.stroke();

        }

    }

	   

    return Game;

}());





