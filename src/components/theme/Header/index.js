import React, { useState } from "react";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
import Sidebar from "./Sidebar";
import { Wrapper, Overlay, InnerWrapper } from "./styles";

export const Header = () => {
  const [sidebar, toggle] = useState(false);

  return (
    <Wrapper>
      <InnerWrapper>
        <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
        <Navbar />
        <Hamburger sidebar={sidebar} toggle={toggle} />
        <Sidebar sidebar={sidebar} toggle={toggle} />
      </InnerWrapper>
    </Wrapper>
  );
};
