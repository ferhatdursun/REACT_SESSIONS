import { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";

const APP_ID = "ebee76fe";
const APP_KEY = "5cc1ea7173fe56f0a274fcß6e7818a55";
/****buraya kendi id ve key imizi yaziyoruz**********/

const Home = () => {
  const [query, setQuery] = useState("");
  //! url icerisinde ${query}, input icerisine girilen yemek adina göre arama yapiyor. Bunun icin de queryi burada useState ile tanimladik.
  const [yemekler, setYemekler] = useState([]);
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  //! meal de ayni query gibi ayni sebepten dolayi burada useState ile tanimlandi. Ve mealTypes[1] olursa inpu ici defaul olarak 1. index veya 2. 3. index numarali eleman görünür.

  // query=yazdığımız sorgu kelimesi, meal=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

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
      <Header setQuery={setQuery} setMeal={setMeal} getData={getData} />
    </div>
  );
};

export default Home;
