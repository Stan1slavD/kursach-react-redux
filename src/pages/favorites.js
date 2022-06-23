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
                    <Col xs={6}>Header</Col>
                    <Col xs={6}></Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Card.Title> Card Title </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
