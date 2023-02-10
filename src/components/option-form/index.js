/* eslint-disable react/prop-types */
import React from "react";
import { Container, Input, Button, Text, Break } from "./styles/option-form";
//import { Navigate, Route } from "react-router-dom";
// import * as ROUTES from "../../constants/routes";

export default function OptionForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptionForm.Input = function OptionFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptionForm.Button = function OptionFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try now" />
    </Button>
  );
};
OptionForm.Text = function OptionFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
OptionForm.Break = function OptionFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
