/**
 * MyDrone
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyDrone(scene, minS, maxS, minT, maxT, ang) 
{
	CGFobject.call(this,scene);
	this.minS = minS || 0;
	this.minT = minT || 0;
	this.maxT = maxT || 1;
	this.maxS = maxS || 1;
	this.ang = (ang * Math.PI)/180 || (20 * Math.PI)/180 ;

	this.x = 0;
	this.y = 0;
	this.z = 0;

	this.semi = new MySemi(this.scene,10,13);
	this.cyl = new MyCompleteCylinder(this.scene,10,10);
	this.leg = new MyCurve(this.scene, 10);
	this.helix = new MyHelix(this.scene, 10,13);
};

MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor=MyDrone;

MyDrone.prototype.Rotation = function(ang)
{
	//this.scene.rotate(Math.PI/3,0,1,0);
	this.ang += ((ang * Math.PI)/180);
};

MyDrone.prototype.Translate = function(direction){
	
	switch(direction)
	{
		case(1):
		this.x += Math.sin(this.ang)*0.1;
		this.z += Math.cos(this.ang)*0.1;
		break;

		case(2):
		this.x -= Math.sin(this.ang)*0.1;
		this.z -= Math.cos(this.ang)*0.1;
		break;

		case(3):
		this.y += 0.1;
		break;

		case(4):
		this.y -=0.1;
		break;

	}
	
};

MyDrone.prototype.display = function () 
{		
	//first arm
	this.scene.pushMatrix();
		this.scene.translate(this.x,this.y,this.z-2.5);
		this.scene.scale(0.2,0.2, 5);
		this.cyl.display();
	this.scene.popMatrix();

	//second arm
	this.scene.pushMatrix();
		this.scene.translate(this.x-2.5,this.y,this.z);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.scale(0.2,0.2, 5);
		this.cyl.display();
	this.scene.popMatrix();
	
	//center semi-sphere
	this.scene.pushMatrix();
		this.semi.display();
	this.scene.popMatrix();

	//cylinder 1
	this.scene.pushMatrix();
		this.scene.translate(2.5,0.3,0);
		this.scene.scale(0.4,0.6,0.4);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.cyl.display();
	this.scene.popMatrix();

	//cylinder 2
	this.scene.pushMatrix();
		this.scene.translate(0,0.3,2.5);
		this.scene.scale(0.4,0.6,0.4);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.cyl.display();
	this.scene.popMatrix();

	//cylinder 3
	this.scene.pushMatrix();
		this.scene.translate(0,0.3,-2.5);
		this.scene.scale(0.4,0.6,0.4);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.cyl.display();
	this.scene.popMatrix();

	//cylinder 4
	this.scene.pushMatrix();
		this.scene.translate(-2.5,0.3,0);
		this.scene.scale(0.4,0.6,0.4);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.cyl.display();
	this.scene.popMatrix();

	//leg1
	this.scene.pushMatrix();
		this.scene.translate(-0.5,-1.5,0.25);
		this.scene.scale(0.1,1 , 1);
		this.leg.display();
	this.scene.popMatrix();

	//leg2
	this.scene.pushMatrix();
		this.scene.translate(0.5,-1.5,0.25);
		this.scene.scale(0.1,1 , 1);
		this.leg.display();
	this.scene.popMatrix();

	//leg3
	this.scene.pushMatrix();
		this.scene.translate(0.5,-1.5,-0.25);
		this.scene.scale(0.1,1 ,-1);
		this.leg.display();
	this.scene.popMatrix();

	//leg4
	this.scene.pushMatrix();
		this.scene.translate(-0.5,-1.5,-0.25);
		this.scene.scale(0.1,1 ,-1);
		this.leg.display();
	this.scene.popMatrix();

	//leg cylinder1
	this.scene.pushMatrix();
		this.scene.translate(-1.25,-1.5,1.25);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.scale(0.1,0.1 ,2.5);
		this.cyl.display();
	this.scene.popMatrix();

	//leg cylinder2
	this.scene.pushMatrix();
		this.scene.translate(-1.25,-1.5,-1.25);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.scale(0.1,0.1 ,2.5);
		this.cyl.display();
	this.scene.popMatrix();

	//helix1
	this.scene.pushMatrix();
		this.scene.translate(0,0.4,2.5);
		this.helix.display();
	this.scene.popMatrix();

	//helix2
	this.scene.pushMatrix();
		this.scene.translate(0,0.4,-2.5);
		this.helix.display();
	this.scene.popMatrix();

	//helix3
	this.scene.pushMatrix();
		this.scene.translate(2.5,0.4,0);
		this.helix.display();
	this.scene.popMatrix();

		//helix4
	this.scene.pushMatrix();
		this.scene.translate(-2.5,0.4,0);
		this.helix.display();
	this.scene.popMatrix();


};
