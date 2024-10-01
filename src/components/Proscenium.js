import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import proscenium from '../assets/stageSystems/proscenium.jpeg';
import audi1 from '../assets/stageSystems/audi2.jpeg';

function Proscenium() {

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
                        Proscenium
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container">
                <img src={proscenium} style={{width: 550, height: 500, marginLeft: 125}} alt="Slide 1" />
        </div>
        <br/>
        <div className='container'>
            <div className="heading-container">
                <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Proscenium is the defining architectural feature, a large frame that outlines the stage. It creates a clear division between the audience and the performance area.</li><br/>
                    <li>The audience watches the action from one direction, straight on, which creates a "picture frame" effect for the performance.</li><br/>
                    <li>The main stage curtain typically hangs within or just behind the proscenium arch.</li><br/>
                    <li>Located between the audience and the stage, allowing for live musical accompaniment.</li><br/><br/>
                </ul>
            </div>
            <br/>
            <div className="heading-container">
                <h2 className="heading-with-lines">Specifications</h2>
            </div>
            <div>
            <Row className="justify-content-center">
                <br/>
                <Col xs="auto">
                    <Card className="custom-card" style={{ width: '400px', textAlign: 'center' }}>
                        <Card.Body>
                            <Card.Text>
                                <div className="spec-title">Size</div>
                                <div className="spec-content">Custom</div>
                            </Card.Text>
                            <br/>
                            <Card.Text>
                                <div className="spec-title">Finish</div>
                                <div className="spec-content">As Per Choice</div>
                            </Card.Text>
                            <br/>
                            <Card.Text>
                                <div className="spec-title">Framing</div>
                                <div className="spec-content">M.S. Frame</div>
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

export default Proscenium;