import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-luxury-black text-white min-h-screen selection:bg-luxury-cyan selection:text-black font-inter antialiased">
      {/* Dynamic Background Noise/Texture */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      {/* Decorative Global Background Glows */}
      <div className="fixed top-0 -left-[10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-0 -right-[10%] w-[50%] h-[50%] bg-luxury-cyan/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
