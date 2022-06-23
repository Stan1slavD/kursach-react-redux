import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function Vacancy({}) {
  return (
    <Container>
      <Row className="mt-5 align-items-center">
        <Col>
          <h1 style={{ fontWeight: "bolder" }}>Программист JS</h1>
        </Col>
        <Col>
          <img
            src="https://img.hhcdn.ru/employer-logo/2558698.png"
            style={{ border: "2px", borderRadius: "30px" }}
          ></img>
        </Col>
        <h2 className="mt-3">Компания: Тензор</h2>
        <h2 className="mt-3">Ключевые навыки: JavaScript, HTML, CSS, jQuery</h2>
        <h2 className="mt-3">Адрес: Ярославль, Угличская улица, 36</h2>
        <h2 className="mt-3">Зароботная плата: от 115 000 до 220 000 руб.</h2>
        <h2 className="mt-3">Требуемый опыт работы: 1–3 года</h2>
        <h2 className="mt-3">Тип занятости: Полная занятость, гибкий график</h2>
        <Button
          className="btn btn-ptimary mt-3"
          style={{ width: "300px", fontSize: "25px" }}
          href="https://yaroslavl.hh.ru/vacancy/67103489?from=vacancy_search_list&hhtmFrom=vacancy_search_list&query=%D1%82%D0%B5%D0%BD%D0%B7%D0%BE%D1%80"
        >
          Перейти на HeadHunter
        </Button>
      </Row>
    </Container>
  );
}

export default Vacancy;
