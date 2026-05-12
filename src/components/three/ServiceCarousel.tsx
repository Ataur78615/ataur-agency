"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { Rocket, Share2, Code, BrainCircuit, Users, Sparkles, Target, Building } from "lucide-react";

const services = [
  { id: 1, title: "SEO Optimization", icon: Target, desc: "Rank higher on search engines and dominate." },
  { id: 2, title: "Social Media Handling", icon: Share2, desc: "Grow your online community and engage." },
  { id: 3, title: "Website Development", icon: Code, desc: "Fast, modern, and scalable web apps." },
  { id: 4, title: "AI Automation", icon: BrainCircuit, desc: "24/7 intelligent agents for your business." },
  { id: 5, title: "Lead Generation", icon: Users, desc: "High-quality converting leads daily." },
  { id: 6, title: "Branding Strategy", icon: Sparkles, desc: "Build a memorable brand identity." },
  { id: 7, title: "GEO Optimization", icon: Rocket, desc: "Dominate generative AI search engines." },
  { id: 8, title: "Hotel Solutions", icon: Building, desc: "PMS & Hospitality ERP integrations." },
];

export default function ServiceCarousel() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const radius = 6.5;
  const count = services.length;

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Auto rotate slowly if not hovered
      if (hovered === null) {
        groupRef.current.rotation.y += delta * 0.15;
      } else {
        // Slow down rotation when hovering
        groupRef.current.rotation.y += delta * 0.02;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {services.map((service, index) => {
        const angle = (index / count) * Math.PI * 2;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        
        // Face outwards from the center
        const rotationY = angle; 

        return (
          <group key={service.id} position={[x, 0, z]} rotation={[0, rotationY, 0]}>
            <Html 
              transform 
              center 
              distanceFactor={15}
              zIndexRange={[100, 0]}
              className="pointer-events-none" // We handle pointer events on the inner div
            >
              <div 
                className={`w-72 p-8 rounded-[2rem] glass-card border border-white/10 transition-all duration-500 cursor-pointer flex flex-col items-center text-center pointer-events-auto backdrop-blur-xl ${
                  hovered === service.id 
                    ? 'scale-110 bg-white/10 shadow-[0_0_40px_rgba(168,85,247,0.4)] border-purple-500/50 -translate-y-2' 
                    : 'bg-white/5 shadow-2xl hover:bg-white/10'
                }`}
                onPointerEnter={() => setHovered(service.id)}
                onPointerLeave={() => setHovered(null)}
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-xl ${
                  hovered === service.id 
                    ? 'bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white scale-110 rotate-6' 
                    : 'bg-white/5 text-gray-300'
                }`}>
                  <service.icon size={36} strokeWidth={hovered === service.id ? 2.5 : 2} />
                </div>
                
                <h3 className={`text-2xl font-black tracking-tight mb-3 transition-colors duration-300 ${
                  hovered === service.id 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400' 
                    : 'text-white'
                }`}>
                  {service.title}
                </h3>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  hovered === service.id ? 'h-16 opacity-100 mt-2' : 'h-0 opacity-0'
                }`}>
                  <p className="text-sm font-medium text-gray-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}
