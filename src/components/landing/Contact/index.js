import React from "react";
import { Container } from "components/common";
// import contact from "assets/illustrations/contact.svg";
import { Wrapper, Details } from "./styles";
import ContactForm from "./ContactForm";

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h2>Wir haben ihr interesse geweckt?</h2>
      <p>Kontaktieren Sie uns.</p>
      <ContactForm />
    </Details>
  </Wrapper>
);
