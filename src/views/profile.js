import React, { useContext } from "react";
import firebase from "firebase";
import { AuthContext } from "../scripts/firebase/auth";
import NavigationNotMain from "../components/navbar-not-main";
import Footer from "../components/footer";

import { Container, Button, Row, Col, Card, Form } from "react-bootstrap";
import TableComponent from "../components/table-component";

const ProfileView = () => {
  const { currentUser } = useContext(AuthContext);
  const updateDB = () => {
    const creator = document.getElementById("creator").value;
    const topic = document.getElementById("topic").value;
    const fileLink = document.getElementById("link").value;

    firebase
      .database()
      .ref(`/users/${currentUser["uid"]}/uploads/${topic}`)
      .update({
        creator: creator,
        topic: topic,
        link: fileLink,
      })
      .then(() => {
        firebase
          .database()
          .ref("/publicRespository/" + topic)
          .update({
            creator: creator,
            topic: topic,
            link: fileLink,
          });
      });
  };
  return (
    <div>
      <NavigationNotMain />
      <div className="wrapper">
        <Container className="mt-5">
          <Row className="mt-5">
            <Col sm={true} className="mt-5">
              <Card
                bg="dark"
                text="light"
                style={{ width: "18rem" }}
                className="mb-2 mt-5"
              >
                <Card.Header>{currentUser["email"]}</Card.Header>
                <Card.Body>
                  <Card.Title> User Profile </Card.Title>
                  <Card.Text>
                    Welcome! Here you can take a look at all of the files you've
                    uploaded! You can upload more files by completing the form
                    below.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Form onSubmit={updateDB}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Creator</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Creator Name"
                    id="creator"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Topic</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Topic Name"
                    id="topic"
                  />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>File Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Link"
                    id="link"
                  />
                </Form.Group>
                <Button variant="outline-dark" className="w-25" type="submit">
                  Upload
                </Button>
              </Form>
            </Col>
            <Col sm={true} className="mt-5">
              <TableComponent
                node={`/users/${currentUser["uid"]}/uploads/`}
                className="mt-5"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileView;
