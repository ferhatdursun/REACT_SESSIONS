import React from "react";
import { useState, useEffect } from "react";
import Data from "../Helper/data";
import GörevEkle from "../Components/GörevEkle";
import GörevleriGöster from "../Components/GörevleriGöster";

const Home = () => {
  console.log(Data);

  const [görevler, setGörevler] = useState([]);

  useEffect(() => {
    setGörevler(Data);
  }, []);
  {
    /* Burada ki mavi köseli parantez data ilk yüklendiginde set görevler calissin demek. useEffectten dolayi da sadece bir kere calisiyor.*/
  }

  {
    /* Sayfa ilk yüklendigin de ilk return calistigi icin incele kisminda iki tane bos klasör görünüyor. */
  }
  return (
    <div>
      <GörevEkle görevler={görevler} setGörevler={setGörevler} />
      <GörevleriGöster görevler={görevler} setGörevler={setGörevler} />
    </div>
  );
};

export default Home;
