import React from "react";
import { Footer } from "../components";
import { LINKEDIN, FACEBOOK, GMAIL, GITHUB } from "../lib/personalInfo";

import { SocialIcon } from "react-social-icons";

export function FooterContainer() {
  const now = new Date();
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <SocialIcon url={LINKEDIN} />
        </Footer.Column>
        <Footer.Column>
          <SocialIcon url={FACEBOOK} />
        </Footer.Column>
        <Footer.Column>
          <SocialIcon url={GMAIL} />
        </Footer.Column>
        <Footer.Column>
          <SocialIcon url={GITHUB} />
        </Footer.Column>
      </Footer.Row>

      <Footer.Text>
        I build this app during my learning React framework. I follow the course on <a href="https://www.youtube.com/watch?v=x_EEwGe-a9o">this link</a> and
        created this app. During this exercise I learned a lot of new things.
      </Footer.Text>

      <Footer.Describe>Copyright {now.getFullYear()} © Ahmed Mehmedović</Footer.Describe>
    </Footer>
  );
}
