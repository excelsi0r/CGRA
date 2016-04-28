var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	this.initCameras();

	this.initLights();

	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);
	this.enableTextures(true);

	// Scene elements
	this.table = new MyTable(this);
	this.wall = new Plane(this,200);
	this.floor = new MyQuad(this,0,10,0,12);
	this.leftwall = new MyQuad(this,-0.5,1.5,-0.5,1.5);
	this.cylinder = new MyCylinder(this,100,100);
	this.lamp = new MyLamp(this,100,103);
	this.clock = new MyClock(this);
	this.drone = new MyDrone(this);

	this.boardA = new Plane(this, 0,1,0,1,BOARD_A_DIVISIONS);
	this.boardB = new Plane(this,0,1,0,1, BOARD_B_DIVISIONS);

	// Materials
	this.materialDefault = new CGFappearance(this);
	
	//forte difuso
	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	this.materialA.setDiffuse(0.6,0.6,0.6,1);
	this.materialA.setSpecular(0.2,0.2,0.2,1);
	this.materialA.setShininess(120);

	//forte especular
	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(0.3,0.3,0.3,1);
	this.materialB.setDiffuse(0.6,0.6,0.6,1);
	this.materialB.setSpecular(0.8,0.8,0.8,1);	
	this.materialB.setShininess(120);

	//blue
	this.blue = new CGFappearance(this);
	this.blue.setAmbient(0,0,0.3,1);
	this.blue.setDiffuse(0.2,0.2,0.6,1);
	this.blue.setSpecular(0.2,0.2,0.8,1);	
	this.blue.setShininess(120);

	//yellow
	this.yellow = new CGFappearance(this);
	this.yellow.setAmbient(0,0,0,1);
	this.yellow.setDiffuse(0.8,0.8,0.2,1);
	this.yellow.setSpecular(0.8,0.8,0.2,1);	
	this.yellow.setShininess(120);

	this.orange = new CGFappearance(this);
	this.orange.setAmbient(0,0,0,1);
	this.orange.setDiffuse(1,0.64,0,1);
	this.orange.setSpecular(1,0.64,0,1);	
	this.orange.setShininess(120);

	//red
	this.red = new CGFappearance(this);
	this.red.setAmbient(0,0,0,1);
	this.red.setDiffuse(0.8,0,0.2,1);
	this.red.setSpecular(0.8,0,0.2,1);	
	this.red.setShininess(120);

	//Texture Wood
	this.tableAppearence = new CGFappearance(this);
	this.tableAppearence.setAmbient(0,0,0,1);
	this.tableAppearence.setDiffuse(1,1,1,1);
	this.tableAppearence.setSpecular(0.2,0.2,0.2,1);
	this.tableAppearence.setShininess(50);
	this.tableAppearence.loadTexture("/resources/images/table.png");

	//floor 
	this.floorAppearence = new CGFappearance(this);
	this.floorAppearence.setAmbient(0.1,0.1,0.1,1);
	this.floorAppearence.setDiffuse(0.9,0.9,0.9,1);
	this.floorAppearence.setSpecular(0.2,0.2,0.2,1);
	this.floorAppearence.setShininess(10);
	this.floorAppearence.loadTexture("/resources/images/floor.png");

	//window
	
	this.windowAppearence = new CGFappearance(this);
	this.windowAppearence.setAmbient(0.3,0.3,0.3,1);
	this.windowAppearence.setDiffuse(0.6,0.6,0.6,1);
	this.windowAppearence.setSpecular(0.2,0.2,0.2,1);
	this.windowAppearence.setShininess(120);
	this.windowAppearence.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.windowAppearence.loadTexture("/resources/images/window.png");
	

	/*
	//window
	this.windowAppearence = new CGFappearance(this);
	this.windowAppearence.setAmbient(0.3,0.3,0.3,1);
	this.windowAppearence.setDiffuse(0.8,0.2,0.2,1);
	this.windowAppearence.setSpecular(0.8,0.2,0.2,1);
	this.windowAppearence.setShininess(120);
	this.windowAppearence.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.windowAppearence.loadTexture("/resources/images/window.png");
	*/

	//slide
	this.slidesAppearance = new CGFappearance(this);
	this.slidesAppearance.setAmbient(0.1,0.1,0.1,1);
	this.slidesAppearance.setDiffuse(0.8,0.8,0.8,1);
	this.slidesAppearance.setSpecular(0.1,0.1,0.1,1);
	this.slidesAppearance.setShininess(10);
	this.slidesAppearance.loadTexture("/resources/images/slides.png");

	//board
	this.boardAppearance = new CGFappearance(this);
	this.boardAppearance.setAmbient(0.2,0.2,0.2,1);
	this.boardAppearance.setDiffuse(0.4,0.4,0.4,1);
	this.boardAppearance.setSpecular(0.9,0.9,0.9,1);
	this.boardAppearance.setShininess(120);
	this.boardAppearance.loadTexture("/resources/images/board.png");

	//clock
	this.clockAppearance = new CGFappearance(this);
	this.clockAppearance.setAmbient(0.2,0.2,0.2,1);
	this.clockAppearance.setDiffuse(0.4,0.4,0.4,1);
	this.clockAppearance.setSpecular(0.9,0.9,0.9,1);
	this.clockAppearance.setShininess(120);
	this.clockAppearance.loadTexture("/resources/images/clock.png");

	this.setUpdatePeriod(100);

	this.option1 = true;
	this.option2 = false;
	this.speed = 3;
	
};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};


LightingScene.prototype.update = function(currTime)
{
	this.clock.update(currTime);
	
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0.2,0.2,0.2, 1.0);
	
	// Positions for four lights
	//LIGHT NUMBER 1
	this.lights[0].setPosition(4, 6, 1, 1);
	this.lights[0].setVisible(true); // show marker on light position (different from enabled)
	this.lights[0].setAmbient(0.1, 0.1, 0.1, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1,1,1,1);
	//this.lights[0].enable();
	
	//LIGHT NUMBER 1
	this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
	this.lights[1].setVisible(true); // show marker on light position (different from enabled)
	this.lights[1].setAmbient(0, 0, 0, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	//this.lights[1].enable();

	//LIGHT NUMBER 2
	this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
	this.lights[2].setVisible(true);

	this.lights[2].setAmbient(0, 0, 0, 1);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setSpecular(1,1,1,1);

	this.lights[2].setConstantAttenuation(0);
	this.lights[2].setLinearAttenuation(1);
	this.lights[2].setQuadraticAttenuation(0);
	//this.lights[2].enable();
	
	//LIGHT NUMBER 3
	this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
	this.lights[3].setVisible(true);

	this.lights[3].setAmbient(0, 0, 0, 1);
	this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[3].setSpecular(1,1,0,1);

	this.lights[3].setConstantAttenuation(0);
	this.lights[3].setLinearAttenuation(0);
	this.lights[3].setQuadraticAttenuation(0.2);
	//this.lights[3].enable();

	//LIGHT NUMBER 4
	this.lights[4].setPosition(-1, 6, 7, 1);
	this.lights[4].setVisible(true); // show marker on light position (different from enabled)
	this.lights[4].setAmbient(0.4, 0.4, 0.4, 1);
	this.lights[4].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[4].setSpecular(1,1,1,1);
	this.lights[4].enable();

	//LIGHT NUMBER 5
	this.lights[5].setPosition(8, 8, 8, 1);
	this.lights[5].setVisible(true); // show marker on light position (different from enabled)
	this.lights[5].setAmbient(0.5, 0.5, 0.5, 1);
	this.lights[5].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[5].setSpecular(1,1,1,1);
	this.lights[5].enable();
};

LightingScene.prototype.updateLights = function() {
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
}


LightingScene.prototype.display = function() {
	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	this.updateLights();

	// Draw axis
	this.axis.display();

	this.materialDefault.apply();

	// ---- END Background, camera and axis setup

	
	// ---- BEGIN Geometric transformation section

	// ---- END Geometric transformation section


	// ---- BEGIN Primitive drawing section

	// Floor
	/*
	this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.floorAppearence.apply();
		this.floor.display();
	this.popMatrix();

	// Left Wall
	this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.windowAppearence.apply();
		this.leftwall.display();
	this.popMatrix();

	// Plane Wall
	this.pushMatrix();
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		this.yellow.apply();
		this.wall.display();
	this.popMatrix();

	// First Table
	this.pushMatrix();
		this.translate(2, 0, 8);
		this.table.display();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
		this.translate(9, 0, 8);
		this.table.display();
	this.popMatrix();

	// Board A
	this.pushMatrix();
		this.translate(4, 4.5, 0.2);

		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		
		this.slidesAppearance.apply();
		this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
		this.translate(10.5, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		
		this.boardAppearance.apply();
		this.boardB.display();
	this.popMatrix();

	//Cylinder
	this.pushMatrix();
		this.translate(0, 8, 15);
		this.rotate(Math.PI/2, 1,0,0);
		this.scale(1, 1, 8.25);
		
		this.blue.apply();
		this.cylinder.display();
	this.popMatrix();

	//lamp
	this.pushMatrix();
		this.translate(8, 8, 8);
		this.rotate(Math.PI/2, 1,0,0);
		//this.scale(1, 1, 1);
		
		this.materialB.apply();
		this.lamp.display();
	this.popMatrix();

	this.pushMatrix();
			this.clockAppearance.apply();
			this.clock.display();
	this.popMatrix();*/

	this.pushMatrix();
			this.drone.display();
	this.popMatrix();

	// ---- END Primitive drawing section

	
};




LightingScene.prototype.doSomething = function() {
	console.log("doing Something...")
}