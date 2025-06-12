import { useEffect, useState } from 'react'
import './App.css'
import Preloader from '../src/components/Preloader'
import { AnimatePresence } from 'framer-motion';
import Particles from './blocks/Backgrounds/Particles/Particles';
import Navbar from './components/Navbar';
import Hello from './components/Hello';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default'
      window.scrollTo(0,0);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='h-screen w-screen overflow-hidden relative  bg-black'>
      <div className='absolute inset-0 z-0'>
        <Particles />
      </div>
      <div className='relative z-10 h-screen w-screen flex flex-col items-center'>
        <Navbar />
        <Hello/>
      </div>
      


      <AnimatePresence mode='wait'>
        {
          isLoading && <Preloader/>
        }
      </AnimatePresence>
      
    </main>
  )
}

export default App
