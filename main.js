import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

// create scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// add control
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 20, 100);
controls.update();

// add object and texture
const geometry = new THREE.SphereGeometry(7, 22, 22);
const texture = new THREE.TextureLoader().load("mars.jpg");
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

// rendering scene
function animate() {
    requestAnimationFrame(animate);

    // animating object
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    // control with mouse
    controls.update();

    renderer.render(scene, camera);
}
animate();
