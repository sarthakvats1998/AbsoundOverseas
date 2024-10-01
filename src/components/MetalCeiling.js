import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import layInTile1 from '../assets/metalCeiling/layInTile1.jpg';
import tgrid from '../assets/metalCeiling/tgrid.jpg';
import clipInTile2 from '../assets/metalCeiling/clipInTile2.jpg';
import metalBaffle3 from '../assets/metalCeiling/metalBaffle3.jpg';
import linearCeiling1 from '../assets/metalCeiling/linearCeiling1.jpg';
import openCell1 from '../assets/metalCeiling/openCell1.jpg';
import wallSection from '../assets/metalCeiling/wallSection.jpg';

import '../styles/Products.css';

const products = [
  {
    id: 1,
    title: "Lay-In Tiles",
    material: "G.I/ Aluminum/ SS",
    pattern: "Plain/ Perforated",
    link: '/metalCeilings/layInTiles',
    image: layInTile1
  },
  {
    id: 2,
    title: "Tee Grid Suspension System",
    link: '/metalCeilings/teeGrid',
    image: tgrid
  },
  {
    id: 3,
    title: "Clip-In Tiles",
    material: "G.I/ Aluminum/ SS",
    pattern: "Plain/ Perforated",
    link: '/metalCeilings/clipInTiles',
    image: clipInTile2
  },
  {
    id: 4,
    title: "Metal Baffle Ceiling",
    link: '/metalCeilings/metalBaffleCeiling',
    image: metalBaffle3
  },
  {
    id: 5,
    title: "Linear Ceiling System",
    link: '/metalCeilings/linearCeiling',
    image: linearCeiling1
  },
  {
    id: 6,
    title: "Open Cell Ceiling System",
    link: '/metalCeilings/openCellCeiling',
    image: openCell1
  },
  {
    id: 7,
    title: "G.I Ceiling and Wall Section",
    link: '/metalCeilings/giCeilingAndWall',
    image: wallSection
  },
];

function MetalCeiling() {
    return (
      <div className="container mt-4">
        <div style={{ marginTop: '150px' }}>
          <h2>Metal Ceilings</h2>
          <br/>
          <Row>
            {products.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={3} className="mb-4">
                <Link to={product.link} style={{ textDecoration: 'none' }}>
                  <Card className='card-style'>
                    <Card.Img variant="top" src={product.image} style={{ height: '50%' }} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <br />
                      <Card.Text>
                        {product.material && (
                          <>
                            <strong>Material:</strong> {product.material}
                            <br /><br />
                          </>
                        )}
                        {product.pattern && (
                          <>
                            <strong>Pattern:</strong> {product.pattern}
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
  
  export default MetalCeiling;