import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import carousel1 from '../assets/carousel1.jpeg';
import carousel3 from '../assets/carousel3.jpeg';
import audi11 from '../assets/audi11.jpeg';
import door3 from '../assets/doors/door3.jpeg';
import stage1 from '../assets/stageSystems/stage1.jpg';
import metalCeiling from '../assets/metalCeiling/metalCeiling.jpg';

import '../styles/ProductCards.css';

function ProductCards(props) {
    return (
        <div className="container prod-margin">
            <p className='display-3 font-weight-bold'>Premier Acoustic Products and Design Services</p>
            <p style={{color: '#989898'}}>Unmatched acoustic expertise for diverse applications.</p>
            <br/>

            <Card className="my-3 border-0">
                <Card.Body className="d-flex flex-column align-items-start">
                    <Row className="align-items-center w-100" style={{height:'100%'}}>
                        <Col xs={12} md={6} style={{height:'100%'}} className="order-xs-1 order-md-1">
                            <Image src={audi11} className="w-100" style={{ paddingRight: '25px', height: '100%', objectFit: 'cover' }} />
                        </Col>
                        <Col xs={12} md={6} className="order-xs-2 order-md-2">
                            <Card.Title className="display-4 font-weight-bold"><p>Wall Panels</p></Card.Title>
                            <Card.Text className="lead">
                                <p style={{fontSize:'18px'}}>
                                    Absound Overseas offers best-in-class wall panels with excellent acoustic absorption for public and private spaces, auditoriums, theaters, hotels, offices, etc. 
                                </p>
                                <div className='button-group'>
                                    <Link to="/wallPanels"><Button className='explore-button'>Explore</Button></Link>
                                </div>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className="my-3 border-0">
                <Card.Body className="d-flex flex-column align-items-start">
                    <Row className="align-items-center w-100" style={{height:'100%'}}>
                        <Col xs={12} md={6} style={{height:'100%'}} className="order-xs-1 order-md-2">
                            <Image src={carousel1} className="w-100" style={{ paddingRight: '25px', height: '100%', objectFit: 'cover' }} />
                        </Col>
                        <Col xs={12} md={6} className="order-xs-2 order-md-1">
                            <Card.Title className="display-4 font-weight-bold"><p>Acoustic Ceilings</p></Card.Title>
                            <Card.Text>
                                <p style={{fontSize:'18px'}}>
                                Absound Overseas provides a premium selection of acoustic ceiling tiles and panels designed to optimize sound absorption and enhance the acoustic environment in any space. 
                                Perfect for auditoriums, offices, studios, and more, our ceiling solutions combine functionality with aesthetic appeal to deliver superior sound management. 
                                </p>
                                <div className='button-group'>
                                    <Link to="/acousticCeilings"><Button className='explore-button'>Explore</Button></Link>
                                </div>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className="my-3 border-0">
                <Card.Body className="d-flex flex-column align-items-start">
                    <Row className="align-items-center w-100" style={{height:'100%'}}>
                        <Col xs={12} md={6} style={{height:'100%'}} className="order-xs-1 order-md-1">
                            <Image src={carousel3} className="w-100" style={{ paddingRight: '25px', height: '100%', objectFit: 'cover' }} />
                        </Col>
                        <Col xs={12} md={6} className="order-xs-2 order-md-2">
                            <Card.Title className="display-4 font-weight-bold"><p>Seating Systems</p></Card.Title>
                            <Card.Text>
                                <p style={{fontSize:'18px'}}>
                                    Absound Overseas provides world-class seating systems, brilliantly engineered to meet international standards. Our chairs are elegant, durable, and luxurious, constructed with heavy-gauge prime steel for long-lasting performance.
                                    They are designed to provide strain-free, comfortable seating for extended periods. All our products are ergonomically designed and distinguished by their exceptional quality.
                                </p>
                                <div className='button-group'>
                                    <Link to="/seatingSystems"><Button className='explore-button'>Explore</Button></Link>
                                </div>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        
            <Card className="my-3 border-0">
                <Card.Body className="d-flex flex-column align-items-start">
                    <Row className="align-items-center w-100" style={{height:'100%'}}>
                        <Col xs={12} md={6} style={{height:'100%'}} className="order-xs-1 order-md-2">
                            <Image src={door3} className="w-100" style={{ paddingRight: '25px', height: '100%', objectFit: 'cover' }} />
                        </Col>
                        <Col xs={12} md={6} className="order-xs-2 order-md-1">
                            <Card.Title className="display-4 font-weight-bold"><p>Acoustic Doors</p></Card.Title>
                            <Card.Text>
                                <p style={{fontSize:'18px'}}>
                                    Absound Overseas offers a versatile range of high-quality timber acoustic doors, including fire-resistant options, designed to enhance soundproofing and safety 
                                    in auditoriums, conference rooms, broadcasting studios, theatres and music practice rooms where noise pollution is a major concern. 
                                </p>
                                <div className='button-group'>
                                    <Link to="/acousticDoors"><Button className='explore-button'>Explore</Button></Link>
                                </div>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className="my-3 border-0">
                <Card.Body className="d-flex flex-column align-items-start">
                    <Row className="align-items-center w-100" style={{height:'100%'}}>
                        <Col xs={12} md={6} style={{height:'100%'}} className="order-xs-1 order-md-1">
                            <Image src={stage1} className="w-100" style={{ paddingRight: '25px', height: '100%', objectFit: 'cover' }} />
                        </Col>
                        <Col xs={12} md={6} className="order-xs-2 order-md-2">
                            <Card.Title className="display-4 font-weight-bold"><p>Stage Systems</p></Card.Title>
                            <Card.Text>
                                <p style={{fontSize:'18px'}}>
                                Absound Overseas offers an extensive range of stage systems, including advanced stage lighting, premium stage curtains, durable flooring, and comprehensive stage services. 
                                Our products are designed to elevate performance spaces, ensuring professional-grade setups for theaters, auditoriums, and event venues. 
                                </p>
                                <div className='button-group'>
                                    <Link to="/stageSystems"><Button className='explore-button'>Explore</Button></Link>
                                </div>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className="my-3 border-0">
                <Card.Body className="d-flex flex-column align-items-start">
                    <Row className="align-items-center w-100" style={{height:'100%'}}>
                        <Col xs={12} md={6} style={{height:'100%'}} className="order-xs-1 order-md-2">
                            <Image src={metalCeiling} className="w-100" style={{ paddingRight: '25px', height: '100%', objectFit: 'cover' }} />
                        </Col>
                        <Col xs={12} md={6} className="order-xs-2 order-md-1">
                            <Card.Title className="display-4 font-weight-bold"><p>Metal Ceilings</p></Card.Title>
                            <Card.Text>
                                <p style={{fontSize:'18px'}}>
                                Absound Overseas offers world-class metal ceilings, meticulously crafted to meet international standards. Our ceilings are durable, elegant, and built with high-grade materials to ensure longevity and superior performance. 
                                Designed for both functionality and aesthetics, they provide excellent acoustic properties while enhancing the visual appeal of any space. All our products are engineered with precision and distinguished by their exceptional quality. 
                                </p>
                                <div className='button-group'>
                                    <Link to="/metalCeilings"><Button className='explore-button'>Explore</Button></Link>
                                </div>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        </div>
    );
}

export default ProductCards;
