import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { useAuthListener } from "./hooks";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

import Home from "./pages/home";
import Browse from "./pages/browse";
import Protected from "./helpers/routes";

export default function App() {
  const { user } = useAuthListener();
  const [isLoged, setIsLoged] = useState(false);

  useEffect(() => {
    if (!user) {
      setIsLoged(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={user ? <Browse /> : <Home />} />
        <Route path={ROUTES.SIGN_IN} element={user ? <Browse /> : <Navigate to={ROUTES.HOME} /> && <Signin />} />
        <Route path={ROUTES.SIGN_UP} element={user ? <Browse /> : <Navigate to={ROUTES.SIGN_IN} /> && <Signup />} />

        <Route
          path={ROUTES.BROWSE}
          element={
            <Protected isSignedIn={!isLoged}>
              <Browse />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
