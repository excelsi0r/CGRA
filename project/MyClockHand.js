/**
 * MyClockHand
 * @constructor
 */
 function MyClockHand(scene, height, angle, type) 
 {
 	CGFobject.call(this,scene);
 	this.height = height;
 	this.angle = angle;
 	this.type = type;
 	this.lastime = 0;
 	this.interval = 0;


 	/*
 	TYPE
 	0 seconds
 	1 minutes
 	2 hours
 	*/
 };

 MyClockHand.prototype = Object.create(CGFobject.prototype);
 MyClockHand.prototype.constructor = MyClockHand;

 MyClockHand.prototype.initBuffers = function() 
 {
	this.vertices = [
	-0.02, 0,0,
	0.02, 0, 0,
	0, this.height, 0
	];

	this.indices = [0,1,2];

	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();

 };

  MyClockHand.prototype.setAngle = function(newAngle) 
 {
	this.angle = newAngle;

 };

   MyClockHand.prototype.update = function(currTime) 
 {

 	this.interval = currTime - this.lastime;
	this.lastime = currTime;


	if(this.type == 0)
	{
      this.setAngle(this.angle + (360 / 60 * (this.interval / 1000)));
 	}
 	else if(this.type == 1)
 	{
      this.setAngle(this.angle + 360 / (60 * 60) * (this.interval / 1000));
 	}
 	else if(this.type == 2)
 	{
      this.setAngle(this.angle + 360 / (60 * 60 * 60) * (this.interval / 1000));
 	}

 };