import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import sideLadder from '../assets/stageSystems/sideLadder.jpg';
import audi1 from '../assets/stageSystems/audi2.jpeg';

function SideLadder() {

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
                        Side Ladder
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container d-flex justify-content-center">
                <img src={sideLadder} style={{width: 450, height: 450}} alt="Slide 1" />
        </div>
        <br/>
        <div className='container'>
            <div className="heading-container">
                    <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Side ladders are often used to hang vertical rows of lighting fixtures that can illuminate the stage from the sides, providing sidelight, which helps add depth and dimension to performers.</li><br/>
                    <li>They can sometimes hold projection screens or scenic elements, creating vertical surfaces for lighting effects, projections, or video displays.</li><br/>
                    <li>Since they are positioned in the wings, side ladder screens are out of the audience’s direct view, but their lighting or scenic effects can spill onto the stage.</li><br/>
                    <li>They can be part of temporary setups for specific productions or be a permanent part of a theater's rigging system.</li><br/><br/>
                </ul>
            </div>
            <br/>
            <div className="heading-container">
                <h2 className="heading-with-lines">Specifications</h2>
            </div>
            <div>
            <Row className='justify-content-center'>
                <br/>
                    <Col xs="auto">
                        <Card className="custom-card" style={{width:'400px', textAlign:'center'}}>
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Size</div>
                                    <div className="spec-content">Custom</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Finish</div>
                                    <div className="spec-content">Paint</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Material</div>
                                    <div className="spec-content">Metal</div>
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

export default SideLadder;