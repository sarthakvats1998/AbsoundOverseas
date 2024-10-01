import React from 'react';
import '../styles/About.css';

import logo from '../assets/logo.png'

function About(props) {
    return (
        <div className="split-background">
          <div className="container">
            <div className='imgage-container' style={{marginTop:'100px'}}>
                <img
                            src={logo}
                            width="500"
                            height="250"
                            alt="Logo"
                />
            </div>
            <br/><br/>
            <div className='desc'>
                <p className='content-text'>
                    Absound Overseas is a leading acoustic solutions provider with multiple products in different cores and finishes. 
                    We offer services in acoustic consultancy, design, and specialized acoustic materials. With vast experience, we provide services to architects, consultants, and designers of auditoriums, convention centers, seminar rooms, cinemas, multiplexes, and more. 
                    Through our interactions with industry leaders, we have introduced to India acoustic materials that are popular worldwide.<br/><br/>

                    Our products and services range from acoustic wall panelling, acoustic ceilings, metal ceilings, acoustic doors, auditorium chairs, stage furnishing, and stage lighting.<br/><br/>

                    All our world-class products are manufactured to meet global standards for acoustic absorption, environmental friendliness, and convenient installation, ensuring the best listening experience. 
                    Our products come with a warranty of 3 to 10 years, depending on the selection.

                </p>
            </div>
          </div>
        </div>
      );
}

export default About;