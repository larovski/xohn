import React from "react";
import { Container } from "components/common";
import { Wrapper, Flex, Links, Details } from "./styles";
import social from "./social.json";

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
      {/* <Links>
        {social.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
          >
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links> */}
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
