import React from "react";
import { FaTimesCircle } from "react-icons/fa";

// ! https://react-icons.github.io/react-icons

const GörevleriGöster = ({ görevler, setGörevler }) => {
  const deleteGorev = (id) => {
    setGörevler(görevler.filter((i) => i.id !== id));
    {
      /* //! burada setGörevlerin icerisinde olmazsa filterin ypaitigi degisiklikler ekran gösterilmez!!! */
    }
  };

  return (
    <div>
      {görevler.map((i) => {
        const { id, text, day, bitti } = i;

        return (
          <div
            className={bitti === true ? "done" : "gorev"}
            key={id}
            onDoubleClick={() =>
              setGörevler(
                görevler.map((i) =>
                  i.id === id ? { ...i, bitti: !i.bitti } : i
                )
              )
            }
          >
            {/*  burada ki key{id} veri icerisinde ki bilgilerden uniq olan bir */}
            {/*  tanesini aliyoruz. ileride bize lazim olacak. */}
            <h3>
              {text}
              <FaTimesCircle
                style={{ color: "red" }}
                onClick={() => deleteGorev(id)}
                // ! üstte ki key={id} ile silme islemini yapabiliyoruz.
              />
            </h3>

            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GörevleriGöster;
