/**

*Mini.js

*Murad Mikayilzada

*Javascript library for mini 2D games

*Created at 5.10.2017

*/


// @description Game classi. Oyunun movcud olmasi ucun bu canvasdaki Game funksiyasi mutleq istifade
//              edilmelidir. Esasen hereketsiz qalacaq olan oyun hisseleri ve ses funksiyalari bu classdadir.
var Game = (function () {

	
    /**
    
    @description Oyun penceresi yaradir ve "Ishleyir" mesaji verir.

    @example var oyun = new Game(300,400);

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
    
    @example oyun.changeWindowBg('red');

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
    Game.prototype.drawRect = function(a,b,c,d,color){

        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.color = color;

        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = this.color;
        ctx.fillRect(this.a,this.b,this.c,this.d);

    }

    //

     /**
    
    @description Bu funksiya ile koordinatlari array seklinde vermekle ve rengi daxil etmekle istenilen fiquru cekmek olar

    Meselen, koordinatlar adinda array yaradilir ve asagida oldugu kimi ona deyerler oturulur.

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
            
            ctx.beginPath();
            ctx.moveTo(coordinats[i][0][0],coordinats[i][0][1]);
            ctx.lineTo(coordinats[i][1][0],coordinats[i][1][1]);
            ctx.strokeStyle = this.color;
            ctx.stroke();
            ctx.closePath();

        }

    }


    /**
    
    * @description Cevre cekmek ucun funksiya

      @param {array,string}
    
      @example var coordinats = [100,75,20,4,2*Math.PI];  oyun.arc(coordinats,'red');

      @returns void

    */

    Game.prototype.circle = function(coordinats,color){

        this.coordinats = coordinats;
        this.color = color;

        var canvas = document.getElementById('canvas');
        var ctx=canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.coordinats[0], this.coordinats[1], this.coordinats[2], this.coordinats[3], this.coordinats[4], this.coordinats[5]);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }

    /**
    
    * @description Ici bos yazi yazmaq ucun funksiya

      @param {string,string,number,number,string}
    
      @example oyun.strokeText('40px serif','Hello World',10,200,'red');

      @returns void

    */

    Game.prototype.strokeText = function(font,text,x,y,color){

        this.font = font;
        this.text = text;
        this.x = x;
        this.y = y;
        this.color = color;

        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        ctx.font = this.font;
        ctx.strokeStyle = this.color;
        ctx.strokeText(this.text, this.x, this.y);

    }



     /**
    
    * @description Ici dolu yazi yazmaq ucun funksiya

      @param {string,string,number,number,string}
    
      @example oyun.fillText('40px serif','Hello World',10,200,'red');

      @returns void

    */

    Game.prototype.fillText = function(font,text,x,y,color){

        this.font = font;
        this.text = text;
        this.x = x;
        this.y = y;
        this.color = color;

        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y);


    }

    /**
    
    @description Bu funksiya ses elave edir. Esasen arxa fondaki musiqiler ucun istifade edilir. 

    @example var sources = ['1.mp3','2.mp3','3.mp3'];   oyun.soundList(src,100)

    @param {array,number}

    @returns void
    
    */
    Game.prototype.soundList = function(playlist,volume){

        this.playlist = playlist;
        this.volume = volume;

        var index = 0;

        for(var i = 0; i < playlist.length; i++){

            document.write('<audio src='+playlist[i]+' id='+i+'></audio>');

            var player = document.getElementById(i);
            player.volume = this.volume / 100;
            player.autoplay = true;

        }

    }

    /**
    
    @description Bu funksiya ses effekti elave edir. Esasen qisa hecmli sesler ucun istifade edilir. Meselen, gulle, bomba, dogru, yanlis ve s. ses effektleri.

    @example oyun.soundEffect('bomb.mp3',100)

    @param {string,number}

    @returns void
    
    */

    Game.prototype.soundEffect = function(src, volume){

        this.src = src;
        this.volume = volume;

        document.write('<audio id="effect"></audio>');
        var audio = document.getElementById('effect');

        audio.src = this.src;
        audio.volume = this.volume / 100;
        audio.autoplay = true;

    }



    return Game;

}());


/**

*@description Player classi. Oyuna karakter kimi dinamik olan obyektlerin elave edilmesi ucundur.
            Burada Playere muxtelif fiziki quvvelerin tesirini tenzimleye bilersiniz. Meselen, cazibe quvvesi
            surtunme quvvesi ve s. Her bir Player-e fiziki quvveler ucun muxtelif qiymetler verile biler
            Meselen player1 ucun cazibe quvvesi 9 olarken, player2 ucun bu 5 ola biler. :))

**/
var Player = (function(){

    function Player(){
        console.log('Player Created');
    }

    return Player;
}());

