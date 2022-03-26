// Create an Array of at least 3 losing messages

var lossMessages = ["Sorry, you lose.", "Sorry, try again.", "Better luck next time!"];

// Create variables to count wins and losses

var winCount = 0;

var lossCount = 0;

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'

var winSection = document.getElementById('wins');

var lossSection = document.getElementById('losses');

var displayMessage = document.getElementById('message');




// target all .box elements and attach a click event listener to each one using a loop
// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box


// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins


var boxes = document.querySelectorAll('.box');

var randomNumber = Math.ceil(Math.random()*3);

console.log(randomNumber);

boxes.forEach(function(box){
    box.onclick = function(e){
        var clickedBoxText = e.target.textContent;
        var boxNumber = parseInt(clickedBoxText);
        if (boxNumber === randomNumber){
                displayMessage.innerHTML = 'You win';
                winCount++;
                winSection.innerHTML = 'Wins: ' + winCount;
            } else {
            displayMessage.innerHTML = lossMessages;
            lossCount++;
            lossSection.innerHTML= 'Losses: ' + lossCount;
            }
         };
    });


// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses