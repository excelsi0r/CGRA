/**
 * myFloor
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function myFloor(scene) 
{
	CGFobject.call(this,scene);
	this.floor=new MyUnitCubeQuad(this.scene);
};

myFloor.prototype = Object.create(CGFobject.prototype);
myFloor.prototype.constructor=myFloor;

myFloor.prototype.display = function()
{
	//SAVE STATE
	this.scene.translate(0,0,0);
	this.scene.pushMatrix();

	//Create Floor
	this.scene.translate(4,0.1/2,3);
	this.scene.scale(8,0.1,6);
	this.floor.display();

	//RESTORE STATE
	this.scene.popMatrix();
	this.scene.pushMatrix();
};


