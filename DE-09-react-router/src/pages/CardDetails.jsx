import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data";

const CardDetails = () => {

    const navigate = useNavigate();
    // ! go back ve go home buttonlari icin

  const { name } = useParams();

  return (
    <Container>
      {data.map(
        (i) =>
          i.name === name && (
            //!  map ten sonra ki; eger i.name===name ise parantezin icerisini yap
            <div>
              <h2>{i.name}</h2>
              <img src={i.img} width="300px" alt="" />
              <h3>{i.text}</h3>
              <div>
                <Button variant="danger" onClick={() => navigate(-1)}>
                  Go Back
                </Button>
                <Button variant="danger" onClick={() => navigate("/")}>
                  Go Home
                </Button>
                {/* //! linke yönlendirme varsa to digerleri icin navigate kullaniliyor. */}
              </div>
            </div>
          )
      )}
    </Container>
  );
};

export default CardDetails;
