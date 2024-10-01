import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import curtain1 from '../assets/stageSystems/curtain1.jpeg';
import audi1 from '../assets/stageSystems/stageCurtainsAudi.jpeg';

function Curtain() {

  return (
    <div>
        <Carousel className="custom-carousel" controls={false} indicators={false} style={{height:'650px'}}>
            <Carousel.Item style={{height:'650px'}}>
                <img
                    className="d-block w-100"
                    src={audi1}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                <div className='container product-name'>
                    <h1>	
                        Stage Curtains
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>
        
        <div className='container'>
            <div className="heading-container">
                <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <p>The stage curtain has various parts:</p>
                <ul>
                    <li>Front curtain</li><br/>
                    <li>Mid curtain</li><br/>
                    <li>Back curtain</li><br/>
                    <li>Frills</li><br/>
                    <li>Side wings</li><br/><br/>
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
                                    <div className="spec-title">Front Curtain and Frill:</div> <br/>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Material</div>
                                    <div className="spec-content">Velvet</div><br/>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Weight</div>
                                    <div className="spec-content">As Per Choice</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                    <Card.Text>
                                        <div className="spec-title">Mid / Back Curtain and Frill:</div> <br/>
                                    </Card.Text>
                                    <Card.Text>
                                        <div className="spec-title">Material</div>
                                        <div className="spec-content">Glazed Cotton / Crape Fabric</div><br/>
                                    </Card.Text>
                                    <Card.Text>
                                        <div className="spec-title">Weight</div>
                                        <div className="spec-content">As Per Choice</div>
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Side Wings:</div> <br/>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Material</div>
                                    <div className="spec-content">M.S. Frame / Fabric / Custom</div><br/>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title"></div>
                                    <div className="spec-content">As Per Choice</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div><br/><br/>

            <div className="heading-container">
                <h2 className="heading-with-lines">Colours</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Custom colours available</li>
                </ul>
            </div>
            <br/><br/>
            <div className="carousel-container">
                <img src={curtain1} style={{width: 600, height: 400, marginLeft: -50}} alt="Slide 1" />
            </div>
        </div>
    </div>
  );
}

export default Curtain;