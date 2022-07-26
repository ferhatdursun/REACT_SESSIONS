import styled from "styled-components";

export const MainContainer = styled.div`
  /* arama yapıldığında açılan yiyecek kartlarının kutusu */

`;

export const RecipeCard = styled.div`
  /* search den sonra çıkan herbir yiyecek kart */
  background: #e1f1dd;
  
`;

export const RecipeImage = styled.img`
  /* kartların içindeki resimler */
  height: 150px;
  border-radius: 10px;
`;

export const Button = styled.button`
  /* view more  buton */
  background-color: #00adb5;

`;

export const RecipeHeader = styled.h1`
  /* kartlardaki yiyeceklerin adları */
  font-size: 1.5rem;
  text-align: center;
`;

export const ImgDiv = styled.div`
  /* anasayfadaki aşçı resminin en dış kutusu */

  display: flex;
  justify-content: center;
  margin: 50px;
  background-color: #00adb5;
`;

export const HomeImg = styled.img`
  /* ana sayfadaki esas resim */
  width: 80%;
  max-width: 750px;
`;
