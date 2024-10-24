import React from 'react';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import prod1 from '../assets/melamianoPanel/prod1.jpg';
import prod2 from '../assets/melamianoPanel/prod2.jpg';
import prod3 from '../assets/melamianoPanel/prod3.jpeg';
import audi1 from '../assets/melamianoPanel/audi1.jpeg';
import audi2 from '../assets/melamianoPanel/audi2.jpeg';
import audi4 from '../assets/melamianoPanel/audi4.jpg';

function MelamianoPanel() {
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
                        Melamiano Panel
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
                    <li>Absound Melamino Panel is a lightweight, open-cell material manufactured from Melamine resin, representing the latest acoustic solutions technology.</li><br/>
                    <li>It is recommended for acoustical and thermal insulation in various applications due to its outstanding resistance to high heat, smoke, and low flame propagation. Melamine Foam does not drip in the presence of a flame and immediately stops burning after removing any external ignition source and fuel.</li><br/>
                    <li>Polyurethane film is a tough, abrasion-resistant surface that resists punctures and tears. It also exhibits good resistance to chemicals and moisture. 
                        Its unique weathering, mechanical, electrical, chemical, and stain-resistant properties make it an ideal protective surfacing material.</li><br/>
                    <li>Our Absound Melamino Panels come with a 5-year warranty.</li><br/><br/>
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
                                    <div className="spec-content">20 mm, 25 mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Density</div>
                                    <div className="spec-content">6-12 Kg/m<sup>3</sup></div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Weight</div>
                                    <div className="spec-content">0.4-0.10 Kg/m<sup>2</sup></div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Acoustics</div>
                                    <div className="spec-content">NRC Of 0.90</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Fire</div>
                                    <div className="spec-content">Class O</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Light (%)</div>
                                    <div className="spec-content">85%</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Tensile Strength (Kpa)</div>
                                    <div className="spec-content">120</div>
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
                                    <div className="spec-title">Core</div>
                                    <div className="spec-content">Foam</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Edge</div>
                                    <div className="spec-content">Square, Bevelled</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Installation</div>
                                    <div className="spec-content">Adhesive</div>
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
                <h2 className="heading-with-lines">Application</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Melamine Foam is used for acoustic solutions in wall paneling and ceiling systems, including dome acoustics.</li><br/>
                    <li>Absound Melamino Panel is used in areas where echo and other reverberation need to be controlled.</li><br/>
                    <li>Applications include auditoriums, convention centers, seminar halls, hospitals, educational institutes, restaurants and cafeterias, office buildings, manufacturing facilities, and machine enclosures.</li><br/><br/>
                </ul>
            </div>

            <div className="heading-container">
                <h2 className="heading-with-lines">Colours</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>White</li>
                    <li>Grey</li>
                    <li>Fabric Finished</li>
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
                <img className="carousel-image" src={audi4} alt="Slide 4" />
            </div>
        </Slider>
        </div>
    </div>
  );
}

export default MelamianoPanel;