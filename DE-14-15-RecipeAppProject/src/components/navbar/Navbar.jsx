import React from "react";
import { Logo, MenuLink, Nav, Menu } from "./NavbarStyles";
import { Hamburger } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [acik, setAcik] = useState(false);

  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Ferhat-Clarusway>"}</i>
        <span>recipe</span>
      </Logo>

      <Hamburger onClick={() => setAcik(!acik)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu>
        <MenuLink to="/about">About</MenuLink>
        <a href="https://www.github.com/ferhatdursun" target="_blank">
          Github
        </a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
