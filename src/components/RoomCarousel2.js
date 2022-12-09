import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RoomCarousel.css';
import svg1 from "../images/roomkast/wireframes_1.svg"
import svg2 from "../images/roomkast/wireframes_2.svg"
import svg3 from "../images/roomkast/wireframes_3.svg"


function RoomCarousel2() {
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
    </Carousel>
    
  );
}

export default RoomCarousel2;