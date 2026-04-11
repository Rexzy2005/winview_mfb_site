
"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FloatingCoins = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    console.log("Floating coins mounted!"); // DEBUG
    
    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    // Give it an explicit size matching window for now to prevent 0-sized canvas bugs
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    renderer.domElement.style.zIndex = '-20'; // FORCE IT TO TOP
    
    mountRef.current.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0); // BRIGHTER
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffaa00, 3.0); // BRIGHT GOLD LIGHT
    pointLight.position.set(5, 5, 10);
    scene.add(pointLight);

    // COINS
    const geometry = new THREE.CylinderGeometry(1.5, 1.5, 0.4, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffd700, 
      metalness: 0.3, // REDUCE METALNESS for easier visibility
      roughness: 0.4,
      emissive: 0xffa500, // MAKE IT GLOW SLIGHTLY
      emissiveIntensity: 0.4
    });
    
    const coinsGroup = new THREE.Group();
    scene.add(coinsGroup);
    
    const coins: { mesh: THREE.Mesh; rotateXSpeed: number; rotateYSpeed: number; floatSpeed: number; floatOffset: number; baseY: number; }[] = [];
    const coinsCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 25;
    
    for (let i = 0; i < coinsCount; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        
        // Spread evenly
        const x = (Math.random() - 0.5) * 40;
        const y = (Math.random() - 0.5) * 40;
        const z = (Math.random() - 0.5) * 15;
        
        mesh.position.set(x, y, z);
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        
        coinsGroup.add(mesh);
        
        coins.push({
            mesh,
            rotateXSpeed: (Math.random() - 0.5) * 0.04,
            rotateYSpeed: (Math.random() - 0.5) * 0.04,
            floatSpeed: 1 + Math.random() * 2,
            floatOffset: Math.random() * Math.PI * 2,
            baseY: y
        });
    }

    // ONE CENTER COIN
    const centerMesh = new THREE.Mesh(geometry, material);
    centerMesh.position.set(0, 0, 5); // IN YOUR FACE
    centerMesh.scale.set(2, 2, 2); // BIG
    coinsGroup.add(centerMesh);
    coins.push({
      mesh: centerMesh,
      rotateXSpeed: 0.01,
      rotateYSpeed: 0.02,
      floatSpeed: 1.5,
      floatOffset: 0,
      baseY: 0
    });

    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        targetX = (event.clientX - windowHalfX) * 0.05;
        targetY = (event.clientY - windowHalfY) * 0.05;
    };
    
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = Date.now() * 0.001;

      // Parallax
      coinsGroup.position.x += (targetX - coinsGroup.position.x) * 0.05;
      coinsGroup.position.y += (-targetY - coinsGroup.position.y) * 0.05;
      
      coinsGroup.rotation.y += 0.001;
      coinsGroup.rotation.x += 0.0005;

      coins.forEach(coin => {
        coin.mesh.rotation.x += coin.rotateXSpeed;
        coin.mesh.rotation.y += coin.rotateYSpeed;
        coin.mesh.position.y = coin.baseY + Math.sin(elapsedTime * coin.floatSpeed + coin.floatOffset) * 2.0;
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
      <div 
        ref={mountRef} 
        className="absolute inset-0 w-full h-full pointer-events-none bg-transparent"
        style={{ zIndex: 100 }}
      />
  );
};

export default FloatingCoins;
