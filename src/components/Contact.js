import React from "react";
import { Input, Form, FormGroup, Label, Button, Container, Row, Col } from "reactstrap";

const Contact = () => {
  return (
    <div className="msgtop">
      Contact Me
      <Container fluid="xs">
        <Row className="justify-content-center">
          <Col xs="12" md="6">
            <Form>
              <FormGroup>
                <Label for="exampleName" hidden>
                  Name
                </Label>
                <Input
                  className="contactbox"
                  id="exampleName"
                  name="name"
                  placeholder="Name"
                  type="textarea"
                  style={{ width: "100%" }}
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label for="exampleEmail" hidden>
                  Email
                </Label>
                <Input
                  className="contactbox"
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                  style={{ width: "100%" }}
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label for="exampleMessage" hidden>
                  Message
                </Label>
                <Input
                  className="contactbox"
                  id="exampleMessage"
                  name="message"
                  placeholder="Message"
                  type="textarea"
                  style={{ width: "100%" }}
                />
              </FormGroup>{" "}
              <Button color="dark">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
         