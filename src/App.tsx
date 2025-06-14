import { useEffect, useState } from 'react';
import './App.css';
import Preloader from '../src/components/Preloader';
import { AnimatePresence } from 'framer-motion';
import Particles from './blocks/Backgrounds/Particles/Particles';
import Navbar from './components/Navbar';
import Hello from './components/Hello';
import Skills from './components/Skills';

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
    <main className='w-screen h-screen overflow-x-hidden overflow-y-scroll bg-black relative'>

      {/* Background Particles fixed for entire page */}
      <div className='fixed inset-0 z-0 h-full w-full'>
        <Particles />
      </div>

      {/* Content */}
      <div className='relative z-10 w-screen flex flex-col items-center'>

        <Navbar />

        {/* Hero Section (Hello) */}
        <section className='h-screen w-screen flex justify-center items-center'>
          <Hello />
        </section>

        {/* Skills Section */}
        <section className='h-screen w-screen flex justify-center items-center'>
          <Skills />
        </section>

      </div>

      {/* Preloader */}
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
    </main>
  );
}

export default App;
