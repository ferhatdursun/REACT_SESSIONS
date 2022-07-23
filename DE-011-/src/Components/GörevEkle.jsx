import React from "react";
import { useState } from "react";


const GörevEkle = ({ görevler, setGörevler }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const [buton, setButon] = useState({
    renk: "red",
    yazi: "CLOSE ADD TASK BAR",
  });

  const butonClick = () => {
    if ((buton.renk = "red")) {
      setButon({
        renk: "purple",
        yazi: "SHOW ADD TASK BAR",
      });
    } else {
      setButon({
        renk: "red",
        yazi: "CLOSE ADD TASK BAR",
      });
    }
  };

  const yapSubmit = (e) => {
    e.preventDefault();
  {/*  Backende göndermeyi biraz beklet. Ilk olarak asagidi ki islemi yap.*/}

    const id = görevler.length + 1;
    setGörevler([...görevler, { id: id, text: text, day: day, bitti: false }]);
  };
  console.log(görevler);
    {/*  görevleri süslü icerisine yazarsak direk olarak id,text'e ulasabilirim.*/ }

  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button
          className="btn"
          style={{ backgroundColor: buton.renk }}
          onClick={butonClick}
        >
          {buton.yazi}
        </button>
      </header>
      {buton.renk === "red" && (
        <form onSubmit={yapSubmit}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
                          id="text"
                          type="text"
                          name="text"
                          value={görevler.text}
                          placeholder="Add Task"
                          onChange={(e) => {
                              setText(e.target.value);
                              {/* target dedigimiz zaman input degerinin icine giriyo ve input icerisinde yazani aliyor.*/ }
                              
                          }} 
            />
          </div>
          <div className="form-control">
            <label htmlFor="text">Day & Time</label>
            <input
              id="day"
              type="date"
              name="day"
              value={görevler.day}
              placeholder="Add Task"
              onChange={(e) => {
                setDay(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      )}
       {/* && anlami; butonun rengi kirmizi ise sagdaki islemleri yap!! */}
    </div>
  );
};

export default GörevEkle;
