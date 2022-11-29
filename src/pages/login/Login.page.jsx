import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  const defaultfields = {
    userName: "",
    password: "",
  };

  const [dataFields, setDataFields] = useState(defaultfields);
  const { userName, password } = dataFields;

  const [isDisabled, setIsDisabled] = useState(true);

  const handleOnChange = (event) => {
    setDataFields({ ...dataFields, [event.target.name]: event.target.value });
    if (userName?.length === 0 || password?.length === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName);
    console.log(password);
  };

  return (
    <Container fluid="md">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter user Name"
            name="userName"
            value={userName}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
