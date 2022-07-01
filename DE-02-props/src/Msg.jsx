import React from 'react'

const Msg = (i) => {
  // console.log(props);
  const {nameMsg,telMsg}=i;
  // props=nameMsg="Osman"
  return (
    <div>
      <h1> {nameMsg}</h1>
      <p>{telMsg}</p>
    </div>
  );
};

// const Msg = ({nameMsg,telMsg}) => {

//   return (
//     <div>
//       <h1> {nameMsg}</h1>
//       <p>{telMsg}</p>
//     </div>
//   );
// };

export default Msg