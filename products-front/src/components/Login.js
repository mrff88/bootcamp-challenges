import { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAsync, selectUserLoggued } from "../slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const loggued = useSelector(selectUserLoggued);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const user = {
      email: elements[0].value,
      password: elements[1].value,
    };
    dispatch(loginAsync(user));
  };

  useEffect(() => {
    loggued && navigate("products");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggued]);

  return (
    <Container>
      <h1>Products Front</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
