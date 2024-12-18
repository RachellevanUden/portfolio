import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export function initializeThreeJS(canvasId) {
    const canvas = document.querySelector(`#${canvasId}`);

    //Scene
    const scene = new THREE.Scene();

    //Camera
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    //Torus
    const geometry = new THREE.TorusGeometry(10,3,16,100);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    const torus = new THREE.Mesh(geometry, material);
    scene.add (torus);

    //Point Light, Ambient Light, 
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(-3,5,5);
    pointLight.intensity = 100;
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight)

    //Light Helper, Grid Helper
    const lightHelper = new THREE.PointLightHelper(pointLight)
    const gridHelper = new THREE.GridHelper(200,50);
    scene.add(lightHelper, gridHelper)

    const controls = new OrbitControls(camera, renderer.domElement);
    
    // Raycaster en interactief object
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Lamp
    const lampGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const lampMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    const lamp = new THREE.Mesh(lampGeometry, lampMaterial);
    lamp.position.set(2, 3, 0);
    scene.add(lamp);

    // Eventlistener klikken
    window.addEventListener('click', (event) => {

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
 
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects([lamp]); 
        if (intersects.length > 0) {
            const clickedObject = intersects[0].object;

            clickedObject.material.color.set(
                clickedObject.material.color.getHex() === 0xffff00 ? 0x000000 : 0xffff00
            );
            console.log('Lamp geklikt!');
        }
    });
    
    //Stars
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
    const spaceTexture = new THREE.TextureLoader().load('/images/Rachelle_van_Uden_ThreeJsExperiment_Space.jpg');
    scene.background = spaceTexture;

    //Avatar (Raavu)
    const raavuTexture = new THREE.TextureLoader().load('/images/Rachelle_van_Uden_ThreeJsExperiment_Raavu.jpg');
    const raavu = new THREE.Mesh(new THREE.BoxGeometry(3,3,3), new THREE.MeshBasicMaterial( {map: raavuTexture}));
    scene.add(raavu)

    //Moon
    const moonTexture = new THREE.TextureLoader().load('/images/Rachelle_van_Uden_ThreeJsExperiment_Moon.jpg');
    const normalTexture = new THREE.TextureLoader().load('/images/Rachelle_van_Uden_ThreeJsExperiment_Normal.jpg');
    const moon = new THREE.Mesh(
        new THREE.SphereGeometry(3, 16, 16),
        new THREE.MeshStandardMaterial({
            map: moonTexture,
            normalMap: normalTexture,
        })
    );
    scene.add(moon);
    moon.position.z = 5;
    moon.position.setX(-5);

    //Animation loop
    function animate() {
        requestAnimationFrame (animate);
        
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.01;

        controls.update();
        renderer.render (scene, camera);
    }

    animate();

    return { scene, camera, moon, raavu };
}

export function loadOBJModel(url, scene) {
    const loader = new OBJLoader();
  
    loader.load(
      url,
      (object) => {
        object.position.set(7, 0, 10); 
        scene.add(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% geladen');
      },
      (error) => {
        console.error('Fout bij het laden van het OBJ-model:', error);
      }
    );
  }