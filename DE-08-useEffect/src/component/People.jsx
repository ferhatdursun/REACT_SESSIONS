import { useState, useEffect } from "react";

const People = () => {
  const [insanlar, setInsan] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setInsan(data));
  }, []);
  //! setInsan(data) 'nin sonun da ki [] ve basta ki useEffect'ten dolayi
  //! sadece bir kere yaziyo.her seferinde yazdirarak sonsuz döngüye girmiyor.
  //! setInsan()'in icerisine ne yazarsak const insanin icerisine gönderiliyor.
  //! fetch ile verileri cek sonra json'a cevir daha sonra o verileri data olarak ne yaparsan yap.

  return (
    <div className="container text-center mt-4">
      <div className="row">
        {insanlar.map((insan) => {
          const { id, name, phone } = insan;
          return (
            <div className="col-12 col-6 col-md-4 col-lg-2" key={id}>
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${id}:seed.svg`}
                alt=""
              />
              <h5>{name}</h5>
              <h6>{phone}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
