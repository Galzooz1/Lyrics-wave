import React from 'react';
import "./about.scss"
import logo from '../../assets/logo.png'

interface AboutProps {
    
};

const About: React.FC<AboutProps> = () => {
    return(
        <div className='about-main'>
        <h1>About us</h1>
        <p className='about-main_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit.
            Purus ut faucibus pulvinar elementum integer enim neque volutpat ac.</p>
        <img className='about-main_logo' src={logo} />
    </div>
    )
}

export default About;