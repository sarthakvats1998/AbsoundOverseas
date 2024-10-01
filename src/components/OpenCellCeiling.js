import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import openCell2 from '../assets/metalCeiling/openCell2.jpg';
import openCell3 from '../assets/metalCeiling/openCell3.jpg';

function OpenCellCeiling() {

  return (
    <div>
        <Carousel className="custom-carousel" controls={false} indicators={false} style={{height:'600px'}}>
            <Carousel.Item style={{height:'600px'}}>
                <img
                    className="d-block w-100"
                    src={openCell3}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                <div className='container product-name'>
                    <h1>	
                        Open Cell Ceiling System
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container d-flex justify-content-center">
            <img src={openCell2} style={{width: 400, height: 400}} alt="Slide 1" />
        </div>
        
        <div className='container'>
            <div className="heading-container">
                <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Our Open Cell Ceiling System comes in G.I. or aluminium.</li><br/>
                    <li>The panels are easy to install and connect to each other with a lock-in system of main and cross.</li><br/>
                    <li>The triangular open cell ceiling system comes in 595mm X 595mm size.</li><br/><br/>
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
                                        75mm X 75mm
                                        <br/>
                                        100mm X 100mm
                                        <br/>
                                        150mm X 150mm
                                        <br/>
                                        200mm X 200mm
                                        <br/>
                                        300mm X 300mm
                                        <br/>
                                        Other custom dimentions also available</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Thickness</div>
                                    <div className="spec-content">0.35mm</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card" style={{width:'auto', textAlign:'center'}}>
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Width</div>
                                    <div className="spec-content">15mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Web Height</div>
                                    <div className="spec-content">50mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Finish</div>
                                    <div className="spec-content">Powder Coated</div>
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
                        <li>Custom colours available.</li>
                    </ul>
                </div>
            </div><br/><br/>
        </div>
    </div>
  );
}

export default OpenCellCeiling;