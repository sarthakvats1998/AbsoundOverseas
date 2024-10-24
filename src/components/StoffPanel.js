import React from 'react';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import audi1 from '../assets/stoffPanel/audi1.jpeg';
import audi2 from '../assets/stoffPanel/audi2.jpeg';
import audi3 from '../assets/stoffPanel/audi3.jpeg';
import prod1 from '../assets/stoffPanel/prod1.png';
import prod2 from '../assets/stoffPanel/prod2.jpeg';
import prod3 from '../assets/stoffPanel/prod3.png';
import lightBrown from '../assets/stoffPanel/lightBrown.jpeg';
import brown from '../assets/stoffPanel/brown.jpeg';
import camel from '../assets/stoffPanel/camel.jpeg';
import darkGrey from '../assets/stoffPanel/darkGrey.jpeg';
import gold from '../assets/stoffPanel/gold.jpeg';
import green from '../assets/stoffPanel/green.jpeg';
import black from '../assets/stoffPanel/black.jpeg';
import lightGrey from '../assets/stoffPanel/lightGrey.jpeg';
import red from '../assets/stoffPanel/red.jpeg';
import redBlack from '../assets/stoffPanel/redBlack.jpeg';
import darkBlue from '../assets/stoffPanel/darkBlue.jpeg';
import lightBlue from '../assets/stoffPanel/lightBlue.jpeg';

function StoffPanel() {
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
                    src={audi2}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                <div className='container product-name'>
                    <h1>	
                        Fabril Stoff Panel
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container">
        <Slider {...settings}>
            <div>
            <img className="carousel-image" src={prod1} alt="Slide 1" />
            </div>
            <div>
            <img className="carousel-image" src={prod2} alt="Slide 2" />
            </div>
            <div>
            <img className="carousel-image" src={prod3} alt="Slide 3" />
            </div>
        </Slider>
        </div>
        
        <div className='container'>
            <div className="heading-container">
                <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>The Absound Fabril Stoff Panel system effectively controls unwanted noise. This product offers a wide sound absorption spectrum, and a high sound absorption coefficient, effectively absorbing low, medium, and high-frequency noises.</li><br/>
                    <li>It is also temperature-resistant, elegant, elastic, dust-free, highly decorative, and easy to install.</li><br/>
                    <li>It is mainly used in aesthetically decorative areas requiring acoustic design.</li><br/>
                    <li>These panels are extensively used for quditoriums, lecture rooms, multiplexes, conference rooms, hotels, worship spaces, offices, airports, studios, and home theatres.</li><br/>
                    <li>Our Absound Fabril Stoff Panels come with a 10-year warranty.</li><br/><br/>
                </ul>
            </div>

            <div className="heading-container">
                <h2 className="heading-with-lines">Specifications</h2>
            </div>
            <div>
                <Row>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Thickness</div>
                                    <div className="spec-content">20 mm, 25 mm, 50 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Sizes</div>
                                    <div className="spec-content">600 x 600 mm, 1200 x 600 mm, 2440 X 1220 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Density</div>
                                    <div className="spec-content">400 Kg/m<sup>3</sup></div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Weight</div>
                                    <div className="spec-content">6 - 10 Kg/m<sup>2</sup></div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Acoustics</div>
                                    <div className="spec-content">NRC Of 1.0</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Fire</div>
                                    <div className="spec-content">Class A</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Light (%)</div>
                                    <div className="spec-content">Colours Dependent</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Climate</div>
                                    <div className="spec-content">OC 50, RH 70</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Installation</div>
                                    <div className="spec-content">Spline-H, Studd 48 GI Channel</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Maintenance</div>
                                    <div className="spec-content">Vaccum, Brush</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div><br/><br/>

            <div className="heading-container">
                <h2 className="heading-with-lines">Features</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Non-combustible and special micro-perforated sound absorption wood wool board is the inner set, covered with the fireproof and sound absorption cloth outside.</li><br/>
                    <li>Many colours and patterns of decorative cloth to choose from and customers can also specify
                        their preferred colour and design pattern.</li><br/>
                    <li>Varied sizes can be offered based on the design requirement.</li><br/>
                    <li>Easy installation.</li><br/><br/>
                </ul>
            </div>

            <div className="heading-container">
                <h2 className="heading-with-lines">Colours</h2>
            </div>
            <div className="patterns-container">
                <div className="pattern">
                    <img src={lightBrown} alt="Colour 1" />
                    <p>Light Brown</p>
                </div>
                <div className="pattern">
                    <img src={brown} alt="Colour 2" />
                    <p>Brown</p>
                </div>
                <div className="pattern">
                    <img src={camel} alt="Colour 3" />
                    <p>Camel</p>
                </div>
                <div className="pattern">
                    <img src={darkGrey} alt="Colour 4" />
                    <p>Dark Grey</p>
                </div>
                <div className="pattern">
                    <img src={lightGrey} alt="Colour 5" />
                    <p>Light Grey</p>
                </div>
                <div className="pattern">
                    <img src={green} alt="Colour 6" />
                    <p>Green</p>
                </div>
                <div className="pattern">
                    <img src={black} alt="Colour 7" />
                    <p>Black</p>
                </div>
                <div className="pattern">
                    <img src={redBlack} alt="Colour 8" />
                    <p>Red Black</p>
                </div>
                <div className="pattern">
                    <img src={red} alt="Colour 9" />
                    <p>Red</p>
                </div>
                <div className="pattern">
                    <img src={gold} alt="Colour 10" />
                    <p>Gold</p>
                </div>
                <div className="pattern">
                    <img src={darkBlue} alt="Colour 11" />
                    <p>Dark Blue</p>
                </div>
                <div className="pattern">
                    <img src={lightBlue} alt="Colour 12" />
                    <p>Light Blue</p>
                </div>
                
            </div>
            <br/><br/>

            <div className="heading-container">
                <h2 className="heading-with-lines">Installed</h2>
            </div>
        </div>
        <div className="carousel-container">
        <Slider {...settings}>
            <div>
            <img className="carousel-image" src={audi2} alt="Slide 1" />
            </div>
            <div>
            <img className="carousel-image" src={audi1} alt="Slide 2" />
            </div>
            <div>
            <img className="carousel-image" src={audi3} alt="Slide 3" />
            </div>
        </Slider>
        </div>
    </div>
  );
}

export default StoffPanel;