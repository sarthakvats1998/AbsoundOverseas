import React from 'react';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import carousel1 from '../assets/carousel1.jpeg';
import audi1 from '../assets/gypsumBoard/audi1.jpeg';
import audi2 from '../assets/gypsumBoard/audi2.jpeg';
import prod1 from '../assets/gypsumBoard/prod1.jpeg';
import prod3 from '../assets/gypsumBoard/prod3.jpeg';
import prod4 from '../assets/gypsumBoard/prod4.jpeg';

function GypsumBoard() {
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
            <Carousel.Item style={{height:'520px', marginTop:'110px'}}>
                <img
                    className="d-block w-100"
                    src={carousel1}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                <div className='container product-name'>
                    <h1>	
                        Perforated Gypsum Board
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container">
        <Slider {...settings}>
            <div>
            <img className="carousel-image" src={prod4} alt="Slide 1" />
            </div>
            <div>
            <img className="carousel-image" src={prod1} alt="Slide 2" />
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
                    <li>Absound Perforated Gypsum Board is designed based on the Helmholtz resonance theorem. After perforation, the holes in the board and the wall create numerous resonant cavities.
                        When air molecules pass through these holes, the resonant cavities absorb significant amounts of sound energy.</li><br/>
                    <li>Perforated gypsum board is one of the best sound absorption products and is widely used in offices, cinemas, churches, hospitals, schools, and other environments.</li><br/>
                    <li>Absound Perforated gypsum boards are suitable for almost every application, including use in auditoriums, theatres, convention centres, conference rooms, hospitals, schools, studios, offices, and commercial buildings, or any area where acoustics and aesthetics are important considerations.</li><br/>
                    <li>Our Perforated Gypsum Board comes with a 5-year warranty.</li><br/><br/>
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
                                    <div className="spec-content">12.5 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Size</div>
                                    <div className="spec-content">600 x 600 mm, 1200 x 600 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Density</div>
                                    <div className="spec-content">800 Kg/m<sup>3</sup></div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Weight</div>
                                    <div className="spec-content">9 - 14 Kg/m<sup>2</sup></div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Acoustics</div>
                                    <div className="spec-content">NRC Of 0.80</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Fire</div>
                                    <div className="spec-content">Class A</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Light (%)</div>
                                    <div className="spec-content">70 - 85%</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Climate</div>
                                    <div className="spec-content">OC 50, RH 70</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Perforation</div>
                                    <div className="spec-content">12 x 12 mm, 6 x 6mm, 3 x 3mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Installation</div>
                                    <div className="spec-content">T-15/24 Grid, GI Ceiling 25 mm & Wall Studd 48 mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Maintenance</div>
                                    <div className="spec-content">Vaccum Cleaning, Wet Wipe</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div><br/><br/>

            <div className="heading-container">
                <h2 className="heading-with-lines">Standard Unit Size</h2>
            </div>
            <div className='bullet'>
                <h5>Square Hole</h5>
                <ul>
                    <li>Perforation type:square type, 3 * 3 mm, 5 * 5 mm, 10 * 10 mm, 12 * 12 mm</li><br/>
                    <li>Size 2440 * 1220 * 12.5 mm, 610 * 610 * 12.5 mm, 1220 * 610 * 12.5 mm, other on request</li><br/>
                    <li>Color of non-woven fabric: white ,black , blue , other on request</li><br/>
                    <li>Perforation rate: 13.4% - 17.2%</li><br/>
                    <li>NRC rate: 0.7</li><br/>
                    <li>RH70</li><br/><br/>
                </ul>
                <h5>Circle Hole</h5>
                <ul>
                    <li>Perforating type : circle hole</li><br/>
                    <li>Size 2440 * 1220 * 12.5 mm, 610 * 610 * 12.5 mm, 1220 * 610 * 12.5 mm, other on request</li><br/>
                    <li>Colors of non-woven fabric: white, black, blue, and custom colors are also available</li><br/>
                    <li>Perforation rate: 8.7% - 19.6%</li><br/>
                    <li>NRC rate: 0.7</li><br/>
                    <li>RH70</li><br/><br/>
                </ul>
                <h5>Irregular Circle Hole</h5>
                <ul>
                    <li>Perforating type : irregular circle hole</li><br/>
                    <li>Size: 2440 * 1220 * 12.5 mm, other on request</li><br/>
                    <li>Color of non-woven fabric: white, black, blue, and custom colours also available</li><br/>
                    <li>Perforation rate: 8.7% - 18.1%</li><br/>
                    <li>NRC rate: 0.7</li><br/>
                    <li>RH70</li><br/><br/>
                </ul>
            </div>

            <div className="heading-container">
                <h2 className="heading-with-lines">Colours</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Custom colours available</li><br/><br/>
                </ul>
            </div>
            <br/><br/>

            <div className="heading-container">
                <h2 className="heading-with-lines">Installed</h2>
            </div>
        </div>
        <div className="carousel-container">
        <Slider {...settings}>
            <div>
            <img className="carousel-image" src={carousel1} alt="Slide 1" />
            </div>
            <div>
            <img className="carousel-image" src={audi1} alt="Slide 2" />
            </div>
            <div>
            <img className="carousel-image" src={audi2} alt="Slide 3" />
            </div>
        </Slider>
        </div>
    </div>
  );
}

export default GypsumBoard