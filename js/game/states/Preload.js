Template.Preload = function() {
    this.ready=false;

};

Template.Preload.prototype = {

    preload: function() {


        // here you load all the game images and what not


        this.load.image('player', "assets/images/sprite1.png");
        this.load.image('sprite', "assets/images/sprite.jpg");

        this.load.image("background", "assets/images/backgrounds-3.jpg");
        this.load.image("settings", "assets/images/settings.png");
        this.load.image("start", "assets/images/startbutton.png");
        this.load.image("store","assets/images/storebutton.png");
        this.load.image("chatbox", "assets/images/ChatBox.jpg");
        this.load.image("key", "assets/images/key.png");
        this.load.image("paper", "assets/images/paper.png");
        this.load.image("flower", "assets/images/flower2.png");
        this.load.image("forest", "assets/images/forest.png");



    },
    create: function() {
        //console.log("preload bar is: "+this.preloadbar);
        //this.preloadbar.cropEnabled = true;
    },

    update: function() {
        console.log("about to go to main menu")
       this.state.start('MainMenu');
    },

    onLoadComplete: function(){
        this.ready = true;
    }
};
