import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Points = () => {
  const canvasRef = useRef();
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      80,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Set alpha to true for transparency
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    camera.position.z = 2;

    // Set the clear color of the renderer to transparent
    renderer.setClearColor(0x000000, 0);

    const geometry = new THREE.DodecahedronGeometry(1, 5);

    function makeInstance(geometry, color, x) {
      const material = new THREE.PointsMaterial({
        color: color,
        sizeAttenuation: false,
        size: 3, // in world units
        transparent: true, // Enable transparency
        opacity: 1, // Set opacity value (0.0 to 1.0)
      });
      const cube = new THREE.Points(geometry, material);
      scene.add(cube);
      cube.position.x = x;
      return cube;
    }

    const cubes = [
      makeInstance(geometry, 0xf3f4f6, 0.01),
      makeInstance(geometry, 0x000000, -0.01),
    ];

    function render() {
      renderer.render(scene, camera);
    }

    const handleMouseMove = (event) => {
      mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function animate() {
      requestAnimationFrame(animate);

      cubes.forEach((cube) => {
        cube.rotation.x = mouseY.current * 1.5;
        cube.rotation.y = mouseX.current * 1.5;
      });

      render();
    }

    animate();
  }, []);

  return (
    <div
      ref={canvasRef}
      id="background" // Set the ID for the canvas
      style={{
        position: "relative",
        height: "48rem",
        width: "50rem",
        top: "-4rem",
        zIndex: 1,
      }}
    />
  );
};

export default Points;
