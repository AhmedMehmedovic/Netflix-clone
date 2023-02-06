/* eslint-disable react/prop-types */
import React from "react";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          {...rest}
          render={() => {
            if (!user) {
              return children;
            }

            if (user) {
              return (
                <Navigate
                  to={{
                    pathname: loggedInPath,
                  }}
                />
              );
            }

            return null;
          }}
        />
      </Routes>
    </BrowserRouter>
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          {...rest}
          render={({ location }) => {
            if (user) {
              return children;
            }
            if (!user) {
              return (
                <Navigate
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
      </Routes>
    </BrowserRouter>
  );
}

export function ProtectedRoute1({ user, children }) {
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}
