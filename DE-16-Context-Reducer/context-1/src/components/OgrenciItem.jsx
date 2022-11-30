import React, { useContext } from "react";
import { OgrenciContext } from "../App";

const OgrenciItem = () => {
  //! context ten student object ini buraya aliyoruz.

  const { ogrenci } = useContext(OgrenciContext);
  const { changeRenk } = useContext(OgrenciContext);

  console.log(ogrenci);
  {
    ogrenci.map((i) => {
      return (
        <div
          key={i.id}
          style={{
            backgroundColor: i.color,
            paddingBottom: "2rem",
            marginBottom: "2rem",
          }}
        >
          <h3>NAME:{i.name}</h3>
          <h4>EMAIL:{i.email}</h4>
          <h4>AGE:{i.age}</h4>
          Color: <input type="text" name="color" value={i.color}
          onChange={(e)=>changeRenk(i.id,e.target.value)}

          />
        </div>
      );
    });
  }
};

export default OgrenciItem;
