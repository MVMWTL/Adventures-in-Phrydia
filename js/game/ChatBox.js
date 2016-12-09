ChatBox = function (game, line) {
var x = 0;
var y = 283;
    Phaser.Sprite.call(this, game, x, y, 'chatbox', 17);

    this.inputEnabled = true;
    game.physics.arcade.enable(this);
    this.scale.setTo(.5);
    this.width = 600;
    var style = {
        font: "32px Arial"
        , fill: "#ff0044"
        , wordWrap: true
        , wordWrapWidth: this.width
        , align: "center"
        , backgroundColor: "#ffff00"
    };

};
ChatBox.prototype = Object.create(Phaser.Sprite.prototype);
ChatBox.prototype.constructor = ChatBox;
ChatBox.prototype.update = function () {

        this.text.x = Math.floor(this.x + this.width / 2);
        this.text.y = Math.floor(this.y + this.height / 2);
    }
    , ChatBox.prototype.display = function (input) {
        this.text = game.add.text(0, 0, input, this.style);
        this.text.anchor.set(0.5);
    };
