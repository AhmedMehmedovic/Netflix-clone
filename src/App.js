import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import {  } from "./pages";
import * as ROUTES from "./constants/routes";
//import { IsUserRedirect } from "./helpers/routes";
import { useAuthListener } from "./hooks";
import Signin from "./pages/signin";
import Home from "./pages/home";
import Browse from "./pages/browse";

//import { IsUserRedirect } from "./helpers/routes";

export default function App() {
  const { user } = useAuthListener();
  // let navigate = useNavigate();

  // if (user === null) {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route auth={ROUTES.HOME} element={<Home />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // } else
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={user ? <Home /> : <Signin />} />
        <Route path={ROUTES.SIGN_IN} element={user ? <Browse /> : <Home />} />

        {/* <Route path="/" element={!user ? <Home /> : <Signin />} />
        <Route path={ROUTES.SIGN_IN} element={!user ? <Signin /> : <Home />} />
        <Route path={ROUTES.SIGN_UP} element={!user ? <Signup /> : <Signin />} />
        <Route path={ROUTES.BROWSE} element={!user ? <Signin /> : <Browse />} /> */}
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
