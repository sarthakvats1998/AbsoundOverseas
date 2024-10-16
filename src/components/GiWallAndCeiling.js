import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import wallCeiling2 from '../assets/metalCeiling/wallCeiling2.jpg';
import wallSection from '../assets/metalCeiling/wallSection.jpg';
import ceilingSection from '../assets/metalCeiling/ceilingSection.jpeg';


function GiWallAndCeiling() {

    return (
        <div>
            <Carousel className="custom-carousel" controls={false} indicators={false} style={{height:'600px'}}>
                <Carousel.Item style={{height:'600px'}}>
                    <img
                        className="d-block w-100"
                        src={wallCeiling2}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                    <div className='container product-name'>
                        <h1>	
                            G.I. Ceiling And Wall System
                        </h1>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br/><br/><br/>
            <div className="heading-container">
                <h1>Ceiling Section</h1>
            </div>
            <div className="carousel-container d-flex justify-content-center">
                <img src={ceilingSection} style={{width: 350, height: 400}} alt="Slide 1" />
            </div>
            
            <div className='container'>
                <div className="heading-container">
                    <h2 className="heading-with-lines">The Product</h2>
                </div>
                <div className='bullet'>
                    <ul>
                        <li>GI ceiling sections provide stability, durability, and resistance to moisture, making them ideal for use in different types of ceilings, including gypsum board, wooden acoustic panel, acoustic ceiling tile, metal ceiling, etc.</li><br/>
                        <li>These sections are made from galvanized iron to prevent rusting and are part of the framework that supports the ceiling boards or tiles.</li><br/><br/>
                    </ul>
                </div>
    
                <div className="heading-container">
                    <h2 className="heading-with-lines">Specifications</h2>
                </div>
                <div>
                    <Row style={{ height: 'auto' }}>
                        <Col style={{ height: 'auto' }}>
                        <h5 style={{ textAlign: 'center' }}>Ceiling Section</h5>
                        <Card className="custom-card" style={{ textAlign: 'center', height: '430px' }}>
                            <Card.Body>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Thickness</div>
                                    <div className="spec-content">0.50mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Dimensions</div>
                                    <div className="spec-content">80mm X 26mm X 51mm X 3660mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Basic Steel</div>
                                    <div className="spec-content">Cold rolled steel.</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Galvanization</div>
                                    <div className="spec-content">Hot dip galvanized (120 gsm)</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col style={{ height: 'auto' }}>
                        <h5 style={{ textAlign: 'center' }}>Intermediate Channel</h5>
                        <Card className="custom-card" style={{ textAlign: 'center', height: '430px' }}>
                            <Card.Body>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Thickness</div>
                                    <div className="spec-content">0.70mm - 0.90mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Dimensions</div>
                                    <div className="spec-content">15mm X 45mm X 15mm X 3660mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Basic Steel</div>
                                    <div className="spec-content">Cold rolled steel.</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Galvanization</div>
                                    <div className="spec-content">Hot dip galvanized (120 gsm)</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row style={{ height: 'auto' }}>
                        <Col style={{ height: 'auto' }}>
                        <h5 style={{ textAlign: 'center' }}>Perimeter Channel</h5>
                        <Card className="custom-card" style={{ textAlign: 'center', height: '430px' }}>
                            <Card.Body>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Thickness</div>
                                    <div className="spec-content">0.50mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Dimensions</div>
                                    <div className="spec-content">20mm X 28mm X 30mm X 3660mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Basic Steel</div>
                                    <div className="spec-content">Cold rolled steel.</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Galvanization</div>
                                    <div className="spec-content">Hot dip galvanized (120 gsm)</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col style={{ height: 'auto' }}>
                        <h5 style={{ textAlign: 'center' }}>Ceiling Angle</h5>
                        <Card className="custom-card" style={{ textAlign: 'center', height: '430px' }}>
                            <Card.Body>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Thickness</div>
                                    <div className="spec-content">0.50mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Dimensions</div>
                                    <div className="spec-content">25mm X 10mm X 3660mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Basic Steel</div>
                                    <div className="spec-content">Cold rolled steel.</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Galvanization</div>
                                    <div className="spec-content">Hot dip galvanized (120 gsm)</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            <br/><br/><br/>
            <div className="heading-container">
                <h1>Wall Section</h1>
            </div>
            <div className="carousel-container d-flex justify-content-center">
                <img src={wallSection} style={{width: 350, height: 400}} alt="Slide 1" />
            </div>
            
            <div className='container'>
                <div className="heading-container">
                    <h2 className="heading-with-lines">The Product</h2>
                </div>
                <div className='bullet'>
                    <ul>
                        <li>GI wall sections mainly include stud and floor channels, which form the skeleton of the wall, onto which finishing materials are fixed.</li><br/>
                        <li>These are lightweight, durable, and commonly used in commercial and residential construction for non-load-bearing walls.</li><br/><br/>
                    </ul>
                </div>
    
                <div className="heading-container">
                    <h2 className="heading-with-lines">Specifications</h2>
                </div>
                <div>
                    <Row style={{ height: 'auto' }}>
                        <Col style={{ height: 'auto' }}>
                            <h5 style={{ textAlign: 'center' }}>Stud Section</h5>
                            <Card className="custom-card" style={{ textAlign: 'center', height: '430px' }}>
                                <Card.Body>
                                    <Card.Text>
                                        <div className="spec-title">Thickness</div>
                                        <div className="spec-content">0.50mm</div>
                                    </Card.Text>
                                    <br/>
                                    <Card.Text>
                                        <div className="spec-title">Dimensions</div>
                                        <div className="spec-content">50mm X 32mm X 32mm X 3660mm</div>
                                        <div className="spec-content">72mm X 32mm X 32mm X 3660mm</div>
                                    </Card.Text>
                                    <br/>
                                    <Card.Text>
                                        <div className="spec-title">Basic Steel</div>
                                        <div className="spec-content">Cold rolled steel.</div>
                                    </Card.Text>
                                    <br/>
                                    <Card.Text>
                                        <div className="spec-title">Galvanization</div>
                                        <div className="spec-content">Hot dip galvanized (120 gsm)</div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col style={{ height: 'auto' }}>
                            <h5 style={{ textAlign: 'center' }}>Floor Channel</h5>
                            <Card className="custom-card" style={{ textAlign: 'center', height: '430px' }}>
                                <Card.Body>
                                    <Card.Text>
                                        <div className="spec-title">Thickness</div>
                                        <div className="spec-content">0.50mm</div>
                                    </Card.Text>
                                    <br/>
                                    <Card.Text>
                                        <div className="spec-title">Dimensions</div>
                                        <div className="spec-content">48mm X 34mm X 36mm X 3050 / 3660mm</div>
                                        <div className="spec-content">70mm X 34mm X 36mm X 3050 / 3660mm</div>
                                    </Card.Text>
                                    <br/>
                                    <Card.Text>
                                        <div className="spec-title">Basic Steel</div>
                                        <div className="spec-content">Cold rolled steel.</div>
                                    </Card.Text>
                                    <br/>
                                    <Card.Text>
                                        <div className="spec-title">Galvanization</div>
                                        <div className="spec-content">Hot dip galvanized (120 gsm)</div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div><br/><br/>
            </div>
        </div>
      );
}

export default GiWallAndCeiling;