import React, { useContext } from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Container } from "components/common";
// import dev from "assets/illustrations/skills.svg";
import {
  Wrapper,
  BenefitsWrapper,
  Grid,
  Tile,
  TileBox,
} from "./styles";

export const Benefits = () => {
  const { theme } = useContext(ThemeContext);

  const benefits = [
    [
      {
        title: "Konversationsrate",
        num: 1,
        text:
          "lass deine Kunden mit deinem Produkt interagieren und erziele mehr Verkäufe.",
      },
      {
        title: "Retouren",
        num: 2,
        text:
          "senke die Anzahl der Retouren durch ein besseres Produktverständnis",
      },
    ],

    [
      {
        title: "Integration",
        num: 3,
        text:
          "die AR und 3D Objekten in wenigen Minuten. Keine Programierkentnisse nötig.",
      },
      {
        title: "Analysedaten",
        num: 4,
        text:
          "können zur Optimierung ihrer Darstellungen auf Basis von Nutzungsdaten verwendet werden.",
      },
    ],
  ];

  return (
    <Wrapper id="benefits">
      <BenefitsWrapper as={Container}>
        <h2>Vorteile</h2>
        <Grid>
          {benefits.map((content, index) => (
            <TileBox key={index}>
              {content.map((tile, indexTile) => (
                <Tile key={indexTile} theme={theme}>
                  <h1>{tile.num}</h1>
                  <div>
                    <h6>{tile.title}</h6>
                    <p>{tile.text}</p>
                  </div>
                </Tile>
              ))}
            </TileBox>
          ))}
        </Grid>
      </BenefitsWrapper>
    </Wrapper>
  );
};
