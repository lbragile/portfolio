import React, { useState } from "react";
import axios from "axios";

import { Button, Form } from "react-bootstrap";
import "./ContactForm.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault(); // prevent going to a different page

    var formData = {
      first: e.target.firstname.value,
      last: e.target.lastname.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      var response = await axios.post("/contact", formData);
      console.log(response);

      // input fields are controlled elements => cannot change without
      // modifying state so cannot do form.reset()
      //reset the form values after it is submitted successfully
      document.getElementById("resetButton").click();
      setEmail("");
      setSent(true);
    } catch (err) {
      console.error(err);
    }
  }

  // user pressed "send" button -> changes to green color and says "sent",
  // otherwise is blue color and says "send"
  function getSubmitButtonType() {
    let variant_type = sent ? "success" : "primary";
    let button_text = sent ? "sent" : "send";

    return (
      <Button type="submit" variant={variant_type}>
        {button_text}
      </Button>
    );
  }

  // change the button to a send state when the user is typing again
  function handleFocus() {
    setSent(false);
  }

  // API call to check if email is real
  async function checkEmail(e) {
    var response = await axios.get(
      "https://isitarealemail.com/api/email/validate?email=" + e.target.value,
      {
        crossDomain: true,
        headers: {
          Authorization: "Bearer 85b25269-7b1b-4b10-b73c-10838a91e05c",
        },
      }
    );
    var isValid = (await response.data.status) === "valid";

    console.log(isValid);
    if (!isValid) {
      alert("Email is invalid!");
      setEmail(""); // reset the input field
    }
  }

  return (
    <section className="contact" id="contact-section">
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
              onFocus={handleFocus}
            />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              className="input-field"
              name="lastname"
              type="text"
              placeholder="Doe"
              onFocus={handleFocus}
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
              Subject <span className="required">*</span>
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
              Message <span className="required">*</span>
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
                "I am not a robot ",
                <span key={1} className="required">
                  *
                </span>,
              ]}
              required
            />
          </Form.Group>
          <div className="form-buttons pb-3">
            {getSubmitButtonType()}

            <Button
              type="reset"
              variant="secondary"
              className="ml-1"
              id="resetButton"
            >
              Clear
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
}
