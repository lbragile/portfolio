import React from "react";
import { Button, Form } from "react-bootstrap";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <>
      <section className="contact">
        <div className="container">
          <h1 className="display-3 font-weight-bolder pt-3 text-center">
            Have questions?
          </h1>

          <Form>
            <Form.Group controlId="fromFirstName">
              <Form.Label>
                First Name <span className="required">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="John" required />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>
                Last Name <span className="required">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Doe" required />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>
                Email <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="example@email.com"
                required
              />
              <Form.Text className="text-muted">
                Your email will not be shared with anyone else{" "}
                <span role="img" aria-label="image of a security lock">
                  🔐
                </span>
                .
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Label>
                Subject <span className="required">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Let's Connect!" required />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="+1 (778)-123-4567!" />
              <Form.Text className="text-muted">
                Your phone number will not be shared with anyone else{" "}
                <span role="img" aria-label="image of a phone">
                  ☎
                </span>
                .
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formTextArea">
              <Form.Label>
                Message <span className="required">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="10"
                cols="30"
                placeholder="If you would like to connect, please share your social media and/or website here..."
                required
              />
            </Form.Group>

            <Form.Group controlId="formCheckbox">
              <Form.Check type="checkbox" label="I'm not a robot" required />
            </Form.Group>
            <div className="form-buttons">
              <Button variant="primary" id="send">
                Send
              </Button>
              <Button variant="secondary" className="ml-1" id="clear">
                Clear
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
