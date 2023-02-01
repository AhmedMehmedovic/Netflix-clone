import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />}></Route>
        <Route exact path={ROUTES.BROWSE} element={<Browse />}></Route>
        <Route exact path={ROUTES.SIGN_IN} element={<Signin />}></Route>
        <Route exact path={ROUTES.SIGN_UP} element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
