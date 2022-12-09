import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RedesignCarousel.css';
import img1 from "../images/redesign/homepage-original.png";
import img2 from "../images/redesign/product-original.png"
import img3 from "../images/redesign/footer-original.png"


function RedesignCarousel() {
  return (
    <Carousel variant="dark" className="carousel-1">
      <Carousel.Item >
        <img 
          className="img"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h5>Top of website homepage</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="img"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption className="caption">
          <h5>Product offerings listed on the homepage</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <h5>Website footer</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default RedesignCarousel;