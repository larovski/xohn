import React from "react";
// import { useStaticQuery, graphql } from 'gatsby';
// import { ThemeContext } from "providers/ThemeProvider";
import { Container } from "components/common";
import { Wrapper } from "./styles";

export const Examples = () => {
  // const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="examples">
      <h2>Examples</h2>
      <div
        style={{
          backgroundColor: "red",
          height: "200px",
          width: "100%",
          maxWidth: "500px",
          margin: "auto",
        }}
      ></div>
    </Wrapper>
  );
};
