import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper, Item } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#contact">
       <Item>Kontakt</Item>
      </AnchorLink>
      <AnchorLink href="#benefits">
       <Item>Vorteile</Item>
      </AnchorLink>
      <AnchorLink href="#examples">
       <Item>3D Modelle</Item>
      </AnchorLink>
      <ToggleTheme />
    </Wrapper>
  );
};

export default NavbarLinks;
