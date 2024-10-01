import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/Works.css';
import carousel1 from '../assets/carousel1.jpeg';
import carousel3 from '../assets/carousel3.jpeg';
import audi2 from '../assets/audi2.jpeg';
import audi3 from '../assets/audi3.jpg';
import audi4 from '../assets/audi4.jpeg';
import audi5 from '../assets/audi5.jpeg';
import audi6 from '../assets/audi6.jpeg';
import audi7 from '../assets/audi7.jpeg';
import audi8 from '../assets/audi8.jpg';
import audi9 from '../assets/audi9.jpg';
import audi10 from '../assets/audi10.jpg';

const images = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: audi4,
    text: 'Guru Gobind Singh IP University',
    location: 'Dwarka, Delhi'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: carousel1,
    text: 'XIM University',
    location: 'Bhubaneswar, Odisha'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: audi9,
    text: 'NTPC Solapur',
    location: 'Solapur, '
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: audi3,
    text: 'Rajiv Gandhi Indoor Stadium',
    location: 'Guwahati, Assam'
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: audi5,
    text: 'IIT',
    location: 'Indore, Madhya Pradesh'
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: audi10,
    text: 'Supreme Court of India',
    location: 'New Delhi, Delhi'
  },
  {
    id: 7,
    link: 'https://www.google.com',
    image: audi6,
    text: 'Bal Bharati Public School',
    location: 'Noida, Uttar Pradesh'
  },
  {
    id: 8,
    link: 'https://www.google.com',
    image: carousel3,
    text: 'Graphic Era University',
    location: 'Dehradun, Uttarakhand'
  },
  {
    id: 9,
    link: 'https://www.google.com',
    image: audi2,
    text: 'Jawahar Bhawan',
    location: 'New Delhi, Delhi'
  },
  {
    id: 10,
    link: 'https://www.google.com',
    image: audi7,
    text: 'Savitribai Phule Pune University',
    location: 'Pune, Maharashtra'
  },
  {
    id: 11,
    link: 'https://www.google.com',
    image: audi8,
    text: 'NHPC',
    location: 'Faridabad, Haryana'
  }
];

function Works() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className='works-block'>
      <div className="grid-container">
        <p className='display-3 font-weight-bold' style={{color:'white'}}>
          Our Experience
        </p>
        {images.map((image, index) => (
          <div className="grid-item" key={index} onClick={() => openModal(image.image)}>
            <img src={image.image} alt={`Image ${index + 1}`} />
            <div className="overlay">
              <div>{image.text}</div>
              <div>{image.location}</div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedImage && <img src={selectedImage} alt="Full view" className="modal-image" style={{marginTop: '150px'}} />}
      </Modal>
    </div>
  );
}

export default Works;
