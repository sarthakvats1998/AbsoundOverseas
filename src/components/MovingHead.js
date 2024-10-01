import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import movingHead from '../assets/stageSystems/movingHead.jpg';
import audi1 from '../assets/stageSystems/audi1.jpg';

function MovingHead() {

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
                        Moving Head
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container d-flex justify-content-center">
            <img src={movingHead} style={{width: 350, height: 400}} alt="Slide 1" />
        </div>
        
        <div className='container'>

            <div className="heading-container">
                <h2 className="heading-with-lines">Specifications</h2>
            </div>
            <div>
                <Row style={{marginLeft:'105px'}}>
                    <Col>
                        <Card className="custom-card" style={{width:'400px', textAlign:'center'}}>
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Power Consumption</div>
                                    <div className="spec-content">Variable</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Input Voltage</div>
                                    <div className="spec-content">AC 100V - 240V, 50-60Hz</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">CRI</div>
                                    <div className="spec-content">90+</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card" style={{width:'400px', textAlign:'center'}}>
                            <Card.Body>
                                <br/><br/>
                                <Card.Text>
                                    <div className="spec-title">Color Temperature (CCT)</div>
                                    <div className="spec-content">6800K</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Working Temperature</div>
                                    <div className="spec-content">+45° ~ -30°</div>
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

export default MovingHead;