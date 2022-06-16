import React from 'react';
import { Feature } from '../../components';
import './features.css';

const FeaturesData = [
  {
    title: 'title01',
    text: 'text01',
  },
  {
    title: 'title02',
    text: 'text02',
  },
  {
    title: 'title03',
    text: 'text03',
  },
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Need to Realize
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {FeaturesData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
