import React from 'react';
import './feature.css';

const Feature = ({ title, text, href }) => {
  return (
    <div className='jindev__features-container__feature'>
      <div className='jindev__features-container__feature-title'>
        <div />
        <h1>
          <a href={href} target='_blank' rel='noreferrer'>
            {title}
          </a>
        </h1>
      </div>
      <div className='jindev__features-container_feature-text'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
