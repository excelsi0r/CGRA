/**
 * MyClock
 * @constructor
 */

  var degToRad = Math.PI / 180.0;

 function MyClock(scene) {
 	CGFobject.call(this,scene);

	this.clock = new MyCylinder(this.scene,12,2);
	this.clock.initBuffers();

	this.clocktop = new MyDisk(this.scene, 12);
	this.clocktop.initBuffers();

	this.seconds = new MyClockHand(this.scene, 0.5, 270, 0);
	this.seconds.initBuffers();

	this.minutes = new MyClockHand(this.scene, 0.4, 180, 1);
	this.minutes.initBuffers();

	this.hours = new MyClockHand(this.scene, 0.3, 90, 2);
	this.hours.initBuffers();

 	
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

 MyClock.prototype.display = function()
 {
 	
	this.scene.pushMatrix();
		this.scene.translate(7.25, 7.25, 0);
		//this.rotate(Math.PI/2, 1,0,0);
		this.scene.scale(-0.5, -0.5, 0.25);
		
		this.clock.display();
	this.scene.popMatrix();

	//clock

	this.scene.pushMatrix();
		
		this.scene.translate(7.25, 7.25, 0.25);
		this.scene.scale(-0.5, -0.5, 0.5);
		this.scene.rotate(Math.PI,0,0,1);
		
		//this.materialB.apply();
		this.clocktop.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		
		this.scene.translate(7.25, 7.25, 0.252);
		//this.scene.scale(-0.5, -0.5, 0.5);
		this.scene.rotate(-this.seconds.angle *  degToRad,0,0,1);
		
		this.scene.yellow.apply();
		this.seconds.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		
		this.scene.translate(7.25, 7.25, 0.255);
		//this.scene.scale(-0.5, -0.5, 0.5);
		this.scene.rotate(-this.minutes.angle * degToRad,0,0,1);
		
		this.scene.red.apply();
		this.minutes.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		
		this.scene.translate(7.25, 7.25, 0.259);
		//this.scene.scale(-0.5, -0.5, 0.5);
		this.scene.rotate(-this.hours.angle * degToRad ,0,0,1);
		
		this.scene.blue.apply();
		this.hours.display();
	this.scene.popMatrix();

 };

MyClock.prototype.update = function(currTime)
{
	this.seconds.update(currTime);
	this.minutes.update(currTime);
	this.hours.update(currTime);	
};