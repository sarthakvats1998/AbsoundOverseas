import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import linearCeiling1 from '../assets/metalCeiling/linearCeiling1.jpg';
import linearCeiling2 from '../assets/metalCeiling/linearCeiling2.jpg';

function LinearCeiling() {

  return (
    <div>
        <Carousel className="custom-carousel" controls={false} indicators={false} style={{height:'600px'}}>
            <Carousel.Item style={{height:'600px'}}>
                <img
                    className="d-block w-100"
                    src={linearCeiling2}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                <div className='container product-name'>
                    <h1>	
                        Linear Ceiling System
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container d-flex justify-content-center">
            <img src={linearCeiling1} style={{width: 400, height: 400}} alt="Slide 1" />
        </div>
        
        <div className='container'>
            <div className="heading-container">
                <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Our Linear Ceiling System comes in coil-coated G.I. or aluminium substrates.</li><br/><br/>
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
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Size</div>
                                    <div className="spec-content">
                                        84mm X 16mm
                                        <br/>
                                        84mm X 12.5mm
                                        <br/>
                                        150mm X 17mm
                                        <br/>
                                        300mm X 30mm
                                    </div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Thickness</div>
                                    <div className="spec-content">0.5mm / 0.70mm / 0.9mm</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card" style={{width:'auto', textAlign:'center'}}>
                            <Card.Body>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Finish</div>
                                    <div className="spec-content">Plain / Perforated</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Perforation</div>
                                    <div className="spec-content">1.8mm / 2.5mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Panel Length</div>
                                    <div className="spec-content">5-6 meters</div>
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

export default LinearCeiling;