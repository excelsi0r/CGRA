/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

	//this.gui.add(this.scene, 'doSomething');	

	// add a group of controls (and open/expand by defult)
	
	var group=this.gui.addFolder("Luzes");
	group.open();

	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;
	
	group.add(this.scene, 'luz0');
	group.add(this.scene, 'luz1');
	group.add(this.scene, 'luz2');
	group.add(this.scene, 'luz3');
	group.add(this.scene, 'luz4');
	group.add(this.scene, 'luz5');
	
	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters
	this.gui.add(this.scene, 'clockMovement');
	
	this.gui.add(this.scene, 'speed', -5, 5);

	this.gui.add(this.scene, 'helixSpeed', 0.5 , 2);

	this.gui.add(this.scene,'currDroneAppearance',this.scene.droneAppearancesList);

	return true;
};

/**
 * processKeyboard
 * @param event {Event}
 */
/* MyInterface.prototype.processKeyboard = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{
		case (65):	// only works for capital 'A', as it is
			console.log("Key 'A' pressed");
			this.scene.drone.Rotation(10);
			break;

		case(87):
			console.log("Key 'W' pressed");
			this.scene.drone.Translate(1);
			break;

		case(68):
			console.log("Key 'D' pressed");
			this.scene.drone.Rotation(-10);
			break;
		case(83):
			console.log("Key 'S' pressed");
			this.scene.drone.Translate(2);
			break;

		case(73):
			console.log("Key 'I' pressed");
			this.scene.drone.Translate(3);
			break;

		case(74):
			console.log("Key 'J' pressed");
			this.scene.drone.Translate(4);
			break;

	};
};*/

/**
 * processKeyDown
 * @param event {Event}
 */
MyInterface.prototype.processKeyDown = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyDown.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	console.log("entra");
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{
		case (65):	// only works for capital 'A', as it is
			console.log("Key 'A' pressed");
			//this.scene.drone.rotate(10*(180/Math.PI));	
			this.scene.keyA = true;
			break;

		case(87):
			console.log("Key 'W' pressed");
			//this.scene.drone.translate(0);
			this.scene.keyW = true;
			break;
		case(68):
			console.log("Key 'D' pressed");
			//this.scene.drone.rotate(-10*(180/Math.PI));
			this.scene.keyD = true;
			break;

		case(83):
			console.log("Key 'S' pressed");	
			this.scene.keyS = true;
			break;

		case(73):
			console.log("Key 'I' pressed");
			//this.scene.drone.Translate(3);
			this.scene.keyI = true;
			break;

		case(74):
			console.log("Key 'J' pressed");
			//this.scene.drone.Translate(4);
			this.scene.keyJ = true;
			break;
		case(80):
			console.log("Key 'P' pressed");
			this.scene.keyP = true;
			break;
		case(76):
			console.log("Key 'L' pressed");
			this.scene.keyL = true;
			break;
	};
};



/**
 * processKeyUp
 * @param event {Event}
 */
MyInterface.prototype.processKeyUp = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyUp.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{
		case (65):	// only works for capital 'A', as it is
		case(107):	
			console.log("Key 'A' pressed");
			//this.scene.drone.rotate(10*(180/Math.PI));	
			this.scene.keyA = false;
			break;

		case(87):
			console.log("Key 'W' pressed");
			//this.scene.drone.translate(0);
			this.scene.keyW = false;
			break;
		case(68):
			console.log("Key 'D' pressed");
			//this.scene.drone.rotate(-10*(180/Math.PI));
			this.scene.keyD = false;
			break;
		case(83):
			console.log("Key 'S' pressed");
			this.scene.keyS = false;
		case(73):
			console.log("Key 'I' pressed");
			//this.scene.drone.Translate(3);
			this.scene.keyI = false;
			break;

		case(74):
			console.log("Key 'J' pressed");
			//this.scene.drone.Translate(4);
			this.scene.keyJ =false;
			break;
		case(80):
			console.log("Key 'P' pressed");
			this.scene.keyP = false;
			break;
		case(76):
			console.log("Key 'L' pressed");
			this.scene.keyL = false;
			break;

			
	};
};