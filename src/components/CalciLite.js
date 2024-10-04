import React from 'react';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import audi1 from '../assets/calciLite/audi1.jpg';
import audi2 from '../assets/calciLite/audi2.jpg';
import audi3 from '../assets/calciLite/audi3.jpg';
import audi4 from '../assets/calciLite/audi4.jpg';
import prod1 from '../assets/calciLite/prod1.jpg';
import prod2 from '../assets/calciLite/prod2.jpg';
import prod3 from '../assets/calciLite/prod4.jpg';
import prod5 from '../assets/calciLite/prod5.jpg';
import prod6 from '../assets/calciLite/prod6.jpg';
import prod7 from '../assets/calciLite/prod7.jpg';

function CalciLite() {
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
                        CalciLite Ceiling Tile
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
                    <li>CalciLite Ceiling Tiles are made from a blend of calcium silicate, natural cellulose fibers, and other reinforcing materials.</li><br/>
                    <li>Our tiles are renowned for their excellent water resistant, fire resistant, thermal insulation, and acoustic properties.</li><br/>
                    <li>They are resistant to moisture and micro-organisms like fungus and bacteria, making them an ideal choice for humid environments..</li><br/>
                    <li>The tiles are suitable for almost every application, including use in lecture rooms, conference rooms, worship spaces, offices, and multipurpose halls.</li><br/>
                    <li>Our tiles come with a 5-year warranty.</li><br/><br/>
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
                                    <div className="spec-content">8 mm, 15 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Sizes</div>
                                    <div className="spec-content">595 X 595 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Density</div>
                                    <div className="spec-content">900 Kg/m<sup>3</sup></div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Weight</div>
                                    <div className="spec-content">5.0 kgs/m<sup>2</sup></div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Acoustics</div>
                                    <div className="spec-content">NRC Of 0.50 - 0.70</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Fire</div>
                                    <div className="spec-content">Class 1</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Light (%)</div>
                                    <div className="spec-content">&gt; 85%</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Humidity resistance</div>
                                    <div className="spec-content">100% RH</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Panel Shapes</div>
                                    <div className="spec-content">Square Edge, Beveled Edge</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Installation</div>
                                    <div className="spec-content">T-Grid System</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Maintenance</div>
                                    <div className="spec-content">Vaccum</div>
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
                    <li>Light weight.</li><br/>
                    <li>Excellent thermal insulation properties.</li><br/>
                    <li>Water resistant. Can withstand 99% relative humidity</li><br/>
                    <li>Fungus and bacteria resistant.</li><br/><br/>
                </ul>
            </div>

            <div className="heading-container">
                <h2 className="heading-with-lines">More Patterns</h2>
            </div>
            <div className="patterns-container">
                <div className="pattern">
                    <img src={prod5} alt="Colour 1" />
                    <p>ROUND HOLE</p>
                </div>
                <div className="pattern">
                    <img src={prod6} alt="Colour 2" />
                    <p>SQUARE HOLE PERFORATED</p>
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
            <img className="carousel-image" src={audi4} alt="Slide 2" />
            </div>
            <div>
            <img className="carousel-image" src={audi3} alt="Slide 3" />
            </div>
        </Slider>
        </div>
    </div>
  );
}

export default CalciLite;