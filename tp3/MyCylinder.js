/**
 * MyCylinder
 * @constructor
 */
 function MyCylinder(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() 
 {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/
	/*
 	this.vertices = [
 	-0.5, -0.5, 0,
 	0.5, -0.5, 0,
 	-0.5, 0.5, 0,
 	0.5, 0.5, 0
 	];

 	this.indices = [
 	0, 1, 2, 
 	3, 2, 1
 	];

 	this.normals = [
 	0, 0, 1,
 	0, 0, 1,
 	0, 0, 1,
 	0, 0, 1
 	];
 	*/

	var x = 1;	//INITIAL COORDENATES
	var y = 0;
	var z = 0;

	var H = 1/this.stacks;	//HEIGHT
	var R = 1;	//RADIX

	var i0 = 0;  //INDDEX
	var i1 = 1;
	var i2 = 2;
	var i3 = 3;

	var nx = 0;	//NORMALS
	var ny = 0;
	var nz = 0;

	var n = (Math.PI * 2) / this.slices; //INCREMENT ANGLE
	var alpha = 0;	//INITAL ANGLE

	this.vertices = []; //ARRAYS
	this.indices = [];
	this.normals = [];

	for(j = 0; j < this.stacks; j++)
	{

	for(i = 0; i < this.slices; i++)
	{

		//NORMALS
		nx = Math.cos(alpha);
		ny = Math.sin(alpha); 
		console.log(nx,ny,nz);

		//--1º PAR DE PONTOS --

		x = R*Math.cos(alpha);
		y = R*Math.sin(alpha);

		this.vertices.push(x,y,z);
		this.vertices.push(x,y,z+H);

		this.indices.push(i2,i1,i0);

		this.normals.push(nx, ny, nz);
		this.normals.push(nx, ny, nz);

		//--NOVO ANGULO--

		alpha += n;

		//--2ºPAR DE PONTOS--
/*
		x = R*Math.cos(alpha);
		y = R*Math.sin(alpha);

		this.vertices.push(x,y,z);
		this.vertices.push(x,y,z+H);

		this.indices.push(i1,i2,i3);

		nx = Math.cos(alpha);
		ny = Math.sin(alpha); 
		this.normals.push(nx, ny, nz);

		this.normals.push(nx, ny, nz);*/

		this.indices.push(i1,i2,i3);
		//Atualize vertices

		i0 = i0 + 1;
		i1 = i1 + 1;
		i2 = i2 + 1;
		i3 = i3 + 1;
		}

		z += H;

	}
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
