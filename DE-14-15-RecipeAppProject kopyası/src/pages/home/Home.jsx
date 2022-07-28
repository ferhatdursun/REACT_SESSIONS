import { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import RecipeCard from "./RecipeCard";
import homeSvg from "../../assets/home.svg";

const APP_ID = "4e9f05eb";

const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

/****buraya kendi id ve key imizi yaziyoruz**********/

const Home = () => {
  const [query, setQuery] = useState("");

  const [yemekler, setYemekler] = useState();
  //! normalde useState ile yemekler adında boş bir dizi oluşturmamız, return den sonra map işleminde hata almamak için önemli, boş dizi oluşturmazsak, dizi varsa map le dememiz gerekir. bu örnekte dizi varsa dizi elemanlarını dizi yoksa aşçı resmini bastır diyeceğim için, yani dizinin varlığını kontrol ederek işlem yaptığım için, en başta yemekler i dizi değil boşluk yaptım

  const ögünTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const [ögün, setOgun] = useState(ögünTypes[0].toLowerCase());

  // query=yazdığımız sorgu kelimesi, meal=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ögün}`;

  const getData = async () => {
    const veri = await axios.get(url);
    setYemekler(veri.data.hits);
  };
  console.log(yemekler);

  return (
    <div>
      <Header setQuery={setQuery} setOgun={setOgun} getData={getData} />

      {yemekler ? (
        <MainContainer>
          {yemekler.map((i, index) => (
            <RecipeCard key={index} recipe1={i.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
