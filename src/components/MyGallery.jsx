import { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class MyGallery extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <Card>
              <Card.Img></Card.Img>
              <Card.Title></Card.Title>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default MyGallery;
