import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import audi1 from '../assets/stageSystems/audi2.jpeg';
import woodenFlooring from '../assets/stageSystems/sideWings2.jpeg';

function WoodenFloor() {

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
                        Wooden Flooring
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container">
            <img src={woodenFlooring} className="img-fluid" alt="Slide 1" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
        </div>

        <br/>
        <div className='container'>
            <div className="heading-container">
                <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <p>Types of wooden floorings:</p>
                <ul>
                    <li>Teak wood</li><br/>
                    <li>Maple wood</li><br/>
                    <li>Rubber wood</li><br/>
                    <li>Parquet</li><br/>
                    <li>Engineering wood</li><br/><br/>
                </ul>
            </div>
            <br/>
            <div className="heading-container">
                <h2 className="heading-with-lines">Specifications</h2>
            </div>
            <div>
            <Row>
                <br/>
                    <Col>
                        <Card className="custom-card" style={{width:'auto', textAlign:'center'}}>
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Thickness</div>
                                    <div className="spec-content">15mm - 25mm</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Finish</div>
                                    <div className="spec-content">Natural, Polish, Matte</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Insulation</div>
                                    <div className="spec-content">Polyester Wool, EPE Foam</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card" style={{width:'auto', textAlign:'center'}}>
                            <Card.Body>
                                <br/>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Framing</div>
                                    <div className="spec-content">Wooden / Metal / Neoprene Rubber / Directly On The Floor</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Flooring Life</div>
                                    <div className="spec-content">5 Years</div>
                                </Card.Text>
                                <br/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div><br/><br/>
        </div>
    </div>
  );
}

export default WoodenFloor;