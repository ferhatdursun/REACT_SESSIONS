import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* başlık ve 3 arama kutusunu taşıyan kutu */

  background: #00adb5;
`;

export const MainHeader = styled.h2`
  /* food app başlık */
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  /* 3 arama kutusunun toplandığı kutu */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FoodInput = styled.input`
  /* arama yapılacak ürünün yazıldığı input */
`;

export const Button = styled.button`
  /* search butonu */
  background-color: #e1f1dd;
`;

export const Select = styled.select`
  /* breakfast yazan select */
`;

export const img = styled.image`
  align-items: center;
  justify-content: center;
  width: 10rem;
`;
