import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, RecipeCards, RecipeHeader, RecipeImage } from "./HomeStyles";

//! Home dan recipe1 olarak gönderilen veriyi burada ayni isimle karsiliyoruz. Sonra gelen verileri burada yazdiriyoruz.
const RecipeCard = ({ recipe1 }) => {
  let navigate = useNavigate();

  const detayaGit = () => {
    navigate("/details", { state: { recipe1 } });
    //! state sayesinde tiklanilan resmin detaylari gösteriliyor.
    //! verileri state icine göm ve details sayfasina giderken yaninda götür. Ama ilk olarak App.js sayfasina gidiliyor.
    //! App.js details sayfasina yönlendiriyor.
    //! Details sayfasinda RecipeCarda state icine gömülen verileri cekebilmek icin state'in kardesi olan useLocation kullanilmasi gerekiyor.
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
