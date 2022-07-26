import React from "react";
import { useNavigate } from "react-router-dom";
import { RecipeCard, Button, RecipeHeader, RecipeImage } from "./HomeStyles";

//! Home dan recipe1 olarak gönderilen veriyi burada ayni isimle karsiliyoruz. Sonra gelen verileri burada yazdiriyoruz.
const RecipeCard = ({ recipe1 }) => {
  let naviget = useNavigate();
  naviget("/details", { state: { recipe1 } });
  //! state sayesinde tiklanilan resmin detaylari gösteriliyor.
  //! burada details sayfasina geciyoruz.
  //! recipe1 de ki verileri state göm ve al git.

  const detayaGit = () => {};

  return (
    <RecipeCard>
      <RecipeHeader>{recipe1.label}</RecipeHeader>
      <RecipeImage src={recipe1.image} />
      <Button onClick={detayaGit}>Details</Button>
    </RecipeCard>
  );
};

export default RecipeCard;
