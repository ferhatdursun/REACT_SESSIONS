import { Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TeacherDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);
  const [kisi, setKisi] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setKisi(data));
  }, [id]);

  console.log(kisi);

  return (
    <Container className="text-center mt-4">
      <div>
        <h3>{kisi.name}</h3>
        <img
          src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
          alt=""
          width="300px"
        />
        <h4>{kisi.email}</h4>
        <h4>{kisi.phone}</h4>
      </div>

      <div>
        <Button variant="danger" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button variant="" onClick={() => navigate("/")}>
          Go Home
        </Button>
        {/* //! linke yönlendirme varsa to digerleri icin navigate kullaniliyor. */}
      </div>
    </Container>
  );
};

export default TeacherDetails;
