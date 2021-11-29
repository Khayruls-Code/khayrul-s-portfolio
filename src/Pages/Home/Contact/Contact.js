import React from 'react';
import { GoLocation } from 'react-icons/go'
import { BsEnvelope, BsTelephone } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="container">
        <div className="section-title">
          <h1>Get In Touch</h1>
          <p>Contact</p>
        </div>
        <div className="contact-row">
          <div className="contact-form">
            <form target="_blank" action="https://formsubmit.co/khayrulislam2525@gmail.com" method="POST">
              <div className='inputGroup'>
                <input type="text" name='name' placeholder='Name' required />
                <input type="email" name='email' placeholder='Email' required />
              </div>
              <div className='inputGroup'>
                <input type="text" name='address' placeholder='Address' required />
                <input type="text" name='subject' placeholder='Subject' required />
              </div>
              <textarea placeholder="Your Massage" name='message' rows="5" required ></textarea>
              <div className="heroBtn">
                <button type="submit" className='primaryBtn contact-btn'>Send Message</button>
              </div>
            </form>
          </div>
          <div className="contact-info">
            <div className='info-row'>
              <div>
                <div className="icon">
                  <GoLocation />
                </div>
                <p>Rangpur, Bangladesh</p>
              </div>
              <div>
                <div className="icon">
                  <BsEnvelope />
                </div>
                <p>Khayrulislam2525@gmail.com</p>
              </div>
            </div>
            <div className='info-row'>
              <div>
                <div className="icon">
                  <BsTelephone />
                </div>
                <p>+88017631-55578</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;