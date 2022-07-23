import styled from "styled-components";

const ButtonSSS = styled.button`
  background-color: ${({ enes }) => (enes ? "white" : "purple")};
  color: ${({ enes }) => (enes ? "purple" : "white")};
  cursor: pointer;
  padding: 1rem 1.5rem;
  border: 2px solid blueviolet;
  font-family: "tahoma";
  &:hover {
    transform: scale(0.97);
  }
`;

export const DomatesButon = styled(ButtonSSS)`
  color: black;
  background-color: ${({ nurbaki }) => (nurbaki ? "yellow" : "green")};
  border: 3px solid red;
`;

export default ButtonSSS;
