import React from 'react';
import bg from '../../assets/bg01.jpg';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className='jindev__header section__padding' id='#home'>
    <div className='jindev__header-content'>
      <h1 className='gradient__text'>A Selfie Journey in Mixed Reality </h1>

      <p>
        Human body reflects consciousness as existence of being in world which
        truly spiritually connects "I" with the environment.
      </p>

      {/* <div className='jindev__header-content__input'>
        <input type='email' placeholder='Get In Contact' />
        <button type='button'>Submit</button>
      </div> */}
    </div>

    <div className='jindev__header-image'>
      <img src={bg} />
    </div>
  </div>
);

export default Header;
