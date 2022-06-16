import React from 'react';
import { Cards } from '../../components';
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  blog06,
  blog07,
} from './imports';
import './portfolio.css';

const Portfolio = () => (
  <div className='jindev__portfolio section__padding' id='portfolio'>
    <div className='jindev__portfolio-heading'>
      <h1 className='gradient__text'>Digital Selves In The World</h1>
    </div>
    <div className='jindev__portfolio-container'>
      {/* <div className='jindev__portfolio-container_groupA'>
        <Article
          imgUrl={portfolio01}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
        />
      </div> */}
      <div className='jindev__portfolio-container_groupB'>
        <Cards
          imgUrl={blog02}
          text='We Are Human_We Are Posthuman'
          date='Sep 26, 2021'
        />
        <Cards
          imgUrl={blog03}
          text='We Are Machine_Machine Like Us'
          date='Sep 26, 2021'
        />
        <Cards
          imgUrl={blog04}
          text='We Are Data_ The Digital shell .JPG'
          date='Sep 26, 2021'
        />
        <Cards
          imgUrl={blog05}
          text='We Are Data_Ghost In The Machine'
          date='Sep 26, 2021'
        />
        <Cards
          imgUrl={blog06}
          text='We Are Machine_In Digital Prison'
          date='Sep 26, 2021'
        />
        <Cards
          imgUrl={blog07}
          text='Mind Graffiti_My Fantasy World'
          date='Sep 26, 2021'
        />
      </div>
    </div>
  </div>
);

export default Portfolio;
