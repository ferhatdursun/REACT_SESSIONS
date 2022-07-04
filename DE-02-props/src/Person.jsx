import React from 'react'

const Person = (i) => {


const {name,img,tel}= i;

  return (
    <div>
      <h2>{name}</h2>
      <h2>{tel}</h2>
    <Msg 
        nameMsg={name}
        telMsg={tel}

    />

      <img src={img} alt="" />
    </div>
  )
}

export default Person