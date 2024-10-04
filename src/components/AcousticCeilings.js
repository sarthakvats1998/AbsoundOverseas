import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import prod1 from '../assets/melamianoPanel/prod1.jpg';
import prod2 from '../assets/perforatedPanel/prod1.png';
import prod3 from '../assets/classicPanel/prod3.jpg';
import prod4 from '../assets/gypsumBoard/prod4.jpeg';
import prod5 from '../assets/absoftTile/prod2.jpg';
import prod6 from '../assets/calciLite/prod2.jpg';

import '../styles/Products.css';

const products = [
  {
    id: 1,
    title: "Melamiano Panel",
    density: "6-12 Kg/m³",
    nrc: [0.90],
    link: '/acousticCeilings/melamianoPanel',
    image: prod1
  },
  {
    id: 2,
    title: "Perforated Wooden Acoustic Panel",
    density: "750 Kg/m³",
    nrc: [0.75],
    link: '/acousticCeilings/perforatedPanel',
    image: prod2
  },
  {
    id: 3,
    title: "Perforated Wooden Slit Panel",
    density: "750 Kg/m³",
    nrc: [0.75],
    link: '/acousticCeilings/slitPanel',
    image: prod3
  },
  {
    id: 4,
    title: "Perforated Gypsum Board",
    density: "800 Kg/m³",
    nrc: [0.80],
    link: '/acousticCeilings/gypsumBoard',
    image: prod4
  },
  {
    id: 5,
    title: "Absoft Acoustic Ceiling Tile",
    density: "100 - 120 Kg/m³",
    nrc: [0.90],
    link: '/acousticCeilings/absoftTile',
    image: prod5
  },
  {
    id: 6,
    title: "CalciLite Ceiling Tile",
    density: "100 - 120 Kg/m³",
    nrc: [0.70],
    link: '/acousticCeilings/calciLite',
    image: prod6
  },
];

function AcousticCeilings() {
  return (
    <div className="container mt-4">
      <div style={{marginTop: '150px'}}>
        <h2>Acoustic Ceilings</h2>
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
                        <span key={index}>{nrc} <br /></span>
                      ))}<br />
                      <strong>Density:</strong> {product.density}
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

export default AcousticCeilings;