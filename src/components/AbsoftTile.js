import React from 'react';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import prod1 from '../assets/absoftTile/prod1.png';
import prod2 from '../assets/absoftTile/prod2.jpg';
import prod3 from '../assets/absoftTile/prod3.jpeg';
import audi1 from '../assets/absoftTile/audi1.jpg';
import audi2 from '../assets/absoftTile/audi2.jpg';
import audi3 from '../assets/absoftTile/audi3.jpg';
import audi4 from '../assets/absoftTile/audi4.jpg';

function AbsoftTile() {
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
                    src={audi4}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                <div className='container product-name'>
                    <h1>	
                        Absoft Acoustic Ceiling Tile
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
                    <li>Absoft Acoustic Ceiling Tile consists of long fine glass fibres as core material with plain and texture finish.</li><br/>
                    <li>This ceiling tile offer excellent sound control performance by providing high sound absorption.</li><br/>
                    <li>Absoft Acoustic Ceiling Tiles are suitable for almost every application, including use in auditorims, lecture rooms, multiplexes, conference rooms, hotels, worship spaces, offices, stadiums, airports, studios, and home theatres.</li><br/>
                    <li>Our Absoft Acoustic Ceiling Tiles come with a 5-year warranty.</li><br/><br/>
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
                                    <div className="spec-content">15mm, 20 mm, 25 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Density</div>
                                    <div className="spec-content">100 - 120 Kg/m<sup>3</sup></div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Weight</div>
                                    <div className="spec-content">1.5 - 3.0 Kg/m<sup>2</sup></div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Sizes</div>
                                    <div className="spec-content">595 X 595 mm, 1195 X 1195 mm</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Acoustics</div>
                                    <div className="spec-content">NRC Upto 0.90</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Fire</div>
                                    <div className="spec-content">Class 1 & P</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Finish</div>
                                    <div className="spec-content">Texture</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Core</div>
                                    <div className="spec-content">Fibreglass</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Edge</div>
                                    <div className="spec-content">Square, Stepe</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Installation</div>
                                    <div className="spec-content">T-15/24 Grid</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Maintenance</div>
                                    <div className="spec-content">Vaccum Cleaner</div>
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
                    <li>Reduce noise and reverberation.</li><br/>
                    <li>Improve speech intelligibility.</li><br/>
                    <li>Improve productivity.</li><br/>
                    <li>Allow architectural versatility.</li><br/>
                    <li>Customize acoustical design.</li><br/>
                    <li>Combines aesthetics and functionality</li><br/><br/>
                </ul>
            </div>

            <div className="heading-container">
                <h2 className="heading-with-lines">Advantages</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Our tiles are made of glass fibre with fire resistance coating on the surface and edge, achieve Class-A incombustibility standard.</li><br/>
                    <li>Due to long glass fibre resin bonded product it bear the Green Cross level for recycled content. This is fungus and stains resistance product & does not contain any harmful substances.</li><br/>
                    <li>Reduce the impact of indoor temperature due to good thermal insulation property and balance the temperature difference so that energy could be saved.</li><br/><br/>
                </ul>
            </div>

            <div className="heading-container">
                <h2 className="heading-with-lines">Colours</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>White.</li>
                    <li>Black.</li>
                    <li>Custom colours also available.</li>
                </ul>
            </div>

            <div className="heading-container">
                <h2 className="heading-with-lines">Installed</h2>
            </div>
        </div>
        <div className="carousel-container">
        <Slider {...settings}>
            <div>
            <   img className="carousel-image" src={audi1} alt="Slide 1" />
            </div>
            <div>
                <img className="carousel-image" src={audi2} alt="Slide 2" />
            </div>
            <div>
                <img className="carousel-image" src={audi3} alt="Slide 3" />
            </div>
        </Slider>
        </div>
    </div>
  );
}

export default AbsoftTile;