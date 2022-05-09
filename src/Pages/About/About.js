import React from 'react';
import aboutimg from '../../images/about/aboutimage.png'
import './About.css'

const About = () => {
    return (
        <div className='about-section-container'>
            <div className='about-header-container'>
                <h1 className='about-header'>ABOUT DEVELOPER</h1>
            </div>
            <div className='detail-container'>
                <div className='about-image-container'>
                    <img className='about-image' src={aboutimg} alt="" />
                </div>
                <div className='name-qual'>
                    <div className='name-container'>
                        <h1 className='name'>NURUN NABI</h1>
                    </div>
                    <div className='education-container'>
                        <h5 className='education'>M.Sc in Computer Science & Engineering</h5>
                        <h5 className='education'>B.Sc in Computer Science & Engineering</h5>
                        <h5 className='education'>Diploma in Engineering in Computer Technology</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;