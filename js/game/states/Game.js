//name of object
Template.Game = function () {};

const speedX = 500;

//object prototype i.e. what contains all object info
Template.Game.prototype = {

    create: function() {
        this.game.stage.backgroundColor = "fff";

        var Box = new ChatBox(game);
        game.add.existing(Box);
        // change background color.
        this.game.stage.backgroundColor = '#3498db'

        //adding sprites


        //this.setupTextbox();

        this.forestbutton = game.add.button(0, 0, "forest", this.updateText.bind(this), 2, 1, 0);
        this.forestbutton.height = 283;
        //this.storebutton.scale.y = 1;

        // add sprite sprite
      //  this.storebutton = game.add.button(260, 275, "sprite", this.updateText.bind(this), 2, 1, 0);
        //this.storebutton.scale.x = .05;
        //this.storebutton.scale.y = .05;


       this.paperbutton = game.add.button(50, 50, "paper", this.updateText.bind(this,Box), 2, 1, 0);
       this.paperbutton.scale.setTo(.1);
        //this.storebutton.scale.x = .01;
        //this.storebutton.scale.y =;

        this.keybutton = game.add.button (150, 150, "key", this.updateText.bind(this), 2, 1, 0);
        this.keybutton.scale.setTo(.1);

        //this.storebutton.scale.x = .05;
        //this.storebutton.scale.y = .05;

        this.flowerbutton = game.add.button(300, 50, "flower", this.updateText.bind(this), 2, 1, 0);
        this.flowerbutton.scale.setTo(.1);

        //this.storebutton.scale.x = .05;
        //this.storebutton.scale.y = .05;


          this.player = this.game.add.sprite(400, 150, 'player');
          game.physics.enable(this.player, Phaser.Physics.ARCADE);
          this.player.body.collideWorldBounds = true;
          //this.textbox("HELLO!");
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
    },
    textbox: function(text) {
      console.log(text);

    },
    setupTextbox: function() {
      var style = { font: "35px Arial", fill: "#ff0000", wordWrap: true, align: "center", backgroundColor: "#ffff00" };

      this.text = game.add.text(300, 380, "Hello!!!", style);
      this.text.anchor.set(0.5);
    },
    updateText: function(Box) {
      Box.display('yaaas');
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
