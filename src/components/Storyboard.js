import React from "react";
import "./Storyboard.css";
import kiosk from "../images/personas/kiosk.png";
import tiredteal from "../images/personas/tired-teal.png";
import busybob from "../images/personas/busy-bob.png";


const Storyboard = () => {
    return  <div className="background">
    <div className="background-1">
            
    <div className="iterative-space">
   <h1 className="header"> Personas & Storyboarding: Interfacing with Brown's mailroom kiosk</h1>
   <div>    In this project, I considered the kiosk interface outside of the mailroom. I centered the personas and 
       storyboards around the kiosk -- how people interact with the kiosk day to day and what they're thinking and 
       feeling why they're using it. </div>
        
        <hr/>
        <div class="section">
            <div class="subsection">
                <h2>01. Choosing the Interface </h2>
                <h3>Why the Kiosk?</h3>
                <p> The requirement was to choose a public, easily accessible interface that people interact with on a daily basis.
                    Having retrieved many packages from the Mailroom throughout my years at Brown, I thought that the Brown 
                    Mailroom Kiosk would be an interesting interface to observe.
                </p>
                <h3>Interface Breakdown</h3>
                
                <p>Below, you can see an annotated sketch of the mailroom kiosk. I noted all of the important features
                    that are visible when you interact with the interface.  </p>
                <div className="kiosk-pic"> 
                <img src={kiosk} className="kiosk"/>
                </div>
                

            </div>
        </div>
        <div class="section">
            <div class="subsection">
                <h2>02. Researching Users</h2>
                <h3>Observations</h3>
                <p>To create the personas and their corresponding storyboards, I observed and interviewed users of the Brown Mailroom kiosk. 
                    I ensured that I had the users' consent before I conducted this analysis.
                </p>
                <p> Key observations
                </p>
                <ul>
                <li>All users approached the interface with their card already in their hand. </li>
                <li>They would then swipe their card through the card reader. Lastly, they would press the “Pick up now” button on the screen. </li>
                <li> The first two users swiped their card stripe down; the third user swiped their card stripe up; the last user swiped their card 
                    once stripe down and then had to re-swipe (this time stripe down) as the card reader did not read the card correctly. </li>
                </ul>
                <h3>Interviews</h3>
                <p>I interviewed three different individuals who interacted with the kiosk. The questions I asked were as follows:</p>
                <ul>
                <li>Is there anything you think is missing in the kiosk design? </li>
                <li>Do you experience any issues when you swipe your card? Does the card reader consistently work?</li>
                <li> Are there any features you think you would like to be included in the future? </li>
                <li>  Do you think that this system is efficient?  </li>
                <li> Do you come here where you're in a rush? </li>
                </ul>
                <p> Generally, people had similar experiences with the interface.  
                    All three individuals found the kiosk intuitive when they first tried to use it. However, despite how simple they 
                    find it to use, they don't go to the mailroom when they're in a rush due to the overwhelming number of people in the mailroom.
                <p> The interviewees also had some interesting suggestions for how the school could improve the kiosk experience.</p>
                    <ul> 
                        <li> One person mentioned that it would be helpful if the kiosks had better card readers and that they frequently had to swipe 
                            their card numerous times in order for the card reader to register the card correctly</li> 
                        <li> One common recommendation was to add a feature that would allow you to select which packages you could pick up; that way, 
                            if you had a large volume, you wouldn’t have to pick them up all at once, or if you had a few packages and one very large package, 
                            you could just pick up your large package</li>
                        <li> Another suggestion was that there be some sort of indicator on the kiosk that says how long your expected wait time is to 
                            pick up the item; that way, if you’re in a rush or if you have to run a quick errand, you know how long you have before 
                            the people in the mailroom call your name to give you your package</li>                     
                    </ul> 


            </p>
            </div>
        </div>
        <hr />

        <div class="section">
            <div class="subsection">    
            <h2>03. Creating Personas</h2>
            <p> Following these observations and interviews, I created two personas: Tired Teal and Busy Bob. These personas were 
                inspired by the kiosk users I observed and the information I gathered during the interview process.  </p>
            <h3>Tired Teal</h3>
            <p> The first persona I created was Tire Teal. Tired Teal is a senior at Brown and is going through full-time recruiting,
                 and she just remembered it is the last day she can pick up her packages that have been in the mailroom for 30 days. Part
                 of Brown's Mailroom policy is that if you have left your package unclaimed in the mailroom for 30 days, then the mailroom
                 will throw it out. 
                    </p>
            <div className="persona-div">
                <img src={tiredteal} className="persona"/> 
            </div>
                
            <h3>Busy Bob</h3>
            <p> The second persona I created was Busy Bob. Busy Bob is a freshman who has just joined 5 different clubs and has been running 
                from meeting to meeting, so the only time he can make it to the mailroom is during lunch time, which is the mailroom rush hour.
                
                    </p>
            <div className="persona-div">
                <img src={busybob} className="persona"/> 
            </div>
            </div>
        </div>
        
      </div>

      <hr />


        <div class="section">
            <div class="subsection">
                <h2>04. Storyboard</h2>
                <p> ...
                     </p>

            </div>
        </div>
        <div class="section">
            <div class="subsection">
                <h2>05. Reflection</h2>
                <p> ...
                     </p>

            </div>
        </div>
    </div>
    </div>
};

export default Storyboard;