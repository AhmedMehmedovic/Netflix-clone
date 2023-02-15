import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/headers";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

function Signin() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "";

  const handleSignin = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        //push to the browser
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title> <Form.TextSmall> {error && <Form.Error>{error}</Form.Error>}</Form.TextSmall>
          <Form.Base onSubmit={handleSignin}>
            <Form.Input value={email} placeholder="Email address" onChange={({ target }) => setEmail(target.value)} />
            <Form.Input type="password" value={password} placeholder="Password" autoComplete="off" onChange={({ target }) => setPassword(target.value)} />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign in
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
          </Form.Text>
          <Form.TextSmall>This page is protected by Google reCHAPTCHA to ensure you`re not a bot. Learn more.</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default Signin;
