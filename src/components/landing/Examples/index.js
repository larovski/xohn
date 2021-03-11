import React, { useContext } from "react";
// import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card, TitleWrap } from "components/common";
import Star from "components/common/Icons/Star";
import Fork from "components/common/Icons/Fork";
import { Wrapper, Grid, Item, Content, Stats, Languages } from "./styles";

export const Examples = () => {
  const { theme } = useContext(ThemeContext);
  const edges = ["hi"];

  return (
    <Wrapper as={Container} id="examples">
      <h2>Examples</h2>
      <Grid>
        {edges.map((node, index) => (
          <Item
            key={index}
            as="a"
            href={node}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <Card theme={theme}>
              <Content>
                <h4>Lars</h4>
                <p>{node}</p>
              </Content>
              <TitleWrap>
                <Stats theme={theme}>
                  <div>
                    <Star color={theme === "light" ? "#000" : "#EFEBE7"} />
                    <span>{5}</span>
                  </div>
                  <div>
                    <Fork color={theme === "light" ? "#000" : "#EFEBE7"} />
                    <span>{10}</span>
                  </div>
                </Stats>
                <Stats theme={theme}>
                  <Languages>Deutsch</Languages>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
