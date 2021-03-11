import React, { useContext } from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Video } from "components/common";
import {
  Wrapper,
  IntroWrapper,
  Details,
  Thumbnail,
  Percentage,
  Text,
} from "./styles";

import intro from "assets/videos/xohn.mp4";

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <Percentage>66%</Percentage>
          <Text>
            der Einkäufer sagt, dass Augmented Reality Sie in ihrer
            Kaufbereitschft bestärkt, das richtige Produkt zu kaufen.
          </Text>
        </Details>
        <Details></Details>
        {/* <Thumbnail>
          <StaticImage
            src="../../../images/blender.png"
            width={400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Mixer"
            style={{ marginBottom: `1.45rem` }}
          />
        </Thumbnail> */}
        <Video videoSrcURL={intro} videoTitle="Intro video xohn" />
      </IntroWrapper>
    </Wrapper>
  );
};
