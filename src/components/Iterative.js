import React from "react";
import "./Iterative.css";
import roomkastDescr from '../images/roomcast_description.png';
import RoomCarousel from "./RoomCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import './RoomCarousel.css';
import RoomCarousel2 from "./RoomCarousel2";
import IFrame from 'react-iframe';
import RoomCarousel3 from "./RoomCarousel3";


const Iterative = () => {
    return  <div className="background">
    <div className="background-1">
            
    <div className="iterative-space">
   <h1> Iterative Design: Prototyping a Roommate-Matching App </h1>
   <div>     In this project, we were assigned to choose an emerging startup and design an ideal product interface.
       This was a group project with 4 members total; the group evenly shared responsibilities of the design process.
        We ideated and designed all of our interfaces from scratch. Additionally, a requirement of the assingment
        was that we could not look at any of the startup’s existing designs, resulting in our unique interpretation
        of how we thought the app should look like and function as.</div>
        
        <hr/>
        <div class="section">
            <div class="subsection">
                <h2>01. Research</h2>
                <h3>Selecting a Startup</h3>
                <p>When thinking about which startup to select, we thought about the following criteria:</p>
                <ul>
                <li>We wanted to choose a company that was still in its starting stages and had not yet developed a fully flushed-out product.</li>
                <li>The startup’s product had to be centered around a digital interface.</li>
                <li> The company had to have a clear purpose and view, so that there were clear goals we could develop solutions for in our interfaces. </li>
                </ul>

                <p>Keeping the above criteria in mind, we searched through startup accelerators such as <a href="https://www.ycombinator.com/" style={{ textDecoration: 'none'}}>YCombinator </a>and <a href="https://www.techstars.com/portfolio" style={{ textDecoration: 'none' }}>Techstars</a>. Ultimately we chose to develop an interface for a startup called Roomkast. As stated on their <a href="https://www.techstars.com/portfolio?name=Roomkast" style={{ textDecoration: 'none' }}>Techstars profile</a>, “Roomkast is a profile-matching tool for people who see the value in co-sharing a place to live”: </p>

                <div class="image-wrapper">
                    <img src={roomkastDescr} className="room-desc"/>
                </div>
            </div>
        </div>
        <div class="subsection">
            <h3>Deciding the Interface’s Platform</h3>
            <p>We thought that the people who would most frequently use Roomkast were younger people who had just moved to a metropolitan area and were looking for a roommate to share an apartment or other living space with.</p>

            <p>Given the popularity of dating apps amongst young people, we thought Roomkast users would feel the most familiar with a similar interface but centered around finding a roommate rather than a romantic partner.</p>
        </div>
      </div>
      <hr/>
      <div class="section">
        <div class="subsection">
            <h2>02. Ideating the Design </h2>
            <p>For this project, we wanted to practice iterative prototyping. We began the design process by sketching out different possible layouts for our interface.</p>
            <p>Each member of our team created a set of sketches detailing what we imagined the website to look like. We did so without any input from one another so we could generate a diversity of approaches to solving Roomkast’s goals.</p>
        </div>
        
        <RoomCarousel/>
    </div>
    <h3>Combining our Designs into Wireframes</h3>

        <p>After reviewing our sketches, we discussed which designs most effectively solved Roomkast’s goals as a startup.</p>
        <ul>
            <li>We decided a profile-focused rather than apartment-focused app better solved the description of Roomkast as a “profile-matching tool".</li>
            <li>We liked the survey idea to determine compatibility, but we felt that giving a predefined list of matches was too restrictive. We wanted users to be able to endlessly scroll through and discover profiles if they liked.</li>
            <li>We agreed that being able to create group profiles and message via the app were important features.</li>
        </ul>

        <p>From our discussion, we combined our sketches to produce a final set of wireframes we would use to create our high-fidelity prototype.</p>
        
        <RoomCarousel2/>
        <hr/>
        <div class="section">
            <div class="subsection">
                <h2>03. Prototyping the Roomkast App</h2>
                <p>Next, we designed a high-fidelity interactive prototype in Figma to represent how the product would actually look and feel. We then iteratively improved on our interface by incorporating feedback from a design critique. Finally, we conducted remote usability testing to evaluate how well our interface worked.</p>

                <h3>Drafting the Initial Prototype</h3>

                <p>Based on our combined wireframes, we made an initial prototype of the Roomkast app. We didn’t include all possible interactions or screens, but implemented enough to explore and test the key functionalities of the app.</p>

                <IFrame 
                styles={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
                width="100%"
                height="650" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvinTFwwNoHv1nI5GIxQFoK%2FInitial-Roomkast-Mockup%3Fnode-id%3D0%253A1" 
                allowfullscreen>
                </IFrame>
            </div>
            <div class="subsection">
                <h3>Incorporating Feedback from Design Critique</h3>
                <p>To help improve our prototype, we sought feedback from our peers and an industry professional via a design critique. Below, you can see how we incorporated feedback from the critique to revise our high-fidelity prototype.</p>

            </div>
        </div>
        <RoomCarousel3/>
        <div class="subsection">
        <h3>Implementing Interaction Principles</h3>
        <p>Both when creating the initial mockup and when revising the prototype, we carefully  considered the key principles of interaction, navigation, and hierarchy.</p>

        <b>Interaction</b>
        <ul>
            <li>High-contrast button design makes it very clear which elements are interactable</li>
            <li>Swiping on a conversation allows users pin a conversation, and blue pin icon shows feedback confirming conversation has been pinned</li>
            <li>Bookmark icon turns blue when the profile is saved, showing profile has been successfully bookmarked (Note: this feature's interaction has not been flushed out in the prototype; this is something we plan to implement in the future)</li>
            <li>On each profile, the “Message Now” button in the middle of the screen where it is easily accessible</li>
            <li>Messages screen contains a dropdown menu that gives users different options for sorting conversation </li>
        </ul>
        <b>Navigation</b>
        <ul>
            <li>Left and right arrows, as well as “Next” buttons in the preferences survey allow users to easily review and change their responses</li>
            <li>Besides the onboarding process, the navigation bar is always visible, so users can easily switch between different sections of the app. </li>
            <li>A navigation bar that utilizes not only common icons and text labels to make it clear what each option will lead to. The currently selected navbar option is blue, so users always understand where they are.</li>
            <li>Screens embedded deeper in the hierarchy, such as viewing a specific profile or conversation, have consistently styled “Back” buttons.</li>
        </ul>
        <b>Hierarchy</b>
          <ul>
            <li>Blue banners at the top of screens contain the name of current screen in large, bold tex</li>
            <li>In the profile view, dividing lines and section headers logically separate profile information</li>
            <li>Layout of elements creates a natural top-to-down reading flow, generally from more to less important information.</li>
            <li>Screens embedded deeper in the hierarchy, such as viewing a specific profile or conversation, have consistently styled “Back” buttons.</li>
          </ul>
        <p>Here’s our final design file and revised prototype. Please try it out!</p>
        <IFrame 
            styles={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
            width="100%"
            height="650" 
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvinTFwwNoHv1nI5GIxQFoK%2FInitial-Roomkast-Mockup%3Fnode-id%3D0%253A1" 
            allowfullscreen
        ></IFrame>
        <IFrame 
            styles={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
            width="100%" 
            height="650" 
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2QyauiqEDoUesYWrUto7Qt%2FFinal-Roomkast-Mockup%3Fnode-id%3D57%253A271%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D57%253A271" 
            allowfullscreen>
        </IFrame>
      </div>
      <hr />
      <div class="section">
        <div class="subsection">
            <h2>04. Remote Usability Testing</h2>
            <p>To evaluate our interface, we conducted usability testing. User testing is when you have someone use the interface/product that you have created and give feedback and suggestions about your design. To accomplish this remotely, we used the platform <a href="usertesting.com">UserTesting.com</a>. We configured the test so that users would interact with the prototype on their phone. 
            </p>
        </div>
        <div class="subsection">
            <h3>Defining the Task</h3>
            <p>We wanted to choose a task that would explore Roomkast’s primary functionality: to find someone compatible to live with. Eventually, we settled on a task that most real users of the app would accomplish: creating an account and messaging a potential roommate. 

            In our testing instructions we made sure to carefully explain how to interact with the Figma prototype, as well as thoroughly explain the substeps involved in our overall task. </p>

            <b>Testing Instructions</b>

        <div class="quote-block"> 
            <p>Specific steps to complete the task:</p>
            <ol>
            <li>Select a login method and create an individual profile. </li>
            <li>Follow the prompts to create an account. </li>
            <li>
                Next, look through the potential housemate candidates – 
                you can interact with the discovery page and look at their profiles. 
            </li>
            <li>
                Before you check your messages, reach out to Amelia (a potential housemate) 
                by sending her a message. 
            </li>
            <li>After you send your message to Amelia, pin her conversation in the messages tab.</li>
            <li>Lastly, sort the conversations by compatibility.</li>
            </ol>
            <p>
            Let's view the results!
            </p>
        </div>
        </div>
        </div>
        <div>
        <p>We also came up with post-test questions that users would respond to after interacting with the prototype to gain further insight into our interface.</p>

<b>Post-Test Questions</b>
<div class="quote-block"> 
    <ol>
        <li>Were you able to complete the task? If not, what prevented you?</li>
        <li>Would you like to see more, less, or the same information on the cards on the discovery screen? Which elements would you like to see added or removed?</li>
        <li>What did the bookmark shaped icon below each profile indicate to you?</li>
        <li>Think of the last time you were looking for a roommate. What information on the profiles would have been the most helpful for you?</li>
        <li>How difficult was it for you to send a message to Amelia?</li>
        <li>What do you think about the design of the app?</li>
    </ol>
    </div>
        <div class="subsection">
            <h3>Analyzing our Results</h3>
        <p>Here’s the summary of our test results. You can also click on the below links to view the full testing video for each user:</p>
        <ul>
            <li>
                <a
                    href="https://app.usertesting.com/v/0a99577c-0604-497a-b18b-832938dc3e73?back=https%3A%2F%2Fapp.usertesting.com%2Fdashboard#!/notes"
                    >User 1 Testing Video
                </a>
            </li>
            <li>
                <a
                    href="https://app.usertesting.com/v/02b7f4b3-ec7d-4d90-8176-bdd043d10892?back=https%3A%2F%2Fapp.usertesting.com%2Fdashboard#!/notes&shared_via=link"
                >User 2 Testing Video
                </a>
            </li>
            <li>
                <a
                    href="https://app.usertesting.com/v/f5bdb4f6-6652-43ca-9888-b7b52afc5435?back=https%3A%2F%2Fapp.usertesting.com%2Fdashboard#!/notes&shared_via=link"
                >User 3 Testing Video
            </a>
            </li>
        </ul>

        <b>Summary of Results</b>
        <p>The main issues regarding user experience were that the pinning interaction was not responsive on mobile and ultimately confusing. One user additionally was unable to actually complete the task (i.e. when she was asked to sort by compatibility, she read aloud the order in which users would be listed if they were in order of compatibility; she did not use the “sort by” button to complete the task). Lastly, users also experienced issues with needing to scroll on their phones to see the entire screen (leading to issues seeing buttons if they were hidden at the bottom of a page).</p>

        <p>Generally, users enjoyed the cleanliness of the design coupled with the fonts and colors chosen. They found the design to be simple and undistracting, and they understood the compatibility system without need for further explanation. Additionally, all three users believed that they were able to complete the task successfully and rated the easiness of the task as a ⅘.</p>
        </div>
        </div>
        <div class="section">
            <div class="subsection">
            <hr/>
                <h2>05. Reflection</h2>
            <ol>
                <li>We were able to turn our wireframes into an intuitive and functional prototype</li>
                <li>We learned a lot from the studio critique and user tests, and the importance of the iterative design process.</li>
                <li>In future iterations, we will adjust the scrolling issue to make each page more responsive to varying screen 
                    sizes. Additionally, we will flush on other interactions such as archiving and deleting messages.
                </li>
            </ol>

            </div>
        </div>
    </div>
    </div>

};

export default Iterative;