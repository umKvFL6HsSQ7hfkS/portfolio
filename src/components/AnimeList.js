import React from "react";
import "./AnimeList.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
import './RoomCarousel.css';



const AnimeList = () => {
    return  <div className="background">
    <div className="background-1">
            
    <div className="anime-space">
   <h1> Development: My Anime List </h1>
   <div>     We were tasked with developing an interactive interface by combining interactive components
       and an internal data state. This was our first assignment in React, and much of my process was focused
       on learning how to use components to create an intuitive application for my users.</div>
        
        <hr/>
        <div class="section">
            <div class="subsection">
                <h2>01. Research</h2>
                <h3>Selecting the Topic and Considering Requirements</h3>
                <p>When determining what interface I wanted to create, I decided that it would be most enjoyable to 
                    create something that I felt I would personally use. Since I really enjoy anime, I decided to make
                    a "My Anime List" as a way to store different anime while also tracking my favorites.
                </p>

                <p>When structuring my code, I had to keep in mind the required functionality:
                </p>
                <ul>
                <li>The user should be able to filter by at least 2 categories at once.</li>
                <li>The user had to be able to sort using at least one sorting feature.</li>
                <li> There needed to be some aggregator section on the page that showed 1) some aggregation of
                    items being added to "cart" and 2) the aggregation of a property (ie. the total number of seasons 
                    across all favorited animes).
                </li>
                <li> At least 12 item cards needed to be displayed showing the item image, categories
                    that the filters use, fields that the sorting uses, the property being aggregated, and 
                    a button that adds to/removes from the aggregator. 
                </li>
                <li> Lastly, all components needed to be visible on the one webpage we created.
                </li>
                </ul>
                
            </div>
        </div>

      </div>
      <hr />
      <div class="section">
        <div class="subsection">
            <h2>02. Ideating the Design </h2>
            <div class="subsection">
            <h3>Deciding the Code Structure</h3>
            <p> Taking into account the requirements above, I decided to use three components: Aggregator.js, ShowItem.js, and App.js. 
                I used the aggregator component to aggregate the total number of seasons across all shows added to the "Favorites" list.
                I used ShowItem.js as the way to transfer information about each show (which was held in my data.js file) on a React card.
                Lastly, App.js contained the filtering and sorting actions as well as the actual display of each card component.</p>
        </div>
        </div>
    
    </div>
    <h3>Usability</h3>

        <p>Card usability</p>
        <ul>
        <li>I decided to list 12 different anime with their cover image, genre, subcategory, and number of seasons--
        all of this information is displayed clearly on each ShowItem component.
        </li>
        <li> To make the adding to and removing  
            from favorites aspect easy for the user, I added a button to each card that would change text depending on if it had been 
            added to the Favorites list already. 
        </li>
        </ul>
        <p>Filter and sorting usability</p>
        <ul>
        <li> I created clear buttons for users to press in order to filter and sort.
        </li>
        <li> I also added reset abilities
                <ul>
                    <li>
                    To clear the filters, the user simply has to press the button they had previously pressed.
                    </li>
                    <li>
                    To clear the sorting, they have to press the "Reset" button.
                    </li>
                </ul>
        </li>
        <li> I placed the buttons on the side of the page because I think it is easier to see as opposed to keeping it at the top of the page
        </li>
        </ul>
        <div> 
            <p> Throughout the design, I kept the users considerations in mind -- how should I present each anime so that 
                the user can easily take in information, where is the best place to put buttons and what should those buttons look like, and how do I make the hierarchy 
                clear throughout the page.  
            </p>
        </div>

        <div class="subsection">
            <h3>How it Works</h3>
            <a href="https://umkvfl6hssq7hfks.github.io/my-anime-list/" className="link"> The finished product</a>
           
            <h5>"Favorites" list </h5>
            
            <p>
            To add an anime to your "Favorites", all you have to 
            do is press the "Add to Favorite" button you see on the card. When you add an anime to this list, 
            you will the name of the anime at the bottom of the page; below that, you will also see the total number
            of seasons across all of the shows in the "Favorites" list.
            
            </p>
            <h5>Filtering and Sorting </h5>
            <p>
            You can filter by genre and/or subcategory;
            If you select two buttons in the same filter (ie. "Supernatural" and "Action"), shows" that fall into either
            category will appear. If you select buttons across the two filters (ie. "Shonen" and "Action") shows
            that fall under both categories will appear; shows that only fall under one will not. 
            </p>
            
        </div>
        <hr/>
        
        <div class="section">
            <div class="subsection">
                <h2>03. Reflection</h2>
                <p> This project was a great chance to learn React hands-on as I grappled with how components and props work
                    and experimented with Boostrap. These skills were extremely valuable to gain, especially since I used them
                    to build this very portfolio. This project served as great inspiration for me in terms of expiermenting with
                    UI elemnts as well -- I plan to experiment with different styles of buttons like radio buttons in upcoming projects.
                </p>

            </div>
        </div>
        </div>
    </div>
};

export default AnimeList;