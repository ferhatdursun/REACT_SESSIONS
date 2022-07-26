import { useState } from "react";
import  Header  from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
const APP_ID = "ebee76fe";
const APP_KEY = "5cc1ea7173fe56f0a274fcß6e7818a55";
/****buraya kendi id ve key imizi yaziyoruz**********/

const Home = () => {
  const [query, setQuery] = useState("");

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  // query=yazdığımız sorgu kelimesi, meal=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  return (
    <div>
      
      <Header/>
    </div>
  )
};

export default Home;
