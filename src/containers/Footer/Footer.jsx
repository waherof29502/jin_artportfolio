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
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className='jindev__footer-links_div'>
          <h4>Categories</h4>
          <p>Graphic Design</p>
          <p>New Media Art</p>
          <p>Photography</p>
          <p>Interactive Art</p>
        </div>

        <div className='jindev__footer-links_div'>
          <h4>Archives</h4>
          <p>Medium Proposal</p>
          <p>Final Proposal</p>
          <p>Study Proposal</p>
        </div>

        <div className='jindev__footer-links_div'>
          <h4>Get in touch</h4>
          <p></p>
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
