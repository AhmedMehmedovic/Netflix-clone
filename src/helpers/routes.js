/* eslint-disable react/prop-types */
import React from "react";
//import { render } from "react-dom";
import { Link, Navigate } from "react-router-dom";
import { Route } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, path, ...rest }) {
  return (
    <React.Fragment
      {...rest}
      path={path}
      element={() => {
        if (!user) {
          return;
        }

        if (user) {
          return <Navigate to={loggedInPath} />;
        }
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      element={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Link
              to={{
                pathname: "signin",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
