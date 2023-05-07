// @ts-nocheck

import * as THREE from 'three';
import React, { Suspense, useEffect, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment, MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial);

export default function Scene({ theme: initialTheme, toggleTheme }) {
  const sphere = useRef();
  const [theme, setTheme] = useState(initialTheme);
  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Change cursor on hovered state
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : '';
  }, [hovered]);

  // Make the bubble float and follow the mouse
  // This is frame-based animation, useFrame subscribes the component to the render-loop
  useFrame((state) => {
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(sphere.current.position.x, hovered ? state.mouse.x / 2 : 0, 0.2);
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 + (hovered ? state.mouse.y / 2 : 0),
        0.2,
      );
    }
  });

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  // @ts-ignore
  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: 1,
      ambient: 0.5,
      env: 1,
      color: hovered || theme === 'dark' ? '#fff' : '#000',
      config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 },
    },
    [hovered, down],
  );

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <a.ambientLight intensity={ambient} />
      </PerspectiveCamera>

      <Suspense fallback={null}>
        <a.mesh
          ref={sphere}
          scale={wobble}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false);
            setTheme(theme === 'dark' ? 'light' : 'dark');
            toggleTheme();
          }}>
          <sphereGeometry args={[1, 64, 64]} attach='geometry' />

          <AnimatedMaterial
            color={color}
            envMapIntensity={env}
            clearcoat={coat}
            clearcoatRoughness={0}
            metalness={1}
            distort={hovered ? 0.4 : 0}
          />
        </a.mesh>
        <Environment files="./static/puresky_1k.hdr" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.2, 0]}
          opacity={0.4}
          width={15}
          height={15}
          blur={2.5}
          far={1.2}
        />
      </Suspense>
    </>
  );
}
