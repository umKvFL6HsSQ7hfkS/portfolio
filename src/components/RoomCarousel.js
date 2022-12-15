import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RoomCarousel.css';
import svg1 from "../images/roomkast/sketches_1.svg"
import svg2 from "../images/roomkast/sketches_2.svg"
import svg3 from "../images/roomkast/sketches_3.svg"
import svg4 from "../images/roomkast/sketches_4.svg"

function RoomCarousel() {
  return (
    <Carousel variant="dark" className="caro">
      <Carousel.Item >
        <img 
          className="img"
          src={svg1}
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <p className="person">Person 1</p>
          <p>The first member of our group focused on incorporating <b>apartment preference</b> into the roommate search.</p>
            {/* <ul>
                <li> This person focused their solution on providing users the chance to find an <b> apartment </b>that they liked first.</li>
                <li>Then they could reach out to the individuals already renting that apartment who were looking for a roommate.</li>
                <li>Rather than the app generating a compatibility rating for potential roommates, <b> users determine compatibility on their own </b> using profile information and further contact off the app.</li>
            </ul>  */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="img"
          src={svg2}
          alt="Second slide"
        />
        <Carousel.Caption className="caption">
          <p className="person">Person 2</p>
          <p>The second member of our group designed a <b>marketplace-like</b> app focused on discovering individuals by looking through a list of profiles.</p>
              {/* <ul>
                  <li>Profiles include relevant information, such as budget, living preferences, and references from previous roommates.</li>
                  <li>Users could then connect with other users via an <b> in-app messaging system.</b></li>
                  <li>This design had <b>no consideration for potential apartments </b> , or whether there might be groups of people looking to find a roommate together.</li>
              </ul> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img"
          src={svg3}
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <p className="person">Person 3</p>
          <p>The third member of our group created an app that focused on <b>algorithmically determining compatibility</b> between users to recommend roommates.</p>
            {/* <ul>
                <li>The app includes a survey that users are required to fill out before they can interact with others on the platform.</li>
                <li>Based on the survey, the app displays a list of matches that the user has a high chance of living well with.</li>
            </ul> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img"
          src={svg4}
          alt="Fourth slide"
        />
        <Carousel.Caption className="caption">
          <p className="person">Person 4</p>
          <p>The fourth member of our group created an app which focused on the ability to create both <b>individual</b> and <b>group profiles</b>.</p>
            {/* <ul>
                <li>This solution addresses how a group of people who already know they want to live together can look for other people to fill out their group.</li>
                <li>For example, If there are three people who know they want to live together and are considering a four-bedroom apartment, they can enter Roomkast as a group seeking one more roommate.</li>
            </ul> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default RoomCarousel;