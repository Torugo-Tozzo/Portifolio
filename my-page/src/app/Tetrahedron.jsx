import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Tetrahedron = () => {
  const sceneRef = useRef();
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    const vertices = [
      new THREE.Vector3(1, 1, 1),
      new THREE.Vector3(-1, -1, 1),
      new THREE.Vector3(1, -1, -1),
      new THREE.Vector3(-1, 1, -1),
    ];

    const indices = [
      0, 1, 2,
      1, 0, 3,
      2, 3, 0,
      3, 2, 1,
    ];

    const geometry = new THREE.BufferGeometry();
    geometry.setFromPoints(vertices);
    geometry.setIndex(indices);

    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const tetrahedron = new THREE.Mesh(geometry, material);
    scene.add(tetrahedron);

    camera.position.z = 3;

    const handleMouseMove = (event) => {
      mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      tetrahedron.rotation.x = mouseY.current * 1.5;
      tetrahedron.rotation.y = mouseX.current * 1.5;

      renderer.render(scene, camera);
    };

    animate();

   
  }, []);

  return <div ref={sceneRef} />;
};

export default Tetrahedron;
