import React from "react";

import JumbotronContainer from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/headers";
import OptionForm from "../components/option-form";
import { Feature } from "../components";
import { Form } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          <OptionForm>
            <OptionForm.Input placeholder="Email address" />
            <OptionForm.Button>
              <Form.Link to="/signin">Try it now</Form.Link>
            </OptionForm.Button>
            <OptionForm.Break />
            <OptionForm.Text>Ready to watch? Enter your email to create or restart your membership</OptionForm.Text>
          </OptionForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
