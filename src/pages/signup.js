import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/headers";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

function Signup() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || email === "";

  const handleSignUp = (event) => {
    event.preventDefault();
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            navigate(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName("");
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title> <Form.TextSmall> {error && <Form.Error>{error}</Form.Error>}</Form.TextSmall>
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input value={firstName} placeholder="First name" onChange={({ target }) => setFirstName(target.value)} />
            <Form.Input value={email} placeholder="Email address" onChange={({ target }) => setEmail(target.value)} />
            <Form.Input type="password" value={password} placeholder="Password" autoComplete="off" onChange={({ target }) => setPassword(target.value)} />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now</Form.Link>
          </Form.Text>
          <Form.TextSmall>This page is protected by Google reCHAPTCHA to ensure you`re not a bot. Learn more.</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default Signup;
