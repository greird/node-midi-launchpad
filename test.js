var midiConnector = require('../node-midi-launchpad').connect();

var launchpad = midiConnector.on('ready');

launchpad.clear();

launchpad.on("press", () => {
	//launchpad.displayCharacter(Math.floor((Math.random() * 10)), launchpad.colors.orange.medium);
	
	launchpad.displayDigit(Math.floor((Math.random() * 10)), launchpad.randomColor(), "right");
	launchpad.displayDigit(Math.floor((Math.random() * 10)), launchpad.randomColor(), "left");

	//launchpad.scrollString("red team wins", 100, launchpad.colors.orange.medium, () => {
	//	launchpad.clear();
	//});
})