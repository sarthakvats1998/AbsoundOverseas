import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../assets/carousel1.jpeg';
import carousel2 from '../assets/audi11.jpeg';
import carousel3 from '../assets/carousel3.jpeg';
import '../styles/carousel.css';

function CarouselImg({ scrollToProductCards }) {
    return (
        <div>
            <Carousel className="custom-carousel" style={{height:'auto'}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                        style={{height: "160%"}}
                    />
                    <Carousel.Caption className="carousel-caption">
                        <br/>
                        <div className='carousel-text'>
                            <div>Elevating</div>
                            <div>Acoustic</div>
                            <div>Solutions For</div>
                            <div>All</div>
                        </div>
                        <p>Premier acoustic solutions tailored for you.</p>
                        <div className='button-group'>
                            <Link to="/contact"><Button className='carousel-button'>Contact Us</Button></Link>
                        </div>           
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <br/>
                        <div className='carousel-text'>
                            <div>Innovative</div>
                            <div>Acoustic Designs</div>
                        </div>
                        <p>Creating bespoke designs that harmonize with your environment.</p>
                        <div className='button-group'>
                            <Link to="/projects"><Button className='carousel-button'>Our Projects</Button></Link>
                        </div>     
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                        style={{height: "150%"}}
                    />
                    <Carousel.Caption>
                        <br/>
                        <div className='carousel-text'>
                            <div>Specialized</div>
                            <div>Acoustic Materials</div>
                        </div>
                        <p>High-quality materials to meet your unique needs.</p>
                        <div className='button-group'>
                            <Button className='carousel-button' onClick={scrollToProductCards}>Get Started</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselImg;
