/**
 * MyClock
 * @constructor
 */
 function MyClock(scene) {
 	CGFobject.call(this,scene);

	this.clock = new MyCylinder(this.scene,12,2);
	this.clock.initBuffers();

	this.clocktop = new MyDisk(this.scene, 12);
	this.clocktop.initBuffers();

 	
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

 MyClock.prototype.display = function()
 {
 	
	this.scene.pushMatrix();
		this.scene.translate(7.25, 7.25, 0);
		//this.rotate(Math.PI/2, 1,0,0);
		this.scene.scale(-0.5, -0.5, 0.5);
		
		//this.materialB.apply();
		this.clock.display();
	this.scene.popMatrix();

	//clock

	this.scene.pushMatrix();
		this.scene.translate(7.25, 7.25, 0.25);
		//this.rotate(Math.PI/2, 1,0,0);
		this.scene.scale(-0.5, -0.5, 0.5);
		
		//this.materialB.apply();
		this.clocktop.display();
	this.scene.popMatrix();

 };