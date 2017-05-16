var Heli3 = function(x, y, img) {
    this.x = x;
    this.y = y;
    this.src = img;
}
Heli3.prototype.setup = function() {
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
            'left': '100%'
        }, 7000, "linear", function() {
            $(this).remove();
        })
    });
    $('body').append(b);
}