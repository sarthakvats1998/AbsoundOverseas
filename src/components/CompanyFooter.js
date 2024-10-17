import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import '../styles/CompanyFooter.css';

function CompanyFooter(props) {
  return (
    <div style={{borderTop:'1px'}}>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Our Organisation</h3>
            <ul className='footer-font'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Our Work</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Products</h3>
            <ul className='footer-font'>
              <li><Link to="/wallPanels">Wall Panels</Link></li>
              <li><Link to="/acousticCeilings">Acoustic Ceilings</Link></li>
              <li><Link to="/metalCeilings">Metal Ceilings</Link></li>
              <li><Link to="/seatingSystems">Seating Systems</Link></li>
              <li><Link to="/acousticDoors">Acoustic Doors</Link></li>
              <li><Link to="/stageSystems">Stage Systems</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul className='footer-font'>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <img src={logo} alt="Logo" />
            <p className='footer-font address'>
              RZ-17, Uttam Nagar,<br/>
              Main Najafgarh Road,<br/>
              Metro Pillar No. 715,<br/>
              New Delhi, Delhi 110059
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CompanyFooter;
