import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "semantic-ui-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const loginstyle = {
    margin: "40px 50px 10px 700px ",
    width: "300px",
  };

  const containerstyle = {
    width: "300px",
    margin: "15px 50px 10px 700px ",
    backgroundColor: "#FFFFFF",
    height: "300px",
    borderStyle: "solid",
    borderColor: "#800080",
  };

  const girisyapstyle = {
    color: "black",
  };
  const buttonn = {
    backgroundColor: "#800080",
  };

  return (
    <Container style={containerstyle}>
      <Form onSubmit={handleSubmit}>
        <Form.Group style={girisyapstyle}>
          <h1>
            <b>-LOGİN-</b> 
          </h1>
        </Form.Group>
        <br />
        <Form.Group style={girisyapstyle} size="lg" controlId="email">
          <h6>
            <b>E-MAİL</b>
          </h6>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group style={girisyapstyle} size="lg" controlId="password">
          <h6>
            <b>ŞİFRE</b>
          </h6>

          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button
          style={buttonn}
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
}
