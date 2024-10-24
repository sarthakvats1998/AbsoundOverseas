import React from 'react';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import prod1 from '../assets/perforatedPanel/prod1.png';
import prod2 from '../assets/perforatedPanel/prod2.jpeg';
import prod3 from '../assets/perforatedPanel/prod3.jpeg';
import albertaMaple from '../assets/albertaMaple.jpeg';
import bavarianBeech from '../assets/bavarianBeech.jpeg';
import floweryWenge from '../assets/floweryWenge.jpg';
import inntalBeech from '../assets/inntalBeech.jpeg';
import mahogany from '../assets/mahogany.jpg';
import mangfallBeech from '../assets/mangfallBeech.jpeg';
import naturalTeak from '../assets/naturalTeak.jpeg';
import oxfordCherry from '../assets/oxfordCherry.jpeg';
import pariaOak from '../assets/pariaOak.jpeg';
import sapelli from '../assets/sapelli.jpeg';
import swissOak from '../assets/swissOak.jpeg';
import thansauMaple from '../assets/thansauMaple.jpeg';
import audi1 from '../assets/perforatedPanel/audi1.jpeg';
import audi2 from '../assets/perforatedPanel/audi2.jpeg';
import audi3 from '../assets/perforatedPanel/audi3.jpg';
import pattern1 from '../assets/perforatedPanel/pattern1.jpg';
import pattern2 from '../assets/perforatedPanel/pattern2.jpg';
import pattern3 from '../assets/perforatedPanel/pattern3.jpg';
import pattern4 from '../assets/perforatedPanel/pattern4.jpg';
//import pattern1 from '../assets/perforatedPanel/pattern1.jpeg';

function PerforatedPanel() {
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
                        Perforated Acoustic Panel
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
                    <li>Absound Perforated Acoustic Panels have circular holes machined over the face of the panel.</li><br/>
                    <li>The base core board is a 12 mm, 15 mm, 16 mm, or 18 mm thick Medium / High Density Fiberboard (MDF, HDF) sheet with laminated finish to its front face and black acoustic felt adhered to its rear face.</li><br/>
                    <li>Absound Perforated Acoustic Panels are suitable for almost every application, including use in auditorims, lecture rooms, multiplexes, conference rooms, hotels, worship spaces, offices, airports, studios, and home theatres.</li><br/>
                    <li>Our Absound Perforated Acoustic Panels come with a 5-year warranty.</li><br/><br/>
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
                                    <div className="spec-content">12 mm, 15 mm, 16 mm, 18 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Sizes</div>
                                    <div className="spec-content">600 x 600 mm, 600 x 1200 mm, 1200 x 1200 mm,<br/>1200 x 2400 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Density</div>
                                    <div className="spec-content">750 - 800 Kg/m<sup>3</sup></div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Weight</div>
                                    <div className="spec-content">12 - 14 Kg/m<sup>2</sup></div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Acoustics</div>
                                    <div className="spec-content">NRC Of 0.6 - 0.83</div>
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
                                    <div className="spec-content">Medium / High Density Fibreboard (MDF, HDF)</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Edge</div>
                                    <div className="spec-content">Sqaure, Tegular, Tounge & Groove</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Installation</div>
                                    <div className="spec-content">T-24 Grid, 18 mm GI or Almn. Channel</div>
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
                <h2 className="heading-with-lines">Colours</h2>
            </div>
            <div className="patterns-container">
                <div className="pattern">
                    <img src={albertaMaple} alt="Colour 1" />
                    <p>Alberta Maple</p>
                </div>
                <div className="pattern">
                    <img src={bavarianBeech} alt="Colour 2" />
                    <p>Bavarian Beech</p>
                </div>
                <div className="pattern">
                    <img src={floweryWenge} alt="Colour 3" />
                    <p>Flowery Wenge</p>
                </div>
                <div className="pattern">
                    <img src={inntalBeech} alt="Colour 4" />
                    <p>Inntal Beech</p>
                </div>
                <div className="pattern">
                    <img src={mahogany} alt="Colour 5" />
                    <p>Mahogany</p>
                </div>
                <div className="pattern">
                    <img src={mangfallBeech} alt="Colour 6" />
                    <p>Mangfall Beech</p>
                </div>
                <div className="pattern">
                    <img src={naturalTeak} alt="Colour 7" />
                    <p>Natural Teak</p>
                </div>
                <div className="pattern">
                    <img src={oxfordCherry} alt="Colour 8" />
                    <p>Oxford Cherry</p>
                </div>
                <div className="pattern">
                    <img src={pariaOak} alt="Colour 9" />
                    <p>Paria Oak</p>
                </div>
                <div className="pattern">
                    <img src={sapelli} alt="Colour 10" />
                    <p>Sapelli</p>
                </div>
                <div className="pattern">
                    <img src={swissOak} alt="Colour 11" />
                    <p>Swiss Oak</p>
                </div>
                <div className="pattern">
                    <img src={thansauMaple} alt="Colour 12" />
                    <p>Thansau Maple</p>
                </div>
            </div>
            <br/><br/>

            <div className="heading-container">
                <h2 className="heading-with-lines">Patterns</h2>
            </div>
            <div className="patterns-container">
                <div className="pattern">
                    <img src={pattern1} alt="Pattern 1" />
                    <p>Perforated Panels D3/16</p>
                </div>
                <div className="pattern">
                    <img src={pattern2} alt="Pattern 2" />
                    <p>Perforated Panels D3/22</p>
                </div>
                <div className="pattern">
                    <img src={pattern3} alt="Pattern 3" />
                    <p>Perforated Panels D10/10</p>
                </div>
                <div className="pattern">
                    <img src={pattern4} alt="Pattern 4" />
                    <p>Perforated Panels D6/15</p>
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

export default PerforatedPanel;