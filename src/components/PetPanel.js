import React from 'react';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import carousel3 from '../assets/carousel3.jpeg';
import audi7 from '../assets/audi7.jpeg';
import audi1 from '../assets/petPanel/audi1.jpeg';
import audi2 from '../assets/petPanel/audi2.jpg';
import prod2 from '../assets/petPanel/prod2.jpeg';
import prod3 from '../assets/petPanel/prod3.jpeg';
import prod4 from '../assets/petPanel/prod4.jpeg';
import color001 from '../assets/petPanel/C001.jpeg';
import color002 from '../assets/petPanel/C002.jpeg';
import color003 from '../assets/petPanel/C003.jpeg';
import color004 from '../assets/petPanel/C004.jpeg';
import color005 from '../assets/petPanel/C005.jpeg';
import color006 from '../assets/petPanel/C006.jpeg';
import color007 from '../assets/petPanel/C007.jpeg';
import color008 from '../assets/petPanel/C008.jpeg';
import color009 from '../assets/petPanel/C009.jpeg';
import color010 from '../assets/petPanel/C010.jpeg';
import color011 from '../assets/petPanel/C011.jpeg';
import color012 from '../assets/petPanel/C012.jpeg';
import color013 from '../assets/petPanel/C013.jpeg';
import color014 from '../assets/petPanel/C014.jpeg';
import color015 from '../assets/petPanel/C015.jpeg';
import color016 from '../assets/petPanel/C016.jpeg';
import color017 from '../assets/petPanel/C017.jpeg';
import color018 from '../assets/petPanel/C018.jpeg';
import color019 from '../assets/petPanel/C019.jpeg';
import color020 from '../assets/petPanel/C020.jpeg';

function PetPanel() {
  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 2,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
        },
      },
    ],
  };

  return (
    <div>
        <Carousel className="custom-carousel" controls={false} indicators={false} style={{height:'600px'}}>
            <Carousel.Item style={{height:'600px'}}>
                <img
                    className="d-block w-100"
                    src={carousel3}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                <div className='container product-name'>
                    <h1>	
                        PET Panel
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container">
        <Slider {...settings}>
            <div>
            <img className="carousel-image" src={prod4} alt="Slide 1" />
            </div>
            <div>
            <img className="carousel-image" src={prod2} alt="Slide 2" />
            </div>
            <div>
            <img className="carousel-image" src={prod3} alt="Slide 3" />
            </div>
        </Slider>
        </div>
        
        <div className='container'>
            <div className="heading-container">
                <h2 className="heading-with-lines">The Product</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Absound PET Panels are the ideal decorative wall and ceiling treatment for areas where sound and noise control are a consideration.</li><br/>
                    <li>The panels are made from 100% polyester and are 100% recyclable</li><br/>
                    <li>Absound PET Panels are the ideal decorative wall and ceiling treatment for areas where sound and noise control are considerations. 
                        Absound decorative and acoustical panels are suitable for almost every application, including use in auditoriums, conference areas, libraries, schools, public buildings, or any space where acoustics, aesthetics, and value are important.</li><br/>
                    <li>Our PET Panels come with a 5-year warranty.</li><br/><br/>
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
                                    <div className="spec-title">Thickness</div>
                                    <div className="spec-content">9 mm, 12 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Size</div>
                                    <div className="spec-content">2420 mm x 1220 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Density</div>
                                    <div className="spec-content">200 Kg/m<sup>3</sup></div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Weight</div>
                                    <div className="spec-content">2 Kg/m<sup>2</sup></div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Acoustics</div>
                                    <div className="spec-content">NRC Of 0.80</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Fire</div>
                                    <div className="spec-content">Class A</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Light (%)</div>
                                    <div className="spec-content">Colour Dependant</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Thermal Conductivity</div>
                                    <div className="spec-content">0.033 W/(m.k)</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Core</div>
                                    <div className="spec-content">Polyester Fibre</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Edge</div>
                                    <div className="spec-content">Square</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Installation</div>
                                    <div className="spec-content">Adhesive, T 15/24 Grid</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Maintenance</div>
                                    <div className="spec-content">Vaccum Cleaner</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div><br/><br/>

            <div className="heading-container">
                <h2 className="heading-with-lines">Colours</h2>
            </div>
            <div className="patterns-container">
                <div className="pattern">
                    <img src={color001} alt="Colour 1" />
                    <p>001</p>
                </div>
                <div className="pattern">
                    <img src={color002} alt="Colour 2" />
                    <p>002</p>
                </div>
                <div className="pattern">
                    <img src={color003} alt="Colour 3" />
                    <p>003</p>
                </div>
                <div className="pattern">
                    <img src={color004} alt="Colour 4" />
                    <p>004</p>
                </div>
                <div className="pattern">
                    <img src={color005} alt="Colour 5" />
                    <p>005</p>
                </div>
                <div className="pattern">
                    <img src={color006} alt="Colour 6" />
                    <p>006</p>
                </div>
                <div className="pattern">
                    <img src={color007} alt="Colour 7" />
                    <p>007</p>
                </div>
                <div className="pattern">
                    <img src={color008} alt="Colour 8" />
                    <p>008</p>
                </div>
                <div className="pattern">
                    <img src={color009} alt="Colour 9" />
                    <p>009</p>
                </div>
                <div className="pattern">
                    <img src={color010} alt="Colour 10" />
                    <p>010</p>
                </div>
                <div className="pattern">
                    <img src={color011} alt="Colour 11" />
                    <p>011</p>
                </div>
                <div className="pattern">
                    <img src={color012} alt="Colour 12" />
                    <p>012</p>
                </div>
                <div className="pattern">
                    <img src={color013} alt="Colour 13" />
                    <p>013</p>
                </div>
                <div className="pattern">
                    <img src={color014} alt="Colour 14" />
                    <p>014</p>
                </div>
                <div className="pattern">
                    <img src={color015} alt="Colour 15" />
                    <p>015</p>
                </div>
                <div className="pattern">
                    <img src={color016} alt="Colour 16" />
                    <p>016</p>
                </div>
                <div className="pattern">
                    <img src={color017} alt="Colour 17" />
                    <p>017</p>
                </div>
                <div className="pattern">
                    <img src={color018} alt="Colour 18" />
                    <p>018</p>
                </div>
                <div className="pattern">
                    <img src={color019} alt="Colour 19" />
                    <p>019</p>
                </div>
                <div className="pattern">
                    <img src={color020} alt="Colour 20" />
                    <p>020</p>
                </div>
            </div>
            
            <div className='bullet'>
                <ul>
                    <li>Custom colours and patterns also available. </li>
                     <br/><br/>
                </ul>
            </div>
            <br/><br/>

            <div className="heading-container">
                <h2 className="heading-with-lines">Installed</h2>
            </div>
        </div>
        <div className="carousel-container">
        <Slider {...settings}>
            <div>
            <img className="carousel-image" src={audi1} alt="Slide 1" />
            </div>
            <div>
            <img className="carousel-image" src={carousel3} alt="Slide 2" />
            </div>
            <div>
            <img className="carousel-image" src={audi7} alt="Slide 3" />
            </div>
            <div>
            <img className="carousel-image" src={audi2} alt="Slide 3" />
            </div>
        </Slider>
        </div>
    </div>
  );
}

export default PetPanel;