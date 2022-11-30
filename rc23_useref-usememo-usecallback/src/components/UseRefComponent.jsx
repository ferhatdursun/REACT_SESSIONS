import React, { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  //* useRef birinci kullanım
  //* hafızada yeri değişmeyen bir obje oluşturur, her render da yeniden render olmaz, onu engellemek için
  const [deger, setDeger] = useState(0);
  const valueRef = useRef(0);

  console.log("deger", deger);
  console.log("valueRef", valueRef.current);

  //* useRef ikinci kullanım
  //* DOM elementlerine ulaşmamızı sağlar
  const inputRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    // document.querySelector("input").focus();
    // console.log(document.querySelector("input"));
    //!2.yol
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  const arttir = () => {
    setDeger(deger + 1);
    valueRef.current++;
    //!setValue kapalıyken arttır a basınca valueRef artar ama render edilmediğinden console da valueRef i yazdırmaz,setValue açınca artmış hali yazar, UI da anlık görmeyeceksem kullanılabilir
  };

  const renkDegistir = () => {
    divRef.current.style.backgroundColor = inputRef.current.value;
  };

  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component </h2>
      <input ref={inputRef} type="text" placeholder="Enter text..." />
      <button onClick={renkDegistir}>ChangeBGColor</button>
      <button onClick={arttir}>increase Value</button>
    </div>
  );
};

export default UseRefComponent;
