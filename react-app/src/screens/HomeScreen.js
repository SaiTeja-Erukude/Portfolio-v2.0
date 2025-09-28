import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import MovingComponent from "react-moving-text";
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row className="pt-3">
          <Col sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
            <h5 className="greeting">&nbsp;Hello All 👋</h5>
            <h2 className="name">I'm Sai Teja Erukude!</h2>
            <h2 className="designation">
              <MovingComponent type="typewriter"
                dataText={ [
                  'A Software Developer . .',
                  'A Problem Solver . .'
                ] } />
            </h2>
            <Row>
              <Col className="know-more-div">
                <Link to="/skills">
                  <h5 className="know-more">Know More About Me &nbsp;<i className="fa fa-thin fa-circle-arrow-right"></i></h5>
                </Link>
              </Col>
              <Col>
                <h5 className="d-flex justify-content-between py-2 px-4">
                  <a href="mailto:erukude.saiteja@gmail.com" target="_blank">
                    <i class="fa-solid fa-envelope social"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/sai-teja-erukude/" target="_blank">
                    <i className="fa-brands fa-linkedin social"></i>
                  </a>
                  <a href="https://github.com/SaiTeja-Erukude" target="_blank">
                    <i className="fa-brands fa-github social"></i>
                  </a>
                  <a href="https://www.instagram.com/saiteja_e/" target="_blank">
                    <i className="fa-brands fa-instagram social"></i>
                  </a>
                  <a href="https://leetcode.com/saiteja_erukude/" target="_blank">
                    <img className="social" src="leetcode.png"></img>
                  </a>
                </h5>
              </Col>
            </Row>
          </Col>


          <Col className="d-flex justify-content-center">
            <img src="my_pic.jpg" className="my-pic"></img>
          </Col>
        </Row>

        <Link to="/skills">
          <h6 className="mobile-know-more">Know More About Me &nbsp;<i className="fa fa-thin fa-circle-arrow-right"></i></h6>
        </Link>
      </Container>

    </div>
  );
};

export default HomeScreen;;