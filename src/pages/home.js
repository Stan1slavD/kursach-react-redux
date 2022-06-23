import React from "react";

import { Button, Container, Row, Col } from "react-bootstrap";

function Main() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 style={{ fontSize: "100px", fontWeight: "bolder" }}>HH4DEV</h1>
          <p style={{ fontSize: "25px", width: "400px", color: "whitesmoke" }}>
            HH4DEV —это лучшие предложения высокооплачиваемой работы в сфере IT
            от российских и зарубежных компаний.
          </p>
          <Button style={{ width: "200px" }}>Начать</Button>
        </Col>
        <Col>
          <img
            src={require("../img/pixeltrue-web-development.png")}
            style={{ width: "700px", height: "500px" }}
          ></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
