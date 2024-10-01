import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import prod1 from '../assets/melamianoPanel/prod1.jpg';
import prod2 from '../assets/stretchFabricPanel/prod1.png';
import prod3 from '../assets/slatedPanel/prod1.jpeg';
import prod4 from '../assets/perforatedPanel/prod1.png';
import prod5 from '../assets/classicPanel/prod3.jpg';
import prod6 from '../assets/petPanel/prod1.jpeg';
import prod7 from '../assets/woodWoolPanel/prod3.jpeg';
import prod8 from '../assets/stoffPanel/prod1.png';
import prod9 from '../assets/gypsumBoard/prod4.jpeg';
import prod10 from '../assets/glassStoff/prod1.jpg';

import '../styles/Products.css';

const products = [
  {
    id: 1,
    title: "Melamiano Panel",
    density: "6-12 Kg/m³",
    nrc: [0.90],
    link: '/wallPanels/melamianoPanel',
    image: prod1
  },
  {
    id: 2,
    title: "Arch Stretch Fabric Panel",
    nrc: [0.85],
    link: '/wallPanels/stretchFabricPanel',
    image: prod2
  },
  {
    id: 3,
    title: "Slated Wooden Acoustic Panel",
    density: "750 Kg/m³",
    nrc: [0.75],
    link: '/wallPanels/slatedPanel',
    image: prod3
  },
  {
    id: 4,
    title: "Perforated Wooden Acoustic Panel",
    density: "750 Kg/m³",
    nrc: [0.75],
    link: '/wallPanels/perforatedPanel',
    image: prod4
  },
  {
    id: 5,
    title: "Perforated Wooden Slit Panel",
    density: "750 Kg/m³",
    nrc: [0.75],
    link: '/wallPanels/slitPanel',
    image: prod5
  },
  {
    id: 6,
    title: "Fabril Glass Stoff Panel",
    density: "100 - 120 Kg/m³",
    nrc: [1.00],
    link: '/wallPanels/glassStoff',
    image: prod10
  },
  {
    id: 7,
    title: "Fabril Wood Wool Panel",
    density: "400 Kg/m³",
    nrc: [0.95],
    link: '/wallPanels/woodWoolPanel',
    image: prod7
  },
  {
    id: 8,
    title: "Fabril Stoff Panel",
    density: "400 Kg/m³",
    nrc: [0.95],
    link: '/wallPanels/stoffPanel',
    image: prod8
  },
  {
    id: 9,
    title: "Perforated Gypsum Board",
    density: "800 Kg/m³",
    nrc: [0.80],
    link: '/wallPanels/gypsumBoard',
    image: prod9
  },
  {
    id: 10,
    title: "PET Panel",
    density: "200 Kg/m³",
    nrc: [0.80],
    link: '/wallPanels/petPanel',
    image: prod6
  },
];

function WallPanels() {
  return (
    <div className="container mt-4">
      <div style={{marginTop: '150px'}}>
        <h2>Acoustic Wall Panels</h2>
        <br/>
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={3} className="mb-4">
              <Link to={product.link} style={{ textDecoration: 'none' }}>
                <Card className='card-style'>
                  <Card.Img variant="top" src={product.image} style={{height: '50%'}} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title><br />
                    <Card.Text>
                      <strong>NRC:</strong> {product.nrc.map((nrc, index) => (
                        <span key={index}>{nrc} <br/></span>
                      ))}
                      <br />
                      {product.density && (
                        <>
                          <strong>Density:</strong> {product.density}
                        </>
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default WallPanels;
