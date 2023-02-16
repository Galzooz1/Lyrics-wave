import React from 'react';
import "./footer.scss"
import logoSmall from '../../assets/logo-small.png';

interface FooterProps {
  
};

const Footer: React.FC<FooterProps> = () => {
  return(
    <div className='footer-main'>
        {/* <img className='footer-main_logo' src={logoSmall} /> */}
        <div className='footer-main_mid'>
          <div className='footer-main_mid_social'>
            <button><img className='footer-main_mid_social_icon' src="../src/assets/icons/facebook.svg" alt="" /></button>
            <button><img className='footer-main_mid_social_icon'src="../src/assets/icons/instagram.svg" alt="" /></button>
            <button><img className='footer-main_mid_social_icon'src="../src/assets/icons/youtube.svg" alt="" /></button>
            <button><img className='footer-main_mid_social_icon'src="../src/assets/icons/twitter.svg" alt="" /></button>
          </div>
          <div>
            <p>All rights reserved - "Lyrics-Wave"</p>
          </div>
        </div>
    </div>
  )
}

export default Footer
