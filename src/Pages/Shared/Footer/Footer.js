import React from 'react';
import { GiPaperPlane } from 'react-icons/gi'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="subscribe-box">
          <input type="text" placeholder='Your Email' />
          <button>Subscribe <GiPaperPlane /></button>
        </div>
        <div className="footer-row">
          <div>
            <div className="logo">
              <h3>Khayrul's</h3>
            </div>
            <p>I am a Front End Developer. My role is to write and style the front-end components that meet the requirements of our mocks and fulfill our user stories. I also monitor and process pull requests for production deployments. Technologies used: HTML, CSS, React, JavaScript, ES6, Node JS, Express, MongoDB, Firebase, etc.</p>
          </div>
          <div>
            <div className="logo">
              <h3>Quick Links</h3>
            </div>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Project</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#home">Privecy & Policy</a></li>
              <li><a href="#home">Service</a></li>
            </ul>
          </div>
          <div>
            <div className="logo">
              <h3>Present Location</h3>
            </div>
            <iframe style={{ marginTop: "15px", border: "none" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57488.21100016371!2d89.40261775797559!3d25.770127959891564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2d666bb328579%3A0x9483bbaa656932cd!2sKaunia!5e0!3m2!1sen!2sbd!4v1638196373554!5m2!1sen!2sbd" width="100%" title='map'></iframe>
          </div>
        </div>
        <p className='copyRight'>&copy; CopyRight 2021 By Khayrul Islam</p>
      </div>
    </div>
  );
};

export default Footer;