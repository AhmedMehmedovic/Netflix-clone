/* eslint-disable react/prop-types */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  let navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return navigate(children);
        }

        if (user) {
          return navigate(loggedInPath);
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
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
