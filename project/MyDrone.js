/**
 * MyDrone
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyDrone(scene, minS, maxS, minT, maxT) 
{
	this.minS = minS || 0;
	this.minT = minT || 0;
	this.maxT = maxT || 1;
	this.maxS = maxS || 1;
	CGFobject.call(this,scene);
	this.initBuffers();
};

MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor=MyDrone;

MyDrone.prototype.initBuffers = function () {
	this.vertices = [
            0.5, 0.3, 0,
            -0.5, 0.3, 0,
            0, 0.3, 2
			];

	this.indices = [
            0, 1, 2
        ];
	
	 this.normals = [
			0,1,0,
			0,1,0,
			0,1,0];

	this.texCoords = [
			this.minS,this.maxT,
			this.maxS,this.maxT,
			this.minS,this.minT,
			this.maxS,this.minT,
	];
   
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	
	this.initGLBuffers();
};
