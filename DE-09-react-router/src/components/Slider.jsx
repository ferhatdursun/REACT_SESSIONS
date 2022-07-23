import React from "react";
import { Carousel } from "react-bootstrap";
import devops from "../img/devops.jpeg";
import about from "../img/about.jpeg";
import isa from "../img/logo.png";

const Slider = () => {
  return (
    <Carousel fade autoPlay={true} interval={5000}>
      {/* //!! fade; resim gecislerinde resimleri soluklastirarak gecmesini //!! */}
      {/* //!! sagliyor. interval; resimlerim akis süresini belirliyor. */}
      <Carousel.Item>
        <img className="d-block w-100" src={about} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={devops} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={isa} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
