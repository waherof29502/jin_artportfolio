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
        truly spiritually connects "I" with the environment. Based on AI
        technology development inspired, the works are presented to explore by
        human-machine Interaction.
      </p>

      {/* <div className='jindev__header-content__input'>
        <input type='email' placeholder='Your Email Address' />
        <button type='button'>Get Started</button>
      </div> */}

      {/* <div className='jindev__header-content__people'>
        
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>*/}
    </div>

    <div className='jindev__header-image'>
      <img src={ai} />
    </div>
  </div>
);

export default Header;
