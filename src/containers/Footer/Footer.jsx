import React from 'react';
import './footer.css';
import jinLogo from '../../assets/jin_logo03.png';

const Footer = () => {
  return (
    <div className='jindev__footer section__padding'>
      {/* <div className='jindev__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into future</h1>
      </div>

      <div className='jindev__footer-btn'>
        <p>Request Early Access</p>
      </div> */}
      <div className='jindev__footer-links'>
        <div className='jindev__footer-links_logo'>
          <img src={jinLogo} alt='logo' />
        </div>
        <div className='jindev__footer-links_div'>
          <h4>Categories</h4>
          <a
            href='http://jinwangartist.com/files/graphicdesign.pdf'
            target='_blank'
            rel='noreferrer'
          >
            <p>Graphic Design</p>
          </a>
          <a
            href='http://jinwangartist.com/files/baportfolio.pdf'
            target='_blank'
            rel='noreferrer'
          >
            <p>Bachelor's portfolio</p>
          </a>
          <a
            href='http://jinwangartist.com/files/maportfolio.pdf'
            target='_blank'
            rel='noreferrer'
          >
            <p>Master's portfolio</p>
          </a>
          <a
            href='https://flickr.com/photos/184697159@N06/albums'
            target='_blank'
            rel='noreferrer'
          >
            <p>Photography</p>
          </a>
        </div>

        <div className='jindev__footer-links_div'>
          <h4>Archives</h4>
          <a
            href='http://jinwangartist.com/files/mapaper.pdf'
            target='_blank'
            rel='noreferrer'
          >
            <p>Master Proposal</p>
          </a>
          <a
            href='http://jinwangartist.com/files/studyplan.pdf'
            target='_blank'
            rel='noreferrer'
          >
            <p>Study Proposal</p>
          </a>
        </div>

        <div className='jindev__footer-links_div'>
          <h4>Get in touch</h4>

          <p>info@jinwangartist.com</p>
        </div>
      </div>

      <div className='jindev__footer-copyright'>
        <p>@2022 JinWang Artist. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
