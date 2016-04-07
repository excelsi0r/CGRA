/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCube(scene) 
{
	CGFobject.call(this,scene);
	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	this.vertices = [
            -0.5, -0.5, 0.5, //0
            0.5, -0.5, 0.5,  //1
            -0.5, 0.5, 0.5,  //2
            0.5, 0.5, 0.5,   //3
            -0.5, -0.5,-0.5, //4
            0.5, -0.5,-0.5,  //5
            -0.5, 0.5,-0.5,  //6
            0.5, 0.5, -0.5   //7
			];

	this.indices = [
	        //FACE EM +Z
            0,1,2, 
			3, 2, 1,
			//FACE EM -Z
			6,5,4,
			5,6,7,
			//FACE EM +Y
			2,3,6,
			7,6,3,
			//FACE EM -Y
			4,1,0,
			1,4,5,
			//FACE EM +X
			5,3,1,
			3,5,7,
			//FACE EM -X
			0,2,4,
			6,4,2,
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};