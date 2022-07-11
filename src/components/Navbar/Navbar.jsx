import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/jin_logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='jindev__navbar'>
      <div className='jindev__navbar-links'>
        <div className='jindev__navbar-links_logo'>
          <img src={logo} alt={logo} />
        </div>
        <div className='jindev__navbar-links_container'>
          <p>
            <a href='#intro'>Intro</a>
          </p>
          <p>
            <a href='#portfolio'>Portfolio</a>
          </p>
          <p>
            <a href='#possibility'>Open AI</a>
          </p>
          <p>
            <a href='#features'>Archive</a>
          </p>
        </div>
      </div>
      <div className='jindev__navbar-sign'>
        <button
          type='button'
          onClick={() =>
            (window.location.href = 'http://cv20.jinwangartist.com/')
          }
        >
          Jin Wang
        </button>
      </div>
      <div className='jindev__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='jindev__navbar-menu_container scale-up-center'>
            <div className='jindev__navbar-menu_container-links'>
              <p>
                <a href='#intro'>Intro</a>
              </p>
              <p>
                <a href='#portfolio'>Portfolio</a>
              </p>
              <p>
                <a href='#possibility'>Open AI</a>
              </p>
              <p>
                <a href='#features'>Archive</a>
              </p>
            </div>
            <div className='jindev__navbar-menu_container-links-sign'>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
