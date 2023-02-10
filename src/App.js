import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="about"
          render={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
              <Signin />
            </IsUserRedirect>
          }
        />
        {/* <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect> */}
      </Routes>
    </BrowserRouter>
  );
}
