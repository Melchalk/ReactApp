import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useAppDispatch } from "../redux/hooks";
import { login } from "../redux/AuthSlice";

export function AuthWindow() {
    const dispatch = useAppDispatch();
    
    return (
      <>
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <br />
        <Button variant="warning" onClick={() => dispatch(login())}>Ok</Button>
      </>
    );
}