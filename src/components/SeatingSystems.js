import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import abt01 from '../assets/seatingSystems/abt01.jpg';
import abt02 from '../assets/seatingSystems/abt02.jpg'
import abtwp03 from '../assets/seatingSystems/abtwp03.jpg'
import abpb04 from '../assets/seatingSystems/abpb04.jpg'
import abpb05 from '../assets/seatingSystems/abpb05.jpg'
import abr06 from '../assets/seatingSystems/abr06.jpg'
import abr07 from '../assets/seatingSystems/abr07.jpg'
import abpb08 from '../assets/seatingSystems/abpb08.jpg'
import abt09 from '../assets/seatingSystems/abt09.jpg'
import abpwp10 from '../assets/seatingSystems/abpwp10.jpg'
import abpb11 from '../assets/seatingSystems/abpb11.jpg'

import '../styles/Products.css';

const products = [
  {
    id: 1,
    title: "ABT-01",
    seat: "Auto Tip-Up",
    back: "Fix",
    link: '/seatingSystems/abt01',
    image: abt01
  },
  {
    id: 2,
    title: "ABT-02",
    seat: "Auto Tip-Up",
    back: "Fix",
    link: '/seatingSystems/abt02',
    image: abt02
  },
  {
    id: 3,
    title: "ABTWP-03",
    seat: "Auto Tip-Up With Writing Pad",
    back: "Fix",
    link: '/seatingSystems/abtwp03',
    image: abtwp03
  },
  {
    id: 4,
    title: "ABPB-04",
    seat: "Sliding",
    back: "Push Back",
    link: '/seatingSystems/abpb04',
    image: abpb04
  },
  {
    id: 5,
    title: "ABPB-05",
    seat: "Sliding",
    back: "Push Back",
    link: '/seatingSystems/abpb05',
    image: abpb05
  },
  {
    id: 6,
    title: "ABR-06",
    seat: "Sliding",
    back: "Push Back",
    link: '/seatingSystems/abr06',
    image: abr06
  },
  {
    id: 7,
    title: "ABR-07",
    seat: "Sliding",
    back: "Push Back",
    link: '/seatingSystems/abr07',
    image: abr07
  },
  {
    id: 8,
    title: "ABPB-08",
    seat: "Sliding",
    back: "Push Back",
    link: '/seatingSystems/abpb08',
    image: abpb08
  },
  {
    id: 9,
    title: "ABT-09",
    seat: "Auto Tip-Up",
    back: "Back Push",
    link: '/seatingSystems/abt09',
    image: abt09
  },
  {
    id: 10,
    title: "ABPWP-10",
    seat: "Sliding With Writing Pad",
    back: "Push Back",
    link: '/seatingSystems/abpwp10',
    image: abpwp10
  },
  {
    id: 11,
    title: "ABPB-11",
    seat: "Fix",
    back: "Fix",
    link: '/seatingSystems/abpb11',
    image: abpb11
  },
];

function SeatingSystems() {
  return (
    <div className="container mt-4">
      <div style={{marginTop: '150px'}}>
        <h2>Seating Systems</h2>
        <br/>
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={3} className="mb-4">
              <Link to={product.link} style={{ textDecoration: 'none' }}>
                <Card className='card-style'>
                  <Card.Img variant="top" src={product.image} style={{height: '65%'}} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title><br />
                    <Card.Text>
                      <strong>Type of Seat:</strong> {product.seat} <br /><br />
                      <strong>Type of Backrest:</strong> {product.back}
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

export default SeatingSystems;