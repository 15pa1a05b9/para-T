var Trooper = function(x, y, img) {
    this.x = x;
    this.y = y;
    this.src = img;
}

Trooper.prototype.setup = function() {
    var b =
    $('<img src="'+this.src+'" class="troops">')
    .css({
        'top': this.y + 'px',
        'left': this.x + 'px'
    })
    .load(function() {
        $('#firesound').get(0).load();
        $('#firesound').get(0).play();
        $(this).animate({
           'top':'+100px'
        }, 5000, "linear", function() {
            $(this).remove();
        })
    });
    $('body').append(b);
}