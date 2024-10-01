import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import parCan from '../assets/stageSystems/parCan.jpg';
import blinder from '../assets/stageSystems/blinder.jpg';
import fresnel from '../assets/stageSystems/fresnel.jpg';
import parLight from '../assets/stageSystems/parLight.jpg';
import profileLight from '../assets/stageSystems/profileLight.jpg';
import movingHead from '../assets/stageSystems/movingHead.jpg';
import cyclorama from '../assets/stageSystems/cyclorama.png';
import cycloramaScreen from '../assets/stageSystems/cycloramaScreen.jpeg';
import sideWings from '../assets/stageSystems/sideWings.jpeg';
import proscenium from '../assets/stageSystems/proscenium.jpeg';
import sideLadder from '../assets/stageSystems/sideLadder.jpg';
import woodenFlooring from '../assets/stageSystems/woodenFlooring.png';
import audi1 from '../assets/stageSystems/audi2.jpeg';
import lightBar from '../assets/stageSystems/lightBar.jpg';

import '../styles/Products.css';

const lighting = [
  {
    id: 1,
    title: "LED Par Can",
    power: "100W / 150W / 200W",
    link: '/stageSystems/parCan',
    image: parCan
  },
  {
    id: 2,
    title: "LED Blinder",
    power: "200W / 400W",
    link: '/stageSystems/blinder',
    image: blinder
  },
  {
    id: 3,
    title: "LED Fresnel Spot",
    power: "60W / 100W / 200W / 300W / 400W",
    link: '/stageSystems/fresnelSpot',
    image: fresnel
  }, 
  {
    id: 4,
    title: "Par Lights",
    power: "Variable",
    link: '/stageSystems/parLight',
    image: parLight
  },  
  {
    id: 5,
    title: "Profile Lights",
    power: "200W / 300W",
    link: '/stageSystems/profileLight',
    image: profileLight
  },
  {
    id: 6,
    title: "Moving Head",
    power: "Variable",
    link: '/stageSystems/movingHead',
    image: movingHead
  },
  {
    id: 7,
    title: "Cyclorama Wash Light",
    power: "300W",
    link: '/stageSystems/cyclorama',
    image: cyclorama
  },
];

const curtains = [
  {
    id: 1,
    title: "Curtains",
    types: "Main / Mid / Rear Curtains",
    link: '/stageSystems/curtains',
    image: audi1
  },
];

const flooring = [
  {
    id: 1,
    title: "Wooden Flooring",
    link: '/stageSystems/woodenFloor',
    image: woodenFlooring
  },
];

const services = [
  {
    id: 1,
    title: "Cyclorama Screen",
    description: "Providing and Fixing",
    link: '/stageSystems/cycloramaScreen',
    image: cycloramaScreen
  },
  {
    id: 2,
    title: "Side Wings",
    description: "Providing and Fixing",
    link: '/stageSystems/sideWings',
    image: sideWings
  }, 
  {
    id: 3,
    title: "Proscenium",
    description: "Providing and Fixing",
    link: '/stageSystems/proscenium',
    image: proscenium
  },
  {
    id: 4,
    title: "Side Ladder",
    description: "Providing and Fixing",
    link: '/stageSystems/sideLadder',
    image: sideLadder
  },
  {
    id: 5,
    title: "Motorized Light Bar",
    description: "Providing and Fixing",
    link: '/stageSystems/motorizedLightBar',
    image: lightBar
  },
];

function StageSystems() {
  return (
    <div className="container mt-4">
      <div style={{marginTop: '150px'}}>
        <h2>Stage Systems</h2>
        <br/>
        <Tabs defaultActiveKey="lighting" className="mb-3" justify>
          <Tab eventKey="lighting" title="Stage Lighting">
            <Row>
              {lighting.map((light) => (
                <Col key={light.id} sm={12} md={6} lg={3} className="mb-4">
                  <Link to={light.link} style={{ textDecoration: 'none' }}>
                    <Card className='card-style'>
                      <Card.Img variant="top" src={light.image} style={{height: '65%'}} />
                      <Card.Body>
                        <Card.Title>{light.title}</Card.Title><br />
                        <Card.Text>
                          <strong>Power:</strong> {light.power} <br /><br />
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Tab>

          <Tab eventKey="curtains" title="Stage Curtains">
            <Row>
              {curtains.map((curtain) => (
                <Col key={curtain.id} sm={12} md={6} lg={3} className="mb-4">
                  <Link to={curtain.link} style={{ textDecoration: 'none' }}>
                    <Card className='card-style'>
                      <Card.Img variant="top" src={curtain.image} style={{height: '65%'}} />
                      <Card.Body>
                        <Card.Title>{curtain.title}</Card.Title><br />
                        <Card.Text>
                          <strong>Types:</strong> {curtain.types} <br /><br />
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Tab>

          <Tab eventKey="flooring" title="Stage Flooring">
            <Row>
              {flooring.map((floor) => (
                <Col key={floor.id} sm={12} md={6} lg={3} className="mb-4">
                  <Link to={floor.link} style={{ textDecoration: 'none' }}>
                    <Card className='card-style'>
                      <Card.Img variant="top" src={floor.image} style={{height: '65%'}} />
                      <Card.Body>
                        <Card.Title>{floor.title}</Card.Title><br />
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Tab>

          <Tab eventKey="services" title="Stage Services">
            <Row>
              {services.map((service) => (
                <Col key={service.id} sm={12} md={6} lg={3} className="mb-4">
                  <Link to={service.link} style={{ textDecoration: 'none' }}>
                    <Card className='card-style'>
                      <Card.Img variant="top" src={service.image} style={{height: '65%'}} />
                      <Card.Body>
                        <Card.Title>{service.title}</Card.Title><br />
                        <Card.Text>
                          <strong>Service:</strong> {service.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default StageSystems;