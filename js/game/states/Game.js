//name of object
Template.Game = function () {};

const speedX = 500;

//object prototype i.e. what contains all object info
Template.Game.prototype = {

    create: function() {
        this.game.stage.backgroundColor = "fff";


        // change background color.
        this.game.stage.backgroundColor = '#3498db'

        // add player
        this.player = this.game.add.sprite(100, 300, 'player');
        game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;
        this.player.body.gravity.y = 800;

        // add sprite sprite
        this.sprite = this.game.add.sprite(500, 300, 'sprite');
        this.sprite.scale.setTo(.25);
    },
    update: function() {
        const left = game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
        const right = game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);
        const up = game.input.keyboard.isDown(Phaser.Keyboard.UP);
        const down = game.input.keyboard.isDown(Phaser.Keyboard.DOWN);

        if (left) {
            this.player.body.velocity.x = -1*speedX;
        } else if (right) {
            this.player.body.velocity.x = speedX;
        } else {
            this.player.body.velocity.x = 0;
        }
    }
};
