import React from "react";

import { NavLink } from "react-router-dom";
import { Button, Form, Icon, Message } from "semantic-ui-react";

export default function SignedIn() {
  const message = {
    width: "513px",
  };

  const buttonsstyle = {
    backgroundColor: "#800080",
    color: "white",
  };

  return (
    <div>
      <Form>
       
        <Form.Group>
          <br />
          <Message size="hug" style={message}>
            <Message.Header>
              <Icon name="add user" /> Sign Up Now
            </Message.Header>
            <p>Join the opportunity-filled world of Naxus!</p>
            <Button type="submit" style={buttonsstyle} as={NavLink} to="/signup">
              Sign Up <Icon name="arrow alternate circle right" />
            </Button>
          </Message>
        </Form.Group>
        <br />
        <Form.Group>
          <Message size="hug">
            <Message.Header>
              <Icon name="lock" /> Register Your Nexus Card
            </Message.Header>
            <p>
              If you have become a member of Naxus CLUB from our stores,
              you can use your CLUB advantages on our website by setting a
              password.
            </p>
            <Button type="submit" style={buttonsstyle}>
              Continue <Icon name="arrow alternate circle right" />
            </Button>
          </Message>
        </Form.Group>
      </Form>
    </div>
  );
}
