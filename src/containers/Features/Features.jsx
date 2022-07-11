import React from 'react';
import { Feature } from '../../components';
import './features.css';

const FeaturesData = [
  {
    title: 'Metaverse',
    text: 'Metaverse is a platform that allows you to create a virtual world where you can interact with other people and create your own world.',
  },
  {
    title: 'Deep Fake',
    text: 'Deep Fake is a technique that uses AI to create a fake person',
  },
  {
    title: 'NFT',
    text: 'NFT(Non-fungible token) is a token that represents the ownership of a person',
  },
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Need to Realize
        </h1>
        {/* <p>Request Early Access to Get Started</p> */}
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
