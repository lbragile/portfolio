import React, { useState, useRef } from "react";
import axios from "axios";

import { Button, Form } from "react-bootstrap";
import "./ContactForm.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  var resetBtn = useRef();

  async function handleSubmit(e) {
    e.preventDefault(); // prevent going to a different page
    var formData = new FormData(e.target);
    try {
      await axios.post("https://tabmerger-backend.herokuapp.com/contact", [...formData]);
      resetBtn.current.click();
      setEmail("");
      setSent(true);
    } catch (err) {
      console.error(err);
    }
  }

  // change the button to a send state when the user is typing again
  const handleFocus = () => setSent(false);

  // API call to check if email is real
  async function checkEmail(e) {
    var response = await axios.get("/realEmail/" + e.target.value);
    if (!(await response.data.isValid)) {
      alert("Email is invalid!");
      setEmail(""); // reset the input field
    }
  }

  const resetEmail = () => setEmail("");

  return (
    <section className="contact anchor" id="contact-section">
      <div className="container">
        <h1 className="display-4 font-weight-bolder pt-3 text-center">Questions?</h1>

        <Form className="contactForm" onSubmit={handleSubmit}>
          <Form.Group controlId="formFirstName">
            <Form.Label>
              First Name<span className="required">*</span>
            </Form.Label>
            <Form.Control
              className="input-field"
              name="firstname"
              type="text"
              placeholder="John"
              required
              onFocus={handleFocus}
            />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control className="input-field" name="lastname" type="text" placeholder="Doe" onFocus={handleFocus} />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>
              Email<span className="required">*</span>
            </Form.Label>
            <Form.Control
              className="input-field"
              name="email"
              type="email"
              value={email}
              placeholder="example@email.com"
              required
              onFocus={handleFocus}
              onBlur={checkEmail}
              onChange={(e) => setEmail(e.target.value)}
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
              Subject<span className="required">*</span>
            </Form.Label>
            <Form.Control
              className="input-field"
              name="subject"
              type="text"
              placeholder="Let's Connect!"
              required
              onFocus={handleFocus}
            />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              className="input-field"
              name="phone"
              type="tel"
              pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
              placeholder="(012) 345-6789"
              onFocus={handleFocus}
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
              Message<span className="required">*</span>
            </Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              rows="10"
              cols="30"
              placeholder="If you would like to connect, please share your social media and/or website here..."
              required
              onFocus={handleFocus}
            />
          </Form.Group>

          <Form.Group controlId="formCheckbox">
            <Form.Check
              type="checkbox"
              label={[
                "I am not a robot",
                <span key={1} className="required">
                  *
                </span>,
              ]}
              required
            />
          </Form.Group>
          <div className="form-buttons pb-3">
            <Button type="submit" variant={sent ? "success" : "primary"}>
              {sent ? "Sent" : "Send"}
            </Button>

            <Button
              ref={resetBtn}
              type="reset"
              variant="secondary"
              className="ml-1"
              id="resetButton"
              onClick={resetEmail}
            >
              Clear
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
}
