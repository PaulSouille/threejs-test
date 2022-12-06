
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

// init

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();



var canvReference = document.getElementById("canvas");

const renderer = new THREE.WebGLRenderer( { antialias: true,    canvas: canvReference, alpha:true} );
renderer.setClearColor( 0x000000, 0 ); // the default

renderer.setSize( window.innerWidth - 50, window.innerHeight  );
renderer.setAnimationLoop( animation );


const loader = new GLTFLoader();

loader.load( 'http://ssh.paulsouille.fr/chest.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );






document.body.appendChild( renderer.domElement );
function animation( time ) {

	renderer.render( scene, camera );

}