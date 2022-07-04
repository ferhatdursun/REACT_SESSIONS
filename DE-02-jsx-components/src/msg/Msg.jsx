import React from 'react'
import Clock from '../clock/Clock'
import img_1 from '../img/voltran.jpg'
import "./Msg.css"


const stylesA= {
  color: "green",
  fontFamily:"Thoma",
  border:"1px solid red"
}


const Msg = () => {
  return (
    <div>
    <h2 style={{color:"red"}}>Hosgeldin React</h2>


    <p style={stylesA}>Burasi JSX alani</p>//*!intörnel
    <img className='msg-img' src={img_1} alt="" />
    <img className='msg-img' src={"https://cdn.pixabay.com/photo/2020/11/22/19/19/louvre-5767708__340.jpg"} alt="" width={1200}/>
    
    <Clock/>
    </div>
  )
}

export default Msg