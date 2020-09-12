import React from "react";
import axios from "axios";

import { Button, Form } from "react-bootstrap";
import "./ContactForm.css";

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault(); // prevent going to a different page

    var formData = {
      first: e.target.firstname.value,
      last: e.target.lastname.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    axios
      .post("http://localhost:5000/", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error.response);
      });

    e.target.reset(); // reset the form values after it is submitted successfully
  }

  return (
    <section className="contact">
      <div className="container">
        <h1 className="display-4 font-weight-bolder pt-3 text-center">
          Questions?
        </h1>

        <Form className="contactForm" onSubmit={handleSubmit}>
          <Form.Group controlId="formFirstName">
            <Form.Label>
              First Name <span className="required">*</span>
            </Form.Label>
            <Form.Control
              className="input-field"
              name="firstname"
              type="text"
              placeholder="John"
              required
            />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              className="input-field"
              name="lastname"
              type="text"
              placeholder="Doe"
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>
              Email <span className="required">*</span>
            </Form.Label>
            <Form.Control
              className="input-field"
              name="email"
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
            <Form.Control
              className="input-field"
              name="subject"
              type="text"
              placeholder="Let's Connect!"
              required
            />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              className="input-field"
              name="phone"
              type="tel"
              placeholder="+1 (012)-345-6789"
            />
            <Form.Text className="text-muted">
              Your number will not be shared with anyone else{" "}
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
              name="message"
              as="textarea"
              rows="10"
              cols="30"
              placeholder="If you would like to connect, please share your social media and/or website here..."
              required
            />
          </Form.Group>

          <Form.Group controlId="formCheckbox">
            <Form.Check
              type="checkbox"
              label={[
                "I am not a robot ",
                <span key={1} className="required">
                  *
                </span>,
              ]}
              required
            />
          </Form.Group>
          <div className="form-buttons pb-3">
            <Button type="submit" variant="primary">
              Send
            </Button>
            <Button type="reset" variant="secondary" className="ml-1">
              Clear
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
}
