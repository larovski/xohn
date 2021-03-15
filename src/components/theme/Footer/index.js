import React from "react";
import { Container } from "components/common";
import { Wrapper, Flex, Details } from "./styles";

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details left>
        <h2>KONTAKT</h2>
        <span>
          <p>E-Mail: info@xohn.de</p>
          <p>Ohneisser,</p>
          <p>Okenstr. 326a</p>
          <p>77652 Offenburg</p>
        </span>
      </Details>
      <Details right>
        <h2>Rechtliches</h2>
        <span>
          <p>Impressum</p>
          <p>Datenschutz</p>
          <p>AGB</p>
        </span>
      </Details>
    </Flex>
  </Wrapper>
);
