import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor Relations</Footer.Link>
          <Footer.Link href="#">Ways to watch</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Netflix Originals</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Acoount</Footer.Link>
          <Footer.Link href="#">Reedem Gift Cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Media Center</Footer.Link>
          <Footer.Link href="#">Buy Gift Cards</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Row>
        <Footer.Column></Footer.Column>
        <Footer.Column></Footer.Column>

        <Footer.Describe>This app i build during my learning React.</Footer.Describe>
      </Footer.Row>
      <Footer.Row>
        <Footer.Column></Footer.Column>

        <Footer.Link href="linkedin.com/in/ahmed-mehmedovic-bb0b22125">LinkedIn profile</Footer.Link>
        <Footer.Column>Copy Rights. Ahmed Mehmedović</Footer.Column>

        <Footer.Link href="facebook.com/hipmede">Facebook profile</Footer.Link>
      </Footer.Row>
    </Footer>
  );
}
