/**
 * MySemi
 * @constructor
 */
 function MySemi(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

	this.lamp = new MyLamp(this.scene, this.slices, this.stacks);
 	this.base = new MyDisk(this.scene, this.slices);
 	this.cylinder = new MyCylinder(this.scene, this.slices, this.stacks);
 };

 MySemi.prototype = Object.create(CGFobject.prototype);
 MySemi.prototype.constructor = MySemi;


 MySemi.prototype.display = function()
 {
 	this.scene.pushMatrix();
 		this.scene.translate(0, -0.5, 0);
 		this.scene.rotate(Math.PI/2, 1,0,0);
		this.base.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2, -1,0,0);
		this.lamp.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		
		this.scene.translate(0, -0.5, 0);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, -1,0,0);
		this.cylinder.display();
	this.scene.popMatrix();
 };