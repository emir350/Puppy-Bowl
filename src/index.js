import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const PuppyBowl = () => {
    const [puppyPlayers, setPuppyPlayers] = useState([]);

    // STEP 2: FETCHING OUR DATA USING USEEFFECT HOOK
        // PARAMETERS OF THE USEEFFECT HOOK
            // 1) callback function
    function exampleFunc() {
        console.log("I am an example func")
    }


    useEffect(() => {
        // Fetch some data and then set the state
        
        async function fetchPuppyData () {
            

            // THE try/catch block of code does 2 things
                // 1) The try section will literally TRY to run some chunk of code 
                // 2) The catch section will run if the TRY section fails to run
                    // Note: You will notice that inside of the catch chunk of code, we have a parameter called error. This parameter contains information about the error that just occured in your try block.

            try {
                // STEP 2A) Write a fetch method that will get some data from a specific API url. 
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-MT-WEB-FT/players");
                // console.log("This is our response var: ", response)

                // STEP 2B) We need to convert our promise response into a language that is readable by JavaScript (aka JSON) 
                const puppyData = await response.json(); 
                console.log("I am the translated data from the response: ", puppyData);
                console.log("This is the puppy data for real: ", puppyData.data.Players)

                // STEP 2C) Save the data from the response promise to your state. 
                setPuppyPlayers(puppyData.data.players)

            } catch (error) {
                console.log(error)
            }
        }
        fetchPuppyData(); 
    }, [])

    // STEP 3: Once you have your data inside of your state, now we want to show our users all of that data. 
    // This step is kind of like, once you get all your products to sell delivered to your storefront, you set up your storefront and display all of your products on the floor. 
    return (
        <div>
            <h1>Puppy Bowl</h1>
            
            <div>
                { 
                
                    puppyPlayers && puppyPlayers.length ? puppyPlayers.map((puppy, idx) => {
                        return <div key={idx} div class="box">
                            <p>Name of Player: {puppy.name}</p>
                            <p>Player Breed: {puppy.breed}</p>
                            <img src={puppy.imageUrl} img style={{ width: "70%", height: "70%" }}></img>
                        </div>
                    }) : <p>No puppies to display - they're taking a beauty nap</p>
                }
            </div>
        </div>
    )
};

ReactDOM.render(<PuppyBowl />, document.getElementById("app"))