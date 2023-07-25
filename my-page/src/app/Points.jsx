import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Points = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const fov = 75;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 5;
    camera.position.z = 2;

    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    const boxWidth = 0.5;
    const boxHeight = 12;
    const boxDepth = 12;
    const geometry = new THREE.SphereGeometry(boxWidth, boxHeight, boxDepth);

    function makeInstance(geometry, color, x) {
      const material = new THREE.PointsMaterial({
        color: 'white',
        sizeAttenuation: false,
        size: 3,     // in world units
    });
      const cube = new THREE.Points(geometry, material);
      scene.add(cube);
      cube.position.x = x;
      return cube;
    }

    const cubes = [
      makeInstance(geometry, 0x44aa88, 0),
      makeInstance(geometry, 0x8844aa, -1),
      makeInstance(geometry, 0xaa8844, 1),
    ];

    function render() {
      renderer.render(scene, camera);
    }

    function animate() {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;
      cubes.forEach((cube, ndx) => {
        const speed = 1 + ndx * 0.1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
      });

      render();
    }

    animate();

    
  }, []);

  return <div ref={canvasRef} />;
};

export default Points;
