import React from "react";
import { AboutContainer, StyledImage, InfoContainer, Container } from "./AboutStyles";
import codingsvg from "../../assets/coding.svg";

const About = () => {
  return (
   
      <div>
        <AboutContainer>
          <StyledImage src={codingsvg} />
          <span>
            About Software Develoer <p>Ferhat Dursun</p>
          </span>

          <InfoContainer>
            <a href="">
              I'm Ferhat. <br /> I'm currently learning Full-Stack Development
              Languages. <br /> I've already know JS, ReactJS, ReactNative,
              MongoDB, SQL, Python, AWS Services. <br />
              <span>Send me: ferhatdursnu@gmail.com</span>
            </a>
          </InfoContainer>
        </AboutContainer>
      </div>
   
  );
};

export default About;
