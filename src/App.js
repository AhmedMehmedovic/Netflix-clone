import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages/index";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

function App() {
  const user = {};
  return (
    <Router>
      <Routes>
        <Route
          exact
          element={
            <Routes>
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                <Signin />
              </IsUserRedirect>
            </Routes>
          }
        ></Route>

        <Route
          exact
          element={
            <Routes>
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                <Signup />
              </IsUserRedirect>
            </Routes>
          }
        ></Route>
        <Route
          exact
          element={
            <Routes>
              <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                <Browse />
              </ProtectedRoute>
            </Routes>
          }
        ></Route>
        <Route
          exact
          element={
            <Routes>
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                <Home />
              </IsUserRedirect>
            </Routes>
          }
        ></Route>

        {/* <Route exact path={ROUTES.HOME} element={<Home />}></Route>
        <Route exact path={ROUTES.BROWSE} element={<Browse />}></Route>
        <Route exact path={ROUTES.SIGN_IN} element={<Signin />}></Route>
        <Route exact path={ROUTES.SIGN_UP} element={<Signup />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
