import { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import RecipeCard from "./RecipeCard";
import homeSvg from "../../assets/home.svg";

const APP_ID = "4e9f05eb";
const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
/****buraya kendi id ve key imizi yaziyoruz**********/

const Home = () => {
  const [query, setQuery] = useState("");
  //! url icerisinde ${query}, input icerisine girilen yemek adina göre arama yapiyor. Bunun icin de queryi burada useState ile tanimladik.
  const [yemekler, setYemekler] = useState([]);
  //! normalde useState ile yemekler adında boş bir dizi oluşturmamız, return den sonra map işleminde hata almamak için önemli,
  //! boş dizi oluşturmazsak, dizi varsa map le dememiz gerekir.bu örnekte dizi varsa dizi elemanlarını dizi yoksa aşçı resmini
  //! bastır diyeceğim için, yani dizinin varlığını kontrol ederek işlem yaptığım için, en başta yemekler i dizi değil boşluk yaptım
  const ögünTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [ögün, setOgun] = useState(ögünTypes[0].toLowerCase());
  //! meal de ayni query gibi ayni sebepten dolayi burada useState ile tanimlandi. Ve mealTypes[1] olursa inpu ici defaul olarak 1. index veya 2. 3. index numarali eleman görünür.

  // query=yazdığımız sorgu kelimesi, meal=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ögün}`;

  //! URL den veri cekme islemi

  const getData = async () => {
    const veri = await axios.get(url);
    setYemekler(veri.data.hits);
    //! Veriler axios ile cekilirse json yapmaya gerek kalmiyor.
    //! sonrasinda bu verileri icerisine atmak icin bir useState ihtiyaci doguyor. yemekler
    //! setYemekler(veri) yapinca veri adinda ki urlden gelen datalar suanda yemeklerin icerisine gömüldü.
  };

  return (
    <div>
      {/* Veriler url ile Home sayfasinda cekildiginden ve useStatelerin degistirebilme yetenekleri ile bu veriler üzerinde oynamalar yapabildigimizden dolayi bunlarin hepsini burada Header sayfasina göndermemmiz gerekiyor. */}
      {/*  Buradaki gönderilenlerden dolayi Header sayfasina ne yazilirsa ekrana bastirilir. */}
      <Header setQuery={setQuery} setOgun={setOgun} getData={getData} />

      {/* yemekler diye bir dizi varsa MainContainer dizisini bastir ?, yoksa : img yi bastir  */}
      {yemekler ? (
        <MainContainer>
          {yemekler.map((i, index) => (
            <RecipeCard recipe1={i.recipe} key={index} />
          ))}
          {/* yemekler burada = veri.data.hits. ama bunlarin altinda da recipe var verilere ulasabilmek icin. deshalb i.recipe yaziyoruz. */}
          {/* her bir elemani RecipeCardin icine bastir. */}
          {/*  index sayisi uniq oldugundan dolayi key icine id degil index yazdik */}
          <RecipeCard />
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
