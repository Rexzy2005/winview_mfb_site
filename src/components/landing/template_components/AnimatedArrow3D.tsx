"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const AnimatedArrow3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // SCENE
    const scene = new THREE.Scene();
    
    // CAMERA
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.z = 6.5;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(80, 80); 
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // CREATE CHEVRON SHAPE
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.5);
    shape.lineTo(0.9, 0.5);
    shape.lineTo(0.45, 0.5);
    shape.lineTo(0, -0.05);
    shape.lineTo(-0.45, 0.5);
    shape.lineTo(-0.9, 0.5);
    shape.lineTo(0, -0.5);

    const extrudeSettings = { 
      depth: 0.15, 
      bevelEnabled: true, 
      bevelSegments: 4, 
      steps: 1, 
      bevelSize: 0.04, 
      bevelThickness: 0.04 
    };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    // PREMIUM GLASS/METAL MATERIAL
    const baseMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x72b90d,
      metalness: 0.7,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: 0x2a650a,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.95,
    });

    const group = new THREE.Group();
    const arrows: THREE.Mesh[] = [];
    
    for(let i=0; i<3; i++) {
        const mesh = new THREE.Mesh(geometry, baseMaterial.clone());
        mesh.position.y = (1 - i) * 0.9;
        mesh.scale.set(0.65, 0.65, 0.65);
        arrows.push(mesh);
        group.add(mesh);
    }
    
    group.position.y = 0.2;
    scene.add(group);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x72b90d, 8, 10);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0xffffff, 4, 10);
    pointLight2.position.set(-3, -2, 4);
    scene.add(pointLight2);

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.06;
      group.position.y = 0.2 + Math.sin(time * 0.5) * 0.15;
      group.rotation.y = Math.sin(time * 0.3) * 0.15;
      group.rotation.x = 0.05 + Math.sin(time * 0.4) * 0.05;

      arrows.forEach((arrow, i) => {
        const offsetTime = time - i * 1.2;
        const wave = Math.max(0, Math.sin(offsetTime));
        const scale = 0.65 + wave * 0.1;
        arrow.scale.set(scale, scale, scale);
        
        const mat = arrow.material as THREE.MeshPhysicalMaterial;
        mat.emissiveIntensity = 0.2 + wave * 3.5;
        if(wave > 0.8) {
           mat.color.setHex(0xaaff44);
        } else {
           mat.color.setHex(0x72b90d);
        }
      });

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      
      // Defensively remove child
      if (currentMount && renderer.domElement && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }

      // Dispose geometries and materials
      geometry.dispose();
      baseMaterial.dispose();
      arrows.forEach((arrow) => {
        if (arrow.material) {
          (arrow.material as THREE.Material).dispose();
        }
      });
      
      renderer.dispose();
      
      // Completely clear out scene to prevent dev-tools memory leak inspections
      scene.clear();
    };
  }, []);

  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center shrink-0">
      <div className="absolute inset-0 bg-[#72b90d]/10 blur-[20px] rounded-full scale-75 z-0"></div>
      <div ref={mountRef} className="z-10 relative pointer-events-none drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"></div>
    </div>
  );
};

export default AnimatedArrow3D;
