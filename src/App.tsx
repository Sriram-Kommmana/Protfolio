import { useEffect, useState } from 'react';
import './App.css';
import Preloader from '../src/components/Preloader';
import { AnimatePresence } from 'framer-motion';
import Particles from './blocks/Backgrounds/Particles/Particles';
import Navbar from './components/Navbar';
import Hello from './components/Hello';
import Skills from './components/Skills';
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { ReactLenis } from 'lenis/react'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root >

      <div className='bg-black cursor-none'>
        <div style={{ width: '100%', height: '100vh', position: 'fixed' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={500}
            particleSpread={5}
            speed={0.1}
            particleBaseSize={33}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className='relative'>
          <div className='sticky top-0 z-50'>
            <Navbar />
          </div>
          <Hello  />
          <Skills />
        </div>
        <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
        <SmoothCursor />
      </div>
    </ReactLenis>


  );
}

export default App;
