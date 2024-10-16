import React from 'react';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import audi1 from '../assets/woodWoolPanel/audi1.jpeg';
import audi2 from '../assets/woodWoolPanel/audi2.jpeg';
import audi3 from '../assets/woodWoolPanel/audi3.jpeg';
import prod1 from '../assets/woodWoolPanel/prod1.jpeg';
import prod2 from '../assets/woodWoolPanel/prod2.jpeg';
import prod3 from '../assets/woodWoolPanel/prod3.jpeg';

function WoodWoolPanel() {
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
                    src={audi3}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                <div className='container product-name'>
                    <h1>	
                        Fabril Wood Wool Panel
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container">
        <Slider {...settings}>
            <div>
            <img className="carousel-image" src={prod3} alt="Slide 1" />
            </div>
            <div>
            <img className="carousel-image" src={prod2} alt="Slide 2" />
            </div>
            <div>
            <img className="carousel-image" src={prod1} alt="Slide 3" />
            </div>
        </Slider>
        </div>
        
        <div className='container'>
            <div className="heading-container">
                <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Absound Fabril Wood Wool Panels are multipurpose lightweight acoustic and insulation boards manufactured from selected excelsior wood fibers (wood wool) mineralized with magnesite and hydraulically compressed into boards.</li><br/>
                    <li>Our natural panels are extensively used materials in roof insulation, false ceilings, wall paneling, partitions, and flooring, providing both thermal and acoustic insulation.</li><br/>
                    <li>The raw materials—wood fibers and magnesite—give the Wood Wool Panels their natural white color, although these can also be spray-painted in other colors.</li><br/>
                    <li>Our natural panels are available in 5 densities and 10 thicknesses, starting from 6 mm, which is the thinnest wood wool insulation slab.</li><br/>
                    <li>These panels are extensively used for acoustical wall panels in auditoriums, multiplexes, cinema theaters, studios, conference rooms, etc. Non-woven fabric is adhered to one side of the Wood Wool Panels. 
                        One can also paste or stretch designer fabric on these panels on-site to achieve specific designs and patterns.</li><br/>
                    <li>Our Fabril Wood Wool Panels come with a 10-year warranty.</li><br/><br/>
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
                                    <div className="spec-content">15 mm, 20 mm, 25 mm, 50 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Sizes</div>
                                    <div className="spec-content">600 x 600 mm, 1200 x 600 mm</div>
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
                                    <div className="spec-content">NRC Of 0.95</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Fire</div>
                                    <div className="spec-content">Class A</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Light (%)</div>
                                    <div className="spec-content">Colours Dependent</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Climate</div>
                                    <div className="spec-content">OC 50, RH 90</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Sizes</div>
                                    <div className="spec-content">L-600mm × W-600mm × Th-20mm</div><br/>
                                    <div className="spec-content">L-1200mm × W-600mm × Th-20mm</div><br/>
                                    <div className="spec-content">L-600mm × W-600mm × Th-25mm</div><br/>
                                    <div className="spec-content">L-1200mm × W-600mm × Th-25mm</div><br/>
                                    <div className="spec-content">Also available in custom sizes</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Surface</div>
                                    <div className="spec-content">Raw, Fabric, Vinyl clothing or custom</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Material</div>
                                    <div className="spec-content">Wood Wool sound absorbing fibre</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Installation</div>
                                    <div className="spec-content">Spline-H, Studd 48 GI Channel</div>
                                </Card.Text>
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
                    <li>High sound absorption frequency, good effect on absorbing low, middle and high frequency noises with an NRC upto 0.95.</li><br/>
                    <li>B1 grade fire-proofing and E1 grade Enviromental protection.</li><br/>
                    <li>Inflammable, decorative and easy to install, unpolluted by dust.</li><br/>
                    <li>Various kinds of facings and colors of your choice, cloth can be supplied by customers.</li><br/><br/>
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
            <img className="carousel-image" src={audi1} alt="Slide 1" />
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

export default WoodWoolPanel;