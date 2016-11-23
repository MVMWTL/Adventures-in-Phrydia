Template.Preload = function() {
    this.ready=false;

};

Template.Preload.prototype = {

    preload: function() {


        // here you load all the game images and what not


        this.load.image('player', "assets/images/sprite1.png");
         this.load.image("logo", "assets/images/fate.png");
         this.load.image('background', 'assets/images/sky.jpg');


    },
    create: function() {
        //console.log("preload bar is: "+this.preloadbar);
        //this.preloadbar.cropEnabled = true;
    },

    update: function() {
        console.log("about to go to to main menu")
       this.state.start('MainMenu');
    },

    onLoadComplete: function(){
        this.ready = true;
    }
};
