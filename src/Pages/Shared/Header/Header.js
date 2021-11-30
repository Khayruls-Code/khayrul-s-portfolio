import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
            <li><HashLink onClick={() => setIsShow(!isShow)} to="/home/#home">Home</HashLink></li>
            <li><HashLink onClick={() => setIsShow(!isShow)} to="/home/#about">About</HashLink></li>
            <li><HashLink onClick={() => setIsShow(!isShow)} to="/home/#projects">Projects</HashLink></li>
            <li><HashLink onClick={() => setIsShow(!isShow)} to="/home/#contact">Contact</HashLink></li>
            <li><Link onClick={() => setIsShow(!isShow)} to='/blogs'>Blogs</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;