import React, { useContext } from "react";
import { Link } from "gatsby";
import { ThemeContext } from "providers/ThemeProvider";
import { Container } from "components/common";
import logo from "assets/illustrations/xohn_logo.svg";
import NavbarLinks from "../NavbarLinks";
import { Wrapper, Brand, Logo } from "./styles";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        <Logo src={logo} alt="Hi this is our Logo" />
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
