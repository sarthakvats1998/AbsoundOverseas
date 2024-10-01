import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import cycloramaScreen from '../assets/stageSystems/cycloramaScreen.jpeg';
import CycloramaScreen2 from '../assets/stageSystems/CycloramaScreen2.jpeg';

function CycloramaScreen() {

  return (
    <div>
        <Carousel className="custom-carousel" controls={false} indicators={false} style={{height:'650px'}}>
            <Carousel.Item style={{height:'650px'}}>
                <img
                    className="d-block w-100"
                    src={CycloramaScreen2}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                <div className='container product-name'>
                    <h1>	
                        Cyclorama Screen
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container">
                <img src={cycloramaScreen} style={{width: 600, height: 400, marginLeft: 125}} alt="Slide 1" />
        </div>
        <br/>
        <div className='container'>
            <div className="heading-container">
                <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Cyclorama screens are commonly made from white or light-colored materials and are often paired with specialized lighting to achieve various visual effects.</li><br/>
                    <li>The screen can be lit with different colors or patterns to create various atmospheres, such as sunsets, clouds, or abstract lighting designs.</li><br/>
                    <li>When properly lit, a cyclorama can give the impression that the stage extends far beyond its actual physical limits, creating a sense of depth.</li><br/>
                    <li>It can also be used as a surface for projecting images, videos, or scenery, enhancing the stage design.</li><br/>
                    <li>Cycloramas are usually curved to eliminate shadows and create a seamless, horizon-like background, though flat cycloramas are also used.</li><br/><br/>
                </ul>
            </div>
            <br/>
            <div className="heading-container">
                <h2 className="heading-with-lines">Specifications</h2>
            </div>
            <div>
            <Row style={{marginLeft:'105px'}}>
                <br/>
                    <Col>
                        <Card className="custom-card" style={{width:'400px', textAlign:'center'}}>
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Size</div>
                                    <div className="spec-content">Custom</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Fabric</div>
                                    <div className="spec-content">PVC, Perforated, Mid - Gain, Hi - Gain</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Screen Type</div>
                                    <div className="spec-content">Flat, Curve</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card" style={{width:'400px', textAlign:'center'}}>
                            <Card.Body>
                                <br/>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Framing</div>
                                    <div className="spec-content">Metal</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Life</div>
                                    <div className="spec-content">1 Year</div>
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

export default CycloramaScreen;