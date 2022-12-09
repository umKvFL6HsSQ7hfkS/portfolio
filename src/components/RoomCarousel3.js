import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RoomCarousel.css';
import svg1 from "../images/roomkast/critique_1.svg"
import svg2 from "../images/roomkast/critique_2.svg"
import svg3 from "../images/roomkast/critique_3.svg"
import svg4 from "../images/roomkast/critique_4.svg"
import svg5 from "../images/roomkast/critique_5.svg"
import svg6 from "../images/roomkast/critique_6.svg"
import svg7 from "../images/roomkast/critique_7.svg"


function RoomCarousel3() {
  return (
    <Carousel variant="dark" className="caro">
      <Carousel.Item >
        <img 
          className="img1"
          src={svg1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="img1"
          src={svg2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img1"
          src={svg3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img1"
          src={svg4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img1"
          src={svg5}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img1"
          src={svg6}
          alt="Sixth slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img1"
          src={svg7}
          alt="Seventh slide"
        />
      </Carousel.Item>
    </Carousel>
    
  );
}

export default RoomCarousel3;