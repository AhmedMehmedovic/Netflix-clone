/* eslint-disable react/prop-types */
import React from "react";
import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { Navigate } from "react-router-dom";

export function SelectProfileContainer({ user, setProfile }) {
  const login = function () {
    setProfile({ displayName: user.displayName, photoURL: user.photoURL });
    <Navigate to={ROUTES.BROWSE} replace />;
  };

  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who`s watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={login}>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
