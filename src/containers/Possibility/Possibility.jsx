import React from 'react';
import possibilityImage from '../../assets/single.gif';
import './possibility.css';

const Possibility = () => (
  <div className='jindev__possibility section__padding' id='possibility'>
    <div className='jindev__possibility-image'>
      <img src={possibilityImage} alt='possibility' />
    </div>
    <div className='jindev__possibility-content'>
      {/* <h4>Request Early Access to Get Started</h4> */}
      <h1 className='gradient__text'>
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>
      <a href='/' target='_blank'>
        <h4>Request Early Access to Get Started</h4>
      </a>
    </div>
  </div>
);

export default Possibility;
