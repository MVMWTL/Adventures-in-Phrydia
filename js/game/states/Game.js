//name of object
Template.Game = function () {};

const speedX = 500;

//object prototype i.e. what contains all object info
Template.Game.prototype = {
    create: function() {
        this.game.stage.backgroundColor = "fff";
        // This function is called after the 'preload' function
        // Here we set up the game, display sprites, etc.

        // change background color.
        this.game.stage.backgroundColor = '#3498db'

        //adding sprites
        this.player = this.game.add.sprite(100, 300, 'player');
        game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;
        this.player.body.gravity.y = 800;
        console.log(Object.keys(Phaser.Keyboard));
    },
    update: function() {
        const left = game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
        const right = game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);
        const up = game.input.keyboard.isDown(Phaser.Keyboard.UP);
        const down = game.input.keyboard.isDown(Phaser.Keyboard.DOWN);

        //CONTROLSFORKEYBOARDLEFTANDWRITE(rihjt)
        if (left) {
            this.player.body.velocity.x = -1*speedX;
        } else if (right) {
            this.player.body.velocity.x = speedX;
        } else {
            this.player.body.velocity.x = 0;
        }

        if (up) {
            console.log("yass");
            this.player.body.velocity.y = 500;
        } else {
            this.player.body.velocity.y--;
        }

    }
};
