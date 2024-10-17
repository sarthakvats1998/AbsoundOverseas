import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import '../styles/ContactUs.css';

function ContactUs(props) {
    const phoneNumber = '919810183616'; // WhatsApp number
    const pdfDownloadLink = "https://drive.google.com/file/d/1VZGV0TfWClzs_LqJ4RSSQC6TL6HxTgxT/view?usp=drive_link"; // Google Drive direct download link

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
        if (!formData.location) newErrors.location = 'Location is required';
        if (!formData.message) newErrors.message = 'Message is required';

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            from_location: formData.location,
            message: formData.message
        };

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            templateParams,
            '6XLcNz0MtN2AISIUu'
        )
        .then((response) => {
            alert("Your message has been sent. We'll contact you soon!");
            setFormData({ name: '', email: '', phone: '', location: '', message: '' }); // Reset form
            setErrors({}); // Clear errors
        })
        .catch((err) => {
            alert('Failed to send message. Please try again.');
        });
    };

    return (
        <div className="contact-page" style={{height:'auto', marginBottom:'20px'}}>
            <Container className="contact-form-container">
                <Row>
                    <Col md={6} xs={12}>
                        <h2>Contact Us</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName" style={{ marginBottom: '20px' }}>
                                <Form.Control 
                                    type="text" 
                                    placeholder="name" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback 
                                    type="invalid" 
                                    style={{ marginTop: '-8px' }} 
                                >
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formEmail" style={{ marginBottom: '20px' }}>
                                <Form.Control 
                                    type="email" 
                                    placeholder="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback 
                                    type="invalid" 
                                    style={{ marginTop: '-8px' }}
                                >
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formPhone" style={{ marginBottom: '20px' }}>
                                <Form.Control 
                                    type="text" 
                                    placeholder="phone" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    isInvalid={!!errors.phone}
                                />
                                <Form.Control.Feedback 
                                    type="invalid" 
                                    style={{ marginTop: '-8px' }}
                                >
                                    {errors.phone}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formLocation" style={{ marginBottom: '20px' }}>
                                <Form.Control 
                                    type="text" 
                                    placeholder="location" 
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    isInvalid={!!errors.location}
                                />
                                <Form.Control.Feedback 
                                    type="invalid" 
                                    style={{ marginTop: '-8px' }}
                                >
                                    {errors.location}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formMessage" style={{ marginBottom: '20px' }}>
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    placeholder="message" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    isInvalid={!!errors.message}
                                />
                                <Form.Control.Feedback 
                                    type="invalid" 
                                    style={{ marginTop: '-8px' }}
                                >
                                    {errors.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className='button-group-contact'>
                                <Button variant="primary" type="submit" className="submit-button">
                                    SUBMIT NOW
                                </Button>
                            </div>
                        </Form>
                    </Col>
                    <Col md={6} xs={12} className="contact-infomation">
                        <div className="address-section">
                            <h3>ADDRESS</h3>
                            <p>RZ-17<br />Main Najafgarh Road Metro Pillar No. 715,<br />New Delhi, Delhi 110059</p>
                        </div>
                        <br />
                        <div className="phone-section">
                            <h3>CALL US</h3>
                            <p>+91 97-1199-3973</p>
                            <p>+91 98-1018-3616</p>
                        </div>
                        <div className='social-icons'>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon style={{ color: 'white', fontSize: '18px', marginRight: '15px' }} icon={faFacebookF} />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon style={{ color: 'white', fontSize: '20px', marginRight: '15px' }} icon={faLinkedinIn} />
                            </a>
                            <a href="mailto:info@absoundoverseas.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon style={{ color: 'white', fontSize: '20px', marginRight: '15px' }} icon={faEnvelope} />
                            </a>
                            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon style={{ color: 'white', fontSize: '20px', marginRight: '15px' }} icon={faWhatsapp} />
                            </a>
                            {/* Download Icon */}
                            <a href={pdfDownloadLink} download="Absound Overseas e-catalogue.pdf" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon style={{ color: 'white', fontSize: '20px' }} icon={faDownload} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactUs;
