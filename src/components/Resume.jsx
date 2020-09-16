import React from 'react';
import { Col, Row } from 'reactstrap';

const Resume = () => {
  return (
    <main className="resume-container">
      <Row className="justify-content-center d-flex mb-4">
        <Col xs={10}>
          <img className="w-100" src="images/resume.png" alt="Bella Nikom's Resume" />
         </Col>
      </Row>
    </main>
  );
}

export default Resume;