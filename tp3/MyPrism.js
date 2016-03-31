/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
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

	var x = 1;
	var y = 0;
	var z = 0;

	var H = 1;
	var R = 1;

	var i0 = 0;
	var i1 = 1;
	var i2 = 2;
	var i3 = 3;

	var nx = 0;
	var ny = 0;
	var nz = 0;

	var n = (Math.PI * 2) / this.slices;
	var alpha = 0;

	this.vertices = [];
	this.indices = [];
	this.normals = [];

	for(i = 0; i < this.slices; i++)
	{
		//console.log(i0,i1,i2,i3);

		nx = Math.cos(alpha+n/2);
		ny = Math.sin(alpha+n/2); 
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

		x = R*Math.cos(alpha);
		y = R*Math.sin(alpha);

		this.vertices.push(x,y,z);
		this.vertices.push(x,y,z+H);

		this.indices.push(i1,i2,i3);

		this.normals.push(nx, ny, nz);
		this.normals.push(nx, ny, nz);

		//Atualize vertices

		i0 = i0 + 4;
		i1 = i1 + 4;
		i2 = i2 + 4;
		i3 = i3 + 4;
		}


 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
