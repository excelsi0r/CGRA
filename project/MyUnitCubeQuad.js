/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCubeQuad(scene, minS,maxS,minT,maxT) 
{
	CGFobject.call(this,scene);
	this.quad=new MyQuad(this.scene, minS,maxS,minT,maxT);
	this.quad.initBuffers();
};

MyUnitCubeQuad.prototype = Object.create(CGFobject.prototype);
MyUnitCubeQuad.prototype.constructor=MyUnitCubeQuad;

MyUnitCubeQuad.prototype.display = function()
{
	//Save State
	//this.scene.translate(0,0,0);
	this.scene.pushMatrix();
	
	//CReated the +Z
	this.scene.translate(0,0,0.5);
	this.quad.display();

	//Created the -Z
	this.scene.translate(0,0,-1);
	this.scene.rotate(Math.PI,1,0,0);
	this.quad.display();


	//Restore State
	this.scene.popMatrix();
	this.scene.pushMatrix();


	//Create the +X
	this.scene.translate(0.5,0,0);
	this.scene.rotate(Math.PI/2,0,1,0);
	this.quad.display();

	//Create the -X
	this.scene.rotate(Math.PI/2,0,-1,0);
	this.scene.translate(-1,0,0);
	this.scene.rotate(Math.PI/2,0,-1,0);
	this.quad.display();


	//Restore State
	this.scene.popMatrix();
	this.scene.pushMatrix();


	//Create the +Y
	this.scene.translate(0,-0.5,0);
	this.scene.rotate(Math.PI/2,1,0,0);
	this.quad.display();

	//Create the -Y
	this.scene.rotate(Math.PI/2,-1,0,0);
	this.scene.translate(0,1,0);
	this.scene.rotate(Math.PI/2,-1,0,0);
	this.quad.display();

	//Restore state
	this.scene.popMatrix();
};