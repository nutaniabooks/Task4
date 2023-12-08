//let user pick from the three options that have been uploaded form the HTML.


const image0 = document.getElementById('rock');
const image1 = document.getElementById('paper');
const image2 = document.getElementById('scissors');

image0.addEventListener('click', function () {

image1.addEventListener('click', function () {
    
}
}



function playerGame(playerChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let computerPicked = choices[Math.floor(Math.random() * 3)];
    let result;

    if (UserPicked === computerPicked) {
        result = "It's a tie";
    }
    
    else if (
        (userPicked === 'rock' && computerPicked === 'scissors') ||
        (userPicked === 'scissors' && computerPicked === "paper") ||
        (userPicked === 'paper' && computerPicked === "rock")
    ) {
        result = "You win!";
    }   else {
        result = "You lose!";
    }

    document.getElementById ('result').innerText
    = `You chose ${userPicked} . Computer picked ${computerpicked}. ${result}` ;
}

let msg1 = document.getElementById('output1');
let msg2 = document.getElementById('output2');
let msg3 = document.getElementById('output3');


//when user clicks on an image the computer will display what the user choose
// In the generator of whether user or computer picks one or another then there needs to be
// a place where it can generate a random generator. 
//then this will trigger the computer to generate its own choice
// then it will decided on whether the user or computer won. And if there is a tie the computer will display a log box with a its a tie.
// which  will then prompt the user to click ok. taking it back to the home page. 






//display the users choice on screen


//calculate the option for the computer
//decide who won based on users choice and computer choice

//inputs the answer
//computer calculates an answer
//results on who won?

//play again


//*******score board will mark place a tally mark on either computer or user board***

//This would be a container with a numbers generating on if the user won it would show. etc. 
//arrow on the right hand side

//create a variable one for computer or users score

//