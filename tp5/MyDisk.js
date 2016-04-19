/**
 * MyDisk
 * @constructor
 */
 function MyDisk(scene, slices) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;


 	this.initBuffers();
 };

 MyDisk.prototype = Object.create(CGFobject.prototype);
 MyDisk.prototype.constructor = MyDisk;

 MyDisk.prototype.initBuffers = function() 
 {

	var x = 1;	//INITIAL COORDENATES
	var y = 0;
	var z = 0;

	var radix = 1;

	var i0 = 1;  //INDDEX

	var nx = 0;	//NORMALS
	var ny = 0;
	var nz = 1;

	var n = (Math.PI * 2) / this.slices; //INCREMENT ANGLE
	var alpha = 0;	//INITAL ANGLE

	this.vertices = []; //ARRAYS
	this.indices = [];
	this.normals = [];
	this.texCoords = [];

	this.vertices.push(0,0,0);
	this.texCoords.push(0.5,0.5);

	for(i = 0; i < this.slices+1; i++)
	{
		if(i == 0)
		{
			x = radix*Math.cos(alpha);
			y = radix*Math.sin(alpha);

			this.vertices.push(x,y,z);
			this.normals.push(nx, ny, nz);	
			this.texCoords.push(0.5*Math.cos(alpha) + 0.5,0.5 - (0.5*Math.sin(alpha)));


			alpha += n;
		}
		else if(i == this.slices)
		{
			x = radix*Math.cos(alpha);
			y = radix*Math.sin(alpha);

			this.vertices.push(x,y,z);
			this.normals.push(nx, ny, nz);
			this.indices.push(0,i0,1);
			 this.texCoords.push(0.5*Math.cos(alpha) + 0.5,0.5 - (0.5*Math.sin(alpha)));
	
		}
		else
		{
			
			x = radix*Math.cos(alpha);
			y = radix*Math.sin(alpha);

			this.vertices.push(x,y,z);
			this.normals.push(nx, ny, nz);
			

			this.indices.push(0,i0,i0+1);
			 this.texCoords.push(0.5*Math.cos(alpha) + 0.5,0.5 - (0.5*Math.sin(alpha)));

			alpha += n;
			i0++;
			
			
		}
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 	
 };
