import React, { useEffect } from 'react';
import image from '../../../images/about.jpg'
import { GrFacebookOption, GrLinkedinOption, GrGithub, GrInstagram } from 'react-icons/gr'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init()
  })

  return (
    <div id='about'>
      <div className="container">
        <div className="about-row">
          <div data-aos="fade-right" data-aos-duration="1000" className='about-left'>
            <img src={image} alt="" />
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className='about-right'>
            <div className="section-title">
              <h1>About Me</h1>
              <p>Junior Web Developer</p>
            </div>
            <p className='myInfo'>I am a Front End Developer. My role is to write and style the front-end components that meet the requirements of our mocks and fulfill our user stories. I also monitor and process pull requests for production deployments. Technologies used: HTML, CSS, React, JavaScript, ES6, Node JS, Express, MongoDB, Firebase, etc.</p>
            <p className='myInfo' style={{ marginTop: "10px" }}>I have already done so many projects. I continuously try to make some new. I love learning and I believe that learning is the best policy to be a successful person</p>
            <div className="social">
              <h3>Find Me on Social Media</h3>
              <a target='_blank' rel="noreferrer" href="https://web.facebook.com/khayrulislam.66" className="social-icon">
                <GrFacebookOption />
              </a>
              <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/khayrul-developer/" className="social-icon">
                <GrLinkedinOption />
              </a>
              <a target='_blank' rel="noreferrer" href="https://github.com/Khayruls-Code" className="social-icon">
                <GrGithub />
              </a>
              <a target='_blank' rel="noreferrer" href="https://www.instagram.com/khayrul_66/" className="social-icon">
                <GrInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;