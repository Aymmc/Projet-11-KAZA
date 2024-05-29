import React from 'react';

import "./Footer.css"
import LogoFooter from './LogoFooter.png'
function Footer() {
  return (
    <>
    <footer>
    <div className='ImgFooter'>
    <img src={LogoFooter} className='LogoFooter'/>
    </div>
    <div className='Rgpd'>
        <p>© 2024 Kasa. All rights reserved</p>
    </div>
    </footer>

      </>
  );
}

export default Footer;
