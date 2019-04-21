        function startGame() { //happens when HTML loads ( onload in body tag)
            $('#wins').text("Games Won: " + wins); //put score in HTML tag so user can see it
            $('#losses').text("Games Lost: " + losses); //put score in HTML tag so user can see it
            $('#numbertoguess').text(randomnumber);
            setUpCrystals(); 
        }
        //variables
        var randomnumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        // variable to hold number wins/losses/guesses
        var wins = 0;
        var losses = 0;
        //setting wins and losses to be zero initially
    
        var crystalClickTotal = 0;
        //setting sum of all clicks to be zero 
    
        var currentScore = $("#currentscore");
        //variable to hold current score and display it in HTML
        function setUpCrystals() {
            $(".crystal").each(function () {
                var randomCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
                $(this).attr("crystalValue", randomCrystal);
            })
    
        }

            
            $(".crystal").on("click", function () {
                var crystalValue = parseInt($(this).attr("crystalValue"));
                crystalClickTotal += crystalValue; 
                currentScore.text("Current score is: " + crystalClickTotal);
                gameEvent(); //call game event function 
            })

//below function runs is called by the start game function below. Similar to a for loop the each jQuery finds each thing in the class crystal and assigns it a random number between 1 and 12, and gives it that as an attribute. "this" here refers to whatever crystal it currently iterating through. 

//below functions starts when you click a crystal.  

//gameplay function

        function gameEvent() {
            if (crystalClickTotal === randomnumber) {
                wins++;
                $('#wins').text("Games Won: " + wins);
                alert("You have won! Click to play again");
                reset();
            }

            //if the sum is greater than random number. //neither happens if total is less than random number
            else if (crystalClickTotal > randomnumber) {
                losses++; //increase losses counter
                $('#losses').text("Games Lost: " + losses);
                alert("You have lost! Click to play again!");
                reset(); //call reset function
            }
        }


        function reset() { //to restart the game, called after win or lose
            setUpCrystals();
            randomnumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            $('#numbertoguess').text(randomnumber);
            crystalClickTotal = 0;
            currentScore.text("Current score is: " + crystalClickTotal);


        }
