/**
 * myTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function myTable(scene) 
{
	CGFobject.call(this,scene);
	this.table=new MyUnitCubeQuad(this.scene);
};

myTable.prototype = Object.create(CGFobject.prototype);
myTable.prototype.constructor=myTable;

myTable.prototype.display = function()
{
	//SAVE STATE
	this.scene.translate(0,0,0);
	this.scene.pushMatrix();

	//First Leg
	this.scene.translate(1.5+.15,3.5/2+0.1,1.5+0.15);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();
	
	//RESTORE STATE
	this.scene.popMatrix();
	this.scene.pushMatrix();

	//Second Leg
	this.scene.translate(1.5+0.15,3.5/2+0.1,3+1.5+0.15-0.3);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();

	//RESTORE STATE
	this.scene.popMatrix();
	this.scene.pushMatrix();

	//Third Leg
	this.scene.translate(1.5+0.15+5-0.3,3.5/2+0.1,0.15+1.5);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();

	//RESTORE STATE
	this.scene.popMatrix();
	this.scene.pushMatrix();

	//Forth Leg
	this.scene.translate(1.5+0.15+5-0.3,3.5/2+0.1,0.15+1.5+3-0.3);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();

	//RESTORE STATE
	this.scene.popMatrix();
	this.scene.pushMatrix();

	//Tabletop
	this.scene.translate(4,3.5+0.1-0.3/2+0.3,3);
	this.scene.scale(5,0.3,3);
	this.table.display();

	//RESTORE STATE
	this.scene.popMatrix();
	this.scene.pushMatrix();
};


