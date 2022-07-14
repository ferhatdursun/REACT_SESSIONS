//? React, JSX kullanir.
//? JSX'te, HTML ögelerini dogrudan JS'de kullanabiliriz

//! Components birlestirilmis bir HTML,CSS,JS kodu döndürülebilir...
//! Ancak, tek bir kapsayici (div,section, article, <> etc. gibi) ögesi döndürmesi gerekir.

//* JSX'te Styling cesitli sekillerde gerceklestirilebilir.
//* 1-) Inline-Styling kullanilabilir.
//* 2-) Styling, local veya global bir degisken olarak tanimlanabilir...
//* 3-) Styling external stylesheet (harici stil sayfasi) olarak tanimlanabilir.

//! NOTES:

//* styling icin, property-value(object) yapisi kullanilir.
//* property name icin camelCase yazi sekli, class tanimlamalari icin className ismi kullanilir.
//* Material UI, Styled Component, Saas, Bootstrap etc. gibi 3. part kütüphaneler de stil icin kullanilabilir.

import React from "react";
import Clock from "../clock/Clock";
import img from "../img/inder.jpeg";

//! external
import "./Msg.css";

//!internal

const stylesA = {
  color: "green",
  fonnFamily: "Tahoma",
  border: "1px solid red",
};

const Msg = () => {
  return (
    <div>
      <h2 style={{ color: "red" }}>hosgeldin Ramazan</h2>
      <p style={stylesA}>burasi JSX alani</p>
      <img className="msg-img" src={img} alt="" />
      <img
        className="msg-img"
        width="200px"
        src="https://cdn.pixabay.com/photo/2020/11/22/19/19/louvre-5767708__340.jpg"
        alt=""
      />

      <Clock />
    </div>
  );
};
