import React,{useContext} from 'react'
import AnaUser from "./AnaUser";
import {KullaniciContext} from "../App"
const Isimler = () => {

//!   diziyi buraya getir, içinden isimleri bastır
// ve AnaUser child ına git 
 const {kullanici}= useContext(KullaniciContext)
  return (
    <div>
{kullanici.map((i)=> <h4>{i.login}</h4>)}

    <AnaUser kullanici={kullanici}/>
    </div>
    
  )
}

export default Isimler