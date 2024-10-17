import React from 'react';
import '../styles/FooterCopyright.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';

function FooterCopyright(props) {
    const phoneNumber = '919810183616'; //WhatsApp phone number
    const pdfDownloadLink = "https://drive.google.com/file/d/1VZGV0TfWClzs_LqJ4RSSQC6TL6HxTgxT/view?usp=drive_link"; // Google Drive direct download link

    return (
        <div className='copyright'>
            <div style={{ padding: '10px' }}>
                Copyright © 2024-25 to www.absoundoverseas.com | All Rights Reserved
            </div>
            <div className='icons'>
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
        </div>
    );
}

export default FooterCopyright;
