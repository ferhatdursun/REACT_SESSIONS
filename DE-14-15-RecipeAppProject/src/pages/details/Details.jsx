import React from "react";
import { useLocation } from "react-router-dom";
import dietSvg from "../../assets/diet.svg";
import {
  HeaderContainer,
  DetailContainer,
  OtherPart,
  DetailPart,
  IngredContainer,
  ImgContainer,
} from "../details/DetailsStyles";
const Details = () => {
  const location = useLocation();
  //! RecipeCard da ki state: recipe1 verilerini burada useLocation ile karsiliyoruz.
  //! useLocation = useNavigate in kardesidir. navigate in state ine yüklenen veriyi navigate in yönlendirdigi sayfada karsilar.

  const recipe = location.state.recipe1;
  //! bastigin locationdan /beim RecipeCard.jsx/ verileri al gel

  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipe.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <>Nutrients</>
          <p>
            {recipe.totalNutrients.CA.label} :
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOCDF.label} :
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOLE.label} :{" "}
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {recipe.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{recipe.totalWeight}</p>
          <p>Calories: {Math.round(recipe.calories)}</p>
          {recipe.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>
        <ImgContainer>
          <img src={recipe.image} alt={recipe.label} />
        </ImgContainer>

        <IngredContainer>
          {recipe.ingredientLines.mao((i, index) => (
            <div key={index}>
              <p>
                {index + 1} * {i}
              </p>
            </div>
          ))}
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
