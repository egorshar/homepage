import { Canvas } from '@react-three/fiber';
// import { a } from '@react-spring/web';

import Scene from './Scene';

export default function Sphere({ className, theme, toggleTheme }) {
  return (
    <div className={className}>
      <Canvas className='canvas' dpr={[1, 2]}>
        <Scene theme={theme} toggleTheme={toggleTheme} />
      </Canvas>
    </div>
  );
}