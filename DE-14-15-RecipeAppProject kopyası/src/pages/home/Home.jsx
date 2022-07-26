import axios from "axios";
import { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import HomeSvg from "../../assets/home.svg";
const APP_ID = "ebee76fe";
const APP_KEY = "5cc1ea7173fe56f0a274fcß6e7818a55";
/****buraya kendi id ve key imizi yaziyoruz**********/

const Home = () => {
  const [query, setQuery] = useState("");

  const [yemekler, setYemekler] = useState();

  const ögünTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const [ögün, setOgün] = useState(ögünTypes[0].toLowerCase());

  // query=yazdığımız sorgu kelimesi, meal=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ögün}`;

  const getData = async () => {
    const veri = await axios.get(url);
    //! Burada (const veri) verileri cektik

    setYemekler(veri.data.hits);
    //!  Veriler geldi. datanin altinda ki hits'in icindeki veriler.
  };

  return (
    <div>
      <Header setQuery={setQuery} setOgün={setOgün} getData={getData} />
      //! Burada setQuery, setOgün ve getData Header sayfasina gönderildi.
      {yemekler ? (
        <MainContainer>
          //! yemeklerin ici doluysa veriler gelsin. Bos ise asci resmi
          görünsün.
          {yemekler.map((i, index) => (
            <RecipeCard key={index} recipe1={i.recipe} />
          ))}
          <RecipeCard />
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={HomeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
