import React from 'react'
import Clock from '../clock/Clock'
import img from '../img/indir.jpeg'

//!external
import "./Msg.css"


//!internal

const stylesA ={

color:"green",
fontFamily:"Tahoma",
border:"1px solid red"

}
const Msg = () => {
  return (
    <div>
      <h2 style={{ color: "red" }}>hoşgeldin react</h2>
      
      <p style={stylesA}>burası JSX alanı</p>
     
      <img className="msg-img" src={img} alt="" />
      <img
        className="msg-img"
        width="200px"
        src="https://cdn.pixabay.com/photo/2020/11/22/19/19/louvre-5767708__340.jpg"
        alt=""
      />

      <Clock/>
    </div>
  );
}

export default Msg