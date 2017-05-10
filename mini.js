/**

*Mini.js

*Murad Mikayilzada

*Javascript library for mini 2D games

*Created at 5.10.2017

*/


var Game = (function () {

	
    /**
    
    @description Oyun penceresi yaradir ve "Ishleyir" mesaji verir.

    @param {number,number}

    @returns void
    
    */

    function Game(width,height) {

        console.log("It's working");

        this.width = width;
    	this.height = height;

    	document.write("<canvas id='canvas'></canvas>");

    	var canvas = document.getElementById('canvas');

    	canvas.height=this.height;
    	canvas.width=this.width;

    }


    /**
    
    @description Bu funksiya oyun penceresinin bg-sini deyisir

    @param {string}

    @returns void
    
    */
    Game.prototype.changeWindowBg = function(color){

    	this.color = color;
    	var canvas = document.getElementById('canvas');
    	canvas.style.backgroundColor = this.color;

    }


    /**
    
    @description Bu funksiya oyun penceresine dordbucaqli cekir

    @param {number,number,number,number,string}

    @returns void
    
    */
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

    //

     /**
    
    @description Bu funksiya ile koordinatlari array seklinde vermekle ve rengi daxil etmekle istenilen fiquru cekmek olar

    Meselen, koordinatlar adinda array yaradilir ve asagida oldugu kimi ona deyerler oturulur.a

    var koordinatlar = [[[0,0],[100,100]],[[100,100],[400,300]]] -------- koordinatlar[0] ve koordinatlar[1] heresi ayri xetti temsil edir.
    Burada istenilen qeder duz xett koordinatlari gonderile biler. koordinatlar[0][0] xettin baslangici, koordinatlar[0][1] ise xettin son noqtesinin
    koordinatlaridir. Hemin qayda koordinatlar[1] icerisindeki koordinatlar ucun de kecerlidir.

    Funksiya bu cur istifade edilir.

    oyun.drawFigure(koordinatlar,reng);

    @param {array,string}

    @returns void
    
    */


    Game.prototype.drawFigure = function(coordinats,color){

        this.coordinats = coordinats;
        this.color = color;

        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        for (var i = 0; i < coordinats.length; i++) {
            
            ctx.moveTo(coordinats[i][0][0],coordinats[i][0][1]);
            ctx.lineTo(coordinats[i][1][0],coordinats[i][1][1]);
            ctx.strokeStyle = this.color;
            ctx.stroke();

        }

    }


    return Game;

}());






