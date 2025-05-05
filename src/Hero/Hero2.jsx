import React, { useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const Hero2= () => {
  useEffect(() => {
    // Set up the scene for Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#three-canvas') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a 3D cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // GSAP animation for content section
    gsap.from(".content h1", { opacity: 0, x: -200, duration: 2, delay: 0.5 });
    gsap.from(".content p", { opacity: 0, x: -200, duration: 2, delay: 1 });

    // Resize event handling
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 text-white">
      {/* 3D Canvas */}
      <canvas id="three-canvas" className="absolute top-0 left-0 w-full h-full"></canvas>

      {/* Content Section */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Bullo</h1>
        <p className="text-xl">Your 3D animation-driven landing page</p>
      </div>
    </div>
  );
};

export default Hero2;