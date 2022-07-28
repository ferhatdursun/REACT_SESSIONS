import React from "react";
import { Button, RecipeCards, RecipeHeader, RecipeImage } from "./HomeStyles";
import { useNavigate } from "react-router-dom";
const RecipeCard = ({ recipe1 }) => {
  let navigate = useNavigate();

  const detayaGit = () => {
    navigate("/details", { state: { recipe1 } });
  };

  return (
    <RecipeCards>
      <RecipeHeader>{recipe1.label}</RecipeHeader>
      <RecipeImage src={recipe1.image} />
      <Button onClick={detayaGit}>Details</Button>
    </RecipeCards>
  );
};

export default RecipeCard;
