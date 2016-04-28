/**
 * MyDrone
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyDrone(scene, minS, maxS, minT, maxT) 
{
	CGFobject.call(this,scene);
	this.minS = minS || 0;
	this.minT = minT || 0;
	this.maxT = maxT || 1;
	this.maxS = maxS || 1;
	

	this.arm = new MyCylinder(this.scene,12,2);
	this.helibase = new MyDisk(this.scene, 12);

	this.semi = new MyLamp(this.scene,100,103);
	this.base = new MyDisk(this.scene, 100);
	this.basecil = new MyCylinder(this.scene,100,3);
};

MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor=MyDrone;

MyDrone.prototype.display = function () 
{		
	//first arm
	this.scene.pushMatrix();
		this.scene.translate(5,0.2,0);
		this.scene.scale(0.2,0.2, 20);
		this.arm.display();
	this.scene.popMatrix();

	//second arm
	this.scene.pushMatrix();
		this.scene.translate(0,0.2,5);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.scale(0.2,0.2, 20);
		this.arm.display();
	this.scene.popMatrix();

	//center semi-sphere
	this.scene.pushMatrix();
		this.scene.translate(5,0,5);
		this.scene.rotate(Math.PI/2,-1,0,0);
		this.scene.scale(2,2,2);
		this.semi.display();
	this.scene.popMatrix();

	//center base
	this.scene.pushMatrix();
		this.scene.translate(5,-0.33,5);
		this.scene.scale(2,1,2);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.base.display();
	this.scene.popMatrix();

	//giving more base to drone
	this.scene.pushMatrix();
		this.scene.translate(5,0,5);
		this.scene.scale(2,1,2);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.basecil.display();
	this.scene.popMatrix();

	//continue



};
