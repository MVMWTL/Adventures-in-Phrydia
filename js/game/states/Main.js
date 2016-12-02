//creating a game object

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

//adding the games states that the game will have
game.state.add('Boot', Template.Boot);
game.state.add('Preload',Template.Preload);
game.state.add('MainMenu',Template.MainMenu);
//game.state.add('Settings',Template.Settings);
//game.state.add('store',Template.Settings);

game.state.add('Game',Template.Game);

//starts the Boot game state
//console.console.log("WTF IS GOING ON");
game.state.start('Preload');
//game.state.start('preload');
