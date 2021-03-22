import React, { useState, useRef } from "react";
import axios from "axios";

import { Button, Form } from "react-bootstrap";
import "./ContactForm.css";

export default function ContactForm(): JSX.Element {
  const [sent, setSent] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const resetBtn = useRef<HTMLButtonElement>(null);

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    const formData: FormData = new FormData(e.target as HTMLFormElement);
    await axios.post("https://tabmerger-backend.herokuapp.com/contact", [...formData]);
    resetBtn.current?.click();
    setSent(true);
  }

  return (
    <div className="container" id="contact-section">
      <h2 className="font-weight-bolder pt-3 text-center">
        Questions{" "}
        <span role="img" aria-label="person raising up their hand to ask a question">
          🙋‍♂️
        </span>
      </h2>

      <Form className="contactForm" onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>
            Name<span className="required">*</span>
          </Form.Label>
          <Form.Control
            className="input-field"
            name="firstname"
            type="text"
            placeholder="John Doe"
            required
            onFocus={() => setSent(false)}
          />
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
            onFocus={() => setSent(false)}
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
            onFocus={() => setSent(false)}
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
            onFocus={() => setSent(false)}
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
            rows={10}
            cols={30}
            placeholder="If you would like to connect, please share your social media and/or website here..."
            required
            onFocus={() => setSent(false)}
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
          <Button ref={resetBtn} type="reset" variant="secondary" id="resetButton">
            Clear
          </Button>
        </div>
      </Form>
    </div>
  );
}
