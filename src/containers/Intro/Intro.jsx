import React from 'react';
import { Feature } from '../../components';
import './intro.css';

const Intro = () => {
  return (
    <div className='jindev__intro section__margin' id='intro'>
      <div className='jindev__intro-feature'>
        <Feature
          title='Selfie Journey'
          text='Self-portrait is a theme that artists use to express Self-Concept and represent the special  individual identity. Through the way of seeing human body, in the context or symbol, it enables to recall the existence of self-concept, to express the feeling and changing of mental and physical status, to represent the unconsciousness of ‘I’ or ‘ghost’.'
        />
      </div>
      <div className='jindev__intro-heading'>
        <h1 className='gradient__text'>text</h1>
        <p>Explore The Library</p>
      </div>
      <div className='jindev__intro-container'>
        <Feature title='Chatbots' text='text is here' />
        <Feature title='Knowledgebase' text='text is here' />
        <Feature title='Education' text='text is here' />
      </div>
    </div>
  );
};

export default Intro;
