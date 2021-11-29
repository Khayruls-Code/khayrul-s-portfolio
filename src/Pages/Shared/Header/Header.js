import React, { useState } from 'react';

const Header = () => {

  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <div className='header'>
        <div className="container">
          <nav>
            <div className="logo">
              <h3>Khayrul's</h3>
            </div>
            <div onClick={() => setIsShow(!isShow)} className={isShow ? "hambarger close" : "hambarger"}>
              <div></div>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <div className={isShow ? "navigation" : "navigation hide"}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;