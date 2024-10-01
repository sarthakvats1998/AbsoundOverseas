import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import curtain1 from '../assets/stageSystems/curtain1.jpeg';
import sideWings2 from '../assets/stageSystems/sideWings2.jpeg';

function SideWings() {

  return (
    <div>
        <Carousel className="custom-carousel" controls={false} indicators={false} style={{height:'650px'}}>
            <Carousel.Item style={{height:'650px'}}>
                <img
                    className="d-block w-100"
                    src={sideWings2}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                <div className='container product-name'>
                    <h1>	
                        Side Wings
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container">
            <img src={curtain1} className="img-fluid" alt="Slide 1" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
        </div>

        <br/>
        <div className='container'>
            <div className="heading-container">
                    <h2 className="heading-with-lines">Uses</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Staging and Preparation: Performers or props wait in the wings before they enter the stage.</li><br/>
                    <li>Set and Prop Storage: Items that will be used during a performance are kept here for quick access.</li><br/>
                    <li>Technical Equipment: Lighting and sound equipment might be placed in the wings to operate during the performance.</li><br/>
                    <li>Crew Movement: Stagehands and other technical crew members move props, sets, and equipment in and out of the stage via the wings.</li><br/><br/>
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
                                    <div className="spec-title">Height</div>
                                    <div className="spec-content">Custom</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Finish</div>
                                    <div className="spec-content">Fabric</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Mount</div>
                                    <div className="spec-content">Fixed / Rotatable</div>
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
                                    <div className="spec-title">Structure</div>
                                    <div className="spec-content">With Frame / Without Frame</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Framing</div>
                                    <div className="spec-content">Metal - As Per Design</div>
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

export default SideWings;