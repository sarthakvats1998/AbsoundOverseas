import React from 'react';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import audi1 from '../assets/glassStoff/audi1.jpg';
import audi2 from '../assets/audi8.jpg';
import audi3 from '../assets/audi6.jpeg';
import prod1 from '../assets/glassStoff/prod1.jpg';
import prod2 from '../assets/glassStoff/prod2.png';
import prod3 from '../assets/glassStoff/prod3.jpg';
import ju101 from '../assets/glassStoff/JU-101.jpg';
import ju104A from '../assets/glassStoff/JU-104.jpg';
import ju103 from '../assets/glassStoff/JU-103.jpg';
import ju104 from '../assets/glassStoff/JU-104A.jpg';
import ju105 from '../assets/glassStoff/JU-105.jpg';
import ju106 from '../assets/glassStoff/JU-106.jpg';
import ju107 from '../assets/glassStoff/JU-107.jpg';
import ju108 from '../assets/glassStoff/JU-108.jpg';
import ju109 from '../assets/glassStoff/JU-109.jpg';
import ju110 from '../assets/glassStoff/JU-110.jpg';
import ju111 from '../assets/glassStoff/JU-111.jpg';
import ju112 from '../assets/glassStoff/JU-112.jpg';
import ju113 from '../assets/glassStoff/JU-113.jpg';
import ju114 from '../assets/glassStoff/JU-114.jpg';
import ju115 from '../assets/glassStoff/JU-115.jpg';
import ju116A from '../assets/glassStoff/JU-116A.jpg';
import ju117 from '../assets/glassStoff/JU-117.jpg';
import ju118A from '../assets/glassStoff/JU-118A.jpg';
import ju119 from '../assets/glassStoff/JU-119.jpg';
import ju120 from '../assets/glassStoff/JU-120.jpg';

function GlassStoff() {
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
                    src={audi1}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
                <div className='container product-name'>
                    <h1>	
                        Fabril Glass Stoff Panel
                    </h1>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>

        <div className="carousel-container">
        <Slider {...settings}>
            <div>
            <img className="carousel-image" src={prod1} alt="Slide 1" />
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
                    <li>Absound Fibril Glass Stoff acoustic panel is custom designed and manufactured to meet every need and important for good speech privacy or speech intelligibility in any space.</li><br/>
                    <li>Excellent for low and high frequency absorption.</li><br/>
                    <li>The panel is manufactured from high density resin bonded glass fiber product which bears the Green Cross level for recycled content.</li><br/>
                    <li>The panel is finished with a series of textile fabric facing, plain glass tissue backer and fabric wrapped edges.</li><br/>
                    <li>This panel is certified on average to contain 35 - 40% recycled glass with 90% post consumer and 26% pre consumer content.</li><br/>
                    <li>Absound Fibril Glass Stoff Panels are suitable for almost every application, including use in auditorims, lecture rooms, multiplexes, conference rooms, hotels, worship spaces, offices, airports, studios, and home theatres.</li><br/>
                    <li>Our Absound Fibril Glass Stoff Panels come with a 5-year warranty.</li><br/><br/>
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
                                    <div className="spec-content">25 mm, 50 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Sizes</div>
                                    <div className="spec-content">600 x 600/1200 mm, 1200 x 1200/2400 mm</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Density</div>
                                    <div className="spec-content">100 - 120 Kg/m<sup>3</sup></div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Weight</div>
                                    <div className="spec-content">2.5 - 5 Kg/m<sup>2</sup></div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Acoustics</div>
                                    <div className="spec-content">NRC Of 1.00</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Fire</div>
                                    <div className="spec-content">Class A</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Light (%)</div>
                                    <div className="spec-content">Colours Dependent</div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="spec-title">Core</div>
                                    <div className="spec-content">Rigid Fiberglass</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Text>
                                    <div className="spec-title">Panel Shapes</div>
                                    <div className="spec-content">Square Edge, Beveled Edge</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Installation</div>
                                    <div className="spec-content">Z-Profile, Impalers, Adhesive</div>
                                </Card.Text>
                                <br/>
                                <Card.Text>
                                    <div className="spec-title">Maintenance</div>
                                    <div className="spec-content">Vaccum</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div><br/><br/>

            <div className="heading-container">
                <h2 className="heading-with-lines">Features</h2>
            </div>
            <div className='bullet'>
                <ul>
                    <li>Custom fire retardant fabric colors.</li><br/>
                    <li>Flat faced with square or radius corner.</li><br/>
                    <li>High performance.</li><br/>
                    <li>Custom engineered & manufactured.</li><br/>
                    <li>Architecturally decorative properties.</li><br/>
                    <li>Control noise & vibration.</li><br/><br/>
                </ul>
            </div>

            <div className="heading-container">
                <h2 className="heading-with-lines">Colours</h2>
            </div>
            <div className="patterns-container">
                <div className="pattern">
                    <img src={ju101} alt="Colour 1" />
                    <p>JU-101</p>
                </div>
                <div className="pattern">
                    <img src={ju103} alt="Colour 2" />
                    <p>JU-103</p>
                </div>
                <div className="pattern">
                    <img src={ju104} alt="Colour 3" />
                    <p>JU-104</p>
                </div>
                <div className="pattern">
                    <img src={ju104A} alt="Colour 4" />
                    <p>JU-104A</p>
                </div>
                <div className="pattern">
                    <img src={ju105} alt="Colour 5" />
                    <p>JU-105</p>
                </div>
                <div className="pattern">
                    <img src={ju106} alt="Colour 6" />
                    <p>JU-106</p>
                </div>
                <div className="pattern">
                    <img src={ju107} alt="Colour 7" />
                    <p>JU-107</p>
                </div>
                <div className="pattern">
                    <img src={ju108} alt="Colour 8" />
                    <p>JU-108</p>
                </div>
                <div className="pattern">
                    <img src={ju109} alt="Colour 9" />
                    <p>JU-109</p>
                </div>
                <div className="pattern">
                    <img src={ju110} alt="Colour 10" />
                    <p>JU-110</p>
                </div>
                <div className="pattern">
                    <img src={ju111} alt="Colour 11" />
                    <p>JU-111</p>
                </div>
                <div className="pattern">
                    <img src={ju112} alt="Colour 12" />
                    <p>JU-112</p>
                </div>
                <div className="pattern">
                    <img src={ju113} alt="Colour 6" />
                    <p>JU-113</p>
                </div>
                <div className="pattern">
                    <img src={ju114} alt="Colour 7" />
                    <p>JU-114</p>
                </div>
                <div className="pattern">
                    <img src={ju115} alt="Colour 8" />
                    <p>JU-115</p>
                </div>
                <div className="pattern">
                    <img src={ju116A} alt="Colour 9" />
                    <p>JU-116A</p>
                </div>
                <div className="pattern">
                    <img src={ju117} alt="Colour 10" />
                    <p>JU-117</p>
                </div>
                <div className="pattern">
                    <img src={ju118A} alt="Colour 11" />
                    <p>JU-118A</p>
                </div>
                <div className="pattern">
                    <img src={ju119} alt="Colour 12" />
                    <p>JU-119</p>
                </div>
                <div className="pattern">
                    <img src={ju120} alt="Colour 12" />
                    <p>JU-120</p>
                </div>
            </div>
            <br/><br/>

            <div className="heading-container">
                <h2 className="heading-with-lines">Installed</h2>
            </div>
        </div>
        <div className="carousel-container">
        <Slider {...settings}>
            <div>
            <img className="carousel-image" src={audi2} alt="Slide 1" />
            </div>
            <div>
            <img className="carousel-image" src={audi1} alt="Slide 2" />
            </div>
            <div>
            <img className="carousel-image" src={audi3} alt="Slide 3" />
            </div>
        </Slider>
        </div>
    </div>
  );
}

export default GlassStoff;