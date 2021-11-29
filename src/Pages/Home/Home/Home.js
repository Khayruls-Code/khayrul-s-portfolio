import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;