import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import door1 from '../assets/doors/door1.jpg'

import '../styles/Products.css';

const products = [
  {
    id: 1,
    title: "Absound Acoustic Door",
    material: "Mineral Fiber",
    link: '/acousticDoors/door',
    appearance: null,
    image: door1
  },
];

function AcousticDoors() {
  return (
    <div className="container mt-4">
      <div style={{marginTop: '150px'}}>
        <h2>Acoustic Doors</h2>
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
                      <strong>Material:</strong> {product.material} <br /><br />
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

export default AcousticDoors;