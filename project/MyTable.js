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

	this.scene.materialB.apply();

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
	this.scene.tableAppearence.apply();

	//Tabletop
	this.scene.translate(4-1.5,3.5-0.3/2+0.3,3-1.5);

	this.scene.scale(5,0.3,3);
	this.table.display();

	//RESTORE STATE
	this.scene.popMatrix();
	//this.scene.pushMatrix();
	this.scene.materialDefault.apply();
};


