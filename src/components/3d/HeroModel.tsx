'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, Center, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';

function Model() {
  const { scene } = useGLTF('/collored_spi.glb');
  const spiralRef = useRef<THREE.Group>(null);
  const parallaxRef = useRef<THREE.Group>(null);
  const { scrollYProgress } = useScroll();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const scroll = scrollYProgress.get(); // 0 to 1 based on page scroll
    
    // 1. Spiral animation (Inner Group)
    if (spiralRef.current) {
      // Continuous tumbling + dramatic rotation driven by scroll
      spiralRef.current.rotation.x = t * 0.15 + scroll * Math.PI * 4;
      spiralRef.current.rotation.y = t * 0.25 + scroll * Math.PI * 6;
      spiralRef.current.rotation.z = t * 0.1 + scroll * Math.PI * 2;
      
      // Move in a gentle spiral path, and pull back into the screen on scroll
      spiralRef.current.position.x = Math.cos(t * 0.8) * 0.4;
      spiralRef.current.position.y = Math.sin(t * 0.8) * 0.4;
      spiralRef.current.position.z = Math.sin(t * 0.4) * 0.5 - scroll * 15;
    }
    
    // 2. Mouse Parallax (Outer Group)
    if (parallaxRef.current) {
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (state.pointer.y * Math.PI) / 8;
      
      parallaxRef.current.rotation.y = THREE.MathUtils.lerp(parallaxRef.current.rotation.y, targetX, 0.05);
      parallaxRef.current.rotation.x = THREE.MathUtils.lerp(parallaxRef.current.rotation.x, -targetY, 0.05);
    }
  });

  return (
    <group ref={parallaxRef} dispose={null}>
      <group ref={spiralRef}>
        <primitive object={scene} />
      </group>
      {/* Accent lighting for the model */}
      <pointLight position={[10, 10, 10]} intensity={2} color="#FF0000" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#950101" />
    </group>
  );
}

// Preload the model
useGLTF.preload('/collored_spi.glb');

export default function HeroModel() {
  return (
    <div className="w-full h-full relative cursor-move">
      {/* Soft radial glow / vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_70%)] pointer-events-none z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-violet/20 blur-[100px] rounded-full pointer-events-none" />
      
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        
        <Suspense fallback={null}>
          <Center scale={2.5}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <Model />
            </Float>
          </Center>
        </Suspense>
        
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
