import React from 'react';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import audi5 from '../assets/audi5.jpeg';
import audi11 from '../assets/audi11.jpeg';
import audi4 from '../assets/audi4.jpeg';
import prod1 from '../assets/stretchFabricPanel/prod1.png';
import prod2 from '../assets/stretchFabricPanel/prod2.jpeg';
import audi1 from '../assets/stretchFabricPanel/audi1.jpeg';

function stretchFabricPanel() {
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: '10',
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
                    src={audi11}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                <div className='container product-name'>
                    <h1>	
                        Arch Stretch Fabric Panel
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
            <img className="carousel-image" src={audi1} alt="Slide 3" />
            </div>
        </Slider>
        </div>
        
        <div className='container'>
            <div className="heading-container">
                <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Absound Arch Stretch Fabric Panel is a commercial, site-installed, highly customized solution involving tightly stretching fabric over acoustical or tackable substrates and then applying the panels using a tracking system.</li><br/>
                    <li>Being site-installed, this system ensures a perfect fit to all adjacent work, eliminating any gaps, sagging, or misfitting.</li><br/>
                    <li>The tracking is secured to the panel and can be applied to either wall or ceiling applications.</li><br/>
                    <li>Any depth can be achieved or multiple panel depths can be applied.</li><br/>
                    <li>Perfect tolerance around all architectural situations.</li><br/>
                    <li>Applications include auditoriums, studios, cinema theatres, recording rooms, and conference rooms.</li><br/><br/>
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
                                    <div className="spec-content">12 mm, 15 mm, 18 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Size</div>
                                    <div className="spec-content">2440 x 128 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Density</div>
                                    <div className="spec-content">750 Kg/m<sup>3</sup></div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Weight</div>
                                    <div className="spec-content">12 Kg/m<sup>2</sup></div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Acoustics</div>
                                    <div className="spec-content">NRC Of 0.75</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Fire</div>
                                    <div className="spec-content">Class 1 & P</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Light (%)</div>
                                    <div className="spec-content">75%</div>
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
                                    <div className="spec-title">Core</div>
                                    <div className="spec-content">Medium Density Fibreboard (MDF)</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Edge</div>
                                    <div className="spec-content">Tounge & Groove</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Installation</div>
                                    <div className="spec-content">18 mm GI or Almn. Channel</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Maintenance</div>
                                    <div className="spec-content">Wet Wipe, Dry Wipe</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div><br/><br/>

            <div className="heading-container">
                <h2 className="heading-with-lines">Installation Procedure</h2>
            </div>
            <div>
                <ol>
                    <li>Field measure each wall area which is to receive the acoustical tackable treatment to
                    establish the exact layout of the units.</li><br/>
                    <li>Apply the stretch wall fabric framework in the areas to receive the acoustical wall treatment.</li><br/>
                    <li>Secure the framework with suitable mastic and special, heavy-duty, fasteners.</li><br/>
                    <li>Install the Stretch Wall fabric system framework plumb and straight, in proper alignment.</li><br/>
                    <li>Install the sub-surface material continuously and flush it to the shoulder of the track.</li><br/>
                    <li>Cut the fabric from each roll marking and maintaining the sequence of drops and matching the direction of the weave for sequential and uniform installation.</li><br/>
                    <li>Install the fabric from the face side after the framework is securely fastened and ensure perfect horizontal and vertical grain alignment.</li><br/>
                    <li>The fabric shall be stretched tautly, evenly, smoothly and free of defects and flaws.</li><br/><br/>
                </ol>
            </div>

            <div className="heading-container">
                <h2 className="heading-with-lines">Colours</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Melamine Laminate</li>
                    <li>Wood Veneer</li><br/><br/>
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
            <img className="carousel-image" src={audi5} alt="Slide 1" />
            </div>
            <div>
            <img className="carousel-image" src={audi11} alt="Slide 2" />
            </div>
            <div>
            <img className="carousel-image" src={audi4} alt="Slide 3" />
            </div>
        </Slider>
        </div>
    </div>
  );
}

export default stretchFabricPanel;