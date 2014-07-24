'use strict';

$(document).ready(function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	var geometry = new THREE.CubeGeometry(3,3,3);
	var material = new THREE.MeshBasicMaterial({ color:0x3EBB3E, wireframe: true});
	var cube = new THREE.Mesh(geometry, material);

	scene.add(cube);

	camera.position.z = 4;

	var keysDown = {};

	addEventListener('keydown', function(e){
		keysDown[e.keyCode] = true;
	});

	addEventListener('keyup', function(e){
		delete keysDown[e.keyCode];
	});

	var render = function(){
		requestAnimationFrame(render);

		if(37 in keysDown){
			cube.rotation.y -= 0.025;
		}
		if(38 in keysDown){
			cube.rotation.x -= 0.025;
		}
		if(39 in keysDown){
			cube.rotation.y += 0.025;
		}
		if(40 in keysDown){
			cube.rotation.x += 0.025;
		}
		renderer.render(scene, camera);
	};

	render();
});

