import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container } from "components/common";
import { Wrapper, SkillsWrapper, Details, Tile, TileBox } from "./styles";
import { StaticImage } from "gatsby-plugin-image";

const skills = [
  {
    title: "Die Angst vor dem Kaufen wird gemindert.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: (
      <StaticImage
        src="../../../assets/illustrations/07.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Mixer"
        style={{ minWidth: "250px" }}
      />
    ),
  },
  {
    title: "Zunahme des Vertrauens.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: (
      <StaticImage
        src="../../../assets/illustrations/08.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Mixer"
        style={{ minWidth: "250px" }}
      />
    ),
  },
  {
    title: "Bessere Kontinuität ihrer Marke.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: (
      <StaticImage
        src="../../../assets/illustrations/06.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Mixer"
        style={{ minWidth: "250px" }}
      />
    ),
  },
];

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <h1>Was bedeutet das für Ecommerce-Händler?</h1>
        <Details theme={theme}>
          {skills.map((content, index) => (
            <TileBox key={index} index={index}>
              {content.img}
              <Tile>
                <h6>{content.title}</h6>
                <p>{content.text}</p>
              </Tile>
            </TileBox>
          ))}
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
