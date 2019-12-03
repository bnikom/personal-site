import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import Toggle from 'react-toggle'

const Footer = ({ handleGDIMPTheme, GDIMPoff }) => {
  return (
    <footer>
      <hr className="mt-0" />
      <Row>
        <Col>
          <h5 className="font-weight-bold">Important Links/Things:</h5>
          <ul className="list-unstyled ml-4">
            <li>The world is ending!!!!!!</li>
            <li><a href="https://www.linkedin.com/in/bnikom/">LinkedIn</a></li>
            <li><a href="https://github.com/bnikom">Github</a></li>
            <li><a href="https://twitter.com/thebasketcase25">Personal Twitter</a></li>
          </ul>
        </Col>
        <Col xs={6}>
          <div className="d-flex">
            <span>Normal</span>
            <Toggle
              className="mx-2"
              id="GDIMP-label"
              icons={false}
              defaultChecked={(localStorage.getItem('GDIMPoff') === 'true') || GDIMPoff}
              onChange={() => handleGDIMPTheme(!GDIMPoff)}
              aria-label="toggle to change colour formatting"
            />
            <span>Graphic Design Is My Passion</span>
          </div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;