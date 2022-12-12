import './App.css';
import React from 'react';
import Typed from "typed.js";
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link } from "react-scroll";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { NavLink } from "react-router-dom";
import redMock from "../src/images/redesign-mockup.png";
import animePic2 from "./images/animecard2.png";
import roomCover2 from "./images/roomkastCover2.png";
import personas from "./images/personas.png";
import dumpling from "./images/dumpling.png"
import noodles from "./images/noodles.png";
import 'aos/dist/aos.css';

import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import * as AOS from 'aos/dist/aos.js';

// import 'bootstrap/dist/css/bootstrap.min.css';

    
function App() {

      // Create Ref element.
      const el = useRef(null);

      useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Hi! Welcome to my CS1300 portfolio!"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
  
          startDelay: 0,
          typeSpeed: 40,
          showCursor: false
          // backSpeed: 100,
          // backDelay: 100
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);

      useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className="App">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul className='nav-ul'>
            <li className='nav-li'>
              <Link activeClass="active" smooth spy to="home">
                HOME
              </Link>
            </li>
            <li className='nav-li'>
              <Link activeClass="active" smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li className='nav-li'>
              <Link activeClass="active" smooth spy to="about">
                ABOUT ME
              </Link>
            </li>
          </ul>
          
        </nav>
      </header>
      <section className="home">
        
      <p className="words" ref={el}></p>
      <div className='drag-notice'> 
      (Click to drag the food around!)</div>

      {/* <Player className='ramen'
            autoplay
            loop
            src="https://lottie.host/716605c7-af03-40f1-adcb-6bd563a98cff/ZVBbxzgrH1.json"
            style={{ height: '300px', width: '300px' }}
          >
            <Controls visible={false}  />
          </Player> */}
          <div className='food-drag'> 
      <Draggable > 
      <Resizable
        defaultSize={{
          width: 300,
          height: 200
        }}
        style={{
          background: `url(${dumpling})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        lockAspectRatio={true}
      >
      </Resizable>
      </Draggable>
      <Draggable > 
      <Resizable
        defaultSize={{
          width: 170,
          height: 190
        }}
        style={{
          background: `url(${noodles})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        lockAspectRatio={true}
      >
      </Resizable>
      </Draggable>
      </div>
      </section>

      
      <section className="projects">
      
        <div className='project-title' data-aos="fade-up"> 
        <p className='section-header'> This Semester's Menu </p>
      <Player className='fork'
            autoplay
            loop
            src="https://lottie.host/7187a5f5-f425-4515-965e-8353293158cd/2p7Rx7jM5k.json"
            style={{ height: '200px', width: '200px' }}
          >
            <Controls visible={false}  />
          </Player>
          </div>
          
      <div className='cards' > 
        <NavLink to={'../Storyboard'} target="_blank" style={{ textDecoration: 'none' }} data-aos="fade-right">
 
        <div className='plate'> 
        <div className='plate overlay'> 
        <div className='front'> 
        <h4> Storyboard & Personas</h4>
        <p> Considering the effectiveness of the Brown Mailroom Kiosk.</p>
        </div>
        <div className='back'> 
        <img src={personas} className='anime-img'/>
        </div>
        </div>
        </div>
        </NavLink> 
        
    <NavLink to={'../Iterative'} target="_blank" style={{ textDecoration: 'none' }} data-aos="fade-left" >

        <div className='plate'> 
        <div className='plate overlay' > 
        <div className='front'> 
        <h4> Iterative Design </h4>
        <p> Group project where we created an emerging startup's interface solely based 
          on their mission.</p>
        </div>
        <div className='back'> 
        <img src={roomCover2} className='anime-img'/>
        </div>
        </div>
        </div>
        </NavLink> 
   
        
    <NavLink to={'../Redesign'} target="_blank" style={{ textDecoration: 'none' }} data-aos="fade-right">
        <div className='plate'> 
        <div className='plate overlay'> 
        <div className='front'> 
        <h4> Responsive Redesign </h4>
        <p> Redesigned a poorly designed website using HTML/CSS.</p>
        </div>
        <div className='back'> 
        <img src={redMock} className='anime-img'/>
        </div>
        </div>
        </div>
    </NavLink> 


    <NavLink to={'../AnimeList'} target="_blank" style={{ textDecoration: 'none' }}data-aos="fade-left" >
        <div className='plate'> 
        <div className='plate overlay'> 
        <div className='front'> 
        <h4> My Anime List </h4>
        <p> Used React to deploy a website that sorts, filters, and saves animes.</p>
        </div>
        <div className='back'> 
        <img src={animePic2} className='anime-img'/>
        </div>
        </div>
        </div>
    </NavLink> 

        </div>
       
      </section>

      <section className="about">  
        <div className='abt-title' data-aos="fade-up"> 
        <p className='section-header'> About the Chef </p>
        </div>
       
      <div className="abt-me" >
        <div className='first-about' data-aos="fade-up"> 
        <div className='lottie-box'> 
        <Player className='lottie-chef'
            autoplay
            loop
            src="https://assets3.lottiefiles.com/private_files/lf30_3dLrkA.json"
            style={{ height: '300px', width: '300px' }}
          >
            <Controls visible={false}  />
      </Player>
        </div>
      
      <div className='little-about'> 
      <h4>A little bit about me </h4> 
      
      <p>  I'm a student at Brown University studying CS-Econ and History. I've always enjoyed 
        creating things, so I thought it would be fun to take UI/UX, a class that allowed me to 
        focus on just that! 
    
    I explored various aspects of the design process, from using Figma and experiencing 
    critiques to learning HTML/CSS and React. This website is a culmination of my work from 
    this semester. </p>
    </div> 
      </div>

    
      <div className='second-about' data-aos="fade-up">
        
        <div className='inspo-about'> 
        <h4>Design inspiration </h4> 
      
          <p>  I've always loved creating things with food -- whether that be meals for 
            friends and family or beautiful plates with contrasting colors and textures.
            Coming into this class, I approached the creative process similarly to how
            I cook at home. I started with a concept that I wanted to taste test 
            and then built my designs from there, honing the product with the help 
            of many taste testers from critiques and UX Factor! </p>
    
        </div> 
          <div className='lottie-container'> 
              <Player className='lottie-pot'
                  autoplay
                  loop
                  src="https://assets5.lottiefiles.com/packages/lf20_v7kptb3h.json"
                  style={{ height: '300px', width: '300px' }}
                >
                  <Controls visible={false}  />
              </Player>
          </div>
      </div>
      </div>
      </section>
    </div>
  );
}

export default App;
