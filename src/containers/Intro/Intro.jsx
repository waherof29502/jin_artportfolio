import React from 'react';
import { Feature } from '../../components';
import './intro.css';

const Intro = () => {
  return (
    <div className='jindev__intro section__margin' id='intro'>
      <div className='jindev__intro-feature'>
        <Feature title='Selfie Journey' />
      </div>
      <div className='jindev__intro-heading'>
        {/* <h1 className='gradient__text'>text</h1> */}
        <p>
          Self-portrait is a theme that artists use to express Self-Concept and
          represent the special individual identity. Through the way of seeing
          human body, in the context or symbol, it enables to recall the
          existence of self-concept, to express the feeling and changing of
          mental and physical status, to represent the unconsciousness of ‘I’ or
          ‘ghost’.
        </p>
      </div>
      <div className='jindev__intro-container'>
        <Feature
          title='Blog'
          href='https://jinwang.atjhouse.com/'
          target='_blank'
          text='Machine Learning, Deep Learning, AI'
        />
        <Feature
          title='Portfolio'
          href='http://jinwangartist.com/files/maportfolio.pdf'
          target='_blank'
          text='Interactive Media, Visual Art'
        />
        <Feature
          title='Proposal'
          href='http://jinwangartist.com/files/mapaper.pdf'
          target='_blank'
          text='AI, Philosophy, Photography '
        />
      </div>
    </div>
  );
};

export default Intro;
