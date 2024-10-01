import React from 'react';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import size from '../assets/doors/size.jpg';
import section from '../assets/doors/section.jpg';

import audi1 from '../assets/doors/audi1.jpeg';
import door3 from '../assets/doors/door3.jpeg';
import door4 from '../assets/doors/door4.jpg';
import door5 from '../assets/doors/door5.jpg';

function Door() {

    const settings = {
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 2,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerPadding: '0',
            },
          },
        ],
      };

  return (
    <div>
        <Carousel className="custom-carousel" controls={false} indicators={false} style={{height:'600px'}}>
            <Carousel.Item style={{height:'600px'}}>
                <img
                    className="d-block w-100"
                    src={audi1}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                <div className='container product-name'>
                    <h1>	
                        Acoustic Doors
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img className="carousel-image" src={door3} alt="Slide 1" />
                </div>
                <div>
                    <img className="carousel-image" src={door4} alt="Slide 2" />
                </div>
                <div>
                    <img className="carousel-image" src={door5} alt="Slide 3" />
                </div>
            </Slider>
        </div>
        
        <div className='container'>
            <div className="heading-container">
                <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Absound has developed a versatile range of timber doors for a variety of applications.</li><br/>
                    <li>These doors are installed to effectively control noise and provide fire resistance in auditoriums, conference rooms, broadcasting studios, theatres, and music practice rooms where noise pollution is one of the major concerns.</li><br/><br/>
                </ul>
            </div>

            <div className="heading-container">
                <h2 className="heading-with-lines">Standard Unit Size</h2>
            </div>
            <img src={size} style={{width: 800, height: 250, marginLeft: 160}} alt="Slide 1" />
            <br/><br/><br/>

            <div className="heading-container">
                <h2 className="heading-with-lines">Features</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>We develop acoustic doors, tested in the accredited laboratory, equipped with compression seals around the periphery of the doors.</li><br/>
                    <li>Standard doors have an acoustic rating up to STC 45. Many of the doors in the range also meet fire specification. Fire doors are tested to BS 476 - Part 22:1987 with fire rating up to two hours for stability and integrity. An intumescent strip is used for fire rating doors.</li><br/>
                    <li>The door ranges incorporate the latest acoustic technology and optimum in engineering design with high quality standard and optional fittings, e.g. Handles, locks, closers, etc. are available to meet individual customer requirements.</li><br/><br/>
                </ul>
            </div>

            <div className="heading-container">
                <h2 className="heading-with-lines">Section</h2>
            </div>
            <img src={section} style={{width: 750, height: 700, marginLeft: 200}} alt="Slide 1" />
            <br/><br/><br/>

        </div>
    </div>
  );
}

export default Door;