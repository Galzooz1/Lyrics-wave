import * as React from 'react';
import "./footer.scss"
import logoSmall from '../../assets/logo-small.png';


export interface IFooterProps {
}

export function Footer (props: IFooterProps) {
  return (
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
  );
}
