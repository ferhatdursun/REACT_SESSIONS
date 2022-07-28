import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, MenuLink, Nav,Menu } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { Hamburger } from "./NavbarStyles";
const Navbar = () => {
  const [acik, setAcik] = useState(false);
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>

      <Hamburger onClick={() => setAcik(!acik)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu onClick={() => setAcik(!acik)} osman={acik}>
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
