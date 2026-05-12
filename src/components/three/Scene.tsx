"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import BackgroundEffects from "./BackgroundEffects";
import ServiceCarousel from "./ServiceCarousel";

export default function Scene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <Canvas camera={{ position: [0, 1, 14], fov: 50 }}>
        {/* Environment and Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#a855f7" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" />
        <Environment preset="city" />

        {/* Background Particles */}
        <BackgroundEffects />

        {/* 3D Service Carousel */}
        <ServiceCarousel />

        {/* Camera Controls */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.2}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
