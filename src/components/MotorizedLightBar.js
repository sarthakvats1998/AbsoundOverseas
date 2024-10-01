import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import curtain1 from '../assets/stageSystems/curtain1.jpeg';
import audi1 from '../assets/stageSystems/audi2.jpeg';

function motorizedLightBar() {

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
                        Motorized Light Bar
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
                    <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>The motorized system allows the light bar to be moved up, down, or even tilted remotely from the control booth, making it easy to adjust lighting angles and positions without manual labor.</li><br/>
                    <li>Lights can be lowered for maintenance, adjustments, or bulb changes and then raised back into position during a performance.</li><br/>
                    <li>In some productions, the motorized light bar can be programmed to move during a performance, creating dynamic lighting effects or revealing new parts of the stage.</li><br/>
                    <li>The ability to control the position of the lights electronically saves time and reduces the need for climbing ladders or using lifts to adjust lighting manually.</li><br/><br/>
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
                    <Col>
                        <Card className="custom-card" style={{width:'auto', textAlign:'center'}}>
                            <Card.Body>
                                <br/>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Motor</div>
                                    <div className="spec-content">1H.P. - 2H.P.</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Rope Wire</div>
                                    <div className="spec-content">G.I.</div>
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

export default motorizedLightBar;