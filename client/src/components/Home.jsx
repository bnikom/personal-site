import React from 'react';
import { Col, Row } from 'reactstrap';

const Home = ({ GDIMPoff }) => {
  return (
    <main className="home-container">
      <h1>Welcome to Bella Nikom's Site!</h1>
      <p>you might be wondering - who am I? good question!</p>
      <p>ok bye now.</p>
      {GDIMPoff && 
        <Row>
          <Col xs={{ size: 6, offset: 6 }}>
            <img className="star" src='/images/png_star.png' />
            <span className="you-did-it">you did it</span>
          </Col>
        </Row>
      }
    </main>
  );
}

export default Home;