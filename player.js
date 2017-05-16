var Player = function (x, y, imagesrc) {
    this.x = x;
    this.y = y;
    this.src = imagesrc;
}

Player.prototype.setup = function () {
    this.elem = $('<img  src="' + this.src + '" class="player">');
    this.elem.css({ top: this.y + 'px', left: this.x + 'px' });
    $('body').append(this.elem);
}
Player.prototype.moveLeft = function (x) {
   $(this.elem).css({"transform-origin":"bottom", "transform": 'rotate'+'('+x+'deg)'});
}
Player.prototype.moveRight = function (x) {
   $(this.elem).css({"transform-origin":"bottom", "transform":'rotate'+'('+x+'deg)' });
}
Player.prototype.shoot = function () {
    var bullet = new Bullet(
        parseInt(this.x + this.elem.width() / 2 - 6),
                 this.y,'bullet.svg');
    bullet.setup();
}