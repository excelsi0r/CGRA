/**
 * MyHook
 * @constructor
 */
 function MyHook(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

	this.hookscale = 1;

 	this.base = new MySemi(this.scene, this.slices,this.stacks);
 	this.cylinder = new MyCompleteCylinder(this.scene, this.slices, this.stacks);
 };

 MyHook.prototype = Object.create(CGFobject.prototype);
 MyHook.prototype.constructor = MyHook;

 MyHook.prototype.display = function() 
 {
 	this.scene.pushMatrix();
 		this.scene.translate(0,0,0);
 		this.scene.scale(0.1,this.hookscale,0.1);
 		this.scene.rotate(Math.PI/2,1,0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	 	this.scene.translate(0,-this.hookscale,0);
 		this.scene.scale(0.3,0.3,0.3);
		this.base.display();
	this.scene.popMatrix();
 };

