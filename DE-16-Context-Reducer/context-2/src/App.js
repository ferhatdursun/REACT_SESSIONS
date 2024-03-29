import React, { useState, useEffect, createContext } from "react";
import GosterUsers from "./pages/GosterUsers";

export const KullaniciContext = createContext()


const App = () => {
  const [kullanici, setKullanici] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setKullanici(data));
  }, []);

  const degistirWidth = (id, newWidth) => {
    setKullanici(() =>
      kullanici.map((i) => (i.id === id ? {...i, width: newWidth } : i)))
  
  }

  // console.table(kullanici); Verileri console de tablo halinde görmek icin kullaniliyor.

  return (

    <KullaniciContext.Provider value={{kullanici, degistirWidth}}>
      <GosterUsers />
    </KullaniciContext.Provider>
  );
};

export default App;
