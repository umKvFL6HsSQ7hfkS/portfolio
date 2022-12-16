import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PersonaCarousel.css';
import board1 from "../images/personas/storyboard/board1.png";
import board2 from "../images/personas/storyboard/board2.png";
import board3 from "../images/personas/storyboard/board3.png";
import board4 from "../images/personas/storyboard/board4.png";
import board5 from "../images/personas/storyboard/board5.png";
import board6 from "../images/personas/storyboard/board6.png";
import board7 from "../images/personas/storyboard/board7.png";
import board8 from "../images/personas/storyboard/board8.png";


function PersonaCarousel() {
  return (
    <Carousel variant="dark" className="carousel-1">
      <Carousel.Item >
        <img 
          className="img-persona"
          src={board1}
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h5>Tired Teal enters Page Robinson and heads to enter the queue at the mailroom kiosk.
</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="img-persona"
          src={board2}
          alt="Second slide"
        />
        <Carousel.Caption className="caption">
          <h5>Tired Teal takes her card out so that she is ready to swipe her ID when it's her turn.
</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img-persona"
          src={board3}
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <h5>She then reaches the front of the line and swipes her card through the card reader attached to the kiosk.
</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img-persona"
          src={board4}
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <h5>The card reader only reads part of the ID, as indicated by the half-populated bar on the screen.
</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img-persona"
          src={board5}
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <h5>She swipes her card again, and this time, the card reader successfully works.
</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img-persona"
          src={board6}
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <h5>Tired Teals is running on very little sleep, and she ends up clicking the "Cancel" button.
</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img-persona"
          src={board7}
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <h5>Tired Teal has to swipe her card through the card reader again; it successfully works on the first try.
</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img-persona"
          src={board8}
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <h5>She is again brought to the new screen, and this time she clicks the "Pickup Now" button. She leaves the line and waits for her name to be called in the mailroom.
</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default PersonaCarousel;