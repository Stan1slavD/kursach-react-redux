import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";

function Favorites() {
  const fav = useSelector((state) => state.favoriteReducer.favorites);
  const dispatch = useDispatch();
  console.log(fav);

  return (
    <div className="w-100 mt-5">
      {fav.map((item) => {
        return (
          <Row className="justify-content-md-center">
            <Col xs={6}>
              <Card
                border="light"
                bg={"dark"}
                key={item.id}
                text={"white"}
                style={{ width: "50rem" }}
                className="mb-2"
              >
                <Card.Header>
                  <Row>
                    <Col xs={6}>{item.name}</Col>
                    <Col xs={6} className="text-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Card.Title>{item.employer.name}</Card.Title>
                  <Card.Text>{item.snippet.responsibility}</Card.Text>
                  <Card.Text>
                    <a href={item.alternate_url}>Подробнее...</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export default Favorites;
