import React, { createContext, useState } from "react";
import OgrenciList from "./components/OgrenciList";
import data from "./data";

//! Ögrenci object i ve fonksiyon icin context create ediyoruz, disaridan kullanima aciyoruz.
export const OgrenciContext = createContext();

const App = () => {
  const [ogrenci, setOgrenci] = useState(data);

  const changeRenk = (id, newColor) => {
    setOgrenci(
      ogrenci.map((i) =>
        //! ...i yaptigimiz data; burada color haricinde ki name, email, ve age bilgileri aynen kalsin. Sen sadece color üstünde degisiklik yap demek. Bunu yazmazsak diger bilgiler gider sadece color bilgisi kalir.
        i.id === id ? { ...i, color: newColor } : i
      )
    );
  };

  return (
    <div>
      <OgrenciContext.Provider value={{ogrenci, changeRenk}}>
        <OgrenciList />
      </OgrenciContext.Provider>
    </div>
  );
};

export default App;
