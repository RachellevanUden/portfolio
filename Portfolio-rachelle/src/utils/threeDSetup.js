import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function initializeThreeJS(canvasId) {
    const canvas = document.querySelector(`#${canvasId}`);

//Scene
const scene = new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render (scene, camera);

//Torus
const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);
scene.add (torus);

//Point Light, Ambient Light, Light Helper, Grid Helper
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(-13,5,28);
pointLight.intensity = 100;

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200,50);
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25,24,24);
    const material = new THREE.MeshStandardMaterial( { color: 0xffffff })
    const star = new THREE.Mesh( geometry, material );

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);

//Background
const spaceTexture = new THREE.TextureLoader().load('../src/assets/Design/space.jpg');
scene.background = spaceTexture;

//Avatar
const raavuTexture = new THREE.TextureLoader().load('../src/assets/Design/raavu_boondocks.jpg');

const raavu = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial( {map: raavuTexture} )
);

scene.add(raavu)

//Moon
const moonTexture = new THREE.TextureLoader().load('../src/assets/Design/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('../src/assets/Design/normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10);

// //Scroll animation
// function moveCamera() {
    
//     const t = document.body.getBoundingClientRect().top;
//     moon.rotation.x += 0.05;
//     moon.rotation.y += 0.075;
//     moon.rotation.z += 0.05;

//     raavu.rotation.y += 0.01;
//     raavu.rotation.z += 0.01;

//     camera.position.z = t * -0.01;
//     camera.position.x = t * -0.0002;
//     camera.position.y = t * -0.0002;
// }

document.body.onscroll = moveCamera


function animate() {
    requestAnimationFrame (animate);
    
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    controls.update();

    renderer.render (scene, camera);
}

animate();
}