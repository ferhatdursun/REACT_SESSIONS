import React, {useState} from 'react'

const Hooks = () => {

const[sayi,sayiDegistir]=useState(5)

const arttir=()=>{

 sayiDegistir(sayi+1)  
}
  return (
    <div className="container text-center mt-4">
<h2>**********************************************************</h2>

     <h1>USESTATE</h1>
<h2>COUNT:{sayi}</h2>
<button className="btn btn-primary" onClick={arttir}>Arttir</button>
    </div>
  )
}

export default Hooks