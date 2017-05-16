var Heli2 = function(x, y, img) {
    this.x = x;
    this.y = y;
    this.src = img;
}
Heli2.prototype.setup = function() {
    var b =
    $('<img src="'+this.src+'" class="heli">')
    .css({
       'top': this.y + 'px',
        'left': this.x + 'px'
    })
   .load(function() {
       /* $('#firesound').get(0).load();
        $('#firesound').get(0).play();*/
        $(this).animate({
            'left': '-10px'
        }, 7000, "linear", function() {
            $(this).remove();
             heli3=new Heli3(0,150,'helicopter03.gif');
        heli3.setup();
        })
    });
    $('body').append(b);
}