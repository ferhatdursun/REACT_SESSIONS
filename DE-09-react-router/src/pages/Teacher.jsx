import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Teacher = () => {
  const navigate = useNavigate();
  const [insanlar, setInsan] = useState([]);

  useEffect(() => {
    //! useEffect sonsuz döngüye girmemek icin kullaniliyor. en sonda ki [] de bunun bir parcasi.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setInsan(data));
  }, []);

  return (
    <div className="container text-center mt-4">
      <div className="row">
        {insanlar.map((insan) => {
          const { id, name, phone } = insan;
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={id}>
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
                style={{ cursor: "pointer" }}
                alt=""
                onClick={() => navigate(`/teacher/${id}`)}
                //! navigate onClick oldugun da anneye yol göstermek icin kullaniliyor.
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

export default Teacher;
