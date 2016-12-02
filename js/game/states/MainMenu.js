Template.MainMenu = function() {};

Template.MainMenu.prototype = {

    create: function() {
        // tile sprite lets you tile the image as manytimes as you like... I think it make the
        this.game.add.tileSprite(0, 0, 1500, 600, "background");
        /*this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
        this.splash.anchor.setTo(0.5);
        this.splash.height = game.height;
        this.splash.smoothed = false;
        this.splash.width = game.width;
        */
        this.startbutton = game.add.button(225, 175, "start", this.startgame.bind(this), 2, 1, 0);
        this.startbutton.scale.x = 1.5;
        this.startbutton.scale.y = 1.5;

        this.settingsbutton = game.add.button(243, 225, "settings", this.startgame.bind(this), 2, 1, 0);
        this.settingsbutton.scale.x = 1.5;
        this.settingsbutton.scale.y = 1.5;

        this.storebutton = game.add.button(260, 275, "store", this.startgame.bind(this), 2, 1, 0);
        this.storebutton.scale.x = 1.5;
        this.storebutton.scale.y = 1.5;

    },
    startgame: function() {
      console.log("startgame");
      this.state.start("Game");
    },

    startsettings: function() {
      console.log("settings");
      this.state.start("Game");
    },

    startstore: function() {
      console.log("store");
      this.state.start("store")
    },


    update: function() {
        //if(this.game.input.activePointer.justPressed()){
        //    this.state.start("Game");
        //}
    }
};
