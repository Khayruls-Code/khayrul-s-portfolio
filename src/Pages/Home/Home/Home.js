import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Expert from '../Expert/Expert';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Expert />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;