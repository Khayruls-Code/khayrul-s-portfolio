import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className="container">
        <div>
          <h3 className='myName'>I am Khayrul Islam</h3>
          <Typed
            strings={[
              'I am Web Designer',
              'I am Web Developer',
              'I am Freelancer']}
            typeSpeed={50}
            backSpeed={50}
            attr="placeholder"
            loop >
            <input className='text-animation' type="text" />
          </Typed>
          <div className="heroBtn">
            <a href='https://drive.google.com/file/d/1jnrzGQEXYhXT9PC3VyDtSJkqJ7xLfYFJ/view?usp=sharing' className='primaryBtn' download target='_blank' rel="noreferrer">Resume</a>
            <a href='#contact' className='primaryBtn secondaryBtn'>Contact</a>
          </div>
        </div>
      </div>
      <p className='rotate-text'>Khayrul's Portfolio</p>
    </div>
  );
};

export default Hero;