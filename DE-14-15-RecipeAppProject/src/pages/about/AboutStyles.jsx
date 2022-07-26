import styled from "styled-components";

export const AboutContainer = styled.div`
  /* bütün about */
  height: 90vh;
  background-color: rgb(0, 172, 181);

  span {
    color: orange;
    font-family: "Girassol", sans-serif;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    color: blueviolet;
    font-size: 3rem;
  }
`;

export const InfoContainer = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: auto;
  a {
    width: 80%;
    font-size: large;
    color: orange;
    display: flex;
    flex-flow: column;
    justify-content: right;
    text-align: right;
    text-decoration: none;
    border: 2px solid white;
    padding: 3rem;
  }
  span {
    display: inline-flex;
    justify-content: right;
    text-align: right;
    color: blueviolet;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const StyledImage = styled.img`
  width: 500px;
  display: flex;
  margin: 2rem auto;
`;
