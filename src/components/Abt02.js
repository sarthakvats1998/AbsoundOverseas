import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import abt02 from '../assets/seatingSystems/abt02.jpg';
import audi1 from '../assets/audi4.jpeg';

function Abt02() {

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
                        ABT - 02
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container d-flex justify-content-center">
            <img src={abt02} style={{width: 350, height: 400}} alt="Slide 1" />
        </div>
        
        <div className='container'>
            <div className="heading-container">
                <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>The chair comes with auto tip-up seats.</li><br/>
                    <li>Type of backrest - fixed.</li><br/>
                    <li>This chair is mostly used in auditoriums.</li><br/><br/>
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
                                    <div className="spec-title">Seat Width</div>
                                    <div className="spec-content">475 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Seat Depth</div>
                                    <div className="spec-content">510 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Seat Thickness</div>
                                    <div className="spec-content">125 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Foam Density</div>
                                    <div className="spec-content">48 Kg</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Backrest Width</div>
                                    <div className="spec-content">475 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Backrest Height</div>
                                    <div className="spec-content">1020 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Backrest Thickness</div>
                                    <div className="spec-content">100 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Foam Density</div>
                                    <div className="spec-content">48 Kg</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">GENERAL DIMENSIONS:</div> <br/>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Arm to Arm Outer Width</div>
                                    <div className="spec-content">625 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Center to Center Width</div>
                                    <div className="spec-content">550 mm</div>
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
                    <li>Custom colours available.</li>
                </ul>
            </div>
            <br/><br/>
        </div>
    </div>
  );
}

export default Abt02;