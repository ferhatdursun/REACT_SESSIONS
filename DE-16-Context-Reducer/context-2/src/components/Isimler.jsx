import React,{useContext} from 'react'
import AnaUser from "./AnaUser";
import {KullaniciContext} from "../App"
const Isimler = () => {

//!   diziyi buraya getir, içinden isimleri bastır
//! ve AnaUser child veya componentine git 
 const {kullanici}= useContext(KullaniciContext)
  return (
    <div>

    <AnaUser kullanici={kullanici}/>
    </div>
    
  )
}

export default Isimler