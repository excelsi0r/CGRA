/**
 * myTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTable(scene) 
{
	CGFobject.call(this,scene);
	this.table=new MyUnitCubeQuad(this.scene);
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function()
{
	
	//sETTING LIGHT
	this.scene.setAmbient(0.3,0.3,0.3,1);
	this.scene.setDiffuse(0.8,0.8,0.8,1);
	this.scene.setSpecular(0.8,0.8,0.8,1);
	this.scene.setShininess(120);

	//SAVE STATE
	this.scene.pushMatrix();

	//First Leg
	this.scene.translate(0.15,3.5/2,0.15);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();
	
	//RESTORE STATE
	this.scene.popMatrix();
	this.scene.pushMatrix();

	//Second Leg
	this.scene.translate(0.15,3.5/2,3+0.15-0.3);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();

	//RESTORE STATE
	this.scene.popMatrix();
	this.scene.pushMatrix();

	//Third Leg
	this.scene.translate(0.15+5-0.3,3.5/2,0.15);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();

	//RESTORE STATE
	this.scene.popMatrix();
	this.scene.pushMatrix();

	//Forth Leg
	this.scene.translate(0.15+5-0.3,3.5/2,0.15+3-0.3);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();

	//RESTORE STATE
	this.scene.popMatrix();
	this.scene.pushMatrix();

	//SETTING WOOD
	this.scene.setAmbient(153/255,76/255,0,1);
	this.scene.setDiffuse(153/255,76/255,0,1);
	this.scene.setSpecular(0.2,0.1,0,1);	
	this.scene.setShininess(30);

	//Tabletop
	this.scene.translate(4-1.5,3.5-0.3/2+0.3,3-1.5);

	this.scene.scale(5,0.3,3);
	this.table.display();

	//RESTORE STATE
	this.scene.popMatrix();
	//this.scene.pushMatrix();
};


