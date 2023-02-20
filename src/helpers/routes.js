/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

function Protected({ isSignedIn, children }) {
  if (!isSignedIn) {
    return <Navigate to={ROUTES.HOME} replace />;
  }
  return children;
}
export default Protected;
