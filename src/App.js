import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages/index";
import { ProtectedRoute1 } from "./helpers/routes";
import { useAuthListener } from "./hooks";

function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Routes>
        {/* <Route
          element={
            <Routes>
              <IsUserRedirect user={user} loggedInPath={ROUTES.SIGN_IN} path={ROUTES.SIGN_IN} replace />
            </Routes>
          }
        ></Route>

        <Route
          element={
            <Routes>
              <IsUserRedirect user={user} loggedInPath={ROUTES.SIGN_UP} path={ROUTES.SIGN_UP} exact />
            </Routes>
          }
        ></Route> */}
        <Route element={<ProtectedRoute1 user={user} path={ROUTES.BROWSE} exact />}></Route>
        {/* <Route
          element={
            <Routes>
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact />
            </Routes>
          }
        ></Route> */}

        <Route exact path={ROUTES.HOME} element={<Home />}></Route>
        <Route exact path={ROUTES.BROWSE} element={<Browse />}></Route>
        <Route exact path={ROUTES.SIGN_IN} element={<Signin />}></Route>
        <Route exact path={ROUTES.SIGN_UP} element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
