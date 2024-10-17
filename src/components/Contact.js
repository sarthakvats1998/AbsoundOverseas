import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css'; 

function Contact(props) {
    return (
        <div style={{backgroundColor:'#f8f9fa'}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14009.24371399446!2d77.0487909!3d28.6204419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0525bb8afdfd%3A0xc7b71e275574f0e7!2sABSOUND%20OVERSEAS!5e0!3m2!1sen!2sin!4v1721034287723!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
    
          <div className="contact-info">
            <Row className="text-center mt-4">
              <Col>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <p>absoundoverseas@gmail.com</p>
                  <p>info@absoundoverseas.com</p>
                </div>
              </Col>
              <Col>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <p>+91 97-1199-3973</p>
                  <p>+91 98-1018-3616</p>
                </div>
              </Col>
              <Col>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                  <p>RZ-17, Uttam Nagar,</p><p>Main Najafgarh Road Metro Pillar No. 715,</p><p>New Delhi, Delhi 110059</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      );
}

export default Contact;