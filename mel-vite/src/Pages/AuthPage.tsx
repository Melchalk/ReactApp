import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useAppDispatch } from "../redux/hooks";
import { login } from "../redux/AuthSlice";
import { useState } from "react";
import LoginUser from "../Services/AuthService";

export function LoginPage() {
    const [statePhone, setStatePhone] = useState<string>("");
    const [statePassword, setStatePassword] = useState<string>("");   

    return (
      <>
        <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
          <Form.Control type="phone" placeholder="name@example.com" onChange={(t) => setStatePhone(t.target.value)}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" onChange={(t) => setStatePassword(t.target.value)}/>
        </FloatingLabel>
        <br />
        <Button variant="warning" onClick={() => LoginUser(statePhone, statePassword)}>Ok</Button>
      </>
    );
}

export function RegisterPage() {
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