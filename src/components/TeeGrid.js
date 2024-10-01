import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlatedPanel.css';

import layInTile2 from '../assets/metalCeiling/layInTile2.jpg';
import tgrid from '../assets/metalCeiling/tgrid.jpg';

function TeeGrid() {
  return (
    <div>
      <Carousel className="custom-carousel" controls={false} indicators={false} style={{ height: '600px' }}>
        <Carousel.Item style={{ height: '600px' }}>
          <img className="d-block w-100" src={layInTile2} alt="First slide" />
          <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-end h-100">
            <div className='container product-name'>
              <h1>Tee-Grid Suspension System</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />

      <div className="carousel-container d-flex justify-content-center">
        <img src={tgrid} style={{ width: 400, height: 400 }} alt="Slide 1" />
      </div>

      <div className='container'>

        <div className="heading-container">
          <h2 className="heading-with-lines">Specifications</h2>
        </div>
        <div>
          <Row style={{ height: 'auto' }}>
            <Col style={{ height: 'auto' }}>
              <h5 style={{ textAlign: 'center' }}>Plain Tee-Grid</h5>
              <Card className="custom-card" style={{ textAlign: 'center', height: '400px' }}>
                <Card.Body>
                  <Card.Text>
                    <div className="spec-title">Main</div>
                    <div className="spec-content">38 X 24 X 3600 X 0.30 mm</div>
                    <div className="spec-content">32 X 24 X 3600 X 0.30 mm</div>
                    <div className="spec-content">32 X 24 X 3600 X 0.30 mm</div>
                  </Card.Text>
                  <Card.Text>
                    <div className="spec-title">Cross</div>
                    <div className="spec-content">26 X 24 X 1200 X 0.30 mm</div>
                    <div className="spec-content">26 X 24 X 600 X 0.30 mm</div>
                    <div className="spec-content">32 X 15 X 1200 X 0.30 mm</div>
                    <div className="spec-content">32 X 15 X 600 X 0.30 mm</div>
                  </Card.Text>
                  <Card.Text>
                    <div className="spec-title">Wall Angle</div>
                    <div className="spec-content">24 X 24 X 3050 X 0.35 mm</div>
                    <div className="spec-content">20 X 20 X 3050 X 0.35 mm</div>
                    <div className="spec-content">19 X 15 X 3050 X 0.35 mm</div>
                  </Card.Text>
                  <br />
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ height: 'auto' }}>
              <h5 style={{ textAlign: 'center' }}>Select Tee-Grid</h5>
              <Card className="custom-card" style={{ textAlign: 'center', height: '400px' }}>
                <Card.Body>
                    <Card.Text>
                        <div className="spec-title">Main</div>
                        <div className="spec-content">32 X 24 X 3600 X 0.30 mm</div>
                        <div className="spec-content">32 X 24 X 3000 X 0.30 mm</div>
                        <div className="spec-content">32 X 15 X 3000 X 0.30 mm</div>
                    </Card.Text>
                    <Card.Text>
                        <div className="spec-title">Cross</div>
                        <div className="spec-content">26 X 24 X 1200 X 0.30 mm</div>
                        <div className="spec-content">26 X 24 X 600 X 0.30 mm</div>
                        <div className="spec-content">32 X 15 X 1200 X 0.30 mm</div>
                        <div className="spec-content">32 X 15 X 600 X 0.30 mm</div>
                    </Card.Text>
                    <Card.Text>
                        <div className="spec-title">Wall Angle</div>
                        <div className="spec-content">24 X 24 X 3050 X 0.35 mm</div>
                        <div className="spec-content">20 X 20 X 3050 X 0.35 mm</div>
                        <div className="spec-content">19 X 15 X 3050 X 0.35 mm</div>
                    </Card.Text>
                    <br />
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ height: 'auto' }}>
              <h5 style={{ textAlign: 'center' }}>Silhouette Tee-Grid</h5>
              <Card className="custom-card" style={{ textAlign: 'center', height: '400px' }}>
                <Card.Body>
                    <br />
                    <Card.Text>
                        <div className="spec-title">Main</div>
                        <div className="spec-content">38 X 15 X 3000 X 0.30 mm</div>
                    </Card.Text>
                    <br />
                    <Card.Text>
                        <div className="spec-title">Cross</div>
                        <div className="spec-content">38 X 15 X 1200 X 0.30 mm</div>
                        <div className="spec-content">38 X 15 X 600 X 0.30 mm</div>
                    </Card.Text>
                    <br />
                    <Card.Text>
                        <div className="spec-title">Wall Angle</div>
                        <div className="spec-content">20 X 20 X 3050 X 0.35 mm</div>
                        <div className="spec-content">19 X 15 X 3050 X 0.35 mm</div>
                    </Card.Text>
                    <br />
                    <br />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <br />
          <br />
          <div className="heading-container">
            <h2 className="heading-with-lines">Colours</h2>
          </div>
          <div className='bullet'>
            <ul>
              <li>Coloured painted grid available.</li>
            </ul>
          </div>
        </div><br /><br />
      </div>
    </div>
  );
}

export default TeeGrid;
