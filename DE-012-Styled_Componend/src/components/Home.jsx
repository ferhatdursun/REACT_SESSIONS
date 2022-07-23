import React from "react";
import ButtonSSS, { DomatesButon } from "./styles/ButtonSSS";
import ContainerSSS from "./styles/ContainerSSS";
import HeaderSSS from "./styles/Header.SSS";
import LinkSSS from "./styles/LinkSSS";

const Home = () => {
  return (
    <ContainerSSS>
      <HeaderSSS>STYLED COMPONENTS</HeaderSSS>
      <ButtonSSS enes>CLICK</ButtonSSS>
      <ButtonSSS>CLICK</ButtonSSS>
      <DomatesButon>ClICK</DomatesButon>
      <DomatesButon nurbaki>ClICK</DomatesButon>
      <HeaderSSS renk="red">STYLED COMPONENTS</HeaderSSS>
      <LinkSSS href="https://www.hepsiburada.com/" target="_blank">
        CLARUSWAY
      </LinkSSS>
      <LinkSSS href="https://www.hepsiburada.com/" target="_blank">
        CLARUSWAY
      </LinkSSS>
    </ContainerSSS>
  );
};

export default Home;
