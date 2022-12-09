import React from "react";
import "./Redesign.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RedesignCarousel from "./RedesignCarousel";
import lofidesk from "../images/redesign/desktop-lofi-scroll.png";
import lofitablet from "../images/redesign/tablet-lofi-scroll.png";
import lofimobile from "../images/redesign/mobile-lofi-scroll.png";
import vsg from "../images/redesign/vsg.png";

const Redesign = () => {
    return  <div className="background">
    <div className="background-1">
            
    <div className="iterative-space">
   <h1> Responsive Redesign: Redesigning Frey & Florist Greenhouses </h1>
   <div>     In this project, I chose a poorly designed website -- determined by a general usability and navigational
       qualities -- and recreated a new and improved version.</div>
        
        <hr/>
        <div class="section">
            <div class="subsection">
                <h2>01. Research</h2>
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
        </div>
        <div class="subsection">
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
        
      </div>

      <hr />
      <div class="section">
        <div class="subsection">
            <h2>02. Ideating the Design </h2>
            <p>Before I developed my hifi designs or the actual redesigned website,
                the first thing I did was create lofi designs designed using Balsamiq. </p>
           <h4> Lofi Wireframes</h4> 
           <p>The three images you see below are the simple structres that I based my hifi designs and actual webpage on. </p>
        </div>
        <div className="lofi-space"> 
        <Card className="story-card-responsive" style={{maxHeight: 400, overflow: 'auto', maxWidth: 900}}>

            <CardContent className="head">
                <Typography gutterBottom variant="h5" component="div" fontSize={30} className="header">
          <br/>
            Desktop Lofi Design
                </Typography>
                <CardMedia
                
                component="img"
                src={lofidesk} 
                />
            </CardContent>
        </Card>
        <Card className="story-card-responsive" style={{maxHeight: 400, overflow: 'auto', width: 900}}>

            <CardContent className="head">
                <Typography gutterBottom variant="h5" component="div" fontSize={30} className="header">
                <br/>
                Tablet Lofi Design
                </Typography>
                <CardMedia
                component="img"
                src={lofitablet} 
                />
            </CardContent>
        </Card>
        <Card className="story-card-responsive" style={{maxHeight: 400, overflow: 'auto', width: 900}}>
            <CardContent className="head">
                <Typography gutterBottom variant="h5" component="div" fontSize={30} className="header">
                <br/>
                Mobile Lofi Design
                </Typography>
                <CardMedia
                component="img"
                src={lofimobile} 
                />
            </CardContent>
        </Card>
    </div>
    <h4> Visual Stype Guide</h4> 
       
           <p>Having set up the barebones structure of my design, I then moved on to thinking more about the details.
               I considered the main colors, typography, and reusable components used throughout my hifi designs.
               I wanted to employ in my design. To bring these ideas together, I created a visual stype guide, as seen below.
               three images you see below are the simple structres that I based my hifi designs and actual webpage on. </p>
        <div className="vsg-container"> 
               <img src={vsg} className="vsg" />
        </div>
    </div>

    <h3>Hifi Designs</h3>

        <p>The final iteration of the design process consisted of creating hifi wireframes; I ued Figma complete this task since
            I thought it would give me a clean, hollistic view of what I was going to create in HTML. Additionally, I considered 
            what the code structure would look like -- ie. Where would I use flexboxes? When would I use a header as opposed to 
            normal text to indicate webpage hierarchy? These more technical decisions are annotated on the hifi wireframes seen below. </p>
    
    <div className="block">
    <a className="finished" href="https://umkvfl6hssq7hfks.github.io/responsive-redesign-website/">The finished product</a>
    </div>
        
        
      <hr />

        <div class="section">
            <div class="subsection">
                <h2>03. Reflection</h2>
                <p> This project was a great introduction to a full ideation process; the many iterations of my designs allowed me to hone my
                    design and see the process through from start to finish.
                    I did ulimately have some issues trying to implement the hamburger menu for the smaller screen sizes; this is 
                    something I plan to explore further when I revise this webpage later on in the semester and have more web devevlopment experience. 
                     </p>

            </div>
        </div>
    </div>
    </div>

};
export default Redesign;