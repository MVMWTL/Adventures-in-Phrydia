//name of object
Template.Game = function () {};
const speedX = 500;
//object prototype i.e. what contains all object info
Template.Game.prototype = {
    create: function () {
        this.game.stage.backgroundColor = "fff";
        //this.Box = new ChatBox(this.game);
        // change background color.
        this.game.stage.backgroundColor = '#3498db'
            //adding sprites
            //this.setupTextbox();
        this.forestbutton = this.game.add.sprite(0, 0, "forest");
        this.forestbutton.height = 400;
        //this.storebutton.scale.y = 1;
        // add sprite sprite
        //  this.storebutton = game.add.button(260, 275, "sprite", this.updateText.bind(this), 2, 1, 0);
        //this.storebutton.scale.x = .05;
        //this.storebutton.scale.y = .05;
        this.paperbutton = this.game.add.button(50, 50, "paper", this.updateTextPaper, this, 2, 1, 0);
        this.paperbutton.scale.setTo(.1);
        //this.storebutton.scale.x = .01;
        //this.storebutton.scale.y =;
        this.keybutton = this.game.add.button(150, 150, "key", this.updateTextKey,this, 2, 1, 0);
        this.keybutton.scale.setTo(.1);
        //this.storebutton.scale.x = .05;
        //this.storebutton.scale.y = .05;
        this.flowerbutton = game.add.button(300, 50, "flower", this.updateTextFlower,this, 2, 1, 0);
        this.flowerbutton.scale.setTo(.1);
        //this.storebutton.scale.x = .05;
        //this.storebutton.scale.y = .05;
        this.player = this.game.add.sprite(400, 150, 'player');
        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;
        //this.textbox("HELLO!");
        this.initGui();
    }
    , update: function () {
        const left = this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
        const right = this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);
        const up = this.game.input.keyboard.isDown(Phaser.Keyboard.UP);
        const down = this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN);
        if (left) {
            this.player.body.velocity.x = -1 * speedX;
        }
        else if (right) {
            this.player.body.velocity.x = speedX;
        }
        else {
            this.player.body.velocity.x = 0;
        }
    }
    , textbox: function (text) {
        console.log(text);
    }
    , setupTextbox: function () {
        var style = {
            font: "35px Arial"
            , fill: "#ff0000"
            , wordWrap: true
            , align: "center"
            , backgroundColor: "#ffff00"
        };
        this.text = this.game.add.text(300, 380, "Hello!!!", style);
        this.text.anchor.set(0.5);
    }
    , updateTextPaper: function () {
        this.updateDialouge("you have pressed map");
    }
    , updateTextFlower: function() {
        this.updateDialouge("You have obtained a petal from the universal rose");
        this.addPetal();
    }
    
    , updateTextKey: function() {
        this.updateDialouge("The key is unreachable at the moment");
    }

    , initGui: function(){
        
        var style = {
            font: "15px Arial"
            , fill: "#ff0000"
            , wordWrap: true
            , align: "center"
           
        };
        
        var y = 275
        var bitmapRect = this.add.bitmapData(this.game.width, this.game.height - y);
        bitmapRect.ctx.fillStyle = "#00048";
        bitmapRect.ctx.fillRect(0, 0, this.game.width, this.game.height - y);
        // this sprite that will display it 
        this.panel = this.add.sprite(0, y, bitmapRect);
        this.panel.alpha = .5;
        
        // dialouge texts
        
        this.dialouge= this.game.add.text(0, y, "", style);
        
    }
    
    
    , updateDialouge: function (input){
        this.dialouge.text = input;
    }
    , addPetal: function (input){
        this.petal = this.add.sprite(150,300,"flower");
        this.petal.scale.setTo(.4);
        this.flowerbutton.visibility = false;
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