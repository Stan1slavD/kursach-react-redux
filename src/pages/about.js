import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function About() {
  return (
    <Container>
      <Row className="mt-5 align-items-center">
        <Col>
          {" "}
          <h1>
            Разаработчик:{" "}
            <a
              href="https://github.com/Stan1slavD"
              style={{ fontWeight: "bolder", textDecoration: "none" }}
            >
              Stan1slavD
            </a>
          </h1>
        </Col>
        <Col>
          <img
            src="https://avatars.githubusercontent.com/u/71459995?v=4"
            style={{ height: "300px", width: "300px", borderRadius: "30px" }}
          ></img>
        </Col>
      </Row>
      <h2 className="mt-5 ">Эектронная почта: stasdamaratskiy@gmail.com</h2>
      <h2 className="mt-5">
        Telegram:{" "}
        <a
          href="https://t.me/DamaratskiyStanislav"
          style={{ fontWeight: "bolder", textDecoration: "none" }}
        >
          DamaratskiyStanislav
        </a>
      </h2>
      <h2 className="mt-5 ">
        <a
          href="https://github.com/Stan1slavD/kursach-react-redux"
          style={{ fontWeight: "bolder", textDecoration: "none" }}
        >
          Ссылка на репозиторий с кодом
        </a>
      </h2>
    </Container>
  );
}

export default About;
