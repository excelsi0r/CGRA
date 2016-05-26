/**
 * MyHelix
 * @constructor
 */
 function MyHelix(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.helix = new MySemi(this.scene, this.slices,this.stacks);
 	this.cyl = new MyCompleteCylinder(this.scene,this.slices,this.stacks);
 };

 MyHelix.prototype = Object.create(CGFobject.prototype);
 MyHelix.prototype.constructor = MyHelix;

 MyHelix.prototype.display = function() 
 {

	this.scene.pushMatrix();
		this.scene.scale(0.2,0.3,0.2);
		this.helix.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0.1,0.5);
		this.scene.scale(0.1,0.05,0.5);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.cyl.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0.1,-0.5);
		this.scene.scale(0.1,0.05,0.5);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.cyl.display();
	this.scene.popMatrix();


 };
