import React from "react";
import "./Redesign.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-scroll";
import RedesignCarousel from "./RedesignCarousel";
import lofidesk from "../images/redesign/desktop-lofi-scroll.png";
import lofitablet from "../images/redesign/tablet-lofi-scroll.png";
import lofimobile from "../images/redesign/mobile-lofi-scroll.png";
import vsg from "../images/redesign/vsg.png";
import ScrollToTop from "./ScrollToTop";
import headerImg from "../images/redesign/header-image.png";
import Accordion from 'react-bootstrap/Accordion';
import Iframe from "react-iframe";
import { NavLink } from "react-router-dom";
import redMock from "../images/redesign-mockup.png";
import animePic2 from "../images/animecard2.png";
import roomCover2 from "../images/roomkastCover2.png";
import personas from "../images/personas.png";

const Redesign = () => {
    return  <div className="white-background">

    <div className="redesign-intro-words"> 
    <div className="redesign-intro-text"> 
   <h1 className="heaeder-redesign"> Responsive Redesign </h1>
   <h3>  Redesigning Frey & Florist Greenhouses</h3>
   </div>
        <img src={headerImg} className="redesign-header-img"/>
   </div>


   <div className="background-redesign">
   <ScrollToTop/>

   <div className="project-background"> 
    <div className="descrip"> 
    <h4> Role </h4>
    <p className="list">UI/UX Designer</p>
    <p className="list"> UI/UX Researcher</p>
    <p className="list"> Developer</p>
    </div>

    <div className="descrip"> 
    <h4> Team </h4>
    <p className="list"> Just me!</p>
    </div>

    <div className="descrip"> 
    <h4> Timeline </h4>
    <p className="list"> Two weeks</p>
    </div>

    <div className="small-nav"> 
        <h4> Jump to:</h4>
        <p className="nav-link">
        <Link activeClass="active" smooth spy to="context">
                00. Context
        </Link>
        </p>
        <p className="nav-link">
        <Link activeClass="active" smooth spy to="research">
                01. Research
        </Link>
        </p>
        <p className="nav-link">  
        <Link activeClass="active" smooth spy to="ideate">
                02. Ideating the Design
        </Link>
        </p>
        <p className="nav-link"> 
        <Link activeClass="active" smooth spy to="reflection">
                03. Reflection
        </Link>
        </p>
        <a className="nav-link-href" href='https://umkvfl6hssq7hfks.github.io/responsive-redesign-website/' target="_blank" style={{color: 'black'}}> 
                04. The Final Product
        </a>
    </div>
    
    </div> 

   <section className="context"> 
   <h1> 00. Context </h1> 
   <p>     In this project, I chose a poorly designed website -- determined by a general usability and navigational
       qualities -- and recreated a new and improved version.</p>
    </section>   
        
        <section class="research">
            <div class="subsection">
                <h1>01. Research</h1>
                <h3>Selecting a Website</h3>
                <p>At the beginning of this process, I searched for a website that I thought was not very responsive and also was generally hard to navigate. I ended up 
                    finding the website of <a href="original/product-original.jpeg" className="link"> Frey & Florist Greenhouses,</a> a Providence-based flower 
                shop selling through both brick-and-mortar and e-commerce channels. The website had 4 main issues:  </p>
                <ul>
                <li>No company name in the header which leads to poor memorability and branding issues.</li>
                <li>Overwhelming navigation bar with odd or overly specific categories and overwhelming sub-categories, 
                    all of which doe not align with flexbility and efficiency of use and thus negatatively impact usability.</li>
                <li> Unintuitive listing of product offerings (with limited-time and common products hidden on the page)
                    in an unatural and illogical manner that do not match between system and the real world. </li>
                    <li> Cluttered footer with redundant or irrelevant information and links that do not present in an
                    aesthetic and minimalist design. </li>
                </ul>

                <p>These issues are clearly demonstrated in the annotated images below:</p>
                <RedesignCarousel/>

            </div>
        </section>
        <div class="accessibility">
            <h3>Accessibility Issues</h3>
            <p> As with any website, it is important to take accessibility into account -- these includes things such as 
                color contrast, screenreader accessibility, and much more. As detected using WebAIM WAVE, there are over 20 contrast errors on this homepage alone. 
                    I would agree that these contrast areas are very obvious. Personally, I had a bit of a challenging time 
                    reading the options in the navigation bar, and I had to adjust my brightness in order to view 
                    it properly. Additionally, WebAIM WAVE flagged the high volumne of alt tags; when using Inspect
                    Element on the homepage, I noticed that a number of the alt tags have poor descriptions for the images
                    they're describing. For example, the alt tag for the "Custom Arrangements" only says "Custom Flower Design"
                    with no mention that this is a product offering. </p>

        </div>
        


      
      <section class="ideate">
        <div class="subsection">


               

            <h1>02. Ideating the Design </h1>
            <p>Before I developed my hifi designs or the actual redesigned website,
                the first thing I did was create lofi designs designed using Balsamiq. </p>
           <h4> Lofi Wireframes</h4> 
           <p>The three scrollable images in the dropdowns below are the simple structres that I based my hifi designs and actual webpage on. </p>
        </div>
        <div className="accordion-space"> 
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Desktop Lofi Design</Accordion.Header>
        <Accordion.Body>
            <Card className="story-card-responsive" style={{maxHeight: 500, overflow: 'auto', maxWidth: 1200}}>

            <CardContent className="head">
                <CardMedia
                component="img"
                src={lofidesk} 
                />
            </CardContent>
            </Card>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Tablet Lofi Design</Accordion.Header>
        <Accordion.Body>
            <Card className="story-card-responsive" style={{maxHeight: 500, overflow: 'auto', width: 1200}}>
                <CardContent className="head">
                    <CardMedia
                    component="img"
                    src={lofitablet} 
                    />
                </CardContent>
            </Card>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Mobile Lofi Design</Accordion.Header>
        <Accordion.Body>
            <Card className="story-card-responsive" style={{maxHeight: 500, overflow: 'auto', width: 1200}}>
                <CardContent className="head">
                    <CardMedia
                    component="img"
                    src={lofimobile} 
                    />
                </CardContent>
            </Card>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        
    </div>
    <h4> Visual Stype Guide</h4> 
       
           <p>Having set up the barebones structure of my design, I then moved on to thinking more about the details.
               I considered the main colors, typography, and reusable components used throughout my hifi designs.
               I wanted to employ in my design. To bring these ideas together, I created a visual stype guide, as seen below.
               three images you see below are the simple structres that I based my hifi designs and actual webpage on. </p>
        <div className="vsg-container"> 
               <img src={vsg} className="vsg" />
        </div>
    </section>

    <h3>Hifi Designs</h3>

        <p>The final iteration of the design process consisted of creating hifi wireframes; I ued Figma complete this task since
            I thought it would give me a clean, hollistic view of what I was going to create in HTML / CSS. Additionally, I considered 
            what the code structure would look like -- ie. Where would I use flexboxes? When would I use a header as opposed to 
            plain text to indicate webpage hierarchy? Feel free to explore the hifi wireframes below! The technical decisions are annotated on the hifi wireframes as well. </p>

            <Iframe 
            styles={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
            width="100%" 
            height="550" 
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FNFqrq7xMiReC9NZUy6hCkd%2FUntitled%3Fnode-id%3D0%253A1%26t%3DEt1y2mchli1TTHAJ-1"
            allowfullscreen>
            </Iframe>
    
    <div className="block">
    <a className="finished" href="https://umkvfl6hssq7hfks.github.io/responsive-redesign-website/">The finished product</a>
    <p> Click the above link to navigate to the final responsive website. The deployed website is responsive using a wide variety of screen sizes, from a Macbook Pro to an iPhone.</p>
    </div>
        


        <section class="reflection">
            <div class="subsection">
                <h1>03. Reflection</h1>
                <p> This project was a great introduction to a full ideation process; the many iterations of my designs allowed me to hone my
                    design and see the process through from start to finish.
                    I did ulimately have some issues trying to implement the hamburger menu for the smaller screen sizes; this is 
                    something I plan to explore further when I revise this webpage later on in the semester and have more web devevlopment experience. 
                     </p>

            </div>
        </section>
    </div>
    {/* <div className="foot-yellow"> 
        <h2 className="header-items"> Check out some other items on the menu!</h2>
        <div className="selections"> 
       
        
        <NavLink to={'../Storyboard'} target="_blank" style={{ textDecoration: 'none' }}>

        <div className='plate-menu2'> 
        <div className='overlay-menu2' > 
        <div className='front-menu2'> 
        <h4> Storyboard & Personas </h4>
        </div>
        <div className='back-menu2'> 
        <img src={personas} className='menu-img'/>
        </div>
        </div>
        </div>
        </NavLink> 

        <NavLink to={'../AnimeList'} target="_blank" style={{ textDecoration: 'none' }} >
        <div className='plate-menu4'> 
        <div className='overlay-menu4'> 
        <div className='front-menu4'> 
        <h4> My Anime List </h4>
        </div>
        <div className='back-menu4'> 
        <img src={animePic2} className='menu-img'/>
        </div>
        </div>
        </div>
        </NavLink>

        
        <NavLink to={'../Iterative'} target="_blank" style={{ textDecoration: 'none' }}>
        <div className='plate-menu1'> 
        <div className='overlay-menu1' > 
        <div className='front-menu1'> 
        <h4> Iterative Design </h4>
        </div>
        <div className='back-menu1'> 
        <img src={roomCover2} className='menu-img'/>
        </div>
        </div>
        </div>
        </NavLink> 

        </div> 
        </div> */}
    </div>

};
export default Redesign;