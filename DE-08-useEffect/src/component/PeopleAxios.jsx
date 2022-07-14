import axios from "axios";
import faker from "../../package.json";
import { useState, useEffect } from "react";

const PeopleAxios = () => {
  const [insanlar, setInsan] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setInsan(res.data));
  }, []);
  //! burada ki [] ve yukarida ki useEffect'den dolayi sonsuz döngüye girmiyor ve sadece bir kere yazdiriliyor.

  //! axios ile json yapmaya gerek kalmiyor
  //! ve veri ekleme, gönderme islemleri yapilabiliyor.
  //!

  const postInsan = () => {
    axios.post("https://jsonplaceholder.typicode.com/users", {
      id: faker.datatype.number(),
      name: faker.name.findName(),
      phone: faker.phone.number(),
    });
  };

  return (
    <div className="container text-center mt-4">
      <button className="btn-lg btn-success" onClick={postInsan}>
        POST
      </button>
      <div className="row">
        {insanlar.map((insan) => {
          const { id, name, phone } = insan;

          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={id}>
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${id}:seed.svg`}
                alt=""
              />
              <h5 className="text-danger mt-4">{name}</h5>
              <h6>{phone}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PeopleAxios;
