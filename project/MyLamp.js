/**
 * MyLamp
 * @constructor
 */
 function MyLamp(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyLamp.prototype = Object.create(CGFobject.prototype);
 MyLamp.prototype.constructor = MyLamp;

 MyLamp.prototype.initBuffers = function() 
 {

	var x = 1;	//INITIAL COORDENATES
	var y = 0;
	var z = 0;

	var radius = 1;
	var R = 1;	//RADIUS
	var H = R / this.stacks;	//HEIGHT
	
	var i0 = 0;  //INDDEX

	var nx = 0;	//NORMALS
	var ny = 0;
	var nz = 0;

	var n = (Math.PI * 2) / this.slices; //INCREMENT ANGLE
	var alpha = 0;	//INITAL ANGLE

	var s = (Math.PI/2) / this.stacks;
	var beta = 0;

	this.vertices = []; //ARRAYS
	this.indices = [];
	this.normals = [];

	for(j = 0; j < this.stacks+2; j++)
	{

		if(j == 0)
		{
			for(i = 0; i < this.slices; i++)
			{
				R = Math.sqrt((radius*radius) - (z*z));
				x = R*Math.cos(alpha);
				y = R*Math.sin(alpha);

				nx = Math.cos(alpha);
				ny = Math.sin(alpha);
				nz = Math.sin(beta);

				this.vertices.push(x,y,z);
				this.normals.push(nx, ny, nz);	
				alpha += n;
			}
			z += H;
			beta += s;
		
		}
		else
		{
			for(i = 0; i < this.slices-1; i++)
			{
				nx = Math.cos(alpha);
				ny = Math.sin(alpha);
				nz = Math.sin(beta);

				R = Math.sqrt((radius*radius) - (z*z));

				x = R*Math.cos(alpha);
				y = R*Math.sin(alpha);

				this.vertices.push(x,y,z);
				this.normals.push(nx, ny, nz);

				this.indices.push(i0+1,i0+this.slices,i0);
				this.indices.push(i0+this.slices,i0+1,i0+this.slices+1);
				i0++;

				alpha += n;
			}

			nx = Math.cos(alpha);
			ny = Math.sin(alpha);
			nz = Math.sin(beta);
			
			R = Math.sqrt((radius*radius) - (z*z));

			x = R*Math.cos(alpha);
			y = R*Math.sin(alpha);

			this.vertices.push(x,y,z);
			this.normals.push(nx, ny, nz);

			this.indices.push(i0,i0-(this.slices-1),i0+this.slices);
			this.indices.push(i0-(this.slices-1),i0+1,i0+this.slices);	

			i0 = j*this.slices - this.slices;
			z += H;

			alpha += n;
			beta += s;
			//i0++;

		}
	}
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
