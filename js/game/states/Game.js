//name of object
Template.Game = function () {};

const speedX = 500;

//object prototype i.e. what contains all object info
Template.Game.prototype = {

    create: function() {
        this.game.stage.backgroundColor = "fff";


        // change background color.
        this.game.stage.backgroundColor = '#3498db'

        //adding sprites
        this.player = this.game.add.sprite(400, 150, 'player');
        game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;
        this.textbox("HELLO!");
        this.setupTextbox();
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
    },
    textbox: function(text) {
      console.log(text);

    },
    setupTextbox: function() {
      var style = { font: "35px Arial", fill: "#ff0044", wordWrap: true, align: "center", backgroundColor: "#ffff00" };

      this.text = game.add.text(300, 380, "Hello!!!", style);
      this.text.anchor.set(0.5);
    }
};

// https://phaser.io/examples/v2/text/google-webfonts
//WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
//    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
//    google: {
//      families: ['Revalia']
//    }

//};
