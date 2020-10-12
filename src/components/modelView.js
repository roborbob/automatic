import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



const ViewBox = styled.div`
    // width: 70%;
    // height: auto;
`

const ModelView = (props) => {
    const AnimationAnchor = useRef();

    let scene, renderer, camera, clock, pointLight, pointLight_2;
    
    clock = new THREE.Clock();
    
    // Declare a new scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x181414)

    // Create new renderer 
    renderer = new THREE.WebGLRenderer();

    // Create shadows;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ReinhardToneMapping;
   

    // Create camera
    camera = new THREE.PerspectiveCamera( 40, 700 / 500, 1, 2000 );
    camera.position.set( 0, -11, 40);

    // Create controls to move around the space
    // controls = new OrbitControls( camera, renderer.domElement);  
    // // // Constrain viewing angle 
    // controls.maxPolarAngle = Math.PI * 0.45;
    // controls.maxDistance = 200;
    // controls.minDistance = 15;

    // Set the size of the render window
    renderer.setSize(700, 500 );

    // Add light to scene
    pointLight = new THREE.PointLight(0xfafbff,3);
    pointLight_2 = new THREE.PointLight(0xfafbff,1);
    
    // set its position
    pointLight.position.set( 250, 0, 250 );
    pointLight_2.position.set(0,250,500)
    pointLight.distance = 10000;  
    pointLight.castShadow = true;
    pointLight_2.castShadow = true;
    pointLight.shadow.camera.near = 5;       // default
    pointLight.shadow.camera.far = 1000 
    scene.add(pointLight);
    scene.add(pointLight_2);



    const animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    };


    // Get the robotarm!!
    const loader = new GLTFLoader();

    useEffect(() => {  
        loader.load( 'robot_arm/robotArm_3.glb', result => { 
            
            let robot = result.scene;
            robot.position.y = -12;
            robot.position.x = 0;
            robot.rotation.y = -1.55

            robot.children.forEach(function(e) {
                if (e.isMesh) {
                  e.castShadow = true;
                  e.receiveShadow = true;
                }
              });
  
            let mixer = new THREE.AnimationMixer(robot);
            let clip1 = result.animations[props.clip];
            let action1 = mixer.clipAction(clip1);
            action1.play();

            scene.add(robot);

            const animate = () => {
                requestAnimationFrame( animate );
                var dt = clock.getDelta()
                mixer.update(dt);
                renderer.render( scene, camera );
            };
            animate();
        } );

    }, [])


    // Allow useEffect to append the render window, after the container has loaded. Targeting the ref.
    useEffect(() => {  
        AnimationAnchor.current.appendChild( renderer.domElement ); 
        animate(); 
        // window.addEventListener( 'resize', onWindowResize, false );
    }, [])


    return <ViewBox ref={AnimationAnchor}/>
}

export default ModelView;