import React from 'react';
import { Cards } from '../../components';
import { blog02, blog03, blog04, blog05, blog06, blog07 } from './imports';
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
          text=''
        />
      </div> */}
      <div className='jindev__portfolio-container_groupB'>
        <Cards
          imgUrl={blog02}
          text='We Are Human_We Are Posthuman'
          date='Dec 20, 2018'
        />
        <Cards
          imgUrl={blog03}
          text='We Are Machine_Machine Like Us'
          date='Jan 07, 2019'
        />
        <Cards
          imgUrl={blog04}
          text='We Are Data_ The Digital shell .JPG'
          date='Mar 26, 2019'
        />
        <Cards
          imgUrl={blog05}
          text='We Are Data_Ghost In The Machine'
          date='Aug 01, 2019'
        />
        <Cards
          imgUrl={blog06}
          text='We Are Machine_In Digital Prison'
          date='Sep 03, 2019'
        />
        <Cards
          imgUrl={blog07}
          text='Mind Graffiti_My Fantasy World'
          date='Sep 26, 2017'
        />
      </div>
    </div>
  </div>
);

export default Portfolio;
