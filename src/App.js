import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Canchas from './components/Canchas';
import Cursos from './components/Cursos';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Canchas />
      <Cursos />
      <Contact />
    </div>
  );
}

export default App;