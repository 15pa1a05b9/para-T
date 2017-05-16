var player;
var phalanx;
var hithandler;
var heli1,heli2,heli3;
var troop1,troop2;
var x=0;
$(document).ready(function () {
        player = new Player($(window).width()/2-35, $(window).height()-240, 'barrel.svg');
        player.setup();
        heli1=new Heli1(0,0,'helicopter01.gif');
        heli1.setup();
         troop1=new Trooper(0,0,'paratrooper.svg');
        troop1.setup();
        heli2=new Heli2($(window).width(),50,'helicopter02.gif');
        heli2.setup();
       
         troop2=new Trooper($(window).width(),50,'paratrooper.svg');
        troop2.setup();
       
    })
    .keydown(function (k) {
          if (k.which === 37) {// left arrow key 
              if(x>-110){
               k.preventDefault();
               x-=10;
            player.moveLeft(x);}
        }
         else if (k.which === 39) {// up arrow key 
            k.preventDefault();
            if(x<110){
            x+=10;
            player.moveRight(x);}
        } 
       else if (k.which === 32) {// space bar to shoot
             k.preventDefault();
            player.shoot();
            
        }
        
    });
