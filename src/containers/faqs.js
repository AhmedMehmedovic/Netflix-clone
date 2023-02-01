import React from "react";
import { Accordion } from "../components";
import faqsData from "../fixtures/faqs.json";
import OptionForm from "../components/option-form";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Question</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      <OptionForm>
        <OptionForm.Input placeholder="Email address" />
        <OptionForm.Button>Try it now</OptionForm.Button>
        <OptionForm.Text>Ready to watch? Enter your email to create or restart your membership</OptionForm.Text>
      </OptionForm>
    </Accordion>
  );
}
