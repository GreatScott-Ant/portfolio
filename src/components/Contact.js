import React from "react";
import { Input, Form, FormGroup, Label, Button, Container } from "reactstrap";

const Contact = () => {
  return (

    <div className="msgtop">
      Contact Me
      {/* <div className="contactflex"> */}
      <Container fluid="sm">
        <Form>
          <FormGroup>
            <Label for="exampleName" hidden>
              Name
            </Label>
            <Input className="contactbox"
              id="exampleName"
              name="name"
              placeholder="Name"
              type="textarea"
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="exampleEmail" hidden>
              Email
            </Label>
            <Input className="contactbox"
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="exampleMessage" hidden>
              Message
            </Label>
            <Input className="contactbox"
              id="exampleMessage"
              name="message"
              placeholder="Message"
              type="textarea"
            />
          </FormGroup>{" "}
          <Button>Submit</Button>
        </Form>
      </Container>
      {/* </div> */}
      
    </div>
  );
};

export default Contact;
