import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import metalBaffle from '../assets/metalCeiling/metalBaffle.jpg';
import metalBaffle3 from '../assets/metalCeiling/metalBaffle2.jpg';

function MetalBaffleCeiling() {

  return (
    <div>
        <Carousel className="custom-carousel" controls={false} indicators={false} style={{height:'600px'}}>
            <Carousel.Item style={{height:'600px'}}>
                <img
                    className="d-block w-100"
                    src={metalBaffle}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                <div className='container product-name'>
                    <h1>	
                        Metal Baffle Ceiling
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container d-flex justify-content-center">
            <img src={metalBaffle3} style={{width: 400, height: 400}} alt="Slide 1" />
        </div>
        
        <div className='container'>
            <div className="heading-container">
                <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Our Metal Baffle Ceiling comes in G.I. and aluminium.</li><br/>
                    <li>Baffles that mount up in the ceiling are one of the most effective methods to reduce reverberation and noice because both the sides of the baffle are exposed to the room.</li><br/><br/>
                </ul>
            </div>

            <div className="heading-container">
                <h2 className="heading-with-lines">Specifications</h2>
            </div>
            <div>
                <Row>
                    <Col>
                        <Card className="custom-card" style={{width:'auto', textAlign:'center'}}>
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Size</div>
                                    <div className="spec-content">
                                        25 X 100 mm<br/>
                                        25 X 150 mm<br/>
                                        50 X 150 mm<br/>
                                        50 X 50 mm<br/>
                                        50 X 75 mm<br/>
                                        50 X 100 mm<br/>
                                    </div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Thickness</div>
                                    <div className="spec-content">0.5mm / 0.70mm</div>
                                </Card.Text>
                                <br/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card" style={{width:'auto', textAlign:'center'}}>
                            <Card.Body>
                                <br/>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Gap</div>
                                    <div className="spec-content">50mm / 100mm / 150mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Finish</div>
                                    <div className="spec-content">Plain / Perforated</div>
                                </Card.Text>
                                <br/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <br/>
                <div className="heading-container">
                    <h2 className="heading-with-lines">Colours</h2>
                </div>
                <div className='bullet'>
                    <ul>
                        <li>Any RAL colours.</li>
                    </ul>
                </div>
            </div><br/><br/>
        </div>
    </div>
  );
}

export default MetalBaffleCeiling;