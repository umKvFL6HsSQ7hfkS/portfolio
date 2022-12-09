import './App.css';
import React from 'react';
import Typed from "typed.js";
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link } from "react-scroll";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Tilt from "react-parallax-tilt";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { NavLink } from "react-router-dom";
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
        <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_nz20vA.json"
            style={{ height: '100px', width: '100px' }}
          >
            <Controls visible={false}  />
          </Player>
      </header>
      <section className="home">
        
      <p className="words" ref={el}></p>
        
      </section>
      <section className="projects">PROJECTS

      <div className='cards'> 
      <Tilt className='tilt-card'
        
        scale={.9}
        tiltMaxAngleX={10} 
        tiltMaxAngleY={10} 
        perspective={750} 
        >     
        
        <NavLink to={'../Storyboard'} target="_blank" style={{ textDecoration: 'none' }} >
        <Card className="story-card" >
          <CardActionArea className="action">
            <CardContent className="head">
              <Typography gutterBottom variant="h5" component="div" fontSize={30} className="header">
              <br/>
                Storyboard & Personas
              </Typography>
              <Typography className="content">
                  <br/>
              In this project, I considered the effectiveness of the Brown Mailroom kiosks as interfaces for retrieving mail. 
              I centered the personas and storyboards around the kiosk -- how people interact with the kiosk day to day and 
              how they were feeling when using it. 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </NavLink> 
    </Tilt>

    <Tilt className='tilt-card'
    // glareEnable={true} 
    // glareMaxOpacity={0.45}
    scale={.9}
    tiltMaxAngleX={10} 
    tiltMaxAngleY={10} 
    perspective={750} 
    // glareColor="red"
    // glarePosition="all"
    >
    <NavLink to={'../Iterative'} target="_blank" style={{ textDecoration: 'none' }} >
    <Card className="story-card" >
      <CardActionArea className="action">
        <CardContent className="head">
          <Typography gutterBottom variant="h5" component="div" fontSize={30} className="header" className="header">
          <br/>
            Iterative Design
          </Typography>
          <Typography className="content">
              <br/>
              In this project, I worked in a group to chose an emerging startup and designed their product’s interface. 
              We ideated and designed all of our interfaces from scratch, without looking at any of the startup’s existing designs.
          </Typography>
        </CardContent>
      </CardActionArea>
        </Card>
        </NavLink> 
      </Tilt>
   
    <Tilt className='tilt-card'
        scale={.9}
        tiltMaxAngleX={10} 
        tiltMaxAngleY={10} 
        perspective={750} 
        >
    <NavLink to={'../Redesign'} target="_blank" style={{ textDecoration: 'none' }} >
    <Card className="story-card" >
      <CardActionArea className="action">
        <CardContent className="head">
          <Typography gutterBottom variant="h5" component="div" fontSize={30} className="header" className="header">
          <br/>
            Responsive Redesign
          </Typography>
          <Typography className="content">
              <br/>
              The goal of this project was to pick a poorly designed website and redesign it into something "better". I focused
              on improving the sites' usability by creating more structure hierarchy, changing the color scheme, and providing
              a more responsive webpage. 
          </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </NavLink> 
        </Tilt>


  <Tilt className='tilt-card'
        scale={.9}
        tiltMaxAngleX={10} 
        tiltMaxAngleY={10} 
        perspective={750} 
        >
    <NavLink to={'../AnimeList'} target="_blank" style={{ textDecoration: 'none' }} >
    <Card className="story-card" >
      <CardActionArea className="action">
        <CardContent className="head">
          <Typography gutterBottom variant="h5" component="div" fontSize={30} className="header" className="header">
          <br/>
            My Anime List
          </Typography>
          <Typography className="content">
              <br/>
              In this project, I implemented React in order to filter, sort, and aggregate different animes. The React app allows
              users to add different anime to their "Favorites" list, stack filters, and sort all at the same time. 
          </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </NavLink> 
        </Tilt>
        </div>
      </section>

      <section className="about">ABOUT ME
      <div className="abt-me">
    
    <Tilt className='tilt-card'
    // glareEnable={true} 
    // glareMaxOpacity={0.45}
    scale={.9}
    tiltMaxAngleX={10} 
    tiltMaxAngleY={10} 
    perspective={750} 
    // glareColor="red"
    // glarePosition="all"
    >    
    <Card  className="story-card">
      <CardActionArea>
        <CardContent>
      
          <Typography gutterBottom variant="h5" component="div" fontSize={30}>
            A little bit about me
          </Typography>
          <Typography  >
          I'm a student at Brown University interested in user interface and user experience. 
    This year, I was able to take UI/UX, a class that allowed me to focus on just that!
    I explored various aspects of the design process, from using Figma and experiencing 
    critiques to learning HTML/CSS and React. This website is a culmination of my work from 
    this semester. I hope you enjoy exploring it as much as I had making it!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Tilt>

    <Tilt className='tilt-card'
    // glareEnable={true} 
    // glareMaxOpacity={0.45}
    scale={.9}
    tiltMaxAngleX={10} 
    tiltMaxAngleY={10} 
    perspective={750} 
    // glareColor="red"
    // glarePosition="all"
    >    
    <Card  className="story-card">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontSize={30}>
            Design inspiration
          </Typography>
          <Typography >
         I used a number of different things to inspire my design this semester. I considered how
         shapes on webpages flow together and how placement effects eye-movement. I also considered
         how colors guide the flow of an interface and considered how to balance the interplay of fonts and 
         colors to create readable and usable pieces.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Tilt>
    </div>
      </section>
    </div>
  );
}

export default App;
