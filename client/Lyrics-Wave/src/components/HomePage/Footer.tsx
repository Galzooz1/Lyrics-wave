import * as React from 'react';
import "./footer.scss"
import logoSmall from '../../assets/logo-small.png';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';


export interface IFooterProps {
}

export function Footer (props: IFooterProps) {
  return (
    <div className='footer-main'>
        {/* <img className='footer-main_logo' src={logoSmall} /> */}
        <div className='footer-main_mid'>
          <div className='footer-main_mid_social'>
            <button><FaFacebookF /></button>
            <button><FaInstagram /></button>
            <button><FaYoutube /></button>
            <button><FaTwitter /></button>
          </div>
          <div>
            <p>All rights reserved - "Lyrics-Wave"</p>
          </div>
        </div>
    </div>
  );
}
