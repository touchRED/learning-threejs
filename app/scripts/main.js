'use strict';

$(document).ready(function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	$('body').append(renderer.domElement);
	$('body').mousemove(function(e){
		// console.log(e.pageX + ' , ' + e.pageY);
		// console.log(camera.rotation.y + ' , ' + camera.rotation.x);
		camera.rotation.y = e.pageX * -0.005 - (window.innerWidth/2 * (window.innerWidth * 0.0000065));
		camera.rotation.x = e.pageY * 0.005 + (window.innerHeight/2 * (window.innerHeight * 0.0000074));
	});

	var geometry = new THREE.SphereGeometry(25,15,15);
	var material = new THREE.MeshBasicMaterial({ color:0x3EBB3E, wireframe: true});
	var sphere = new THREE.Mesh(geometry, material);

	scene.add(sphere);

	camera.position.z = 50;

	// console.log(camera.rotation.x + "," + camera.rotation.y + "," + camera.rotation.z);
	// console.log(camera.position.x + "," + camera.position.y + "," + camera.position.z);

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
			camera.position.x -= Math.cos(camera.rotation.y);
			camera.position.z -= Math.sin(camera.rotation.y); 
		}
		if(38 in keysDown){
			camera.position.x += Math.sin(camera.rotation.y);
			camera.position.z += Math.cos(camera.rotation.y); 
		}
		if(39 in keysDown){
			camera.position.x += Math.cos(camera.rotation.y);
			camera.position.z += Math.sin(camera.rotation.y); 
		}
		if(40 in keysDown){
			camera.position.x -= Math.sin(camera.rotation.y);
			camera.position.z -= Math.cos(camera.rotation.y); 
		}
		renderer.render(scene, camera);
	};

	render();
});

