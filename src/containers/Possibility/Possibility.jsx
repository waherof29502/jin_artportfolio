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
        AI changes the way we think. It changes the way we create. At the same
        time, it brings artist many possibilities on personal creation.
      </p>
      <a
        href='http://jinwangartist.com/files/studyplan.pdf'
        target='_blank'
        rel='noreferrer'
      >
        <h4>Generative Art, Deep Learning</h4>
      </a>
    </div>
  </div>
);

export default Possibility;
