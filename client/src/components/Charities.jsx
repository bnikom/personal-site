import React from 'react';
import { Col, Row } from 'reactstrap';

const Home = ({ GDIMPoff }) => {
  return (
    <main className="home-container">
      <Row>
        <Col xs={GDIMPoff ? 6 : 12}>
          <h1>You should donate to:</h1>
          <ul className="list-unstyled">
            <li><a href="https://action.aclu.org/give/donate-to-aclu-multistep">ACLU</a></li>
            <li><a href="https://www.plannedparenthood.org/get-involved/other-ways-give">Planned Parenthood</a></li>
            <li><a href="https://www.raicestexas.org/donate/">RAICES</a></li>
            <li><a href="https://yellowhammerfund.org/">Yellowhammer Fund</a></li>
            <li><a href="https://hispanicfederation.org/unidos/">Hispanic Federation/Unidos</a></li>
            <li><a href="https://suicidepreventionlifeline.org/donate/">National Suicide Prevention Lifeline</a></li>
            <li><a href="https://www.inara.org/donate">International Network for Aid, Relief and Assistance/Inara</a></li>
            <li><a href="https://donate.wikimedia.org/wiki/Ways_to_Give">Wikipedia</a></li>
            <li><a href="https://alotrolado.org/take-action/donate/">Al Otro Lado</a></li>
          </ul>
        </Col>
        {GDIMPoff &&
          <Col>
            <img src="images/give-dat.png" alt="give dat" className="give-dat" />
            <img src="images/money.gif" alt="green money" className="green-money" />
            <img src="images/money3.gif" className="fire-money" alt="fire money" />
          </Col>
        }
      </Row>
    </main>
  );
}

export default Home;