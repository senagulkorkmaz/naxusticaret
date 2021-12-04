import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container, Label } from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  const containerdisayn = {
    border: "solid",
    borderColor: "#800080",
    width: "400px",
  };

  const buttonback = {
    backgroundColor: "#800080",
    color: "white",
  };

  const labelstyle = {
    color: "black",
    
  };

  return (
    <Container style={containerdisayn} text>
      <h1 size="massive"> SİGN-UP </h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Label size="large" style={labelstyle}>
          First Name
        </Label>
        <TextField
          label="First Name"
          variant="filled"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Label size="large" style={labelstyle}>
          Last Name
        </Label>
        <TextField
          label="Last Name"
          variant="filled"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Label size="large" style={labelstyle}>
          E-MAİL
        </Label>
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label size="large" style={labelstyle}>
          Password
        </Label>
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button style={buttonback} type="submit" variant="contained">
          Signup
        </Button>
      </form>
    </Container>
  );
};

export default Form;
